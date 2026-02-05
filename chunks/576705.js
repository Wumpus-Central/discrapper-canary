"use strict";
n.d(t, { A: () => X });
var r = n(735438),
    i = n.n(r),
    a = n(136722),
    s = n(311907),
    o = n(73153),
    l = n(164956),
    u = n(857071),
    c = n(446600),
    d = n(152007),
    _ = n(882733),
    f = n(95701),
    p = n(260509),
    h = n(427157),
    m = n(799422),
    g = n(860689),
    E = n(488926),
    A = n(734057),
    I = n(696451),
    T = n(71393),
    y = n(287809),
    S = n(652215),
    v = n(402655);
let C = {},
    b = {},
    N = {},
    R = 0;
function O(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = C[e];
    if (null != n) return n;
    let r = y.default.getCurrentUser();
    if (null == r) return E.x3;
    let i = T.A.getGuild(e);
    return null == i ? E.x3 : (C[e] = E.cc({ user: r, context: i, checkElevated: t }));
}
function D(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = y.default.getCurrentUser();
    if (null == n) return E.x3;
    let r = A.A.getChannel(e);
    if (null == r) return E.x3;
    let a = r.getGuildId(),
        s = null != a && (u.A.isLurking(a) || I.Ay.getMember(a, n.id)?.isPending);
    return !r.isScheduledForDeletion() && !s && i().isEmpty(r.permissionOverwrites) && null != a
        ? O(a)
        : E.cc({ user: n, context: r, checkElevated: t });
}
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = b[e];
    return null != n ? n : (b[e] = D(e, t));
}
function w(e) {
    null != e && (N[e] = (N[e] ?? 0) + 1);
}
function x() {
    for (let e in ((C = {}), (b = {}), N)) N[e] += 1;
    R += 1;
}
function P() {
    x();
}
function M() {
    Q();
}
function k() {
    x();
}
function U(e) {
    let { user: t } = e;
    if (t.id !== y.default.getCurrentUser()?.id) return !1;
    x();
}
function G(e) {
    let {
            channel: { id: t },
        } = e,
        n = A.A.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let r = y.default.getCurrentUser(),
        i = E.cc({ user: r, context: n });
    if (b[n.id] === i) return !1;
    (b[n.id] = i), (R += 1), w(n.getGuildId());
}
function V(e) {
    let { channels: t } = e,
        n = !1;
    for (let { id: e } of t) {
        let t = A.A.getChannel(e);
        if (null == t || t.isPrivate()) continue;
        let r = y.default.getCurrentUser(),
            i = E.cc({ user: r, context: t });
        b[t.id] !== i && ((b[t.id] = i), w(t.getGuildId()), (n = !0));
    }
    return !!n && ((R += 1), n);
}
function F() {
    return !0;
}
function B(e) {
    return y.default.getCurrentUser()?.id === e.userId && (w(e.guildId), !0);
}
function j(e) {
    return !!(0, _.k)(e) && (w(e.guildId), !0);
}
function H(e) {
    let { messages: t } = e;
    return t.some((e) => null != e.thread);
}
function Y(e) {
    let { data: t } = e;
    return t.some((e) => {
        let { messages: t, threads: n } = e;
        return n.length > 0 || t.some((e) => e.some((e) => null != e.thread));
    });
}
function W(e) {
    let { channel: t } = e;
    return delete b[t.id], (R += 1), w(t.guild_id), !1;
}
function K(e) {
    let { guildId: t } = e;
    delete C[t];
    let n = A.A.getMutableBasicGuildChannelsForGuild(t);
    i().forEach(n, (e) => {
        delete b[e.id];
    }),
        (R += 1),
        w(t);
}
function z(e) {
    let { instance: t } = e,
        n = A.A.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = y.default.getCurrentUser(),
        i = E.cc({ user: r, context: n });
    if (i === b[n.id]) return !1;
    (b[n.id] = i), (R += 1);
}
function $(e) {
    let { guildId: t } = e;
    delete C[t];
    let n = A.A.getMutableBasicGuildChannelsForGuild(t);
    i().forEach(n, (e) => {
        delete b[e.id];
    }),
        (R += 1),
        w(t);
}
function q(e, t, n, r) {
    let i = E.x3;
    if (e instanceof f.YB) {
        if (f.Le.has(e.type)) {
            let i = A.A.getChannel(e.parent_id);
            return null == i ? E.x3 : E.TJ(e, q(i, t, n, r), d.A.hasJoined(e.id), I.Ay.isCurrentUserGuest(e.guild_id));
        }
        i = L(e.id);
    } else (0, g.fh)(e) && (i = O(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r
        ? E.cc({
              user: y.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: r,
          })
        : i;
}
class Z extends s.Ay.Store {
    static displayName = "PermissionStore";
    initialize() {
        this.waitFor(A.A, I.Ay, T.A, l.A, d.A, u.A, c.A, y.default);
    }
    getChannelPermissions(e) {
        return f.Le.has(e.type) ? D(e.id) : L(e.id);
    }
    getGuildPermissions(e) {
        return O(e.id);
    }
    getGuildPermissionProps(e) {
        let t = y.default.getCurrentUser();
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
            isOwner: null != t && (0, p.bM)(e, t),
            isOwnerWithRequiredMfaLevel: null != t && (0, p.ok)(e, t),
            guild: e,
        };
    }
    canAccessMemberSafetyPage(e) {
        return a.X8(O(e.id), v.M);
    }
    canAccessGuildSettings(e) {
        return a.X8(O(e.id), E.yC);
    }
    canWithPartialContext(e, t) {
        return "channelId" in t && "string" == typeof t.channelId
            ? this.can(e, A.A.getChannel(t.channelId))
            : "guildId" in t && "string" == typeof t.guildId && this.can(e, T.A.getGuild(t.guildId));
    }
    can(e, t, n, r, i) {
        let s = q(t, n, r, i);
        return a.zy(s, e);
    }
    canBasicChannel(e, t, n, r, i) {
        return "basicPermissions" in t ? m.A.has(t.basicPermissions, e) : a.zy(q(t, n, r, i), m.A.asBigFlag(e));
    }
    computePermissions(e, t, n, r) {
        return q(e, t, n, r);
    }
    computeBasicPermissions(e) {
        return "basicPermissions" in e ? e.basicPermissions : m.A.asBasicFlag(q(e));
    }
    canManageUser(e, t, n) {
        let r = t instanceof h.A ? t.id : t;
        if ((0, p.bM)(n, r)) return !1;
        let i = y.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != i ? E.HJ(n, i.id) : void 0,
            s = E.HJ(n, r);
        return null != i && E.wO(n, i.id, a, s);
    }
    getHighestRole(e) {
        let t = y.default.getCurrentUser();
        return null != t ? E.HJ(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let r = y.default.getCurrentUser(),
            i = l.A.isViewingRoles(e.id);
        return E.wO(e, i ? void 0 : r?.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(S.xBc.MANAGE_GUILD, e) && this.can(S.xBc.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === n?.id);
    }
    getGuildVersion(e) {
        return N[e] ?? 0;
    }
    getChannelsVersion() {
        return R;
    }
}
function Q() {
    (b = {}), (C = {}), (N = {}), (R = 0);
}
let X = new Z(o.h, {
    BACKGROUND_SYNC: P,
    CONNECTION_OPEN: P,
    OVERLAY_INITIALIZE: P,
    CACHE_LOADED: P,
    CACHE_LOADED_LAZY: P,
    CONNECTION_CLOSED: M,
    GUILD_CREATE: k,
    GUILD_UPDATE: k,
    GUILD_DELETE: k,
    GUILD_MEMBER_ADD: U,
    GUILD_MEMBER_UPDATE: U,
    CURRENT_USER_UPDATE: U,
    CHANNEL_CREATE: G,
    THREAD_CREATE: F,
    THREAD_UPDATE: F,
    THREAD_LIST_SYNC: F,
    LOAD_THREADS_SUCCESS: F,
    LOAD_ARCHIVED_THREADS_SUCCESS: F,
    CHANNEL_UPDATES: V,
    LOAD_MESSAGES_SUCCESS: H,
    SEARCH_MESSAGES_SUCCESS: Y,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: Y,
    THREAD_MEMBER_UPDATE: B,
    THREAD_MEMBERS_UPDATE: j,
    CHANNEL_DELETE: W,
    GUILD_ROLE_CREATE: K,
    GUILD_ROLE_UPDATE: K,
    GUILD_ROLE_DELETE: K,
    LOGOUT: Q,
    STAGE_INSTANCE_CREATE: z,
    STAGE_INSTANCE_UPDATE: z,
    STAGE_INSTANCE_DELETE: z,
    IMPERSONATE_UPDATE: $,
    IMPERSONATE_STOP: $,
});
