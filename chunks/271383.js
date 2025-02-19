n.d(t, {
    O5: () => W,
    V6: () => H,
    ZP: () => eP
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
    p = n(69882),
    _ = n(134049),
    h = n(160404),
    m = n(630388),
    g = n(823379),
    E = n(709054),
    v = n(314897),
    b = n(592125),
    y = n(430824),
    O = n(372897);
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
function I(e) {
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
function T(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = new f.Z('GuildMemberStore'),
    C = {},
    R = {},
    P = {},
    w = {},
    D = {},
    x = !1,
    L = 0,
    M = 0,
    k = {},
    j = {},
    U = {
        added: [],
        removed: []
    };
function G(e, t) {
    if (null == t.communicationDisabledUntil || !(0, p.b)(t)) return B(e, t.userId);
    let n = V(e, t.userId);
    D[n] !== t.communicationDisabledUntil && (0, p.b)(t) && ((D[n] = t.communicationDisabledUntil), Z(n));
}
function B(e, t) {
    if (null != t) {
        let n = V(e, t);
        null != D[n] && Z(n), F(V(e, t));
    } else
        for (let t in D) {
            let n = t;
            W(n) === e && (Z(t), F(n));
        }
}
function Z(e) {
    (L += 1), (k[e] = L);
}
function F(e) {
    H(e) === v.default.getId() && (0, _.l)(W(e)), delete D[e];
}
function V(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join('-');
}
function H(e) {
    return e.split('-')[1];
}
function W(e) {
    return e.split('-')[0];
}
function Y(e, t) {
    let n, r, i, o, s;
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
        null != t && ((null == s || t.position > s.position) && (s = t), t.color > 0 && (null == r || t.position > r.position) && (r = t), t.hoist && (null == i || t.position > i.position) && (i = t), (null != t.icon || null != t.unicodeEmoji) && (null == o || t.position > o.position) && (o = t));
    }
    if (null != r) {
        var l;
        null == r.colorString && r.color > 0 && (r.colorString = (0, a.Rf)(r.color)), (n = null !== (l = r.colorString) && void 0 !== l ? l : void 0);
    }
    return {
        colorString: n,
        colorRoleId: null == r ? void 0 : r.id,
        iconRoleId: null == o ? void 0 : o.id,
        hoistRoleId: null == i ? void 0 : i.id,
        highestRoleId: null == s ? void 0 : s.id
    };
}
function K(e) {
    var t, n;
    let { userId: r, nick: i, guildId: o, avatar: a, avatarDecoration: s, guildRoles: l, roles: c, premiumSince: u, isPending: d, joinedAt: f, communicationDisabledUntil: p, unusualDMActivityUntil: _, fullProfileLoadedTimestamp: g, flags: b } = e,
        { colorString: y, colorRoleId: S, iconRoleId: T, hoistRoleId: A, highestRoleId: R } = Y(l, c),
        w = {
            userId: r,
            nick: i,
            guildId: o,
            avatar: a,
            avatarDecoration: s,
            roles: c,
            colorString: y,
            colorRoleId: S,
            iconRoleId: T,
            hoistRoleId: A,
            highestRoleId: R,
            premiumSince: u,
            isPending: d,
            joinedAt: f,
            communicationDisabledUntil: p,
            unusualDMActivityUntil: _,
            fullProfileLoadedTimestamp: g,
            flags: b
        };
    if (((0, m.yE)(null !== (t = w.flags) && void 0 !== t ? t : 0, O.q.IS_GUEST) && (w.flags = (0, m.pj)(null !== (n = w.flags) && void 0 !== n ? n : 0, O.q.BYPASSES_VERIFICATION)), null == C[o])) return w;
    if (r === v.default.getId()) {
        if (h.Z.isViewingRoles(o) || h.Z.isFullServerPreview(o)) {
            let e = h.Z.getViewingRoles(o);
            P[o] = N(I({}, w, h.Z.getMemberOptions(o)), { roles: null != e ? E.default.keys(e) : [] });
        } else null != P[o] && delete P[o];
    }
    return w;
}
function z(e) {
    x ? (x = !1) : ((C = {}), (R = {})), (D = {}), Q(e);
}
function q(e) {
    e.guilds.forEach((e) => {
        var t;
        let n = e.id;
        eE({
            id: n,
            members: e.members
        }),
            null === (t = e.activity_instances) ||
                void 0 === t ||
                t.forEach((e) => {
                    eg(n, e.participants);
                });
    });
}
function Q(e) {
    e.guilds.forEach((e) => {
        eE(e);
    });
}
function X(e) {
    let { guildMembers: t } = e;
    (C = I({}, t)), (R = {});
}
function J(e) {
    let { guildMembers: t, guilds: n } = e;
    (x = !0), (C = I({}, t)), (R = {}), (w = {}), ee(n);
}
function $(e) {
    let { guilds: t } = e;
    ee(t);
}
function ee(e) {
    for (let t of e)
        if (null != t.member && (null == w[t.id] ? (w[t.id] = t.member) : (w[t.id] = N(I({}, t.member), { roles: t.member.roles })), null != C[t.id])) {
            let e = C[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = N(I({}, e[t.member.userId]), { roles: t.member.roles }));
        }
}
function et(e) {
    var t, n;
    if (null == e.guildId || null == y.Z.getGuild(e.guildId)) return !1;
    (x = !0), (C[e.guildId] = null !== (t = C[e.guildId]) && void 0 !== t ? t : {});
    let r = !1;
    for (let t of ((x = !0), (C[e.guildId] = null !== (n = C[e.guildId]) && void 0 !== n ? n : {}), e.members)) null == C[e.guildId][t.userId] && ((r = !0), (C[e.guildId][t.userId] = t));
    return r;
}
function en(e) {
    var t;
    let { guildId: n, user: r, nick: i, avatar: o, avatarDecoration: a, roles: s, premiumSince: l, isPending: c, joinedAt: u, communicationDisabledUntil: f, unusualDMActivityUntil: p, flags: _ } = e,
        h = C[n];
    if (null == h) return !1;
    let m = y.Z.getGuild(n);
    if (null == m) return A.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (h[r.id] = K({
        userId: r.id,
        nick: i,
        guildId: n,
        avatar: o,
        avatarDecoration: (0, d.FG)(a),
        guildRoles: y.Z.getRoles(m.id),
        roles: s,
        premiumSince: l,
        isPending: c,
        joinedAt: u,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: p,
        fullProfileLoadedTimestamp: null === (t = h[r.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
        flags: _
    })),
        G(n, h[r.id]);
}
function er(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = C[t];
    if (null == i) return !1;
    let o = y.Z.getGuild(t);
    if (null == o) return A.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let a = i[n];
    if (null == a || a.roles.includes(r)) return !1;
    a.roles = [...a.roles, r];
    let s = Y(y.Z.getRoles(o.id), a.roles);
    return (i[n] = I({}, a, s)), !0;
}
function ei(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = C[t];
    if (null == i) return !1;
    let o = y.Z.getGuild(t);
    if (null == o) return A.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let a = i[n];
    if (null == a || !a.roles.includes(r)) return !1;
    a.roles = a.roles.filter((e) => e !== r);
    let s = Y(y.Z.getRoles(o.id), a.roles);
    return (i[n] = I({}, a, s)), !0;
}
function eo(e) {
    let { guildMember: t, guildId: n } = e,
        r = C[n];
    if (null == r) return !1;
    let i = y.Z.getGuild(n);
    if (null == i) return A.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (r[t.user.id] = K({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: ep(t),
        guildRoles: y.Z.getRoles(i.id),
        roles: t.roles,
        premiumSince: t.premium_since,
        isPending: t.pending,
        joinedAt: t.joined_at,
        communicationDisabledUntil: t.communication_disabled_until,
        unusualDMActivityUntil: t.unusual_dm_activity_until,
        flags: t.flags,
        fullProfileLoadedTimestamp: Date.now()
    })),
        G(n, r[t.user.id]);
}
function ea(e) {
    let t = !1;
    for (let n of e.chunks) t = ef(n.guildId, n.members) || t;
    return t;
}
function es(e) {
    return e.members.length > 0 && ef(e.guildId, e.members);
}
function el(e) {
    let { guildId: t, members: n } = e;
    return ef(t, n.map((e) => e.member).filter(g.lm));
}
function ec(e) {
    let { guildId: t, owners: n } = e;
    return ef(t, n);
}
function eu(e) {
    let { guildId: t, threads: n } = e;
    return ef(
        t,
        Object.values(n)
            .map((e) => e.owner)
            .filter(g.lm)
    );
}
function ed(e) {
    let { guildId: t, addedMembers: n } = e;
    return null != n && ef(t, n.map((e) => e.member).filter(g.lm));
}
function ef(e, t) {
    let n = C[e];
    if (null == n) return !1;
    let r = y.Z.getGuild(e);
    return null == r
        ? (A.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (t.forEach((t) => {
              var i;
              let o = n[t.user.id];
              (n[t.user.id] = K({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: ep(t),
                  guildRoles: y.Z.getRoles(r.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null !== (i = t.unusual_dm_activity_until) && void 0 !== i ? i : null == o ? void 0 : o.unusualDMActivityUntil
              })),
                  G(e, n[t.user.id]);
          }),
          M++,
          !0);
}
function ep(e) {
    return (0, d.FG)(e.avatar_decoration_data);
}
function e_(e) {
    let { guildId: t, members: n } = e;
    return ef(
        t,
        n.map((e) => {
            let { member: t } = e;
            return t;
        })
    );
}
function eh(e) {
    let { guildId: t, user: n } = e,
        r = C[t];
    if (null == r || null == r[n.id]) return !1;
    delete r[n.id], B(t, n.id), M++;
}
function em(e) {
    let { guild: t } = e;
    return eE(t);
}
function eg(e, t) {
    return eE({
        id: e,
        members: t.filter(c.Z).map((e) => e.member)
    });
}
function eE(e) {
    let t = e.id;
    t in C || (C[e.id] = {});
    let n = y.Z.getGuild(t);
    if (null == n) return !1;
    let r = C[t];
    for (let o of e.members) {
        var i;
        let a = o.user.id,
            s = r[a],
            l = K({
                userId: a,
                nick: o.nick,
                guildId: e.id,
                avatar: o.avatar,
                avatarDecoration: ep(o),
                guildRoles: y.Z.getRoles(n.id),
                roles: o.roles,
                premiumSince: o.premium_since,
                isPending: o.pending,
                joinedAt: o.joined_at,
                communicationDisabledUntil: o.communication_disabled_until,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                flags: o.flags,
                unusualDMActivityUntil: null !== (i = o.unusual_dm_activity_until) && void 0 !== i ? i : null == s ? void 0 : s.unusualDMActivityUntil
            });
        (r[a] = l), G(t, l);
    }
    return !0;
}
function ev(e) {
    let { guild: t } = e;
    delete C[t.id], delete R[t.id], B(t.id);
}
function eb(e) {
    let t = C[e.guildId];
    if (null == t) return !1;
    let n = y.Z.getGuild(e.guildId);
    if (null == n) return A.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let r = v.default.getId();
    for (let i of E.default.keys(t)) {
        let o = t[i];
        if ((null != o.roles && o.roles.length > 0) || null != o.colorString || null != o.hoistRoleId) {
            let a = i === r && 'GUILD_ROLE_DELETE' === e.type ? o.roles.filter((t) => t !== e.roleId) : o.roles;
            (t[i] = K({
                userId: i,
                nick: o.nick,
                guildId: e.guildId,
                avatar: o.avatar,
                avatarDecoration: o.avatarDecoration,
                guildRoles: y.Z.getRoles(n.id),
                roles: a,
                premiumSince: o.premiumSince,
                isPending: o.isPending,
                joinedAt: o.joinedAt,
                flags: o.flags,
                fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp
            })),
                G(e.guildId, t[i]);
        }
    }
}
function ey(e) {
    var t, n, r;
    let { guildId: i, roles: a, addedRoleIds: s, removedRoleIds: l, flags: c } = e,
        u = v.default.getId(),
        d = C[i],
        f = null != d ? d[u] : null;
    if (null == f) return !1;
    let p = y.Z.getGuild(i);
    if (null == p) return !1;
    let _ = null !== (t = j[i]) && void 0 !== t ? t : {};
    (j[i] = {
        added: o().difference(o().union(null !== (n = _.added) && void 0 !== n ? n : [], s), null != l ? l : []),
        removed: o().difference(o().union(null !== (r = _.removed) && void 0 !== r ? r : [], l), null != s ? s : [])
    }),
        (d[u] = K({
            userId: u,
            guildId: i,
            nick: f.nick,
            avatar: f.avatar,
            avatarDecoration: f.avatarDecoration,
            guildRoles: y.Z.getRoles(p.id),
            roles: null != a ? a : f.roles,
            premiumSince: f.premiumSince,
            isPending: f.isPending,
            joinedAt: f.joinedAt,
            flags: null != c ? c : f.flags,
            fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp
        }));
}
function eO(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete j[t];
}
function eS(e) {
    let { guildId: t } = e,
        n = C[t];
    if (null == n) return !1;
    let r = y.Z.getGuild(t);
    if (null == r) return A.warn('Guild '.concat(t, ' not found during IMPERSONATE_UPDATE.')), !1;
    let i = v.default.getId(),
        o = n[i];
    n[i] = K({
        userId: i,
        nick: o.nick,
        guildId: t,
        avatar: o.avatar,
        avatarDecoration: o.avatarDecoration,
        guildRoles: y.Z.getRoles(r.id),
        roles: o.roles,
        premiumSince: o.premiumSince,
        isPending: o.isPending,
        joinedAt: o.joinedAt,
        communicationDisabledUntil: o.communicationDisabledUntil,
        fullProfileLoadedTimestamp: o.fullProfileLoadedTimestamp,
        flags: o.flags
    });
}
function eI(e) {
    var t;
    let { message: n, guildId: r } = e;
    (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null &&
        null != r &&
        eE({
            id: r,
            members: Object.entries(n.resolved.members)
                .map((e) => {
                    var t, r;
                    let [i, o] = e,
                        a = null === (r = n.resolved) || void 0 === r ? void 0 : null === (t = r.users) || void 0 === t ? void 0 : t[i];
                    if (null != a) return N(I({}, o), { user: a });
                })
                .filter((e) => null != e)
        });
}
function eT(e) {
    var t;
    if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
    let n = b.Z.getChannel(e.channel_id);
    null == n ||
        n.isPrivate() ||
        eE({
            id: n.guild_id,
            members: Object.entries(e.resolved.members)
                .map((t) => {
                    var n, r;
                    let [i, o] = t,
                        a = null === (r = e.resolved) || void 0 === r ? void 0 : null === (n = r.users) || void 0 === n ? void 0 : n[i];
                    if (null != a) return N(I({}, o), { user: a });
                })
                .filter((e) => null != e)
        });
}
function eN(e) {
    let { messages: t } = e;
    t.forEach((e) => eT(e));
}
function eA(e) {
    let { messages: t } = e;
    t.forEach((e) => eN({ messages: e }));
}
function eC(e) {
    let { location: t, participants: n } = e,
        r = (0, u.jS)(t);
    return null != r && eg(r, n);
}
class eR extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(y.Z, v.default, h.Z);
    }
    getMutableAllGuildsAndMembers() {
        return C;
    }
    memberOf(e) {
        return o()(C)
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
        for (let r in C) {
            var n;
            let i = null === (n = C[r][e]) || void 0 === n ? void 0 : n.nick;
            null != i && (Object.prototype.hasOwnProperty.call(t, i) || (t[i] = []), t[i].push(r));
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = C[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        var n;
        if (null == e || null == t) return !1;
        let r = C[e];
        return null != r && (null === (n = r[t]) || void 0 === n ? void 0 : n.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = v.default.getId(),
            n = C[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, m.yE)(r, O.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = C[e];
        return null == t ? [] : E.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = C[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = C[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        if (null != n && t === v.default.getId() && (h.Z.isViewingRoles(e) || h.Z.isFullServerPreview(e))) {
            var r;
            return null !== (r = P[e]) && void 0 !== r ? r : n;
        }
        return n;
    }
    getSelfMember(e) {
        return this.getMember(e, v.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = R[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let r = new Date(n.joinedAt);
        return (R[e] = r), r;
    }
    getCachedSelfMember(e) {
        var t;
        return null !== (t = w[e]) && void 0 !== t ? t : null;
    }
    getNick(e, t) {
        if (null == e || null == t) return null;
        let n = this.getMember(e, t);
        return null != n ? n.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return D;
    }
    getCommunicationDisabledVersion() {
        return L;
    }
    getPendingRoleUpdates(e) {
        var t;
        return null !== (t = j[e]) && void 0 !== t ? t : U;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        var n, r;
        let i = null !== (r = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== r ? r : [],
            a = j[e];
        return null == a ? i : o().difference(o().union(i, a.added), a.removed);
    }
    getMemberVersion() {
        return M;
    }
}
S(eR, 'displayName', 'GuildMemberStore');
let eP = new eR(l.Z, {
    CONNECTION_OPEN: z,
    CONNECTION_OPEN_SUPPLEMENTAL: q,
    OVERLAY_INITIALIZE: X,
    CACHE_LOADED: J,
    CACHE_LOADED_LAZY: $,
    GUILD_CREATE: em,
    GUILD_DELETE: ev,
    GUILD_MEMBER_ADD: en,
    GUILD_MEMBER_UPDATE: en,
    GUILD_MEMBER_UPDATE_LOCAL: ey,
    GUILD_MEMBERS_CHUNK_BATCH: ea,
    GUILD_MEMBER_REMOVE: eh,
    THREAD_MEMBER_LIST_UPDATE: el,
    THREAD_MEMBERS_UPDATE: ed,
    LOAD_ARCHIVED_THREADS_SUCCESS: ec,
    LOAD_FORUM_POSTS: eu,
    GUILD_ROLE_UPDATE: eb,
    GUILD_ROLE_DELETE: eb,
    GUILD_ROLE_MEMBER_REMOVE: ei,
    GUILD_ROLE_MEMBER_ADD: er,
    GUILD_MEMBER_PROFILE_UPDATE: eo,
    IMPERSONATE_UPDATE: eS,
    IMPERSONATE_STOP: eS,
    PASSIVE_UPDATE_V2: es,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eO,
    LOCAL_MESSAGES_LOADED: et,
    MESSAGE_CREATE: eI,
    MESSAGE_UPDATE: eI,
    LOAD_MESSAGES_SUCCESS: eN,
    LOAD_MESSAGES_AROUND_SUCCESS: eN,
    LOAD_PINNED_MESSAGES_SUCCESS: eN,
    LOAD_RECENT_MENTIONS_SUCCESS: eN,
    SEARCH_FINISH: eA,
    MOD_VIEW_SEARCH_FINISH: eA,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e_,
    EMBEDDED_ACTIVITY_UPDATE_V2: eC
});
