"use strict";
n.d(t, { A: () => N }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(734057),
    l = n(696451),
    u = n(82057),
    c = n(290863),
    d = n(461213),
    _ = n(287809),
    f = n(403362),
    p = n(488926),
    h = n(661191),
    E = n(427262),
    m = n(652215);
let g = {};
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
            [i, s, a] = this.calculateNewState(e, o.A.getChannel(this.parentId));
        return (t !== i || n !== s || r !== a) && (this.removeUserId(e, t), this.addUser(e, i, s, a), !0);
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
        let s = _.default.getUser(e);
        if (null == s || "" === s.username) return;
        t in this.sections || (this.sections[t] = { sectionId: t, usersById: {}, userIds: [] });
        let a = this.sections[t];
        if (((a.usersById[e] = { userId: e, displayName: n, canViewChannel: r }), i)) a.userIds.push(e);
        else {
            let t = this.findUserIdSortedPosition(a, e, n);
            a.userIds.splice(t, 0, e);
        }
        this.version++;
    }
    findUserIdSortedPosition(e, t, n) {
        let { userIds: r, usersById: i } = e;
        for (let e = 0; e < r.length; e++) {
            let s = r[e],
                a = i[s].displayName;
            if (a === n) {
                if (t < s) return e;
            } else if (null == a) {
                if (null != n) return e;
            } else if (null != n && n < a) return e;
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
            s = r?.id === i?.id ? d.A.getStatus() : c.A.getStatus(e, this.guildId),
            a = null != r && null != t && p.$3({ permission: m.xBc.VIEW_CHANNEL, user: r, context: t }),
            o = s !== m.clD.OFFLINE && s !== m.clD.INVISIBLE ? (n?.hoistRoleId ?? "online") : "offline",
            u = n?.nick ?? E.Ay.getName(r);
        return [o, u?.toLowerCase(), a];
    }
}
function I(e) {
    return T(e.user.id);
}
function T(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n in g) g[n].updateUserId(e) && (t = !0);
    return t;
}
function S(e) {
    let { guildId: t } = e,
        n = !1;
    for (let e in g) g[e].guildId === t && (g[e].rebuild(), (n = !0));
    return n;
}
class y extends s.Ay.Store {
    static displayName = "ThreadMemberListStore";
    initialize() {
        this.waitFor(o.A, l.Ay, u.A, c.A, d.A, _.default),
            this.syncWith([u.A], () => {
                let e = u.A.getSubscribedThreadIds(),
                    t = !1;
                for (let n in g) e.has(n) || (delete g[n], (t = !0));
                return t;
            }),
            this.syncWith([d.A], () => T(_.default.getCurrentUser()?.id));
    }
    getMemberListVersion(e) {
        return g[e]?.version;
    }
    getMemberListSections(e) {
        return g[e]?.sections;
    }
    canUserViewChannel(e, t, n) {
        let r = g[e];
        if (null == r) return !1;
        let i = r.sections[t]?.usersById[n];
        return i?.canViewChannel ?? !1;
    }
}
let N = new y(a.h, {
    CONNECTION_OPEN: function () {
        g = {};
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        if (!(e.id in g)) return !1;
        e.addedMembers?.forEach((t) => {
            let { userId: n } = t;
            return g[e.id].addUserId(n);
        }),
            e.removedMemberIds?.forEach((t) => g[e.id].removeUserId(t));
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        if (!(t.id in g) || t.threadMetadata?.archived !== !0) return !1;
        delete g[t.id];
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (!(t.id in g)) return !1;
        delete g[t.id];
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = new Set(t.map((e) => e.id)),
            r = !1;
        for (let e in g) n.has(g[e].parentId) && (g[e].rebuild(), (r = !0));
        return r;
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { threadId: t, guildId: n, members: r } = e,
            i = o.A.getChannel(t),
            s = i?.parent_id;
        null != s && ((g[t] = new A(n, s, t)), g[t].rebuild(r.map((e) => e.user_id)));
    },
    USER_UPDATE: I,
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { user: t } = e;
                return T(t.id);
            })
            .some((e) => e);
    },
    GUILD_MEMBER_ADD: I,
    GUILD_MEMBER_UPDATE: I,
    GUILD_MEMBER_REMOVE: I,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = i()(t)
                .map((e) => e.user?.id)
                .filter(f.Vq)
                .uniq()
                .value(),
            r = !1;
        for (let e in g) g[e].updateMultipleUserIds(n) && (r = !0);
        return r;
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let { guildId: e, members: r } of t) {
            let t = r.map((e) => e.user.id);
            for (let r in g) g[r].updateMultipleUserIds(t, e) && (n = !0);
        }
        return n;
    },
    GUILD_ROLE_UPDATE: S,
    GUILD_ROLE_DELETE: S,
    PASSIVE_UPDATE_V2: function (e) {
        return e.members.reduce((e, t) => T(t.user.id) || e, !1);
    },
});
