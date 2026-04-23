"use strict";
n.d(t, { Ay: () => el, DL: () => j, vg: () => H }), n(938796), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(665260),
    a = n(17928),
    o = n(228366),
    l = n(807605),
    d = n(969151),
    _ = n(821956),
    u = n(628856),
    c = n(626584),
    E = n(945096),
    h = n(316031),
    m = n(264388),
    f = n(164956),
    g = n(403362),
    p = n(7864),
    A = n(935208),
    I = n(495544),
    T = n(734057),
    S = n(317525),
    N = n(71393),
    C = n(340837);
let R = new c.A("GuildMemberStore"),
    O = {},
    y = {},
    v = {},
    D = {},
    L = {},
    b = !1,
    w = 0,
    P = 0,
    k = {},
    M = {},
    U = { added: [], removed: [] };
function x(e, t) {
    if (null == t.communicationDisabledUntil || !(0, h.Z)(t)) return G(e, t.userId);
    let n = B(e, t.userId);
    L[n] !== t.communicationDisabledUntil && (0, h.Z)(t) && ((L[n] = t.communicationDisabledUntil), V(n));
}
function G(e, t) {
    if (null != t) {
        let n = B(e, t);
        null != L[n] && V(n), F(B(e, t));
    } else for (let t in L) j(t) === e && (V(t), F(t));
}
function V(e) {
    (w += 1), (k[e] = w);
}
function F(e) {
    H(e) === I.default.getId() && (0, m.G)(j(e)), delete L[e];
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
function W(e, t) {
    let n, i, r, s;
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
            ((null == s || (0, p.zA)(t, s)) && (s = t),
            t.color > 0 && (null == n || (0, p.zA)(t, n)) && (n = t),
            t.hoist && (null == i || (0, p.zA)(t, i)) && (i = t),
            (null != t.icon || null != t.unicodeEmoji) && (null == r || (0, p.zA)(t, r)) && (r = t));
    }
    return {
        colorString: n?.colorString ?? null,
        colorStrings: n?.colorStrings ?? null,
        colorRoleId: n?.id,
        iconRoleId: r?.id,
        hoistRoleId: i?.id,
        highestRoleId: s?.id,
    };
}
function Y(e) {
    let {
            userId: t,
            nick: n,
            guildId: i,
            avatar: r,
            avatarDecoration: a,
            guildRoles: o,
            roles: l,
            premiumSince: d,
            isPending: _,
            joinedAt: u,
            communicationDisabledUntil: c,
            unusualDMActivityUntil: E,
            fullProfileLoadedTimestamp: h,
            flags: m,
            collectibles: g,
            displayNameStyles: p,
        } = e,
        { colorString: T, colorStrings: S, colorRoleId: N, iconRoleId: R, hoistRoleId: y, highestRoleId: D } = W(o, l),
        L = {
            userId: t,
            nick: n,
            guildId: i,
            avatar: r,
            avatarDecoration: a,
            roles: l,
            colorString: T,
            colorStrings: S,
            colorRoleId: N,
            iconRoleId: R,
            hoistRoleId: y,
            highestRoleId: D,
            premiumSince: d,
            isPending: _,
            joinedAt: u,
            communicationDisabledUntil: c,
            unusualDMActivityUntil: E,
            fullProfileLoadedTimestamp: h,
            flags: m,
            collectibles: g,
            displayNameStyles: p,
        };
    if (
        ((0, s.Lt)(L.flags ?? 0, C.D.IS_GUEST) && (L.flags = (0, s.UI)(L.flags ?? 0, C.D.BYPASSES_VERIFICATION)),
        null == O[i])
    )
        return L;
    if (t === I.default.getId())
        if (f.A.isViewingRoles(i) || f.A.isFullServerPreview(i)) {
            let e = f.A.getViewingRoles(i);
            v[i] = { ...L, ...f.A.getMemberOptions(i), roles: null != e ? A.default.keys(e) : [] };
        } else null != v[i] && delete v[i];
    return L;
}
function K(e) {
    for (let t of e)
        if (
            null != t.member &&
            (null == D[t.id] ? (D[t.id] = t.member) : (D[t.id] = { ...t.member, roles: t.member.roles }),
            null != O[t.id])
        ) {
            let e = O[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = { ...e[t.member.userId], roles: t.member.roles });
        }
}
function z(e) {
    let {
            guildId: t,
            user: n,
            nick: i,
            avatar: r,
            avatarDecoration: s,
            roles: a,
            premiumSince: o,
            isPending: l,
            joinedAt: d,
            communicationDisabledUntil: u,
            unusualDMActivityUntil: c,
            flags: E,
            collectibles: h,
            displayNameStyles: m,
        } = e,
        f = O[t];
    if (null == f) return !1;
    let g = N.A.getGuild(t);
    if (null == g) return R.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    (f[n.id] = Y({
        userId: n.id,
        nick: i,
        guildId: t,
        avatar: r,
        avatarDecoration: (0, _.Xq)(s),
        guildRoles: S.A.getUnsafeMutableRoles(g.id),
        roles: a,
        premiumSince: o,
        isPending: l,
        joinedAt: d,
        communicationDisabledUntil: u,
        unusualDMActivityUntil: c,
        fullProfileLoadedTimestamp: f[n.id]?.fullProfileLoadedTimestamp,
        flags: E,
        collectibles: h,
        displayNameStyles: m,
    })),
        x(t, f[n.id]);
}
function $(e, t) {
    let n = O[e];
    if (null == n) return !1;
    let i = N.A.getGuild(e);
    return null == i
        ? (R.warn(`Guild ${e} not found during batchUpdateGuildMembers.`), !1)
        : (t.forEach((t) => {
              let r = n[t.user.id];
              (n[t.user.id] = Y({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: q(t),
                  guildRoles: S.A.getUnsafeMutableRoles(i.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: r?.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: t.unusual_dm_activity_until ?? r?.unusualDMActivityUntil,
                  collectibles: (0, u.t)(t.collectibles),
                  displayNameStyles: (0, E.mT)(t.display_name_styles),
              })),
                  x(e, n[t.user.id]);
          }),
          P++,
          !0);
}
function q(e) {
    return (0, _.Xq)(e.avatar_decoration_data);
}
function X(e, t) {
    let n = O[e];
    if (null == n || null == n[t]) return !1;
    delete n[t], G(e, t), P++;
}
function Z(e, t) {
    return Q({ id: e, members: t.filter(l.A).map((e) => e.member) });
}
function Q(e) {
    let t = e.id;
    t in O || (O[e.id] = {});
    let n = N.A.getGuild(t);
    if (null == n) return !1;
    let i = O[t];
    for (let r of e.members) {
        let s = r.user.id,
            a = i[s],
            o = Y({
                userId: s,
                nick: r.nick,
                guildId: e.id,
                avatar: r.avatar,
                avatarDecoration: q(r),
                guildRoles: S.A.getUnsafeMutableRoles(n.id),
                roles: r.roles,
                premiumSince: r.premium_since,
                isPending: r.pending,
                joinedAt: r.joined_at,
                communicationDisabledUntil: r.communication_disabled_until,
                fullProfileLoadedTimestamp: a?.fullProfileLoadedTimestamp,
                flags: r.flags,
                unusualDMActivityUntil: r.unusual_dm_activity_until ?? a?.unusualDMActivityUntil,
                collectibles: (0, u.t)(r.collectibles),
                displayNameStyles: (0, E.mT)(r.display_name_styles),
            });
        (i[s] = o), x(t, o);
    }
    return !0;
}
function J(e) {
    let t = O[e.guildId];
    if (null == t) return !1;
    let n = N.A.getGuild(e.guildId);
    if (null == n) return R.warn(`Guild ${e.guildId} not found during ${e.type}.`), !1;
    let i = I.default.getId();
    for (let r of A.default.keys(t)) {
        let s = t[r];
        if ((null != s.roles && s.roles.length > 0) || null != s.colorString || null != s.hoistRoleId) {
            let a = r === i && "GUILD_ROLE_DELETE" === e.type ? s.roles.filter((t) => t !== e.roleId) : s.roles;
            (t[r] = Y({
                userId: r,
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
                x(e.guildId, t[r]);
        }
    }
}
function ee(e) {
    let { guildId: t } = e,
        n = O[t];
    if (null == n) return !1;
    let i = N.A.getGuild(t);
    if (null == i) return R.warn(`Guild ${t} not found during IMPERSONATE_UPDATE.`), !1;
    let r = I.default.getId(),
        s = n[r];
    n[r] = Y({
        userId: r,
        nick: s.nick,
        guildId: t,
        avatar: s.avatar,
        avatarDecoration: s.avatarDecoration,
        guildRoles: S.A.getUnsafeMutableRoles(i.id),
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
        Q({
            id: t,
            members: Object.entries(e.members)
                .map((t) => {
                    let [n, i] = t,
                        r = e?.users?.[n];
                    if (null != r) return { ...i, user: r };
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
function ei(e) {
    let { message: t, guildId: n } = e;
    return en(t, n);
}
function er(e) {
    let t = T.A.getChannel(e.channel_id);
    en(e, t?.guild_id);
}
function es(e) {
    let { messages: t } = e;
    t.forEach((e) => er(e));
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
        this.waitFor(I.default, T.A, S.A, N.A, f.A);
    }
    getMutableAllGuildsAndMembers() {
        return O;
    }
    memberOf(e) {
        return r()(O)
            .toPairs()
            .filter((t) => {
                let [n, i] = t;
                return null != i[e];
            })
            .map((e) => {
                let [t] = e;
                return t;
            })
            .value();
    }
    getNicknameGuildsMapping(e) {
        let t = {};
        for (let n in O) {
            let i = O[n],
                r = i[e]?.nick;
            null != r && (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []), t[r].push(n));
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = O[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        if (null == e || null == t) return !1;
        let n = O[e];
        return null != n && n[t]?.joinedAt == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = I.default.getId(),
            n = O[e];
        if (null == n || null == n[t]) return !1;
        let i = n[t].flags;
        return null != i && (0, s.Lt)(i, C.D.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = O[e];
        return null == t ? [] : A.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = O[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = O[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        return null != n && t === I.default.getId() && (f.A.isViewingRoles(e) || f.A.isFullServerPreview(e))
            ? (v[e] ?? n)
            : n;
    }
    getSelfMember(e) {
        return this.getMember(e, I.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = y[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let i = new Date(n.joinedAt);
        return (y[e] = i), i;
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
        return w;
    }
    getPendingRoleUpdates(e) {
        return M[e] ?? U;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        let n = this.getMember(e, t)?.roles ?? [],
            i = M[e];
        return null == i ? n : r().difference(r().union(n, i.added), i.removed);
    }
    getMemberVersion() {
        return P;
    }
}
let el = new eo(o.h, {
    CONNECTION_OPEN: function (e) {
        b ? (b = !1) : ((O = {}), (y = {})),
            (L = {}),
            e.guilds.forEach((e) => {
                Q(e);
            });
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        e.guilds.forEach((e) => {
            let t = e.id;
            Q({ id: t, members: e.members }),
                e.activity_instances?.forEach((e) => {
                    Z(t, e.participants);
                });
        });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { guildMembers: t } = e;
        (O = { ...t }), (y = {});
    },
    CACHE_LOADED: function (e) {
        let { guildMembers: t, guilds: n } = e;
        (b = !0), (O = { ...t }), (y = {}), (D = {}), K(n);
    },
    CACHE_LOADED_LAZY: function (e) {
        let { guilds: t } = e;
        K(t);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return Q(t);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete O[t.id], delete y[t.id], G(t.id);
    },
    GUILD_MEMBER_ADD: z,
    GUILD_MEMBER_UPDATE: z,
    GUILD_MEMBER_UPDATE_LOCAL: function (e) {
        let { guildId: t, roles: n, addedRoleIds: i, removedRoleIds: s, flags: a } = e,
            o = I.default.getId(),
            l = O[t],
            d = null != l ? l[o] : null;
        if (null == d) return !1;
        let _ = N.A.getGuild(t);
        if (null == _) return !1;
        let u = M[t] ?? {};
        (M[t] = {
            added: r().difference(r().union(u.added ?? [], i), s ?? []),
            removed: r().difference(r().union(u.removed ?? [], s), i ?? []),
        }),
            (l[o] = Y({
                userId: o,
                guildId: t,
                nick: d.nick,
                avatar: d.avatar,
                avatarDecoration: d.avatarDecoration,
                guildRoles: S.A.getUnsafeMutableRoles(_.id),
                roles: n ?? d.roles,
                premiumSince: d.premiumSince,
                isPending: d.isPending,
                joinedAt: d.joinedAt,
                flags: a ?? d.flags,
                fullProfileLoadedTimestamp: d.fullProfileLoadedTimestamp,
                collectibles: d.collectibles,
                displayNameStyles: d.displayNameStyles,
            }));
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let t = !1;
        for (let n of e.chunks) t = $(n.guildId, n.members) || t;
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
        return $(t, n.map((e) => e.member).filter(g.Vq));
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        return null != n && $(t, n.map((e) => e.member).filter(g.Vq));
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        let { guildId: t, owners: n } = e;
        return $(t, n);
    },
    LOAD_FORUM_POSTS: function (e) {
        let { guildId: t, threads: n } = e;
        return $(
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
        let { guildId: t, userId: n, roleId: i } = e,
            r = O[t];
        if (null == r) return !1;
        let s = N.A.getGuild(t);
        if (null == s) return R.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
        let a = r[n];
        if (null == a || !a.roles.includes(i)) return !1;
        a.roles = a.roles.filter((e) => e !== i);
        let o = W(S.A.getUnsafeMutableRoles(s.id), a.roles);
        return (r[n] = { ...a, ...o }), !0;
    },
    GUILD_ROLE_MEMBER_ADD: function (e) {
        let { guildId: t, userId: n, roleId: i } = e,
            r = O[t];
        if (null == r) return !1;
        let s = N.A.getGuild(t);
        if (null == s) return R.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
        let a = r[n];
        if (null == a || a.roles.includes(i)) return !1;
        a.roles = [...a.roles, i];
        let o = W(S.A.getUnsafeMutableRoles(s.id), a.roles);
        return (r[n] = { ...a, ...o }), !0;
    },
    GUILD_MEMBER_PROFILE_UPDATE: function (e) {
        let { guildMember: t, guildId: n } = e,
            i = O[n];
        if (null == i) return !1;
        let r = N.A.getGuild(n);
        if (null == r) return R.warn(`Guild ${n} not found during GUILD_MEMBER_UPDATE.`), !1;
        (i[t.user.id] = Y({
            userId: t.user.id,
            nick: t.nick,
            guildId: n,
            avatar: t.avatar,
            avatarDecoration: q(t),
            guildRoles: S.A.getUnsafeMutableRoles(r.id),
            roles: t.roles,
            premiumSince: t.premium_since,
            isPending: t.pending,
            joinedAt: t.joined_at,
            communicationDisabledUntil: t.communication_disabled_until,
            unusualDMActivityUntil: t.unusual_dm_activity_until,
            flags: t.flags,
            fullProfileLoadedTimestamp: Date.now(),
            collectibles: (0, u.t)(t.collectibles),
            displayNameStyles: (0, E.mT)(t.display_name_styles),
        })),
            x(n, i[t.user.id]);
    },
    IMPERSONATE_UPDATE: ee,
    IMPERSONATE_STOP: ee,
    PASSIVE_UPDATE_V2: function (e) {
        return e.members.length > 0 && $(e.guildId, e.members);
    },
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
        let { guildId: t } = e;
        if (null == t) return !1;
        delete M[t];
    },
    LOCAL_MESSAGES_LOADED: function (e) {
        if (null == e.guildId || null == N.A.getGuild(e.guildId)) return !1;
        (b = !0), (O[e.guildId] = O[e.guildId] ?? {});
        let t = !1;
        for (let n of ((b = !0), (O[e.guildId] = O[e.guildId] ?? {}), e.members))
            null == O[e.guildId][n.userId] && ((t = !0), (O[e.guildId][n.userId] = n));
        return t;
    },
    MESSAGE_CREATE: ei,
    MESSAGE_UPDATE: ei,
    LOAD_MESSAGES_SUCCESS: es,
    LOAD_MESSAGES_AROUND_SUCCESS: es,
    LOAD_RECENT_MENTIONS_SUCCESS: es,
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { pins: t } = e;
        t.forEach((e) => {
            let { message: t } = e;
            return er(t);
        });
    },
    SEARCH_MESSAGES_SUCCESS: ea,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ea,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function (e) {
        let { guildId: t, members: n } = e;
        return $(
            t,
            n.map((e) => {
                let { member: t } = e;
                return t;
            }),
        );
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { location: t, participants: n } = e,
            i = (0, d.D)(t);
        return null != i && Z(i, n);
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let t = T.A.getChannel(e.channelId);
        return et(e.resolved, t?.guild_id);
    },
});
