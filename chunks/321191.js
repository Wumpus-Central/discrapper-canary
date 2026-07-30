"use strict";
n.d(t, { A: () => eo }), n(321073), n(938796);
var i = n(435558),
    r = n.n(i),
    a = n(575593),
    s = n(540185),
    l = n(451988),
    o = n(573648),
    d = n(628856),
    c = n(773669),
    u = n(889227),
    _ = n(280450),
    E = n(71393),
    A = n(536802),
    h = n(290863),
    I = n(711014),
    f = n(403362),
    p = n(439174),
    T = n(633075),
    m = n(289173),
    g = n(590630);
function S(e) {
    let t, n;
    if (e?.collectibles == null) return { collectibles: void 0, profileEffect: void 0, profileFrame: void 0 };
    let i = [];
    for (let r of e.collectibles)
        i.push({ skuId: r.sku_id, type: r.type, expiresAt: null != r.expires_at ? new Date(r.expires_at) : void 0 }),
            r.type === a.R.PROFILE_EFFECT
                ? (t = {
                      skuId: r.sku_id,
                      expiresAt: null != r.expires_at ? Math.floor(new Date(r.expires_at).getTime() / 1e3) : void 0,
                  })
                : r.type === a.R.PROFILE_FRAME &&
                  (n = {
                      skuId: r.sku_id,
                      type: a.R.PROFILE_FRAME,
                      expiresAt: null != r.expires_at ? new Date(r.expires_at) : void 0,
                  });
    return { collectibles: i, profileEffect: t, profileFrame: n };
}
var N = n(652215),
    C = n(375708);
let O = Symbol("NO GUILD ID"),
    R = new Map(),
    L = new Set(),
    D = new Map(),
    y = new Map(),
    v = {},
    b = new Map(),
    M = new Map(),
    P = new Map(),
    U = [],
    w = [];
function G(e) {
    let t = e.data.type;
    switch (t) {
        case s.x.CURRENT_GAMES:
        case s.x.FAVORITE_GAMES:
        case s.x.PLAYED_GAMES:
        case s.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({ applicationId: e.game_id, comment: e.comment, tags: e.tags })),
                i = r().uniqBy(n, "applicationId");
            return new m.Yy({ id: e.id, type: t, games: i });
        case s.x.APPLICATION:
            return new T.R({ id: e.id, applicationId: e.data.application_id });
        case s.x.PERSONAL:
            return new g.Tu({ id: e.id, header: e.data.header ?? void 0, sections: (0, g.wv)(e.data.sections) });
        default:
            return;
    }
}
let x = !1,
    k = null;
