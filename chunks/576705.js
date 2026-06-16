"use strict";
n.d(t, { A: () => W });
var i = n(735438),
    r = n.n(i),
    s = n(136722),
    a = n(17928),
    o = n(228366),
    l = n(164956),
    u = n(857071),
    c = n(446600),
    d = n(152007),
    _ = n(882733),
    h = n(95701),
    f = n(260509),
    p = n(889227),
    E = n(799422),
    m = n(860689),
    g = n(488926),
    A = n(734057),
    I = n(696451),
    T = n(71393),
    S = n(287809),
    y = n(652215),
    C = n(402655);
let N = {},
    v = {},
    R = {},
    O = 0;
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = N[e];
    if (null != n) return n;
    let i = S.default.getCurrentUser();
    if (null == i) return g.x3;
    let r = T.A.getGuild(e);
    return null == r ? g.x3 : (N[e] = g.cc({ user: i, context: r, checkElevated: t }));
}
function D(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = S.default.getCurrentUser();
    if (null == n) return g.x3;
    let i = A.A.getChannel(e);
    if (null == i) return g.x3;
    let s = i.getGuildId(),
        a = null != s && (u.A.isLurking(s) || I.Ay.getMember(s, n.id)?.isPending);
    return !i.isScheduledForDeletion() && !a && r().isEmpty(i.permissionOverwrites) && null != s
        ? b(s)
        : g.cc({ user: n, context: i, checkElevated: t });
}
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = v[e];
    return null != n ? n : (v[e] = D(e, t));
}
function w(e) {
    null != e && (R[e] = (R[e] ?? 0) + 1);
}
function M() {
    for (let e in ((N = {}), (v = {}), R)) R[e] += 1;
    O += 1;
}
function P() {
    M();
}
function x() {
    M();
}
function k(e) {
    let { user: t } = e;
    if (t.id !== S.default.getCurrentUser()?.id) return !1;
    M();
}
function U() {
    return !0;
}
function G(e) {
    let { data: t } = e;
    return t.some((e) => {
        let { messages: t, threads: n } = e;
        return n.length > 0 || t.some((e) => e.some((e) => null != e.thread));
    });
}
function F(e) {
    let { guildId: t } = e;
    delete N[t];
    let n = A.A.getMutableBasicGuildChannelsForGuild(t);
    r().forEach(n, (e) => {
        delete v[e.id];
    }),
        (O += 1),
        w(t);
}
function V(e) {
    let { instance: t } = e,
        n = A.A.getChannel(t.channel_id);
    if (null == n) return !1;
    let i = S.default.getCurrentUser(),
        r = g.cc({ user: i, context: n });
    if (r === v[n.id]) return !1;
    (v[n.id] = r), (O += 1);
}
function B(e) {
    let { guildId: t } = e;
    delete N[t];
    let n = A.A.getMutableBasicGuildChannelsForGuild(t);
    r().forEach(n, (e) => {
        delete v[e.id];
    }),
        (O += 1),
        w(t);
}
function j(e, t, n, i) {
    let r = g.x3;
    if (e instanceof h.YB) {
        if (h.Le.has(e.type)) {
            let r = A.A.getChannel(e.parent_id);
            return null == r ? g.x3 : g.TJ(e, j(r, t, n, i), d.A.hasJoined(e.id), I.Ay.isCurrentUserGuest(e.guild_id));
        }
        r = L(e.id);
    } else (0, m.fh)(e) && (r = b(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== i
        ? g.cc({
              user: S.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: i,
          })
        : r;
}
class H extends a.Ay.Store {
    static displayName = "PermissionStore";
    initialize() {
        this.waitFor(A.A, I.Ay, T.A, l.A, d.A, u.A, c.A, S.default);
    }
    getChannelPermissions(e) {
        return h.Le.has(e.type) ? D(e.id) : L(e.id);
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
            isOwner: null != t && (0, f.bM)(e, t),
            isOwnerWithRequiredMfaLevel: null != t && (0, f.ok)(e, t),
            guild: e,
        };
    }
    canAccessMemberSafetyPage(e) {
        return s.X8(b(e.id), C.M);
    }
    canAccessGuildSettings(e) {
        return s.X8(b(e.id), g.yC);
    }
    canWithPartialContext(e, t) {
        return "channelId" in t && "string" == typeof t.channelId
            ? this.can(e, A.A.getChannel(t.channelId))
            : "guildId" in t && "string" == typeof t.guildId && this.can(e, T.A.getGuild(t.guildId));
    }
    can(e, t, n, i, r) {
        let a = j(t, n, i, r);
        return s.zy(a, e);
    }
    canBasicChannel(e, t, n, i, r) {
        return "basicPermissions" in t ? E.A.has(t.basicPermissions, e) : s.zy(j(t, n, i, r), E.A.asBigFlag(e));
    }
    computePermissions(e, t, n, i) {
        return j(e, t, n, i);
    }
    computeBasicPermissions(e) {
        return "basicPermissions" in e ? e.basicPermissions : E.A.asBasicFlag(j(e));
    }
    canManageUser(e, t, n) {
        let i = t instanceof p.A ? t.id : t;
        if ((0, f.bM)(n, i)) return !1;
        let r = S.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let s = null != r ? g.HJ(n, r.id) : void 0,
            a = g.HJ(n, i);
        return null != r && g.wO(n, r.id, s, a);
    }
    getHighestRole(e) {
        let t = S.default.getCurrentUser();
        return null != t ? g.HJ(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let i = S.default.getCurrentUser(),
            r = l.A.isViewingRoles(e.id);
        return g.wO(e, r ? void 0 : i?.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            i = this.can(y.xBc.MANAGE_GUILD, e) && this.can(y.xBc.MANAGE_ROLES, e),
            r = this.isRoleHigher(e, n, t);
        return i && (r || t.id === n?.id);
    }
    getGuildVersion(e) {
        return R[e] ?? 0;
    }
    getChannelsVersion() {
        return O;
    }
}
function Y() {
    (v = {}), (N = {}), (R = {}), (O = 0);
}
let W = new H(o.h, {
    BACKGROUND_SYNC: P,
    CONNECTION_OPEN: P,
    OVERLAY_INITIALIZE: P,
    CACHE_LOADED: P,
    CACHE_LOADED_LAZY: P,
    CONNECTION_CLOSED: function () {
        Y();
    },
    GUILD_CREATE: x,
    GUILD_UPDATE: x,
    GUILD_DELETE: x,
    GUILD_MEMBER_ADD: k,
    GUILD_MEMBER_UPDATE: k,
    CURRENT_USER_UPDATE: k,
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = A.A.getChannel(t);
        if (null == n || n.isPrivate()) return !1;
        let i = S.default.getCurrentUser(),
            r = g.cc({ user: i, context: n });
        if (v[n.id] === r) return !1;
        (v[n.id] = r), (O += 1), w(n.getGuildId());
    },
    THREAD_CREATE: U,
    THREAD_UPDATE: U,
    THREAD_LIST_SYNC: U,
    LOAD_THREADS_SUCCESS: U,
    LOAD_ARCHIVED_THREADS_SUCCESS: U,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { id: e } of t) {
            let t = A.A.getChannel(e);
            if (null == t || t.isPrivate()) continue;
            let i = S.default.getCurrentUser(),
                r = g.cc({ user: i, context: t });
            v[t.id] !== r && ((v[t.id] = r), w(t.getGuildId()), (n = !0));
        }
        return !!n && ((O += 1), n);
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
        return delete v[t.id], (O += 1), w(t.guild_id), !1;
    },
    GUILD_ROLE_CREATE: F,
    GUILD_ROLE_UPDATE: F,
    GUILD_ROLE_DELETE: F,
    LOGOUT: Y,
    STAGE_INSTANCE_CREATE: V,
    STAGE_INSTANCE_UPDATE: V,
    STAGE_INSTANCE_DELETE: V,
    IMPERSONATE_UPDATE: B,
    IMPERSONATE_STOP: B,
});
