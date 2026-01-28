n.d(t, {
    A: () => ey,
}),
    n(228524),
    n(896048),
    n(938796),
    n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(575593),
    o = n(540185),
    s = n(451988),
    l = n(573648),
    c = n(495704),
    u = n(773669),
    d = n(427157),
    f = n(961350),
    p = n(71393),
    _ = n(536802),
    h = n(290863),
    m = n(711014),
    g = n(403362),
    E = n(439174),
    y = n(633075),
    b = n(289173),
    O = n(985018);

function v(e, t, n) {
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

function A(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e, t) {
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

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = Symbol("NO GUILD ID"),
    C = new Map(),
    N = new Set(),
    w = "premium",
    R = "guild_booster_lvl",
    P = 0x7fffffff,
    D = new Map(),
    L = new Map(),
    x = new Map(),
    M = new Map(),
    j = new Map(),
    k = new Map(),
    U = new Map(),
    G = [],
    F = [],
    V = null,
    B = new Map();

function H(e) {
    let t = e.data.type;
    switch (t) {
        case o.x.CURRENT_GAMES:
        case o.x.FAVORITE_GAMES:
        case o.x.PLAYED_GAMES:
        case o.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({
                    applicationId: e.game_id,
                    comment: e.comment,
                    tags: e.tags,
                })),
                r = i().uniqBy(n, "applicationId");
            return new b.Yy({
                id: e.id,
                type: t,
                games: r,
            });
        case o.x.APPLICATION:
            return new y.R({
                id: e.id,
                applicationId: e.data.application_id,
            });
    }
}
let Y = !1,
    W = null;

function K(e) {
    let t = D.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if ((null == n ? void 0 : n.expiresAt) == null) return;
    let r = 1e3 * n.expiresAt - Date.now();
    if (r <= 0) {
        (t.profileEffect = void 0), x.delete(e), eE.emitChange();
        return;
    }
    let i = x.get(e);
    null != i && i.start(Math.min(P, r), () => K(e));
}

function z(e, t) {
    var n, r;
    let i = L.get(e);
    if (null == i) return;
    let a = i.get(t);
    if (null == a) return;
    let o = a.profileEffect;
    if ((null == o ? void 0 : o.expiresAt) == null) return;
    let s = 1e3 * o.expiresAt - Date.now();
    if (s <= 0) {
        i.set(
            t,
            S(A({}, a), {
                profileEffect: void 0,
            }),
        ),
            null == (r = M.get(e)) || r.delete(t),
            eE.emitChange();
        return;
    }
    let l = null == (n = M.get(e)) ? void 0 : n.get(t);
    null != l && l.start(Math.min(P, s), () => z(e, t));
}

function q() {
    C.clear(), N.clear(), D.clear(), L.clear(), j.clear(), k.clear(), U.clear(), (Y = !1);
}

function Z(e) {
    let { userId: t } = e;
    N.add(t);
}

function Q(e) {
    let { userId: t } = e;
    N.delete(t);
}

function X(e) {
    return i()(e)
        .map((e) => ({
            key: e.id,
            user: new d.A(e),
            status: h.A.getStatus(e.id),
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}

function J(e) {
    N.delete(e.userId), j.set(e.userId, X(e.mutualFriends)), k.set(e.userId, e.mutualFriends.length);
}

function $(e) {
    var t, n, r, i, o, c, u, d, f, _, h, y, b, v, I, P, F, V, B, Y, q, Z;
    let Q,
        { userProfile: J, fetchStartedAt: $ } = e,
        et = null != (t = null == (c = J.guild_member_profile) ? void 0 : c.guild_id) ? t : T;
    if ((null == (u = C.get(J.user.id)) || u.delete(et), N.delete(J.user.id), null != J.mutual_guilds)) {
        let e = {};
        J.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = p.A.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r,
                });
        }),
            U.set(
                J.user.id,
                m.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick,
                    })),
            );
    }
    if (null != J.mutual_friends_count) {
        let e = J.mutual_friends_count;
        k.set(J.user.id, e), 0 === e && j.set(J.user.id, G);
    }
    null != J.mutual_friends && (j.set(J.user.id, X(J.mutual_friends)), k.set(J.user.id, J.mutual_friends.length));
    let en = null != J.premium_since ? new Date(J.premium_since) : null,
        er = null != J.premium_guild_since ? new Date(J.premium_guild_since) : null,
        ei = J.application,
        ea =
            null != J.badges
                ? J.badges.map((e) => {
                      let t = (0, E.e0)(e.id);
                      if ((e.id === w || null != t) && null != en) {
                          let n = O.intl.formatToPlainString(O.t["8zbGNR"], {
                              date: en,
                          });
                          return (
                              null != t &&
                                  (n = O.intl.formatToPlainString(O.t.Hu4jfi, {
                                      date: en,
                                  })),
                              S(A({}, e), {
                                  description: n,
                              })
                          );
                      }
                      return e.id.startsWith(R) && null != er
                          ? S(A({}, e), {
                                description: O.intl.formatToPlainString(O.t.IWkAq7, {
                                    date: er,
                                }),
                            })
                          : e;
                  })
                : [];
    if (
        (null != W && W.userId === J.user.id && (Date.now() > W.expiresAtMs ? (W = null) : ee(ea, W)),
        (null == (d = J.user_profile) ? void 0 : d.collectibles) != null)
    ) {
        let e = J.user_profile.collectibles.find((e) => {
            let { type: t } = e;
            return t === a.R.PROFILE_EFFECT;
        });
        null != e &&
            (Q = {
                skuId: e.sku_id,
                expiresAt: null != e.expires_at ? Math.floor(new Date(e.expires_at).getTime() / 1e3) : void 0,
            });
    }
    if (
        (null == Q &&
            (null == (f = J.user_profile) ? void 0 : f.profile_effect) != null &&
            (Q = {
                skuId: J.user_profile.profile_effect.sku_id,
                expiresAt: J.user_profile.profile_effect.expires_at,
            }),
        D.set(J.user.id, {
            userId: J.user.id,
            banner: null == (_ = J.user_profile) ? void 0 : _.banner,
            accentColor: null == (h = J.user_profile) ? void 0 : h.accent_color,
            themeColors: null == (y = J.user_profile) ? void 0 : y.theme_colors,
            popoutAnimationParticleType: null == (b = J.user_profile) ? void 0 : b.popout_animation_particle_type,
            bio: null != (n = null == (v = J.user_profile) ? void 0 : v.bio) ? n : "",
            profileEffect: Q,
            pronouns: null != (r = null == (I = J.user_profile) ? void 0 : I.pronouns) ? r : "",
            connectedAccounts: null != (i = J.connected_accounts.filter((e) => l.A.isSupported(e.type))) ? i : [],
            applicationRoleConnections: null != (o = J.application_role_connections) ? o : [],
            premiumSince: en,
            premiumType: J.premium_type,
            premiumGuildSince: er,
            fetchStartedAt: $,
            fetchEndedAt: Date.now(),
            legacyUsername: J.legacy_username,
            application:
                null != ei
                    ? {
                          id: ei.id,
                          primarySkuId: ei.primary_sku_id,
                          customInstallUrl: ei.custom_install_url,
                          installParams: ei.install_params,
                          integrationTypesConfig: ei.integration_types_config,
                          flags: ei.flags,
                          popularApplicationCommandIds: ei.popular_application_command_ids,
                          storefront_available: ei.storefront_available,
                          name: ei.name,
                      }
                    : null,
            badges: ea,
            widgets: null == (P = J.widgets) ? void 0 : P.map(H).filter(g.Vq),
            wishlistSettings: J.wishlist_settings,
            collectibles:
                null == (V = J.user_profile) || null == (F = V.collectibles)
                    ? void 0
                    : F.map((e) => {
                          let { sku_id: t, type: n, expires_at: r } = e;
                          return {
                              expiresAt: null != r ? new Date(r) : void 0,
                              skuId: t,
                              type: n,
                          };
                      }),
        }),
        (null == Q ? void 0 : Q.expiresAt) != null)
    ) {
        let e = new s.Ep();
        x.set(J.user.id, e), K(J.user.id);
    }
    if (null != J.guild_member_profile) {
        let e;
        if ((null == (B = J.guild_member_profile) ? void 0 : B.collectibles) != null) {
            let t = J.guild_member_profile.collectibles.find((e) => {
                let { type: t } = e;
                return t === a.R.PROFILE_EFFECT;
            });
            null != t &&
                (e = {
                    skuId: t.sku_id,
                    expiresAt: null != t.expires_at ? Math.floor(new Date(t.expires_at).getTime() / 1e3) : void 0,
                });
        }
        null == e &&
            (null == (Y = J.guild_member_profile) ? void 0 : Y.profile_effect) != null &&
            (e = {
                skuId: J.guild_member_profile.profile_effect.sku_id,
                expiresAt: J.guild_member_profile.profile_effect.expires_at,
            });
        let t = {
                userId: J.user.id,
                guildId: J.guild_member_profile.guild_id,
                banner: J.guild_member_profile.banner,
                accentColor: J.guild_member_profile.accent_color,
                themeColors: null == (q = J.guild_member_profile) ? void 0 : q.theme_colors,
                popoutAnimationParticleType:
                    null == (Z = J.guild_member_profile) ? void 0 : Z.popout_animation_particle_type,
                profileEffect: e,
                bio: J.guild_member_profile.bio,
                pronouns: J.guild_member_profile.pronouns,
                badges: J.guild_badges,
            },
            n = L.get(J.user.id);
        if (null != n) n.set(J.guild_member_profile.guild_id, t);
        else {
            let e = new Map();
            e.set(J.guild_member_profile.guild_id, t), L.set(J.user.id, e);
        }
        if ((null == e ? void 0 : e.expiresAt) != null) {
            let e = new s.Ep(),
                t = M.get(J.user.id);
            if (null != t) t.set(J.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(J.guild_member_profile.guild_id, e), M.set(J.user.id, t);
            }
            z(J.user.id, J.guild_member_profile.guild_id);
        }
    }
}

