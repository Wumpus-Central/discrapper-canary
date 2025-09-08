n.d(t, { Z: () => eh }), n(953529), n(388685), n(997841), n(539854);
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
    g = n(931847),
    E = n(836197),
    b = n(215023),
    y = n(388032);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
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
let S = Symbol("NO GUILD ID"),
    A = new Map(),
    C = new Set(),
    N = "premium",
    R = "guild_booster_lvl",
    P = 2147483647,
    w = new Map(),
    D = new Map(),
    x = new Map(),
    L = new Map(),
    j = new Map(),
    M = new Map(),
    k = new Map(),
    U = [],
    G = [];
function B(e) {
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
            return new E.zy({
                id: e.id,
                type: t,
                games: n,
            });
        case a.l.APPLICATION:
            return new g.q({
                id: e.id,
                type: t,
                applicationId: e.data.application_id,
            });
    }
}
let Z = !1,
    F = null;
function V(e) {
    let t = w.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if ((null == n ? void 0 : n.expiresAt) == null) return;
    let r = 1000 * n.expiresAt + b.Cm - Date.now();
    if (r <= 0) {
        (t.profileEffect = void 0), x.delete(e), ep.emitChange();
        return;
    }
    let i = x.get(e);
    null != i && i.start(Math.min(P, r), () => V(e));
}
function H(e, t) {
    var n, r;
    let i = D.get(e);
    if (null == i) return;
    let a = i.get(t);
    if (null == a) return;
    let o = a.profileEffect;
    if ((null == o ? void 0 : o.expiresAt) == null) return;
    let s = 1000 * o.expiresAt + b.Cm - Date.now();
    if (s <= 0) {
        i.set(t, T(v({}, a), { profileEffect: void 0 })), null == (r = L.get(e)) || r.delete(t), ep.emitChange();
        return;
    }
    let l = null == (n = L.get(e)) ? void 0 : n.get(t);
    null != l && l.start(Math.min(P, s), () => H(e, t));
}
function Y() {
    A.clear(), C.clear(), w.clear(), D.clear(), j.clear(), M.clear(), k.clear(), (Z = !1);
}
function W(e) {
    let { userId: t } = e;
    C.add(t);
}
function K(e) {
    let { userId: t } = e;
    C.delete(t);
}
function z(e) {
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
function q(e) {
    C.delete(e.userId), j.set(e.userId, z(e.mutualFriends)), M.set(e.userId, e.mutualFriends.length);
}
function X(e) {
    var t, n, r, i, a, l, c, u, f, _, g, E, b, O, I, P, G, Z, Y, W, K;
    let { userProfile: q, fetchStartedAt: X } = e,
        J = null != (b = null == (t = q.guild_member_profile) ? void 0 : t.guild_id) ? b : S;
    if ((null == (n = A.get(q.user.id)) || n.delete(J), C.delete(q.user.id), null != q.mutual_guilds)) {
        let e = {};
        q.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = d.Z.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r,
                });
        }),
            k.set(
                q.user.id,
                p.ZP.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick,
                    })),
            );
    }
    if (null != q.mutual_friends_count) {
        let e = q.mutual_friends_count;
        M.set(q.user.id, e), 0 === e && j.set(q.user.id, U);
    }
    null != q.mutual_friends && (j.set(q.user.id, z(q.mutual_friends)), M.set(q.user.id, q.mutual_friends.length));
    let $ = null != q.premium_since ? new Date(q.premium_since) : null,
        ee = null != q.premium_guild_since ? new Date(q.premium_guild_since) : null,
        et = q.application,
        en = null == (r = q.user_profile) ? void 0 : r.profile_effect,
        er =
            null != q.badges
                ? q.badges.map((e) => {
                      let t = (0, m.fv)(e.id);
                      if ((e.id === N || null != t) && null != $) {
                          let n = y.intl.formatToPlainString(y.t["8zbGNT"], { date: $ });
                          return (
                              null != t && (n = y.intl.formatToPlainString(y.t.Hu4jfn, { date: $ })),
                              T(v({}, e), { description: n })
                          );
                      }
                      return e.id.startsWith(R) && null != ee
                          ? T(v({}, e), { description: y.intl.formatToPlainString(y.t.IWkAq6, { date: ee }) })
                          : e;
                  })
                : [];
    if (
        (null != F && F.userId === q.user.id && (Date.now() > F.expiresAtMs ? (F = null) : Q(er, F)),
        w.set(q.user.id, {
            userId: q.user.id,
            banner: null == (i = q.user_profile) ? void 0 : i.banner,
            accentColor: null == (a = q.user_profile) ? void 0 : a.accent_color,
            themeColors: null == (l = q.user_profile) ? void 0 : l.theme_colors,
            popoutAnimationParticleType: null == (c = q.user_profile) ? void 0 : c.popout_animation_particle_type,
            bio: null != (O = null == (u = q.user_profile) ? void 0 : u.bio) ? O : "",
            profileEffect:
                null != en
                    ? {
                          id: en.id,
                          skuId: en.sku_id,
                          expiresAt: en.expires_at,
                      }
                    : void 0,
            pronouns: null != (I = null == (f = q.user_profile) ? void 0 : f.pronouns) ? I : "",
            connectedAccounts: null != (P = q.connected_accounts.filter((e) => s.Z.isSupported(e.type))) ? P : [],
            applicationRoleConnections: null != (G = q.application_role_connections) ? G : [],
            premiumSince: $,
            premiumType: q.premium_type,
            premiumGuildSince: ee,
            fetchStartedAt: X,
            fetchEndedAt: Date.now(),
            legacyUsername: q.legacy_username,
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
            widgets: null == (_ = q.widgets) ? void 0 : _.map(B).filter(h.lm),
        }),
        (null == (E = q.user_profile) || null == (g = E.profile_effect) ? void 0 : g.expires_at) != null)
    ) {
        let e = new o.V7();
        x.set(q.user.id, e), V(q.user.id);
    }
    if (null != q.guild_member_profile) {
        let e = q.guild_member_profile.profile_effect,
            t = {
                userId: q.user.id,
                guildId: q.guild_member_profile.guild_id,
                banner: q.guild_member_profile.banner,
                accentColor: q.guild_member_profile.accent_color,
                themeColors: null == (Z = q.guild_member_profile) ? void 0 : Z.theme_colors,
                popoutAnimationParticleType:
                    null == (Y = q.guild_member_profile) ? void 0 : Y.popout_animation_particle_type,
                profileEffect:
                    null != e
                        ? {
                              id: e.id,
                              skuId: e.sku_id,
                              expiresAt: e.expires_at,
                          }
                        : void 0,
                bio: q.guild_member_profile.bio,
                pronouns: q.guild_member_profile.pronouns,
                badges: q.guild_badges,
            },
            n = D.get(q.user.id);
        if (null != n) n.set(q.guild_member_profile.guild_id, t);
        else {
            let e = new Map();
            e.set(q.guild_member_profile.guild_id, t), D.set(q.user.id, e);
        }
        if ((null == (K = q.guild_member_profile) || null == (W = K.profile_effect) ? void 0 : W.expires_at) != null) {
            let e = new o.V7(),
                t = L.get(q.user.id);
            if (null != t) t.set(q.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(q.guild_member_profile.guild_id, e), L.set(q.user.id, t);
            }
            H(q.user.id, q.guild_member_profile.guild_id);
        }
    }
}
function Q(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = null == t ? void 0 : t.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}
function J(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = null != n ? n : S,
        a = A.get(t);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), A.set(t, e);
    }
    r && C.add(t);
}
function $(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a, fetchStartedAt: o } = e;
    null == (t = A.get(r)) || t.delete(null != i ? i : S), C.delete(r);
    let s =
        null != (n = w.get(r))
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
        w.set(r, s),
        (null == a ? void 0 : a.status) === 404 && (M.set(r, 0), j.set(r, U), k.set(r, G));
}
function ee(e) {
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
        u = w.get(t);
    if (null == u) return !1;
    if (
        (w.set(
            t,
            T(v({}, u), {
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
        x.set(t, e), V(t);
    }
}
function et(e) {
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
        d = D.get(t);
    if (null == n || null == d) return !1;
    let f = d.get(n);
    if (null == f) return !1;
    if (
        (d.set(
            n,
            T(v({}, f), {
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
            r = L.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), L.set(t, r);
        }
        H(t, n);
    }
}
function en(e) {
    Z = !0;
}
function er(e) {
    (Z = !1), null != e.guild_id ? et(e) : ee(e);
}
function ei(e) {
    Z = !1;
}
function ea(e) {
    let { userId: t, widgets: n } = e,
        r = w.get(t);
    if (null == r) return !1;
    w.set(t, T(v({}, r), { widgets: n.map(B).filter(h.lm) }));
}
function eo(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    F = {
        userId: r,
        badges: t,
        expiresAtMs: Date.now() + 1000 * n,
    };
    let i = w.get(r);
    if (null != i) {
        var a;
        let e = null != (a = i.badges) ? a : [];
        Q(e, F), w.set(r, T(v({}, i), { badges: e }));
    }
}
function es(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (n = null == (t = A.get(r)) ? void 0 : t.size) ? n : 0) > 0) && ef(r);
}
function el(e) {
    return [...w.keys()].reduce((e, t) => ef(t) || e, !1);
}
function ec(e) {
    return ef(e.user.id);
}
function eu(e) {
    return ef(e.relationship.id);
}
function ed() {
    A.clear(), C.clear(), w.clear(), D.clear();
}
function ef(e) {
    if (null == e) return !1;
    let t = w.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
class e_ extends f.Z {
    initialize() {
        this.waitFor(p.ZP), this.syncWith([l.default], ed);
    }
    isFetchingProfile(e, t) {
        let n = A.get(e);
        return null != n && n.has(null != t ? t : S);
    }
    isFetchingFriends(e) {
        return C.has(e);
    }
    get isSubmitting() {
        return Z;
    }
    getUserProfile(e) {
        return w.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null != (r = null == (n = D.get(e)) ? void 0 : n.get(t)) ? r : null;
    }
    getMutualFriends(e) {
        return j.get(e);
    }
    getMutualFriendsCount(e) {
        return M.get(e);
    }
    getMutualGuilds(e) {
        return k.get(e);
    }
    getWidgets(e) {
        var t;
        return null == (t = w.get(e)) ? void 0 : t.widgets;
    }
    takeSnapshot() {
        let e = u.default.getId(),
            t = w.get(e);
        return null != t
            ? {
                  version: e_.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t,
                      },
                  ],
              }
            : {
                  version: e_.LATEST_SNAPSHOT_VERSION,
                  data: [],
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: J,
            USER_PROFILE_FETCH_FAILURE: $,
            USER_PROFILE_FETCH_SUCCESS: X,
            USER_PROFILE_UPDATE_START: en,
            USER_PROFILE_UPDATE_SUCCESS: er,
            USER_PROFILE_UPDATE_FAILURE: ei,
            WIDGET_PENDING_SAVE_SUCCESS: ea,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: eo,
            MUTUAL_FRIENDS_FETCH_START: W,
            MUTUAL_FRIENDS_FETCH_SUCCESS: q,
            MUTUAL_FRIENDS_FETCH_FAILURE: K,
            USER_UPDATE: es,
            GUILD_MEMBER_UPDATE: es,
            GUILD_JOIN: el,
            GUILD_DELETE: el,
            INVITE_ACCEPT_SUCCESS: el,
            GUILD_MEMBER_ADD: ec,
            GUILD_MEMBER_REMOVE: ec,
            RELATIONSHIP_ADD: eu,
            RELATIONSHIP_REMOVE: eu,
            RELATIONSHIP_UPDATE: eu,
            LOGOUT: Y,
        }),
            O(this, "loadCache", () => {
                let e = this.readSnapshot(e_.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? w.set(t, n) : w.delete(t));
                    });
            });
    }
}
O(e_, "displayName", "UserProfileStore"), O(e_, "LATEST_SNAPSHOT_VERSION", 1);
let ep = new e_(),
    eh = ep;
