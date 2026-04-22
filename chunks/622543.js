"use strict";
n.d(t, { A: () => e_ }), n(938796), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(540185),
    a = n(451988),
    o = n(573648),
    l = n(495704),
    u = n(773669),
    d = n(427157),
    c = n(961350),
    _ = n(71393),
    f = n(536802),
    E = n(290863),
    h = n(711014),
    p = n(403362),
    m = n(439174),
    g = n(633075),
    A = n(289173),
    I = n(477336),
    T = n(518477),
    S = n(652215),
    y = n(985018);
let N = Symbol("NO GUILD ID"),
    O = new Map(),
    R = new Set(),
    v = new Map(),
    C = new Map(),
    b = new Map(),
    D = new Map(),
    L = new Map(),
    w = new Map(),
    M = new Map(),
    P = [],
    U = [],
    k = null,
    x = new Map();
function G(e) {
    let t = e.data.type;
    switch (t) {
        case s.x.CURRENT_GAMES:
        case s.x.FAVORITE_GAMES:
        case s.x.PLAYED_GAMES:
        case s.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({ applicationId: e.game_id, comment: e.comment, tags: e.tags })),
                r = i().uniqBy(n, "applicationId");
            return new A.Yy({ id: e.id, type: t, games: r });
        case s.x.APPLICATION:
            return new g.R({ id: e.id, applicationId: e.data.application_id });
    }
}
let V = !1,
    F = null;
