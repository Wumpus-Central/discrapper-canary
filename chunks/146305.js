n.d(t, { Z: () => eS });
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
    em = n(486358),
    ep = n(942478),
    eg = n(890861),
    eh = n(708510),
    ef = n(237245),
    eb = n(658666),
    ex = n(224726),
    ej = n(308619),
    eN = n(254925),
    ev = n(981631),
    e_ = n(308083),
    eO = n(135899),
    ey = n(388032),
    eC = n(964644);
function eI(e) {
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
function eE(e, t) {
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
let eS = {
    getSectionDefinition: function (e, t) {
        var eS;
        let eT = (0, j.p)(t.guild.id, 'guild_settings'),
            eP = !1 === t.guild.hasFeature(ev.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(ev.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            ew =
                eT && eP
                    ? {
                          label: (0, r.jsx)('div', {
                              className: eC.roleSubLabel,
                              children: ey.NW.string(ey.t.Tn7Koq)
                          }),
                          ariaLabel: ey.NW.string(ey.t.Tn7Koq)
                      }
                    : {
                          label: (0, r.jsx)('div', {
                              className: eC.roleSubLabel,
                              children: ey.NW.string(ey.t['KzCF//'])
                          }),
                          ariaLabel: ey.NW.string(ey.t['KzCF//'])
                      },
            eR = t.guild.hasFeature(ev.oNc.COMMUNITY) && t.canViewGuildAnalytics,
            eD = (null === (eS = t.guild.profile) || void 0 === eS ? void 0 : eS.badge) != null ? (0, u.ky)(t.guild.id, t.guild.profile.badge, e_.NC.SIZE_16) : null;
        switch (e) {
            case ev.pNK.PROFILE:
                return {
                    section: ev.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ey.NW.string(ey.t.txdaxc),
                    ariaLabel: ey.NW.string(ey.t.txdaxc),
                    element: ex.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [A.Z],
                        element: ej.Z
                    }
                };
            case ev.pNK.TAG:
                return {
                    section: ev.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ey.NW.string(ey.t['2QmKZ2']),
                    ariaLabel: ey.NW.string(ey.t['2QmKZ2']),
                    element: eN.Z,
                    predicate: () => !1
                };
            case ev.pNK.ENGAGEMENT:
                return {
                    section: ev.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ey.NW.string(ey.t['6TAHb2']),
                    ariaLabel: ey.NW.string(ey.t['6TAHb2']),
                    element: em.Z,
                    notice: {
                        stores: [A.Z],
                        element: ep.R
                    }
                };
            case ev.pNK.BOOST_PERKS:
                return {
                    section: ev.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ey.NW.string(ey.t.UKgg5O),
                    ariaLabel: ey.NW.string(ey.t.UKgg5O),
                    element: eu.I
                };
            case ev.pNK.INVITES:
                return {
                    section: ev.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ey.NW.string(ey.t.YOt3Oj),
                    ariaLabel: ey.NW.string(ey.t.YOt3Oj),
                    element: eg.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ev.pNK.OVERVIEW:
                return {
                    section: ev.pNK.OVERVIEW,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: ey.NW.string(ey.t['/dp6yc']),
                    ariaLabel: ey.NW.string(ey.t['/dp6yc']),
                    element: et.Z,
                    notice: {
                        stores: [A.Z],
                        element: et.O
                    }
                };
            case ev.pNK.ROLES:
                return {
                    section: ev.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ey.NW.string(ey.t.LPJmLy),
                    element: B.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: ey.NW.string(ey.t.KXcECw),
                    notice: {
                        stores: [Z.Z],
                        element: B._
                    },
                    predicate: () => t.canManageRoles
                };
            case ev.pNK.EMOJI:
                return {
                    section: ev.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ey.NW.string(ey.t.sMOuub),
                    element: X.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case ev.pNK.STICKERS:
                return {
                    section: ev.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ey.NW.string(ey.t.R5nQkZ),
                    ariaLabel: ey.NW.string(ey.t.R5nQkZ),
                    element: ea.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ev.pNK.SOUNDBOARD:
                return {
                    section: ev.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ey.NW.string(ey.t.OWQNYm),
                    ariaLabel: ey.NW.string(ey.t.OWQNYm),
                    element: es.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ev.pNK.WIDGET:
                return {
                    section: ev.pNK.WIDGET,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: ey.NW.string(ey.t.ACjbTk),
                    element: ed.Z,
                    predicate: () => t.canManageGuild
                };
            case ev.pNK.GUILD_TEMPLATES:
                return {
                    section: ev.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(eo.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ey.NW.string(ey.t.KUw7Sk),
                    element: el.ZP,
                    notice: {
                        stores: [el.Sf],
                        element: el.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case ev.pNK.VANITY_URL:
                return {
                    section: ev.pNK.VANITY_URL,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: ey.NW.string(ey.t['5XZKy8']),
                    element: ec.Z,
                    notice: {
                        stores: [k.Z],
                        element: ec.T
                    },
                    predicate: () => t.isGuildAdmin
                };
            case ev.pNK.ACCESS:
                return {
                    section: ev.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ey.NW.string(ey.t['+hFV+P']),
                    element: eh.O,
                    notice: {
                        stores: [eb.Z],
                        element: ef.w
                    },
                    predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild,
                    ariaLabel: ey.NW.string(ey.t['+hFV+P'])
                };
            case ev.pNK.INTEGRATIONS:
                return {
                    section: ev.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ey.NW.string(ey.t.CIsNZ2),
                    ariaLabel: ey.NW.string(ey.t.CIsNZ2),
                    element: Q.Z,
                    notice: {
                        stores: [D.default, A.Z],
                        element: Q.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case ev.pNK.APP_DIRECTORY:
                return {
                    section: ev.pNK.APP_DIRECTORY,
                    label: ey.NW.string(ey.t.AKcFUl),
                    ariaLabel: ey.NW.string(ey.t.AKcFUl),
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
            case ev.pNK.SAFETY:
                return {
                    section: ev.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ey.NW.string(ey.t['suhY+f']),
                    ariaLabel: ey.NW.string(ey.t['suhY+f']),
                    element: F.Z,
                    newIndicatorDismissibleContentTypes: [s.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ev.oNc.COMMUNITY)
                };
            case ev.pNK.MODERATION:
                return {
                    section: ev.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ey.NW.string(ey.t['suhY+f']),
                    element: er.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(ev.oNc.COMMUNITY)
                };
            case ev.pNK.GUILD_AUTOMOD:
                return {
                    section: ev.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)('div', {
                        className: eC.landingPageTabLink,
                        children: ey.NW.string(ey.t.uRelg4)
                    }),
                    ariaLabel: ey.NW.string(ey.t.uRelg4),
                    element: f.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(ev.oNc.COMMUNITY) && ((0, h.Nb)(t.guild.id) || (0, h.ze)(t.guild.id))
                };
            case ev.pNK.AUDIT_LOG:
                return {
                    section: ev.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ey.NW.string(ey.t.SPWLyc),
                    element: W.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case ev.pNK.BANS:
                return {
                    section: ev.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ey.NW.string(ey.t.ZbeITU),
                    element: H.Z,
                    predicate: () => t.canManageBans
                };
            case ev.pNK.CLAN:
                return {
                    section: ev.pNK.CLAN,
                    label: ey.NW.string(ey.t['6g8uHB']),
                    ariaLabel: ey.NW.string(ey.t['6g8uHB']),
                    onClick() {
                        (0, I.q4)(
                            (e) => {
                                let { closeLayer: n } = e;
                                return (0, r.jsx)(m.Z, {
                                    onClose: n,
                                    guildId: t.guild.id
                                });
                            },
                            { layerKey: e_.q2 }
                        ),
                            (0, l.xf)();
                    },
                    predicate() {
                        var e;
                        return null !== (e = t.canAccessClanSettings) && void 0 !== e && e;
                    },
                    icon: null != eD ? (0, r.jsx)(p.KQ, { src: eD }) : null
                };
            case ev.pNK.COMMUNITY:
                return {
                    section: ev.pNK.COMMUNITY,
                    impressionName: t.guild.hasFeature(ev.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                    label: t.guild.hasFeature(ev.oNc.COMMUNITY) ? ey.NW.string(ey.t['/dp6yc']) : ey.NW.string(ey.t.ElKTeX),
                    element: V.Z,
                    ariaLabel: t.guild.hasFeature(ev.oNc.COMMUNITY) ? ey.NW.string(ey.t['/dp6yc']) : ey.NW.string(ey.t.ElKTeX),
                    newIndicator: !t.guild.hasFeature(ev.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eO.U3 && C.qc.hasHotspot(C.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                    notice: {
                        stores: [A.Z],
                        element: V.X
                    }
                };
            case ev.pNK.ONBOARDING:
                return {
                    section: ev.pNK.ONBOARDING,
                    label: ey.NW.string(ey.t.LdxCKy),
                    element: ee.Z,
                    ariaLabel: ey.NW.string(ey.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [s.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [L.Z],
                        element: G.Z
                    },
                    predicate: () => (0, x.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (b.Z.getEnabled(e)) return ey.NW.string(ey.t.pPSmxs).toUpperCase();
                        if ((0, U.C)(e)) return ey.NW.string(ey.t.HDF4o6).toUpperCase();
                        let n = M.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return ey.NW.formatToPlainString(ey.t['5r28iY'], {
                                count: r + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case ev.pNK.ANALYTICS:
                return {
                    section: ev.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ey.NW.string(ey.t['0wWfUF']),
                    ariaLabel: ey.NW.string(ey.t['0wWfUF']),
                    element: z.Z,
                    predicate: () => eR
                };
            case ev.pNK.DISCOVERY:
                return {
                    section: ev.pNK.DISCOVERY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                    label: ey.NW.string(ey.t.oGaVGx),
                    element: K.Z,
                    notice: {
                        stores: [A.Z],
                        element: K.s
                    },
                    predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(ev.oNc.COMMUNITY),
                    ariaLabel: t.guild.hasFeature(ev.oNc.DISCOVERABLE) ? ey.NW.string(ey.t.oGaVGx) : ey.NW.string(ey.t.XU0S6u)
                };
            case ev.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ev.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)('div', {
                        className: eC.landingPageTabLink,
                        children: [ey.NW.string(ey.t.kGlQGB), ' ', (0, r.jsx)(g.Z, {})]
                    }),
                    ariaLabel: ey.NW.string(ey.t.kGlQGB),
                    element: q.Z,
                    notice: {
                        stores: [A.Z],
                        element: q.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.hasFeature(ev.oNc.DISCOVERABLE) || !!(null === (e = t.guildMetadata) || void 0 === e ? void 0 : e.isPublished));
                    }
                };
            case ev.pNK.COMMUNITY_WELCOME:
                return {
                    section: ev.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ey.NW.string(ey.t['2rkmDg']),
                    ariaLabel: ey.NW.string(ey.t['2rkmDg']),
                    element: Y.Z,
                    notice: {
                        stores: [E.Z],
                        element: S.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ev.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(ev.oNc.GUILD_SERVER_GUIDE)
                };
            case ev.pNK.ROLE_SUBSCRIPTIONS:
                return eE(eI({}, ew), {
                    section: ev.pNK.ROLE_SUBSCRIPTIONS,
                    element: O.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, _.sO)(t.guild) ? [s.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                });
            case ev.pNK.GUILD_PRODUCTS:
                return {
                    section: ev.pNK.GUILD_PRODUCTS,
                    label: ey.NW.string(ey.t.X6h2g4),
                    ariaLabel: ey.NW.string(ey.t.X6h2g4),
                    element: N.Z,
                    predicate: () => t.monetizationPredicate() && (0, j.p)(t.guild.id, 'guild_product_settings_predicate') && (0, v.sy)(t.guild)
                };
            case ev.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ev.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ey.NW.string(ey.t.ipTYsr),
                    ariaLabel: ey.NW.string(ey.t.ipTYsr),
                    element: y.Z,
                    predicate: () => t.monetizationPredicate() && (0, v.sy)(t.guild)
                };
            case ev.pNK.GUILD_PREMIUM:
                return {
                    section: ev.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ey.NW.string(ey.t['8+VX4+']),
                    ariaLabel: ey.NW.string(ey.t['8+VX4+']),
                    element: en.Z,
                    className: eC.serverBoostTabItem,
                    icon: (0, r.jsx)(ei.Z, { className: eC.icon })
                };
            case ev.pNK.MEMBERS:
                return {
                    section: ev.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)($.$, {}),
                    ariaLabel: ey.NW.string(ey.t['9Oq93t']),
                    element: $.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case ev.pNK.INSTANT_INVITES:
                return {
                    section: ev.pNK.INSTANT_INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: ey.NW.string(ey.t['9F90iY']),
                    element: J.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ev.pNK.DELETE:
                return {
                    section: ev.pNK.DELETE,
                    onClick() {
                        let e = T.default.getCurrentUser();
                        if (null == e) return;
                        let i = t.guild.toString(),
                            s = {
                                header: ey.NW.formatToPlainString(ey.t.us7mCw, { name: i }),
                                confirmText: ey.NW.string(ey.t.l3hWPz),
                                cancelText: ey.NW.string(ey.t['ETE/oK']),
                                onConfirm: () => {
                                    P.S.subscribeOnce(ev.CkL.LAYER_POP_COMPLETE, () => {
                                        R.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, l.xf)();
                                }
                            };
                        e.mfaEnabled
                            ? (0, a.h7j)((e) =>
                                  (0, r.jsx)(
                                      a.ConfirmModal,
                                      eE(eI({}, e, s), {
                                          children: (0, r.jsx)(a.Text, {
                                              variant: 'text-md/normal',
                                              children: ey.NW.format(ey.t['Zuo+VV'], { name: i })
                                          })
                                      })
                                  )
                              )
                            : (0, a.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          eE(eI({}, t, s), {
                                              validationText: i,
                                              instructionText: ey.NW.string(ey.t.abprOD),
                                              errorText: ey.NW.string(ey.t['c2/DS0']),
                                              children: ey.NW.format(ey.t['Zuo+VV'], { name: i })
                                          })
                                      );
                              });
                    },
                    label: ey.NW.string(ey.t.l3hWPz),
                    ariaLabel: ey.NW.string(ey.t.l3hWPz),
                    icon: (0, r.jsx)(a.XHJ, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    predicate: () => t.isOwnerWithRequiredMfaLevel
                };
            case ev.pNK.LANDING:
            case ev.pNK.MEMBER_EDIT:
            case ev.pNK.MEMBER_TIMEOUT:
            case ev.pNK.MEMBER_KICK:
            case ev.pNK.MEMBER_BAN:
            case ev.pNK.CHANNELS:
            case ev.pNK.ROLE_EDIT:
            case ev.pNK.ROLE_PERMISSIONS:
            case ev.pNK.MEMBER_VERIFICATION:
            case ev.pNK.CLYDE:
            case ev.pNK.INTEGRATION_SETTINGS:
            case ev.pNK.SECURITY:
            case ev.pNK.AUDIT_LOG_FILTER:
            case ev.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case ev.pNK.WEBHOOKS:
            case ev.pNK.EDIT_WEBHOOK:
            case ev.pNK.INTEGRATION_PLATFORM:
            case ev.pNK.LOBBIES_LINKED:
            case ev.pNK.EDIT_LINKED_LOBBY:
            case ev.pNK.CHANNELS_FOLLOWED:
            case ev.pNK.COMMUNITY_INTRO:
            case ev.pNK.ROLE_EDIT_REFRESH:
            case ev.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case ev.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case ev.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case ev.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case ev.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case ev.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, w.vE)(e);
        }
    }
};
