n.d(t, { Z: () => eN });
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
    C = n(220685),
    y = n(536442),
    N = n(462588),
    E = n(575258),
    I = n(276687),
    S = n(594174),
    _ = n(585483),
    T = n(823379),
    P = n(434404),
    w = n(999382),
    Z = n(931805),
    R = n(853714),
    D = n(626137),
    A = n(822591),
    L = n(782604),
    k = n(614439),
    G = n(145260),
    M = n(789574),
    U = n(926958),
    B = n(969632),
    F = n(359191),
    H = n(84658),
    W = n(142961),
    z = n(815977),
    V = n(730910),
    K = n(103576),
    Y = n(475013),
    q = n(17699),
    X = n(213956),
    J = n(450377),
    Q = n(566084),
    $ = n(431301),
    ee = n(802005),
    et = n(675377),
    en = n(312910),
    er = n(261317),
    ei = n(966357),
    el = n(29605),
    ea = n(324330),
    es = n(651780),
    eo = n(353398),
    ec = n(365774),
    ed = n(486358),
    eu = n(942478),
    eg = n(845995),
    ef = n(708510),
    em = n(237245),
    eb = n(658666),
    ep = n(224726),
    eh = n(308619),
    ex = n(981631),
    ej = n(135899),
    ev = n(388032),
    eO = n(494865);
