n.d(t, { Z: () => et }), n(47120), n(789020);
var i = n(392711),
    r = n.n(i),
    a = n(846519),
    s = n(726542),
    o = n(706454),
    l = n(598077),
    u = n(314897),
    c = n(430824),
    d = n(158776),
    f = n(412788),
    _ = n(771845),
    p = n(291175),
    h = n(215023),
    m = n(388032);
function g(e, t, n) {
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
let E = Symbol('NO GUILD ID'),
    v = new Map(),
    y = new Set(),
    I = 'premium',
    T = 'guild_booster_lvl',
    b = 2147483647,
    S = new Map(),
    A = new Map(),
    N = new Map(),
    C = new Map(),
    R = new Map(),
    O = new Map(),
    D = new Map(),
    L = !1;
function x(e) {
    let t = S.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + h.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), N.delete(e), ee.emitChange();
    else {
        let t = N.get(e);
        if (null == t) return;
        t.start(Math.min(b, n), () => x(e));
    }
}
function P(e, t) {
    let n = A.get(e);
    if (null == n) return;
    let i = n.get(t);
    if ((null == i ? void 0 : i.profileEffectExpiresAt) == null) return;
    let r = C.get(e),
        a = 1000 * i.profileEffectExpiresAt + h.Cm - Date.now();
    if (a <= 0)
        n.set(t, {
            ...i,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            null != r && r.delete(t),
            ee.emitChange();
    else {
        if (null == r) return;
        let n = r.get(t);
        if (null == n) return;
        n.start(Math.min(b, a), () => P(e, t));
    }
}
function w() {
    v.clear(), y.clear(), S.clear(), A.clear(), R.clear(), O.clear(), D.clear(), (L = !1);
}
function M(e) {
    let { userId: t } = e;
    y.add(t);
}
function k(e) {
    let { userId: t } = e;
    y.delete(t);
}
function U(e) {
    return r()(e)
        .map((e) => ({
            key: e.id,
            user: new l.Z(e),
            status: d.Z.getStatus(e.id)
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function G(e) {
    y.delete(e.userId), R.set(e.userId, U(e.mutualFriends)), O.set(e.userId, e.mutualFriends.length);
}
function B(e) {
    var t, n, i, r, o, l, u, d, f, h, g, y, b, L, w, M, k, G, B, Z, F, V, j, H, Y, W, K;
    let z = null !== (w = null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id) && void 0 !== w ? w : E;
    if ((null === (n = v.get(e.user.id)) || void 0 === n || n.delete(z), null != e.mutual_guilds)) {
        let t = {};
        e.mutual_guilds.forEach((e) => {
            let { id: n, nick: i } = e,
                r = c.Z.getGuild(n);
            null != r &&
                (t[n] = {
                    guild: r,
                    nick: i
                });
        }),
            D.set(
                e.user.id,
                _.ZP.getFlattenedGuildIds()
                    .filter((e) => null != t[e])
                    .map((e) => ({
                        guild: t[e].guild,
                        nick: t[e].nick
                    }))
            );
    }
    if (null != e.mutual_friends_count) {
        let t = e.mutual_friends_count;
        O.set(e.user.id, t);
    }
    null != e.mutual_friends && (R.set(e.user.id, U(e.mutual_friends)), O.set(e.user.id, e.mutual_friends.length));
    let q = null != e.premium_since ? new Date(e.premium_since) : null,
        Q = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        X = e.application;
    if (
        (S.set(e.user.id, {
            userId: e.user.id,
            banner: null === (i = e.user_profile) || void 0 === i ? void 0 : i.banner,
            accentColor: null === (r = e.user_profile) || void 0 === r ? void 0 : r.accent_color,
            themeColors: null === (o = e.user_profile) || void 0 === o ? void 0 : o.theme_colors,
            popoutAnimationParticleType: null === (l = e.user_profile) || void 0 === l ? void 0 : l.popout_animation_particle_type,
            bio: null !== (M = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== M ? M : '',
            profileEffectId: null === (f = e.user_profile) || void 0 === f ? void 0 : null === (d = f.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (g = e.user_profile) || void 0 === g ? void 0 : null === (h = g.profile_effect) || void 0 === h ? void 0 : h.expires_at,
            pronouns: null !== (k = null === (y = e.user_profile) || void 0 === y ? void 0 : y.pronouns) && void 0 !== k ? k : '',
            connectedAccounts: null !== (G = e.connected_accounts.filter((e) => s.Z.isSupported(e.type))) && void 0 !== G ? G : [],
            applicationRoleConnections: null !== (B = e.application_role_connections) && void 0 !== B ? B : [],
            premiumSince: q,
            premiumType: e.premium_type,
            premiumGuildSince: Q,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != X
                    ? {
                          id: X.id,
                          primarySkuId: X.primary_sku_id,
                          customInstallUrl: X.custom_install_url,
                          installParams: X.install_params,
                          integrationTypesConfig: X.integration_types_config,
                          flags: X.flags,
                          popularApplicationCommandIds: X.popular_application_command_ids,
                          storefront_available: X.storefront_available,
                          name: X.name
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) => {
                          let t = (0, p.fv)(e.id);
                          if ((e.id === I || null != t) && null != q) {
                              let n = m.intl.formatToPlainString(m.t['8zbGNT'], { date: q });
                              return (
                                  null != t && (n = 2 === t.badgeVersion ? m.intl.formatToPlainString(m.t.Hu4jfn, { date: q }) : (0, p.sZ)(t.id, q)),
                                  {
                                      ...e,
                                      description: n
                                  }
                              );
                          }
                          return e.id.startsWith(T) && null != Q
                              ? {
                                    ...e,
                                    description: m.intl.formatToPlainString(m.t.IWkAq6, { date: Q })
                                }
                              : e;
                      })
                    : e.badges
        }),
        (null === (L = e.user_profile) || void 0 === L ? void 0 : null === (b = L.profile_effect) || void 0 === b ? void 0 : b.expires_at) != null)
    ) {
        let t = new a.V7();
        N.set(e.user.id, t), x(e.user.id);
    }
    if (null != e.guild_member_profile) {
        let t = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (Z = e.guild_member_profile) || void 0 === Z ? void 0 : Z.theme_colors,
                popoutAnimationParticleType: null === (F = e.guild_member_profile) || void 0 === F ? void 0 : F.popout_animation_particle_type,
                profileEffectId: null === (j = e.guild_member_profile) || void 0 === j ? void 0 : null === (V = j.profile_effect) || void 0 === V ? void 0 : V.id,
                profileEffectExpiresAt: null === (Y = e.guild_member_profile) || void 0 === Y ? void 0 : null === (H = Y.profile_effect) || void 0 === H ? void 0 : H.expires_at,
                bio: e.guild_member_profile.bio,
                pronouns: e.guild_member_profile.pronouns,
                badges: e.guild_badges
            },
            n = A.get(e.user.id);
        if (null != n) n.set(e.guild_member_profile.guild_id, t);
        else {
            let n = new Map();
            n.set(e.guild_member_profile.guild_id, t), A.set(e.user.id, n);
        }
        if ((null === (K = e.guild_member_profile) || void 0 === K ? void 0 : null === (W = K.profile_effect) || void 0 === W ? void 0 : W.expires_at) != null) {
            let t = new a.V7(),
                n = C.get(e.user.id);
            if (null != n) n.set(e.guild_member_profile.guild_id, t);
            else {
                let n = new Map();
                n.set(e.guild_member_profile.guild_id, t), C.set(e.user.id, n);
            }
            P(e.user.id, e.guild_member_profile.guild_id);
        }
    }
}
function Z(e) {
    let { userId: t, guildId: n } = e,
        i = null != n ? n : E,
        r = v.get(t);
    if (null != r) r.add(i);
    else {
        let e = new Set();
        e.add(i), v.set(t, e);
    }
}
function F(e) {
    var t, n;
    let { userId: i, guildId: r, apiError: a } = e;
    null === (t = v.get(i)) || void 0 === t || t.delete(null != r ? r : E);
    let s =
        null !== (n = S.get(i)) && void 0 !== n
            ? n
            : {
                  connectedAccounts: [],
                  applicationRoleConnections: [],
                  premiumSince: null,
                  premiumGuildSince: null,
                  application: null,
                  legacyUsername: null,
                  userId: i,
                  banner: null,
                  accentColor: null,
                  bio: '',
                  pronouns: '',
                  premiumType: null,
                  lastFetched: 0,
                  fetchError: void 0
              };
    (s.lastFetched = Date.now()), (s.fetchError = a), S.set(i, s);
}
function V(e) {
    let { userId: t, accent_color: n, banner: i, bio: r, pronouns: s, popout_animation_particle_type: o, theme_colors: l, profileEffectId: u, profileEffectExpiresAt: c } = e,
        d = S.get(t);
    if (null == d) return !1;
    if (
        (S.set(t, {
            ...d,
            accentColor: n,
            banner: i,
            bio: r,
            pronouns: s,
            popoutAnimationParticleType: o,
            themeColors: l,
            profileEffectId: u,
            profileEffectExpiresAt: c
        }),
        null != c)
    ) {
        let e = new a.V7();
        N.set(t, e), x(t);
    }
}
function j(e) {
    let { userId: t, guild_id: n, accent_color: i, banner: r, bio: s, pronouns: o, popout_animation_particle_type: l, theme_colors: u, profileEffectId: c, profileEffectExpiresAt: d } = e,
        f = A.get(t);
    if (null == n || null == f) return !1;
    let _ = f.get(n);
    if (null == _) return !1;
    if (
        (f.set(n, {
            ..._,
            accentColor: i,
            banner: r,
            bio: s,
            pronouns: o,
            popoutAnimationParticleType: l,
            themeColors: u,
            profileEffectId: c,
            profileEffectExpiresAt: d
        }),
        null != d)
    ) {
        let e = new a.V7(),
            i = C.get(t);
        if (null != i) i.set(n, e);
        else {
            let i = new Map();
            i.set(n, e), C.set(t, i);
        }
        P(t, n);
    }
}
function H(e) {
    L = !0;
}
function Y(e) {
    (L = !1), null != e.guild_id ? j(e) : V(e);
}
function W(e) {
    L = !1;
}
function K(e) {
    var t, n;
    let i = e.user.id,
        r = S.get(i);
    if (null == r || (null !== (n = null === (t = v.get(i)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0) return !1;
    J(r);
}
function z(e) {
    if (D.size < 1 && S.size < 1) return !1;
    for (let e of (D.clear(), S.values())) J(e);
}
function q(e) {
    let t = e.user.id,
        n = S.get(t);
    if (null == D.get(t) && null == n) return !1;
    D.delete(t), J(n);
}
function Q(e) {
    let t = e.relationship.id,
        n = S.get(t);
    if (!R.has(t) && !O.has(t) && null == n) return !1;
    R.delete(t), O.delete(t), J(n);
}
function X() {
    v.clear(), S.clear(), A.clear();
}
function J(e) {
    null != e && ((e.lastFetched = 0), (e.fetchError = void 0));
}
class $ extends f.Z {
    initialize() {
        this.waitFor(_.ZP), this.syncWith([o.default], X);
    }
    isFetchingProfile(e, t) {
        let n = v.get(e);
        return null != n && n.has(null != t ? t : E);
    }
    isFetchingFriends(e) {
        return y.has(e);
    }
    get isSubmitting() {
        return L;
    }
    getUserProfile(e) {
        return S.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, i;
        return null == t ? null : null !== (i = null === (n = A.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : null;
    }
    getMutualFriends(e) {
        return R.get(e);
    }
    getMutualFriendsCount(e) {
        return O.get(e);
    }
    getMutualGuilds(e) {
        return D.get(e);
    }
    takeSnapshot() {
        let e = u.default.getId(),
            t = S.get(e);
        return null != t
            ? {
                  version: $.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t
                      }
                  ]
              }
            : {
                  version: $.LATEST_SNAPSHOT_VERSION,
                  data: []
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Z,
            USER_PROFILE_FETCH_FAILURE: F,
            USER_PROFILE_FETCH_SUCCESS: B,
            USER_PROFILE_UPDATE_START: H,
            USER_PROFILE_UPDATE_SUCCESS: Y,
            USER_PROFILE_UPDATE_FAILURE: W,
            MUTUAL_FRIENDS_FETCH_START: M,
            MUTUAL_FRIENDS_FETCH_SUCCESS: G,
            MUTUAL_FRIENDS_FETCH_FAILURE: k,
            USER_UPDATE: K,
            GUILD_MEMBER_UPDATE: K,
            GUILD_JOIN: z,
            GUILD_DELETE: z,
            GUILD_MEMBER_ADD: q,
            GUILD_MEMBER_REMOVE: q,
            RELATIONSHIP_ADD: Q,
            RELATIONSHIP_REMOVE: Q,
            RELATIONSHIP_UPDATE: Q,
            LOGOUT: w
        }),
            g(this, 'loadCache', () => {
                let e = this.readSnapshot($.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? S.set(t, n) : S.delete(t));
                    });
            });
    }
}
g($, 'displayName', 'UserProfileStore'), g($, 'LATEST_SNAPSHOT_VERSION', 1);
let ee = new $(),
    et = ee;
