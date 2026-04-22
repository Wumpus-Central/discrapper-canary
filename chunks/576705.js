"use strict";
n.d(t, { A: () => j });
var r = n(735438),
    i = n.n(r),
    s = n(136722),
    a = n(311907),
    o = n(73153),
    l = n(164956),
    u = n(857071),
    d = n(446600),
    c = n(152007),
    _ = n(882733),
    f = n(95701),
    E = n(260509),
    h = n(427157),
    p = n(799422),
    m = n(860689),
    g = n(488926),
    A = n(734057),
    I = n(696451),
    T = n(71393),
    S = n(287809),
    y = n(652215),
    N = n(402655);
let O = {},
    R = {},
    v = {},
    C = 0;
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = O[e];
    if (null != n) return n;
    let r = S.default.getCurrentUser();
    if (null == r) return g.x3;
    let i = T.A.getGuild(e);
    return null == i ? g.x3 : (O[e] = g.cc({ user: r, context: i, checkElevated: t }));
}
function D(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = S.default.getCurrentUser();
    if (null == n) return g.x3;
    let r = A.A.getChannel(e);
    if (null == r) return g.x3;
    let s = r.getGuildId(),
        a = null != s && (u.A.isLurking(s) || I.Ay.getMember(s, n.id)?.isPending);
    return !r.isScheduledForDeletion() && !a && i().isEmpty(r.permissionOverwrites) && null != s
        ? b(s)
        : g.cc({ user: n, context: r, checkElevated: t });
}
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = R[e];
    return null != n ? n : (R[e] = D(e, t));
}
function w(e) {
    null != e && (v[e] = (v[e] ?? 0) + 1);
}
function M() {
    for (let e in ((O = {}), (R = {}), v)) v[e] += 1;
    C += 1;
}
function P() {
    M();
}
function U() {
    M();
}
function k(e) {
    let { user: t } = e;
    if (t.id !== S.default.getCurrentUser()?.id) return !1;
    M();
}
function x() {
    return !0;
}
function G(e) {
    let { data: t } = e;
    return t.some((e) => {
        let { messages: t, threads: n } = e;
        return n.length > 0 || t.some((e) => e.some((e) => null != e.thread));
    });
}
function V(e) {
    let { guildId: t } = e;
    delete O[t];
    let n = A.A.getMutableBasicGuildChannelsForGuild(t);
    i().forEach(n, (e) => {
        delete R[e.id];
    }),
        (C += 1),
        w(t);
}
function F(e) {
    let { instance: t } = e,
        n = A.A.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = S.default.getCurrentUser(),
        i = g.cc({ user: r, context: n });
    if (i === R[n.id]) return !1;
    (R[n.id] = i), (C += 1);
}
function B(e) {
    let { guildId: t } = e;
    delete O[t];
    let n = A.A.getMutableBasicGuildChannelsForGuild(t);
    i().forEach(n, (e) => {
        delete R[e.id];
    }),
        (C += 1),
        w(t);
}
function H(e, t, n, r) {
    let i = g.x3;
    if (e instanceof f.YB) {
        if (f.Le.has(e.type)) {
            let i = A.A.getChannel(e.parent_id);
            return null == i ? g.x3 : g.TJ(e, H(i, t, n, r), c.A.hasJoined(e.id), I.Ay.isCurrentUserGuest(e.guild_id));
        }
        i = L(e.id);
    } else (0, m.fh)(e) && (i = b(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r
        ? g.cc({
              user: S.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: r,
          })
        : i;
}
class Y extends a.Ay.Store {
    static displayName = "PermissionStore";
    initialize() {
        this.waitFor(A.A, I.Ay, T.A, l.A, c.A, u.A, d.A, S.default);
    }
    getChannelPermissions(e) {
        return f.Le.has(e.type) ? D(e.id) : L(e.id);
    }
    getGuildPermissions(e) {
        return b(e.id);
    }
    getGuildPermissionProps(e) {
        let t = S.default.getCurrentUser();
        return {
            canManageGuild: this.can(y.xBc.MANAGE_GUILD, e),
            canManageChannels: this.can(y.xBc.MANAGE_CHANNELS, e),
            canManageRoles: this.can(y.xBc.MANAGE_ROLES, e),
            canManageBans: this.can(y.xBc.BAN_MEMBERS, e),
            canManageNicknames: this.can(y.xBc.MANAGE_NICKNAMES, e),
            canManageGuildExpressions:
                this.can(y.xBc.MANAGE_GUILD_EXPRESSIONS, e) || this.can(y.xBc.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(y.xBc.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(y.xBc.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(y.xBc.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(y.xBc.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(y.xBc.ADMINISTRATOR, e),
            isOwner: null != t && (0, E.bM)(e, t),
            isOwnerWithRequiredMfaLevel: null != t && (0, E.ok)(e, t),
            guild: e,
        };
    }
    canAccessMemberSafetyPage(e) {
        return s.X8(b(e.id), N.M);
    }
    canAccessGuildSettings(e) {
        return s.X8(b(e.id), g.yC);
    }
    canWithPartialContext(e, t) {
        return "channelId" in t && "string" == typeof t.channelId
            ? this.can(e, A.A.getChannel(t.channelId))
            : "guildId" in t && "string" == typeof t.guildId && this.can(e, T.A.getGuild(t.guildId));
    }
    can(e, t, n, r, i) {
        let a = H(t, n, r, i);
        return s.zy(a, e);
    }
    canBasicChannel(e, t, n, r, i) {
        return "basicPermissions" in t ? p.A.has(t.basicPermissions, e) : s.zy(H(t, n, r, i), p.A.asBigFlag(e));
    }
    computePermissions(e, t, n, r) {
        return H(e, t, n, r);
    }
    computeBasicPermissions(e) {
        return "basicPermissions" in e ? e.basicPermissions : p.A.asBasicFlag(H(e));
    }
    canManageUser(e, t, n) {
        let r = t instanceof h.A ? t.id : t;
        if ((0, E.bM)(n, r)) return !1;
        let i = S.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let s = null != i ? g.HJ(n, i.id) : void 0,
            a = g.HJ(n, r);
        return null != i && g.wO(n, i.id, s, a);
    }
    getHighestRole(e) {
        let t = S.default.getCurrentUser();
        return null != t ? g.HJ(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let r = S.default.getCurrentUser(),
            i = l.A.isViewingRoles(e.id);
        return g.wO(e, i ? void 0 : r?.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(y.xBc.MANAGE_GUILD, e) && this.can(y.xBc.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === n?.id);
    }
    getGuildVersion(e) {
        return v[e] ?? 0;
    }
    getChannelsVersion() {
        return C;
    }
}
function W() {
    (R = {}), (O = {}), (v = {}), (C = 0);
}
let j = new Y(o.h, {
    BACKGROUND_SYNC: P,
    CONNECTION_OPEN: P,
    OVERLAY_INITIALIZE: P,
    CACHE_LOADED: P,
    CACHE_LOADED_LAZY: P,
    CONNECTION_CLOSED: function () {
        W();
    },
    GUILD_CREATE: U,
    GUILD_UPDATE: U,
    GUILD_DELETE: U,
    GUILD_MEMBER_ADD: k,
    GUILD_MEMBER_UPDATE: k,
    CURRENT_USER_UPDATE: k,
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = A.A.getChannel(t);
        if (null == n || n.isPrivate()) return !1;
        let r = S.default.getCurrentUser(),
            i = g.cc({ user: r, context: n });
        if (R[n.id] === i) return !1;
        (R[n.id] = i), (C += 1), w(n.getGuildId());
    },
    THREAD_CREATE: x,
    THREAD_UPDATE: x,
    THREAD_LIST_SYNC: x,
    LOAD_THREADS_SUCCESS: x,
    LOAD_ARCHIVED_THREADS_SUCCESS: x,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = A.A.getChannel(e);
            if (null == t || t.isPrivate()) continue;
            let r = S.default.getCurrentUser(),
                i = g.cc({ user: r, context: t });
            R[t.id] !== i && ((R[t.id] = i), w(t.getGuildId()), (n = !0));
        }
        return !!n && ((C += 1), n);
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.some((e) => null != e.thread);
    },
    SEARCH_MESSAGES_SUCCESS: G,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: G,
    THREAD_MEMBER_UPDATE: function (e) {
        return S.default.getCurrentUser()?.id === e.userId && (w(e.guildId), !0);
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        return !!(0, _.k)(e) && (w(e.guildId), !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return delete R[t.id], (C += 1), w(t.guild_id), !1;
    },
    GUILD_ROLE_CREATE: V,
    GUILD_ROLE_UPDATE: V,
    GUILD_ROLE_DELETE: V,
    LOGOUT: W,
    STAGE_INSTANCE_CREATE: F,
    STAGE_INSTANCE_UPDATE: F,
    STAGE_INSTANCE_DELETE: F,
    IMPERSONATE_UPDATE: B,
    IMPERSONATE_STOP: B,
});
