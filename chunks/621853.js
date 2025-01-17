var i = r(47120);
var a = r(789020);
var s = r(392711),
    o = r.n(s),
    l = r(846519),
    u = r(726542),
    c = r(706454),
    d = r(598077),
    f = r(314897),
    _ = r(430824),
    h = r(158776),
    p = r(412788),
    m = r(771845),
    g = r(291175),
    E = r(215023),
    v = r(388032);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let T = Symbol('NO GUILD ID'),
    b = new Map(),
    y = new Set(),
    S = 'premium',
    A = 'guild_booster_lvl',
    N = 2147483647,
    C = new Map(),
    R = new Map(),
    O = new Map(),
    D = new Map(),
    L = new Map(),
    x = new Map(),
    w = new Map(),
    P = !1;
function M(e) {
    let n = C.get(e);
    if ((null == n ? void 0 : n.profileEffectExpiresAt) == null) return;
    let r = 1000 * n.profileEffectExpiresAt + E.Cm - Date.now();
    if (r <= 0) (n.profileEffectId = void 0), (n.profileEffectExpiresAt = void 0), O.delete(e), er.emitChange();
    else {
        let n = O.get(e);
        if (null == n) return;
        n.start(Math.min(N, r), () => M(e));
    }
}
function k(e, n) {
    let r = R.get(e);
    if (null == r) return;
    let i = r.get(n);
    if ((null == i ? void 0 : i.profileEffectExpiresAt) == null) return;
    let a = D.get(e),
        s = 1000 * i.profileEffectExpiresAt + E.Cm - Date.now();
    if (s <= 0)
        r.set(n, {
            ...i,
            profileEffectId: void 0,
            profileEffectExpiresAt: void 0
        }),
            null != a && a.delete(n),
            er.emitChange();
    else {
        if (null == a) return;
        let r = a.get(n);
        if (null == r) return;
        r.start(Math.min(N, s), () => k(e, n));
    }
}
function U() {
    b.clear(), y.clear(), C.clear(), R.clear(), L.clear(), x.clear(), w.clear(), (P = !1);
}
function B(e) {
    let { userId: n } = e;
    y.add(n);
}
function G(e) {
    let { userId: n } = e;
    y.delete(n);
}
function Z(e) {
    return o()(e)
        .map((e) => ({
            key: e.id,
            user: new d.Z(e),
            status: h.Z.getStatus(e.id)
        }))
        .sortBy((e) => {
            let { user: n } = e;
            return n.username.toLowerCase();
        })
        .value();
}
function F(e) {
    y.delete(e.userId), L.set(e.userId, Z(e.mutualFriends)), x.set(e.userId, e.mutualFriends.length);
}
function V(e) {
    var n, r, i, a, s, o, c, d, f, h, p, E, I, y, N, P, U, B, G, F, V, j, H, Y, W, K, z;
    let q = null !== (N = null === (n = e.guild_member_profile) || void 0 === n ? void 0 : n.guild_id) && void 0 !== N ? N : T;
    if ((null === (r = b.get(e.user.id)) || void 0 === r || r.delete(q), null != e.mutual_guilds)) {
        let n = {};
        e.mutual_guilds.forEach((e) => {
            let { id: r, nick: i } = e,
                a = _.Z.getGuild(r);
            null != a &&
                (n[r] = {
                    guild: a,
                    nick: i
                });
        }),
            w.set(
                e.user.id,
                m.ZP.getFlattenedGuildIds()
                    .filter((e) => null != n[e])
                    .map((e) => ({
                        guild: n[e].guild,
                        nick: n[e].nick
                    }))
            );
    }
    if (null != e.mutual_friends_count) {
        let n = e.mutual_friends_count;
        x.set(e.user.id, n);
    }
    null != e.mutual_friends && (L.set(e.user.id, Z(e.mutual_friends)), x.set(e.user.id, e.mutual_friends.length));
    let Q = null != e.premium_since ? new Date(e.premium_since) : null,
        X = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        J = e.application;
    if (
        (C.set(e.user.id, {
            userId: e.user.id,
            banner: null === (i = e.user_profile) || void 0 === i ? void 0 : i.banner,
            accentColor: null === (a = e.user_profile) || void 0 === a ? void 0 : a.accent_color,
            themeColors: null === (s = e.user_profile) || void 0 === s ? void 0 : s.theme_colors,
            popoutAnimationParticleType: null === (o = e.user_profile) || void 0 === o ? void 0 : o.popout_animation_particle_type,
            bio: null !== (P = null === (c = e.user_profile) || void 0 === c ? void 0 : c.bio) && void 0 !== P ? P : '',
            profileEffectId: null === (f = e.user_profile) || void 0 === f ? void 0 : null === (d = f.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (p = e.user_profile) || void 0 === p ? void 0 : null === (h = p.profile_effect) || void 0 === h ? void 0 : h.expires_at,
            pronouns: null !== (U = null === (E = e.user_profile) || void 0 === E ? void 0 : E.pronouns) && void 0 !== U ? U : '',
            connectedAccounts: null !== (B = e.connected_accounts.filter((e) => u.Z.isSupported(e.type))) && void 0 !== B ? B : [],
            applicationRoleConnections: null !== (G = e.application_role_connections) && void 0 !== G ? G : [],
            premiumSince: Q,
            premiumType: e.premium_type,
            premiumGuildSince: X,
            lastFetched: Date.now(),
            legacyUsername: e.legacy_username,
            application:
                null != J
                    ? {
                          id: J.id,
                          primarySkuId: J.primary_sku_id,
                          customInstallUrl: J.custom_install_url,
                          installParams: J.install_params,
                          integrationTypesConfig: J.integration_types_config,
                          flags: J.flags,
                          popularApplicationCommandIds: J.popular_application_command_ids,
                          storefront_available: J.storefront_available,
                          name: J.name
                      }
                    : null,
            badges:
                null != e.badges
                    ? e.badges.map((e) => {
                          let n = (0, g.fv)(e.id);
                          if ((e.id === S || null != n) && null != Q) {
                              let r = v.intl.formatToPlainString(v.t['8zbGNT'], { date: Q });
                              return (
                                  null != n && (r = 2 === n.badgeVersion ? v.intl.formatToPlainString(v.t.Hu4jfn, { date: Q }) : (0, g.sZ)(n.id, Q)),
                                  {
                                      ...e,
                                      description: r
                                  }
                              );
                          }
                          return e.id.startsWith(A) && null != X
                              ? {
                                    ...e,
                                    description: v.intl.formatToPlainString(v.t.IWkAq6, { date: X })
                                }
                              : e;
                      })
                    : e.badges
        }),
        (null === (y = e.user_profile) || void 0 === y ? void 0 : null === (I = y.profile_effect) || void 0 === I ? void 0 : I.expires_at) != null)
    ) {
        let n = new l.V7();
        O.set(e.user.id, n), M(e.user.id);
    }
    if (null != e.guild_member_profile) {
        let n = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (F = e.guild_member_profile) || void 0 === F ? void 0 : F.theme_colors,
                popoutAnimationParticleType: null === (V = e.guild_member_profile) || void 0 === V ? void 0 : V.popout_animation_particle_type,
                profileEffectId: null === (H = e.guild_member_profile) || void 0 === H ? void 0 : null === (j = H.profile_effect) || void 0 === j ? void 0 : j.id,
                profileEffectExpiresAt: null === (W = e.guild_member_profile) || void 0 === W ? void 0 : null === (Y = W.profile_effect) || void 0 === Y ? void 0 : Y.expires_at,
                bio: e.guild_member_profile.bio,
                pronouns: e.guild_member_profile.pronouns,
                badges: e.guild_badges
            },
            r = R.get(e.user.id);
        if (null != r) r.set(e.guild_member_profile.guild_id, n);
        else {
            let r = new Map();
            r.set(e.guild_member_profile.guild_id, n), R.set(e.user.id, r);
        }
        if ((null === (z = e.guild_member_profile) || void 0 === z ? void 0 : null === (K = z.profile_effect) || void 0 === K ? void 0 : K.expires_at) != null) {
            let n = new l.V7(),
                r = D.get(e.user.id);
            if (null != r) r.set(e.guild_member_profile.guild_id, n);
            else {
                let r = new Map();
                r.set(e.guild_member_profile.guild_id, n), D.set(e.user.id, r);
            }
            k(e.user.id, e.guild_member_profile.guild_id);
        }
    }
}
function j(e) {
    let { userId: n, guildId: r } = e,
        i = null != r ? r : T,
        a = b.get(n);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), b.set(n, e);
    }
}
function H(e) {
    var n, r;
    let { userId: i, guildId: a, apiError: s } = e;
    null === (n = b.get(i)) || void 0 === n || n.delete(null != a ? a : T);
    let o =
        null !== (r = C.get(i)) && void 0 !== r
            ? r
            : {
                  connectedAccounts: [],
                  applicationRoleConnections: [],
                  premiumSince: null,
                  premiumGuildSince: null,
                  application: null,
                  legacyUsername: null,
                  userId: i,
                  banner: null,
                  accentColor: null,
                  bio: '',
                  pronouns: '',
                  premiumType: null,
                  lastFetched: 0,
                  fetchError: void 0
              };
    (o.lastFetched = Date.now()), (o.fetchError = s), C.set(i, o);
}
function Y(e) {
    let { userId: n, accent_color: r, banner: i, bio: a, pronouns: s, popout_animation_particle_type: o, theme_colors: u, profileEffectId: c, profileEffectExpiresAt: d } = e,
        f = C.get(n);
    if (null == f) return !1;
    if (
        (C.set(n, {
            ...f,
            accentColor: r,
            banner: i,
            bio: a,
            pronouns: s,
            popoutAnimationParticleType: o,
            themeColors: u,
            profileEffectId: c,
            profileEffectExpiresAt: d
        }),
        null != d)
    ) {
        let e = new l.V7();
        O.set(n, e), M(n);
    }
}
function W(e) {
    let { userId: n, guild_id: r, accent_color: i, banner: a, bio: s, pronouns: o, popout_animation_particle_type: u, theme_colors: c, profileEffectId: d, profileEffectExpiresAt: f } = e,
        _ = R.get(n);
    if (null == r || null == _) return !1;
    let h = _.get(r);
    if (null == h) return !1;
    if (
        (_.set(r, {
            ...h,
            accentColor: i,
            banner: a,
            bio: s,
            pronouns: o,
            popoutAnimationParticleType: u,
            themeColors: c,
            profileEffectId: d,
            profileEffectExpiresAt: f
        }),
        null != f)
    ) {
        let e = new l.V7(),
            i = D.get(n);
        if (null != i) i.set(r, e);
        else {
            let i = new Map();
            i.set(r, e), D.set(n, i);
        }
        k(n, r);
    }
}
function K(e) {
    P = !0;
}
function z(e) {
    (P = !1), null != e.guild_id ? W(e) : Y(e);
}
function q(e) {
    P = !1;
}
function Q(e) {
    var n, r;
    let i = e.user.id,
        a = C.get(i);
    if (null == a || (null !== (r = null === (n = b.get(i)) || void 0 === n ? void 0 : n.size) && void 0 !== r ? r : 0) > 0) return !1;
    et(a);
}
function X(e) {
    if (w.size < 1 && C.size < 1) return !1;
    for (let e of (w.clear(), C.values())) et(e);
}
function J(e) {
    let n = e.user.id,
        r = C.get(n);
    if (null == w.get(n) && null == r) return !1;
    w.delete(n), et(r);
}
function $(e) {
    let n = e.relationship.id,
        r = C.get(n);
    if (!L.has(n) && !x.has(n) && null == r) return !1;
    L.delete(n), x.delete(n), et(r);
}
function ee() {
    b.clear(), C.clear(), R.clear();
}
function et(e) {
    null != e && ((e.lastFetched = 0), (e.fetchError = void 0));
}
class en extends p.Z {
    initialize() {
        this.waitFor(m.ZP), this.syncWith([c.default], ee);
    }
    isFetchingProfile(e, n) {
        let r = b.get(e);
        return null != r && r.has(null != n ? n : T);
    }
    isFetchingFriends(e) {
        return y.has(e);
    }
    get isSubmitting() {
        return P;
    }
    getUserProfile(e) {
        return C.get(e);
    }
    getGuildMemberProfile(e, n) {
        var r, i;
        return null == n ? null : null !== (i = null === (r = R.get(e)) || void 0 === r ? void 0 : r.get(n)) && void 0 !== i ? i : null;
    }
    getMutualFriends(e) {
        return L.get(e);
    }
    getMutualFriendsCount(e) {
        return x.get(e);
    }
    getMutualGuilds(e) {
        return w.get(e);
    }
    takeSnapshot() {
        let e = f.default.getId(),
            n = C.get(e);
        return null != n
            ? {
                  version: en.LATEST_SNAPSHOT_VERSION,
                  data: [
                      {
                          userId: e,
                          profile: n
                      }
                  ]
              }
            : {
                  version: en.LATEST_SNAPSHOT_VERSION,
                  data: []
              };
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: j,
            USER_PROFILE_FETCH_FAILURE: H,
            USER_PROFILE_FETCH_SUCCESS: V,
            USER_PROFILE_UPDATE_START: K,
            USER_PROFILE_UPDATE_SUCCESS: z,
            USER_PROFILE_UPDATE_FAILURE: q,
            MUTUAL_FRIENDS_FETCH_START: B,
            MUTUAL_FRIENDS_FETCH_SUCCESS: F,
            MUTUAL_FRIENDS_FETCH_FAILURE: G,
            USER_UPDATE: Q,
            GUILD_MEMBER_UPDATE: Q,
            GUILD_JOIN: X,
            GUILD_DELETE: X,
            GUILD_MEMBER_ADD: J,
            GUILD_MEMBER_REMOVE: J,
            RELATIONSHIP_ADD: $,
            RELATIONSHIP_REMOVE: $,
            RELATIONSHIP_UPDATE: $,
            LOGOUT: U
        }),
            I(this, 'loadCache', () => {
                let e = this.readSnapshot(en.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: n, profile: r } = e;
                        null != n && (null != r ? C.set(n, r) : C.delete(n));
                    });
            });
    }
}
I(en, 'displayName', 'UserProfileStore'), I(en, 'LATEST_SNAPSHOT_VERSION', 1);
let er = new en();
n.Z = er;
