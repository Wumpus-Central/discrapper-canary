"use strict";
n.d(t, { A: () => ec }), n(321073), n(938796);
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
    m = n(646976),
    g = n(289173),
    S = n(210598);
function N(e) {
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
var C = n(652215),
    O = n(375708);
let R = Symbol("NO GUILD ID"),
    L = new Map(),
    y = new Set(),
    D = new Map(),
    v = new Map(),
    b = {},
    M = new Map(),
    P = new Map(),
    U = new Map(),
    w = [],
    G = [];
function x(e) {
    let t = e.data.type;
    switch (t) {
        case s.x.CURRENT_GAMES:
        case s.x.FAVORITE_GAMES:
        case s.x.PLAYED_GAMES:
        case s.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({ gameId: e.game_id, comment: e.comment, tags: e.tags })),
                i = r().uniqBy(n, "gameId");
            return new g.Yy({ id: e.id, type: t, games: i });
        case s.x.APPLICATION:
            return new T.R({ id: e.id, applicationId: e.data.application_id });
        case s.x.PERSONAL:
            return new S.Tu({ id: e.id, header: e.data.header ?? "", sections: (0, S.wv)(e.data.sections) });
        case s.x.CLIPS_GALLERY:
            return new m.k({
                id: e.id,
                clips: e.data.clips
                    .map((e) =>
                        null != e.id && null != e.file_id
                            ? {
                                  status: "saved",
                                  id: e.id,
                                  fileId: e.file_id,
                                  gameId: e.game_id,
                                  title: e.title ?? void 0,
                                  tags: e.tags,
                                  localClipId: e.local_clip_id ?? void 0,
                              }
                            : null,
                    )
                    .filter(f.Vq),
            });
        default:
            return;
    }
}
function k(e) {
    switch (e.type) {
        case s.x.CURRENT_GAMES:
        case s.x.FAVORITE_GAMES:
        case s.x.PLAYED_GAMES:
        case s.x.WANT_TO_PLAY_GAMES: {
            let { id: t, type: n, games: i } = e;
            return new g.Yy({ id: t, type: n, games: i });
        }
        case s.x.APPLICATION: {
            let { id: t, applicationId: n } = e;
            return new T.R({ id: t, applicationId: n });
        }
        case s.x.PERSONAL: {
            let { id: t, header: n, sections: i } = e;
            return new S.Tu({ id: t, header: n, sections: i });
        }
        case s.x.CLIPS_GALLERY: {
            let { id: t, clips: n } = e;
            return new m.k({ id: t, clips: n });
        }
        default:
            e.type;
            return;
    }
}
let F = !1,
    V = null;
