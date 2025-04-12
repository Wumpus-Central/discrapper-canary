n.d(t, { Z: () => ec }), n(953529), n(388685), n(997841), n(539854);
var r = n(392711),
    i = n.n(r),
    o = n(846519),
    a = n(726542),
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
let v = Symbol('NO GUILD ID'),
    O = new Map(),
    I = new Set(),
    S = 'premium',
    T = 'guild_booster_lvl',
    N = 2147483647,
    A = new Map(),
    C = new Map(),
    P = new Map(),
    R = new Map(),
    w = new Map(),
    D = new Map(),
    L = new Map(),
    x = [],
    M = [],
    k = !1,
    j = null;
function U(e) {
    let t = A.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + h.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), P.delete(e), el.emitChange();
    else {
        let t = P.get(e);
        if (null == t) return;
        t.start(Math.min(N, n), () => U(e));
    }
}
function G(e, t) {
    let n = C.get(e);
    if (null == n) return;
    let r = n.get(t);
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = R.get(e),
        o = 1000 * r.profileEffectExpiresAt + h.Cm - Date.now();
    if (o <= 0)
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
        n.start(Math.min(N, o), () => G(e, t));
    }
}
function B() {
    O.clear(), I.clear(), A.clear(), C.clear(), w.clear(), D.clear(), L.clear(), (k = !1);
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
function W(e) {
    var t, n, r, i, s, l, c, d, f, h, g, b, N, M, k, B, V, F, H, W, K, z, q, Q, X, J, $;
    let { userProfile: ee, fetchStartedAt: et } = e,
        en = null != (k = null == (t = ee.guild_member_profile) ? void 0 : t.guild_id) ? k : v;
    if ((null == (n = O.get(ee.user.id)) || n.delete(en), I.delete(ee.user.id), null != ee.mutual_guilds)) {
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
        eo = ee.application,
        ea =
            null != ee.badges
                ? ee.badges.map((e) => {
                      let t = (0, p.fv)(e.id);
                      if ((e.id === S || null != t) && null != er) {
                          let n = m.NW.formatToPlainString(m.t['8zbGNT'], { date: er });
                          return null != t && (n = m.NW.formatToPlainString(m.t.Hu4jfn, { date: er })), y(E({}, e), { description: n });
                      }
                      return e.id.startsWith(T) && null != ei ? y(E({}, e), { description: m.NW.formatToPlainString(m.t.IWkAq6, { date: ei }) }) : e;
                  })
                : [];
    if (
        (null != j && j.userId === ee.user.id && (Date.now() > j.expiresAtMs ? (j = null) : Y(ea, j)),
        A.set(ee.user.id, {
            userId: ee.user.id,
            banner: null == (r = ee.user_profile) ? void 0 : r.banner,
            accentColor: null == (i = ee.user_profile) ? void 0 : i.accent_color,
            themeColors: null == (s = ee.user_profile) ? void 0 : s.theme_colors,
            popoutAnimationParticleType: null == (l = ee.user_profile) ? void 0 : l.popout_animation_particle_type,
            bio: null != (B = null == (c = ee.user_profile) ? void 0 : c.bio) ? B : '',
            profileEffectId: null == (f = ee.user_profile) || null == (d = f.profile_effect) ? void 0 : d.id,
            profileEffectExpiresAt: null == (g = ee.user_profile) || null == (h = g.profile_effect) ? void 0 : h.expires_at,
            pronouns: null != (V = null == (b = ee.user_profile) ? void 0 : b.pronouns) ? V : '',
            connectedAccounts: null != (F = ee.connected_accounts.filter((e) => a.Z.isSupported(e.type))) ? F : [],
            applicationRoleConnections: null != (H = ee.application_role_connections) ? H : [],
            premiumSince: er,
            premiumType: ee.premium_type,
            premiumGuildSince: ei,
            fetchStartedAt: et,
            fetchEndedAt: Date.now(),
            legacyUsername: ee.legacy_username,
            application:
                null != eo
                    ? {
                          id: eo.id,
                          primarySkuId: eo.primary_sku_id,
                          customInstallUrl: eo.custom_install_url,
                          installParams: eo.install_params,
                          integrationTypesConfig: eo.integration_types_config,
                          flags: eo.flags,
                          popularApplicationCommandIds: eo.popular_application_command_ids,
                          storefront_available: eo.storefront_available,
                          name: eo.name
                      }
                    : null,
            badges: ea
        }),
        (null == (M = ee.user_profile) || null == (N = M.profile_effect) ? void 0 : N.expires_at) != null)
    ) {
        let e = new o.V7();
        P.set(ee.user.id, e), U(ee.user.id);
    }
    if (null != ee.guild_member_profile) {
        let e = {
                userId: ee.user.id,
                guildId: ee.guild_member_profile.guild_id,
                banner: ee.guild_member_profile.banner,
                accentColor: ee.guild_member_profile.accent_color,
                themeColors: null == (W = ee.guild_member_profile) ? void 0 : W.theme_colors,
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
            let e = new o.V7(),
                t = R.get(ee.user.id);
            if (null != t) t.set(ee.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(ee.guild_member_profile.guild_id, e), R.set(ee.user.id, t);
            }
            G(ee.user.id, ee.guild_member_profile.guild_id);
        }
    }
}
function Y(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = null == t ? void 0 : t.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}
function K(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = null != n ? n : v,
        o = O.get(t);
    if (null != o) o.add(i);
    else {
        let e = new Set();
        e.add(i), O.set(t, e);
    }
    r && I.add(t);
}
function z(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: o, fetchStartedAt: a } = e;
    null == (t = O.get(r)) || t.delete(null != i ? i : v), I.delete(r);
    let s =
        null != (n = A.get(r))
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
    (s.fetchStartedAt = a), (s.fetchEndedAt = Date.now()), (s.fetchError = o), A.set(r, s), (null == o ? void 0 : o.status) === 404 && (D.set(r, 0), w.set(r, x), L.set(r, M));
}
function q(e) {
    let { userId: t, accent_color: n, banner: r, bio: i, pronouns: a, popout_animation_particle_type: s, theme_colors: l, profileEffectId: c, profileEffectExpiresAt: u } = e,
        d = A.get(t);
    if (null == d) return !1;
    if (
        (A.set(
            t,
            y(E({}, d), {
                accentColor: n,
                banner: r,
                bio: i,
                pronouns: a,
                popoutAnimationParticleType: s,
                themeColors: l,
                profileEffectId: c,
                profileEffectExpiresAt: u
            })
        ),
        null != u)
    ) {
        let e = new o.V7();
        P.set(t, e), U(t);
    }
}
function Q(e) {
    let { userId: t, guild_id: n, accent_color: r, banner: i, bio: a, pronouns: s, popout_animation_particle_type: l, theme_colors: c, profileEffectId: u, profileEffectExpiresAt: d } = e,
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
                bio: a,
                pronouns: s,
                popoutAnimationParticleType: l,
                themeColors: c,
                profileEffectId: u,
                profileEffectExpiresAt: d
            })
        ),
        null != d)
    ) {
        let e = new o.V7(),
            r = R.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), R.set(t, r);
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
    let i = A.get(r);
    if (null != i) {
        var o;
        let e = null != (o = i.badges) ? o : [];
        Y(e, j), A.set(r, y(E({}, i), { badges: e }));
    }
}
function et(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (n = null == (t = O.get(r)) ? void 0 : t.size) ? n : 0) > 0) && ea(r);
}
function en(e) {
    return [...A.keys()].reduce((e, t) => ea(t) || e, !1);
}
function er(e) {
    return ea(e.user.id);
}
function ei(e) {
    return ea(e.relationship.id);
}
function eo() {
    O.clear(), I.clear(), A.clear(), C.clear();
}
function ea(e) {
    if (null == e) return !1;
    let t = A.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
class es extends f.Z {
    initialize() {
        this.waitFor(_.ZP), this.syncWith([s.default], eo);
    }
    isFetchingProfile(e, t) {
        let n = O.get(e);
        return null != n && n.has(null != t ? t : v);
    }
    isFetchingFriends(e) {
        return I.has(e);
    }
    get isSubmitting() {
        return k;
    }
    getUserProfile(e) {
        return A.get(e);
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
            t = A.get(e);
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
            USER_PROFILE_FETCH_SUCCESS: W,
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
                        null != t && (null != n ? A.set(t, n) : A.delete(t));
                    });
            });
    }
}
g(es, 'displayName', 'UserProfileStore'), g(es, 'LATEST_SNAPSHOT_VERSION', 1);
let el = new es(),
    ec = el;
