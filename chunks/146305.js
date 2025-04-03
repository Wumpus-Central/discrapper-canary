n.d(t, { Z: () => eR });
var r = n(200651),
    i = n(990547),
    s = n(704215),
    a = n(481060),
    l = n(37234),
    o = n(493544),
    c = n(353093),
    d = n(593128),
    u = n(979264),
    m = n(688465),
    g = n(749681),
    p = n(258971),
    h = n(676317),
    f = n(874993),
    b = n(45966),
    x = n(637853),
    j = n(352981),
    N = n(610403),
    _ = n(923726),
    v = n(303737),
    C = n(15030),
    O = n(220685),
    y = n(536442),
    I = n(84615),
    E = n(50101),
    S = n(575258),
    T = n(276687),
    P = n(594174),
    w = n(585483),
    R = n(823379),
    Z = n(434404),
    D = n(360606),
    A = n(946724),
    k = n(999382),
    W = n(44550),
    L = n(853714),
    M = n(359191),
    G = n(84658),
    U = n(142961),
    B = n(730910),
    F = n(475013),
    z = n(213956),
    H = n(702478),
    V = n(247031),
    Y = n(787561),
    K = n(579648),
    q = n(511480),
    X = n(460461),
    Q = n(29605),
    J = n(365307),
    $ = n(497666),
    ee = n(324330),
    et = n(495300),
    en = n(312397),
    er = n(651780),
    ei = n(279542),
    es = n(413335),
    ea = n(665324),
    el = n(208150),
    eo = n(353398),
    ec = n(365774),
    ed = n(803288),
    eu = n(804153),
    em = n(178387),
    eg = n(993097),
    ep = n(486358),
    eh = n(942478),
    ef = n(890861),
    eb = n(708510),
    ex = n(237245),
    ej = n(658666),
    eN = n(224726),
    e_ = n(308619),
    ev = n(254925),
    eC = n(209402),
    eO = n(981631),
    ey = n(308083),
    eI = n(49898),
    eE = n(135899),
    eS = n(388032),
    eT = n(474913);
