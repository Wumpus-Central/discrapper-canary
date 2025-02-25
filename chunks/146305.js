n.d(t, { Z: () => eT });
var r = n(200651),
    i = n(990547),
    s = n(704215),
    a = n(481060),
    l = n(37234),
    o = n(493544),
    c = n(132871),
    d = n(147890),
    u = n(353093),
    m = n(593128),
    p = n(979264),
    g = n(688465),
    h = n(676317),
    f = n(874993),
    b = n(45966),
    x = n(637853),
    j = n(352981),
    N = n(610403),
    v = n(923726),
    _ = n(303737),
    O = n(15030),
    y = n(220685),
    C = n(536442),
    I = n(84615),
    E = n(575258),
    S = n(276687),
    T = n(594174),
    P = n(585483),
    w = n(823379),
    R = n(434404),
    D = n(360606),
    Z = n(946724),
    A = n(999382),
    k = n(44550),
    W = n(853714),
    L = n(359191),
    M = n(84658),
    U = n(142961),
    G = n(730910),
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
    ep = n(486358),
    eg = n(942478),
    eh = n(890861),
    ef = n(708510),
    eb = n(237245),
    ex = n(658666),
    ej = n(224726),
    eN = n(308619),
    ev = n(254925),
    e_ = n(981631),
    eO = n(308083),
    ey = n(135899),
    eC = n(388032),
    eI = n(964644);
