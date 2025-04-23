n.d(t, { Z: () => eO });
var r = n(200651),
    i = n(990547),
    l = n(704215),
    s = n(481060),
    a = n(37234),
    o = n(493544),
    c = n(688465),
    u = n(749681),
    d = n(258971),
    m = n(676317),
    g = n(874993),
    p = n(45966),
    f = n(637853),
    h = n(352981),
    x = n(610403),
    b = n(923726),
    j = n(303737),
    _ = n(15030),
    v = n(220685),
    O = n(536442),
    C = n(50101),
    y = n(575258),
    N = n(276687),
    I = n(594174),
    E = n(585483),
    S = n(823379),
    T = n(434404),
    P = n(360606),
    w = n(946724),
    R = n(999382),
    Z = n(44550),
    D = n(853714),
    k = n(359191),
    A = n(84658),
    L = n(142961),
    M = n(730910),
    G = n(475013),
    U = n(213956),
    B = n(702478),
    F = n(247031),
    z = n(787561),
    H = n(579648),
    W = n(460461),
    V = n(29605),
    Y = n(365307),
    K = n(324330),
    X = n(495300),
    q = n(651780),
    Q = n(279542),
    J = n(413335),
    $ = n(665324),
    ee = n(208150),
    et = n(353398),
    en = n(365774),
    er = n(178387),
    ei = n(993097),
    el = n(486358),
    es = n(942478),
    ea = n(845995),
    eo = n(708510),
    ec = n(237245),
    eu = n(658666),
    ed = n(224726),
    em = n(308619),
    eg = n(254925),
    ep = n(209402),
    ef = n(981631),
    eh = n(49898),
    ex = n(135899),
    eb = n(388032),
    ej = n(474913);
