"use strict";
n.d(t, { A: () => es }), n(321073), n(938796);
var i = n(735438),
    r = n.n(i),
    a = n(575593),
    s = n(540185),
    l = n(451988),
    o = n(573648),
    d = n(773669),
    c = n(889227),
    u = n(280450),
    _ = n(71393),
    E = n(536802),
    A = n(290863),
    h = n(711014),
    I = n(403362),
    f = n(439174),
    p = n(633075),
    T = n(289173);
function m(e) {
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
var g = n(652215),
    S = n(375708);
let N = Symbol("NO GUILD ID"),
    C = new Map(),
    R = new Set(),
    O = new Map(),
    L = new Map(),
    D = {},
    y = new Map(),
    v = new Map(),
    b = new Map(),
    M = [],
    P = [];
function U(e) {
    let t = e.data.type;
    switch (t) {
        case s.x.CURRENT_GAMES:
        case s.x.FAVORITE_GAMES:
        case s.x.PLAYED_GAMES:
        case s.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({ applicationId: e.game_id, comment: e.comment, tags: e.tags })),
                i = r().uniqBy(n, "applicationId");
            return new T.Yy({ id: e.id, type: t, games: i });
        case s.x.APPLICATION:
            return new p.R({ id: e.id, applicationId: e.data.application_id });
    }
}
let w = !1,
    G = null;
