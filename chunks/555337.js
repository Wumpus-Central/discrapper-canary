let n, i, l, o, a, E, s, d, u, _;
t.d(r, { A: () => eA }), t(321073), t(938796);
var I = t(435558),
    c = t.n(I),
    S = t(989349),
    T = t.n(S),
    G = t(17928),
    h = t(636537),
    D = t(506774),
    A = t(228366),
    L = t(867051),
    p = t(837011),
    U = t(95701),
    f = t(260509),
    N = t(671759),
    R = t(889227),
    y = t(71393),
    g = t(287809),
    O = t(149790),
    C = t(935208),
    m = t(794967),
    b = t(557193),
    M = t(310527),
    P = t(595818),
    B = t(652215),
    F = t(324580),
    v = t(124759);
let w = [
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
    V = [
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
    Y = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    k = {
        icon: "iconOriginalMd5",
        banner: "bannerOriginalMd5",
        splash: "splashOriginalMd5",
        discoverySplash: "discoverySplashOriginalMd5",
    },
    W = !1,
    H = B.XlH.CLOSED,
    X = {},
    x = null,
    j = !1,
    J = !1,
    K = !1,
    q = null,
    Z = null,
    Q = {},
    z = null,
    $ = 0,
    ee = B.EkJ.NONE,
    er = null,
    et = {
        primaryCategoryId: F.ig,
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
    en = !1,
    ei = et,
    el = et,
    eo = null,
    ea = 0,
    eE = null,
    es = null,
    ed = null;
function eu(e) {
    if (null == a || null == o || o.id !== e) return !1;
    let r = y.A.getGuild(e);
    return null != r && (o === a ? (a = o = r) : (o = r), !0);
}
function e_(e) {
    let { guildId: r, section: t, subsection: i, location: l } = e,
        u = y.A.getGuild(r);
    if (null == u) return eI();
    let I = p.A.getProfile(r);
    (o = a = u),
        (E = s = I),
        (K = J),
        (Z = q),
        (H = B.XlH.OPEN),
        (X = {}),
        (x = null),
        (d = C.default.castGuildIdAsEveryoneGuildRoleId(r)),
        (ee = a.mfaLevel),
        (el = ei),
        (_ = null),
        (Q = {}),
        (er = l),
        ec({ section: t ?? n ?? (0, P.x)(), subsection: i ?? null });
}
function eI() {
    (W = !1),
        (H = B.XlH.CLOSED),
        (o = a = null),
        (j = !1),
        (K = !1),
        (Z = null),
        (z = null),
        ($ = 0),
        (eo = null),
        (es = null),
        (ed = null),
        (n = null),
        (i = null),
        (l = null),
        (ee = B.EkJ.NONE),
        (Q = {}),
        (u = void 0);
}
function ec(e) {
    if (null == a) return !1;
    let r = n;
    if (((n = e.section), (i = e.subsection), n === B.BEX.INSTANT_INVITES || n === B.BEX.INVITES))
        h.Bo.get({ url: B.Rsh.GUILD_INSTANT_INVITES(a.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            A.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (n === B.BEX.INTEGRATIONS || n === B.BEX.ROLES) {
        if (((d = null), r !== e.section)) return eT(e);
    } else
        n === B.BEX.MEMBERS
            ? (d = (0, f.af)(a))
            : n === B.BEX.VANITY_URL
              ? (0, M.Je)(a.id)
              : n === B.BEX.SAFETY &&
                A.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? B.nd0.SAFETY_OVERVIEW : i,
                });
}
function eS(e) {
    return new N.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new R.A(e.inviter) : null,
        channel: (0, U.OY)(e.channel),
        guild: null != e.guild ? (0, O.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: T()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function eT(e) {
    if (null == a || H !== B.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== a.id)) return !1;
    (0, m.c)(a.id);
}
function eG(e) {
    let { guildId: r } = e;
    if (null == a || a.id !== r) return !1;
    x = null;
}
function eh(e) {
    let { guildId: r, error: t } = e;
    if (null == a || a.id !== r) return !1;
    x = t;
}
class eD extends G.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(y.A, p.A, g.default);
    }
    getMetadata() {
        return el;
    }
    widgetHasChanges() {
        return !1 !== j && (K !== J || Z !== q);
    }
    hasChanges() {
        return !c().isEqual(a, o) || !c().isEqual(el, ei) || !c().isEqual(s, E) || this.widgetHasChanges();
    }
    isOpen() {
        return W;
    }
    getSavedRouteState() {
        return u;
    }
    getSection() {
        return n;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != a ? a.id : null;
    }
    showPublicSuccessModal() {
        return !D.w.get(v.wX);
    }
    getGuild() {
        return a;
    }
    getPendingOriginalMd5s() {
        return Q;
    }
    getGuildProfile() {
        return s;
    }
    getWidget() {
        return { enabled: K, channelId: Z };
    }
    isSubmitting() {
        return H === B.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return en;
    }
    getErrors() {
        return X;
    }
    getError(e) {
        return X[e] ?? null;
    }
    getProfileError() {
        return x;
    }
    getSelectedRoleId() {
        return d;
    }
    getSlug() {
        return _;
    }
    getBans() {
        return [eo, ea];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ed,
            section: n,
            subsection: i,
            errors: X,
            guild: a,
            bans: eo,
            bansVersion: ea,
            invites: es,
            selectedRoleId: d,
            fetchedEmbed: j,
            embedEnabled: K,
            embedChannelId: Z,
            mfaLevel: ee,
            searchQuery: l,
            vanityURLCode: z,
            vanityURLUses: $,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: el,
            analyticsLocation: er,
            isGuildMetadataLoaded: en,
            originalProfile: E,
            profile: s,
        };
    }
}
let eA = new eD(
    A.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: e_,
              GUILD_SETTINGS_OPEN: function (e) {
                  (W = !0), e_(e);
              },
              GUILD_SETTINGS_CLOSE: eI,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let r;
                  if (null == a) return !1;
                  for (let r of (w.forEach((r) => {
                      null != a && e.hasOwnProperty(r) && (a = (0, L.hZ)(a, r, e[r] ?? null));
                  }),
                  Object.keys(k))) {
                      if (!e.hasOwnProperty(r)) continue;
                      let t = e[k[r]];
                      null != t ? (Q[r] = t) : delete Q[r];
                  }
                  null == (r = a) || w.some((e) => r[e] !== o[e]) || (a = o);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: r } = e;
                  if (null == s || null == a || a.id !== r) return !1;
                  V.forEach((r) => {
                      if (null != s && e.hasOwnProperty(r)) {
                          let t = e[r];
                          void 0 !== t && (s = { ...s, [r]: t });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: r } = e;
                  (X = {}), (Q = {});
                  let t = y.A.getGuild(r);
                  null != t && (o = a = t);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: r } = e;
                  return (u = r), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (H = B.XlH.SUBMITTING), (X = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
                  (H = B.XlH.OPEN),
                      (Q = {}),
                      null != e.guild && null != a && a.id === e.guild.id && (o = a = (0, O.Y1)(e.guild, o));
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (H = B.XlH.OPEN), (n = n ?? (0, P.x)()), (i = null), (X = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: ec,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  l = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (eo = e.bans.reduce(
                      (e, r) => (null != r.user && null != r.user.id && e.set(r.user.id, r), e),
                      new Map(),
                  )),
                      ea++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: r, guildId: t } = e;
                  (eE !== t || null == eo) && ((eE = t), (eo = new Map())),
                      (eo = r.reduce((e, r) => (null != r.user && null != r.user.id && e.set(r.user.id, r), e), eo)),
                      ea++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  es = e.invites.reduce((e, r) => ((e[r.code] = eS(r)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  (j = !0), (J = K = e.enabled), (q = Z = e.channelId);
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  (z = e.code ?? null), ($ = e.uses);
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: r } = e;
                  ee = r;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: r } = e;
                  d = r ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  ed = e.integrations;
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                  let { guildId: r } = e;
                  if (null == a || r !== a.id) return !1;
                  a = (0, L.hZ)(
                      a,
                      "features",
                      new Set([...a.features, B.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: r } = e;
                  if (null == a || r !== a.id) return !1;
                  a = (0, L.hZ)(
                      a,
                      "features",
                      new Set([...a.features, B.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: r, guildId: t } = e;
                  if (null == eo || null == a || a.id !== t) return !1;
                  eo.set(r.id, { user: r, reason: null }), ea++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: r, guildId: t } = e;
                  if (null == eo || null == a || a.id !== t) return !1;
                  eo.delete(r.id), ea++;
              },
              GUILD_ROLE_CREATE: function (e) {
                  let { guildId: r } = e;
                  if (!eu(r)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                  let { guildId: r } = e;
                  if (!eu(r)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                  let { guildId: r, roleId: t } = e;
                  if (!eu(r)) return !1;
                  d === t && (d = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == a || a.id !== e.guild.id) return !1;
                  {
                      let e = y.A.getGuild(a.id);
                      if (null == e) return !1;
                      if (
                          ((E = p.A.getProfile(a.id)),
                          n === B.BEX.PROFILE || n === B.BEX.TAG || (0, b.HU)(s, E) || (s = E),
                          n === B.BEX.PROFILE)
                      ) {
                          (o = e), (a = e);
                          return;
                      }
                      let r = (o = e),
                          t = { ...a };
                      w.forEach((n) => {
                          if (
                              !Y.has(n) &&
                              (("rulesChannelId" !== n && "publicUpdatesChannelId" !== n) || t[n] !== v.SP) &&
                              "features" !== n
                          ) {
                              if ("ownerConfiguredContentLevel" === n) {
                                  r = (0, L.hZ)(r, n, e[n]);
                                  return;
                              }
                              r = (0, L.hZ)(r, n, t[n]);
                          }
                      }),
                          (a = r);
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == a || a.id !== e.guild.id) return !1;
                  eI();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: r } = e;
                  if (r.id !== a?.id || (0, b.HU)(s, E)) return !1;
                  E = s = r;
              },
              GUILD_PROFILE_UPDATE: eG,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: r } = e;
                  if (s?.id == null || !eu(s.id)) return !1;
                  r.id === a?.id && ((E = s = r), (x = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eh,
              GUILD_PROFILE_UPDATE_VISIBILITY: eG,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: r } = e;
                  if (s?.id == null || !eu(s.id)) return !1;
                  r === a?.id && ((E = s = p.A.getProfile(r)), (x = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eh,
              USER_CONNECTIONS_UPDATE: eT,
              GUILD_INTEGRATIONS_UPDATE: eT,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (es = { ...es }), delete es[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  es = { ...es, [e.invite.code]: eS(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: r, metadata: t } = e;
                  null != a &&
                      r === a.id &&
                      (!1 === en && (en = !0),
                      (el = ei =
                          {
                              primaryCategoryId: t.primaryCategoryId ?? F.ig,
                              secondaryCategoryIds: t.secondaryCategoryIds ?? [],
                              keywords: t.keywords ?? [],
                              emojiDiscoverabilityEnabled: t.emojiDiscoverabilityEnabled ?? !0,
                              partnerActionedTimestamp: t.partnerActionedTimestamp ?? null,
                              partnerApplicationTimestamp: t.partnerApplicationTimestamp ?? null,
                              isPublished: t.isPublished ?? !1,
                              reasonsToJoin: t.reasonsToJoin ?? [],
                              socialLinks: t.socialLinks ?? [],
                              about: t.about ?? "",
                          }),
                      (X = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  ei = el = et;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: r, categoryId: t } = e;
                  null != a &&
                      r === a.id &&
                      ((el = { ...el, secondaryCategoryIds: [...el.secondaryCategoryIds, t] }),
                      (ei = { ...ei, secondaryCategoryIds: [...ei.secondaryCategoryIds, t] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let r,
                      { guildId: t, categoryId: n } = e;
                  if (null == a || t !== a.id) return;
                  let i = el.secondaryCategoryIds.indexOf(n);
                  -1 !== i &&
                      ((r = [...el.secondaryCategoryIds]).splice(i, 1), (el = { ...el, secondaryCategoryIds: r })),
                      -1 !== (i = ei.secondaryCategoryIds.indexOf(n)) &&
                          ((r = [...ei.secondaryCategoryIds]).splice(i, 1), (ei = { ...ei, secondaryCategoryIds: r }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: r, errors: t } = e;
                  null != a && r === a.id && (X = t ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: r,
                      primaryCategoryId: t,
                      keywords: n,
                      emojiDiscoverabilityEnabled: i,
                      isPublished: l,
                      reasonsToJoin: o,
                      socialLinks: E,
                      about: s,
                  } = e;
                  null != a &&
                      r === a.id &&
                      (el = {
                          ...el,
                          primaryCategoryId: null != t ? t : el.primaryCategoryId,
                          keywords: null != n ? n : el.keywords,
                          emojiDiscoverabilityEnabled: i ?? el.emojiDiscoverabilityEnabled,
                          isPublished: l ?? el.isPublished,
                          reasonsToJoin: null != o ? o : el.reasonsToJoin,
                          socialLinks: null != E ? E : el.socialLinks,
                          about: null != s ? s : el.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: r, errors: t } = e;
                  null != a && r === a.id && (X = t ?? {});
              },
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
                  let { slug: r } = e;
                  _ = r;
              },
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
                  let {} = e;
                  _ = null;
              },
              GUILD_SETTINGS_WIDGET_UPDATE: function (e) {
                  let { guildId: r, enabled: t, channelId: n } = e;
                  if (null == a || a.id !== r) return !1;
                  (K = t), (Z = n);
              },
          },
);