function e_(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
        let eO = (0, h.p)(t.guild.id, 'guild_settings'),
            eC = !1 === t.guild.hasFeature(ef.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(ef.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            ey =
                eO && eC
                    ? {
                          label: (0, r.jsx)('div', {
                              className: ej.roleSubLabel,
                              children: eb.intl.string(eb.t.Tn7Koq)
                          }),
                          ariaLabel: eb.intl.string(eb.t.Tn7Koq)
                      }
                    : {
                          label: (0, r.jsx)('div', {
                              className: ej.roleSubLabel,
                              children: eb.intl.string(eb.t['KzCF//'])
                          }),
                          ariaLabel: eb.intl.string(eb.t['KzCF//'])
                      },
            eN = t.guild.hasFeature(ef.oNc.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ef.pNK.PROFILE:
                return {
                    section: ef.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eb.intl.string(eb.t.txdaxc),
                    ariaLabel: eb.intl.string(eb.t.txdaxc),
                    element: ed.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [R.Z],
                        element: em.Z
                    }
                };
            case ef.pNK.TAG:
                return {
                    section: ef.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eb.intl.string(eb.t['2QmKZ2']),
                    ariaLabel: eb.intl.string(eb.t['2QmKZ2']),
                    element: eg.ZP,
                    predicate() {
                        let e = (0, C.gV)(t.guild.id, 'guild_settings');
                        return t.canManageGuild && e;
                    },
                    notice: {
                        stores: [R.Z],
                        element: ep.Z
                    }
                };
            case ef.pNK.ENGAGEMENT:
                return {
                    section: ef.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eb.intl.string(eb.t['6TAHb2']),
                    ariaLabel: eb.intl.string(eb.t['6TAHb2']),
                    element: el.Z,
                    notice: {
                        stores: [R.Z],
                        element: es.R
                    }
                };
            case ef.pNK.BOOST_PERKS:
                return {
                    section: ef.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: eb.intl.string(eb.t.UKgg5O),
                    ariaLabel: eb.intl.string(eb.t.UKgg5O),
                    element: er.I,
                    notice: {
                        stores: [R.Z, Z.Z],
                        element: ei.C
                    }
                };
            case ef.pNK.INVITES:
                return {
                    section: ef.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eb.intl.string(eb.t.YOt3Oj),
                    ariaLabel: eb.intl.string(eb.t.YOt3Oj),
                    element: ea.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ef.pNK.ROLES:
                return {
                    section: ef.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eb.intl.string(eb.t.LPJmLy),
                    element: G.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: eb.intl.string(eb.t.KXcECw),
                    notice: {
                        stores: [w.Z],
                        element: G._
                    },
                    predicate: () => t.canManageRoles
                };
            case ef.pNK.EMOJI:
                return {
                    section: ef.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eb.intl.string(eb.t.sMOuub),
                    element: V.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case ef.pNK.STICKERS:
                return {
                    section: ef.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eb.intl.string(eb.t.R5nQkZ),
                    ariaLabel: eb.intl.string(eb.t.R5nQkZ),
                    element: ee.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ef.pNK.SOUNDBOARD:
                return {
                    section: ef.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eb.intl.string(eb.t.OWQNYm),
                    ariaLabel: eb.intl.string(eb.t.OWQNYm),
                    element: $.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ef.pNK.GUILD_TEMPLATES:
                return {
                    section: ef.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(en.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eb.intl.string(eb.t.KUw7Sk),
                    element: et.ZP,
                    notice: {
                        stores: [et.Sf],
                        element: et.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case ef.pNK.ACCESS:
                return {
                    section: ef.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eb.intl.string(eb.t.YJlvBA),
                    element: eo.O,
                    notice: {
                        stores: [eu.Z],
                        element: ec.w
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: eb.intl.string(eb.t.YJlvBA)
                };
            case ef.pNK.INTEGRATIONS:
                return {
                    section: ef.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eb.intl.string(eb.t.CIsNZ2),
                    ariaLabel: eb.intl.string(eb.t.CIsNZ2),
                    element: Y.Z,
                    notice: {
                        stores: [P.default, R.Z],
                        element: Y.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case ef.pNK.APP_DIRECTORY:
                return {
                    section: ef.pNK.APP_DIRECTORY,
                    label: eb.intl.string(eb.t.AKcFUl),
                    ariaLabel: eb.intl.string(eb.t.AKcFUl),
                    onClick() {
                        (0, u.transitionToGlobalDiscovery)({
                            tab: eh.GlobalDiscoveryTab.APPS,
                            newSessionState: {
                                guildId: t.guild.id,
                                entrypoint: {
                                    name: d.xF.GUILD_SETTINGS,
                                    guildSettingsSection: e
                                }
                            }
                        }),
                            (0, a.xf)();
                    }
                };
            case ef.pNK.SAFETY:
                return {
                    section: ef.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eb.intl.string(eb.t['suhY+f']),
                    ariaLabel: eb.intl.string(eb.t['suhY+f']),
                    element: U.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ef.oNc.COMMUNITY)
                };
            case ef.pNK.MODERATION:
                return {
                    section: ef.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eb.intl.string(eb.t['suhY+f']),
                    element: Q.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(ef.oNc.COMMUNITY)
                };
            case ef.pNK.GUILD_AUTOMOD:
                return {
                    section: ef.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)('div', {
                        className: ej.landingPageTabLink,
                        children: eb.intl.string(eb.t.uRelg4)
                    }),
                    ariaLabel: eb.intl.string(eb.t.uRelg4),
                    element: g.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(ef.oNc.COMMUNITY) && ((0, m.Nb)(t.guild.id) || (0, m.ze)(t.guild.id))
                };
            case ef.pNK.AUDIT_LOG:
                return {
                    section: ef.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eb.intl.string(eb.t.SPWLyc),
                    element: D.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case ef.pNK.BANS:
                return {
                    section: ef.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eb.intl.string(eb.t.ZbeITU),
                    element: F.Z,
                    predicate: () => t.canManageBans
                };
            case ef.pNK.COMMUNITY:
                let eI = eb.intl.string(eb.t.ElKTeX);
                return (
                    t.guild.hasFeature(ef.oNc.COMMUNITY) && (eI = eb.intl.string(eb.t['8nY2LC'])),
                    {
                        section: ef.pNK.COMMUNITY,
                        impressionName: t.guild.hasFeature(ef.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eI,
                        element: z.Z,
                        ariaLabel: eI,
                        newIndicator: !t.guild.hasFeature(ef.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= ex.U3 && O.qc.hasHotspot(O.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [R.Z],
                            element: z.X
                        }
                    }
                );
            case ef.pNK.ONBOARDING:
                return {
                    section: ef.pNK.ONBOARDING,
                    label: eb.intl.string(eb.t.LdxCKy),
                    element: X.Z,
                    ariaLabel: eb.intl.string(eb.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [k.Z],
                        element: M.Z
                    },
                    predicate: () => (0, f.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (p.Z.getEnabled(e)) return eb.intl.string(eb.t.pPSmxs).toUpperCase();
                        if ((0, L.C)(e)) return eb.intl.string(eb.t.HDF4o6).toUpperCase();
                        let n = A.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return eb.intl.formatToPlainString(eb.t['5r28iY'], {
                                count: r + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case ef.pNK.ANALYTICS:
                return {
                    section: ef.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eb.intl.string(eb.t['0wWfUF']),
                    ariaLabel: eb.intl.string(eb.t['0wWfUF']),
                    element: B.Z,
                    predicate: () => eN
                };
            case ef.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ef.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)('div', {
                        className: ej.landingPageTabLink,
                        children: [eb.intl.string(eb.t.kGlQGB), ' ', (0, r.jsx)(c.Z, {})]
                    }),
                    ariaLabel: eb.intl.string(eb.t.kGlQGB),
                    element: W.Z,
                    notice: {
                        stores: [R.Z],
                        element: W.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.hasFeature(ef.oNc.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished));
                    }
                };
            case ef.pNK.COMMUNITY_WELCOME:
                return {
                    section: ef.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eb.intl.string(eb.t['2rkmDg']),
                    ariaLabel: eb.intl.string(eb.t['2rkmDg']),
                    element: H.Z,
                    notice: {
                        stores: [y.Z],
                        element: N.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ef.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(ef.oNc.GUILD_SERVER_GUIDE)
                };
            case ef.pNK.ROLE_SUBSCRIPTIONS:
                return ev(e_({}, ey), {
                    section: ef.pNK.ROLE_SUBSCRIPTIONS,
                    element: _.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                });
            case ef.pNK.GUILD_PRODUCTS:
                return {
                    section: ef.pNK.GUILD_PRODUCTS,
                    label: eb.intl.string(eb.t.X6h2g4),
                    ariaLabel: eb.intl.string(eb.t.X6h2g4),
                    element: x.Z,
                    predicate: () => t.monetizationPredicate() && (0, h.p)(t.guild.id, 'guild_product_settings_predicate') && (0, b.sy)(t.guild)
                };
            case ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eb.intl.string(eb.t.ipTYsr),
                    ariaLabel: eb.intl.string(eb.t.ipTYsr),
                    element: v.Z,
                    predicate: () => t.monetizationPredicate() && (0, b.sy)(t.guild)
                };
            case ef.pNK.GUILD_PREMIUM:
                return {
                    section: ef.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eb.intl.string(eb.t['8+VX4+']),
                    ariaLabel: eb.intl.string(eb.t['8+VX4+']),
                    element: q.Z,
                    className: ej.serverBoostTabItem,
                    icon: (0, r.jsx)(J.Z, { className: ej.icon })
                };
            case ef.pNK.MEMBERS:
                return {
                    section: ef.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(K.$, {}),
                    ariaLabel: eb.intl.string(eb.t['9Oq93t']),
                    element: K.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case ef.pNK.DELETE:
                return {
                    section: ef.pNK.DELETE,
                    onClick() {
                        let e = I.default.getCurrentUser();
                        if (null == e) return;
                        let i = t.guild.toString(),
                            l = {
                                header: eb.intl.formatToPlainString(eb.t.us7mCw, { name: i }),
                                confirmText: eb.intl.string(eb.t.l3hWPz),
                                cancelText: eb.intl.string(eb.t['ETE/oK']),
                                onConfirm: () => {
                                    E.S.subscribeOnce(ef.CkL.LAYER_POP_COMPLETE, () => {
                                        T.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, a.xf)();
                                }
                            };
                        e.mfaEnabled
                            ? (0, s.h7j)((e) =>
                                  (0, r.jsx)(
                                      s.ConfirmModal,
                                      ev(e_({}, e, l), {
                                          children: (0, r.jsx)(s.Text, {
                                              variant: 'text-md/normal',
                                              children: eb.intl.format(eb.t['Zuo+VV'], { name: i })
                                          })
                                      })
                                  )
                              )
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ev(e_({}, t, l), {
                                              validationText: i,
                                              instructionText: eb.intl.string(eb.t.abprOD),
                                              errorText: eb.intl.string(eb.t['c2/DS0']),
                                              children: eb.intl.format(eb.t['Zuo+VV'], { name: i })
                                          })
                                      );
                              });
                    },
                    label: eb.intl.string(eb.t.l3hWPz),
                    ariaLabel: eb.intl.string(eb.t.l3hWPz),
                    icon: (0, r.jsx)(s.XHJ, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    predicate: () => t.isOwnerWithRequiredMfaLevel
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
            case ef.pNK.CLYDE:
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
                (0, S.vE)(e);
        }
    }
};
