n.d(t, { Z: () => $ }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(149765),
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
    E = n(700785),
    b = n(592125),
    y = n(271383),
    v = n(430824),
    O = n(594174),
    I = n(981631),
    S = n(478743);
function T(e, t, n) {
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
    A = {},
    C = {},
    R = 0;
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = N[e];
    if (null != n) return n;
    let r = O.default.getCurrentUser();
    if (null == r) return E.Hn;
    let i = v.Z.getGuild(e);
    return null == i
        ? E.Hn
        : (N[e] = E.uB({
              user: r,
              context: i,
              checkElevated: t
          }));
}
function w(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = O.default.getCurrentUser();
    if (null == r) return E.Hn;
    let i = b.Z.getChannel(e);
    if (null == i) return E.Hn;
    let a = i.getGuildId(),
        s = null != a && (u.Z.isLurking(a) || (null == (t = y.ZP.getMember(a, r.id)) ? void 0 : t.isPending));
    return !i.isScheduledForDeletion() && !s && o().isEmpty(i.permissionOverwrites) && null != a
        ? P(a)
        : E.uB({
              user: r,
              context: i,
              checkElevated: n
          });
}
function D(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = A[e];
    return null != n ? n : (A[e] = w(e, t));
}
function L(e) {
    if (null != e) {
        var t;
        C[e] = (null != (t = C[e]) ? t : 0) + 1;
    }
}
function x() {
    for (let e in ((N = {}), (A = {}), C)) C[e] += 1;
    R += 1;
}
function M() {
    x();
}
function k() {
    J();
}
function j() {
    x();
}
function U(e) {
    var t;
    let { user: n } = e;
    if (n.id !== (null == (t = O.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    x();
}
function G(e) {
    let {
            channel: { id: t }
        } = e,
        n = b.Z.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let r = O.default.getCurrentUser(),
        i = E.uB({
            user: r,
            context: n
        });
    if (A[n.id] === i) return !1;
    (A[n.id] = i), (R += 1), L(n.getGuildId());
}
function B(e) {
    let { channels: t } = e,
        n = !1;
    for (let { id: e } of t) {
        let t = b.Z.getChannel(e);
        if (null == t || t.isPrivate()) continue;
        let r = O.default.getCurrentUser(),
            i = E.uB({
                user: r,
                context: t
            });
        A[t.id] !== i && ((A[t.id] = i), L(t.getGuildId()), (n = !0));
    }
    return !!n && ((R += 1), n);
}
function F() {
    return !0;
}
function V(e) {
    var t;
    return (null == (t = O.default.getCurrentUser()) ? void 0 : t.id) === e.userId && (L(e.guildId), !0);
}
function Z(e) {
    return !!(0, _.s)(e) && (L(e.guildId), !0);
}
function H(e) {
    let { messages: t } = e;
    return t.some((e) => null != e.thread);
}
function W(e) {
    let { messages: t, threads: n } = e;
    return n.length > 0 || t.some((e) => e.some((e) => null != e.thread));
}
function Y(e) {
    let { channel: t } = e;
    return delete A[t.id], (R += 1), L(t.guild_id), !1;
}
function K(e) {
    let { guildId: t } = e;
    delete N[t];
    let n = b.Z.getMutableBasicGuildChannelsForGuild(t);
    o().forEach(n, (e) => {
        delete A[e.id];
    }),
        (R += 1),
        L(t);
}
function z(e) {
    let { instance: t } = e,
        n = b.Z.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = O.default.getCurrentUser(),
        i = E.uB({
            user: r,
            context: n
        });
    if (i === A[n.id]) return !1;
    (A[n.id] = i), (R += 1);
}
function q(e) {
    let { guildId: t } = e;
    delete N[t];
    let n = b.Z.getMutableBasicGuildChannelsForGuild(t);
    o().forEach(n, (e) => {
        delete A[e.id];
    }),
        (R += 1),
        L(t);
}
function Q(e, t, n, r) {
    let i = E.Hn;
    if (e instanceof p.Sf) {
        if (p.Ec.has(e.type)) {
            let i = b.Z.getChannel(e.parent_id);
            return null == i ? E.Hn : E.Og(e, Q(i, t, n, r), f.Z.hasJoined(e.id));
        }
        i = D(e.id);
    } else e instanceof h.ZP && (i = P(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r
        ? E.uB({
              user: O.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: r
          })
        : i;
}
class X extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(O.default, v.Z, b.Z, y.ZP, f.Z, d.Z, c.Z);
    }
    getChannelPermissions(e) {
        return p.Ec.has(e.type) ? w(e.id) : D(e.id);
    }
    getGuildPermissions(e) {
        return P(e.id);
    }
    getGuildPermissionProps(e) {
        let t = O.default.getCurrentUser();
        return {
            canManageGuild: this.can(I.Plq.MANAGE_GUILD, e),
            canManageChannels: this.can(I.Plq.MANAGE_CHANNELS, e),
            canManageRoles: this.can(I.Plq.MANAGE_ROLES, e),
            canManageBans: this.can(I.Plq.BAN_MEMBERS, e),
            canManageNicknames: this.can(I.Plq.MANAGE_NICKNAMES, e),
            canManageGuildExpressions: this.can(I.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(I.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(I.Plq.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(I.Plq.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(I.Plq.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(I.Plq.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(I.Plq.ADMINISTRATOR, e),
            isOwner: null != t && e.isOwner(t),
            isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
            guild: e
        };
    }
    canAccessMemberSafetyPage(e) {
        return a.Db(P(e.id), S.N);
    }
    canAccessGuildSettings(e) {
        return a.Db(P(e.id), E.ym);
    }
    canWithPartialContext(e, t) {
        return 'channelId' in t && 'string' == typeof t.channelId ? this.can(e, b.Z.getChannel(t.channelId)) : 'guildId' in t && 'string' == typeof t.guildId && this.can(e, v.Z.getGuild(t.guildId));
    }
    can(e, t, n, r, i) {
        let o = Q(t, n, r, i);
        return a.e$(o, e);
    }
    canBasicChannel(e, t, n, r, i) {
        return 'basicPermissions' in t ? g.Z.has(t.basicPermissions, e) : a.e$(Q(t, n, r, i), g.Z.asBigFlag(e));
    }
    computePermissions(e, t, n, r) {
        return Q(e, t, n, r);
    }
    computeBasicPermissions(e) {
        return 'basicPermissions' in e ? e.basicPermissions : g.Z.asBasicFlag(Q(e));
    }
    canManageUser(e, t, n) {
        let r = t instanceof m.Z ? t.id : t;
        if (n.isOwner(r)) return !1;
        let i = O.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let o = null != i ? E.e9(n, i.id) : void 0,
            a = E.e9(n, r);
        return null != i && E.r6(n, i.id, o, a);
    }
    getHighestRole(e) {
        let t = O.default.getCurrentUser();
        return null != t ? E.e9(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let r = O.default.getCurrentUser(),
            i = c.Z.isViewingRoles(e.id);
        return E.r6(e, i || null == r ? void 0 : r.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(I.Plq.MANAGE_GUILD, e) && this.can(I.Plq.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === (null == n ? void 0 : n.id));
    }
    getGuildVersion(e) {
        var t;
        return null != (t = C[e]) ? t : 0;
    }
    getChannelsVersion() {
        return R;
    }
}
function J() {
    (A = {}), (N = {}), (C = {}), (R = 0);
}
T(X, 'displayName', 'PermissionStore');
let $ = new X(l.Z, {
    BACKGROUND_SYNC: M,
    CONNECTION_OPEN: M,
    OVERLAY_INITIALIZE: M,
    CACHE_LOADED: M,
    CACHE_LOADED_LAZY: M,
    CONNECTION_CLOSED: k,
    GUILD_CREATE: j,
    GUILD_UPDATE: j,
    GUILD_DELETE: j,
    GUILD_MEMBER_ADD: U,
    GUILD_MEMBER_UPDATE: U,
    CURRENT_USER_UPDATE: U,
    CHANNEL_CREATE: G,
    THREAD_CREATE: F,
    THREAD_UPDATE: F,
    THREAD_LIST_SYNC: F,
    LOAD_THREADS_SUCCESS: F,
    LOAD_ARCHIVED_THREADS_SUCCESS: F,
    CHANNEL_UPDATES: B,
    LOAD_MESSAGES_SUCCESS: H,
    SEARCH_FINISH: W,
    MOD_VIEW_SEARCH_FINISH: W,
    THREAD_MEMBER_UPDATE: V,
    THREAD_MEMBERS_UPDATE: Z,
    CHANNEL_DELETE: Y,
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
