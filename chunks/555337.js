let r, l, i, E, o, s, a, u, _, I;
n.d(t, { A: () => eh }), n(938796);
var d = n(735438),
    T = n.n(d),
    S = n(989349),
    c = n.n(S),
    h = n(17928),
    D = n(636537),
    G = n(506774),
    A = n(228366),
    L = n(867051),
    U = n(837011),
    p = n(95701),
    N = n(260509),
    f = n(671759),
    R = n(889227),
    C = n(71393),
    g = n(287809),
    y = n(860689),
    O = n(935208),
    m = n(794967),
    F = n(310527),
    P = n(595818),
    M = n(652215),
    B = n(324580),
    b = n(124759);
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
    k = null,
    W = !1,
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
    en = $,
    er = null,
    el = 0,
    ei = null,
    eE = null,
    eo = null;
function es(e) {
    if (null == o || null == E || E.id !== e) return !1;
    let t = C.A.getGuild(e);
    return null != t && (E === o ? (o = E = t) : (E = t), !0);
}
function ea(e) {
    let { guildId: t, section: n, subsection: l, location: i } = e,
        _ = C.A.getGuild(t);
    if (null == _) return eu();
    let d = U.A.getProfile(t);
    (E = o = _),
        (s = a = d),
        (j = X),
        (K = J),
        (Y = M.XlH.OPEN),
        (x = {}),
        (k = null),
        (u = O.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (Q = o.mfaLevel),
        (en = et),
        (I = null),
        (z = i),
        e_({ section: n ?? r ?? (0, P.x)(), subsection: l ?? null });
}
function eu() {
    (H = !1),
        (Y = M.XlH.CLOSED),
        (E = o = null),
        (W = !1),
        (j = !1),
        (K = null),
        (Z = null),
        (q = 0),
        (er = null),
        (eE = null),
        (eo = null),
        (r = null),
        (l = null),
        (i = null),
        (Q = M.EkJ.NONE),
        (_ = void 0);
}
function e_(e) {
    if (null == o) return !1;
    let t = r;
    if (((r = e.section), (l = e.subsection), r === M.BEX.INSTANT_INVITES || r === M.BEX.INVITES))
        D.Bo.get({ url: M.Rsh.GUILD_INSTANT_INVITES(o.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            A.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (r === M.BEX.INTEGRATIONS || r === M.BEX.ROLES) {
        if (((u = null), t !== e.section)) return ed(e);
    } else
        r === M.BEX.MEMBERS
            ? (u = (0, N.af)(o))
            : r === M.BEX.VANITY_URL
              ? (0, F.Je)(o.id)
              : r === M.BEX.SAFETY &&
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
        channel: (0, p.OY)(e.channel),
        guild: null != e.guild ? (0, y.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: c()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function ed(e) {
    if (null == o || Y !== M.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id)) return !1;
    (0, m.c)(o.id);
}
function eT(e) {
    let { guildId: t } = e;
    if (null == o || o.id !== t) return !1;
    k = null;
}
function eS(e) {
    let { guildId: t, error: n } = e;
    if (null == o || o.id !== t) return !1;
    k = n;
}
class ec extends h.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(C.A, U.A, g.default);
    }
    getMetadata() {
        return en;
    }
    widgetHasChanges() {
        return !1 !== W && (j !== X || K !== J);
    }
    hasChanges() {
        return !T().isEqual(o, E) || !T().isEqual(en, et) || !T().isEqual(a, s) || this.widgetHasChanges();
    }
    isOpen() {
        return H;
    }
    getSavedRouteState() {
        return _;
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
        return !G.w.get(b.wX);
    }
    getGuild() {
        return o;
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
        return k;
    }
    getSelectedRoleId() {
        return u;
    }
    getSlug() {
        return I;
    }
    getBans() {
        return [er, el];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eo,
            section: r,
            subsection: l,
            errors: x,
            guild: o,
            bans: er,
            bansVersion: el,
            invites: eE,
            selectedRoleId: u,
            fetchedEmbed: W,
            embedEnabled: j,
            embedChannelId: K,
            mfaLevel: Q,
            searchQuery: i,
            vanityURLCode: Z,
            vanityURLUses: q,
            originalGuild: E,
            hasChanges: this.hasChanges(),
            guildMetadata: en,
            analyticsLocation: z,
            isGuildMetadataLoaded: ee,
            originalProfile: s,
            profile: a,
        };
    }
}
let eh = new ec(
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
                  if (null == o) return !1;
                  v.forEach((t) => {
                      null != o && e.hasOwnProperty(t) && (o = (0, L.hZ)(o, t, e[t] ?? null));
                  }),
                      null == (t = o) || v.some((e) => t[e] !== E[e]) || (o = E);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (null == a || null == o || o.id !== t) return !1;
                  w.forEach((t) => {
                      if (null != a && e.hasOwnProperty(t)) {
                          let n = e[t];
                          void 0 !== n && (a = { ...a, [t]: n });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: t } = e;
                  x = {};
                  let n = C.A.getGuild(t);
                  null != n && (E = o = n);
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
                  (Y = M.XlH.OPEN), (r = r ?? (0, P.x)()), (l = null), (x = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: e_,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  i = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (er = e.bans.reduce(
                      (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                      new Map(),
                  )),
                      el++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: t, guildId: n } = e;
                  (ei !== n || null == er) && ((ei = n), (er = new Map())),
                      (er = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), er)),
                      el++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  eE = e.invites.reduce((e, t) => ((e[t.code] = eI(t)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  (W = !0), (X = j = e.enabled), (J = K = e.channelId);
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
                  eo = e.integrations;
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == o || t !== o.id) return !1;
                  o = (0, L.hZ)(
                      o,
                      "features",
                      new Set([...o.features, M.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == o || t !== o.id) return !1;
                  o = (0, L.hZ)(
                      o,
                      "features",
                      new Set([...o.features, M.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == er || null == o || o.id !== n) return !1;
                  er.set(t.id, { user: t, reason: null }), el++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == er || null == o || o.id !== n) return !1;
                  er.delete(t.id), el++;
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
                  let { guildId: t, roleId: n } = e;
                  if (!es(t)) return !1;
                  u === n && (u = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  {
                      let e = C.A.getGuild(o.id);
                      if (null == e) return !1;
                      if (
                          ((s = U.A.getProfile(o.id)),
                          r !== M.BEX.PROFILE && r !== M.BEX.TAG && (a = s),
                          r === M.BEX.PROFILE)
                      ) {
                          (E = e), (o = e);
                          return;
                      }
                      let t = (E = e),
                          n = { ...o };
                      v.forEach((r) => {
                          if (
                              !V.has(r) &&
                              (("rulesChannelId" !== r && "publicUpdatesChannelId" !== r) || n[r] !== b.SP) &&
                              "features" !== r
                          ) {
                              if ("ownerConfiguredContentLevel" === r) {
                                  t = (0, L.hZ)(t, r, e[r]);
                                  return;
                              }
                              t = (0, L.hZ)(t, r, n[r]);
                          }
                      }),
                          (o = t);
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  eu();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: t } = e;
                  t.id === o?.id && (s = a = t);
              },
              GUILD_PROFILE_UPDATE: eT,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (a?.id == null || !es(a.id)) return !1;
                  t.id === o?.id && ((s = a = t), (k = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eS,
              GUILD_PROFILE_UPDATE_VISIBILITY: eT,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (a?.id == null || !es(a.id)) return !1;
                  t === o?.id && ((s = a = U.A.getProfile(t)), (k = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eS,
              USER_CONNECTIONS_UPDATE: ed,
              GUILD_INTEGRATIONS_UPDATE: ed,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (eE = { ...eE }), delete eE[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  eE = { ...eE, [e.invite.code]: eI(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: t, metadata: n } = e;
                  null != o &&
                      t === o.id &&
                      (!1 === ee && (ee = !0),
                      (en = et =
                          {
                              primaryCategoryId: n.primaryCategoryId ?? B.ig,
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
                      (x = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  et = en = $;
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
                  let l = en.secondaryCategoryIds.indexOf(r);
                  -1 !== l &&
                      ((t = [...en.secondaryCategoryIds]).splice(l, 1), (en = { ...en, secondaryCategoryIds: t })),
                      -1 !== (l = et.secondaryCategoryIds.indexOf(r)) &&
                          ((t = [...et.secondaryCategoryIds]).splice(l, 1), (et = { ...et, secondaryCategoryIds: t }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != o && t === o.id && (x = n ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: t,
                      primaryCategoryId: n,
                      keywords: r,
                      emojiDiscoverabilityEnabled: l,
                      isPublished: i,
                      reasonsToJoin: E,
                      socialLinks: s,
                      about: a,
                  } = e;
                  null != o &&
                      t === o.id &&
                      (en = {
                          ...en,
                          primaryCategoryId: null != n ? n : en.primaryCategoryId,
                          keywords: null != r ? r : en.keywords,
                          emojiDiscoverabilityEnabled: l ?? en.emojiDiscoverabilityEnabled,
                          isPublished: i ?? en.isPublished,
                          reasonsToJoin: null != E ? E : en.reasonsToJoin,
                          socialLinks: null != s ? s : en.socialLinks,
                          about: null != a ? a : en.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != o && t === o.id && (x = n ?? {});
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
                  let { guildId: t, enabled: n, channelId: r } = e;
                  if (null == o || o.id !== t) return !1;
                  (j = n), (K = r);
              },
          },
);
