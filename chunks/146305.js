n.d(t, { Z: () => ey });
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
    f = n(676317),
    m = n(874993),
    b = n(45966),
    p = n(637853),
    h = n(352981),
    x = n(610403),
    j = n(923726),
    v = n(303737),
    O = n(15030),
    y = n(220685),
    C = n(536442),
    N = n(575258),
    E = n(276687),
    I = n(594174),
    S = n(585483),
    _ = n(823379),
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
    W = n(815977),
    z = n(730910),
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
    ea = n(353398),
    es = n(365774),
    eo = n(486358),
    ec = n(942478),
    ed = n(845995),
    eu = n(708510),
    eg = n(237245),
    ef = n(658666),
    em = n(224726),
    eb = n(308619),
    ep = n(981631),
    eh = n(135899),
    ex = n(388032),
    ej = n(494865);
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
let ey = {
    getSectionDefinition: function (e, t) {
        let ey = (0, h.p)(t.guild.id, "guild_settings"),
            eC = (0, u.Vm)(t.guild.id),
            eN =
                !1 === t.guild.features.has(ep.GuildFeatures.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(ep.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            eE =
                ey && eN
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
            eI = t.guild.features.has(ep.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ep.pNK.PROFILE:
                return {
                    section: ep.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ex.intl.string(ex.t.txdaxf),
                    ariaLabel: ex.intl.string(ex.t.txdaxf),
                    element: em.Z,
                    type: c.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [P.Z],
                        element: eb.Z,
                    },
                };
            case ep.pNK.TAG:
                return {
                    section: ep.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ex.intl.string(ex.t["2QmKZ2"]),
                    ariaLabel: ex.intl.string(ex.t["2QmKZ2"]),
                    element: en.Z,
                    predicate: () => t.canManageGuild,
                    notice: {
                        stores: [P.Z],
                        element: er.Z,
                    },
                    newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE],
                };
            case ep.pNK.ENGAGEMENT:
                return {
                    section: ep.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ex.intl.string(ex.t["6TAHbx"]),
                    ariaLabel: ex.intl.string(ex.t["6TAHbx"]),
                    element: eo.Z,
                    notice: {
                        stores: [P.Z],
                        element: ec.R,
                    },
                };
            case ep.pNK.BOOST_PERKS:
                return {
                    section: ep.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ex.intl.string(ex.t.UKgg5N),
                    ariaLabel: ex.intl.string(ex.t.UKgg5N),
                    element: Q.I,
                    notice: {
                        stores: [P.Z, J.Z],
                        element: $.C,
                    },
                };
            case ep.pNK.INVITES:
                return {
                    section: ep.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ex.intl.string(ex.t.YOt3Om),
                    ariaLabel: ex.intl.string(ex.t.YOt3Om),
                    element: ed.Z,
                    type: c.bT.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case ep.pNK.ROLES:
                return {
                    section: ep.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ex.intl.string(ex.t["LPJmL/"]),
                    element: K.Z,
                    type: c.bT.MINIMAL,
                    ariaLabel: ex.intl.string(ex.t.KXcEC9),
                    notice: {
                        stores: [V.Z],
                        element: K._,
                    },
                    predicate: () => t.canManageRoles,
                    icon: t.permissionMigrationAvailable ? (0, r.jsx)("div", { className: ej.redDot }) : void 0,
                };
            case ep.pNK.EMOJI:
                return {
                    section: ep.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ex.intl.string(ex.t.sMOuuS),
                    element: ei.ZP,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ep.pNK.STICKERS:
                return {
                    section: ep.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ex.intl.string(ex.t.R5nQkS),
                    ariaLabel: ex.intl.string(ex.t.R5nQkS),
                    element: et.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ep.pNK.SOUNDBOARD:
                return {
                    section: ep.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ex.intl.string(ex.t.OWQNYr),
                    ariaLabel: ex.intl.string(ex.t.OWQNYr),
                    element: ee.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ep.pNK.GUILD_TEMPLATES:
                return {
                    section: ep.pNK.GUILD_TEMPLATES,
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
            case ep.pNK.ACCESS:
                return {
                    section: ep.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ex.intl.string(ex.t.YJlvBM),
                    element: eu.O,
                    notice: {
                        stores: [ef.Z],
                        element: eg.w,
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: ex.intl.string(ex.t.YJlvBM),
                };
            case ep.pNK.INTEGRATIONS:
                return {
                    section: ep.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ex.intl.string(ex.t.CIsNZw),
                    ariaLabel: ex.intl.string(ex.t.CIsNZw),
                    element: G.Z,
                    notice: {
                        stores: [k.default, P.Z],
                        element: G.j,
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case ep.pNK.APP_DIRECTORY:
                return {
                    section: ep.pNK.APP_DIRECTORY,
                    label: (0, r.jsx)(w.K, {}),
                    ariaLabel: ex.intl.string(ex.t.AKcFUj),
                    onClick: () => {
                        (0, w.O)({
                            guildId: t.guild.id,
                            section: e,
                        });
                    },
                };
            case ep.pNK.SAFETY:
                return {
                    section: ep.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ex.intl.string(ex.t["suhY+Y"]),
                    ariaLabel: ex.intl.string(ex.t["suhY+Y"]),
                    element: q.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(ep.GuildFeatures.COMMUNITY),
                };
            case ep.pNK.MODERATION:
                return {
                    section: ep.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ex.intl.string(ex.t["suhY+Y"]),
                    element: X.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(ep.GuildFeatures.COMMUNITY),
                };
            case ep.pNK.GUILD_AUTOMOD:
                return {
                    section: ep.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)("div", {
                        className: ej.landingPageTabLink,
                        children: ex.intl.string(ex.t.uRelgx),
                    }),
                    ariaLabel: ex.intl.string(ex.t.uRelgx),
                    element: m.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(ep.GuildFeatures.COMMUNITY) &&
                        ((0, f.Nb)(t.guild.id) || (0, f.ze)(t.guild.id)),
                };
            case ep.pNK.AUDIT_LOG:
                return {
                    section: ep.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ex.intl.string(ex.t.SPWLyT),
                    element: Z.Z,
                    type: c.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case ep.pNK.BANS:
                return {
                    section: ep.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ex.intl.string(ex.t.ZbeITS),
                    element: Y.Z,
                    predicate: () => t.canManageBans,
                };
            case ep.pNK.COMMUNITY:
                let eS = ex.intl.string(ex.t.ElKTeb);
                return (
                    t.guild.features.has(ep.GuildFeatures.COMMUNITY) && (eS = ex.intl.string(ex.t["8nY2LE"])),
                    {
                        section: ep.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(ep.GuildFeatures.COMMUNITY)
                            ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eS,
                        element: D.Z,
                        ariaLabel: eS,
                        newIndicator:
                            !t.guild.features.has(ep.GuildFeatures.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= eh.U3 &&
                            C.qc.hasHotspot(C.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [P.Z],
                            element: D.X,
                        },
                    }
                );
            case ep.pNK.ONBOARDING:
                return {
                    section: ep.pNK.ONBOARDING,
                    label: ex.intl.string(ex.t["LdxCK/"]),
                    element: W.Z,
                    ariaLabel: ex.intl.string(ex.t["LdxCK/"]),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [B.Z, U.Z, M.Z],
                        element: z.Z,
                    },
                    predicate: () => (0, p.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (b.Z.getEnabled(e)) return ex.intl.string(ex.t.pPSmxg).toUpperCase();
                        if ((0, H.C)(e)) return ex.intl.string(ex.t["HDF4o/"]).toUpperCase();
                        let n = F.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return ex.intl.formatToPlainString(ex.t["5r28iW"], {
                                count: r + 1,
                                total: n.length,
                            });
                    })(t.guild.id, t.onboardingStep),
                };
            case ep.pNK.ANALYTICS:
                return {
                    section: ep.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ex.intl.string(ex.t["0wWfUG"]),
                    ariaLabel: ex.intl.string(ex.t["0wWfUG"]),
                    element: R.Z,
                    predicate: () => eI,
                };
            case ep.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ep.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)("div", {
                        className: ej.landingPageTabLink,
                        children: [ex.intl.string(ex.t.kGlQGF), " ", (0, r.jsx)(g.Z, {})],
                    }),
                    ariaLabel: ex.intl.string(ex.t.kGlQGF),
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
                            (t.guild.features.has(ep.GuildFeatures.DISCOVERABLE) ||
                                !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished))
                        );
                    },
                };
            case ep.pNK.COMMUNITY_WELCOME:
                return {
                    section: ep.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ex.intl.string(ex.t["2rkmDr"]),
                    ariaLabel: ex.intl.string(ex.t["2rkmDr"]),
                    element: A.Z,
                    notice: {
                        stores: [N.Z],
                        element: E.Z,
                    },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(ep.GuildFeatures.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(ep.GuildFeatures.GUILD_SERVER_GUIDE),
                };
            case ep.pNK.ROLE_SUBSCRIPTIONS:
                return eO(ev({}, eE), {
                    section: ep.pNK.ROLE_SUBSCRIPTIONS,
                    element: O.Z,
                    type: c.bT.CUSTOM,
                    predicate: () =>
                        eC
                            ? t.monetizationPredicate() &&
                              ((0, j.sy)(t.guild) || d.Z.hasSeenCreatorOnboardingForGuild(t.guild.id))
                            : t.monetizationPredicate(),
                    newIndicatorDismissibleContentTypes: (0, v.sO)(t.guild)
                        ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE]
                        : null,
                });
            case ep.pNK.GUILD_PRODUCTS:
                return {
                    section: ep.pNK.GUILD_PRODUCTS,
                    label: ex.intl.string(ex.t.X6h2gz),
                    ariaLabel: ex.intl.string(ex.t.X6h2gz),
                    element: x.Z,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        (0, h.p)(t.guild.id, "guild_product_settings_predicate") &&
                        (0, j.sy)(t.guild),
                };
            case ep.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ep.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ex.intl.string(ex.t.ipTYsk),
                    ariaLabel: ex.intl.string(ex.t.ipTYsk),
                    element: y.Z,
                    predicate: () => t.monetizationPredicate() && (0, j.sy)(t.guild),
                };
            case ep.pNK.MEMBERS:
                return {
                    section: ep.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(el.$r, {}),
                    ariaLabel: ex.intl.string(ex.t["9Oq93m"]),
                    element: el.ZP,
                    type: c.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                    onClick: () => {
                        (0, el.JA)();
                    },
                };
            case ep.pNK.DELETE:
                return {
                    section: ep.pNK.DELETE,
                    onClick() {
                        let e = I.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = () => {
                                S.S.subscribeOnce(ep.CkL.LAYER_POP_COMPLETE, () => {
                                    T.Z.deleteGuild(t.guild.id);
                                }),
                                    (0, o.xf)();
                            };
                        e.mfaEnabled
                            ? (0, a.Z)({
                                  title: ex.intl.formatToPlainString(ex.t.us7mC1, { name: i }),
                                  subtitle: ex.intl.format(ex.t["Zuo+Vd"], { name: i }),
                                  confirmText: ex.intl.string(ex.t.l3hWP6),
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
                    label: ex.intl.string(ex.t.l3hWP6),
                    ariaLabel: ex.intl.string(ex.t.l3hWP6),
                    icon: (0, r.jsx)(s.XHJ, {
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
                (0, _.vE)(e);
        }
    },
};
