"use strict";
n.d(t, { Ay: () => eP, DL: () => H, vg: () => j }), n(938796), n(321073);
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
    p = n(316031),
    h = n(264388),
    m = n(164956),
    g = n(403362),
    E = n(7864),
    A = n(661191),
    I = n(961350),
    T = n(734057),
    y = n(317525),
    S = n(71393),
    v = n(340837);
let C = new _.A("GuildMemberStore"),
    b = {},
    N = {},
    R = {},
    O = {},
    D = {},
    L = !1,
    w = 0,
    x = 0,
    P = {},
    M = {},
    k = { added: [], removed: [] };
function U(e, t) {
    if (null == t.communicationDisabledUntil || !(0, p.Z)(t)) return G(e, t.userId);
    let n = B(e, t.userId);
    D[n] !== t.communicationDisabledUntil && (0, p.Z)(t) && ((D[n] = t.communicationDisabledUntil), V(n));
}
function G(e, t) {
    if (null != t) {
        let n = B(e, t);
        null != D[n] && V(n), F(B(e, t));
    } else
        for (let t in D) {
            let n = t;
            H(n) === e && (V(t), F(n));
        }
}
function V(e) {
    (w += 1), (P[e] = w);
}
function F(e) {
    j(e) === I.default.getId() && (0, h.G)(H(e)), delete D[e];
}
function B(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join("-");
}
function j(e) {
    return e.split("-")[1];
}
function H(e) {
    return e.split("-")[0];
}
function Y(e, t) {
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
            ((null == a || (0, E.zA)(t, a)) && (a = t),
            t.color > 0 && (null == n || (0, E.zA)(t, n)) && (n = t),
            t.hoist && (null == r || (0, E.zA)(t, r)) && (r = t),
            (null != t.icon || null != t.unicodeEmoji) && (null == i || (0, E.zA)(t, i)) && (i = t));
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
function W(e) {
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
            fullProfileLoadedTimestamp: p,
            flags: h,
            collectibles: g,
            displayNameStyles: E,
        } = e,
        { colorString: T, colorStrings: y, colorRoleId: S, iconRoleId: C, hoistRoleId: N, highestRoleId: O } = Y(o, l),
        D = {
            userId: t,
            nick: n,
            guildId: r,
            avatar: i,
            avatarDecoration: s,
            roles: l,
            colorString: T,
            colorStrings: y,
            colorRoleId: S,
            iconRoleId: C,
            hoistRoleId: N,
            highestRoleId: O,
            premiumSince: u,
            isPending: c,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: p,
            flags: h,
            collectibles: g,
            displayNameStyles: E,
        };
    if (
        ((0, a.Lt)(D.flags ?? 0, v.D.IS_GUEST) && (D.flags = (0, a.UI)(D.flags ?? 0, v.D.BYPASSES_VERIFICATION)),
        null == b[r])
    )
        return D;
    if (t === I.default.getId())
        if (m.A.isViewingRoles(r) || m.A.isFullServerPreview(r)) {
            let e = m.A.getViewingRoles(r);
            R[r] = { ...D, ...m.A.getMemberOptions(r), roles: null != e ? A.default.keys(e) : [] };
        } else null != R[r] && delete R[r];
    return D;
}
function K(e) {
    L ? (L = !1) : ((b = {}), (N = {})), (D = {}), $(e);
}
function z(e) {
    e.guilds.forEach((e) => {
        let t = e.id;
        eE({ id: t, members: e.members }),
            e.activity_instances?.forEach((e) => {
                eg(t, e.participants);
            });
    });
}
function $(e) {
    e.guilds.forEach((e) => {
        eE(e);
    });
}
function q(e) {
    let { guildMembers: t } = e;
    (b = { ...t }), (N = {});
}
function Z(e) {
    let { guildMembers: t, guilds: n } = e;
    (L = !0), (b = { ...t }), (N = {}), (O = {}), X(n);
}
function Q(e) {
    let { guilds: t } = e;
    X(t);
}
function X(e) {
    for (let t of e)
        if (
            null != t.member &&
            (null == O[t.id] ? (O[t.id] = t.member) : (O[t.id] = { ...t.member, roles: t.member.roles }),
            null != b[t.id])
        ) {
            let e = b[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = { ...e[t.member.userId], roles: t.member.roles });
        }
}
function J(e) {
    if (null == e.guildId || null == S.A.getGuild(e.guildId)) return !1;
    (L = !0), (b[e.guildId] = b[e.guildId] ?? {});
    let t = !1;
    for (let n of ((L = !0), (b[e.guildId] = b[e.guildId] ?? {}), e.members))
        null == b[e.guildId][n.userId] && ((t = !0), (b[e.guildId][n.userId] = n));
    return t;
}
function ee(e) {
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
            collectibles: p,
            displayNameStyles: h,
        } = e,
        m = b[t];
    if (null == m) return !1;
    let g = S.A.getGuild(t);
    if (null == g) return C.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    (m[n.id] = W({
        userId: n.id,
        nick: r,
        guildId: t,
        avatar: i,
        avatarDecoration: (0, c.Xq)(a),
        guildRoles: y.A.getUnsafeMutableRoles(g.id),
        roles: s,
        premiumSince: o,
        isPending: l,
        joinedAt: u,
        communicationDisabledUntil: d,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: m[n.id]?.fullProfileLoadedTimestamp,
        flags: f,
        collectibles: p,
        displayNameStyles: h,
    })),
        U(t, m[n.id]);
}
function et(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = b[t];
    if (null == i) return !1;
    let a = S.A.getGuild(t);
    if (null == a) return C.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    let s = i[n];
    if (null == s || s.roles.includes(r)) return !1;
    s.roles = [...s.roles, r];
    let o = Y(y.A.getUnsafeMutableRoles(a.id), s.roles);
    return (i[n] = { ...s, ...o }), !0;
}
function en(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = b[t];
    if (null == i) return !1;
    let a = S.A.getGuild(t);
    if (null == a) return C.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    let s = i[n];
    if (null == s || !s.roles.includes(r)) return !1;
    s.roles = s.roles.filter((e) => e !== r);
    let o = Y(y.A.getUnsafeMutableRoles(a.id), s.roles);
    return (i[n] = { ...s, ...o }), !0;
}
function er(e) {
    let { guildMember: t, guildId: n } = e,
        r = b[n];
    if (null == r) return !1;
    let i = S.A.getGuild(n);
    if (null == i) return C.warn(`Guild ${n} not found during GUILD_MEMBER_UPDATE.`), !1;
    (r[t.user.id] = W({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: ed(t),
        guildRoles: y.A.getUnsafeMutableRoles(i.id),
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
        U(n, r[t.user.id]);
}
function ei(e) {
    let t = !1;
    for (let n of e.chunks) t = ec(n.guildId, n.members) || t;
    return t;
}
function ea(e) {
    return e.members.length > 0 && ec(e.guildId, e.members);
}
function es(e) {
    let { guildId: t, members: n } = e;
    return ec(t, n.map((e) => e.member).filter(g.Vq));
}
function eo(e) {
    let { guildId: t, owners: n } = e;
    return ec(t, n);
}
function el(e) {
    let { guildId: t, threads: n } = e;
    return ec(
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
function eu(e) {
    let { guildId: t, addedMembers: n } = e;
    return null != n && ec(t, n.map((e) => e.member).filter(g.Vq));
}
function ec(e, t) {
    let n = b[e];
    if (null == n) return !1;
    let r = S.A.getGuild(e);
    return null == r
        ? (C.warn(`Guild ${e} not found during batchUpdateGuildMembers.`), !1)
        : (t.forEach((t) => {
              let i = n[t.user.id];
              (n[t.user.id] = W({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: ed(t),
                  guildRoles: y.A.getUnsafeMutableRoles(r.id),
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
                  U(e, n[t.user.id]);
          }),
          x++,
          !0);
}
function ed(e) {
    return (0, c.Xq)(e.avatar_decoration_data);
}
function e_(e) {
    let { guildId: t, members: n } = e;
    return ec(
        t,
        n.map((e) => {
            let { member: t } = e;
            return t;
        }),
    );
}
function ef(e) {
    let { guildId: t, user: n } = e;
    eh(t, n.id);
}
function ep(e) {
    let { guildId: t, userId: n } = e;
    eh(t, n);
}
function eh(e, t) {
    let n = b[e];
    if (null == n || null == n[t]) return !1;
    delete n[t], G(e, t), x++;
}
function em(e) {
    let { guild: t } = e;
    return eE(t);
}
function eg(e, t) {
    return eE({ id: e, members: t.filter(l.A).map((e) => e.member) });
}
function eE(e) {
    let t = e.id;
    t in b || (b[e.id] = {});
    let n = S.A.getGuild(t);
    if (null == n) return !1;
    let r = b[t];
    for (let i of e.members) {
        let a = i.user.id,
            s = r[a],
            o = W({
                userId: a,
                nick: i.nick,
                guildId: e.id,
                avatar: i.avatar,
                avatarDecoration: ed(i),
                guildRoles: y.A.getUnsafeMutableRoles(n.id),
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
        (r[a] = o), U(t, o);
    }
    return !0;
}
function eA(e) {
    let { guild: t } = e;
    delete b[t.id], delete N[t.id], G(t.id);
}
function eI(e) {
    let t = b[e.guildId];
    if (null == t) return !1;
    let n = S.A.getGuild(e.guildId);
    if (null == n) return C.warn(`Guild ${e.guildId} not found during ${e.type}.`), !1;
    let r = I.default.getId();
    for (let i of A.default.keys(t)) {
        let a = t[i];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let s = i === r && "GUILD_ROLE_DELETE" === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            (t[i] = W({
                userId: i,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: y.A.getUnsafeMutableRoles(n.id),
                roles: s,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: a?.fullProfileLoadedTimestamp,
                collectibles: a.collectibles,
                displayNameStyles: a.displayNameStyles,
            })),
                U(e.guildId, t[i]);
        }
    }
}
function eT(e) {
    let { guildId: t, roles: n, addedRoleIds: r, removedRoleIds: a, flags: s } = e,
        o = I.default.getId(),
        l = b[t],
        u = null != l ? l[o] : null;
    if (null == u) return !1;
    let c = S.A.getGuild(t);
    if (null == c) return !1;
    let d = M[t] ?? {};
    (M[t] = {
        added: i().difference(i().union(d.added ?? [], r), a ?? []),
        removed: i().difference(i().union(d.removed ?? [], a), r ?? []),
    }),
        (l[o] = W({
            userId: o,
            guildId: t,
            nick: u.nick,
            avatar: u.avatar,
            avatarDecoration: u.avatarDecoration,
            guildRoles: y.A.getUnsafeMutableRoles(c.id),
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
function ey(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete M[t];
}
function eS(e) {
    let { guildId: t } = e,
        n = b[t];
    if (null == n) return !1;
    let r = S.A.getGuild(t);
    if (null == r) return C.warn(`Guild ${t} not found during IMPERSONATE_UPDATE.`), !1;
    let i = I.default.getId(),
        a = n[i];
    n[i] = W({
        userId: i,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: y.A.getUnsafeMutableRoles(r.id),
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
function ev(e, t) {
    if (e?.members == null || null == t) return !1;
    eE({
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
function eC(e, t) {
    let n = !1;
    return (
        e.message_snapshots?.forEach((t) => {
            ev(t.message?.resolved, e.message_reference?.guild_id) && (n = !0);
        }),
        ev(e.resolved, t) || n
    );
}
function eb(e) {
    let { message: t, guildId: n } = e;
    return eC(t, n);
}
function eN(e) {
    let t = T.A.getChannel(e.channel_id);
    eC(e, t?.guild_id);
}
function eR(e) {
    let { messages: t } = e;
    t.forEach((e) => eN(e));
}
function eO(e) {
    let { pins: t } = e;
    t.forEach((e) => {
        let { message: t } = e;
        return eN(t);
    });
}
function eD(e) {
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
        eR({ messages: n });
}
function eL(e) {
    let { location: t, participants: n } = e,
        r = (0, u.D)(t);
    return null != r && eg(r, n);
}
function ew(e) {
    let t = T.A.getChannel(e.channelId);
    return ev(e.resolved, t?.guild_id);
}
class ex extends s.Ay.Store {
    static displayName = "GuildMemberStore";
    initialize() {
        this.waitFor(I.default, T.A, y.A, S.A, m.A);
    }
    getMutableAllGuildsAndMembers() {
        return b;
    }
    memberOf(e) {
        return i()(b)
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
        for (let n in b) {
            let r = b[n],
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
        let n = b[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        if (null == e || null == t) return !1;
        let n = b[e];
        return null != n && n[t]?.joinedAt == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = I.default.getId(),
            n = b[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, a.Lt)(r, v.D.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = b[e];
        return null == t ? [] : A.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = b[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = b[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        return null != n && t === I.default.getId() && (m.A.isViewingRoles(e) || m.A.isFullServerPreview(e))
            ? (R[e] ?? n)
            : n;
    }
    getSelfMember(e) {
        return this.getMember(e, I.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = N[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let r = new Date(n.joinedAt);
        return (N[e] = r), r;
    }
    getCachedSelfMember(e) {
        return O[e] ?? null;
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
        return w;
    }
    getPendingRoleUpdates(e) {
        return M[e] ?? k;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        let n = this.getMember(e, t)?.roles ?? [],
            r = M[e];
        return null == r ? n : i().difference(i().union(n, r.added), r.removed);
    }
    getMemberVersion() {
        return x;
    }
}
let eP = new ex(o.h, {
    CONNECTION_OPEN: K,
    CONNECTION_OPEN_SUPPLEMENTAL: z,
    OVERLAY_INITIALIZE: q,
    CACHE_LOADED: Z,
    CACHE_LOADED_LAZY: Q,
    GUILD_CREATE: em,
    GUILD_DELETE: eA,
    GUILD_MEMBER_ADD: ee,
    GUILD_MEMBER_UPDATE: ee,
    GUILD_MEMBER_UPDATE_LOCAL: eT,
    GUILD_MEMBERS_CHUNK_BATCH: ei,
    GUILD_MEMBER_REMOVE: ef,
    GUILD_MEMBER_REMOVE_LOCAL: ep,
    THREAD_MEMBER_LIST_UPDATE: es,
    THREAD_MEMBERS_UPDATE: eu,
    LOAD_ARCHIVED_THREADS_SUCCESS: eo,
    LOAD_FORUM_POSTS: el,
    GUILD_ROLE_UPDATE: eI,
    GUILD_ROLE_DELETE: eI,
    GUILD_ROLE_MEMBER_REMOVE: en,
    GUILD_ROLE_MEMBER_ADD: et,
    GUILD_MEMBER_PROFILE_UPDATE: er,
    IMPERSONATE_UPDATE: eS,
    IMPERSONATE_STOP: eS,
    PASSIVE_UPDATE_V2: ea,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: ey,
    LOCAL_MESSAGES_LOADED: J,
    MESSAGE_CREATE: eb,
    MESSAGE_UPDATE: eb,
    LOAD_MESSAGES_SUCCESS: eR,
    LOAD_MESSAGES_AROUND_SUCCESS: eR,
    LOAD_RECENT_MENTIONS_SUCCESS: eR,
    LOAD_PINNED_MESSAGES_SUCCESS: eO,
    SEARCH_MESSAGES_SUCCESS: eD,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eD,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e_,
    EMBEDDED_ACTIVITY_UPDATE_V2: eL,
    INTERACTION_MODAL_CREATE: ew,
});
