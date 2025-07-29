(n.d(t, {
    O5: () => W,
    V6: () => Y,
    ZP: () => ex
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
    d = n(710845),
    _ = n(69882),
    f = n(134049),
    p = n(160404),
    h = n(630388),
    m = n(823379),
    g = n(625137),
    E = n(709054),
    b = n(314897),
    y = n(592125),
    O = n(485386),
    v = n(430824),
    I = n(372897);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = new d.Z('GuildMemberStore'),
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
    if (null == t.communicationDisabledUntil || !(0, _.b)(t)) return V(e, t.userId);
    let n = H(e, t.userId);
    L[n] !== t.communicationDisabledUntil && (0, _.b)(t) && ((L[n] = t.communicationDisabledUntil), F(n));
}
function V(e, t) {
    if (null != t) {
        let n = H(e, t);
        (null != L[n] && F(n), Z(H(e, t)));
    } else
        for (let t in L) {
            let n = t;
            W(n) === e && (F(t), Z(n));
        }
}
function F(e) {
    ((M += 1), (j[e] = M));
}
function Z(e) {
    (Y(e) === b.default.getId() && (0, f.l)(W(e)), delete L[e]);
}
function H(e, t) {
    let n = [];
    return ((n[0] = e), (n[1] = t), n.join('-'));
}
function Y(e) {
    return e.split('-')[1];
}
function W(e) {
    return e.split('-')[0];
}
function K(e, t) {
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
        null != t && ((null == s || (0, g.C$)(t, s)) && (s = t), t.color > 0 && (null == i || (0, g.C$)(t, i)) && (i = t), t.hoist && (null == a || (0, g.C$)(t, a)) && (a = t), (null != t.icon || null != t.unicodeEmoji) && (null == o || (0, g.C$)(t, o)) && (o = t));
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
function z(e) {
    var t, n;
    let { userId: r, nick: i, guildId: a, avatar: o, avatarDecoration: s, guildRoles: l, roles: c, premiumSince: u, isPending: d, joinedAt: _, communicationDisabledUntil: f, unusualDMActivityUntil: m, fullProfileLoadedTimestamp: g, flags: y } = e,
        { colorString: O, colorStrings: v, colorRoleId: T, iconRoleId: A, hoistRoleId: C, highestRoleId: P } = K(l, c),
        D = {
            userId: r,
            nick: i,
            guildId: a,
            avatar: o,
            avatarDecoration: s,
            roles: c,
            colorString: O,
            colorStrings: v,
            colorRoleId: T,
            iconRoleId: A,
            hoistRoleId: C,
            highestRoleId: P,
            premiumSince: u,
            isPending: d,
            joinedAt: _,
            communicationDisabledUntil: f,
            unusualDMActivityUntil: m,
            fullProfileLoadedTimestamp: g,
            flags: y
        };
    if (((0, h.yE)(null != (t = D.flags) ? t : 0, I.q.IS_GUEST) && (D.flags = (0, h.pj)(null != (n = D.flags) ? n : 0, I.q.BYPASSES_VERIFICATION)), null == R[a])) return D;
    if (r === b.default.getId())
        if (p.Z.isViewingRoles(a) || p.Z.isFullServerPreview(a)) {
            let e = p.Z.getViewingRoles(a);
            w[a] = N(S({}, D, p.Z.getMemberOptions(a)), { roles: null != e ? E.default.keys(e) : [] });
        } else null != w[a] && delete w[a];
    return D;
}
function q(e) {
    (x ? (x = !1) : ((R = {}), (P = {})), (L = {}), Q(e));
}
function X(e) {
    e.guilds.forEach((e) => {
        var t;
        let n = e.id;
        (eO({
            id: n,
            members: e.members
        }),
            null == (t = e.activity_instances) ||
                t.forEach((e) => {
                    ey(n, e.participants);
                }));
    });
}
function Q(e) {
    e.guilds.forEach((e) => {
        eO(e);
    });
}
function J(e) {
    let { guildMembers: t } = e;
    ((R = S({}, t)), (P = {}));
}
function $(e) {
    let { guildMembers: t, guilds: n } = e;
    ((x = !0), (R = S({}, t)), (P = {}), (D = {}), et(n));
}
function ee(e) {
    let { guilds: t } = e;
    et(t);
}
function et(e) {
    for (let t of e)
        if (null != t.member && (null == D[t.id] ? (D[t.id] = t.member) : (D[t.id] = N(S({}, t.member), { roles: t.member.roles })), null != R[t.id])) {
            let e = R[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = N(S({}, e[t.member.userId]), { roles: t.member.roles }));
        }
}
function en(e) {
    var t, n;
    if (null == e.guildId || null == v.Z.getGuild(e.guildId)) return !1;
    ((x = !0), (R[e.guildId] = null != (t = R[e.guildId]) ? t : {}));
    let r = !1;
    for (let t of ((x = !0), (R[e.guildId] = null != (n = R[e.guildId]) ? n : {}), e.members)) null == R[e.guildId][t.userId] && ((r = !0), (R[e.guildId][t.userId] = t));
    return r;
}
function er(e) {
    var t;
    let { guildId: n, user: r, nick: i, avatar: a, avatarDecoration: o, roles: s, premiumSince: l, isPending: c, joinedAt: d, communicationDisabledUntil: _, unusualDMActivityUntil: f, flags: p } = e,
        h = R[n];
    if (null == h) return !1;
    let m = v.Z.getGuild(n);
    if (null == m) return (C.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1);
    ((h[r.id] = z({
        userId: r.id,
        nick: i,
        guildId: n,
        avatar: a,
        avatarDecoration: (0, u.FG)(o),
        guildRoles: O.Z.getUnsafeMutableRoles(m.id),
        roles: s,
        premiumSince: l,
        isPending: c,
        joinedAt: d,
        communicationDisabledUntil: _,
        unusualDMActivityUntil: f,
        fullProfileLoadedTimestamp: null == (t = h[r.id]) ? void 0 : t.fullProfileLoadedTimestamp,
        flags: p
    })),
        B(n, h[r.id]));
}
function ei(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = R[t];
    if (null == i) return !1;
    let a = v.Z.getGuild(t);
    if (null == a) return (C.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1);
    let o = i[n];
    if (null == o || o.roles.includes(r)) return !1;
    o.roles = [...o.roles, r];
    let s = K(O.Z.getUnsafeMutableRoles(a.id), o.roles);
    return ((i[n] = S({}, o, s)), !0);
}
function ea(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = R[t];
    if (null == i) return !1;
    let a = v.Z.getGuild(t);
    if (null == a) return (C.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1);
    let o = i[n];
    if (null == o || !o.roles.includes(r)) return !1;
    o.roles = o.roles.filter((e) => e !== r);
    let s = K(O.Z.getUnsafeMutableRoles(a.id), o.roles);
    return ((i[n] = S({}, o, s)), !0);
}
function eo(e) {
    let { guildMember: t, guildId: n } = e,
        r = R[n];
    if (null == r) return !1;
    let i = v.Z.getGuild(n);
    if (null == i) return (C.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1);
    ((r[t.user.id] = z({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: ep(t),
        guildRoles: O.Z.getUnsafeMutableRoles(i.id),
        roles: t.roles,
        premiumSince: t.premium_since,
        isPending: t.pending,
        joinedAt: t.joined_at,
        communicationDisabledUntil: t.communication_disabled_until,
        unusualDMActivityUntil: t.unusual_dm_activity_until,
        flags: t.flags,
        fullProfileLoadedTimestamp: Date.now()
    })),
        B(n, r[t.user.id]));
}
function es(e) {
    let t = !1;
    for (let n of e.chunks) t = ef(n.guildId, n.members) || t;
    return t;
}
function el(e) {
    return e.members.length > 0 && ef(e.guildId, e.members);
}
function ec(e) {
    let { guildId: t, members: n } = e;
    return ef(t, n.map((e) => e.member).filter(m.lm));
}
function eu(e) {
    let { guildId: t, owners: n } = e;
    return ef(t, n);
}
function ed(e) {
    let { guildId: t, threads: n } = e;
    return ef(
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
    return null != n && ef(t, n.map((e) => e.member).filter(m.lm));
}
function ef(e, t) {
    let n = R[e];
    if (null == n) return !1;
    let r = v.Z.getGuild(e);
    return null == r
        ? (C.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (t.forEach((t) => {
              var i;
              let a = n[t.user.id];
              ((n[t.user.id] = z({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: ep(t),
                  guildRoles: O.Z.getUnsafeMutableRoles(r.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null != (i = t.unusual_dm_activity_until) ? i : null == a ? void 0 : a.unusualDMActivityUntil
              })),
                  B(e, n[t.user.id]));
          }),
          k++,
          !0);
}
function ep(e) {
    return (0, u.FG)(e.avatar_decoration_data);
}
function eh(e) {
    let { guildId: t, members: n } = e;
    return ef(
        t,
        n.map((e) => {
            let { member: t } = e;
            return t;
        })
    );
}
function em(e) {
    let { guildId: t, user: n } = e;
    eE(t, n.id);
}
function eg(e) {
    let { guildId: t, userId: n } = e;
    eE(t, n);
}
function eE(e, t) {
    let n = R[e];
    if (null == n || null == n[t]) return !1;
    (delete n[t], V(e, t), k++);
}
function eb(e) {
    let { guild: t } = e;
    return eO(t);
}
function ey(e, t) {
    return eO({
        id: e,
        members: t.filter(l.Z).map((e) => e.member)
    });
}
function eO(e) {
    let t = e.id;
    t in R || (R[e.id] = {});
    let n = v.Z.getGuild(t);
    if (null == n) return !1;
    let r = R[t];
    for (let a of e.members) {
        var i;
        let o = a.user.id,
            s = r[o],
            l = z({
                userId: o,
                nick: a.nick,
                guildId: e.id,
                avatar: a.avatar,
                avatarDecoration: ep(a),
                guildRoles: O.Z.getUnsafeMutableRoles(n.id),
                roles: a.roles,
                premiumSince: a.premium_since,
                isPending: a.pending,
                joinedAt: a.joined_at,
                communicationDisabledUntil: a.communication_disabled_until,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                flags: a.flags,
                unusualDMActivityUntil: null != (i = a.unusual_dm_activity_until) ? i : null == s ? void 0 : s.unusualDMActivityUntil
            });
        ((r[o] = l), B(t, l));
    }
    return !0;
}
function ev(e) {
    let { guild: t } = e;
    (delete R[t.id], delete P[t.id], V(t.id));
}
function eI(e) {
    let t = R[e.guildId];
    if (null == t) return !1;
    let n = v.Z.getGuild(e.guildId);
    if (null == n) return (C.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1);
    let r = b.default.getId();
    for (let i of E.default.keys(t)) {
        let a = t[i];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let o = i === r && 'GUILD_ROLE_DELETE' === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            ((t[i] = z({
                userId: i,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: O.Z.getUnsafeMutableRoles(n.id),
                roles: o,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp
            })),
                B(e.guildId, t[i]));
        }
    }
}
function eT(e) {
    var t, n, r;
    let { guildId: i, roles: o, addedRoleIds: s, removedRoleIds: l, flags: c } = e,
        u = b.default.getId(),
        d = R[i],
        _ = null != d ? d[u] : null;
    if (null == _) return !1;
    let f = v.Z.getGuild(i);
    if (null == f) return !1;
    let p = null != (t = U[i]) ? t : {};
    ((U[i] = {
        added: a().difference(a().union(null != (n = p.added) ? n : [], s), null != l ? l : []),
        removed: a().difference(a().union(null != (r = p.removed) ? r : [], l), null != s ? s : [])
    }),
        (d[u] = z({
            userId: u,
            guildId: i,
            nick: _.nick,
            avatar: _.avatar,
            avatarDecoration: _.avatarDecoration,
            guildRoles: O.Z.getUnsafeMutableRoles(f.id),
            roles: null != o ? o : _.roles,
            premiumSince: _.premiumSince,
            isPending: _.isPending,
            joinedAt: _.joinedAt,
            flags: null != c ? c : _.flags,
            fullProfileLoadedTimestamp: _.fullProfileLoadedTimestamp
        })));
}
function eS(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete U[t];
}
function eA(e) {
    let { guildId: t } = e,
        n = R[t];
    if (null == n) return !1;
    let r = v.Z.getGuild(t);
    if (null == r) return (C.warn('Guild '.concat(t, ' not found during IMPERSONATE_UPDATE.')), !1);
    let i = b.default.getId(),
        a = n[i];
    n[i] = z({
        userId: i,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: O.Z.getUnsafeMutableRoles(r.id),
        roles: a.roles,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        communicationDisabledUntil: a.communicationDisabledUntil,
        fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
        flags: a.flags
    });
}
function eN(e) {
    var t;
    let { message: n, guildId: r } = e;
    (null == (t = n.resolved) ? void 0 : t.members) != null &&
        null != r &&
        eO({
            id: r,
            members: Object.entries(n.resolved.members)
                .map((e) => {
                    var t, r;
                    let [i, a] = e,
                        o = null == (r = n.resolved) || null == (t = r.users) ? void 0 : t[i];
                    if (null != o) return N(S({}, a), { user: o });
                })
                .filter((e) => null != e)
        });
}
function eC(e) {
    var t;
    if ((null == (t = e.resolved) ? void 0 : t.members) == null) return;
    let n = y.Z.getChannel(e.channel_id);
    null == n ||
        n.isPrivate() ||
        eO({
            id: n.guild_id,
            members: Object.entries(e.resolved.members)
                .map((t) => {
                    var n, r;
                    let [i, a] = t,
                        o = null == (r = e.resolved) || null == (n = r.users) ? void 0 : n[i];
                    if (null != o) return N(S({}, a), { user: o });
                })
                .filter((e) => null != e)
        });
}
function eR(e) {
    let { messages: t } = e;
    t.forEach((e) => eC(e));
}
function eP(e) {
    let { pins: t } = e;
    t.forEach((e) => {
        let { message: t } = e;
        return eC(t);
    });
}
function ew(e) {
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
        eR({ messages: n }));
}
function eD(e) {
    let { location: t, participants: n } = e,
        r = (0, c.j)(t);
    return null != r && ey(r, n);
}
class eL extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, O.Z, b.default, p.Z);
    }
    getMutableAllGuildsAndMembers() {
        return R;
    }
    memberOf(e) {
        return a()(R)
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
        let t = b.default.getId(),
            n = R[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, h.yE)(r, I.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = R[e];
        return null == t ? [] : E.default.keys(t);
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
        if (null != n && t === b.default.getId() && (p.Z.isViewingRoles(e) || p.Z.isFullServerPreview(e))) {
            var r;
            return null != (r = w[e]) ? r : n;
        }
        return n;
    }
    getSelfMember(e) {
        return this.getMember(e, b.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = P[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let r = new Date(n.joinedAt);
        return ((P[e] = r), r);
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
            o = U[e];
        return null == o ? i : a().difference(a().union(i, o.added), o.removed);
    }
    getMemberVersion() {
        return k;
    }
}
T(eL, 'displayName', 'GuildMemberStore');
let ex = new eL(s.Z, {
    CONNECTION_OPEN: q,
    CONNECTION_OPEN_SUPPLEMENTAL: X,
    OVERLAY_INITIALIZE: J,
    CACHE_LOADED: $,
    CACHE_LOADED_LAZY: ee,
    GUILD_CREATE: eb,
    GUILD_DELETE: ev,
    GUILD_MEMBER_ADD: er,
    GUILD_MEMBER_UPDATE: er,
    GUILD_MEMBER_UPDATE_LOCAL: eT,
    GUILD_MEMBERS_CHUNK_BATCH: es,
    GUILD_MEMBER_REMOVE: em,
    GUILD_MEMBER_REMOVE_LOCAL: eg,
    THREAD_MEMBER_LIST_UPDATE: ec,
    THREAD_MEMBERS_UPDATE: e_,
    LOAD_ARCHIVED_THREADS_SUCCESS: eu,
    LOAD_FORUM_POSTS: ed,
    GUILD_ROLE_UPDATE: eI,
    GUILD_ROLE_DELETE: eI,
    GUILD_ROLE_MEMBER_REMOVE: ea,
    GUILD_ROLE_MEMBER_ADD: ei,
    GUILD_MEMBER_PROFILE_UPDATE: eo,
    IMPERSONATE_UPDATE: eA,
    IMPERSONATE_STOP: eA,
    PASSIVE_UPDATE_V2: el,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eS,
    LOCAL_MESSAGES_LOADED: en,
    MESSAGE_CREATE: eN,
    MESSAGE_UPDATE: eN,
    LOAD_MESSAGES_SUCCESS: eR,
    LOAD_MESSAGES_AROUND_SUCCESS: eR,
    LOAD_RECENT_MENTIONS_SUCCESS: eR,
    LOAD_PINNED_MESSAGES_SUCCESS: eP,
    SEARCH_MESSAGES_SUCCESS: ew,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ew,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eh,
    EMBEDDED_ACTIVITY_UPDATE_V2: eD
});
