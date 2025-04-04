n.d(t, { Z: () => ea }), n(266796), n(47120), n(789020);
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
    R = new Map(),
    P = new Map(),
    w = new Map(),
    D = new Map(),
    L = new Map(),
    x = [],
    M = [],
    k = !1;
function j(e) {
    let t = A.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + h.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), R.delete(e), eo.emitChange();
    else {
        let t = R.get(e);
        if (null == t) return;
        t.start(Math.min(N, n), () => j(e));
    }
}
function U(e, t) {
    let n = C.get(e);
    if (null == n) return;
    let r = n.get(t);
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = P.get(e),
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
            eo.emitChange();
    else {
        if (null == i) return;
        let n = i.get(t);
        if (null == n) return;
        n.start(Math.min(N, o), () => U(e, t));
    }
}
function G() {
    O.clear(), I.clear(), A.clear(), C.clear(), w.clear(), D.clear(), L.clear(), (k = !1);
}
function B(e) {
    let { userId: t } = e;
    I.add(t);
}
function F(e) {
    let { userId: t } = e;
    I.delete(t);
}
function V(e) {
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
function Z(e) {
    I.delete(e.userId), w.set(e.userId, V(e.mutualFriends)), D.set(e.userId, e.mutualFriends.length);
}
function H(e) {
    var t, n, r, i, s, l, c, d, f, h, g, b, N, M, k, G, B, F, Z, H, W, Y, K, z, q, Q, X;
    let { userProfile: J } = e,
        $ = null != (k = null == (t = J.guild_member_profile) ? void 0 : t.guild_id) ? k : v;
    if ((null == (n = O.get(J.user.id)) || n.delete($), I.delete(J.user.id), null != J.mutual_guilds)) {
        let e = {};
        J.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = u.Z.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r
                });
        }),
            L.set(
                J.user.id,
                _.ZP.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick
                    }))
            );
    }
    if (null != J.mutual_friends_count) {
        let e = J.mutual_friends_count;
        D.set(J.user.id, e), 0 === e && w.set(J.user.id, x);
    }
    null != J.mutual_friends && (w.set(J.user.id, V(J.mutual_friends)), D.set(J.user.id, J.mutual_friends.length));
    let ee = null != J.premium_since ? new Date(J.premium_since) : null,
        et = null != J.premium_guild_since ? new Date(J.premium_guild_since) : null,
        en = J.application;
    if (
        (A.set(J.user.id, {
            userId: J.user.id,
            banner: null == (r = J.user_profile) ? void 0 : r.banner,
            accentColor: null == (i = J.user_profile) ? void 0 : i.accent_color,
            themeColors: null == (s = J.user_profile) ? void 0 : s.theme_colors,
            popoutAnimationParticleType: null == (l = J.user_profile) ? void 0 : l.popout_animation_particle_type,
            bio: null != (G = null == (c = J.user_profile) ? void 0 : c.bio) ? G : '',
            profileEffectId: null == (f = J.user_profile) || null == (d = f.profile_effect) ? void 0 : d.id,
            profileEffectExpiresAt: null == (g = J.user_profile) || null == (h = g.profile_effect) ? void 0 : h.expires_at,
            pronouns: null != (B = null == (b = J.user_profile) ? void 0 : b.pronouns) ? B : '',
            connectedAccounts: null != (F = J.connected_accounts.filter((e) => a.Z.isSupported(e.type))) ? F : [],
            applicationRoleConnections: null != (Z = J.application_role_connections) ? Z : [],
            premiumSince: ee,
            premiumType: J.premium_type,
            premiumGuildSince: et,
            lastFetched: Date.now(),
            legacyUsername: J.legacy_username,
            application:
                null != en
                    ? {
                          id: en.id,
                          primarySkuId: en.primary_sku_id,
                          customInstallUrl: en.custom_install_url,
                          installParams: en.install_params,
                          integrationTypesConfig: en.integration_types_config,
                          flags: en.flags,
                          popularApplicationCommandIds: en.popular_application_command_ids,
                          storefront_available: en.storefront_available,
                          name: en.name
                      }
                    : null,
            badges:
                null != J.badges
                    ? J.badges.map((e) => {
                          let t = (0, p.fv)(e.id);
                          if ((e.id === S || null != t) && null != ee) {
                              let n = m.NW.formatToPlainString(m.t['8zbGNT'], { date: ee });
                              return null != t && (n = m.NW.formatToPlainString(m.t.Hu4jfn, { date: ee })), y(E({}, e), { description: n });
                          }
                          return e.id.startsWith(T) && null != et ? y(E({}, e), { description: m.NW.formatToPlainString(m.t.IWkAq6, { date: et }) }) : e;
                      })
                    : J.badges
        }),
        (null == (M = J.user_profile) || null == (N = M.profile_effect) ? void 0 : N.expires_at) != null)
    ) {
        let e = new o.V7();
        R.set(J.user.id, e), j(J.user.id);
    }
    if (null != J.guild_member_profile) {
        let e = {
                userId: J.user.id,
                guildId: J.guild_member_profile.guild_id,
                banner: J.guild_member_profile.banner,
                accentColor: J.guild_member_profile.accent_color,
                themeColors: null == (H = J.guild_member_profile) ? void 0 : H.theme_colors,
                popoutAnimationParticleType: null == (W = J.guild_member_profile) ? void 0 : W.popout_animation_particle_type,
                profileEffectId: null == (K = J.guild_member_profile) || null == (Y = K.profile_effect) ? void 0 : Y.id,
                profileEffectExpiresAt: null == (q = J.guild_member_profile) || null == (z = q.profile_effect) ? void 0 : z.expires_at,
                bio: J.guild_member_profile.bio,
                pronouns: J.guild_member_profile.pronouns,
                badges: J.guild_badges
            },
            t = C.get(J.user.id);
        if (null != t) t.set(J.guild_member_profile.guild_id, e);
        else {
            let t = new Map();
            t.set(J.guild_member_profile.guild_id, e), C.set(J.user.id, t);
        }
        if ((null == (X = J.guild_member_profile) || null == (Q = X.profile_effect) ? void 0 : Q.expires_at) != null) {
            let e = new o.V7(),
                t = P.get(J.user.id);
            if (null != t) t.set(J.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(J.guild_member_profile.guild_id, e), P.set(J.user.id, t);
            }
            U(J.user.id, J.guild_member_profile.guild_id);
        }
    }
}
function W(e) {
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
function Y(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: o } = e;
    null == (t = O.get(r)) || t.delete(null != i ? i : v), I.delete(r);
    let a =
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
                  lastFetched: 0,
                  fetchError: void 0
              };
    (a.lastFetched = Date.now()), (a.fetchError = o), A.set(r, a), (null == o ? void 0 : o.status) === 404 && (D.set(r, 0), w.set(r, x), L.set(r, M));
}
function K(e) {
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
        R.set(t, e), j(t);
    }
}
function z(e) {
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
            r = P.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), P.set(t, r);
        }
        U(t, n);
    }
}
function q(e) {
    k = !0;
}
function Q(e) {
    (k = !1), null != e.guild_id ? z(e) : K(e);
}
function X(e) {
    k = !1;
}
function J(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (n = null == (t = O.get(r)) ? void 0 : t.size) ? n : 0) > 0) && er(r);
}
function $(e) {
    return [...A.keys()].reduce((e, t) => er(t) || e, !1);
}
function ee(e) {
    return er(e.user.id);
}
function et(e) {
    return er(e.relationship.id);
}
function en() {
    O.clear(), I.clear(), A.clear(), C.clear();
}
function er(e) {
    if (null == e) return !1;
    let t = A.get(e);
    if (null == t) return !1;
    (t.lastFetched = 0), (t.fetchError = void 0);
}
class ei extends f.Z {
    initialize() {
        this.waitFor(_.ZP), this.syncWith([s.default], en);
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
                  version: ei.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t
                      }
                  ]
              }
            : {
                  version: ei.LATEST_SNAPSHOT_VERSION,
                  data: []
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: W,
            USER_PROFILE_FETCH_FAILURE: Y,
            USER_PROFILE_FETCH_SUCCESS: H,
            USER_PROFILE_UPDATE_START: q,
            USER_PROFILE_UPDATE_SUCCESS: Q,
            USER_PROFILE_UPDATE_FAILURE: X,
            MUTUAL_FRIENDS_FETCH_START: B,
            MUTUAL_FRIENDS_FETCH_SUCCESS: Z,
            MUTUAL_FRIENDS_FETCH_FAILURE: F,
            USER_UPDATE: J,
            GUILD_MEMBER_UPDATE: J,
            GUILD_JOIN: $,
            GUILD_DELETE: $,
            GUILD_MEMBER_ADD: ee,
            GUILD_MEMBER_REMOVE: ee,
            RELATIONSHIP_ADD: et,
            RELATIONSHIP_REMOVE: et,
            RELATIONSHIP_UPDATE: et,
            LOGOUT: G
        }),
            g(this, 'loadCache', () => {
                let e = this.readSnapshot(ei.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? A.set(t, n) : A.delete(t));
                    });
            });
    }
}
g(ei, 'displayName', 'UserProfileStore'), g(ei, 'LATEST_SNAPSHOT_VERSION', 1);
let eo = new ei(),
    ea = eo;
