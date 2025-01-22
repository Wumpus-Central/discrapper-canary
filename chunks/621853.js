var i = r(47120);
var a = r(789020);
var o = r(392711),
    s = r.n(o),
    l = r(846519),
    u = r(726542),
    c = r(706454),
    d = r(598077),
    f = r(314897),
    p = r(430824),
    h = r(158776),
    _ = r(412788),
    m = r(771845),
    g = r(291175),
    E = r(215023),
    v = r(388032);
function y(e, n, r) {
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
let b = Symbol('NO GUILD ID'),
    I = new Map(),
    T = new Set(),
    S = 'premium',
    A = 'guild_booster_lvl',
    C = 2147483647,
    N = new Map(),
    R = new Map(),
    O = new Map(),
    D = new Map(),
    x = new Map(),
    L = new Map(),
    w = new Map(),
    P = !1;
function M(e) {
    let n = N.get(e);
    if ((null == n ? void 0 : n.profileEffectExpiresAt) == null) return;
    let r = 1000 * n.profileEffectExpiresAt + E.Cm - Date.now();
    if (r <= 0) (n.profileEffectId = void 0), (n.profileEffectExpiresAt = void 0), O.delete(e), er.emitChange();
    else {
        let n = O.get(e);
        if (null == n) return;
        n.start(Math.min(C, r), () => M(e));
    }
}
function k(e, n) {
    let r = R.get(e);
    if (null == r) return;
    let i = r.get(n);
    if ((null == i ? void 0 : i.profileEffectExpiresAt) == null) return;
    let a = D.get(e),
        o = 1000 * i.profileEffectExpiresAt + E.Cm - Date.now();
    if (o <= 0)
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
        r.start(Math.min(C, o), () => k(e, n));
    }
}
function U() {
    I.clear(), T.clear(), N.clear(), R.clear(), x.clear(), L.clear(), w.clear(), (P = !1);
}
function B(e) {
    let { userId: n } = e;
    T.add(n);
}
function G(e) {
    let { userId: n } = e;
    T.delete(n);
}
function Z(e) {
    return s()(e)
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
    T.delete(e.userId), x.set(e.userId, Z(e.mutualFriends)), L.set(e.userId, e.mutualFriends.length);
}
function V(e) {
    var n, r, i, a, o, s, c, d, f, h, _, E, y, T, C, P, U, B, G, F, V, j, H, Y, W, K, z;
    let q = null !== (C = null === (n = e.guild_member_profile) || void 0 === n ? void 0 : n.guild_id) && void 0 !== C ? C : b;
    if ((null === (r = I.get(e.user.id)) || void 0 === r || r.delete(q), null != e.mutual_guilds)) {
        let n = {};
        e.mutual_guilds.forEach((e) => {
            let { id: r, nick: i } = e,
                a = p.Z.getGuild(r);
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
        L.set(e.user.id, n);
    }
    null != e.mutual_friends && (x.set(e.user.id, Z(e.mutual_friends)), L.set(e.user.id, e.mutual_friends.length));
    let Q = null != e.premium_since ? new Date(e.premium_since) : null,
        X = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
        J = e.application;
    if (
        (N.set(e.user.id, {
            userId: e.user.id,
            banner: null === (i = e.user_profile) || void 0 === i ? void 0 : i.banner,
            accentColor: null === (a = e.user_profile) || void 0 === a ? void 0 : a.accent_color,
            themeColors: null === (o = e.user_profile) || void 0 === o ? void 0 : o.theme_colors,
            popoutAnimationParticleType: null === (s = e.user_profile) || void 0 === s ? void 0 : s.popout_animation_particle_type,
            bio: null !== (P = null === (c = e.user_profile) || void 0 === c ? void 0 : c.bio) && void 0 !== P ? P : '',
            profileEffectId: null === (f = e.user_profile) || void 0 === f ? void 0 : null === (d = f.profile_effect) || void 0 === d ? void 0 : d.id,
            profileEffectExpiresAt: null === (_ = e.user_profile) || void 0 === _ ? void 0 : null === (h = _.profile_effect) || void 0 === h ? void 0 : h.expires_at,
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
        (null === (T = e.user_profile) || void 0 === T ? void 0 : null === (y = T.profile_effect) || void 0 === y ? void 0 : y.expires_at) != null)
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
        i = null != r ? r : b,
        a = I.get(n);
    if (null != a) a.add(i);
    else {
        let e = new Set();
        e.add(i), I.set(n, e);
    }
}
function H(e) {
    var n, r;
    let { userId: i, guildId: a, apiError: o } = e;
    null === (n = I.get(i)) || void 0 === n || n.delete(null != a ? a : b);
    let s =
        null !== (r = N.get(i)) && void 0 !== r
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
    (s.lastFetched = Date.now()), (s.fetchError = o), N.set(i, s);
}
function Y(e) {
    let { userId: n, accent_color: r, banner: i, bio: a, pronouns: o, popout_animation_particle_type: s, theme_colors: u, profileEffectId: c, profileEffectExpiresAt: d } = e,
        f = N.get(n);
    if (null == f) return !1;
    if (
        (N.set(n, {
            ...f,
            accentColor: r,
            banner: i,
            bio: a,
            pronouns: o,
            popoutAnimationParticleType: s,
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
    let { userId: n, guild_id: r, accent_color: i, banner: a, bio: o, pronouns: s, popout_animation_particle_type: u, theme_colors: c, profileEffectId: d, profileEffectExpiresAt: f } = e,
        p = R.get(n);
    if (null == r || null == p) return !1;
    let h = p.get(r);
    if (null == h) return !1;
    if (
        (p.set(r, {
            ...h,
            accentColor: i,
            banner: a,
            bio: o,
            pronouns: s,
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
        a = N.get(i);
    if (null == a || (null !== (r = null === (n = I.get(i)) || void 0 === n ? void 0 : n.size) && void 0 !== r ? r : 0) > 0) return !1;
    et(a);
}
function X(e) {
    if (w.size < 1 && N.size < 1) return !1;
    for (let e of (w.clear(), N.values())) et(e);
}
function J(e) {
    let n = e.user.id,
        r = N.get(n);
    if (null == w.get(n) && null == r) return !1;
    w.delete(n), et(r);
}
function $(e) {
    let n = e.relationship.id,
        r = N.get(n);
    if (!x.has(n) && !L.has(n) && null == r) return !1;
    x.delete(n), L.delete(n), et(r);
}
function ee() {
    I.clear(), N.clear(), R.clear();
}
function et(e) {
    null != e && ((e.lastFetched = 0), (e.fetchError = void 0));
}
class en extends _.Z {
    initialize() {
        this.waitFor(m.ZP), this.syncWith([c.default], ee);
    }
    isFetchingProfile(e, n) {
        let r = I.get(e);
        return null != r && r.has(null != n ? n : b);
    }
    isFetchingFriends(e) {
        return T.has(e);
    }
    get isSubmitting() {
        return P;
    }
    getUserProfile(e) {
        return N.get(e);
    }
    getGuildMemberProfile(e, n) {
        var r, i;
        return null == n ? null : null !== (i = null === (r = R.get(e)) || void 0 === r ? void 0 : r.get(n)) && void 0 !== i ? i : null;
    }
    getMutualFriends(e) {
        return x.get(e);
    }
    getMutualFriendsCount(e) {
        return L.get(e);
    }
    getMutualGuilds(e) {
        return w.get(e);
    }
    takeSnapshot() {
        let e = f.default.getId(),
            n = N.get(e);
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
            y(this, 'loadCache', () => {
                let e = this.readSnapshot(en.LATEST_SNAPSHOT_VERSION);
                null != e &&
                    e.forEach((e) => {
                        let { userId: n, profile: r } = e;
                        null != n && (null != r ? N.set(n, r) : N.delete(n));
                    });
            });
    }
}
y(en, 'displayName', 'UserProfileStore'), y(en, 'LATEST_SNAPSHOT_VERSION', 1);
let er = new en();
n.Z = er;
