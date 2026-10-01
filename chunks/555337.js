let t, i, r, u, o, a, s, d, I, E;
(l.d(n, { A: () => eA }), l(321073), l(938796));
var _ = l(435558),
    S = l.n(_),
    T = l(536637),
    c = l.n(T),
    G = l(17928),
    f = l(636537),
    D = l(506774),
    L = l(73153),
    U = l(867051),
    A = l(837011),
    g = l(95701),
    N = l(260509),
    h = l(671759),
    C = l(889227),
    p = l(71393),
    y = l(287809),
    O = l(149790),
    R = l(935208),
    b = l(794967),
    P = l(557193),
    m = l(310527),
    v = l(595818),
    F = l(652215),
    M = l(324580),
    B = l(124759);
let V = [
        "name",
        "description",
        "icon",
        "splash",
        "banner",
        "homeHeader",
        "afkChannelId",
        "afkTimeout",
        "systemChannelId",
        "verificationLevel",
        "defaultMessageNotifications",
        "explicitContentFilter",
        "features",
        "systemChannelFlags",
        "preferredLocale",
        "rulesChannelId",
        "safetyAlertsChannelId",
        "ownerConfiguredContentLevel",
        "discoverySplash",
        "publicUpdatesChannelId",
        "premiumProgressBarEnabled",
        "officialMessageColor",
        "verificationRoleId",
    ],
    Y = [
        "brandColorPrimary",
        "description",
        "icon",
        "name",
        "traits",
        "visibility",
        "gameApplicationIds",
        "customBanner",
        "tag",
        "badge",
        "badgeColorPrimary",
        "badgeColorSecondary",
    ],
    w = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    H = {
        icon: "iconOriginalMd5",
        banner: "bannerOriginalMd5",
        splash: "splashOriginalMd5",
        discoverySplash: "discoverySplashOriginalMd5",
    },
    k = !1,
    X = F.XlH.CLOSED,
    W = {},
    j = null,
    x = !1,
    J = !1,
    Z = !1,
    q = null,
    z = null,
    K = null,
    Q = null,
    $ = {},
    ee = null,
    en = 0,
    el = F.EkJ.NONE,
    et = null,
    ei = {
        primaryCategoryId: M.ig,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: !0,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: "",
    },
    er = !1,
    eu = ei,
    eo = ei,
    ea = null,
    es = 0,
    ed = null,
    eI = null,
    eE = null;
