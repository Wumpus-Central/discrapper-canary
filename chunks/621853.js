n.d(t, { Z: () => ed }), n(953529), n(388685), n(997841), n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(846519),
    o = n(726542),
    s = n(706454),
    l = n(598077),
    c = n(314897),
    u = n(430824),
    d = n(750041),
    f = n(158776),
    _ = n(771845),
    p = n(291175),
    h = n(215023),
    m = n(388032);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = Symbol("NO GUILD ID"),
    v = new Map(),
    I = new Set(),
    T = "premium",
    S = "guild_booster_lvl",
    A = 2147483647,
    C = new Map(),
    N = new Map(),
    R = new Map(),
    P = new Map(),
    w = new Map(),
    D = new Map(),
    x = new Map(),
    L = [],
    j = [];
function M(e) {
    let t = e.data.type,
        n = e.data.games.map((e) => ({
            applicationId: e.game_id,
            comment: e.comment,
            tags: e.tags,
        }));
    return {
        id: e.id,
        type: t,
        games: n,
    };
}
let k = !1,
    U = null;
function G(e) {
    let t = C.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if ((null == n ? void 0 : n.expiresAt) == null) return;
    let r = 1000 * n.expiresAt + h.Cm - Date.now();
    if (r <= 0) {
        (t.profileEffect = void 0), R.delete(e), eu.emitChange();
        return;
    }
    let i = R.get(e);
    null != i && i.start(Math.min(A, r), () => G(e));
}
function B(e, t) {
    var n, r;
    let i = N.get(e);
    if (null == i) return;
    let a = i.get(t);
    if (null == a) return;
    let o = a.profileEffect;
    if ((null == o ? void 0 : o.expiresAt) == null) return;
    let s = 1000 * o.expiresAt + h.Cm - Date.now();
    if (s <= 0) {
        i.set(t, y(E({}, a), { profileEffect: void 0 })), null == (r = P.get(e)) || r.delete(t), eu.emitChange();
        return;
    }
    let l = null == (n = P.get(e)) ? void 0 : n.get(t);
    null != l && l.start(Math.min(A, s), () => B(e, t));
}
function Z() {
    v.clear(), I.clear(), C.clear(), N.clear(), w.clear(), D.clear(), x.clear(), (k = !1);
}
function V(e) {
    let { userId: t } = e;
    I.add(t);
}
function F(e) {
    let { userId: t } = e;
    I.delete(t);
}
function H(e) {
    return i()(e)
        .map((e) => ({
            key: e.id,
            user: new l.Z(e),
            status: f.Z.getStatus(e.id),
        }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function Y(e) {
    I.delete(e.userId), w.set(e.userId, H(e.mutualFriends)), D.set(e.userId, e.mutualFriends.length);
}
function W(e) {
    var t, n, r, i, s, l, c, d, f, h, g, b, A, j, k, Z, V, F, Y, W, z;
    let { userProfile: q, fetchStartedAt: X } = e,
        Q = null != (A = null == (t = q.guild_member_profile) ? void 0 : t.guild_id) ? A : O;
    if ((null == (n = v.get(q.user.id)) || n.delete(Q), I.delete(q.user.id), null != q.mutual_guilds)) {
        let e = {};
        q.mutual_guilds.forEach((t) => {
            let { id: n, nick: r } = t,
                i = u.Z.getGuild(n);
            null != i &&
                (e[n] = {
                    guild: i,
                    nick: r,
                });
        }),
            x.set(
                q.user.id,
                _.ZP.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({
                        guild: e[t].guild,
                        nick: e[t].nick,
                    })),
            );
    }
    if (null != q.mutual_friends_count) {
        let e = q.mutual_friends_count;
        D.set(q.user.id, e), 0 === e && w.set(q.user.id, L);
    }
    null != q.mutual_friends && (w.set(q.user.id, H(q.mutual_friends)), D.set(q.user.id, q.mutual_friends.length));
    let J = null != q.premium_since ? new Date(q.premium_since) : null,
        $ = null != q.premium_guild_since ? new Date(q.premium_guild_since) : null,
        ee = q.application,
        et = null == (r = q.user_profile) ? void 0 : r.profile_effect,
        en =
            null != q.badges
                ? q.badges.map((e) => {
                      let t = (0, p.fv)(e.id);
                      if ((e.id === T || null != t) && null != J) {
                          let n = m.intl.formatToPlainString(m.t["8zbGNT"], { date: J });
                          return (
                              null != t && (n = m.intl.formatToPlainString(m.t.Hu4jfn, { date: J })),
                              y(E({}, e), { description: n })
                          );
                      }
                      return e.id.startsWith(S) && null != $
                          ? y(E({}, e), { description: m.intl.formatToPlainString(m.t.IWkAq6, { date: $ }) })
                          : e;
                  })
                : [];
    if (
        (null != U && U.userId === q.user.id && (Date.now() > U.expiresAtMs ? (U = null) : K(en, U)),
        C.set(q.user.id, {
            userId: q.user.id,
            banner: null == (i = q.user_profile) ? void 0 : i.banner,
            accentColor: null == (s = q.user_profile) ? void 0 : s.accent_color,
            themeColors: null == (l = q.user_profile) ? void 0 : l.theme_colors,
            popoutAnimationParticleType: null == (c = q.user_profile) ? void 0 : c.popout_animation_particle_type,
            bio: null != (j = null == (d = q.user_profile) ? void 0 : d.bio) ? j : "",
            profileEffect:
                null != et
                    ? {
                          id: et.id,
                          skuId: et.sku_id,
                          expiresAt: et.expires_at,
                      }
                    : void 0,
            pronouns: null != (k = null == (f = q.user_profile) ? void 0 : f.pronouns) ? k : "",
            connectedAccounts: null != (Z = q.connected_accounts.filter((e) => o.Z.isSupported(e.type))) ? Z : [],
            applicationRoleConnections: null != (V = q.application_role_connections) ? V : [],
            premiumSince: J,
            premiumType: q.premium_type,
            premiumGuildSince: $,
            fetchStartedAt: X,
            fetchEndedAt: Date.now(),
            legacyUsername: q.legacy_username,
            application:
                null != ee
                    ? {
                          id: ee.id,
                          primarySkuId: ee.primary_sku_id,
                          customInstallUrl: ee.custom_install_url,
                          installParams: ee.install_params,
                          integrationTypesConfig: ee.integration_types_config,
                          flags: ee.flags,
                          popularApplicationCommandIds: ee.popular_application_command_ids,
                          storefront_available: ee.storefront_available,
                          name: ee.name,
                      }
                    : null,
            badges: en,
            widgets: null == (h = q.widgets) ? void 0 : h.map(M),
        }),
        (null == (b = q.user_profile) || null == (g = b.profile_effect) ? void 0 : g.expires_at) != null)
    ) {
        let e = new a.V7();
        R.set(q.user.id, e), G(q.user.id);
    }
    if (null != q.guild_member_profile) {
        let e = q.guild_member_profile.profile_effect,
            t = {
                userId: q.user.id,
                guildId: q.guild_member_profile.guild_id,
                banner: q.guild_member_profile.banner,
                accentColor: q.guild_member_profile.accent_color,
                themeColors: null == (F = q.guild_member_profile) ? void 0 : F.theme_colors,
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
            n = N.get(q.user.id);
        if (null != n) n.set(q.guild_member_profile.guild_id, t);
        else {
            let e = new Map();
            e.set(q.guild_member_profile.guild_id, t), N.set(q.user.id, e);
        }
        if ((null == (z = q.guild_member_profile) || null == (W = z.profile_effect) ? void 0 : W.expires_at) != null) {
            let e = new a.V7(),
                t = P.get(q.user.id);
            if (null != t) t.set(q.guild_member_profile.guild_id, e);
            else {
                let t = new Map();
                t.set(q.guild_member_profile.guild_id, e), P.set(q.user.id, t);
            }
            B(q.user.id, q.guild_member_profile.guild_id);
        }
    }
}
function K(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        r = null == t ? void 0 : t.badges.filter((e) => !n.has(e.id));
    return r.length > 0 && e.push(...r), e;
}
function z(e) {
    let { userId: t, guildId: n, withMutualFriends: r } = e,
        i = null != n ? n : O,
        a = v.get(t);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), v.set(t, e);
    }
    r && I.add(t);
}
function q(e) {
    var t, n;
    let { userId: r, guildId: i, apiError: a, fetchStartedAt: o } = e;
    null == (t = v.get(r)) || t.delete(null != i ? i : O), I.delete(r);
    let s =
        null != (n = C.get(r))
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
        C.set(r, s),
        (null == a ? void 0 : a.status) === 404 && (D.set(r, 0), w.set(r, L), x.set(r, j));
}
function X(e) {
    let {
            userId: t,
            accent_color: n,
            banner: r,
            bio: i,
            pronouns: o,
            popout_animation_particle_type: s,
            theme_colors: l,
            profile_effect: c,
        } = e,
        u = C.get(t);
    if (null == u) return !1;
    if (
        (C.set(
            t,
            y(E({}, u), {
                accentColor: n,
                banner: r,
                bio: i,
                pronouns: o,
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
        let e = new a.V7();
        R.set(t, e), G(t);
    }
}
function Q(e) {
    let {
            userId: t,
            guild_id: n,
            accent_color: r,
            banner: i,
            bio: o,
            pronouns: s,
            popout_animation_particle_type: l,
            theme_colors: c,
            profile_effect: u,
        } = e,
        d = N.get(t);
    if (null == n || null == d) return !1;
    let f = d.get(n);
    if (null == f) return !1;
    if (
        (d.set(
            n,
            y(E({}, f), {
                accentColor: r,
                banner: i,
                bio: o,
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
        let e = new a.V7(),
            r = P.get(t);
        if (null != r) r.set(n, e);
        else {
            let r = new Map();
            r.set(n, e), P.set(t, r);
        }
        B(t, n);
    }
}
function J(e) {
    k = !0;
}
function $(e) {
    (k = !1), null != e.guild_id ? Q(e) : X(e);
}
function ee(e) {
    k = !1;
}
function et(e) {
    let { userId: t, widgets: n } = e,
        r = C.get(t);
    if (null == r) return !1;
    C.set(t, y(E({}, r), { widgets: n.map(M) }));
}
function en(e) {
    let { badges: t, ttlInSeconds: n, userId: r } = e;
    U = {
        userId: r,
        badges: t,
        expiresAtMs: Date.now() + 1000 * n,
    };
    let i = C.get(r);
    if (null != i) {
        var a;
        let e = null != (a = i.badges) ? a : [];
        K(e, U), C.set(r, y(E({}, i), { badges: e }));
    }
}
function er(e) {
    var t, n;
    let r = e.user.id;
    return !((null != (n = null == (t = v.get(r)) ? void 0 : t.size) ? n : 0) > 0) && el(r);
}
function ei(e) {
    return [...C.keys()].reduce((e, t) => el(t) || e, !1);
}
function ea(e) {
    return el(e.user.id);
}
function eo(e) {
    return el(e.relationship.id);
}
function es() {
    v.clear(), I.clear(), C.clear(), N.clear();
}
function el(e) {
    if (null == e) return !1;
    let t = C.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
}
class ec extends d.Z {
    initialize() {
        this.waitFor(_.ZP), this.syncWith([s.default], es);
    }
    isFetchingProfile(e, t) {
        let n = v.get(e);
        return null != n && n.has(null != t ? t : O);
    }
    isFetchingFriends(e) {
        return I.has(e);
    }
    get isSubmitting() {
        return k;
    }
    getUserProfile(e) {
        return C.get(e);
    }
    getGuildMemberProfile(e, t) {
        var n, r;
        return null == t ? null : null != (r = null == (n = N.get(e)) ? void 0 : n.get(t)) ? r : null;
    }
    getMutualFriends(e) {
        return w.get(e);
    }
    getMutualFriendsCount(e) {
        return D.get(e);
    }
    getMutualGuilds(e) {
        return x.get(e);
    }
    getWidgets(e) {
        var t;
        return null == (t = C.get(e)) ? void 0 : t.widgets;
    }
    takeSnapshot() {
        let e = c.default.getId(),
            t = C.get(e);
        return null != t
            ? {
                  version: ec.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: t,
                      },
                  ],
              }
            : {
                  version: ec.LATEST_SNAPSHOT_VERSION,
                  data: [],
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: z,
            USER_PROFILE_FETCH_FAILURE: q,
            USER_PROFILE_FETCH_SUCCESS: W,
            USER_PROFILE_UPDATE_START: J,
            USER_PROFILE_UPDATE_SUCCESS: $,
            USER_PROFILE_UPDATE_FAILURE: ee,
            WIDGET_PENDING_SAVE_SUCCESS: et,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: en,
            MUTUAL_FRIENDS_FETCH_START: V,
            MUTUAL_FRIENDS_FETCH_SUCCESS: Y,
            MUTUAL_FRIENDS_FETCH_FAILURE: F,
            USER_UPDATE: er,
            GUILD_MEMBER_UPDATE: er,
            GUILD_JOIN: ei,
            GUILD_DELETE: ei,
            INVITE_ACCEPT_SUCCESS: ei,
            GUILD_MEMBER_ADD: ea,
            GUILD_MEMBER_REMOVE: ea,
            RELATIONSHIP_ADD: eo,
            RELATIONSHIP_REMOVE: eo,
            RELATIONSHIP_UPDATE: eo,
            LOGOUT: Z,
        }),
            g(this, "loadCache", () => {
                let e = this.readSnapshot(ec.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: t, profile: n } = e;
                        null != t && (null != n ? C.set(t, n) : C.delete(t));
                    });
            });
    }
}
g(ec, "displayName", "UserProfileStore"), g(ec, "LATEST_SNAPSHOT_VERSION", 1);
let eu = new ec(),
    ed = eu;
