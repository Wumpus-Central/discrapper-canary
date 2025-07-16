n.d(t, { Z: () => eb });
var r = n(255367),
    i = n(990547),
    l = n(704215),
    s = n(481060),
    a = n(37234),
    o = n(493544),
    c = n(688465),
    d = n(676317),
    u = n(874993),
    m = n(45966),
    g = n(637853),
    p = n(352981),
    f = n(610403),
    h = n(923726),
    x = n(303737),
    b = n(15030),
    j = n(220685),
    _ = n(536442),
    v = n(575258),
    O = n(276687),
    C = n(594174),
    y = n(585483),
    N = n(823379),
    I = n(434404),
    E = n(360606),
    S = n(946724),
    T = n(999382),
    P = n(44550),
    w = n(853714),
    R = n(359191),
    Z = n(84658),
    D = n(142961),
    A = n(730910),
    L = n(475013),
    k = n(213956),
    M = n(702478),
    G = n(60986),
    U = n(247031),
    B = n(787561),
    F = n(579648),
    H = n(460461),
    z = n(29605),
    V = n(365307),
    W = n(324330),
    Y = n(495300),
    K = n(651780),
    X = n(279542),
    q = n(665324),
    Q = n(208150),
    J = n(353398),
    $ = n(365774),
    ee = n(178387),
    et = n(993097),
    en = n(486358),
    er = n(942478),
    ei = n(845995),
    el = n(708510),
    es = n(237245),
    ea = n(658666),
    eo = n(224726),
    ec = n(308619),
    ed = n(254925),
    eu = n(209402),
    em = n(981631),
    eg = n(135899),
    ep = n(388032),
    ef = n(474913);
