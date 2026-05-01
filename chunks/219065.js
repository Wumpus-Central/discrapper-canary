n.d(t, { A: () => O }), n(321073);
var i = n(735438),
    l = n.n(i),
    a = n(17928),
    r = n(228366),
    s = n(734057),
    o = n(696451),
    d = n(82057),
    u = n(290863),
    c = n(461213),
    h = n(287809),
    E = n(403362),
    A = n(488926),
    _ = n(935208),
    p = n(427262),
    g = n(652215);
let f = {};
class I {
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
        let t = s.A.getChannel(this.parentId);
        l()(Array.from(this.allUserIds))
            .map((e) => {
                let [n, i, l] = this.calculateNewState(e, t);
                return { userId: e, sectionId: n, displayName: i, canViewChannel: l };
            })
            .sort((e, t) => _.default.compare(e.userId, t.userId))
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
            [l, a, r] = this.calculateNewState(e, s.A.getChannel(this.parentId));
        return (t !== l || n !== a || i !== r) && (this.removeUserId(e, t), this.addUser(e, l, a, r), !0);
    }
    addUserId(e) {
        let [t, n, i] = this.calculateNewState(e, s.A.getChannel(this.parentId));
        this.addUser(e, t, n, i);
    }
    removeUserId(e, t) {
        if ((this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t))) return !0;
        for (let t in this.sections) if (this.removeUserIdFromSection(e, t)) return !0;
        return !1;
    }
    addUser(e, t, n, i, l) {
        this.allUserIds.add(e);
        let a = h.default.getUser(e);
        if (null == a || "" === a.username) return;
        t in this.sections || (this.sections[t] = { sectionId: t, usersById: {}, userIds: [] });
        let r = this.sections[t];
        if (((r.usersById[e] = { userId: e, displayName: n, canViewChannel: i }), l)) r.userIds.push(e);
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
            i = h.default.getUser(e),
            l = h.default.getCurrentUser(),
            a = i?.id === l?.id ? c.A.getStatus() : u.A.getStatus(e, this.guildId),
            r = null != i && null != t && A.$3({ permission: g.xBc.VIEW_CHANNEL, user: i, context: t }),
            s = a !== g.clD.OFFLINE && a !== g.clD.INVISIBLE ? (n?.hoistRoleId ?? "online") : "offline",
            d = n?.nick ?? p.Ay.getName(i);
        return [s, d?.toLowerCase(), r];
    }
}
function S(e) {
    return T(e.user.id);
}
function T(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n in f) f[n].updateUserId(e) && (t = !0);
    return t;
}
function m(e) {
    let { guildId: t } = e,
        n = !1;
    for (let e in f) f[e].guildId === t && (f[e].rebuild(), (n = !0));
    return n;
}
class C extends a.Ay.Store {
    static displayName = "ThreadMemberListStore";
    initialize() {
        this.waitFor(s.A, o.Ay, d.A, u.A, c.A, h.default),
            this.syncWith([d.A], () => {
                let e = d.A.getSubscribedThreadIds(),
                    t = !1;
                for (let n in f) e.has(n) || (delete f[n], (t = !0));
                return t;
            }),
            this.syncWith([c.A], () => T(h.default.getCurrentUser()?.id));
    }
    getMemberListVersion(e) {
        return f[e]?.version;
    }
    getMemberListSections(e) {
        return f[e]?.sections;
    }
    canUserViewChannel(e, t, n) {
        let i = f[e];
        if (null == i) return !1;
        let l = i.sections[t]?.usersById[n];
        return l?.canViewChannel ?? !1;
    }
}
let O = new C(r.h, {
    CONNECTION_OPEN: function () {
        f = {};
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        if (!(e.id in f)) return !1;
        e.addedMembers?.forEach((t) => {
            let { userId: n } = t;
            return f[e.id].addUserId(n);
        }),
            e.removedMemberIds?.forEach((t) => f[e.id].removeUserId(t));
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        if (!(t.id in f) || t.threadMetadata?.archived !== !0) return !1;
        delete f[t.id];
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (!(t.id in f)) return !1;
        delete f[t.id];
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = new Set(t.map((e) => e.id)),
            i = !1;
        for (let e in f) n.has(f[e].parentId) && (f[e].rebuild(), (i = !0));
        return i;
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { threadId: t, guildId: n, members: i } = e,
            l = s.A.getChannel(t),
            a = l?.parent_id;
        null != a && ((f[t] = new I(n, a, t)), f[t].rebuild(i.map((e) => e.user_id)));
    },
    USER_UPDATE: S,
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { user: t } = e;
                return T(t.id);
            })
            .some((e) => e);
    },
    GUILD_MEMBER_ADD: S,
    GUILD_MEMBER_UPDATE: S,
    GUILD_MEMBER_REMOVE: S,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = l()(t)
                .map((e) => e.user?.id)
                .filter(E.Vq)
                .uniq()
                .value(),
            i = !1;
        for (let e in f) f[e].updateMultipleUserIds(n) && (i = !0);
        return i;
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let { guildId: e, members: i } of t) {
            let t = i.map((e) => e.user.id);
            for (let i in f) f[i].updateMultipleUserIds(t, e) && (n = !0);
        }
        return n;
    },
    GUILD_ROLE_UPDATE: m,
    GUILD_ROLE_DELETE: m,
    PASSIVE_UPDATE_V2: function (e) {
        return e.members.reduce((e, t) => T(t.user.id) || e, !1);
    },
});
