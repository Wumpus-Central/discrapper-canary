n.d(t, { Ay: () => eo, DL: () => j, vg: () => H }), n(938796), n(321073);
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
    I = n(164956),
    f = n(403362),
    p = n(7864),
    T = n(935208),
    m = n(280450),
    g = n(734057),
    S = n(317525),
    N = n(71393),
    C = n(340837);
let O = new _.A("GuildMemberStore"),
    R = {},
    L = {},
    y = {},
    D = {},
    v = {},
    b = !1,
    M = 0,
    P = 0,
    U = {},
    w = {},
    G = { added: [], removed: [] };
function x(e, t) {
    if (null == t.communicationDisabledUntil || !(0, A.Z)(t)) return k(e, t.userId);
    let n = B(e, t.userId);
    v[n] !== t.communicationDisabledUntil && (0, A.Z)(t) && ((v[n] = t.communicationDisabledUntil), F(n));
}
function k(e, t) {
    if (null != t) {
        let n = B(e, t);
        null != v[n] && F(n), V(B(e, t));
    } else for (let t in v) j(t) === e && (F(t), V(t));
}
function F(e) {
    (M += 1), (U[e] = M);
}
function V(e) {
    H(e) === m.default.getId() && (0, h.G)(j(e)), delete v[e];
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
            ((null == a || (0, p.zA)(t, a)) && (a = t),
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
        highestRoleId: a?.id,
    };
}
function Y(e) {
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
            collectibles: f,
            displayNameStyles: p,
        } = e,
        { colorString: g, colorStrings: S, colorRoleId: N, iconRoleId: O, hoistRoleId: L, highestRoleId: D } = W(l, o),
        v = {
            userId: t,
            nick: n,
            guildId: i,
            avatar: r,
            avatarDecoration: s,
            roles: o,
            colorString: g,
            colorStrings: S,
            colorRoleId: N,
            iconRoleId: O,
            hoistRoleId: L,
            highestRoleId: D,
            premiumSince: d,
            isPending: c,
            joinedAt: u,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: E,
            fullProfileLoadedTimestamp: A,
            flags: h,
            collectibles: f,
            displayNameStyles: p,
        };
    if (
        ((0, a.Lt)(v.flags ?? 0, C.D.IS_GUEST) && (v.flags = (0, a.UI)(v.flags ?? 0, C.D.BYPASSES_VERIFICATION)),
        null == R[i])
    )
        return v;
    if (t === m.default.getId())
        if (I.A.isViewingRoles(i) || I.A.isFullServerPreview(i)) {
            let e = I.A.getViewingRoles(i);
            y[i] = { ...v, ...I.A.getMemberOptions(i), roles: null != e ? T.default.keys(e) : [] };
        } else null != y[i] && delete y[i];
    return v;
}
function K(e) {
    for (let t of e)
        if (
            null != t.member &&
            (null == D[t.id] ? (D[t.id] = t.member) : (D[t.id] = { ...t.member, roles: t.member.roles }),
            null != R[t.id])
        ) {
            let e = R[t.id];
            null != e[t.member.userId] && (e[t.member.userId] = { ...e[t.member.userId], roles: t.member.roles });
        }
}
function $(e) {
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
        } = e,
        I = R[t];
    if (null == I) return !1;
    let f = N.A.getGuild(t);
    if (null == f) return O.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
    (I[n.id] = Y({
        userId: n.id,
        nick: i,
        guildId: t,
        avatar: r,
        avatarDecoration: (0, c.Xq)(a),
        guildRoles: S.A.getUnsafeMutableRoles(f.id),
        roles: s,
        premiumSince: l,
        isPending: o,
        joinedAt: d,
        communicationDisabledUntil: u,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: I[n.id]?.fullProfileLoadedTimestamp,
        flags: E,
        collectibles: A,
        displayNameStyles: h,
    })),
        x(t, I[n.id]);
}
function z(e, t) {
    let n = R[e];
    if (null == n) return !1;
    let i = N.A.getGuild(e);
    return null == i
        ? (O.warn(`Guild ${e} not found during batchUpdateGuildMembers.`), !1)
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
    return (0, c.Xq)(e.avatar_decoration_data);
}
function Z(e, t) {
    let n = R[e];
    if (null == n || null == n[t]) return !1;
    delete n[t], k(e, t), P++;
}
function X(e, t) {
    return Q({ id: e, members: t.filter(o.A).map((e) => e.member) });
}
function Q(e) {
    let t = e.id;
    t in R || (R[e.id] = {});
    let n = N.A.getGuild(t);
    if (null == n) return !1;
    let i = R[t];
    for (let r of e.members) {
        let a = r.user.id,
            s = i[a],
            l = Y({
                userId: a,
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
                fullProfileLoadedTimestamp: s?.fullProfileLoadedTimestamp,
                flags: r.flags,
                unusualDMActivityUntil: r.unusual_dm_activity_until ?? s?.unusualDMActivityUntil,
                collectibles: (0, u.t)(r.collectibles),
                displayNameStyles: (0, E.mT)(r.display_name_styles),
            });
        (i[a] = l), x(t, l);
    }
    return !0;
}
function J(e) {
    let t = R[e.guildId];
    if (null == t) return !1;
    let n = N.A.getGuild(e.guildId);
    if (null == n) return O.warn(`Guild ${e.guildId} not found during ${e.type}.`), !1;
    let i = m.default.getId();
    for (let r of T.default.keys(t)) {
        let a = t[r];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let s = r === i && "GUILD_ROLE_DELETE" === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            (t[r] = Y({
                userId: r,
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
                x(e.guildId, t[r]);
        }
    }
}
function ee(e) {
    let { guildId: t } = e,
        n = R[t];
    if (null == n) return !1;
    let i = N.A.getGuild(t);
    if (null == i) return O.warn(`Guild ${t} not found during IMPERSONATE_UPDATE.`), !1;
    let r = m.default.getId(),
        a = n[r];
    n[r] = Y({
        userId: r,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: S.A.getUnsafeMutableRoles(i.id),
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
    let t = g.A.getChannel(e.channel_id);
    en(e, t?.guild_id);
}
function ea(e) {
    let { messages: t } = e;
    t.forEach((e) => er(e));
}
function es(e) {
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
        ea({ messages: n });
}
class el extends s.Ay.Store {
    static displayName = "GuildMemberStore";
    initialize() {
        this.waitFor(m.default, g.A, S.A, N.A, I.A);
    }
    getMutableAllGuildsAndMembers() {
        return R;
    }
    memberOf(e) {
        return r()(R)
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
        for (let n in R) {
            let i = R[n],
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
        let n = R[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        if (null == e || null == t) return !1;
        let n = R[e];
        return null != n && n[t]?.joinedAt == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = m.default.getId(),
            n = R[e];
        if (null == n || null == n[t]) return !1;
        let i = n[t].flags;
        return null != i && (0, a.Lt)(i, C.D.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = R[e];
        return null == t ? [] : T.default.keys(t);
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
        return null != n && t === m.default.getId() && (I.A.isViewingRoles(e) || I.A.isFullServerPreview(e))
            ? (y[e] ?? n)
            : n;
    }
    getSelfMember(e) {
        return this.getMember(e, m.default.getId());
    }
    getSelfMemberJoinedAt(e) {
        let t = L[e];
        if (null != t) return t;
        let n = this.getSelfMember(e);
        if (null == n || null == n.joinedAt) return null;
        let i = new Date(n.joinedAt);
        return (L[e] = i), i;
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
        return v;
    }
    getCommunicationDisabledVersion() {
        return M;
    }
    getPendingRoleUpdates(e) {
        return w[e] ?? G;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        let n = this.getMember(e, t)?.roles ?? [],
            i = w[e];
        return null == i ? n : r().difference(r().union(n, i.added), i.removed);
    }
    getMemberVersion() {
        return P;
    }
}
let eo = new el(l.h, {
    CONNECTION_OPEN: function (e) {
        b ? (b = !1) : ((R = {}), (L = {})),
            (v = {}),
            e.guilds.forEach((e) => {
                Q(e);
            });
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        e.guilds.forEach((e) => {
            let t = e.id;
            Q({ id: t, members: e.members }),
                e.activity_instances?.forEach((e) => {
                    X(t, e.participants);
                });
        });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { guildMembers: t } = e;
        (R = { ...t }), (L = {});
    },
    CACHE_LOADED: function (e) {
        let { guildMembers: t, guilds: n } = e;
        (b = !0), (R = { ...t }), (L = {}), (D = {}), K(n);
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
        delete R[t.id], delete L[t.id], k(t.id);
    },
    GUILD_MEMBER_ADD: $,
    GUILD_MEMBER_UPDATE: $,
    GUILD_MEMBER_UPDATE_LOCAL: function (e) {
        let { guildId: t, roles: n, addedRoleIds: i, removedRoleIds: a, flags: s } = e,
            l = m.default.getId(),
            o = R[t],
            d = null != o ? o[l] : null;
        if (null == d) return !1;
        let c = N.A.getGuild(t);
        if (null == c) return !1;
        let u = w[t] ?? {};
        (w[t] = {
            added: r().difference(r().union(u.added ?? [], i), a ?? []),
            removed: r().difference(r().union(u.removed ?? [], a), i ?? []),
        }),
            (o[l] = Y({
                userId: l,
                guildId: t,
                nick: d.nick,
                avatar: d.avatar,
                avatarDecoration: d.avatarDecoration,
                guildRoles: S.A.getUnsafeMutableRoles(c.id),
                roles: n ?? d.roles,
                premiumSince: d.premiumSince,
                isPending: d.isPending,
                joinedAt: d.joinedAt,
                flags: s ?? d.flags,
                fullProfileLoadedTimestamp: d.fullProfileLoadedTimestamp,
                collectibles: d.collectibles,
                displayNameStyles: d.displayNameStyles,
            }));
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let t = !1;
        for (let n of e.chunks) t = z(n.guildId, n.members) || t;
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
        return z(t, n.map((e) => e.member).filter(f.Vq));
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        return null != n && z(t, n.map((e) => e.member).filter(f.Vq));
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
        let { guildId: t, userId: n, roleId: i } = e,
            r = R[t];
        if (null == r) return !1;
        let a = N.A.getGuild(t);
        if (null == a) return O.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
        let s = r[n];
        if (null == s || !s.roles.includes(i)) return !1;
        s.roles = s.roles.filter((e) => e !== i);
        let l = W(S.A.getUnsafeMutableRoles(a.id), s.roles);
        return (r[n] = { ...s, ...l }), !0;
    },
    GUILD_ROLE_MEMBER_ADD: function (e) {
        let { guildId: t, userId: n, roleId: i } = e,
            r = R[t];
        if (null == r) return !1;
        let a = N.A.getGuild(t);
        if (null == a) return O.warn(`Guild ${t} not found during GUILD_MEMBER_UPDATE.`), !1;
        let s = r[n];
        if (null == s || s.roles.includes(i)) return !1;
        s.roles = [...s.roles, i];
        let l = W(S.A.getUnsafeMutableRoles(a.id), s.roles);
        return (r[n] = { ...s, ...l }), !0;
    },
    GUILD_MEMBER_PROFILE_UPDATE: function (e) {
        let { guildMember: t, guildId: n } = e,
            i = R[n];
        if (null == i) return !1;
        let r = N.A.getGuild(n);
        if (null == r) return O.warn(`Guild ${n} not found during GUILD_MEMBER_UPDATE.`), !1;
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
        return e.members.length > 0 && z(e.guildId, e.members);
    },
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
        let { guildId: t } = e;
        if (null == t) return !1;
        delete w[t];
    },
    LOCAL_MESSAGES_LOADED: function (e) {
        if (null == e.guildId || null == N.A.getGuild(e.guildId)) return !1;
        (b = !0), (R[e.guildId] = R[e.guildId] ?? {});
        let t = !1;
        for (let n of ((b = !0), (R[e.guildId] = R[e.guildId] ?? {}), e.members))
            null == R[e.guildId][n.userId] && ((t = !0), (R[e.guildId][n.userId] = n));
        return t;
    },
    MESSAGE_CREATE: ei,
    MESSAGE_UPDATE: ei,
    LOAD_MESSAGES_SUCCESS: ea,
    LOAD_MESSAGES_AROUND_SUCCESS: ea,
    LOAD_RECENT_MENTIONS_SUCCESS: ea,
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { pins: t } = e;
        t.forEach((e) => {
            let { message: t } = e;
            return er(t);
        });
    },
    SEARCH_MESSAGES_SUCCESS: es,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: es,
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
        let { instance: t } = e,
            n = (0, d.D)(t.location);
        return null != n && X(n, t.participants);
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let t = g.A.getChannel(e.channelId);
        return et(e.resolved, t?.guild_id);
    },
});
