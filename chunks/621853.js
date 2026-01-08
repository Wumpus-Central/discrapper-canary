n.d(t, { Z: () => eb }), n(953529), n(388685), n(997841), n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(296009),
    o = n(846519),
    s = n(726542),
    l = n(192274),
    c = n(706454),
    u = n(598077),
    d = n(314897),
    f = n(430824),
    p = n(750041),
    _ = n(158776),
    m = n(771845),
    h = n(823379),
    g = n(291175),
    E = n(931847),
    b = n(836197),
    y = n(215023),
    O = n(388032);
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
function S(e) {
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
let C = Symbol("NO GUILD ID"),
    A = new Map(),
    N = new Set(),
    P = "premium",
    R = "guild_booster_lvl",
    w = 2147483647,
    D = new Map(),
    x = new Map(),
    L = new Map(),
    j = new Map(),
    M = new Map(),
    k = new Map(),
    U = new Map(),
    G = [],
    Z = [],
    F = null,
    B = new Map();
function V(e) {
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
            return new b.zy({
                id: e.id,
                type: t,
                games: r,
            });
        case a.l.APPLICATION:
            return new E.q({
                id: e.id,
                applicationId: e.data.application_id,
            });
    }
}
let H = !1,
    Y = null;
function W(e) {
    let t = D.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if ((null == n ? void 0 : n.expiresAt) == null) return;
    let r = 1000 * n.expiresAt + y.Cm - Date.now();
    if (r <= 0) {
        (t.profileEffect = void 0), L.delete(e), eE.emitChange();
        return;
    }
    let i = L.get(e);
    null != i && i.start(Math.min(w, r), () => W(e));
}
function K(e, t) {
    var n, r;
    let i = x.get(e);
    if (null == i) return;
    let a = i.get(t);
    if (null == a) return;
    let o = a.profileEffect;
    if ((null == o ? void 0 : o.expiresAt) == null) return;
    let s = 1000 * o.expiresAt + y.Cm - Date.now();
    if (s <= 0) {
        i.set(t, T(S({}, a), { profileEffect: void 0 })), null == (r = j.get(e)) || r.delete(t), eE.emitChange();
        return;
    }
    let l = null == (n = j.get(e)) ? void 0 : n.get(t);
    null != l && l.start(Math.min(w, s), () => K(e, t));
}
function z() {
    A.clear(), N.clear(), D.clear(), x.clear(), M.clear(), k.clear(), U.clear(), (H = !1);
}
function q(e) {
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
            user: new u.Z(e),
            status: _.Z.getStatus(e.id),
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function J(e) {
    N.delete(e.userId), M.set(e.userId, X(e.mutualFriends)), k.set(e.userId, e.mutualFriends.length);
}
function $(e) {
    var t, n, r, i, a, l, c, u, d, p, _, E, b, y, v, I, w, Z, F, B, H;
    let { userProfile: z, fetchStartedAt: q } = e,
        Q = null != (b = null == (t = z.guild_member_profile) ? void 0 : t.guild_id) ? b : C;
    if ((null == (n = A.get(z.user.id)) || n.delete(Q), N.delete(z.user.id), null != z.mutual_guilds)) {
        let e = {};
        z.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = f.Z.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r,
                });
        }),
            U.set(
                z.user.id,
                m.ZP.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick,
                    })),
            );
    }
    if (null != z.mutual_friends_count) {
        let e = z.mutual_friends_count;
        k.set(z.user.id, e), 0 === e && M.set(z.user.id, G);
    }
    null != z.mutual_friends && (M.set(z.user.id, X(z.mutual_friends)), k.set(z.user.id, z.mutual_friends.length));
    let J = null != z.premium_since ? new Date(z.premium_since) : null,
        $ = null != z.premium_guild_since ? new Date(z.premium_guild_since) : null,
        et = z.application,
        en = null == (r = z.user_profile) ? void 0 : r.profile_effect,
        er =
            null != z.badges
                ? z.badges.map((e) => {
                      let t = (0, g.fv)(e.id);
                      if ((e.id === P || null != t) && null != J) {
                          let n = O.intl.formatToPlainString(O.t["8zbGNR"], { date: J });
                          return (
                              null != t && (n = O.intl.formatToPlainString(O.t.Hu4jfi, { date: J })),
                              T(S({}, e), { description: n })
                          );
                      }
                      return e.id.startsWith(R) && null != $
                          ? T(S({}, e), { description: O.intl.formatToPlainString(O.t.IWkAq7, { date: $ }) })
                          : e;
                  })
                : [];
    if (
        (null != Y && Y.userId === z.user.id && (Date.now() > Y.expiresAtMs ? (Y = null) : ee(er, Y)),
        D.set(z.user.id, {
            userId: z.user.id,
            banner: null == (i = z.user_profile) ? void 0 : i.banner,
            accentColor: null == (a = z.user_profile) ? void 0 : a.accent_color,
            themeColors: null == (l = z.user_profile) ? void 0 : l.theme_colors,
            popoutAnimationParticleType: null == (c = z.user_profile) ? void 0 : c.popout_animation_particle_type,
            bio: null != (y = null == (u = z.user_profile) ? void 0 : u.bio) ? y : "",
            profileEffect:
                null != en
                    ? {
                          skuId: en.sku_id,
                          expiresAt: en.expires_at,
                      }
                    : void 0,
            pronouns: null != (v = null == (d = z.user_profile) ? void 0 : d.pronouns) ? v : "",
            connectedAccounts: null != (I = z.connected_accounts.filter((e) => s.Z.isSupported(e.type))) ? I : [],
            applicationRoleConnections: null != (w = z.application_role_connections) ? w : [],
            premiumSince: J,
            premiumType: z.premium_type,
            premiumGuildSince: $,
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
            widgets: null == (p = z.widgets) ? void 0 : p.map(V).filter(h.lm),
            wishlistSettings: z.wishlist_settings,
        }),
        (null == (E = z.user_profile) || null == (_ = E.profile_effect) ? void 0 : _.expires_at) != null)
    ) {
        let e = new o.V7();
        L.set(z.user.id, e), W(z.user.id);
    }
    if (null != z.guild_member_profile) {
        let e = z.guild_member_profile.profile_effect,
            t = {
                userId: z.user.id,
                guildId: z.guild_member_profile.guild_id,
                banner: z.guild_member_profile.banner,
                accentColor: z.guild_member_profile.accent_color,
                themeColors: null == (Z = z.guild_member_profile) ? void 0 : Z.theme_colors,
                popoutAnimationParticleType:
                    null == (F = z.guild_member_profile) ? void 0 : F.popout_animation_particle_type,
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
            n = x.get(z.user.id);
        if (null != n) n.set(z.guild_member_profile.guild_id, t);
        else {
            let e = new Map();
            e.set(z.guild_member_profile.guild_id, t), x.set(z.user.id, e);
        }
        if ((null == (H = z.guild_member_profile) || null == (B = H.profile_effect) ? void 0 : B.expires_at) != null) {
            let e = new o.V7(),
                t = j.get(z.user.id);
            if (null != t) t.set(z.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(z.guild_member_profile.guild_id, e), j.set(z.user.id, t);
            }
            K(z.user.id, z.guild_member_profile.guild_id);
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
        i = null != n ? n : C,
        a = A.get(t);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), A.set(t, e);
    }
    r && N.add(t);
}
function en(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a, fetchStartedAt: o } = e;
    null == (t = A.get(r)) || t.delete(null != i ? i : C), N.delete(r);
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
        (null == a ? void 0 : a.status) === 404 && (k.set(r, 0), M.set(r, G), U.set(r, Z));
}
function er(e) {
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
            T(S({}, u), {
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
        L.set(t, e), W(t);
    }
}
function ei(e) {
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
        d = x.get(t);
    if (null == n || null == d) return !1;
    let f = d.get(n);
    if (null == f) return !1;
    if (
        (d.set(
            n,
            T(S({}, f), {
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
            r = j.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), j.set(t, r);
        }
        K(t, n);
    }
}
function ea(e) {
    H = !0;
}
function eo(e) {
    (H = !1), null != e.guild_id ? ei(e) : er(e);
}
function es(e) {
    H = !1;
}
function el(e) {
    let { userId: t, widgets: n } = e,
        r = D.get(t);
    if (null == r) return !1;
    D.set(t, T(S({}, r), { widgets: n.map(V).filter(h.lm) }));
}
function ec(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    Y = {
        userId: r,
        badges: t,
        expiresAtMs: Date.now() + 1000 * n,
    };
    let i = D.get(r);
    if (null != i) {
        var a;
        let e = null != (a = i.badges) ? a : [];
        ee(e, Y), D.set(r, T(S({}, i), { badges: e }));
    }
}
function eu(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (n = null == (t = A.get(r)) ? void 0 : t.size) ? n : 0) > 0) && em(r);
}
function ed(e) {
    return [...D.keys()].reduce((e, t) => em(t) || e, !1);
}
function ef(e) {
    return em(e.user.id);
}
function ep(e) {
    return em(e.relationship.id);
}
function e_() {
    A.clear(), N.clear(), D.clear(), x.clear();
}
function em(e) {
    if (null == e) return !1;
    let t = D.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
function eh(e) {
    for (let t of ((F = e.applicationConfigs.map((e) => new l.P(e))), B.clear(), F)) B.set(t.applicationId, t);
}
class eg extends p.Z {
    initialize() {
        this.waitFor(m.ZP), this.syncWith([c.default], e_);
    }
    isFetchingProfile(e, t) {
        let n = A.get(e);
        return null != n && n.has(null != t ? t : C);
    }
    isFetchingFriends(e) {
        return N.has(e);
    }
    get isSubmitting() {
        return H;
    }
    getUserProfile(e) {
        return D.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null != (r = null == (n = x.get(e)) ? void 0 : n.get(t)) ? r : null;
    }
    getMutualFriends(e) {
        return M.get(e);
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
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        var n, r;
        let i = D.get(e);
        return null != (r = null == i || null == (n = i.wishlistSettings) ? void 0 : n[t]) ? r : null;
    }
    takeSnapshot() {
        let e = d.default.getId(),
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
        return F;
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
            MUTUAL_FRIENDS_FETCH_START: q,
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
            USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: eh,
            LOGOUT: z,
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
    eb = eE;
