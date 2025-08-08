n.d(t, { Z: () => ep }), n(953529), n(388685), n(997841), n(539854);
var r = n(512722),
    i = n.n(r),
    o = n(392711),
    a = n.n(o),
    s = n(296009),
    l = n(846519),
    c = n(726542),
    u = n(706454),
    d = n(598077),
    f = n(314897),
    _ = n(430824),
    p = n(750041),
    h = n(158776),
    m = n(771845),
    g = n(291175),
    E = n(215023),
    b = n(388032);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = Symbol("NO GUILD ID"),
    S = new Map(),
    A = new Set(),
    N = "premium",
    C = "guild_booster_lvl",
    R = 2147483647,
    P = new Map(),
    w = new Map(),
    D = new Map(),
    L = new Map(),
    x = new Map(),
    M = new Map(),
    k = new Map(),
    j = [],
    U = [];
function G(e) {
    let t = e.data.type,
        n = e.data.games.map((e) => I(O({}, e), { applicationId: e.game_id }));
    return t === s.l.FAVORITE_GAMES
        ? (i()(n.length > 0, "Favorite games widget has at least one game"),
          {
              id: e.id,
              type: s.l.FAVORITE_GAMES,
              game: n[0],
          })
        : {
              id: e.id,
              type: t,
              games: n,
          };
}
let B = !1,
    Z = null;
