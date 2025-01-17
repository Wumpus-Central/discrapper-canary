var i,
    a = r(47120);
var s = r(392711),
    o = r.n(s),
    l = r(149765),
    u = r(442837),
    c = r(570140),
    d = r(160404),
    f = r(41776),
    _ = r(427679),
    h = r(569471),
    p = r(195663),
    m = r(131704),
    g = r(601964),
    E = r(598077),
    v = r(386438),
    I = r(700785),
    T = r(592125),
    b = r(271383),
    y = r(430824),
    S = r(594174),
    A = r(981631),
    N = r(478743);
function C(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let R = {},
    O = {},
    D = {},
    L = 0;
function x(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = R[e];
    if (null != r) return r;
    let i = S.default.getCurrentUser();
    if (null == i) return I.Hn;
    let a = y.Z.getGuild(e);
    return null == a
        ? I.Hn
        : (R[e] = I.uB({
              user: i,
              context: a,
              checkElevated: n
          }));
}
function w(e) {
    var n;
    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = S.default.getCurrentUser();
    if (null == i) return I.Hn;
    let a = T.Z.getChannel(e);
    if (null == a) return I.Hn;
    let s = a.getGuildId(),
        l = null != s && (f.Z.isLurking(s) || (null === (n = b.ZP.getMember(s, i.id)) || void 0 === n ? void 0 : n.isPending));
    return !a.isScheduledForDeletion() && !l && o().isEmpty(a.permissionOverwrites) && null != s
        ? x(s)
        : I.uB({
              user: i,
              context: a,
              checkElevated: r
          });
}
function P(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = O[e];
    return null != r ? r : (O[e] = w(e, n));
}
function M(e) {
    if (null != e) {
        var n;
        D[e] = (null !== (n = D[e]) && void 0 !== n ? n : 0) + 1;
    }
}
function k() {
    for (let e in ((R = {}), (O = {}), D)) D[e] += 1;
    L += 1;
}
function U() {
    k();
}
function B() {
    ee();
}
function G() {
    k();
}
function Z(e) {
    var n;
    let { user: r } = e;
    if (r.id !== (null === (n = S.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return !1;
    k();
}
function F(e) {
    let {
            channel: { id: n }
        } = e,
        r = T.Z.getChannel(n);
    if (null == r || r.isPrivate()) return !1;
    let i = S.default.getCurrentUser(),
        a = I.uB({
            user: i,
            context: r
        });
    if (O[r.id] === a) return !1;
    (O[r.id] = a), (L += 1), M(r.getGuildId());
}
function V(e) {
    let { channels: n } = e,
        r = !1;
    for (let { id: e } of n) {
        let n = T.Z.getChannel(e);
        if (null == n || n.isPrivate()) continue;
        let i = S.default.getCurrentUser(),
            a = I.uB({
                user: i,
                context: n
            });
        if (O[n.id] !== a) (O[n.id] = a), M(n.getGuildId()), (r = !0);
    }
    return !!r && ((L += 1), r);
}
function j() {
    return !0;
}
function H(e) {
    var n;
    return (null === (n = S.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.userId && (M(e.guildId), !0);
}
function Y(e) {
    return !!(0, p.s)(e) && (M(e.guildId), !0);
}
function W(e) {
    let { messages: n } = e;
    return n.some((e) => null != e.thread);
}
function K(e) {
    let { messages: n, threads: r } = e;
    return !!(r.length > 0) || n.some((e) => e.some((e) => null != e.thread));
}
function z(e) {
    let { channel: n } = e;
    return delete O[n.id], (L += 1), M(n.guild_id), !1;
}
function q(e) {
    let { guildId: n } = e;
    delete R[n];
    let r = T.Z.getMutableBasicGuildChannelsForGuild(n);
    o().forEach(r, (e) => {
        delete O[e.id];
    }),
        (L += 1),
        M(n);
}
function Q(e) {
    let { instance: n } = e,
        r = T.Z.getChannel(n.channel_id);
    if (null == r) return !1;
    let i = S.default.getCurrentUser(),
        a = I.uB({
            user: i,
            context: r
        });
    if (a === O[r.id]) return !1;
    (O[r.id] = a), (L += 1);
}
function X(e) {
    let { guildId: n } = e;
    delete R[n];
    let r = T.Z.getMutableBasicGuildChannelsForGuild(n);
    o().forEach(r, (e) => {
        delete O[e.id];
    }),
        (L += 1),
        M(n);
}
function J(e, n, r, i) {
    let a = I.Hn;
    if (e instanceof m.Sf) {
        if (m.Ec.has(e.type)) {
            let a = T.Z.getChannel(e.parent_id);
            return null == a ? I.Hn : I.Og(e, J(a, n, r, i), h.Z.hasJoined(e.id));
        }
        a = P(e.id);
    } else e instanceof g.ZP && (a = x(e.id));
    return void 0 !== n || void 0 !== r || void 0 !== i
        ? I.uB({
              user: S.default.getCurrentUser(),
              context: e,
              overwrites: n,
              roles: r,
              checkElevated: !0,
              excludeGuildPermissions: i
          })
        : a;
}
class $ extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(S.default, y.Z, T.Z, b.ZP, h.Z, _.Z, d.Z);
    }
    getChannelPermissions(e) {
        return m.Ec.has(e.type) ? w(e.id) : P(e.id);
    }
    getGuildPermissions(e) {
        return x(e.id);
    }
    getGuildPermissionProps(e) {
        let n = S.default.getCurrentUser();
        return {
            canManageGuild: this.can(A.Plq.MANAGE_GUILD, e),
            canManageChannels: this.can(A.Plq.MANAGE_CHANNELS, e),
            canManageRoles: this.can(A.Plq.MANAGE_ROLES, e),
            canManageBans: this.can(A.Plq.BAN_MEMBERS, e),
            canManageNicknames: this.can(A.Plq.MANAGE_NICKNAMES, e),
            canManageGuildExpressions: this.can(A.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(A.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(A.Plq.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(A.Plq.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(A.Plq.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(A.Plq.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(A.Plq.ADMINISTRATOR, e),
            isOwner: null != n && e.isOwner(n),
            isOwnerWithRequiredMfaLevel: null != n && e.isOwnerWithRequiredMfaLevel(n),
            guild: e
        };
    }
    canAccessMemberSafetyPage(e) {
        return l.Db(x(e.id), N.N);
    }
    canAccessGuildSettings(e) {
        return l.Db(x(e.id), I.ym);
    }
    canWithPartialContext(e, n) {
        return 'channelId' in n && 'string' == typeof n.channelId ? this.can(e, T.Z.getChannel(n.channelId)) : 'guildId' in n && 'string' == typeof n.guildId && this.can(e, y.Z.getGuild(n.guildId));
    }
    can(e, n, r, i, a) {
        let s = J(n, r, i, a);
        return l.e$(s, e);
    }
    canBasicChannel(e, n, r, i, a) {
        return 'basicPermissions' in n ? v.Z.has(n.basicPermissions, e) : l.e$(J(n, r, i, a), v.Z.asBigFlag(e));
    }
    computePermissions(e, n, r, i) {
        return J(e, n, r, i);
    }
    computeBasicPermissions(e) {
        return 'basicPermissions' in e ? e.basicPermissions : v.Z.asBasicFlag(J(e));
    }
    canManageUser(e, n, r) {
        let i = n instanceof E.Z ? n.id : n;
        if (r.isOwner(i)) return !1;
        let a = S.default.getCurrentUser();
        if (!this.can(e, r)) return !1;
        let s = null != a ? I.e9(r, a.id) : void 0,
            o = I.e9(r, i);
        return null != a && I.r6(r, a.id, s, o);
    }
    getHighestRole(e) {
        let n = S.default.getCurrentUser();
        return null != n ? I.e9(e, n.id) : null;
    }
    isRoleHigher(e, n, r) {
        let i = S.default.getCurrentUser(),
            a = d.Z.isViewingRoles(e.id);
        return I.r6(e, a ? void 0 : null == i ? void 0 : i.id, n, r);
    }
    canImpersonateRole(e, n) {
        let r = this.getHighestRole(e),
            i = this.can(A.Plq.MANAGE_GUILD, e) && this.can(A.Plq.MANAGE_ROLES, e),
            a = this.isRoleHigher(e, r, n);
        return i && (a || n.id === (null == r ? void 0 : r.id));
    }
    getGuildVersion(e) {
        var n;
        return null !== (n = D[e]) && void 0 !== n ? n : 0;
    }
    getChannelsVersion() {
        return L;
    }
}
function ee() {
    (O = {}), (R = {}), (D = {}), (L = 0);
}
C($, 'displayName', 'PermissionStore'),
    (n.Z = new $(c.Z, {
        BACKGROUND_SYNC: U,
        CONNECTION_OPEN: U,
        OVERLAY_INITIALIZE: U,
        CACHE_LOADED: U,
        CACHE_LOADED_LAZY: U,
        CONNECTION_CLOSED: B,
        GUILD_CREATE: G,
        GUILD_UPDATE: G,
        GUILD_DELETE: G,
        GUILD_MEMBER_ADD: Z,
        GUILD_MEMBER_UPDATE: Z,
        CURRENT_USER_UPDATE: Z,
        CHANNEL_CREATE: F,
        THREAD_CREATE: j,
        THREAD_UPDATE: j,
        THREAD_LIST_SYNC: j,
        LOAD_THREADS_SUCCESS: j,
        LOAD_ARCHIVED_THREADS_SUCCESS: j,
        CHANNEL_UPDATES: V,
        LOAD_MESSAGES_SUCCESS: W,
        SEARCH_FINISH: K,
        MOD_VIEW_SEARCH_FINISH: K,
        THREAD_MEMBER_UPDATE: H,
        THREAD_MEMBERS_UPDATE: Y,
        CHANNEL_DELETE: z,
        GUILD_ROLE_CREATE: q,
        GUILD_ROLE_UPDATE: q,
        GUILD_ROLE_DELETE: q,
        LOGOUT: ee,
        STAGE_INSTANCE_CREATE: Q,
        STAGE_INSTANCE_UPDATE: Q,
        STAGE_INSTANCE_DELETE: Q,
        IMPERSONATE_UPDATE: X,
        IMPERSONATE_STOP: X
    }));