function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function ex(e, t) {
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
let eb = {
    getSectionDefinition: function (e, t) {
        let eb = (0, p.p)(t.guild.id, 'guild_settings'),
            ej = !1 === t.guild.features.has(em.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.features.has(em.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            e_ =
                eb && ej
                    ? {
                          label: (0, r.jsx)('div', {
                              className: ef.roleSubLabel,
                              children: ep.intl.string(ep.t.Tn7Koq)
                          }),
                          ariaLabel: ep.intl.string(ep.t.Tn7Koq)
                      }
                    : {
                          label: (0, r.jsx)('div', {
                              className: ef.roleSubLabel,
                              children: ep.intl.string(ep.t['KzCF//'])
                          }),
                          ariaLabel: ep.intl.string(ep.t['KzCF//'])
                      },
            ev = t.guild.features.has(em.oNc.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case em.pNK.PROFILE:
                return {
                    section: em.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ep.intl.string(ep.t.txdaxc),
                    ariaLabel: ep.intl.string(ep.t.txdaxc),
                    element: eo.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [T.Z],
                        element: ec.Z
                    }
                };
            case em.pNK.TAG:
                return {
                    section: em.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ep.intl.string(ep.t['2QmKZ2']),
                    ariaLabel: ep.intl.string(ep.t['2QmKZ2']),
                    element: ed.ZP,
                    predicate: () => t.canManageGuild,
                    notice: {
                        stores: [T.Z],
                        element: eu.Z
                    },
                    newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE]
                };
            case em.pNK.ENGAGEMENT:
                return {
                    section: em.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ep.intl.string(ep.t['6TAHb2']),
                    ariaLabel: ep.intl.string(ep.t['6TAHb2']),
                    element: en.Z,
                    notice: {
                        stores: [T.Z],
                        element: er.R
                    }
                };
            case em.pNK.BOOST_PERKS:
                return {
                    section: em.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ep.intl.string(ep.t.UKgg5O),
                    ariaLabel: ep.intl.string(ep.t.UKgg5O),
                    element: ee.I,
                    notice: {
                        stores: [T.Z, P.Z],
                        element: et.C
                    }
                };
            case em.pNK.INVITES:
                return {
                    section: em.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ep.intl.string(ep.t.YOt3Oj),
                    ariaLabel: ep.intl.string(ep.t.YOt3Oj),
                    element: ei.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case em.pNK.ROLES:
                return {
                    section: em.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ep.intl.string(ep.t.LPJmLy),
                    element: L.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: ep.intl.string(ep.t.KXcECw),
                    notice: {
                        stores: [S.Z],
                        element: L._
                    },
                    predicate: () => t.canManageRoles
                };
            case em.pNK.EMOJI:
                return {
                    section: em.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ep.intl.string(ep.t.sMOuub),
                    element: z.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case em.pNK.STICKERS:
                return {
                    section: em.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ep.intl.string(ep.t.R5nQkZ),
                    ariaLabel: ep.intl.string(ep.t.R5nQkZ),
                    element: Q.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case em.pNK.SOUNDBOARD:
                return {
                    section: em.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ep.intl.string(ep.t.OWQNYm),
                    ariaLabel: ep.intl.string(ep.t.OWQNYm),
                    element: q.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case em.pNK.GUILD_TEMPLATES:
                return {
                    section: em.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)($.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ep.intl.string(ep.t.KUw7Sk),
                    element: J.ZP,
                    notice: {
                        stores: [J.Sf],
                        element: J.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case em.pNK.ACCESS:
                return {
                    section: em.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ep.intl.string(ep.t.YJlvBA),
                    element: el.O,
                    notice: {
                        stores: [ea.Z],
                        element: es.w
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: ep.intl.string(ep.t.YJlvBA)
                };
            case em.pNK.INTEGRATIONS:
                return {
                    section: em.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ep.intl.string(ep.t.CIsNZ2),
                    ariaLabel: ep.intl.string(ep.t.CIsNZ2),
                    element: V.Z,
                    notice: {
                        stores: [E.default, T.Z],
                        element: V.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case em.pNK.APP_DIRECTORY:
                return {
                    section: em.pNK.APP_DIRECTORY,
                    label: (0, r.jsx)(G.K, {
                        section: e,
                        guildId: t.guild.id
                    }),
                    ariaLabel: ep.intl.string(ep.t.AKcFUl)
                };
            case em.pNK.SAFETY:
                return {
                    section: em.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ep.intl.string(ep.t['suhY+f']),
                    ariaLabel: ep.intl.string(ep.t['suhY+f']),
                    element: k.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(em.oNc.COMMUNITY)
                };
            case em.pNK.MODERATION:
                return {
                    section: em.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ep.intl.string(ep.t['suhY+f']),
                    element: X.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(em.oNc.COMMUNITY)
                };
            case em.pNK.GUILD_AUTOMOD:
                return {
                    section: em.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)('div', {
                        className: ef.landingPageTabLink,
                        children: ep.intl.string(ep.t.uRelg4)
                    }),
                    ariaLabel: ep.intl.string(ep.t.uRelg4),
                    element: u.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.features.has(em.oNc.COMMUNITY) && ((0, d.Nb)(t.guild.id) || (0, d.ze)(t.guild.id))
                };
            case em.pNK.AUDIT_LOG:
                return {
                    section: em.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ep.intl.string(ep.t.SPWLyc),
                    element: w.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case em.pNK.BANS:
                return {
                    section: em.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ep.intl.string(ep.t.ZbeITU),
                    element: U.Z,
                    predicate: () => t.canManageBans
                };
            case em.pNK.COMMUNITY:
                let eO = ep.intl.string(ep.t.ElKTeX);
                return (
                    t.guild.features.has(em.oNc.COMMUNITY) && (eO = ep.intl.string(ep.t['8nY2LC'])),
                    {
                        section: em.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(em.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eO,
                        element: B.Z,
                        ariaLabel: eO,
                        newIndicator: !t.guild.features.has(em.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eg.U3 && _.qc.hasHotspot(_.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [T.Z],
                            element: B.X
                        }
                    }
                );
            case em.pNK.ONBOARDING:
                return {
                    section: em.pNK.ONBOARDING,
                    label: ep.intl.string(ep.t.LdxCKy),
                    element: Y.Z,
                    ariaLabel: ep.intl.string(ep.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [R.Z],
                        element: A.Z
                    },
                    predicate: () => (0, g.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (m.Z.getEnabled(e)) return ep.intl.string(ep.t.pPSmxs).toUpperCase();
                        if ((0, D.C)(e)) return ep.intl.string(ep.t.HDF4o6).toUpperCase();
                        let n = Z.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return ep.intl.formatToPlainString(ep.t['5r28iY'], {
                                count: r + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case em.pNK.ANALYTICS:
                return {
                    section: em.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ep.intl.string(ep.t['0wWfUF']),
                    ariaLabel: ep.intl.string(ep.t['0wWfUF']),
                    element: M.Z,
                    predicate: () => ev
                };
            case em.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: em.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)('div', {
                        className: ef.landingPageTabLink,
                        children: [ep.intl.string(ep.t.kGlQGB), ' ', (0, r.jsx)(c.Z, {})]
                    }),
                    ariaLabel: ep.intl.string(ep.t.kGlQGB),
                    element: H.Z,
                    notice: {
                        stores: [T.Z],
                        element: H.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.features.has(em.oNc.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished));
                    }
                };
            case em.pNK.COMMUNITY_WELCOME:
                return {
                    section: em.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ep.intl.string(ep.t['2rkmDg']),
                    ariaLabel: ep.intl.string(ep.t['2rkmDg']),
                    element: F.Z,
                    notice: {
                        stores: [v.Z],
                        element: O.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.features.has(em.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(em.oNc.GUILD_SERVER_GUIDE)
                };
            case em.pNK.ROLE_SUBSCRIPTIONS:
                return ex(eh({}, e_), {
                    section: em.pNK.ROLE_SUBSCRIPTIONS,
                    element: b.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, x.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                });
            case em.pNK.GUILD_PRODUCTS:
                return {
                    section: em.pNK.GUILD_PRODUCTS,
                    label: ep.intl.string(ep.t.X6h2g4),
                    ariaLabel: ep.intl.string(ep.t.X6h2g4),
                    element: f.Z,
                    predicate: () => t.monetizationPredicate() && (0, p.p)(t.guild.id, 'guild_product_settings_predicate') && (0, h.sy)(t.guild)
                };
            case em.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: em.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ep.intl.string(ep.t.ipTYsr),
                    ariaLabel: ep.intl.string(ep.t.ipTYsr),
                    element: j.Z,
                    predicate: () => t.monetizationPredicate() && (0, h.sy)(t.guild)
                };
            case em.pNK.GUILD_PREMIUM:
                return {
                    section: em.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ep.intl.string(ep.t['8+VX4+']),
                    ariaLabel: ep.intl.string(ep.t['8+VX4+']),
                    element: K.Z,
                    className: ef.serverBoostTabItem,
                    icon: (0, r.jsx)(s.$Eu, {
                        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        size: 'sm',
                        className: ef.icon
                    })
                };
            case em.pNK.MEMBERS:
                return {
                    section: em.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(W.$, {}),
                    ariaLabel: ep.intl.string(ep.t['9Oq93t']),
                    element: W.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case em.pNK.DELETE:
                return {
                    section: em.pNK.DELETE,
                    onClick() {
                        let e = C.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = {
                                header: ep.intl.formatToPlainString(ep.t.us7mCw, { name: i }),
                                confirmText: ep.intl.string(ep.t.l3hWPz),
                                cancelText: ep.intl.string(ep.t['ETE/oK']),
                                onConfirm: () => {
                                    (y.S.subscribeOnce(em.CkL.LAYER_POP_COMPLETE, () => {
                                        I.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, a.xf)());
                                }
                            };
                        e.mfaEnabled
                            ? (0, s.h7j)((e) =>
                                  (0, r.jsx)(
                                      s.ConfirmModal,
                                      ex(eh({}, e, l), {
                                          children: (0, r.jsx)(s.Text, {
                                              variant: 'text-md/normal',
                                              children: ep.intl.format(ep.t['Zuo+VV'], { name: i })
                                          })
                                      })
                                  )
                              )
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ex(eh({}, t, l), {
                                              validationText: i,
                                              instructionText: ep.intl.string(ep.t.abprOD),
                                              errorText: ep.intl.string(ep.t['c2/DS0']),
                                              children: ep.intl.format(ep.t['Zuo+VV'], { name: i })
                                          })
                                      );
                              });
                    },
                    label: ep.intl.string(ep.t.l3hWPz),
                    ariaLabel: ep.intl.string(ep.t.l3hWPz),
                    icon: (0, r.jsx)(s.XHJ, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    variant: 'destructive',
                    predicate: () => t.isOwnerWithRequiredMfaLevel
                };
            case em.pNK.LANDING:
            case em.pNK.MEMBER_EDIT:
            case em.pNK.MEMBER_TIMEOUT:
            case em.pNK.MEMBER_KICK:
            case em.pNK.MEMBER_BAN:
            case em.pNK.CHANNELS:
            case em.pNK.ROLE_EDIT:
            case em.pNK.ROLE_PERMISSIONS:
            case em.pNK.MEMBER_VERIFICATION:
            case em.pNK.INTEGRATION_SETTINGS:
            case em.pNK.SECURITY:
            case em.pNK.AUDIT_LOG_FILTER:
            case em.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case em.pNK.VANITY_URL:
            case em.pNK.INSTANT_INVITES:
            case em.pNK.OVERVIEW:
            case em.pNK.WEBHOOKS:
            case em.pNK.EDIT_WEBHOOK:
            case em.pNK.INTEGRATION_PLATFORM:
            case em.pNK.LOBBIES_LINKED:
            case em.pNK.EDIT_LINKED_LOBBY:
            case em.pNK.CHANNELS_FOLLOWED:
            case em.pNK.COMMUNITY_INTRO:
            case em.pNK.ROLE_EDIT_REFRESH:
            case em.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case em.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case em.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case em.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case em.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case em.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, N.vE)(e);
        }
    }
};
