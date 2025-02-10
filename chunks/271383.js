n.d(t, {
    O5: () => V,
    V6: () => F,
    ZP: () => eC
}),
    n(47120),
    n(789020),
    n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(866442),
    o = n(442837),
    l = n(570140),
    u = n(2572),
    c = n(16609),
    d = n(864106),
    f = n(710845),
    _ = n(69882),
    p = n(134049),
    h = n(160404),
    m = n(630388),
    g = n(823379),
    E = n(709054),
    v = n(314897),
    y = n(592125),
    I = n(430824),
    T = n(372897);
function b(e, t, n) {
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
let S = new f.Z('GuildMemberStore'),
    A = {},
    N = {},
    C = {},
    R = {},
    O = {},
    D = !1,
    L = 0,
    x = 0,
    P = {},
    w = {},
    M = {
        added: [],
        removed: []
    };
function k(e, t) {
    if (null == t.communicationDisabledUntil || !(0, _.b)(t)) return U(e, t.userId);
    let n = Z(e, t.userId);
    O[n] !== t.communicationDisabledUntil && (0, _.b)(t) && ((O[n] = t.communicationDisabledUntil), G(n));
}
function U(e, t) {
    if (null != t) {
        let n = Z(e, t);
        null != O[n] && G(n), B(Z(e, t));
    } else
        for (let t in O) {
            let n = t;
            V(n) === e && (G(t), B(n));
        }
}
function G(e) {
    (L += 1), (P[e] = L);
}
function B(e) {
    F(e) === v.default.getId() && (0, p.l)(V(e)), delete O[e];
}
function Z(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join('-');
}
function F(e) {
    return e.split('-')[1];
}
function V(e) {
    return e.split('-')[0];
}
function j(e, t) {
    let n, i, r, a, o;
    if (0 === t.length)
        return {
            colorString: void 0,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0
        };
    for (let n of t) {
        let t = e[n];
        null != t && ((null == o || t.position > o.position) && (o = t), t.color > 0 && (null == i || t.position > i.position) && (i = t), t.hoist && (null == r || t.position > r.position) && (r = t), (null != t.icon || null != t.unicodeEmoji) && (null == a || t.position > a.position) && (a = t));
    }
    if (null != i) {
        var l;
        null == i.colorString && i.color > 0 && (i.colorString = (0, s.Rf)(i.color)), (n = null !== (l = i.colorString) && void 0 !== l ? l : void 0);
    }
    return {
        colorString: n,
        colorRoleId: null == i ? void 0 : i.id,
        iconRoleId: null == a ? void 0 : a.id,
        hoistRoleId: null == r ? void 0 : r.id,
        highestRoleId: null == o ? void 0 : o.id
    };
}
function H(e) {
    var t, n;
    let { userId: i, nick: r, guildId: a, avatar: s, avatarDecoration: o, guildRoles: l, roles: u, premiumSince: c, isPending: d, joinedAt: f, communicationDisabledUntil: _, unusualDMActivityUntil: p, fullProfileLoadedTimestamp: g, flags: y } = e,
        { colorString: I, colorRoleId: b, iconRoleId: S, hoistRoleId: N, highestRoleId: R } = j(l, u),
        O = {
            userId: i,
            nick: r,
            guildId: a,
            avatar: s,
            avatarDecoration: o,
            roles: u,
            colorString: I,
            colorRoleId: b,
            iconRoleId: S,
            hoistRoleId: N,
            highestRoleId: R,
            premiumSince: c,
            isPending: d,
            joinedAt: f,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: p,
            fullProfileLoadedTimestamp: g,
            flags: y
        };
    if (((0, m.yE)(null !== (t = O.flags) && void 0 !== t ? t : 0, T.q.IS_GUEST) && (O.flags = (0, m.pj)(null !== (n = O.flags) && void 0 !== n ? n : 0, T.q.BYPASSES_VERIFICATION)), null == A[a])) return O;
    if (i === v.default.getId()) {
        if (h.Z.isViewingRoles(a) || h.Z.isFullServerPreview(a)) {
            let e = h.Z.getViewingRoles(a);
            C[a] = {
                ...O,
                ...h.Z.getMemberOptions(a),
                roles: null != e ? E.default.keys(e) : []
            };
        } else null != C[a] && delete C[a];
    }
    return O;
}
function Y(e) {
    D ? (D = !1) : ((A = {}), (N = {})), (O = {}), K(e);
}
function W(e) {
    e.guilds.forEach((e) => {
        var t;
        let n = e.id;
        eh({
            id: n,
            members: e.members
        }),
            null === (t = e.activity_instances) ||
                void 0 === t ||
                t.forEach((e) => {
                    ep(n, e.participants);
                });
    });
}
function K(e) {
    e.guilds.forEach((e) => {
        eh(e);
    });
}
function z(e) {
    let { guildMembers: t } = e;
    (A = { ...t }), (N = {});
}
function q(e) {
    let { guildMembers: t, guilds: n } = e;
    (D = !0), (A = { ...t }), (N = {}), (R = {}), X(n);
}
function Q(e) {
    let { guilds: t } = e;
    X(t);
}
function X(e) {
    for (let t of e)
        if (
            null != t.member &&
            (null == R[t.id]
                ? (R[t.id] = t.member)
                : (R[t.id] = {
                      ...t.member,
                      roles: t.member.roles
                  }),
            null != A[t.id])
        ) {
            let e = A[t.id];
            null != e[t.member.userId] &&
                (e[t.member.userId] = {
                    ...e[t.member.userId],
                    roles: t.member.roles
                });
        }
}
function J(e) {
    var t, n;
    if (null == e.guildId || null == I.Z.getGuild(e.guildId)) return !1;
    (D = !0), (A[e.guildId] = null !== (t = A[e.guildId]) && void 0 !== t ? t : {});
    let i = !1;
    for (let t of ((D = !0), (A[e.guildId] = null !== (n = A[e.guildId]) && void 0 !== n ? n : {}), e.members)) null == A[e.guildId][t.userId] && ((i = !0), (A[e.guildId][t.userId] = t));
    return i;
}
function $(e) {
    var t;
    let { guildId: n, user: i, nick: r, avatar: a, avatarDecoration: s, roles: o, premiumSince: l, isPending: u, joinedAt: c, communicationDisabledUntil: f, unusualDMActivityUntil: _, flags: p } = e,
        h = A[n];
    if (null == h) return !1;
    let m = I.Z.getGuild(n);
    if (null == m) return S.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (h[i.id] = H({
        userId: i.id,
        nick: r,
        guildId: n,
        avatar: a,
        avatarDecoration: (0, d.FG)(s),
        guildRoles: I.Z.getRoles(m.id),
        roles: o,
        premiumSince: l,
        isPending: u,
        joinedAt: c,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: null === (t = h[i.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
        flags: p
    })),
        k(n, h[i.id]);
}
function ee(e) {
    let { guildId: t, userId: n, roleId: i } = e,
        r = A[t];
    if (null == r) return !1;
    let a = I.Z.getGuild(t);
    if (null == a) return S.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let s = r[n];
    if (null == s || s.roles.includes(i)) return !1;
    s.roles = [...s.roles, i];
    let o = j(I.Z.getRoles(a.id), s.roles);
    return (
        (r[n] = {
            ...s,
            ...o
        }),
        !0
    );
}
function et(e) {
    let { guildId: t, userId: n, roleId: i } = e,
        r = A[t];
    if (null == r) return !1;
    let a = I.Z.getGuild(t);
    if (null == a) return S.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let s = r[n];
    if (null == s || !s.roles.includes(i)) return !1;
    s.roles = s.roles.filter((e) => e !== i);
    let o = j(I.Z.getRoles(a.id), s.roles);
    return (
        (r[n] = {
            ...s,
            ...o
        }),
        !0
    );
}
function en(e) {
    let { guildMember: t, guildId: n } = e,
        i = A[n];
    if (null == i) return !1;
    let r = I.Z.getGuild(n);
    if (null == r) return S.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (i[t.user.id] = H({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: ec(t),
        guildRoles: I.Z.getRoles(r.id),
        roles: t.roles,
        premiumSince: t.premium_since,
        isPending: t.pending,
        joinedAt: t.joined_at,
        communicationDisabledUntil: t.communication_disabled_until,
        unusualDMActivityUntil: t.unusual_dm_activity_until,
        flags: t.flags,
        fullProfileLoadedTimestamp: Date.now()
    })),
        k(n, i[t.user.id]);
}
function ei(e) {
    let t = !1;
    for (let n of e.chunks) t = eu(n.guildId, n.members) || t;
    return t;
}
function er(e) {
    return e.members.length > 0 && eu(e.guildId, e.members);
}
function ea(e) {
    let { guildId: t, members: n } = e;
    return eu(t, n.map((e) => e.member).filter(g.lm));
}
function es(e) {
    let { guildId: t, owners: n } = e;
    return eu(t, n);
}
function eo(e) {
    let { guildId: t, threads: n } = e;
    return eu(
        t,
        Object.values(n)
            .map((e) => e.owner)
            .filter(g.lm)
    );
}
function el(e) {
    let { guildId: t, addedMembers: n } = e;
    return null != n && eu(t, n.map((e) => e.member).filter(g.lm));
}
function eu(e, t) {
    let n = A[e];
    if (null == n) return !1;
    let i = I.Z.getGuild(e);
    return null == i
        ? (S.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (t.forEach((t) => {
              var r;
              let a = n[t.user.id];
              (n[t.user.id] = H({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: ec(t),
                  guildRoles: I.Z.getRoles(i.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null !== (r = t.unusual_dm_activity_until) && void 0 !== r ? r : null == a ? void 0 : a.unusualDMActivityUntil
              })),
                  k(e, n[t.user.id]);
          }),
          x++,
          !0);
}
function ec(e) {
    return (0, d.FG)(e.avatar_decoration_data);
}
function ed(e) {
    let { guildId: t, members: n } = e;
    return eu(
        t,
        n.map((e) => {
            let { member: t } = e;
            return t;
        })
    );
}
function ef(e) {
    let { guildId: t, user: n } = e,
        i = A[t];
    if (null == i || null == i[n.id]) return !1;
    delete i[n.id], U(t, n.id), x++;
}
function e_(e) {
    let { guild: t } = e;
    return eh(t);
}
function ep(e, t) {
    return eh({
        id: e,
        members: t.filter(u.Z).map((e) => e.member)
    });
}
function eh(e) {
    let t = e.id;
    t in A || (A[e.id] = {});
    let n = I.Z.getGuild(t);
    if (null == n) return !1;
    let i = A[t];
    for (let a of e.members) {
        var r;
        let s = a.user.id,
            o = i[s],
            l = H({
                userId: s,
                nick: a.nick,
                guildId: e.id,
                avatar: a.avatar,
                avatarDecoration: ec(a),
                guildRoles: I.Z.getRoles(n.id),
                roles: a.roles,
                premiumSince: a.premium_since,
                isPending: a.pending,
                joinedAt: a.joined_at,
                communicationDisabledUntil: a.communication_disabled_until,
                fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                flags: a.flags,
                unusualDMActivityUntil: null !== (r = a.unusual_dm_activity_until) && void 0 !== r ? r : null == o ? void 0 : o.unusualDMActivityUntil
            });
        (i[s] = l), k(t, l);
    }
    return !0;
}
function em(e) {
    let { guild: t } = e;
    delete A[t.id], delete N[t.id], U(t.id);
}
function eg(e) {
    let t = A[e.guildId];
    if (null == t) return !1;
    let n = I.Z.getGuild(e.guildId);
    if (null == n) return S.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let i = v.default.getId();
    for (let r of E.default.keys(t)) {
        let a = t[r];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let s = r === i && 'GUILD_ROLE_DELETE' === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            (t[r] = H({
                userId: r,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: I.Z.getRoles(n.id),
                roles: s,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp
            })),
                k(e.guildId, t[r]);
        }
    }
}
function eE(e) {
    var t, n, i;
    let { guildId: r, roles: s, addedRoleIds: o, removedRoleIds: l, flags: u } = e,
        c = v.default.getId(),
        d = A[r],
        f = null != d ? d[c] : null;
    if (null == f) return !1;
    let _ = I.Z.getGuild(r);
    if (null == _) return !1;
    let p = null !== (t = w[r]) && void 0 !== t ? t : {};
    (w[r] = {
        added: a().difference(a().union(null !== (n = p.added) && void 0 !== n ? n : [], o), null != l ? l : []),
        removed: a().difference(a().union(null !== (i = p.removed) && void 0 !== i ? i : [], l), null != o ? o : [])
    }),
        (d[c] = H({
            userId: c,
            guildId: r,
            nick: f.nick,
            avatar: f.avatar,
            avatarDecoration: f.avatarDecoration,
            guildRoles: I.Z.getRoles(_.id),
            roles: null != s ? s : f.roles,
            premiumSince: f.premiumSince,
            isPending: f.isPending,
            joinedAt: f.joinedAt,
            flags: null != u ? u : f.flags,
            fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp
        }));
}
function ev(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete w[t];
}
function ey(e) {
    let { guildId: t } = e,
        n = A[t];
    if (null == n) return !1;
    let i = I.Z.getGuild(t);
    if (null == i) return S.warn('Guild '.concat(t, ' not found during IMPERSONATE_UPDATE.')), !1;
    let r = v.default.getId(),
        a = n[r];
    n[r] = H({
        userId: r,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: I.Z.getRoles(i.id),
        roles: a.roles,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        communicationDisabledUntil: a.communicationDisabledUntil,
        fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
        flags: a.flags
    });
}
function eI(e) {
    var t;
    let { message: n, guildId: i } = e;
    (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null &&
        null != i &&
        eh({
            id: i,
            members: Object.entries(n.resolved.members)
                .map((e) => {
                    var t, i;
                    let [r, a] = e,
                        s = null === (i = n.resolved) || void 0 === i ? void 0 : null === (t = i.users) || void 0 === t ? void 0 : t[r];
                    if (null != s)
                        return {
                            ...a,
                            user: s
                        };
                })
                .filter((e) => null != e)
        });
}
function eT(e) {
    var t;
    if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
    let n = y.Z.getChannel(e.channel_id);
    null == n ||
        n.isPrivate() ||
        eh({
            id: n.guild_id,
            members: Object.entries(e.resolved.members)
                .map((t) => {
                    var n, i;
                    let [r, a] = t,
                        s = null === (i = e.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[r];
                    if (null != s)
                        return {
                            ...a,
                            user: s
                        };
                })
                .filter((e) => null != e)
        });
}
function eb(e) {
    let { messages: t } = e;
    t.forEach((e) => eT(e));
}
function eS(e) {
    let { messages: t } = e;
    t.forEach((e) => eb({ messages: e }));
}
function eA(e) {
    let { location: t, participants: n } = e,
        i = (0, c.jS)(t);
    return null != i && ep(i, n);
}
class eN extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, v.default, h.Z);
    }
    getMutableAllGuildsAndMembers() {
        return A;
    }
    memberOf(e) {
        return a()(A)
            .toPairs()
            .filter((t) => {
                let [n, i] = t;
                return null != i[e];
            })
            .map((e) => {
                let [t] = e;
                return t;
            })
            .value();
    }
    getNicknameGuildsMapping(e) {
        let t = {};
        for (let i in A) {
            var n;
            let r = null === (n = A[i][e]) || void 0 === n ? void 0 : n.nick;
            null != r && (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []), t[r].push(i));
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = A[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        var n;
        if (null == e || null == t) return !1;
        let i = A[e];
        return null != i && (null === (n = i[t]) || void 0 === n ? void 0 : n.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = v.default.getId(),
            n = A[e];
        if (null == n || null == n[t]) return !1;
        let i = n[t].flags;
        return null != i && (0, m.yE)(i, T.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = A[e];
        return null == t ? [] : E.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = A[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = A[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        if (null != n && t === v.default.getId() && (h.Z.isViewingRoles(e) || h.Z.isFullServerPreview(e))) {
            var i;
            return null !== (i = C[e]) && void 0 !== i ? i : n;
        }
        return n;
    }
    getSelfMember(e) {
        return this.getMember(e, v.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = N[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let i = new Date(n.joinedAt);
        return (N[e] = i), i;
    }
    getCachedSelfMember(e) {
        var t;
        return null !== (t = R[e]) && void 0 !== t ? t : null;
    }
    getNick(e, t) {
        if (null == e || null == t) return null;
        let n = this.getMember(e, t);
        return null != n ? n.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return O;
    }
    getCommunicationDisabledVersion() {
        return L;
    }
    getPendingRoleUpdates(e) {
        var t;
        return null !== (t = w[e]) && void 0 !== t ? t : M;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        var n, i;
        let r = null !== (i = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== i ? i : [],
            s = w[e];
        return null == s ? r : a().difference(a().union(r, s.added), s.removed);
    }
    getMemberVersion() {
        return x;
    }
}
b(eN, 'displayName', 'GuildMemberStore');
let eC = new eN(l.Z, {
    CONNECTION_OPEN: Y,
    CONNECTION_OPEN_SUPPLEMENTAL: W,
    OVERLAY_INITIALIZE: z,
    CACHE_LOADED: q,
    CACHE_LOADED_LAZY: Q,
    GUILD_CREATE: e_,
    GUILD_DELETE: em,
    GUILD_MEMBER_ADD: $,
    GUILD_MEMBER_UPDATE: $,
    GUILD_MEMBER_UPDATE_LOCAL: eE,
    GUILD_MEMBERS_CHUNK_BATCH: ei,
    GUILD_MEMBER_REMOVE: ef,
    THREAD_MEMBER_LIST_UPDATE: ea,
    THREAD_MEMBERS_UPDATE: el,
    LOAD_ARCHIVED_THREADS_SUCCESS: es,
    LOAD_FORUM_POSTS: eo,
    GUILD_ROLE_UPDATE: eg,
    GUILD_ROLE_DELETE: eg,
    GUILD_ROLE_MEMBER_REMOVE: et,
    GUILD_ROLE_MEMBER_ADD: ee,
    GUILD_MEMBER_PROFILE_UPDATE: en,
    IMPERSONATE_UPDATE: ey,
    IMPERSONATE_STOP: ey,
    PASSIVE_UPDATE_V2: er,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: ev,
    LOCAL_MESSAGES_LOADED: J,
    MESSAGE_CREATE: eI,
    MESSAGE_UPDATE: eI,
    LOAD_MESSAGES_SUCCESS: eb,
    LOAD_MESSAGES_AROUND_SUCCESS: eb,
    LOAD_PINNED_MESSAGES_SUCCESS: eb,
    LOAD_RECENT_MENTIONS_SUCCESS: eb,
    SEARCH_FINISH: eS,
    MOD_VIEW_SEARCH_FINISH: eS,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: ed,
    EMBEDDED_ACTIVITY_UPDATE_V2: eA
});
