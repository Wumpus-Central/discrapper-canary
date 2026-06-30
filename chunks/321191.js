"use strict";
n.d(t, { A: () => ea }), n(321073), n(938796);
var i = n(735438),
    r = n.n(i),
    s = n(575593),
    a = n(540185),
    o = n(451988),
    l = n(573648),
    u = n(773669),
    c = n(889227),
    d = n(495544),
    _ = n(71393),
    h = n(536802),
    f = n(290863),
    p = n(711014),
    E = n(403362),
    m = n(439174),
    g = n(633075),
    A = n(289173);
function I(e) {
    let t, n;
    if (e?.collectibles == null) return { collectibles: void 0, profileEffect: void 0, profileFrame: void 0 };
    let i = [];
    for (let r of e.collectibles)
        i.push({ skuId: r.sku_id, type: r.type, expiresAt: null != r.expires_at ? new Date(r.expires_at) : void 0 }),
            r.type === s.R.PROFILE_EFFECT
                ? (t = {
                      skuId: r.sku_id,
                      expiresAt: null != r.expires_at ? Math.floor(new Date(r.expires_at).getTime() / 1e3) : void 0,
                  })
                : r.type === s.R.PROFILE_FRAME &&
                  (n = {
                      skuId: r.sku_id,
                      type: s.R.PROFILE_FRAME,
                      expiresAt: null != r.expires_at ? new Date(r.expires_at) : void 0,
                  });
    return { collectibles: i, profileEffect: t, profileFrame: n };
}
var T = n(652215),
    S = n(375708);
let y = Symbol("NO GUILD ID"),
    C = new Map(),
    N = new Set(),
    v = new Map(),
    R = new Map(),
    O = {},
    b = new Map(),
    D = new Map(),
    L = new Map(),
    w = [],
    M = [];
function P(e) {
    let t = e.data.type;
    switch (t) {
        case a.x.CURRENT_GAMES:
        case a.x.FAVORITE_GAMES:
        case a.x.PLAYED_GAMES:
        case a.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({ applicationId: e.game_id, comment: e.comment, tags: e.tags })),
                i = r().uniqBy(n, "applicationId");
            return new A.Yy({ id: e.id, type: t, games: i });
        case a.x.APPLICATION:
            return new g.R({ id: e.id, applicationId: e.data.application_id });
    }
}
let x = !1,
    k = null;
