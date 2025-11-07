n.d(t, { Z: () => eO });
var r = n(951288),
    i = n(990547),
    l = n(704215),
    a = n(481060),
    s = n(37234),
    o = n(493544),
    c = n(709246),
    d = n(223892),
    u = n(688465),
    g = n(676317),
    m = n(874993),
    p = n(45966),
    f = n(637853),
    h = n(352981),
    b = n(610403),
    x = n(923726),
    j = n(303737),
    _ = n(15030),
    v = n(220685),
    O = n(536442),
    C = n(575258),
    y = n(276687),
    N = n(594174),
    E = n(585483),
    I = n(823379),
    S = n(434404),
    T = n(999382),
    P = n(931805),
    w = n(853714),
    Z = n(626137),
    R = n(822591),
    D = n(782604),
    A = n(614439),
    L = n(145260),
    k = n(789574),
    G = n(926958),
    M = n(969632),
    U = n(359191),
    B = n(84658),
    F = n(142961),
    H = n(815977),
    W = n(730910),
    z = n(103576),
    V = n(475013),
    K = n(17699),
    Y = n(213956),
    q = n(450377),
    X = n(566084),
    J = n(431301),
    Q = n(802005),
    $ = n(675377),
    ee = n(312910),
    et = n(261317),
    en = n(966357),
    er = n(29605),
    ei = n(324330),
    el = n(651780),
    ea = n(353398),
    es = n(365774),
    eo = n(486358),
    ec = n(942478),
    ed = n(845995),
    eu = n(708510),
    eg = n(237245),
    em = n(658666),
    ep = n(224726),
    ef = n(308619),
    eh = n(981631),
    eb = n(135899),
    ex = n(388032),
    ej = n(566386);
