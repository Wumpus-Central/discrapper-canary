let n, l, i, o, a, s, E, u, d, I;
r.d(t, { A: () => eh }), r(938796);
var _ = r(735438),
    c = r.n(_),
    S = r(989349),
    T = r.n(S),
    h = r(17928),
    A = r(636537),
    G = r(506774),
    p = r(228366),
    D = r(867051),
    L = r(837011),
    N = r(95701),
    U = r(260509),
    f = r(671759),
    y = r(889227),
    R = r(71393),
    C = r(287809),
    g = r(860689),
    O = r(935208),
    m = r(794967),
    M = r(310527),
    P = r(595818),
    b = r(652215),
    B = r(324580),
    v = r(124759);
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
    V = !1,
    Y = b.XlH.CLOSED,
    W = {},
    k = null,
    j = !1,
    X = !1,
    H = !1,
    J = null,
    $ = null,
    K = null,
    z = 0,
    q = b.EkJ.NONE,
    Q = null,
    Z = {
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
    et = Z,
    er = Z,
    en = null,
    el = 0,
    ei = null,
    eo = null,
    ea = null;
function es(e) {
    if (null == a || null == o || o.id !== e) return !1;
    let t = R.A.getGuild(e);
    return null != t && (o === a ? (a = o = t) : (o = t), !0);
}
function eE(e) {
    let { guildId: t, section: r, subsection: l, location: i } = e,
        d = R.A.getGuild(t);
    if (null == d) return eu();
    let _ = L.A.getProfile(t);
    (o = a = d),
        (s = E = _),
        (H = X),
        ($ = J),
        (Y = b.XlH.OPEN),
        (W = {}),
        (k = null),
        (u = O.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (q = a.mfaLevel),
        (er = et),
        (I = null),
        (Q = i),
        ed({ section: r ?? n ?? (0, P.x)(), subsection: l ?? null });
}
function eu() {
    (V = !1),
        (Y = b.XlH.CLOSED),
        (o = a = null),
        (j = !1),
        (H = !1),
        ($ = null),
        (K = null),
        (z = 0),
        (en = null),
        (eo = null),
        (ea = null),
        (n = null),
        (l = null),
        (i = null),
        (q = b.EkJ.NONE),
        (d = void 0);
}
function ed(e) {
    if (null == a) return !1;
    let t = n;
    if (((n = e.section), (l = e.subsection), n === b.BEX.INSTANT_INVITES || n === b.BEX.INVITES))
        A.Bo.get({ url: b.Rsh.GUILD_INSTANT_INVITES(a.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            p.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (n === b.BEX.INTEGRATIONS || n === b.BEX.ROLES) {
        if (((u = null), t !== e.section)) return e_(e);
    } else
        n === b.BEX.MEMBERS
            ? (u = (0, U.af)(a))
            : n === b.BEX.VANITY_URL
              ? (0, M.Je)(a.id)
              : n === b.BEX.SAFETY &&
                p.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == l ? b.nd0.SAFETY_OVERVIEW : l,
                });
}
function eI(e) {
    return new f.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new y.A(e.inviter) : null,
        channel: (0, N.OY)(e.channel),
        guild: null != e.guild ? (0, g.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: T()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function e_(e) {
    if (null == a || Y !== b.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== a.id)) return !1;
    (0, m.c)(a.id);
}
function ec(e) {
    let { guildId: t } = e;
    if (null == a || a.id !== t) return !1;
    k = null;
}
function eS(e) {
    let { guildId: t, error: r } = e;
    if (null == a || a.id !== t) return !1;
    k = r;
}
class eT extends h.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(R.A, L.A, C.default);
    }
    getMetadata() {
        return er;
    }
    widgetHasChanges() {
        return !1 !== j && (H !== X || $ !== J);
    }
    hasChanges() {
        return !c().isEqual(a, o) || !c().isEqual(er, et) || !c().isEqual(E, s) || this.widgetHasChanges();
    }
    isOpen() {
        return V;
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
        return !G.w.get(v.wX);
    }
    getGuild() {
        return a;
    }
    getGuildProfile() {
        return E;
    }
    getWidget() {
        return { enabled: H, channelId: $ };
    }
    isSubmitting() {
        return Y === b.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return ee;
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
        return u;
    }
    getSlug() {
        return I;
    }
    getBans() {
        return [en, el];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ea,
            section: n,
            subsection: l,
            errors: W,
            guild: a,
            bans: en,
            bansVersion: el,
            invites: eo,
            selectedRoleId: u,
            fetchedEmbed: j,
            embedEnabled: H,
            embedChannelId: $,
            mfaLevel: q,
            searchQuery: i,
            vanityURLCode: K,
            vanityURLUses: z,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: er,
            analyticsLocation: Q,
            isGuildMetadataLoaded: ee,
            originalProfile: s,
            profile: E,
        };
    }
}
let eh = new eT(
    p.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: eE,
              GUILD_SETTINGS_OPEN: function (e) {
                  (V = !0), eE(e);
              },
              GUILD_SETTINGS_CLOSE: eu,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let t;
                  if (null == a) return !1;
                  F.forEach((t) => {
                      null != a && e.hasOwnProperty(t) && (a = (0, D.hZ)(a, t, e[t] ?? null));
                  }),
                      null == (t = a) || F.some((e) => t[e] !== o[e]) || (a = o);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (null == E || null == a || a.id !== t) return !1;
                  x.forEach((t) => {
                      if (null != E && e.hasOwnProperty(t)) {
                          let r = e[t];
                          void 0 !== r && (E = { ...E, [t]: r });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: t } = e;
                  W = {};
                  let r = R.A.getGuild(t);
                  null != r && (o = a = r);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: t } = e;
                  return (d = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (Y = b.XlH.SUBMITTING), (W = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                  Y = b.XlH.OPEN;
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (Y = b.XlH.OPEN), (n = n ?? (0, P.x)()), (l = null), (W = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: ed,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  i = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (en = e.bans.reduce(
                      (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                      new Map(),
                  )),
                      el++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: t, guildId: r } = e;
                  (ei !== r || null == en) && ((ei = r), (en = new Map())),
                      (en = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), en)),
                      el++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  eo = e.invites.reduce((e, t) => ((e[t.code] = eI(t)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  (j = !0), (X = H = e.enabled), (J = $ = e.channelId);
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  (K = e.code ?? null), (z = e.uses);
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: t } = e;
                  q = t;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: t } = e;
                  u = t ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  ea = e.integrations;
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == a || t !== a.id) return !1;
                  a = (0, D.hZ)(
                      a,
                      "features",
                      new Set([...a.features, b.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == a || t !== a.id) return !1;
                  a = (0, D.hZ)(
                      a,
                      "features",
                      new Set([...a.features, b.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: t, guildId: r } = e;
                  if (null == en || null == a || a.id !== r) return !1;
                  en.set(t.id, { user: t, reason: null }), el++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: r } = e;
                  if (null == en || null == a || a.id !== r) return !1;
                  en.delete(t.id), el++;
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
                  u === r && (u = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == a || a.id !== e.guild.id) return !1;
                  {
                      let e = R.A.getGuild(a.id);
                      if (null == e) return !1;
                      if (
                          ((s = L.A.getProfile(a.id)),
                          n !== b.BEX.PROFILE && n !== b.BEX.TAG && (E = s),
                          n === b.BEX.PROFILE)
                      ) {
                          (o = e), (a = e);
                          return;
                      }
                      let t = (o = e),
                          r = { ...a };
                      F.forEach((n) => {
                          if (
                              !w.has(n) &&
                              (("rulesChannelId" !== n && "publicUpdatesChannelId" !== n) || r[n] !== v.SP) &&
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
                  eu();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: t } = e;
                  t.id === a?.id && (s = E = t);
              },
              GUILD_PROFILE_UPDATE: ec,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (E?.id == null || !es(E.id)) return !1;
                  t.id === a?.id && ((s = E = t), (k = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eS,
              GUILD_PROFILE_UPDATE_VISIBILITY: ec,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (E?.id == null || !es(E.id)) return !1;
                  t === a?.id && ((s = E = L.A.getProfile(t)), (k = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eS,
              USER_CONNECTIONS_UPDATE: e_,
              GUILD_INTEGRATIONS_UPDATE: e_,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (eo = { ...eo }), delete eo[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  eo = { ...eo, [e.invite.code]: eI(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: t, metadata: r } = e;
                  null != a &&
                      t === a.id &&
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
                      (W = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  et = er = Z;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: t, categoryId: r } = e;
                  null != a &&
                      t === a.id &&
                      ((er = { ...er, secondaryCategoryIds: [...er.secondaryCategoryIds, r] }),
                      (et = { ...et, secondaryCategoryIds: [...et.secondaryCategoryIds, r] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let t,
                      { guildId: r, categoryId: n } = e;
                  if (null == a || r !== a.id) return;
                  let l = er.secondaryCategoryIds.indexOf(n);
                  -1 !== l &&
                      ((t = [...er.secondaryCategoryIds]).splice(l, 1), (er = { ...er, secondaryCategoryIds: t })),
                      -1 !== (l = et.secondaryCategoryIds.indexOf(n)) &&
                          ((t = [...et.secondaryCategoryIds]).splice(l, 1), (et = { ...et, secondaryCategoryIds: t }));
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
                      about: E,
                  } = e;
                  null != a &&
                      t === a.id &&
                      (er = {
                          ...er,
                          primaryCategoryId: null != r ? r : er.primaryCategoryId,
                          keywords: null != n ? n : er.keywords,
                          emojiDiscoverabilityEnabled: l ?? er.emojiDiscoverabilityEnabled,
                          isPublished: i ?? er.isPublished,
                          reasonsToJoin: null != o ? o : er.reasonsToJoin,
                          socialLinks: null != s ? s : er.socialLinks,
                          about: null != E ? E : er.about,
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
                  (H = r), ($ = n);
              },
          },
);
