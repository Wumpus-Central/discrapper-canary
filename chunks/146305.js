n.d(t, { Z: () => eC });
var r = n(54381),
    i = n(990547),
    l = n(704215),
    a = n(248514),
    s = n(481060),
    o = n(37234),
    c = n(493544),
    d = n(709246),
    u = n(223892),
    g = n(688465),
    m = n(676317),
    p = n(874993),
    f = n(45966),
    h = n(637853),
    b = n(352981),
    x = n(610403),
    j = n(923726),
    _ = n(303737),
    v = n(15030),
    O = n(220685),
    C = n(536442),
    y = n(575258),
    N = n(276687),
    E = n(594174),
    I = n(585483),
    S = n(823379),
    T = n(434404),
    P = n(999382),
    w = n(931805),
    Z = n(853714),
    R = n(626137),
    D = n(822591),
    A = n(782604),
    L = n(614439),
    k = n(145260),
    G = n(789574),
    M = n(926958),
    U = n(969632),
    B = n(359191),
    F = n(84658),
    H = n(142961),
    z = n(815977),
    W = n(730910),
    V = n(103576),
    K = n(475013),
    Y = n(17699),
    q = n(213956),
    X = n(450377),
    J = n(566084),
    Q = n(431301),
    $ = n(802005),
    ee = n(675377),
    et = n(312910),
    en = n(261317),
    er = n(966357),
    ei = n(29605),
    el = n(324330),
    ea = n(651780),
    es = n(353398),
    eo = n(365774),
    ec = n(486358),
    ed = n(942478),
    eu = n(845995),
    eg = n(708510),
    em = n(237245),
    ep = n(658666),
    ef = n(224726),
    eh = n(308619),
    eb = n(981631),
    ex = n(135899),
    ej = n(388032),
    e_ = n(566386);
