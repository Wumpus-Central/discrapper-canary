"use strict";
n.d(t, { A: () => em }), n(938796), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(540185),
    s = n(451988),
    o = n(573648),
    l = n(495704),
    u = n(142888),
    c = n(773669),
    d = n(427157),
    _ = n(961350),
    f = n(71393),
    h = n(536802),
    p = n(290863),
    g = n(711014),
    E = n(403362),
    A = n(439174),
    I = n(633075),
    T = n(289173),
    y = n(985018);
let S = Symbol("NO GUILD ID"),
    v = new Map(),
    C = new Set(),
    b = "premium",
    N = "guild_booster_lvl",
    R = 0x7fffffff,
    O = new Map(),
    D = new Map(),
    L = new Map(),
    w = new Map(),
    x = new Map(),
    P = new Map(),
    M = new Map(),
    k = [],
    U = [],
    G = null,
    F = new Map();
function V(e) {
    let t = e.data.type;
    switch (t) {
        case a.x.CURRENT_GAMES:
        case a.x.FAVORITE_GAMES:
        case a.x.PLAYED_GAMES:
        case a.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({ applicationId: e.game_id, comment: e.comment, tags: e.tags })),
                r = i().uniqBy(n, "applicationId");
            return new T.Yy({ id: e.id, type: t, games: r });
        case a.x.APPLICATION:
            return new I.R({ id: e.id, applicationId: e.data.application_id });
    }
}
let B = !1,
    j = null;
