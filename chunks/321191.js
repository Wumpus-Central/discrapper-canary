(n.d(t, { A: () => e_ }), n(321073), n(938796));
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
    f = n(711014),
    I = n(403362),
    p = n(419731),
    T = n(439174),
    m = n(633075),
    g = n(646976),
    S = n(289173),
    N = n(210598);
function C(e) {
    let t, n;
    if (e?.collectibles == null) return { collectibles: void 0, profileEffect: void 0, profileFrame: void 0 };
    let i = [];
    for (let r of e.collectibles)
        (i.push({ skuId: r.sku_id, type: r.type, expiresAt: null != r.expires_at ? new Date(r.expires_at) : void 0 }),
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
                  }));
    return { collectibles: i, profileEffect: t, profileFrame: n };
}
var O = n(652215),
    R = n(105292);
let L = Symbol("NO GUILD ID"),
    y = new Map(),
    D = new Set(),
    v = new Map(),
    b = new Map(),
    P = {},
    M = new Map(),
    U = new Map(),
    w = new Map(),
    G = [],
    x = [];
function k(e) {
    let t = e.data.type;
    switch (t) {
        case s.x.CURRENT_GAMES:
        case s.x.FAVORITE_GAMES:
        case s.x.PLAYED_GAMES:
        case s.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({ gameId: e.game_id, comment: e.comment, tags: e.tags })),
                i = r().uniqBy(n, "gameId");
            return new S.Yy({ id: e.id, type: t, games: i });
        case s.x.APPLICATION:
            return new m.R({ id: e.id, applicationId: e.data.application_id });
        case s.x.PERSONAL:
            return new N.Tu({ id: e.id, header: e.data.header ?? "", sections: (0, N.wv)(e.data.sections) });
        case s.x.CLIPS_GALLERY:
            return new g.kM({
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
                                  videoURL: e.video_url,
                                  thumbnailURL: e.thumbnail_url,
                                  spritesheetImageURL: e.spritesheet_image_url,
                                  spritesheetVttURL: e.spritesheet_vtt_url,
                              }
                            : null,
                    )
                    .filter(I.Vq),
            });
        default:
            return;
    }
}
function F(e) {
    switch (e.type) {
        case s.x.CURRENT_GAMES:
        case s.x.FAVORITE_GAMES:
        case s.x.PLAYED_GAMES:
        case s.x.WANT_TO_PLAY_GAMES: {
            let { id: t, type: n, games: i } = e;
            return new S.Yy({ id: t, type: n, games: i });
        }
        case s.x.APPLICATION: {
            let { id: t, applicationId: n } = e;
            return new m.R({ id: t, applicationId: n });
        }
        case s.x.PERSONAL: {
            let { id: t, header: n, sections: i } = e;
            return new N.Tu({ id: t, header: n, sections: i });
        }
        case s.x.CLIPS_GALLERY: {
            let { id: t, clips: n } = e;
            return new g.kM({ id: t, clips: n });
        }
        default:
            e.type;
            return;
    }
}
let B = !1,
    V = null;
