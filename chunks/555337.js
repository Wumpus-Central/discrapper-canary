let n, l, i, o, E, s, a, u, _, I;
r.d(t, { A: () => eh }), r(938796);
var d = r(735438),
    T = r.n(d),
    c = r(989349),
    S = r.n(c),
    h = r(311907),
    D = r(562465),
    G = r(506774),
    A = r(73153),
    L = r(867051),
    p = r(837011),
    U = r(95701),
    N = r(260509),
    f = r(671759),
    R = r(427157),
    C = r(71393),
    g = r(287809),
    y = r(860689),
    O = r(661191),
    m = r(794967),
    F = r(310527),
    P = r(595818),
    M = r(652215),
    B = r(324580),
    b = r(124759);
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
    H = !1,
    Y = M.XlH.CLOSED,
    x = {},
    W = null,
    k = !1,
    X = !1,
    j = !1,
    J = null,
    K = null,
    Z = null,
    q = 0,
    Q = M.EkJ.NONE,
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
    el = 0,
    ei = null,
    eo = null,
    eE = null;
function es(e) {
    if (null == E || null == o || o.id !== e) return !1;
    let t = C.A.getGuild(e);
    return null != t && (o === E ? (E = o = t) : (o = t), !0);
}
function ea(e) {
    let { guildId: t, section: r, subsection: l, location: i } = e,
        _ = C.A.getGuild(t);
    if (null == _) return eu();
    let d = p.A.getProfile(t);
    (o = E = _),
        (s = a = d),
        (j = X),
        (K = J),
        (Y = M.XlH.OPEN),
        (x = {}),
        (W = null),
        (u = O.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (Q = E.mfaLevel),
        (er = et),
        (I = null),
        (z = i),
        e_({ section: r ?? n ?? (0, P.x)(), subsection: l ?? null });
}
function eu() {
    (H = !1),
        (Y = M.XlH.CLOSED),
        (o = E = null),
        (k = !1),
        (j = !1),
        (K = null),
        (Z = null),
        (q = 0),
        (en = null),
        (eo = null),
        (eE = null),
        (n = null),
        (l = null),
        (i = null),
        (Q = M.EkJ.NONE),
        (_ = void 0);
}
function e_(e) {
    if (null == E) return !1;
    let t = n;
    if (((n = e.section), (l = e.subsection), n === M.BEX.INSTANT_INVITES || n === M.BEX.INVITES))
        D.Bo.get({ url: M.Rsh.GUILD_INSTANT_INVITES(E.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            A.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (n === M.BEX.INTEGRATIONS || n === M.BEX.ROLES) {
        if (((u = null), t !== e.section)) return ed(e);
    } else
        n === M.BEX.MEMBERS
            ? (u = (0, N.af)(E))
            : n === M.BEX.VANITY_URL
              ? (0, F.Je)(E.id)
              : n === M.BEX.SAFETY &&
                A.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == l ? M.nd0.SAFETY_OVERVIEW : l,
                });
}
function eI(e) {
    return new f.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new R.A(e.inviter) : null,
        channel: (0, U.OY)(e.channel),
        guild: null != e.guild ? (0, y.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: S()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function ed(e) {
    if (null == E || Y !== M.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== E.id)) return !1;
    (0, m.c)(E.id);
}
function eT(e) {
    let { guildId: t } = e;
    if (null == E || E.id !== t) return !1;
    W = null;
}
function ec(e) {
    let { guildId: t, error: r } = e;
    if (null == E || E.id !== t) return !1;
    W = r;
}
class eS extends h.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(C.A, p.A, g.default);
    }
    getMetadata() {
        return er;
    }
    widgetHasChanges() {
        return !1 !== k && (j !== X || K !== J);
    }
    hasChanges() {
        return !T().isEqual(E, o) || !T().isEqual(er, et) || !T().isEqual(a, s) || this.widgetHasChanges();
    }
    isOpen() {
        return H;
    }
    getSavedRouteState() {
        return _;
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
        return !G.w.get(b.wX);
    }
    getGuild() {
        return E;
    }
    getGuildProfile() {
        return a;
    }
    getWidget() {
        return { enabled: j, channelId: K };
    }
    isSubmitting() {
        return Y === M.XlH.SUBMITTING;
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
            integrations: eE,
            section: n,
            subsection: l,
            errors: x,
            guild: E,
            bans: en,
            bansVersion: el,
            invites: eo,
            selectedRoleId: u,
            fetchedEmbed: k,
            embedEnabled: j,
            embedChannelId: K,
            mfaLevel: Q,
            searchQuery: i,
            vanityURLCode: Z,
            vanityURLUses: q,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: er,
            analyticsLocation: z,
            isGuildMetadataLoaded: ee,
            originalProfile: s,
            profile: a,
        };
    }
}
let eh = new eS(
    A.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ea,
              GUILD_SETTINGS_OPEN: function (e) {
                  (H = !0), ea(e);
              },
              GUILD_SETTINGS_CLOSE: eu,
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
                  if (null == a || null == E || E.id !== t) return !1;
                  w.forEach((t) => {
                      if (null != a && e.hasOwnProperty(t)) {
                          let r = e[t];
                          void 0 !== r && (a = { ...a, [t]: r });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: t } = e;
                  x = {};
                  let r = C.A.getGuild(t);
                  null != r && (o = E = r);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: t } = e;
                  return (_ = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (Y = M.XlH.SUBMITTING), (x = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                  Y = M.XlH.OPEN;
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (Y = M.XlH.OPEN), (n = n ?? (0, P.x)()), (l = null), (x = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: e_,
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
                  (k = !0), (X = j = e.enabled), (J = K = e.channelId);
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
                  u = t ?? null;
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
                      new Set([...E.features, M.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == E || t !== E.id) return !1;
                  E = (0, L.hZ)(
                      E,
                      "features",
                      new Set([...E.features, M.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: t, guildId: r } = e;
                  if (null == en || null == E || E.id !== r) return !1;
                  en.set(t.id, { user: t, reason: null }), el++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: r } = e;
                  if (null == en || null == E || E.id !== r) return !1;
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
                  if (null == E || E.id !== e.guild.id) return !1;
                  {
                      let e = C.A.getGuild(E.id);
                      if (null == e) return !1;
                      if (
                          ((s = p.A.getProfile(E.id)),
                          n !== M.BEX.PROFILE && n !== M.BEX.TAG && (a = s),
                          n === M.BEX.PROFILE)
                      ) {
                          (o = e), (E = e);
                          return;
                      }
                      let t = (o = e),
                          r = { ...E };
                      v.forEach((n) => {
                          if (
                              !V.has(n) &&
                              (("rulesChannelId" !== n && "publicUpdatesChannelId" !== n) || r[n] !== b.SP) &&
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
                  eu();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: t } = e;
                  t.id === E?.id && (s = a = t);
              },
              GUILD_PROFILE_UPDATE: eT,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (a?.id == null || !es(a.id)) return !1;
                  t.id === E?.id && ((s = a = t), (W = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: ec,
              GUILD_PROFILE_UPDATE_VISIBILITY: eT,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (a?.id == null || !es(a.id)) return !1;
                  t === E?.id && ((s = a = p.A.getProfile(t)), (W = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: ec,
              USER_CONNECTIONS_UPDATE: ed,
              GUILD_INTEGRATIONS_UPDATE: ed,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (eo = { ...eo }), delete eo[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  eo = { ...eo, [e.invite.code]: eI(e.invite) };
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
                  let l = er.secondaryCategoryIds.indexOf(n);
                  -1 !== l &&
                      ((t = [...er.secondaryCategoryIds]).splice(l, 1), (er = { ...er, secondaryCategoryIds: t })),
                      -1 !== (l = et.secondaryCategoryIds.indexOf(n)) &&
                          ((t = [...et.secondaryCategoryIds]).splice(l, 1), (et = { ...et, secondaryCategoryIds: t }));
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
                      emojiDiscoverabilityEnabled: l,
                      isPublished: i,
                      reasonsToJoin: o,
                      socialLinks: s,
                      about: a,
                  } = e;
                  null != E &&
                      t === E.id &&
                      (er = {
                          ...er,
                          primaryCategoryId: null != r ? r : er.primaryCategoryId,
                          keywords: null != n ? n : er.keywords,
                          emojiDiscoverabilityEnabled: l ?? er.emojiDiscoverabilityEnabled,
                          isPublished: i ?? er.isPublished,
                          reasonsToJoin: null != o ? o : er.reasonsToJoin,
                          socialLinks: null != s ? s : er.socialLinks,
                          about: null != a ? a : er.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: t, errors: r } = e;
                  null != E && t === E.id && (x = r ?? {});
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
                  if (null == E || E.id !== t) return !1;
                  (j = r), (K = n);
              },
          },
);
