"use strict";
n.d(t, { A: () => y }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(734057),
    l = n(696451),
    u = n(63238),
    c = n(290863),
    d = n(461213),
    _ = n(287809),
    f = n(403362),
    h = n(488926),
    p = n(935208),
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
        r()(Array.from(this.allUserIds))
            .map((e) => {
                let [n, i, r] = this.calculateNewState(e, t);
                return { userId: e, sectionId: n, displayName: i, canViewChannel: r };
            })
            .sort((e, t) => p.default.compare(e.userId, t.userId))
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
        let [t, n, i] = this.findOldState(e),
            [r, s, a] = this.calculateNewState(e, o.A.getChannel(this.parentId));
        return (t !== r || n !== s || i !== a) && (this.removeUserId(e, t), this.addUser(e, r, s, a), !0);
    }
    addUserId(e) {
        let [t, n, i] = this.calculateNewState(e, o.A.getChannel(this.parentId));
        this.addUser(e, t, n, i);
    }
    removeUserId(e, t) {
        if ((this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t))) return !0;
        for (let t in this.sections) if (this.removeUserIdFromSection(e, t)) return !0;
        return !1;
    }
    addUser(e, t, n, i, r) {
        this.allUserIds.add(e);
        let s = _.default.getUser(e);
        if (null == s || "" === s.username) return;
        t in this.sections || (this.sections[t] = { sectionId: t, usersById: {}, userIds: [] });
        let a = this.sections[t];
        if (((a.usersById[e] = { userId: e, displayName: n, canViewChannel: i }), r)) a.userIds.push(e);
        else {
            let t = this.findUserIdSortedPosition(a, e, n);
            a.userIds.splice(t, 0, e);
        }
        this.version++;
    }
    findUserIdSortedPosition(e, t, n) {
        let { userIds: i, usersById: r } = e;
        for (let e = 0; e < i.length; e++) {
            let s = i[e],
                a = r[s].displayName;
            if (a === n) {
                if (t < s) return e;
            } else if (null == a) {
                if (null != n) return e;
            } else if (null != n && n < a) return e;
        }
        return i.length;
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
                let i = n.usersById[e];
                return [t, i.displayName, i.canViewChannel];
            }
        }
        return [void 0, void 0, !1];
    }
    calculateNewState(e, t) {
        let n = l.Ay.getMember(this.guildId, e),
            i = _.default.getUser(e),
            r = _.default.getCurrentUser(),
            s = i?.id === r?.id ? d.A.getStatus() : c.A.getStatus(e, this.guildId),
            a = null != i && null != t && h.$3({ permission: m.xBc.VIEW_CHANNEL, user: i, context: t }),
            o = s !== m.clD.OFFLINE && s !== m.clD.INVISIBLE ? (n?.hoistRoleId ?? "online") : "offline",
            u = n?.nick ?? E.Ay.getName(i);
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
class N extends s.Ay.Store {
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
        let i = g[e];
        if (null == i) return !1;
        let r = i.sections[t]?.usersById[n];
        return r?.canViewChannel ?? !1;
    }
}
let y = new N(a.h, {
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
            i = !1;
        for (let e in g) n.has(g[e].parentId) && (g[e].rebuild(), (i = !0));
        return i;
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { threadId: t, guildId: n, members: i } = e,
            r = o.A.getChannel(t),
            s = r?.parent_id;
        null != s && ((g[t] = new A(n, s, t)), g[t].rebuild(i.map((e) => e.user_id)));
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
            n = r()(t)
                .map((e) => e.user?.id)
                .filter(f.Vq)
                .uniq()
                .value(),
            i = !1;
        for (let e in g) g[e].updateMultipleUserIds(n) && (i = !0);
        return i;
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let { guildId: e, members: i } of t) {
            let t = i.map((e) => e.user.id);
            for (let i in g) g[i].updateMultipleUserIds(t, e) && (n = !0);
        }
        return n;
    },
    GUILD_ROLE_UPDATE: S,
    GUILD_ROLE_DELETE: S,
    PASSIVE_UPDATE_V2: function (e) {
        return e.members.reduce((e, t) => T(t.user.id) || e, !1);
    },
});
