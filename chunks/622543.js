n.d(t, {
    A: () => eE,
}),
    n(228524),
    n(896048),
    n(938796),
    n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(540185),
    s = n(451988),
    o = n(573648),
    l = n(495704),
    c = n(773669),
    u = n(427157),
    d = n(961350),
    f = n(71393),
    p = n(536802),
    _ = n(290863),
    h = n(711014),
    m = n(403362),
    g = n(439174),
    E = n(633075),
    b = n(289173),
    y = n(985018);

function O(e, t, n) {
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
                O(e, t, n[t]);
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

function S(e, t) {
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
let I = Symbol("NO GUILD ID"),
    T = new Map(),
    C = new Set(),
    N = "premium",
    R = "guild_booster_lvl",
    w = 0x7fffffff,
    P = new Map(),
    D = new Map(),
    x = new Map(),
    L = new Map(),
    j = new Map(),
    M = new Map(),
    k = new Map(),
    U = [],
    G = [],
    V = null,
    F = new Map();

function B(e) {
    let t = e.data.type;
    switch (t) {
        case a.x.CURRENT_GAMES:
        case a.x.FAVORITE_GAMES:
        case a.x.PLAYED_GAMES:
        case a.x.WANT_TO_PLAY_GAMES:
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
        case a.x.APPLICATION:
            return new E.R({
                id: e.id,
                applicationId: e.data.application_id,
            });
    }
}
let H = !1,
    Y = null;

function W(e) {
    let t = P.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if ((null == n ? void 0 : n.expiresAt) == null) return;
    let r = 1e3 * n.expiresAt - Date.now();
    if (r <= 0) {
        (t.profileEffect = void 0), x.delete(e), eg.emitChange();
        return;
    }
    let i = x.get(e);
    null != i && i.start(Math.min(w, r), () => W(e));
}

function K(e, t) {
    var n, r;
    let i = D.get(e);
    if (null == i) return;
    let a = i.get(t);
    if (null == a) return;
    let s = a.profileEffect;
    if ((null == s ? void 0 : s.expiresAt) == null) return;
    let o = 1e3 * s.expiresAt - Date.now();
    if (o <= 0) {
        i.set(
            t,
            S(A({}, a), {
                profileEffect: void 0,
            }),
        ),
            null == (r = L.get(e)) || r.delete(t),
            eg.emitChange();
        return;
    }
    let l = null == (n = L.get(e)) ? void 0 : n.get(t);
    null != l && l.start(Math.min(w, o), () => K(e, t));
}

function z() {
    T.clear(), C.clear(), P.clear(), D.clear(), j.clear(), M.clear(), k.clear(), (H = !1);
}

function q(e) {
    let { userId: t } = e;
    C.add(t);
}

function X(e) {
    let { userId: t } = e;
    C.delete(t);
}

function Z(e) {
    return i()(e)
        .map((e) => ({
            key: e.id,
            user: new u.A(e),
            status: _.A.getStatus(e.id),
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}

function Q(e) {
    C.delete(e.userId), j.set(e.userId, Z(e.mutualFriends)), M.set(e.userId, e.mutualFriends.length);
}

function $(e) {
    var t, n, r, i, a, l, c, u, d, p, _, E, b, O, v, w, G, V, F, H, z;
    let { userProfile: q, fetchStartedAt: X } = e,
        Q = null != (t = null == (l = q.guild_member_profile) ? void 0 : l.guild_id) ? t : I;
    if ((null == (c = T.get(q.user.id)) || c.delete(Q), C.delete(q.user.id), null != q.mutual_guilds)) {
        let e = {};
        q.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = f.A.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r,
                });
        }),
            k.set(
                q.user.id,
                h.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick,
                    })),
            );
    }
    if (null != q.mutual_friends_count) {
        let e = q.mutual_friends_count;
        M.set(q.user.id, e), 0 === e && j.set(q.user.id, U);
    }
    null != q.mutual_friends && (j.set(q.user.id, Z(q.mutual_friends)), M.set(q.user.id, q.mutual_friends.length));
    let $ = null != q.premium_since ? new Date(q.premium_since) : null,
        ee = null != q.premium_guild_since ? new Date(q.premium_guild_since) : null,
        et = q.application,
        en = null == (u = q.user_profile) ? void 0 : u.profile_effect,
        er =
            null != q.badges
                ? q.badges.map((e) => {
                      let t = (0, g.e0)(e.id);
                      if ((e.id === N || null != t) && null != $) {
                          let n = y.intl.formatToPlainString(y.t["8zbGNR"], {
                              date: $,
                          });
                          return (
                              null != t &&
                                  (n = y.intl.formatToPlainString(y.t.Hu4jfi, {
                                      date: $,
                                  })),
                              S(A({}, e), {
                                  description: n,
                              })
                          );
                      }
                      return e.id.startsWith(R) && null != ee
                          ? S(A({}, e), {
                                description: y.intl.formatToPlainString(y.t.IWkAq7, {
                                    date: ee,
                                }),
                            })
                          : e;
                  })
                : [];
    if (
        (null != Y && Y.userId === q.user.id && (Date.now() > Y.expiresAtMs ? (Y = null) : J(er, Y)),
        P.set(q.user.id, {
            userId: q.user.id,
            banner: null == (d = q.user_profile) ? void 0 : d.banner,
            accentColor: null == (p = q.user_profile) ? void 0 : p.accent_color,
            themeColors: null == (_ = q.user_profile) ? void 0 : _.theme_colors,
            popoutAnimationParticleType: null == (E = q.user_profile) ? void 0 : E.popout_animation_particle_type,
            bio: null != (n = null == (b = q.user_profile) ? void 0 : b.bio) ? n : "",
            profileEffect:
                null != en
                    ? {
                          skuId: en.sku_id,
                          expiresAt: en.expires_at,
                      }
                    : void 0,
            pronouns: null != (r = null == (O = q.user_profile) ? void 0 : O.pronouns) ? r : "",
            connectedAccounts: null != (i = q.connected_accounts.filter((e) => o.A.isSupported(e.type))) ? i : [],
            applicationRoleConnections: null != (a = q.application_role_connections) ? a : [],
            premiumSince: $,
            premiumType: q.premium_type,
            premiumGuildSince: ee,
            fetchStartedAt: X,
            fetchEndedAt: Date.now(),
            legacyUsername: q.legacy_username,
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
                          name: et.name,
                      }
                    : null,
            badges: er,
            widgets: null == (v = q.widgets) ? void 0 : v.map(B).filter(m.Vq),
            wishlistSettings: q.wishlist_settings,
        }),
        (null == (G = q.user_profile) || null == (w = G.profile_effect) ? void 0 : w.expires_at) != null)
    ) {
        let e = new s.Ep();
        x.set(q.user.id, e), W(q.user.id);
    }
    if (null != q.guild_member_profile) {
        let e = q.guild_member_profile.profile_effect,
            t = {
                userId: q.user.id,
                guildId: q.guild_member_profile.guild_id,
                banner: q.guild_member_profile.banner,
                accentColor: q.guild_member_profile.accent_color,
                themeColors: null == (V = q.guild_member_profile) ? void 0 : V.theme_colors,
                popoutAnimationParticleType:
                    null == (F = q.guild_member_profile) ? void 0 : F.popout_animation_particle_type,
                profileEffect:
                    null != e
                        ? {
                              skuId: e.sku_id,
                              expiresAt: e.expires_at,
                          }
                        : void 0,
                bio: q.guild_member_profile.bio,
                pronouns: q.guild_member_profile.pronouns,
                badges: q.guild_badges,
            },
            n = D.get(q.user.id);
        if (null != n) n.set(q.guild_member_profile.guild_id, t);
        else {
            let e = new Map();
            e.set(q.guild_member_profile.guild_id, t), D.set(q.user.id, e);
        }
        if ((null == (z = q.guild_member_profile) || null == (H = z.profile_effect) ? void 0 : H.expires_at) != null) {
            let e = new s.Ep(),
                t = L.get(q.user.id);
            if (null != t) t.set(q.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(q.guild_member_profile.guild_id, e), L.set(q.user.id, t);
            }
            K(q.user.id, q.guild_member_profile.guild_id);
        }
    }
}

