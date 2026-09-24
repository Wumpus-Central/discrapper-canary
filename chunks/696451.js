(n.d(t, { Ay: () => ed, DL: () => W, vg: () => j }), n(938796), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(665260),
    s = n(17928),
    l = n(228366),
    o = n(807605),
    d = n(969151),
    c = n(821956),
    u = n(628856),
    _ = n(626584),
    E = n(945096),
    A = n(316031),
    h = n(264388),
    I = n(518782),
    f = n(164956),
    p = n(403362),
    T = n(7864),
    m = n(935208),
    g = n(280450),
    S = n(734057),
    N = n(317525),
    C = n(71393),
    O = n(340837);
let R = new _.A("GuildMemberStore"),
    L = {},
    y = {},
    D = {},
    v = {},
    b = {},
    M = !1,
    P = 0,
    U = 0,
    w = {},
    G = {},
    x = { added: [], removed: [] };
function k(e, t) {
    if (null == t.communicationDisabledUntil || !(0, A.Z)(t)) return F(e, t.userId);
    let n = H(e, t.userId);
    b[n] !== t.communicationDisabledUntil && (0, A.Z)(t) && ((b[n] = t.communicationDisabledUntil), B(n));
}
function F(e, t) {
    if (null != t) {
        let n = H(e, t);
        (null != b[n] && B(n), V(H(e, t)));
    } else for (let t in b) W(t) === e && (B(t), V(t));
}
function B(e) {
    ((P += 1), (w[e] = P));
}
function V(e) {
    (j(e) === g.default.getId() && (0, h.G)(W(e)), delete b[e]);
}
function H(e, t) {
    let n = [];
    return ((n[0] = e), (n[1] = t), n.join("-"));
}
function j(e) {
    return e.split("-")[1];
}
function W(e) {
    return e.split("-")[0];
}
function Y(e, t) {
    let n, i, r, a;
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
            ((null == a || (0, T.zA)(t, a)) && (a = t),
            t.color > 0 && (null == n || (0, T.zA)(t, n)) && (n = t),
            t.hoist && (null == i || (0, T.zA)(t, i)) && (i = t),
            (null != t.icon || null != t.unicodeEmoji) && (null == r || (0, T.zA)(t, r)) && (r = t));
    }
    return {
        colorString: n?.colorString ?? null,
        colorStrings: n?.colorStrings ?? null,
        colorRoleId: n?.id,
        iconRoleId: r?.id,
        hoistRoleId: i?.id,
        highestRoleId: a?.id,
    };
}
function K(e) {
    let {
            userId: t,
            nick: n,
            guildId: i,
            avatar: r,
            avatarDecoration: s,
            guildRoles: l,
            roles: o,
            premiumSince: d,
            isPending: c,
            joinedAt: u,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: E,
            fullProfileLoadedTimestamp: A,
            flags: h,
            collectibles: I,
            displayNameStyles: p,
            gamingLeaderboardData: T,
        } = e,
        { colorString: S, colorStrings: N, colorRoleId: C, iconRoleId: R, hoistRoleId: y, highestRoleId: v } = Y(l, o),
        b = {
            userId: t,
            nick: n,
            guildId: i,
            avatar: r,
            avatarDecoration: s,
            roles: o,
            colorString: S,
            colorStrings: N,
            colorRoleId: C,
            iconRoleId: R,
            hoistRoleId: y,
            highestRoleId: v,
            premiumSince: d,
            isPending: c,
            joinedAt: u,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: E,
            fullProfileLoadedTimestamp: A,
            flags: h,
            collectibles: I,
            displayNameStyles: p,
            gamingLeaderboardData: T,
        };
    if (
        ((0, a.Lt)(b.flags ?? 0, O.D.IS_GUEST) && (b.flags = (0, a.UI)(b.flags ?? 0, O.D.BYPASSES_VERIFICATION)),
        null == L[i])
    )
        return b;
    if (t === g.default.getId())
        if (f.A.isViewingRoles(i) || f.A.isFullServerPreview(i)) {
            let e = f.A.getViewingRoles(i);
            D[i] = { ...b, ...f.A.getMemberOptions(i), roles: null != e ? m.default.keys(e) : [] };
        } else null != D[i] && delete D[i];
    return b;
}
function $(e) {
    for (let t of e)
        if (
            null != t.member &&
            (null == v[t.id] ? (v[t.id] = t.member) : (v[t.id] = { ...t.member, roles: t.member.roles }),
            null != L[t.id])
        ) {
            let e = L[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = { ...e[t.member.userId], roles: t.member.roles });
        }
}
function z(e) {
    let {
            guildId: t,
            user: n,
            nick: i,
            avatar: r,
            avatarDecoration: a,
            roles: s,
            premiumSince: l,
            isPending: o,
            joinedAt: d,
            communicationDisabledUntil: u,
            unusualDMActivityUntil: _,
            flags: E,
            collectibles: A,
            displayNameStyles: h,
            gamingLeaderboardData: I,
        } = e,
        f = L[t];
    if (null == f) return !1;
    let p = C.A.getGuild(t);
    if (null == p) return (R.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1);
    ((f[n.id] = K({
        userId: n.id,
        nick: i,
        guildId: t,
        avatar: r,
        avatarDecoration: (0, c.Xq)(a),
        guildRoles: N.A.getUnsafeMutableRoles(p.id),
        roles: s,
        premiumSince: l,
        isPending: o,
        joinedAt: d,
        communicationDisabledUntil: u,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: f[n.id]?.fullProfileLoadedTimestamp,
        flags: E,
        collectibles: A,
        displayNameStyles: h,
        gamingLeaderboardData: I,
    })),
        k(t, f[n.id]));
}
function X(e, t) {
    let n = L[e];
    if (null == n) return !1;
    let i = C.A.getGuild(e);
    return null == i
        ? (R.warn(`Guild ${e} not found during batchUpdateGuildMembers.`), !1)
        : (t.forEach((t) => {
              let r = n[t.user.id];
              ((n[t.user.id] = K({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: q(t),
                  guildRoles: N.A.getUnsafeMutableRoles(i.id),
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
                  gamingLeaderboardData: (0, I.i)(t.member_gaming_leaderboard_data),
              })),
                  k(e, n[t.user.id]));
          }),
          U++,
          !0);
}
function q(e) {
    return (0, c.Xq)(e.avatar_decoration_data);
}
function Z(e, t) {
    let n = L[e];
    if (null == n || null == n[t]) return !1;
    (delete n[t], F(e, t), U++);
}
function Q(e, t) {
    return J({ id: e, members: t.filter(o.A).map((e) => e.member) });
}
function J(e) {
    let t = e.id;
    t in L || (L[e.id] = {});
    let n = C.A.getGuild(t);
    if (null == n) return !1;
    let i = L[t];
    for (let r of e.members) {
        let a = r.user.id,
            s = i[a],
            l = K({
                userId: a,
                nick: r.nick,
                guildId: e.id,
                avatar: r.avatar,
                avatarDecoration: q(r),
                guildRoles: N.A.getUnsafeMutableRoles(n.id),
                roles: r.roles,
                premiumSince: r.premium_since,
                isPending: r.pending,
                joinedAt: r.joined_at,
                communicationDisabledUntil: r.communication_disabled_until,
                fullProfileLoadedTimestamp: s?.fullProfileLoadedTimestamp,
                flags: r.flags,
                unusualDMActivityUntil: r.unusual_dm_activity_until ?? s?.unusualDMActivityUntil,
                collectibles: (0, u.t)(r.collectibles),
                displayNameStyles: (0, E.mT)(r.display_name_styles),
                gamingLeaderboardData: (0, I.i)(r.member_gaming_leaderboard_data),
            });
        ((i[a] = l), k(t, l));
    }
    return !0;
}
function ee(e) {
    let t = L[e.guildId];
    if (null == t) return !1;
    let n = C.A.getGuild(e.guildId);
    if (null == n) return (R.warn(`Guild ${e.guildId} not found during ${e.type}.`), !1);
    let i = g.default.getId();
    for (let r of m.default.keys(t)) {
        let a = t[r];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let s = r === i && "GUILD_ROLE_DELETE" === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            ((t[r] = K({
                userId: r,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: N.A.getUnsafeMutableRoles(n.id),
                roles: s,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: a?.fullProfileLoadedTimestamp,
                collectibles: a.collectibles,
                displayNameStyles: a.displayNameStyles,
                gamingLeaderboardData: a.gamingLeaderboardData,
            })),
                k(e.guildId, t[r]));
        }
    }
}
function et(e) {
    let { guildId: t } = e,
        n = L[t];
    if (null == n) return !1;
    let i = C.A.getGuild(t);
    if (null == i) return (R.warn(`Guild ${t} not found during IMPERSONATE_UPDATE.`), !1);
    let r = g.default.getId(),
        a = n[r];
    n[r] = K({
        userId: r,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: N.A.getUnsafeMutableRoles(i.id),
        roles: a.roles,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        communicationDisabledUntil: a.communicationDisabledUntil,
        fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
        flags: a.flags,
        collectibles: a.collectibles,
        displayNameStyles: a.displayNameStyles,
        gamingLeaderboardData: a.gamingLeaderboardData,
    });
}
function en(e, t) {
    return (
        e?.members != null &&
        null != t &&
        J({
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
function ei(e, t) {
    let n = !1;
    return (
        e.message_snapshots?.forEach((t) => {
            en(t.message?.resolved, e.message_reference?.guild_id) && (n = !0);
        }),
        en(e.resolved, t) || n
    );
}
function er(e) {
    let { message: t, guildId: n } = e;
    return ei(t, n);
}
function ea(e) {
    let t = S.A.getChannel(e.channel_id);
    ei(e, t?.guild_id);
}
function es(e) {
    let { messages: t } = e;
    t.forEach((e) => ea(e));
}
function el(e) {
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
        es({ messages: n }));
}
class eo extends s.Ay.Store {
    static displayName = "GuildMemberStore";
    initialize() {
        this.waitFor(g.default, S.A, N.A, C.A, f.A);
    }
    getMutableAllGuildsAndMembers() {
        return L;
    }
    memberOf(e) {
        return r()(L)
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
        for (let n in L) {
            let i = L[n],
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
        let n = L[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        if (null == e || null == t) return !1;
        let n = L[e];
        return null != n && n[t]?.joinedAt == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = g.default.getId(),
            n = L[e];
        if (null == n || null == n[t]) return !1;
        let i = n[t].flags;
        return null != i && (0, a.Lt)(i, O.D.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = L[e];
        return null == t ? [] : m.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = L[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = L[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        return null != n && t === g.default.getId() && (f.A.isViewingRoles(e) || f.A.isFullServerPreview(e))
            ? (D[e] ?? n)
            : n;
    }
    getSelfMember(e) {
        return this.getMember(e, g.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = y[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let i = new Date(n.joinedAt);
        return ((y[e] = i), i);
    }
    getCachedSelfMember(e) {
        return v[e] ?? null;
    }
    getNick(e, t) {
        if (null == e || null == t) return null;
        let n = this.getMember(e, t);
        return null != n ? n.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return b;
    }
    getCommunicationDisabledVersion() {
        return P;
    }
    getPendingRoleUpdates(e) {
        return G[e] ?? x;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        let n = this.getMember(e, t)?.roles ?? [],
            i = G[e];
        return null == i ? n : r().difference(r().union(n, i.added), i.removed);
    }
    getMemberVersion() {
        return U;
    }
}
let ed = new eo(l.h, {
    CONNECTION_OPEN: function (e) {
        (M ? (M = !1) : ((L = {}), (y = {})),
            (b = {}),
            e.guilds.forEach((e) => {
                J(e);
            }));
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        e.guilds.forEach((e) => {
            let t = e.id;
            (J({ id: t, members: e.members }),
                e.activity_instances?.forEach((e) => {
                    Q(t, e.participants);
                }));
        });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { guildMembers: t } = e;
        ((L = { ...t }), (y = {}));
    },
    CACHE_LOADED: function (e) {
        let { guildMembers: t, guilds: n } = e;
        ((M = !0), (L = { ...t }), (y = {}), (v = {}), $(n));
    },
    CACHE_LOADED_LAZY: function (e) {
        let { guilds: t } = e;
        $(t);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return J(t);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        (delete L[t.id], delete y[t.id], F(t.id));
    },
    GUILD_MEMBER_ADD: z,
    GUILD_MEMBER_UPDATE: z,
    GUILD_MEMBER_UPDATE_LOCAL: function (e) {
        let { guildId: t, roles: n, addedRoleIds: i, removedRoleIds: a, flags: s } = e,
            l = g.default.getId(),
            o = L[t],
            d = null != o ? o[l] : null;
        if (null == d) return !1;
        let c = C.A.getGuild(t);
        if (null == c) return !1;
        let u = G[t] ?? {};
        ((G[t] = {
            added: r().difference(r().union(u.added ?? [], i), a ?? []),
            removed: r().difference(r().union(u.removed ?? [], a), i ?? []),
        }),
            (o[l] = K({
                userId: l,
                guildId: t,
                nick: d.nick,
                avatar: d.avatar,
                avatarDecoration: d.avatarDecoration,
                guildRoles: N.A.getUnsafeMutableRoles(c.id),
                roles: n ?? d.roles,
                premiumSince: d.premiumSince,
                isPending: d.isPending,
                joinedAt: d.joinedAt,
                flags: s ?? d.flags,
                fullProfileLoadedTimestamp: d.fullProfileLoadedTimestamp,
                collectibles: d.collectibles,
                displayNameStyles: d.displayNameStyles,
                gamingLeaderboardData: d.gamingLeaderboardData,
            })));
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let t = !1;
        for (let n of e.chunks) t = X(n.guildId, n.members) || t;
        return t;
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        Z(t, n.id);
    },
    GUILD_MEMBER_REMOVE_LOCAL: function (e) {
        let { guildId: t, userId: n } = e;
        Z(t, n);
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        return X(t, n.map((e) => e.member).filter(p.Vq));
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        return null != n && X(t, n.map((e) => e.member).filter(p.Vq));
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        let { guildId: t, owners: n } = e;
        return X(t, n);
    },
    LOAD_FORUM_POSTS: function (e) {
        let { guildId: t, threads: n } = e;
        return X(
            t,
            Object.values(n).reduce((e, t) => {
                if ((null != t.owner && e.push(t.owner), t?.first_message?.message_snapshots != null)) {
                    let n = t.first_message.message_snapshots[0];
                    (n.moderator_report?.reported_member != null && e.push(n.moderator_report.reported_member),
                        n.moderator_report?.reporting_member != null && e.push(n.moderator_report.reporting_member));
                }
                return e;
            }, []),
        );
    },
    GUILD_ROLE_UPDATE: ee,
    GUILD_ROLE_DELETE: ee,
    GUILD_ROLE_MEMBER_REMOVE: function (e) {
        let { guildId: t, userId: n, roleId: i } = e,
            r = L[t];
        if (null == r) return !1;
        let a = C.A.getGuild(t);
        if (null == a) return (R.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1);
        let s = r[n];
        if (null == s || !s.roles.includes(i)) return !1;
        s.roles = s.roles.filter((e) => e !== i);
        let l = Y(N.A.getUnsafeMutableRoles(a.id), s.roles);
        return ((r[n] = { ...s, ...l }), !0);
    },
    GUILD_ROLE_MEMBER_ADD: function (e) {
        let { guildId: t, userId: n, roleId: i } = e,
            r = L[t];
        if (null == r) return !1;
        let a = C.A.getGuild(t);
        if (null == a) return (R.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1);
        let s = r[n];
        if (null == s || s.roles.includes(i)) return !1;
        s.roles = [...s.roles, i];
        let l = Y(N.A.getUnsafeMutableRoles(a.id), s.roles);
        return ((r[n] = { ...s, ...l }), !0);
    },
    GUILD_MEMBER_PROFILE_UPDATE: function (e) {
        let { guildMember: t, guildId: n } = e,
            i = L[n];
        if (null == i) return !1;
        let r = C.A.getGuild(n);
        if (null == r) return (R.warn(`Guild ${n} not found during GUILD_MEMBER_UPDATE.`), !1);
        ((i[t.user.id] = K({
            userId: t.user.id,
            nick: t.nick,
            guildId: n,
            avatar: t.avatar,
            avatarDecoration: q(t),
            guildRoles: N.A.getUnsafeMutableRoles(r.id),
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
            gamingLeaderboardData: (0, I.i)(t.member_gaming_leaderboard_data),
        })),
            k(n, i[t.user.id]));
    },
    IMPERSONATE_UPDATE: et,
    IMPERSONATE_STOP: et,
    PASSIVE_UPDATE_V2: function (e) {
        return e.members.length > 0 && X(e.guildId, e.members);
    },
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
        let { guildId: t } = e;
        if (null == t) return !1;
        delete G[t];
    },
    LOCAL_MESSAGES_LOADED: function (e) {
        if (null == e.guildId || null == C.A.getGuild(e.guildId)) return !1;
        ((M = !0), (L[e.guildId] = L[e.guildId] ?? {}));
        let t = !1;
        for (let n of ((M = !0), (L[e.guildId] = L[e.guildId] ?? {}), e.members))
            null == L[e.guildId][n.userId] && ((t = !0), (L[e.guildId][n.userId] = n));
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
            return ea(t);
        });
    },
    SEARCH_MESSAGES_SUCCESS: el,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: el,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function (e) {
        let { guildId: t, members: n } = e;
        return X(
            t,
            n.map((e) => {
                let { member: t } = e;
                return t;
            }),
        );
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { instance: t } = e,
            n = (0, d.D)(t.location);
        return null != n && Q(n, t.participants);
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let t = S.A.getChannel(e.channelId);
        return en(e.resolved, t?.guild_id);
    },
});
