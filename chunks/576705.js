n.d(t, { A: () => Y });
var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(17928),
    l = n(228366),
    o = n(164956),
    d = n(857071),
    c = n(446600),
    u = n(152007),
    _ = n(882733),
    E = n(95701),
    A = n(260509),
    h = n(889227),
    I = n(799422),
    f = n(149790),
    p = n(488926),
    T = n(734057),
    m = n(696451),
    g = n(71393),
    S = n(287809),
    N = n(652215),
    C = n(402655);
let O = {},
    R = {},
    L = {},
    y = 0;
function D(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = O[e];
    if (null != n) return n;
    let i = S.default.getCurrentUser();
    if (null == i) return p.x3;
    let r = g.A.getGuild(e);
    return null == r ? p.x3 : (O[e] = p.cc({ user: i, context: r, checkElevated: t }));
}
function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = S.default.getCurrentUser();
    if (null == n) return p.x3;
    let i = T.A.getChannel(e);
    if (null == i) return p.x3;
    let a = i.getGuildId(),
        s = null != a && (d.A.isLurking(a) || m.Ay.getMember(a, n.id)?.isPending);
    return !i.isScheduledForDeletion() && !s && r().isEmpty(i.permissionOverwrites) && null != a
        ? D(a)
        : p.cc({ user: n, context: i, checkElevated: t });
}
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = R[e];
    return null != n ? n : (R[e] = v(e, t));
}
function M(e) {
    null != e && (L[e] = (L[e] ?? 0) + 1);
}
function P() {
    for (let e in ((O = {}), (R = {}), L)) L[e] += 1;
    y += 1;
}
function U() {
    P();
}
function w() {
    P();
}
function G(e) {
    let { user: t } = e;
    if (t.id !== S.default.getCurrentUser()?.id) return !1;
    P();
}
function x() {
    return !0;
}
function k(e) {
    let { data: t } = e;
    return t.some((e) => {
        let { messages: t, threads: n } = e;
        return n.length > 0 || t.some((e) => e.some((e) => null != e.thread));
    });
}
function F(e) {
    let { guildId: t } = e;
    delete O[t];
    let n = T.A.getMutableBasicGuildChannelsForGuild(t);
    r().forEach(n, (e) => {
        delete R[e.id];
    }),
        (y += 1),
        M(t);
}
function V(e) {
    let { instance: t } = e,
        n = T.A.getChannel(t.channel_id);
    if (null == n) return !1;
    let i = S.default.getCurrentUser(),
        r = p.cc({ user: i, context: n });
    if (r === R[n.id]) return !1;
    (R[n.id] = r), (y += 1);
}
function B(e) {
    let { guildId: t } = e;
    delete O[t];
    let n = T.A.getMutableBasicGuildChannelsForGuild(t);
    r().forEach(n, (e) => {
        delete R[e.id];
    }),
        (y += 1),
        M(t);
}
function H(e, t, n, i) {
    let r = p.x3;
    if (e instanceof E.YB) {
        if (E.Le.has(e.type)) {
            let r = T.A.getChannel(e.parent_id);
            return null == r ? p.x3 : p.TJ(e, H(r, t, n, i), u.A.hasJoined(e.id), m.Ay.isCurrentUserGuest(e.guild_id));
        }
        r = b(e.id);
    } else (0, f.fh)(e) && (r = D(e.id));
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
class j extends s.Ay.Store {
    static displayName = "PermissionStore";
    initialize() {
        this.waitFor(T.A, m.Ay, g.A, o.A, u.A, d.A, c.A, S.default);
    }
    getChannelPermissions(e) {
        return E.Le.has(e.type) ? v(e.id) : b(e.id);
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
            isOwner: null != t && (0, A.bM)(e, t),
            isOwnerWithRequiredMfaLevel: null != t && (0, A.ok)(e, t),
            guild: e,
        };
    }
    canAccessMemberSafetyPage(e) {
        return a.X8(D(e.id), C.M);
    }
    canAccessGuildSettings(e) {
        return a.X8(D(e.id), p.yC);
    }
    canWithPartialContext(e, t) {
        return "channelId" in t && "string" == typeof t.channelId
            ? this.can(e, T.A.getChannel(t.channelId))
            : "guildId" in t && "string" == typeof t.guildId && this.can(e, g.A.getGuild(t.guildId));
    }
    can(e, t, n, i, r) {
        let s = H(t, n, i, r);
        return a.zy(s, e);
    }
    canBasicChannel(e, t, n, i, r) {
        return "basicPermissions" in t ? I.A.has(t.basicPermissions, e) : a.zy(H(t, n, i, r), I.A.asBigFlag(e));
    }
    computePermissions(e, t, n, i) {
        return H(e, t, n, i);
    }
    computeBasicPermissions(e) {
        return "basicPermissions" in e ? e.basicPermissions : I.A.asBasicFlag(H(e));
    }
    canManageUser(e, t, n) {
        let i = t instanceof h.A ? t.id : t;
        if ((0, A.bM)(n, i)) return !1;
        let r = S.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != r ? p.HJ(n, r.id) : void 0,
            s = p.HJ(n, i);
        return null != r && p.wO(n, r.id, a, s);
    }
    getHighestRole(e) {
        let t = S.default.getCurrentUser();
        return null != t ? p.HJ(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let i = S.default.getCurrentUser(),
            r = o.A.isViewingRoles(e.id);
        return p.wO(e, r ? void 0 : i?.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            i = this.can(N.xBc.MANAGE_GUILD, e) && this.can(N.xBc.MANAGE_ROLES, e),
            r = this.isRoleHigher(e, n, t);
        return i && (r || t.id === n?.id);
    }
    getGuildVersion(e) {
        return L[e] ?? 0;
    }
    getChannelsVersion() {
        return y;
    }
}
function W() {
    (R = {}), (O = {}), (L = {}), (y = 0);
}
let Y = new j(l.h, {
    BACKGROUND_SYNC: U,
    CONNECTION_OPEN: U,
    OVERLAY_INITIALIZE: U,
    CACHE_LOADED: U,
    CACHE_LOADED_LAZY: U,
    CONNECTION_CLOSED: function () {
        W();
    },
    GUILD_CREATE: w,
    GUILD_UPDATE: w,
    GUILD_DELETE: w,
    GUILD_MEMBER_ADD: G,
    GUILD_MEMBER_UPDATE: G,
    CURRENT_USER_UPDATE: G,
    CHANNEL_CREATE: function (e) {
        let {
                channel: { id: t },
            } = e,
            n = T.A.getChannel(t);
        if (null == n || n.isPrivate()) return !1;
        let i = S.default.getCurrentUser(),
            r = p.cc({ user: i, context: n });
        if (R[n.id] === r) return !1;
        (R[n.id] = r), (y += 1), M(n.getGuildId());
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
            let t = T.A.getChannel(e);
            if (null == t || t.isPrivate()) continue;
            let i = S.default.getCurrentUser(),
                r = p.cc({ user: i, context: t });
            R[t.id] !== r && ((R[t.id] = r), M(t.getGuildId()), (n = !0));
        }
        return !!n && ((y += 1), n);
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.some((e) => null != e.thread);
    },
    SEARCH_MESSAGES_SUCCESS: k,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: k,
    THREAD_MEMBER_UPDATE: function (e) {
        return S.default.getCurrentUser()?.id === e.userId && (M(e.guildId), !0);
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        return !!(0, _.k)(e) && (M(e.guildId), !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return delete R[t.id], (y += 1), M(t.guild_id), !1;
    },
    GUILD_ROLE_CREATE: F,
    GUILD_ROLE_UPDATE: F,
    GUILD_ROLE_DELETE: F,
    LOGOUT: W,
    STAGE_INSTANCE_CREATE: V,
    STAGE_INSTANCE_UPDATE: V,
    STAGE_INSTANCE_DELETE: V,
    IMPERSONATE_UPDATE: B,
    IMPERSONATE_STOP: B,
});
