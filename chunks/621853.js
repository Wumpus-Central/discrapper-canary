n.d(t, { Z: () => ec }), n(953529), n(388685), n(997841), n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(846519),
    o = n(726542),
    s = n(706454),
    l = n(598077),
    c = n(314897),
    u = n(430824),
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = Symbol('NO GUILD ID'),
    v = new Map(),
    I = new Set(),
    S = 'premium',
    T = 'guild_booster_lvl',
    A = 2147483647,
    N = new Map(),
    C = new Map(),
    R = new Map(),
    P = new Map(),
    w = new Map(),
    D = new Map(),
    L = new Map(),
    x = [],
    M = [],
    k = !1,
    j = null;
function U(e) {
    let t = N.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + h.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), R.delete(e), el.emitChange();
    else {
        let t = R.get(e);
        if (null == t) return;
        t.start(Math.min(A, n), () => U(e));
    }
}
function G(e, t) {
    let n = C.get(e);
    if (null == n) return;
    let r = n.get(t);
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = P.get(e),
        a = 1000 * r.profileEffectExpiresAt + h.Cm - Date.now();
    if (a <= 0)
        n.set(
            t,
            y(E({}, r), {
                profileEffectId: void 0,
                profileEffectExpiresAt: void 0
            })
        ),
            null != i && i.delete(t),
            el.emitChange();
    else {
        if (null == i) return;
        let n = i.get(t);
        if (null == n) return;
        n.start(Math.min(A, a), () => G(e, t));
    }
}
function B() {
    v.clear(), I.clear(), N.clear(), C.clear(), w.clear(), D.clear(), L.clear(), (k = !1);
}
function V(e) {
    let { userId: t } = e;
    I.add(t);
}
function F(e) {
    let { userId: t } = e;
    I.delete(t);
}
function Z(e) {
    return i()(e)
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
function H(e) {
    I.delete(e.userId), w.set(e.userId, Z(e.mutualFriends)), D.set(e.userId, e.mutualFriends.length);
}
function Y(e) {
    var t, n, r, i, s, l, c, d, f, h, g, b, A, M, k, B, V, F, H, Y, K, z, q, Q, X, J, $;
    let { userProfile: ee, fetchStartedAt: et } = e,
        en = null != (k = null == (t = ee.guild_member_profile) ? void 0 : t.guild_id) ? k : O;
    if ((null == (n = v.get(ee.user.id)) || n.delete(en), I.delete(ee.user.id), null != ee.mutual_guilds)) {
        let e = {};
        ee.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = u.Z.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r
                });
        }),
            L.set(
                ee.user.id,
                _.ZP.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick
                    }))
            );
    }
    if (null != ee.mutual_friends_count) {
        let e = ee.mutual_friends_count;
        D.set(ee.user.id, e), 0 === e && w.set(ee.user.id, x);
    }
    null != ee.mutual_friends && (w.set(ee.user.id, Z(ee.mutual_friends)), D.set(ee.user.id, ee.mutual_friends.length));
    let er = null != ee.premium_since ? new Date(ee.premium_since) : null,
        ei = null != ee.premium_guild_since ? new Date(ee.premium_guild_since) : null,
        ea = ee.application,
        eo =
            null != ee.badges
                ? ee.badges.map((e) => {
                      let t = (0, p.fv)(e.id);
                      if ((e.id === S || null != t) && null != er) {
                          let n = m.intl.formatToPlainString(m.t['8zbGNT'], { date: er });
                          return null != t && (n = m.intl.formatToPlainString(m.t.Hu4jfn, { date: er })), y(E({}, e), { description: n });
                      }
                      return e.id.startsWith(T) && null != ei ? y(E({}, e), { description: m.intl.formatToPlainString(m.t.IWkAq6, { date: ei }) }) : e;
                  })
                : [];
    if (
        (null != j && j.userId === ee.user.id && (Date.now() > j.expiresAtMs ? (j = null) : W(eo, j)),
        N.set(ee.user.id, {
            userId: ee.user.id,
            banner: null == (r = ee.user_profile) ? void 0 : r.banner,
            accentColor: null == (i = ee.user_profile) ? void 0 : i.accent_color,
            themeColors: null == (s = ee.user_profile) ? void 0 : s.theme_colors,
            popoutAnimationParticleType: null == (l = ee.user_profile) ? void 0 : l.popout_animation_particle_type,
            bio: null != (B = null == (c = ee.user_profile) ? void 0 : c.bio) ? B : '',
            profileEffectId: null == (f = ee.user_profile) || null == (d = f.profile_effect) ? void 0 : d.id,
            profileEffectExpiresAt: null == (g = ee.user_profile) || null == (h = g.profile_effect) ? void 0 : h.expires_at,
            pronouns: null != (V = null == (b = ee.user_profile) ? void 0 : b.pronouns) ? V : '',
            connectedAccounts: null != (F = ee.connected_accounts.filter((e) => o.Z.isSupported(e.type))) ? F : [],
            applicationRoleConnections: null != (H = ee.application_role_connections) ? H : [],
            premiumSince: er,
            premiumType: ee.premium_type,
            premiumGuildSince: ei,
            fetchStartedAt: et,
            fetchEndedAt: Date.now(),
            legacyUsername: ee.legacy_username,
            application:
                null != ea
                    ? {
                          id: ea.id,
                          primarySkuId: ea.primary_sku_id,
                          customInstallUrl: ea.custom_install_url,
                          installParams: ea.install_params,
                          integrationTypesConfig: ea.integration_types_config,
                          flags: ea.flags,
                          popularApplicationCommandIds: ea.popular_application_command_ids,
                          storefront_available: ea.storefront_available,
                          name: ea.name
                      }
                    : null,
            badges: eo
        }),
        (null == (M = ee.user_profile) || null == (A = M.profile_effect) ? void 0 : A.expires_at) != null)
    ) {
        let e = new a.V7();
        R.set(ee.user.id, e), U(ee.user.id);
    }
    if (null != ee.guild_member_profile) {
        let e = {
                userId: ee.user.id,
                guildId: ee.guild_member_profile.guild_id,
                banner: ee.guild_member_profile.banner,
                accentColor: ee.guild_member_profile.accent_color,
                themeColors: null == (Y = ee.guild_member_profile) ? void 0 : Y.theme_colors,
                popoutAnimationParticleType: null == (K = ee.guild_member_profile) ? void 0 : K.popout_animation_particle_type,
                profileEffectId: null == (q = ee.guild_member_profile) || null == (z = q.profile_effect) ? void 0 : z.id,
                profileEffectExpiresAt: null == (X = ee.guild_member_profile) || null == (Q = X.profile_effect) ? void 0 : Q.expires_at,
                bio: ee.guild_member_profile.bio,
                pronouns: ee.guild_member_profile.pronouns,
                badges: ee.guild_badges
            },
            t = C.get(ee.user.id);
        if (null != t) t.set(ee.guild_member_profile.guild_id, e);
        else {
            let t = new Map();
            t.set(ee.guild_member_profile.guild_id, e), C.set(ee.user.id, t);
        }
        if ((null == ($ = ee.guild_member_profile) || null == (J = $.profile_effect) ? void 0 : J.expires_at) != null) {
            let e = new a.V7(),
                t = P.get(ee.user.id);
            if (null != t) t.set(ee.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(ee.guild_member_profile.guild_id, e), P.set(ee.user.id, t);
            }
            G(ee.user.id, ee.guild_member_profile.guild_id);
        }
    }
}
function W(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = null == t ? void 0 : t.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}
function K(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = null != n ? n : O,
        a = v.get(t);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), v.set(t, e);
    }
    r && I.add(t);
}
function z(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a, fetchStartedAt: o } = e;
    null == (t = v.get(r)) || t.delete(null != i ? i : O), I.delete(r);
    let s =
        null != (n = N.get(r))
            ? n
            : {
                  connectedAccounts: [],
                  applicationRoleConnections: [],
                  premiumSince: null,
                  premiumGuildSince: null,
                  application: null,
                  legacyUsername: null,
                  userId: r,
                  banner: null,
                  accentColor: null,
                  bio: '',
                  pronouns: '',
                  premiumType: null,
                  fetchStartedAt: 0,
                  fetchEndedAt: 0,
                  fetchError: void 0
              };
    (s.fetchStartedAt = o), (s.fetchEndedAt = Date.now()), (s.fetchError = a), N.set(r, s), (null == a ? void 0 : a.status) === 404 && (D.set(r, 0), w.set(r, x), L.set(r, M));
}
function q(e) {
    let { userId: t, accent_color: n, banner: r, bio: i, pronouns: o, popout_animation_particle_type: s, theme_colors: l, profileEffectId: c, profileEffectExpiresAt: u } = e,
        d = N.get(t);
    if (null == d) return !1;
    if (
        (N.set(
            t,
            y(E({}, d), {
                accentColor: n,
                banner: r,
                bio: i,
                pronouns: o,
                popoutAnimationParticleType: s,
                themeColors: l,
                profileEffectId: c,
                profileEffectExpiresAt: u
            })
        ),
        null != u)
    ) {
        let e = new a.V7();
        R.set(t, e), U(t);
    }
}
function Q(e) {
    let { userId: t, guild_id: n, accent_color: r, banner: i, bio: o, pronouns: s, popout_animation_particle_type: l, theme_colors: c, profileEffectId: u, profileEffectExpiresAt: d } = e,
        f = C.get(t);
    if (null == n || null == f) return !1;
    let _ = f.get(n);
    if (null == _) return !1;
    if (
        (f.set(
            n,
            y(E({}, _), {
                accentColor: r,
                banner: i,
                bio: o,
                pronouns: s,
                popoutAnimationParticleType: l,
                themeColors: c,
                profileEffectId: u,
                profileEffectExpiresAt: d
            })
        ),
        null != d)
    ) {
        let e = new a.V7(),
            r = P.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), P.set(t, r);
        }
        G(t, n);
    }
}
function X(e) {
    k = !0;
}
function J(e) {
    (k = !1), null != e.guild_id ? Q(e) : q(e);
}
function $(e) {
    k = !1;
}
function ee(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    j = {
        userId: r,
        badges: t,
        expiresAtMs: Date.now() + 1000 * n
    };
    let i = N.get(r);
    if (null != i) {
        var a;
        let e = null != (a = i.badges) ? a : [];
        W(e, j), N.set(r, y(E({}, i), { badges: e }));
    }
}
function et(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (n = null == (t = v.get(r)) ? void 0 : t.size) ? n : 0) > 0) && eo(r);
}
function en(e) {
    return [...N.keys()].reduce((e, t) => eo(t) || e, !1);
}
function er(e) {
    return eo(e.user.id);
}
function ei(e) {
    return eo(e.relationship.id);
}
function ea() {
    v.clear(), I.clear(), N.clear(), C.clear();
}
function eo(e) {
    if (null == e) return !1;
    let t = N.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
class es extends f.Z {
    initialize() {
        this.waitFor(_.ZP), this.syncWith([s.default], ea);
    }
    isFetchingProfile(e, t) {
        let n = v.get(e);
        return null != n && n.has(null != t ? t : O);
    }
    isFetchingFriends(e) {
        return I.has(e);
    }
    get isSubmitting() {
        return k;
    }
    getUserProfile(e) {
        return N.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null != (r = null == (n = C.get(e)) ? void 0 : n.get(t)) ? r : null;
    }
    getMutualFriends(e) {
        return w.get(e);
    }
    getMutualFriendsCount(e) {
        return D.get(e);
    }
    getMutualGuilds(e) {
        return L.get(e);
    }
    takeSnapshot() {
        let e = c.default.getId(),
            t = N.get(e);
        return null != t
            ? {
                  version: es.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t
                      }
                  ]
              }
            : {
                  version: es.LATEST_SNAPSHOT_VERSION,
                  data: []
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: K,
            USER_PROFILE_FETCH_FAILURE: z,
            USER_PROFILE_FETCH_SUCCESS: Y,
            USER_PROFILE_UPDATE_START: X,
            USER_PROFILE_UPDATE_SUCCESS: J,
            USER_PROFILE_UPDATE_FAILURE: $,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: ee,
            MUTUAL_FRIENDS_FETCH_START: V,
            MUTUAL_FRIENDS_FETCH_SUCCESS: H,
            MUTUAL_FRIENDS_FETCH_FAILURE: F,
            USER_UPDATE: et,
            GUILD_MEMBER_UPDATE: et,
            GUILD_JOIN: en,
            GUILD_DELETE: en,
            INVITE_ACCEPT_SUCCESS: en,
            GUILD_MEMBER_ADD: er,
            GUILD_MEMBER_REMOVE: er,
            RELATIONSHIP_ADD: ei,
            RELATIONSHIP_REMOVE: ei,
            RELATIONSHIP_UPDATE: ei,
            LOGOUT: B
        }),
            g(this, 'loadCache', () => {
                let e = this.readSnapshot(es.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? N.set(t, n) : N.delete(t));
                    });
            });
    }
}
g(es, 'displayName', 'UserProfileStore'), g(es, 'LATEST_SNAPSHOT_VERSION', 1);
let el = new es(),
    ec = el;