function e_(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function ev(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eO = {
    getSectionDefinition: function (e, t) {
        let eO = (0, h.p)(t.guild.id, "guild_settings"),
            eC = (0, d.Vm)(t.guild.id),
            ey =
                !1 === t.guild.features.has(eh.GuildFeatures.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(eh.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            eN =
                eO && ey
                    ? {
                          label: (0, r.jsx)("div", {
                              className: ej.roleSubLabel,
                              children: ex.intl.string(ex.t.Tn7Koo),
                          }),
                          ariaLabel: ex.intl.string(ex.t.Tn7Koo),
                      }
                    : {
                          label: (0, r.jsx)("div", {
                              className: ej.roleSubLabel,
                              children: ex.intl.string(ex.t["KzCF/6"]),
                          }),
                          ariaLabel: ex.intl.string(ex.t["KzCF/6"]),
                      },
            eE = t.guild.features.has(eh.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case eh.pNK.PROFILE:
                return {
                    section: eh.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ex.intl.string(ex.t.txdaxf),
                    ariaLabel: ex.intl.string(ex.t.txdaxf),
                    element: ep.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [T.Z],
                        element: ef.Z,
                    },
                };
            case eh.pNK.TAG:
                return {
                    section: eh.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ex.intl.string(ex.t["2QmKZ2"]),
                    ariaLabel: ex.intl.string(ex.t["2QmKZ2"]),
                    element: et.Z,
                    predicate: () => t.canManageGuild,
                    notice: {
                        stores: [T.Z],
                        element: en.Z,
                    },
                    newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE],
                };
            case eh.pNK.ENGAGEMENT:
                return {
                    section: eh.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ex.intl.string(ex.t["6TAHbx"]),
                    ariaLabel: ex.intl.string(ex.t["6TAHbx"]),
                    element: eo.Z,
                    notice: {
                        stores: [T.Z],
                        element: ec.R,
                    },
                };
            case eh.pNK.BOOST_PERKS:
                return {
                    section: eh.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ex.intl.string(ex.t.UKgg5N),
                    ariaLabel: ex.intl.string(ex.t.UKgg5N),
                    element: J.I,
                    notice: {
                        stores: [T.Z, X.Z],
                        element: Q.C,
                    },
                };
            case eh.pNK.INVITES:
                return {
                    section: eh.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ex.intl.string(ex.t.YOt3Om),
                    ariaLabel: ex.intl.string(ex.t.YOt3Om),
                    element: ed.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case eh.pNK.ROLES:
                return {
                    section: eh.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ex.intl.string(ex.t["LPJmL/"]),
                    element: V.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: ex.intl.string(ex.t.KXcEC9),
                    notice: {
                        stores: [z.Z],
                        element: V._,
                    },
                    predicate: () => t.canManageRoles,
                    icon: t.permissionMigrationAvailable ? (0, r.jsx)("div", { className: ej.redDot }) : void 0,
                };
            case eh.pNK.EMOJI:
                return {
                    section: eh.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ex.intl.string(ex.t.sMOuuS),
                    element: er.ZP,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eh.pNK.STICKERS:
                return {
                    section: eh.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ex.intl.string(ex.t.R5nQkS),
                    ariaLabel: ex.intl.string(ex.t.R5nQkS),
                    element: ee.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eh.pNK.SOUNDBOARD:
                return {
                    section: eh.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ex.intl.string(ex.t.OWQNYr),
                    ariaLabel: ex.intl.string(ex.t.OWQNYr),
                    element: $.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eh.pNK.GUILD_TEMPLATES:
                return {
                    section: eh.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(es.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ex.intl.string(ex.t.KUw7Ss),
                    element: ea.ZP,
                    notice: {
                        stores: [ea.Sf],
                        element: ea.Q5,
                    },
                    predicate: () => t.canManageGuild,
                };
            case eh.pNK.ACCESS:
                return {
                    section: eh.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ex.intl.string(ex.t.YJlvBM),
                    element: eu.O,
                    notice: {
                        stores: [em.Z],
                        element: eg.w,
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: ex.intl.string(ex.t.YJlvBM),
                };
            case eh.pNK.INTEGRATIONS:
                return {
                    section: eh.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ex.intl.string(ex.t.CIsNZw),
                    ariaLabel: ex.intl.string(ex.t.CIsNZw),
                    element: k.Z,
                    notice: {
                        stores: [L.default, T.Z],
                        element: k.j,
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case eh.pNK.APP_DIRECTORY:
                return {
                    section: eh.pNK.APP_DIRECTORY,
                    label: (0, r.jsx)(P.K, {}),
                    ariaLabel: ex.intl.string(ex.t.AKcFUj),
                    onClick: () => {
                        (0, P.O)({
                            guildId: t.guild.id,
                            section: e,
                        });
                    },
                };
            case eh.pNK.SAFETY:
                return {
                    section: eh.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ex.intl.string(ex.t["suhY+Y"]),
                    ariaLabel: ex.intl.string(ex.t["suhY+Y"]),
                    element: Y.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(eh.GuildFeatures.COMMUNITY),
                };
            case eh.pNK.MODERATION:
                return {
                    section: eh.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ex.intl.string(ex.t["suhY+Y"]),
                    element: q.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(eh.GuildFeatures.COMMUNITY),
                };
            case eh.pNK.GUILD_AUTOMOD:
                return {
                    section: eh.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)("div", {
                        className: ej.landingPageTabLink,
                        children: ex.intl.string(ex.t.uRelgx),
                    }),
                    ariaLabel: ex.intl.string(ex.t.uRelgx),
                    element: m.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(eh.GuildFeatures.COMMUNITY) &&
                        ((0, g.Nb)(t.guild.id) || (0, g.ze)(t.guild.id)),
                };
            case eh.pNK.AUDIT_LOG:
                return {
                    section: eh.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ex.intl.string(ex.t.SPWLyT),
                    element: w.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case eh.pNK.BANS:
                return {
                    section: eh.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ex.intl.string(ex.t.ZbeITS),
                    element: K.Z,
                    predicate: () => t.canManageBans,
                };
            case eh.pNK.COMMUNITY:
                let eI = ex.intl.string(ex.t.ElKTeb);
                return (
                    t.guild.features.has(eh.GuildFeatures.COMMUNITY) && (eI = ex.intl.string(ex.t["8nY2LE"])),
                    {
                        section: eh.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(eh.GuildFeatures.COMMUNITY)
                            ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eI,
                        element: R.Z,
                        ariaLabel: eI,
                        newIndicator:
                            !t.guild.features.has(eh.GuildFeatures.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= eb.U3 &&
                            O.qc.hasHotspot(O.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [T.Z],
                            element: R.X,
                        },
                    }
                );
            case eh.pNK.ONBOARDING:
                return {
                    section: eh.pNK.ONBOARDING,
                    label: ex.intl.string(ex.t["LdxCK/"]),
                    element: H.Z,
                    ariaLabel: ex.intl.string(ex.t["LdxCK/"]),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [U.Z, M.Z, G.Z],
                        element: W.Z,
                    },
                    predicate: () => (0, f.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (p.Z.getEnabled(e)) return ex.intl.string(ex.t.pPSmxg).toUpperCase();
                        if ((0, F.C)(e)) return ex.intl.string(ex.t["HDF4o/"]).toUpperCase();
                        let n = B.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return ex.intl.formatToPlainString(ex.t["5r28iW"], {
                                count: r + 1,
                                total: n.length,
                            });
                    })(t.guild.id, t.onboardingStep),
                };
            case eh.pNK.ANALYTICS:
                return {
                    section: eh.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ex.intl.string(ex.t["0wWfUG"]),
                    ariaLabel: ex.intl.string(ex.t["0wWfUG"]),
                    element: Z.Z,
                    predicate: () => eE,
                };
            case eh.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: eh.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)("div", {
                        className: ej.landingPageTabLink,
                        children: [ex.intl.string(ex.t.kGlQGF), " ", (0, r.jsx)(u.Z, {})],
                    }),
                    ariaLabel: ex.intl.string(ex.t.kGlQGF),
                    element: A.Z,
                    notice: {
                        stores: [T.Z],
                        element: A.J,
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return (
                            t.canManageGuild &&
                            (t.guild.features.has(eh.GuildFeatures.DISCOVERABLE) ||
                                !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished))
                        );
                    },
                };
            case eh.pNK.COMMUNITY_WELCOME:
                return {
                    section: eh.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ex.intl.string(ex.t["2rkmDr"]),
                    ariaLabel: ex.intl.string(ex.t["2rkmDr"]),
                    element: D.Z,
                    notice: {
                        stores: [C.Z],
                        element: y.Z,
                    },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(eh.GuildFeatures.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(eh.GuildFeatures.GUILD_SERVER_GUIDE),
                };
            case eh.pNK.ROLE_SUBSCRIPTIONS:
                return ev(e_({}, eN), {
                    section: eh.pNK.ROLE_SUBSCRIPTIONS,
                    element: _.Z,
                    type: o.bT.CUSTOM,
                    predicate: () =>
                        eC
                            ? t.monetizationPredicate() &&
                              ((0, x.sy)(t.guild) || c.Z.hasSeenCreatorOnboardingForGuild(t.guild.id))
                            : t.monetizationPredicate(),
                    newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild)
                        ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE]
                        : null,
                });
            case eh.pNK.GUILD_PRODUCTS:
                return {
                    section: eh.pNK.GUILD_PRODUCTS,
                    label: ex.intl.string(ex.t.X6h2gz),
                    ariaLabel: ex.intl.string(ex.t.X6h2gz),
                    element: b.Z,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        (0, h.p)(t.guild.id, "guild_product_settings_predicate") &&
                        (0, x.sy)(t.guild),
                };
            case eh.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: eh.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ex.intl.string(ex.t.ipTYsk),
                    ariaLabel: ex.intl.string(ex.t.ipTYsk),
                    element: v.Z,
                    predicate: () => t.monetizationPredicate() && (0, x.sy)(t.guild),
                };
            case eh.pNK.GUILD_PREMIUM:
                return {
                    section: eh.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ex.intl.string(ex.t["8+VX4z"]),
                    ariaLabel: ex.intl.string(ex.t["8+VX4z"]),
                    element: el.Z,
                    className: ej.serverBoostTabItem,
                    icon: (0, r.jsx)(a.Ucv, {
                        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        size: "sm",
                        className: ej.icon,
                    }),
                };
            case eh.pNK.MEMBERS:
                return {
                    section: eh.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(ei.$r, {}),
                    ariaLabel: ex.intl.string(ex.t["9Oq93m"]),
                    element: ei.ZP,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                    onClick: () => {
                        (0, ei.JA)();
                    },
                };
            case eh.pNK.DELETE:
                return {
                    section: eh.pNK.DELETE,
                    onClick() {
                        let e = N.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = () => {
                                E.S.subscribeOnce(eh.CkL.LAYER_POP_COMPLETE, () => {
                                    S.Z.deleteGuild(t.guild.id, i);
                                }),
                                    (0, s.xf)();
                            };
                        e.mfaEnabled
                            ? (0, a.h7j)((e) =>
                                  (0, r.jsx)(
                                      a.ConfirmModal,
                                      ev(e_({}, e), {
                                          header: ex.intl.formatToPlainString(ex.t.us7mC1, { name: i }),
                                          confirmText: ex.intl.string(ex.t.l3hWP6),
                                          cancelText: ex.intl.string(ex.t["ETE/oC"]),
                                          onConfirm: l,
                                          children: (0, r.jsx)(a.Text, {
                                              variant: "text-md/normal",
                                              children: ex.intl.format(ex.t["Zuo+Vd"], { name: i }),
                                          }),
                                      }),
                                  ),
                              )
                            : (0, a.ZDy)(async () => {
                                  let { default: e } = await n.e("93197").then(n.bind(n, 848876));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ev(e_({}, t), {
                                              onConfirm: l,
                                              guildName: i,
                                          }),
                                      );
                              });
                    },
                    label: ex.intl.string(ex.t.l3hWP6),
                    ariaLabel: ex.intl.string(ex.t.l3hWP6),
                    icon: (0, r.jsx)(a.XHJ, {
                        size: "xs",
                        color: "currentColor",
                    }),
                    variant: "destructive",
                    predicate: () => t.isOwnerWithRequiredMfaLevel,
                };
            case eh.pNK.LANDING:
            case eh.pNK.MEMBER_EDIT:
            case eh.pNK.MEMBER_TIMEOUT:
            case eh.pNK.MEMBER_KICK:
            case eh.pNK.MEMBER_BAN:
            case eh.pNK.CHANNELS:
            case eh.pNK.ROLE_EDIT:
            case eh.pNK.ROLE_PERMISSIONS:
            case eh.pNK.MEMBER_VERIFICATION:
            case eh.pNK.INTEGRATION_SETTINGS:
            case eh.pNK.SECURITY:
            case eh.pNK.AUDIT_LOG_FILTER:
            case eh.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case eh.pNK.VANITY_URL:
            case eh.pNK.INSTANT_INVITES:
            case eh.pNK.OVERVIEW:
            case eh.pNK.WEBHOOKS:
            case eh.pNK.EDIT_WEBHOOK:
            case eh.pNK.INTEGRATION_PLATFORM:
            case eh.pNK.LOBBIES_LINKED:
            case eh.pNK.EDIT_LINKED_LOBBY:
            case eh.pNK.CHANNELS_FOLLOWED:
            case eh.pNK.COMMUNITY_INTRO:
            case eh.pNK.ROLE_EDIT_REFRESH:
            case eh.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case eh.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case eh.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case eh.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case eh.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case eh.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, I.vE)(e);
        }
    },
};
