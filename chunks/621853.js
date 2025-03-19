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
    let X = null !== (j = null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id) && void 0 !== j ? j : y;
    if ((null === (n = O.get(e.user.id)) || void 0 === n || n.delete(X), I.delete(e.user.id), null != e.mutual_guilds)) {
        let t = {};
        e.mutual_guilds.forEach((e) => {
            let { id: n, nick: r } = e,
                i = u.Z.getGuild(n);
            null != i &&
                (t[n] = {
                    guild: i,
                    nick: r
                });
        }),
            L.set(
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
        D.set(e.user.id, t);
    }
    null != e.mutual_friends && (w.set(e.user.id, B(e.mutual_friends)), D.set(e.user.id, e.mutual_friends.length));
    let J = null != e.premium_since ? new Date(e.premium_since) : null,
        $ = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        ee = e.application;
    if (
        (A.set(e.user.id, {
            userId: e.user.id,
            banner: null === (r = e.user_profile) || void 0 === r ? void 0 : r.banner,
            accentColor: null === (i = e.user_profile) || void 0 === i ? void 0 : i.accent_color,
            themeColors: null === (s = e.user_profile) || void 0 === s ? void 0 : s.theme_colors,
            popoutAnimationParticleType: null === (l = e.user_profile) || void 0 === l ? void 0 : l.popout_animation_particle_type,
            bio: null !== (U = null === (c = e.user_profile) || void 0 === c ? void 0 : c.bio) && void 0 !== U ? U : '',
            profileEffectId: null === (f = e.user_profile) || void 0 === f ? void 0 : null === (d = f.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (g = e.user_profile) || void 0 === g ? void 0 : null === (h = g.profile_effect) || void 0 === h ? void 0 : h.expires_at,
            pronouns: null !== (G = null === (b = e.user_profile) || void 0 === b ? void 0 : b.pronouns) && void 0 !== G ? G : '',
            connectedAccounts: null !== (F = e.connected_accounts.filter((e) => a.Z.isSupported(e.type))) && void 0 !== F ? F : [],
            applicationRoleConnections: null !== (V = e.application_role_connections) && void 0 !== V ? V : [],
            premiumSince: J,
            premiumType: e.premium_type,
            premiumGuildSince: $,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != ee
                    ? {
                          id: ee.id,
                          primarySkuId: ee.primary_sku_id,
                          customInstallUrl: ee.custom_install_url,
                          installParams: ee.install_params,
                          integrationTypesConfig: ee.integration_types_config,
                          flags: ee.flags,
                          popularApplicationCommandIds: ee.popular_application_command_ids,
                          storefront_available: ee.storefront_available,
                          name: ee.name
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) => {
                          let t = (0, p.fv)(e.id);
                          if ((e.id === S || null != t) && null != J) {
                              let n = m.NW.formatToPlainString(m.t['8zbGNT'], { date: J });
                              return null != t && (n = 2 === t.badgeVersion ? m.NW.formatToPlainString(m.t.Hu4jfn, { date: J }) : (0, p.sZ)(t.id, J)), v(E({}, e), { description: n });
                          }
                          return e.id.startsWith(T) && null != $ ? v(E({}, e), { description: m.NW.formatToPlainString(m.t.IWkAq6, { date: $ }) }) : e;
                      })
                    : e.badges
        }),
        (null === (x = e.user_profile) || void 0 === x ? void 0 : null === (N = x.profile_effect) || void 0 === N ? void 0 : N.expires_at) != null)
    ) {
        let t = new o.V7();
        R.set(e.user.id, t), M(e.user.id);
    }
    if (null != e.guild_member_profile) {
        let t = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (Z = e.guild_member_profile) || void 0 === Z ? void 0 : Z.theme_colors,
                popoutAnimationParticleType: null === (H = e.guild_member_profile) || void 0 === H ? void 0 : H.popout_animation_particle_type,
                profileEffectId: null === (Y = e.guild_member_profile) || void 0 === Y ? void 0 : null === (W = Y.profile_effect) || void 0 === W ? void 0 : W.id,
                profileEffectExpiresAt: null === (z = e.guild_member_profile) || void 0 === z ? void 0 : null === (K = z.profile_effect) || void 0 === K ? void 0 : K.expires_at,
                bio: e.guild_member_profile.bio,
                pronouns: e.guild_member_profile.pronouns,
                badges: e.guild_badges
            },
            n = C.get(e.user.id);
        if (null != n) n.set(e.guild_member_profile.guild_id, t);
        else {
            let n = new Map();
            n.set(e.guild_member_profile.guild_id, t), C.set(e.user.id, n);
        }
        if ((null === (Q = e.guild_member_profile) || void 0 === Q ? void 0 : null === (q = Q.profile_effect) || void 0 === q ? void 0 : q.expires_at) != null) {
            let t = new o.V7(),
                n = P.get(e.user.id);
            if (null != n) n.set(e.guild_member_profile.guild_id, t);
            else {
                let n = new Map();
                n.set(e.guild_member_profile.guild_id, t), P.set(e.user.id, n);
            }
            k(e.user.id, e.guild_member_profile.guild_id);
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
    let r = e.user.id,
        i = A.get(r);
    if (null == i || (null !== (n = null === (t = O.get(r)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0) return !1;
    et(i);
}
function X(e) {
    if (L.size < 1 && A.size < 1) return !1;
    for (let e of (L.clear(), A.values())) et(e);
}
function J(e) {
    let t = e.user.id,
        n = A.get(t);
    if (null == L.get(t) && null == n) return !1;
    L.delete(t), et(n);
}
function $(e) {
    let t = e.relationship.id,
        n = A.get(t);
    if (!w.has(t) && !D.has(t) && null == n) return !1;
    w.delete(t), D.delete(t), et(n);
}
function ee() {
    O.clear(), I.clear(), A.clear(), C.clear();
}
function et(e) {
    null != e && ((e.lastFetched = 0), (e.fetchError = void 0));
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
