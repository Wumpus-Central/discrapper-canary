n.d(t, { Z: () => ee }), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(149765),
    s = n(442837),
    l = n(570140),
    c = n(160404),
    u = n(41776),
    d = n(427679),
    f = n(569471),
    p = n(195663),
    _ = n(131704),
    m = n(601964),
    h = n(598077),
    g = n(386438),
    E = n(411198),
    b = n(700785),
    y = n(592125),
    O = n(271383),
    v = n(430824),
    S = n(594174),
    I = n(981631),
    T = n(478743);
function C(e, t, n) {
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
let A = {},
    N = {},
    P = {},
    R = 0;
function w(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = A[e];
    if (null != n) return n;
    let r = S.default.getCurrentUser();
    if (null == r) return b.Hn;
    let i = v.Z.getGuild(e);
    return null == i
        ? b.Hn
        : (A[e] = b.uB({
              user: r,
              context: i,
              checkElevated: t,
          }));
}
function D(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = S.default.getCurrentUser();
    if (null == r) return b.Hn;
    let i = y.Z.getChannel(e);
    if (null == i) return b.Hn;
    let o = i.getGuildId(),
        s = null != o && (u.Z.isLurking(o) || (null == (t = O.ZP.getMember(o, r.id)) ? void 0 : t.isPending));
    return !i.isScheduledForDeletion() && !s && a().isEmpty(i.permissionOverwrites) && null != o
        ? w(o)
        : b.uB({
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
        P[e] = (null != (t = P[e]) ? t : 0) + 1;
    }
}
function j() {
    for (let e in ((A = {}), (N = {}), P)) P[e] += 1;
    R += 1;
}
function M() {
    j();
}
function k() {
    $();
}
function U() {
    j();
}
function G(e) {
    var t;
    let { user: n } = e;
    if (n.id !== (null == (t = S.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    j();
}
function Z(e) {
    let {
            channel: { id: t },
        } = e,
        n = y.Z.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let r = S.default.getCurrentUser(),
        i = b.uB({
            user: r,
            context: n,
        });
    if (N[n.id] === i) return !1;
    (N[n.id] = i), (R += 1), L(n.getGuildId());
}
function F(e) {
    let { channels: t } = e,
        n = !1;
    for (let { id: e } of t) {
        let t = y.Z.getChannel(e);
        if (null == t || t.isPrivate()) continue;
        let r = S.default.getCurrentUser(),
            i = b.uB({
                user: r,
                context: t,
            });
        N[t.id] !== i && ((N[t.id] = i), L(t.getGuildId()), (n = !0));
    }
    return !!n && ((R += 1), n);
}
function B() {
    return !0;
}
function V(e) {
    var t;
    return (null == (t = S.default.getCurrentUser()) ? void 0 : t.id) === e.userId && (L(e.guildId), !0);
}
function H(e) {
    return !!(0, p.s)(e) && (L(e.guildId), !0);
}
function Y(e) {
    let { messages: t } = e;
    return t.some((e) => null != e.thread);
}
function W(e) {
    let { data: t } = e;
    return t.some((e) => {
        let { messages: t, threads: n } = e;
        return n.length > 0 || t.some((e) => e.some((e) => null != e.thread));
    });
}
function K(e) {
    let { channel: t } = e;
    return delete N[t.id], (R += 1), L(t.guild_id), !1;
}
function z(e) {
    let { guildId: t } = e;
    delete A[t];
    let n = y.Z.getMutableBasicGuildChannelsForGuild(t);
    a().forEach(n, (e) => {
        delete N[e.id];
    }),
        (R += 1),
        L(t);
}
function q(e) {
    let { instance: t } = e,
        n = y.Z.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = S.default.getCurrentUser(),
        i = b.uB({
            user: r,
            context: n,
        });
    if (i === N[n.id]) return !1;
    (N[n.id] = i), (R += 1);
}
function Q(e) {
    let { guildId: t } = e;
    delete A[t];
    let n = y.Z.getMutableBasicGuildChannelsForGuild(t);
    a().forEach(n, (e) => {
        delete N[e.id];
    }),
        (R += 1),
        L(t);
}
function X(e, t, n, r) {
    let i = b.Hn;
    if (e instanceof _.Sf) {
        if (_.Ec.has(e.type)) {
            let i = y.Z.getChannel(e.parent_id);
            return null == i ? b.Hn : b.Og(e, X(i, t, n, r), f.Z.hasJoined(e.id), O.ZP.isCurrentUserGuest(e.guild_id));
        }
        i = x(e.id);
    } else (0, E.lM)(e) && (i = w(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r
        ? b.uB({
              user: S.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: r,
          })
        : i;
}
class J extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(y.Z, O.ZP, v.Z, c.Z, f.Z, u.Z, d.Z, S.default);
    }
    getChannelPermissions(e) {
        return _.Ec.has(e.type) ? D(e.id) : x(e.id);
    }
    getGuildPermissions(e) {
        return w(e.id);
    }
    getGuildPermissionProps(e) {
        let t = S.default.getCurrentUser();
        return {
            canManageGuild: this.can(I.Plq.MANAGE_GUILD, e),
            canManageChannels: this.can(I.Plq.MANAGE_CHANNELS, e),
            canManageRoles: this.can(I.Plq.MANAGE_ROLES, e),
            canManageBans: this.can(I.Plq.BAN_MEMBERS, e),
            canManageNicknames: this.can(I.Plq.MANAGE_NICKNAMES, e),
            canManageGuildExpressions:
                this.can(I.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(I.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(I.Plq.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(I.Plq.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(I.Plq.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(I.Plq.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(I.Plq.ADMINISTRATOR, e),
            isOwner: null != t && (0, m.eM)(e, t),
            isOwnerWithRequiredMfaLevel: null != t && (0, m.yn)(e, t),
            guild: e,
        };
    }
    canAccessMemberSafetyPage(e) {
        return o.Db(w(e.id), T.N);
    }
    canAccessGuildSettings(e) {
        return o.Db(w(e.id), b.ym);
    }
    canWithPartialContext(e, t) {
        return "channelId" in t && "string" == typeof t.channelId
            ? this.can(e, y.Z.getChannel(t.channelId))
            : "guildId" in t && "string" == typeof t.guildId && this.can(e, v.Z.getGuild(t.guildId));
    }
    can(e, t, n, r, i) {
        let a = X(t, n, r, i);
        return o.e$(a, e);
    }
    canBasicChannel(e, t, n, r, i) {
        return "basicPermissions" in t ? g.Z.has(t.basicPermissions, e) : o.e$(X(t, n, r, i), g.Z.asBigFlag(e));
    }
    computePermissions(e, t, n, r) {
        return X(e, t, n, r);
    }
    computeBasicPermissions(e) {
        return "basicPermissions" in e ? e.basicPermissions : g.Z.asBasicFlag(X(e));
    }
    canManageUser(e, t, n) {
        let r = t instanceof h.Z ? t.id : t;
        if ((0, m.eM)(n, r)) return !1;
        let i = S.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != i ? b.e9(n, i.id) : void 0,
            o = b.e9(n, r);
        return null != i && b.r6(n, i.id, a, o);
    }
    getHighestRole(e) {
        let t = S.default.getCurrentUser();
        return null != t ? b.e9(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let r = S.default.getCurrentUser(),
            i = c.Z.isViewingRoles(e.id);
        return b.r6(e, i || null == r ? void 0 : r.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(I.Plq.MANAGE_GUILD, e) && this.can(I.Plq.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === (null == n ? void 0 : n.id));
    }
    getGuildVersion(e) {
        var t;
        return null != (t = P[e]) ? t : 0;
    }
    getChannelsVersion() {
        return R;
    }
}
function $() {
    (N = {}), (A = {}), (P = {}), (R = 0);
}
C(J, "displayName", "PermissionStore");
let ee = new J(l.Z, {
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
    CHANNEL_CREATE: Z,
    THREAD_CREATE: B,
    THREAD_UPDATE: B,
    THREAD_LIST_SYNC: B,
    LOAD_THREADS_SUCCESS: B,
    LOAD_ARCHIVED_THREADS_SUCCESS: B,
    CHANNEL_UPDATES: F,
    LOAD_MESSAGES_SUCCESS: Y,
    SEARCH_MESSAGES_SUCCESS: W,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: W,
    THREAD_MEMBER_UPDATE: V,
    THREAD_MEMBERS_UPDATE: H,
    CHANNEL_DELETE: K,
    GUILD_ROLE_CREATE: z,
    GUILD_ROLE_UPDATE: z,
    GUILD_ROLE_DELETE: z,
    LOGOUT: $,
    STAGE_INSTANCE_CREATE: q,
    STAGE_INSTANCE_UPDATE: q,
    STAGE_INSTANCE_DELETE: q,
    IMPERSONATE_UPDATE: Q,
    IMPERSONATE_STOP: Q,
});
