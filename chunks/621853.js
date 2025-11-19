n.d(t, { Z: () => eE }), n(953529), n(388685), n(997841), n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(296009),
    o = n(846519),
    s = n(726542),
    l = n(706454),
    c = n(598077),
    u = n(314897),
    d = n(430824),
    f = n(750041),
    _ = n(158776),
    p = n(771845),
    h = n(823379),
    m = n(291175),
    g = n(931847),
    E = n(836197),
    b = n(215023),
    y = n(388032);
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
function v(e) {
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
function T(e, t) {
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
let S = Symbol("NO GUILD ID"),
    A = new Map(),
    C = new Set(),
    N = "premium",
    R = "guild_booster_lvl",
    P = 2147483647,
    D = new Map(),
    w = new Map(),
    L = new Map(),
    x = new Map(),
    M = new Map(),
    j = new Map(),
    k = new Map(),
    U = [],
    G = [],
    B = null,
    Z = new Map();
function F(e) {
    let t = e.data.type;
    switch (t) {
        case a.l.CURRENT_GAMES:
        case a.l.FAVORITE_GAMES:
        case a.l.PLAYED_GAMES:
        case a.l.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({
                    applicationId: e.game_id,
                    comment: e.comment,
                    tags: e.tags,
                })),
                r = i().uniqBy(n, "applicationId");
            return new E.zy({
                id: e.id,
                type: t,
                games: r,
            });
        case a.l.APPLICATION:
            return new g.q({
                id: e.id,
                type: t,
                applicationId: e.data.application_id,
            });
    }
}
let V = !1,
    H = null;
function Y(e) {
    let t = D.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if ((null == n ? void 0 : n.expiresAt) == null) return;
    let r = 1000 * n.expiresAt + b.Cm - Date.now();
    if (r <= 0) {
        (t.profileEffect = void 0), L.delete(e), eg.emitChange();
        return;
    }
    let i = L.get(e);
    null != i && i.start(Math.min(P, r), () => Y(e));
}
function W(e, t) {
    var n, r;
    let i = w.get(e);
    if (null == i) return;
    let a = i.get(t);
    if (null == a) return;
    let o = a.profileEffect;
    if ((null == o ? void 0 : o.expiresAt) == null) return;
    let s = 1000 * o.expiresAt + b.Cm - Date.now();
    if (s <= 0) {
        i.set(t, T(v({}, a), { profileEffect: void 0 })), null == (r = x.get(e)) || r.delete(t), eg.emitChange();
        return;
    }
    let l = null == (n = x.get(e)) ? void 0 : n.get(t);
    null != l && l.start(Math.min(P, s), () => W(e, t));
}
function K() {
    A.clear(), C.clear(), D.clear(), w.clear(), M.clear(), j.clear(), k.clear(), (V = !1);
}
function z(e) {
    let { userId: t } = e;
    C.add(t);
}
function q(e) {
    let { userId: t } = e;
    C.delete(t);
}
function X(e) {
    return i()(e)
        .map((e) => ({
            key: e.id,
            user: new c.Z(e),
            status: _.Z.getStatus(e.id),
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function Q(e) {
    C.delete(e.userId), M.set(e.userId, X(e.mutualFriends)), j.set(e.userId, e.mutualFriends.length);
}
function J(e) {
    var t, n, r, i, a, l, c, u, f, _, g, E, b, O, I, P, G, B, Z, V, K;
    let { userProfile: z, fetchStartedAt: q } = e,
        Q = null != (b = null == (t = z.guild_member_profile) ? void 0 : t.guild_id) ? b : S;
    if ((null == (n = A.get(z.user.id)) || n.delete(Q), C.delete(z.user.id), null != z.mutual_guilds)) {
        let e = {};
        z.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = d.Z.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r,
                });
        }),
            k.set(
                z.user.id,
                p.ZP.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick,
                    })),
            );
    }
    if (null != z.mutual_friends_count) {
        let e = z.mutual_friends_count;
        j.set(z.user.id, e), 0 === e && M.set(z.user.id, U);
    }
    null != z.mutual_friends && (M.set(z.user.id, X(z.mutual_friends)), j.set(z.user.id, z.mutual_friends.length));
    let J = null != z.premium_since ? new Date(z.premium_since) : null,
        ee = null != z.premium_guild_since ? new Date(z.premium_guild_since) : null,
        et = z.application,
        en = null == (r = z.user_profile) ? void 0 : r.profile_effect,
        er =
            null != z.badges
                ? z.badges.map((e) => {
                      let t = (0, m.fv)(e.id);
                      if ((e.id === N || null != t) && null != J) {
                          let n = y.intl.formatToPlainString(y.t["8zbGNR"], { date: J });
                          return (
                              null != t && (n = y.intl.formatToPlainString(y.t.Hu4jfi, { date: J })),
                              T(v({}, e), { description: n })
                          );
                      }
                      return e.id.startsWith(R) && null != ee
                          ? T(v({}, e), { description: y.intl.formatToPlainString(y.t.IWkAq7, { date: ee }) })
                          : e;
                  })
                : [];
    if (
        (null != H && H.userId === z.user.id && (Date.now() > H.expiresAtMs ? (H = null) : $(er, H)),
        D.set(z.user.id, {
            userId: z.user.id,
            banner: null == (i = z.user_profile) ? void 0 : i.banner,
            accentColor: null == (a = z.user_profile) ? void 0 : a.accent_color,
            themeColors: null == (l = z.user_profile) ? void 0 : l.theme_colors,
            popoutAnimationParticleType: null == (c = z.user_profile) ? void 0 : c.popout_animation_particle_type,
            bio: null != (O = null == (u = z.user_profile) ? void 0 : u.bio) ? O : "",
            profileEffect:
                null != en
                    ? {
                          skuId: en.sku_id,
                          expiresAt: en.expires_at,
                      }
                    : void 0,
            pronouns: null != (I = null == (f = z.user_profile) ? void 0 : f.pronouns) ? I : "",
            connectedAccounts: null != (P = z.connected_accounts.filter((e) => s.Z.isSupported(e.type))) ? P : [],
            applicationRoleConnections: null != (G = z.application_role_connections) ? G : [],
            premiumSince: J,
            premiumType: z.premium_type,
            premiumGuildSince: ee,
            fetchStartedAt: q,
            fetchEndedAt: Date.now(),
            legacyUsername: z.legacy_username,
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
            widgets: null == (_ = z.widgets) ? void 0 : _.map(F).filter(h.lm),
            wishlistSettings: z.wishlist_settings,
        }),
        (null == (E = z.user_profile) || null == (g = E.profile_effect) ? void 0 : g.expires_at) != null)
    ) {
        let e = new o.V7();
        L.set(z.user.id, e), Y(z.user.id);
    }
    if (null != z.guild_member_profile) {
        let e = z.guild_member_profile.profile_effect,
            t = {
                userId: z.user.id,
                guildId: z.guild_member_profile.guild_id,
                banner: z.guild_member_profile.banner,
                accentColor: z.guild_member_profile.accent_color,
                themeColors: null == (B = z.guild_member_profile) ? void 0 : B.theme_colors,
                popoutAnimationParticleType:
                    null == (Z = z.guild_member_profile) ? void 0 : Z.popout_animation_particle_type,
                profileEffect:
                    null != e
                        ? {
                              skuId: e.sku_id,
                              expiresAt: e.expires_at,
                          }
                        : void 0,
                bio: z.guild_member_profile.bio,
                pronouns: z.guild_member_profile.pronouns,
                badges: z.guild_badges,
            },
            n = w.get(z.user.id);
        if (null != n) n.set(z.guild_member_profile.guild_id, t);
        else {
            let e = new Map();
            e.set(z.guild_member_profile.guild_id, t), w.set(z.user.id, e);
        }
        if ((null == (K = z.guild_member_profile) || null == (V = K.profile_effect) ? void 0 : V.expires_at) != null) {
            let e = new o.V7(),
                t = x.get(z.user.id);
            if (null != t) t.set(z.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(z.guild_member_profile.guild_id, e), x.set(z.user.id, t);
            }
            W(z.user.id, z.guild_member_profile.guild_id);
        }
    }
}
function $(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = null == t ? void 0 : t.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}
function ee(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = null != n ? n : S,
        a = A.get(t);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), A.set(t, e);
    }
    r && C.add(t);
}
function et(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a, fetchStartedAt: o } = e;
    null == (t = A.get(r)) || t.delete(null != i ? i : S), C.delete(r);
    let s =
        null != (n = D.get(r))
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
        D.set(r, s),
        (null == a ? void 0 : a.status) === 404 && (j.set(r, 0), M.set(r, U), k.set(r, G));
}
function en(e) {
    let {
            userId: t,
            accent_color: n,
            banner: r,
            bio: i,
            pronouns: a,
            popout_animation_particle_type: s,
            theme_colors: l,
            profile_effect: c,
        } = e,
        u = D.get(t);
    if (null == u) return !1;
    if (
        (D.set(
            t,
            T(v({}, u), {
                accentColor: n,
                banner: r,
                bio: i,
                pronouns: a,
                popoutAnimationParticleType: s,
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
        let e = new o.V7();
        L.set(t, e), Y(t);
    }
}
function er(e) {
    let {
            userId: t,
            guild_id: n,
            accent_color: r,
            banner: i,
            bio: a,
            pronouns: s,
            popout_animation_particle_type: l,
            theme_colors: c,
            profile_effect: u,
        } = e,
        d = w.get(t);
    if (null == n || null == d) return !1;
    let f = d.get(n);
    if (null == f) return !1;
    if (
        (d.set(
            n,
            T(v({}, f), {
                accentColor: r,
                banner: i,
                bio: a,
                pronouns: s,
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
        let e = new o.V7(),
            r = x.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), x.set(t, r);
        }
        W(t, n);
    }
}
function ei(e) {
    V = !0;
}
function ea(e) {
    (V = !1), null != e.guild_id ? er(e) : en(e);
}
function eo(e) {
    V = !1;
}
function es(e) {
    let { userId: t, widgets: n } = e,
        r = D.get(t);
    if (null == r) return !1;
    D.set(t, T(v({}, r), { widgets: n.map(F).filter(h.lm) }));
}
function el(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    H = {
        userId: r,
        badges: t,
        expiresAtMs: Date.now() + 1000 * n,
    };
    let i = D.get(r);
    if (null != i) {
        var a;
        let e = null != (a = i.badges) ? a : [];
        $(e, H), D.set(r, T(v({}, i), { badges: e }));
    }
}
function ec(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (n = null == (t = A.get(r)) ? void 0 : t.size) ? n : 0) > 0) && ep(r);
}
function eu(e) {
    return [...D.keys()].reduce((e, t) => ep(t) || e, !1);
}
function ed(e) {
    return ep(e.user.id);
}
function ef(e) {
    return ep(e.relationship.id);
}
function e_() {
    A.clear(), C.clear(), D.clear(), w.clear();
}
function ep(e) {
    if (null == e) return !1;
    let t = D.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
function eh(e) {
    for (let t of ((B = e.applicationConfigs), Z.clear(), e.applicationConfigs)) Z.set(t.application_id, t);
}
class em extends f.Z {
    initialize() {
        this.waitFor(p.ZP), this.syncWith([l.default], e_);
    }
    isFetchingProfile(e, t) {
        let n = A.get(e);
        return null != n && n.has(null != t ? t : S);
    }
    isFetchingFriends(e) {
        return C.has(e);
    }
    get isSubmitting() {
        return V;
    }
    getUserProfile(e) {
        return D.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null != (r = null == (n = w.get(e)) ? void 0 : n.get(t)) ? r : null;
    }
    getMutualFriends(e) {
        return M.get(e);
    }
    getMutualFriendsCount(e) {
        return j.get(e);
    }
    getMutualGuilds(e) {
        return k.get(e);
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
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        var n, r;
        let i = D.get(e);
        return null != (r = null == i || null == (n = i.wishlistSettings) ? void 0 : n[t]) ? r : null;
    }
    takeSnapshot() {
        let e = u.default.getId(),
            t = D.get(e);
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
    get applicationWidgetApplicationConfigs() {
        return B;
    }
    getApplicationWidgetApplicationConfig(e) {
        return Z.get(e);
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: ee,
            USER_PROFILE_FETCH_FAILURE: et,
            USER_PROFILE_FETCH_SUCCESS: J,
            USER_PROFILE_UPDATE_START: ei,
            USER_PROFILE_UPDATE_SUCCESS: ea,
            USER_PROFILE_UPDATE_FAILURE: eo,
            WIDGET_PENDING_SAVE_SUCCESS: es,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: el,
            MUTUAL_FRIENDS_FETCH_START: z,
            MUTUAL_FRIENDS_FETCH_SUCCESS: Q,
            MUTUAL_FRIENDS_FETCH_FAILURE: q,
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
            USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_SUCCESS: eh,
            LOGOUT: K,
        }),
            O(this, "loadCache", () => {
                let e = this.readSnapshot(em.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? D.set(t, n) : D.delete(t));
                    });
            });
    }
}
O(em, "displayName", "UserProfileStore"), O(em, "LATEST_SNAPSHOT_VERSION", 1);
let eg = new em(),
    eE = eg;
