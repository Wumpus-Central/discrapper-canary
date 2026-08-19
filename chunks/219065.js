"use strict";
n.d(t, { A: () => C }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(734057),
    o = n(696451),
    d = n(63238),
    c = n(290863),
    u = n(461213),
    _ = n(287809),
    E = n(403362),
    A = n(488926),
    h = n(935208),
    I = n(427262),
    f = n(652215);
let p = {};
class T {
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
        let t = l.A.getChannel(this.parentId);
        r()(Array.from(this.allUserIds))
            .map((e) => {
                let [n, i, r] = this.calculateNewState(e, t);
                return { userId: e, sectionId: n, displayName: i, canViewChannel: r };
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
        let [t, n, i] = this.findOldState(e),
            [r, a, s] = this.calculateNewState(e, l.A.getChannel(this.parentId));
        return (t !== r || n !== a || i !== s) && (this.removeUserId(e, t), this.addUser(e, r, a, s), !0);
    }
    addUserId(e) {
        let [t, n, i] = this.calculateNewState(e, l.A.getChannel(this.parentId));
        this.addUser(e, t, n, i);
    }
    removeUserId(e, t) {
        if ((this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t))) return !0;
        for (let t in this.sections) if (this.removeUserIdFromSection(e, t)) return !0;
        return !1;
    }
    addUser(e, t, n, i, r) {
        this.allUserIds.add(e);
        let a = _.default.getUser(e);
        if (null == a || "" === a.username) return;
        t in this.sections || (this.sections[t] = { sectionId: t, usersById: {}, userIds: [] });
        let s = this.sections[t];
        if (((s.usersById[e] = { userId: e, displayName: n, canViewChannel: i }), r)) s.userIds.push(e);
        else {
            let t = this.findUserIdSortedPosition(s, e, n);
            s.userIds.splice(t, 0, e);
        }
        this.version++;
    }
    findUserIdSortedPosition(e, t, n) {
        let { userIds: i, usersById: r } = e;
        for (let e = 0; e < i.length; e++) {
            let a = i[e],
                s = r[a].displayName;
            if (s === n) {
                if (t < a) return e;
            } else if (null == s) {
                if (null != n) return e;
            } else if (null != n && n < s) return e;
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
        let n = o.Ay.getMember(this.guildId, e),
            i = _.default.getUser(e),
            r = _.default.getCurrentUser(),
            a = i?.id === r?.id ? u.A.getStatus() : c.A.getStatus(e, this.guildId),
            s = null != i && null != t && A.$3({ permission: f.xBc.VIEW_CHANNEL, user: i, context: t }),
            l = a !== f.clD.OFFLINE && a !== f.clD.INVISIBLE ? (n?.hoistRoleId ?? "online") : "offline",
            d = n?.nick ?? I.Ay.getName(i);
        return [l, d?.toLowerCase(), s];
    }
}
function m(e) {
    return g(e.user.id);
}
function g(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n in p) p[n].updateUserId(e) && (t = !0);
    return t;
}
function S(e) {
    let { guildId: t } = e,
        n = !1;
    for (let e in p) p[e].guildId === t && (p[e].rebuild(), (n = !0));
    return n;
}
class N extends a.Ay.Store {
    static displayName = "ThreadMemberListStore";
    initialize() {
        this.waitFor(l.A, o.Ay, d.A, c.A, u.A, _.default),
            this.syncWith([d.A], () => {
                let e = d.A.getSubscribedThreadIds(),
                    t = !1;
                for (let n in p) e.has(n) || (delete p[n], (t = !0));
                return t;
            }),
            this.syncWith([u.A], () => g(_.default.getCurrentUser()?.id));
    }
    getMemberListVersion(e) {
        return p[e]?.version;
    }
    getMemberListSections(e) {
        return p[e]?.sections;
    }
    canUserViewChannel(e, t, n) {
        let i = p[e];
        if (null == i) return !1;
        let r = i.sections[t]?.usersById[n];
        return r?.canViewChannel ?? !1;
    }
}
let C = new N(s.h, {
    CONNECTION_OPEN: function () {
        p = {};
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        if (!(e.id in p)) return !1;
        e.addedMembers?.forEach((t) => {
            let { userId: n } = t;
            return p[e.id].addUserId(n);
        }),
            e.removedMemberIds?.forEach((t) => p[e.id].removeUserId(t));
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        if (!(t.id in p) || t.threadMetadata?.archived !== !0) return !1;
        delete p[t.id];
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (!(t.id in p)) return !1;
        delete p[t.id];
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = new Set(t.map((e) => e.id)),
            i = !1;
        for (let e in p) n.has(p[e].parentId) && (p[e].rebuild(), (i = !0));
        return i;
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { threadId: t, guildId: n, members: i } = e,
            r = l.A.getChannel(t),
            a = r?.parent_id;
        null != a && ((p[t] = new T(n, a, t)), p[t].rebuild(i.map((e) => e.user_id)));
    },
    USER_UPDATE: m,
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { user: t } = e;
                return g(t.id);
            })
            .some((e) => e);
    },
    GUILD_MEMBER_ADD: m,
    GUILD_MEMBER_UPDATE: m,
    GUILD_MEMBER_REMOVE: m,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = r()(t)
                .map((e) => e.user?.id)
                .filter(E.Vq)
                .uniq()
                .value(),
            i = !1;
        for (let e in p) p[e].updateMultipleUserIds(n) && (i = !0);
        return i;
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let { guildId: e, members: i } of t) {
            let t = i.map((e) => e.user.id);
            for (let i in p) p[i].updateMultipleUserIds(t, e) && (n = !0);
        }
        return n;
    },
    GUILD_ROLE_UPDATE: S,
    GUILD_ROLE_DELETE: S,
    PASSIVE_UPDATE_V2: function (e) {
        return e.members.reduce((e, t) => g(t.user.id) || e, !1);
    },
});
