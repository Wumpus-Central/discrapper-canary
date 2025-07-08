n.d(t, { Z: () => ej });
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
    k = n(730910),
    A = n(475013),
    L = n(213956),
    M = n(702478),
    G = n(60986),
    U = n(247031),
    B = n(787561),
    F = n(579648),
    z = n(460461),
    H = n(29605),
    V = n(365307),
    W = n(324330),
    Y = n(495300),
    K = n(651780),
    X = n(279542),
    q = n(413335),
    Q = n(665324),
    J = n(208150),
    $ = n(353398),
    ee = n(365774),
    et = n(178387),
    en = n(993097),
    er = n(486358),
    ei = n(942478),
    el = n(845995),
    es = n(708510),
    ea = n(237245),
    eo = n(658666),
    ec = n(224726),
    ed = n(308619),
    eu = n(254925),
    em = n(209402),
    eg = n(981631),
    ep = n(135899),
    ef = n(388032),
    eh = n(474913);
function ex(e) {
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
function eb(e, t) {
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
let ej = {
    getSectionDefinition: function (e, t) {
        let ej = (0, p.p)(t.guild.id, 'guild_settings'),
            e_ = !1 === t.guild.features.has(eg.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.features.has(eg.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            ev =
                ej && e_
                    ? {
                          label: (0, r.jsx)('div', {
                              className: eh.roleSubLabel,
                              children: ef.intl.string(ef.t.Tn7Koq)
                          }),
                          ariaLabel: ef.intl.string(ef.t.Tn7Koq)
                      }
                    : {
                          label: (0, r.jsx)('div', {
                              className: eh.roleSubLabel,
                              children: ef.intl.string(ef.t['KzCF//'])
                          }),
                          ariaLabel: ef.intl.string(ef.t['KzCF//'])
                      },
            eO = t.guild.features.has(eg.oNc.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case eg.pNK.PROFILE:
                return {
                    section: eg.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ef.intl.string(ef.t.txdaxc),
                    ariaLabel: ef.intl.string(ef.t.txdaxc),
                    element: ec.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [T.Z],
                        element: ed.Z
                    }
                };
            case eg.pNK.TAG:
                return {
                    section: eg.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ef.intl.string(ef.t['2QmKZ2']),
                    ariaLabel: ef.intl.string(ef.t['2QmKZ2']),
                    element: eu.ZP,
                    predicate: () => t.canManageGuild,
                    notice: {
                        stores: [T.Z],
                        element: em.Z
                    },
                    newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE]
                };
            case eg.pNK.ENGAGEMENT:
                return {
                    section: eg.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ef.intl.string(ef.t['6TAHb2']),
                    ariaLabel: ef.intl.string(ef.t['6TAHb2']),
                    element: er.Z,
                    notice: {
                        stores: [T.Z],
                        element: ei.R
                    }
                };
            case eg.pNK.BOOST_PERKS:
                return {
                    section: eg.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ef.intl.string(ef.t.UKgg5O),
                    ariaLabel: ef.intl.string(ef.t.UKgg5O),
                    element: et.I,
                    notice: {
                        stores: [T.Z, P.Z],
                        element: en.C
                    }
                };
            case eg.pNK.INVITES:
                return {
                    section: eg.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ef.intl.string(ef.t.YOt3Oj),
                    ariaLabel: ef.intl.string(ef.t.YOt3Oj),
                    element: el.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case eg.pNK.ROLES:
                return {
                    section: eg.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ef.intl.string(ef.t.LPJmLy),
                    element: A.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: ef.intl.string(ef.t.KXcECw),
                    notice: {
                        stores: [S.Z],
                        element: A._
                    },
                    predicate: () => t.canManageRoles
                };
            case eg.pNK.EMOJI:
                return {
                    section: eg.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ef.intl.string(ef.t.sMOuub),
                    element: H.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case eg.pNK.STICKERS:
                return {
                    section: eg.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ef.intl.string(ef.t.R5nQkZ),
                    ariaLabel: ef.intl.string(ef.t.R5nQkZ),
                    element: J.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case eg.pNK.SOUNDBOARD:
                return {
                    section: eg.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ef.intl.string(ef.t.OWQNYm),
                    ariaLabel: ef.intl.string(ef.t.OWQNYm),
                    element: Q.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case eg.pNK.GUILD_TEMPLATES:
                return {
                    section: eg.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(ee.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ef.intl.string(ef.t.KUw7Sk),
                    element: $.ZP,
                    notice: {
                        stores: [$.Sf],
                        element: $.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case eg.pNK.ACCESS:
                return {
                    section: eg.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ef.intl.string(ef.t.YJlvBA),
                    element: es.O,
                    notice: {
                        stores: [eo.Z],
                        element: ea.w
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: ef.intl.string(ef.t.YJlvBA)
                };
            case eg.pNK.INTEGRATIONS:
                return {
                    section: eg.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ef.intl.string(ef.t.CIsNZ2),
                    ariaLabel: ef.intl.string(ef.t.CIsNZ2),
                    element: V.Z,
                    notice: {
                        stores: [E.default, T.Z],
                        element: V.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case eg.pNK.APP_DIRECTORY:
                return {
                    section: eg.pNK.APP_DIRECTORY,
                    label: (0, r.jsx)(G.K, {
                        section: e,
                        guildId: t.guild.id
                    }),
                    ariaLabel: ef.intl.string(ef.t.AKcFUl)
                };
            case eg.pNK.SAFETY:
                return {
                    section: eg.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ef.intl.string(ef.t['suhY+f']),
                    ariaLabel: ef.intl.string(ef.t['suhY+f']),
                    element: L.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(eg.oNc.COMMUNITY)
                };
            case eg.pNK.MODERATION:
                return {
                    section: eg.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ef.intl.string(ef.t['suhY+f']),
                    element: X.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(eg.oNc.COMMUNITY)
                };
            case eg.pNK.GUILD_AUTOMOD:
                return {
                    section: eg.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)('div', {
                        className: eh.landingPageTabLink,
                        children: ef.intl.string(ef.t.uRelg4)
                    }),
                    ariaLabel: ef.intl.string(ef.t.uRelg4),
                    element: u.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.features.has(eg.oNc.COMMUNITY) && ((0, d.Nb)(t.guild.id) || (0, d.ze)(t.guild.id))
                };
            case eg.pNK.AUDIT_LOG:
                return {
                    section: eg.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ef.intl.string(ef.t.SPWLyc),
                    element: w.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case eg.pNK.BANS:
                return {
                    section: eg.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ef.intl.string(ef.t.ZbeITU),
                    element: U.Z,
                    predicate: () => t.canManageBans
                };
            case eg.pNK.COMMUNITY:
                let eC = ef.intl.string(ef.t.ElKTeX);
                return (
                    t.guild.features.has(eg.oNc.COMMUNITY) && (eC = ef.intl.string(ef.t['8nY2LC'])),
                    {
                        section: eg.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(eg.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eC,
                        element: B.Z,
                        ariaLabel: eC,
                        newIndicator: !t.guild.features.has(eg.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= ep.U3 && _.qc.hasHotspot(_.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [T.Z],
                            element: B.X
                        }
                    }
                );
            case eg.pNK.ONBOARDING:
                return {
                    section: eg.pNK.ONBOARDING,
                    label: ef.intl.string(ef.t.LdxCKy),
                    element: Y.Z,
                    ariaLabel: ef.intl.string(ef.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [R.Z],
                        element: k.Z
                    },
                    predicate: () => (0, g.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (m.Z.getEnabled(e)) return ef.intl.string(ef.t.pPSmxs).toUpperCase();
                        if ((0, D.C)(e)) return ef.intl.string(ef.t.HDF4o6).toUpperCase();
                        let n = Z.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return ef.intl.formatToPlainString(ef.t['5r28iY'], {
                                count: r + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case eg.pNK.ANALYTICS:
                return {
                    section: eg.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ef.intl.string(ef.t['0wWfUF']),
                    ariaLabel: ef.intl.string(ef.t['0wWfUF']),
                    element: M.Z,
                    predicate: () => eO
                };
            case eg.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: eg.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)('div', {
                        className: eh.landingPageTabLink,
                        children: [ef.intl.string(ef.t.kGlQGB), ' ', (0, r.jsx)(c.Z, {})]
                    }),
                    ariaLabel: ef.intl.string(ef.t.kGlQGB),
                    element: z.Z,
                    notice: {
                        stores: [T.Z],
                        element: z.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.features.has(eg.oNc.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished));
                    }
                };
            case eg.pNK.COMMUNITY_WELCOME:
                return {
                    section: eg.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ef.intl.string(ef.t['2rkmDg']),
                    ariaLabel: ef.intl.string(ef.t['2rkmDg']),
                    element: F.Z,
                    notice: {
                        stores: [v.Z],
                        element: O.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.features.has(eg.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(eg.oNc.GUILD_SERVER_GUIDE)
                };
            case eg.pNK.ROLE_SUBSCRIPTIONS:
                return eb(ex({}, ev), {
                    section: eg.pNK.ROLE_SUBSCRIPTIONS,
                    element: b.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, x.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                });
            case eg.pNK.GUILD_PRODUCTS:
                return {
                    section: eg.pNK.GUILD_PRODUCTS,
                    label: ef.intl.string(ef.t.X6h2g4),
                    ariaLabel: ef.intl.string(ef.t.X6h2g4),
                    element: f.Z,
                    predicate: () => t.monetizationPredicate() && (0, p.p)(t.guild.id, 'guild_product_settings_predicate') && (0, h.sy)(t.guild)
                };
            case eg.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: eg.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ef.intl.string(ef.t.ipTYsr),
                    ariaLabel: ef.intl.string(ef.t.ipTYsr),
                    element: j.Z,
                    predicate: () => t.monetizationPredicate() && (0, h.sy)(t.guild)
                };
            case eg.pNK.GUILD_PREMIUM:
                return {
                    section: eg.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ef.intl.string(ef.t['8+VX4+']),
                    ariaLabel: ef.intl.string(ef.t['8+VX4+']),
                    element: K.Z,
                    className: eh.serverBoostTabItem,
                    icon: (0, r.jsx)(q.Z, { className: eh.icon })
                };
            case eg.pNK.MEMBERS:
                return {
                    section: eg.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(W.$, {}),
                    ariaLabel: ef.intl.string(ef.t['9Oq93t']),
                    element: W.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case eg.pNK.DELETE:
                return {
                    section: eg.pNK.DELETE,
                    onClick() {
                        let e = C.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = {
                                header: ef.intl.formatToPlainString(ef.t.us7mCw, { name: i }),
                                confirmText: ef.intl.string(ef.t.l3hWPz),
                                cancelText: ef.intl.string(ef.t['ETE/oK']),
                                onConfirm: () => {
                                    (y.S.subscribeOnce(eg.CkL.LAYER_POP_COMPLETE, () => {
                                        I.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, a.xf)());
                                }
                            };
                        e.mfaEnabled
                            ? (0, s.h7j)((e) =>
                                  (0, r.jsx)(
                                      s.ConfirmModal,
                                      eb(ex({}, e, l), {
                                          children: (0, r.jsx)(s.Text, {
                                              variant: 'text-md/normal',
                                              children: ef.intl.format(ef.t['Zuo+VV'], { name: i })
                                          })
                                      })
                                  )
                              )
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          eb(ex({}, t, l), {
                                              validationText: i,
                                              instructionText: ef.intl.string(ef.t.abprOD),
                                              errorText: ef.intl.string(ef.t['c2/DS0']),
                                              children: ef.intl.format(ef.t['Zuo+VV'], { name: i })
                                          })
                                      );
                              });
                    },
                    label: ef.intl.string(ef.t.l3hWPz),
                    ariaLabel: ef.intl.string(ef.t.l3hWPz),
                    icon: (0, r.jsx)(s.XHJ, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    variant: 'destructive',
                    predicate: () => t.isOwnerWithRequiredMfaLevel
                };
            case eg.pNK.LANDING:
            case eg.pNK.MEMBER_EDIT:
            case eg.pNK.MEMBER_TIMEOUT:
            case eg.pNK.MEMBER_KICK:
            case eg.pNK.MEMBER_BAN:
            case eg.pNK.CHANNELS:
            case eg.pNK.ROLE_EDIT:
            case eg.pNK.ROLE_PERMISSIONS:
            case eg.pNK.MEMBER_VERIFICATION:
            case eg.pNK.INTEGRATION_SETTINGS:
            case eg.pNK.SECURITY:
            case eg.pNK.AUDIT_LOG_FILTER:
            case eg.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case eg.pNK.VANITY_URL:
            case eg.pNK.INSTANT_INVITES:
            case eg.pNK.OVERVIEW:
            case eg.pNK.WEBHOOKS:
            case eg.pNK.EDIT_WEBHOOK:
            case eg.pNK.INTEGRATION_PLATFORM:
            case eg.pNK.LOBBIES_LINKED:
            case eg.pNK.EDIT_LINKED_LOBBY:
            case eg.pNK.CHANNELS_FOLLOWED:
            case eg.pNK.COMMUNITY_INTRO:
            case eg.pNK.ROLE_EDIT_REFRESH:
            case eg.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case eg.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case eg.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case eg.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case eg.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case eg.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, N.vE)(e);
        }
    }
};
