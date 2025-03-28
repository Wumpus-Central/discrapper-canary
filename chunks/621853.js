n.d(t, { Z: () => ei }), n(266796), n(47120), n(789020);
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
function v(e, t) {
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
let y = Symbol('NO GUILD ID'),
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
    x = !1;
function M(e) {
    let t = A.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + h.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), R.delete(e), er.emitChange();
    else {
        let t = R.get(e);
        if (null == t) return;
        t.start(Math.min(N, n), () => M(e));
    }
}
function k(e, t) {
    let n = C.get(e);
    if (null == n) return;
    let r = n.get(t);
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = P.get(e),
        o = 1000 * r.profileEffectExpiresAt + h.Cm - Date.now();
    if (o <= 0)
        n.set(
            t,
            v(E({}, r), {
                profileEffectId: void 0,
                profileEffectExpiresAt: void 0
            })
        ),
            null != i && i.delete(t),
            er.emitChange();
    else {
        if (null == i) return;
        let n = i.get(t);
        if (null == n) return;
        n.start(Math.min(N, o), () => k(e, t));
    }
}
function j() {
    O.clear(), I.clear(), A.clear(), C.clear(), w.clear(), D.clear(), L.clear(), (x = !1);
}
function U(e) {
    let { userId: t } = e;
    I.add(t);
}
function G(e) {
    let { userId: t } = e;
    I.delete(t);
}
function B(e) {
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
function F(e) {
    I.delete(e.userId), w.set(e.userId, B(e.mutualFriends)), D.set(e.userId, e.mutualFriends.length);
}
function V(e) {
    var t, n, r, i, s, l, c, d, f, h, g, b, N, x, j, U, G, F, V, Z, H, W, Y, K, z, q, Q;
    let { userProfile: X } = e,
        J = null !== (j = null === (t = X.guild_member_profile) || void 0 === t ? void 0 : t.guild_id) && void 0 !== j ? j : y;
    if ((null === (n = O.get(X.user.id)) || void 0 === n || n.delete(J), I.delete(X.user.id), null != X.mutual_guilds)) {
        let e = {};
        X.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = u.Z.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r
                });
        }),
            L.set(
                X.user.id,
                _.ZP.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick
                    }))
            );
    }
    if (null != X.mutual_friends_count) {
        let e = X.mutual_friends_count;
        D.set(X.user.id, e);
    }
    null != X.mutual_friends && (w.set(X.user.id, B(X.mutual_friends)), D.set(X.user.id, X.mutual_friends.length));
    let $ = null != X.premium_since ? new Date(X.premium_since) : null,
        ee = null != X.premium_guild_since ? new Date(X.premium_guild_since) : null,
        et = X.application;
    if (
        (A.set(X.user.id, {
            userId: X.user.id,
            banner: null === (r = X.user_profile) || void 0 === r ? void 0 : r.banner,
            accentColor: null === (i = X.user_profile) || void 0 === i ? void 0 : i.accent_color,
            themeColors: null === (s = X.user_profile) || void 0 === s ? void 0 : s.theme_colors,
            popoutAnimationParticleType: null === (l = X.user_profile) || void 0 === l ? void 0 : l.popout_animation_particle_type,
            bio: null !== (U = null === (c = X.user_profile) || void 0 === c ? void 0 : c.bio) && void 0 !== U ? U : '',
            profileEffectId: null === (f = X.user_profile) || void 0 === f ? void 0 : null === (d = f.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (g = X.user_profile) || void 0 === g ? void 0 : null === (h = g.profile_effect) || void 0 === h ? void 0 : h.expires_at,
            pronouns: null !== (G = null === (b = X.user_profile) || void 0 === b ? void 0 : b.pronouns) && void 0 !== G ? G : '',
            connectedAccounts: null !== (F = X.connected_accounts.filter((e) => a.Z.isSupported(e.type))) && void 0 !== F ? F : [],
            applicationRoleConnections: null !== (V = X.application_role_connections) && void 0 !== V ? V : [],
            premiumSince: $,
            premiumType: X.premium_type,
            premiumGuildSince: ee,
            lastFetched: Date.now(),
            legacyUsername: X.legacy_username,
            application:
                null != et
                    ? {
                          id: et.id,
                          primarySkuId: et.primary_sku_id,
                          customInstallUrl: et.custom_install_url,
                          installParams: et.install_params,
                          integrationTypesConfig: et.integration_types_config,
                          flags: et.flags,
                          popularApplicationCommandIds: et.popular_application_command_ids,
                          storefront_available: et.storefront_available,
                          name: et.name
                      }
                    : null,
            badges:
                null != X.badges
                    ? X.badges.map((e) => {
                          let t = (0, p.fv)(e.id);
                          if ((e.id === S || null != t) && null != $) {
                              let n = m.NW.formatToPlainString(m.t['8zbGNT'], { date: $ });
                              return null != t && (n = m.NW.formatToPlainString(m.t.Hu4jfn, { date: $ })), v(E({}, e), { description: n });
                          }
                          return e.id.startsWith(T) && null != ee ? v(E({}, e), { description: m.NW.formatToPlainString(m.t.IWkAq6, { date: ee }) }) : e;
                      })
                    : X.badges
        }),
        (null === (x = X.user_profile) || void 0 === x ? void 0 : null === (N = x.profile_effect) || void 0 === N ? void 0 : N.expires_at) != null)
    ) {
        let e = new o.V7();
        R.set(X.user.id, e), M(X.user.id);
    }
    if (null != X.guild_member_profile) {
        let e = {
                userId: X.user.id,
                guildId: X.guild_member_profile.guild_id,
                banner: X.guild_member_profile.banner,
                accentColor: X.guild_member_profile.accent_color,
                themeColors: null === (Z = X.guild_member_profile) || void 0 === Z ? void 0 : Z.theme_colors,
                popoutAnimationParticleType: null === (H = X.guild_member_profile) || void 0 === H ? void 0 : H.popout_animation_particle_type,
                profileEffectId: null === (Y = X.guild_member_profile) || void 0 === Y ? void 0 : null === (W = Y.profile_effect) || void 0 === W ? void 0 : W.id,
                profileEffectExpiresAt: null === (z = X.guild_member_profile) || void 0 === z ? void 0 : null === (K = z.profile_effect) || void 0 === K ? void 0 : K.expires_at,
                bio: X.guild_member_profile.bio,
                pronouns: X.guild_member_profile.pronouns,
                badges: X.guild_badges
            },
            t = C.get(X.user.id);
        if (null != t) t.set(X.guild_member_profile.guild_id, e);
        else {
            let t = new Map();
            t.set(X.guild_member_profile.guild_id, e), C.set(X.user.id, t);
        }
        if ((null === (Q = X.guild_member_profile) || void 0 === Q ? void 0 : null === (q = Q.profile_effect) || void 0 === q ? void 0 : q.expires_at) != null) {
            let e = new o.V7(),
                t = P.get(X.user.id);
            if (null != t) t.set(X.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(X.guild_member_profile.guild_id, e), P.set(X.user.id, t);
            }
            k(X.user.id, X.guild_member_profile.guild_id);
        }
    }
}
function Z(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = null != n ? n : y,
        o = O.get(t);
    if (null != o) o.add(i);
    else {
        let e = new Set();
        e.add(i), O.set(t, e);
    }
    r && I.add(t);
}
function H(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: o } = e;
    null === (t = O.get(r)) || void 0 === t || t.delete(null != i ? i : y), I.delete(r);
    let a =
        null !== (n = A.get(r)) && void 0 !== n
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
    (a.lastFetched = Date.now()), (a.fetchError = o), A.set(r, a), (null == o ? void 0 : o.status) === 404 && (D.set(r, 0), w.set(r, []), L.set(r, []));
}
function W(e) {
    let { userId: t, accent_color: n, banner: r, bio: i, pronouns: a, popout_animation_particle_type: s, theme_colors: l, profileEffectId: c, profileEffectExpiresAt: u } = e,
        d = A.get(t);
    if (null == d) return !1;
    if (
        (A.set(
            t,
            v(E({}, d), {
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
        R.set(t, e), M(t);
    }
}
function Y(e) {
    let { userId: t, guild_id: n, accent_color: r, banner: i, bio: a, pronouns: s, popout_animation_particle_type: l, theme_colors: c, profileEffectId: u, profileEffectExpiresAt: d } = e,
        f = C.get(t);
    if (null == n || null == f) return !1;
    let _ = f.get(n);
    if (null == _) return !1;
    if (
        (f.set(
            n,
            v(E({}, _), {
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
        k(t, n);
    }
}
function K(e) {
    x = !0;
}
function z(e) {
    (x = !1), null != e.guild_id ? Y(e) : W(e);
}
function q(e) {
    x = !1;
}
function Q(e) {
    var t, n;
    let r = e.user.id;
    return !((null !== (n = null === (t = O.get(r)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0) && et(r);
}
function X(e) {
    return [...A.keys()].reduce((e, t) => et(t) || e, !1);
}
function J(e) {
    return et(e.user.id);
}
function $(e) {
    return et(e.relationship.id);
}
function ee() {
    O.clear(), I.clear(), A.clear(), C.clear();
}
function et(e) {
    if (null == e) return !1;
    let t = A.get(e);
    if (null == t) return !1;
    (t.lastFetched = 0), (t.fetchError = void 0);
}
class en extends f.Z {
    initialize() {
        this.waitFor(_.ZP), this.syncWith([s.default], ee);
    }
    isFetchingProfile(e, t) {
        let n = O.get(e);
        return null != n && n.has(null != t ? t : y);
    }
    isFetchingFriends(e) {
        return I.has(e);
    }
    get isSubmitting() {
        return x;
    }
    getUserProfile(e) {
        return A.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null !== (r = null === (n = C.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : null;
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
                  version: en.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t
                      }
                  ]
              }
            : {
                  version: en.LATEST_SNAPSHOT_VERSION,
                  data: []
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Z,
            USER_PROFILE_FETCH_FAILURE: H,
            USER_PROFILE_FETCH_SUCCESS: V,
            USER_PROFILE_UPDATE_START: K,
            USER_PROFILE_UPDATE_SUCCESS: z,
            USER_PROFILE_UPDATE_FAILURE: q,
            MUTUAL_FRIENDS_FETCH_START: U,
            MUTUAL_FRIENDS_FETCH_SUCCESS: F,
            MUTUAL_FRIENDS_FETCH_FAILURE: G,
            USER_UPDATE: Q,
            GUILD_MEMBER_UPDATE: Q,
            GUILD_JOIN: X,
            GUILD_DELETE: X,
            GUILD_MEMBER_ADD: J,
            GUILD_MEMBER_REMOVE: J,
            RELATIONSHIP_ADD: $,
            RELATIONSHIP_REMOVE: $,
            RELATIONSHIP_UPDATE: $,
            LOGOUT: j
        }),
            g(this, 'loadCache', () => {
                let e = this.readSnapshot(en.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? A.set(t, n) : A.delete(t));
                    });
            });
    }
}
g(en, 'displayName', 'UserProfileStore'), g(en, 'LATEST_SNAPSHOT_VERSION', 1);
let er = new en(),
    ei = er;
