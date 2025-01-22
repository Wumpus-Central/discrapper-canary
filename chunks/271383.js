r.d(n, {
    O5: function () {
        return K;
    },
    V6: function () {
        return W;
    }
});
var i,
    a,
    o = r(47120);
var s = r(789020);
var l = r(653041);
var u = r(392711),
    c = r.n(u),
    d = r(866442),
    f = r(442837),
    p = r(570140),
    h = r(2572),
    _ = r(16609),
    m = r(864106),
    g = r(710845),
    E = r(69882),
    v = r(134049),
    y = r(160404),
    b = r(630388),
    I = r(823379),
    T = r(709054),
    S = r(314897),
    A = r(592125),
    C = r(430824),
    N = r(372897);
function R(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let O = new g.Z('GuildMemberStore'),
    D = {},
    L = {},
    x = {},
    w = {},
    P = {},
    M = !1,
    k = 0,
    U = 0,
    B = {},
    G = {},
    Z = {
        added: [],
        removed: []
    };
function F(e, n) {
    if (null == n.communicationDisabledUntil || !(0, E.b)(n)) return V(e, n.userId);
    let r = Y(e, n.userId);
    P[r] !== n.communicationDisabledUntil && (0, E.b)(n) && ((P[r] = n.communicationDisabledUntil), j(r));
}
function V(e, n) {
    if (null != n) {
        let r = Y(e, n);
        null != P[r] && j(r), H(Y(e, n));
    } else
        for (let n in P) {
            let r = n;
            K(r) === e && (j(n), H(r));
        }
}
function j(e) {
    (k += 1), (B[e] = k);
}
function H(e) {
    W(e) === S.default.getId() && (0, v.l)(K(e)), delete P[e];
}
function Y(e, n) {
    let r = [];
    return (r[0] = e), (r[1] = n), r.join('-');
}
function W(e) {
    return e.split('-')[1];
}
function K(e) {
    return e.split('-')[0];
}
function z(e, n) {
    let r, i, a, o, s;
    if (0 === n.length)
        return {
            colorString: void 0,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0
        };
    for (let r of n) {
        let n = e[r];
        if (null != n) (null == s || n.position > s.position) && (s = n), n.color > 0 && (null == i || n.position > i.position) && (i = n), n.hoist && (null == a || n.position > a.position) && (a = n), (null != n.icon || null != n.unicodeEmoji) && (null == o || n.position > o.position) && (o = n);
    }
    if (null != i) {
        var l;
        null == i.colorString && i.color > 0 && (i.colorString = (0, d.Rf)(i.color)), (r = null !== (l = i.colorString) && void 0 !== l ? l : void 0);
    }
    return {
        colorString: r,
        colorRoleId: null == i ? void 0 : i.id,
        iconRoleId: null == o ? void 0 : o.id,
        hoistRoleId: null == a ? void 0 : a.id,
        highestRoleId: null == s ? void 0 : s.id
    };
}
function q(e) {
    var n, r;
    let { userId: i, nick: a, guildId: o, avatar: s, avatarDecoration: l, guildRoles: u, roles: c, premiumSince: d, isPending: f, joinedAt: p, communicationDisabledUntil: h, unusualDMActivityUntil: _, fullProfileLoadedTimestamp: m, flags: g } = e,
        { colorString: E, colorRoleId: v, iconRoleId: I, hoistRoleId: A, highestRoleId: C } = z(u, c),
        R = {
            userId: i,
            nick: a,
            guildId: o,
            avatar: s,
            avatarDecoration: l,
            roles: c,
            colorString: E,
            colorRoleId: v,
            iconRoleId: I,
            hoistRoleId: A,
            highestRoleId: C,
            premiumSince: d,
            isPending: f,
            joinedAt: p,
            communicationDisabledUntil: h,
            unusualDMActivityUntil: _,
            fullProfileLoadedTimestamp: m,
            flags: g
        };
    if (((0, b.yE)(null !== (n = R.flags) && void 0 !== n ? n : 0, N.q.IS_GUEST) && (R.flags = (0, b.pj)(null !== (r = R.flags) && void 0 !== r ? r : 0, N.q.BYPASSES_VERIFICATION)), null == D[o])) return R;
    if (i === S.default.getId()) {
        if (y.Z.isViewingRoles(o) || y.Z.isFullServerPreview(o)) {
            let e = y.Z.getViewingRoles(o);
            x[o] = {
                ...R,
                ...y.Z.getMemberOptions(o),
                roles: null != e ? T.default.keys(e) : []
            };
        } else null != x[o] && delete x[o];
    }
    return R;
}
function Q(e) {
    M ? (M = !1) : ((D = {}), (L = {})), (P = {}), J(e);
}
function X(e) {
    e.guilds.forEach((e) => {
        var n;
        let r = e.id;
        ey({
            id: r,
            members: e.members
        }),
            null === (n = e.activity_instances) ||
                void 0 === n ||
                n.forEach((e) => {
                    ev(r, e.participants);
                });
    });
}
function J(e) {
    e.guilds.forEach((e) => {
        ey(e);
    });
}
function $(e) {
    let { guildMembers: n } = e;
    (D = { ...n }), (L = {});
}
function ee(e) {
    let { guildMembers: n, guilds: r } = e;
    (M = !0), (D = { ...n }), (L = {}), (w = {}), en(r);
}
function et(e) {
    let { guilds: n } = e;
    en(n);
}
function en(e) {
    for (let n of e) {
        if (null != n.member) {
            if (
                (null == w[n.id]
                    ? (w[n.id] = n.member)
                    : (w[n.id] = {
                          ...n.member,
                          roles: n.member.roles
                      }),
                null != D[n.id])
            ) {
                let e = D[n.id];
                null != e[n.member.userId] &&
                    (e[n.member.userId] = {
                        ...e[n.member.userId],
                        roles: n.member.roles
                    });
            }
        }
    }
}
function er(e) {
    var n, r;
    if (null == e.guildId || null == C.Z.getGuild(e.guildId)) return !1;
    (M = !0), (D[e.guildId] = null !== (n = D[e.guildId]) && void 0 !== n ? n : {});
    let i = !1;
    for (let n of ((M = !0), (D[e.guildId] = null !== (r = D[e.guildId]) && void 0 !== r ? r : {}), e.members)) null == D[e.guildId][n.userId] && ((i = !0), (D[e.guildId][n.userId] = n));
    return i;
}
function ei(e) {
    var n;
    let { guildId: r, user: i, nick: a, avatar: o, avatarDecoration: s, roles: l, premiumSince: u, isPending: c, joinedAt: d, communicationDisabledUntil: f, unusualDMActivityUntil: p, flags: h } = e,
        _ = D[r];
    if (null == _) return !1;
    let g = C.Z.getGuild(r);
    if (null == g) return O.warn('Guild '.concat(r, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (_[i.id] = q({
        userId: i.id,
        nick: a,
        guildId: r,
        avatar: o,
        avatarDecoration: (0, m.FG)(s),
        guildRoles: C.Z.getRoles(g.id),
        roles: l,
        premiumSince: u,
        isPending: c,
        joinedAt: d,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: p,
        fullProfileLoadedTimestamp: null === (n = _[i.id]) || void 0 === n ? void 0 : n.fullProfileLoadedTimestamp,
        flags: h
    })),
        F(r, _[i.id]);
}
function ea(e) {
    let { guildId: n, userId: r, roleId: i } = e,
        a = D[n];
    if (null == a) return !1;
    let o = C.Z.getGuild(n);
    if (null == o) return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let s = a[r];
    if (null == s || s.roles.includes(i)) return !1;
    s.roles = [...s.roles, i];
    let l = z(C.Z.getRoles(o.id), s.roles);
    return (
        (a[r] = {
            ...s,
            ...l
        }),
        !0
    );
}
function eo(e) {
    let { guildId: n, userId: r, roleId: i } = e,
        a = D[n];
    if (null == a) return !1;
    let o = C.Z.getGuild(n);
    if (null == o) return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let s = a[r];
    if (null == s || !s.roles.includes(i)) return !1;
    s.roles = s.roles.filter((e) => e !== i);
    let l = z(C.Z.getRoles(o.id), s.roles);
    return (
        (a[r] = {
            ...s,
            ...l
        }),
        !0
    );
}
function es(e) {
    let { guildMember: n, guildId: r } = e,
        i = D[r];
    if (null == i) return !1;
    let a = C.Z.getGuild(r);
    if (null == a) return O.warn('Guild '.concat(r, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (i[n.user.id] = q({
        userId: n.user.id,
        nick: n.nick,
        guildId: r,
        avatar: n.avatar,
        avatarDecoration: e_(n),
        guildRoles: C.Z.getRoles(a.id),
        roles: n.roles,
        premiumSince: n.premium_since,
        isPending: n.pending,
        joinedAt: n.joined_at,
        communicationDisabledUntil: n.communication_disabled_until,
        unusualDMActivityUntil: n.unusual_dm_activity_until,
        flags: n.flags,
        fullProfileLoadedTimestamp: Date.now()
    })),
        F(r, i[n.user.id]);
}
function el(e) {
    let n = !1;
    for (let r of e.chunks) n = eh(r.guildId, r.members) || n;
    return n;
}
function eu(e) {
    return !!(e.members.length > 0) && eh(e.guildId, e.members);
}
function ec(e) {
    let { guildId: n, members: r } = e;
    return eh(n, r.map((e) => e.member).filter(I.lm));
}
function ed(e) {
    let { guildId: n, owners: r } = e;
    return eh(n, r);
}
function ef(e) {
    let { guildId: n, threads: r } = e;
    return eh(
        n,
        Object.values(r)
            .map((e) => e.owner)
            .filter(I.lm)
    );
}
function ep(e) {
    let { guildId: n, addedMembers: r } = e;
    return null != r && eh(n, r.map((e) => e.member).filter(I.lm));
}
function eh(e, n) {
    let r = D[e];
    if (null == r) return !1;
    let i = C.Z.getGuild(e);
    return null == i
        ? (O.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (n.forEach((n) => {
              var a;
              let o = r[n.user.id];
              (r[n.user.id] = q({
                  userId: n.user.id,
                  nick: n.nick,
                  guildId: e,
                  avatar: n.avatar,
                  avatarDecoration: e_(n),
                  guildRoles: C.Z.getRoles(i.id),
                  roles: n.roles,
                  premiumSince: n.premium_since,
                  isPending: n.pending,
                  joinedAt: n.joined_at,
                  communicationDisabledUntil: n.communication_disabled_until,
                  flags: n.flags,
                  fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null !== (a = n.unusual_dm_activity_until) && void 0 !== a ? a : null == o ? void 0 : o.unusualDMActivityUntil
              })),
                  F(e, r[n.user.id]);
          }),
          U++,
          !0);
}
function e_(e) {
    return (0, m.FG)(e.avatar_decoration_data);
}
function em(e) {
    let { guildId: n, members: r } = e;
    return eh(
        n,
        r.map((e) => {
            let { member: n } = e;
            return n;
        })
    );
}
function eg(e) {
    let { guildId: n, user: r } = e,
        i = D[n];
    if (null == i || null == i[r.id]) return !1;
    delete i[r.id], V(n, r.id), U++;
}
function eE(e) {
    let { guild: n } = e;
    return ey(n);
}
function ev(e, n) {
    return ey({
        id: e,
        members: n.filter(h.Z).map((e) => e.member)
    });
}
function ey(e) {
    let n = e.id;
    !(n in D) && (D[e.id] = {});
    let r = C.Z.getGuild(n);
    if (null == r) return !1;
    let i = D[n];
    for (let o of e.members) {
        var a;
        let s = o.user.id,
            l = i[s],
            u = q({
                userId: s,
                nick: o.nick,
                guildId: e.id,
                avatar: o.avatar,
                avatarDecoration: e_(o),
                guildRoles: C.Z.getRoles(r.id),
                roles: o.roles,
                premiumSince: o.premium_since,
                isPending: o.pending,
                joinedAt: o.joined_at,
                communicationDisabledUntil: o.communication_disabled_until,
                fullProfileLoadedTimestamp: null == l ? void 0 : l.fullProfileLoadedTimestamp,
                flags: o.flags,
                unusualDMActivityUntil: null !== (a = o.unusual_dm_activity_until) && void 0 !== a ? a : null == l ? void 0 : l.unusualDMActivityUntil
            });
        (i[s] = u), F(n, u);
    }
    return !0;
}
function eb(e) {
    let { guild: n } = e;
    delete D[n.id], delete L[n.id], V(n.id);
}
function eI(e) {
    let n = D[e.guildId];
    if (null == n) return !1;
    let r = C.Z.getGuild(e.guildId);
    if (null == r) return O.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let i = S.default.getId();
    for (let a of T.default.keys(n)) {
        let o = n[a];
        if ((null != o.roles && o.roles.length > 0) || null != o.colorString || null != o.hoistRoleId) {
            let s = a === i && 'GUILD_ROLE_DELETE' === e.type ? o.roles.filter((n) => n !== e.roleId) : o.roles;
            (n[a] = q({
                userId: a,
                nick: o.nick,
                guildId: e.guildId,
                avatar: o.avatar,
                avatarDecoration: o.avatarDecoration,
                guildRoles: C.Z.getRoles(r.id),
                roles: s,
                premiumSince: o.premiumSince,
                isPending: o.isPending,
                joinedAt: o.joinedAt,
                flags: o.flags,
                fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp
            })),
                F(e.guildId, n[a]);
        }
    }
}
function eT(e) {
    var n, r, i;
    let { guildId: a, roles: o, addedRoleIds: s, removedRoleIds: l, flags: u } = e,
        d = S.default.getId(),
        f = D[a],
        p = null != f ? f[d] : null;
    if (null == p) return !1;
    let h = C.Z.getGuild(a);
    if (null == h) return !1;
    let _ = null !== (n = G[a]) && void 0 !== n ? n : {};
    (G[a] = {
        added: c().difference(c().union(null !== (r = _.added) && void 0 !== r ? r : [], s), null != l ? l : []),
        removed: c().difference(c().union(null !== (i = _.removed) && void 0 !== i ? i : [], l), null != s ? s : [])
    }),
        (f[d] = q({
            userId: d,
            guildId: a,
            nick: p.nick,
            avatar: p.avatar,
            avatarDecoration: p.avatarDecoration,
            guildRoles: C.Z.getRoles(h.id),
            roles: null != o ? o : p.roles,
            premiumSince: p.premiumSince,
            isPending: p.isPending,
            joinedAt: p.joinedAt,
            flags: null != u ? u : p.flags,
            fullProfileLoadedTimestamp: p.fullProfileLoadedTimestamp
        }));
}
function eS(e) {
    let { guildId: n } = e;
    if (null == n) return !1;
    delete G[n];
}
function eA(e) {
    let { guildId: n } = e,
        r = D[n];
    if (null == r) return !1;
    let i = C.Z.getGuild(n);
    if (null == i) return O.warn('Guild '.concat(n, ' not found during IMPERSONATE_UPDATE.')), !1;
    let a = S.default.getId(),
        o = r[a];
    r[a] = q({
        userId: a,
        nick: o.nick,
        guildId: n,
        avatar: o.avatar,
        avatarDecoration: o.avatarDecoration,
        guildRoles: C.Z.getRoles(i.id),
        roles: o.roles,
        premiumSince: o.premiumSince,
        isPending: o.isPending,
        joinedAt: o.joinedAt,
        communicationDisabledUntil: o.communicationDisabledUntil,
        fullProfileLoadedTimestamp: o.fullProfileLoadedTimestamp,
        flags: o.flags
    });
}
function eC(e) {
    var n;
    let { message: r, guildId: i } = e;
    (null === (n = r.resolved) || void 0 === n ? void 0 : n.members) != null &&
        null != i &&
        ey({
            id: i,
            members: Object.entries(r.resolved.members)
                .map((e) => {
                    var n, i;
                    let [a, o] = e,
                        s = null === (i = r.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[a];
                    if (null != s)
                        return {
                            ...o,
                            user: s
                        };
                })
                .filter((e) => null != e)
        });
}
function eN(e) {
    var n;
    if ((null === (n = e.resolved) || void 0 === n ? void 0 : n.members) == null) return;
    let r = A.Z.getChannel(e.channel_id);
    !(null == r || r.isPrivate()) &&
        ey({
            id: r.guild_id,
            members: Object.entries(e.resolved.members)
                .map((n) => {
                    var r, i;
                    let [a, o] = n,
                        s = null === (i = e.resolved) || void 0 === i ? void 0 : null === (r = i.users) || void 0 === r ? void 0 : r[a];
                    if (null != s)
                        return {
                            ...o,
                            user: s
                        };
                })
                .filter((e) => null != e)
        });
}
function eR(e) {
    let { messages: n } = e;
    n.forEach((e) => eN(e));
}
function eO(e) {
    let { messages: n } = e;
    n.forEach((e) => eR({ messages: e }));
}
function eD(e) {
    let { location: n, participants: r } = e,
        i = (0, _.j)(n);
    return null != i && ev(i, r);
}
!(function (e) {
    (e[(e.GUILD = 0)] = 'GUILD'), (e[(e.USER = 1)] = 'USER');
})(i || (i = {}));
class eL extends (a = f.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, S.default, y.Z);
    }
    getMutableAllGuildsAndMembers() {
        return D;
    }
    memberOf(e) {
        return c()(D)
            .toPairs()
            .filter((n) => {
                let [r, i] = n;
                return null != i[e];
            })
            .map((e) => {
                let [n] = e;
                return n;
            })
            .value();
    }
    getNicknameGuildsMapping(e) {
        let n = {};
        for (let i in D) {
            var r;
            let a = null === (r = D[i][e]) || void 0 === r ? void 0 : r.nick;
            if (null != a) !Object.prototype.hasOwnProperty.call(n, a) && (n[a] = []), n[a].push(i);
        }
        return n;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, n) {
        if (null == e || null == n) return !1;
        let r = D[e];
        return null != r && null != r[n];
    }
    isGuestOrLurker(e, n) {
        var r;
        if (null == e || null == n) return !1;
        let i = D[e];
        return null != i && (null === (r = i[n]) || void 0 === r ? void 0 : r.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let n = S.default.getId(),
            r = D[e];
        if (null == r || null == r[n]) return !1;
        let i = r[n].flags;
        return null != i && (0, b.yE)(i, N.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let n = D[e];
        return null == n ? [] : T.default.keys(n);
    }
    getMembers(e) {
        if (null == e) return [];
        let n = D[e];
        return null == n ? [] : Object.values(n);
    }
    getTrueMember(e, n) {
        let r = D[e];
        return null != r ? r[n] : null;
    }
    getMember(e, n) {
        let r = this.getTrueMember(e, n);
        if (null != r && n === S.default.getId() && (y.Z.isViewingRoles(e) || y.Z.isFullServerPreview(e))) {
            var i;
            return null !== (i = x[e]) && void 0 !== i ? i : r;
        }
        return r;
    }
    getSelfMember(e) {
        return this.getMember(e, S.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let n = L[e];
        if (null != n) return n;
        let r = this.getSelfMember(e);
        if (null == r || null == r.joinedAt) return null;
        let i = new Date(r.joinedAt);
        return (L[e] = i), i;
    }
    getCachedSelfMember(e) {
        var n;
        return null !== (n = w[e]) && void 0 !== n ? n : null;
    }
    getNick(e, n) {
        if (null == e || null == n) return null;
        let r = this.getMember(e, n);
        return null != r ? r.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return P;
    }
    getCommunicationDisabledVersion() {
        return k;
    }
    getPendingRoleUpdates(e) {
        var n;
        return null !== (n = G[e]) && void 0 !== n ? n : Z;
    }
    getMemberRoleWithPendingUpdates(e, n) {
        var r, i;
        let a = null !== (i = null === (r = this.getMember(e, n)) || void 0 === r ? void 0 : r.roles) && void 0 !== i ? i : [],
            o = G[e];
        return null == o ? a : c().difference(c().union(a, o.added), o.removed);
    }
    getMemberVersion() {
        return U;
    }
}
R(eL, 'displayName', 'GuildMemberStore'),
    (n.ZP = new eL(p.Z, {
        CONNECTION_OPEN: Q,
        CONNECTION_OPEN_SUPPLEMENTAL: X,
        OVERLAY_INITIALIZE: $,
        CACHE_LOADED: ee,
        CACHE_LOADED_LAZY: et,
        GUILD_CREATE: eE,
        GUILD_DELETE: eb,
        GUILD_MEMBER_ADD: ei,
        GUILD_MEMBER_UPDATE: ei,
        GUILD_MEMBER_UPDATE_LOCAL: eT,
        GUILD_MEMBERS_CHUNK_BATCH: el,
        GUILD_MEMBER_REMOVE: eg,
        THREAD_MEMBER_LIST_UPDATE: ec,
        THREAD_MEMBERS_UPDATE: ep,
        LOAD_ARCHIVED_THREADS_SUCCESS: ed,
        LOAD_FORUM_POSTS: ef,
        GUILD_ROLE_UPDATE: eI,
        GUILD_ROLE_DELETE: eI,
        GUILD_ROLE_MEMBER_REMOVE: eo,
        GUILD_ROLE_MEMBER_ADD: ea,
        GUILD_MEMBER_PROFILE_UPDATE: es,
        IMPERSONATE_UPDATE: eA,
        IMPERSONATE_STOP: eA,
        PASSIVE_UPDATE_V2: eu,
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eS,
        LOCAL_MESSAGES_LOADED: er,
        MESSAGE_CREATE: eC,
        MESSAGE_UPDATE: eC,
        LOAD_MESSAGES_SUCCESS: eR,
        LOAD_MESSAGES_AROUND_SUCCESS: eR,
        LOAD_PINNED_MESSAGES_SUCCESS: eR,
        LOAD_RECENT_MENTIONS_SUCCESS: eR,
        SEARCH_FINISH: eO,
        MOD_VIEW_SEARCH_FINISH: eO,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: em,
        EMBEDDED_ACTIVITY_UPDATE_V2: eD
    }));
