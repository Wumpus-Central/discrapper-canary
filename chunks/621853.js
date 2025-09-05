n.d(t, { Z: () => e_ }), n(953529), n(388685), n(997841), n(539854);
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
    g = n(215023),
    E = n(388032);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = Symbol("NO GUILD ID"),
    T = new Map(),
    S = new Set(),
    A = "premium",
    C = "guild_booster_lvl",
    N = 2147483647,
    R = new Map(),
    P = new Map(),
    w = new Map(),
    D = new Map(),
    x = new Map(),
    L = new Map(),
    j = new Map(),
    k = [],
    M = [];
function U(e) {
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
            }));
            return {
                id: e.id,
                type: t,
                games: n,
            };
        case a.l.APPLICATION:
            return {
                id: e.id,
                type: t,
                applicationId: e.data.application_id,
            };
    }
}
let G = !1,
    B = null;
function Z(e) {
    let t = R.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if ((null == n ? void 0 : n.expiresAt) == null) return;
    let r = 1000 * n.expiresAt + g.Cm - Date.now();
    if (r <= 0) {
        (t.profileEffect = void 0), w.delete(e), ef.emitChange();
        return;
    }
    let i = w.get(e);
    null != i && i.start(Math.min(N, r), () => Z(e));
}
function F(e, t) {
    var n, r;
    let i = P.get(e);
    if (null == i) return;
    let a = i.get(t);
    if (null == a) return;
    let o = a.profileEffect;
    if ((null == o ? void 0 : o.expiresAt) == null) return;
    let s = 1000 * o.expiresAt + g.Cm - Date.now();
    if (s <= 0) {
        i.set(t, v(y({}, a), { profileEffect: void 0 })), null == (r = D.get(e)) || r.delete(t), ef.emitChange();
        return;
    }
    let l = null == (n = D.get(e)) ? void 0 : n.get(t);
    null != l && l.start(Math.min(N, s), () => F(e, t));
}
function V() {
    T.clear(), S.clear(), R.clear(), P.clear(), x.clear(), L.clear(), j.clear(), (G = !1);
}
function H(e) {
    let { userId: t } = e;
    S.add(t);
}
function Y(e) {
    let { userId: t } = e;
    S.delete(t);
}
function W(e) {
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
function K(e) {
    S.delete(e.userId), x.set(e.userId, W(e.mutualFriends)), L.set(e.userId, e.mutualFriends.length);
}
function z(e) {
    var t, n, r, i, a, l, c, u, f, _, g, b, O, N, M, G, V, H, Y, K, z;
    let { userProfile: X, fetchStartedAt: Q } = e,
        J = null != (O = null == (t = X.guild_member_profile) ? void 0 : t.guild_id) ? O : I;
    if ((null == (n = T.get(X.user.id)) || n.delete(J), S.delete(X.user.id), null != X.mutual_guilds)) {
        let e = {};
        X.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = d.Z.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r,
                });
        }),
            j.set(
                X.user.id,
                p.ZP.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick,
                    })),
            );
    }
    if (null != X.mutual_friends_count) {
        let e = X.mutual_friends_count;
        L.set(X.user.id, e), 0 === e && x.set(X.user.id, k);
    }
    null != X.mutual_friends && (x.set(X.user.id, W(X.mutual_friends)), L.set(X.user.id, X.mutual_friends.length));
    let $ = null != X.premium_since ? new Date(X.premium_since) : null,
        ee = null != X.premium_guild_since ? new Date(X.premium_guild_since) : null,
        et = X.application,
        en = null == (r = X.user_profile) ? void 0 : r.profile_effect,
        er =
            null != X.badges
                ? X.badges.map((e) => {
                      let t = (0, m.fv)(e.id);
                      if ((e.id === A || null != t) && null != $) {
                          let n = E.intl.formatToPlainString(E.t["8zbGNT"], { date: $ });
                          return (
                              null != t && (n = E.intl.formatToPlainString(E.t.Hu4jfn, { date: $ })),
                              v(y({}, e), { description: n })
                          );
                      }
                      return e.id.startsWith(C) && null != ee
                          ? v(y({}, e), { description: E.intl.formatToPlainString(E.t.IWkAq6, { date: ee }) })
                          : e;
                  })
                : [];
    if (
        (null != B && B.userId === X.user.id && (Date.now() > B.expiresAtMs ? (B = null) : q(er, B)),
        R.set(X.user.id, {
            userId: X.user.id,
            banner: null == (i = X.user_profile) ? void 0 : i.banner,
            accentColor: null == (a = X.user_profile) ? void 0 : a.accent_color,
            themeColors: null == (l = X.user_profile) ? void 0 : l.theme_colors,
            popoutAnimationParticleType: null == (c = X.user_profile) ? void 0 : c.popout_animation_particle_type,
            bio: null != (N = null == (u = X.user_profile) ? void 0 : u.bio) ? N : "",
            profileEffect:
                null != en
                    ? {
                          id: en.id,
                          skuId: en.sku_id,
                          expiresAt: en.expires_at,
                      }
                    : void 0,
            pronouns: null != (M = null == (f = X.user_profile) ? void 0 : f.pronouns) ? M : "",
            connectedAccounts: null != (G = X.connected_accounts.filter((e) => s.Z.isSupported(e.type))) ? G : [],
            applicationRoleConnections: null != (V = X.application_role_connections) ? V : [],
            premiumSince: $,
            premiumType: X.premium_type,
            premiumGuildSince: ee,
            fetchStartedAt: Q,
            fetchEndedAt: Date.now(),
            legacyUsername: X.legacy_username,
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
            widgets: null == (_ = X.widgets) ? void 0 : _.map(U).filter(h.lm),
        }),
        (null == (b = X.user_profile) || null == (g = b.profile_effect) ? void 0 : g.expires_at) != null)
    ) {
        let e = new o.V7();
        w.set(X.user.id, e), Z(X.user.id);
    }
    if (null != X.guild_member_profile) {
        let e = X.guild_member_profile.profile_effect,
            t = {
                userId: X.user.id,
                guildId: X.guild_member_profile.guild_id,
                banner: X.guild_member_profile.banner,
                accentColor: X.guild_member_profile.accent_color,
                themeColors: null == (H = X.guild_member_profile) ? void 0 : H.theme_colors,
                popoutAnimationParticleType:
                    null == (Y = X.guild_member_profile) ? void 0 : Y.popout_animation_particle_type,
                profileEffect:
                    null != e
                        ? {
                              id: e.id,
                              skuId: e.sku_id,
                              expiresAt: e.expires_at,
                          }
                        : void 0,
                bio: X.guild_member_profile.bio,
                pronouns: X.guild_member_profile.pronouns,
                badges: X.guild_badges,
            },
            n = P.get(X.user.id);
        if (null != n) n.set(X.guild_member_profile.guild_id, t);
        else {
            let e = new Map();
            e.set(X.guild_member_profile.guild_id, t), P.set(X.user.id, e);
        }
        if ((null == (z = X.guild_member_profile) || null == (K = z.profile_effect) ? void 0 : K.expires_at) != null) {
            let e = new o.V7(),
                t = D.get(X.user.id);
            if (null != t) t.set(X.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(X.guild_member_profile.guild_id, e), D.set(X.user.id, t);
            }
            F(X.user.id, X.guild_member_profile.guild_id);
        }
    }
}
function q(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = null == t ? void 0 : t.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}
function X(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = null != n ? n : I,
        a = T.get(t);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), T.set(t, e);
    }
    r && S.add(t);
}
function Q(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a, fetchStartedAt: o } = e;
    null == (t = T.get(r)) || t.delete(null != i ? i : I), S.delete(r);
    let s =
        null != (n = R.get(r))
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
        R.set(r, s),
        (null == a ? void 0 : a.status) === 404 && (L.set(r, 0), x.set(r, k), j.set(r, M));
}
function J(e) {
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
        u = R.get(t);
    if (null == u) return !1;
    if (
        (R.set(
            t,
            v(y({}, u), {
                accentColor: n,
                banner: r,
                bio: i,
                pronouns: a,
                popoutAnimationParticleType: s,
                themeColors: l,
                profileEffect:
                    null != c
                        ? {
                              id: c.id,
                              skuId: c.sku_id,
                              expiresAt: c.expires_at,
                          }
                        : void 0,
            }),
        ),
        (null == c ? void 0 : c.expires_at) != null)
    ) {
        let e = new o.V7();
        w.set(t, e), Z(t);
    }
}
function $(e) {
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
        d = P.get(t);
    if (null == n || null == d) return !1;
    let f = d.get(n);
    if (null == f) return !1;
    if (
        (d.set(
            n,
            v(y({}, f), {
                accentColor: r,
                banner: i,
                bio: a,
                pronouns: s,
                popoutAnimationParticleType: l,
                themeColors: c,
                profileEffect:
                    null != u
                        ? {
                              id: u.id,
                              skuId: u.sku_id,
                              expiresAt: u.expires_at,
                          }
                        : void 0,
            }),
        ),
        (null == u ? void 0 : u.expires_at) != null)
    ) {
        let e = new o.V7(),
            r = D.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), D.set(t, r);
        }
        F(t, n);
    }
}
function ee(e) {
    G = !0;
}
function et(e) {
    (G = !1), null != e.guild_id ? $(e) : J(e);
}
function en(e) {
    G = !1;
}
function er(e) {
    let { userId: t, widgets: n } = e,
        r = R.get(t);
    if (null == r) return !1;
    R.set(t, v(y({}, r), { widgets: n.map(U).filter(h.lm) }));
}
function ei(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    B = {
        userId: r,
        badges: t,
        expiresAtMs: Date.now() + 1000 * n,
    };
    let i = R.get(r);
    if (null != i) {
        var a;
        let e = null != (a = i.badges) ? a : [];
        q(e, B), R.set(r, v(y({}, i), { badges: e }));
    }
}
function ea(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (n = null == (t = T.get(r)) ? void 0 : t.size) ? n : 0) > 0) && eu(r);
}
function eo(e) {
    return [...R.keys()].reduce((e, t) => eu(t) || e, !1);
}
function es(e) {
    return eu(e.user.id);
}
function el(e) {
    return eu(e.relationship.id);
}
function ec() {
    T.clear(), S.clear(), R.clear(), P.clear();
}
function eu(e) {
    if (null == e) return !1;
    let t = R.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
class ed extends f.Z {
    initialize() {
        this.waitFor(p.ZP), this.syncWith([l.default], ec);
    }
    isFetchingProfile(e, t) {
        let n = T.get(e);
        return null != n && n.has(null != t ? t : I);
    }
    isFetchingFriends(e) {
        return S.has(e);
    }
    get isSubmitting() {
        return G;
    }
    getUserProfile(e) {
        return R.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null != (r = null == (n = P.get(e)) ? void 0 : n.get(t)) ? r : null;
    }
    getMutualFriends(e) {
        return x.get(e);
    }
    getMutualFriendsCount(e) {
        return L.get(e);
    }
    getMutualGuilds(e) {
        return j.get(e);
    }
    getWidgets(e) {
        var t;
        return null == (t = R.get(e)) ? void 0 : t.widgets;
    }
    takeSnapshot() {
        let e = u.default.getId(),
            t = R.get(e);
        return null != t
            ? {
                  version: ed.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t,
                      },
                  ],
              }
            : {
                  version: ed.LATEST_SNAPSHOT_VERSION,
                  data: [],
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: X,
            USER_PROFILE_FETCH_FAILURE: Q,
            USER_PROFILE_FETCH_SUCCESS: z,
            USER_PROFILE_UPDATE_START: ee,
            USER_PROFILE_UPDATE_SUCCESS: et,
            USER_PROFILE_UPDATE_FAILURE: en,
            WIDGET_PENDING_SAVE_SUCCESS: er,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: ei,
            MUTUAL_FRIENDS_FETCH_START: H,
            MUTUAL_FRIENDS_FETCH_SUCCESS: K,
            MUTUAL_FRIENDS_FETCH_FAILURE: Y,
            USER_UPDATE: ea,
            GUILD_MEMBER_UPDATE: ea,
            GUILD_JOIN: eo,
            GUILD_DELETE: eo,
            INVITE_ACCEPT_SUCCESS: eo,
            GUILD_MEMBER_ADD: es,
            GUILD_MEMBER_REMOVE: es,
            RELATIONSHIP_ADD: el,
            RELATIONSHIP_REMOVE: el,
            RELATIONSHIP_UPDATE: el,
            LOGOUT: V,
        }),
            b(this, "loadCache", () => {
                let e = this.readSnapshot(ed.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? R.set(t, n) : R.delete(t));
                    });
            });
    }
}
b(ed, "displayName", "UserProfileStore"), b(ed, "LATEST_SNAPSHOT_VERSION", 1);
let ef = new ed(),
    e_ = ef;
