n.d(t, { Z: () => N }), n(47120), n(230036), n(653041);
var r,
    i = n(392711),
    l = n.n(i),
    o = n(442837),
    a = n(570140),
    s = n(592125),
    c = n(271383),
    u = n(797316),
    d = n(158776),
    p = n(885110),
    h = n(594174),
    f = n(823379),
    m = n(700785),
    g = n(709054),
    b = n(51144),
    _ = n(981631);
function C(e, t, n) {
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
let y = {};
class x {
    rebuild(e) {
        this.version++, (this.sections = {}), null != e && (this.allUserIds = new Set(e));
        let t = s.Z.getChannel(this.parentId);
        l()(Array.from(this.allUserIds))
            .map((e) => {
                let [n, r, i] = this.calculateNewState(e, t);
                return {
                    userId: e,
                    sectionId: n,
                    displayName: r,
                    canViewChannel: i
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
        let [t, n, r] = this.findOldState(e),
            [i, l, o] = this.calculateNewState(e, s.Z.getChannel(this.parentId));
        return (t !== i || n !== l || r !== o) && (this.removeUserId(e, t), this.addUser(e, i, l, o), !0);
    }
    addUserId(e) {
        let [t, n, r] = this.calculateNewState(e, s.Z.getChannel(this.parentId));
        this.addUser(e, t, n, r);
    }
    removeUserId(e, t) {
        if ((this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t))) return !0;
        for (let t in this.sections) if (this.removeUserIdFromSection(e, t)) return !0;
        return !1;
    }
    addUser(e, t, n, r, i) {
        this.allUserIds.add(e);
        let l = h.default.getUser(e);
        if (null == l || '' === l.username) return;
        t in this.sections ||
            (this.sections[t] = {
                sectionId: t,
                usersById: {},
                userIds: []
            });
        let o = this.sections[t];
        if (
            ((o.usersById[e] = {
                userId: e,
                displayName: n,
                canViewChannel: r
            }),
            i)
        )
            o.userIds.push(e);
        else {
            let t = this.findUserIdSortedPosition(o, e, n);
            o.userIds.splice(t, 0, e);
        }
        this.version++;
    }
    findUserIdSortedPosition(e, t, n) {
        let { userIds: r, usersById: i } = e;
        for (let e = 0; e < r.length; e++) {
            let l = r[e],
                o = i[l].displayName;
            if (o === n) {
                if (t < l) return e;
            } else if (null == o) {
                if (null != n) return e;
            } else if (null != n && n < o) return e;
        }
        return r.length;
    }
    removeUserIdFromSection(e, t) {
        let n = this.sections[t];
        return null != t && e in n.usersById && (delete n.usersById[e], (n.userIds = n.userIds.filter((t) => t !== e)), this.version++, !0);
    }
    findOldState(e) {
        for (let t in this.sections) {
            let n = this.sections[t];
            if (e in n.usersById) {
                let r = n.usersById[e];
                return [t, r.displayName, r.canViewChannel];
            }
        }
        return [void 0, void 0, !1];
    }
    calculateNewState(e, t) {
        var n, r;
        let i = c.ZP.getMember(this.guildId, e),
            l = h.default.getUser(e),
            o = h.default.getCurrentUser(),
            a = (null == l ? void 0 : l.id) === (null == o ? void 0 : o.id) ? p.Z.getStatus() : d.Z.getStatus(e, this.guildId),
            s =
                null != l &&
                null != t &&
                m.BT({
                    permission: _.Plq.VIEW_CHANNEL,
                    user: l,
                    context: t
                }),
            u = a !== _.Skl.OFFLINE && a !== _.Skl.INVISIBLE && a !== _.Skl.UNKNOWN ? (null != (n = null == i ? void 0 : i.hoistRoleId) ? n : 'online') : 'offline',
            f = null != (r = null == i ? void 0 : i.nick) ? r : b.ZP.getName(l);
        return [u, null == f ? void 0 : f.toLowerCase(), s];
    }
    constructor(e, t, n) {
        C(this, 'guildId', void 0), C(this, 'parentId', void 0), C(this, 'threadId', void 0), C(this, 'version', void 0), C(this, 'sections', void 0), C(this, 'allUserIds', void 0), (this.guildId = e), (this.parentId = t), (this.threadId = n), (this.version = 0), (this.sections = {}), (this.allUserIds = new Set());
    }
}
function v(e) {
    return j(e.user.id);
}
function j(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n in y) y[n].updateUserId(e) && (t = !0);
    return t;
}
function O(e) {
    let { guildId: t } = e,
        n = !1;
    for (let e in y) y[e].guildId === t && (y[e].rebuild(), (n = !0));
    return n;
}
class E extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, c.ZP, u.Z, d.Z, p.Z, h.default),
            this.syncWith([u.Z], () => {
                let e = u.Z.getSubscribedThreadIds(),
                    t = !1;
                for (let n in y) e.has(n) || (delete y[n], (t = !0));
                return t;
            }),
            this.syncWith([p.Z], () => {
                var e;
                return j(null == (e = h.default.getCurrentUser()) ? void 0 : e.id);
            });
    }
    getMemberListVersion(e) {
        var t;
        return null == (t = y[e]) ? void 0 : t.version;
    }
    getMemberListSections(e) {
        var t;
        return null == (t = y[e]) ? void 0 : t.sections;
    }
    canUserViewChannel(e, t, n) {
        var r, i;
        let l = y[e];
        if (null == l) return !1;
        let o = null == (r = l.sections[t]) ? void 0 : r.usersById[n];
        return null != (i = null == o ? void 0 : o.canViewChannel) && i;
    }
}
C(E, 'displayName', 'ThreadMemberListStore');
let N = new E(a.Z, {
    CONNECTION_OPEN: function () {
        y = {};
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        var t, n;
        if (!(e.id in y)) return !1;
        null == (t = e.addedMembers) ||
            t.forEach((t) => {
                let { userId: n } = t;
                return y[e.id].addUserId(n);
            }),
            null == (n = e.removedMemberIds) || n.forEach((t) => y[e.id].removeUserId(t));
    },
    THREAD_UPDATE: function (e) {
        var t;
        let { channel: n } = e;
        if (!(n.id in y) || (null == (t = n.threadMetadata) ? void 0 : t.archived) !== !0) return !1;
        delete y[n.id];
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (!(t.id in y)) return !1;
        delete y[t.id];
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = new Set(t.map((e) => e.id)),
            r = !1;
        for (let e in y) n.has(y[e].parentId) && (y[e].rebuild(), (r = !0));
        return r;
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { threadId: t, guildId: n, members: r } = e,
            i = s.Z.getChannel(t),
            l = null == i ? void 0 : i.parent_id;
        null != l && ((y[t] = new x(n, l, t)), y[t].rebuild(r.map((e) => e.user_id)));
    },
    USER_UPDATE: v,
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { user: t } = e;
                return j(t.id);
            })
            .some((e) => e);
    },
    GUILD_MEMBER_ADD: v,
    GUILD_MEMBER_UPDATE: v,
    GUILD_MEMBER_REMOVE: v,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = l()(t)
                .map((e) => {
                    var t;
                    return null == (t = e.user) ? void 0 : t.id;
                })
                .filter(f.lm)
                .uniq()
                .value(),
            r = !1;
        for (let e in y) y[e].updateMultipleUserIds(n) && (r = !0);
        return r;
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let { guildId: e, members: r } of t) {
            let t = r.map((e) => e.user.id);
            for (let r in y) y[r].updateMultipleUserIds(t, e) && (n = !0);
        }
        return n;
    },
    GUILD_ROLE_UPDATE: O,
    GUILD_ROLE_DELETE: O,
    PASSIVE_UPDATE_V2: function (e) {
        return e.members.reduce((e, t) => j(t.user.id) || e, !1);
    }
});