function B(e, t) {
    let n = null != t ? v.get(e)?.get(t) : D.get(e);
    if (n?.collectibles == null) return;
    let i = [];
    n.collectibles.forEach((n) => {
        if (null == n.expiresAt) return;
        let r = n.expiresAt.getTime() - Date.now();
        r <= 0
            ? i.push(n)
            : (null == b[e] && (b[e] = { [R]: {} }),
              null == b[e][t ?? R] && (b[e][t ?? R] = {}),
              null == b[e][t ?? R][n.skuId] && (b[e][t ?? R][n.skuId] = new l.Ep()),
              b[e][t ?? R][n.skuId].start(Math.min(C.mnr, r), () => {
                  B(e, t);
              }));
    }),
        0 !== i.length &&
            ((n.collectibles = n.collectibles.filter((e) => !i.includes(e))),
            i.forEach((i) => {
                i.type === a.R.PROFILE_EFFECT
                    ? (n.profileEffect = void 0)
                    : i.type === a.R.PROFILE_FRAME && (n.profileFrame = void 0),
                    delete b[e]?.[t ?? R]?.[i.skuId];
            }),
            "guildId" in n ? v.get(e)?.set(n.guildId, n) : D.set(e, n),
            ed.emitChange());
}
function H() {
    L.clear(), y.clear(), D.clear(), v.clear(), M.clear(), P.clear(), U.clear(), (F = !1);
}
function j(e) {
    let { userId: t } = e;
    y.add(t);
}
function W(e) {
    let { userId: t } = e;
    y.delete(t);
}
function Y(e) {
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
function K(e) {
    y.delete(e.userId), M.set(e.userId, Y(e.mutualFriends)), P.set(e.userId, e.mutualFriends.length);
}
function $(e) {
    let { userProfile: t, fetchStartedAt: n, guildId: i } = e,
        r = i ?? t.guild_member_profile?.guild_id ?? R;
    if ((L.get(t.user.id)?.delete(r), y.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: i } = t,
                r = E.A.getGuild(n);
            null != r && (e[n] = { guild: r, nick: i });
        }),
            U.set(
                t.user.id,
                I.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        P.set(t.user.id, e), 0 === e && M.set(t.user.id, w);
    }
    null != t.mutual_friends && (M.set(t.user.id, Y(t.mutual_friends)), P.set(t.user.id, t.mutual_friends.length));
    let a = null != t.premium_since ? new Date(t.premium_since) : null,
        s = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        l = t.application,
        d =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, p.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != a) {
                          let n = O.intl.formatToPlainString(O.t["8zbGNR"], { date: a });
                          return (
                              null != t && (n = O.intl.formatToPlainString(O.t.Hu4jfi, { date: a })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith("guild_booster_lvl") && null != s
                          ? { ...e, description: O.intl.formatToPlainString(O.t.IWkAq7, { date: s }) }
                          : e;
                  })
                : [];
    null != V && V.userId === t.user.id && (Date.now() > V.expiresAtMs ? (V = null) : z(d, V));
    let c = Date.now();
    if (
        (D.set(t.user.id, {
            ...N(t.user_profile),
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
            widgets: t.widgets?.map(x).filter(f.Vq),
            wishlistSettings: t.wishlist_settings,
            private: t.private,
        }),
        B(t.user.id),
        null != t.guild_member_profile)
    ) {
        let e = {
                ...N(t.guild_member_profile),
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
            i = v.get(t.user.id);
        if (null != i) i.set(t.guild_member_profile.guild_id, e);
        else {
            let n = new Map();
            n.set(t.guild_member_profile.guild_id, e), v.set(t.user.id, n);
        }
        B(t.user.id, t.guild_member_profile.guild_id);
    }
}
function z(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        i = t?.badges.filter((e) => !n.has(e.id));
    return i.length > 0 && e.push(...i), e;
}
function Z(e) {
    let { userId: t, guildId: n, withMutualFriends: i } = e,
        r = n ?? R,
        a = L.get(t);
    if (null != a) a.add(r);
    else {
        let e = new Set();
        e.add(r), L.set(t, e);
    }
    i && y.add(t);
}
function q(e) {
    let { userId: t, guildId: n, apiError: i, fetchStartedAt: r } = e;
    L.get(t)?.delete(n ?? R), y.delete(t);
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
        let e = v.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = r), (e.fetchEndedAt = s), (e.fetchError = i));
    }
    i?.status === 404 && (P.set(t, 0), M.set(t, w), U.set(t, G));
}
function X(e) {
    F = !0;
}
function Q(e) {
    (F = !1),
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
                      c = v.get(t);
                  if (null == n || null == c) return;
                  let u = c.get(n);
                  null == u ||
                      (c.set(n, {
                          ...u,
                          ...N({ collectibles: d }),
                          accentColor: i,
                          banner: r,
                          bio: a,
                          pronouns: s,
                          popoutAnimationParticleType: l,
                          themeColors: o,
                      }),
                      B(t, n));
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
                          ...N({ collectibles: o }),
                          accentColor: n,
                          banner: i,
                          bio: r,
                          pronouns: a,
                          popoutAnimationParticleType: s,
                          themeColors: l,
                      }),
                      B(t));
              })(e);
}
function J(e) {
    F = !1;
}
function ee(e) {
    let { userId: t, widgets: n } = e,
        i = D.get(t);
    if (null == i) return !1;
    D.set(t, { ...i, widgets: n.map(x).filter(f.Vq) });
}
function et(e) {
    let { badges: t, ttlInSeconds: n, userId: i } = e;
    V = { userId: i, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let r = D.get(i);
    if (null != r) {
        let e = r.badges ?? [];
        z(e, V), D.set(i, { ...r, badges: e });
    }
}
function en(e) {
    let t = e.user.id;
    return !((L.get(t)?.size ?? 0) > 0) && el(t);
}
function ei(e) {
    return [...D.keys()].reduce((e, t) => el(t) || e, !1);
}
function er(e) {
    return el(e.user.id);
}
function ea(e) {
    return el(e.relationship.id);
}
function es() {
    L.clear(), y.clear(), D.clear(), v.clear();
}
function el(e) {
    if (null == e) return !1;
    let t = D.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
    let n = v.get(e);
    if (null != n) for (let e of n.values()) (e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0);
}
class eo extends A.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Z,
            USER_PROFILE_FETCH_FAILURE: q,
            USER_PROFILE_FETCH_SUCCESS: $,
            USER_PROFILE_UPDATE_START: X,
            USER_PROFILE_UPDATE_SUCCESS: Q,
            USER_PROFILE_UPDATE_FAILURE: J,
            WIDGET_PENDING_SAVE_SUCCESS: ee,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: et,
            MUTUAL_FRIENDS_FETCH_START: j,
            MUTUAL_FRIENDS_FETCH_SUCCESS: K,
            MUTUAL_FRIENDS_FETCH_FAILURE: W,
            USER_UPDATE: en,
            GUILD_MEMBER_UPDATE: en,
            GUILD_JOIN: ei,
            GUILD_DELETE: ei,
            INVITE_ACCEPT_SUCCESS: ei,
            GUILD_MEMBER_ADD: er,
            GUILD_MEMBER_REMOVE: er,
            RELATIONSHIP_ADD: ea,
            RELATIONSHIP_REMOVE: ea,
            RELATIONSHIP_UPDATE: ea,
            LOGOUT: H,
        });
    }
    initialize() {
        this.waitFor(I.Ay), this.syncWith([c.default], es);
    }
    isFetchingProfile(e, t) {
        let n = L.get(e);
        return null != n && n.has(t ?? R);
    }
    isFetchingFriends(e) {
        return y.has(e);
    }
    get isSubmitting() {
        return F;
    }
    getUserProfile(e) {
        return D.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (v.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return M.get(e);
    }
    getMutualFriendsCount(e) {
        return P.get(e);
    }
    getMutualGuilds(e) {
        return U.get(e);
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
        let e = this.readSnapshot(eo.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? D.set(t, { ...n, widgets: n.widgets?.map(k).filter(f.Vq) }) : D.delete(t));
            });
    };
    takeSnapshot() {
        let e = _.default.getId(),
            t = D.get(e);
        return null != t
            ? { version: eo.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: eo.LATEST_SNAPSHOT_VERSION, data: [] };
    }
}
let ed = new eo(),
    ec = ed;
