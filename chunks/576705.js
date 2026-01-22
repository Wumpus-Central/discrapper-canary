n.d(t, { A: () => ee }), n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(136722),
    o = n(311907),
    l = n(73153),
    c = n(164956),
    u = n(857071),
    d = n(446600),
    f = n(152007),
    p = n(882733),
    _ = n(95701),
    h = n(260509),
    m = n(427157),
    g = n(799422),
    E = n(860689),
    b = n(488926),
    y = n(734057),
    O = n(696451),
    A = n(71393),
    v = n(287809),
    S = n(652215),
    I = n(402655);
function T(e, t, n) {
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
let C = {},
    N = {},
    R = {},
    w = 0;
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = C[e];
    if (null != n) return n;
    let r = v.default.getCurrentUser();
    if (null == r) return b.x3;
    let i = A.A.getGuild(e);
    return null == i
        ? b.x3
        : (C[e] = b.cc({
              user: r,
              context: i,
              checkElevated: t,
          }));
}
function D(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = v.default.getCurrentUser();
    if (null == r) return b.x3;
    let i = y.A.getChannel(e);
    if (null == i) return b.x3;
    let s = i.getGuildId(),
        o = null != s && (u.A.isLurking(s) || (null == (t = O.Ay.getMember(s, r.id)) ? void 0 : t.isPending));
    return !i.isScheduledForDeletion() && !o && a().isEmpty(i.permissionOverwrites) && null != s
        ? P(s)
        : b.cc({
              user: r,
              context: i,
              checkElevated: n,
          });
}
function x(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = N[e];
    return null != n ? n : (N[e] = D(e, t));
}
function L(e) {
    if (null != e) {
        var t;
        R[e] = (null != (t = R[e]) ? t : 0) + 1;
    }
}
function j() {
    for (let e in ((C = {}), (N = {}), R)) R[e] += 1;
    w += 1;
}
function M() {
    j();
}
function k() {
    J();
}
function U() {
    j();
}
function G(e) {
    var t;
    let { user: n } = e;
    if (n.id !== (null == (t = v.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    j();
}
function V(e) {
    let {
            channel: { id: t },
        } = e,
        n = y.A.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let r = v.default.getCurrentUser(),
        i = b.cc({
            user: r,
            context: n,
        });
    if (N[n.id] === i) return !1;
    (N[n.id] = i), (w += 1), L(n.getGuildId());
}
function F(e) {
    let { channels: t } = e,
        n = !1;
    for (let { id: e } of t) {
        let t = y.A.getChannel(e);
        if (null == t || t.isPrivate()) continue;
        let r = v.default.getCurrentUser(),
            i = b.cc({
                user: r,
                context: t,
            });
        N[t.id] !== i && ((N[t.id] = i), L(t.getGuildId()), (n = !0));
    }
    return !!n && ((w += 1), n);
}
function B() {
    return !0;
}
function H(e) {
    var t;
    return (null == (t = v.default.getCurrentUser()) ? void 0 : t.id) === e.userId && (L(e.guildId), !0);
}
function Y(e) {
    return !!(0, p.k)(e) && (L(e.guildId), !0);
}
function W(e) {
    let { messages: t } = e;
    return t.some((e) => null != e.thread);
}
function K(e) {
    let { data: t } = e;
    return t.some((e) => {
        let { messages: t, threads: n } = e;
        return n.length > 0 || t.some((e) => e.some((e) => null != e.thread));
    });
}
function z(e) {
    let { channel: t } = e;
    return delete N[t.id], (w += 1), L(t.guild_id), !1;
}
function q(e) {
    let { guildId: t } = e;
    delete C[t];
    let n = y.A.getMutableBasicGuildChannelsForGuild(t);
    a().forEach(n, (e) => {
        delete N[e.id];
    }),
        (w += 1),
        L(t);
}
function X(e) {
    let { instance: t } = e,
        n = y.A.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = v.default.getCurrentUser(),
        i = b.cc({
            user: r,
            context: n,
        });
    if (i === N[n.id]) return !1;
    (N[n.id] = i), (w += 1);
}
function Z(e) {
    let { guildId: t } = e;
    delete C[t];
    let n = y.A.getMutableBasicGuildChannelsForGuild(t);
    a().forEach(n, (e) => {
        delete N[e.id];
    }),
        (w += 1),
        L(t);
}
function Q(e, t, n, r) {
    let i = b.x3;
    if (e instanceof _.YB) {
        if (_.Le.has(e.type)) {
            let i = y.A.getChannel(e.parent_id);
            return null == i ? b.x3 : b.TJ(e, Q(i, t, n, r), f.A.hasJoined(e.id), O.Ay.isCurrentUserGuest(e.guild_id));
        }
        i = x(e.id);
    } else (0, E.fh)(e) && (i = P(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r
        ? b.cc({
              user: v.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: r,
          })
        : i;
}
class $ extends (r = o.Ay.Store) {
    initialize() {
        this.waitFor(y.A, O.Ay, A.A, c.A, f.A, u.A, d.A, v.default);
    }
    getChannelPermissions(e) {
        return _.Le.has(e.type) ? D(e.id) : x(e.id);
    }
    getGuildPermissions(e) {
        return P(e.id);
    }
    getGuildPermissionProps(e) {
        let t = v.default.getCurrentUser();
        return {
            canManageGuild: this.can(S.xBc.MANAGE_GUILD, e),
            canManageChannels: this.can(S.xBc.MANAGE_CHANNELS, e),
            canManageRoles: this.can(S.xBc.MANAGE_ROLES, e),
            canManageBans: this.can(S.xBc.BAN_MEMBERS, e),
            canManageNicknames: this.can(S.xBc.MANAGE_NICKNAMES, e),
            canManageGuildExpressions:
                this.can(S.xBc.MANAGE_GUILD_EXPRESSIONS, e) || this.can(S.xBc.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(S.xBc.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(S.xBc.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(S.xBc.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(S.xBc.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(S.xBc.ADMINISTRATOR, e),
            isOwner: null != t && (0, h.bM)(e, t),
            isOwnerWithRequiredMfaLevel: null != t && (0, h.ok)(e, t),
            guild: e,
        };
    }
    canAccessMemberSafetyPage(e) {
        return s.X8(P(e.id), I.M);
    }
    canAccessGuildSettings(e) {
        return s.X8(P(e.id), b.yC);
    }
    canWithPartialContext(e, t) {
        return "channelId" in t && "string" == typeof t.channelId
            ? this.can(e, y.A.getChannel(t.channelId))
            : "guildId" in t && "string" == typeof t.guildId && this.can(e, A.A.getGuild(t.guildId));
    }
    can(e, t, n, r, i) {
        let a = Q(t, n, r, i);
        return s.zy(a, e);
    }
    canBasicChannel(e, t, n, r, i) {
        return "basicPermissions" in t ? g.A.has(t.basicPermissions, e) : s.zy(Q(t, n, r, i), g.A.asBigFlag(e));
    }
    computePermissions(e, t, n, r) {
        return Q(e, t, n, r);
    }
    computeBasicPermissions(e) {
        return "basicPermissions" in e ? e.basicPermissions : g.A.asBasicFlag(Q(e));
    }
    canManageUser(e, t, n) {
        let r = t instanceof m.A ? t.id : t;
        if ((0, h.bM)(n, r)) return !1;
        let i = v.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != i ? b.HJ(n, i.id) : void 0,
            s = b.HJ(n, r);
        return null != i && b.wO(n, i.id, a, s);
    }
    getHighestRole(e) {
        let t = v.default.getCurrentUser();
        return null != t ? b.HJ(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let r = v.default.getCurrentUser(),
            i = c.A.isViewingRoles(e.id);
        return b.wO(e, i || null == r ? void 0 : r.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(S.xBc.MANAGE_GUILD, e) && this.can(S.xBc.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === (null == n ? void 0 : n.id));
    }
    getGuildVersion(e) {
        var t;
        return null != (t = R[e]) ? t : 0;
    }
    getChannelsVersion() {
        return w;
    }
}
function J() {
    (N = {}), (C = {}), (R = {}), (w = 0);
}
T($, "displayName", "PermissionStore");
let ee = new $(l.h, {
    BACKGROUND_SYNC: M,
    CONNECTION_OPEN: M,
    OVERLAY_INITIALIZE: M,
    CACHE_LOADED: M,
    CACHE_LOADED_LAZY: M,
    CONNECTION_CLOSED: k,
    GUILD_CREATE: U,
    GUILD_UPDATE: U,
    GUILD_DELETE: U,
    GUILD_MEMBER_ADD: G,
    GUILD_MEMBER_UPDATE: G,
    CURRENT_USER_UPDATE: G,
    CHANNEL_CREATE: V,
    THREAD_CREATE: B,
    THREAD_UPDATE: B,
    THREAD_LIST_SYNC: B,
    LOAD_THREADS_SUCCESS: B,
    LOAD_ARCHIVED_THREADS_SUCCESS: B,
    CHANNEL_UPDATES: F,
    LOAD_MESSAGES_SUCCESS: W,
    SEARCH_MESSAGES_SUCCESS: K,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: K,
    THREAD_MEMBER_UPDATE: H,
    THREAD_MEMBERS_UPDATE: Y,
    CHANNEL_DELETE: z,
    GUILD_ROLE_CREATE: q,
    GUILD_ROLE_UPDATE: q,
    GUILD_ROLE_DELETE: q,
    LOGOUT: J,
    STAGE_INSTANCE_CREATE: X,
    STAGE_INSTANCE_UPDATE: X,
    STAGE_INSTANCE_DELETE: X,
    IMPERSONATE_UPDATE: Z,
    IMPERSONATE_STOP: Z,
});
