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
    p = n(195663),
    _ = n(131704),
    h = n(601964),
    m = n(598077),
    g = n(386438),
    E = n(700785),
    v = n(592125),
    b = n(271383),
    y = n(430824),
    O = n(594174),
    S = n(981631),
    I = n(478743);
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
    let i = y.Z.getGuild(e);
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
    let i = v.Z.getChannel(e);
    if (null == i) return E.Hn;
    let a = i.getGuildId(),
        s = null != a && (u.Z.isLurking(a) || (null === (t = b.ZP.getMember(a, r.id)) || void 0 === t ? void 0 : t.isPending));
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
function x(e) {
    if (null != e) {
        var t;
        C[e] = (null !== (t = C[e]) && void 0 !== t ? t : 0) + 1;
    }
}
function L() {
    for (let e in ((N = {}), (A = {}), C)) C[e] += 1;
    R += 1;
}
function M() {
    L();
}
function k() {
    J();
}
function j() {
    L();
}
function U(e) {
    var t;
    let { user: n } = e;
    if (n.id !== (null === (t = O.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    L();
}
function G(e) {
    let {
            channel: { id: t }
        } = e,
        n = v.Z.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let r = O.default.getCurrentUser(),
        i = E.uB({
            user: r,
            context: n
        });
    if (A[n.id] === i) return !1;
    (A[n.id] = i), (R += 1), x(n.getGuildId());
}
function B(e) {
    let { channels: t } = e,
        n = !1;
    for (let { id: e } of t) {
        let t = v.Z.getChannel(e);
        if (null == t || t.isPrivate()) continue;
        let r = O.default.getCurrentUser(),
            i = E.uB({
                user: r,
                context: t
            });
        A[t.id] !== i && ((A[t.id] = i), x(t.getGuildId()), (n = !0));
    }
    return !!n && ((R += 1), n);
}
function Z() {
    return !0;
}
function F(e) {
    var t;
    return (null === (t = O.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (x(e.guildId), !0);
}
function V(e) {
    return !!(0, p.s)(e) && (x(e.guildId), !0);
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
    return delete A[t.id], (R += 1), x(t.guild_id), !1;
}
function K(e) {
    let { guildId: t } = e;
    delete N[t];
    let n = v.Z.getMutableBasicGuildChannelsForGuild(t);
    o().forEach(n, (e) => {
        delete A[e.id];
    }),
        (R += 1),
        x(t);
}
function z(e) {
    let { instance: t } = e,
        n = v.Z.getChannel(t.channel_id);
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
    let n = v.Z.getMutableBasicGuildChannelsForGuild(t);
    o().forEach(n, (e) => {
        delete A[e.id];
    }),
        (R += 1),
        x(t);
}
function Q(e, t, n, r) {
    let i = E.Hn;
    if (e instanceof _.Sf) {
        if (_.Ec.has(e.type)) {
            let i = v.Z.getChannel(e.parent_id);
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
        this.waitFor(O.default, y.Z, v.Z, b.ZP, f.Z, d.Z, c.Z);
    }
    getChannelPermissions(e) {
        return _.Ec.has(e.type) ? w(e.id) : D(e.id);
    }
    getGuildPermissions(e) {
        return P(e.id);
    }
    getGuildPermissionProps(e) {
        let t = O.default.getCurrentUser();
        return {
            canManageGuild: this.can(S.Plq.MANAGE_GUILD, e),
            canManageChannels: this.can(S.Plq.MANAGE_CHANNELS, e),
            canManageRoles: this.can(S.Plq.MANAGE_ROLES, e),
            canManageBans: this.can(S.Plq.BAN_MEMBERS, e),
            canManageNicknames: this.can(S.Plq.MANAGE_NICKNAMES, e),
            canManageGuildExpressions: this.can(S.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(S.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(S.Plq.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(S.Plq.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(S.Plq.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(S.Plq.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(S.Plq.ADMINISTRATOR, e),
            isOwner: null != t && e.isOwner(t),
            isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
            guild: e
        };
    }
    canAccessMemberSafetyPage(e) {
        return a.Db(P(e.id), I.N);
    }
    canAccessGuildSettings(e) {
        return a.Db(P(e.id), E.ym);
    }
    canWithPartialContext(e, t) {
        return 'channelId' in t && 'string' == typeof t.channelId ? this.can(e, v.Z.getChannel(t.channelId)) : 'guildId' in t && 'string' == typeof t.guildId && this.can(e, y.Z.getGuild(t.guildId));
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
        return E.r6(e, i ? void 0 : null == r ? void 0 : r.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(S.Plq.MANAGE_GUILD, e) && this.can(S.Plq.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === (null == n ? void 0 : n.id));
    }
    getGuildVersion(e) {
        var t;
        return null !== (t = C[e]) && void 0 !== t ? t : 0;
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
    THREAD_CREATE: Z,
    THREAD_UPDATE: Z,
    THREAD_LIST_SYNC: Z,
    LOAD_THREADS_SUCCESS: Z,
    LOAD_ARCHIVED_THREADS_SUCCESS: Z,
    CHANNEL_UPDATES: B,
    LOAD_MESSAGES_SUCCESS: H,
    SEARCH_FINISH: W,
    MOD_VIEW_SEARCH_FINISH: W,
    THREAD_MEMBER_UPDATE: F,
    THREAD_MEMBERS_UPDATE: V,
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
