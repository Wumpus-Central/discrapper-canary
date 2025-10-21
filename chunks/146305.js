n.d(t, { Z: () => e_ });
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
    v = n(15030),
    _ = n(220685),
    C = n(536442),
    O = n(575258),
    y = n(276687),
    E = n(594174),
    N = n(585483),
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
    G = n(969632),
    M = n(359191),
    U = n(84658),
    B = n(142961),
    F = n(815977),
    H = n(730910),
    W = n(103576),
    z = n(475013),
    V = n(17699),
    K = n(213956),
    Y = n(450377),
    q = n(566084),
    X = n(431301),
    J = n(802005),
    Q = n(675377),
    $ = n(312910),
    ee = n(261317),
    et = n(966357),
    en = n(29605),
    er = n(324330),
    ei = n(651780),
    el = n(353398),
    ea = n(365774),
    es = n(486358),
    eo = n(942478),
    ec = n(845995),
    ed = n(708510),
    eu = n(237245),
    eg = n(658666),
    em = n(224726),
    ep = n(308619),
    ef = n(981631),
    eh = n(135899),
    eb = n(388032),
    ex = n(566386);
function ej(e) {
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
let e_ = {
    getSectionDefinition: function (e, t) {
        let e_ = (0, h.p)(t.guild.id, "guild_settings"),
            eC = (0, d.Vm)(t.guild.id),
            eO =
                !1 === t.guild.features.has(ef.GuildFeatures.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(ef.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            ey =
                e_ && eO
                    ? {
                          label: (0, r.jsx)("div", {
                              className: ex.roleSubLabel,
                              children: eb.intl.string(eb.t.Tn7Koo),
                          }),
                          ariaLabel: eb.intl.string(eb.t.Tn7Koo),
                      }
                    : {
                          label: (0, r.jsx)("div", {
                              className: ex.roleSubLabel,
                              children: eb.intl.string(eb.t["KzCF/6"]),
                          }),
                          ariaLabel: eb.intl.string(eb.t["KzCF/6"]),
                      },
            eE = t.guild.features.has(ef.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ef.pNK.PROFILE:
                return {
                    section: ef.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eb.intl.string(eb.t.txdaxf),
                    ariaLabel: eb.intl.string(eb.t.txdaxf),
                    element: em.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [T.Z],
                        element: ep.Z,
                    },
                };
            case ef.pNK.TAG:
                return {
                    section: ef.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eb.intl.string(eb.t["2QmKZ2"]),
                    ariaLabel: eb.intl.string(eb.t["2QmKZ2"]),
                    element: ee.Z,
                    predicate: () => t.canManageGuild,
                    notice: {
                        stores: [T.Z],
                        element: et.Z,
                    },
                    newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE],
                };
            case ef.pNK.ENGAGEMENT:
                return {
                    section: ef.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eb.intl.string(eb.t["6TAHbx"]),
                    ariaLabel: eb.intl.string(eb.t["6TAHbx"]),
                    element: es.Z,
                    notice: {
                        stores: [T.Z],
                        element: eo.R,
                    },
                };
            case ef.pNK.BOOST_PERKS:
                return {
                    section: ef.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: eb.intl.string(eb.t.UKgg5N),
                    ariaLabel: eb.intl.string(eb.t.UKgg5N),
                    element: X.I,
                    notice: {
                        stores: [T.Z, q.Z],
                        element: J.C,
                    },
                };
            case ef.pNK.INVITES:
                return {
                    section: ef.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eb.intl.string(eb.t.YOt3Om),
                    ariaLabel: eb.intl.string(eb.t.YOt3Om),
                    element: ec.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case ef.pNK.ROLES:
                return {
                    section: ef.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eb.intl.string(eb.t["LPJmL/"]),
                    element: z.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: eb.intl.string(eb.t.KXcEC9),
                    notice: {
                        stores: [W.Z],
                        element: z._,
                    },
                    predicate: () => t.canManageRoles,
                    icon: t.pinPermissionMigrationAvailable ? (0, r.jsx)("div", { className: ex.redDot }) : void 0,
                };
            case ef.pNK.EMOJI:
                return {
                    section: ef.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eb.intl.string(eb.t.sMOuuS),
                    element: en.ZP,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.pNK.STICKERS:
                return {
                    section: ef.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eb.intl.string(eb.t.R5nQkS),
                    ariaLabel: eb.intl.string(eb.t.R5nQkS),
                    element: $.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.pNK.SOUNDBOARD:
                return {
                    section: ef.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eb.intl.string(eb.t.OWQNYr),
                    ariaLabel: eb.intl.string(eb.t.OWQNYr),
                    element: Q.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.pNK.GUILD_TEMPLATES:
                return {
                    section: ef.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(ea.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eb.intl.string(eb.t.KUw7Ss),
                    element: el.ZP,
                    notice: {
                        stores: [el.Sf],
                        element: el.Q5,
                    },
                    predicate: () => t.canManageGuild,
                };
            case ef.pNK.ACCESS:
                return {
                    section: ef.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eb.intl.string(eb.t.YJlvBM),
                    element: ed.O,
                    notice: {
                        stores: [eg.Z],
                        element: eu.w,
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: eb.intl.string(eb.t.YJlvBM),
                };
            case ef.pNK.INTEGRATIONS:
                return {
                    section: ef.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eb.intl.string(eb.t.CIsNZw),
                    ariaLabel: eb.intl.string(eb.t.CIsNZw),
                    element: k.Z,
                    notice: {
                        stores: [L.default, T.Z],
                        element: k.j,
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case ef.pNK.APP_DIRECTORY:
                return {
                    section: ef.pNK.APP_DIRECTORY,
                    label: (0, r.jsx)(P.K, {}),
                    ariaLabel: eb.intl.string(eb.t.AKcFUj),
                    onClick: () => {
                        (0, P.O)({
                            guildId: t.guild.id,
                            section: e,
                        });
                    },
                };
            case ef.pNK.SAFETY:
                return {
                    section: ef.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eb.intl.string(eb.t["suhY+Y"]),
                    ariaLabel: eb.intl.string(eb.t["suhY+Y"]),
                    element: K.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(ef.GuildFeatures.COMMUNITY),
                };
            case ef.pNK.MODERATION:
                return {
                    section: ef.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eb.intl.string(eb.t["suhY+Y"]),
                    element: Y.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(ef.GuildFeatures.COMMUNITY),
                };
            case ef.pNK.GUILD_AUTOMOD:
                return {
                    section: ef.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)("div", {
                        className: ex.landingPageTabLink,
                        children: eb.intl.string(eb.t.uRelgx),
                    }),
                    ariaLabel: eb.intl.string(eb.t.uRelgx),
                    element: m.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(ef.GuildFeatures.COMMUNITY) &&
                        ((0, g.Nb)(t.guild.id) || (0, g.ze)(t.guild.id)),
                };
            case ef.pNK.AUDIT_LOG:
                return {
                    section: ef.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eb.intl.string(eb.t.SPWLyT),
                    element: w.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case ef.pNK.BANS:
                return {
                    section: ef.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eb.intl.string(eb.t.ZbeITS),
                    element: V.Z,
                    predicate: () => t.canManageBans,
                };
            case ef.pNK.COMMUNITY:
                let eN = eb.intl.string(eb.t.ElKTeb);
                return (
                    t.guild.features.has(ef.GuildFeatures.COMMUNITY) && (eN = eb.intl.string(eb.t["8nY2LE"])),
                    {
                        section: ef.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(ef.GuildFeatures.COMMUNITY)
                            ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eN,
                        element: R.Z,
                        ariaLabel: eN,
                        newIndicator:
                            !t.guild.features.has(ef.GuildFeatures.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= eh.U3 &&
                            C.qc.hasHotspot(C.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [T.Z],
                            element: R.X,
                        },
                    }
                );
            case ef.pNK.ONBOARDING:
                return {
                    section: ef.pNK.ONBOARDING,
                    label: eb.intl.string(eb.t["LdxCK/"]),
                    element: F.Z,
                    ariaLabel: eb.intl.string(eb.t["LdxCK/"]),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [M.Z, G.Z],
                        element: H.Z,
                    },
                    predicate: () => (0, f.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (p.Z.getEnabled(e)) return eb.intl.string(eb.t.pPSmxg).toUpperCase();
                        if ((0, B.C)(e)) return eb.intl.string(eb.t["HDF4o/"]).toUpperCase();
                        let n = U.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return eb.intl.formatToPlainString(eb.t["5r28iW"], {
                                count: r + 1,
                                total: n.length,
                            });
                    })(t.guild.id, t.onboardingStep),
                };
            case ef.pNK.ANALYTICS:
                return {
                    section: ef.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eb.intl.string(eb.t["0wWfUG"]),
                    ariaLabel: eb.intl.string(eb.t["0wWfUG"]),
                    element: Z.Z,
                    predicate: () => eE,
                };
            case ef.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ef.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)("div", {
                        className: ex.landingPageTabLink,
                        children: [eb.intl.string(eb.t.kGlQGF), " ", (0, r.jsx)(u.Z, {})],
                    }),
                    ariaLabel: eb.intl.string(eb.t.kGlQGF),
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
                            (t.guild.features.has(ef.GuildFeatures.DISCOVERABLE) ||
                                !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished))
                        );
                    },
                };
            case ef.pNK.COMMUNITY_WELCOME:
                return {
                    section: ef.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eb.intl.string(eb.t["2rkmDr"]),
                    ariaLabel: eb.intl.string(eb.t["2rkmDr"]),
                    element: D.Z,
                    notice: {
                        stores: [O.Z],
                        element: y.Z,
                    },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(ef.GuildFeatures.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(ef.GuildFeatures.GUILD_SERVER_GUIDE),
                };
            case ef.pNK.ROLE_SUBSCRIPTIONS:
                return ev(ej({}, ey), {
                    section: ef.pNK.ROLE_SUBSCRIPTIONS,
                    element: v.Z,
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
            case ef.pNK.GUILD_PRODUCTS:
                return {
                    section: ef.pNK.GUILD_PRODUCTS,
                    label: eb.intl.string(eb.t.X6h2gz),
                    ariaLabel: eb.intl.string(eb.t.X6h2gz),
                    element: b.Z,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        (0, h.p)(t.guild.id, "guild_product_settings_predicate") &&
                        (0, x.sy)(t.guild),
                };
            case ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eb.intl.string(eb.t.ipTYsk),
                    ariaLabel: eb.intl.string(eb.t.ipTYsk),
                    element: _.Z,
                    predicate: () => t.monetizationPredicate() && (0, x.sy)(t.guild),
                };
            case ef.pNK.GUILD_PREMIUM:
                return {
                    section: ef.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eb.intl.string(eb.t["8+VX4z"]),
                    ariaLabel: eb.intl.string(eb.t["8+VX4z"]),
                    element: ei.Z,
                    className: ex.serverBoostTabItem,
                    icon: (0, r.jsx)(a.Ucv, {
                        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        size: "sm",
                        className: ex.icon,
                    }),
                };
            case ef.pNK.MEMBERS:
                return {
                    section: ef.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(er.$r, {}),
                    ariaLabel: eb.intl.string(eb.t["9Oq93m"]),
                    element: er.ZP,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                    onClick: () => {
                        (0, er.JA)();
                    },
                };
            case ef.pNK.DELETE:
                return {
                    section: ef.pNK.DELETE,
                    onClick() {
                        let e = E.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = {
                                header: eb.intl.formatToPlainString(eb.t.us7mC1, { name: i }),
                                confirmText: eb.intl.string(eb.t.l3hWP6),
                                cancelText: eb.intl.string(eb.t["ETE/oC"]),
                                onConfirm: () => {
                                    N.S.subscribeOnce(ef.CkL.LAYER_POP_COMPLETE, () => {
                                        S.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, s.xf)();
                                },
                            };
                        e.mfaEnabled
                            ? (0, a.h7j)((e) =>
                                  (0, r.jsx)(
                                      a.ConfirmModal,
                                      ev(ej({}, e, l), {
                                          children: (0, r.jsx)(a.Text, {
                                              variant: "text-md/normal",
                                              children: eb.intl.format(eb.t["Zuo+Vd"], { name: i }),
                                          }),
                                      }),
                                  ),
                              )
                            : (0, a.ZDy)(async () => {
                                  let { default: e } = await n.e("95112").then(n.bind(n, 647748));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ev(ej({}, t, l), {
                                              validationText: i,
                                              instructionText: eb.intl.string(eb.t.abprOC),
                                              errorText: eb.intl.string(eb.t["c2/DS/"]),
                                              children: eb.intl.format(eb.t["Zuo+Vd"], { name: i }),
                                          }),
                                      );
                              });
                    },
                    label: eb.intl.string(eb.t.l3hWP6),
                    ariaLabel: eb.intl.string(eb.t.l3hWP6),
                    icon: (0, r.jsx)(a.XHJ, {
                        size: "xs",
                        color: "currentColor",
                    }),
                    variant: "destructive",
                    predicate: () => t.isOwnerWithRequiredMfaLevel,
                };
            case ef.pNK.LANDING:
            case ef.pNK.MEMBER_EDIT:
            case ef.pNK.MEMBER_TIMEOUT:
            case ef.pNK.MEMBER_KICK:
            case ef.pNK.MEMBER_BAN:
            case ef.pNK.CHANNELS:
            case ef.pNK.ROLE_EDIT:
            case ef.pNK.ROLE_PERMISSIONS:
            case ef.pNK.MEMBER_VERIFICATION:
            case ef.pNK.INTEGRATION_SETTINGS:
            case ef.pNK.SECURITY:
            case ef.pNK.AUDIT_LOG_FILTER:
            case ef.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case ef.pNK.VANITY_URL:
            case ef.pNK.INSTANT_INVITES:
            case ef.pNK.OVERVIEW:
            case ef.pNK.WEBHOOKS:
            case ef.pNK.EDIT_WEBHOOK:
            case ef.pNK.INTEGRATION_PLATFORM:
            case ef.pNK.LOBBIES_LINKED:
            case ef.pNK.EDIT_LINKED_LOBBY:
            case ef.pNK.CHANNELS_FOLLOWED:
            case ef.pNK.COMMUNITY_INTRO:
            case ef.pNK.ROLE_EDIT_REFRESH:
            case ef.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case ef.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case ef.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case ef.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case ef.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case ef.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, I.vE)(e);
        }
    },
};
