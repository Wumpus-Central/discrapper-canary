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
    m = n(676317),
    g = n(874993),
    p = n(45966),
    h = n(637853),
    f = n(352981),
    b = n(610403),
    x = n(923726),
    j = n(303737),
    v = n(15030),
    _ = n(220685),
    O = n(536442),
    y = n(575258),
    C = n(276687),
    N = n(594174),
    E = n(585483),
    I = n(823379),
    S = n(434404),
    T = n(360606),
    P = n(946724),
    w = n(999382),
    R = n(44550),
    Z = n(853714),
    D = n(969632),
    A = n(359191),
    L = n(84658),
    k = n(142961),
    M = n(730910),
    G = n(475013),
    U = n(213956),
    B = n(702478),
    F = n(60986),
    H = n(247031),
    z = n(787561),
    W = n(579648),
    V = n(460461),
    Y = n(29605),
    K = n(365307),
    X = n(324330),
    q = n(495300),
    J = n(651780),
    Q = n(279542),
    $ = n(665324),
    ee = n(208150),
    et = n(353398),
    en = n(365774),
    er = n(178387),
    ei = n(993097),
    el = n(486358),
    ea = n(942478),
    es = n(845995),
    eo = n(708510),
    ec = n(237245),
    ed = n(658666),
    eu = n(224726),
    em = n(308619),
    eg = n(254925),
    ep = n(209402),
    eh = n(981631),
    ef = n(135899),
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
        let e_ = (0, f.p)(t.guild.id, "guild_settings"),
            eO = (0, d.Vm)(t.guild.id),
            ey =
                !1 === t.guild.features.has(eh.oNc.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(eh.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            eC =
                e_ && ey
                    ? {
                          label: (0, r.jsx)("div", {
                              className: ex.roleSubLabel,
                              children: eb.intl.string(eb.t.Tn7Koq),
                          }),
                          ariaLabel: eb.intl.string(eb.t.Tn7Koq),
                      }
                    : {
                          label: (0, r.jsx)("div", {
                              className: ex.roleSubLabel,
                              children: eb.intl.string(eb.t["KzCF//"]),
                          }),
                          ariaLabel: eb.intl.string(eb.t["KzCF//"]),
                      },
            eN = t.guild.features.has(eh.oNc.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case eh.pNK.PROFILE:
                return {
                    section: eh.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eb.intl.string(eb.t.txdaxc),
                    ariaLabel: eb.intl.string(eb.t.txdaxc),
                    element: eu.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [w.Z],
                        element: em.Z,
                    },
                };
            case eh.pNK.TAG:
                return {
                    section: eh.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eb.intl.string(eb.t["2QmKZ2"]),
                    ariaLabel: eb.intl.string(eb.t["2QmKZ2"]),
                    element: eg.Z,
                    predicate: () => t.canManageGuild,
                    notice: {
                        stores: [w.Z],
                        element: ep.Z,
                    },
                    newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE],
                };
            case eh.pNK.ENGAGEMENT:
                return {
                    section: eh.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eb.intl.string(eb.t["6TAHb2"]),
                    ariaLabel: eb.intl.string(eb.t["6TAHb2"]),
                    element: el.Z,
                    notice: {
                        stores: [w.Z],
                        element: ea.R,
                    },
                };
            case eh.pNK.BOOST_PERKS:
                return {
                    section: eh.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: eb.intl.string(eb.t.UKgg5O),
                    ariaLabel: eb.intl.string(eb.t.UKgg5O),
                    element: er.I,
                    notice: {
                        stores: [w.Z, R.Z],
                        element: ei.C,
                    },
                };
            case eh.pNK.INVITES:
                return {
                    section: eh.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eb.intl.string(eb.t.YOt3Oj),
                    ariaLabel: eb.intl.string(eb.t.YOt3Oj),
                    element: es.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case eh.pNK.ROLES:
                return {
                    section: eh.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eb.intl.string(eb.t.LPJmLy),
                    element: G.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: eb.intl.string(eb.t.KXcECw),
                    notice: {
                        stores: [P.Z],
                        element: G._,
                    },
                    predicate: () => t.canManageRoles,
                    icon: t.pinPermissionMigrationAvailable ? (0, r.jsx)("div", { className: ex.redDot }) : void 0,
                };
            case eh.pNK.EMOJI:
                return {
                    section: eh.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eb.intl.string(eb.t.sMOuub),
                    element: Y.ZP,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eh.pNK.STICKERS:
                return {
                    section: eh.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eb.intl.string(eb.t.R5nQkZ),
                    ariaLabel: eb.intl.string(eb.t.R5nQkZ),
                    element: ee.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eh.pNK.SOUNDBOARD:
                return {
                    section: eh.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eb.intl.string(eb.t.OWQNYm),
                    ariaLabel: eb.intl.string(eb.t.OWQNYm),
                    element: $.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eh.pNK.GUILD_TEMPLATES:
                return {
                    section: eh.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(en.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eb.intl.string(eb.t.KUw7Sk),
                    element: et.ZP,
                    notice: {
                        stores: [et.Sf],
                        element: et.Q5,
                    },
                    predicate: () => t.canManageGuild,
                };
            case eh.pNK.ACCESS:
                return {
                    section: eh.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eb.intl.string(eb.t.YJlvBA),
                    element: eo.O,
                    notice: {
                        stores: [ed.Z],
                        element: ec.w,
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: eb.intl.string(eb.t.YJlvBA),
                };
            case eh.pNK.INTEGRATIONS:
                return {
                    section: eh.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eb.intl.string(eb.t.CIsNZ2),
                    ariaLabel: eb.intl.string(eb.t.CIsNZ2),
                    element: K.Z,
                    notice: {
                        stores: [T.default, w.Z],
                        element: K.j,
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case eh.pNK.APP_DIRECTORY:
                return {
                    section: eh.pNK.APP_DIRECTORY,
                    label: (0, r.jsx)(F.K, {
                        section: e,
                        guildId: t.guild.id,
                    }),
                    ariaLabel: eb.intl.string(eb.t.AKcFUl),
                };
            case eh.pNK.SAFETY:
                return {
                    section: eh.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eb.intl.string(eb.t["suhY+f"]),
                    ariaLabel: eb.intl.string(eb.t["suhY+f"]),
                    element: U.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(eh.oNc.COMMUNITY),
                };
            case eh.pNK.MODERATION:
                return {
                    section: eh.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eb.intl.string(eb.t["suhY+f"]),
                    element: Q.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(eh.oNc.COMMUNITY),
                };
            case eh.pNK.GUILD_AUTOMOD:
                return {
                    section: eh.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)("div", {
                        className: ex.landingPageTabLink,
                        children: eb.intl.string(eb.t.uRelg4),
                    }),
                    ariaLabel: eb.intl.string(eb.t.uRelg4),
                    element: g.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(eh.oNc.COMMUNITY) && ((0, m.Nb)(t.guild.id) || (0, m.ze)(t.guild.id)),
                };
            case eh.pNK.AUDIT_LOG:
                return {
                    section: eh.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eb.intl.string(eb.t.SPWLyc),
                    element: Z.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case eh.pNK.BANS:
                return {
                    section: eh.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eb.intl.string(eb.t.ZbeITU),
                    element: H.Z,
                    predicate: () => t.canManageBans,
                };
            case eh.pNK.COMMUNITY:
                let eE = eb.intl.string(eb.t.ElKTeX);
                return (
                    t.guild.features.has(eh.oNc.COMMUNITY) && (eE = eb.intl.string(eb.t["8nY2LC"])),
                    {
                        section: eh.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(eh.oNc.COMMUNITY)
                            ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eE,
                        element: z.Z,
                        ariaLabel: eE,
                        newIndicator:
                            !t.guild.features.has(eh.oNc.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= ef.U3 &&
                            O.qc.hasHotspot(O.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [w.Z],
                            element: z.X,
                        },
                    }
                );
            case eh.pNK.ONBOARDING:
                return {
                    section: eh.pNK.ONBOARDING,
                    label: eb.intl.string(eb.t.LdxCKy),
                    element: q.Z,
                    ariaLabel: eb.intl.string(eb.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [A.Z, D.Z],
                        element: M.Z,
                    },
                    predicate: () => (0, h.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (p.Z.getEnabled(e)) return eb.intl.string(eb.t.pPSmxs).toUpperCase();
                        if ((0, k.C)(e)) return eb.intl.string(eb.t.HDF4o6).toUpperCase();
                        let n = L.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return eb.intl.formatToPlainString(eb.t["5r28iY"], {
                                count: r + 1,
                                total: n.length,
                            });
                    })(t.guild.id, t.onboardingStep),
                };
            case eh.pNK.ANALYTICS:
                return {
                    section: eh.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eb.intl.string(eb.t["0wWfUF"]),
                    ariaLabel: eb.intl.string(eb.t["0wWfUF"]),
                    element: B.Z,
                    predicate: () => eN,
                };
            case eh.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: eh.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)("div", {
                        className: ex.landingPageTabLink,
                        children: [eb.intl.string(eb.t.kGlQGB), " ", (0, r.jsx)(u.Z, {})],
                    }),
                    ariaLabel: eb.intl.string(eb.t.kGlQGB),
                    element: V.Z,
                    notice: {
                        stores: [w.Z],
                        element: V.J,
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return (
                            t.canManageGuild &&
                            (t.guild.features.has(eh.oNc.DISCOVERABLE) ||
                                !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished))
                        );
                    },
                };
            case eh.pNK.COMMUNITY_WELCOME:
                return {
                    section: eh.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eb.intl.string(eb.t["2rkmDg"]),
                    ariaLabel: eb.intl.string(eb.t["2rkmDg"]),
                    element: W.Z,
                    notice: {
                        stores: [y.Z],
                        element: C.Z,
                    },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(eh.oNc.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(eh.oNc.GUILD_SERVER_GUIDE),
                };
            case eh.pNK.ROLE_SUBSCRIPTIONS:
                return ev(ej({}, eC), {
                    section: eh.pNK.ROLE_SUBSCRIPTIONS,
                    element: v.Z,
                    type: o.bT.CUSTOM,
                    predicate: () =>
                        eO
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
                    label: eb.intl.string(eb.t.X6h2g4),
                    ariaLabel: eb.intl.string(eb.t.X6h2g4),
                    element: b.Z,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        (0, f.p)(t.guild.id, "guild_product_settings_predicate") &&
                        (0, x.sy)(t.guild),
                };
            case eh.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: eh.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eb.intl.string(eb.t.ipTYsr),
                    ariaLabel: eb.intl.string(eb.t.ipTYsr),
                    element: _.Z,
                    predicate: () => t.monetizationPredicate() && (0, x.sy)(t.guild),
                };
            case eh.pNK.GUILD_PREMIUM:
                return {
                    section: eh.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eb.intl.string(eb.t["8+VX4+"]),
                    ariaLabel: eb.intl.string(eb.t["8+VX4+"]),
                    element: J.Z,
                    className: ex.serverBoostTabItem,
                    icon: (0, r.jsx)(a.$Eu, {
                        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        size: "sm",
                        className: ex.icon,
                    }),
                };
            case eh.pNK.MEMBERS:
                return {
                    section: eh.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(X.$, {}),
                    ariaLabel: eb.intl.string(eb.t["9Oq93t"]),
                    element: X.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                };
            case eh.pNK.DELETE:
                return {
                    section: eh.pNK.DELETE,
                    onClick() {
                        let e = N.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = {
                                header: eb.intl.formatToPlainString(eb.t.us7mCw, { name: i }),
                                confirmText: eb.intl.string(eb.t.l3hWPz),
                                cancelText: eb.intl.string(eb.t["ETE/oK"]),
                                onConfirm: () => {
                                    E.S.subscribeOnce(eh.CkL.LAYER_POP_COMPLETE, () => {
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
                                              children: eb.intl.format(eb.t["Zuo+VV"], { name: i }),
                                          }),
                                      }),
                                  ),
                              )
                            : (0, a.ZDy)(async () => {
                                  let { default: e } = await n.e("18259").then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ev(ej({}, t, l), {
                                              validationText: i,
                                              instructionText: eb.intl.string(eb.t.abprOD),
                                              errorText: eb.intl.string(eb.t["c2/DS0"]),
                                              children: eb.intl.format(eb.t["Zuo+VV"], { name: i }),
                                          }),
                                      );
                              });
                    },
                    label: eb.intl.string(eb.t.l3hWPz),
                    ariaLabel: eb.intl.string(eb.t.l3hWPz),
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
