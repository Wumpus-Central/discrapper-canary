(n.d(t, { Z: () => ee }), n(388685));
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
    _ = n(195663),
    p = n(131704),
    h = n(601964),
    m = n(598077),
    g = n(386438),
    E = n(411198),
    b = n(700785),
    y = n(592125),
    O = n(271383),
    v = n(430824),
    I = n(594174),
    T = n(981631),
    S = n(478743);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let N = {},
    C = {},
    R = {},
    P = 0;
function w(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = N[e];
    if (null != n) return n;
    let r = I.default.getCurrentUser();
    if (null == r) return b.Hn;
    let i = v.Z.getGuild(e);
    return null == i
        ? b.Hn
        : (N[e] = b.uB({
              user: r,
              context: i,
              checkElevated: t
          }));
}
function D(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = I.default.getCurrentUser();
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
              checkElevated: n
          });
}
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = C[e];
    return null != n ? n : (C[e] = D(e, t));
}
function x(e) {
    if (null != e) {
        var t;
        R[e] = (null != (t = R[e]) ? t : 0) + 1;
    }
}
function k() {
    for (let e in ((N = {}), (C = {}), R)) R[e] += 1;
    P += 1;
}
function M() {
    k();
}
function j() {
    $();
}
function U() {
    k();
}
function G(e) {
    var t;
    let { user: n } = e;
    if (n.id !== (null == (t = I.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    k();
}
function B(e) {
    let {
            channel: { id: t }
        } = e,
        n = y.Z.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let r = I.default.getCurrentUser(),
        i = b.uB({
            user: r,
            context: n
        });
    if (C[n.id] === i) return !1;
    ((C[n.id] = i), (P += 1), x(n.getGuildId()));
}
function V(e) {
    let { channels: t } = e,
        n = !1;
    for (let { id: e } of t) {
        let t = y.Z.getChannel(e);
        if (null == t || t.isPrivate()) continue;
        let r = I.default.getCurrentUser(),
            i = b.uB({
                user: r,
                context: t
            });
        C[t.id] !== i && ((C[t.id] = i), x(t.getGuildId()), (n = !0));
    }
    return !!n && ((P += 1), n);
}
function F() {
    return !0;
}
function Z(e) {
    var t;
    return (null == (t = I.default.getCurrentUser()) ? void 0 : t.id) === e.userId && (x(e.guildId), !0);
}
function H(e) {
    return !!(0, _.s)(e) && (x(e.guildId), !0);
}
function Y(e) {
    let { messages: t } = e;
    return t.some((e) => null != e.thread);
}
function W(e) {
    let { messages: t, threads: n } = e;
    return n.length > 0 || t.some((e) => e.some((e) => null != e.thread));
}
function K(e) {
    let { channel: t } = e;
    return (delete C[t.id], (P += 1), x(t.guild_id), !1);
}
function z(e) {
    let { guildId: t } = e;
    delete N[t];
    let n = y.Z.getMutableBasicGuildChannelsForGuild(t);
    (a().forEach(n, (e) => {
        delete C[e.id];
    }),
        (P += 1),
        x(t));
}
function q(e) {
    let { instance: t } = e,
        n = y.Z.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = I.default.getCurrentUser(),
        i = b.uB({
            user: r,
            context: n
        });
    if (i === C[n.id]) return !1;
    ((C[n.id] = i), (P += 1));
}
function X(e) {
    let { guildId: t } = e;
    delete N[t];
    let n = y.Z.getMutableBasicGuildChannelsForGuild(t);
    (a().forEach(n, (e) => {
        delete C[e.id];
    }),
        (P += 1),
        x(t));
}
function Q(e, t, n, r) {
    let i = b.Hn;
    if (e instanceof p.Sf) {
        if (p.Ec.has(e.type)) {
            let i = y.Z.getChannel(e.parent_id);
            return null == i ? b.Hn : b.Og(e, Q(i, t, n, r), f.Z.hasJoined(e.id));
        }
        i = L(e.id);
    } else (0, E.lM)(e) && (i = w(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r
        ? b.uB({
              user: I.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: r
          })
        : i;
}
class J extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(I.default, v.Z, y.Z, O.ZP, f.Z, d.Z, c.Z);
    }
    getChannelPermissions(e) {
        return p.Ec.has(e.type) ? D(e.id) : L(e.id);
    }
    getGuildPermissions(e) {
        return w(e.id);
    }
    getGuildPermissionProps(e) {
        let t = I.default.getCurrentUser();
        return {
            canManageGuild: this.can(T.Plq.MANAGE_GUILD, e),
            canManageChannels: this.can(T.Plq.MANAGE_CHANNELS, e),
            canManageRoles: this.can(T.Plq.MANAGE_ROLES, e),
            canManageBans: this.can(T.Plq.BAN_MEMBERS, e),
            canManageNicknames: this.can(T.Plq.MANAGE_NICKNAMES, e),
            canManageGuildExpressions: this.can(T.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(T.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(T.Plq.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(T.Plq.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(T.Plq.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(T.Plq.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(T.Plq.ADMINISTRATOR, e),
            isOwner: null != t && (0, h.eM)(e, t),
            isOwnerWithRequiredMfaLevel: null != t && (0, h.yn)(e, t),
            guild: e
        };
    }
    canAccessMemberSafetyPage(e) {
        return o.Db(w(e.id), S.N);
    }
    canAccessGuildSettings(e) {
        return o.Db(w(e.id), b.ym);
    }
    canWithPartialContext(e, t) {
        return 'channelId' in t && 'string' == typeof t.channelId ? this.can(e, y.Z.getChannel(t.channelId)) : 'guildId' in t && 'string' == typeof t.guildId && this.can(e, v.Z.getGuild(t.guildId));
    }
    can(e, t, n, r, i) {
        let a = Q(t, n, r, i);
        return o.e$(a, e);
    }
    canBasicChannel(e, t, n, r, i) {
        return 'basicPermissions' in t ? g.Z.has(t.basicPermissions, e) : o.e$(Q(t, n, r, i), g.Z.asBigFlag(e));
    }
    computePermissions(e, t, n, r) {
        return Q(e, t, n, r);
    }
    computeBasicPermissions(e) {
        return 'basicPermissions' in e ? e.basicPermissions : g.Z.asBasicFlag(Q(e));
    }
    canManageUser(e, t, n) {
        let r = t instanceof m.Z ? t.id : t;
        if ((0, h.eM)(n, r)) return !1;
        let i = I.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != i ? b.e9(n, i.id) : void 0,
            o = b.e9(n, r);
        return null != i && b.r6(n, i.id, a, o);
    }
    getHighestRole(e) {
        let t = I.default.getCurrentUser();
        return null != t ? b.e9(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let r = I.default.getCurrentUser(),
            i = c.Z.isViewingRoles(e.id);
        return b.r6(e, i || null == r ? void 0 : r.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(T.Plq.MANAGE_GUILD, e) && this.can(T.Plq.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === (null == n ? void 0 : n.id));
    }
    getGuildVersion(e) {
        var t;
        return null != (t = R[e]) ? t : 0;
    }
    getChannelsVersion() {
        return P;
    }
}
function $() {
    ((C = {}), (N = {}), (R = {}), (P = 0));
}
A(J, 'displayName', 'PermissionStore');
let ee = new J(l.Z, {
    BACKGROUND_SYNC: M,
    CONNECTION_OPEN: M,
    OVERLAY_INITIALIZE: M,
    CACHE_LOADED: M,
    CACHE_LOADED_LAZY: M,
    CONNECTION_CLOSED: j,
    GUILD_CREATE: U,
    GUILD_UPDATE: U,
    GUILD_DELETE: U,
    GUILD_MEMBER_ADD: G,
    GUILD_MEMBER_UPDATE: G,
    CURRENT_USER_UPDATE: G,
    CHANNEL_CREATE: B,
    THREAD_CREATE: F,
    THREAD_UPDATE: F,
    THREAD_LIST_SYNC: F,
    LOAD_THREADS_SUCCESS: F,
    LOAD_ARCHIVED_THREADS_SUCCESS: F,
    CHANNEL_UPDATES: V,
    LOAD_MESSAGES_SUCCESS: Y,
    SEARCH_FINISH: W,
    MOD_VIEW_SEARCH_FINISH: W,
    THREAD_MEMBER_UPDATE: Z,
    THREAD_MEMBERS_UPDATE: H,
    CHANNEL_DELETE: K,
    GUILD_ROLE_CREATE: z,
    GUILD_ROLE_UPDATE: z,
    GUILD_ROLE_DELETE: z,
    LOGOUT: $,
    STAGE_INSTANCE_CREATE: q,
    STAGE_INSTANCE_UPDATE: q,
    STAGE_INSTANCE_DELETE: q,
    IMPERSONATE_UPDATE: X,
    IMPERSONATE_STOP: X
});