function H(e) {
    let t = O.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if (n?.expiresAt == null) return;
    let r = 1e3 * n.expiresAt - Date.now();
    if (r <= 0) {
        (t.profileEffect = void 0), L.delete(e), ep.emitChange();
        return;
    }
    let i = L.get(e);
    null != i && i.start(Math.min(R, r), () => H(e));
}
function Y(e, t) {
    let n = D.get(e);
    if (null == n) return;
    let r = n.get(t);
    if (null == r) return;
    let i = r.profileEffect;
    if (i?.expiresAt == null) return;
    let a = 1e3 * i.expiresAt - Date.now();
    if (a <= 0) {
        n.set(t, { ...r, profileEffect: void 0 }), w.get(e)?.delete(t), ep.emitChange();
        return;
    }
    let s = w.get(e)?.get(t);
    null != s && s.start(Math.min(R, a), () => Y(e, t));
}
function W() {
    v.clear(), C.clear(), O.clear(), D.clear(), x.clear(), P.clear(), M.clear(), (B = !1);
}
function K(e) {
    let { userId: t } = e;
    C.add(t);
}
function $(e) {
    let { userId: t } = e;
    C.delete(t);
}
function z(e) {
    return i()(e)
        .map((e) => ({ key: e.id, user: new d.A(e), status: p.A.getStatus(e.id) }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function q(e) {
    C.delete(e.userId), x.set(e.userId, z(e.mutualFriends)), P.set(e.userId, e.mutualFriends.length);
}
function X(e) {
    let { userProfile: t, fetchStartedAt: n } = e,
        r = t.guild_member_profile?.guild_id ?? S;
    if ((v.get(t.user.id)?.delete(r), C.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = f.A.getGuild(n);
            null != i && (e[n] = { guild: i, nick: r });
        }),
            M.set(
                t.user.id,
                g.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        P.set(t.user.id, e), 0 === e && x.set(t.user.id, k);
    }
    null != t.mutual_friends && (x.set(t.user.id, z(t.mutual_friends)), P.set(t.user.id, t.mutual_friends.length));
    let i = null != t.premium_since ? new Date(t.premium_since) : null,
        a = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        l = t.application,
        c = (0, u.jV)(t.user_profile),
        d =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, A.e0)(e.id);
                      if ((e.id === b || null != t) && null != i) {
                          let n = y.intl.formatToPlainString(y.t["8zbGNR"], { date: i });
                          return (
                              null != t && (n = y.intl.formatToPlainString(y.t.Hu4jfi, { date: i })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith(N) && null != a
                          ? { ...e, description: y.intl.formatToPlainString(y.t.IWkAq7, { date: a }) }
                          : e;
                  })
                : [];
    if (
        (null != j && j.userId === t.user.id && (Date.now() > j.expiresAtMs ? (j = null) : Z(d, j)),
        O.set(t.user.id, {
            userId: t.user.id,
            banner: t.user_profile?.banner,
            accentColor: t.user_profile?.accent_color,
            themeColors: t.user_profile?.theme_colors,
            popoutAnimationParticleType: t.user_profile?.popout_animation_particle_type,
            bio: t.user_profile?.bio ?? "",
            profileEffect: c,
            pronouns: t.user_profile?.pronouns ?? "",
            connectedAccounts: t.connected_accounts.filter((e) => o.A.isSupported(e.type)) ?? [],
            applicationRoleConnections: t.application_role_connections ?? [],
            premiumSince: i,
            premiumType: t.premium_type,
            premiumGuildSince: a,
            fetchStartedAt: n,
            fetchEndedAt: Date.now(),
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
                      }
                    : null,
            badges: d,
            widgets: t.widgets?.map(V).filter(E.Vq),
            wishlistSettings: t.wishlist_settings,
            collectibles: t.user_profile?.collectibles?.map((e) => {
                let { sku_id: t, type: n, expires_at: r } = e;
                return { expiresAt: null != r ? new Date(r) : void 0, skuId: t, type: n };
            }),
        }),
        c?.expiresAt != null)
    ) {
        let e = new s.Ep();
        L.set(t.user.id, e), H(t.user.id);
    }
    if (null != t.guild_member_profile) {
        let e = (0, u.jV)(t.guild_member_profile),
            n = {
                userId: t.user.id,
                guildId: t.guild_member_profile.guild_id,
                banner: t.guild_member_profile.banner,
                accentColor: t.guild_member_profile.accent_color,
                themeColors: t.guild_member_profile?.theme_colors,
                popoutAnimationParticleType: t.guild_member_profile?.popout_animation_particle_type,
                profileEffect: e,
                bio: t.guild_member_profile.bio,
                pronouns: t.guild_member_profile.pronouns,
                badges: t.guild_badges,
            },
            r = D.get(t.user.id);
        if (null != r) r.set(t.guild_member_profile.guild_id, n);
        else {
            let e = new Map();
            e.set(t.guild_member_profile.guild_id, n), D.set(t.user.id, e);
        }
        if (e?.expiresAt != null) {
            let e = new s.Ep(),
                n = w.get(t.user.id);
            if (null != n) n.set(t.guild_member_profile.guild_id, e);
            else {
                let n = new Map();
                n.set(t.guild_member_profile.guild_id, e), w.set(t.user.id, n);
            }
            Y(t.user.id, t.guild_member_profile.guild_id);
        }
    }
}
function Z(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = t?.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}
function Q(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = n ?? S,
        a = v.get(t);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), v.set(t, e);
    }
    r && C.add(t);
}
function J(e) {
    let { userId: t, guildId: n, apiError: r, fetchStartedAt: i } = e;
    v.get(t)?.delete(n ?? S), C.delete(t);
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
    };
    (a.fetchStartedAt = i),
        (a.fetchEndedAt = Date.now()),
        (a.fetchError = r),
        O.set(t, a),
        r?.status === 404 && (P.set(t, 0), x.set(t, k), M.set(t, U));
}
function ee(e) {
    let {
            userId: t,
            accent_color: n,
            banner: r,
            bio: i,
            pronouns: a,
            popout_animation_particle_type: o,
            theme_colors: l,
            collectibles: c,
        } = e,
        d = O.get(t);
    if (null == d) return !1;
    let _ = (0, u.jV)({ collectibles: c });
    if (
        (O.set(t, {
            ...d,
            accentColor: n,
            banner: r,
            bio: i,
            pronouns: a,
            popoutAnimationParticleType: o,
            themeColors: l,
            profileEffect: _,
        }),
        _?.expiresAt != null)
    ) {
        let e = new s.Ep();
        L.set(t, e), H(t);
    }
}
function et(e) {
    let {
            userId: t,
            guild_id: n,
            accent_color: r,
            banner: i,
            bio: a,
            pronouns: o,
            popout_animation_particle_type: l,
            theme_colors: c,
            collectibles: d,
        } = e,
        _ = D.get(t);
    if (null == n || null == _) return !1;
    let f = _.get(n);
    if (null == f) return !1;
    let h = (0, u.jV)({ collectibles: d });
    if (
        (_.set(n, {
            ...f,
            accentColor: r,
            banner: i,
            bio: a,
            pronouns: o,
            popoutAnimationParticleType: l,
            themeColors: c,
            profileEffect: h,
        }),
        h?.expiresAt != null)
    ) {
        let e = new s.Ep(),
            r = w.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), w.set(t, r);
        }
        Y(t, n);
    }
}
function en(e) {
    B = !0;
}
function er(e) {
    (B = !1), null != e.guild_id ? et(e) : ee(e);
}
function ei(e) {
    B = !1;
}
function ea(e) {
    let { userId: t, widgets: n } = e,
        r = O.get(t);
    if (null == r) return !1;
    O.set(t, { ...r, widgets: n.map(V).filter(E.Vq) });
}
function es(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    j = { userId: r, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let i = O.get(r);
    if (null != i) {
        let e = i.badges ?? [];
        Z(e, j), O.set(r, { ...i, badges: e });
    }
}
function eo(e) {
    let t = e.user.id;
    return !((v.get(t)?.size ?? 0) > 0) && e_(t);
}
function el(e) {
    return [...O.keys()].reduce((e, t) => e_(t) || e, !1);
}
function eu(e) {
    return e_(e.user.id);
}
function ec(e) {
    return e_(e.relationship.id);
}
function ed() {
    v.clear(), C.clear(), O.clear(), D.clear();
}
function e_(e) {
    if (null == e) return !1;
    let t = O.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
function ef(e) {
    for (let t of ((G = e.applicationConfigs.map((e) => new l.V(e))), F.clear(), G)) F.set(t.applicationId, t);
}
class eh extends h.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Q,
            USER_PROFILE_FETCH_FAILURE: J,
            USER_PROFILE_FETCH_SUCCESS: X,
            USER_PROFILE_UPDATE_START: en,
            USER_PROFILE_UPDATE_SUCCESS: er,
            USER_PROFILE_UPDATE_FAILURE: ei,
            WIDGET_PENDING_SAVE_SUCCESS: ea,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: es,
            MUTUAL_FRIENDS_FETCH_START: K,
            MUTUAL_FRIENDS_FETCH_SUCCESS: q,
            MUTUAL_FRIENDS_FETCH_FAILURE: $,
            USER_UPDATE: eo,
            GUILD_MEMBER_UPDATE: eo,
            GUILD_JOIN: el,
            GUILD_DELETE: el,
            INVITE_ACCEPT_SUCCESS: el,
            GUILD_MEMBER_ADD: eu,
            GUILD_MEMBER_REMOVE: eu,
            RELATIONSHIP_ADD: ec,
            RELATIONSHIP_REMOVE: ec,
            RELATIONSHIP_UPDATE: ec,
            USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: ef,
            LOGOUT: W,
        });
    }
    initialize() {
        this.waitFor(g.Ay), this.syncWith([c.default], ed);
    }
    isFetchingProfile(e, t) {
        let n = v.get(e);
        return null != n && n.has(t ?? S);
    }
    isFetchingFriends(e) {
        return C.has(e);
    }
    get isSubmitting() {
        return B;
    }
    getUserProfile(e) {
        return O.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (D.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return x.get(e);
    }
    getMutualFriendsCount(e) {
        return P.get(e);
    }
    getMutualGuilds(e) {
        return M.get(e);
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
        let e = this.readSnapshot(eh.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? O.set(t, n) : O.delete(t));
            });
    };
    takeSnapshot() {
        let e = _.default.getId(),
            t = O.get(e);
        return null != t
            ? { version: eh.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: eh.LATEST_SNAPSHOT_VERSION, data: [] };
    }
    get applicationWidgetConfigs() {
        return G;
    }
    getApplicationWidgetConfig(e) {
        return F.get(e);
    }
}
let ep = new eh(),
    em = ep;
