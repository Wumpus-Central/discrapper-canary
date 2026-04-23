"use strict";
let r, i, s, a, o, l, u, c, d, _;
n.d(t, { A: () => em }), n(938796);
var f = n(735438),
    p = n.n(f),
    h = n(989349),
    E = n.n(h),
    m = n(311907),
    g = n(562465),
    A = n(506774),
    I = n(73153),
    T = n(867051),
    S = n(837011),
    y = n(95701),
    N = n(260509),
    v = n(671759),
    C = n(427157),
    O = n(71393),
    R = n(287809),
    b = n(860689),
    D = n(661191),
    L = n(794967),
    w = n(310527),
    M = n(595818),
    P = n(652215),
    x = n(324580),
    k = n(124759);
let U = [
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
    V = !1,
    B = P.XlH.CLOSED,
    H = {},
    j = null,
    Y = !1,
    W = !1,
    K = !1,
    $ = null,
    z = null,
    q = null,
    X = 0,
    Q = P.EkJ.NONE,
    Z = null,
    J = {
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
    ee = !1,
    et = J,
    en = J,
    er = null,
    ei = 0,
    es = null,
    ea = null,
    eo = null;
function el(e) {
    if (null == o || null == a || a.id !== e) return !1;
    let t = O.A.getGuild(e);
    return null != t && (a === o ? (o = a = t) : (a = t), !0);
}
function eu(e) {
    let { guildId: t, section: n, subsection: i, location: s } = e,
        d = O.A.getGuild(t);
    if (null == d) return ec();
    let f = S.A.getProfile(t);
    (a = o = d),
        (l = u = f),
        (K = W),
        (z = $),
        (B = P.XlH.OPEN),
        (H = {}),
        (j = null),
        (c = D.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (Q = o.mfaLevel),
        (en = et),
        (_ = null),
        (Z = s),
        ed({ section: n ?? r ?? (0, M.x)(), subsection: i ?? null });
}
function ec() {
    (V = !1),
        (B = P.XlH.CLOSED),
        (a = o = null),
        (Y = !1),
        (K = !1),
        (z = null),
        (q = null),
        (X = 0),
        (er = null),
        (ea = null),
        (eo = null),
        (r = null),
        (i = null),
        (s = null),
        (Q = P.EkJ.NONE),
        (d = void 0);
}
function ed(e) {
    if (null == o) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === P.BEX.INSTANT_INVITES || r === P.BEX.INVITES))
        g.Bo.get({ url: P.Rsh.GUILD_INSTANT_INVITES(o.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            I.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (r === P.BEX.INTEGRATIONS || r === P.BEX.ROLES) {
        if (((c = null), t !== e.section)) return ef(e);
    } else
        r === P.BEX.MEMBERS
            ? (c = (0, N.af)(o))
            : r === P.BEX.VANITY_URL
              ? (0, w.Je)(o.id)
              : r === P.BEX.SAFETY &&
                I.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? P.nd0.SAFETY_OVERVIEW : i,
                });
}
function e_(e) {
    return new v.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new C.A(e.inviter) : null,
        channel: (0, y.OY)(e.channel),
        guild: null != e.guild ? (0, b.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: E()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function ef(e) {
    if (null == o || B !== P.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id)) return !1;
    (0, L.c)(o.id);
}
function ep(e) {
    let { guildId: t } = e;
    if (null == o || o.id !== t) return !1;
    j = null;
}
function eh(e) {
    let { guildId: t, error: n } = e;
    if (null == o || o.id !== t) return !1;
    j = n;
}
class eE extends m.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(O.A, S.A, R.default);
    }
    getMetadata() {
        return en;
    }
    widgetHasChanges() {
        return !1 !== Y && (K !== W || z !== $);
    }
    hasChanges() {
        return !p().isEqual(o, a) || !p().isEqual(en, et) || !p().isEqual(u, l) || this.widgetHasChanges();
    }
    isOpen() {
        return V;
    }
    getSavedRouteState() {
        return d;
    }
    getSection() {
        return r;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != o ? o.id : null;
    }
    showPublicSuccessModal() {
        return !A.w.get(k.wX);
    }
    getGuild() {
        return o;
    }
    getGuildProfile() {
        return u;
    }
    getWidget() {
        return { enabled: K, channelId: z };
    }
    isSubmitting() {
        return B === P.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return ee;
    }
    getErrors() {
        return H;
    }
    getError(e) {
        return H[e] ?? null;
    }
    getProfileError() {
        return j;
    }
    getSelectedRoleId() {
        return c;
    }
    getSlug() {
        return _;
    }
    getBans() {
        return [er, ei];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eo,
            section: r,
            subsection: i,
            errors: H,
            guild: o,
            bans: er,
            bansVersion: ei,
            invites: ea,
            selectedRoleId: c,
            fetchedEmbed: Y,
            embedEnabled: K,
            embedChannelId: z,
            mfaLevel: Q,
            searchQuery: s,
            vanityURLCode: q,
            vanityURLUses: X,
            originalGuild: a,
            hasChanges: this.hasChanges(),
            guildMetadata: en,
            analyticsLocation: Z,
            isGuildMetadataLoaded: ee,
            originalProfile: l,
            profile: u,
        };
    }
}
let em = new eE(
    I.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: eu,
              GUILD_SETTINGS_OPEN: function (e) {
                  (V = !0), eu(e);
              },
              GUILD_SETTINGS_CLOSE: ec,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let t;
                  if (null == o) return !1;
                  U.forEach((t) => {
                      null != o && e.hasOwnProperty(t) && (o = (0, T.hZ)(o, t, e[t] ?? null));
                  }),
                      null == (t = o) || U.some((e) => t[e] !== a[e]) || (o = a);
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
                  H = {};
                  let n = O.A.getGuild(t);
                  null != n && (a = o = n);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: t } = e;
                  return (d = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (B = P.XlH.SUBMITTING), (H = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                  B = P.XlH.OPEN;
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (B = P.XlH.OPEN), (r = r ?? (0, M.x)()), (i = null), (H = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: ed,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  s = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (er = e.bans.reduce(
                      (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                      new Map(),
                  )),
                      ei++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: t, guildId: n } = e;
                  (es !== n || null == er) && ((es = n), (er = new Map())),
                      (er = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), er)),
                      ei++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  ea = e.invites.reduce((e, t) => ((e[t.code] = e_(t)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  (Y = !0), (W = K = e.enabled), ($ = z = e.channelId);
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  (q = e.code ?? null), (X = e.uses);
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: t } = e;
                  Q = t;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: t } = e;
                  c = t ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  eo = e.integrations;
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
                  if (null == er || null == o || o.id !== n) return !1;
                  er.set(t.id, { user: t, reason: null }), ei++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == er || null == o || o.id !== n) return !1;
                  er.delete(t.id), ei++;
              },
              GUILD_ROLE_CREATE: function (e) {
                  let { guildId: t } = e;
                  if (!el(t)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (!el(t)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                  let { guildId: t, roleId: n } = e;
                  if (!el(t)) return !1;
                  c === n && (c = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  {
                      let e = O.A.getGuild(o.id);
                      if (null == e) return !1;
                      if (
                          ((l = S.A.getProfile(o.id)),
                          r !== P.BEX.PROFILE && r !== P.BEX.TAG && (u = l),
                          r === P.BEX.PROFILE)
                      ) {
                          (a = e), (o = e);
                          return;
                      }
                      let t = (a = e),
                          n = { ...o };
                      U.forEach((r) => {
                          if (
                              !F.has(r) &&
                              (("rulesChannelId" !== r && "publicUpdatesChannelId" !== r) || n[r] !== k.SP) &&
                              "features" !== r
                          ) {
                              if ("ownerConfiguredContentLevel" === r) {
                                  t = (0, T.hZ)(t, r, e[r]);
                                  return;
                              }
                              t = (0, T.hZ)(t, r, n[r]);
                          }
                      }),
                          (o = t);
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  ec();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: t } = e;
                  t.id === o?.id && (l = u = t);
              },
              GUILD_PROFILE_UPDATE: ep,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (u?.id == null || !el(u.id)) return !1;
                  t.id === o?.id && ((l = u = t), (j = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eh,
              GUILD_PROFILE_UPDATE_VISIBILITY: ep,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (u?.id == null || !el(u.id)) return !1;
                  t === o?.id && ((l = u = S.A.getProfile(t)), (j = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eh,
              USER_CONNECTIONS_UPDATE: ef,
              GUILD_INTEGRATIONS_UPDATE: ef,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (ea = { ...ea }), delete ea[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  ea = { ...ea, [e.invite.code]: e_(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: t, metadata: n } = e;
                  null != o &&
                      t === o.id &&
                      (!1 === ee && (ee = !0),
                      (en = et =
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
                      (H = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  et = en = J;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: t, categoryId: n } = e;
                  null != o &&
                      t === o.id &&
                      ((en = { ...en, secondaryCategoryIds: [...en.secondaryCategoryIds, n] }),
                      (et = { ...et, secondaryCategoryIds: [...et.secondaryCategoryIds, n] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let t,
                      { guildId: n, categoryId: r } = e;
                  if (null == o || n !== o.id) return;
                  let i = en.secondaryCategoryIds.indexOf(r);
                  -1 !== i &&
                      ((t = [...en.secondaryCategoryIds]).splice(i, 1), (en = { ...en, secondaryCategoryIds: t })),
                      -1 !== (i = et.secondaryCategoryIds.indexOf(r)) &&
                          ((t = [...et.secondaryCategoryIds]).splice(i, 1), (et = { ...et, secondaryCategoryIds: t }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != o && t === o.id && (H = n ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: t,
                      primaryCategoryId: n,
                      keywords: r,
                      emojiDiscoverabilityEnabled: i,
                      isPublished: s,
                      reasonsToJoin: a,
                      socialLinks: l,
                      about: u,
                  } = e;
                  null != o &&
                      t === o.id &&
                      (en = {
                          ...en,
                          primaryCategoryId: null != n ? n : en.primaryCategoryId,
                          keywords: null != r ? r : en.keywords,
                          emojiDiscoverabilityEnabled: i ?? en.emojiDiscoverabilityEnabled,
                          isPublished: s ?? en.isPublished,
                          reasonsToJoin: null != a ? a : en.reasonsToJoin,
                          socialLinks: null != l ? l : en.socialLinks,
                          about: null != u ? u : en.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != o && t === o.id && (H = n ?? {});
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
                  let { guildId: t, enabled: n, channelId: r } = e;
                  if (null == o || o.id !== t) return !1;
                  (K = n), (z = r);
              },
          },
);
