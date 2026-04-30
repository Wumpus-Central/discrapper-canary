let n, i, l, o, E, s, _, a, I, u;
r.d(t, { A: () => eG }), r(938796);
var d = r(735438),
    S = r.n(d),
    T = r(989349),
    c = r.n(T),
    G = r(17928),
    h = r(636537),
    A = r(506774),
    D = r(228366),
    L = r(867051),
    U = r(837011),
    N = r(95701),
    p = r(260509),
    f = r(671759),
    R = r(889227),
    y = r(71393),
    C = r(287809),
    O = r(860689),
    g = r(935208),
    M = r(794967),
    m = r(310527),
    P = r(595818),
    b = r(652215),
    B = r(324580),
    F = r(124759);
let v = [
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
    w = [
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
    Y = !1,
    k = b.XlH.CLOSED,
    x = {},
    W = null,
    X = !1,
    j = !1,
    H = !1,
    J = null,
    K = null,
    Z = null,
    q = 0,
    Q = b.EkJ.NONE,
    z = null,
    $ = {
        primaryCategoryId: B.ig,
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
    et = $,
    er = $,
    en = null,
    ei = 0,
    el = null,
    eo = null,
    eE = null;
function es(e) {
    if (null == E || null == o || o.id !== e) return !1;
    let t = y.A.getGuild(e);
    return null != t && (o === E ? (E = o = t) : (o = t), !0);
}
function e_(e) {
    let { guildId: t, section: r, subsection: i, location: l } = e,
        I = y.A.getGuild(t);
    if (null == I) return ea();
    let d = U.A.getProfile(t);
    (o = E = I),
        (s = _ = d),
        (H = j),
        (K = J),
        (k = b.XlH.OPEN),
        (x = {}),
        (W = null),
        (a = g.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (Q = E.mfaLevel),
        (er = et),
        (u = null),
        (z = l),
        eI({ section: r ?? n ?? (0, P.x)(), subsection: i ?? null });
}
function ea() {
    (Y = !1),
        (k = b.XlH.CLOSED),
        (o = E = null),
        (X = !1),
        (H = !1),
        (K = null),
        (Z = null),
        (q = 0),
        (en = null),
        (eo = null),
        (eE = null),
        (n = null),
        (i = null),
        (l = null),
        (Q = b.EkJ.NONE),
        (I = void 0);
}
function eI(e) {
    if (null == E) return !1;
    let t = n;
    if (((n = e.section), (i = e.subsection), n === b.BEX.INSTANT_INVITES || n === b.BEX.INVITES))
        h.Bo.get({ url: b.Rsh.GUILD_INSTANT_INVITES(E.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            D.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (n === b.BEX.INTEGRATIONS || n === b.BEX.ROLES) {
        if (((a = null), t !== e.section)) return ed(e);
    } else
        n === b.BEX.MEMBERS
            ? (a = (0, p.af)(E))
            : n === b.BEX.VANITY_URL
              ? (0, m.Je)(E.id)
              : n === b.BEX.SAFETY &&
                D.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? b.nd0.SAFETY_OVERVIEW : i,
                });
}
function eu(e) {
    return new f.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new R.A(e.inviter) : null,
        channel: (0, N.OY)(e.channel),
        guild: null != e.guild ? (0, O.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: c()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function ed(e) {
    if (null == E || k !== b.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== E.id)) return !1;
    (0, M.c)(E.id);
}
function eS(e) {
    let { guildId: t } = e;
    if (null == E || E.id !== t) return !1;
    W = null;
}
function eT(e) {
    let { guildId: t, error: r } = e;
    if (null == E || E.id !== t) return !1;
    W = r;
}
class ec extends G.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(y.A, U.A, C.default);
    }
    getMetadata() {
        return er;
    }
    widgetHasChanges() {
        return !1 !== X && (H !== j || K !== J);
    }
    hasChanges() {
        return !S().isEqual(E, o) || !S().isEqual(er, et) || !S().isEqual(_, s) || this.widgetHasChanges();
    }
    isOpen() {
        return Y;
    }
    getSavedRouteState() {
        return I;
    }
    getSection() {
        return n;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != E ? E.id : null;
    }
    showPublicSuccessModal() {
        return !A.w.get(F.wX);
    }
    getGuild() {
        return E;
    }
    getGuildProfile() {
        return _;
    }
    getWidget() {
        return { enabled: H, channelId: K };
    }
    isSubmitting() {
        return k === b.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return ee;
    }
    getErrors() {
        return x;
    }
    getError(e) {
        return x[e] ?? null;
    }
    getProfileError() {
        return W;
    }
    getSelectedRoleId() {
        return a;
    }
    getSlug() {
        return u;
    }
    getBans() {
        return [en, ei];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eE,
            section: n,
            subsection: i,
            errors: x,
            guild: E,
            bans: en,
            bansVersion: ei,
            invites: eo,
            selectedRoleId: a,
            fetchedEmbed: X,
            embedEnabled: H,
            embedChannelId: K,
            mfaLevel: Q,
            searchQuery: l,
            vanityURLCode: Z,
            vanityURLUses: q,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: er,
            analyticsLocation: z,
            isGuildMetadataLoaded: ee,
            originalProfile: s,
            profile: _,
        };
    }
}
let eG = new ec(
    D.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: e_,
              GUILD_SETTINGS_OPEN: function (e) {
                  (Y = !0), e_(e);
              },
              GUILD_SETTINGS_CLOSE: ea,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let t;
                  if (null == E) return !1;
                  v.forEach((t) => {
                      null != E && e.hasOwnProperty(t) && (E = (0, L.hZ)(E, t, e[t] ?? null));
                  }),
                      null == (t = E) || v.some((e) => t[e] !== o[e]) || (E = o);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (null == _ || null == E || E.id !== t) return !1;
                  w.forEach((t) => {
                      if (null != _ && e.hasOwnProperty(t)) {
                          let r = e[t];
                          void 0 !== r && (_ = { ..._, [t]: r });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: t } = e;
                  x = {};
                  let r = y.A.getGuild(t);
                  null != r && (o = E = r);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: t } = e;
                  return (I = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (k = b.XlH.SUBMITTING), (x = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                  k = b.XlH.OPEN;
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (k = b.XlH.OPEN), (n = n ?? (0, P.x)()), (i = null), (x = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: eI,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  l = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (en = e.bans.reduce(
                      (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                      new Map(),
                  )),
                      ei++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: t, guildId: r } = e;
                  (el !== r || null == en) && ((el = r), (en = new Map())),
                      (en = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), en)),
                      ei++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  eo = e.invites.reduce((e, t) => ((e[t.code] = eu(t)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  (X = !0), (j = H = e.enabled), (J = K = e.channelId);
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  (Z = e.code ?? null), (q = e.uses);
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: t } = e;
                  Q = t;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: t } = e;
                  a = t ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  eE = e.integrations;
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == E || t !== E.id) return !1;
                  E = (0, L.hZ)(
                      E,
                      "features",
                      new Set([...E.features, b.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == E || t !== E.id) return !1;
                  E = (0, L.hZ)(
                      E,
                      "features",
                      new Set([...E.features, b.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: t, guildId: r } = e;
                  if (null == en || null == E || E.id !== r) return !1;
                  en.set(t.id, { user: t, reason: null }), ei++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: r } = e;
                  if (null == en || null == E || E.id !== r) return !1;
                  en.delete(t.id), ei++;
              },
              GUILD_ROLE_CREATE: function (e) {
                  let { guildId: t } = e;
                  if (!es(t)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (!es(t)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                  let { guildId: t, roleId: r } = e;
                  if (!es(t)) return !1;
                  a === r && (a = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == E || E.id !== e.guild.id) return !1;
                  {
                      let e = y.A.getGuild(E.id);
                      if (null == e) return !1;
                      if (
                          ((s = U.A.getProfile(E.id)),
                          n !== b.BEX.PROFILE && n !== b.BEX.TAG && (_ = s),
                          n === b.BEX.PROFILE)
                      ) {
                          (o = e), (E = e);
                          return;
                      }
                      let t = (o = e),
                          r = { ...E };
                      v.forEach((n) => {
                          if (
                              !V.has(n) &&
                              (("rulesChannelId" !== n && "publicUpdatesChannelId" !== n) || r[n] !== F.SP) &&
                              "features" !== n
                          ) {
                              if ("ownerConfiguredContentLevel" === n) {
                                  t = (0, L.hZ)(t, n, e[n]);
                                  return;
                              }
                              t = (0, L.hZ)(t, n, r[n]);
                          }
                      }),
                          (E = t);
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == E || E.id !== e.guild.id) return !1;
                  ea();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: t } = e;
                  t.id === E?.id && (s = _ = t);
              },
              GUILD_PROFILE_UPDATE: eS,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (_?.id == null || !es(_.id)) return !1;
                  t.id === E?.id && ((s = _ = t), (W = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eT,
              GUILD_PROFILE_UPDATE_VISIBILITY: eS,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (_?.id == null || !es(_.id)) return !1;
                  t === E?.id && ((s = _ = U.A.getProfile(t)), (W = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eT,
              USER_CONNECTIONS_UPDATE: ed,
              GUILD_INTEGRATIONS_UPDATE: ed,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (eo = { ...eo }), delete eo[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  eo = { ...eo, [e.invite.code]: eu(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: t, metadata: r } = e;
                  null != E &&
                      t === E.id &&
                      (!1 === ee && (ee = !0),
                      (er = et =
                          {
                              primaryCategoryId: r.primaryCategoryId ?? B.ig,
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
                      (x = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  et = er = $;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: t, categoryId: r } = e;
                  null != E &&
                      t === E.id &&
                      ((er = { ...er, secondaryCategoryIds: [...er.secondaryCategoryIds, r] }),
                      (et = { ...et, secondaryCategoryIds: [...et.secondaryCategoryIds, r] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let t,
                      { guildId: r, categoryId: n } = e;
                  if (null == E || r !== E.id) return;
                  let i = er.secondaryCategoryIds.indexOf(n);
                  -1 !== i &&
                      ((t = [...er.secondaryCategoryIds]).splice(i, 1), (er = { ...er, secondaryCategoryIds: t })),
                      -1 !== (i = et.secondaryCategoryIds.indexOf(n)) &&
                          ((t = [...et.secondaryCategoryIds]).splice(i, 1), (et = { ...et, secondaryCategoryIds: t }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: t, errors: r } = e;
                  null != E && t === E.id && (x = r ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: t,
                      primaryCategoryId: r,
                      keywords: n,
                      emojiDiscoverabilityEnabled: i,
                      isPublished: l,
                      reasonsToJoin: o,
                      socialLinks: s,
                      about: _,
                  } = e;
                  null != E &&
                      t === E.id &&
                      (er = {
                          ...er,
                          primaryCategoryId: null != r ? r : er.primaryCategoryId,
                          keywords: null != n ? n : er.keywords,
                          emojiDiscoverabilityEnabled: i ?? er.emojiDiscoverabilityEnabled,
                          isPublished: l ?? er.isPublished,
                          reasonsToJoin: null != o ? o : er.reasonsToJoin,
                          socialLinks: null != s ? s : er.socialLinks,
                          about: null != _ ? _ : er.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: t, errors: r } = e;
                  null != E && t === E.id && (x = r ?? {});
              },
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
                  let { slug: t } = e;
                  u = t;
              },
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
                  let {} = e;
                  u = null;
              },
              GUILD_SETTINGS_WIDGET_UPDATE: function (e) {
                  let { guildId: t, enabled: r, channelId: n } = e;
                  if (null == E || E.id !== t) return !1;
                  (H = r), (K = n);
              },
          },
);
