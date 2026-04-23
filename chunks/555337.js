"use strict";
let i, r, s, a, o, l, d, _, u, c;
n.d(t, { A: () => eg }), n(938796);
var E = n(735438),
    h = n.n(E),
    m = n(989349),
    f = n.n(m),
    g = n(17928),
    p = n(636537),
    A = n(506774),
    I = n(228366),
    T = n(867051),
    S = n(837011),
    N = n(95701),
    C = n(260509),
    R = n(671759),
    O = n(889227),
    y = n(71393),
    v = n(287809),
    D = n(860689),
    L = n(935208),
    b = n(794967),
    w = n(310527),
    P = n(595818),
    k = n(652215),
    M = n(324580),
    U = n(124759);
let x = [
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
    V = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    F = !1,
    B = k.XlH.CLOSED,
    H = {},
    j = null,
    W = !1,
    Y = !1,
    K = !1,
    z = null,
    $ = null,
    q = null,
    X = 0,
    Z = k.EkJ.NONE,
    Q = null,
    J = {
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
    ee = !1,
    et = J,
    en = J,
    ei = null,
    er = 0,
    es = null,
    ea = null,
    eo = null;
function el(e) {
    if (null == o || null == a || a.id !== e) return !1;
    let t = y.A.getGuild(e);
    return null != t && (a === o ? (o = a = t) : (a = t), !0);
}
function ed(e) {
    let { guildId: t, section: n, subsection: r, location: s } = e,
        u = y.A.getGuild(t);
    if (null == u) return e_();
    let E = S.A.getProfile(t);
    (a = o = u),
        (l = d = E),
        (K = Y),
        ($ = z),
        (B = k.XlH.OPEN),
        (H = {}),
        (j = null),
        (_ = L.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (Z = o.mfaLevel),
        (en = et),
        (c = null),
        (Q = s),
        eu({ section: n ?? i ?? (0, P.x)(), subsection: r ?? null });
}
function e_() {
    (F = !1),
        (B = k.XlH.CLOSED),
        (a = o = null),
        (W = !1),
        (K = !1),
        ($ = null),
        (q = null),
        (X = 0),
        (ei = null),
        (ea = null),
        (eo = null),
        (i = null),
        (r = null),
        (s = null),
        (Z = k.EkJ.NONE),
        (u = void 0);
}
function eu(e) {
    if (null == o) return !1;
    let t = i;
    if (((i = e.section), (r = e.subsection), i === k.BEX.INSTANT_INVITES || i === k.BEX.INVITES))
        p.Bo.get({ url: k.Rsh.GUILD_INSTANT_INVITES(o.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            I.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (i === k.BEX.INTEGRATIONS || i === k.BEX.ROLES) {
        if (((_ = null), t !== e.section)) return eE(e);
    } else
        i === k.BEX.MEMBERS
            ? (_ = (0, C.af)(o))
            : i === k.BEX.VANITY_URL
              ? (0, w.Je)(o.id)
              : i === k.BEX.SAFETY &&
                I.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == r ? k.nd0.SAFETY_OVERVIEW : r,
                });
}
function ec(e) {
    return new R.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new O.A(e.inviter) : null,
        channel: (0, N.OY)(e.channel),
        guild: null != e.guild ? (0, D.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: f()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function eE(e) {
    if (null == o || B !== k.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id)) return !1;
    (0, b.c)(o.id);
}
function eh(e) {
    let { guildId: t } = e;
    if (null == o || o.id !== t) return !1;
    j = null;
}
function em(e) {
    let { guildId: t, error: n } = e;
    if (null == o || o.id !== t) return !1;
    j = n;
}
class ef extends g.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(y.A, S.A, v.default);
    }
    getMetadata() {
        return en;
    }
    widgetHasChanges() {
        return !1 !== W && (K !== Y || $ !== z);
    }
    hasChanges() {
        return !h().isEqual(o, a) || !h().isEqual(en, et) || !h().isEqual(d, l) || this.widgetHasChanges();
    }
    isOpen() {
        return F;
    }
    getSavedRouteState() {
        return u;
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
    getGuildProfile() {
        return d;
    }
    getWidget() {
        return { enabled: K, channelId: $ };
    }
    isSubmitting() {
        return B === k.XlH.SUBMITTING;
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
        return _;
    }
    getSlug() {
        return c;
    }
    getBans() {
        return [ei, er];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eo,
            section: i,
            subsection: r,
            errors: H,
            guild: o,
            bans: ei,
            bansVersion: er,
            invites: ea,
            selectedRoleId: _,
            fetchedEmbed: W,
            embedEnabled: K,
            embedChannelId: $,
            mfaLevel: Z,
            searchQuery: s,
            vanityURLCode: q,
            vanityURLUses: X,
            originalGuild: a,
            hasChanges: this.hasChanges(),
            guildMetadata: en,
            analyticsLocation: Q,
            isGuildMetadataLoaded: ee,
            originalProfile: l,
            profile: d,
        };
    }
}
let eg = new ef(
    I.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ed,
              GUILD_SETTINGS_OPEN: function (e) {
                  (F = !0), ed(e);
              },
              GUILD_SETTINGS_CLOSE: e_,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let t;
                  if (null == o) return !1;
                  x.forEach((t) => {
                      null != o && e.hasOwnProperty(t) && (o = (0, T.hZ)(o, t, e[t] ?? null));
                  }),
                      null == (t = o) || x.some((e) => t[e] !== a[e]) || (o = a);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (null == d || null == o || o.id !== t) return !1;
                  G.forEach((t) => {
                      if (null != d && e.hasOwnProperty(t)) {
                          let n = e[t];
                          void 0 !== n && (d = { ...d, [t]: n });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: t } = e;
                  H = {};
                  let n = y.A.getGuild(t);
                  null != n && (a = o = n);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: t } = e;
                  return (u = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (B = k.XlH.SUBMITTING), (H = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                  B = k.XlH.OPEN;
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (B = k.XlH.OPEN), (i = i ?? (0, P.x)()), (r = null), (H = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: eu,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  s = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (ei = e.bans.reduce(
                      (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                      new Map(),
                  )),
                      er++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: t, guildId: n } = e;
                  (es !== n || null == ei) && ((es = n), (ei = new Map())),
                      (ei = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ei)),
                      er++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  ea = e.invites.reduce((e, t) => ((e[t.code] = ec(t)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  (W = !0), (Y = K = e.enabled), (z = $ = e.channelId);
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  (q = e.code ?? null), (X = e.uses);
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: t } = e;
                  Z = t;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: t } = e;
                  _ = t ?? null;
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
                      new Set([...o.features, k.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == o || t !== o.id) return !1;
                  o = (0, T.hZ)(
                      o,
                      "features",
                      new Set([...o.features, k.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == ei || null == o || o.id !== n) return !1;
                  ei.set(t.id, { user: t, reason: null }), er++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == ei || null == o || o.id !== n) return !1;
                  ei.delete(t.id), er++;
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
                  _ === n && (_ = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  {
                      let e = y.A.getGuild(o.id);
                      if (null == e) return !1;
                      if (
                          ((l = S.A.getProfile(o.id)),
                          i !== k.BEX.PROFILE && i !== k.BEX.TAG && (d = l),
                          i === k.BEX.PROFILE)
                      ) {
                          (a = e), (o = e);
                          return;
                      }
                      let t = (a = e),
                          n = { ...o };
                      x.forEach((i) => {
                          if (
                              !V.has(i) &&
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
                  t.id === o?.id && (l = d = t);
              },
              GUILD_PROFILE_UPDATE: eh,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (d?.id == null || !el(d.id)) return !1;
                  t.id === o?.id && ((l = d = t), (j = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: em,
              GUILD_PROFILE_UPDATE_VISIBILITY: eh,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (d?.id == null || !el(d.id)) return !1;
                  t === o?.id && ((l = d = S.A.getProfile(t)), (j = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: em,
              USER_CONNECTIONS_UPDATE: eE,
              GUILD_INTEGRATIONS_UPDATE: eE,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (ea = { ...ea }), delete ea[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  ea = { ...ea, [e.invite.code]: ec(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: t, metadata: n } = e;
                  null != o &&
                      t === o.id &&
                      (!1 === ee && (ee = !0),
                      (en = et =
                          {
                              primaryCategoryId: n.primaryCategoryId ?? M.ig,
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
                      { guildId: n, categoryId: i } = e;
                  if (null == o || n !== o.id) return;
                  let r = en.secondaryCategoryIds.indexOf(i);
                  -1 !== r &&
                      ((t = [...en.secondaryCategoryIds]).splice(r, 1), (en = { ...en, secondaryCategoryIds: t })),
                      -1 !== (r = et.secondaryCategoryIds.indexOf(i)) &&
                          ((t = [...et.secondaryCategoryIds]).splice(r, 1), (et = { ...et, secondaryCategoryIds: t }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != o && t === o.id && (H = n ?? {});
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
                      about: d,
                  } = e;
                  null != o &&
                      t === o.id &&
                      (en = {
                          ...en,
                          primaryCategoryId: null != n ? n : en.primaryCategoryId,
                          keywords: null != i ? i : en.keywords,
                          emojiDiscoverabilityEnabled: r ?? en.emojiDiscoverabilityEnabled,
                          isPublished: s ?? en.isPublished,
                          reasonsToJoin: null != a ? a : en.reasonsToJoin,
                          socialLinks: null != l ? l : en.socialLinks,
                          about: null != d ? d : en.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != o && t === o.id && (H = n ?? {});
              },
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
                  let { slug: t } = e;
                  c = t;
              },
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
                  let {} = e;
                  c = null;
              },
              GUILD_SETTINGS_WIDGET_UPDATE: function (e) {
                  let { guildId: t, enabled: n, channelId: i } = e;
                  if (null == o || o.id !== t) return !1;
                  (K = n), ($ = i);
              },
          },
);
