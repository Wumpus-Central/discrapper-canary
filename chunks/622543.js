"use strict";
n.d(t, { A: () => eh }), n(938796), n(321073);
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
    p = n(536802),
    h = n(290863),
    m = n(711014),
    g = n(403362),
    E = n(439174),
    A = n(633075),
    I = n(289173),
    T = n(985018);
let y = Symbol("NO GUILD ID"),
    S = new Map(),
    v = new Set(),
    C = "premium",
    b = "guild_booster_lvl",
    N = 0x7fffffff,
    R = new Map(),
    O = new Map(),
    D = new Map(),
    L = new Map(),
    w = new Map(),
    x = new Map(),
    P = new Map(),
    M = [],
    k = [],
    U = null,
    G = new Map();
function V(e) {
    let t = e.data.type;
    switch (t) {
        case a.x.CURRENT_GAMES:
        case a.x.FAVORITE_GAMES:
        case a.x.PLAYED_GAMES:
        case a.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({ applicationId: e.game_id, comment: e.comment, tags: e.tags })),
                r = i().uniqBy(n, "applicationId");
            return new I.Yy({ id: e.id, type: t, games: r });
        case a.x.APPLICATION:
            return new A.R({ id: e.id, applicationId: e.data.application_id });
    }
}
let F = !1,
    B = null;
