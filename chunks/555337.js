let n, i, r, a, s, o, c, d, u, h;
l.d(t, { A: () => eg }), l(321073), l(938796);
var E = l(435558),
    I = l.n(E),
    _ = l(989349),
    T = l.n(_),
    f = l(17928),
    A = l(636537),
    p = l(506774),
    g = l(228366),
    S = l(867051),
    v = l(837011),
    N = l(95701),
    L = l(260509),
    D = l(671759),
    m = l(889227),
    G = l(71393),
    R = l(287809),
    C = l(149790),
    U = l(935208),
    w = l(794967),
    y = l(557193),
    M = l(310527),
    x = l(595818),
    O = l(652215),
    b = l(324580),
    j = l(124759);
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
    B = [
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
    P = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    Z = {
        icon: "iconOriginalMd5",
        banner: "bannerOriginalMd5",
        splash: "splashOriginalMd5",
        discoverySplash: "discoverySplashOriginalMd5",
    },
    F = !1,
    H = O.XlH.CLOSED,
    k = {},
    W = null,
    Y = !1,
    X = !1,
    J = !1,
    K = null,
    Q = null,
    $ = {},
    q = null,
    z = 0,
    ee = O.EkJ.NONE,
    et = null,
    el = {
        primaryCategoryId: b.ig,
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
    ei = el,
    er = el,
    ea = null,
    es = 0,
    eo = null,
    ec = null,
    ed = null;
function eu(e) {
    if (null == s || null == a || a.id !== e) return !1;
    let t = G.A.getGuild(e);
    return null != t && (a === s ? (s = a = t) : (a = t), !0);
}
function eh(e) {
    let { guildId: t, section: l, subsection: i, location: r } = e,
        u = G.A.getGuild(t);
    if (null == u) return eE();
    let E = v.A.getProfile(t);
    (a = s = u),
        (o = c = E),
        (J = X),
        (Q = K),
        (H = O.XlH.OPEN),
        (k = {}),
        (W = null),
        (d = U.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (ee = s.mfaLevel),
        (er = ei),
        (h = null),
        ($ = {}),
        (et = r),
        eI({ section: l ?? n ?? (0, x.x)(), subsection: i ?? null });
}
function eE() {
    (F = !1),
        (H = O.XlH.CLOSED),
        (a = s = null),
        (Y = !1),
        (J = !1),
        (Q = null),
        (q = null),
        (z = 0),
        (ea = null),
        (ec = null),
        (ed = null),
        (n = null),
        (i = null),
        (r = null),
        (ee = O.EkJ.NONE),
        ($ = {}),
        (u = void 0);
}
function eI(e) {
    if (null == s) return !1;
    let t = n;
    if (((n = e.section), (i = e.subsection), n === O.BEX.INSTANT_INVITES || n === O.BEX.INVITES))
        A.Bo.get({ url: O.Rsh.GUILD_INSTANT_INVITES(s.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            g.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (n === O.BEX.INTEGRATIONS || n === O.BEX.ROLES) {
        if (((d = null), t !== e.section)) return eT(e);
    } else
        n === O.BEX.MEMBERS
            ? (d = (0, L.af)(s))
            : n === O.BEX.VANITY_URL
              ? (0, M.Je)(s.id)
              : n === O.BEX.SAFETY &&
                g.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? O.nd0.SAFETY_OVERVIEW : i,
                });
}
function e_(e) {
    return new D.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new m.A(e.inviter) : null,
        channel: (0, N.OY)(e.channel),
        guild: null != e.guild ? (0, C.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: T()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function eT(e) {
    if (null == s || H !== O.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== s.id)) return !1;
    (0, w.c)(s.id);
}
function ef(e) {
    let { guildId: t } = e;
    if (null == s || s.id !== t) return !1;
    W = null;
}
function eA(e) {
    let { guildId: t, error: l } = e;
    if (null == s || s.id !== t) return !1;
    W = l;
}
class ep extends f.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(G.A, v.A, R.default);
    }
    getMetadata() {
        return er;
    }
    widgetHasChanges() {
        return !1 !== Y && (J !== X || Q !== K);
    }
    hasChanges() {
        return !I().isEqual(s, a) || !I().isEqual(er, ei) || !I().isEqual(c, o) || this.widgetHasChanges();
    }
    isOpen() {
        return F;
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
        return null != s ? s.id : null;
    }
    showPublicSuccessModal() {
        return !p.w.get(j.wX);
    }
    getGuild() {
        return s;
    }
    getPendingOriginalMd5s() {
        return $;
    }
    getGuildProfile() {
        return c;
    }
    getWidget() {
        return { enabled: J, channelId: Q };
    }
    isSubmitting() {
        return H === O.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return en;
    }
    getErrors() {
        return k;
    }
    getError(e) {
        return k[e] ?? null;
    }
    getProfileError() {
        return W;
    }
    getSelectedRoleId() {
        return d;
    }
    getSlug() {
        return h;
    }
    getBans() {
        return [ea, es];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ed,
            section: n,
            subsection: i,
            errors: k,
            guild: s,
            bans: ea,
            bansVersion: es,
            invites: ec,
            selectedRoleId: d,
            fetchedEmbed: Y,
            embedEnabled: J,
            embedChannelId: Q,
            mfaLevel: ee,
            searchQuery: r,
            vanityURLCode: q,
            vanityURLUses: z,
            originalGuild: a,
            hasChanges: this.hasChanges(),
            guildMetadata: er,
            analyticsLocation: et,
            isGuildMetadataLoaded: en,
            originalProfile: o,
            profile: c,
        };
    }
}
let eg = new ep(
    g.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: eh,
              GUILD_SETTINGS_OPEN: function (e) {
                  (F = !0), eh(e);
              },
              GUILD_SETTINGS_CLOSE: eE,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let t;
                  if (null == s) return !1;
                  for (let t of (V.forEach((t) => {
                      null != s && e.hasOwnProperty(t) && (s = (0, S.hZ)(s, t, e[t] ?? null));
                  }),
                  Object.keys(Z))) {
                      if (!e.hasOwnProperty(t)) continue;
                      let l = e[Z[t]];
                      null != l ? ($[t] = l) : delete $[t];
                  }
                  null == (t = s) || V.some((e) => t[e] !== a[e]) || (s = a);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (null == c || null == s || s.id !== t) return !1;
                  B.forEach((t) => {
                      if (null != c && e.hasOwnProperty(t)) {
                          let l = e[t];
                          void 0 !== l && (c = { ...c, [t]: l });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: t } = e;
                  (k = {}), ($ = {});
                  let l = G.A.getGuild(t);
                  null != l && (a = s = l);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: t } = e;
                  return (u = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (H = O.XlH.SUBMITTING), (k = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
                  (H = O.XlH.OPEN),
                      ($ = {}),
                      null != e.guild && null != s && s.id === e.guild.id && (a = s = (0, C.Y1)(e.guild, a));
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (H = O.XlH.OPEN), (n = n ?? (0, x.x)()), (i = null), (k = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: eI,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  r = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (ea = e.bans.reduce(
                      (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                      new Map(),
                  )),
                      es++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: t, guildId: l } = e;
                  (eo !== l || null == ea) && ((eo = l), (ea = new Map())),
                      (ea = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ea)),
                      es++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  ec = e.invites.reduce((e, t) => ((e[t.code] = e_(t)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  (Y = !0), (X = J = e.enabled), (K = Q = e.channelId);
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  (q = e.code ?? null), (z = e.uses);
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: t } = e;
                  ee = t;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: t } = e;
                  d = t ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  ed = e.integrations;
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == s || t !== s.id) return !1;
                  s = (0, S.hZ)(
                      s,
                      "features",
                      new Set([...s.features, O.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == s || t !== s.id) return !1;
                  s = (0, S.hZ)(
                      s,
                      "features",
                      new Set([...s.features, O.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: t, guildId: l } = e;
                  if (null == ea || null == s || s.id !== l) return !1;
                  ea.set(t.id, { user: t, reason: null }), es++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: l } = e;
                  if (null == ea || null == s || s.id !== l) return !1;
                  ea.delete(t.id), es++;
              },
              GUILD_ROLE_CREATE: function (e) {
                  let { guildId: t } = e;
                  if (!eu(t)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (!eu(t)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                  let { guildId: t, roleId: l } = e;
                  if (!eu(t)) return !1;
                  d === l && (d = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == s || s.id !== e.guild.id) return !1;
                  {
                      let e = G.A.getGuild(s.id);
                      if (null == e) return !1;
                      if (
                          ((o = v.A.getProfile(s.id)),
                          n === O.BEX.PROFILE || n === O.BEX.TAG || (0, y.HU)(c, o) || (c = o),
                          n === O.BEX.PROFILE)
                      ) {
                          (a = e), (s = e);
                          return;
                      }
                      let t = (a = e),
                          l = { ...s };
                      V.forEach((n) => {
                          if (
                              !P.has(n) &&
                              (("rulesChannelId" !== n && "publicUpdatesChannelId" !== n) || l[n] !== j.SP) &&
                              "features" !== n
                          ) {
                              if ("ownerConfiguredContentLevel" === n) {
                                  t = (0, S.hZ)(t, n, e[n]);
                                  return;
                              }
                              t = (0, S.hZ)(t, n, l[n]);
                          }
                      }),
                          (s = t);
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == s || s.id !== e.guild.id) return !1;
                  eE();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (t.id !== s?.id || (0, y.HU)(c, o)) return !1;
                  o = c = t;
              },
              GUILD_PROFILE_UPDATE: ef,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (c?.id == null || !eu(c.id)) return !1;
                  t.id === s?.id && ((o = c = t), (W = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eA,
              GUILD_PROFILE_UPDATE_VISIBILITY: ef,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (c?.id == null || !eu(c.id)) return !1;
                  t === s?.id && ((o = c = v.A.getProfile(t)), (W = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eA,
              USER_CONNECTIONS_UPDATE: eT,
              GUILD_INTEGRATIONS_UPDATE: eT,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (ec = { ...ec }), delete ec[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  ec = { ...ec, [e.invite.code]: e_(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: t, metadata: l } = e;
                  null != s &&
                      t === s.id &&
                      (!1 === en && (en = !0),
                      (er = ei =
                          {
                              primaryCategoryId: l.primaryCategoryId ?? b.ig,
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
                      (k = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  ei = er = el;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: t, categoryId: l } = e;
                  null != s &&
                      t === s.id &&
                      ((er = { ...er, secondaryCategoryIds: [...er.secondaryCategoryIds, l] }),
                      (ei = { ...ei, secondaryCategoryIds: [...ei.secondaryCategoryIds, l] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let t,
                      { guildId: l, categoryId: n } = e;
                  if (null == s || l !== s.id) return;
                  let i = er.secondaryCategoryIds.indexOf(n);
                  -1 !== i &&
                      ((t = [...er.secondaryCategoryIds]).splice(i, 1), (er = { ...er, secondaryCategoryIds: t })),
                      -1 !== (i = ei.secondaryCategoryIds.indexOf(n)) &&
                          ((t = [...ei.secondaryCategoryIds]).splice(i, 1), (ei = { ...ei, secondaryCategoryIds: t }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: t, errors: l } = e;
                  null != s && t === s.id && (k = l ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: t,
                      primaryCategoryId: l,
                      keywords: n,
                      emojiDiscoverabilityEnabled: i,
                      isPublished: r,
                      reasonsToJoin: a,
                      socialLinks: o,
                      about: c,
                  } = e;
                  null != s &&
                      t === s.id &&
                      (er = {
                          ...er,
                          primaryCategoryId: null != l ? l : er.primaryCategoryId,
                          keywords: null != n ? n : er.keywords,
                          emojiDiscoverabilityEnabled: i ?? er.emojiDiscoverabilityEnabled,
                          isPublished: r ?? er.isPublished,
                          reasonsToJoin: null != a ? a : er.reasonsToJoin,
                          socialLinks: null != o ? o : er.socialLinks,
                          about: null != c ? c : er.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: t, errors: l } = e;
                  null != s && t === s.id && (k = l ?? {});
              },
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
                  let { slug: t } = e;
                  h = t;
              },
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
                  let {} = e;
                  h = null;
              },
              GUILD_SETTINGS_WIDGET_UPDATE: function (e) {
                  let { guildId: t, enabled: l, channelId: n } = e;
                  if (null == s || s.id !== t) return !1;
                  (J = l), (Q = n);
              },
          },
);
