n.d(t, { Z: () => ew });
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
    v = n(923726),
    _ = n(303737),
    y = n(15030),
    O = n(220685),
    C = n(536442),
    I = n(84615),
    E = n(575258),
    S = n(276687),
    T = n(594174),
    P = n(585483),
    w = n(823379),
    R = n(434404),
    Z = n(360606),
    D = n(946724),
    k = n(999382),
    A = n(44550),
    W = n(853714),
    L = n(359191),
    M = n(84658),
    G = n(142961),
    U = n(730910),
    B = n(475013),
    F = n(213956),
    z = n(702478),
    H = n(247031),
    V = n(787561),
    Y = n(579648),
    K = n(511480),
    q = n(460461),
    X = n(29605),
    Q = n(365307),
    J = n(497666),
    $ = n(324330),
    ee = n(495300),
    et = n(312397),
    en = n(651780),
    er = n(279542),
    ei = n(413335),
    es = n(665324),
    ea = n(208150),
    el = n(353398),
    eo = n(365774),
    ec = n(803288),
    ed = n(804153),
    eu = n(178387),
    em = n(993097),
    eg = n(486358),
    ep = n(942478),
    eh = n(890861),
    ef = n(708510),
    eb = n(237245),
    ex = n(658666),
    ej = n(224726),
    eN = n(308619),
    ev = n(254925),
    e_ = n(209402),
    ey = n(981631),
    eO = n(308083),
    eC = n(49898),
    eI = n(135899),
    eE = n(388032),
    eS = n(989113);