function e_(e) {
    if (null == o || null == u || u.id !== e) return !1;
    let n = p.A.getGuild(e);
    return null != n && (u === o ? (o = u = n) : (u = n), !0);
}
function eS(e) {
    let { guildId: n, section: l, subsection: i, location: r } = e,
        I = p.A.getGuild(n);
    if (null == I) return eT();
    let _ = A.A.getProfile(n);
    ((u = o = I),
        (a = s = _),
        (Z = J),
        (z = q),
        (K = Q = I.guildSpaceSettings),
        (X = F.XlH.OPEN),
        (W = {}),
        (j = null),
        (d = R.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (el = o.mfaLevel),
        (eo = eu),
        (E = null),
        ($ = {}),
        (et = r),
        ec({ section: l ?? t ?? (0, v.x)(), subsection: i ?? null }));
}
function eT() {
    ((k = !1),
        (X = F.XlH.CLOSED),
        (u = o = null),
        (x = !1),
        (Z = !1),
        (z = null),
        (K = null),
        (Q = null),
        (ee = null),
        (en = 0),
        (ea = null),
        (eI = null),
        (eE = null),
        (t = null),
        (i = null),
        (r = null),
        (el = F.EkJ.NONE),
        ($ = {}),
        (I = void 0));
}
function ec(e) {
    if (null == o) return !1;
    let n = t;
    if (((t = e.section), (i = e.subsection), t === F.BEX.INSTANT_INVITES || t === F.BEX.INVITES))
        f.Bo.get({ url: F.Rsh.GUILD_INSTANT_INVITES(o.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            L.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (t === F.BEX.INTEGRATIONS || t === F.BEX.ROLES) {
        if (((d = null), n !== e.section)) return ef(e);
    } else
        t === F.BEX.MEMBERS
            ? (d = (0, N.af)(o))
            : t === F.BEX.VANITY_URL
              ? (0, m.Je)(o.id)
              : t === F.BEX.SAFETY &&
                L.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? F.nd0.SAFETY_OVERVIEW : i,
                });
}
function eG(e) {
    return new h.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new C.A(e.inviter) : null,
        channel: (0, g.OY)(e.channel),
        guild: null != e.guild ? (0, O.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: c()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function ef(e) {
    if (null == o || X !== F.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id)) return !1;
    (0, b.c)(o.id);
}
function eD(e) {
    let { guildId: n } = e;
    if (null == o || o.id !== n) return !1;
    j = null;
}
function eL(e) {
    let { guildId: n, error: l } = e;
    if (null == o || o.id !== n) return !1;
    j = l;
}
class eU extends G.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(p.A, A.A, y.default);
    }
    getMetadata() {
        return eo;
    }
    widgetHasChanges() {
        return !1 !== x && (Z !== J || z !== q);
    }
    guildSpaceSettingsHasChanges() {
        return Q?.enabled !== K?.enabled;
    }
    hasChanges() {
        return (
            !S().isEqual(o, u) ||
            !S().isEqual(eo, eu) ||
            !S().isEqual(s, a) ||
            this.widgetHasChanges() ||
            this.guildSpaceSettingsHasChanges()
        );
    }
    isOpen() {
        return k;
    }
    getSavedRouteState() {
        return I;
    }
    getSection() {
        return t;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != o ? o.id : null;
    }
    showPublicSuccessModal() {
        return !D.w.get(B.wX);
    }
    getGuild() {
        return o;
    }
    getPendingOriginalMd5s() {
        return $;
    }
    getGuildProfile() {
        return s;
    }
    getWidget() {
        return { enabled: Z, channelId: z };
    }
    getGuildSpaceSettings() {
        return Q;
    }
    isSubmitting() {
        return X === F.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return er;
    }
    getErrors() {
        return W;
    }
    getError(e) {
        return W[e] ?? null;
    }
    getProfileError() {
        return j;
    }
    getSelectedRoleId() {
        return d;
    }
    getSlug() {
        return E;
    }
    getBans() {
        return [ea, es];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eE,
            section: t,
            subsection: i,
            errors: W,
            guild: o,
            bans: ea,
            bansVersion: es,
            invites: eI,
            selectedRoleId: d,
            fetchedEmbed: x,
            embedEnabled: Z,
            embedChannelId: z,
            guildSpaceSettings: Q,
            mfaLevel: el,
            searchQuery: r,
            vanityURLCode: ee,
            vanityURLUses: en,
            originalGuild: u,
            hasChanges: this.hasChanges(),
            guildMetadata: eo,
            analyticsLocation: et,
            isGuildMetadataLoaded: er,
            originalProfile: a,
            profile: s,
        };
    }
}
let eA = new eU(
    L.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: eS,
              GUILD_SETTINGS_OPEN: function (e) {
                  ((k = !0), eS(e));
              },
              GUILD_SETTINGS_CLOSE: eT,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let n;
                  if (null == o) return !1;
                  for (let n of (V.forEach((n) => {
                      null != o && e.hasOwnProperty(n) && (o = (0, U.hZ)(o, n, e[n] ?? null));
                  }),
                  Object.keys(H))) {
                      if (!e.hasOwnProperty(n)) continue;
                      let l = e[H[n]];
                      null != l ? ($[n] = l) : delete $[n];
                  }
                  null == (n = o) || V.some((e) => n[e] !== u[e]) || (o = u);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: n } = e;
                  if (null == s || null == o || o.id !== n) return !1;
                  Y.forEach((n) => {
                      if (null != s && e.hasOwnProperty(n)) {
                          let l = e[n];
                          void 0 !== l && (s = { ...s, [n]: l });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: n } = e;
                  ((W = {}), ($ = {}));
                  let l = p.A.getGuild(n);
                  null != l && ((u = o = l), (Q = K));
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: n } = e;
                  return ((I = n), !1);
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  ((X = F.XlH.SUBMITTING), (W = {}));
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
                  ((X = F.XlH.OPEN),
                      ($ = {}),
                      null != e.guild && null != o && o.id === e.guild.id && (u = o = (0, O.Y1)(e.guild, u)));
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  ((X = F.XlH.OPEN), (t = t ?? (0, v.x)()), (i = null), (W = e.errors ?? {}));
              },
              GUILD_SETTINGS_SET_SECTION: ec,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  r = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  ((ea = e.bans.reduce(
                      (e, n) => (null != n.user && null != n.user.id && e.set(n.user.id, n), e),
                      new Map(),
                  )),
                      es++);
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: n, guildId: l } = e;
                  ((ed !== l || null == ea) && ((ed = l), (ea = new Map())),
                      (ea = n.reduce((e, n) => (null != n.user && null != n.user.id && e.set(n.user.id, n), e), ea)),
                      es++);
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  eI = e.invites.reduce((e, n) => ((e[n.code] = eG(n)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  ((x = !0), (J = Z = e.enabled), (q = z = e.channelId));
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  ((ee = e.code ?? null), (en = e.uses));
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: n } = e;
                  el = n;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: n } = e;
                  d = n ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  eE = e.integrations;
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                  let { guildId: n } = e;
                  if (null == o || n !== o.id) return !1;
                  o = (0, U.hZ)(
                      o,
                      "features",
                      new Set([...o.features, F.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: n } = e;
                  if (null == o || n !== o.id) return !1;
                  o = (0, U.hZ)(
                      o,
                      "features",
                      new Set([...o.features, F.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: n, guildId: l } = e;
                  if (null == ea || null == o || o.id !== l) return !1;
                  (ea.set(n.id, { user: n, reason: null }), es++);
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: n, guildId: l } = e;
                  if (null == ea || null == o || o.id !== l) return !1;
                  (ea.delete(n.id), es++);
              },
              GUILD_ROLE_CREATE: function (e) {
                  let { guildId: n } = e;
                  if (!e_(n)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                  let { guildId: n } = e;
                  if (!e_(n)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                  let { guildId: n, roleId: l } = e;
                  if (!e_(n)) return !1;
                  d === l && (d = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  {
                      let e = p.A.getGuild(o.id);
                      if (null == e) return !1;
                      if (
                          ((a = A.A.getProfile(o.id)),
                          t === F.BEX.PROFILE || t === F.BEX.TAG || (0, P.HU)(s, a) || (s = a),
                          t === F.BEX.PROFILE)
                      ) {
                          ((u = e), (o = e));
                          return;
                      }
                      let n = (u = e),
                          l = { ...o };
                      (V.forEach((t) => {
                          if (
                              !w.has(t) &&
                              (("rulesChannelId" !== t && "publicUpdatesChannelId" !== t) || l[t] !== B.SP) &&
                              "features" !== t
                          ) {
                              if ("ownerConfiguredContentLevel" === t) {
                                  n = (0, U.hZ)(n, t, e[t]);
                                  return;
                              }
                              n = (0, U.hZ)(n, t, l[t]);
                          }
                      }),
                          (o = n));
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  eT();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: n } = e;
                  if (n.id !== o?.id || (0, P.HU)(s, a)) return !1;
                  a = s = n;
              },
              GUILD_PROFILE_UPDATE: eD,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: n } = e;
                  if (s?.id == null || !e_(s.id)) return !1;
                  n.id === o?.id && ((a = s = n), (j = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eL,
              GUILD_PROFILE_UPDATE_VISIBILITY: eD,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: n } = e;
                  if (s?.id == null || !e_(s.id)) return !1;
                  n === o?.id && ((a = s = A.A.getProfile(n)), (j = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eL,
              USER_CONNECTIONS_UPDATE: ef,
              GUILD_INTEGRATIONS_UPDATE: ef,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  ((eI = { ...eI }), delete eI[e.code]);
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  eI = { ...eI, [e.invite.code]: eG(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: n, metadata: l } = e;
                  null != o &&
                      n === o.id &&
                      (!1 === er && (er = !0),
                      (eo = eu =
                          {
                              primaryCategoryId: l.primaryCategoryId ?? M.ig,
                              secondaryCategoryIds: l.secondaryCategoryIds ?? [],
                              keywords: l.keywords ?? [],
                              emojiDiscoverabilityEnabled: l.emojiDiscoverabilityEnabled ?? !0,
                              partnerActionedTimestamp: l.partnerActionedTimestamp ?? null,
                              partnerApplicationTimestamp: l.partnerApplicationTimestamp ?? null,
                              isPublished: l.isPublished ?? !1,
                              reasonsToJoin: l.reasonsToJoin ?? [],
                              socialLinks: l.socialLinks ?? [],
                              about: l.about ?? "",
                          }),
                      (W = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  eu = eo = ei;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: n, categoryId: l } = e;
                  null != o &&
                      n === o.id &&
                      ((eo = { ...eo, secondaryCategoryIds: [...eo.secondaryCategoryIds, l] }),
                      (eu = { ...eu, secondaryCategoryIds: [...eu.secondaryCategoryIds, l] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let n,
                      { guildId: l, categoryId: t } = e;
                  if (null == o || l !== o.id) return;
                  let i = eo.secondaryCategoryIds.indexOf(t);
                  (-1 !== i &&
                      ((n = [...eo.secondaryCategoryIds]).splice(i, 1), (eo = { ...eo, secondaryCategoryIds: n })),
                      -1 !== (i = eu.secondaryCategoryIds.indexOf(t)) &&
                          ((n = [...eu.secondaryCategoryIds]).splice(i, 1), (eu = { ...eu, secondaryCategoryIds: n })));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: n, errors: l } = e;
                  null != o && n === o.id && (W = l ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: n,
                      primaryCategoryId: l,
                      keywords: t,
                      emojiDiscoverabilityEnabled: i,
                      isPublished: r,
                      reasonsToJoin: u,
                      socialLinks: a,
                      about: s,
                  } = e;
                  null != o &&
                      n === o.id &&
                      (eo = {
                          ...eo,
                          primaryCategoryId: null != l ? l : eo.primaryCategoryId,
                          keywords: null != t ? t : eo.keywords,
                          emojiDiscoverabilityEnabled: i ?? eo.emojiDiscoverabilityEnabled,
                          isPublished: r ?? eo.isPublished,
                          reasonsToJoin: null != u ? u : eo.reasonsToJoin,
                          socialLinks: null != a ? a : eo.socialLinks,
                          about: null != s ? s : eo.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: n, errors: l } = e;
                  null != o && n === o.id && (W = l ?? {});
              },
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
                  let { slug: n } = e;
                  E = n;
              },
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
                  let {} = e;
                  E = null;
              },
              GUILD_SETTINGS_WIDGET_UPDATE: function (e) {
                  let { guildId: n, enabled: l, channelId: t } = e;
                  if (null == o || o.id !== n) return !1;
                  ((Z = l), (z = t));
              },
              GUILD_SETTINGS_GUILD_SPACE_SETTINGS_UPDATE: function (e) {
                  let { guildId: n, settings: l } = e;
                  if (null == o || o.id !== n || null == Q) return !1;
                  Q = { ...Q, ...l };
              },
              GUILD_SETTINGS_SET_GUILD_SPACE_SETTINGS: function (e) {
                  let { guildId: n, settings: l } = e;
                  if (null == o || o.id !== n) return !1;
                  K = Q = l;
              },
          },
);
