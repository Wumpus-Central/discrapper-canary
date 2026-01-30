n.d(t, {
    A: () => j,
}),
    n(896048),
    n(638769),
    n(321073);
var r,
    i = n(735438),
    a = n.n(i),
    o = n(311907),
    s = n(73153),
    l = n(734057),
    c = n(696451),
    u = n(82057),
    d = n(290863),
    f = n(461213),
    p = n(287809),
    _ = n(403362),
    h = n(488926),
    m = n(661191),
    g = n(427262),
    E = n(652215);

function y(e, t, n) {
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
let b = {};
class O {
    rebuild(e) {
        this.version++, (this.sections = {}), null != e && (this.allUserIds = new Set(e));
        let t = l.A.getChannel(this.parentId);
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
            [i, a, o] = this.calculateNewState(e, l.A.getChannel(this.parentId));
        return (t !== i || n !== a || r !== o) && (this.removeUserId(e, t), this.addUser(e, i, a, o), !0);
    }
    addUserId(e) {
        let [t, n, r] = this.calculateNewState(e, l.A.getChannel(this.parentId));
        this.addUser(e, t, n, r);
    }
    removeUserId(e, t) {
        if ((this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t))) return !0;
        for (let t in this.sections) if (this.removeUserIdFromSection(e, t)) return !0;
        return !1;
    }
    addUser(e, t, n, r, i) {
        this.allUserIds.add(e);
        let a = p.default.getUser(e);
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
        let i = c.Ay.getMember(this.guildId, e),
            a = p.default.getUser(e),
            o = p.default.getCurrentUser(),
            s =
                (null == a ? void 0 : a.id) === (null == o ? void 0 : o.id)
                    ? f.A.getStatus()
                    : d.A.getStatus(e, this.guildId),
            l =
                null != a &&
                null != t &&
                h.$3({
                    permission: E.xBc.VIEW_CHANNEL,
                    user: a,
                    context: t,
                }),
            u =
                s !== E.clD.OFFLINE && s !== E.clD.INVISIBLE && s !== E.clD.UNKNOWN
                    ? null != (n = null == i ? void 0 : i.hoistRoleId)
                        ? n
                        : "online"
                    : "offline",
            _ = null != (r = null == i ? void 0 : i.nick) ? r : g.Ay.getName(a);
        return [u, null == _ ? void 0 : _.toLowerCase(), l];
    }
    constructor(e, t, n) {
        y(this, "guildId", void 0),
            y(this, "parentId", void 0),
            y(this, "threadId", void 0),
            y(this, "version", void 0),
            y(this, "sections", void 0),
            y(this, "allUserIds", void 0),
            (this.guildId = e),
            (this.parentId = t),
            (this.threadId = n),
            (this.version = 0),
            (this.sections = {}),
            (this.allUserIds = new Set());
    }
}

function v() {
    b = {};
}

function A(e) {
    var t, n;
    if (!(e.id in b)) return !1;
    null == (t = e.addedMembers) ||
        t.forEach((t) => {
            let { userId: n } = t;
            return b[e.id].addUserId(n);
        }),
        null == (n = e.removedMemberIds) || n.forEach((t) => b[e.id].removeUserId(t));
}

function I(e) {
    let { threadId: t, guildId: n, members: r } = e,
        i = l.A.getChannel(t),
        a = null == i ? void 0 : i.parent_id;
    null != a && ((b[t] = new O(n, a, t)), b[t].rebuild(r.map((e) => e.user_id)));
}

function S(e) {
    return N(e.user.id);
}

function T(e) {
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
    for (let n in b) b[n].updateUserId(e) && (t = !0);
    return t;
}

function w(e) {
    let { presences: t } = e,
        n = a()(t)
            .map((e) => {
                var t;
                return null == (t = e.user) ? void 0 : t.id;
            })
            .filter(_.Vq)
            .uniq()
            .value(),
        r = !1;
    for (let e in b) b[e].updateMultipleUserIds(n) && (r = !0);
    return r;
}

function R(e) {
    let { chunks: t } = e,
        n = !1;
    for (let { guildId: e, members: r } of t) {
        let t = r.map((e) => e.user.id);
        for (let r in b) b[r].updateMultipleUserIds(t, e) && (n = !0);
    }
    return n;
}

function P(e) {
    var t;
    let { channel: n } = e;
    if (!(n.id in b) || (null == (t = n.threadMetadata) ? void 0 : t.archived) !== !0) return !1;
    delete b[n.id];
}

function D(e) {
    let { channel: t } = e;
    if (!(t.id in b)) return !1;
    delete b[t.id];
}

function L(e) {
    let { guildId: t } = e,
        n = !1;
    for (let e in b) b[e].guildId === t && (b[e].rebuild(), (n = !0));
    return n;
}

function x(e) {
    let { channels: t } = e,
        n = new Set(t.map((e) => e.id)),
        r = !1;
    for (let e in b) n.has(b[e].parentId) && (b[e].rebuild(), (r = !0));
    return r;
}
class M extends (r = o.Ay.Store) {
    initialize() {
        this.waitFor(l.A, c.Ay, u.A, d.A, f.A, p.default),
            this.syncWith([u.A], () => {
                let e = u.A.getSubscribedThreadIds(),
                    t = !1;
                for (let n in b) e.has(n) || (delete b[n], (t = !0));
                return t;
            }),
            this.syncWith([f.A], () => {
                var e;
                return N(null == (e = p.default.getCurrentUser()) ? void 0 : e.id);
            });
    }
    getMemberListVersion(e) {
        var t;
        return null == (t = b[e]) ? void 0 : t.version;
    }
    getMemberListSections(e) {
        var t;
        return null == (t = b[e]) ? void 0 : t.sections;
    }
    canUserViewChannel(e, t, n) {
        var r, i;
        let a = b[e];
        if (null == a) return !1;
        let o = null == (i = a.sections[t]) ? void 0 : i.usersById[n];
        return null != (r = null == o ? void 0 : o.canViewChannel) && r;
    }
}
y(M, "displayName", "ThreadMemberListStore");
let j = new M(s.h, {
    CONNECTION_OPEN: v,
    THREAD_MEMBERS_UPDATE: A,
    THREAD_UPDATE: P,
    THREAD_DELETE: D,
    CHANNEL_UPDATES: x,
    THREAD_MEMBER_LIST_UPDATE: I,
    USER_UPDATE: S,
    PRESENCE_UPDATES: T,
    GUILD_MEMBER_ADD: S,
    GUILD_MEMBER_UPDATE: S,
    GUILD_MEMBER_REMOVE: S,
    PRESENCES_REPLACE: w,
    GUILD_MEMBERS_CHUNK_BATCH: R,
    GUILD_ROLE_UPDATE: L,
    GUILD_ROLE_DELETE: L,
    PASSIVE_UPDATE_V2: C,
});