function eE(e) {
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
function eS(e, t) {
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
let eT = {
    getSectionDefinition: function (e, t) {
        var eT;
        let eP = (0, j.p)(t.guild.id, 'guild_settings'),
            ew = !1 === t.guild.hasFeature(e_.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(e_.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            eR =
                eP && ew
                    ? {
                          label: (0, r.jsx)('div', {
                              className: eI.roleSubLabel,
                              children: eC.NW.string(eC.t.Tn7Koq)
                          }),
                          ariaLabel: eC.NW.string(eC.t.Tn7Koq)
                      }
                    : {
                          label: (0, r.jsx)('div', {
                              className: eI.roleSubLabel,
                              children: eC.NW.string(eC.t['KzCF//'])
                          }),
                          ariaLabel: eC.NW.string(eC.t['KzCF//'])
                      },
            eD = t.guild.hasFeature(e_.oNc.COMMUNITY) && t.canViewGuildAnalytics,
            eZ = (null === (eT = t.guild.profile) || void 0 === eT ? void 0 : eT.badge) != null ? (0, u.ky)(t.guild.id, t.guild.profile.badge, eO.NC.SIZE_16) : null;
        switch (e) {
            case e_.pNK.PROFILE:
                return {
                    section: e_.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eC.NW.string(eC.t.txdaxc),
                    ariaLabel: eC.NW.string(eC.t.txdaxc),
                    element: ej.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [A.Z],
                        element: eN.Z
                    }
                };
            case e_.pNK.TAG:
                return {
                    section: e_.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eC.NW.string(eC.t['2QmKZ2']),
                    ariaLabel: eC.NW.string(eC.t['2QmKZ2']),
                    element: ev.Z,
                    predicate: () => !1
                };
            case e_.pNK.ENGAGEMENT:
                return {
                    section: e_.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eC.NW.string(eC.t['6TAHb2']),
                    ariaLabel: eC.NW.string(eC.t['6TAHb2']),
                    element: ep.Z,
                    notice: {
                        stores: [A.Z],
                        element: eg.R
                    }
                };
            case e_.pNK.BOOST_PERKS:
                return {
                    section: e_.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: eC.NW.string(eC.t.UKgg5O),
                    ariaLabel: eC.NW.string(eC.t.UKgg5O),
                    element: eu.I,
                    notice: {
                        stores: [A.Z],
                        element: em.C
                    }
                };
            case e_.pNK.INVITES:
                return {
                    section: e_.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eC.NW.string(eC.t.YOt3Oj),
                    ariaLabel: eC.NW.string(eC.t.YOt3Oj),
                    element: eh.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case e_.pNK.OVERVIEW:
                return {
                    section: e_.pNK.OVERVIEW,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: eC.NW.string(eC.t['/dp6yc']),
                    ariaLabel: eC.NW.string(eC.t['/dp6yc']),
                    element: et.Z,
                    notice: {
                        stores: [A.Z],
                        element: et.O
                    }
                };
            case e_.pNK.ROLES:
                return {
                    section: e_.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eC.NW.string(eC.t.LPJmLy),
                    element: B.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: eC.NW.string(eC.t.KXcECw),
                    notice: {
                        stores: [Z.Z],
                        element: B._
                    },
                    predicate: () => t.canManageRoles
                };
            case e_.pNK.EMOJI:
                return {
                    section: e_.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eC.NW.string(eC.t.sMOuub),
                    element: X.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case e_.pNK.STICKERS:
                return {
                    section: e_.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eC.NW.string(eC.t.R5nQkZ),
                    ariaLabel: eC.NW.string(eC.t.R5nQkZ),
                    element: ea.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case e_.pNK.SOUNDBOARD:
                return {
                    section: e_.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eC.NW.string(eC.t.OWQNYm),
                    ariaLabel: eC.NW.string(eC.t.OWQNYm),
                    element: es.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case e_.pNK.WIDGET:
                return {
                    section: e_.pNK.WIDGET,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: eC.NW.string(eC.t.ACjbTk),
                    element: ed.Z,
                    predicate: () => t.canManageGuild
                };
            case e_.pNK.GUILD_TEMPLATES:
                return {
                    section: e_.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(eo.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eC.NW.string(eC.t.KUw7Sk),
                    element: el.ZP,
                    notice: {
                        stores: [el.Sf],
                        element: el.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case e_.pNK.VANITY_URL:
                return {
                    section: e_.pNK.VANITY_URL,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: eC.NW.string(eC.t['5XZKy8']),
                    element: ec.Z,
                    notice: {
                        stores: [k.Z],
                        element: ec.T
                    },
                    predicate: () => t.isGuildAdmin
                };
            case e_.pNK.ACCESS:
                return {
                    section: e_.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eC.NW.string(eC.t['+hFV+P']),
                    element: ef.O,
                    notice: {
                        stores: [ex.Z],
                        element: eb.w
                    },
                    predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild,
                    ariaLabel: eC.NW.string(eC.t['+hFV+P'])
                };
            case e_.pNK.INTEGRATIONS:
                return {
                    section: e_.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eC.NW.string(eC.t.CIsNZ2),
                    ariaLabel: eC.NW.string(eC.t.CIsNZ2),
                    element: Q.Z,
                    notice: {
                        stores: [D.default, A.Z],
                        element: Q.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case e_.pNK.APP_DIRECTORY:
                return {
                    section: e_.pNK.APP_DIRECTORY,
                    label: eC.NW.string(eC.t.AKcFUl),
                    ariaLabel: eC.NW.string(eC.t.AKcFUl),
                    onClick() {
                        (0, d.dx)({
                            guildId: t.guild.id,
                            entrypoint: {
                                name: c.n3.GUILD_SETTINGS,
                                guildSettingsSection: e
                            }
                        }),
                            (0, l.xf)();
                    }
                };
            case e_.pNK.SAFETY:
                return {
                    section: e_.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eC.NW.string(eC.t['suhY+f']),
                    ariaLabel: eC.NW.string(eC.t['suhY+f']),
                    element: F.Z,
                    newIndicatorDismissibleContentTypes: [s.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(e_.oNc.COMMUNITY)
                };
            case e_.pNK.MODERATION:
                return {
                    section: e_.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eC.NW.string(eC.t['suhY+f']),
                    element: er.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(e_.oNc.COMMUNITY)
                };
            case e_.pNK.GUILD_AUTOMOD:
                return {
                    section: e_.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)('div', {
                        className: eI.landingPageTabLink,
                        children: eC.NW.string(eC.t.uRelg4)
                    }),
                    ariaLabel: eC.NW.string(eC.t.uRelg4),
                    element: f.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(e_.oNc.COMMUNITY) && ((0, h.Nb)(t.guild.id) || (0, h.ze)(t.guild.id))
                };
            case e_.pNK.AUDIT_LOG:
                return {
                    section: e_.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eC.NW.string(eC.t.SPWLyc),
                    element: W.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case e_.pNK.BANS:
                return {
                    section: e_.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eC.NW.string(eC.t.ZbeITU),
                    element: H.Z,
                    predicate: () => t.canManageBans
                };
            case e_.pNK.CLAN:
                return {
                    section: e_.pNK.CLAN,
                    label: eC.NW.string(eC.t['6g8uHB']),
                    ariaLabel: eC.NW.string(eC.t['6g8uHB']),
                    onClick() {
                        (0, I.q4)(
                            (e) => {
                                let { closeLayer: n } = e;
                                return (0, r.jsx)(m.Z, {
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
                    icon: null != eZ ? (0, r.jsx)(p.KQ, { src: eZ }) : null
                };
            case e_.pNK.COMMUNITY:
                return {
                    section: e_.pNK.COMMUNITY,
                    impressionName: t.guild.hasFeature(e_.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                    label: t.guild.hasFeature(e_.oNc.COMMUNITY) ? eC.NW.string(eC.t['/dp6yc']) : eC.NW.string(eC.t.ElKTeX),
                    element: V.Z,
                    ariaLabel: t.guild.hasFeature(e_.oNc.COMMUNITY) ? eC.NW.string(eC.t['/dp6yc']) : eC.NW.string(eC.t.ElKTeX),
                    newIndicator: !t.guild.hasFeature(e_.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= ey.U3 && C.qc.hasHotspot(C.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                    notice: {
                        stores: [A.Z],
                        element: V.X
                    }
                };
            case e_.pNK.ONBOARDING:
                return {
                    section: e_.pNK.ONBOARDING,
                    label: eC.NW.string(eC.t.LdxCKy),
                    element: ee.Z,
                    ariaLabel: eC.NW.string(eC.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [s.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [L.Z],
                        element: G.Z
                    },
                    predicate: () => (0, x.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (b.Z.getEnabled(e)) return eC.NW.string(eC.t.pPSmxs).toUpperCase();
                        if ((0, U.C)(e)) return eC.NW.string(eC.t.HDF4o6).toUpperCase();
                        let n = M.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return eC.NW.formatToPlainString(eC.t['5r28iY'], {
                                count: r + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case e_.pNK.ANALYTICS:
                return {
                    section: e_.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eC.NW.string(eC.t['0wWfUF']),
                    ariaLabel: eC.NW.string(eC.t['0wWfUF']),
                    element: z.Z,
                    predicate: () => eD
                };
            case e_.pNK.DISCOVERY:
                return {
                    section: e_.pNK.DISCOVERY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                    label: eC.NW.string(eC.t.oGaVGx),
                    element: K.Z,
                    notice: {
                        stores: [A.Z],
                        element: K.s
                    },
                    predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(e_.oNc.COMMUNITY),
                    ariaLabel: t.guild.hasFeature(e_.oNc.DISCOVERABLE) ? eC.NW.string(eC.t.oGaVGx) : eC.NW.string(eC.t.XU0S6u)
                };
            case e_.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: e_.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)('div', {
                        className: eI.landingPageTabLink,
                        children: [eC.NW.string(eC.t.kGlQGB), ' ', (0, r.jsx)(g.Z, {})]
                    }),
                    ariaLabel: eC.NW.string(eC.t.kGlQGB),
                    element: q.Z,
                    notice: {
                        stores: [A.Z],
                        element: q.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.hasFeature(e_.oNc.DISCOVERABLE) || !!(null === (e = t.guildMetadata) || void 0 === e ? void 0 : e.isPublished));
                    }
                };
            case e_.pNK.COMMUNITY_WELCOME:
                return {
                    section: e_.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eC.NW.string(eC.t['2rkmDg']),
                    ariaLabel: eC.NW.string(eC.t['2rkmDg']),
                    element: Y.Z,
                    notice: {
                        stores: [E.Z],
                        element: S.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(e_.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(e_.oNc.GUILD_SERVER_GUIDE)
                };
            case e_.pNK.ROLE_SUBSCRIPTIONS:
                return eS(eE({}, eR), {
                    section: e_.pNK.ROLE_SUBSCRIPTIONS,
                    element: O.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, _.sO)(t.guild) ? [s.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                });
            case e_.pNK.GUILD_PRODUCTS:
                return {
                    section: e_.pNK.GUILD_PRODUCTS,
                    label: eC.NW.string(eC.t.X6h2g4),
                    ariaLabel: eC.NW.string(eC.t.X6h2g4),
                    element: N.Z,
                    predicate: () => t.monetizationPredicate() && (0, j.p)(t.guild.id, 'guild_product_settings_predicate') && (0, v.sy)(t.guild)
                };
            case e_.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: e_.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eC.NW.string(eC.t.ipTYsr),
                    ariaLabel: eC.NW.string(eC.t.ipTYsr),
                    element: y.Z,
                    predicate: () => t.monetizationPredicate() && (0, v.sy)(t.guild)
                };
            case e_.pNK.GUILD_PREMIUM:
                return {
                    section: e_.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eC.NW.string(eC.t['8+VX4+']),
                    ariaLabel: eC.NW.string(eC.t['8+VX4+']),
                    element: en.Z,
                    className: eI.serverBoostTabItem,
                    icon: (0, r.jsx)(ei.Z, { className: eI.icon })
                };
            case e_.pNK.MEMBERS:
                return {
                    section: e_.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)($.$, {}),
                    ariaLabel: eC.NW.string(eC.t['9Oq93t']),
                    element: $.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case e_.pNK.INSTANT_INVITES:
                return {
                    section: e_.pNK.INSTANT_INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: eC.NW.string(eC.t['9F90iY']),
                    element: J.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case e_.pNK.DELETE:
                return {
                    section: e_.pNK.DELETE,
                    onClick() {
                        let e = T.default.getCurrentUser();
                        if (null == e) return;
                        let i = t.guild.toString(),
                            s = {
                                header: eC.NW.formatToPlainString(eC.t.us7mCw, { name: i }),
                                confirmText: eC.NW.string(eC.t.l3hWPz),
                                cancelText: eC.NW.string(eC.t['ETE/oK']),
                                onConfirm: () => {
                                    P.S.subscribeOnce(e_.CkL.LAYER_POP_COMPLETE, () => {
                                        R.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, l.xf)();
                                }
                            };
                        e.mfaEnabled
                            ? (0, a.h7j)((e) =>
                                  (0, r.jsx)(
                                      a.ConfirmModal,
                                      eS(eE({}, e, s), {
                                          children: (0, r.jsx)(a.Text, {
                                              variant: 'text-md/normal',
                                              children: eC.NW.format(eC.t['Zuo+VV'], { name: i })
                                          })
                                      })
                                  )
                              )
                            : (0, a.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          eS(eE({}, t, s), {
                                              validationText: i,
                                              instructionText: eC.NW.string(eC.t.abprOD),
                                              errorText: eC.NW.string(eC.t['c2/DS0']),
                                              children: eC.NW.format(eC.t['Zuo+VV'], { name: i })
                                          })
                                      );
                              });
                    },
                    label: eC.NW.string(eC.t.l3hWPz),
                    ariaLabel: eC.NW.string(eC.t.l3hWPz),
                    icon: (0, r.jsx)(a.XHJ, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    predicate: () => t.isOwnerWithRequiredMfaLevel
                };
            case e_.pNK.LANDING:
            case e_.pNK.MEMBER_EDIT:
            case e_.pNK.MEMBER_TIMEOUT:
            case e_.pNK.MEMBER_KICK:
            case e_.pNK.MEMBER_BAN:
            case e_.pNK.CHANNELS:
            case e_.pNK.ROLE_EDIT:
            case e_.pNK.ROLE_PERMISSIONS:
            case e_.pNK.MEMBER_VERIFICATION:
            case e_.pNK.CLYDE:
            case e_.pNK.INTEGRATION_SETTINGS:
            case e_.pNK.SECURITY:
            case e_.pNK.AUDIT_LOG_FILTER:
            case e_.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case e_.pNK.WEBHOOKS:
            case e_.pNK.EDIT_WEBHOOK:
            case e_.pNK.INTEGRATION_PLATFORM:
            case e_.pNK.LOBBIES_LINKED:
            case e_.pNK.EDIT_LINKED_LOBBY:
            case e_.pNK.CHANNELS_FOLLOWED:
            case e_.pNK.COMMUNITY_INTRO:
            case e_.pNK.ROLE_EDIT_REFRESH:
            case e_.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case e_.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case e_.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case e_.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case e_.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case e_.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, w.vE)(e);
        }
    }
};