function B(e) {
    let t = v.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if (n?.expiresAt == null) return;
    let r = 1e3 * n.expiresAt - Date.now();
    if (r <= 0) {
        (t.profileEffect = void 0), b.delete(e), ec.emitChange();
        return;
    }
    let i = b.get(e);
    null != i && i.start(Math.min(S.mnr, r), () => B(e));
}
function H(e, t) {
    let n = C.get(e);
    if (null == n) return;
    let r = n.get(t);
    if (null == r) return;
    let i = r.profileEffect;
    if (i?.expiresAt == null) return;
    let s = 1e3 * i.expiresAt - Date.now();
    if (s <= 0) {
        n.set(t, { ...r, profileEffect: void 0 }), D.get(e)?.delete(t), ec.emitChange();
        return;
    }
    let a = D.get(e)?.get(t);
    null != a && a.start(Math.min(S.mnr, s), () => H(e, t));
}
function Y() {
    O.clear(), R.clear(), v.clear(), C.clear(), L.clear(), w.clear(), M.clear(), (V = !1);
}
function W(e) {
    let { userId: t } = e;
    R.add(t);
}
function j(e) {
    let { userId: t } = e;
    R.delete(t);
}
function K(e) {
    return i()(e)
        .map((e) => ({ key: e.id, user: new d.A(e), status: E.A.getStatus(e.id) }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function $(e) {
    R.delete(e.userId), L.set(e.userId, K(e.mutualFriends)), w.set(e.userId, e.mutualFriends.length);
}
function z(e) {
    let { userProfile: t, fetchStartedAt: n } = e,
        r = t.guild_member_profile?.guild_id ?? N;
    if ((O.get(t.user.id)?.delete(r), R.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = _.A.getGuild(n);
            null != i && (e[n] = { guild: i, nick: r });
        }),
            M.set(
                t.user.id,
                h.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        w.set(t.user.id, e), 0 === e && L.set(t.user.id, P);
    }
    null != t.mutual_friends && (L.set(t.user.id, K(t.mutual_friends)), w.set(t.user.id, t.mutual_friends.length));
    let i = null != t.premium_since ? new Date(t.premium_since) : null,
        s = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        l = t.application,
        { profileEffect: u, profileFrame: d } = (0, I.A)(t.user_profile),
        c =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, m.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != i) {
                          let n = y.intl.formatToPlainString(y.t["8zbGNR"], { date: i });
                          return (
                              null != t && (n = y.intl.formatToPlainString(y.t.Hu4jfi, { date: i })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith(T.Ky) && null != s
                          ? { ...e, description: y.intl.formatToPlainString(y.t.IWkAq7, { date: s }) }
                          : e;
                  })
                : [];
    null != F && F.userId === t.user.id && (Date.now() > F.expiresAtMs ? (F = null) : q(c, F));
    let f = Date.now();
    if (
        (v.set(t.user.id, {
            userId: t.user.id,
            banner: t.user_profile?.banner,
            accentColor: t.user_profile?.accent_color,
            themeColors: t.user_profile?.theme_colors,
            popoutAnimationParticleType: t.user_profile?.popout_animation_particle_type,
            bio: t.user_profile?.bio ?? "",
            profileEffect: u,
            profileFrame: d,
            pronouns: t.user_profile?.pronouns ?? "",
            connectedAccounts: t.connected_accounts.filter((e) => o.A.isSupported(e.type)) ?? [],
            applicationRoleConnections: t.application_role_connections ?? [],
            premiumSince: i,
            premiumType: t.premium_type,
            premiumGuildSince: s,
            fetchStartedAt: n,
            fetchEndedAt: f,
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
            badges: c,
            widgets: t.widgets?.map(G).filter(p.Vq),
            wishlistSettings: t.wishlist_settings,
            collectibles: t.user_profile?.collectibles?.map((e) => {
                let { sku_id: t, type: n, expires_at: r } = e;
                return { expiresAt: null != r ? new Date(r) : void 0, skuId: t, type: n };
            }),
            private: t.private,
        }),
        u?.expiresAt != null)
    ) {
        let e = new a.Ep();
        b.set(t.user.id, e), B(t.user.id);
    }
    if (null != t.guild_member_profile) {
        let { profileEffect: e, profileFrame: r } = (0, I.A)(t.guild_member_profile),
            i = {
                userId: t.user.id,
                guildId: t.guild_member_profile.guild_id,
                banner: t.guild_member_profile.banner,
                accentColor: t.guild_member_profile.accent_color,
                themeColors: t.guild_member_profile?.theme_colors,
                popoutAnimationParticleType: t.guild_member_profile?.popout_animation_particle_type,
                profileEffect: e,
                profileFrame: r,
                bio: t.guild_member_profile.bio,
                pronouns: t.guild_member_profile.pronouns,
                badges: t.guild_badges,
                fetchStartedAt: n,
                fetchEndedAt: f,
            },
            s = C.get(t.user.id);
        if (null != s) s.set(t.guild_member_profile.guild_id, i);
        else {
            let e = new Map();
            e.set(t.guild_member_profile.guild_id, i), C.set(t.user.id, e);
        }
        if (e?.expiresAt != null) {
            let e = new a.Ep(),
                n = D.get(t.user.id);
            if (null != n) n.set(t.guild_member_profile.guild_id, e);
            else {
                let n = new Map();
                n.set(t.guild_member_profile.guild_id, e), D.set(t.user.id, n);
            }
            H(t.user.id, t.guild_member_profile.guild_id);
        }
    }
}
function q(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = t?.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}
function X(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = n ?? N,
        s = O.get(t);
    if (null != s) s.add(i);
    else {
        let e = new Set();
        e.add(i), O.set(t, e);
    }
    r && R.add(t);
}
function Q(e) {
    let { userId: t, guildId: n, apiError: r, fetchStartedAt: i } = e;
    O.get(t)?.delete(n ?? N), R.delete(t);
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
    if (((s.fetchStartedAt = i), (s.fetchEndedAt = a), (s.fetchError = r), v.set(t, s), null != n)) {
        let e = C.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = i), (e.fetchEndedAt = a), (e.fetchError = r));
    }
    r?.status === 404 && (w.set(t, 0), L.set(t, P), M.set(t, U));
}
function J(e) {
    V = !0;
}
function Z(e) {
    (V = !1),
        null != e.guild_id
            ? (function (e) {
                  let {
                          userId: t,
                          guild_id: n,
                          accent_color: r,
                          banner: i,
                          bio: s,
                          pronouns: o,
                          popout_animation_particle_type: l,
                          theme_colors: u,
                          collectibles: d,
                      } = e,
                      c = C.get(t);
                  if (null == n || null == c) return;
                  let _ = c.get(n);
                  if (null == _) return;
                  let { profileEffect: f, profileFrame: E } = (0, I.A)({ collectibles: d });
                  if (
                      (c.set(n, {
                          ..._,
                          accentColor: r,
                          banner: i,
                          bio: s,
                          pronouns: o,
                          popoutAnimationParticleType: l,
                          themeColors: u,
                          profileEffect: f,
                          profileFrame: E,
                      }),
                      f?.expiresAt != null)
                  ) {
                      let e = new a.Ep(),
                          r = D.get(t);
                      if (null != r) r.set(n, e);
                      else {
                          let r = new Map();
                          r.set(n, e), D.set(t, r);
                      }
                      H(t, n);
                  }
              })(e)
            : (function (e) {
                  let {
                          userId: t,
                          accent_color: n,
                          banner: r,
                          bio: i,
                          pronouns: s,
                          popout_animation_particle_type: o,
                          theme_colors: l,
                          collectibles: u,
                      } = e,
                      d = v.get(t);
                  if (null == d) return;
                  let { profileEffect: c, profileFrame: _ } = (0, I.A)({ collectibles: u });
                  if (
                      (v.set(t, {
                          ...d,
                          accentColor: n,
                          banner: r,
                          bio: i,
                          pronouns: s,
                          popoutAnimationParticleType: o,
                          themeColors: l,
                          profileEffect: c,
                          profileFrame: _,
                      }),
                      c?.expiresAt != null)
                  ) {
                      let e = new a.Ep();
                      b.set(t, e), B(t);
                  }
              })(e);
}
function ee(e) {
    V = !1;
}
function et(e) {
    let { userId: t, widgets: n } = e,
        r = v.get(t);
    if (null == r) return !1;
    v.set(t, { ...r, widgets: n.map(G).filter(p.Vq) });
}
function en(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    F = { userId: r, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let i = v.get(r);
    if (null != i) {
        let e = i.badges ?? [];
        q(e, F), v.set(r, { ...i, badges: e });
    }
}
function er(e) {
    let t = e.user.id;
    return !((O.get(t)?.size ?? 0) > 0) && el(t);
}
function ei(e) {
    return [...v.keys()].reduce((e, t) => el(t) || e, !1);
}
function es(e) {
    return el(e.user.id);
}
function ea(e) {
    return el(e.relationship.id);
}
function eo() {
    O.clear(), R.clear(), v.clear(), C.clear();
}
function el(e) {
    if (null == e) return !1;
    let t = v.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
    let n = C.get(e);
    if (null != n) for (let e of n.values()) (e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0);
}
function eu(e) {
    for (let t of ((k = e.applicationConfigs.map((e) => new l.V(e))), x.clear(), k)) x.set(t.applicationId, t);
}
class ed extends f.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: X,
            USER_PROFILE_FETCH_FAILURE: Q,
            USER_PROFILE_FETCH_SUCCESS: z,
            USER_PROFILE_UPDATE_START: J,
            USER_PROFILE_UPDATE_SUCCESS: Z,
            USER_PROFILE_UPDATE_FAILURE: ee,
            WIDGET_PENDING_SAVE_SUCCESS: et,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: en,
            MUTUAL_FRIENDS_FETCH_START: W,
            MUTUAL_FRIENDS_FETCH_SUCCESS: $,
            MUTUAL_FRIENDS_FETCH_FAILURE: j,
            USER_UPDATE: er,
            GUILD_MEMBER_UPDATE: er,
            GUILD_JOIN: ei,
            GUILD_DELETE: ei,
            INVITE_ACCEPT_SUCCESS: ei,
            GUILD_MEMBER_ADD: es,
            GUILD_MEMBER_REMOVE: es,
            RELATIONSHIP_ADD: ea,
            RELATIONSHIP_REMOVE: ea,
            RELATIONSHIP_UPDATE: ea,
            USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: eu,
            LOGOUT: Y,
        });
    }
    initialize() {
        this.waitFor(h.Ay), this.syncWith([u.default], eo);
    }
    isFetchingProfile(e, t) {
        let n = O.get(e);
        return null != n && n.has(t ?? N);
    }
    isFetchingFriends(e) {
        return R.has(e);
    }
    get isSubmitting() {
        return V;
    }
    getUserProfile(e) {
        return v.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (C.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return L.get(e);
    }
    getMutualFriendsCount(e) {
        return w.get(e);
    }
    getMutualGuilds(e) {
        return M.get(e);
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
        let e = this.readSnapshot(ed.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? v.set(t, n) : v.delete(t));
            });
    };
    takeSnapshot() {
        let e = c.default.getId(),
            t = v.get(e);
        return null != t
            ? { version: ed.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: ed.LATEST_SNAPSHOT_VERSION, data: [] };
    }
    get applicationWidgetConfigs() {
        return k;
    }
    getApplicationWidgetConfig(e) {
        return x.get(e);
    }
}
let ec = new ed(),
    e_ = ec;