function ev(e) {
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
function eO(e, t) {
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
let eC = {
    getSectionDefinition: function (e, t) {
        let eC = (0, b.p)(t.guild.id, "guild_settings"),
            ey = (0, u.Vm)(t.guild.id),
            eN =
                !1 === t.guild.features.has(eb.GuildFeatures.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(eb.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            eE =
                eC && eN
                    ? {
                          label: (0, r.jsx)("div", {
                              className: e_.roleSubLabel,
                              children: ej.intl.string(ej.t.Tn7Koo),
                          }),
                          ariaLabel: ej.intl.string(ej.t.Tn7Koo),
                      }
                    : {
                          label: (0, r.jsx)("div", {
                              className: e_.roleSubLabel,
                              children: ej.intl.string(ej.t["KzCF/6"]),
                          }),
                          ariaLabel: ej.intl.string(ej.t["KzCF/6"]),
                      },
            eI = t.guild.features.has(eb.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case eb.pNK.PROFILE:
                return {
                    section: eb.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ej.intl.string(ej.t.txdaxf),
                    ariaLabel: ej.intl.string(ej.t.txdaxf),
                    element: ef.Z,
                    type: c.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [P.Z],
                        element: eh.Z,
                    },
                };
            case eb.pNK.TAG:
                return {
                    section: eb.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ej.intl.string(ej.t["2QmKZ2"]),
                    ariaLabel: ej.intl.string(ej.t["2QmKZ2"]),
                    element: en.Z,
                    predicate: () => t.canManageGuild,
                    notice: {
                        stores: [P.Z],
                        element: er.Z,
                    },
                    newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE],
                };
            case eb.pNK.ENGAGEMENT:
                return {
                    section: eb.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ej.intl.string(ej.t["6TAHbx"]),
                    ariaLabel: ej.intl.string(ej.t["6TAHbx"]),
                    element: ec.Z,
                    notice: {
                        stores: [P.Z],
                        element: ed.R,
                    },
                };
            case eb.pNK.BOOST_PERKS:
                return {
                    section: eb.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ej.intl.string(ej.t.UKgg5N),
                    ariaLabel: ej.intl.string(ej.t.UKgg5N),
                    element: Q.I,
                    notice: {
                        stores: [P.Z, J.Z],
                        element: $.C,
                    },
                };
            case eb.pNK.INVITES:
                return {
                    section: eb.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ej.intl.string(ej.t.YOt3Om),
                    ariaLabel: ej.intl.string(ej.t.YOt3Om),
                    element: eu.Z,
                    type: c.bT.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case eb.pNK.ROLES:
                return {
                    section: eb.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ej.intl.string(ej.t["LPJmL/"]),
                    element: K.Z,
                    type: c.bT.MINIMAL,
                    ariaLabel: ej.intl.string(ej.t.KXcEC9),
                    notice: {
                        stores: [V.Z],
                        element: K._,
                    },
                    predicate: () => t.canManageRoles,
                    icon: t.permissionMigrationAvailable ? (0, r.jsx)("div", { className: e_.redDot }) : void 0,
                };
            case eb.pNK.EMOJI:
                return {
                    section: eb.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ej.intl.string(ej.t.sMOuuS),
                    element: ei.ZP,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eb.pNK.STICKERS:
                return {
                    section: eb.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ej.intl.string(ej.t.R5nQkS),
                    ariaLabel: ej.intl.string(ej.t.R5nQkS),
                    element: et.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eb.pNK.SOUNDBOARD:
                return {
                    section: eb.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ej.intl.string(ej.t.OWQNYr),
                    ariaLabel: ej.intl.string(ej.t.OWQNYr),
                    element: ee.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case eb.pNK.GUILD_TEMPLATES:
                return {
                    section: eb.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(eo.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ej.intl.string(ej.t.KUw7Ss),
                    element: es.ZP,
                    notice: {
                        stores: [es.Sf],
                        element: es.Q5,
                    },
                    predicate: () => t.canManageGuild,
                };
            case eb.pNK.ACCESS:
                return {
                    section: eb.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ej.intl.string(ej.t.YJlvBM),
                    element: eg.O,
                    notice: {
                        stores: [ep.Z],
                        element: em.w,
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: ej.intl.string(ej.t.YJlvBM),
                };
            case eb.pNK.INTEGRATIONS:
                return {
                    section: eb.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ej.intl.string(ej.t.CIsNZw),
                    ariaLabel: ej.intl.string(ej.t.CIsNZw),
                    element: G.Z,
                    notice: {
                        stores: [k.default, P.Z],
                        element: G.j,
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case eb.pNK.APP_DIRECTORY:
                return {
                    section: eb.pNK.APP_DIRECTORY,
                    label: (0, r.jsx)(w.K, {}),
                    ariaLabel: ej.intl.string(ej.t.AKcFUj),
                    onClick: () => {
                        (0, w.O)({
                            guildId: t.guild.id,
                            section: e,
                        });
                    },
                };
            case eb.pNK.SAFETY:
                return {
                    section: eb.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ej.intl.string(ej.t["suhY+Y"]),
                    ariaLabel: ej.intl.string(ej.t["suhY+Y"]),
                    element: q.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(eb.GuildFeatures.COMMUNITY),
                };
            case eb.pNK.MODERATION:
                return {
                    section: eb.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ej.intl.string(ej.t["suhY+Y"]),
                    element: X.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(eb.GuildFeatures.COMMUNITY),
                };
            case eb.pNK.GUILD_AUTOMOD:
                return {
                    section: eb.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)("div", {
                        className: e_.landingPageTabLink,
                        children: ej.intl.string(ej.t.uRelgx),
                    }),
                    ariaLabel: ej.intl.string(ej.t.uRelgx),
                    element: p.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(eb.GuildFeatures.COMMUNITY) &&
                        ((0, m.Nb)(t.guild.id) || (0, m.ze)(t.guild.id)),
                };
            case eb.pNK.AUDIT_LOG:
                return {
                    section: eb.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ej.intl.string(ej.t.SPWLyT),
                    element: Z.Z,
                    type: c.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case eb.pNK.BANS:
                return {
                    section: eb.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ej.intl.string(ej.t.ZbeITS),
                    element: Y.Z,
                    predicate: () => t.canManageBans,
                };
            case eb.pNK.COMMUNITY:
                let eS = ej.intl.string(ej.t.ElKTeb);
                return (
                    t.guild.features.has(eb.GuildFeatures.COMMUNITY) && (eS = ej.intl.string(ej.t["8nY2LE"])),
                    {
                        section: eb.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(eb.GuildFeatures.COMMUNITY)
                            ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eS,
                        element: D.Z,
                        ariaLabel: eS,
                        newIndicator:
                            !t.guild.features.has(eb.GuildFeatures.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= ex.U3 &&
                            C.qc.hasHotspot(C.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [P.Z],
                            element: D.X,
                        },
                    }
                );
            case eb.pNK.ONBOARDING:
                return {
                    section: eb.pNK.ONBOARDING,
                    label: ej.intl.string(ej.t["LdxCK/"]),
                    element: z.Z,
                    ariaLabel: ej.intl.string(ej.t["LdxCK/"]),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [B.Z, U.Z, M.Z],
                        element: W.Z,
                    },
                    predicate: () => (0, h.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (f.Z.getEnabled(e)) return ej.intl.string(ej.t.pPSmxg).toUpperCase();
                        if ((0, H.C)(e)) return ej.intl.string(ej.t["HDF4o/"]).toUpperCase();
                        let n = F.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return ej.intl.formatToPlainString(ej.t["5r28iW"], {
                                count: r + 1,
                                total: n.length,
                            });
                    })(t.guild.id, t.onboardingStep),
                };
            case eb.pNK.ANALYTICS:
                return {
                    section: eb.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ej.intl.string(ej.t["0wWfUG"]),
                    ariaLabel: ej.intl.string(ej.t["0wWfUG"]),
                    element: R.Z,
                    predicate: () => eI,
                };
            case eb.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: eb.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)("div", {
                        className: e_.landingPageTabLink,
                        children: [ej.intl.string(ej.t.kGlQGF), " ", (0, r.jsx)(g.Z, {})],
                    }),
                    ariaLabel: ej.intl.string(ej.t.kGlQGF),
                    element: L.Z,
                    notice: {
                        stores: [P.Z],
                        element: L.J,
                    },
                    type: c.bT.CUSTOM,
                    predicate() {
                        var e;
                        return (
                            t.canManageGuild &&
                            (t.guild.features.has(eb.GuildFeatures.DISCOVERABLE) ||
                                !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished))
                        );
                    },
                };
            case eb.pNK.COMMUNITY_WELCOME:
                return {
                    section: eb.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ej.intl.string(ej.t["2rkmDr"]),
                    ariaLabel: ej.intl.string(ej.t["2rkmDr"]),
                    element: A.Z,
                    notice: {
                        stores: [y.Z],
                        element: N.Z,
                    },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(eb.GuildFeatures.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(eb.GuildFeatures.GUILD_SERVER_GUIDE),
                };
            case eb.pNK.ROLE_SUBSCRIPTIONS:
                return eO(ev({}, eE), {
                    section: eb.pNK.ROLE_SUBSCRIPTIONS,
                    element: v.Z,
                    type: c.bT.CUSTOM,
                    predicate: () =>
                        ey
                            ? t.monetizationPredicate() &&
                              ((0, j.sy)(t.guild) || d.Z.hasSeenCreatorOnboardingForGuild(t.guild.id))
                            : t.monetizationPredicate(),
                    newIndicatorDismissibleContentTypes: (0, _.sO)(t.guild)
                        ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE]
                        : null,
                });
            case eb.pNK.GUILD_PRODUCTS:
                return {
                    section: eb.pNK.GUILD_PRODUCTS,
                    label: ej.intl.string(ej.t.X6h2gz),
                    ariaLabel: ej.intl.string(ej.t.X6h2gz),
                    element: x.Z,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        (0, b.p)(t.guild.id, "guild_product_settings_predicate") &&
                        (0, j.sy)(t.guild),
                };
            case eb.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: eb.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ej.intl.string(ej.t.ipTYsk),
                    ariaLabel: ej.intl.string(ej.t.ipTYsk),
                    element: O.Z,
                    predicate: () => t.monetizationPredicate() && (0, j.sy)(t.guild),
                };
            case eb.pNK.GUILD_PREMIUM:
                return {
                    section: eb.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ej.intl.string(ej.t["8+VX4z"]),
                    ariaLabel: ej.intl.string(ej.t["8+VX4z"]),
                    element: ea.Z,
                    className: e_.serverBoostTabItem,
                    icon: (0, r.jsx)(s.Ucv, {
                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        size: "sm",
                        className: e_.icon,
                    }),
                };
            case eb.pNK.MEMBERS:
                return {
                    section: eb.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(el.$r, {}),
                    ariaLabel: ej.intl.string(ej.t["9Oq93m"]),
                    element: el.ZP,
                    type: c.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                    onClick: () => {
                        (0, el.JA)();
                    },
                };
            case eb.pNK.DELETE:
                return {
                    section: eb.pNK.DELETE,
                    onClick() {
                        let e = E.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = () => {
                                I.S.subscribeOnce(eb.CkL.LAYER_POP_COMPLETE, () => {
                                    T.Z.deleteGuild(t.guild.id);
                                }),
                                    (0, o.xf)();
                            };
                        e.mfaEnabled
                            ? (0, a.Z)({
                                  title: ej.intl.formatToPlainString(ej.t.us7mC1, { name: i }),
                                  subtitle: ej.intl.format(ej.t["Zuo+Vd"], { name: i }),
                                  confirmText: ej.intl.string(ej.t.l3hWP6),
                                  onConfirm: l,
                              })
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e("93197").then(n.bind(n, 848876));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          eO(ev({}, t), {
                                              onConfirm: l,
                                              guildName: i,
                                          }),
                                      );
                              });
                    },
                    label: ej.intl.string(ej.t.l3hWP6),
                    ariaLabel: ej.intl.string(ej.t.l3hWP6),
                    icon: (0, r.jsx)(s.XHJ, {
                        size: "xs",
                        color: "currentColor",
                    }),
                    variant: "destructive",
                    predicate: () => t.isOwnerWithRequiredMfaLevel,
                };
            case eb.pNK.LANDING:
            case eb.pNK.MEMBER_EDIT:
            case eb.pNK.MEMBER_TIMEOUT:
            case eb.pNK.MEMBER_KICK:
            case eb.pNK.MEMBER_BAN:
            case eb.pNK.CHANNELS:
            case eb.pNK.ROLE_EDIT:
            case eb.pNK.ROLE_PERMISSIONS:
            case eb.pNK.MEMBER_VERIFICATION:
            case eb.pNK.INTEGRATION_SETTINGS:
            case eb.pNK.SECURITY:
            case eb.pNK.AUDIT_LOG_FILTER:
            case eb.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case eb.pNK.VANITY_URL:
            case eb.pNK.INSTANT_INVITES:
            case eb.pNK.OVERVIEW:
            case eb.pNK.WEBHOOKS:
            case eb.pNK.EDIT_WEBHOOK:
            case eb.pNK.INTEGRATION_PLATFORM:
            case eb.pNK.LOBBIES_LINKED:
            case eb.pNK.EDIT_LINKED_LOBBY:
            case eb.pNK.CHANNELS_FOLLOWED:
            case eb.pNK.COMMUNITY_INTRO:
            case eb.pNK.ROLE_EDIT_REFRESH:
            case eb.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case eb.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case eb.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case eb.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case eb.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case eb.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, S.vE)(e);
        }
    },
};
