n.d(t, { Z: () => j }), n(388685), n(642613), n(539854);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(592125),
    c = n(271383),
    u = n(797316),
    d = n(158776),
    f = n(885110),
    _ = n(594174),
    p = n(823379),
    h = n(700785),
    m = n(709054),
    g = n(51144),
    E = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let y = {};
class O {
    rebuild(e) {
        this.version++, (this.sections = {}), null != e && (this.allUserIds = new Set(e));
        let t = l.Z.getChannel(this.parentId);
        a()(Array.from(this.allUserIds))
            .map((e) => {
                let [n, r, i] = this.calculateNewState(e, t);
                return {
                    userId: e,
                    sectionId: n,
                    displayName: r,
                    canViewChannel: i,
                };
            })
            .sort((e, t) => m.default.compare(e.userId, t.userId))
            .sortBy((e) => e.displayName)
            .forEach((e) => {
                this.addUser(e.userId, e.sectionId, e.displayName, e.canViewChannel, !0);
            });
    }
    updateMultipleUserIds(e, t) {
        return (
            (null == t || this.guildId === t) &&
            0 !== (e = e.filter((e) => this.allUserIds.has(e))).length &&
            (e.length > 50 ? this.rebuild() : e.forEach((e) => this.updateUserId(e)), !0)
        );
    }
    updateUserId(e) {
        if (!this.allUserIds.has(e)) return !1;
        let [t, n, r] = this.findOldState(e),
            [i, a, o] = this.calculateNewState(e, l.Z.getChannel(this.parentId));
        return (t !== i || n !== a || r !== o) && (this.removeUserId(e, t), this.addUser(e, i, a, o), !0);
    }
    addUserId(e) {
        let [t, n, r] = this.calculateNewState(e, l.Z.getChannel(this.parentId));
        this.addUser(e, t, n, r);
    }
    removeUserId(e, t) {
        if ((this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t))) return !0;
        for (let t in this.sections) if (this.removeUserIdFromSection(e, t)) return !0;
        return !1;
    }
    addUser(e, t, n, r, i) {
        this.allUserIds.add(e);
        let a = _.default.getUser(e);
        if (null == a || "" === a.username) return;
        t in this.sections ||
            (this.sections[t] = {
                sectionId: t,
                usersById: {},
                userIds: [],
            });
        let o = this.sections[t];
        if (
            ((o.usersById[e] = {
                userId: e,
                displayName: n,
                canViewChannel: r,
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
            let a = r[e],
                o = i[a].displayName;
            if (o === n) {
                if (t < a) return e;
            } else if (null == o) {
                if (null != n) return e;
            } else if (null != n && n < o) return e;
        }
        return r.length;
    }
    removeUserIdFromSection(e, t) {
        let n = this.sections[t];
        return (
            null != t &&
            e in n.usersById &&
            (delete n.usersById[e], (n.userIds = n.userIds.filter((t) => t !== e)), this.version++, !0)
        );
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
            a = _.default.getUser(e),
            o = _.default.getCurrentUser(),
            s =
                (null == a ? void 0 : a.id) === (null == o ? void 0 : o.id)
                    ? f.Z.getStatus()
                    : d.Z.getStatus(e, this.guildId),
            l =
                null != a &&
                null != t &&
                h.BT({
                    permission: E.Plq.VIEW_CHANNEL,
                    user: a,
                    context: t,
                }),
            u =
                s !== E.Skl.OFFLINE && s !== E.Skl.INVISIBLE && s !== E.Skl.UNKNOWN
                    ? null != (n = null == i ? void 0 : i.hoistRoleId)
                        ? n
                        : "online"
                    : "offline",
            p = null != (r = null == i ? void 0 : i.nick) ? r : g.ZP.getName(a);
        return [u, null == p ? void 0 : p.toLowerCase(), l];
    }
    constructor(e, t, n) {
        b(this, "guildId", void 0),
            b(this, "parentId", void 0),
            b(this, "threadId", void 0),
            b(this, "version", void 0),
            b(this, "sections", void 0),
            b(this, "allUserIds", void 0),
            (this.guildId = e),
            (this.parentId = t),
            (this.threadId = n),
            (this.version = 0),
            (this.sections = {}),
            (this.allUserIds = new Set());
    }
}
function v() {
    y = {};
}
function I(e) {
    var t, n;
    if (!(e.id in y)) return !1;
    null == (t = e.addedMembers) ||
        t.forEach((t) => {
            let { userId: n } = t;
            return y[e.id].addUserId(n);
        }),
        null == (n = e.removedMemberIds) || n.forEach((t) => y[e.id].removeUserId(t));
}
function T(e) {
    let { threadId: t, guildId: n, members: r } = e,
        i = l.Z.getChannel(t),
        a = null == i ? void 0 : i.parent_id;
    null != a && ((y[t] = new O(n, a, t)), y[t].rebuild(r.map((e) => e.user_id)));
}
function S(e) {
    return N(e.user.id);
}
function A(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { user: t } = e;
            return N(t.id);
        })
        .some((e) => e);
}
function C(e) {
    return e.members.reduce((e, t) => N(t.user.id) || e, !1);
}
function N(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n in y) y[n].updateUserId(e) && (t = !0);
    return t;
}
function R(e) {
    let { presences: t } = e,
        n = a()(t)
            .map((e) => {
                var t;
                return null == (t = e.user) ? void 0 : t.id;
            })
            .filter(p.lm)
            .uniq()
            .value(),
        r = !1;
    for (let e in y) y[e].updateMultipleUserIds(n) && (r = !0);
    return r;
}
function P(e) {
    let { chunks: t } = e,
        n = !1;
    for (let { guildId: e, members: r } of t) {
        let t = r.map((e) => e.user.id);
        for (let r in y) y[r].updateMultipleUserIds(t, e) && (n = !0);
    }
    return n;
}
function D(e) {
    var t;
    let { channel: n } = e;
    if (!(n.id in y) || (null == (t = n.threadMetadata) ? void 0 : t.archived) !== !0) return !1;
    delete y[n.id];
}
function w(e) {
    let { channel: t } = e;
    if (!(t.id in y)) return !1;
    delete y[t.id];
}
function L(e) {
    let { guildId: t } = e,
        n = !1;
    for (let e in y) y[e].guildId === t && (y[e].rebuild(), (n = !0));
    return n;
}
function x(e) {
    let { channels: t } = e,
        n = new Set(t.map((e) => e.id)),
        r = !1;
    for (let e in y) n.has(y[e].parentId) && (y[e].rebuild(), (r = !0));
    return r;
}
class M extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, c.ZP, u.Z, d.Z, f.Z, _.default),
            this.syncWith([u.Z], () => {
                let e = u.Z.getSubscribedThreadIds(),
                    t = !1;
                for (let n in y) e.has(n) || (delete y[n], (t = !0));
                return t;
            }),
            this.syncWith([f.Z], () => {
                var e;
                return N(null == (e = _.default.getCurrentUser()) ? void 0 : e.id);
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
        let a = y[e];
        if (null == a) return !1;
        let o = null == (r = a.sections[t]) ? void 0 : r.usersById[n];
        return null != (i = null == o ? void 0 : o.canViewChannel) && i;
    }
}
b(M, "displayName", "ThreadMemberListStore");
let j = new M(s.Z, {
    CONNECTION_OPEN: v,
    THREAD_MEMBERS_UPDATE: I,
    THREAD_UPDATE: D,
    THREAD_DELETE: w,
    CHANNEL_UPDATES: x,
    THREAD_MEMBER_LIST_UPDATE: T,
    USER_UPDATE: S,
    PRESENCE_UPDATES: A,
    GUILD_MEMBER_ADD: S,
    GUILD_MEMBER_UPDATE: S,
    GUILD_MEMBER_REMOVE: S,
    PRESENCES_REPLACE: R,
    GUILD_MEMBERS_CHUNK_BATCH: P,
    GUILD_ROLE_UPDATE: L,
    GUILD_ROLE_DELETE: L,
    PASSIVE_UPDATE_V2: C,
});
