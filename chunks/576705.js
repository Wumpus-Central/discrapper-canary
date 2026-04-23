"use strict";
n.d(t, { A: () => Y });
var i = n(735438),
    r = n.n(i),
    s = n(136722),
    a = n(17928),
    o = n(228366),
    l = n(164956),
    d = n(857071),
    _ = n(446600),
    u = n(152007),
    c = n(882733),
    E = n(95701),
    h = n(260509),
    m = n(889227),
    f = n(799422),
    g = n(860689),
    p = n(488926),
    A = n(734057),
    I = n(696451),
    T = n(71393),
    S = n(287809),
    N = n(652215),
    C = n(402655);
let R = {},
    O = {},
    y = {},
    v = 0;
function D(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = R[e];
    if (null != n) return n;
    let i = S.default.getCurrentUser();
    if (null == i) return p.x3;
    let r = T.A.getGuild(e);
    return null == r ? p.x3 : (R[e] = p.cc({ user: i, context: r, checkElevated: t }));
}
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = S.default.getCurrentUser();
    if (null == n) return p.x3;
    let i = A.A.getChannel(e);
    if (null == i) return p.x3;
    let s = i.getGuildId(),
        a = null != s && (d.A.isLurking(s) || I.Ay.getMember(s, n.id)?.isPending);
    return !i.isScheduledForDeletion() && !a && r().isEmpty(i.permissionOverwrites) && null != s
        ? D(s)
        : p.cc({ user: n, context: i, checkElevated: t });
}
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = O[e];
    return null != n ? n : (O[e] = L(e, t));
}
function w(e) {
    null != e && (y[e] = (y[e] ?? 0) + 1);
}
function P() {
    for (let e in ((R = {}), (O = {}), y)) y[e] += 1;
    v += 1;
}
function k() {
    P();
}
function M() {
    P();
}
function U(e) {
    let { user: t } = e;
    if (t.id !== S.default.getCurrentUser()?.id) return !1;
    P();
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
    delete R[t];
    let n = A.A.getMutableBasicGuildChannelsForGuild(t);
    r().forEach(n, (e) => {
        delete O[e.id];
    }),
        (v += 1),
        w(t);
}
function F(e) {
    let { instance: t } = e,
        n = A.A.getChannel(t.channel_id);
    if (null == n) return !1;
    let i = S.default.getCurrentUser(),
        r = p.cc({ user: i, context: n });
    if (r === O[n.id]) return !1;
    (O[n.id] = r), (v += 1);
}
function B(e) {
    let { guildId: t } = e;
    delete R[t];
    let n = A.A.getMutableBasicGuildChannelsForGuild(t);
    r().forEach(n, (e) => {
        delete O[e.id];
    }),
        (v += 1),
        w(t);
}
function H(e, t, n, i) {
    let r = p.x3;
    if (e instanceof E.YB) {
        if (E.Le.has(e.type)) {
            let r = A.A.getChannel(e.parent_id);
            return null == r ? p.x3 : p.TJ(e, H(r, t, n, i), u.A.hasJoined(e.id), I.Ay.isCurrentUserGuest(e.guild_id));
        }
        r = b(e.id);
    } else (0, g.fh)(e) && (r = D(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== i
        ? p.cc({
              user: S.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: i,
          })
        : r;
}
class j extends a.Ay.Store {
    static displayName = "PermissionStore";
    initialize() {
        this.waitFor(A.A, I.Ay, T.A, l.A, u.A, d.A, _.A, S.default);
    }
    getChannelPermissions(e) {
        return E.Le.has(e.type) ? L(e.id) : b(e.id);
    }
    getGuildPermissions(e) {
        return D(e.id);
    }
    getGuildPermissionProps(e) {
        let t = S.default.getCurrentUser();
        return {
            canManageGuild: this.can(N.xBc.MANAGE_GUILD, e),
            canManageChannels: this.can(N.xBc.MANAGE_CHANNELS, e),
            canManageRoles: this.can(N.xBc.MANAGE_ROLES, e),
            canManageBans: this.can(N.xBc.BAN_MEMBERS, e),
            canManageNicknames: this.can(N.xBc.MANAGE_NICKNAMES, e),
            canManageGuildExpressions:
                this.can(N.xBc.MANAGE_GUILD_EXPRESSIONS, e) || this.can(N.xBc.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(N.xBc.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(N.xBc.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(N.xBc.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(N.xBc.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(N.xBc.ADMINISTRATOR, e),
            isOwner: null != t && (0, h.bM)(e, t),
            isOwnerWithRequiredMfaLevel: null != t && (0, h.ok)(e, t),
            guild: e,
        };
    }
    canAccessMemberSafetyPage(e) {
        return s.X8(D(e.id), C.M);
    }
    canAccessGuildSettings(e) {
        return s.X8(D(e.id), p.yC);
    }
    canWithPartialContext(e, t) {
        return "channelId" in t && "string" == typeof t.channelId
            ? this.can(e, A.A.getChannel(t.channelId))
            : "guildId" in t && "string" == typeof t.guildId && this.can(e, T.A.getGuild(t.guildId));
    }
    can(e, t, n, i, r) {
        let a = H(t, n, i, r);
        return s.zy(a, e);
    }
    canBasicChannel(e, t, n, i, r) {
        return "basicPermissions" in t ? f.A.has(t.basicPermissions, e) : s.zy(H(t, n, i, r), f.A.asBigFlag(e));
    }
    computePermissions(e, t, n, i) {
        return H(e, t, n, i);
    }
    computeBasicPermissions(e) {
        return "basicPermissions" in e ? e.basicPermissions : f.A.asBasicFlag(H(e));
    }
    canManageUser(e, t, n) {
        let i = t instanceof m.A ? t.id : t;
        if ((0, h.bM)(n, i)) return !1;
        let r = S.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let s = null != r ? p.HJ(n, r.id) : void 0,
            a = p.HJ(n, i);
        return null != r && p.wO(n, r.id, s, a);
    }
    getHighestRole(e) {
        let t = S.default.getCurrentUser();
        return null != t ? p.HJ(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let i = S.default.getCurrentUser(),
            r = l.A.isViewingRoles(e.id);
        return p.wO(e, r ? void 0 : i?.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            i = this.can(N.xBc.MANAGE_GUILD, e) && this.can(N.xBc.MANAGE_ROLES, e),
            r = this.isRoleHigher(e, n, t);
        return i && (r || t.id === n?.id);
    }
    getGuildVersion(e) {
        return y[e] ?? 0;
    }
    getChannelsVersion() {
        return v;
    }
}
function W() {
    (O = {}), (R = {}), (y = {}), (v = 0);
}
let Y = new j(o.h, {
    BACKGROUND_SYNC: k,
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    CACHE_LOADED: k,
    CACHE_LOADED_LAZY: k,
    CONNECTION_CLOSED: function () {
        W();
    },
    GUILD_CREATE: M,
    GUILD_UPDATE: M,
    GUILD_DELETE: M,
    GUILD_MEMBER_ADD: U,
    GUILD_MEMBER_UPDATE: U,
    CURRENT_USER_UPDATE: U,
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = A.A.getChannel(t);
        if (null == n || n.isPrivate()) return !1;
        let i = S.default.getCurrentUser(),
            r = p.cc({ user: i, context: n });
        if (O[n.id] === r) return !1;
        (O[n.id] = r), (v += 1), w(n.getGuildId());
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
            let i = S.default.getCurrentUser(),
                r = p.cc({ user: i, context: t });
            O[t.id] !== r && ((O[t.id] = r), w(t.getGuildId()), (n = !0));
        }
        return !!n && ((v += 1), n);
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
        return !!(0, c.k)(e) && (w(e.guildId), !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return delete O[t.id], (v += 1), w(t.guild_id), !1;
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
