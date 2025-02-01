n.d(t, { Z: () => $ }), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(149765),
    o = n(442837),
    l = n(570140),
    u = n(160404),
    c = n(41776),
    d = n(427679),
    f = n(569471),
    _ = n(195663),
    p = n(131704),
    h = n(601964),
    m = n(598077),
    g = n(386438),
    E = n(700785),
    v = n(592125),
    y = n(271383),
    I = n(430824),
    T = n(594174),
    b = n(981631),
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
    O = 0;
function D(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = N[e];
    if (null != n) return n;
    let i = T.default.getCurrentUser();
    if (null == i) return E.Hn;
    let r = I.Z.getGuild(e);
    return null == r
        ? E.Hn
        : (N[e] = E.uB({
              user: i,
              context: r,
              checkElevated: t
          }));
}
function x(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = T.default.getCurrentUser();
    if (null == i) return E.Hn;
    let r = v.Z.getChannel(e);
    if (null == r) return E.Hn;
    let s = r.getGuildId(),
        o = null != s && (c.Z.isLurking(s) || (null === (t = y.ZP.getMember(s, i.id)) || void 0 === t ? void 0 : t.isPending));
    return !r.isScheduledForDeletion() && !o && a().isEmpty(r.permissionOverwrites) && null != s
        ? D(s)
        : E.uB({
              user: i,
              context: r,
              checkElevated: n
          });
}
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = C[e];
    return null != n ? n : (C[e] = x(e, t));
}
function P(e) {
    if (null != e) {
        var t;
        R[e] = (null !== (t = R[e]) && void 0 !== t ? t : 0) + 1;
    }
}
function w() {
    for (let e in ((N = {}), (C = {}), R)) R[e] += 1;
    O += 1;
}
function M() {
    w();
}
function k() {
    J();
}
function U() {
    w();
}
function G(e) {
    var t;
    let { user: n } = e;
    if (n.id !== (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    w();
}
function B(e) {
    let {
            channel: { id: t }
        } = e,
        n = v.Z.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let i = T.default.getCurrentUser(),
        r = E.uB({
            user: i,
            context: n
        });
    if (C[n.id] === r) return !1;
    (C[n.id] = r), (O += 1), P(n.getGuildId());
}
function Z(e) {
    let { channels: t } = e,
        n = !1;
    for (let { id: e } of t) {
        let t = v.Z.getChannel(e);
        if (null == t || t.isPrivate()) continue;
        let i = T.default.getCurrentUser(),
            r = E.uB({
                user: i,
                context: t
            });
        C[t.id] !== r && ((C[t.id] = r), P(t.getGuildId()), (n = !0));
    }
    return !!n && ((O += 1), n);
}
function F() {
    return !0;
}
function V(e) {
    var t;
    return (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (P(e.guildId), !0);
}
function j(e) {
    return !!(0, _.s)(e) && (P(e.guildId), !0);
}
function H(e) {
    let { messages: t } = e;
    return t.some((e) => null != e.thread);
}
function Y(e) {
    let { messages: t, threads: n } = e;
    return n.length > 0 || t.some((e) => e.some((e) => null != e.thread));
}
function W(e) {
    let { channel: t } = e;
    return delete C[t.id], (O += 1), P(t.guild_id), !1;
}
function K(e) {
    let { guildId: t } = e;
    delete N[t];
    let n = v.Z.getMutableBasicGuildChannelsForGuild(t);
    a().forEach(n, (e) => {
        delete C[e.id];
    }),
        (O += 1),
        P(t);
}
function z(e) {
    let { instance: t } = e,
        n = v.Z.getChannel(t.channel_id);
    if (null == n) return !1;
    let i = T.default.getCurrentUser(),
        r = E.uB({
            user: i,
            context: n
        });
    if (r === C[n.id]) return !1;
    (C[n.id] = r), (O += 1);
}
function q(e) {
    let { guildId: t } = e;
    delete N[t];
    let n = v.Z.getMutableBasicGuildChannelsForGuild(t);
    a().forEach(n, (e) => {
        delete C[e.id];
    }),
        (O += 1),
        P(t);
}
function Q(e, t, n, i) {
    let r = E.Hn;
    if (e instanceof p.Sf) {
        if (p.Ec.has(e.type)) {
            let r = v.Z.getChannel(e.parent_id);
            return null == r ? E.Hn : E.Og(e, Q(r, t, n, i), f.Z.hasJoined(e.id));
        }
        r = L(e.id);
    } else e instanceof h.ZP && (r = D(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== i
        ? E.uB({
              user: T.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: i
          })
        : r;
}
class X extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(T.default, I.Z, v.Z, y.ZP, f.Z, d.Z, u.Z);
    }
    getChannelPermissions(e) {
        return p.Ec.has(e.type) ? x(e.id) : L(e.id);
    }
    getGuildPermissions(e) {
        return D(e.id);
    }
    getGuildPermissionProps(e) {
        let t = T.default.getCurrentUser();
        return {
            canManageGuild: this.can(b.Plq.MANAGE_GUILD, e),
            canManageChannels: this.can(b.Plq.MANAGE_CHANNELS, e),
            canManageRoles: this.can(b.Plq.MANAGE_ROLES, e),
            canManageBans: this.can(b.Plq.BAN_MEMBERS, e),
            canManageNicknames: this.can(b.Plq.MANAGE_NICKNAMES, e),
            canManageGuildExpressions: this.can(b.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(b.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(b.Plq.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(b.Plq.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(b.Plq.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(b.Plq.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(b.Plq.ADMINISTRATOR, e),
            isOwner: null != t && e.isOwner(t),
            isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
            guild: e
        };
    }
    canAccessMemberSafetyPage(e) {
        return s.Db(D(e.id), S.N);
    }
    canAccessGuildSettings(e) {
        return s.Db(D(e.id), E.ym);
    }
    canWithPartialContext(e, t) {
        return 'channelId' in t && 'string' == typeof t.channelId ? this.can(e, v.Z.getChannel(t.channelId)) : 'guildId' in t && 'string' == typeof t.guildId && this.can(e, I.Z.getGuild(t.guildId));
    }
    can(e, t, n, i, r) {
        let a = Q(t, n, i, r);
        return s.e$(a, e);
    }
    canBasicChannel(e, t, n, i, r) {
        return 'basicPermissions' in t ? g.Z.has(t.basicPermissions, e) : s.e$(Q(t, n, i, r), g.Z.asBigFlag(e));
    }
    computePermissions(e, t, n, i) {
        return Q(e, t, n, i);
    }
    computeBasicPermissions(e) {
        return 'basicPermissions' in e ? e.basicPermissions : g.Z.asBasicFlag(Q(e));
    }
    canManageUser(e, t, n) {
        let i = t instanceof m.Z ? t.id : t;
        if (n.isOwner(i)) return !1;
        let r = T.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != r ? E.e9(n, r.id) : void 0,
            s = E.e9(n, i);
        return null != r && E.r6(n, r.id, a, s);
    }
    getHighestRole(e) {
        let t = T.default.getCurrentUser();
        return null != t ? E.e9(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let i = T.default.getCurrentUser(),
            r = u.Z.isViewingRoles(e.id);
        return E.r6(e, r ? void 0 : null == i ? void 0 : i.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            i = this.can(b.Plq.MANAGE_GUILD, e) && this.can(b.Plq.MANAGE_ROLES, e),
            r = this.isRoleHigher(e, n, t);
        return i && (r || t.id === (null == n ? void 0 : n.id));
    }
    getGuildVersion(e) {
        var t;
        return null !== (t = R[e]) && void 0 !== t ? t : 0;
    }
    getChannelsVersion() {
        return O;
    }
}
function J() {
    (C = {}), (N = {}), (R = {}), (O = 0);
}
A(X, 'displayName', 'PermissionStore');
let $ = new X(l.Z, {
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
    CHANNEL_CREATE: B,
    THREAD_CREATE: F,
    THREAD_UPDATE: F,
    THREAD_LIST_SYNC: F,
    LOAD_THREADS_SUCCESS: F,
    LOAD_ARCHIVED_THREADS_SUCCESS: F,
    CHANNEL_UPDATES: Z,
    LOAD_MESSAGES_SUCCESS: H,
    SEARCH_FINISH: Y,
    MOD_VIEW_SEARCH_FINISH: Y,
    THREAD_MEMBER_UPDATE: V,
    THREAD_MEMBERS_UPDATE: j,
    CHANNEL_DELETE: W,
    GUILD_ROLE_CREATE: K,
    GUILD_ROLE_UPDATE: K,
    GUILD_ROLE_DELETE: K,
    LOGOUT: J,
    STAGE_INSTANCE_CREATE: z,
    STAGE_INSTANCE_UPDATE: z,
    STAGE_INSTANCE_DELETE: z,
    IMPERSONATE_UPDATE: q,
    IMPERSONATE_STOP: q
});