function eC(e) {
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
function ey(e, t) {
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
let eN = {
    getSectionDefinition: function (e, t) {
        let eN = (0, h.p)(t.guild.id, "guild_settings"),
            eE = (0, u.Vm)(t.guild.id),
            eI =
                !1 === t.guild.features.has(ex.GuildFeatures.CREATOR_MONETIZABLE) &&
                !1 === t.guild.features.has(ex.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            eS =
                eN && eI
                    ? {
                          label: (0, r.jsx)("div", {
                              className: eO.roleSubLabel,
                              children: ev.intl.string(ev.t.Tn7Koo),
                          }),
                          ariaLabel: ev.intl.string(ev.t.Tn7Koo),
                      }
                    : {
                          label: (0, r.jsx)("div", {
                              className: eO.roleSubLabel,
                              children: ev.intl.string(ev.t["KzCF/6"]),
                          }),
                          ariaLabel: ev.intl.string(ev.t["KzCF/6"]),
                      },
            e_ = t.guild.features.has(ex.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ex.pNK.PROFILE:
                return {
                    section: ex.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ev.intl.string(ev.t.txdaxf),
                    ariaLabel: ev.intl.string(ev.t.txdaxf),
                    element: ep.Z,
                    type: c.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [w.Z],
                        element: eh.Z,
                    },
                };
            case ex.pNK.TAG:
                return {
                    section: ex.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ev.intl.string(ev.t["2QmKZ2"]),
                    ariaLabel: ev.intl.string(ev.t["2QmKZ2"]),
                    element: er.Z,
                    predicate: () => t.canManageGuild,
                    notice: {
                        stores: [w.Z],
                        element: ei.Z,
                    },
                    newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE],
                };
            case ex.pNK.ENGAGEMENT:
                return {
                    section: ex.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ev.intl.string(ev.t["6TAHbx"]),
                    ariaLabel: ev.intl.string(ev.t["6TAHbx"]),
                    element: ed.Z,
                    notice: {
                        stores: [w.Z],
                        element: eu.R,
                    },
                };
            case ex.pNK.BOOST_PERKS:
                return {
                    section: ex.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ev.intl.string(ev.t.UKgg5N),
                    ariaLabel: ev.intl.string(ev.t.UKgg5N),
                    element: $.I,
                    notice: {
                        stores: [w.Z, Q.Z],
                        element: ee.C,
                    },
                };
            case ex.pNK.INVITES:
                return {
                    section: ex.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ev.intl.string(ev.t.YOt3Om),
                    ariaLabel: ev.intl.string(ev.t.YOt3Om),
                    element: eg.Z,
                    type: c.bT.CUSTOM,
                    predicate: () => t.canManageGuild,
                };
            case ex.pNK.ROLES:
                return {
                    section: ex.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ev.intl.string(ev.t["LPJmL/"]),
                    element: Y.Z,
                    type: c.bT.MINIMAL,
                    ariaLabel: ev.intl.string(ev.t.KXcEC9),
                    notice: {
                        stores: [K.Z],
                        element: Y._,
                    },
                    predicate: () => t.canManageRoles,
                    icon: t.permissionMigrationAvailable ? (0, r.jsx)("div", { className: eO.redDot }) : void 0,
                };
            case ex.pNK.EMOJI:
                return {
                    section: ex.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ev.intl.string(ev.t.sMOuuS),
                    element: el.ZP,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ex.pNK.STICKERS:
                return {
                    section: ex.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ev.intl.string(ev.t.R5nQkS),
                    ariaLabel: ev.intl.string(ev.t.R5nQkS),
                    element: en.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ex.pNK.SOUNDBOARD:
                return {
                    section: ex.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ev.intl.string(ev.t.OWQNYr),
                    ariaLabel: ev.intl.string(ev.t.OWQNYr),
                    element: et.Z,
                    predicate: () => t.canManageGuildExpressions,
                };
            case ex.pNK.GUILD_TEMPLATES:
                return {
                    section: ex.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(ec.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ev.intl.string(ev.t.KUw7Ss),
                    element: eo.ZP,
                    notice: {
                        stores: [eo.Sf],
                        element: eo.Q5,
                    },
                    predicate: () => t.canManageGuild,
                };
            case ex.pNK.ACCESS:
                return {
                    section: ex.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ev.intl.string(ev.t.YJlvBM),
                    element: ef.O,
                    notice: {
                        stores: [eb.Z],
                        element: em.w,
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: ev.intl.string(ev.t.YJlvBM),
                };
            case ex.pNK.INTEGRATIONS:
                return {
                    section: ex.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ev.intl.string(ev.t.CIsNZw),
                    ariaLabel: ev.intl.string(ev.t.CIsNZw),
                    element: M.Z,
                    notice: {
                        stores: [G.default, w.Z],
                        element: M.j,
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels,
                };
            case ex.pNK.APP_DIRECTORY:
                return {
                    section: ex.pNK.APP_DIRECTORY,
                    label: (0, r.jsx)(Z.K, {}),
                    ariaLabel: ev.intl.string(ev.t.AKcFUj),
                    onClick: () => {
                        (0, Z.O)({
                            guildId: t.guild.id,
                            section: e,
                        });
                    },
                };
            case ex.pNK.SAFETY:
                return {
                    section: ex.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ev.intl.string(ev.t["suhY+Y"]),
                    ariaLabel: ev.intl.string(ev.t["suhY+Y"]),
                    element: X.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(ex.GuildFeatures.COMMUNITY),
                };
            case ex.pNK.MODERATION:
                return {
                    section: ex.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ev.intl.string(ev.t["suhY+Y"]),
                    element: J.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(ex.GuildFeatures.COMMUNITY),
                };
            case ex.pNK.GUILD_AUTOMOD:
                return {
                    section: ex.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)("div", {
                        className: eO.landingPageTabLink,
                        children: ev.intl.string(ev.t.uRelgx),
                    }),
                    ariaLabel: ev.intl.string(ev.t.uRelgx),
                    element: m.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () =>
                        !t.guild.features.has(ex.GuildFeatures.COMMUNITY) &&
                        ((0, f.Nb)(t.guild.id) || (0, f.ze)(t.guild.id)),
                };
            case ex.pNK.AUDIT_LOG:
                return {
                    section: ex.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ev.intl.string(ev.t.SPWLyT),
                    element: R.Z,
                    type: c.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog,
                };
            case ex.pNK.BANS:
                return {
                    section: ex.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ev.intl.string(ev.t.ZbeITS),
                    element: q.Z,
                    predicate: () => t.canManageBans,
                };
            case ex.pNK.COMMUNITY:
                let eT = ev.intl.string(ev.t.ElKTeb);
                return (
                    t.guild.features.has(ex.GuildFeatures.COMMUNITY) && (eT = ev.intl.string(ev.t["8nY2LE"])),
                    {
                        section: ex.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(ex.GuildFeatures.COMMUNITY)
                            ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW
                            : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eT,
                        element: A.Z,
                        ariaLabel: eT,
                        newIndicator:
                            !t.guild.features.has(ex.GuildFeatures.COMMUNITY) &&
                            null != t.memberCount &&
                            t.memberCount >= ej.U3 &&
                            y.qc.hasHotspot(y.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [w.Z],
                            element: A.X,
                        },
                    }
                );
            case ex.pNK.ONBOARDING:
                return {
                    section: ex.pNK.ONBOARDING,
                    label: ev.intl.string(ev.t["LdxCK/"]),
                    element: z.Z,
                    ariaLabel: ev.intl.string(ev.t["LdxCK/"]),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled
                        ? null
                        : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [F.Z, B.Z, U.Z],
                        element: V.Z,
                    },
                    predicate: () => (0, p.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (b.Z.getEnabled(e)) return ev.intl.string(ev.t.pPSmxg).toUpperCase();
                        if ((0, W.C)(e)) return ev.intl.string(ev.t["HDF4o/"]).toUpperCase();
                        let n = H.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return ev.intl.formatToPlainString(ev.t["5r28iW"], {
                                count: r + 1,
                                total: n.length,
                            });
                    })(t.guild.id, t.onboardingStep),
                };
            case ex.pNK.ANALYTICS:
                return {
                    section: ex.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ev.intl.string(ev.t["0wWfUG"]),
                    ariaLabel: ev.intl.string(ev.t["0wWfUG"]),
                    element: D.Z,
                    predicate: () => e_,
                };
            case ex.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ex.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)("div", {
                        className: eO.landingPageTabLink,
                        children: [ev.intl.string(ev.t.kGlQGF), " ", (0, r.jsx)(g.Z, {})],
                    }),
                    ariaLabel: ev.intl.string(ev.t.kGlQGF),
                    element: k.Z,
                    notice: {
                        stores: [w.Z],
                        element: k.J,
                    },
                    type: c.bT.CUSTOM,
                    predicate() {
                        var e;
                        return (
                            t.canManageGuild &&
                            (t.guild.features.has(ex.GuildFeatures.DISCOVERABLE) ||
                                !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished))
                        );
                    },
                };
            case ex.pNK.COMMUNITY_WELCOME:
                return {
                    section: ex.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ev.intl.string(ev.t["2rkmDr"]),
                    ariaLabel: ev.intl.string(ev.t["2rkmDr"]),
                    element: L.Z,
                    notice: {
                        stores: [E.Z],
                        element: I.Z,
                    },
                    predicate: () =>
                        t.canManageGuild &&
                        t.guild.features.has(ex.GuildFeatures.COMMUNITY) &&
                        !t.welcomeScreenEmpty &&
                        !t.guild.features.has(ex.GuildFeatures.GUILD_SERVER_GUIDE),
                };
            case ex.pNK.ROLE_SUBSCRIPTIONS:
                return ey(eC({}, eS), {
                    section: ex.pNK.ROLE_SUBSCRIPTIONS,
                    element: O.Z,
                    type: c.bT.CUSTOM,
                    predicate: () =>
                        eE
                            ? t.monetizationPredicate() &&
                              ((0, j.sy)(t.guild) || d.Z.hasSeenCreatorOnboardingForGuild(t.guild.id))
                            : t.monetizationPredicate(),
                    newIndicatorDismissibleContentTypes: (0, v.sO)(t.guild)
                        ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE]
                        : null,
                });
            case ex.pNK.GUILD_PRODUCTS:
                return {
                    section: ex.pNK.GUILD_PRODUCTS,
                    label: ev.intl.string(ev.t.X6h2gz),
                    ariaLabel: ev.intl.string(ev.t.X6h2gz),
                    element: x.Z,
                    predicate: () =>
                        t.monetizationPredicate() &&
                        (0, h.p)(t.guild.id, "guild_product_settings_predicate") &&
                        (0, j.sy)(t.guild),
                };
            case ex.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ex.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ev.intl.string(ev.t.ipTYsk),
                    ariaLabel: ev.intl.string(ev.t.ipTYsk),
                    element: C.Z,
                    predicate: () => t.monetizationPredicate() && (0, j.sy)(t.guild),
                };
            case ex.pNK.GUILD_PREMIUM:
                return {
                    section: ex.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ev.intl.string(ev.t["8+VX4z"]),
                    ariaLabel: ev.intl.string(ev.t["8+VX4z"]),
                    element: es.Z,
                    className: eO.serverBoostTabItem,
                    icon: (0, r.jsx)(s.Ucv, {
                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        size: "sm",
                        className: eO.icon,
                    }),
                    predicate: () => !(0, N.N)("GuildSettings"),
                };
            case ex.pNK.MEMBERS:
                return {
                    section: ex.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(ea.$r, {}),
                    ariaLabel: ev.intl.string(ev.t["9Oq93m"]),
                    element: ea.ZP,
                    type: c.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage,
                    onClick: () => {
                        (0, ea.JA)();
                    },
                };
            case ex.pNK.DELETE:
                return {
                    section: ex.pNK.DELETE,
                    onClick() {
                        let e = S.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = () => {
                                _.S.subscribeOnce(ex.CkL.LAYER_POP_COMPLETE, () => {
                                    P.Z.deleteGuild(t.guild.id);
                                }),
                                    (0, o.xf)();
                            };
                        e.mfaEnabled
                            ? (0, a.Z)({
                                  title: ev.intl.formatToPlainString(ev.t.us7mC1, { name: i }),
                                  subtitle: ev.intl.format(ev.t["Zuo+Vd"], { name: i }),
                                  confirmText: ev.intl.string(ev.t.l3hWP6),
                                  onConfirm: l,
                              })
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e("93197").then(n.bind(n, 848876));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ey(eC({}, t), {
                                              onConfirm: l,
                                              guildName: i,
                                          }),
                                      );
                              });
                    },
                    label: ev.intl.string(ev.t.l3hWP6),
                    ariaLabel: ev.intl.string(ev.t.l3hWP6),
                    icon: (0, r.jsx)(s.XHJ, {
                        size: "xs",
                        color: "currentColor",
                    }),
                    variant: "destructive",
                    predicate: () => t.isOwnerWithRequiredMfaLevel,
                };
            case ex.pNK.LANDING:
            case ex.pNK.MEMBER_EDIT:
            case ex.pNK.MEMBER_TIMEOUT:
            case ex.pNK.MEMBER_KICK:
            case ex.pNK.MEMBER_BAN:
            case ex.pNK.CHANNELS:
            case ex.pNK.ROLE_EDIT:
            case ex.pNK.ROLE_PERMISSIONS:
            case ex.pNK.MEMBER_VERIFICATION:
            case ex.pNK.INTEGRATION_SETTINGS:
            case ex.pNK.SECURITY:
            case ex.pNK.AUDIT_LOG_FILTER:
            case ex.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case ex.pNK.VANITY_URL:
            case ex.pNK.INSTANT_INVITES:
            case ex.pNK.OVERVIEW:
            case ex.pNK.WEBHOOKS:
            case ex.pNK.EDIT_WEBHOOK:
            case ex.pNK.INTEGRATION_PLATFORM:
            case ex.pNK.LOBBIES_LINKED:
            case ex.pNK.EDIT_LINKED_LOBBY:
            case ex.pNK.CHANNELS_FOLLOWED:
            case ex.pNK.COMMUNITY_INTRO:
            case ex.pNK.ROLE_EDIT_REFRESH:
            case ex.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case ex.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case ex.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case ex.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case ex.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case ex.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, T.vE)(e);
        }
    },
};