function ee(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = null == t ? void 0 : t.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}

function et(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = null != n ? n : T,
        a = C.get(t);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), C.set(t, e);
    }
    r && N.add(t);
}

function en(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a, fetchStartedAt: o } = e;
    null == (n = C.get(r)) || n.delete(null != i ? i : T), N.delete(r);
    let s =
        null != (t = D.get(r))
            ? t
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
        D.set(r, s),
        (null == a ? void 0 : a.status) === 404 && (k.set(r, 0), j.set(r, G), U.set(r, F));
}

function er(e) {
    let {
            userId: t,
            accent_color: n,
            banner: r,
            bio: i,
            pronouns: a,
            popout_animation_particle_type: o,
            theme_colors: l,
            profile_effect: c,
        } = e,
        u = D.get(t);
    if (null == u) return !1;
    if (
        (D.set(
            t,
            S(A({}, u), {
                accentColor: n,
                banner: r,
                bio: i,
                pronouns: a,
                popoutAnimationParticleType: o,
                themeColors: l,
                profileEffect:
                    null != c
                        ? {
                              skuId: c.sku_id,
                              expiresAt: c.expires_at,
                          }
                        : void 0,
            }),
        ),
        (null == c ? void 0 : c.expires_at) != null)
    ) {
        let e = new s.Ep();
        x.set(t, e), K(t);
    }
}