function J(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = null == t ? void 0 : t.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}

function ee(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = null != n ? n : I,
        a = T.get(t);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), T.set(t, e);
    }
    r && C.add(t);
}

function et(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a, fetchStartedAt: s } = e;
    null == (n = T.get(r)) || n.delete(null != i ? i : I), C.delete(r);
    let o =
        null != (t = P.get(r))
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
    (o.fetchStartedAt = s),
        (o.fetchEndedAt = Date.now()),
        (o.fetchError = a),
        P.set(r, o),
        (null == a ? void 0 : a.status) === 404 && (M.set(r, 0), j.set(r, U), k.set(r, G));
}

function en(e) {
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
        u = P.get(t);
    if (null == u) return !1;
    if (
        (P.set(
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
        x.set(t, e), W(t);
    }
}

function er(e) {
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
        d = D.get(t);
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
            r = L.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), L.set(t, r);
        }
        K(t, n);
    }
}

function ei(e) {
    H = !0;
}

function ea(e) {
    (H = !1), null != e.guild_id ? er(e) : en(e);
}

function es(e) {
    H = !1;
}

function eo(e) {
    let { userId: t, widgets: n } = e,
        r = P.get(t);
    if (null == r) return !1;
    P.set(
        t,
        S(A({}, r), {
            widgets: n.map(B).filter(m.Vq),
        }),
    );
}