function F(e, t) {
    let n = null != t ? y.get(e)?.get(t) : D.get(e);
    if (n?.collectibles == null) return;
    let i = [];
    n.collectibles.forEach((n) => {
        if (null == n.expiresAt) return;
        let r = n.expiresAt.getTime() - Date.now();
        r <= 0
            ? i.push(n)
            : (null == v[e] && (v[e] = { [O]: {} }),
              null == v[e][t ?? O] && (v[e][t ?? O] = {}),
              null == v[e][t ?? O][n.skuId] && (v[e][t ?? O][n.skuId] = new l.Ep()),
              v[e][t ?? O][n.skuId].start(Math.min(N.mnr, r), () => {
                  F(e, t);
              }));
    }),
        0 !== i.length &&
            ((n.collectibles = n.collectibles.filter((e) => !i.includes(e))),
            i.forEach((i) => {
                i.type === a.R.PROFILE_EFFECT
                    ? (n.profileEffect = void 0)
                    : i.type === a.R.PROFILE_FRAME && (n.profileFrame = void 0),
                    delete v[e]?.[t ?? O]?.[i.skuId];
            }),
            "guildId" in n ? y.get(e)?.set(n.guildId, n) : D.set(e, n),
            el.emitChange());
}
function V() {
    R.clear(), L.clear(), D.clear(), y.clear(), b.clear(), M.clear(), P.clear(), (x = !1);
}
function B(e) {
    let { userId: t } = e;
    L.add(t);
}
function H(e) {
    let { userId: t } = e;
    L.delete(t);
}
function j(e) {
    return r()(e)
        .map((e) => ({
            key: e.id,
            user: new u.A({ ...e, collectibles: (0, d.t)(e.collectibles) }),
            status: h.A.getStatus(e.id),
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function W(e) {
    L.delete(e.userId), b.set(e.userId, j(e.mutualFriends)), M.set(e.userId, e.mutualFriends.length);
}
function Y(e) {
    let { userProfile: t, fetchStartedAt: n, guildId: i } = e,
        r = i ?? t.guild_member_profile?.guild_id ?? O;
    if ((R.get(t.user.id)?.delete(r), L.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: i } = t,
                r = E.A.getGuild(n);
            null != r && (e[n] = { guild: r, nick: i });
        }),
            P.set(
                t.user.id,
                I.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        M.set(t.user.id, e), 0 === e && b.set(t.user.id, U);
    }
    null != t.mutual_friends && (b.set(t.user.id, j(t.mutual_friends)), M.set(t.user.id, t.mutual_friends.length));
    let a = null != t.premium_since ? new Date(t.premium_since) : null,
        s = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        l = t.application,
        d =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, p.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != a) {
                          let n = C.intl.formatToPlainString(C.t["8zbGNR"], { date: a });
                          return (
                              null != t && (n = C.intl.formatToPlainString(C.t.Hu4jfi, { date: a })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith("guild_booster_lvl") && null != s
                          ? { ...e, description: C.intl.formatToPlainString(C.t.IWkAq7, { date: s }) }
                          : e;
                  })
                : [];
    null != k && k.userId === t.user.id && (Date.now() > k.expiresAtMs ? (k = null) : K(d, k));
    let c = Date.now();
    if (
        (D.set(t.user.id, {
            ...S(t.user_profile),
            userId: t.user.id,
            banner: t.user_profile?.banner,
            accentColor: t.user_profile?.accent_color,
            themeColors: t.user_profile?.theme_colors,
            popoutAnimationParticleType: t.user_profile?.popout_animation_particle_type,
            bio: t.user_profile?.bio ?? "",
            pronouns: t.user_profile?.pronouns ?? "",
            connectedAccounts: t.connected_accounts.filter((e) => o.A.isSupported(e.type)) ?? [],
            applicationRoleConnections: t.application_role_connections ?? [],
            premiumSince: a,
            premiumType: t.premium_type,
            premiumGuildSince: s,
            fetchStartedAt: n,
            fetchEndedAt: c,
            legacyUsername: t.legacy_username,
            application:
                null != l
                    ? {
                          id: l.id,
                          primarySkuId: l.primary_sku_id,
                          customInstallUrl: l.custom_install_url,
                          installParams: l.install_params,
                          integrationTypesConfig: l.integration_types_config,
                          flags: l.flags,
                          popularApplicationCommandIds: l.popular_application_command_ids,
                          storefront_available: l.storefront_available,
                          name: l.name,
                          termsOfServiceUrl: l.terms_of_service_url,
                          privacyPolicyUrl: l.privacy_policy_url,
                      }
                    : null,
            badges: d,
            widgets: t.widgets?.map(G).filter(f.Vq),
            wishlistSettings: t.wishlist_settings,
            private: t.private,
        }),
        F(t.user.id),
        null != t.guild_member_profile)
    ) {
        let e = {
                ...S(t.guild_member_profile),
                userId: t.user.id,
                guildId: t.guild_member_profile.guild_id,
                banner: t.guild_member_profile.banner,
                accentColor: t.guild_member_profile.accent_color,
                themeColors: t.guild_member_profile?.theme_colors,
                popoutAnimationParticleType: t.guild_member_profile?.popout_animation_particle_type,
                bio: t.guild_member_profile.bio,
                pronouns: t.guild_member_profile.pronouns,
                badges: t.guild_badges,
                fetchStartedAt: n,
                fetchEndedAt: c,
            },
            i = y.get(t.user.id);
        if (null != i) i.set(t.guild_member_profile.guild_id, e);
        else {
            let n = new Map();
            n.set(t.guild_member_profile.guild_id, e), y.set(t.user.id, n);
        }
        F(t.user.id, t.guild_member_profile.guild_id);
    }
}
function K(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        i = t?.badges.filter((e) => !n.has(e.id));
    return i.length > 0 && e.push(...i), e;
}
function $(e) {
    let { userId: t, guildId: n, withMutualFriends: i } = e,
        r = n ?? O,
        a = R.get(t);
    if (null != a) a.add(r);
    else {
        let e = new Set();
        e.add(r), R.set(t, e);
    }
    i && L.add(t);
}
function z(e) {
    let { userId: t, guildId: n, apiError: i, fetchStartedAt: r } = e;
    R.get(t)?.delete(n ?? O), L.delete(t);
    let a = D.get(t) ?? {
            connectedAccounts: [],
            applicationRoleConnections: [],
            premiumSince: null,
            premiumGuildSince: null,
            application: null,
            legacyUsername: null,
            userId: t,
            banner: null,
            accentColor: null,
            bio: "",
            pronouns: "",
            premiumType: null,
            fetchStartedAt: 0,
            fetchEndedAt: 0,
            fetchError: void 0,
        },
        s = Date.now();
    if (((a.fetchStartedAt = r), (a.fetchEndedAt = s), (a.fetchError = i), D.set(t, a), null != n)) {
        let e = y.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = r), (e.fetchEndedAt = s), (e.fetchError = i));
    }
    i?.status === 404 && (M.set(t, 0), b.set(t, U), P.set(t, w));
}
function q(e) {
    x = !0;
}
function Z(e) {
    (x = !1),
        null != e.guild_id
            ? (function (e) {
                  let {
                          userId: t,
                          guild_id: n,
                          accent_color: i,
                          banner: r,
                          bio: a,
                          pronouns: s,
                          popout_animation_particle_type: l,
                          theme_colors: o,
                          collectibles: d,
                      } = e,
                      c = y.get(t);
                  if (null == n || null == c) return;
                  let u = c.get(n);
                  null == u ||
                      (c.set(n, {
                          ...u,
                          ...S({ collectibles: d }),
                          accentColor: i,
                          banner: r,
                          bio: a,
                          pronouns: s,
                          popoutAnimationParticleType: l,
                          themeColors: o,
                      }),
                      F(t, n));
              })(e)
            : (function (e) {
                  let {
                          userId: t,
                          accent_color: n,
                          banner: i,
                          bio: r,
                          pronouns: a,
                          popout_animation_particle_type: s,
                          theme_colors: l,
                          collectibles: o,
                      } = e,
                      d = D.get(t);
                  null == d ||
                      (D.set(t, {
                          ...d,
                          ...S({ collectibles: o }),
                          accentColor: n,
                          banner: i,
                          bio: r,
                          pronouns: a,
                          popoutAnimationParticleType: s,
                          themeColors: l,
                      }),
                      F(t));
              })(e);
}
function X(e) {
    x = !1;
}
function Q(e) {
    let { userId: t, widgets: n } = e,
        i = D.get(t);
    if (null == i) return !1;
    D.set(t, { ...i, widgets: n.map(G).filter(f.Vq) });
}
function J(e) {
    let { badges: t, ttlInSeconds: n, userId: i } = e;
    k = { userId: i, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let r = D.get(i);
    if (null != r) {
        let e = r.badges ?? [];
        K(e, k), D.set(i, { ...r, badges: e });
    }
}
function ee(e) {
    let t = e.user.id;
    return !((R.get(t)?.size ?? 0) > 0) && ea(t);
}
function et(e) {
    return [...D.keys()].reduce((e, t) => ea(t) || e, !1);
}
function en(e) {
    return ea(e.user.id);
}
function ei(e) {
    return ea(e.relationship.id);
}
function er() {
    R.clear(), L.clear(), D.clear(), y.clear();
}
function ea(e) {
    if (null == e) return !1;
    let t = D.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
    let n = y.get(e);
    if (null != n) for (let e of n.values()) (e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0);
}
class es extends A.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: $,
            USER_PROFILE_FETCH_FAILURE: z,
            USER_PROFILE_FETCH_SUCCESS: Y,
            USER_PROFILE_UPDATE_START: q,
            USER_PROFILE_UPDATE_SUCCESS: Z,
            USER_PROFILE_UPDATE_FAILURE: X,
            WIDGET_PENDING_SAVE_SUCCESS: Q,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: J,
            MUTUAL_FRIENDS_FETCH_START: B,
            MUTUAL_FRIENDS_FETCH_SUCCESS: W,
            MUTUAL_FRIENDS_FETCH_FAILURE: H,
            USER_UPDATE: ee,
            GUILD_MEMBER_UPDATE: ee,
            GUILD_JOIN: et,
            GUILD_DELETE: et,
            INVITE_ACCEPT_SUCCESS: et,
            GUILD_MEMBER_ADD: en,
            GUILD_MEMBER_REMOVE: en,
            RELATIONSHIP_ADD: ei,
            RELATIONSHIP_REMOVE: ei,
            RELATIONSHIP_UPDATE: ei,
            LOGOUT: V,
        });
    }
    initialize() {
        this.waitFor(I.Ay), this.syncWith([c.default], er);
    }
    isFetchingProfile(e, t) {
        let n = R.get(e);
        return null != n && n.has(t ?? O);
    }
    isFetchingFriends(e) {
        return L.has(e);
    }
    get isSubmitting() {
        return x;
    }
    getUserProfile(e) {
        return D.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (y.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return b.get(e);
    }
    getMutualFriendsCount(e) {
        return M.get(e);
    }
    getMutualGuilds(e) {
        return P.get(e);
    }
    getWidgets(e) {
        return D.get(e)?.widgets;
    }
    getWishlistIds(e) {
        let t = D.get(e);
        return t?.wishlistSettings != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        if (null == e) return null;
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        let n = D.get(e);
        return n?.wishlistSettings?.[t] ?? null;
    }
    loadCache = () => {
        let e = this.readSnapshot(es.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? D.set(t, n) : D.delete(t));
            });
    };
    takeSnapshot() {
        let e = _.default.getId(),
            t = D.get(e);
        return null != t
            ? { version: es.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: es.LATEST_SNAPSHOT_VERSION, data: [] };
    }
}
let el = new es(),
    eo = el;