function F(e) {
    let t = P.get(e);
    if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
    let n = 1000 * t.profileEffectExpiresAt + E.Cm - Date.now();
    if (n <= 0) (t.profileEffectId = void 0), (t.profileEffectExpiresAt = void 0), D.delete(e), e_.emitChange();
    else {
        let t = D.get(e);
        if (null == t) return;
        t.start(Math.min(R, n), () => F(e));
    }
}
function V(e, t) {
    let n = w.get(e);
    if (null == n) return;
    let r = n.get(t);
    if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
    let i = L.get(e),
        o = 1000 * r.profileEffectExpiresAt + E.Cm - Date.now();
    if (o <= 0)
        n.set(
            t,
            I(O({}, r), {
                profileEffectId: void 0,
                profileEffectExpiresAt: void 0,
            }),
        ),
            null != i && i.delete(t),
            e_.emitChange();
    else {
        if (null == i) return;
        let n = i.get(t);
        if (null == n) return;
        n.start(Math.min(R, o), () => V(e, t));
    }
}
function H() {
    S.clear(), A.clear(), P.clear(), w.clear(), x.clear(), M.clear(), k.clear(), (B = !1);
}
function Y(e) {
    let { userId: t } = e;
    A.add(t);
}
function W(e) {
    let { userId: t } = e;
    A.delete(t);
}
function K(e) {
    return a()(e)
        .map((e) => ({
            key: e.id,
            user: new d.Z(e),
            status: h.Z.getStatus(e.id),
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function z(e) {
    A.delete(e.userId), x.set(e.userId, K(e.mutualFriends)), M.set(e.userId, e.mutualFriends.length);
}
function q(e) {
    var t, n, r, i, o, a, s, u, d, f, p, h, E, y, v, R, U, B, H, Y, W, z, q, Q, J, $, ee, et;
    let { userProfile: en, fetchStartedAt: er } = e,
        ei = null != (R = null == (t = en.guild_member_profile) ? void 0 : t.guild_id) ? R : T;
    if ((null == (n = S.get(en.user.id)) || n.delete(ei), A.delete(en.user.id), null != en.mutual_guilds)) {
        let e = {};
        en.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = _.Z.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r,
                });
        }),
            k.set(
                en.user.id,
                m.ZP.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick,
                    })),
            );
    }
    if (null != en.mutual_friends_count) {
        let e = en.mutual_friends_count;
        M.set(en.user.id, e), 0 === e && x.set(en.user.id, j);
    }
    null != en.mutual_friends && (x.set(en.user.id, K(en.mutual_friends)), M.set(en.user.id, en.mutual_friends.length));
    let eo = null != en.premium_since ? new Date(en.premium_since) : null,
        ea = null != en.premium_guild_since ? new Date(en.premium_guild_since) : null,
        es = en.application,
        el =
            null != en.badges
                ? en.badges.map((e) => {
                      let t = (0, g.fv)(e.id);
                      if ((e.id === N || null != t) && null != eo) {
                          let n = b.intl.formatToPlainString(b.t["8zbGNT"], { date: eo });
                          return (
                              null != t && (n = b.intl.formatToPlainString(b.t.Hu4jfn, { date: eo })),
                              I(O({}, e), { description: n })
                          );
                      }
                      return e.id.startsWith(C) && null != ea
                          ? I(O({}, e), { description: b.intl.formatToPlainString(b.t.IWkAq6, { date: ea }) })
                          : e;
                  })
                : [];
    if (
        (null != Z && Z.userId === en.user.id && (Date.now() > Z.expiresAtMs ? (Z = null) : X(el, Z)),
        P.set(en.user.id, {
            userId: en.user.id,
            banner: null == (r = en.user_profile) ? void 0 : r.banner,
            accentColor: null == (i = en.user_profile) ? void 0 : i.accent_color,
            themeColors: null == (o = en.user_profile) ? void 0 : o.theme_colors,
            popoutAnimationParticleType: null == (a = en.user_profile) ? void 0 : a.popout_animation_particle_type,
            bio: null != (U = null == (s = en.user_profile) ? void 0 : s.bio) ? U : "",
            profileEffectId: null == (d = en.user_profile) || null == (u = d.profile_effect) ? void 0 : u.id,
            profileEffectExpiresAt:
                null == (p = en.user_profile) || null == (f = p.profile_effect) ? void 0 : f.expires_at,
            pronouns: null != (B = null == (h = en.user_profile) ? void 0 : h.pronouns) ? B : "",
            connectedAccounts: null != (H = en.connected_accounts.filter((e) => c.Z.isSupported(e.type))) ? H : [],
            applicationRoleConnections: null != (Y = en.application_role_connections) ? Y : [],
            premiumSince: eo,
            premiumType: en.premium_type,
            premiumGuildSince: ea,
            fetchStartedAt: er,
            fetchEndedAt: Date.now(),
            legacyUsername: en.legacy_username,
            application:
                null != es
                    ? {
                          id: es.id,
                          primarySkuId: es.primary_sku_id,
                          customInstallUrl: es.custom_install_url,
                          installParams: es.install_params,
                          integrationTypesConfig: es.integration_types_config,
                          flags: es.flags,
                          popularApplicationCommandIds: es.popular_application_command_ids,
                          storefront_available: es.storefront_available,
                          name: es.name,
                      }
                    : null,
            badges: el,
            widgets: null == (E = en.widgets) ? void 0 : E.map(G),
        }),
        (null == (v = en.user_profile) || null == (y = v.profile_effect) ? void 0 : y.expires_at) != null)
    ) {
        let e = new l.V7();
        D.set(en.user.id, e), F(en.user.id);
    }
    if (null != en.guild_member_profile) {
        let e = {
                userId: en.user.id,
                guildId: en.guild_member_profile.guild_id,
                banner: en.guild_member_profile.banner,
                accentColor: en.guild_member_profile.accent_color,
                themeColors: null == (W = en.guild_member_profile) ? void 0 : W.theme_colors,
                popoutAnimationParticleType:
                    null == (z = en.guild_member_profile) ? void 0 : z.popout_animation_particle_type,
                profileEffectId:
                    null == (Q = en.guild_member_profile) || null == (q = Q.profile_effect) ? void 0 : q.id,
                profileEffectExpiresAt:
                    null == ($ = en.guild_member_profile) || null == (J = $.profile_effect) ? void 0 : J.expires_at,
                bio: en.guild_member_profile.bio,
                pronouns: en.guild_member_profile.pronouns,
                badges: en.guild_badges,
            },
            t = w.get(en.user.id);
        if (null != t) t.set(en.guild_member_profile.guild_id, e);
        else {
            let t = new Map();
            t.set(en.guild_member_profile.guild_id, e), w.set(en.user.id, t);
        }
        if (
            (null == (et = en.guild_member_profile) || null == (ee = et.profile_effect) ? void 0 : ee.expires_at) !=
            null
        ) {
            let e = new l.V7(),
                t = L.get(en.user.id);
            if (null != t) t.set(en.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(en.guild_member_profile.guild_id, e), L.set(en.user.id, t);
            }
            V(en.user.id, en.guild_member_profile.guild_id);
        }
    }
}
function X(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = null == t ? void 0 : t.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}
function Q(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = null != n ? n : T,
        o = S.get(t);
    if (null != o) o.add(i);
    else {
        let e = new Set();
        e.add(i), S.set(t, e);
    }
    r && A.add(t);
}
function J(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: o, fetchStartedAt: a } = e;
    null == (t = S.get(r)) || t.delete(null != i ? i : T), A.delete(r);
    let s =
        null != (n = P.get(r))
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
    (s.fetchStartedAt = a),
        (s.fetchEndedAt = Date.now()),
        (s.fetchError = o),
        P.set(r, s),
        (null == o ? void 0 : o.status) === 404 && (M.set(r, 0), x.set(r, j), k.set(r, U));
}
function $(e) {
    let {
            userId: t,
            accent_color: n,
            banner: r,
            bio: i,
            pronouns: o,
            popout_animation_particle_type: a,
            theme_colors: s,
            profileEffectId: c,
            profileEffectExpiresAt: u,
        } = e,
        d = P.get(t);
    if (null == d) return !1;
    if (
        (P.set(
            t,
            I(O({}, d), {
                accentColor: n,
                banner: r,
                bio: i,
                pronouns: o,
                popoutAnimationParticleType: a,
                themeColors: s,
                profileEffectId: c,
                profileEffectExpiresAt: u,
            }),
        ),
        null != u)
    ) {
        let e = new l.V7();
        D.set(t, e), F(t);
    }
}
function ee(e) {
    let {
            userId: t,
            guild_id: n,
            accent_color: r,
            banner: i,
            bio: o,
            pronouns: a,
            popout_animation_particle_type: s,
            theme_colors: c,
            profileEffectId: u,
            profileEffectExpiresAt: d,
        } = e,
        f = w.get(t);
    if (null == n || null == f) return !1;
    let _ = f.get(n);
    if (null == _) return !1;
    if (
        (f.set(
            n,
            I(O({}, _), {
                accentColor: r,
                banner: i,
                bio: o,
                pronouns: a,
                popoutAnimationParticleType: s,
                themeColors: c,
                profileEffectId: u,
                profileEffectExpiresAt: d,
            }),
        ),
        null != d)
    ) {
        let e = new l.V7(),
            r = L.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), L.set(t, r);
        }
        V(t, n);
    }
}
function et(e) {
    B = !0;
}
function en(e) {
    (B = !1), null != e.guild_id ? ee(e) : $(e);
}
function er(e) {
    B = !1;
}
function ei(e) {
    let { userId: t, widgets: n } = e,
        r = P.get(t);
    if (null == r) return !1;
    P.set(t, I(O({}, r), { widgets: n.map(G) }));
}
function eo(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    Z = {
        userId: r,
        badges: t,
        expiresAtMs: Date.now() + 1000 * n,
    };
    let i = P.get(r);
    if (null != i) {
        var o;
        let e = null != (o = i.badges) ? o : [];
        X(e, Z), P.set(r, I(O({}, i), { badges: e }));
    }
}
function ea(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (n = null == (t = S.get(r)) ? void 0 : t.size) ? n : 0) > 0) && ed(r);
}
function es(e) {
    return [...P.keys()].reduce((e, t) => ed(t) || e, !1);
}
function el(e) {
    return ed(e.user.id);
}
function ec(e) {
    return ed(e.relationship.id);
}
function eu() {
    S.clear(), A.clear(), P.clear(), w.clear();
}
function ed(e) {
    if (null == e) return !1;
    let t = P.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
class ef extends p.Z {
    initialize() {
        this.waitFor(m.ZP), this.syncWith([u.default], eu);
    }
    isFetchingProfile(e, t) {
        let n = S.get(e);
        return null != n && n.has(null != t ? t : T);
    }
    isFetchingFriends(e) {
        return A.has(e);
    }
    get isSubmitting() {
        return B;
    }
    getUserProfile(e) {
        return P.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null != (r = null == (n = w.get(e)) ? void 0 : n.get(t)) ? r : null;
    }
    getMutualFriends(e) {
        return x.get(e);
    }
    getMutualFriendsCount(e) {
        return M.get(e);
    }
    getMutualGuilds(e) {
        return k.get(e);
    }
    getWidgets(e) {
        var t;
        return null == (t = P.get(e)) ? void 0 : t.widgets;
    }
    takeSnapshot() {
        let e = f.default.getId(),
            t = P.get(e);
        return null != t
            ? {
                  version: ef.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t,
                      },
                  ],
              }
            : {
                  version: ef.LATEST_SNAPSHOT_VERSION,
                  data: [],
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Q,
            USER_PROFILE_FETCH_FAILURE: J,
            USER_PROFILE_FETCH_SUCCESS: q,
            USER_PROFILE_UPDATE_START: et,
            USER_PROFILE_UPDATE_SUCCESS: en,
            USER_PROFILE_UPDATE_FAILURE: er,
            WIDGET_PENDING_SAVE_SUCCESS: ei,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: eo,
            MUTUAL_FRIENDS_FETCH_START: Y,
            MUTUAL_FRIENDS_FETCH_SUCCESS: z,
            MUTUAL_FRIENDS_FETCH_FAILURE: W,
            USER_UPDATE: ea,
            GUILD_MEMBER_UPDATE: ea,
            GUILD_JOIN: es,
            GUILD_DELETE: es,
            INVITE_ACCEPT_SUCCESS: es,
            GUILD_MEMBER_ADD: el,
            GUILD_MEMBER_REMOVE: el,
            RELATIONSHIP_ADD: ec,
            RELATIONSHIP_REMOVE: ec,
            RELATIONSHIP_UPDATE: ec,
            LOGOUT: H,
        }),
            y(this, "loadCache", () => {
                let e = this.readSnapshot(ef.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? P.set(t, n) : P.delete(t));
                    });
            });
    }
}
y(ef, "displayName", "UserProfileStore"), y(ef, "LATEST_SNAPSHOT_VERSION", 1);
let e_ = new ef(),
    ep = e_;