function j(e) {
    let t = R.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if (n?.expiresAt == null) return;
    let r = 1e3 * n.expiresAt - Date.now();
    if (r <= 0) {
        (t.profileEffect = void 0), D.delete(e), ep.emitChange();
        return;
    }
    let i = D.get(e);
    null != i && i.start(Math.min(N, r), () => j(e));
}
function H(e, t) {
    let n = O.get(e);
    if (null == n) return;
    let r = n.get(t);
    if (null == r) return;
    let i = r.profileEffect;
    if (i?.expiresAt == null) return;
    let a = 1e3 * i.expiresAt - Date.now();
    if (a <= 0) {
        n.set(t, { ...r, profileEffect: void 0 }), L.get(e)?.delete(t), ep.emitChange();
        return;
    }
    let s = L.get(e)?.get(t);
    null != s && s.start(Math.min(N, a), () => H(e, t));
}
function Y() {
    S.clear(), v.clear(), R.clear(), O.clear(), w.clear(), x.clear(), P.clear(), (F = !1);
}
function W(e) {
    let { userId: t } = e;
    v.add(t);
}
function K(e) {
    let { userId: t } = e;
    v.delete(t);
}
function z(e) {
    return i()(e)
        .map((e) => ({ key: e.id, user: new d.A(e), status: h.A.getStatus(e.id) }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function $(e) {
    v.delete(e.userId), w.set(e.userId, z(e.mutualFriends)), x.set(e.userId, e.mutualFriends.length);
}
function q(e) {
    let { userProfile: t, fetchStartedAt: n } = e,
        r = t.guild_member_profile?.guild_id ?? y;
    if ((S.get(t.user.id)?.delete(r), v.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = f.A.getGuild(n);
            null != i && (e[n] = { guild: i, nick: r });
        }),
            P.set(
                t.user.id,
                m.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        x.set(t.user.id, e), 0 === e && w.set(t.user.id, M);
    }
    null != t.mutual_friends && (w.set(t.user.id, z(t.mutual_friends)), x.set(t.user.id, t.mutual_friends.length));
    let i = null != t.premium_since ? new Date(t.premium_since) : null,
        a = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        l = t.application,
        c = (0, u.jV)(t.user_profile),
        d =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, E.e0)(e.id);
                      if ((e.id === C || null != t) && null != i) {
                          let n = T.intl.formatToPlainString(T.t["8zbGNR"], { date: i });
                          return (
                              null != t && (n = T.intl.formatToPlainString(T.t.Hu4jfi, { date: i })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith(b) && null != a
                          ? { ...e, description: T.intl.formatToPlainString(T.t.IWkAq7, { date: a }) }
                          : e;
                  })
                : [];
    if (
        (null != B && B.userId === t.user.id && (Date.now() > B.expiresAtMs ? (B = null) : Z(d, B)),
        R.set(t.user.id, {
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
            widgets: t.widgets?.map(V).filter(g.Vq),
            wishlistSettings: t.wishlist_settings,
            collectibles: t.user_profile?.collectibles?.map((e) => {
                let { sku_id: t, type: n, expires_at: r } = e;
                return { expiresAt: null != r ? new Date(r) : void 0, skuId: t, type: n };
            }),
        }),
        c?.expiresAt != null)
    ) {
        let e = new s.Ep();
        D.set(t.user.id, e), j(t.user.id);
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
            r = O.get(t.user.id);
        if (null != r) r.set(t.guild_member_profile.guild_id, n);
        else {
            let e = new Map();
            e.set(t.guild_member_profile.guild_id, n), O.set(t.user.id, e);
        }
        if (e?.expiresAt != null) {
            let e = new s.Ep(),
                n = L.get(t.user.id);
            if (null != n) n.set(t.guild_member_profile.guild_id, e);
            else {
                let n = new Map();
                n.set(t.guild_member_profile.guild_id, e), L.set(t.user.id, n);
            }
            H(t.user.id, t.guild_member_profile.guild_id);
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
        i = n ?? y,
        a = S.get(t);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), S.set(t, e);
    }
    r && v.add(t);
}
function X(e) {
    let { userId: t, guildId: n, apiError: r, fetchStartedAt: i } = e;
    S.get(t)?.delete(n ?? y), v.delete(t);
    let a = R.get(t) ?? {
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
        R.set(t, a),
        r?.status === 404 && (x.set(t, 0), w.set(t, M), P.set(t, k));
}
function J(e) {
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
        d = R.get(t);
    if (null == d) return !1;
    let _ = (0, u.jV)({ collectibles: c });
    if (
        (R.set(t, {
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
        D.set(t, e), j(t);
    }
}
function ee(e) {
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
        _ = O.get(t);
    if (null == n || null == _) return !1;
    let f = _.get(n);
    if (null == f) return !1;
    let p = (0, u.jV)({ collectibles: d });
    if (
        (_.set(n, {
            ...f,
            accentColor: r,
            banner: i,
            bio: a,
            pronouns: o,
            popoutAnimationParticleType: l,
            themeColors: c,
            profileEffect: p,
        }),
        p?.expiresAt != null)
    ) {
        let e = new s.Ep(),
            r = L.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), L.set(t, r);
        }
        H(t, n);
    }
}
function et(e) {
    F = !0;
}
function en(e) {
    (F = !1), null != e.guild_id ? ee(e) : J(e);
}
function er(e) {
    F = !1;
}
function ei(e) {
    let { userId: t, widgets: n } = e,
        r = R.get(t);
    if (null == r) return !1;
    R.set(t, { ...r, widgets: n.map(V).filter(g.Vq) });
}
function ea(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    B = { userId: r, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let i = R.get(r);
    if (null != i) {
        let e = i.badges ?? [];
        Z(e, B), R.set(r, { ...i, badges: e });
    }
}
function es(e) {
    let t = e.user.id;
    return !((S.get(t)?.size ?? 0) > 0) && ed(t);
}
function eo(e) {
    return [...R.keys()].reduce((e, t) => ed(t) || e, !1);
}
function el(e) {
    return ed(e.user.id);
}
function eu(e) {
    return ed(e.relationship.id);
}
function ec() {
    S.clear(), v.clear(), R.clear(), O.clear();
}
function ed(e) {
    if (null == e) return !1;
    let t = R.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
function e_(e) {
    for (let t of ((U = e.applicationConfigs.map((e) => new l.V(e))), G.clear(), U)) G.set(t.applicationId, t);
}
class ef extends p.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Q,
            USER_PROFILE_FETCH_FAILURE: X,
            USER_PROFILE_FETCH_SUCCESS: q,
            USER_PROFILE_UPDATE_START: et,
            USER_PROFILE_UPDATE_SUCCESS: en,
            USER_PROFILE_UPDATE_FAILURE: er,
            WIDGET_PENDING_SAVE_SUCCESS: ei,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: ea,
            MUTUAL_FRIENDS_FETCH_START: W,
            MUTUAL_FRIENDS_FETCH_SUCCESS: $,
            MUTUAL_FRIENDS_FETCH_FAILURE: K,
            USER_UPDATE: es,
            GUILD_MEMBER_UPDATE: es,
            GUILD_JOIN: eo,
            GUILD_DELETE: eo,
            INVITE_ACCEPT_SUCCESS: eo,
            GUILD_MEMBER_ADD: el,
            GUILD_MEMBER_REMOVE: el,
            RELATIONSHIP_ADD: eu,
            RELATIONSHIP_REMOVE: eu,
            RELATIONSHIP_UPDATE: eu,
            USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: e_,
            LOGOUT: Y,
        });
    }
    initialize() {
        this.waitFor(m.Ay), this.syncWith([c.default], ec);
    }
    isFetchingProfile(e, t) {
        let n = S.get(e);
        return null != n && n.has(t ?? y);
    }
    isFetchingFriends(e) {
        return v.has(e);
    }
    get isSubmitting() {
        return F;
    }
    getUserProfile(e) {
        return R.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (O.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return w.get(e);
    }
    getMutualFriendsCount(e) {
        return x.get(e);
    }
    getMutualGuilds(e) {
        return P.get(e);
    }
    getWidgets(e) {
        return R.get(e)?.widgets;
    }
    getWishlistIds(e) {
        let t = R.get(e);
        return t?.wishlistSettings != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        if (null == e) return null;
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        let n = R.get(e);
        return n?.wishlistSettings?.[t] ?? null;
    }
    loadCache = () => {
        let e = this.readSnapshot(ef.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? R.set(t, n) : R.delete(t));
            });
    };
    takeSnapshot() {
        let e = _.default.getId(),
            t = R.get(e);
        return null != t
            ? { version: ef.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: ef.LATEST_SNAPSHOT_VERSION, data: [] };
    }
    get applicationWidgetConfigs() {
        return U;
    }
    getApplicationWidgetConfig(e) {
        return G.get(e);
    }
}
let ep = new ef(),
    eh = ep;
