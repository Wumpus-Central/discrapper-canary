let n, l, i, o, a, s, u, E, d, I;
r.d(t, { A: () => eG }), r(938796);
var _ = r(735438),
    c = r.n(_),
    S = r(989349),
    T = r.n(S),
    A = r(17928),
    h = r(636537),
    G = r(506774),
    p = r(228366),
    D = r(867051),
    L = r(837011),
    N = r(95701),
    f = r(260509),
    U = r(671759),
    y = r(889227),
    R = r(71393),
    g = r(287809),
    O = r(860689),
    C = r(935208),
    m = r(794967),
    M = r(310527),
    b = r(595818),
    P = r(652215),
    v = r(324580),
    B = r(124759);
let F = [
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
    x = [
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
    V = {
        icon: "iconOriginalMd5",
        banner: "bannerOriginalMd5",
        splash: "splashOriginalMd5",
        discoverySplash: "discoverySplashOriginalMd5",
    },
    Y = !1,
    j = P.XlH.CLOSED,
    W = {},
    k = null,
    H = !1,
    X = !1,
    J = !1,
    $ = null,
    K = null,
    q = {},
    z = null,
    Q = 0,
    Z = P.EkJ.NONE,
    ee = null,
    et = {
        primaryCategoryId: v.ig,
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
    en = et,
    el = et,
    ei = null,
    eo = 0,
    ea = null,
    es = null,
    eu = null;
function eE(e) {
    if (null == a || null == o || o.id !== e) return !1;
    let t = R.A.getGuild(e);
    return null != t && (o === a ? (a = o = t) : (o = t), !0);
}
function ed(e) {
    let { guildId: t, section: r, subsection: l, location: i } = e,
        d = R.A.getGuild(t);
    if (null == d) return eI();
    let _ = L.A.getProfile(t);
    (o = a = d),
        (s = u = _),
        (J = X),
        (K = $),
        (j = P.XlH.OPEN),
        (W = {}),
        (k = null),
        (E = C.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (Z = a.mfaLevel),
        (el = en),
        (I = null),
        (q = {}),
        (ee = i),
        e_({ section: r ?? n ?? (0, b.x)(), subsection: l ?? null });
}
function eI() {
    (Y = !1),
        (j = P.XlH.CLOSED),
        (o = a = null),
        (H = !1),
        (J = !1),
        (K = null),
        (z = null),
        (Q = 0),
        (ei = null),
        (es = null),
        (eu = null),
        (n = null),
        (l = null),
        (i = null),
        (Z = P.EkJ.NONE),
        (q = {}),
        (d = void 0);
}
function e_(e) {
    if (null == a) return !1;
    let t = n;
    if (((n = e.section), (l = e.subsection), n === P.BEX.INSTANT_INVITES || n === P.BEX.INVITES))
        h.Bo.get({ url: P.Rsh.GUILD_INSTANT_INVITES(a.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            p.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (n === P.BEX.INTEGRATIONS || n === P.BEX.ROLES) {
        if (((E = null), t !== e.section)) return eS(e);
    } else
        n === P.BEX.MEMBERS
            ? (E = (0, f.af)(a))
            : n === P.BEX.VANITY_URL
              ? (0, M.Je)(a.id)
              : n === P.BEX.SAFETY &&
                p.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == l ? P.nd0.SAFETY_OVERVIEW : l,
                });
}
function ec(e) {
    return new U.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new y.A(e.inviter) : null,
        channel: (0, N.OY)(e.channel),
        guild: null != e.guild ? (0, O.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: T()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function eS(e) {
    if (null == a || j !== P.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== a.id)) return !1;
    (0, m.c)(a.id);
}
function eT(e) {
    let { guildId: t } = e;
    if (null == a || a.id !== t) return !1;
    k = null;
}
function eA(e) {
    let { guildId: t, error: r } = e;
    if (null == a || a.id !== t) return !1;
    k = r;
}
class eh extends A.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(R.A, L.A, g.default);
    }
    getMetadata() {
        return el;
    }
    widgetHasChanges() {
        return !1 !== H && (J !== X || K !== $);
    }
    hasChanges() {
        return !c().isEqual(a, o) || !c().isEqual(el, en) || !c().isEqual(u, s) || this.widgetHasChanges();
    }
    isOpen() {
        return Y;
    }
    getSavedRouteState() {
        return d;
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
        return !G.w.get(B.wX);
    }
    getGuild() {
        return a;
    }
    getPendingOriginalMd5s() {
        return q;
    }
    getGuildProfile() {
        return u;
    }
    getWidget() {
        return { enabled: J, channelId: K };
    }
    isSubmitting() {
        return j === P.XlH.SUBMITTING;
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
        return k;
    }
    getSelectedRoleId() {
        return E;
    }
    getSlug() {
        return I;
    }
    getBans() {
        return [ei, eo];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eu,
            section: n,
            subsection: l,
            errors: W,
            guild: a,
            bans: ei,
            bansVersion: eo,
            invites: es,
            selectedRoleId: E,
            fetchedEmbed: H,
            embedEnabled: J,
            embedChannelId: K,
            mfaLevel: Z,
            searchQuery: i,
            vanityURLCode: z,
            vanityURLUses: Q,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: el,
            analyticsLocation: ee,
            isGuildMetadataLoaded: er,
            originalProfile: s,
            profile: u,
        };
    }
}
let eG = new eh(
    p.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ed,
              GUILD_SETTINGS_OPEN: function (e) {
                  (Y = !0), ed(e);
              },
              GUILD_SETTINGS_CLOSE: eI,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let t;
                  if (null == a) return !1;
                  for (let t of (F.forEach((t) => {
                      null != a && e.hasOwnProperty(t) && (a = (0, D.hZ)(a, t, e[t] ?? null));
                  }),
                  Object.keys(V))) {
                      if (!e.hasOwnProperty(t)) continue;
                      let r = e[V[t]];
                      null != r ? (q[t] = r) : delete q[t];
                  }
                  null == (t = a) || F.some((e) => t[e] !== o[e]) || (a = o);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (null == u || null == a || a.id !== t) return !1;
                  x.forEach((t) => {
                      if (null != u && e.hasOwnProperty(t)) {
                          let r = e[t];
                          void 0 !== r && (u = { ...u, [t]: r });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: t } = e;
                  (W = {}), (q = {});
                  let r = R.A.getGuild(t);
                  null != r && (o = a = r);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: t } = e;
                  return (d = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (j = P.XlH.SUBMITTING), (W = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                  (j = P.XlH.OPEN), (q = {});
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (j = P.XlH.OPEN), (n = n ?? (0, b.x)()), (l = null), (W = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: e_,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  i = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (ei = e.bans.reduce(
                      (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                      new Map(),
                  )),
                      eo++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: t, guildId: r } = e;
                  (ea !== r || null == ei) && ((ea = r), (ei = new Map())),
                      (ei = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ei)),
                      eo++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  es = e.invites.reduce((e, t) => ((e[t.code] = ec(t)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  (H = !0), (X = J = e.enabled), ($ = K = e.channelId);
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  (z = e.code ?? null), (Q = e.uses);
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: t } = e;
                  Z = t;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: t } = e;
                  E = t ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  eu = e.integrations;
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == a || t !== a.id) return !1;
                  a = (0, D.hZ)(
                      a,
                      "features",
                      new Set([...a.features, P.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == a || t !== a.id) return !1;
                  a = (0, D.hZ)(
                      a,
                      "features",
                      new Set([...a.features, P.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: t, guildId: r } = e;
                  if (null == ei || null == a || a.id !== r) return !1;
                  ei.set(t.id, { user: t, reason: null }), eo++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: r } = e;
                  if (null == ei || null == a || a.id !== r) return !1;
                  ei.delete(t.id), eo++;
              },
              GUILD_ROLE_CREATE: function (e) {
                  let { guildId: t } = e;
                  if (!eE(t)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (!eE(t)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                  let { guildId: t, roleId: r } = e;
                  if (!eE(t)) return !1;
                  E === r && (E = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == a || a.id !== e.guild.id) return !1;
                  {
                      let e = R.A.getGuild(a.id);
                      if (null == e) return !1;
                      if (
                          ((s = L.A.getProfile(a.id)),
                          n !== P.BEX.PROFILE && n !== P.BEX.TAG && (u = s),
                          n === P.BEX.PROFILE)
                      ) {
                          (o = e), (a = e);
                          return;
                      }
                      let t = (o = e),
                          r = { ...a };
                      F.forEach((n) => {
                          if (
                              !w.has(n) &&
                              (("rulesChannelId" !== n && "publicUpdatesChannelId" !== n) || r[n] !== B.SP) &&
                              "features" !== n
                          ) {
                              if ("ownerConfiguredContentLevel" === n) {
                                  t = (0, D.hZ)(t, n, e[n]);
                                  return;
                              }
                              t = (0, D.hZ)(t, n, r[n]);
                          }
                      }),
                          (a = t);
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == a || a.id !== e.guild.id) return !1;
                  eI();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: t } = e;
                  t.id === a?.id && (s = u = t);
              },
              GUILD_PROFILE_UPDATE: eT,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (u?.id == null || !eE(u.id)) return !1;
                  t.id === a?.id && ((s = u = t), (k = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eA,
              GUILD_PROFILE_UPDATE_VISIBILITY: eT,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (u?.id == null || !eE(u.id)) return !1;
                  t === a?.id && ((s = u = L.A.getProfile(t)), (k = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eA,
              USER_CONNECTIONS_UPDATE: eS,
              GUILD_INTEGRATIONS_UPDATE: eS,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (es = { ...es }), delete es[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  es = { ...es, [e.invite.code]: ec(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: t, metadata: r } = e;
                  null != a &&
                      t === a.id &&
                      (!1 === er && (er = !0),
                      (el = en =
                          {
                              primaryCategoryId: r.primaryCategoryId ?? v.ig,
                              secondaryCategoryIds: r.secondaryCategoryIds ?? [],
                              keywords: r.keywords ?? [],
                              emojiDiscoverabilityEnabled: r.emojiDiscoverabilityEnabled ?? !0,
                              partnerActionedTimestamp: r.partnerActionedTimestamp ?? null,
                              partnerApplicationTimestamp: r.partnerApplicationTimestamp ?? null,
                              isPublished: r.isPublished ?? !1,
                              reasonsToJoin: r.reasonsToJoin ?? [],
                              socialLinks: r.socialLinks ?? [],
                              about: r.about ?? "",
                          }),
                      (W = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  en = el = et;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: t, categoryId: r } = e;
                  null != a &&
                      t === a.id &&
                      ((el = { ...el, secondaryCategoryIds: [...el.secondaryCategoryIds, r] }),
                      (en = { ...en, secondaryCategoryIds: [...en.secondaryCategoryIds, r] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let t,
                      { guildId: r, categoryId: n } = e;
                  if (null == a || r !== a.id) return;
                  let l = el.secondaryCategoryIds.indexOf(n);
                  -1 !== l &&
                      ((t = [...el.secondaryCategoryIds]).splice(l, 1), (el = { ...el, secondaryCategoryIds: t })),
                      -1 !== (l = en.secondaryCategoryIds.indexOf(n)) &&
                          ((t = [...en.secondaryCategoryIds]).splice(l, 1), (en = { ...en, secondaryCategoryIds: t }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: t, errors: r } = e;
                  null != a && t === a.id && (W = r ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: t,
                      primaryCategoryId: r,
                      keywords: n,
                      emojiDiscoverabilityEnabled: l,
                      isPublished: i,
                      reasonsToJoin: o,
                      socialLinks: s,
                      about: u,
                  } = e;
                  null != a &&
                      t === a.id &&
                      (el = {
                          ...el,
                          primaryCategoryId: null != r ? r : el.primaryCategoryId,
                          keywords: null != n ? n : el.keywords,
                          emojiDiscoverabilityEnabled: l ?? el.emojiDiscoverabilityEnabled,
                          isPublished: i ?? el.isPublished,
                          reasonsToJoin: null != o ? o : el.reasonsToJoin,
                          socialLinks: null != s ? s : el.socialLinks,
                          about: null != u ? u : el.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: t, errors: r } = e;
                  null != a && t === a.id && (W = r ?? {});
              },
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
                  let { slug: t } = e;
                  I = t;
              },
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
                  let {} = e;
                  I = null;
              },
              GUILD_SETTINGS_WIDGET_UPDATE: function (e) {
                  let { guildId: t, enabled: r, channelId: n } = e;
                  if (null == a || a.id !== t) return !1;
                  (J = r), (K = n);
              },
          },
);
