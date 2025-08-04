(n.d(t, {
    O5: () => K,
    V6: () => W,
    ZP: () => ek
}),
    n(35282),
    n(388685),
    n(997841),
    n(539854));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(2572),
    c = n(16609),
    u = n(864106),
    d = n(579407),
    f = n(710845),
    _ = n(69882),
    p = n(134049),
    h = n(160404),
    m = n(630388),
    g = n(823379),
    E = n(625137),
    b = n(709054),
    y = n(314897),
    O = n(592125),
    v = n(485386),
    I = n(430824),
    T = n(372897);
function S(e, t, n) {
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            }));
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = new f.Z('GuildMemberStore'),
    P = {},
    w = {},
    D = {},
    L = {},
    x = {},
    k = !1,
    M = 0,
    j = 0,
    U = {},
    G = {},
    B = {
        added: [],
        removed: []
    };
function V(e, t) {
    if (null == t.communicationDisabledUntil || !(0, _.b)(t)) return F(e, t.userId);
    let n = Y(e, t.userId);
    x[n] !== t.communicationDisabledUntil && (0, _.b)(t) && ((x[n] = t.communicationDisabledUntil), Z(n));
}
function F(e, t) {
    if (null != t) {
        let n = Y(e, t);
        (null != x[n] && Z(n), H(Y(e, t)));
    } else
        for (let t in x) {
            let n = t;
            K(n) === e && (Z(t), H(n));
        }
}
function Z(e) {
    ((M += 1), (U[e] = M));
}
function H(e) {
    (W(e) === y.default.getId() && (0, p.l)(K(e)), delete x[e]);
}
function Y(e, t) {
    let n = [];
    return ((n[0] = e), (n[1] = t), n.join('-'));
}
function W(e) {
    return e.split('-')[1];
}
function K(e) {
    return e.split('-')[0];
}
function z(e, t) {
    var n, r;
    let i, a, o, s;
    if (0 === t.length)
        return {
            colorString: null,
            colorStrings: null,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0
        };
    for (let n of t) {
        let t = e[n];
        null != t && ((null == s || (0, E.C$)(t, s)) && (s = t), t.color > 0 && (null == i || (0, E.C$)(t, i)) && (i = t), t.hoist && (null == a || (0, E.C$)(t, a)) && (a = t), (null != t.icon || null != t.unicodeEmoji) && (null == o || (0, E.C$)(t, o)) && (o = t));
    }
    return {
        colorString: null != (n = null == i ? void 0 : i.colorString) ? n : null,
        colorStrings: null != (r = null == i ? void 0 : i.colorStrings) ? r : null,
        colorRoleId: null == i ? void 0 : i.id,
        iconRoleId: null == o ? void 0 : o.id,
        hoistRoleId: null == a ? void 0 : a.id,
        highestRoleId: null == s ? void 0 : s.id
    };
}
function q(e) {
    var t, n;
    let { userId: r, nick: i, guildId: a, avatar: o, avatarDecoration: s, guildRoles: l, roles: c, premiumSince: u, isPending: d, joinedAt: f, communicationDisabledUntil: _, unusualDMActivityUntil: p, fullProfileLoadedTimestamp: g, flags: E, collectibles: O } = e,
        { colorString: v, colorStrings: I, colorRoleId: S, iconRoleId: N, hoistRoleId: R, highestRoleId: w } = z(l, c),
        L = {
            userId: r,
            nick: i,
            guildId: a,
            avatar: o,
            avatarDecoration: s,
            roles: c,
            colorString: v,
            colorStrings: I,
            colorRoleId: S,
            iconRoleId: N,
            hoistRoleId: R,
            highestRoleId: w,
            premiumSince: u,
            isPending: d,
            joinedAt: f,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: p,
            fullProfileLoadedTimestamp: g,
            flags: E,
            collectibles: O
        };
    if (((0, m.yE)(null != (t = L.flags) ? t : 0, T.q.IS_GUEST) && (L.flags = (0, m.pj)(null != (n = L.flags) ? n : 0, T.q.BYPASSES_VERIFICATION)), null == P[a])) return L;
    if (r === y.default.getId())
        if (h.Z.isViewingRoles(a) || h.Z.isFullServerPreview(a)) {
            let e = h.Z.getViewingRoles(a);
            D[a] = C(A({}, L, h.Z.getMemberOptions(a)), { roles: null != e ? b.default.keys(e) : [] });
        } else null != D[a] && delete D[a];
    return L;
}
function X(e) {
    (k ? (k = !1) : ((P = {}), (w = {})), (x = {}), J(e));
}
function Q(e) {
    e.guilds.forEach((e) => {
        var t;
        let n = e.id;
        (ev({
            id: n,
            members: e.members
        }),
            null == (t = e.activity_instances) ||
                t.forEach((e) => {
                    eO(n, e.participants);
                }));
    });
}
function J(e) {
    e.guilds.forEach((e) => {
        ev(e);
    });
}
function $(e) {
    let { guildMembers: t } = e;
    ((P = A({}, t)), (w = {}));
}
function ee(e) {
    let { guildMembers: t, guilds: n } = e;
    ((k = !0), (P = A({}, t)), (w = {}), (L = {}), en(n));
}
function et(e) {
    let { guilds: t } = e;
    en(t);
}
function en(e) {
    for (let t of e)
        if (null != t.member && (null == L[t.id] ? (L[t.id] = t.member) : (L[t.id] = C(A({}, t.member), { roles: t.member.roles })), null != P[t.id])) {
            let e = P[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = C(A({}, e[t.member.userId]), { roles: t.member.roles }));
        }
}
function er(e) {
    var t, n;
    if (null == e.guildId || null == I.Z.getGuild(e.guildId)) return !1;
    ((k = !0), (P[e.guildId] = null != (t = P[e.guildId]) ? t : {}));
    let r = !1;
    for (let t of ((k = !0), (P[e.guildId] = null != (n = P[e.guildId]) ? n : {}), e.members)) null == P[e.guildId][t.userId] && ((r = !0), (P[e.guildId][t.userId] = t));
    return r;
}
function ei(e) {
    var t;
    let { guildId: n, user: r, nick: i, avatar: a, avatarDecoration: o, roles: s, premiumSince: l, isPending: c, joinedAt: d, communicationDisabledUntil: f, unusualDMActivityUntil: _, flags: p, collectibles: h } = e,
        m = P[n];
    if (null == m) return !1;
    let g = I.Z.getGuild(n);
    if (null == g) return (R.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1);
    ((m[r.id] = q({
        userId: r.id,
        nick: i,
        guildId: n,
        avatar: a,
        avatarDecoration: (0, u.FG)(o),
        guildRoles: v.Z.getUnsafeMutableRoles(g.id),
        roles: s,
        premiumSince: l,
        isPending: c,
        joinedAt: d,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: null == (t = m[r.id]) ? void 0 : t.fullProfileLoadedTimestamp,
        flags: p,
        collectibles: h
    })),
        V(n, m[r.id]));
}
function ea(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = P[t];
    if (null == i) return !1;
    let a = I.Z.getGuild(t);
    if (null == a) return (R.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1);
    let o = i[n];
    if (null == o || o.roles.includes(r)) return !1;
    o.roles = [...o.roles, r];
    let s = z(v.Z.getUnsafeMutableRoles(a.id), o.roles);
    return ((i[n] = A({}, o, s)), !0);
}
function eo(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = P[t];
    if (null == i) return !1;
    let a = I.Z.getGuild(t);
    if (null == a) return (R.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1);
    let o = i[n];
    if (null == o || !o.roles.includes(r)) return !1;
    o.roles = o.roles.filter((e) => e !== r);
    let s = z(v.Z.getUnsafeMutableRoles(a.id), o.roles);
    return ((i[n] = A({}, o, s)), !0);
}
function es(e) {
    let { guildMember: t, guildId: n } = e,
        r = P[n];
    if (null == r) return !1;
    let i = I.Z.getGuild(n);
    if (null == i) return (R.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1);
    ((r[t.user.id] = q({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: eh(t),
        guildRoles: v.Z.getUnsafeMutableRoles(i.id),
        roles: t.roles,
        premiumSince: t.premium_since,
        isPending: t.pending,
        joinedAt: t.joined_at,
        communicationDisabledUntil: t.communication_disabled_until,
        unusualDMActivityUntil: t.unusual_dm_activity_until,
        flags: t.flags,
        fullProfileLoadedTimestamp: Date.now(),
        collectibles: (0, d.Xm)(t.collectibles)
    })),
        V(n, r[t.user.id]));
}
function el(e) {
    let t = !1;
    for (let n of e.chunks) t = ep(n.guildId, n.members) || t;
    return t;
}
function ec(e) {
    return e.members.length > 0 && ep(e.guildId, e.members);
}
function eu(e) {
    let { guildId: t, members: n } = e;
    return ep(t, n.map((e) => e.member).filter(g.lm));
}
function ed(e) {
    let { guildId: t, owners: n } = e;
    return ep(t, n);
}
function ef(e) {
    let { guildId: t, threads: n } = e;
    return ep(
        t,
        Object.values(n).reduce((e, t) => {
            var n, r, i;
            if ((null != t.owner && e.push(t.owner), (null == t || null == (n = t.first_message) ? void 0 : n.message_snapshots) != null)) {
                let n = t.first_message.message_snapshots[0];
                ((null == (r = n.moderator_report) ? void 0 : r.reported_member) != null && e.push(n.moderator_report.reported_member), (null == (i = n.moderator_report) ? void 0 : i.reporting_member) != null && e.push(n.moderator_report.reporting_member));
            }
            return e;
        }, [])
    );
}
function e_(e) {
    let { guildId: t, addedMembers: n } = e;
    return null != n && ep(t, n.map((e) => e.member).filter(g.lm));
}
function ep(e, t) {
    let n = P[e];
    if (null == n) return !1;
    let r = I.Z.getGuild(e);
    return null == r
        ? (R.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (t.forEach((t) => {
              var i;
              let a = n[t.user.id];
              ((n[t.user.id] = q({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: eh(t),
                  guildRoles: v.Z.getUnsafeMutableRoles(r.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null != (i = t.unusual_dm_activity_until) ? i : null == a ? void 0 : a.unusualDMActivityUntil,
                  collectibles: (0, d.Xm)(t.collectibles)
              })),
                  V(e, n[t.user.id]));
          }),
          j++,
          !0);
}
function eh(e) {
    return (0, u.FG)(e.avatar_decoration_data);
}
function em(e) {
    let { guildId: t, members: n } = e;
    return ep(
        t,
        n.map((e) => {
            let { member: t } = e;
            return t;
        })
    );
}
function eg(e) {
    let { guildId: t, user: n } = e;
    eb(t, n.id);
}
function eE(e) {
    let { guildId: t, userId: n } = e;
    eb(t, n);
}
function eb(e, t) {
    let n = P[e];
    if (null == n || null == n[t]) return !1;
    (delete n[t], F(e, t), j++);
}
function ey(e) {
    let { guild: t } = e;
    return ev(t);
}
function eO(e, t) {
    return ev({
        id: e,
        members: t.filter(l.Z).map((e) => e.member)
    });
}
function ev(e) {
    let t = e.id;
    t in P || (P[e.id] = {});
    let n = I.Z.getGuild(t);
    if (null == n) return !1;
    let r = P[t];
    for (let a of e.members) {
        var i;
        let o = a.user.id,
            s = r[o],
            l = q({
                userId: o,
                nick: a.nick,
                guildId: e.id,
                avatar: a.avatar,
                avatarDecoration: eh(a),
                guildRoles: v.Z.getUnsafeMutableRoles(n.id),
                roles: a.roles,
                premiumSince: a.premium_since,
                isPending: a.pending,
                joinedAt: a.joined_at,
                communicationDisabledUntil: a.communication_disabled_until,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                flags: a.flags,
                unusualDMActivityUntil: null != (i = a.unusual_dm_activity_until) ? i : null == s ? void 0 : s.unusualDMActivityUntil,
                collectibles: (0, d.Xm)(a.collectibles)
            });
        ((r[o] = l), V(t, l));
    }
    return !0;
}
function eI(e) {
    let { guild: t } = e;
    (delete P[t.id], delete w[t.id], F(t.id));
}
function eT(e) {
    let t = P[e.guildId];
    if (null == t) return !1;
    let n = I.Z.getGuild(e.guildId);
    if (null == n) return (R.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1);
    let r = y.default.getId();
    for (let i of b.default.keys(t)) {
        let a = t[i];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let o = i === r && 'GUILD_ROLE_DELETE' === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            ((t[i] = q({
                userId: i,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: v.Z.getUnsafeMutableRoles(n.id),
                roles: o,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                collectibles: a.collectibles
            })),
                V(e.guildId, t[i]));
        }
    }
}
function eS(e) {
    var t, n, r;
    let { guildId: i, roles: o, addedRoleIds: s, removedRoleIds: l, flags: c } = e,
        u = y.default.getId(),
        d = P[i],
        f = null != d ? d[u] : null;
    if (null == f) return !1;
    let _ = I.Z.getGuild(i);
    if (null == _) return !1;
    let p = null != (t = G[i]) ? t : {};
    ((G[i] = {
        added: a().difference(a().union(null != (n = p.added) ? n : [], s), null != l ? l : []),
        removed: a().difference(a().union(null != (r = p.removed) ? r : [], l), null != s ? s : [])
    }),
        (d[u] = q({
            userId: u,
            guildId: i,
            nick: f.nick,
            avatar: f.avatar,
            avatarDecoration: f.avatarDecoration,
            guildRoles: v.Z.getUnsafeMutableRoles(_.id),
            roles: null != o ? o : f.roles,
            premiumSince: f.premiumSince,
            isPending: f.isPending,
            joinedAt: f.joinedAt,
            flags: null != c ? c : f.flags,
            fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp,
            collectibles: f.collectibles
        })));
}
function eA(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete G[t];
}
function eN(e) {
    let { guildId: t } = e,
        n = P[t];
    if (null == n) return !1;
    let r = I.Z.getGuild(t);
    if (null == r) return (R.warn('Guild '.concat(t, ' not found during IMPERSONATE_UPDATE.')), !1);
    let i = y.default.getId(),
        a = n[i];
    n[i] = q({
        userId: i,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: v.Z.getUnsafeMutableRoles(r.id),
        roles: a.roles,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        communicationDisabledUntil: a.communicationDisabledUntil,
        fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
        flags: a.flags,
        collectibles: a.collectibles
    });
}
function eC(e) {
    var t;
    let { message: n, guildId: r } = e;
    (null == (t = n.resolved) ? void 0 : t.members) != null &&
        null != r &&
        ev({
            id: r,
            members: Object.entries(n.resolved.members)
                .map((e) => {
                    var t, r;
                    let [i, a] = e,
                        o = null == (r = n.resolved) || null == (t = r.users) ? void 0 : t[i];
                    if (null != o) return C(A({}, a), { user: o });
                })
                .filter((e) => null != e)
        });
}
function eR(e) {
    var t;
    if ((null == (t = e.resolved) ? void 0 : t.members) == null) return;
    let n = O.Z.getChannel(e.channel_id);
    null == n ||
        n.isPrivate() ||
        ev({
            id: n.guild_id,
            members: Object.entries(e.resolved.members)
                .map((t) => {
                    var n, r;
                    let [i, a] = t,
                        o = null == (r = e.resolved) || null == (n = r.users) ? void 0 : n[i];
                    if (null != o) return C(A({}, a), { user: o });
                })
                .filter((e) => null != e)
        });
}
function eP(e) {
    let { messages: t } = e;
    t.forEach((e) => eR(e));
}
function ew(e) {
    let { pins: t } = e;
    t.forEach((e) => {
        let { message: t } = e;
        return eR(t);
    });
}
function eD(e) {
    let { data: t } = e,
        n = [];
    (t.forEach((e) => {
        let { messages: t } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                n.push(e);
            });
        });
    }),
        eP({ messages: n }));
}
function eL(e) {
    let { location: t, participants: n } = e,
        r = (0, c.j)(t);
    return null != r && eO(r, n);
}
class ex extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, v.Z, y.default, h.Z);
    }
    getMutableAllGuildsAndMembers() {
        return P;
    }
    memberOf(e) {
        return a()(P)
            .toPairs()
            .filter((t) => {
                let [n, r] = t;
                return null != r[e];
            })
            .map((e) => {
                let [t] = e;
                return t;
            })
            .value();
    }
    getNicknameGuildsMapping(e) {
        let t = {};
        for (let r in P) {
            var n;
            let i = null == (n = P[r][e]) ? void 0 : n.nick;
            null != i && (Object.prototype.hasOwnProperty.call(t, i) || (t[i] = []), t[i].push(r));
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = P[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        var n;
        if (null == e || null == t) return !1;
        let r = P[e];
        return null != r && (null == (n = r[t]) ? void 0 : n.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = y.default.getId(),
            n = P[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, m.yE)(r, T.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = P[e];
        return null == t ? [] : b.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = P[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = P[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        if (null != n && t === y.default.getId() && (h.Z.isViewingRoles(e) || h.Z.isFullServerPreview(e))) {
            var r;
            return null != (r = D[e]) ? r : n;
        }
        return n;
    }
    getSelfMember(e) {
        return this.getMember(e, y.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = w[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let r = new Date(n.joinedAt);
        return ((w[e] = r), r);
    }
    getCachedSelfMember(e) {
        var t;
        return null != (t = L[e]) ? t : null;
    }
    getNick(e, t) {
        if (null == e || null == t) return null;
        let n = this.getMember(e, t);
        return null != n ? n.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return x;
    }
    getCommunicationDisabledVersion() {
        return M;
    }
    getPendingRoleUpdates(e) {
        var t;
        return null != (t = G[e]) ? t : B;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        var n, r;
        let i = null != (r = null == (n = this.getMember(e, t)) ? void 0 : n.roles) ? r : [],
            o = G[e];
        return null == o ? i : a().difference(a().union(i, o.added), o.removed);
    }
    getMemberVersion() {
        return j;
    }
}
S(ex, 'displayName', 'GuildMemberStore');
let ek = new ex(s.Z, {
    CONNECTION_OPEN: X,
    CONNECTION_OPEN_SUPPLEMENTAL: Q,
    OVERLAY_INITIALIZE: $,
    CACHE_LOADED: ee,
    CACHE_LOADED_LAZY: et,
    GUILD_CREATE: ey,
    GUILD_DELETE: eI,
    GUILD_MEMBER_ADD: ei,
    GUILD_MEMBER_UPDATE: ei,
    GUILD_MEMBER_UPDATE_LOCAL: eS,
    GUILD_MEMBERS_CHUNK_BATCH: el,
    GUILD_MEMBER_REMOVE: eg,
    GUILD_MEMBER_REMOVE_LOCAL: eE,
    THREAD_MEMBER_LIST_UPDATE: eu,
    THREAD_MEMBERS_UPDATE: e_,
    LOAD_ARCHIVED_THREADS_SUCCESS: ed,
    LOAD_FORUM_POSTS: ef,
    GUILD_ROLE_UPDATE: eT,
    GUILD_ROLE_DELETE: eT,
    GUILD_ROLE_MEMBER_REMOVE: eo,
    GUILD_ROLE_MEMBER_ADD: ea,
    GUILD_MEMBER_PROFILE_UPDATE: es,
    IMPERSONATE_UPDATE: eN,
    IMPERSONATE_STOP: eN,
    PASSIVE_UPDATE_V2: ec,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eA,
    LOCAL_MESSAGES_LOADED: er,
    MESSAGE_CREATE: eC,
    MESSAGE_UPDATE: eC,
    LOAD_MESSAGES_SUCCESS: eP,
    LOAD_MESSAGES_AROUND_SUCCESS: eP,
    LOAD_RECENT_MENTIONS_SUCCESS: eP,
    LOAD_PINNED_MESSAGES_SUCCESS: ew,
    SEARCH_MESSAGES_SUCCESS: eD,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eD,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: em,
    EMBEDDED_ACTIVITY_UPDATE_V2: eL
});
