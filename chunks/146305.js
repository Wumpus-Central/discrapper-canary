n.d(t, { Z: () => e_ });
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
    v = n(50101),
    O = n(575258),
    C = n(276687),
    y = n(594174),
    N = n(585483),
    I = n(823379),
    E = n(434404),
    S = n(360606),
    T = n(946724),
    P = n(999382),
    w = n(44550),
    R = n(853714),
    Z = n(359191),
    D = n(84658),
    k = n(142961),
    A = n(730910),
    L = n(475013),
    M = n(213956),
    G = n(702478),
    U = n(60986),
    B = n(247031),
    F = n(787561),
    z = n(579648),
    H = n(460461),
    V = n(29605),
    W = n(365307),
    Y = n(324330),
    K = n(495300),
    X = n(651780),
    q = n(279542),
    Q = n(413335),
    J = n(665324),
    $ = n(208150),
    ee = n(353398),
    et = n(365774),
    en = n(178387),
    er = n(993097),
    ei = n(486358),
    el = n(942478),
    es = n(845995),
    ea = n(708510),
    eo = n(237245),
    ec = n(658666),
    ed = n(224726),
    eu = n(308619),
    em = n(254925),
    eg = n(209402),
    ep = n(981631),
    ef = n(135899),
    eh = n(388032),
    ex = n(474913);
