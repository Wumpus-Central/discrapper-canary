r.d(n, {
    O5: function () {
        return Y;
    },
    V6: function () {
        return H;
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
    m = r(710845),
    g = r(69882),
    E = r(134049),
    v = r(160404),
    I = r(630388),
    T = r(823379),
    b = r(709054),
    y = r(314897),
    S = r(592125),
    A = r(430824),
    N = r(372897);
function C(e, n, r) {
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
let R = new m.Z('GuildMemberStore'),
    O = {},
    D = {},
    L = {},
    x = {},
    w = !1,
    P = 0,
    M = 0,
    k = {},
    U = {},
    B = {
        added: [],
        removed: []
    };
function G(e, n) {
    if (null == n.communicationDisabledUntil || !(0, g.b)(n)) return Z(e, n.userId);
    let r = j(e, n.userId);
    x[r] !== n.communicationDisabledUntil && (0, g.b)(n) && ((x[r] = n.communicationDisabledUntil), F(r));
}
function Z(e, n) {
    if (null != n) {
        let r = j(e, n);
        null != x[r] && F(r), V(j(e, n));
    } else
        for (let n in x) {
            let r = n;
            Y(r) === e && (F(n), V(r));
        }
}
function F(e) {
    (P += 1), (k[e] = P);
}
function V(e) {
    H(e) === y.default.getId() && (0, E.l)(Y(e)), delete x[e];
}
function j(e, n) {
    let r = [];
    return (r[0] = e), (r[1] = n), r.join('-');
}
function H(e) {
    return e.split('-')[1];
}
function Y(e) {
    return e.split('-')[0];
}
function W(e, n) {
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
function K(e) {
    var n, r;
    let { userId: i, nick: a, guildId: s, avatar: o, avatarDecoration: l, guildRoles: u, roles: c, premiumSince: d, isPending: f, joinedAt: _, communicationDisabledUntil: h, unusualDMActivityUntil: p, fullProfileLoadedTimestamp: m, flags: g } = e,
        { colorString: E, colorRoleId: T, iconRoleId: S, hoistRoleId: A, highestRoleId: C } = W(u, c),
        R = {
            userId: i,
            nick: a,
            guildId: s,
            avatar: o,
            avatarDecoration: l,
            roles: c,
            colorString: E,
            colorRoleId: T,
            iconRoleId: S,
            hoistRoleId: A,
            highestRoleId: C,
            premiumSince: d,
            isPending: f,
            joinedAt: _,
            communicationDisabledUntil: h,
            unusualDMActivityUntil: p,
            fullProfileLoadedTimestamp: m,
            flags: g
        };
    if (((0, I.yE)(null !== (n = R.flags) && void 0 !== n ? n : 0, N.q.IS_GUEST) && (R.flags = (0, I.pj)(null !== (r = R.flags) && void 0 !== r ? r : 0, N.q.BYPASSES_VERIFICATION)), null == O[s])) return R;
    if (i === y.default.getId()) {
        if (v.Z.isViewingRoles(s) || v.Z.isFullServerPreview(s)) {
            let e = v.Z.getViewingRoles(s);
            D[s] = {
                ...R,
                ...v.Z.getMemberOptions(s),
                roles: null != e ? b.default.keys(e) : []
            };
        } else null != D[s] && delete D[s];
    }
    return R;
}
function z(e) {
    w ? (w = !1) : (O = {}), (x = {}), Q(e);
}
function q(e) {
    e.guilds.forEach((e) => {
        var n;
        let r = e.id;
        eE({
            id: r,
            members: e.members
        }),
            null === (n = e.activity_instances) ||
                void 0 === n ||
                n.forEach((e) => {
                    eg(r, e.participants);
                });
    });
}
function Q(e) {
    e.guilds.forEach((e) => {
        eE(e);
    });
}
function X(e) {
    let { guildMembers: n } = e;
    O = { ...n };
}
function J(e) {
    let { guildMembers: n, guilds: r } = e;
    (w = !0), (O = { ...n }), (L = {}), ee(r);
}
function $(e) {
    let { guilds: n } = e;
    ee(n);
}
function ee(e) {
    for (let n of e) {
        if (null != n.member) {
            if (
                (null == L[n.id]
                    ? (L[n.id] = n.member)
                    : (L[n.id] = {
                          ...n.member,
                          roles: n.member.roles
                      }),
                null != O[n.id])
            ) {
                let e = O[n.id];
                null != e[n.member.userId] &&
                    (e[n.member.userId] = {
                        ...e[n.member.userId],
                        roles: n.member.roles
                    });
            }
        }
    }
}
function et(e) {
    var n, r;
    if (null == e.guildId || null == A.Z.getGuild(e.guildId)) return !1;
    (w = !0), (O[e.guildId] = null !== (n = O[e.guildId]) && void 0 !== n ? n : {});
    let i = !1;
    for (let n of ((w = !0), (O[e.guildId] = null !== (r = O[e.guildId]) && void 0 !== r ? r : {}), e.members)) null == O[e.guildId][n.userId] && ((i = !0), (O[e.guildId][n.userId] = n));
    return i;
}
function en(e) {
    var n;
    let { guildId: r, user: i, nick: a, avatar: s, avatarDecoration: o, roles: l, premiumSince: u, isPending: c, joinedAt: d, communicationDisabledUntil: f, unusualDMActivityUntil: _, flags: h } = e,
        p = O[r];
    if (null == p) return !1;
    let m = A.Z.getGuild(r);
    if (null == m) return R.warn('Guild '.concat(r, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (p[i.id] = K({
        userId: i.id,
        nick: a,
        guildId: r,
        avatar: s,
        avatarDecoration:
            null != o
                ? {
                      asset: o.asset,
                      skuId: o.sku_id
                  }
                : void 0,
        guildRoles: A.Z.getRoles(m.id),
        roles: l,
        premiumSince: u,
        isPending: c,
        joinedAt: d,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: null === (n = p[i.id]) || void 0 === n ? void 0 : n.fullProfileLoadedTimestamp,
        flags: h
    })),
        G(r, p[i.id]);
}
function er(e) {
    let { guildId: n, userId: r, roleId: i } = e,
        a = O[n];
    if (null == a) return !1;
    let s = A.Z.getGuild(n);
    if (null == s) return R.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let o = a[r];
    if (null == o || o.roles.includes(i)) return !1;
    o.roles = [...o.roles, i];
    let l = W(A.Z.getRoles(s.id), o.roles);
    return (
        (a[r] = {
            ...o,
            ...l
        }),
        !0
    );
}
function ei(e) {
    let { guildId: n, userId: r, roleId: i } = e,
        a = O[n];
    if (null == a) return !1;
    let s = A.Z.getGuild(n);
    if (null == s) return R.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let o = a[r];
    if (null == o || !o.roles.includes(i)) return !1;
    o.roles = o.roles.filter((e) => e !== i);
    let l = W(A.Z.getRoles(s.id), o.roles);
    return (
        (a[r] = {
            ...o,
            ...l
        }),
        !0
    );
}
function ea(e) {
    let { guildMember: n, guildId: r } = e,
        i = O[r];
    if (null == i) return !1;
    let a = A.Z.getGuild(r);
    if (null == a) return R.warn('Guild '.concat(r, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (i[n.user.id] = K({
        userId: n.user.id,
        nick: n.nick,
        guildId: r,
        avatar: n.avatar,
        avatarDecoration: e_(n),
        guildRoles: A.Z.getRoles(a.id),
        roles: n.roles,
        premiumSince: n.premium_since,
        isPending: n.pending,
        joinedAt: n.joined_at,
        communicationDisabledUntil: n.communication_disabled_until,
        unusualDMActivityUntil: n.unusual_dm_activity_until,
        flags: n.flags,
        fullProfileLoadedTimestamp: Date.now()
    })),
        G(r, i[n.user.id]);
}
function es(e) {
    let n = !1;
    for (let r of e.chunks) n = ef(r.guildId, r.members) || n;
    return n;
}
function eo(e) {
    return !!(e.members.length > 0) && ef(e.guildId, e.members);
}
function el(e) {
    let { guildId: n, members: r } = e;
    return ef(n, r.map((e) => e.member).filter(T.lm));
}
function eu(e) {
    let { guildId: n, owners: r } = e;
    return ef(n, r);
}
function ec(e) {
    let { guildId: n, threads: r } = e;
    return ef(
        n,
        Object.values(r)
            .map((e) => e.owner)
            .filter(T.lm)
    );
}
function ed(e) {
    let { guildId: n, addedMembers: r } = e;
    return null != r && ef(n, r.map((e) => e.member).filter(T.lm));
}
function ef(e, n) {
    let r = O[e];
    if (null == r) return !1;
    let i = A.Z.getGuild(e);
    return null == i
        ? (R.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (n.forEach((n) => {
              var a;
              let s = r[n.user.id];
              (r[n.user.id] = K({
                  userId: n.user.id,
                  nick: n.nick,
                  guildId: e,
                  avatar: n.avatar,
                  avatarDecoration: e_(n),
                  guildRoles: A.Z.getRoles(i.id),
                  roles: n.roles,
                  premiumSince: n.premium_since,
                  isPending: n.pending,
                  joinedAt: n.joined_at,
                  communicationDisabledUntil: n.communication_disabled_until,
                  flags: n.flags,
                  fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null !== (a = n.unusual_dm_activity_until) && void 0 !== a ? a : null == s ? void 0 : s.unusualDMActivityUntil
              })),
                  G(e, r[n.user.id]);
          }),
          M++,
          !0);
}
function e_(e) {
    return null != e.avatar_decoration_data
        ? {
              asset: e.avatar_decoration_data.asset,
              skuId: e.avatar_decoration_data.sku_id
          }
        : void 0;
}
function eh(e) {
    let { guildId: n, members: r } = e;
    return ef(
        n,
        r.map((e) => {
            let { member: n } = e;
            return n;
        })
    );
}
function ep(e) {
    let { guildId: n, user: r } = e,
        i = O[n];
    if (null == i || null == i[r.id]) return !1;
    delete i[r.id], Z(n, r.id), M++;
}
function em(e) {
    let { guild: n } = e;
    return eE(n);
}
function eg(e, n) {
    return eE({
        id: e,
        members: n.filter(h.Z).map((e) => e.member)
    });
}
function eE(e) {
    let n = e.id;
    !(n in O) && (O[e.id] = {});
    let r = A.Z.getGuild(n);
    if (null == r) return !1;
    let i = O[n];
    for (let s of e.members) {
        var a;
        let o = s.user.id,
            l = i[o],
            u = K({
                userId: o,
                nick: s.nick,
                guildId: e.id,
                avatar: s.avatar,
                avatarDecoration: e_(s),
                guildRoles: A.Z.getRoles(r.id),
                roles: s.roles,
                premiumSince: s.premium_since,
                isPending: s.pending,
                joinedAt: s.joined_at,
                communicationDisabledUntil: s.communication_disabled_until,
                fullProfileLoadedTimestamp: null == l ? void 0 : l.fullProfileLoadedTimestamp,
                flags: s.flags,
                unusualDMActivityUntil: null !== (a = s.unusual_dm_activity_until) && void 0 !== a ? a : null == l ? void 0 : l.unusualDMActivityUntil
            });
        (i[o] = u), G(n, u);
    }
    return !0;
}
function ev(e) {
    let { guild: n } = e;
    delete O[n.id], Z(n.id);
}
function eI(e) {
    let n = O[e.guildId];
    if (null == n) return !1;
    let r = A.Z.getGuild(e.guildId);
    if (null == r) return R.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let i = y.default.getId();
    for (let a of b.default.keys(n)) {
        let s = n[a];
        if ((null != s.roles && s.roles.length > 0) || null != s.colorString || null != s.hoistRoleId) {
            let o = a === i && 'GUILD_ROLE_DELETE' === e.type ? s.roles.filter((n) => n !== e.roleId) : s.roles;
            (n[a] = K({
                userId: a,
                nick: s.nick,
                guildId: e.guildId,
                avatar: s.avatar,
                avatarDecoration: s.avatarDecoration,
                guildRoles: A.Z.getRoles(r.id),
                roles: o,
                premiumSince: s.premiumSince,
                isPending: s.isPending,
                joinedAt: s.joinedAt,
                flags: s.flags,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp
            })),
                G(e.guildId, n[a]);
        }
    }
}
function eT(e) {
    var n, r, i;
    let { guildId: a, roles: s, addedRoleIds: o, removedRoleIds: l, flags: u } = e,
        d = y.default.getId(),
        f = O[a],
        _ = null != f ? f[d] : null;
    if (null == _) return !1;
    let h = A.Z.getGuild(a);
    if (null == h) return !1;
    let p = null !== (n = U[a]) && void 0 !== n ? n : {};
    (U[a] = {
        added: c().difference(c().union(null !== (r = p.added) && void 0 !== r ? r : [], o), null != l ? l : []),
        removed: c().difference(c().union(null !== (i = p.removed) && void 0 !== i ? i : [], l), null != o ? o : [])
    }),
        (f[d] = K({
            userId: d,
            guildId: a,
            nick: _.nick,
            avatar: _.avatar,
            avatarDecoration: _.avatarDecoration,
            guildRoles: A.Z.getRoles(h.id),
            roles: null != s ? s : _.roles,
            premiumSince: _.premiumSince,
            isPending: _.isPending,
            joinedAt: _.joinedAt,
            flags: null != u ? u : _.flags,
            fullProfileLoadedTimestamp: _.fullProfileLoadedTimestamp
        }));
}
function eb(e) {
    let { guildId: n } = e;
    if (null == n) return !1;
    delete U[n];
}
function ey(e) {
    let { guildId: n } = e,
        r = O[n];
    if (null == r) return !1;
    let i = A.Z.getGuild(n);
    if (null == i) return R.warn('Guild '.concat(n, ' not found during IMPERSONATE_UPDATE.')), !1;
    let a = y.default.getId(),
        s = r[a];
    r[a] = K({
        userId: a,
        nick: s.nick,
        guildId: n,
        avatar: s.avatar,
        avatarDecoration: s.avatarDecoration,
        guildRoles: A.Z.getRoles(i.id),
        roles: s.roles,
        premiumSince: s.premiumSince,
        isPending: s.isPending,
        joinedAt: s.joinedAt,
        communicationDisabledUntil: s.communicationDisabledUntil,
        fullProfileLoadedTimestamp: s.fullProfileLoadedTimestamp,
        flags: s.flags
    });
}
function eS(e) {
    var n;
    let { message: r, guildId: i } = e;
    (null === (n = r.resolved) || void 0 === n ? void 0 : n.members) != null &&
        null != i &&
        eE({
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
function eA(e) {
    var n;
    if ((null === (n = e.resolved) || void 0 === n ? void 0 : n.members) == null) return;
    let r = S.Z.getChannel(e.channel_id);
    !(null == r || r.isPrivate()) &&
        eE({
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
function eN(e) {
    let { messages: n } = e;
    n.forEach((e) => eA(e));
}
function eC(e) {
    let { messages: n } = e;
    n.forEach((e) => eN({ messages: e }));
}
function eR(e) {
    let { location: n, participants: r } = e,
        i = (0, p.j)(n);
    return null != i && eg(i, r);
}
!(function (e) {
    (e[(e.GUILD = 0)] = 'GUILD'), (e[(e.USER = 1)] = 'USER');
})(i || (i = {}));
class eO extends (a = f.ZP.Store) {
    initialize() {
        this.waitFor(A.Z, y.default, v.Z);
    }
    getMutableAllGuildsAndMembers() {
        return O;
    }
    memberOf(e) {
        return c()(O)
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
        for (let i in O) {
            var r;
            let a = null === (r = O[i][e]) || void 0 === r ? void 0 : r.nick;
            if (null != a) !Object.prototype.hasOwnProperty.call(n, a) && (n[a] = []), n[a].push(i);
        }
        return n;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, n) {
        if (null == e || null == n) return !1;
        let r = O[e];
        return null != r && null != r[n];
    }
    isGuestOrLurker(e, n) {
        var r;
        if (null == e || null == n) return !1;
        let i = O[e];
        return null != i && (null === (r = i[n]) || void 0 === r ? void 0 : r.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let n = y.default.getId(),
            r = O[e];
        if (null == r || null == r[n]) return !1;
        let i = r[n].flags;
        return null != i && (0, I.yE)(i, N.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let n = O[e];
        return null == n ? [] : b.default.keys(n);
    }
    getMembers(e) {
        if (null == e) return [];
        let n = O[e];
        return null == n ? [] : Object.values(n);
    }
    getTrueMember(e, n) {
        let r = O[e];
        return null != r ? r[n] : null;
    }
    getMember(e, n) {
        let r = this.getTrueMember(e, n);
        if (null != r && n === y.default.getId() && (v.Z.isViewingRoles(e) || v.Z.isFullServerPreview(e))) {
            var i;
            return null !== (i = D[e]) && void 0 !== i ? i : r;
        }
        return r;
    }
    getSelfMember(e) {
        return this.getMember(e, y.default.getId());
    }
    getCachedSelfMember(e) {
        var n;
        return null !== (n = L[e]) && void 0 !== n ? n : null;
    }
    getNick(e, n) {
        if (null == e || null == n) return null;
        let r = this.getMember(e, n);
        return null != r ? r.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return x;
    }
    getCommunicationDisabledVersion() {
        return P;
    }
    getPendingRoleUpdates(e) {
        var n;
        return null !== (n = U[e]) && void 0 !== n ? n : B;
    }
    getMemberRoleWithPendingUpdates(e, n) {
        var r, i;
        let a = null !== (i = null === (r = this.getMember(e, n)) || void 0 === r ? void 0 : r.roles) && void 0 !== i ? i : [],
            s = U[e];
        return null == s ? a : c().difference(c().union(a, s.added), s.removed);
    }
    getMemberVersion() {
        return M;
    }
}
C(eO, 'displayName', 'GuildMemberStore'),
    (n.ZP = new eO(_.Z, {
        CONNECTION_OPEN: z,
        CONNECTION_OPEN_SUPPLEMENTAL: q,
        OVERLAY_INITIALIZE: X,
        CACHE_LOADED: J,
        CACHE_LOADED_LAZY: $,
        GUILD_CREATE: em,
        GUILD_DELETE: ev,
        GUILD_MEMBER_ADD: en,
        GUILD_MEMBER_UPDATE: en,
        GUILD_MEMBER_UPDATE_LOCAL: eT,
        GUILD_MEMBERS_CHUNK_BATCH: es,
        GUILD_MEMBER_REMOVE: ep,
        THREAD_MEMBER_LIST_UPDATE: el,
        THREAD_MEMBERS_UPDATE: ed,
        LOAD_ARCHIVED_THREADS_SUCCESS: eu,
        LOAD_FORUM_POSTS: ec,
        GUILD_ROLE_UPDATE: eI,
        GUILD_ROLE_DELETE: eI,
        GUILD_ROLE_MEMBER_REMOVE: ei,
        GUILD_ROLE_MEMBER_ADD: er,
        GUILD_MEMBER_PROFILE_UPDATE: ea,
        IMPERSONATE_UPDATE: ey,
        IMPERSONATE_STOP: ey,
        PASSIVE_UPDATE_V2: eo,
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eb,
        LOCAL_MESSAGES_LOADED: et,
        MESSAGE_CREATE: eS,
        MESSAGE_UPDATE: eS,
        LOAD_MESSAGES_SUCCESS: eN,
        LOAD_MESSAGES_AROUND_SUCCESS: eN,
        LOAD_PINNED_MESSAGES_SUCCESS: eN,
        LOAD_RECENT_MENTIONS_SUCCESS: eN,
        SEARCH_FINISH: eC,
        MOD_VIEW_SEARCH_FINISH: eC,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eh,
        EMBEDDED_ACTIVITY_UPDATE_V2: eR
    }));
