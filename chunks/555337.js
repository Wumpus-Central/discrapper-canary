let l, i, r, u, o, a, s, d, I, E;
(t(321073), t(938796));
var _ = t(435558),
    S = t.n(_),
    T = t(536637),
    c = t.n(T),
    G = t(855986),
    f = t(620632),
    D = t(506774),
    L = t(73153),
    U = t(867051),
    A = t(837011),
    g = t(95701),
    N = t(260509),
    h = t(671759),
    C = t(619019),
    p = t(71393),
    y = t(287809),
    O = t(537975),
    R = t(811091),
    P = t(794967),
    b = t(162113),
    m = t(310527),
    v = t(595818),
    F = t(652215);
t(324580);
var M = t(124759);
let B = [
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
    w = {
        icon: "iconOriginalMd5",
        banner: "bannerOriginalMd5",
        splash: "splashOriginalMd5",
        discoverySplash: "discoverySplashOriginalMd5",
    },
    H = !1,
    k = F.XlH.CLOSED,
    X = {},
    W = null,
    x = !1,
    j = !1,
    J = !1,
    Z = null,
    q = null,
    z = null,
    K = null,
    Q = {},
    $ = null,
    ee = 0,
    en = F.EkJ.NONE,
    et = null,
    el = {
        primaryCategoryId: 0,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: !0,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        automaticPages: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: "",
    },
    ei = !1,
    er = el,
    eu = el,
    eo = null,
    ea = 0,
    es = null,
    ed = null,
    eI = null;
function eE(e) {
    if (null == o || null == u || u.id !== e) return !1;
    let n = p.A.getGuild(e);
    return null != n && (u === o ? (o = u = n) : (u = n), !0);
}
function e_(e) {
    let { guildId: n, section: t, subsection: i } = e,
        r = "GUILD_SETTINGS_INIT" === e.type ? e.location : void 0,
        I = p.A.getGuild(n);
    if (null == I) return eS();
    let _ = A.A.getProfile(n);
    ((u = o = I),
        (a = s = _),
        (J = j),
        (q = Z),
        (z = K = I.guildSpaceSettings),
        (k = F.XlH.OPEN),
        (X = {}),
        (W = null),
        (d = R.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (en = o.mfaLevel),
        (eu = er),
        (E = null),
        (Q = {}),
        (et = r),
        eT({ section: t ?? l ?? (0, v.x)(), subsection: i ?? null }));
}
function eS() {
    ((H = !1),
        (k = F.XlH.CLOSED),
        (u = o = null),
        (x = !1),
        (J = !1),
        (q = null),
        (z = null),
        (K = null),
        ($ = null),
        (ee = 0),
        (eo = null),
        (ed = null),
        (eI = null),
        (l = null),
        (i = null),
        (r = null),
        (en = F.EkJ.NONE),
        (Q = {}),
        (I = void 0));
}
function eT(e) {
    if (null == o) return !1;
    let n = l;
    if (((l = e.section), (i = e.subsection), l === F.BEX.INSTANT_INVITES || l === F.BEX.INVITES))
        f.Bo.get({ url: F.Rsh.GUILD_INSTANT_INVITES(o.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            L.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (l === F.BEX.INTEGRATIONS || l === F.BEX.ROLES) {
        if (((d = null), n !== e.section)) return eG(e);
    } else
        l === F.BEX.MEMBERS
            ? (d = (0, N.af)(o))
            : l === F.BEX.VANITY_URL
              ? (0, m.Je)(o.id)
              : l === F.BEX.SAFETY &&
                L.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? F.nd0.SAFETY_OVERVIEW : i,
                });
}
function ec(e) {
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
function eG(e) {
    if (null == o || k !== F.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id)) return !1;
    (0, P.c)(o.id);
}
function ef(e) {
    let { guildId: n } = e;
    if (null == o || o.id !== n) return !1;
    W = null;
}
function eD(e) {
    let { guildId: n, error: t } = e;
    if (null == o || o.id !== n) return !1;
    W = t;
}
class eL extends G.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(p.A, A.A, y.default);
    }
    getMetadata() {
        return eu;
    }
    widgetHasChanges() {
        return !1 !== x && (J !== j || q !== Z);
    }
    guildSpaceSettingsHasChanges() {
        return K?.enabled !== z?.enabled;
    }
    hasChanges() {
        return (
            !S().isEqual(o, u) ||
            !S().isEqual(eu, er) ||
            !S().isEqual(s, a) ||
            this.widgetHasChanges() ||
            this.guildSpaceSettingsHasChanges()
        );
    }
    isOpen() {
        return H;
    }
    getSavedRouteState() {
        return I;
    }
    getSection() {
        return l;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != o ? o.id : null;
    }
    showPublicSuccessModal() {
        return !D.w.get(M.wX);
    }
    getGuild() {
        return o;
    }
    getPendingOriginalMd5s() {
        return Q;
    }
    getGuildProfile() {
        return s;
    }
    getWidget() {
        return { enabled: J, channelId: q };
    }
    getGuildSpaceSettings() {
        return K;
    }
    isSubmitting() {
        return k === F.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return ei;
    }
    getErrors() {
        return X;
    }
    getError(e) {
        return X[e] ?? null;
    }
    getProfileError() {
        return W;
    }
    getSelectedRoleId() {
        return d;
    }
    getSlug() {
        return E;
    }
    getBans() {
        return [eo, ea];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eI,
            section: l,
            subsection: i,
            errors: X,
            guild: o,
            bans: eo,
            bansVersion: ea,
            invites: ed,
            selectedRoleId: d,
            fetchedEmbed: x,
            embedEnabled: J,
            embedChannelId: q,
            guildSpaceSettings: K,
            mfaLevel: en,
            searchQuery: r,
            vanityURLCode: $,
            vanityURLUses: ee,
            originalGuild: u,
            hasChanges: this.hasChanges(),
            guildMetadata: eu,
            analyticsLocation: et,
            isGuildMetadataLoaded: ei,
            originalProfile: a,
            profile: s,
        };
    }
}
let eU = new eL(
    L.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: e_,
              GUILD_SETTINGS_OPEN: function (e) {
                  ((H = !0), e_(e));
              },
              GUILD_SETTINGS_CLOSE: eS,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let n;
                  if (null == o) return !1;
                  for (let n of (B.forEach((n) => {
                      null != o && e.hasOwnProperty(n) && (o = (0, U.hZ)(o, n, e[n] ?? null));
                  }),
                  Object.keys(w))) {
                      if (!e.hasOwnProperty(n)) continue;
                      let t = e[w[n]];
                      null != t ? (Q[n] = t) : delete Q[n];
                  }
                  null == (n = o) || B.some((e) => n[e] !== u[e]) || (o = u);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: n } = e;
                  if (null == s || null == o || o.id !== n) return !1;
                  V.forEach((n) => {
                      if (null != s && e.hasOwnProperty(n)) {
                          let t = e[n];
                          void 0 !== t && (s = { ...s, [n]: t });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: n } = e;
                  ((X = {}), (Q = {}));
                  let t = p.A.getGuild(n);
                  null != t && ((u = o = t), (K = z));
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: n } = e;
                  return ((I = n), !1);
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  ((k = F.XlH.SUBMITTING), (X = {}));
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
                  ((k = F.XlH.OPEN),
                      (Q = {}),
                      null != e.guild && null != o && o.id === e.guild.id && (u = o = (0, O.Y1)(e.guild, u)));
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  ((k = F.XlH.OPEN), (l = l ?? (0, v.x)()), (i = null), (X = e.errors ?? {}));
              },
              GUILD_SETTINGS_SET_SECTION: eT,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  r = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  ((eo = e.bans.reduce(
                      (e, n) => (null != n.user && null != n.user.id && e.set(n.user.id, n), e),
                      new Map(),
                  )),
                      ea++);
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: n, guildId: t } = e;
                  ((es !== t || null == eo) && ((es = t), (eo = new Map())),
                      (eo = n.reduce((e, n) => (null != n.user && null != n.user.id && e.set(n.user.id, n), e), eo)),
                      ea++);
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  ed = e.invites.reduce((e, n) => ((e[n.code] = ec(n)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  ((x = !0), (j = J = e.enabled), (Z = q = e.channelId));
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  (($ = e.code ?? null), (ee = e.uses));
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: n } = e;
                  en = n;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: n } = e;
                  d = n ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  eI = e.integrations;
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
                  let { user: n, guildId: t } = e;
                  if (null == eo || null == o || o.id !== t) return !1;
                  (eo.set(n.id, { user: n, reason: null }), ea++);
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: n, guildId: t } = e;
                  if (null == eo || null == o || o.id !== t) return !1;
                  (eo.delete(n.id), ea++);
              },
              GUILD_ROLE_CREATE: function (e) {
                  let { guildId: n } = e;
                  if (!eE(n)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                  let { guildId: n } = e;
                  if (!eE(n)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                  let { guildId: n, roleId: t } = e;
                  if (!eE(n)) return !1;
                  d === t && (d = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  {
                      let e = p.A.getGuild(o.id);
                      if (null == e) return !1;
                      if (
                          ((a = A.A.getProfile(o.id)),
                          l === F.BEX.PROFILE || l === F.BEX.TAG || (0, b.HU)(s, a) || (s = a),
                          l === F.BEX.PROFILE)
                      ) {
                          ((u = e), (o = e));
                          return;
                      }
                      let n = (u = e),
                          t = { ...o };
                      (B.forEach((l) => {
                          if (
                              !Y.has(l) &&
                              (("rulesChannelId" !== l && "publicUpdatesChannelId" !== l) || "1" !== t[l]) &&
                              "features" !== l
                          ) {
                              if ("ownerConfiguredContentLevel" === l) {
                                  n = (0, U.hZ)(n, l, e[l]);
                                  return;
                              }
                              n = (0, U.hZ)(n, l, t[l]);
                          }
                      }),
                          (o = n));
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  eS();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: n } = e;
                  if (n.id !== o?.id || (0, b.HU)(s, a)) return !1;
                  a = s = n;
              },
              GUILD_PROFILE_UPDATE: ef,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: n } = e;
                  if (s?.id == null || !eE(s.id)) return !1;
                  n.id === o?.id && ((a = s = n), (W = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eD,
              GUILD_PROFILE_UPDATE_VISIBILITY: ef,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: n } = e;
                  if (s?.id == null || !eE(s.id)) return !1;
                  n === o?.id && ((a = s = A.A.getProfile(n)), (W = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eD,
              USER_CONNECTIONS_UPDATE: eG,
              GUILD_INTEGRATIONS_UPDATE: eG,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  ((ed = { ...ed }), delete ed[e.code]);
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  ed = { ...ed, [e.invite.code]: ec(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: n, metadata: t } = e;
                  null != o &&
                      n === o.id &&
                      (!1 === ei && (ei = !0),
                      (eu = er =
                          {
                              primaryCategoryId: t.primaryCategoryId ?? 0,
                              secondaryCategoryIds: t.secondaryCategoryIds ?? [],
                              keywords: t.keywords ?? [],
                              emojiDiscoverabilityEnabled: t.emojiDiscoverabilityEnabled ?? !0,
                              partnerActionedTimestamp: t.partnerActionedTimestamp ?? null,
                              partnerApplicationTimestamp: t.partnerApplicationTimestamp ?? null,
                              isPublished: t.isPublished ?? !1,
                              automaticPages: t.automaticPages ?? !1,
                              reasonsToJoin: t.reasonsToJoin ?? [],
                              socialLinks: t.socialLinks ?? [],
                              about: t.about ?? "",
                          }),
                      (X = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  er = eu = el;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: n, categoryId: t } = e;
                  null != o &&
                      n === o.id &&
                      ((eu = { ...eu, secondaryCategoryIds: [...eu.secondaryCategoryIds, t] }),
                      (er = { ...er, secondaryCategoryIds: [...er.secondaryCategoryIds, t] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let n,
                      { guildId: t, categoryId: l } = e;
                  if (null == o || t !== o.id) return;
                  let i = eu.secondaryCategoryIds.indexOf(l);
                  (-1 !== i &&
                      ((n = [...eu.secondaryCategoryIds]).splice(i, 1), (eu = { ...eu, secondaryCategoryIds: n })),
                      -1 !== (i = er.secondaryCategoryIds.indexOf(l)) &&
                          ((n = [...er.secondaryCategoryIds]).splice(i, 1), (er = { ...er, secondaryCategoryIds: n })));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: n, errors: t } = e;
                  null != o && n === o.id && (X = t ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: n,
                      primaryCategoryId: t,
                      keywords: l,
                      emojiDiscoverabilityEnabled: i,
                      isPublished: r,
                      reasonsToJoin: u,
                      socialLinks: a,
                      about: s,
                  } = e;
                  null != o &&
                      n === o.id &&
                      (eu = {
                          ...eu,
                          primaryCategoryId: null != t ? t : eu.primaryCategoryId,
                          keywords: null != l ? l : eu.keywords,
                          emojiDiscoverabilityEnabled: i ?? eu.emojiDiscoverabilityEnabled,
                          isPublished: r ?? eu.isPublished,
                          reasonsToJoin: null != u ? u : eu.reasonsToJoin,
                          socialLinks: null != a ? a : eu.socialLinks,
                          about: null != s ? s : eu.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: n, errors: t } = e;
                  null != o && n === o.id && (X = t ?? {});
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
                  let { guildId: n, enabled: t, channelId: l } = e;
                  if (null == o || o.id !== n) return !1;
                  ((J = t), (q = l));
              },
              GUILD_SETTINGS_GUILD_SPACE_SETTINGS_UPDATE: function (e) {
                  let { guildId: n, settings: t } = e;
                  if (null == o || o.id !== n || null == K) return !1;
                  K = { ...K, ...t };
              },
              GUILD_SETTINGS_SET_GUILD_SPACE_SETTINGS: function (e) {
                  let { guildId: n, settings: t } = e;
                  if (null == o || o.id !== n) return !1;
                  z = K = t;
              },
          },
);
t.d(n, {}, { A: eU });