function eb(e) {
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
let e_ = {
    getSectionDefinition: function (e, t) {
        let e_ = (0, p.p)(t.guild.id, 'guild_settings'),
            ev = !1 === t.guild.features.has(ep.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.features.has(ep.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            eO =
                e_ && ev
                    ? {
                          label: (0, r.jsx)('div', {
                              className: ex.roleSubLabel,
                              children: eh.intl.string(eh.t.Tn7Koq)
                          }),
                          ariaLabel: eh.intl.string(eh.t.Tn7Koq)
                      }
                    : {
                          label: (0, r.jsx)('div', {
                              className: ex.roleSubLabel,
                              children: eh.intl.string(eh.t['KzCF//'])
                          }),
                          ariaLabel: eh.intl.string(eh.t['KzCF//'])
                      },
            eC = t.guild.features.has(ep.oNc.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ep.pNK.PROFILE:
                return {
                    section: ep.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eh.intl.string(eh.t.txdaxc),
                    ariaLabel: eh.intl.string(eh.t.txdaxc),
                    element: ed.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [P.Z],
                        element: eu.Z
                    }
                };
            case ep.pNK.TAG:
                return {
                    section: ep.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eh.intl.string(eh.t['2QmKZ2']),
                    ariaLabel: eh.intl.string(eh.t['2QmKZ2']),
                    element: em.ZP,
                    predicate() {
                        let e = (0, v.gV)(t.guild.id, 'guild_settings');
                        return t.canManageGuild && e;
                    },
                    notice: {
                        stores: [P.Z],
                        element: eg.Z
                    },
                    newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE]
                };
            case ep.pNK.ENGAGEMENT:
                return {
                    section: ep.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eh.intl.string(eh.t['6TAHb2']),
                    ariaLabel: eh.intl.string(eh.t['6TAHb2']),
                    element: ei.Z,
                    notice: {
                        stores: [P.Z],
                        element: el.R
                    }
                };
            case ep.pNK.BOOST_PERKS:
                return {
                    section: ep.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: eh.intl.string(eh.t.UKgg5O),
                    ariaLabel: eh.intl.string(eh.t.UKgg5O),
                    element: en.I,
                    notice: {
                        stores: [P.Z, w.Z],
                        element: er.C
                    }
                };
            case ep.pNK.INVITES:
                return {
                    section: ep.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eh.intl.string(eh.t.YOt3Oj),
                    ariaLabel: eh.intl.string(eh.t.YOt3Oj),
                    element: es.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ep.pNK.ROLES:
                return {
                    section: ep.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eh.intl.string(eh.t.LPJmLy),
                    element: L.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: eh.intl.string(eh.t.KXcECw),
                    notice: {
                        stores: [T.Z],
                        element: L._
                    },
                    predicate: () => t.canManageRoles
                };
            case ep.pNK.EMOJI:
                return {
                    section: ep.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eh.intl.string(eh.t.sMOuub),
                    element: V.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case ep.pNK.STICKERS:
                return {
                    section: ep.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eh.intl.string(eh.t.R5nQkZ),
                    ariaLabel: eh.intl.string(eh.t.R5nQkZ),
                    element: $.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ep.pNK.SOUNDBOARD:
                return {
                    section: ep.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eh.intl.string(eh.t.OWQNYm),
                    ariaLabel: eh.intl.string(eh.t.OWQNYm),
                    element: J.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ep.pNK.GUILD_TEMPLATES:
                return {
                    section: ep.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(et.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eh.intl.string(eh.t.KUw7Sk),
                    element: ee.ZP,
                    notice: {
                        stores: [ee.Sf],
                        element: ee.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case ep.pNK.ACCESS:
                return {
                    section: ep.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eh.intl.string(eh.t.YJlvBA),
                    element: ea.O,
                    notice: {
                        stores: [ec.Z],
                        element: eo.w
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: eh.intl.string(eh.t.YJlvBA)
                };
            case ep.pNK.INTEGRATIONS:
                return {
                    section: ep.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eh.intl.string(eh.t.CIsNZ2),
                    ariaLabel: eh.intl.string(eh.t.CIsNZ2),
                    element: W.Z,
                    notice: {
                        stores: [S.default, P.Z],
                        element: W.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case ep.pNK.APP_DIRECTORY:
                return {
                    section: ep.pNK.APP_DIRECTORY,
                    label: (0, r.jsx)(U.K, {
                        section: e,
                        guildId: t.guild.id
                    }),
                    ariaLabel: eh.intl.string(eh.t.AKcFUl)
                };
            case ep.pNK.SAFETY:
                return {
                    section: ep.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eh.intl.string(eh.t['suhY+f']),
                    ariaLabel: eh.intl.string(eh.t['suhY+f']),
                    element: M.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.features.has(ep.oNc.COMMUNITY)
                };
            case ep.pNK.MODERATION:
                return {
                    section: ep.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eh.intl.string(eh.t['suhY+f']),
                    element: q.ZP,
                    predicate: () => t.canManageGuild && !t.guild.features.has(ep.oNc.COMMUNITY)
                };
            case ep.pNK.GUILD_AUTOMOD:
                return {
                    section: ep.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)('div', {
                        className: ex.landingPageTabLink,
                        children: eh.intl.string(eh.t.uRelg4)
                    }),
                    ariaLabel: eh.intl.string(eh.t.uRelg4),
                    element: u.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.features.has(ep.oNc.COMMUNITY) && ((0, d.Nb)(t.guild.id) || (0, d.ze)(t.guild.id))
                };
            case ep.pNK.AUDIT_LOG:
                return {
                    section: ep.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eh.intl.string(eh.t.SPWLyc),
                    element: R.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case ep.pNK.BANS:
                return {
                    section: ep.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eh.intl.string(eh.t.ZbeITU),
                    element: B.Z,
                    predicate: () => t.canManageBans
                };
            case ep.pNK.COMMUNITY:
                let ey = eh.intl.string(eh.t.ElKTeX);
                return (
                    t.guild.features.has(ep.oNc.COMMUNITY) && (ey = eh.intl.string(eh.t['8nY2LC'])),
                    {
                        section: ep.pNK.COMMUNITY,
                        impressionName: t.guild.features.has(ep.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: ey,
                        element: F.Z,
                        ariaLabel: ey,
                        newIndicator: !t.guild.features.has(ep.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= ef.U3 && _.qc.hasHotspot(_.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [P.Z],
                            element: F.X
                        }
                    }
                );
            case ep.pNK.ONBOARDING:
                return {
                    section: ep.pNK.ONBOARDING,
                    label: eh.intl.string(eh.t.LdxCKy),
                    element: K.Z,
                    ariaLabel: eh.intl.string(eh.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [Z.Z],
                        element: A.Z
                    },
                    predicate: () => (0, g.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (m.Z.getEnabled(e)) return eh.intl.string(eh.t.pPSmxs).toUpperCase();
                        if ((0, k.C)(e)) return eh.intl.string(eh.t.HDF4o6).toUpperCase();
                        let n = D.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return eh.intl.formatToPlainString(eh.t['5r28iY'], {
                                count: r + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case ep.pNK.ANALYTICS:
                return {
                    section: ep.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eh.intl.string(eh.t['0wWfUF']),
                    ariaLabel: eh.intl.string(eh.t['0wWfUF']),
                    element: G.Z,
                    predicate: () => eC
                };
            case ep.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ep.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)('div', {
                        className: ex.landingPageTabLink,
                        children: [eh.intl.string(eh.t.kGlQGB), ' ', (0, r.jsx)(c.Z, {})]
                    }),
                    ariaLabel: eh.intl.string(eh.t.kGlQGB),
                    element: H.Z,
                    notice: {
                        stores: [P.Z],
                        element: H.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.features.has(ep.oNc.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished));
                    }
                };
            case ep.pNK.COMMUNITY_WELCOME:
                return {
                    section: ep.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eh.intl.string(eh.t['2rkmDg']),
                    ariaLabel: eh.intl.string(eh.t['2rkmDg']),
                    element: z.Z,
                    notice: {
                        stores: [O.Z],
                        element: C.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.features.has(ep.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(ep.oNc.GUILD_SERVER_GUIDE)
                };
            case ep.pNK.ROLE_SUBSCRIPTIONS:
                return ej(eb({}, eO), {
                    section: ep.pNK.ROLE_SUBSCRIPTIONS,
                    element: b.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, x.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                });
            case ep.pNK.GUILD_PRODUCTS:
                return {
                    section: ep.pNK.GUILD_PRODUCTS,
                    label: eh.intl.string(eh.t.X6h2g4),
                    ariaLabel: eh.intl.string(eh.t.X6h2g4),
                    element: f.Z,
                    predicate: () => t.monetizationPredicate() && (0, p.p)(t.guild.id, 'guild_product_settings_predicate') && (0, h.sy)(t.guild)
                };
            case ep.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ep.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eh.intl.string(eh.t.ipTYsr),
                    ariaLabel: eh.intl.string(eh.t.ipTYsr),
                    element: j.Z,
                    predicate: () => t.monetizationPredicate() && (0, h.sy)(t.guild)
                };
            case ep.pNK.GUILD_PREMIUM:
                return {
                    section: ep.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eh.intl.string(eh.t['8+VX4+']),
                    ariaLabel: eh.intl.string(eh.t['8+VX4+']),
                    element: X.Z,
                    className: ex.serverBoostTabItem,
                    icon: (0, r.jsx)(Q.Z, { className: ex.icon })
                };
            case ep.pNK.MEMBERS:
                return {
                    section: ep.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(Y.$, {}),
                    ariaLabel: eh.intl.string(eh.t['9Oq93t']),
                    element: Y.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case ep.pNK.DELETE:
                return {
                    section: ep.pNK.DELETE,
                    onClick() {
                        let e = y.default.getCurrentUser();
                        if (null == e) return;
                        let { name: i } = t.guild,
                            l = {
                                header: eh.intl.formatToPlainString(eh.t.us7mCw, { name: i }),
                                confirmText: eh.intl.string(eh.t.l3hWPz),
                                cancelText: eh.intl.string(eh.t['ETE/oK']),
                                onConfirm: () => {
                                    (N.S.subscribeOnce(ep.CkL.LAYER_POP_COMPLETE, () => {
                                        E.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, a.xf)());
                                }
                            };
                        e.mfaEnabled
                            ? (0, s.h7j)((e) =>
                                  (0, r.jsx)(
                                      s.ConfirmModal,
                                      ej(eb({}, e, l), {
                                          children: (0, r.jsx)(s.Text, {
                                              variant: 'text-md/normal',
                                              children: eh.intl.format(eh.t['Zuo+VV'], { name: i })
                                          })
                                      })
                                  )
                              )
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ej(eb({}, t, l), {
                                              validationText: i,
                                              instructionText: eh.intl.string(eh.t.abprOD),
                                              errorText: eh.intl.string(eh.t['c2/DS0']),
                                              children: eh.intl.format(eh.t['Zuo+VV'], { name: i })
                                          })
                                      );
                              });
                    },
                    label: eh.intl.string(eh.t.l3hWPz),
                    ariaLabel: eh.intl.string(eh.t.l3hWPz),
                    icon: (0, r.jsx)(s.XHJ, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    variant: 'destructive',
                    predicate: () => t.isOwnerWithRequiredMfaLevel
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
                (0, I.vE)(e);
        }
    }
};