function U(e, t) {
    let n = null != t ? R.get(e)?.get(t) : v.get(e);
    if (n?.collectibles == null) return;
    let i = [];
    n.collectibles.forEach((n) => {
        if (null == n.expiresAt) return;
        let r = n.expiresAt.getTime() - Date.now();
        r <= 0
            ? i.push(n)
            : (null == O[e] && (O[e] = { [y]: {} }),
              null == O[e][t ?? y] && (O[e][t ?? y] = {}),
              null == O[e][t ?? y][n.skuId] && (O[e][t ?? y][n.skuId] = new o.Ep()),
              O[e][t ?? y][n.skuId].start(Math.min(T.mnr, r), () => {
                  U(e, t);
              }));
    }),
        0 !== i.length &&
            ((n.collectibles = n.collectibles.filter((e) => !i.includes(e))),
            i.forEach((i) => {
                i.type === s.R.PROFILE_EFFECT
                    ? (n.profileEffect = void 0)
                    : i.type === s.R.PROFILE_FRAME && (n.profileFrame = void 0),
                    delete O[e]?.[t ?? y]?.[i.skuId];
            }),
            "guildId" in n ? R.get(e)?.set(n.guildId, n) : v.set(e, n),
            es.emitChange());
}
function G() {
    C.clear(), N.clear(), v.clear(), R.clear(), b.clear(), D.clear(), L.clear(), (x = !1);
}
function F(e) {
    let { userId: t } = e;
    N.add(t);
}
function V(e) {
    let { userId: t } = e;
    N.delete(t);
}
function B(e) {
    return r()(e)
        .map((e) => ({ key: e.id, user: new c.A(e), status: f.A.getStatus(e.id) }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function j(e) {
    N.delete(e.userId), b.set(e.userId, B(e.mutualFriends)), D.set(e.userId, e.mutualFriends.length);
}
function H(e) {
    let { userProfile: t, fetchStartedAt: n, guildId: i } = e,
        r = i ?? t.guild_member_profile?.guild_id ?? y;
    if ((C.get(t.user.id)?.delete(r), N.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: i } = t,
                r = _.A.getGuild(n);
            null != r && (e[n] = { guild: r, nick: i });
        }),
            L.set(
                t.user.id,
                p.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        D.set(t.user.id, e), 0 === e && b.set(t.user.id, w);
    }
    null != t.mutual_friends && (b.set(t.user.id, B(t.mutual_friends)), D.set(t.user.id, t.mutual_friends.length));
    let s = null != t.premium_since ? new Date(t.premium_since) : null,
        a = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        o = t.application,
        u =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, m.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != s) {
                          let n = S.intl.formatToPlainString(S.t["8zbGNR"], { date: s });
                          return (
                              null != t && (n = S.intl.formatToPlainString(S.t.Hu4jfi, { date: s })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith("guild_booster_lvl") && null != a
                          ? { ...e, description: S.intl.formatToPlainString(S.t.IWkAq7, { date: a }) }
                          : e;
                  })
                : [];
    null != k && k.userId === t.user.id && (Date.now() > k.expiresAtMs ? (k = null) : Y(u, k));
    let c = Date.now();
    if (
        (v.set(t.user.id, {
            ...I(t.user_profile),
            userId: t.user.id,
            banner: t.user_profile?.banner,
            accentColor: t.user_profile?.accent_color,
            themeColors: t.user_profile?.theme_colors,
            popoutAnimationParticleType: t.user_profile?.popout_animation_particle_type,
            bio: t.user_profile?.bio ?? "",
            pronouns: t.user_profile?.pronouns ?? "",
            connectedAccounts: t.connected_accounts.filter((e) => l.A.isSupported(e.type)) ?? [],
            applicationRoleConnections: t.application_role_connections ?? [],
            premiumSince: s,
            premiumType: t.premium_type,
            premiumGuildSince: a,
            fetchStartedAt: n,
            fetchEndedAt: c,
            legacyUsername: t.legacy_username,
            application:
                null != o
                    ? {
                          id: o.id,
                          primarySkuId: o.primary_sku_id,
                          customInstallUrl: o.custom_install_url,
                          installParams: o.install_params,
                          integrationTypesConfig: o.integration_types_config,
                          flags: o.flags,
                          popularApplicationCommandIds: o.popular_application_command_ids,
                          storefront_available: o.storefront_available,
                          name: o.name,
                          termsOfServiceUrl: o.terms_of_service_url,
                          privacyPolicyUrl: o.privacy_policy_url,
                      }
                    : null,
            badges: u,
            widgets: t.widgets?.map(P).filter(E.Vq),
            wishlistSettings: t.wishlist_settings,
            private: t.private,
        }),
        U(t.user.id),
        null != t.guild_member_profile)
    ) {
        let e = {
                ...I(t.guild_member_profile),
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
            i = R.get(t.user.id);
        if (null != i) i.set(t.guild_member_profile.guild_id, e);
        else {
            let n = new Map();
            n.set(t.guild_member_profile.guild_id, e), R.set(t.user.id, n);
        }
        U(t.user.id, t.guild_member_profile.guild_id);
    }
}
function Y(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        i = t?.badges.filter((e) => !n.has(e.id));
    return i.length > 0 && e.push(...i), e;
}
function W(e) {
    let { userId: t, guildId: n, withMutualFriends: i } = e,
        r = n ?? y,
        s = C.get(t);
    if (null != s) s.add(r);
    else {
        let e = new Set();
        e.add(r), C.set(t, e);
    }
    i && N.add(t);
}
function K(e) {
    let { userId: t, guildId: n, apiError: i, fetchStartedAt: r } = e;
    C.get(t)?.delete(n ?? y), N.delete(t);
    let s = v.get(t) ?? {
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
        a = Date.now();
    if (((s.fetchStartedAt = r), (s.fetchEndedAt = a), (s.fetchError = i), v.set(t, s), null != n)) {
        let e = R.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = r), (e.fetchEndedAt = a), (e.fetchError = i));
    }
    i?.status === 404 && (D.set(t, 0), b.set(t, w), L.set(t, M));
}
function $(e) {
    x = !0;
}
function z(e) {
    (x = !1),
        null != e.guild_id
            ? (function (e) {
                  let {
                          userId: t,
                          guild_id: n,
                          accent_color: i,
                          banner: r,
                          bio: s,
                          pronouns: a,
                          popout_animation_particle_type: o,
                          theme_colors: l,
                          collectibles: u,
                      } = e,
                      c = R.get(t);
                  if (null == n || null == c) return;
                  let d = c.get(n);
                  null == d ||
                      (c.set(n, {
                          ...d,
                          ...I({ collectibles: u }),
                          accentColor: i,
                          banner: r,
                          bio: s,
                          pronouns: a,
                          popoutAnimationParticleType: o,
                          themeColors: l,
                      }),
                      U(t, n));
              })(e)
            : (function (e) {
                  let {
                          userId: t,
                          accent_color: n,
                          banner: i,
                          bio: r,
                          pronouns: s,
                          popout_animation_particle_type: a,
                          theme_colors: o,
                          collectibles: l,
                      } = e,
                      u = v.get(t);
                  null == u ||
                      (v.set(t, {
                          ...u,
                          ...I({ collectibles: l }),
                          accentColor: n,
                          banner: i,
                          bio: r,
                          pronouns: s,
                          popoutAnimationParticleType: a,
                          themeColors: o,
                      }),
                      U(t));
              })(e);
}
function q(e) {
    x = !1;
}
function Z(e) {
    let { userId: t, widgets: n } = e,
        i = v.get(t);
    if (null == i) return !1;
    v.set(t, { ...i, widgets: n.map(P).filter(E.Vq) });
}
function X(e) {
    let { badges: t, ttlInSeconds: n, userId: i } = e;
    k = { userId: i, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let r = v.get(i);
    if (null != r) {
        let e = r.badges ?? [];
        Y(e, k), v.set(i, { ...r, badges: e });
    }
}
function Q(e) {
    let t = e.user.id;
    return !((C.get(t)?.size ?? 0) > 0) && ei(t);
}
function J(e) {
    return [...v.keys()].reduce((e, t) => ei(t) || e, !1);
}
function ee(e) {
    return ei(e.user.id);
}
function et(e) {
    return ei(e.relationship.id);
}
function en() {
    C.clear(), N.clear(), v.clear(), R.clear();
}
function ei(e) {
    if (null == e) return !1;
    let t = v.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
    let n = R.get(e);
    if (null != n) for (let e of n.values()) (e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0);
}
class er extends h.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: W,
            USER_PROFILE_FETCH_FAILURE: K,
            USER_PROFILE_FETCH_SUCCESS: H,
            USER_PROFILE_UPDATE_START: $,
            USER_PROFILE_UPDATE_SUCCESS: z,
            USER_PROFILE_UPDATE_FAILURE: q,
            WIDGET_PENDING_SAVE_SUCCESS: Z,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: X,
            MUTUAL_FRIENDS_FETCH_START: F,
            MUTUAL_FRIENDS_FETCH_SUCCESS: j,
            MUTUAL_FRIENDS_FETCH_FAILURE: V,
            USER_UPDATE: Q,
            GUILD_MEMBER_UPDATE: Q,
            GUILD_JOIN: J,
            GUILD_DELETE: J,
            INVITE_ACCEPT_SUCCESS: J,
            GUILD_MEMBER_ADD: ee,
            GUILD_MEMBER_REMOVE: ee,
            RELATIONSHIP_ADD: et,
            RELATIONSHIP_REMOVE: et,
            RELATIONSHIP_UPDATE: et,
            LOGOUT: G,
        });
    }
    initialize() {
        this.waitFor(p.Ay), this.syncWith([u.default], en);
    }
    isFetchingProfile(e, t) {
        let n = C.get(e);
        return null != n && n.has(t ?? y);
    }
    isFetchingFriends(e) {
        return N.has(e);
    }
    get isSubmitting() {
        return x;
    }
    getUserProfile(e) {
        return v.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (R.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return b.get(e);
    }
    getMutualFriendsCount(e) {
        return D.get(e);
    }
    getMutualGuilds(e) {
        return L.get(e);
    }
    getWidgets(e) {
        return v.get(e)?.widgets;
    }
    getWishlistIds(e) {
        let t = v.get(e);
        return t?.wishlistSettings != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        if (null == e) return null;
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        let n = v.get(e);
        return n?.wishlistSettings?.[t] ?? null;
    }
    loadCache = () => {
        let e = this.readSnapshot(er.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? v.set(t, n) : v.delete(t));
            });
    };
    takeSnapshot() {
        let e = d.default.getId(),
            t = v.get(e);
        return null != t
            ? { version: er.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: er.LATEST_SNAPSHOT_VERSION, data: [] };
    }
}
let es = new er(),
    ea = es;
