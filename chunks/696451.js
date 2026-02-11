"use strict";
n.d(t, { Ay: () => eM, DL: () => Y, vg: () => H }), n(938796), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(665260),
    s = n(311907),
    o = n(73153),
    l = n(807605),
    u = n(969151),
    c = n(507698),
    d = n(628856),
    _ = n(626584),
    f = n(945096),
    h = n(316031),
    p = n(264388),
    g = n(164956),
    E = n(403362),
    A = n(7864),
    I = n(661191),
    T = n(961350),
    y = n(734057),
    S = n(317525),
    v = n(71393),
    C = n(340837);
let b = new _.A("GuildMemberStore"),
    N = {},
    R = {},
    O = {},
    D = {},
    L = {},
    w = !1,
    x = 0,
    P = 0,
    M = {},
    k = {},
    U = { added: [], removed: [] };
function G(e, t) {
    if (null == t.communicationDisabledUntil || !(0, h.Z)(t)) return F(e, t.userId);
    let n = j(e, t.userId);
    L[n] !== t.communicationDisabledUntil && (0, h.Z)(t) && ((L[n] = t.communicationDisabledUntil), V(n));
}
function F(e, t) {
    if (null != t) {
        let n = j(e, t);
        null != L[n] && V(n), B(j(e, t));
    } else
        for (let t in L) {
            let n = t;
            Y(n) === e && (V(t), B(n));
        }
}
function V(e) {
    (x += 1), (M[e] = x);
}
function B(e) {
    H(e) === T.default.getId() && (0, p.G)(Y(e)), delete L[e];
}
function j(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join("-");
}
function H(e) {
    return e.split("-")[1];
}
function Y(e) {
    return e.split("-")[0];
}
function W(e, t) {
    let n, r, i, a;
    if (0 === t.length)
        return {
            colorString: null,
            colorStrings: null,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0,
        };
    for (let s of t) {
        let t = e[s];
        null != t &&
            ((null == a || (0, A.zA)(t, a)) && (a = t),
            t.color > 0 && (null == n || (0, A.zA)(t, n)) && (n = t),
            t.hoist && (null == r || (0, A.zA)(t, r)) && (r = t),
            (null != t.icon || null != t.unicodeEmoji) && (null == i || (0, A.zA)(t, i)) && (i = t));
    }
    return {
        colorString: n?.colorString ?? null,
        colorStrings: n?.colorStrings ?? null,
        colorRoleId: n?.id,
        iconRoleId: i?.id,
        hoistRoleId: r?.id,
        highestRoleId: a?.id,
    };
}
function K(e) {
    let {
            userId: t,
            nick: n,
            guildId: r,
            avatar: i,
            avatarDecoration: s,
            guildRoles: o,
            roles: l,
            premiumSince: u,
            isPending: c,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: h,
            flags: p,
            collectibles: E,
            displayNameStyles: A,
        } = e,
        { colorString: y, colorStrings: S, colorRoleId: v, iconRoleId: b, hoistRoleId: R, highestRoleId: D } = W(o, l),
        L = {
            userId: t,
            nick: n,
            guildId: r,
            avatar: i,
            avatarDecoration: s,
            roles: l,
            colorString: y,
            colorStrings: S,
            colorRoleId: v,
            iconRoleId: b,
            hoistRoleId: R,
            highestRoleId: D,
            premiumSince: u,
            isPending: c,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: h,
            flags: p,
            collectibles: E,
            displayNameStyles: A,
        };
    if (
        ((0, a.Lt)(L.flags ?? 0, C.D.IS_GUEST) && (L.flags = (0, a.UI)(L.flags ?? 0, C.D.BYPASSES_VERIFICATION)),
        null == N[r])
    )
        return L;
    if (t === T.default.getId())
        if (g.A.isViewingRoles(r) || g.A.isFullServerPreview(r)) {
            let e = g.A.getViewingRoles(r);
            O[r] = { ...L, ...g.A.getMemberOptions(r), roles: null != e ? I.default.keys(e) : [] };
        } else null != O[r] && delete O[r];
    return L;
}
function $(e) {
    w ? (w = !1) : ((N = {}), (R = {})), (L = {}), q(e);
}
function z(e) {
    e.guilds.forEach((e) => {
        let t = e.id;
        eA({ id: t, members: e.members }),
            e.activity_instances?.forEach((e) => {
                eE(t, e.participants);
            });
    });
}
function q(e) {
    e.guilds.forEach((e) => {
        eA(e);
    });
}
function X(e) {
    let { guildMembers: t } = e;
    (N = { ...t }), (R = {});
}
function Z(e) {
    let { guildMembers: t, guilds: n } = e;
    (w = !0), (N = { ...t }), (R = {}), (D = {}), J(n);
}
function Q(e) {
    let { guilds: t } = e;
    J(t);
}
function J(e) {
    for (let t of e)
        if (
            null != t.member &&
            (null == D[t.id] ? (D[t.id] = t.member) : (D[t.id] = { ...t.member, roles: t.member.roles }),
            null != N[t.id])
        ) {
            let e = N[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = { ...e[t.member.userId], roles: t.member.roles });
        }
}
function ee(e) {
    if (null == e.guildId || null == v.A.getGuild(e.guildId)) return !1;
    (w = !0), (N[e.guildId] = N[e.guildId] ?? {});
    let t = !1;
    for (let n of ((w = !0), (N[e.guildId] = N[e.guildId] ?? {}), e.members))
        null == N[e.guildId][n.userId] && ((t = !0), (N[e.guildId][n.userId] = n));
    return t;
}
function et(e) {
    let {
            guildId: t,
            user: n,
            nick: r,
            avatar: i,
            avatarDecoration: a,
            roles: s,
            premiumSince: o,
            isPending: l,
            joinedAt: u,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: _,
            flags: f,
            collectibles: h,
            displayNameStyles: p,
        } = e,
        g = N[t];
    if (null == g) return !1;
    let E = v.A.getGuild(t);
    if (null == E) return b.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    (g[n.id] = K({
        userId: n.id,
        nick: r,
        guildId: t,
        avatar: i,
        avatarDecoration: (0, c.Xq)(a),
        guildRoles: S.A.getUnsafeMutableRoles(E.id),
        roles: s,
        premiumSince: o,
        isPending: l,
        joinedAt: u,
        communicationDisabledUntil: d,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: g[n.id]?.fullProfileLoadedTimestamp,
        flags: f,
        collectibles: h,
        displayNameStyles: p,
    })),
        G(t, g[n.id]);
}
function en(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = N[t];
    if (null == i) return !1;
    let a = v.A.getGuild(t);
    if (null == a) return b.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    let s = i[n];
    if (null == s || s.roles.includes(r)) return !1;
    s.roles = [...s.roles, r];
    let o = W(S.A.getUnsafeMutableRoles(a.id), s.roles);
    return (i[n] = { ...s, ...o }), !0;
}
function er(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = N[t];
    if (null == i) return !1;
    let a = v.A.getGuild(t);
    if (null == a) return b.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    let s = i[n];
    if (null == s || !s.roles.includes(r)) return !1;
    s.roles = s.roles.filter((e) => e !== r);
    let o = W(S.A.getUnsafeMutableRoles(a.id), s.roles);
    return (i[n] = { ...s, ...o }), !0;
}
function ei(e) {
    let { guildMember: t, guildId: n } = e,
        r = N[n];
    if (null == r) return !1;
    let i = v.A.getGuild(n);
    if (null == i) return b.warn(`Guild ${n} not found during GUILD_MEMBER_UPDATE.`), !1;
    (r[t.user.id] = K({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: e_(t),
        guildRoles: S.A.getUnsafeMutableRoles(i.id),
        roles: t.roles,
        premiumSince: t.premium_since,
        isPending: t.pending,
        joinedAt: t.joined_at,
        communicationDisabledUntil: t.communication_disabled_until,
        unusualDMActivityUntil: t.unusual_dm_activity_until,
        flags: t.flags,
        fullProfileLoadedTimestamp: Date.now(),
        collectibles: (0, d.t)(t.collectibles),
        displayNameStyles: (0, f.mT)(t.display_name_styles),
    })),
        G(n, r[t.user.id]);
}
function ea(e) {
    let t = !1;
    for (let n of e.chunks) t = ed(n.guildId, n.members) || t;
    return t;
}
function es(e) {
    return e.members.length > 0 && ed(e.guildId, e.members);
}
function eo(e) {
    let { guildId: t, members: n } = e;
    return ed(t, n.map((e) => e.member).filter(E.Vq));
}
function el(e) {
    let { guildId: t, owners: n } = e;
    return ed(t, n);
}
function eu(e) {
    let { guildId: t, threads: n } = e;
    return ed(
        t,
        Object.values(n).reduce((e, t) => {
            if ((null != t.owner && e.push(t.owner), t?.first_message?.message_snapshots != null)) {
                let n = t.first_message.message_snapshots[0];
                n.moderator_report?.reported_member != null && e.push(n.moderator_report.reported_member),
                    n.moderator_report?.reporting_member != null && e.push(n.moderator_report.reporting_member);
            }
            return e;
        }, []),
    );
}
function ec(e) {
    let { guildId: t, addedMembers: n } = e;
    return null != n && ed(t, n.map((e) => e.member).filter(E.Vq));
}
function ed(e, t) {
    let n = N[e];
    if (null == n) return !1;
    let r = v.A.getGuild(e);
    return null == r
        ? (b.warn(`Guild ${e} not found during batchUpdateGuildMembers.`), !1)
        : (t.forEach((t) => {
              let i = n[t.user.id];
              (n[t.user.id] = K({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: e_(t),
                  guildRoles: S.A.getUnsafeMutableRoles(r.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: i?.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: t.unusual_dm_activity_until ?? i?.unusualDMActivityUntil,
                  collectibles: (0, d.t)(t.collectibles),
                  displayNameStyles: (0, f.mT)(t.display_name_styles),
              })),
                  G(e, n[t.user.id]);
          }),
          P++,
          !0);
}
function e_(e) {
    return (0, c.Xq)(e.avatar_decoration_data);
}
function ef(e) {
    let { guildId: t, members: n } = e;
    return ed(
        t,
        n.map((e) => {
            let { member: t } = e;
            return t;
        }),
    );
}
function eh(e) {
    let { guildId: t, user: n } = e;
    em(t, n.id);
}
function ep(e) {
    let { guildId: t, userId: n } = e;
    em(t, n);
}
function em(e, t) {
    let n = N[e];
    if (null == n || null == n[t]) return !1;
    delete n[t], F(e, t), P++;
}
function eg(e) {
    let { guild: t } = e;
    return eA(t);
}
function eE(e, t) {
    return eA({ id: e, members: t.filter(l.A).map((e) => e.member) });
}
function eA(e) {
    let t = e.id;
    t in N || (N[e.id] = {});
    let n = v.A.getGuild(t);
    if (null == n) return !1;
    let r = N[t];
    for (let i of e.members) {
        let a = i.user.id,
            s = r[a],
            o = K({
                userId: a,
                nick: i.nick,
                guildId: e.id,
                avatar: i.avatar,
                avatarDecoration: e_(i),
                guildRoles: S.A.getUnsafeMutableRoles(n.id),
                roles: i.roles,
                premiumSince: i.premium_since,
                isPending: i.pending,
                joinedAt: i.joined_at,
                communicationDisabledUntil: i.communication_disabled_until,
                fullProfileLoadedTimestamp: s?.fullProfileLoadedTimestamp,
                flags: i.flags,
                unusualDMActivityUntil: i.unusual_dm_activity_until ?? s?.unusualDMActivityUntil,
                collectibles: (0, d.t)(i.collectibles),
                displayNameStyles: (0, f.mT)(i.display_name_styles),
            });
        (r[a] = o), G(t, o);
    }
    return !0;
}
function eI(e) {
    let { guild: t } = e;
    delete N[t.id], delete R[t.id], F(t.id);
}
function eT(e) {
    let t = N[e.guildId];
    if (null == t) return !1;
    let n = v.A.getGuild(e.guildId);
    if (null == n) return b.warn(`Guild ${e.guildId} not found during ${e.type}.`), !1;
    let r = T.default.getId();
    for (let i of I.default.keys(t)) {
        let a = t[i];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let s = i === r && "GUILD_ROLE_DELETE" === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            (t[i] = K({
                userId: i,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: S.A.getUnsafeMutableRoles(n.id),
                roles: s,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: a?.fullProfileLoadedTimestamp,
                collectibles: a.collectibles,
                displayNameStyles: a.displayNameStyles,
            })),
                G(e.guildId, t[i]);
        }
    }
}
function ey(e) {
    let { guildId: t, roles: n, addedRoleIds: r, removedRoleIds: a, flags: s } = e,
        o = T.default.getId(),
        l = N[t],
        u = null != l ? l[o] : null;
    if (null == u) return !1;
    let c = v.A.getGuild(t);
    if (null == c) return !1;
    let d = k[t] ?? {};
    (k[t] = {
        added: i().difference(i().union(d.added ?? [], r), a ?? []),
        removed: i().difference(i().union(d.removed ?? [], a), r ?? []),
    }),
        (l[o] = K({
            userId: o,
            guildId: t,
            nick: u.nick,
            avatar: u.avatar,
            avatarDecoration: u.avatarDecoration,
            guildRoles: S.A.getUnsafeMutableRoles(c.id),
            roles: n ?? u.roles,
            premiumSince: u.premiumSince,
            isPending: u.isPending,
            joinedAt: u.joinedAt,
            flags: s ?? u.flags,
            fullProfileLoadedTimestamp: u.fullProfileLoadedTimestamp,
            collectibles: u.collectibles,
            displayNameStyles: u.displayNameStyles,
        }));
}
function eS(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete k[t];
}
function ev(e) {
    let { guildId: t } = e,
        n = N[t];
    if (null == n) return !1;
    let r = v.A.getGuild(t);
    if (null == r) return b.warn(`Guild ${t} not found during IMPERSONATE_UPDATE.`), !1;
    let i = T.default.getId(),
        a = n[i];
    n[i] = K({
        userId: i,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: S.A.getUnsafeMutableRoles(r.id),
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
function eC(e, t) {
    if (e?.members == null || null == t) return !1;
    eA({
        id: t,
        members: Object.entries(e.members)
            .map((t) => {
                let [n, r] = t,
                    i = e?.users?.[n];
                if (null != i) return { ...r, user: i };
            })
            .filter((e) => null != e),
    });
}
function eb(e, t) {
    let n = !1;
    return (
        e.message_snapshots?.forEach((t) => {
            eC(t.message?.resolved, e.message_reference?.guild_id) && (n = !0);
        }),
        eC(e.resolved, t) || n
    );
}
function eN(e) {
    let { message: t, guildId: n } = e;
    return eb(t, n);
}
function eR(e) {
    let t = y.A.getChannel(e.channel_id);
    eb(e, t?.guild_id);
}
function eO(e) {
    let { messages: t } = e;
    t.forEach((e) => eR(e));
}
function eD(e) {
    let { pins: t } = e;
    t.forEach((e) => {
        let { message: t } = e;
        return eR(t);
    });
}
function eL(e) {
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
        eO({ messages: n });
}
function ew(e) {
    let { location: t, participants: n } = e,
        r = (0, u.D)(t);
    return null != r && eE(r, n);
}
function ex(e) {
    let t = y.A.getChannel(e.channelId);
    return eC(e.resolved, t?.guild_id);
}
class eP extends s.Ay.Store {
    static displayName = "GuildMemberStore";
    initialize() {
        this.waitFor(T.default, y.A, S.A, v.A, g.A);
    }
    getMutableAllGuildsAndMembers() {
        return N;
    }
    memberOf(e) {
        return i()(N)
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
        for (let n in N) {
            let r = N[n],
                i = r[e]?.nick;
            null != i && (Object.prototype.hasOwnProperty.call(t, i) || (t[i] = []), t[i].push(n));
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = N[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        if (null == e || null == t) return !1;
        let n = N[e];
        return null != n && n[t]?.joinedAt == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = T.default.getId(),
            n = N[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, a.Lt)(r, C.D.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = N[e];
        return null == t ? [] : I.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = N[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = N[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        return null != n && t === T.default.getId() && (g.A.isViewingRoles(e) || g.A.isFullServerPreview(e))
            ? (O[e] ?? n)
            : n;
    }
    getSelfMember(e) {
        return this.getMember(e, T.default.getId());
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
        return D[e] ?? null;
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
        return x;
    }
    getPendingRoleUpdates(e) {
        return k[e] ?? U;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        let n = this.getMember(e, t)?.roles ?? [],
            r = k[e];
        return null == r ? n : i().difference(i().union(n, r.added), r.removed);
    }
    getMemberVersion() {
        return P;
    }
}
let eM = new eP(o.h, {
    CONNECTION_OPEN: $,
    CONNECTION_OPEN_SUPPLEMENTAL: z,
    OVERLAY_INITIALIZE: X,
    CACHE_LOADED: Z,
    CACHE_LOADED_LAZY: Q,
    GUILD_CREATE: eg,
    GUILD_DELETE: eI,
    GUILD_MEMBER_ADD: et,
    GUILD_MEMBER_UPDATE: et,
    GUILD_MEMBER_UPDATE_LOCAL: ey,
    GUILD_MEMBERS_CHUNK_BATCH: ea,
    GUILD_MEMBER_REMOVE: eh,
    GUILD_MEMBER_REMOVE_LOCAL: ep,
    THREAD_MEMBER_LIST_UPDATE: eo,
    THREAD_MEMBERS_UPDATE: ec,
    LOAD_ARCHIVED_THREADS_SUCCESS: el,
    LOAD_FORUM_POSTS: eu,
    GUILD_ROLE_UPDATE: eT,
    GUILD_ROLE_DELETE: eT,
    GUILD_ROLE_MEMBER_REMOVE: er,
    GUILD_ROLE_MEMBER_ADD: en,
    GUILD_MEMBER_PROFILE_UPDATE: ei,
    IMPERSONATE_UPDATE: ev,
    IMPERSONATE_STOP: ev,
    PASSIVE_UPDATE_V2: es,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eS,
    LOCAL_MESSAGES_LOADED: ee,
    MESSAGE_CREATE: eN,
    MESSAGE_UPDATE: eN,
    LOAD_MESSAGES_SUCCESS: eO,
    LOAD_MESSAGES_AROUND_SUCCESS: eO,
    LOAD_RECENT_MENTIONS_SUCCESS: eO,
    LOAD_PINNED_MESSAGES_SUCCESS: eD,
    SEARCH_MESSAGES_SUCCESS: eL,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eL,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: ef,
    EMBEDDED_ACTIVITY_UPDATE_V2: ew,
    INTERACTION_MODAL_CREATE: ex,
});
