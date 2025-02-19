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
    p = n(771845),
    _ = n(291175),
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
function v(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = Symbol('NO GUILD ID'),
    O = new Map(),
    S = new Set(),
    I = 'premium',
    T = 'guild_booster_lvl',
    N = 2147483647,
    A = new Map(),
    C = new Map(),
    R = new Map(),
    P = new Map(),
    w = new Map(),
    D = new Map(),
    x = new Map(),
    L = !1;
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
            b(E({}, r), {
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
    O.clear(), S.clear(), A.clear(), C.clear(), w.clear(), D.clear(), x.clear(), (L = !1);
}
function U(e) {
    let { userId: t } = e;
    S.add(t);
}
function G(e) {
    let { userId: t } = e;
    S.delete(t);
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
function Z(e) {
    S.delete(e.userId), w.set(e.userId, B(e.mutualFriends)), D.set(e.userId, e.mutualFriends.length);
}
function F(e) {
    var t, n, r, i, s, l, c, d, f, h, g, v, S, N, L, j, U, G, Z, F, V, H, W, Y, K, z, q;
    let Q = null !== (L = null === (t = e.guild_member_profile) || void 0 === t ? void 0 : t.guild_id) && void 0 !== L ? L : y;
    if ((null === (n = O.get(e.user.id)) || void 0 === n || n.delete(Q), null != e.mutual_guilds)) {
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
            x.set(
                e.user.id,
                p.ZP.getFlattenedGuildIds()
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
    let X = null != e.premium_since ? new Date(e.premium_since) : null,
        J = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        $ = e.application;
    if (
        (A.set(e.user.id, {
            userId: e.user.id,
            banner: null === (r = e.user_profile) || void 0 === r ? void 0 : r.banner,
            accentColor: null === (i = e.user_profile) || void 0 === i ? void 0 : i.accent_color,
            themeColors: null === (s = e.user_profile) || void 0 === s ? void 0 : s.theme_colors,
            popoutAnimationParticleType: null === (l = e.user_profile) || void 0 === l ? void 0 : l.popout_animation_particle_type,
            bio: null !== (j = null === (c = e.user_profile) || void 0 === c ? void 0 : c.bio) && void 0 !== j ? j : '',
            profileEffectId: null === (f = e.user_profile) || void 0 === f ? void 0 : null === (d = f.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (g = e.user_profile) || void 0 === g ? void 0 : null === (h = g.profile_effect) || void 0 === h ? void 0 : h.expires_at,
            pronouns: null !== (U = null === (v = e.user_profile) || void 0 === v ? void 0 : v.pronouns) && void 0 !== U ? U : '',
            connectedAccounts: null !== (G = e.connected_accounts.filter((e) => a.Z.isSupported(e.type))) && void 0 !== G ? G : [],
            applicationRoleConnections: null !== (Z = e.application_role_connections) && void 0 !== Z ? Z : [],
            premiumSince: X,
            premiumType: e.premium_type,
            premiumGuildSince: J,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != $
                    ? {
                          id: $.id,
                          primarySkuId: $.primary_sku_id,
                          customInstallUrl: $.custom_install_url,
                          installParams: $.install_params,
                          integrationTypesConfig: $.integration_types_config,
                          flags: $.flags,
                          popularApplicationCommandIds: $.popular_application_command_ids,
                          storefront_available: $.storefront_available,
                          name: $.name
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) => {
                          let t = (0, _.fv)(e.id);
                          if ((e.id === I || null != t) && null != X) {
                              let n = m.NW.formatToPlainString(m.t['8zbGNT'], { date: X });
                              return null != t && (n = 2 === t.badgeVersion ? m.NW.formatToPlainString(m.t.Hu4jfn, { date: X }) : (0, _.sZ)(t.id, X)), b(E({}, e), { description: n });
                          }
                          return e.id.startsWith(T) && null != J ? b(E({}, e), { description: m.NW.formatToPlainString(m.t.IWkAq6, { date: J }) }) : e;
                      })
                    : e.badges
        }),
        (null === (N = e.user_profile) || void 0 === N ? void 0 : null === (S = N.profile_effect) || void 0 === S ? void 0 : S.expires_at) != null)
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
                themeColors: null === (F = e.guild_member_profile) || void 0 === F ? void 0 : F.theme_colors,
                popoutAnimationParticleType: null === (V = e.guild_member_profile) || void 0 === V ? void 0 : V.popout_animation_particle_type,
                profileEffectId: null === (W = e.guild_member_profile) || void 0 === W ? void 0 : null === (H = W.profile_effect) || void 0 === H ? void 0 : H.id,
                profileEffectExpiresAt: null === (K = e.guild_member_profile) || void 0 === K ? void 0 : null === (Y = K.profile_effect) || void 0 === Y ? void 0 : Y.expires_at,
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
        if ((null === (q = e.guild_member_profile) || void 0 === q ? void 0 : null === (z = q.profile_effect) || void 0 === z ? void 0 : z.expires_at) != null) {
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
function V(e) {
    let { userId: t, guildId: n } = e,
        r = null != n ? n : y,
        i = O.get(t);
    if (null != i) i.add(r);
    else {
        let e = new Set();
        e.add(r), O.set(t, e);
    }
}
function H(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: o } = e;
    null === (t = O.get(r)) || void 0 === t || t.delete(null != i ? i : y);
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
    (a.lastFetched = Date.now()), (a.fetchError = o), A.set(r, a);
}
function W(e) {
    let { userId: t, accent_color: n, banner: r, bio: i, pronouns: a, popout_animation_particle_type: s, theme_colors: l, profileEffectId: c, profileEffectExpiresAt: u } = e,
        d = A.get(t);
    if (null == d) return !1;
    if (
        (A.set(
            t,
            b(E({}, d), {
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
    let p = f.get(n);
    if (null == p) return !1;
    if (
        (f.set(
            n,
            b(E({}, p), {
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
    L = !0;
}
function z(e) {
    (L = !1), null != e.guild_id ? Y(e) : W(e);
}
function q(e) {
    L = !1;
}
function Q(e) {
    var t, n;
    let r = e.user.id,
        i = A.get(r);
    if (null == i || (null !== (n = null === (t = O.get(r)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0) return !1;
    et(i);
}
function X(e) {
    if (x.size < 1 && A.size < 1) return !1;
    for (let e of (x.clear(), A.values())) et(e);
}
function J(e) {
    let t = e.user.id,
        n = A.get(t);
    if (null == x.get(t) && null == n) return !1;
    x.delete(t), et(n);
}
function $(e) {
    let t = e.relationship.id,
        n = A.get(t);
    if (!w.has(t) && !D.has(t) && null == n) return !1;
    w.delete(t), D.delete(t), et(n);
}
function ee() {
    O.clear(), A.clear(), C.clear();
}
function et(e) {
    null != e && ((e.lastFetched = 0), (e.fetchError = void 0));
}
class en extends f.Z {
    initialize() {
        this.waitFor(p.ZP), this.syncWith([s.default], ee);
    }
    isFetchingProfile(e, t) {
        let n = O.get(e);
        return null != n && n.has(null != t ? t : y);
    }
    isFetchingFriends(e) {
        return S.has(e);
    }
    get isSubmitting() {
        return L;
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
        return x.get(e);
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
            USER_PROFILE_FETCH_START: V,
            USER_PROFILE_FETCH_FAILURE: H,
            USER_PROFILE_FETCH_SUCCESS: F,
            USER_PROFILE_UPDATE_START: K,
            USER_PROFILE_UPDATE_SUCCESS: z,
            USER_PROFILE_UPDATE_FAILURE: q,
            MUTUAL_FRIENDS_FETCH_START: U,
            MUTUAL_FRIENDS_FETCH_SUCCESS: Z,
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
