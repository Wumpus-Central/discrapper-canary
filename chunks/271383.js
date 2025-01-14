r.d(n, {
    O5: function () {
        return W;
    },
    V6: function () {
        return Y;
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
    P = !1,
    M = 0,
    k = 0,
    U = {},
    B = {},
    G = {
        added: [],
        removed: []
    };
function F(e, n) {
    if (null == n.communicationDisabledUntil || !(0, E.b)(n)) return Z(e, n.userId);
    let r = H(e, n.userId);
    w[r] !== n.communicationDisabledUntil && (0, E.b)(n) && ((w[r] = n.communicationDisabledUntil), V(r));
}
function Z(e, n) {
    if (null != n) {
        let r = H(e, n);
        null != w[r] && V(r), j(H(e, n));
    } else
        for (let n in w) {
            let r = n;
            W(r) === e && (V(n), j(r));
        }
}
function V(e) {
    (M += 1), (U[e] = M);
}
function j(e) {
    Y(e) === S.default.getId() && (0, v.l)(W(e)), delete w[e];
}
function H(e, n) {
    let r = [];
    return (r[0] = e), (r[1] = n), r.join('-');
}
function Y(e) {
    return e.split('-')[1];
}
function W(e) {
    return e.split('-')[0];
}
function K(e, n) {
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
function z(e) {
    var n, r;
    let { userId: i, nick: a, guildId: s, avatar: o, avatarDecoration: l, guildRoles: u, roles: c, premiumSince: d, isPending: f, joinedAt: _, communicationDisabledUntil: h, unusualDMActivityUntil: p, fullProfileLoadedTimestamp: m, flags: g } = e,
        { colorString: E, colorRoleId: v, iconRoleId: b, hoistRoleId: A, highestRoleId: N } = K(u, c),
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
            L[s] = {
                ...R,
                ...I.Z.getMemberOptions(s),
                roles: null != e ? y.default.keys(e) : []
            };
        } else null != L[s] && delete L[s];
    }
    return R;
}
function q(e) {
    P ? (P = !1) : (D = {}), (w = {}), X(e);
}
function Q(e) {
    e.guilds.forEach((e) => {
        var n;
        let r = e.id;
        ev({
            id: r,
            members: e.members
        }),
            null === (n = e.activity_instances) ||
                void 0 === n ||
                n.forEach((e) => {
                    eE(r, e.participants);
                });
    });
}
function X(e) {
    e.guilds.forEach((e) => {
        ev(e);
    });
}
function J(e) {
    let { guildMembers: n } = e;
    D = { ...n };
}
function $(e) {
    let { guildMembers: n, guilds: r } = e;
    (P = !0), (D = { ...n }), (x = {}), et(r);
}
function ee(e) {
    let { guilds: n } = e;
    et(n);
}
function et(e) {
    for (let n of e) {
        if (null != n.member) {
            if (
                (null == x[n.id]
                    ? (x[n.id] = n.member)
                    : (x[n.id] = {
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
function en(e) {
    var n, r;
    if (null == e.guildId || null == N.Z.getGuild(e.guildId)) return !1;
    (P = !0), (D[e.guildId] = null !== (n = D[e.guildId]) && void 0 !== n ? n : {});
    let i = !1;
    for (let n of ((P = !0), (D[e.guildId] = null !== (r = D[e.guildId]) && void 0 !== r ? r : {}), e.members)) null == D[e.guildId][n.userId] && ((i = !0), (D[e.guildId][n.userId] = n));
    return i;
}
function er(e) {
    var n;
    let { guildId: r, user: i, nick: a, avatar: s, avatarDecoration: o, roles: l, premiumSince: u, isPending: c, joinedAt: d, communicationDisabledUntil: f, unusualDMActivityUntil: _, flags: h } = e,
        p = D[r];
    if (null == p) return !1;
    let g = N.Z.getGuild(r);
    if (null == g) return O.warn('Guild '.concat(r, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (p[i.id] = z({
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
        F(r, p[i.id]);
}
function ei(e) {
    let { guildId: n, userId: r, roleId: i } = e,
        a = D[n];
    if (null == a) return !1;
    let s = N.Z.getGuild(n);
    if (null == s) return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let o = a[r];
    if (null == o || o.roles.includes(i)) return !1;
    o.roles = [...o.roles, i];
    let l = K(N.Z.getRoles(s.id), o.roles);
    return (
        (a[r] = {
            ...o,
            ...l
        }),
        !0
    );
}
function ea(e) {
    let { guildId: n, userId: r, roleId: i } = e,
        a = D[n];
    if (null == a) return !1;
    let s = N.Z.getGuild(n);
    if (null == s) return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let o = a[r];
    if (null == o || !o.roles.includes(i)) return !1;
    o.roles = o.roles.filter((e) => e !== i);
    let l = K(N.Z.getRoles(s.id), o.roles);
    return (
        (a[r] = {
            ...o,
            ...l
        }),
        !0
    );
}
function es(e) {
    let { guildMember: n, guildId: r } = e,
        i = D[r];
    if (null == i) return !1;
    let a = N.Z.getGuild(r);
    if (null == a) return O.warn('Guild '.concat(r, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (i[n.user.id] = z({
        userId: n.user.id,
        nick: n.nick,
        guildId: r,
        avatar: n.avatar,
        avatarDecoration: eh(n),
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
        F(r, i[n.user.id]);
}
function eo(e) {
    let n = !1;
    for (let r of e.chunks) n = e_(r.guildId, r.members) || n;
    return n;
}
function el(e) {
    return !!(e.members.length > 0) && e_(e.guildId, e.members);
}
function eu(e) {
    let { guildId: n, members: r } = e;
    return e_(n, r.map((e) => e.member).filter(b.lm));
}
function ec(e) {
    let { guildId: n, owners: r } = e;
    return e_(n, r);
}
function ed(e) {
    let { guildId: n, threads: r } = e;
    return e_(
        n,
        Object.values(r)
            .map((e) => e.owner)
            .filter(b.lm)
    );
}
function ef(e) {
    let { guildId: n, addedMembers: r } = e;
    return null != r && e_(n, r.map((e) => e.member).filter(b.lm));
}
function e_(e, n) {
    let r = D[e];
    if (null == r) return !1;
    let i = N.Z.getGuild(e);
    return null == i
        ? (O.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (n.forEach((n) => {
              var a;
              let s = r[n.user.id];
              (r[n.user.id] = z({
                  userId: n.user.id,
                  nick: n.nick,
                  guildId: e,
                  avatar: n.avatar,
                  avatarDecoration: eh(n),
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
                  F(e, r[n.user.id]);
          }),
          k++,
          !0);
}
function eh(e) {
    return (0, m.FG)(e.avatar_decoration_data);
}
function ep(e) {
    let { guildId: n, members: r } = e;
    return e_(
        n,
        r.map((e) => {
            let { member: n } = e;
            return n;
        })
    );
}
function em(e) {
    let { guildId: n, user: r } = e,
        i = D[n];
    if (null == i || null == i[r.id]) return !1;
    delete i[r.id], Z(n, r.id), k++;
}
function eg(e) {
    let { guild: n } = e;
    return ev(n);
}
function eE(e, n) {
    return ev({
        id: e,
        members: n.filter(h.Z).map((e) => e.member)
    });
}
function ev(e) {
    let n = e.id;
    !(n in D) && (D[e.id] = {});
    let r = N.Z.getGuild(n);
    if (null == r) return !1;
    let i = D[n];
    for (let s of e.members) {
        var a;
        let o = s.user.id,
            l = i[o],
            u = z({
                userId: o,
                nick: s.nick,
                guildId: e.id,
                avatar: s.avatar,
                avatarDecoration: eh(s),
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
        (i[o] = u), F(n, u);
    }
    return !0;
}
function eI(e) {
    let { guild: n } = e;
    delete D[n.id], Z(n.id);
}
function eT(e) {
    let n = D[e.guildId];
    if (null == n) return !1;
    let r = N.Z.getGuild(e.guildId);
    if (null == r) return O.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let i = S.default.getId();
    for (let a of y.default.keys(n)) {
        let s = n[a];
        if ((null != s.roles && s.roles.length > 0) || null != s.colorString || null != s.hoistRoleId) {
            let o = a === i && 'GUILD_ROLE_DELETE' === e.type ? s.roles.filter((n) => n !== e.roleId) : s.roles;
            (n[a] = z({
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
                F(e.guildId, n[a]);
        }
    }
}
function eb(e) {
    var n, r, i;
    let { guildId: a, roles: s, addedRoleIds: o, removedRoleIds: l, flags: u } = e,
        d = S.default.getId(),
        f = D[a],
        _ = null != f ? f[d] : null;
    if (null == _) return !1;
    let h = N.Z.getGuild(a);
    if (null == h) return !1;
    let p = null !== (n = B[a]) && void 0 !== n ? n : {};
    (B[a] = {
        added: c().difference(c().union(null !== (r = p.added) && void 0 !== r ? r : [], o), null != l ? l : []),
        removed: c().difference(c().union(null !== (i = p.removed) && void 0 !== i ? i : [], l), null != o ? o : [])
    }),
        (f[d] = z({
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
function ey(e) {
    let { guildId: n } = e;
    if (null == n) return !1;
    delete B[n];
}
function eS(e) {
    let { guildId: n } = e,
        r = D[n];
    if (null == r) return !1;
    let i = N.Z.getGuild(n);
    if (null == i) return O.warn('Guild '.concat(n, ' not found during IMPERSONATE_UPDATE.')), !1;
    let a = S.default.getId(),
        s = r[a];
    r[a] = z({
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
function eA(e) {
    var n;
    let { message: r, guildId: i } = e;
    (null === (n = r.resolved) || void 0 === n ? void 0 : n.members) != null &&
        null != i &&
        ev({
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
function eN(e) {
    var n;
    if ((null === (n = e.resolved) || void 0 === n ? void 0 : n.members) == null) return;
    let r = A.Z.getChannel(e.channel_id);
    !(null == r || r.isPrivate()) &&
        ev({
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
function eC(e) {
    let { messages: n } = e;
    n.forEach((e) => eN(e));
}
function eR(e) {
    let { messages: n } = e;
    n.forEach((e) => eC({ messages: e }));
}
function eO(e) {
    let { location: n, participants: r } = e,
        i = (0, p.j)(n);
    return null != i && eE(i, r);
}
!(function (e) {
    (e[(e.GUILD = 0)] = 'GUILD'), (e[(e.USER = 1)] = 'USER');
})(i || (i = {}));
class eD extends (a = f.ZP.Store) {
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
            return null !== (i = L[e]) && void 0 !== i ? i : r;
        }
        return r;
    }
    getSelfMember(e) {
        return this.getMember(e, S.default.getId());
    }
    getCachedSelfMember(e) {
        var n;
        return null !== (n = x[e]) && void 0 !== n ? n : null;
    }
    getNick(e, n) {
        if (null == e || null == n) return null;
        let r = this.getMember(e, n);
        return null != r ? r.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return w;
    }
    getCommunicationDisabledVersion() {
        return M;
    }
    getPendingRoleUpdates(e) {
        var n;
        return null !== (n = B[e]) && void 0 !== n ? n : G;
    }
    getMemberRoleWithPendingUpdates(e, n) {
        var r, i;
        let a = null !== (i = null === (r = this.getMember(e, n)) || void 0 === r ? void 0 : r.roles) && void 0 !== i ? i : [],
            s = B[e];
        return null == s ? a : c().difference(c().union(a, s.added), s.removed);
    }
    getMemberVersion() {
        return k;
    }
}
R(eD, 'displayName', 'GuildMemberStore'),
    (n.ZP = new eD(_.Z, {
        CONNECTION_OPEN: q,
        CONNECTION_OPEN_SUPPLEMENTAL: Q,
        OVERLAY_INITIALIZE: J,
        CACHE_LOADED: $,
        CACHE_LOADED_LAZY: ee,
        GUILD_CREATE: eg,
        GUILD_DELETE: eI,
        GUILD_MEMBER_ADD: er,
        GUILD_MEMBER_UPDATE: er,
        GUILD_MEMBER_UPDATE_LOCAL: eb,
        GUILD_MEMBERS_CHUNK_BATCH: eo,
        GUILD_MEMBER_REMOVE: em,
        THREAD_MEMBER_LIST_UPDATE: eu,
        THREAD_MEMBERS_UPDATE: ef,
        LOAD_ARCHIVED_THREADS_SUCCESS: ec,
        LOAD_FORUM_POSTS: ed,
        GUILD_ROLE_UPDATE: eT,
        GUILD_ROLE_DELETE: eT,
        GUILD_ROLE_MEMBER_REMOVE: ea,
        GUILD_ROLE_MEMBER_ADD: ei,
        GUILD_MEMBER_PROFILE_UPDATE: es,
        IMPERSONATE_UPDATE: eS,
        IMPERSONATE_STOP: eS,
        PASSIVE_UPDATE_V2: el,
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: ey,
        LOCAL_MESSAGES_LOADED: en,
        MESSAGE_CREATE: eA,
        MESSAGE_UPDATE: eA,
        LOAD_MESSAGES_SUCCESS: eC,
        LOAD_MESSAGES_AROUND_SUCCESS: eC,
        LOAD_PINNED_MESSAGES_SUCCESS: eC,
        LOAD_RECENT_MENTIONS_SUCCESS: eC,
        SEARCH_FINISH: eR,
        MOD_VIEW_SEARCH_FINISH: eR,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: ep,
        EMBEDDED_ACTIVITY_UPDATE_V2: eO
    }));
