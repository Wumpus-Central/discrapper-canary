"use strict";
n.d(t, { A: () => el }), n(321073), n(938796);
var i = n(735438),
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
    m = n(289173);
function g(e) {
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
var S = n(652215),
    N = n(375708);
let C = Symbol("NO GUILD ID"),
    R = new Map(),
    O = new Set(),
    L = new Map(),
    D = new Map(),
    y = {},
    v = new Map(),
    b = new Map(),
    M = new Map(),
    P = [],
    U = [];
function w(e) {
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
    }
}
let G = !1,
    x = null;
function k(e, t) {
    let n = null != t ? D.get(e)?.get(t) : L.get(e);
    if (n?.collectibles == null) return;
    let i = [];
    n.collectibles.forEach((n) => {
        if (null == n.expiresAt) return;
        let r = n.expiresAt.getTime() - Date.now();
        r <= 0
            ? i.push(n)
            : (null == y[e] && (y[e] = { [C]: {} }),
              null == y[e][t ?? C] && (y[e][t ?? C] = {}),
              null == y[e][t ?? C][n.skuId] && (y[e][t ?? C][n.skuId] = new l.Ep()),
              y[e][t ?? C][n.skuId].start(Math.min(S.mnr, r), () => {
                  k(e, t);
              }));
    }),
        0 !== i.length &&
            ((n.collectibles = n.collectibles.filter((e) => !i.includes(e))),
            i.forEach((i) => {
                i.type === a.R.PROFILE_EFFECT
                    ? (n.profileEffect = void 0)
                    : i.type === a.R.PROFILE_FRAME && (n.profileFrame = void 0),
                    delete y[e]?.[t ?? C]?.[i.skuId];
            }),
            "guildId" in n ? D.get(e)?.set(n.guildId, n) : L.set(e, n),
            es.emitChange());
}
function F() {
    R.clear(), O.clear(), L.clear(), D.clear(), v.clear(), b.clear(), M.clear(), (G = !1);
}
function V(e) {
    let { userId: t } = e;
    O.add(t);
}
function B(e) {
    let { userId: t } = e;
    O.delete(t);
}
function H(e) {
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
function j(e) {
    O.delete(e.userId), v.set(e.userId, H(e.mutualFriends)), b.set(e.userId, e.mutualFriends.length);
}
function W(e) {
    let { userProfile: t, fetchStartedAt: n, guildId: i } = e,
        r = i ?? t.guild_member_profile?.guild_id ?? C;
    if ((R.get(t.user.id)?.delete(r), O.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: i } = t,
                r = E.A.getGuild(n);
            null != r && (e[n] = { guild: r, nick: i });
        }),
            M.set(
                t.user.id,
                I.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        b.set(t.user.id, e), 0 === e && v.set(t.user.id, P);
    }
    null != t.mutual_friends && (v.set(t.user.id, H(t.mutual_friends)), b.set(t.user.id, t.mutual_friends.length));
    let a = null != t.premium_since ? new Date(t.premium_since) : null,
        s = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        l = t.application,
        d =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, p.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != a) {
                          let n = N.intl.formatToPlainString(N.t["8zbGNR"], { date: a });
                          return (
                              null != t && (n = N.intl.formatToPlainString(N.t.Hu4jfi, { date: a })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith("guild_booster_lvl") && null != s
                          ? { ...e, description: N.intl.formatToPlainString(N.t.IWkAq7, { date: s }) }
                          : e;
                  })
                : [];
    null != x && x.userId === t.user.id && (Date.now() > x.expiresAtMs ? (x = null) : Y(d, x));
    let c = Date.now();
    if (
        (L.set(t.user.id, {
            ...g(t.user_profile),
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
            widgets: t.widgets?.map(w).filter(f.Vq),
            wishlistSettings: t.wishlist_settings,
            private: t.private,
        }),
        k(t.user.id),
        null != t.guild_member_profile)
    ) {
        let e = {
                ...g(t.guild_member_profile),
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
            i = D.get(t.user.id);
        if (null != i) i.set(t.guild_member_profile.guild_id, e);
        else {
            let n = new Map();
            n.set(t.guild_member_profile.guild_id, e), D.set(t.user.id, n);
        }
        k(t.user.id, t.guild_member_profile.guild_id);
    }
}
function Y(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        i = t?.badges.filter((e) => !n.has(e.id));
    return i.length > 0 && e.push(...i), e;
}
function K(e) {
    let { userId: t, guildId: n, withMutualFriends: i } = e,
        r = n ?? C,
        a = R.get(t);
    if (null != a) a.add(r);
    else {
        let e = new Set();
        e.add(r), R.set(t, e);
    }
    i && O.add(t);
}
function $(e) {
    let { userId: t, guildId: n, apiError: i, fetchStartedAt: r } = e;
    R.get(t)?.delete(n ?? C), O.delete(t);
    let a = L.get(t) ?? {
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
    if (((a.fetchStartedAt = r), (a.fetchEndedAt = s), (a.fetchError = i), L.set(t, a), null != n)) {
        let e = D.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = r), (e.fetchEndedAt = s), (e.fetchError = i));
    }
    i?.status === 404 && (b.set(t, 0), v.set(t, P), M.set(t, U));
}
function z(e) {
    G = !0;
}
function q(e) {
    (G = !1),
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
                      c = D.get(t);
                  if (null == n || null == c) return;
                  let u = c.get(n);
                  null == u ||
                      (c.set(n, {
                          ...u,
                          ...g({ collectibles: d }),
                          accentColor: i,
                          banner: r,
                          bio: a,
                          pronouns: s,
                          popoutAnimationParticleType: l,
                          themeColors: o,
                      }),
                      k(t, n));
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
                      d = L.get(t);
                  null == d ||
                      (L.set(t, {
                          ...d,
                          ...g({ collectibles: o }),
                          accentColor: n,
                          banner: i,
                          bio: r,
                          pronouns: a,
                          popoutAnimationParticleType: s,
                          themeColors: l,
                      }),
                      k(t));
              })(e);
}
function Z(e) {
    G = !1;
}
function X(e) {
    let { userId: t, widgets: n } = e,
        i = L.get(t);
    if (null == i) return !1;
    L.set(t, { ...i, widgets: n.map(w).filter(f.Vq) });
}
function Q(e) {
    let { badges: t, ttlInSeconds: n, userId: i } = e;
    x = { userId: i, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let r = L.get(i);
    if (null != r) {
        let e = r.badges ?? [];
        Y(e, x), L.set(i, { ...r, badges: e });
    }
}
function J(e) {
    let t = e.user.id;
    return !((R.get(t)?.size ?? 0) > 0) && er(t);
}
function ee(e) {
    return [...L.keys()].reduce((e, t) => er(t) || e, !1);
}
function et(e) {
    return er(e.user.id);
}
function en(e) {
    return er(e.relationship.id);
}
function ei() {
    R.clear(), O.clear(), L.clear(), D.clear();
}
function er(e) {
    if (null == e) return !1;
    let t = L.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
    let n = D.get(e);
    if (null != n) for (let e of n.values()) (e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0);
}
class ea extends A.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: K,
            USER_PROFILE_FETCH_FAILURE: $,
            USER_PROFILE_FETCH_SUCCESS: W,
            USER_PROFILE_UPDATE_START: z,
            USER_PROFILE_UPDATE_SUCCESS: q,
            USER_PROFILE_UPDATE_FAILURE: Z,
            WIDGET_PENDING_SAVE_SUCCESS: X,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: Q,
            MUTUAL_FRIENDS_FETCH_START: V,
            MUTUAL_FRIENDS_FETCH_SUCCESS: j,
            MUTUAL_FRIENDS_FETCH_FAILURE: B,
            USER_UPDATE: J,
            GUILD_MEMBER_UPDATE: J,
            GUILD_JOIN: ee,
            GUILD_DELETE: ee,
            INVITE_ACCEPT_SUCCESS: ee,
            GUILD_MEMBER_ADD: et,
            GUILD_MEMBER_REMOVE: et,
            RELATIONSHIP_ADD: en,
            RELATIONSHIP_REMOVE: en,
            RELATIONSHIP_UPDATE: en,
            LOGOUT: F,
        });
    }
    initialize() {
        this.waitFor(I.Ay), this.syncWith([c.default], ei);
    }
    isFetchingProfile(e, t) {
        let n = R.get(e);
        return null != n && n.has(t ?? C);
    }
    isFetchingFriends(e) {
        return O.has(e);
    }
    get isSubmitting() {
        return G;
    }
    getUserProfile(e) {
        return L.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (D.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return v.get(e);
    }
    getMutualFriendsCount(e) {
        return b.get(e);
    }
    getMutualGuilds(e) {
        return M.get(e);
    }
    getWidgets(e) {
        return L.get(e)?.widgets;
    }
    getWishlistIds(e) {
        let t = L.get(e);
        return t?.wishlistSettings != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        if (null == e) return null;
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        let n = L.get(e);
        return n?.wishlistSettings?.[t] ?? null;
    }
    loadCache = () => {
        let e = this.readSnapshot(ea.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? L.set(t, n) : L.delete(t));
            });
    };
    takeSnapshot() {
        let e = _.default.getId(),
            t = L.get(e);
        return null != t
            ? { version: ea.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: ea.LATEST_SNAPSHOT_VERSION, data: [] };
    }
}
let es = new ea(),
    el = es;