function el(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    Y = {
        userId: r,
        badges: t,
        expiresAtMs: Date.now() + 1e3 * n,
    };
    let i = P.get(r);
    if (null != i) {
        var a;
        let e = null != (a = i.badges) ? a : [];
        J(e, Y),
            P.set(
                r,
                S(A({}, i), {
                    badges: e,
                }),
            );
    }
}

function ec(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (t = null == (n = T.get(r)) ? void 0 : n.size) ? t : 0) > 0) && e_(r);
}

function eu(e) {
    return [...P.keys()].reduce((e, t) => e_(t) || e, !1);
}

function ed(e) {
    return e_(e.user.id);
}

function ef(e) {
    return e_(e.relationship.id);
}

function ep() {
    T.clear(), C.clear(), P.clear(), D.clear();
}

function e_(e) {
    if (null == e) return !1;
    let t = P.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}

function eh(e) {
    for (let t of ((V = e.applicationConfigs.map((e) => new l.V(e))), F.clear(), V)) F.set(t.applicationId, t);
}
class em extends p.A {
    initialize() {
        this.waitFor(h.Ay), this.syncWith([c.default], ep);
    }
    isFetchingProfile(e, t) {
        let n = T.get(e);
        return null != n && n.has(null != t ? t : I);
    }
    isFetchingFriends(e) {
        return C.has(e);
    }
    get isSubmitting() {
        return H;
    }
    getUserProfile(e) {
        return P.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null != (n = null == (r = D.get(e)) ? void 0 : r.get(t)) ? n : null;
    }
    getMutualFriends(e) {
        return j.get(e);
    }
    getMutualFriendsCount(e) {
        return M.get(e);
    }
    getMutualGuilds(e) {
        return k.get(e);
    }
    getWidgets(e) {
        var t;
        return null == (t = P.get(e)) ? void 0 : t.widgets;
    }
    getWishlistIds(e) {
        let t = P.get(e);
        return (null == t ? void 0 : t.wishlistSettings) != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        var n, r;
        let i = P.get(e);
        return null != (n = null == i || null == (r = i.wishlistSettings) ? void 0 : r[t]) ? n : null;
    }
    takeSnapshot() {
        let e = d.default.getId(),
            t = P.get(e);
        return null != t
            ? {
                  version: em.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t,
                      },
                  ],
              }
            : {
                  version: em.LATEST_SNAPSHOT_VERSION,
                  data: [],
              };
    }
    get applicationWidgetConfigs() {
        return V;
    }
    getApplicationWidgetConfig(e) {
        return F.get(e);
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: ee,
            USER_PROFILE_FETCH_FAILURE: et,
            USER_PROFILE_FETCH_SUCCESS: $,
            USER_PROFILE_UPDATE_START: ei,
            USER_PROFILE_UPDATE_SUCCESS: ea,
            USER_PROFILE_UPDATE_FAILURE: es,
            WIDGET_PENDING_SAVE_SUCCESS: eo,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: el,
            MUTUAL_FRIENDS_FETCH_START: q,
            MUTUAL_FRIENDS_FETCH_SUCCESS: Q,
            MUTUAL_FRIENDS_FETCH_FAILURE: X,
            USER_UPDATE: ec,
            GUILD_MEMBER_UPDATE: ec,
            GUILD_JOIN: eu,
            GUILD_DELETE: eu,
            INVITE_ACCEPT_SUCCESS: eu,
            GUILD_MEMBER_ADD: ed,
            GUILD_MEMBER_REMOVE: ed,
            RELATIONSHIP_ADD: ef,
            RELATIONSHIP_REMOVE: ef,
            RELATIONSHIP_UPDATE: ef,
            USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: eh,
            LOGOUT: z,
        }),
            O(this, "loadCache", () => {
                let e = this.readSnapshot(em.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? P.set(t, n) : P.delete(t));
                    });
            });
    }
}
O(em, "displayName", "UserProfileStore"), O(em, "LATEST_SNAPSHOT_VERSION", 1);
let eg = new em(),
    eE = eg;
