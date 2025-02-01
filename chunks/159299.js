n.d(t, { Z: () => T }), n(47120), n(653041), n(724458);
var i,
    l = n(392711),
    a = n.n(l),
    r = n(442837),
    s = n(570140),
    o = n(592125),
    c = n(271383),
    d = n(797316),
    u = n(158776),
    h = n(885110),
    p = n(594174),
    m = n(823379),
    f = n(700785),
    g = n(709054),
    _ = n(51144),
    C = n(981631);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let v = {};
class E {
    rebuild(e) {
        this.version++, (this.sections = {}), null != e && (this.allUserIds = new Set(e));
        let t = o.Z.getChannel(this.parentId);
        a()(Array.from(this.allUserIds))
            .map((e) => {
                let [n, i, l] = this.calculateNewState(e, t);
                return {
                    userId: e,
                    sectionId: n,
                    displayName: i,
                    canViewChannel: l
                };
            })
            .sort((e, t) => g.default.compare(e.userId, t.userId))
            .sortBy((e) => e.displayName)
            .forEach((e) => {
                this.addUser(e.userId, e.sectionId, e.displayName, e.canViewChannel, !0);
            });
    }
    updateMultipleUserIds(e, t) {
        return (null == t || this.guildId === t) && 0 !== (e = e.filter((e) => this.allUserIds.has(e))).length && (e.length > 50 ? this.rebuild() : e.forEach((e) => this.updateUserId(e)), !0);
    }
    updateUserId(e) {
        if (!this.allUserIds.has(e)) return !1;
        let [t, n, i] = this.findOldState(e),
            [l, a, r] = this.calculateNewState(e, o.Z.getChannel(this.parentId));
        return (t !== l || n !== a || i !== r) && (this.removeUserId(e, t), this.addUser(e, l, a, r), !0);
    }
    addUserId(e) {
        let [t, n, i] = this.calculateNewState(e, o.Z.getChannel(this.parentId));
        this.addUser(e, t, n, i);
    }
    removeUserId(e, t) {
        if ((this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t))) return !0;
        for (let t in this.sections) if (this.removeUserIdFromSection(e, t)) return !0;
        return !1;
    }
    addUser(e, t, n, i, l) {
        this.allUserIds.add(e);
        let a = p.default.getUser(e);
        if (null == a || '' === a.username) return;
        t in this.sections ||
            (this.sections[t] = {
                sectionId: t,
                usersById: {},
                userIds: []
            });
        let r = this.sections[t];
        if (
            ((r.usersById[e] = {
                userId: e,
                displayName: n,
                canViewChannel: i
            }),
            l)
        )
            r.userIds.push(e);
        else {
            let t = this.findUserIdSortedPosition(r, e, n);
            r.userIds.splice(t, 0, e);
        }
        this.version++;
    }
    findUserIdSortedPosition(e, t, n) {
        let { userIds: i, usersById: l } = e;
        for (let e = 0; e < i.length; e++) {
            let a = i[e],
                r = l[a].displayName;
            if (r === n) {
                if (t < a) return e;
            } else if (null == r) {
                if (null != n) return e;
            } else if (null != n && n < r) return e;
        }
        return i.length;
    }
    removeUserIdFromSection(e, t) {
        let n = this.sections[t];
        return null != t && e in n.usersById && (delete n.usersById[e], (n.userIds = n.userIds.filter((t) => t !== e)), this.version++, !0);
    }
    findOldState(e) {
        for (let t in this.sections) {
            let n = this.sections[t];
            if (e in n.usersById) {
                let i = n.usersById[e];
                return [t, i.displayName, i.canViewChannel];
            }
        }
        return [void 0, void 0, !1];
    }
    calculateNewState(e, t) {
        var n, i;
        let l = c.ZP.getMember(this.guildId, e),
            a = p.default.getUser(e),
            r = p.default.getCurrentUser(),
            s = (null == a ? void 0 : a.id) === (null == r ? void 0 : r.id) ? h.Z.getStatus() : u.Z.getStatus(e, this.guildId),
            o =
                null != a &&
                null != t &&
                f.BT({
                    permission: C.Plq.VIEW_CHANNEL,
                    user: a,
                    context: t
                }),
            d = s !== C.Skl.OFFLINE && s !== C.Skl.INVISIBLE && s !== C.Skl.UNKNOWN ? (null !== (n = null == l ? void 0 : l.hoistRoleId) && void 0 !== n ? n : 'online') : 'offline',
            m = null !== (i = null == l ? void 0 : l.nick) && void 0 !== i ? i : _.ZP.getName(a);
        return [d, null == m ? void 0 : m.toLowerCase(), o];
    }
    constructor(e, t, n) {
        x(this, 'guildId', void 0), x(this, 'parentId', void 0), x(this, 'threadId', void 0), x(this, 'version', void 0), x(this, 'sections', void 0), x(this, 'allUserIds', void 0), (this.guildId = e), (this.parentId = t), (this.threadId = n), (this.version = 0), (this.sections = {}), (this.allUserIds = new Set());
    }
}
function I(e) {
    return b(e.user.id);
}
function b(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n in v) v[n].updateUserId(e) && (t = !0);
    return t;
}
function Z(e) {
    let { guildId: t } = e,
        n = !1;
    for (let e in v) v[e].guildId === t && (v[e].rebuild(), (n = !0));
    return n;
}
class N extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, c.ZP, d.Z, u.Z, h.Z, p.default),
            this.syncWith([d.Z], () => {
                let e = d.Z.getSubscribedThreadIds(),
                    t = !1;
                for (let n in v) e.has(n) || (delete v[n], (t = !0));
                return t;
            }),
            this.syncWith([h.Z], () => {
                var e;
                return b(null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
            });
    }
    getMemberListVersion(e) {
        var t;
        return null === (t = v[e]) || void 0 === t ? void 0 : t.version;
    }
    getMemberListSections(e) {
        var t;
        return null === (t = v[e]) || void 0 === t ? void 0 : t.sections;
    }
    canUserViewChannel(e, t, n) {
        var i, l;
        let a = v[e];
        if (null == a) return !1;
        let r = null === (i = a.sections[t]) || void 0 === i ? void 0 : i.usersById[n];
        return null !== (l = null == r ? void 0 : r.canViewChannel) && void 0 !== l && l;
    }
}
x(N, 'displayName', 'ThreadMemberListStore');
let T = new N(s.Z, {
    CONNECTION_OPEN: function () {
        v = {};
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        var t, n;
        if (!(e.id in v)) return !1;
        null === (t = e.addedMembers) ||
            void 0 === t ||
            t.forEach((t) => {
                let { userId: n } = t;
                return v[e.id].addUserId(n);
            }),
            null === (n = e.removedMemberIds) || void 0 === n || n.forEach((t) => v[e.id].removeUserId(t));
    },
    THREAD_UPDATE: function (e) {
        var t;
        let { channel: n } = e;
        if (!(n.id in v) || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.archived) !== !0) return !1;
        delete v[n.id];
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (!(t.id in v)) return !1;
        delete v[t.id];
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = new Set(t.map((e) => e.id)),
            i = !1;
        for (let e in v) n.has(v[e].parentId) && (v[e].rebuild(), (i = !0));
        return i;
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { threadId: t, guildId: n, members: i } = e,
            l = o.Z.getChannel(t),
            a = null == l ? void 0 : l.parent_id;
        null != a && ((v[t] = new E(n, a, t)), v[t].rebuild(i.map((e) => e.user_id)));
    },
    USER_UPDATE: I,
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { user: t } = e;
                return b(t.id);
            })
            .some((e) => e);
    },
    GUILD_MEMBER_ADD: I,
    GUILD_MEMBER_UPDATE: I,
    GUILD_MEMBER_REMOVE: I,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = a()(t)
                .map((e) => {
                    var t;
                    return null === (t = e.user) || void 0 === t ? void 0 : t.id;
                })
                .filter(m.lm)
                .uniq()
                .value(),
            i = !1;
        for (let e in v) v[e].updateMultipleUserIds(n) && (i = !0);
        return i;
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let { guildId: e, members: i } of t) {
            let t = i.map((e) => e.user.id);
            for (let i in v) v[i].updateMultipleUserIds(t, e) && (n = !0);
        }
        return n;
    },
    GUILD_ROLE_UPDATE: Z,
    GUILD_ROLE_DELETE: Z,
    PASSIVE_UPDATE_V2: function (e) {
        return e.members.reduce((e, t) => b(t.user.id) || e, !1);
    }
});
