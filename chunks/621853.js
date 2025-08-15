n.d(t, { Z: () => ed }), n(953529), n(388685), n(997841), n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(846519),
    o = n(726542),
    s = n(706454),
    l = n(598077),
    c = n(314897),
    u = n(430824),
    d = n(750041),
    f = n(158776),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
let O = Symbol("NO GUILD ID"),
    v = new Map(),
    I = new Set(),
    T = "premium",
    S = "guild_booster_lvl",
    A = 2147483647,
    N = new Map(),
    C = new Map(),
    R = new Map(),
    P = new Map(),
    w = new Map(),
    D = new Map(),
    L = new Map(),
    x = [],
    M = [];
function k(e) {
    let t = e.data.type,
        n = e.data.games.map((e) => y(E({}, e), { applicationId: e.game_id }));
    return {
        id: e.id,
        type: t,
        games: n,
    };
}
let j = !1,
    U = null;
function G(e) {
    let t = N.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + h.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), R.delete(e), eu.emitChange();
    else {
        let t = R.get(e);
        if (null == t) return;
        t.start(Math.min(A, n), () => G(e));
    }
}
function B(e, t) {
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
                profileEffectExpiresAt: void 0,
            }),
        ),
            null != i && i.delete(t),
            eu.emitChange();
    else {
        if (null == i) return;
        let n = i.get(t);
        if (null == n) return;
        n.start(Math.min(A, a), () => B(e, t));
    }
}
function V() {
    v.clear(), I.clear(), N.clear(), C.clear(), w.clear(), D.clear(), L.clear(), (j = !1);
}
function F(e) {
    let { userId: t } = e;
    I.add(t);
}
function Z(e) {
    let { userId: t } = e;
    I.delete(t);
}
function H(e) {
    return i()(e)
        .map((e) => ({
            key: e.id,
            user: new l.Z(e),
            status: f.Z.getStatus(e.id),
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function Y(e) {
    I.delete(e.userId), w.set(e.userId, H(e.mutualFriends)), D.set(e.userId, e.mutualFriends.length);
}
function W(e) {
    var t, n, r, i, s, l, c, d, f, h, g, b, A, M, j, V, F, Z, Y, W, z, q, X, Q, J, $, ee, et;
    let { userProfile: en, fetchStartedAt: er } = e,
        ei = null != (V = null == (t = en.guild_member_profile) ? void 0 : t.guild_id) ? V : O;
    if ((null == (n = v.get(en.user.id)) || n.delete(ei), I.delete(en.user.id), null != en.mutual_guilds)) {
        let e = {};
        en.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = u.Z.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r,
                });
        }),
            L.set(
                en.user.id,
                _.ZP.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick,
                    })),
            );
    }
    if (null != en.mutual_friends_count) {
        let e = en.mutual_friends_count;
        D.set(en.user.id, e), 0 === e && w.set(en.user.id, x);
    }
    null != en.mutual_friends && (w.set(en.user.id, H(en.mutual_friends)), D.set(en.user.id, en.mutual_friends.length));
    let ea = null != en.premium_since ? new Date(en.premium_since) : null,
        eo = null != en.premium_guild_since ? new Date(en.premium_guild_since) : null,
        es = en.application,
        el =
            null != en.badges
                ? en.badges.map((e) => {
                      let t = (0, p.fv)(e.id);
                      if ((e.id === T || null != t) && null != ea) {
                          let n = m.intl.formatToPlainString(m.t["8zbGNT"], { date: ea });
                          return (
                              null != t && (n = m.intl.formatToPlainString(m.t.Hu4jfn, { date: ea })),
                              y(E({}, e), { description: n })
                          );
                      }
                      return e.id.startsWith(S) && null != eo
                          ? y(E({}, e), { description: m.intl.formatToPlainString(m.t.IWkAq6, { date: eo }) })
                          : e;
                  })
                : [];
    if (
        (null != U && U.userId === en.user.id && (Date.now() > U.expiresAtMs ? (U = null) : K(el, U)),
        N.set(en.user.id, {
            userId: en.user.id,
            banner: null == (r = en.user_profile) ? void 0 : r.banner,
            accentColor: null == (i = en.user_profile) ? void 0 : i.accent_color,
            themeColors: null == (s = en.user_profile) ? void 0 : s.theme_colors,
            popoutAnimationParticleType: null == (l = en.user_profile) ? void 0 : l.popout_animation_particle_type,
            bio: null != (F = null == (c = en.user_profile) ? void 0 : c.bio) ? F : "",
            profileEffectId: null == (f = en.user_profile) || null == (d = f.profile_effect) ? void 0 : d.id,
            profileEffectExpiresAt:
                null == (g = en.user_profile) || null == (h = g.profile_effect) ? void 0 : h.expires_at,
            pronouns: null != (Z = null == (b = en.user_profile) ? void 0 : b.pronouns) ? Z : "",
            connectedAccounts: null != (Y = en.connected_accounts.filter((e) => o.Z.isSupported(e.type))) ? Y : [],
            applicationRoleConnections: null != (W = en.application_role_connections) ? W : [],
            premiumSince: ea,
            premiumType: en.premium_type,
            premiumGuildSince: eo,
            fetchStartedAt: er,
            fetchEndedAt: Date.now(),
            legacyUsername: en.legacy_username,
            application:
                null != es
                    ? {
                          id: es.id,
                          primarySkuId: es.primary_sku_id,
                          customInstallUrl: es.custom_install_url,
                          installParams: es.install_params,
                          integrationTypesConfig: es.integration_types_config,
                          flags: es.flags,
                          popularApplicationCommandIds: es.popular_application_command_ids,
                          storefront_available: es.storefront_available,
                          name: es.name,
                      }
                    : null,
            badges: el,
            widgets: null == (A = en.widgets) ? void 0 : A.map(k),
        }),
        (null == (j = en.user_profile) || null == (M = j.profile_effect) ? void 0 : M.expires_at) != null)
    ) {
        let e = new a.V7();
        R.set(en.user.id, e), G(en.user.id);
    }
    if (null != en.guild_member_profile) {
        let e = {
                userId: en.user.id,
                guildId: en.guild_member_profile.guild_id,
                banner: en.guild_member_profile.banner,
                accentColor: en.guild_member_profile.accent_color,
                themeColors: null == (z = en.guild_member_profile) ? void 0 : z.theme_colors,
                popoutAnimationParticleType:
                    null == (q = en.guild_member_profile) ? void 0 : q.popout_animation_particle_type,
                profileEffectId:
                    null == (Q = en.guild_member_profile) || null == (X = Q.profile_effect) ? void 0 : X.id,
                profileEffectExpiresAt:
                    null == ($ = en.guild_member_profile) || null == (J = $.profile_effect) ? void 0 : J.expires_at,
                bio: en.guild_member_profile.bio,
                pronouns: en.guild_member_profile.pronouns,
                badges: en.guild_badges,
            },
            t = C.get(en.user.id);
        if (null != t) t.set(en.guild_member_profile.guild_id, e);
        else {
            let t = new Map();
            t.set(en.guild_member_profile.guild_id, e), C.set(en.user.id, t);
        }
        if (
            (null == (et = en.guild_member_profile) || null == (ee = et.profile_effect) ? void 0 : ee.expires_at) !=
            null
        ) {
            let e = new a.V7(),
                t = P.get(en.user.id);
            if (null != t) t.set(en.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(en.guild_member_profile.guild_id, e), P.set(en.user.id, t);
            }
            B(en.user.id, en.guild_member_profile.guild_id);
        }
    }
}
function K(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = null == t ? void 0 : t.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}
function z(e) {
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
function q(e) {
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
                  bio: "",
                  pronouns: "",
                  premiumType: null,
                  fetchStartedAt: 0,
                  fetchEndedAt: 0,
                  fetchError: void 0,
              };
    (s.fetchStartedAt = o),
        (s.fetchEndedAt = Date.now()),
        (s.fetchError = a),
        N.set(r, s),
        (null == a ? void 0 : a.status) === 404 && (D.set(r, 0), w.set(r, x), L.set(r, M));
}
function X(e) {
    let {
            userId: t,
            accent_color: n,
            banner: r,
            bio: i,
            pronouns: o,
            popout_animation_particle_type: s,
            theme_colors: l,
            profileEffectId: c,
            profileEffectExpiresAt: u,
        } = e,
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
                profileEffectExpiresAt: u,
            }),
        ),
        null != u)
    ) {
        let e = new a.V7();
        R.set(t, e), G(t);
    }
}
function Q(e) {
    let {
            userId: t,
            guild_id: n,
            accent_color: r,
            banner: i,
            bio: o,
            pronouns: s,
            popout_animation_particle_type: l,
            theme_colors: c,
            profileEffectId: u,
            profileEffectExpiresAt: d,
        } = e,
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
                profileEffectExpiresAt: d,
            }),
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
        B(t, n);
    }
}
function J(e) {
    j = !0;
}
function $(e) {
    (j = !1), null != e.guild_id ? Q(e) : X(e);
}
function ee(e) {
    j = !1;
}
function et(e) {
    let { userId: t, widgets: n } = e,
        r = N.get(t);
    if (null == r) return !1;
    N.set(t, y(E({}, r), { widgets: n.map(k) }));
}
function en(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    U = {
        userId: r,
        badges: t,
        expiresAtMs: Date.now() + 1000 * n,
    };
    let i = N.get(r);
    if (null != i) {
        var a;
        let e = null != (a = i.badges) ? a : [];
        K(e, U), N.set(r, y(E({}, i), { badges: e }));
    }
}
function er(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (n = null == (t = v.get(r)) ? void 0 : t.size) ? n : 0) > 0) && el(r);
}
function ei(e) {
    return [...N.keys()].reduce((e, t) => el(t) || e, !1);
}
function ea(e) {
    return el(e.user.id);
}
function eo(e) {
    return el(e.relationship.id);
}
function es() {
    v.clear(), I.clear(), N.clear(), C.clear();
}
function el(e) {
    if (null == e) return !1;
    let t = N.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
class ec extends d.Z {
    initialize() {
        this.waitFor(_.ZP), this.syncWith([s.default], es);
    }
    isFetchingProfile(e, t) {
        let n = v.get(e);
        return null != n && n.has(null != t ? t : O);
    }
    isFetchingFriends(e) {
        return I.has(e);
    }
    get isSubmitting() {
        return j;
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
    getWidgets(e) {
        var t;
        return null == (t = N.get(e)) ? void 0 : t.widgets;
    }
    takeSnapshot() {
        let e = c.default.getId(),
            t = N.get(e);
        return null != t
            ? {
                  version: ec.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t,
                      },
                  ],
              }
            : {
                  version: ec.LATEST_SNAPSHOT_VERSION,
                  data: [],
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: z,
            USER_PROFILE_FETCH_FAILURE: q,
            USER_PROFILE_FETCH_SUCCESS: W,
            USER_PROFILE_UPDATE_START: J,
            USER_PROFILE_UPDATE_SUCCESS: $,
            USER_PROFILE_UPDATE_FAILURE: ee,
            WIDGET_PENDING_SAVE_SUCCESS: et,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: en,
            MUTUAL_FRIENDS_FETCH_START: F,
            MUTUAL_FRIENDS_FETCH_SUCCESS: Y,
            MUTUAL_FRIENDS_FETCH_FAILURE: Z,
            USER_UPDATE: er,
            GUILD_MEMBER_UPDATE: er,
            GUILD_JOIN: ei,
            GUILD_DELETE: ei,
            INVITE_ACCEPT_SUCCESS: ei,
            GUILD_MEMBER_ADD: ea,
            GUILD_MEMBER_REMOVE: ea,
            RELATIONSHIP_ADD: eo,
            RELATIONSHIP_REMOVE: eo,
            RELATIONSHIP_UPDATE: eo,
            LOGOUT: V,
        }),
            g(this, "loadCache", () => {
                let e = this.readSnapshot(ec.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? N.set(t, n) : N.delete(t));
                    });
            });
    }
}
g(ec, "displayName", "UserProfileStore"), g(ec, "LATEST_SNAPSHOT_VERSION", 1);
let eu = new ec(),
    ed = eu;