function eT(e) {
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
function eP(e, t) {
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
let ew = {
    getSectionDefinition: function (e, t) {
        var ew;
        let eR = (0, j.p)(t.guild.id, 'guild_settings'),
            eZ = !1 === t.guild.hasFeature(ey.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(ey.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            eD =
                eR && eZ
                    ? {
                          label: (0, r.jsx)('div', {
                              className: eS.roleSubLabel,
                              children: eE.NW.string(eE.t.Tn7Koq)
                          }),
                          ariaLabel: eE.NW.string(eE.t.Tn7Koq)
                      }
                    : {
                          label: (0, r.jsx)('div', {
                              className: eS.roleSubLabel,
                              children: eE.NW.string(eE.t['KzCF//'])
                          }),
                          ariaLabel: eE.NW.string(eE.t['KzCF//'])
                      },
            ek = t.guild.hasFeature(ey.oNc.COMMUNITY) && t.canViewGuildAnalytics,
            eA = (null === (ew = t.guild.profile) || void 0 === ew ? void 0 : ew.badge) != null ? (0, c.ky)(t.guild.id, t.guild.profile.badge, eO.NC.SIZE_16) : null;
        switch (e) {
            case ey.pNK.PROFILE:
                return {
                    section: ey.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eE.NW.string(eE.t.txdaxc),
                    ariaLabel: eE.NW.string(eE.t.txdaxc),
                    element: ej.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [k.Z],
                        element: eN.Z
                    }
                };
            case ey.pNK.TAG:
                return {
                    section: ey.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eE.NW.string(eE.t['2QmKZ2']),
                    ariaLabel: eE.NW.string(eE.t['2QmKZ2']),
                    element: ev.ZP,
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ey.oNc.GUILD_TAGS),
                    notice: {
                        stores: [k.Z],
                        element: e_.Z
                    }
                };
            case ey.pNK.ENGAGEMENT:
                return {
                    section: ey.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eE.NW.string(eE.t['6TAHb2']),
                    ariaLabel: eE.NW.string(eE.t['6TAHb2']),
                    element: eg.Z,
                    notice: {
                        stores: [k.Z],
                        element: ep.R
                    }
                };
            case ey.pNK.BOOST_PERKS:
                return {
                    section: ey.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: eE.NW.string(eE.t.UKgg5O),
                    ariaLabel: eE.NW.string(eE.t.UKgg5O),
                    element: eu.I,
                    notice: {
                        stores: [k.Z, A.Z],
                        element: em.C
                    }
                };
            case ey.pNK.INVITES:
                return {
                    section: ey.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eE.NW.string(eE.t.YOt3Oj),
                    ariaLabel: eE.NW.string(eE.t.YOt3Oj),
                    element: eh.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ey.pNK.OVERVIEW:
                return {
                    section: ey.pNK.OVERVIEW,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: eE.NW.string(eE.t['/dp6yc']),
                    ariaLabel: eE.NW.string(eE.t['/dp6yc']),
                    element: et.Z,
                    notice: {
                        stores: [k.Z],
                        element: et.O
                    }
                };
            case ey.pNK.ROLES:
                return {
                    section: ey.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eE.NW.string(eE.t.LPJmLy),
                    element: B.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: eE.NW.string(eE.t.KXcECw),
                    notice: {
                        stores: [D.Z],
                        element: B._
                    },
                    predicate: () => t.canManageRoles
                };
            case ey.pNK.EMOJI:
                return {
                    section: ey.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eE.NW.string(eE.t.sMOuub),
                    element: X.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case ey.pNK.STICKERS:
                return {
                    section: ey.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eE.NW.string(eE.t.R5nQkZ),
                    ariaLabel: eE.NW.string(eE.t.R5nQkZ),
                    element: ea.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ey.pNK.SOUNDBOARD:
                return {
                    section: ey.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eE.NW.string(eE.t.OWQNYm),
                    ariaLabel: eE.NW.string(eE.t.OWQNYm),
                    element: es.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ey.pNK.WIDGET:
                return {
                    section: ey.pNK.WIDGET,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: eE.NW.string(eE.t.ACjbTk),
                    element: ed.Z,
                    predicate: () => t.canManageGuild
                };
            case ey.pNK.GUILD_TEMPLATES:
                return {
                    section: ey.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(eo.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eE.NW.string(eE.t.KUw7Sk),
                    element: el.ZP,
                    notice: {
                        stores: [el.Sf],
                        element: el.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case ey.pNK.VANITY_URL:
                return {
                    section: ey.pNK.VANITY_URL,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: eE.NW.string(eE.t['5XZKy8']),
                    element: ec.Z,
                    notice: {
                        stores: [A.Z],
                        element: ec.T
                    },
                    predicate: () => t.isGuildAdmin
                };
            case ey.pNK.ACCESS:
                return {
                    section: ey.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eE.NW.string(eE.t.YJlvBA),
                    element: ef.O,
                    notice: {
                        stores: [ex.Z],
                        element: eb.w
                    },
                    predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild,
                    ariaLabel: eE.NW.string(eE.t.YJlvBA)
                };
            case ey.pNK.INTEGRATIONS:
                return {
                    section: ey.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eE.NW.string(eE.t.CIsNZ2),
                    ariaLabel: eE.NW.string(eE.t.CIsNZ2),
                    element: Q.Z,
                    notice: {
                        stores: [Z.default, k.Z],
                        element: Q.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case ey.pNK.APP_DIRECTORY:
                return {
                    section: ey.pNK.APP_DIRECTORY,
                    label: eE.NW.string(eE.t.AKcFUl),
                    ariaLabel: eE.NW.string(eE.t.AKcFUl),
                    onClick() {
                        (0, g.transitionToGlobalDiscovery)({
                            tab: eC.GlobalDiscoveryTab.APPS,
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
            case ey.pNK.SAFETY:
                return {
                    section: ey.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eE.NW.string(eE.t['suhY+f']),
                    ariaLabel: eE.NW.string(eE.t['suhY+f']),
                    element: F.Z,
                    newIndicatorDismissibleContentTypes: [s.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ey.oNc.COMMUNITY)
                };
            case ey.pNK.MODERATION:
                return {
                    section: ey.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eE.NW.string(eE.t['suhY+f']),
                    element: er.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(ey.oNc.COMMUNITY)
                };
            case ey.pNK.GUILD_AUTOMOD:
                return {
                    section: ey.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)('div', {
                        className: eS.landingPageTabLink,
                        children: eE.NW.string(eE.t.uRelg4)
                    }),
                    ariaLabel: eE.NW.string(eE.t.uRelg4),
                    element: f.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(ey.oNc.COMMUNITY) && ((0, h.Nb)(t.guild.id) || (0, h.ze)(t.guild.id))
                };
            case ey.pNK.AUDIT_LOG:
                return {
                    section: ey.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eE.NW.string(eE.t.SPWLyc),
                    element: W.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case ey.pNK.BANS:
                return {
                    section: ey.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eE.NW.string(eE.t.ZbeITU),
                    element: H.Z,
                    predicate: () => t.canManageBans
                };
            case ey.pNK.CLAN:
                return {
                    section: ey.pNK.CLAN,
                    label: eE.NW.string(eE.t['6g8uHB']),
                    ariaLabel: eE.NW.string(eE.t['6g8uHB']),
                    onClick() {
                        (0, I.q4)(
                            (e) => {
                                let { closeLayer: n } = e;
                                return (0, r.jsx)(d.Z, {
                                    onClose: n,
                                    guildId: t.guild.id
                                });
                            },
                            { layerKey: eO.q2 }
                        ),
                            (0, l.xf)();
                    },
                    predicate() {
                        var e;
                        return null !== (e = t.canAccessClanSettings) && void 0 !== e && e;
                    },
                    icon: null != eA ? (0, r.jsx)(u.KQ, { src: eA }) : null
                };
            case ey.pNK.COMMUNITY:
                let eW = eE.NW.string(eE.t.ElKTeX);
                return (
                    t.guild.hasFeature(ey.oNc.COMMUNITY) && (eW = t.isGuildSettingsFoundationEnabled ? eE.NW.string(eE.t['8nY2LC']) : eE.NW.string(eE.t['/dp6yc'])),
                    {
                        section: ey.pNK.COMMUNITY,
                        impressionName: t.guild.hasFeature(ey.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eW,
                        element: V.Z,
                        ariaLabel: eW,
                        newIndicator: !t.guild.hasFeature(ey.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eI.U3 && C.qc.hasHotspot(C.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [k.Z],
                            element: V.X
                        }
                    }
                );
            case ey.pNK.ONBOARDING:
                return {
                    section: ey.pNK.ONBOARDING,
                    label: eE.NW.string(eE.t.LdxCKy),
                    element: ee.Z,
                    ariaLabel: eE.NW.string(eE.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [s.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [L.Z],
                        element: U.Z
                    },
                    predicate: () => (0, x.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (b.Z.getEnabled(e)) return eE.NW.string(eE.t.pPSmxs).toUpperCase();
                        if ((0, G.C)(e)) return eE.NW.string(eE.t.HDF4o6).toUpperCase();
                        let n = M.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return eE.NW.formatToPlainString(eE.t['5r28iY'], {
                                count: r + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case ey.pNK.ANALYTICS:
                return {
                    section: ey.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eE.NW.string(eE.t['0wWfUF']),
                    ariaLabel: eE.NW.string(eE.t['0wWfUF']),
                    element: z.Z,
                    predicate: () => ek
                };
            case ey.pNK.DISCOVERY:
                return {
                    section: ey.pNK.DISCOVERY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                    label: eE.NW.string(eE.t.oGaVGx),
                    element: K.Z,
                    notice: {
                        stores: [k.Z],
                        element: K.s
                    },
                    predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(ey.oNc.COMMUNITY),
                    ariaLabel: t.guild.hasFeature(ey.oNc.DISCOVERABLE) ? eE.NW.string(eE.t.oGaVGx) : eE.NW.string(eE.t.XU0S6u)
                };
            case ey.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ey.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)('div', {
                        className: eS.landingPageTabLink,
                        children: [eE.NW.string(eE.t.kGlQGB), ' ', (0, r.jsx)(m.Z, {})]
                    }),
                    ariaLabel: eE.NW.string(eE.t.kGlQGB),
                    element: q.Z,
                    notice: {
                        stores: [k.Z],
                        element: q.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.hasFeature(ey.oNc.DISCOVERABLE) || !!(null === (e = t.guildMetadata) || void 0 === e ? void 0 : e.isPublished));
                    }
                };
            case ey.pNK.COMMUNITY_WELCOME:
                return {
                    section: ey.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eE.NW.string(eE.t['2rkmDg']),
                    ariaLabel: eE.NW.string(eE.t['2rkmDg']),
                    element: Y.Z,
                    notice: {
                        stores: [E.Z],
                        element: S.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ey.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(ey.oNc.GUILD_SERVER_GUIDE)
                };
            case ey.pNK.ROLE_SUBSCRIPTIONS:
                return eP(eT({}, eD), {
                    section: ey.pNK.ROLE_SUBSCRIPTIONS,
                    element: y.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, _.sO)(t.guild) ? [s.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                });
            case ey.pNK.GUILD_PRODUCTS:
                return {
                    section: ey.pNK.GUILD_PRODUCTS,
                    label: eE.NW.string(eE.t.X6h2g4),
                    ariaLabel: eE.NW.string(eE.t.X6h2g4),
                    element: N.Z,
                    predicate: () => t.monetizationPredicate() && (0, j.p)(t.guild.id, 'guild_product_settings_predicate') && (0, v.sy)(t.guild)
                };
            case ey.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ey.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eE.NW.string(eE.t.ipTYsr),
                    ariaLabel: eE.NW.string(eE.t.ipTYsr),
                    element: O.Z,
                    predicate: () => t.monetizationPredicate() && (0, v.sy)(t.guild)
                };
            case ey.pNK.GUILD_PREMIUM:
                return {
                    section: ey.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eE.NW.string(eE.t['8+VX4+']),
                    ariaLabel: eE.NW.string(eE.t['8+VX4+']),
                    element: en.Z,
                    className: eS.serverBoostTabItem,
                    icon: (0, r.jsx)(ei.Z, { className: eS.icon })
                };
            case ey.pNK.MEMBERS:
                return {
                    section: ey.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)($.$, {}),
                    ariaLabel: eE.NW.string(eE.t['9Oq93t']),
                    element: $.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case ey.pNK.INSTANT_INVITES:
                return {
                    section: ey.pNK.INSTANT_INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: eE.NW.string(eE.t['9F90iY']),
                    element: J.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ey.pNK.DELETE:
                return {
                    section: ey.pNK.DELETE,
                    onClick() {
                        let e = T.default.getCurrentUser();
                        if (null == e) return;
                        let i = t.guild.toString(),
                            s = {
                                header: eE.NW.formatToPlainString(eE.t.us7mCw, { name: i }),
                                confirmText: eE.NW.string(eE.t.l3hWPz),
                                cancelText: eE.NW.string(eE.t['ETE/oK']),
                                onConfirm: () => {
                                    P.S.subscribeOnce(ey.CkL.LAYER_POP_COMPLETE, () => {
                                        R.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, l.xf)();
                                }
                            };
                        e.mfaEnabled
                            ? (0, a.h7j)((e) =>
                                  (0, r.jsx)(
                                      a.ConfirmModal,
                                      eP(eT({}, e, s), {
                                          children: (0, r.jsx)(a.Text, {
                                              variant: 'text-md/normal',
                                              children: eE.NW.format(eE.t['Zuo+VV'], { name: i })
                                          })
                                      })
                                  )
                              )
                            : (0, a.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          eP(eT({}, t, s), {
                                              validationText: i,
                                              instructionText: eE.NW.string(eE.t.abprOD),
                                              errorText: eE.NW.string(eE.t['c2/DS0']),
                                              children: eE.NW.format(eE.t['Zuo+VV'], { name: i })
                                          })
                                      );
                              });
                    },
                    label: eE.NW.string(eE.t.l3hWPz),
                    ariaLabel: eE.NW.string(eE.t.l3hWPz),
                    icon: (0, r.jsx)(a.XHJ, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    predicate: () => t.isOwnerWithRequiredMfaLevel
                };
            case ey.pNK.LANDING:
            case ey.pNK.MEMBER_EDIT:
            case ey.pNK.MEMBER_TIMEOUT:
            case ey.pNK.MEMBER_KICK:
            case ey.pNK.MEMBER_BAN:
            case ey.pNK.CHANNELS:
            case ey.pNK.ROLE_EDIT:
            case ey.pNK.ROLE_PERMISSIONS:
            case ey.pNK.MEMBER_VERIFICATION:
            case ey.pNK.CLYDE:
            case ey.pNK.INTEGRATION_SETTINGS:
            case ey.pNK.SECURITY:
            case ey.pNK.AUDIT_LOG_FILTER:
            case ey.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case ey.pNK.WEBHOOKS:
            case ey.pNK.EDIT_WEBHOOK:
            case ey.pNK.INTEGRATION_PLATFORM:
            case ey.pNK.LOBBIES_LINKED:
            case ey.pNK.EDIT_LINKED_LOBBY:
            case ey.pNK.CHANNELS_FOLLOWED:
            case ey.pNK.COMMUNITY_INTRO:
            case ey.pNK.ROLE_EDIT_REFRESH:
            case ey.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case ey.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case ey.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case ey.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case ey.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case ey.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, w.vE)(e);
        }
    }
};
