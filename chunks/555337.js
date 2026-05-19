"use strict";
let i, r, s, a, o, l, u, c, d, _;
n.d(t, { A: () => eA }), n(938796);
var f = n(735438),
    h = n.n(f),
    p = n(989349),
    E = n.n(p),
    m = n(17928),
    g = n(636537),
    A = n(506774),
    I = n(228366),
    T = n(867051),
    S = n(837011),
    N = n(95701),
    y = n(260509),
    C = n(671759),
    v = n(889227),
    O = n(71393),
    R = n(287809),
    b = n(860689),
    D = n(935208),
    L = n(794967),
    w = n(310527),
    M = n(595818),
    P = n(652215),
    x = n(324580),
    U = n(124759);
let k = [
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
    G = [
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
    F = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    V = {
        icon: "iconOriginalMd5",
        banner: "bannerOriginalMd5",
        splash: "splashOriginalMd5",
        discoverySplash: "discoverySplashOriginalMd5",
    },
    B = !1,
    H = P.XlH.CLOSED,
    j = {},
    Y = null,
    W = !1,
    K = !1,
    z = !1,
    $ = null,
    q = null,
    Z = {},
    X = null,
    Q = 0,
    J = P.EkJ.NONE,
    ee = null,
    et = {
        primaryCategoryId: x.ig,
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
    er = et,
    es = null,
    ea = 0,
    eo = null,
    el = null,
    eu = null;
function ec(e) {
    if (null == o || null == a || a.id !== e) return !1;
    let t = O.A.getGuild(e);
    return null != t && (a === o ? (o = a = t) : (a = t), !0);
}
function ed(e) {
    let { guildId: t, section: n, subsection: r, location: s } = e,
        d = O.A.getGuild(t);
    if (null == d) return e_();
    let f = S.A.getProfile(t);
    (a = o = d),
        (l = u = f),
        (z = K),
        (q = $),
        (H = P.XlH.OPEN),
        (j = {}),
        (Y = null),
        (c = D.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (J = o.mfaLevel),
        (er = ei),
        (_ = null),
        (Z = {}),
        (ee = s),
        ef({ section: n ?? i ?? (0, M.x)(), subsection: r ?? null });
}
function e_() {
    (B = !1),
        (H = P.XlH.CLOSED),
        (a = o = null),
        (W = !1),
        (z = !1),
        (q = null),
        (X = null),
        (Q = 0),
        (es = null),
        (el = null),
        (eu = null),
        (i = null),
        (r = null),
        (s = null),
        (J = P.EkJ.NONE),
        (Z = {}),
        (d = void 0);
}
function ef(e) {
    if (null == o) return !1;
    let t = i;
    if (((i = e.section), (r = e.subsection), i === P.BEX.INSTANT_INVITES || i === P.BEX.INVITES))
        g.Bo.get({ url: P.Rsh.GUILD_INSTANT_INVITES(o.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            I.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (i === P.BEX.INTEGRATIONS || i === P.BEX.ROLES) {
        if (((c = null), t !== e.section)) return ep(e);
    } else
        i === P.BEX.MEMBERS
            ? (c = (0, y.af)(o))
            : i === P.BEX.VANITY_URL
              ? (0, w.Je)(o.id)
              : i === P.BEX.SAFETY &&
                I.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == r ? P.nd0.SAFETY_OVERVIEW : r,
                });
}
function eh(e) {
    return new C.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new v.A(e.inviter) : null,
        channel: (0, N.OY)(e.channel),
        guild: null != e.guild ? (0, b.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: E()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function ep(e) {
    if (null == o || H !== P.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id)) return !1;
    (0, L.c)(o.id);
}
function eE(e) {
    let { guildId: t } = e;
    if (null == o || o.id !== t) return !1;
    Y = null;
}
function em(e) {
    let { guildId: t, error: n } = e;
    if (null == o || o.id !== t) return !1;
    Y = n;
}
class eg extends m.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(O.A, S.A, R.default);
    }
    getMetadata() {
        return er;
    }
    widgetHasChanges() {
        return !1 !== W && (z !== K || q !== $);
    }
    hasChanges() {
        return !h().isEqual(o, a) || !h().isEqual(er, ei) || !h().isEqual(u, l) || this.widgetHasChanges();
    }
    isOpen() {
        return B;
    }
    getSavedRouteState() {
        return d;
    }
    getSection() {
        return i;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != o ? o.id : null;
    }
    showPublicSuccessModal() {
        return !A.w.get(U.wX);
    }
    getGuild() {
        return o;
    }
    getPendingOriginalMd5s() {
        return Z;
    }
    getGuildProfile() {
        return u;
    }
    getWidget() {
        return { enabled: z, channelId: q };
    }
    isSubmitting() {
        return H === P.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return en;
    }
    getErrors() {
        return j;
    }
    getError(e) {
        return j[e] ?? null;
    }
    getProfileError() {
        return Y;
    }
    getSelectedRoleId() {
        return c;
    }
    getSlug() {
        return _;
    }
    getBans() {
        return [es, ea];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eu,
            section: i,
            subsection: r,
            errors: j,
            guild: o,
            bans: es,
            bansVersion: ea,
            invites: el,
            selectedRoleId: c,
            fetchedEmbed: W,
            embedEnabled: z,
            embedChannelId: q,
            mfaLevel: J,
            searchQuery: s,
            vanityURLCode: X,
            vanityURLUses: Q,
            originalGuild: a,
            hasChanges: this.hasChanges(),
            guildMetadata: er,
            analyticsLocation: ee,
            isGuildMetadataLoaded: en,
            originalProfile: l,
            profile: u,
        };
    }
}
let eA = new eg(
    I.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ed,
              GUILD_SETTINGS_OPEN: function (e) {
                  (B = !0), ed(e);
              },
              GUILD_SETTINGS_CLOSE: e_,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let t;
                  if (null == o) return !1;
                  for (let t of (k.forEach((t) => {
                      null != o && e.hasOwnProperty(t) && (o = (0, T.hZ)(o, t, e[t] ?? null));
                  }),
                  Object.keys(V))) {
                      if (!e.hasOwnProperty(t)) continue;
                      let n = e[V[t]];
                      null != n ? (Z[t] = n) : delete Z[t];
                  }
                  null == (t = o) || k.some((e) => t[e] !== a[e]) || (o = a);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (null == u || null == o || o.id !== t) return !1;
                  G.forEach((t) => {
                      if (null != u && e.hasOwnProperty(t)) {
                          let n = e[t];
                          void 0 !== n && (u = { ...u, [t]: n });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: t } = e;
                  (j = {}), (Z = {});
                  let n = O.A.getGuild(t);
                  null != n && (a = o = n);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: t } = e;
                  return (d = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (H = P.XlH.SUBMITTING), (j = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                  (H = P.XlH.OPEN), (Z = {});
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (H = P.XlH.OPEN), (i = i ?? (0, M.x)()), (r = null), (j = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: ef,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  s = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (es = e.bans.reduce(
                      (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                      new Map(),
                  )),
                      ea++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: t, guildId: n } = e;
                  (eo !== n || null == es) && ((eo = n), (es = new Map())),
                      (es = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), es)),
                      ea++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  el = e.invites.reduce((e, t) => ((e[t.code] = eh(t)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  (W = !0), (K = z = e.enabled), ($ = q = e.channelId);
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  (X = e.code ?? null), (Q = e.uses);
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: t } = e;
                  J = t;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: t } = e;
                  c = t ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  eu = e.integrations;
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == o || t !== o.id) return !1;
                  o = (0, T.hZ)(
                      o,
                      "features",
                      new Set([...o.features, P.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == o || t !== o.id) return !1;
                  o = (0, T.hZ)(
                      o,
                      "features",
                      new Set([...o.features, P.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == es || null == o || o.id !== n) return !1;
                  es.set(t.id, { user: t, reason: null }), ea++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == es || null == o || o.id !== n) return !1;
                  es.delete(t.id), ea++;
              },
              GUILD_ROLE_CREATE: function (e) {
                  let { guildId: t } = e;
                  if (!ec(t)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (!ec(t)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                  let { guildId: t, roleId: n } = e;
                  if (!ec(t)) return !1;
                  c === n && (c = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  {
                      let e = O.A.getGuild(o.id);
                      if (null == e) return !1;
                      if (
                          ((l = S.A.getProfile(o.id)),
                          i !== P.BEX.PROFILE && i !== P.BEX.TAG && (u = l),
                          i === P.BEX.PROFILE)
                      ) {
                          (a = e), (o = e);
                          return;
                      }
                      let t = (a = e),
                          n = { ...o };
                      k.forEach((i) => {
                          if (
                              !F.has(i) &&
                              (("rulesChannelId" !== i && "publicUpdatesChannelId" !== i) || n[i] !== U.SP) &&
                              "features" !== i
                          ) {
                              if ("ownerConfiguredContentLevel" === i) {
                                  t = (0, T.hZ)(t, i, e[i]);
                                  return;
                              }
                              t = (0, T.hZ)(t, i, n[i]);
                          }
                      }),
                          (o = t);
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  e_();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: t } = e;
                  t.id === o?.id && (l = u = t);
              },
              GUILD_PROFILE_UPDATE: eE,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (u?.id == null || !ec(u.id)) return !1;
                  t.id === o?.id && ((l = u = t), (Y = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: em,
              GUILD_PROFILE_UPDATE_VISIBILITY: eE,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (u?.id == null || !ec(u.id)) return !1;
                  t === o?.id && ((l = u = S.A.getProfile(t)), (Y = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: em,
              USER_CONNECTIONS_UPDATE: ep,
              GUILD_INTEGRATIONS_UPDATE: ep,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (el = { ...el }), delete el[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  el = { ...el, [e.invite.code]: eh(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: t, metadata: n } = e;
                  null != o &&
                      t === o.id &&
                      (!1 === en && (en = !0),
                      (er = ei =
                          {
                              primaryCategoryId: n.primaryCategoryId ?? x.ig,
                              secondaryCategoryIds: n.secondaryCategoryIds ?? [],
                              keywords: n.keywords ?? [],
                              emojiDiscoverabilityEnabled: n.emojiDiscoverabilityEnabled ?? !0,
                              partnerActionedTimestamp: n.partnerActionedTimestamp ?? null,
                              partnerApplicationTimestamp: n.partnerApplicationTimestamp ?? null,
                              isPublished: n.isPublished ?? !1,
                              reasonsToJoin: n.reasonsToJoin ?? [],
                              socialLinks: n.socialLinks ?? [],
                              about: n.about ?? "",
                          }),
                      (j = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  ei = er = et;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: t, categoryId: n } = e;
                  null != o &&
                      t === o.id &&
                      ((er = { ...er, secondaryCategoryIds: [...er.secondaryCategoryIds, n] }),
                      (ei = { ...ei, secondaryCategoryIds: [...ei.secondaryCategoryIds, n] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let t,
                      { guildId: n, categoryId: i } = e;
                  if (null == o || n !== o.id) return;
                  let r = er.secondaryCategoryIds.indexOf(i);
                  -1 !== r &&
                      ((t = [...er.secondaryCategoryIds]).splice(r, 1), (er = { ...er, secondaryCategoryIds: t })),
                      -1 !== (r = ei.secondaryCategoryIds.indexOf(i)) &&
                          ((t = [...ei.secondaryCategoryIds]).splice(r, 1), (ei = { ...ei, secondaryCategoryIds: t }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != o && t === o.id && (j = n ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: t,
                      primaryCategoryId: n,
                      keywords: i,
                      emojiDiscoverabilityEnabled: r,
                      isPublished: s,
                      reasonsToJoin: a,
                      socialLinks: l,
                      about: u,
                  } = e;
                  null != o &&
                      t === o.id &&
                      (er = {
                          ...er,
                          primaryCategoryId: null != n ? n : er.primaryCategoryId,
                          keywords: null != i ? i : er.keywords,
                          emojiDiscoverabilityEnabled: r ?? er.emojiDiscoverabilityEnabled,
                          isPublished: s ?? er.isPublished,
                          reasonsToJoin: null != a ? a : er.reasonsToJoin,
                          socialLinks: null != l ? l : er.socialLinks,
                          about: null != u ? u : er.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != o && t === o.id && (j = n ?? {});
              },
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
                  let { slug: t } = e;
                  _ = t;
              },
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
                  let {} = e;
                  _ = null;
              },
              GUILD_SETTINGS_WIDGET_UPDATE: function (e) {
                  let { guildId: t, enabled: n, channelId: i } = e;
                  if (null == o || o.id !== t) return !1;
                  (z = n), (q = i);
              },
          },
);