function H(e, t) {
    let n = null != t ? b.get(e)?.get(t) : v.get(e);
    if (n?.collectibles == null) return;
    let i = [];
    (n.collectibles.forEach((n) => {
        if (null == n.expiresAt) return;
        let r = n.expiresAt.getTime() - Date.now();
        r <= 0
            ? i.push(n)
            : (null == P[e] && (P[e] = { [L]: {} }),
              null == P[e][t ?? L] && (P[e][t ?? L] = {}),
              null == P[e][t ?? L][n.skuId] && (P[e][t ?? L][n.skuId] = new l.Ep()),
              P[e][t ?? L][n.skuId].start(Math.min(O.mnr, r), () => {
                  H(e, t);
              }));
    }),
        0 !== i.length &&
            ((n.collectibles = n.collectibles.filter((e) => !i.includes(e))),
            i.forEach((i) => {
                (i.type === a.R.PROFILE_EFFECT
                    ? (n.profileEffect = void 0)
                    : i.type === a.R.PROFILE_FRAME && (n.profileFrame = void 0),
                    delete P[e]?.[t ?? L]?.[i.skuId]);
            }),
            "guildId" in n ? b.get(e)?.set(n.guildId, n) : v.set(e, n),
            eu.emitChange()));
}
function j() {
    (y.clear(), D.clear(), v.clear(), b.clear(), M.clear(), U.clear(), w.clear(), (B = !1));
}
function W(e) {
    let { userId: t } = e;
    D.add(t);
}
function Y(e) {
    let { userId: t } = e;
    D.delete(t);
}
function K(e) {
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
function $(e) {
    (D.delete(e.userId), M.set(e.userId, K(e.mutualFriends)), U.set(e.userId, e.mutualFriends.length));
}
function z(e) {
    let { userProfile: t, fetchStartedAt: n, guildId: i } = e,
        r = i ?? t.guild_member_profile?.guild_id ?? L;
    if ((y.get(t.user.id)?.delete(r), D.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        (t.mutual_guilds.forEach((t) => {
            let { id: n, nick: i } = t,
                r = E.A.getGuild(n);
            null != r && (e[n] = { guild: r, nick: i });
        }),
            w.set(
                t.user.id,
                f.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            ));
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        (U.set(t.user.id, e), 0 === e && M.set(t.user.id, G));
    }
    null != t.mutual_friends && (M.set(t.user.id, K(t.mutual_friends)), U.set(t.user.id, t.mutual_friends.length));
    let a = null != t.premium_since ? new Date(t.premium_since) : null,
        s = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        l = t.application,
        d =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, T.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != a) {
                          let n = R.intl.formatToPlainString(R.t["8zbGNR"], { date: a });
                          return (
                              null != t && (n = R.intl.formatToPlainString(R.t.Hu4jfi, { date: a })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith("guild_booster_lvl") && null != s
                          ? { ...e, description: R.intl.formatToPlainString(R.t.IWkAq7, { date: s }) }
                          : e;
                  })
                : [];
    null != V && V.userId === t.user.id && (Date.now() > V.expiresAtMs ? (V = null) : X(d, V));
    let c = Date.now();
    if (
        (v.set(t.user.id, {
            ...C(t.user_profile),
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
                          embeddedSurfaces: l.embedded_surfaces,
                          popularApplicationCommandIds: l.popular_application_command_ids,
                          storefront_available: l.storefront_available,
                          name: l.name,
                          termsOfServiceUrl: l.terms_of_service_url,
                          privacyPolicyUrl: l.privacy_policy_url,
                      }
                    : null,
            badges: d,
            widgets: t.widgets?.map(k).filter(I.Vq),
            wishlistSettings: t.wishlist_settings,
            profileReadState: (0, p.R8)(v.get(t.user.id)?.profileReadState, (0, p.CJ)(t.profile_read_state)),
            private: t.private,
        }),
        H(t.user.id),
        null != t.guild_member_profile)
    ) {
        let e = {
                ...C(t.guild_member_profile),
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
            i = b.get(t.user.id);
        if (null != i) i.set(t.guild_member_profile.guild_id, e);
        else {
            let n = new Map();
            (n.set(t.guild_member_profile.guild_id, e), b.set(t.user.id, n));
        }
        H(t.user.id, t.guild_member_profile.guild_id);
    }
}
function X(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        i = t?.badges.filter((e) => !n.has(e.id));
    return (i.length > 0 && e.push(...i), e);
}
function q(e) {
    let { userId: t, guildId: n, withMutualFriends: i } = e,
        r = n ?? L,
        a = y.get(t);
    if (null != a) a.add(r);
    else {
        let e = new Set();
        (e.add(r), y.set(t, e));
    }
    i && D.add(t);
}
function Z(e) {
    let { userId: t, guildId: n, apiError: i, fetchStartedAt: r } = e;
    (y.get(t)?.delete(n ?? L), D.delete(t));
    let a = v.get(t) ?? {
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
    if (((a.fetchStartedAt = r), (a.fetchEndedAt = s), (a.fetchError = i), v.set(t, a), null != n)) {
        let e = b.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = r), (e.fetchEndedAt = s), (e.fetchError = i));
    }
    i?.status === 404 && (U.set(t, 0), M.set(t, G), w.set(t, x));
}
function Q(e) {
    B = !0;
}
function J(e) {
    ((B = !1),
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
                      c = b.get(t);
                  if (null == n || null == c) return;
                  let u = c.get(n);
                  null == u ||
                      (c.set(n, {
                          ...u,
                          ...C({ collectibles: d }),
                          accentColor: i,
                          banner: r,
                          bio: a,
                          pronouns: s,
                          popoutAnimationParticleType: l,
                          themeColors: o,
                      }),
                      H(t, n));
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
                      d = v.get(t);
                  null == d ||
                      (v.set(t, {
                          ...d,
                          ...C({ collectibles: o }),
                          accentColor: n,
                          banner: i,
                          bio: r,
                          pronouns: a,
                          popoutAnimationParticleType: s,
                          themeColors: l,
                      }),
                      H(t));
              })(e));
}
function ee(e) {
    B = !1;
}
function et(e) {
    let { userId: t, widgets: n } = e,
        i = v.get(t);
    if (null == i) return !1;
    v.set(t, { ...i, widgets: n.map(k).filter(I.Vq) });
}
function en(e) {
    let { ownerId: t, ackedAt: n } = e,
        i = v.get(t);
    if (null == i) return !1;
    v.set(t, { ...i, profileReadState: (0, p.R8)(i.profileReadState, n) });
}
function ei(e) {
    let { badges: t, ttlInSeconds: n, userId: i } = e;
    V = { userId: i, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let r = v.get(i);
    if (null != r) {
        let e = r.badges ?? [];
        (X(e, V), v.set(i, { ...r, badges: e }));
    }
}
function er(e) {
    let t = e.user.id;
    return !((y.get(t)?.size ?? 0) > 0) && ed(t);
}
function ea(e) {
    return [...v.keys()].reduce((e, t) => ed(t) || e, !1);
}
function es(e) {
    return ed(e.user.id);
}
function el(e) {
    return ed(e.relationship.id);
}
function eo() {
    (y.clear(), D.clear(), v.clear(), b.clear());
}
function ed(e) {
    if (null == e) return !1;
    let t = v.get(e);
    if (null == t) return !1;
    ((t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0));
    let n = b.get(e);
    if (null != n) for (let e of n.values()) ((e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0));
}
class ec extends A.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: q,
            USER_PROFILE_FETCH_FAILURE: Z,
            USER_PROFILE_FETCH_SUCCESS: z,
            USER_PROFILE_UPDATE_START: Q,
            USER_PROFILE_UPDATE_SUCCESS: J,
            USER_PROFILE_UPDATE_FAILURE: ee,
            WIDGET_PENDING_SAVE_SUCCESS: et,
            PROFILE_READ_STATE_ACK: en,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: ei,
            MUTUAL_FRIENDS_FETCH_START: W,
            MUTUAL_FRIENDS_FETCH_SUCCESS: $,
            MUTUAL_FRIENDS_FETCH_FAILURE: Y,
            USER_UPDATE: er,
            GUILD_MEMBER_UPDATE: er,
            GUILD_JOIN: ea,
            GUILD_DELETE: ea,
            INVITE_ACCEPT_SUCCESS: ea,
            GUILD_MEMBER_ADD: es,
            GUILD_MEMBER_REMOVE: es,
            RELATIONSHIP_ADD: el,
            RELATIONSHIP_REMOVE: el,
            RELATIONSHIP_UPDATE: el,
            LOGOUT: j,
        });
    }
    initialize() {
        (this.waitFor(f.Ay), this.syncWith([c.default], eo));
    }
    isFetchingProfile(e, t) {
        let n = y.get(e);
        return null != n && n.has(t ?? L);
    }
    isFetchingFriends(e) {
        return D.has(e);
    }
    get isSubmitting() {
        return B;
    }
    getUserProfile(e) {
        return v.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (b.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return M.get(e);
    }
    getMutualFriendsCount(e) {
        return U.get(e);
    }
    getMutualGuilds(e) {
        return w.get(e);
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
    getProfileReadStateSectionAckedAt(e, t) {
        return v.get(e)?.profileReadState?.[t] ?? null;
    }
    loadCache = () => {
        let e = this.readSnapshot(ec.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? v.set(t, { ...n, widgets: n.widgets?.map(F).filter(I.Vq) }) : v.delete(t));
            });
    };
    takeSnapshot() {
        let e = _.default.getId(),
            t = v.get(e);
        return null != t
            ? { version: ec.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: ec.LATEST_SNAPSHOT_VERSION, data: [] };
    }
}
let eu = new ec(),
    e_ = eu;
