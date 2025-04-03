n.d(t, {
    O5: () => Y,
    V6: () => W,
    ZP: () => ew
}),
    n(301563),
    n(47120),
    n(789020),
    n(653041);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(866442),
    s = n(442837),
    l = n(570140),
    c = n(2572),
    u = n(16609),
    d = n(864106),
    f = n(710845),
    _ = n(69882),
    p = n(134049),
    h = n(160404),
    m = n(393031),
    g = n(630388),
    E = n(823379),
    b = n(709054),
    y = n(314897),
    v = n(592125),
    O = n(430824),
    I = n(372897);
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
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
let C = new f.Z('GuildMemberStore'),
    R = {},
    P = {},
    w = {},
    D = {},
    L = {},
    x = !1,
    M = 0,
    k = 0,
    j = {},
    U = {},
    G = {
        added: [],
        removed: []
    };
function B(e, t) {
    if (null == t.communicationDisabledUntil || !(0, _.b)(t)) return F(e, t.userId);
    let n = H(e, t.userId);
    L[n] !== t.communicationDisabledUntil && (0, _.b)(t) && ((L[n] = t.communicationDisabledUntil), V(n));
}
function F(e, t) {
    if (null != t) {
        let n = H(e, t);
        null != L[n] && V(n), Z(H(e, t));
    } else
        for (let t in L) {
            let n = t;
            Y(n) === e && (V(t), Z(n));
        }
}
function V(e) {
    (M += 1), (j[e] = M);
}
function Z(e) {
    W(e) === y.default.getId() && (0, p.l)(Y(e)), delete L[e];
}
function H(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join('-');
}
function W(e) {
    return e.split('-')[1];
}
function Y(e) {
    return e.split('-')[0];
}
function K(e, t) {
    let n, r, i, o, s, l;
    if (0 === t.length)
        return {
            colorString: void 0,
            colorStrings: void 0,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0
        };
    for (let n of t) {
        let t = e[n];
        null != t && ((null == l || t.position > l.position) && (l = t), t.color > 0 && (null == i || t.position > i.position) && (i = t), t.hoist && (null == o || t.position > o.position) && (o = t), (null != t.icon || null != t.unicodeEmoji) && (null == s || t.position > s.position) && (s = t));
    }
    if (null != i) {
        var c, u;
        null == i.colorString && i.color > 0 && (i.colorString = (0, a.Rf)(i.color)), (n = null != (c = i.colorString) ? c : void 0), null == i.colorStrings && null != i.colors && (i.colorStrings = (0, m.Z)(i.colors)), (r = null != (u = i.colorStrings) ? u : void 0);
    }
    return {
        colorString: n,
        colorStrings: r,
        colorRoleId: null == i ? void 0 : i.id,
        iconRoleId: null == s ? void 0 : s.id,
        hoistRoleId: null == o ? void 0 : o.id,
        highestRoleId: null == l ? void 0 : l.id
    };
}
function z(e) {
    var t, n;
    let { userId: r, nick: i, guildId: o, avatar: a, avatarDecoration: s, guildRoles: l, roles: c, premiumSince: u, isPending: d, joinedAt: f, communicationDisabledUntil: _, unusualDMActivityUntil: p, fullProfileLoadedTimestamp: m, flags: E } = e,
        { colorString: v, colorStrings: O, colorRoleId: S, iconRoleId: N, hoistRoleId: C, highestRoleId: P } = K(l, c),
        D = {
            userId: r,
            nick: i,
            guildId: o,
            avatar: a,
            avatarDecoration: s,
            roles: c,
            colorString: v,
            colorStrings: O,
            colorRoleId: S,
            iconRoleId: N,
            hoistRoleId: C,
            highestRoleId: P,
            premiumSince: u,
            isPending: d,
            joinedAt: f,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: p,
            fullProfileLoadedTimestamp: m,
            flags: E
        };
    if (((0, g.yE)(null != (t = D.flags) ? t : 0, I.q.IS_GUEST) && (D.flags = (0, g.pj)(null != (n = D.flags) ? n : 0, I.q.BYPASSES_VERIFICATION)), null == R[o])) return D;
    if (r === y.default.getId())
        if (h.Z.isViewingRoles(o) || h.Z.isFullServerPreview(o)) {
            let e = h.Z.getViewingRoles(o);
            w[o] = A(T({}, D, h.Z.getMemberOptions(o)), { roles: null != e ? b.default.keys(e) : [] });
        } else null != w[o] && delete w[o];
    return D;
}
function q(e) {
    x ? (x = !1) : ((R = {}), (P = {})), (L = {}), X(e);
}
function Q(e) {
    e.guilds.forEach((e) => {
        var t;
        let n = e.id;
        eb({
            id: n,
            members: e.members
        }),
            null == (t = e.activity_instances) ||
                t.forEach((e) => {
                    eE(n, e.participants);
                });
    });
}
function X(e) {
    e.guilds.forEach((e) => {
        eb(e);
    });
}
function J(e) {
    let { guildMembers: t } = e;
    (R = T({}, t)), (P = {});
}
function $(e) {
    let { guildMembers: t, guilds: n } = e;
    (x = !0), (R = T({}, t)), (P = {}), (D = {}), et(n);
}
function ee(e) {
    let { guilds: t } = e;
    et(t);
}
function et(e) {
    for (let t of e)
        if (null != t.member && (null == D[t.id] ? (D[t.id] = t.member) : (D[t.id] = A(T({}, t.member), { roles: t.member.roles })), null != R[t.id])) {
            let e = R[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = A(T({}, e[t.member.userId]), { roles: t.member.roles }));
        }
}
function en(e) {
    var t, n;
    if (null == e.guildId || null == O.Z.getGuild(e.guildId)) return !1;
    (x = !0), (R[e.guildId] = null != (t = R[e.guildId]) ? t : {});
    let r = !1;
    for (let t of ((x = !0), (R[e.guildId] = null != (n = R[e.guildId]) ? n : {}), e.members)) null == R[e.guildId][t.userId] && ((r = !0), (R[e.guildId][t.userId] = t));
    return r;
}
function er(e) {
    var t;
    let { guildId: n, user: r, nick: i, avatar: o, avatarDecoration: a, roles: s, premiumSince: l, isPending: c, joinedAt: u, communicationDisabledUntil: f, unusualDMActivityUntil: _, flags: p } = e,
        h = R[n];
    if (null == h) return !1;
    let m = O.Z.getGuild(n);
    if (null == m) return C.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (h[r.id] = z({
        userId: r.id,
        nick: i,
        guildId: n,
        avatar: o,
        avatarDecoration: (0, d.FG)(a),
        guildRoles: O.Z.getRoles(m.id),
        roles: s,
        premiumSince: l,
        isPending: c,
        joinedAt: u,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: null == (t = h[r.id]) ? void 0 : t.fullProfileLoadedTimestamp,
        flags: p
    })),
        B(n, h[r.id]);
}
function ei(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = R[t];
    if (null == i) return !1;
    let o = O.Z.getGuild(t);
    if (null == o) return C.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let a = i[n];
    if (null == a || a.roles.includes(r)) return !1;
    a.roles = [...a.roles, r];
    let s = K(O.Z.getRoles(o.id), a.roles);
    return (i[n] = T({}, a, s)), !0;
}
function eo(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = R[t];
    if (null == i) return !1;
    let o = O.Z.getGuild(t);
    if (null == o) return C.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let a = i[n];
    if (null == a || !a.roles.includes(r)) return !1;
    a.roles = a.roles.filter((e) => e !== r);
    let s = K(O.Z.getRoles(o.id), a.roles);
    return (i[n] = T({}, a, s)), !0;
}
function ea(e) {
    let { guildMember: t, guildId: n } = e,
        r = R[n];
    if (null == r) return !1;
    let i = O.Z.getGuild(n);
    if (null == i) return C.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (r[t.user.id] = z({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: ep(t),
        guildRoles: O.Z.getRoles(i.id),
        roles: t.roles,
        premiumSince: t.premium_since,
        isPending: t.pending,
        joinedAt: t.joined_at,
        communicationDisabledUntil: t.communication_disabled_until,
        unusualDMActivityUntil: t.unusual_dm_activity_until,
        flags: t.flags,
        fullProfileLoadedTimestamp: Date.now()
    })),
        B(n, r[t.user.id]);
}
function es(e) {
    let t = !1;
    for (let n of e.chunks) t = e_(n.guildId, n.members) || t;
    return t;
}
function el(e) {
    return e.members.length > 0 && e_(e.guildId, e.members);
}
function ec(e) {
    let { guildId: t, members: n } = e;
    return e_(t, n.map((e) => e.member).filter(E.lm));
}
function eu(e) {
    let { guildId: t, owners: n } = e;
    return e_(t, n);
}
function ed(e) {
    let { guildId: t, threads: n } = e;
    return e_(
        t,
        Object.values(n)
            .map((e) => e.owner)
            .filter(E.lm)
    );
}
function ef(e) {
    let { guildId: t, addedMembers: n } = e;
    return null != n && e_(t, n.map((e) => e.member).filter(E.lm));
}
function e_(e, t) {
    let n = R[e];
    if (null == n) return !1;
    let r = O.Z.getGuild(e);
    return null == r
        ? (C.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (t.forEach((t) => {
              var i;
              let o = n[t.user.id];
              (n[t.user.id] = z({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: ep(t),
                  guildRoles: O.Z.getRoles(r.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null != (i = t.unusual_dm_activity_until) ? i : null == o ? void 0 : o.unusualDMActivityUntil
              })),
                  B(e, n[t.user.id]);
          }),
          k++,
          !0);
}
function ep(e) {
    return (0, d.FG)(e.avatar_decoration_data);
}
function eh(e) {
    let { guildId: t, members: n } = e;
    return e_(
        t,
        n.map((e) => {
            let { member: t } = e;
            return t;
        })
    );
}
function em(e) {
    let { guildId: t, user: n } = e,
        r = R[t];
    if (null == r || null == r[n.id]) return !1;
    delete r[n.id], F(t, n.id), k++;
}
function eg(e) {
    let { guild: t } = e;
    return eb(t);
}
function eE(e, t) {
    return eb({
        id: e,
        members: t.filter(c.Z).map((e) => e.member)
    });
}
function eb(e) {
    let t = e.id;
    t in R || (R[e.id] = {});
    let n = O.Z.getGuild(t);
    if (null == n) return !1;
    let r = R[t];
    for (let o of e.members) {
        var i;
        let a = o.user.id,
            s = r[a],
            l = z({
                userId: a,
                nick: o.nick,
                guildId: e.id,
                avatar: o.avatar,
                avatarDecoration: ep(o),
                guildRoles: O.Z.getRoles(n.id),
                roles: o.roles,
                premiumSince: o.premium_since,
                isPending: o.pending,
                joinedAt: o.joined_at,
                communicationDisabledUntil: o.communication_disabled_until,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                flags: o.flags,
                unusualDMActivityUntil: null != (i = o.unusual_dm_activity_until) ? i : null == s ? void 0 : s.unusualDMActivityUntil
            });
        (r[a] = l), B(t, l);
    }
    return !0;
}
function ey(e) {
    let { guild: t } = e;
    delete R[t.id], delete P[t.id], F(t.id);
}
function ev(e) {
    let t = R[e.guildId];
    if (null == t) return !1;
    let n = O.Z.getGuild(e.guildId);
    if (null == n) return C.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let r = y.default.getId();
    for (let i of b.default.keys(t)) {
        let o = t[i];
        if ((null != o.roles && o.roles.length > 0) || null != o.colorString || null != o.hoistRoleId) {
            let a = i === r && 'GUILD_ROLE_DELETE' === e.type ? o.roles.filter((t) => t !== e.roleId) : o.roles;
            (t[i] = z({
                userId: i,
                nick: o.nick,
                guildId: e.guildId,
                avatar: o.avatar,
                avatarDecoration: o.avatarDecoration,
                guildRoles: O.Z.getRoles(n.id),
                roles: a,
                premiumSince: o.premiumSince,
                isPending: o.isPending,
                joinedAt: o.joinedAt,
                flags: o.flags,
                fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp
            })),
                B(e.guildId, t[i]);
        }
    }
}
function eO(e) {
    var t, n, r;
    let { guildId: i, roles: a, addedRoleIds: s, removedRoleIds: l, flags: c } = e,
        u = y.default.getId(),
        d = R[i],
        f = null != d ? d[u] : null;
    if (null == f) return !1;
    let _ = O.Z.getGuild(i);
    if (null == _) return !1;
    let p = null != (t = U[i]) ? t : {};
    (U[i] = {
        added: o().difference(o().union(null != (n = p.added) ? n : [], s), null != l ? l : []),
        removed: o().difference(o().union(null != (r = p.removed) ? r : [], l), null != s ? s : [])
    }),
        (d[u] = z({
            userId: u,
            guildId: i,
            nick: f.nick,
            avatar: f.avatar,
            avatarDecoration: f.avatarDecoration,
            guildRoles: O.Z.getRoles(_.id),
            roles: null != a ? a : f.roles,
            premiumSince: f.premiumSince,
            isPending: f.isPending,
            joinedAt: f.joinedAt,
            flags: null != c ? c : f.flags,
            fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp
        }));
}
function eI(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete U[t];
}
function eS(e) {
    let { guildId: t } = e,
        n = R[t];
    if (null == n) return !1;
    let r = O.Z.getGuild(t);
    if (null == r) return C.warn('Guild '.concat(t, ' not found during IMPERSONATE_UPDATE.')), !1;
    let i = y.default.getId(),
        o = n[i];
    n[i] = z({
        userId: i,
        nick: o.nick,
        guildId: t,
        avatar: o.avatar,
        avatarDecoration: o.avatarDecoration,
        guildRoles: O.Z.getRoles(r.id),
        roles: o.roles,
        premiumSince: o.premiumSince,
        isPending: o.isPending,
        joinedAt: o.joinedAt,
        communicationDisabledUntil: o.communicationDisabledUntil,
        fullProfileLoadedTimestamp: o.fullProfileLoadedTimestamp,
        flags: o.flags
    });
}
function eT(e) {
    var t;
    let { message: n, guildId: r } = e;
    (null == (t = n.resolved) ? void 0 : t.members) != null &&
        null != r &&
        eb({
            id: r,
            members: Object.entries(n.resolved.members)
                .map((e) => {
                    var t, r;
                    let [i, o] = e,
                        a = null == (r = n.resolved) || null == (t = r.users) ? void 0 : t[i];
                    if (null != a) return A(T({}, o), { user: a });
                })
                .filter((e) => null != e)
        });
}
function eN(e) {
    var t;
    if ((null == (t = e.resolved) ? void 0 : t.members) == null) return;
    let n = v.Z.getChannel(e.channel_id);
    null == n ||
        n.isPrivate() ||
        eb({
            id: n.guild_id,
            members: Object.entries(e.resolved.members)
                .map((t) => {
                    var n, r;
                    let [i, o] = t,
                        a = null == (r = e.resolved) || null == (n = r.users) ? void 0 : n[i];
                    if (null != a) return A(T({}, o), { user: a });
                })
                .filter((e) => null != e)
        });
}
function eA(e) {
    let { messages: t } = e;
    t.forEach((e) => eN(e));
}
function eC(e) {
    let { messages: t } = e;
    t.forEach((e) => eA({ messages: e }));
}
function eR(e) {
    let { location: t, participants: n } = e,
        r = (0, u.jS)(t);
    return null == r && (r = (0, u.hu)(t)), null != r && eE(r, n);
}
class eP extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(O.Z, y.default, h.Z);
    }
    getMutableAllGuildsAndMembers() {
        return R;
    }
    memberOf(e) {
        return o()(R)
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
        for (let r in R) {
            var n;
            let i = null == (n = R[r][e]) ? void 0 : n.nick;
            null != i && (Object.prototype.hasOwnProperty.call(t, i) || (t[i] = []), t[i].push(r));
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = R[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        var n;
        if (null == e || null == t) return !1;
        let r = R[e];
        return null != r && (null == (n = r[t]) ? void 0 : n.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = y.default.getId(),
            n = R[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, g.yE)(r, I.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = R[e];
        return null == t ? [] : b.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = R[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = R[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        if (null != n && t === y.default.getId() && (h.Z.isViewingRoles(e) || h.Z.isFullServerPreview(e))) {
            var r;
            return null != (r = w[e]) ? r : n;
        }
        return n;
    }
    getSelfMember(e) {
        return this.getMember(e, y.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = P[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let r = new Date(n.joinedAt);
        return (P[e] = r), r;
    }
    getCachedSelfMember(e) {
        var t;
        return null != (t = D[e]) ? t : null;
    }
    getNick(e, t) {
        if (null == e || null == t) return null;
        let n = this.getMember(e, t);
        return null != n ? n.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return L;
    }
    getCommunicationDisabledVersion() {
        return M;
    }
    getPendingRoleUpdates(e) {
        var t;
        return null != (t = U[e]) ? t : G;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        var n, r;
        let i = null != (r = null == (n = this.getMember(e, t)) ? void 0 : n.roles) ? r : [],
            a = U[e];
        return null == a ? i : o().difference(o().union(i, a.added), a.removed);
    }
    getMemberVersion() {
        return k;
    }
}
S(eP, 'displayName', 'GuildMemberStore');
let ew = new eP(l.Z, {
    CONNECTION_OPEN: q,
    CONNECTION_OPEN_SUPPLEMENTAL: Q,
    OVERLAY_INITIALIZE: J,
    CACHE_LOADED: $,
    CACHE_LOADED_LAZY: ee,
    GUILD_CREATE: eg,
    GUILD_DELETE: ey,
    GUILD_MEMBER_ADD: er,
    GUILD_MEMBER_UPDATE: er,
    GUILD_MEMBER_UPDATE_LOCAL: eO,
    GUILD_MEMBERS_CHUNK_BATCH: es,
    GUILD_MEMBER_REMOVE: em,
    THREAD_MEMBER_LIST_UPDATE: ec,
    THREAD_MEMBERS_UPDATE: ef,
    LOAD_ARCHIVED_THREADS_SUCCESS: eu,
    LOAD_FORUM_POSTS: ed,
    GUILD_ROLE_UPDATE: ev,
    GUILD_ROLE_DELETE: ev,
    GUILD_ROLE_MEMBER_REMOVE: eo,
    GUILD_ROLE_MEMBER_ADD: ei,
    GUILD_MEMBER_PROFILE_UPDATE: ea,
    IMPERSONATE_UPDATE: eS,
    IMPERSONATE_STOP: eS,
    PASSIVE_UPDATE_V2: el,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eI,
    LOCAL_MESSAGES_LOADED: en,
    MESSAGE_CREATE: eT,
    MESSAGE_UPDATE: eT,
    LOAD_MESSAGES_SUCCESS: eA,
    LOAD_MESSAGES_AROUND_SUCCESS: eA,
    LOAD_PINNED_MESSAGES_SUCCESS: eA,
    LOAD_RECENT_MENTIONS_SUCCESS: eA,
    SEARCH_FINISH: eC,
    MOD_VIEW_SEARCH_FINISH: eC,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eh,
    EMBEDDED_ACTIVITY_UPDATE_V2: eR
});
