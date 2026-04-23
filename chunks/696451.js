"use strict";
n.d(t, { Ay: () => el, DL: () => j, vg: () => H }), n(938796), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(665260),
    a = n(311907),
    o = n(73153),
    l = n(807605),
    u = n(969151),
    c = n(821956),
    d = n(628856),
    _ = n(626584),
    f = n(945096),
    p = n(316031),
    h = n(264388),
    E = n(164956),
    m = n(403362),
    g = n(7864),
    A = n(661191),
    I = n(961350),
    T = n(734057),
    S = n(317525),
    y = n(71393),
    N = n(340837);
let v = new _.A("GuildMemberStore"),
    C = {},
    O = {},
    R = {},
    b = {},
    D = {},
    L = !1,
    w = 0,
    M = 0,
    P = {},
    x = {},
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
    } else for (let t in D) j(t) === e && (F(t), V(t));
}
function F(e) {
    (w += 1), (P[e] = w);
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
            collectibles: m,
            displayNameStyles: g,
        } = e,
        { colorString: T, colorStrings: S, colorRoleId: y, iconRoleId: v, hoistRoleId: O, highestRoleId: b } = Y(o, l),
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
            iconRoleId: v,
            hoistRoleId: O,
            highestRoleId: b,
            premiumSince: u,
            isPending: c,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: p,
            flags: h,
            collectibles: m,
            displayNameStyles: g,
        };
    if (
        ((0, s.Lt)(D.flags ?? 0, N.D.IS_GUEST) && (D.flags = (0, s.UI)(D.flags ?? 0, N.D.BYPASSES_VERIFICATION)),
        null == C[r])
    )
        return D;
    if (t === I.default.getId())
        if (E.A.isViewingRoles(r) || E.A.isFullServerPreview(r)) {
            let e = E.A.getViewingRoles(r);
            R[r] = { ...D, ...E.A.getMemberOptions(r), roles: null != e ? A.default.keys(e) : [] };
        } else null != R[r] && delete R[r];
    return D;
}
function K(e) {
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
function $(e) {
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
        E = C[t];
    if (null == E) return !1;
    let m = y.A.getGuild(t);
    if (null == m) return v.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    (E[n.id] = W({
        userId: n.id,
        nick: r,
        guildId: t,
        avatar: i,
        avatarDecoration: (0, c.Xq)(s),
        guildRoles: S.A.getUnsafeMutableRoles(m.id),
        roles: a,
        premiumSince: o,
        isPending: l,
        joinedAt: u,
        communicationDisabledUntil: d,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: E[n.id]?.fullProfileLoadedTimestamp,
        flags: f,
        collectibles: p,
        displayNameStyles: h,
    })),
        U(t, E[n.id]);
}
function z(e, t) {
    let n = C[e];
    if (null == n) return !1;
    let r = y.A.getGuild(e);
    return null == r
        ? (v.warn(`Guild ${e} not found during batchUpdateGuildMembers.`), !1)
        : (t.forEach((t) => {
              let i = n[t.user.id];
              (n[t.user.id] = W({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: q(t),
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
function q(e) {
    return (0, c.Xq)(e.avatar_decoration_data);
}
function X(e, t) {
    let n = C[e];
    if (null == n || null == n[t]) return !1;
    delete n[t], G(e, t), M++;
}
function Q(e, t) {
    return Z({ id: e, members: t.filter(l.A).map((e) => e.member) });
}
function Z(e) {
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
                avatarDecoration: q(i),
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
function J(e) {
    let t = C[e.guildId];
    if (null == t) return !1;
    let n = y.A.getGuild(e.guildId);
    if (null == n) return v.warn(`Guild ${e.guildId} not found during ${e.type}.`), !1;
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
function ee(e) {
    let { guildId: t } = e,
        n = C[t];
    if (null == n) return !1;
    let r = y.A.getGuild(t);
    if (null == r) return v.warn(`Guild ${t} not found during IMPERSONATE_UPDATE.`), !1;
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
function et(e, t) {
    return (
        e?.members != null &&
        null != t &&
        Z({
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
function en(e, t) {
    let n = !1;
    return (
        e.message_snapshots?.forEach((t) => {
            et(t.message?.resolved, e.message_reference?.guild_id) && (n = !0);
        }),
        et(e.resolved, t) || n
    );
}
function er(e) {
    let { message: t, guildId: n } = e;
    return en(t, n);
}
function ei(e) {
    let t = T.A.getChannel(e.channel_id);
    en(e, t?.guild_id);
}
function es(e) {
    let { messages: t } = e;
    t.forEach((e) => ei(e));
}
function ea(e) {
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
        es({ messages: n });
}
class eo extends a.Ay.Store {
    static displayName = "GuildMemberStore";
    initialize() {
        this.waitFor(I.default, T.A, S.A, y.A, E.A);
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
        return null != r && (0, s.Lt)(r, N.D.IS_GUEST);
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
        return null != n && t === I.default.getId() && (E.A.isViewingRoles(e) || E.A.isFullServerPreview(e))
            ? (R[e] ?? n)
            : n;
    }
    getSelfMember(e) {
        return this.getMember(e, I.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = O[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let r = new Date(n.joinedAt);
        return (O[e] = r), r;
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
        return x[e] ?? k;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        let n = this.getMember(e, t)?.roles ?? [],
            r = x[e];
        return null == r ? n : i().difference(i().union(n, r.added), r.removed);
    }
    getMemberVersion() {
        return M;
    }
}
let el = new eo(o.h, {
    CONNECTION_OPEN: function (e) {
        L ? (L = !1) : ((C = {}), (O = {})),
            (D = {}),
            e.guilds.forEach((e) => {
                Z(e);
            });
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        e.guilds.forEach((e) => {
            let t = e.id;
            Z({ id: t, members: e.members }),
                e.activity_instances?.forEach((e) => {
                    Q(t, e.participants);
                });
        });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { guildMembers: t } = e;
        (C = { ...t }), (O = {});
    },
    CACHE_LOADED: function (e) {
        let { guildMembers: t, guilds: n } = e;
        (L = !0), (C = { ...t }), (O = {}), (b = {}), K(n);
    },
    CACHE_LOADED_LAZY: function (e) {
        let { guilds: t } = e;
        K(t);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return Z(t);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete C[t.id], delete O[t.id], G(t.id);
    },
    GUILD_MEMBER_ADD: $,
    GUILD_MEMBER_UPDATE: $,
    GUILD_MEMBER_UPDATE_LOCAL: function (e) {
        let { guildId: t, roles: n, addedRoleIds: r, removedRoleIds: s, flags: a } = e,
            o = I.default.getId(),
            l = C[t],
            u = null != l ? l[o] : null;
        if (null == u) return !1;
        let c = y.A.getGuild(t);
        if (null == c) return !1;
        let d = x[t] ?? {};
        (x[t] = {
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
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let t = !1;
        for (let n of e.chunks) t = z(n.guildId, n.members) || t;
        return t;
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        X(t, n.id);
    },
    GUILD_MEMBER_REMOVE_LOCAL: function (e) {
        let { guildId: t, userId: n } = e;
        X(t, n);
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        return z(t, n.map((e) => e.member).filter(m.Vq));
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        return null != n && z(t, n.map((e) => e.member).filter(m.Vq));
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        let { guildId: t, owners: n } = e;
        return z(t, n);
    },
    LOAD_FORUM_POSTS: function (e) {
        let { guildId: t, threads: n } = e;
        return z(
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
    },
    GUILD_ROLE_UPDATE: J,
    GUILD_ROLE_DELETE: J,
    GUILD_ROLE_MEMBER_REMOVE: function (e) {
        let { guildId: t, userId: n, roleId: r } = e,
            i = C[t];
        if (null == i) return !1;
        let s = y.A.getGuild(t);
        if (null == s) return v.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
        let a = i[n];
        if (null == a || !a.roles.includes(r)) return !1;
        a.roles = a.roles.filter((e) => e !== r);
        let o = Y(S.A.getUnsafeMutableRoles(s.id), a.roles);
        return (i[n] = { ...a, ...o }), !0;
    },
    GUILD_ROLE_MEMBER_ADD: function (e) {
        let { guildId: t, userId: n, roleId: r } = e,
            i = C[t];
        if (null == i) return !1;
        let s = y.A.getGuild(t);
        if (null == s) return v.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
        let a = i[n];
        if (null == a || a.roles.includes(r)) return !1;
        a.roles = [...a.roles, r];
        let o = Y(S.A.getUnsafeMutableRoles(s.id), a.roles);
        return (i[n] = { ...a, ...o }), !0;
    },
    GUILD_MEMBER_PROFILE_UPDATE: function (e) {
        let { guildMember: t, guildId: n } = e,
            r = C[n];
        if (null == r) return !1;
        let i = y.A.getGuild(n);
        if (null == i) return v.warn(`Guild ${n} not found during GUILD_MEMBER_UPDATE.`), !1;
        (r[t.user.id] = W({
            userId: t.user.id,
            nick: t.nick,
            guildId: n,
            avatar: t.avatar,
            avatarDecoration: q(t),
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
    },
    IMPERSONATE_UPDATE: ee,
    IMPERSONATE_STOP: ee,
    PASSIVE_UPDATE_V2: function (e) {
        return e.members.length > 0 && z(e.guildId, e.members);
    },
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
        let { guildId: t } = e;
        if (null == t) return !1;
        delete x[t];
    },
    LOCAL_MESSAGES_LOADED: function (e) {
        if (null == e.guildId || null == y.A.getGuild(e.guildId)) return !1;
        (L = !0), (C[e.guildId] = C[e.guildId] ?? {});
        let t = !1;
        for (let n of ((L = !0), (C[e.guildId] = C[e.guildId] ?? {}), e.members))
            null == C[e.guildId][n.userId] && ((t = !0), (C[e.guildId][n.userId] = n));
        return t;
    },
    MESSAGE_CREATE: er,
    MESSAGE_UPDATE: er,
    LOAD_MESSAGES_SUCCESS: es,
    LOAD_MESSAGES_AROUND_SUCCESS: es,
    LOAD_RECENT_MENTIONS_SUCCESS: es,
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { pins: t } = e;
        t.forEach((e) => {
            let { message: t } = e;
            return ei(t);
        });
    },
    SEARCH_MESSAGES_SUCCESS: ea,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ea,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function (e) {
        let { guildId: t, members: n } = e;
        return z(
            t,
            n.map((e) => {
                let { member: t } = e;
                return t;
            }),
        );
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { location: t, participants: n } = e,
            r = (0, u.D)(t);
        return null != r && Q(r, n);
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let t = T.A.getChannel(e.channelId);
        return et(e.resolved, t?.guild_id);
    },
});
