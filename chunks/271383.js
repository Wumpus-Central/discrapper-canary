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
    s = r(47120);
var o = r(789020);
var l = r(653041);
var u = r(392711),
    c = r.n(u),
    d = r(866442),
    f = r(442837),
    _ = r(570140),
    h = r(2572),
    p = r(16609),
    m = r(864106),
    g = r(710845),
    E = r(69882),
    v = r(134049),
    I = r(160404),
    T = r(630388),
    b = r(823379),
    y = r(709054),
    S = r(314897),
    A = r(592125),
    N = r(430824),
    C = r(372897);
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
    F = {
        added: [],
        removed: []
    };
function Z(e, n) {
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
    let r, i, a, s, o;
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
        if (null != n) (null == o || n.position > o.position) && (o = n), n.color > 0 && (null == i || n.position > i.position) && (i = n), n.hoist && (null == a || n.position > a.position) && (a = n), (null != n.icon || null != n.unicodeEmoji) && (null == s || n.position > s.position) && (s = n);
    }
    if (null != i) {
        var l;
        null == i.colorString && i.color > 0 && (i.colorString = (0, d.Rf)(i.color)), (r = null !== (l = i.colorString) && void 0 !== l ? l : void 0);
    }
    return {
        colorString: r,
        colorRoleId: null == i ? void 0 : i.id,
        iconRoleId: null == s ? void 0 : s.id,
        hoistRoleId: null == a ? void 0 : a.id,
        highestRoleId: null == o ? void 0 : o.id
    };
}
function q(e) {
    var n, r;
    let { userId: i, nick: a, guildId: s, avatar: o, avatarDecoration: l, guildRoles: u, roles: c, premiumSince: d, isPending: f, joinedAt: _, communicationDisabledUntil: h, unusualDMActivityUntil: p, fullProfileLoadedTimestamp: m, flags: g } = e,
        { colorString: E, colorRoleId: v, iconRoleId: b, hoistRoleId: A, highestRoleId: N } = z(u, c),
        R = {
            userId: i,
            nick: a,
            guildId: s,
            avatar: o,
            avatarDecoration: l,
            roles: c,
            colorString: E,
            colorRoleId: v,
            iconRoleId: b,
            hoistRoleId: A,
            highestRoleId: N,
            premiumSince: d,
            isPending: f,
            joinedAt: _,
            communicationDisabledUntil: h,
            unusualDMActivityUntil: p,
            fullProfileLoadedTimestamp: m,
            flags: g
        };
    if (((0, T.yE)(null !== (n = R.flags) && void 0 !== n ? n : 0, C.q.IS_GUEST) && (R.flags = (0, T.pj)(null !== (r = R.flags) && void 0 !== r ? r : 0, C.q.BYPASSES_VERIFICATION)), null == D[s])) return R;
    if (i === S.default.getId()) {
        if (I.Z.isViewingRoles(s) || I.Z.isFullServerPreview(s)) {
            let e = I.Z.getViewingRoles(s);
            x[s] = {
                ...R,
                ...I.Z.getMemberOptions(s),
                roles: null != e ? y.default.keys(e) : []
            };
        } else null != x[s] && delete x[s];
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
        eI({
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
        eI(e);
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
    if (null == e.guildId || null == N.Z.getGuild(e.guildId)) return !1;
    (M = !0), (D[e.guildId] = null !== (n = D[e.guildId]) && void 0 !== n ? n : {});
    let i = !1;
    for (let n of ((M = !0), (D[e.guildId] = null !== (r = D[e.guildId]) && void 0 !== r ? r : {}), e.members)) null == D[e.guildId][n.userId] && ((i = !0), (D[e.guildId][n.userId] = n));
    return i;
}
function ei(e) {
    var n;
    let { guildId: r, user: i, nick: a, avatar: s, avatarDecoration: o, roles: l, premiumSince: u, isPending: c, joinedAt: d, communicationDisabledUntil: f, unusualDMActivityUntil: _, flags: h } = e,
        p = D[r];
    if (null == p) return !1;
    let g = N.Z.getGuild(r);
    if (null == g) return O.warn('Guild '.concat(r, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (p[i.id] = q({
        userId: i.id,
        nick: a,
        guildId: r,
        avatar: s,
        avatarDecoration: (0, m.FG)(o),
        guildRoles: N.Z.getRoles(g.id),
        roles: l,
        premiumSince: u,
        isPending: c,
        joinedAt: d,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: null === (n = p[i.id]) || void 0 === n ? void 0 : n.fullProfileLoadedTimestamp,
        flags: h
    })),
        Z(r, p[i.id]);
}
function ea(e) {
    let { guildId: n, userId: r, roleId: i } = e,
        a = D[n];
    if (null == a) return !1;
    let s = N.Z.getGuild(n);
    if (null == s) return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let o = a[r];
    if (null == o || o.roles.includes(i)) return !1;
    o.roles = [...o.roles, i];
    let l = z(N.Z.getRoles(s.id), o.roles);
    return (
        (a[r] = {
            ...o,
            ...l
        }),
        !0
    );
}
function es(e) {
    let { guildId: n, userId: r, roleId: i } = e,
        a = D[n];
    if (null == a) return !1;
    let s = N.Z.getGuild(n);
    if (null == s) return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let o = a[r];
    if (null == o || !o.roles.includes(i)) return !1;
    o.roles = o.roles.filter((e) => e !== i);
    let l = z(N.Z.getRoles(s.id), o.roles);
    return (
        (a[r] = {
            ...o,
            ...l
        }),
        !0
    );
}
function eo(e) {
    let { guildMember: n, guildId: r } = e,
        i = D[r];
    if (null == i) return !1;
    let a = N.Z.getGuild(r);
    if (null == a) return O.warn('Guild '.concat(r, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (i[n.user.id] = q({
        userId: n.user.id,
        nick: n.nick,
        guildId: r,
        avatar: n.avatar,
        avatarDecoration: ep(n),
        guildRoles: N.Z.getRoles(a.id),
        roles: n.roles,
        premiumSince: n.premium_since,
        isPending: n.pending,
        joinedAt: n.joined_at,
        communicationDisabledUntil: n.communication_disabled_until,
        unusualDMActivityUntil: n.unusual_dm_activity_until,
        flags: n.flags,
        fullProfileLoadedTimestamp: Date.now()
    })),
        Z(r, i[n.user.id]);
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
    return eh(n, r.map((e) => e.member).filter(b.lm));
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
            .filter(b.lm)
    );
}
function e_(e) {
    let { guildId: n, addedMembers: r } = e;
    return null != r && eh(n, r.map((e) => e.member).filter(b.lm));
}
function eh(e, n) {
    let r = D[e];
    if (null == r) return !1;
    let i = N.Z.getGuild(e);
    return null == i
        ? (O.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (n.forEach((n) => {
              var a;
              let s = r[n.user.id];
              (r[n.user.id] = q({
                  userId: n.user.id,
                  nick: n.nick,
                  guildId: e,
                  avatar: n.avatar,
                  avatarDecoration: ep(n),
                  guildRoles: N.Z.getRoles(i.id),
                  roles: n.roles,
                  premiumSince: n.premium_since,
                  isPending: n.pending,
                  joinedAt: n.joined_at,
                  communicationDisabledUntil: n.communication_disabled_until,
                  flags: n.flags,
                  fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null !== (a = n.unusual_dm_activity_until) && void 0 !== a ? a : null == s ? void 0 : s.unusualDMActivityUntil
              })),
                  Z(e, r[n.user.id]);
          }),
          U++,
          !0);
}
function ep(e) {
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
    return eI(n);
}
function ev(e, n) {
    return eI({
        id: e,
        members: n.filter(h.Z).map((e) => e.member)
    });
}
function eI(e) {
    let n = e.id;
    !(n in D) && (D[e.id] = {});
    let r = N.Z.getGuild(n);
    if (null == r) return !1;
    let i = D[n];
    for (let s of e.members) {
        var a;
        let o = s.user.id,
            l = i[o],
            u = q({
                userId: o,
                nick: s.nick,
                guildId: e.id,
                avatar: s.avatar,
                avatarDecoration: ep(s),
                guildRoles: N.Z.getRoles(r.id),
                roles: s.roles,
                premiumSince: s.premium_since,
                isPending: s.pending,
                joinedAt: s.joined_at,
                communicationDisabledUntil: s.communication_disabled_until,
                fullProfileLoadedTimestamp: null == l ? void 0 : l.fullProfileLoadedTimestamp,
                flags: s.flags,
                unusualDMActivityUntil: null !== (a = s.unusual_dm_activity_until) && void 0 !== a ? a : null == l ? void 0 : l.unusualDMActivityUntil
            });
        (i[o] = u), Z(n, u);
    }
    return !0;
}
function eT(e) {
    let { guild: n } = e;
    delete D[n.id], delete L[n.id], V(n.id);
}
function eb(e) {
    let n = D[e.guildId];
    if (null == n) return !1;
    let r = N.Z.getGuild(e.guildId);
    if (null == r) return O.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let i = S.default.getId();
    for (let a of y.default.keys(n)) {
        let s = n[a];
        if ((null != s.roles && s.roles.length > 0) || null != s.colorString || null != s.hoistRoleId) {
            let o = a === i && 'GUILD_ROLE_DELETE' === e.type ? s.roles.filter((n) => n !== e.roleId) : s.roles;
            (n[a] = q({
                userId: a,
                nick: s.nick,
                guildId: e.guildId,
                avatar: s.avatar,
                avatarDecoration: s.avatarDecoration,
                guildRoles: N.Z.getRoles(r.id),
                roles: o,
                premiumSince: s.premiumSince,
                isPending: s.isPending,
                joinedAt: s.joinedAt,
                flags: s.flags,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp
            })),
                Z(e.guildId, n[a]);
        }
    }
}
function ey(e) {
    var n, r, i;
    let { guildId: a, roles: s, addedRoleIds: o, removedRoleIds: l, flags: u } = e,
        d = S.default.getId(),
        f = D[a],
        _ = null != f ? f[d] : null;
    if (null == _) return !1;
    let h = N.Z.getGuild(a);
    if (null == h) return !1;
    let p = null !== (n = G[a]) && void 0 !== n ? n : {};
    (G[a] = {
        added: c().difference(c().union(null !== (r = p.added) && void 0 !== r ? r : [], o), null != l ? l : []),
        removed: c().difference(c().union(null !== (i = p.removed) && void 0 !== i ? i : [], l), null != o ? o : [])
    }),
        (f[d] = q({
            userId: d,
            guildId: a,
            nick: _.nick,
            avatar: _.avatar,
            avatarDecoration: _.avatarDecoration,
            guildRoles: N.Z.getRoles(h.id),
            roles: null != s ? s : _.roles,
            premiumSince: _.premiumSince,
            isPending: _.isPending,
            joinedAt: _.joinedAt,
            flags: null != u ? u : _.flags,
            fullProfileLoadedTimestamp: _.fullProfileLoadedTimestamp
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
    let i = N.Z.getGuild(n);
    if (null == i) return O.warn('Guild '.concat(n, ' not found during IMPERSONATE_UPDATE.')), !1;
    let a = S.default.getId(),
        s = r[a];
    r[a] = q({
        userId: a,
        nick: s.nick,
        guildId: n,
        avatar: s.avatar,
        avatarDecoration: s.avatarDecoration,
        guildRoles: N.Z.getRoles(i.id),
        roles: s.roles,
        premiumSince: s.premiumSince,
        isPending: s.isPending,
        joinedAt: s.joinedAt,
        communicationDisabledUntil: s.communicationDisabledUntil,
        fullProfileLoadedTimestamp: s.fullProfileLoadedTimestamp,
        flags: s.flags
    });
}
function eN(e) {
    var n;
    let { message: r, guildId: i } = e;
    (null === (n = r.resolved) || void 0 === n ? void 0 : n.members) != null &&
        null != i &&
        eI({
            id: i,
            members: Object.entries(r.resolved.members)
                .map((e) => {
                    var n, i;
                    let [a, s] = e,
                        o = null === (i = r.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[a];
                    if (null != o)
                        return {
                            ...s,
                            user: o
                        };
                })
                .filter((e) => null != e)
        });
}
function eC(e) {
    var n;
    if ((null === (n = e.resolved) || void 0 === n ? void 0 : n.members) == null) return;
    let r = A.Z.getChannel(e.channel_id);
    !(null == r || r.isPrivate()) &&
        eI({
            id: r.guild_id,
            members: Object.entries(e.resolved.members)
                .map((n) => {
                    var r, i;
                    let [a, s] = n,
                        o = null === (i = e.resolved) || void 0 === i ? void 0 : null === (r = i.users) || void 0 === r ? void 0 : r[a];
                    if (null != o)
                        return {
                            ...s,
                            user: o
                        };
                })
                .filter((e) => null != e)
        });
}
function eR(e) {
    let { messages: n } = e;
    n.forEach((e) => eC(e));
}
function eO(e) {
    let { messages: n } = e;
    n.forEach((e) => eR({ messages: e }));
}
function eD(e) {
    let { location: n, participants: r } = e,
        i = (0, p.j)(n);
    return null != i && ev(i, r);
}
!(function (e) {
    (e[(e.GUILD = 0)] = 'GUILD'), (e[(e.USER = 1)] = 'USER');
})(i || (i = {}));
class eL extends (a = f.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, S.default, I.Z);
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
        return null != i && (0, T.yE)(i, C.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let n = D[e];
        return null == n ? [] : y.default.keys(n);
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
        if (null != r && n === S.default.getId() && (I.Z.isViewingRoles(e) || I.Z.isFullServerPreview(e))) {
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
        return null !== (n = G[e]) && void 0 !== n ? n : F;
    }
    getMemberRoleWithPendingUpdates(e, n) {
        var r, i;
        let a = null !== (i = null === (r = this.getMember(e, n)) || void 0 === r ? void 0 : r.roles) && void 0 !== i ? i : [],
            s = G[e];
        return null == s ? a : c().difference(c().union(a, s.added), s.removed);
    }
    getMemberVersion() {
        return U;
    }
}
R(eL, 'displayName', 'GuildMemberStore'),
    (n.ZP = new eL(_.Z, {
        CONNECTION_OPEN: Q,
        CONNECTION_OPEN_SUPPLEMENTAL: X,
        OVERLAY_INITIALIZE: $,
        CACHE_LOADED: ee,
        CACHE_LOADED_LAZY: et,
        GUILD_CREATE: eE,
        GUILD_DELETE: eT,
        GUILD_MEMBER_ADD: ei,
        GUILD_MEMBER_UPDATE: ei,
        GUILD_MEMBER_UPDATE_LOCAL: ey,
        GUILD_MEMBERS_CHUNK_BATCH: el,
        GUILD_MEMBER_REMOVE: eg,
        THREAD_MEMBER_LIST_UPDATE: ec,
        THREAD_MEMBERS_UPDATE: e_,
        LOAD_ARCHIVED_THREADS_SUCCESS: ed,
        LOAD_FORUM_POSTS: ef,
        GUILD_ROLE_UPDATE: eb,
        GUILD_ROLE_DELETE: eb,
        GUILD_ROLE_MEMBER_REMOVE: es,
        GUILD_ROLE_MEMBER_ADD: ea,
        GUILD_MEMBER_PROFILE_UPDATE: eo,
        IMPERSONATE_UPDATE: eA,
        IMPERSONATE_STOP: eA,
        PASSIVE_UPDATE_V2: eu,
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eS,
        LOCAL_MESSAGES_LOADED: er,
        MESSAGE_CREATE: eN,
        MESSAGE_UPDATE: eN,
        LOAD_MESSAGES_SUCCESS: eR,
        LOAD_MESSAGES_AROUND_SUCCESS: eR,
        LOAD_PINNED_MESSAGES_SUCCESS: eR,
        LOAD_RECENT_MENTIONS_SUCCESS: eR,
        SEARCH_FINISH: eO,
        MOD_VIEW_SEARCH_FINISH: eO,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: em,
        EMBEDDED_ACTIVITY_UPDATE_V2: eD
    }));
