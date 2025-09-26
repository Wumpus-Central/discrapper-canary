n.d(t, { Z: () => e_ });
var r = n(951288),
    i = n(990547),
    l = n(704215),
    s = n(481060),
    a = n(37234),
    o = n(493544),
    c = n(709246),
    d = n(223892),
    u = n(688465),
    m = n(676317),
    g = n(874993),
    p = n(45966),
    f = n(637853),
    h = n(352981),
    x = n(610403),
    b = n(923726),
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
    T = n(999382),
    P = n(931805),
    w = n(853714),
    R = n(626137),
    D = n(822591),
    Z = n(782604),
    A = n(614439),
    L = n(145260),
    k = n(789574),
    G = n(969632),
    M = n(359191),
    U = n(84658),
    B = n(142961),
    F = n(815977),
    H = n(730910),
    z = n(103576),
    V = n(475013),
    W = n(17699),
    K = n(213956),
    Y = n(450377),
    q = n(566084),
    X = n(431301),
    Q = n(802005),
    J = n(675377),
    $ = n(312910),
    ee = n(261317),
    et = n(966357),
    en = n(29605),
    er = n(324330),
    ei = n(651780),
    el = n(353398),
    es = n(365774),
    ea = n(486358),
    eo = n(942478),
    ec = n(845995),
    ed = n(708510),
    eu = n(237245),
    em = n(658666),
    eg = n(224726),
    ep = n(308619),
    ef = n(981631),
    eh = n(135899),
    ex = n(388032),
    eb = n(566386);
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
            eO = (0, d.Vm)(t.guild.id),
            ey =
                !1 === t.guild.features.has(ef.oNc.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(ef.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            eC =
                e_ && ey
                    ? {
                          label: (0, r.jsx)("div", {
                              className: eb.roleSubLabel,
                              children: ex.intl.string(ex.t.Tn7Koq),
                          }),
                          ariaLabel: ex.intl.string(ex.t.Tn7Koq),
                      }
                    : {
                          label: (0, r.jsx)("div", {
                              className: eb.roleSubLabel,
                              children: ex.intl.string(ex.t["KzCF//"]),
                          }),
                          ariaLabel: ex.intl.string(ex.t["KzCF//"]),
                      },
            eN = t.guild.features.has(ef.oNc.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ef.pNK.PROFILE:
                return {
                    section: ef.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ex.intl.string(ex.t.txdaxc),
                    ariaLabel: ex.intl.string(ex.t.txdaxc),
                    element: eg.Z,
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
                    label: ex.intl.string(ex.t["2QmKZ2"]),
                    ariaLabel: ex.intl.string(ex.t["2QmKZ2"]),
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
                    label: ex.intl.string(ex.t["6TAHb2"]),
                    ariaLabel: ex.intl.string(ex.t["6TAHb2"]),
                    element: ea.Z,
                    notice: {
                        stores: [T.Z],
                        element: eo.R,
                    },
                };
            case ef.pNK.BOOST_PERKS:
                return {
                    section: ef.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ex.intl.string(ex.t.UKgg5O),
                    ariaLabel: ex.intl.string(ex.t.UKgg5O),
                    element: X.I,
                    notice: {
                        stores: [T.Z, q.Z],
                        element: Q.C,
                    },
                };
            case ef.pNK.INVITES:
                return {
                    section: ef.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ex.intl.string(ex.t.YOt3Oj),
                    ariaLabel: ex.intl.string(ex.t.YOt3Oj),
                    element: ec.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case ef.pNK.ROLES:
                return {
                    section: ef.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ex.intl.string(ex.t.LPJmLy),
                    element: V.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: ex.intl.string(ex.t.KXcECw),
                    notice: {
                        stores: [z.Z],
                        element: V._,
                    },
                    predicate: () => t.canManageRoles,
                    icon: t.pinPermissionMigrationAvailable ? (0, r.jsx)("div", { className: eb.redDot }) : void 0,
                };
            case ef.pNK.EMOJI:
                return {
                    section: ef.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ex.intl.string(ex.t.sMOuub),
                    element: en.ZP,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.pNK.STICKERS:
                return {
                    section: ef.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ex.intl.string(ex.t.R5nQkZ),
                    ariaLabel: ex.intl.string(ex.t.R5nQkZ),
                    element: $.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.pNK.SOUNDBOARD:
                return {
                    section: ef.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ex.intl.string(ex.t.OWQNYm),
                    ariaLabel: ex.intl.string(ex.t.OWQNYm),
                    element: J.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ef.pNK.GUILD_TEMPLATES:
                return {
                    section: ef.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(es.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ex.intl.string(ex.t.KUw7Sk),
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
                    label: ex.intl.string(ex.t.YJlvBA),
                    element: ed.O,
                    notice: {
                        stores: [em.Z],
                        element: eu.w,
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: ex.intl.string(ex.t.YJlvBA),
                };
            case ef.pNK.INTEGRATIONS:
                return {
                    section: ef.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ex.intl.string(ex.t.CIsNZ2),
                    ariaLabel: ex.intl.string(ex.t.CIsNZ2),
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
                    ariaLabel: ex.intl.string(ex.t.AKcFUl),
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
                    label: ex.intl.string(ex.t["suhY+f"]),
                    ariaLabel: ex.intl.string(ex.t["suhY+f"]),
                    element: K.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(ef.oNc.COMMUNITY),
                };
            case ef.pNK.MODERATION:
                return {
                    section: ef.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ex.intl.string(ex.t["suhY+f"]),
                    element: Y.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(ef.oNc.COMMUNITY),
                };
            case ef.pNK.GUILD_AUTOMOD:
                return {
                    section: ef.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)("div", {
                        className: eb.landingPageTabLink,
                        children: ex.intl.string(ex.t.uRelg4),
                    }),
                    ariaLabel: ex.intl.string(ex.t.uRelg4),
                    element: g.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(ef.oNc.COMMUNITY) && ((0, m.Nb)(t.guild.id) || (0, m.ze)(t.guild.id)),
                };
            case ef.pNK.AUDIT_LOG:
                return {
                    section: ef.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ex.intl.string(ex.t.SPWLyc),
                    element: w.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case ef.pNK.BANS:
                return {
                    section: ef.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ex.intl.string(ex.t.ZbeITU),
                    element: W.Z,
                    predicate: () => t.canManageBans,
                };
            case ef.pNK.COMMUNITY:
                let eE = ex.intl.string(ex.t.ElKTeX);
                return (
                    t.guild.features.has(ef.oNc.COMMUNITY) && (eE = ex.intl.string(ex.t["8nY2LC"])),
                    {
                        section: ef.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(ef.oNc.COMMUNITY)
                            ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eE,
                        element: D.Z,
                        ariaLabel: eE,
                        newIndicator:
                            !t.guild.features.has(ef.oNc.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= eh.U3 &&
                            O.qc.hasHotspot(O.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [T.Z],
                            element: D.X,
                        },
                    }
                );
            case ef.pNK.ONBOARDING:
                return {
                    section: ef.pNK.ONBOARDING,
                    label: ex.intl.string(ex.t.LdxCKy),
                    element: F.Z,
                    ariaLabel: ex.intl.string(ex.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [M.Z, G.Z],
                        element: H.Z,
                    },
                    predicate: () => (0, f.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (p.Z.getEnabled(e)) return ex.intl.string(ex.t.pPSmxs).toUpperCase();
                        if ((0, B.C)(e)) return ex.intl.string(ex.t.HDF4o6).toUpperCase();
                        let n = U.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return ex.intl.formatToPlainString(ex.t["5r28iY"], {
                                count: r + 1,
                                total: n.length,
                            });
                    })(t.guild.id, t.onboardingStep),
                };
            case ef.pNK.ANALYTICS:
                return {
                    section: ef.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ex.intl.string(ex.t["0wWfUF"]),
                    ariaLabel: ex.intl.string(ex.t["0wWfUF"]),
                    element: R.Z,
                    predicate: () => eN,
                };
            case ef.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ef.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)("div", {
                        className: eb.landingPageTabLink,
                        children: [ex.intl.string(ex.t.kGlQGB), " ", (0, r.jsx)(u.Z, {})],
                    }),
                    ariaLabel: ex.intl.string(ex.t.kGlQGB),
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
                            (t.guild.features.has(ef.oNc.DISCOVERABLE) ||
                                !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished))
                        );
                    },
                };
            case ef.pNK.COMMUNITY_WELCOME:
                return {
                    section: ef.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ex.intl.string(ex.t["2rkmDg"]),
                    ariaLabel: ex.intl.string(ex.t["2rkmDg"]),
                    element: Z.Z,
                    notice: {
                        stores: [y.Z],
                        element: C.Z,
                    },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(ef.oNc.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(ef.oNc.GUILD_SERVER_GUIDE),
                };
            case ef.pNK.ROLE_SUBSCRIPTIONS:
                return ev(ej({}, eC), {
                    section: ef.pNK.ROLE_SUBSCRIPTIONS,
                    element: v.Z,
                    type: o.bT.CUSTOM,
                    predicate: () =>
                        eO
                            ? t.monetizationPredicate() &&
                              ((0, b.sy)(t.guild) || c.Z.hasSeenCreatorOnboardingForGuild(t.guild.id))
                            : t.monetizationPredicate(),
                    newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild)
                        ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE]
                        : null,
                });
            case ef.pNK.GUILD_PRODUCTS:
                return {
                    section: ef.pNK.GUILD_PRODUCTS,
                    label: ex.intl.string(ex.t.X6h2g4),
                    ariaLabel: ex.intl.string(ex.t.X6h2g4),
                    element: x.Z,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        (0, h.p)(t.guild.id, "guild_product_settings_predicate") &&
                        (0, b.sy)(t.guild),
                };
            case ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ex.intl.string(ex.t.ipTYsr),
                    ariaLabel: ex.intl.string(ex.t.ipTYsr),
                    element: _.Z,
                    predicate: () => t.monetizationPredicate() && (0, b.sy)(t.guild),
                };
            case ef.pNK.GUILD_PREMIUM:
                return {
                    section: ef.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ex.intl.string(ex.t["8+VX4+"]),
                    ariaLabel: ex.intl.string(ex.t["8+VX4+"]),
                    element: ei.Z,
                    className: eb.serverBoostTabItem,
                    icon: (0, r.jsx)(s.$Eu, {
                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        size: "sm",
                        className: eb.icon,
                    }),
                };
            case ef.pNK.MEMBERS:
                return {
                    section: ef.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(er.$r, {}),
                    ariaLabel: ex.intl.string(ex.t["9Oq93t"]),
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
                        let e = N.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = {
                                header: ex.intl.formatToPlainString(ex.t.us7mCw, { name: i }),
                                confirmText: ex.intl.string(ex.t.l3hWPz),
                                cancelText: ex.intl.string(ex.t["ETE/oK"]),
                                onConfirm: () => {
                                    E.S.subscribeOnce(ef.CkL.LAYER_POP_COMPLETE, () => {
                                        S.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, a.xf)();
                                },
                            };
                        e.mfaEnabled
                            ? (0, s.h7j)((e) =>
                                  (0, r.jsx)(
                                      s.ConfirmModal,
                                      ev(ej({}, e, l), {
                                          children: (0, r.jsx)(s.Text, {
                                              variant: "text-md/normal",
                                              children: ex.intl.format(ex.t["Zuo+VV"], { name: i }),
                                          }),
                                      }),
                                  ),
                              )
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e("18259").then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ev(ej({}, t, l), {
                                              validationText: i,
                                              instructionText: ex.intl.string(ex.t.abprOD),
                                              errorText: ex.intl.string(ex.t["c2/DS0"]),
                                              children: ex.intl.format(ex.t["Zuo+VV"], { name: i }),
                                          }),
                                      );
                              });
                    },
                    label: ex.intl.string(ex.t.l3hWPz),
                    ariaLabel: ex.intl.string(ex.t.l3hWPz),
                    icon: (0, r.jsx)(s.XHJ, {
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