function ei(e) {
    let {
            userId: t,
            guild_id: n,
            accent_color: r,
            banner: i,
            bio: a,
            pronouns: o,
            popout_animation_particle_type: l,
            theme_colors: c,
            profile_effect: u,
        } = e,
        d = L.get(t);
    if (null == n || null == d) return !1;
    let f = d.get(n);
    if (null == f) return !1;
    if (
        (d.set(
            n,
            S(A({}, f), {
                accentColor: r,
                banner: i,
                bio: a,
                pronouns: o,
                popoutAnimationParticleType: l,
                themeColors: c,
                profileEffect:
                    null != u
                        ? {
                              skuId: u.sku_id,
                              expiresAt: u.expires_at,
                          }
                        : void 0,
            }),
        ),
        (null == u ? void 0 : u.expires_at) != null)
    ) {
        let e = new s.Ep(),
            r = M.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), M.set(t, r);
        }
        z(t, n);
    }
}

function ea(e) {
    Y = !0;
}

function eo(e) {
    (Y = !1), null != e.guild_id ? ei(e) : er(e);
}

function es(e) {
    Y = !1;
}

function el(e) {
    let { userId: t, widgets: n } = e,
        r = D.get(t);
    if (null == r) return !1;
    D.set(
        t,
        S(A({}, r), {
            widgets: n.map(H).filter(g.Vq),
        }),
    );
}

