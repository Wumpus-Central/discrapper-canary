"use strict";
n.d(t, { A: () => P }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(734057),
    l = n(696451),
    u = n(82057),
    c = n(290863),
    d = n(461213),
    _ = n(287809),
    f = n(403362),
    p = n(488926),
    h = n(661191),
    m = n(427262),
    g = n(652215);
let E = {};
class A {
    guildId;
    parentId;
    threadId;
    version = 0;
    sections = {};
    allUserIds = new Set();
    constructor(e, t, n) {
        (this.guildId = e), (this.parentId = t), (this.threadId = n);
    }
    rebuild(e) {
        this.version++, (this.sections = {}), null != e && (this.allUserIds = new Set(e));
        let t = o.A.getChannel(this.parentId);
        i()(Array.from(this.allUserIds))
            .map((e) => {
                let [n, r, i] = this.calculateNewState(e, t);
                return { userId: e, sectionId: n, displayName: r, canViewChannel: i };
            })
            .sort((e, t) => h.default.compare(e.userId, t.userId))
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
            [i, a, s] = this.calculateNewState(e, o.A.getChannel(this.parentId));
        return (t !== i || n !== a || r !== s) && (this.removeUserId(e, t), this.addUser(e, i, a, s), !0);
    }
    addUserId(e) {
        let [t, n, r] = this.calculateNewState(e, o.A.getChannel(this.parentId));
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
        t in this.sections || (this.sections[t] = { sectionId: t, usersById: {}, userIds: [] });
        let s = this.sections[t];
        if (((s.usersById[e] = { userId: e, displayName: n, canViewChannel: r }), i)) s.userIds.push(e);
        else {
            let t = this.findUserIdSortedPosition(s, e, n);
            s.userIds.splice(t, 0, e);
        }
        this.version++;
    }
    findUserIdSortedPosition(e, t, n) {
        let { userIds: r, usersById: i } = e;
        for (let e = 0; e < r.length; e++) {
            let a = r[e],
                s = i[a].displayName;
            if (s === n) {
                if (t < a) return e;
            } else if (null == s) {
                if (null != n) return e;
            } else if (null != n && n < s) return e;
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
        let n = l.Ay.getMember(this.guildId, e),
            r = _.default.getUser(e),
            i = _.default.getCurrentUser(),
            a = r?.id === i?.id ? d.A.getStatus() : c.A.getStatus(e, this.guildId),
            s = null != r && null != t && p.$3({ permission: g.xBc.VIEW_CHANNEL, user: r, context: t }),
            o =
                a !== g.clD.OFFLINE && a !== g.clD.INVISIBLE && a !== g.clD.UNKNOWN
                    ? (n?.hoistRoleId ?? "online")
                    : "offline",
            u = n?.nick ?? m.Ay.getName(r);
        return [o, u?.toLowerCase(), s];
    }
}
function I() {
    E = {};
}
function T(e) {
    if (!(e.id in E)) return !1;
    e.addedMembers?.forEach((t) => {
        let { userId: n } = t;
        return E[e.id].addUserId(n);
    }),
        e.removedMemberIds?.forEach((t) => E[e.id].removeUserId(t));
}
function y(e) {
    let { threadId: t, guildId: n, members: r } = e,
        i = o.A.getChannel(t),
        a = i?.parent_id;
    null != a && ((E[t] = new A(n, a, t)), E[t].rebuild(r.map((e) => e.user_id)));
}
function S(e) {
    return b(e.user.id);
}
function v(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { user: t } = e;
            return b(t.id);
        })
        .some((e) => e);
}
function C(e) {
    return e.members.reduce((e, t) => b(t.user.id) || e, !1);
}
function b(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n in E) E[n].updateUserId(e) && (t = !0);
    return t;
}
function N(e) {
    let { presences: t } = e,
        n = i()(t)
            .map((e) => e.user?.id)
            .filter(f.Vq)
            .uniq()
            .value(),
        r = !1;
    for (let e in E) E[e].updateMultipleUserIds(n) && (r = !0);
    return r;
}
function R(e) {
    let { chunks: t } = e,
        n = !1;
    for (let { guildId: e, members: r } of t) {
        let t = r.map((e) => e.user.id);
        for (let r in E) E[r].updateMultipleUserIds(t, e) && (n = !0);
    }
    return n;
}
function O(e) {
    let { channel: t } = e;
    if (!(t.id in E) || t.threadMetadata?.archived !== !0) return !1;
    delete E[t.id];
}
function D(e) {
    let { channel: t } = e;
    if (!(t.id in E)) return !1;
    delete E[t.id];
}
function L(e) {
    let { guildId: t } = e,
        n = !1;
    for (let e in E) E[e].guildId === t && (E[e].rebuild(), (n = !0));
    return n;
}
function w(e) {
    let { channels: t } = e,
        n = new Set(t.map((e) => e.id)),
        r = !1;
    for (let e in E) n.has(E[e].parentId) && (E[e].rebuild(), (r = !0));
    return r;
}
class x extends a.Ay.Store {
    static displayName = "ThreadMemberListStore";
    initialize() {
        this.waitFor(o.A, l.Ay, u.A, c.A, d.A, _.default),
            this.syncWith([u.A], () => {
                let e = u.A.getSubscribedThreadIds(),
                    t = !1;
                for (let n in E) e.has(n) || (delete E[n], (t = !0));
                return t;
            }),
            this.syncWith([d.A], () => b(_.default.getCurrentUser()?.id));
    }
    getMemberListVersion(e) {
        return E[e]?.version;
    }
    getMemberListSections(e) {
        return E[e]?.sections;
    }
    canUserViewChannel(e, t, n) {
        let r = E[e];
        if (null == r) return !1;
        let i = r.sections[t]?.usersById[n];
        return i?.canViewChannel ?? !1;
    }
}
let P = new x(s.h, {
    CONNECTION_OPEN: I,
    THREAD_MEMBERS_UPDATE: T,
    THREAD_UPDATE: O,
    THREAD_DELETE: D,
    CHANNEL_UPDATES: w,
    THREAD_MEMBER_LIST_UPDATE: y,
    USER_UPDATE: S,
    PRESENCE_UPDATES: v,
    GUILD_MEMBER_ADD: S,
    GUILD_MEMBER_UPDATE: S,
    GUILD_MEMBER_REMOVE: S,
    PRESENCES_REPLACE: N,
    GUILD_MEMBERS_CHUNK_BATCH: R,
    GUILD_ROLE_UPDATE: L,
    GUILD_ROLE_DELETE: L,
    PASSIVE_UPDATE_V2: C,
});
