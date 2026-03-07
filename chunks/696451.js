"use strict";
n.d(t, { Ay: () => ex, DL: () => j, vg: () => H }), n(938796), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(665260),
    a = n(311907),
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
    E = n(403362),
    g = n(7864),
    A = n(661191),
    I = n(961350),
    T = n(734057),
    S = n(317525),
    y = n(71393),
    v = n(340837);
let N = new _.A("GuildMemberStore"),
    C = {},
    R = {},
    O = {},
    b = {},
    D = {},
    L = !1,
    w = 0,
    M = 0,
    x = {},
    P = {},
    k = { added: [], removed: [] };
function U(e, t) {
    if (null == t.communicationDisabledUntil || !(0, p.Z)(t)) return G(e, t.userId);
    let n = B(e, t.userId);
    D[n] !== t.communicationDisabledUntil && (0, p.Z)(t) && ((D[n] = t.communicationDisabledUntil), F(n));
}
function G(e, t) {
    if (null != t) {
        let n = B(e, t);
        null != D[n] && F(n), V(B(e, t));
    } else
        for (let t in D) {
            let n = t;
            j(n) === e && (F(t), V(n));
        }
}
function F(e) {
    (w += 1), (x[e] = w);
}
function V(e) {
    H(e) === I.default.getId() && (0, h.G)(j(e)), delete D[e];
}
function B(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join("-");
}
function H(e) {
    return e.split("-")[1];
}
function j(e) {
    return e.split("-")[0];
}
function Y(e, t) {
    let n, r, i, s;
    if (0 === t.length)
        return {
            colorString: null,
            colorStrings: null,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0,
        };
    for (let a of t) {
        let t = e[a];
        null != t &&
            ((null == s || (0, g.zA)(t, s)) && (s = t),
            t.color > 0 && (null == n || (0, g.zA)(t, n)) && (n = t),
            t.hoist && (null == r || (0, g.zA)(t, r)) && (r = t),
            (null != t.icon || null != t.unicodeEmoji) && (null == i || (0, g.zA)(t, i)) && (i = t));
    }
    return {
        colorString: n?.colorString ?? null,
        colorStrings: n?.colorStrings ?? null,
        colorRoleId: n?.id,
        iconRoleId: i?.id,
        hoistRoleId: r?.id,
        highestRoleId: s?.id,
    };
}
function W(e) {
    let {
            userId: t,
            nick: n,
            guildId: r,
            avatar: i,
            avatarDecoration: a,
            guildRoles: o,
            roles: l,
            premiumSince: u,
            isPending: c,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: p,
            flags: h,
            collectibles: E,
            displayNameStyles: g,
        } = e,
        { colorString: T, colorStrings: S, colorRoleId: y, iconRoleId: N, hoistRoleId: R, highestRoleId: b } = Y(o, l),
        D = {
            userId: t,
            nick: n,
            guildId: r,
            avatar: i,
            avatarDecoration: a,
            roles: l,
            colorString: T,
            colorStrings: S,
            colorRoleId: y,
            iconRoleId: N,
            hoistRoleId: R,
            highestRoleId: b,
            premiumSince: u,
            isPending: c,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: p,
            flags: h,
            collectibles: E,
            displayNameStyles: g,
        };
    if (
        ((0, s.Lt)(D.flags ?? 0, v.D.IS_GUEST) && (D.flags = (0, s.UI)(D.flags ?? 0, v.D.BYPASSES_VERIFICATION)),
        null == C[r])
    )
        return D;
    if (t === I.default.getId())
        if (m.A.isViewingRoles(r) || m.A.isFullServerPreview(r)) {
            let e = m.A.getViewingRoles(r);
            O[r] = { ...D, ...m.A.getMemberOptions(r), roles: null != e ? A.default.keys(e) : [] };
        } else null != O[r] && delete O[r];
    return D;
}
function K(e) {
    L ? (L = !1) : ((C = {}), (R = {})), (D = {}), z(e);
}
function $(e) {
    e.guilds.forEach((e) => {
        let t = e.id;
        eg({ id: t, members: e.members }),
            e.activity_instances?.forEach((e) => {
                eE(t, e.participants);
            });
    });
}
function z(e) {
    e.guilds.forEach((e) => {
        eg(e);
    });
}
function q(e) {
    let { guildMembers: t } = e;
    (C = { ...t }), (R = {});
}
function Z(e) {
    let { guildMembers: t, guilds: n } = e;
    (L = !0), (C = { ...t }), (R = {}), (b = {}), Q(n);
}
function X(e) {
    let { guilds: t } = e;
    Q(t);
}
function Q(e) {
    for (let t of e)
        if (
            null != t.member &&
            (null == b[t.id] ? (b[t.id] = t.member) : (b[t.id] = { ...t.member, roles: t.member.roles }),
            null != C[t.id])
        ) {
            let e = C[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = { ...e[t.member.userId], roles: t.member.roles });
        }
}
function J(e) {
    if (null == e.guildId || null == y.A.getGuild(e.guildId)) return !1;
    (L = !0), (C[e.guildId] = C[e.guildId] ?? {});
    let t = !1;
    for (let n of ((L = !0), (C[e.guildId] = C[e.guildId] ?? {}), e.members))
        null == C[e.guildId][n.userId] && ((t = !0), (C[e.guildId][n.userId] = n));
    return t;
}
function ee(e) {
    let {
            guildId: t,
            user: n,
            nick: r,
            avatar: i,
            avatarDecoration: s,
            roles: a,
            premiumSince: o,
            isPending: l,
            joinedAt: u,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: _,
            flags: f,
            collectibles: p,
            displayNameStyles: h,
        } = e,
        m = C[t];
    if (null == m) return !1;
    let E = y.A.getGuild(t);
    if (null == E) return N.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    (m[n.id] = W({
        userId: n.id,
        nick: r,
        guildId: t,
        avatar: i,
        avatarDecoration: (0, c.Xq)(s),
        guildRoles: S.A.getUnsafeMutableRoles(E.id),
        roles: a,
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
        i = C[t];
    if (null == i) return !1;
    let s = y.A.getGuild(t);
    if (null == s) return N.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    let a = i[n];
    if (null == a || a.roles.includes(r)) return !1;
    a.roles = [...a.roles, r];
    let o = Y(S.A.getUnsafeMutableRoles(s.id), a.roles);
    return (i[n] = { ...a, ...o }), !0;
}
function en(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = C[t];
    if (null == i) return !1;
    let s = y.A.getGuild(t);
    if (null == s) return N.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    let a = i[n];
    if (null == a || !a.roles.includes(r)) return !1;
    a.roles = a.roles.filter((e) => e !== r);
    let o = Y(S.A.getUnsafeMutableRoles(s.id), a.roles);
    return (i[n] = { ...a, ...o }), !0;
}
function er(e) {
    let { guildMember: t, guildId: n } = e,
        r = C[n];
    if (null == r) return !1;
    let i = y.A.getGuild(n);
    if (null == i) return N.warn(`Guild ${n} not found during GUILD_MEMBER_UPDATE.`), !1;
    (r[t.user.id] = W({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: ed(t),
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
        U(n, r[t.user.id]);
}
function ei(e) {
    let t = !1;
    for (let n of e.chunks) t = ec(n.guildId, n.members) || t;
    return t;
}
function es(e) {
    return e.members.length > 0 && ec(e.guildId, e.members);
}
function ea(e) {
    let { guildId: t, members: n } = e;
    return ec(t, n.map((e) => e.member).filter(E.Vq));
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
    return null != n && ec(t, n.map((e) => e.member).filter(E.Vq));
}
function ec(e, t) {
    let n = C[e];
    if (null == n) return !1;
    let r = y.A.getGuild(e);
    return null == r
        ? (N.warn(`Guild ${e} not found during batchUpdateGuildMembers.`), !1)
        : (t.forEach((t) => {
              let i = n[t.user.id];
              (n[t.user.id] = W({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: ed(t),
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
                  U(e, n[t.user.id]);
          }),
          M++,
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
    let n = C[e];
    if (null == n || null == n[t]) return !1;
    delete n[t], G(e, t), M++;
}
function em(e) {
    let { guild: t } = e;
    return eg(t);
}
function eE(e, t) {
    return eg({ id: e, members: t.filter(l.A).map((e) => e.member) });
}
function eg(e) {
    let t = e.id;
    t in C || (C[e.id] = {});
    let n = y.A.getGuild(t);
    if (null == n) return !1;
    let r = C[t];
    for (let i of e.members) {
        let s = i.user.id,
            a = r[s],
            o = W({
                userId: s,
                nick: i.nick,
                guildId: e.id,
                avatar: i.avatar,
                avatarDecoration: ed(i),
                guildRoles: S.A.getUnsafeMutableRoles(n.id),
                roles: i.roles,
                premiumSince: i.premium_since,
                isPending: i.pending,
                joinedAt: i.joined_at,
                communicationDisabledUntil: i.communication_disabled_until,
                fullProfileLoadedTimestamp: a?.fullProfileLoadedTimestamp,
                flags: i.flags,
                unusualDMActivityUntil: i.unusual_dm_activity_until ?? a?.unusualDMActivityUntil,
                collectibles: (0, d.t)(i.collectibles),
                displayNameStyles: (0, f.mT)(i.display_name_styles),
            });
        (r[s] = o), U(t, o);
    }
    return !0;
}
function eA(e) {
    let { guild: t } = e;
    delete C[t.id], delete R[t.id], G(t.id);
}
function eI(e) {
    let t = C[e.guildId];
    if (null == t) return !1;
    let n = y.A.getGuild(e.guildId);
    if (null == n) return N.warn(`Guild ${e.guildId} not found during ${e.type}.`), !1;
    let r = I.default.getId();
    for (let i of A.default.keys(t)) {
        let s = t[i];
        if ((null != s.roles && s.roles.length > 0) || null != s.colorString || null != s.hoistRoleId) {
            let a = i === r && "GUILD_ROLE_DELETE" === e.type ? s.roles.filter((t) => t !== e.roleId) : s.roles;
            (t[i] = W({
                userId: i,
                nick: s.nick,
                guildId: e.guildId,
                avatar: s.avatar,
                avatarDecoration: s.avatarDecoration,
                guildRoles: S.A.getUnsafeMutableRoles(n.id),
                roles: a,
                premiumSince: s.premiumSince,
                isPending: s.isPending,
                joinedAt: s.joinedAt,
                flags: s.flags,
                fullProfileLoadedTimestamp: s?.fullProfileLoadedTimestamp,
                collectibles: s.collectibles,
                displayNameStyles: s.displayNameStyles,
            })),
                U(e.guildId, t[i]);
        }
    }
}
function eT(e) {
    let { guildId: t, roles: n, addedRoleIds: r, removedRoleIds: s, flags: a } = e,
        o = I.default.getId(),
        l = C[t],
        u = null != l ? l[o] : null;
    if (null == u) return !1;
    let c = y.A.getGuild(t);
    if (null == c) return !1;
    let d = P[t] ?? {};
    (P[t] = {
        added: i().difference(i().union(d.added ?? [], r), s ?? []),
        removed: i().difference(i().union(d.removed ?? [], s), r ?? []),
    }),
        (l[o] = W({
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
            flags: a ?? u.flags,
            fullProfileLoadedTimestamp: u.fullProfileLoadedTimestamp,
            collectibles: u.collectibles,
            displayNameStyles: u.displayNameStyles,
        }));
}
function eS(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete P[t];
}
function ey(e) {
    let { guildId: t } = e,
        n = C[t];
    if (null == n) return !1;
    let r = y.A.getGuild(t);
    if (null == r) return N.warn(`Guild ${t} not found during IMPERSONATE_UPDATE.`), !1;
    let i = I.default.getId(),
        s = n[i];
    n[i] = W({
        userId: i,
        nick: s.nick,
        guildId: t,
        avatar: s.avatar,
        avatarDecoration: s.avatarDecoration,
        guildRoles: S.A.getUnsafeMutableRoles(r.id),
        roles: s.roles,
        premiumSince: s.premiumSince,
        isPending: s.isPending,
        joinedAt: s.joinedAt,
        communicationDisabledUntil: s.communicationDisabledUntil,
        fullProfileLoadedTimestamp: s.fullProfileLoadedTimestamp,
        flags: s.flags,
        collectibles: s.collectibles,
        displayNameStyles: s.displayNameStyles,
    });
}
function ev(e, t) {
    return (
        e?.members != null &&
        null != t &&
        eg({
            id: t,
            members: Object.entries(e.members)
                .map((t) => {
                    let [n, r] = t,
                        i = e?.users?.[n];
                    if (null != i) return { ...r, user: i };
                })
                .filter((e) => null != e),
        })
    );
}
function eN(e, t) {
    let n = !1;
    return (
        e.message_snapshots?.forEach((t) => {
            ev(t.message?.resolved, e.message_reference?.guild_id) && (n = !0);
        }),
        ev(e.resolved, t) || n
    );
}
function eC(e) {
    let { message: t, guildId: n } = e;
    return eN(t, n);
}
function eR(e) {
    let t = T.A.getChannel(e.channel_id);
    eN(e, t?.guild_id);
}
function eO(e) {
    let { messages: t } = e;
    t.forEach((e) => eR(e));
}
function eb(e) {
    let { pins: t } = e;
    t.forEach((e) => {
        let { message: t } = e;
        return eR(t);
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
        eO({ messages: n });
}
function eL(e) {
    let { location: t, participants: n } = e,
        r = (0, u.D)(t);
    return null != r && eE(r, n);
}
function ew(e) {
    let t = T.A.getChannel(e.channelId);
    return ev(e.resolved, t?.guild_id);
}
class eM extends a.Ay.Store {
    static displayName = "GuildMemberStore";
    initialize() {
        this.waitFor(I.default, T.A, S.A, y.A, m.A);
    }
    getMutableAllGuildsAndMembers() {
        return C;
    }
    memberOf(e) {
        return i()(C)
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
        for (let n in C) {
            let r = C[n],
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
        let n = C[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        if (null == e || null == t) return !1;
        let n = C[e];
        return null != n && n[t]?.joinedAt == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = I.default.getId(),
            n = C[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, s.Lt)(r, v.D.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = C[e];
        return null == t ? [] : A.default.keys(t);
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
        return null != n && t === I.default.getId() && (m.A.isViewingRoles(e) || m.A.isFullServerPreview(e))
            ? (O[e] ?? n)
            : n;
    }
    getSelfMember(e) {
        return this.getMember(e, I.default.getId());
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
        return b[e] ?? null;
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
        return P[e] ?? k;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        let n = this.getMember(e, t)?.roles ?? [],
            r = P[e];
        return null == r ? n : i().difference(i().union(n, r.added), r.removed);
    }
    getMemberVersion() {
        return M;
    }
}
let ex = new eM(o.h, {
    CONNECTION_OPEN: K,
    CONNECTION_OPEN_SUPPLEMENTAL: $,
    OVERLAY_INITIALIZE: q,
    CACHE_LOADED: Z,
    CACHE_LOADED_LAZY: X,
    GUILD_CREATE: em,
    GUILD_DELETE: eA,
    GUILD_MEMBER_ADD: ee,
    GUILD_MEMBER_UPDATE: ee,
    GUILD_MEMBER_UPDATE_LOCAL: eT,
    GUILD_MEMBERS_CHUNK_BATCH: ei,
    GUILD_MEMBER_REMOVE: ef,
    GUILD_MEMBER_REMOVE_LOCAL: ep,
    THREAD_MEMBER_LIST_UPDATE: ea,
    THREAD_MEMBERS_UPDATE: eu,
    LOAD_ARCHIVED_THREADS_SUCCESS: eo,
    LOAD_FORUM_POSTS: el,
    GUILD_ROLE_UPDATE: eI,
    GUILD_ROLE_DELETE: eI,
    GUILD_ROLE_MEMBER_REMOVE: en,
    GUILD_ROLE_MEMBER_ADD: et,
    GUILD_MEMBER_PROFILE_UPDATE: er,
    IMPERSONATE_UPDATE: ey,
    IMPERSONATE_STOP: ey,
    PASSIVE_UPDATE_V2: es,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eS,
    LOCAL_MESSAGES_LOADED: J,
    MESSAGE_CREATE: eC,
    MESSAGE_UPDATE: eC,
    LOAD_MESSAGES_SUCCESS: eO,
    LOAD_MESSAGES_AROUND_SUCCESS: eO,
    LOAD_RECENT_MENTIONS_SUCCESS: eO,
    LOAD_PINNED_MESSAGES_SUCCESS: eb,
    SEARCH_MESSAGES_SUCCESS: eD,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eD,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e_,
    EMBEDDED_ACTIVITY_UPDATE_V2: eL,
    INTERACTION_MODAL_CREATE: ew,
});