function x(e, t) {
    let n = null != t ? L.get(e)?.get(t) : O.get(e);
    if (n?.collectibles == null) return;
    let i = [];
    n.collectibles.forEach((n) => {
        if (null == n.expiresAt) return;
        let r = n.expiresAt.getTime() - Date.now();
        r <= 0
            ? i.push(n)
            : (null == D[e] && (D[e] = { [N]: {} }),
              null == D[e][t ?? N] && (D[e][t ?? N] = {}),
              null == D[e][t ?? N][n.skuId] && (D[e][t ?? N][n.skuId] = new l.Ep()),
              D[e][t ?? N][n.skuId].start(Math.min(g.mnr, r), () => {
                  x(e, t);
              }));
    }),
        0 !== i.length &&
            ((n.collectibles = n.collectibles.filter((e) => !i.includes(e))),
            i.forEach((i) => {
                i.type === a.R.PROFILE_EFFECT
                    ? (n.profileEffect = void 0)
                    : i.type === a.R.PROFILE_FRAME && (n.profileFrame = void 0),
                    delete D[e]?.[t ?? N]?.[i.skuId];
            }),
            "guildId" in n ? L.get(e)?.set(n.guildId, n) : O.set(e, n),
            ea.emitChange());
}
function k() {
    C.clear(), R.clear(), O.clear(), L.clear(), y.clear(), v.clear(), b.clear(), (w = !1);
}
function F(e) {
    let { userId: t } = e;
    R.add(t);
}
function V(e) {
    let { userId: t } = e;
    R.delete(t);
}
function B(e) {
    return r()(e)
        .map((e) => ({ key: e.id, user: new c.A(e), status: A.A.getStatus(e.id) }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function H(e) {
    R.delete(e.userId), y.set(e.userId, B(e.mutualFriends)), v.set(e.userId, e.mutualFriends.length);
}
function j(e) {
    let { userProfile: t, fetchStartedAt: n, guildId: i } = e,
        r = i ?? t.guild_member_profile?.guild_id ?? N;
    if ((C.get(t.user.id)?.delete(r), R.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: i } = t,
                r = _.A.getGuild(n);
            null != r && (e[n] = { guild: r, nick: i });
        }),
            b.set(
                t.user.id,
                h.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        v.set(t.user.id, e), 0 === e && y.set(t.user.id, M);
    }
    null != t.mutual_friends && (y.set(t.user.id, B(t.mutual_friends)), v.set(t.user.id, t.mutual_friends.length));
    let a = null != t.premium_since ? new Date(t.premium_since) : null,
        s = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        l = t.application,
        d =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, f.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != a) {
                          let n = S.intl.formatToPlainString(S.t["8zbGNR"], { date: a });
                          return (
                              null != t && (n = S.intl.formatToPlainString(S.t.Hu4jfi, { date: a })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith("guild_booster_lvl") && null != s
                          ? { ...e, description: S.intl.formatToPlainString(S.t.IWkAq7, { date: s }) }
                          : e;
                  })
                : [];
    null != G && G.userId === t.user.id && (Date.now() > G.expiresAtMs ? (G = null) : W(d, G));
    let c = Date.now();
    if (
        (O.set(t.user.id, {
            ...m(t.user_profile),
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
            widgets: t.widgets?.map(U).filter(I.Vq),
            wishlistSettings: t.wishlist_settings,
            private: t.private,
        }),
        x(t.user.id),
        null != t.guild_member_profile)
    ) {
        let e = {
                ...m(t.guild_member_profile),
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
            i = L.get(t.user.id);
        if (null != i) i.set(t.guild_member_profile.guild_id, e);
        else {
            let n = new Map();
            n.set(t.guild_member_profile.guild_id, e), L.set(t.user.id, n);
        }
        x(t.user.id, t.guild_member_profile.guild_id);
    }
}
function W(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        i = t?.badges.filter((e) => !n.has(e.id));
    return i.length > 0 && e.push(...i), e;
}
function Y(e) {
    let { userId: t, guildId: n, withMutualFriends: i } = e,
        r = n ?? N,
        a = C.get(t);
    if (null != a) a.add(r);
    else {
        let e = new Set();
        e.add(r), C.set(t, e);
    }
    i && R.add(t);
}
function K(e) {
    let { userId: t, guildId: n, apiError: i, fetchStartedAt: r } = e;
    C.get(t)?.delete(n ?? N), R.delete(t);
    let a = O.get(t) ?? {
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
    if (((a.fetchStartedAt = r), (a.fetchEndedAt = s), (a.fetchError = i), O.set(t, a), null != n)) {
        let e = L.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = r), (e.fetchEndedAt = s), (e.fetchError = i));
    }
    i?.status === 404 && (v.set(t, 0), y.set(t, M), b.set(t, P));
}
function $(e) {
    w = !0;
}
function z(e) {
    (w = !1),
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
                      c = L.get(t);
                  if (null == n || null == c) return;
                  let u = c.get(n);
                  null == u ||
                      (c.set(n, {
                          ...u,
                          ...m({ collectibles: d }),
                          accentColor: i,
                          banner: r,
                          bio: a,
                          pronouns: s,
                          popoutAnimationParticleType: l,
                          themeColors: o,
                      }),
                      x(t, n));
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
                      d = O.get(t);
                  null == d ||
                      (O.set(t, {
                          ...d,
                          ...m({ collectibles: o }),
                          accentColor: n,
                          banner: i,
                          bio: r,
                          pronouns: a,
                          popoutAnimationParticleType: s,
                          themeColors: l,
                      }),
                      x(t));
              })(e);
}
function q(e) {
    w = !1;
}
function Z(e) {
    let { userId: t, widgets: n } = e,
        i = O.get(t);
    if (null == i) return !1;
    O.set(t, { ...i, widgets: n.map(U).filter(I.Vq) });
}
function X(e) {
    let { badges: t, ttlInSeconds: n, userId: i } = e;
    G = { userId: i, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let r = O.get(i);
    if (null != r) {
        let e = r.badges ?? [];
        W(e, G), O.set(i, { ...r, badges: e });
    }
}
function Q(e) {
    let t = e.user.id;
    return !((C.get(t)?.size ?? 0) > 0) && ei(t);
}
function J(e) {
    return [...O.keys()].reduce((e, t) => ei(t) || e, !1);
}
function ee(e) {
    return ei(e.user.id);
}
function et(e) {
    return ei(e.relationship.id);
}
function en() {
    C.clear(), R.clear(), O.clear(), L.clear();
}
function ei(e) {
    if (null == e) return !1;
    let t = O.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
    let n = L.get(e);
    if (null != n) for (let e of n.values()) (e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0);
}
class er extends E.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Y,
            USER_PROFILE_FETCH_FAILURE: K,
            USER_PROFILE_FETCH_SUCCESS: j,
            USER_PROFILE_UPDATE_START: $,
            USER_PROFILE_UPDATE_SUCCESS: z,
            USER_PROFILE_UPDATE_FAILURE: q,
            WIDGET_PENDING_SAVE_SUCCESS: Z,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: X,
            MUTUAL_FRIENDS_FETCH_START: F,
            MUTUAL_FRIENDS_FETCH_SUCCESS: H,
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
            LOGOUT: k,
        });
    }
    initialize() {
        this.waitFor(h.Ay), this.syncWith([d.default], en);
    }
    isFetchingProfile(e, t) {
        let n = C.get(e);
        return null != n && n.has(t ?? N);
    }
    isFetchingFriends(e) {
        return R.has(e);
    }
    get isSubmitting() {
        return w;
    }
    getUserProfile(e) {
        return O.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (L.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return y.get(e);
    }
    getMutualFriendsCount(e) {
        return v.get(e);
    }
    getMutualGuilds(e) {
        return b.get(e);
    }
    getWidgets(e) {
        return O.get(e)?.widgets;
    }
    getWishlistIds(e) {
        let t = O.get(e);
        return t?.wishlistSettings != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        if (null == e) return null;
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        let n = O.get(e);
        return n?.wishlistSettings?.[t] ?? null;
    }
    loadCache = () => {
        let e = this.readSnapshot(er.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? O.set(t, n) : O.delete(t));
            });
    };
    takeSnapshot() {
        let e = u.default.getId(),
            t = O.get(e);
        return null != t
            ? { version: er.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: er.LATEST_SNAPSHOT_VERSION, data: [] };
    }
}
let ea = new er(),
    es = ea;
