n.d(t, {
    O5: () => z,
    V6: () => K,
    ZP: () => eG,
}),
    n(35282),
    n(388685),
    n(997841),
    n(539854);
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
    _ = n(131016),
    p = n(69882),
    h = n(134049),
    m = n(160404),
    g = n(630388),
    E = n(823379),
    b = n(625137),
    y = n(709054),
    O = n(314897),
    v = n(592125),
    I = n(485386),
    T = n(430824),
    S = n(372897);
function A(e, t, n) {
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
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
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
function R(e, t) {
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
let P = new f.Z("GuildMemberStore"),
    w = {},
    D = {},
    x = {},
    L = {},
    M = {},
    j = !1,
    k = 0,
    U = 0,
    G = {},
    B = {},
    Z = {
        added: [],
        removed: [],
    };
function F(e, t) {
    if (null == t.communicationDisabledUntil || !(0, p.b)(t)) return V(e, t.userId);
    let n = W(e, t.userId);
    M[n] !== t.communicationDisabledUntil && (0, p.b)(t) && ((M[n] = t.communicationDisabledUntil), H(n));
}
function V(e, t) {
    if (null != t) {
        let n = W(e, t);
        null != M[n] && H(n), Y(W(e, t));
    } else
        for (let t in M) {
            let n = t;
            z(n) === e && (H(t), Y(n));
        }
}
function H(e) {
    (k += 1), (G[e] = k);
}
function Y(e) {
    K(e) === O.default.getId() && (0, h.l)(z(e)), delete M[e];
}
function W(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join("-");
}
function K(e) {
    return e.split("-")[1];
}
function z(e) {
    return e.split("-")[0];
}
function q(e, t) {
    var n, r;
    let i, a, o, s;
    if (0 === t.length)
        return {
            colorString: null,
            colorStrings: null,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0,
        };
    for (let n of t) {
        let t = e[n];
        null != t &&
            ((null == s || (0, b.C$)(t, s)) && (s = t),
            t.color > 0 && (null == i || (0, b.C$)(t, i)) && (i = t),
            t.hoist && (null == a || (0, b.C$)(t, a)) && (a = t),
            (null != t.icon || null != t.unicodeEmoji) && (null == o || (0, b.C$)(t, o)) && (o = t));
    }
    return {
        colorString: null != (n = null == i ? void 0 : i.colorString) ? n : null,
        colorStrings: null != (r = null == i ? void 0 : i.colorStrings) ? r : null,
        colorRoleId: null == i ? void 0 : i.id,
        iconRoleId: null == o ? void 0 : o.id,
        hoistRoleId: null == a ? void 0 : a.id,
        highestRoleId: null == s ? void 0 : s.id,
    };
}
function X(e) {
    var t, n;
    let {
            userId: r,
            nick: i,
            guildId: a,
            avatar: o,
            avatarDecoration: s,
            guildRoles: l,
            roles: c,
            premiumSince: u,
            isPending: d,
            joinedAt: f,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: p,
            fullProfileLoadedTimestamp: h,
            flags: E,
            collectibles: b,
            displayNameStyles: v,
        } = e,
        { colorString: I, colorStrings: T, colorRoleId: A, iconRoleId: N, hoistRoleId: P, highestRoleId: D } = q(l, c),
        L = {
            userId: r,
            nick: i,
            guildId: a,
            avatar: o,
            avatarDecoration: s,
            roles: c,
            colorString: I,
            colorStrings: T,
            colorRoleId: A,
            iconRoleId: N,
            hoistRoleId: P,
            highestRoleId: D,
            premiumSince: u,
            isPending: d,
            joinedAt: f,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: p,
            fullProfileLoadedTimestamp: h,
            flags: E,
            collectibles: b,
            displayNameStyles: v,
        };
    if (
        ((0, g.yE)(null != (t = L.flags) ? t : 0, S.q.IS_GUEST) &&
            (L.flags = (0, g.pj)(null != (n = L.flags) ? n : 0, S.q.BYPASSES_VERIFICATION)),
        null == w[a])
    )
        return L;
    if (r === O.default.getId())
        if (m.Z.isViewingRoles(a) || m.Z.isFullServerPreview(a)) {
            let e = m.Z.getViewingRoles(a);
            x[a] = R(C({}, L, m.Z.getMemberOptions(a)), { roles: null != e ? y.default.keys(e) : [] });
        } else null != x[a] && delete x[a];
    return L;
}
function Q(e) {
    j ? (j = !1) : ((w = {}), (D = {})), (M = {}), $(e);
}
function J(e) {
    e.guilds.forEach((e) => {
        var t;
        let n = e.id;
        eI({
            id: n,
            members: e.members,
        }),
            null == (t = e.activity_instances) ||
                t.forEach((e) => {
                    ev(n, e.participants);
                });
    });
}
function $(e) {
    e.guilds.forEach((e) => {
        eI(e);
    });
}
function ee(e) {
    let { guildMembers: t } = e;
    (w = C({}, t)), (D = {});
}
function et(e) {
    let { guildMembers: t, guilds: n } = e;
    (j = !0), (w = C({}, t)), (D = {}), (L = {}), er(n);
}
function en(e) {
    let { guilds: t } = e;
    er(t);
}
function er(e) {
    for (let t of e)
        if (
            null != t.member &&
            (null == L[t.id] ? (L[t.id] = t.member) : (L[t.id] = R(C({}, t.member), { roles: t.member.roles })),
            null != w[t.id])
        ) {
            let e = w[t.id];
            null != e[t.member.userId] &&
                (e[t.member.userId] = R(C({}, e[t.member.userId]), { roles: t.member.roles }));
        }
}
function ei(e) {
    var t, n;
    if (null == e.guildId || null == T.Z.getGuild(e.guildId)) return !1;
    (j = !0), (w[e.guildId] = null != (t = w[e.guildId]) ? t : {});
    let r = !1;
    for (let t of ((j = !0), (w[e.guildId] = null != (n = w[e.guildId]) ? n : {}), e.members))
        null == w[e.guildId][t.userId] && ((r = !0), (w[e.guildId][t.userId] = t));
    return r;
}
function ea(e) {
    var t;
    let {
            guildId: n,
            user: r,
            nick: i,
            avatar: a,
            avatarDecoration: o,
            roles: s,
            premiumSince: l,
            isPending: c,
            joinedAt: d,
            communicationDisabledUntil: f,
            unusualDMActivityUntil: _,
            flags: p,
            collectibles: h,
            displayNameStyles: m,
        } = e,
        g = w[n];
    if (null == g) return !1;
    let E = T.Z.getGuild(n);
    if (null == E) return P.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
    (g[r.id] = X({
        userId: r.id,
        nick: i,
        guildId: n,
        avatar: a,
        avatarDecoration: (0, u.FG)(o),
        guildRoles: I.Z.getUnsafeMutableRoles(E.id),
        roles: s,
        premiumSince: l,
        isPending: c,
        joinedAt: d,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: null == (t = g[r.id]) ? void 0 : t.fullProfileLoadedTimestamp,
        flags: p,
        collectibles: h,
        displayNameStyles: m,
    })),
        F(n, g[r.id]);
}
function eo(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = w[t];
    if (null == i) return !1;
    let a = T.Z.getGuild(t);
    if (null == a) return P.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
    let o = i[n];
    if (null == o || o.roles.includes(r)) return !1;
    o.roles = [...o.roles, r];
    let s = q(I.Z.getUnsafeMutableRoles(a.id), o.roles);
    return (i[n] = C({}, o, s)), !0;
}
function es(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = w[t];
    if (null == i) return !1;
    let a = T.Z.getGuild(t);
    if (null == a) return P.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
    let o = i[n];
    if (null == o || !o.roles.includes(r)) return !1;
    o.roles = o.roles.filter((e) => e !== r);
    let s = q(I.Z.getUnsafeMutableRoles(a.id), o.roles);
    return (i[n] = C({}, o, s)), !0;
}
function el(e) {
    let { guildMember: t, guildId: n } = e,
        r = w[n];
    if (null == r) return !1;
    let i = T.Z.getGuild(n);
    if (null == i) return P.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
    (r[t.user.id] = X({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: em(t),
        guildRoles: I.Z.getUnsafeMutableRoles(i.id),
        roles: t.roles,
        premiumSince: t.premium_since,
        isPending: t.pending,
        joinedAt: t.joined_at,
        communicationDisabledUntil: t.communication_disabled_until,
        unusualDMActivityUntil: t.unusual_dm_activity_until,
        flags: t.flags,
        fullProfileLoadedTimestamp: Date.now(),
        collectibles: (0, d.Xm)(t.collectibles),
        displayNameStyles: (0, _.bN)(t.display_name_styles),
    })),
        F(n, r[t.user.id]);
}
function ec(e) {
    let t = !1;
    for (let n of e.chunks) t = eh(n.guildId, n.members) || t;
    return t;
}
function eu(e) {
    return e.members.length > 0 && eh(e.guildId, e.members);
}
function ed(e) {
    let { guildId: t, members: n } = e;
    return eh(t, n.map((e) => e.member).filter(E.lm));
}
function ef(e) {
    let { guildId: t, owners: n } = e;
    return eh(t, n);
}
function e_(e) {
    let { guildId: t, threads: n } = e;
    return eh(
        t,
        Object.values(n).reduce((e, t) => {
            var n, r, i;
            if (
                (null != t.owner && e.push(t.owner),
                (null == t || null == (n = t.first_message) ? void 0 : n.message_snapshots) != null)
            ) {
                let n = t.first_message.message_snapshots[0];
                (null == (r = n.moderator_report) ? void 0 : r.reported_member) != null &&
                    e.push(n.moderator_report.reported_member),
                    (null == (i = n.moderator_report) ? void 0 : i.reporting_member) != null &&
                        e.push(n.moderator_report.reporting_member);
            }
            return e;
        }, []),
    );
}
function ep(e) {
    let { guildId: t, addedMembers: n } = e;
    return null != n && eh(t, n.map((e) => e.member).filter(E.lm));
}
function eh(e, t) {
    let n = w[e];
    if (null == n) return !1;
    let r = T.Z.getGuild(e);
    return null == r
        ? (P.warn("Guild ".concat(e, " not found during batchUpdateGuildMembers.")), !1)
        : (t.forEach((t) => {
              var i;
              let a = n[t.user.id];
              (n[t.user.id] = X({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: em(t),
                  guildRoles: I.Z.getUnsafeMutableRoles(r.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil:
                      null != (i = t.unusual_dm_activity_until) ? i : null == a ? void 0 : a.unusualDMActivityUntil,
                  collectibles: (0, d.Xm)(t.collectibles),
                  displayNameStyles: (0, _.bN)(t.display_name_styles),
              })),
                  F(e, n[t.user.id]);
          }),
          U++,
          !0);
}
function em(e) {
    return (0, u.FG)(e.avatar_decoration_data);
}
function eg(e) {
    let { guildId: t, members: n } = e;
    return eh(
        t,
        n.map((e) => {
            let { member: t } = e;
            return t;
        }),
    );
}
function eE(e) {
    let { guildId: t, user: n } = e;
    ey(t, n.id);
}
function eb(e) {
    let { guildId: t, userId: n } = e;
    ey(t, n);
}
function ey(e, t) {
    let n = w[e];
    if (null == n || null == n[t]) return !1;
    delete n[t], V(e, t), U++;
}
function eO(e) {
    let { guild: t } = e;
    return eI(t);
}
function ev(e, t) {
    return eI({
        id: e,
        members: t.filter(l.Z).map((e) => e.member),
    });
}
function eI(e) {
    let t = e.id;
    t in w || (w[e.id] = {});
    let n = T.Z.getGuild(t);
    if (null == n) return !1;
    let r = w[t];
    for (let a of e.members) {
        var i;
        let o = a.user.id,
            s = r[o],
            l = X({
                userId: o,
                nick: a.nick,
                guildId: e.id,
                avatar: a.avatar,
                avatarDecoration: em(a),
                guildRoles: I.Z.getUnsafeMutableRoles(n.id),
                roles: a.roles,
                premiumSince: a.premium_since,
                isPending: a.pending,
                joinedAt: a.joined_at,
                communicationDisabledUntil: a.communication_disabled_until,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                flags: a.flags,
                unusualDMActivityUntil:
                    null != (i = a.unusual_dm_activity_until) ? i : null == s ? void 0 : s.unusualDMActivityUntil,
                collectibles: (0, d.Xm)(a.collectibles),
                displayNameStyles: (0, _.bN)(a.display_name_styles),
            });
        (r[o] = l), F(t, l);
    }
    return !0;
}
function eT(e) {
    let { guild: t } = e;
    delete w[t.id], delete D[t.id], V(t.id);
}
function eS(e) {
    let t = w[e.guildId];
    if (null == t) return !1;
    let n = T.Z.getGuild(e.guildId);
    if (null == n) return P.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
    let r = O.default.getId();
    for (let i of y.default.keys(t)) {
        let a = t[i];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let o = i === r && "GUILD_ROLE_DELETE" === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            (t[i] = X({
                userId: i,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: I.Z.getUnsafeMutableRoles(n.id),
                roles: o,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                collectibles: a.collectibles,
                displayNameStyles: a.displayNameStyles,
            })),
                F(e.guildId, t[i]);
        }
    }
}
function eA(e) {
    var t, n, r;
    let { guildId: i, roles: o, addedRoleIds: s, removedRoleIds: l, flags: c } = e,
        u = O.default.getId(),
        d = w[i],
        f = null != d ? d[u] : null;
    if (null == f) return !1;
    let _ = T.Z.getGuild(i);
    if (null == _) return !1;
    let p = null != (t = B[i]) ? t : {};
    (B[i] = {
        added: a().difference(a().union(null != (n = p.added) ? n : [], s), null != l ? l : []),
        removed: a().difference(a().union(null != (r = p.removed) ? r : [], l), null != s ? s : []),
    }),
        (d[u] = X({
            userId: u,
            guildId: i,
            nick: f.nick,
            avatar: f.avatar,
            avatarDecoration: f.avatarDecoration,
            guildRoles: I.Z.getUnsafeMutableRoles(_.id),
            roles: null != o ? o : f.roles,
            premiumSince: f.premiumSince,
            isPending: f.isPending,
            joinedAt: f.joinedAt,
            flags: null != c ? c : f.flags,
            fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp,
            collectibles: f.collectibles,
            displayNameStyles: f.displayNameStyles,
        }));
}
function eC(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete B[t];
}
function eN(e) {
    let { guildId: t } = e,
        n = w[t];
    if (null == n) return !1;
    let r = T.Z.getGuild(t);
    if (null == r) return P.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
    let i = O.default.getId(),
        a = n[i];
    n[i] = X({
        userId: i,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: I.Z.getUnsafeMutableRoles(r.id),
        roles: a.roles,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        communicationDisabledUntil: a.communicationDisabledUntil,
        fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
        flags: a.flags,
        collectibles: a.collectibles,
        displayNameStyles: a.displayNameStyles,
    });
}
function eR(e, t) {
    if ((null == e ? void 0 : e.members) == null || null == t) return !1;
    eI({
        id: t,
        members: Object.entries(e.members)
            .map((t) => {
                var n;
                let [r, i] = t,
                    a = null == e || null == (n = e.users) ? void 0 : n[r];
                if (null != a) return R(C({}, i), { user: a });
            })
            .filter((e) => null != e),
    });
}
function eP(e, t) {
    var n;
    let r = !1;
    return (
        null == (n = e.message_snapshots) ||
            n.forEach((t) => {
                var n, i;
                eR(
                    null == (n = t.message) ? void 0 : n.resolved,
                    null == (i = e.message_reference) ? void 0 : i.guild_id,
                ) && (r = !0);
            }),
        eR(e.resolved, t) || r
    );
}
function ew(e) {
    let { message: t, guildId: n } = e;
    return eP(t, n);
}
function eD(e) {
    let t = v.Z.getChannel(e.channel_id);
    eP(e, null == t ? void 0 : t.guild_id);
}
function ex(e) {
    let { messages: t } = e;
    t.forEach((e) => eD(e));
}
function eL(e) {
    let { pins: t } = e;
    t.forEach((e) => {
        let { message: t } = e;
        return eD(t);
    });
}
function eM(e) {
    let { data: t } = e,
        n = [];
    t.forEach((e) => {
        let { messages: t } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                n.push(e);
            });
        });
    }),
        ex({ messages: n });
}
function ej(e) {
    let { location: t, participants: n } = e,
        r = (0, c.j)(t);
    return null != r && ev(r, n);
}
function ek(e) {
    let t = v.Z.getChannel(e.channelId);
    return eR(e.resolved, null == t ? void 0 : t.guild_id);
}
class eU extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(O.default, v.Z, I.Z, T.Z, m.Z);
    }
    getMutableAllGuildsAndMembers() {
        return w;
    }
    memberOf(e) {
        return a()(w)
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
        for (let r in w) {
            var n;
            let i = null == (n = w[r][e]) ? void 0 : n.nick;
            null != i && (Object.prototype.hasOwnProperty.call(t, i) || (t[i] = []), t[i].push(r));
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = w[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        var n;
        if (null == e || null == t) return !1;
        let r = w[e];
        return null != r && (null == (n = r[t]) ? void 0 : n.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = O.default.getId(),
            n = w[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, g.yE)(r, S.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = w[e];
        return null == t ? [] : y.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = w[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = w[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        if (null != n && t === O.default.getId() && (m.Z.isViewingRoles(e) || m.Z.isFullServerPreview(e))) {
            var r;
            return null != (r = x[e]) ? r : n;
        }
        return n;
    }
    getSelfMember(e) {
        return this.getMember(e, O.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = D[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let r = new Date(n.joinedAt);
        return (D[e] = r), r;
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
        return M;
    }
    getCommunicationDisabledVersion() {
        return k;
    }
    getPendingRoleUpdates(e) {
        var t;
        return null != (t = B[e]) ? t : Z;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        var n, r;
        let i = null != (r = null == (n = this.getMember(e, t)) ? void 0 : n.roles) ? r : [],
            o = B[e];
        return null == o ? i : a().difference(a().union(i, o.added), o.removed);
    }
    getMemberVersion() {
        return U;
    }
}
A(eU, "displayName", "GuildMemberStore");
let eG = new eU(s.Z, {
    CONNECTION_OPEN: Q,
    CONNECTION_OPEN_SUPPLEMENTAL: J,
    OVERLAY_INITIALIZE: ee,
    CACHE_LOADED: et,
    CACHE_LOADED_LAZY: en,
    GUILD_CREATE: eO,
    GUILD_DELETE: eT,
    GUILD_MEMBER_ADD: ea,
    GUILD_MEMBER_UPDATE: ea,
    GUILD_MEMBER_UPDATE_LOCAL: eA,
    GUILD_MEMBERS_CHUNK_BATCH: ec,
    GUILD_MEMBER_REMOVE: eE,
    GUILD_MEMBER_REMOVE_LOCAL: eb,
    THREAD_MEMBER_LIST_UPDATE: ed,
    THREAD_MEMBERS_UPDATE: ep,
    LOAD_ARCHIVED_THREADS_SUCCESS: ef,
    LOAD_FORUM_POSTS: e_,
    GUILD_ROLE_UPDATE: eS,
    GUILD_ROLE_DELETE: eS,
    GUILD_ROLE_MEMBER_REMOVE: es,
    GUILD_ROLE_MEMBER_ADD: eo,
    GUILD_MEMBER_PROFILE_UPDATE: el,
    IMPERSONATE_UPDATE: eN,
    IMPERSONATE_STOP: eN,
    PASSIVE_UPDATE_V2: eu,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eC,
    LOCAL_MESSAGES_LOADED: ei,
    MESSAGE_CREATE: ew,
    MESSAGE_UPDATE: ew,
    LOAD_MESSAGES_SUCCESS: ex,
    LOAD_MESSAGES_AROUND_SUCCESS: ex,
    LOAD_RECENT_MENTIONS_SUCCESS: ex,
    LOAD_PINNED_MESSAGES_SUCCESS: eL,
    SEARCH_MESSAGES_SUCCESS: eM,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eM,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eg,
    EMBEDDED_ACTIVITY_UPDATE_V2: ej,
    INTERACTION_MODAL_CREATE: ek,
});
