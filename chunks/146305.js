n.d(t, { Z: () => ev });
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
    I = n(585483),
    E = n(823379),
    S = n(434404),
    T = n(360606),
    P = n(946724),
    w = n(999382),
    R = n(44550),
    Z = n(853714),
    D = n(359191),
    A = n(84658),
    L = n(142961),
    k = n(730910),
    M = n(475013),
    G = n(213956),
    U = n(702478),
    B = n(60986),
    F = n(247031),
    H = n(787561),
    z = n(579648),
    W = n(460461),
    V = n(29605),
    Y = n(365307),
    K = n(324330),
    X = n(495300),
    q = n(651780),
    J = n(279542),
    Q = n(665324),
    $ = n(208150),
    ee = n(353398),
    et = n(365774),
    en = n(178387),
    er = n(993097),
    ei = n(486358),
    el = n(942478),
    ea = n(845995),
    es = n(708510),
    eo = n(237245),
    ec = n(658666),
    ed = n(224726),
    eu = n(308619),
    em = n(254925),
    eg = n(209402),
    ep = n(981631),
    eh = n(135899),
    ef = n(388032),
    eb = n(566386);
function ex(e) {
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
function ej(e, t) {
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
let ev = {
    getSectionDefinition: function (e, t) {
        let ev = (0, f.p)(t.guild.id, "guild_settings"),
            e_ = (0, d.Vm)(t.guild.id),
            eO =
                !1 === t.guild.features.has(ep.oNc.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(ep.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            ey =
                ev && eO
                    ? {
                          label: (0, r.jsx)("div", {
                              className: eb.roleSubLabel,
                              children: ef.intl.string(ef.t.Tn7Koq),
                          }),
                          ariaLabel: ef.intl.string(ef.t.Tn7Koq),
                      }
                    : {
                          label: (0, r.jsx)("div", {
                              className: eb.roleSubLabel,
                              children: ef.intl.string(ef.t["KzCF//"]),
                          }),
                          ariaLabel: ef.intl.string(ef.t["KzCF//"]),
                      },
            eC = t.guild.features.has(ep.oNc.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ep.pNK.PROFILE:
                return {
                    section: ep.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ef.intl.string(ef.t.txdaxc),
                    ariaLabel: ef.intl.string(ef.t.txdaxc),
                    element: ed.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [w.Z],
                        element: eu.Z,
                    },
                };
            case ep.pNK.TAG:
                return {
                    section: ep.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ef.intl.string(ef.t["2QmKZ2"]),
                    ariaLabel: ef.intl.string(ef.t["2QmKZ2"]),
                    element: em.Z,
                    predicate: () => t.canManageGuild,
                    notice: {
                        stores: [w.Z],
                        element: eg.Z,
                    },
                    newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE],
                };
            case ep.pNK.ENGAGEMENT:
                return {
                    section: ep.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ef.intl.string(ef.t["6TAHb2"]),
                    ariaLabel: ef.intl.string(ef.t["6TAHb2"]),
                    element: ei.Z,
                    notice: {
                        stores: [w.Z],
                        element: el.R,
                    },
                };
            case ep.pNK.BOOST_PERKS:
                return {
                    section: ep.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ef.intl.string(ef.t.UKgg5O),
                    ariaLabel: ef.intl.string(ef.t.UKgg5O),
                    element: en.I,
                    notice: {
                        stores: [w.Z, R.Z],
                        element: er.C,
                    },
                };
            case ep.pNK.INVITES:
                return {
                    section: ep.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ef.intl.string(ef.t.YOt3Oj),
                    ariaLabel: ef.intl.string(ef.t.YOt3Oj),
                    element: ea.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case ep.pNK.ROLES:
                return {
                    section: ep.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ef.intl.string(ef.t.LPJmLy),
                    element: M.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: ef.intl.string(ef.t.KXcECw),
                    notice: {
                        stores: [P.Z],
                        element: M._,
                    },
                    predicate: () => t.canManageRoles,
                    icon: t.pinPermissionMigrationAvailable ? (0, r.jsx)("div", { className: eb.redDot }) : void 0,
                };
            case ep.pNK.EMOJI:
                return {
                    section: ep.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ef.intl.string(ef.t.sMOuub),
                    element: V.ZP,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ep.pNK.STICKERS:
                return {
                    section: ep.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ef.intl.string(ef.t.R5nQkZ),
                    ariaLabel: ef.intl.string(ef.t.R5nQkZ),
                    element: $.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ep.pNK.SOUNDBOARD:
                return {
                    section: ep.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ef.intl.string(ef.t.OWQNYm),
                    ariaLabel: ef.intl.string(ef.t.OWQNYm),
                    element: Q.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ep.pNK.GUILD_TEMPLATES:
                return {
                    section: ep.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(et.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ef.intl.string(ef.t.KUw7Sk),
                    element: ee.ZP,
                    notice: {
                        stores: [ee.Sf],
                        element: ee.Q5,
                    },
                    predicate: () => t.canManageGuild,
                };
            case ep.pNK.ACCESS:
                return {
                    section: ep.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ef.intl.string(ef.t.YJlvBA),
                    element: es.O,
                    notice: {
                        stores: [ec.Z],
                        element: eo.w,
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: ef.intl.string(ef.t.YJlvBA),
                };
            case ep.pNK.INTEGRATIONS:
                return {
                    section: ep.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ef.intl.string(ef.t.CIsNZ2),
                    ariaLabel: ef.intl.string(ef.t.CIsNZ2),
                    element: Y.Z,
                    notice: {
                        stores: [T.default, w.Z],
                        element: Y.j,
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case ep.pNK.APP_DIRECTORY:
                return {
                    section: ep.pNK.APP_DIRECTORY,
                    label: (0, r.jsx)(B.K, {
                        section: e,
                        guildId: t.guild.id,
                    }),
                    ariaLabel: ef.intl.string(ef.t.AKcFUl),
                };
            case ep.pNK.SAFETY:
                return {
                    section: ep.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ef.intl.string(ef.t["suhY+f"]),
                    ariaLabel: ef.intl.string(ef.t["suhY+f"]),
                    element: G.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(ep.oNc.COMMUNITY),
                };
            case ep.pNK.MODERATION:
                return {
                    section: ep.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ef.intl.string(ef.t["suhY+f"]),
                    element: J.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(ep.oNc.COMMUNITY),
                };
            case ep.pNK.GUILD_AUTOMOD:
                return {
                    section: ep.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)("div", {
                        className: eb.landingPageTabLink,
                        children: ef.intl.string(ef.t.uRelg4),
                    }),
                    ariaLabel: ef.intl.string(ef.t.uRelg4),
                    element: g.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(ep.oNc.COMMUNITY) && ((0, m.Nb)(t.guild.id) || (0, m.ze)(t.guild.id)),
                };
            case ep.pNK.AUDIT_LOG:
                return {
                    section: ep.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ef.intl.string(ef.t.SPWLyc),
                    element: Z.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case ep.pNK.BANS:
                return {
                    section: ep.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ef.intl.string(ef.t.ZbeITU),
                    element: F.Z,
                    predicate: () => t.canManageBans,
                };
            case ep.pNK.COMMUNITY:
                let eN = ef.intl.string(ef.t.ElKTeX);
                return (
                    t.guild.features.has(ep.oNc.COMMUNITY) && (eN = ef.intl.string(ef.t["8nY2LC"])),
                    {
                        section: ep.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(ep.oNc.COMMUNITY)
                            ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eN,
                        element: H.Z,
                        ariaLabel: eN,
                        newIndicator:
                            !t.guild.features.has(ep.oNc.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= eh.U3 &&
                            O.qc.hasHotspot(O.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [w.Z],
                            element: H.X,
                        },
                    }
                );
            case ep.pNK.ONBOARDING:
                return {
                    section: ep.pNK.ONBOARDING,
                    label: ef.intl.string(ef.t.LdxCKy),
                    element: X.Z,
                    ariaLabel: ef.intl.string(ef.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [D.Z],
                        element: k.Z,
                    },
                    predicate: () => (0, h.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (p.Z.getEnabled(e)) return ef.intl.string(ef.t.pPSmxs).toUpperCase();
                        if ((0, L.C)(e)) return ef.intl.string(ef.t.HDF4o6).toUpperCase();
                        let n = A.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return ef.intl.formatToPlainString(ef.t["5r28iY"], {
                                count: r + 1,
                                total: n.length,
                            });
                    })(t.guild.id, t.onboardingStep),
                };
            case ep.pNK.ANALYTICS:
                return {
                    section: ep.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ef.intl.string(ef.t["0wWfUF"]),
                    ariaLabel: ef.intl.string(ef.t["0wWfUF"]),
                    element: U.Z,
                    predicate: () => eC,
                };
            case ep.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ep.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)("div", {
                        className: eb.landingPageTabLink,
                        children: [ef.intl.string(ef.t.kGlQGB), " ", (0, r.jsx)(u.Z, {})],
                    }),
                    ariaLabel: ef.intl.string(ef.t.kGlQGB),
                    element: W.Z,
                    notice: {
                        stores: [w.Z],
                        element: W.J,
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return (
                            t.canManageGuild &&
                            (t.guild.features.has(ep.oNc.DISCOVERABLE) ||
                                !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished))
                        );
                    },
                };
            case ep.pNK.COMMUNITY_WELCOME:
                return {
                    section: ep.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ef.intl.string(ef.t["2rkmDg"]),
                    ariaLabel: ef.intl.string(ef.t["2rkmDg"]),
                    element: z.Z,
                    notice: {
                        stores: [y.Z],
                        element: C.Z,
                    },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(ep.oNc.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(ep.oNc.GUILD_SERVER_GUIDE),
                };
            case ep.pNK.ROLE_SUBSCRIPTIONS:
                return ej(ex({}, ey), {
                    section: ep.pNK.ROLE_SUBSCRIPTIONS,
                    element: v.Z,
                    type: o.bT.CUSTOM,
                    predicate: () =>
                        e_
                            ? t.monetizationPredicate() &&
                              ((0, x.sy)(t.guild) || c.Z.hasSeenCreatorOnboardingForGuild(t.guild.id))
                            : t.monetizationPredicate(),
                    newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild)
                        ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE]
                        : null,
                });
            case ep.pNK.GUILD_PRODUCTS:
                return {
                    section: ep.pNK.GUILD_PRODUCTS,
                    label: ef.intl.string(ef.t.X6h2g4),
                    ariaLabel: ef.intl.string(ef.t.X6h2g4),
                    element: b.Z,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        (0, f.p)(t.guild.id, "guild_product_settings_predicate") &&
                        (0, x.sy)(t.guild),
                };
            case ep.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ep.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ef.intl.string(ef.t.ipTYsr),
                    ariaLabel: ef.intl.string(ef.t.ipTYsr),
                    element: _.Z,
                    predicate: () => t.monetizationPredicate() && (0, x.sy)(t.guild),
                };
            case ep.pNK.GUILD_PREMIUM:
                return {
                    section: ep.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ef.intl.string(ef.t["8+VX4+"]),
                    ariaLabel: ef.intl.string(ef.t["8+VX4+"]),
                    element: q.Z,
                    className: eb.serverBoostTabItem,
                    icon: (0, r.jsx)(a.$Eu, {
                        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        size: "sm",
                        className: eb.icon,
                    }),
                };
            case ep.pNK.MEMBERS:
                return {
                    section: ep.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(K.$, {}),
                    ariaLabel: ef.intl.string(ef.t["9Oq93t"]),
                    element: K.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                };
            case ep.pNK.DELETE:
                return {
                    section: ep.pNK.DELETE,
                    onClick() {
                        let e = N.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = {
                                header: ef.intl.formatToPlainString(ef.t.us7mCw, { name: i }),
                                confirmText: ef.intl.string(ef.t.l3hWPz),
                                cancelText: ef.intl.string(ef.t["ETE/oK"]),
                                onConfirm: () => {
                                    I.S.subscribeOnce(ep.CkL.LAYER_POP_COMPLETE, () => {
                                        S.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, s.xf)();
                                },
                            };
                        e.mfaEnabled
                            ? (0, a.h7j)((e) =>
                                  (0, r.jsx)(
                                      a.ConfirmModal,
                                      ej(ex({}, e, l), {
                                          children: (0, r.jsx)(a.Text, {
                                              variant: "text-md/normal",
                                              children: ef.intl.format(ef.t["Zuo+VV"], { name: i }),
                                          }),
                                      }),
                                  ),
                              )
                            : (0, a.ZDy)(async () => {
                                  let { default: e } = await n.e("18259").then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ej(ex({}, t, l), {
                                              validationText: i,
                                              instructionText: ef.intl.string(ef.t.abprOD),
                                              errorText: ef.intl.string(ef.t["c2/DS0"]),
                                              children: ef.intl.format(ef.t["Zuo+VV"], { name: i }),
                                          }),
                                      );
                              });
                    },
                    label: ef.intl.string(ef.t.l3hWPz),
                    ariaLabel: ef.intl.string(ef.t.l3hWPz),
                    icon: (0, r.jsx)(a.XHJ, {
                        size: "xs",
                        color: "currentColor",
                    }),
                    variant: "destructive",
                    predicate: () => t.isOwnerWithRequiredMfaLevel,
                };
            case ep.pNK.LANDING:
            case ep.pNK.MEMBER_EDIT:
            case ep.pNK.MEMBER_TIMEOUT:
            case ep.pNK.MEMBER_KICK:
            case ep.pNK.MEMBER_BAN:
            case ep.pNK.CHANNELS:
            case ep.pNK.ROLE_EDIT:
            case ep.pNK.ROLE_PERMISSIONS:
            case ep.pNK.MEMBER_VERIFICATION:
            case ep.pNK.INTEGRATION_SETTINGS:
            case ep.pNK.SECURITY:
            case ep.pNK.AUDIT_LOG_FILTER:
            case ep.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case ep.pNK.VANITY_URL:
            case ep.pNK.INSTANT_INVITES:
            case ep.pNK.OVERVIEW:
            case ep.pNK.WEBHOOKS:
            case ep.pNK.EDIT_WEBHOOK:
            case ep.pNK.INTEGRATION_PLATFORM:
            case ep.pNK.LOBBIES_LINKED:
            case ep.pNK.EDIT_LINKED_LOBBY:
            case ep.pNK.CHANNELS_FOLLOWED:
            case ep.pNK.COMMUNITY_INTRO:
            case ep.pNK.ROLE_EDIT_REFRESH:
            case ep.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case ep.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case ep.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case ep.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case ep.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case ep.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, E.vE)(e);
        }
    },
};