function eP(e) {
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
function ew(e, t) {
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
let eR = {
    getSectionDefinition: function (e, t) {
        var eR;
        let eZ = (0, j.p)(t.guild.id, 'guild_settings'),
            eD = !1 === t.guild.hasFeature(eO.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(eO.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            eA =
                eZ && eD
                    ? {
                          label: (0, r.jsx)('div', {
                              className: eT.roleSubLabel,
                              children: eS.NW.string(eS.t.Tn7Koq)
                          }),
                          ariaLabel: eS.NW.string(eS.t.Tn7Koq)
                      }
                    : {
                          label: (0, r.jsx)('div', {
                              className: eT.roleSubLabel,
                              children: eS.NW.string(eS.t['KzCF//'])
                          }),
                          ariaLabel: eS.NW.string(eS.t['KzCF//'])
                      },
            ek = t.guild.hasFeature(eO.oNc.COMMUNITY) && t.canViewGuildAnalytics,
            eW = (null == (eR = t.guild.profile) ? void 0 : eR.badge) != null ? (0, c.ky)(t.guild.id, t.guild.profile.badge, ey.NC.SIZE_16) : null;
        switch (e) {
            case eO.pNK.PROFILE:
                return {
                    section: eO.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eS.NW.string(eS.t.txdaxc),
                    ariaLabel: eS.NW.string(eS.t.txdaxc),
                    element: eN.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [k.Z],
                        element: e_.Z
                    }
                };
            case eO.pNK.TAG:
                return {
                    section: eO.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eS.NW.string(eS.t['2QmKZ2']),
                    ariaLabel: eS.NW.string(eS.t['2QmKZ2']),
                    element: ev.ZP,
                    predicate() {
                        let e = (0, E.gV)(t.guild.id, 'guild_settings');
                        return t.canManageGuild && e;
                    },
                    notice: {
                        stores: [k.Z],
                        element: eC.Z
                    }
                };
            case eO.pNK.ENGAGEMENT:
                return {
                    section: eO.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eS.NW.string(eS.t['6TAHb2']),
                    ariaLabel: eS.NW.string(eS.t['6TAHb2']),
                    element: ep.Z,
                    notice: {
                        stores: [k.Z],
                        element: eh.R
                    }
                };
            case eO.pNK.BOOST_PERKS:
                return {
                    section: eO.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: eS.NW.string(eS.t.UKgg5O),
                    ariaLabel: eS.NW.string(eS.t.UKgg5O),
                    element: em.I,
                    notice: {
                        stores: [k.Z, W.Z],
                        element: eg.C
                    }
                };
            case eO.pNK.INVITES:
                return {
                    section: eO.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eS.NW.string(eS.t.YOt3Oj),
                    ariaLabel: eS.NW.string(eS.t.YOt3Oj),
                    element: ef.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case eO.pNK.OVERVIEW:
                return {
                    section: eO.pNK.OVERVIEW,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: eS.NW.string(eS.t['/dp6yc']),
                    ariaLabel: eS.NW.string(eS.t['/dp6yc']),
                    element: en.Z,
                    notice: {
                        stores: [k.Z],
                        element: en.O
                    }
                };
            case eO.pNK.ROLES:
                return {
                    section: eO.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eS.NW.string(eS.t.LPJmLy),
                    element: F.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: eS.NW.string(eS.t.KXcECw),
                    notice: {
                        stores: [A.Z],
                        element: F._
                    },
                    predicate: () => t.canManageRoles
                };
            case eO.pNK.EMOJI:
                return {
                    section: eO.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eS.NW.string(eS.t.sMOuub),
                    element: Q.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case eO.pNK.STICKERS:
                return {
                    section: eO.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eS.NW.string(eS.t.R5nQkZ),
                    ariaLabel: eS.NW.string(eS.t.R5nQkZ),
                    element: el.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case eO.pNK.SOUNDBOARD:
                return {
                    section: eO.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eS.NW.string(eS.t.OWQNYm),
                    ariaLabel: eS.NW.string(eS.t.OWQNYm),
                    element: ea.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case eO.pNK.WIDGET:
                return {
                    section: eO.pNK.WIDGET,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: eS.NW.string(eS.t.ACjbTk),
                    element: eu.Z,
                    predicate: () => t.canManageGuild
                };
            case eO.pNK.GUILD_TEMPLATES:
                return {
                    section: eO.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(ec.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eS.NW.string(eS.t.KUw7Sk),
                    element: eo.ZP,
                    notice: {
                        stores: [eo.Sf],
                        element: eo.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case eO.pNK.VANITY_URL:
                return {
                    section: eO.pNK.VANITY_URL,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: eS.NW.string(eS.t['5XZKy8']),
                    element: ed.Z,
                    notice: {
                        stores: [W.Z],
                        element: ed.T
                    },
                    predicate: () => t.isGuildAdmin
                };
            case eO.pNK.ACCESS:
                return {
                    section: eO.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eS.NW.string(eS.t.YJlvBA),
                    element: eb.O,
                    notice: {
                        stores: [ej.Z],
                        element: ex.w
                    },
                    predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild,
                    ariaLabel: eS.NW.string(eS.t.YJlvBA)
                };
            case eO.pNK.INTEGRATIONS:
                return {
                    section: eO.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eS.NW.string(eS.t.CIsNZ2),
                    ariaLabel: eS.NW.string(eS.t.CIsNZ2),
                    element: J.Z,
                    notice: {
                        stores: [D.default, k.Z],
                        element: J.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case eO.pNK.APP_DIRECTORY:
                return {
                    section: eO.pNK.APP_DIRECTORY,
                    label: eS.NW.string(eS.t.AKcFUl),
                    ariaLabel: eS.NW.string(eS.t.AKcFUl),
                    onClick() {
                        (0, g.transitionToGlobalDiscovery)({
                            tab: eI.GlobalDiscoveryTab.APPS,
                            newSessionState: {
                                guildId: t.guild.id,
                                entrypoint: {
                                    name: p.xF.GUILD_SETTINGS,
                                    guildSettingsSection: e
                                }
                            }
                        }),
                            (0, l.xf)();
                    }
                };
            case eO.pNK.SAFETY:
                return {
                    section: eO.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eS.NW.string(eS.t['suhY+f']),
                    ariaLabel: eS.NW.string(eS.t['suhY+f']),
                    element: z.Z,
                    newIndicatorDismissibleContentTypes: [s.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(eO.oNc.COMMUNITY)
                };
            case eO.pNK.MODERATION:
                return {
                    section: eO.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eS.NW.string(eS.t['suhY+f']),
                    element: ei.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(eO.oNc.COMMUNITY)
                };
            case eO.pNK.GUILD_AUTOMOD:
                return {
                    section: eO.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)('div', {
                        className: eT.landingPageTabLink,
                        children: eS.NW.string(eS.t.uRelg4)
                    }),
                    ariaLabel: eS.NW.string(eS.t.uRelg4),
                    element: f.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(eO.oNc.COMMUNITY) && ((0, h.Nb)(t.guild.id) || (0, h.ze)(t.guild.id))
                };
            case eO.pNK.AUDIT_LOG:
                return {
                    section: eO.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eS.NW.string(eS.t.SPWLyc),
                    element: L.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case eO.pNK.BANS:
                return {
                    section: eO.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eS.NW.string(eS.t.ZbeITU),
                    element: V.Z,
                    predicate: () => t.canManageBans
                };
            case eO.pNK.CLAN:
                return {
                    section: eO.pNK.CLAN,
                    label: eS.NW.string(eS.t['6g8uHB']),
                    ariaLabel: eS.NW.string(eS.t['6g8uHB']),
                    onClick() {
                        (0, I.q4)(
                            (e) => {
                                let { closeLayer: n } = e;
                                return (0, r.jsx)(d.Z, {
                                    onClose: n,
                                    guildId: t.guild.id
                                });
                            },
                            { layerKey: ey.q2 }
                        ),
                            (0, l.xf)();
                    },
                    predicate() {
                        var e;
                        return null != (e = t.canAccessClanSettings) && e;
                    },
                    icon: null != eW ? (0, r.jsx)(u.KQ, { src: eW }) : null
                };
            case eO.pNK.COMMUNITY:
                let eL = eS.NW.string(eS.t.ElKTeX);
                return (
                    t.guild.hasFeature(eO.oNc.COMMUNITY) && (eL = t.isGuildSettingsFoundationEnabled ? eS.NW.string(eS.t['8nY2LC']) : eS.NW.string(eS.t['/dp6yc'])),
                    {
                        section: eO.pNK.COMMUNITY,
                        impressionName: t.guild.hasFeature(eO.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eL,
                        element: Y.Z,
                        ariaLabel: eL,
                        newIndicator: !t.guild.hasFeature(eO.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eE.U3 && y.qc.hasHotspot(y.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [k.Z],
                            element: Y.X
                        }
                    }
                );
            case eO.pNK.ONBOARDING:
                return {
                    section: eO.pNK.ONBOARDING,
                    label: eS.NW.string(eS.t.LdxCKy),
                    element: et.Z,
                    ariaLabel: eS.NW.string(eS.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [s.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [M.Z],
                        element: B.Z
                    },
                    predicate: () => (0, x.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (b.Z.getEnabled(e)) return eS.NW.string(eS.t.pPSmxs).toUpperCase();
                        if ((0, U.C)(e)) return eS.NW.string(eS.t.HDF4o6).toUpperCase();
                        let n = G.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return eS.NW.formatToPlainString(eS.t['5r28iY'], {
                                count: r + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case eO.pNK.ANALYTICS:
                return {
                    section: eO.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eS.NW.string(eS.t['0wWfUF']),
                    ariaLabel: eS.NW.string(eS.t['0wWfUF']),
                    element: H.Z,
                    predicate: () => ek
                };
            case eO.pNK.DISCOVERY:
                return {
                    section: eO.pNK.DISCOVERY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                    label: eS.NW.string(eS.t.oGaVGx),
                    element: q.Z,
                    notice: {
                        stores: [k.Z],
                        element: q.s
                    },
                    predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(eO.oNc.COMMUNITY),
                    ariaLabel: t.guild.hasFeature(eO.oNc.DISCOVERABLE) ? eS.NW.string(eS.t.oGaVGx) : eS.NW.string(eS.t.XU0S6u)
                };
            case eO.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: eO.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)('div', {
                        className: eT.landingPageTabLink,
                        children: [eS.NW.string(eS.t.kGlQGB), ' ', (0, r.jsx)(m.Z, {})]
                    }),
                    ariaLabel: eS.NW.string(eS.t.kGlQGB),
                    element: X.Z,
                    notice: {
                        stores: [k.Z],
                        element: X.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.hasFeature(eO.oNc.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished));
                    }
                };
            case eO.pNK.COMMUNITY_WELCOME:
                return {
                    section: eO.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eS.NW.string(eS.t['2rkmDg']),
                    ariaLabel: eS.NW.string(eS.t['2rkmDg']),
                    element: K.Z,
                    notice: {
                        stores: [S.Z],
                        element: T.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(eO.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(eO.oNc.GUILD_SERVER_GUIDE)
                };
            case eO.pNK.ROLE_SUBSCRIPTIONS:
                return ew(eP({}, eA), {
                    section: eO.pNK.ROLE_SUBSCRIPTIONS,
                    element: C.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, v.sO)(t.guild) ? [s.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                });
            case eO.pNK.GUILD_PRODUCTS:
                return {
                    section: eO.pNK.GUILD_PRODUCTS,
                    label: eS.NW.string(eS.t.X6h2g4),
                    ariaLabel: eS.NW.string(eS.t.X6h2g4),
                    element: N.Z,
                    predicate: () => t.monetizationPredicate() && (0, j.p)(t.guild.id, 'guild_product_settings_predicate') && (0, _.sy)(t.guild)
                };
            case eO.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: eO.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eS.NW.string(eS.t.ipTYsr),
                    ariaLabel: eS.NW.string(eS.t.ipTYsr),
                    element: O.Z,
                    predicate: () => t.monetizationPredicate() && (0, _.sy)(t.guild)
                };
            case eO.pNK.GUILD_PREMIUM:
                return {
                    section: eO.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eS.NW.string(eS.t['8+VX4+']),
                    ariaLabel: eS.NW.string(eS.t['8+VX4+']),
                    element: er.Z,
                    className: eT.serverBoostTabItem,
                    icon: (0, r.jsx)(es.Z, { className: eT.icon })
                };
            case eO.pNK.MEMBERS:
                return {
                    section: eO.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(ee.$, {}),
                    ariaLabel: eS.NW.string(eS.t['9Oq93t']),
                    element: ee.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case eO.pNK.INSTANT_INVITES:
                return {
                    section: eO.pNK.INSTANT_INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: eS.NW.string(eS.t['9F90iY']),
                    element: $.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case eO.pNK.DELETE:
                return {
                    section: eO.pNK.DELETE,
                    onClick() {
                        let e = P.default.getCurrentUser();
                        if (null == e) return;
                        let i = t.guild.toString(),
                            s = {
                                header: eS.NW.formatToPlainString(eS.t.us7mCw, { name: i }),
                                confirmText: eS.NW.string(eS.t.l3hWPz),
                                cancelText: eS.NW.string(eS.t['ETE/oK']),
                                onConfirm: () => {
                                    w.S.subscribeOnce(eO.CkL.LAYER_POP_COMPLETE, () => {
                                        Z.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, l.xf)();
                                }
                            };
                        e.mfaEnabled
                            ? (0, a.h7j)((e) =>
                                  (0, r.jsx)(
                                      a.ConfirmModal,
                                      ew(eP({}, e, s), {
                                          children: (0, r.jsx)(a.Text, {
                                              variant: 'text-md/normal',
                                              children: eS.NW.format(eS.t['Zuo+VV'], { name: i })
                                          })
                                      })
                                  )
                              )
                            : (0, a.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ew(eP({}, t, s), {
                                              validationText: i,
                                              instructionText: eS.NW.string(eS.t.abprOD),
                                              errorText: eS.NW.string(eS.t['c2/DS0']),
                                              children: eS.NW.format(eS.t['Zuo+VV'], { name: i })
                                          })
                                      );
                              });
                    },
                    label: eS.NW.string(eS.t.l3hWPz),
                    ariaLabel: eS.NW.string(eS.t.l3hWPz),
                    icon: (0, r.jsx)(a.XHJ, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    predicate: () => t.isOwnerWithRequiredMfaLevel
                };
            case eO.pNK.LANDING:
            case eO.pNK.MEMBER_EDIT:
            case eO.pNK.MEMBER_TIMEOUT:
            case eO.pNK.MEMBER_KICK:
            case eO.pNK.MEMBER_BAN:
            case eO.pNK.CHANNELS:
            case eO.pNK.ROLE_EDIT:
            case eO.pNK.ROLE_PERMISSIONS:
            case eO.pNK.MEMBER_VERIFICATION:
            case eO.pNK.CLYDE:
            case eO.pNK.INTEGRATION_SETTINGS:
            case eO.pNK.SECURITY:
            case eO.pNK.AUDIT_LOG_FILTER:
            case eO.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case eO.pNK.WEBHOOKS:
            case eO.pNK.EDIT_WEBHOOK:
            case eO.pNK.INTEGRATION_PLATFORM:
            case eO.pNK.LOBBIES_LINKED:
            case eO.pNK.EDIT_LINKED_LOBBY:
            case eO.pNK.CHANNELS_FOLLOWED:
            case eO.pNK.COMMUNITY_INTRO:
            case eO.pNK.ROLE_EDIT_REFRESH:
            case eO.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case eO.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case eO.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case eO.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case eO.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case eO.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, R.vE)(e);
        }
    }
};