function ec(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    W = {
        userId: r,
        badges: t,
        expiresAtMs: Date.now() + 1e3 * n,
    };
    let i = D.get(r);
    if (null != i) {
        var a;
        let e = null != (a = i.badges) ? a : [];
        ee(e, W),
            D.set(
                r,
                S(A({}, i), {
                    badges: e,
                }),
            );
    }
}

function eu(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (t = null == (n = C.get(r)) ? void 0 : n.size) ? t : 0) > 0) && eh(r);
}

function ed(e) {
    return [...D.keys()].reduce((e, t) => eh(t) || e, !1);
}

function ef(e) {
    return eh(e.user.id);
}

function ep(e) {
    return eh(e.relationship.id);
}

function e_() {
    C.clear(), N.clear(), D.clear(), L.clear();
}

function eh(e) {
    if (null == e) return !1;
    let t = D.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}

function em(e) {
    for (let t of ((V = e.applicationConfigs.map((e) => new c.V(e))), B.clear(), V)) B.set(t.applicationId, t);
}
class eg extends _.A {
    initialize() {
        this.waitFor(m.Ay), this.syncWith([u.default], e_);
    }
    isFetchingProfile(e, t) {
        let n = C.get(e);
        return null != n && n.has(null != t ? t : T);
    }
    isFetchingFriends(e) {
        return N.has(e);
    }
    get isSubmitting() {
        return Y;
    }
    getUserProfile(e) {
        return D.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null != (n = null == (r = L.get(e)) ? void 0 : r.get(t)) ? n : null;
    }
    getMutualFriends(e) {
        return j.get(e);
    }
    getMutualFriendsCount(e) {
        return k.get(e);
    }
    getMutualGuilds(e) {
        return U.get(e);
    }
    getWidgets(e) {
        var t;
        return null == (t = D.get(e)) ? void 0 : t.widgets;
    }
    getWishlistIds(e) {
        let t = D.get(e);
        return (null == t ? void 0 : t.wishlistSettings) != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        if (null == e) return null;
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        var n, r;
        let i = D.get(e);
        return null != (n = null == i || null == (r = i.wishlistSettings) ? void 0 : r[t]) ? n : null;
    }
    takeSnapshot() {
        let e = f.default.getId(),
            t = D.get(e);
        return null != t
            ? {
                  version: eg.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t,
                      },
                  ],
              }
            : {
                  version: eg.LATEST_SNAPSHOT_VERSION,
                  data: [],
              };
    }
    get applicationWidgetConfigs() {
        return V;
    }
    getApplicationWidgetConfig(e) {
        return B.get(e);
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: et,
            USER_PROFILE_FETCH_FAILURE: en,
            USER_PROFILE_FETCH_SUCCESS: $,
            USER_PROFILE_UPDATE_START: ea,
            USER_PROFILE_UPDATE_SUCCESS: eo,
            USER_PROFILE_UPDATE_FAILURE: es,
            WIDGET_PENDING_SAVE_SUCCESS: el,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: ec,
            MUTUAL_FRIENDS_FETCH_START: Z,
            MUTUAL_FRIENDS_FETCH_SUCCESS: J,
            MUTUAL_FRIENDS_FETCH_FAILURE: Q,
            USER_UPDATE: eu,
            GUILD_MEMBER_UPDATE: eu,
            GUILD_JOIN: ed,
            GUILD_DELETE: ed,
            INVITE_ACCEPT_SUCCESS: ed,
            GUILD_MEMBER_ADD: ef,
            GUILD_MEMBER_REMOVE: ef,
            RELATIONSHIP_ADD: ep,
            RELATIONSHIP_REMOVE: ep,
            RELATIONSHIP_UPDATE: ep,
            USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: em,
            LOGOUT: q,
        }),
            v(this, "loadCache", () => {
                let e = this.readSnapshot(eg.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? D.set(t, n) : D.delete(t));
                    });
            });
    }
}
v(eg, "displayName", "UserProfileStore"), v(eg, "LATEST_SNAPSHOT_VERSION", 1);
let eE = new eg(),
    ey = eE;
