n.d(t, { Z: () => eT });
var i = n(200651),
    r = n(990547),
    l = n(704215),
    s = n(481060),
    a = n(37234),
    o = n(493544),
    c = n(132871),
    d = n(147890),
    u = n(353093),
    m = n(593128),
    h = n(979264),
    g = n(605236),
    x = n(688465),
    p = n(676317),
    _ = n(874993),
    C = n(45966),
    f = n(637853),
    v = n(352981),
    N = n(610403),
    j = n(923726),
    I = n(303737),
    E = n(15030),
    b = n(220685),
    T = n(536442),
    S = n(84615),
    R = n(575258),
    Z = n(276687),
    y = n(594174),
    A = n(585483),
    L = n(823379),
    D = n(85001),
    O = n(434404),
    k = n(360606),
    P = n(946724),
    w = n(999382),
    M = n(44550),
    U = n(853714),
    G = n(359191),
    B = n(84658),
    F = n(142961),
    z = n(730910),
    H = n(475013),
    V = n(213956),
    W = n(702478),
    Y = n(247031),
    K = n(787561),
    q = n(579648),
    X = n(511480),
    Q = n(460461),
    J = n(29605),
    $ = n(365307),
    ee = n(497666),
    et = n(324330),
    en = n(495300),
    ei = n(312397),
    er = n(651780),
    el = n(279542),
    es = n(413335),
    ea = n(665324),
    eo = n(208150),
    ec = n(353398),
    ed = n(365774),
    eu = n(803288),
    em = n(804153),
    eh = n(486358),
    eg = n(890861),
    ex = n(708510),
    ep = n(237245),
    e_ = n(658666),
    eC = n(755198),
    ef = n(224726),
    ev = n(254925),
    eN = n(981631),
    ej = n(308083),
    eI = n(135899),
    eE = n(388032),
    eb = n(413929);
let eT = {
    getSectionDefinition: function (e, t) {
        var eT;
        let eS = (0, v.p)(t.guild.id, 'guild_settings'),
            eR = !1 === t.guild.hasFeature(eN.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(eN.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            eZ =
                eS && eR
                    ? {
                          label: (0, i.jsx)('div', {
                              className: eb.roleSubLabel,
                              children: eE.intl.string(eE.t.Tn7Koq)
                          }),
                          ariaLabel: eE.intl.string(eE.t.Tn7Koq)
                      }
                    : {
                          label: (0, i.jsx)('div', {
                              className: eb.roleSubLabel,
                              children: eE.intl.string(eE.t['KzCF//'])
                          }),
                          ariaLabel: eE.intl.string(eE.t['KzCF//'])
                      },
            ey = t.guild.hasFeature(eN.oNc.COMMUNITY) && t.canViewGuildAnalytics,
            eA = (null === (eT = t.guild.profile) || void 0 === eT ? void 0 : eT.badge) != null ? (0, u.ky)(t.guild.id, t.guild.profile.badge, ej.NC.SIZE_16) : null;
        switch (e) {
            case eN.pNK.PROFILE:
                return {
                    section: eN.pNK.PROFILE,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eE.intl.string(eE.t.txdaxc),
                    ariaLabel: eE.intl.string(eE.t.txdaxc),
                    element: ef.Z
                };
            case eN.pNK.TAG:
                return {
                    section: eN.pNK.TAG,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eE.intl.string(eE.t['2QmKZ2']),
                    ariaLabel: eE.intl.string(eE.t['2QmKZ2']),
                    element: ev.Z
                };
            case eN.pNK.LAYOUT:
                return {
                    section: eN.pNK.LAYOUT,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_LAYOUT,
                    label: eE.intl.string(eE.t.INI79P),
                    ariaLabel: eE.intl.string(eE.t.INI79P),
                    element: eC.Z
                };
            case eN.pNK.ENGAGEMENT:
                return {
                    section: eN.pNK.ENGAGEMENT,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eE.intl.string(eE.t['6TAHb2']),
                    ariaLabel: eE.intl.string(eE.t['6TAHb2']),
                    element: eh.Z
                };
            case eN.pNK.INVITES:
                return {
                    section: eN.pNK.OVERVIEW,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eE.intl.string(eE.t.YOt3Oj),
                    ariaLabel: eE.intl.string(eE.t.YOt3Oj),
                    element: eg.Z
                };
            case eN.pNK.OVERVIEW:
                return {
                    section: eN.pNK.OVERVIEW,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: eE.intl.string(eE.t['/dp6yc']),
                    ariaLabel: eE.intl.string(eE.t['/dp6yc']),
                    element: ei.Z,
                    notice: {
                        stores: [w.Z],
                        element: ei.O
                    }
                };
            case eN.pNK.ROLES:
                return {
                    section: eN.pNK.ROLES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eE.intl.string(eE.t.LPJmLy),
                    element: H.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: eE.intl.string(eE.t.KXcECw),
                    notice: {
                        stores: [P.Z],
                        element: H._
                    },
                    predicate: () => t.canManageRoles
                };
            case eN.pNK.EMOJI:
                return {
                    section: eN.pNK.EMOJI,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eE.intl.string(eE.t.sMOuub),
                    element: J.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case eN.pNK.STICKERS:
                return {
                    section: eN.pNK.STICKERS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eE.intl.string(eE.t.R5nQkZ),
                    ariaLabel: eE.intl.string(eE.t.R5nQkZ),
                    element: eo.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case eN.pNK.SOUNDBOARD:
                return {
                    section: eN.pNK.SOUNDBOARD,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eE.intl.string(eE.t.OWQNYm),
                    ariaLabel: eE.intl.string(eE.t.OWQNYm),
                    element: ea.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case eN.pNK.WIDGET:
                return {
                    section: eN.pNK.WIDGET,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: eE.intl.string(eE.t.ACjbTk),
                    element: em.Z,
                    predicate: () => t.canManageGuild
                };
            case eN.pNK.GUILD_TEMPLATES:
                return {
                    section: eN.pNK.GUILD_TEMPLATES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, i.jsx)(ed.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eE.intl.string(eE.t.KUw7Sk),
                    element: ec.ZP,
                    notice: {
                        stores: [ec.Sf],
                        element: ec.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case eN.pNK.VANITY_URL:
                return {
                    section: eN.pNK.VANITY_URL,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: eE.intl.string(eE.t['5XZKy8']),
                    element: eu.Z,
                    notice: {
                        stores: [M.Z],
                        element: eu.T
                    },
                    predicate: () => t.isGuildAdmin
                };
            case eN.pNK.ACCESS:
                return {
                    section: eN.pNK.ACCESS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eE.intl.string(eE.t['+hFV+P']),
                    element: ex.O,
                    notice: {
                        stores: [e_.Z],
                        element: ep.w
                    },
                    predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild,
                    ariaLabel: eE.intl.string(eE.t['+hFV+P'])
                };
            case eN.pNK.INTEGRATIONS:
                return {
                    section: eN.pNK.INTEGRATIONS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eE.intl.string(eE.t.CIsNZ2),
                    ariaLabel: eE.intl.string(eE.t.CIsNZ2),
                    element: $.Z,
                    notice: {
                        stores: [k.default, w.Z],
                        element: $.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case eN.pNK.APP_DIRECTORY:
                return {
                    section: eN.pNK.APP_DIRECTORY,
                    label: eE.intl.string(eE.t.AKcFUl),
                    ariaLabel: eE.intl.string(eE.t.AKcFUl),
                    onClick() {
                        (0, d.dx)({
                            guildId: t.guild.id,
                            entrypoint: {
                                name: c.n3.GUILD_SETTINGS,
                                guildSettingsSection: e
                            }
                        }),
                            (0, a.xf)();
                    }
                };
            case eN.pNK.SAFETY:
                return {
                    section: eN.pNK.SAFETY,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eE.intl.string(eE.t['suhY+f']),
                    ariaLabel: eE.intl.string(eE.t['suhY+f']),
                    element: V.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(eN.oNc.COMMUNITY)
                };
            case eN.pNK.MODERATION:
                return {
                    section: eN.pNK.MODERATION,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eE.intl.string(eE.t['suhY+f']),
                    element: el.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(eN.oNc.COMMUNITY)
                };
            case eN.pNK.GUILD_AUTOMOD:
                return {
                    section: eN.pNK.GUILD_AUTOMOD,
                    label: (0, i.jsx)('div', {
                        className: eb.landingPageTabLink,
                        children: eE.intl.string(eE.t.uRelg4)
                    }),
                    ariaLabel: eE.intl.string(eE.t.uRelg4),
                    element: _.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(eN.oNc.COMMUNITY) && ((0, p.Nb)(t.guild.id) || (0, p.ze)(t.guild.id))
                };
            case eN.pNK.AUDIT_LOG:
                return {
                    section: eN.pNK.AUDIT_LOG,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eE.intl.string(eE.t.SPWLyc),
                    element: U.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case eN.pNK.BANS:
                return {
                    section: eN.pNK.BANS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eE.intl.string(eE.t.ZbeITU),
                    element: Y.Z,
                    predicate: () => t.canManageBans
                };
            case eN.pNK.CLAN:
                return {
                    section: eN.pNK.CLAN,
                    label: eE.intl.string(eE.t['6g8uHB']),
                    ariaLabel: eE.intl.string(eE.t['6g8uHB']),
                    onClick() {
                        (0, S.q4)(
                            (e) => {
                                let { closeLayer: n } = e;
                                return (0, i.jsx)(m.Z, {
                                    onClose: n,
                                    guildId: t.guild.id
                                });
                            },
                            { layerKey: ej.q2 }
                        ),
                            (0, a.xf)();
                    },
                    predicate() {
                        var e;
                        return null !== (e = t.canAccessClanSettings) && void 0 !== e && e;
                    },
                    icon: null != eA ? (0, i.jsx)(h.KQ, { src: eA }) : null
                };
            case eN.pNK.COMMUNITY:
                return {
                    section: eN.pNK.COMMUNITY,
                    impressionName: t.guild.hasFeature(eN.oNc.COMMUNITY) ? r.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : r.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                    label: t.guild.hasFeature(eN.oNc.COMMUNITY) ? eE.intl.string(eE.t['/dp6yc']) : eE.intl.string(eE.t.ElKTeX),
                    element: K.Z,
                    ariaLabel: t.guild.hasFeature(eN.oNc.COMMUNITY) ? eE.intl.string(eE.t['/dp6yc']) : eE.intl.string(eE.t.ElKTeX),
                    newIndicator: !t.guild.hasFeature(eN.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eI.U3 && T.qc.hasHotspot(T.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                    notice: {
                        stores: [w.Z],
                        element: K.X
                    }
                };
            case eN.pNK.ONBOARDING:
                return {
                    section: eN.pNK.ONBOARDING,
                    label: eE.intl.string(eE.t.LdxCKy),
                    element: en.Z,
                    ariaLabel: eE.intl.string(eE.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [G.Z],
                        element: z.Z
                    },
                    predicate: () => (0, f.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (C.Z.getEnabled(e)) return eE.intl.string(eE.t.pPSmxs).toUpperCase();
                        if ((0, F.C)(e)) return eE.intl.string(eE.t.HDF4o6).toUpperCase();
                        let n = B.ug,
                            i = n.findIndex((e) => e === t);
                        if (-1 !== i)
                            return eE.intl.formatToPlainString(eE.t['5r28iY'], {
                                count: i + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case eN.pNK.ANALYTICS:
                return {
                    section: eN.pNK.ANALYTICS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eE.intl.string(eE.t['0wWfUF']),
                    ariaLabel: eE.intl.string(eE.t['0wWfUF']),
                    element: W.Z,
                    predicate: () => ey
                };
            case eN.pNK.DISCOVERY:
                return {
                    section: eN.pNK.DISCOVERY,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                    label: eE.intl.string(eE.t.oGaVGx),
                    element: X.Z,
                    notice: {
                        stores: [w.Z],
                        element: X.s
                    },
                    predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(eN.oNc.COMMUNITY),
                    ariaLabel: t.guild.hasFeature(eN.oNc.DISCOVERABLE) ? eE.intl.string(eE.t.oGaVGx) : eE.intl.string(eE.t.XU0S6u)
                };
            case eN.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: eN.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, i.jsxs)('div', {
                        className: eb.landingPageTabLink,
                        children: [eE.intl.string(eE.t.kGlQGB), ' ', (0, i.jsx)(x.Z, {})]
                    }),
                    ariaLabel: eE.intl.string(eE.t.kGlQGB),
                    element: Q.Z,
                    notice: {
                        stores: [w.Z],
                        element: Q.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.hasFeature(eN.oNc.DISCOVERABLE) || !!(null === (e = t.guildMetadata) || void 0 === e ? void 0 : e.isPublished));
                    }
                };
            case eN.pNK.COMMUNITY_WELCOME:
                return {
                    section: eN.pNK.COMMUNITY_WELCOME,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eE.intl.string(eE.t['2rkmDg']),
                    ariaLabel: eE.intl.string(eE.t['2rkmDg']),
                    element: q.Z,
                    notice: {
                        stores: [R.Z],
                        element: Z.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(eN.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(eN.oNc.GUILD_SERVER_GUIDE)
                };
            case eN.pNK.ROLE_SUBSCRIPTIONS:
                return {
                    ...eZ,
                    section: eN.pNK.ROLE_SUBSCRIPTIONS,
                    element: E.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, I.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                };
            case eN.pNK.GUILD_PRODUCTS:
                return {
                    section: eN.pNK.GUILD_PRODUCTS,
                    label: eE.intl.string(eE.t.X6h2g4),
                    ariaLabel: eE.intl.string(eE.t.X6h2g4),
                    element: N.Z,
                    predicate: () => t.monetizationPredicate() && (0, v.p)(t.guild.id, 'guild_product_settings_predicate') && (0, j.sy)(t.guild)
                };
            case eN.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: eN.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: r.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eE.intl.string(eE.t.ipTYsr),
                    ariaLabel: eE.intl.string(eE.t.ipTYsr),
                    element: b.Z,
                    predicate: () => t.monetizationPredicate() && (0, j.sy)(t.guild)
                };
            case eN.pNK.GUILD_PREMIUM:
                return {
                    section: eN.pNK.GUILD_PREMIUM,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eE.intl.string(eE.t['8+VX4+']),
                    ariaLabel: eE.intl.string(eE.t['8+VX4+']),
                    element: er.Z,
                    className: eb.serverBoostTabItem,
                    icon: (0, i.jsx)(es.Z, { className: eb.icon })
                };
            case eN.pNK.MEMBERS:
                return {
                    section: eN.pNK.MEMBERS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, i.jsx)(et.$, {}),
                    ariaLabel: eE.intl.string(eE.t['9Oq93t']),
                    element: et.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case eN.pNK.INSTANT_INVITES:
                return {
                    section: eN.pNK.INSTANT_INVITES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: eE.intl.string(eE.t['9F90iY']),
                    element: ee.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case eN.pNK.DELETE:
                return {
                    section: eN.pNK.DELETE,
                    onClick() {
                        let e = y.default.getCurrentUser();
                        if (null == e) return;
                        let r = t.guild.toString(),
                            o = {
                                header: eE.intl.formatToPlainString(eE.t.us7mCw, { name: r }),
                                confirmText: eE.intl.string(eE.t.l3hWPz),
                                cancelText: eE.intl.string(eE.t['ETE/oK']),
                                onConfirm: () => {
                                    A.S.subscribeOnce(eN.CkL.LAYER_POP_COMPLETE, () => {
                                        O.Z.deleteGuild(t.guild.id, r).then(() => {
                                            if ((0, g.un)(l.z.GUILD_DELETE_FEEDBACK)) return;
                                            D.Z.trackExposure({ location: 'e4be39_1' });
                                            let { showFeedback: e } = D.Z.getCurrentConfig({ location: 'e4be39_2' }, { autoTrackExposure: !1 });
                                            e &&
                                                (0, s.ZDy)(async () => {
                                                    let { default: e } = await n.e('31811').then(n.bind(n, 945903));
                                                    return (n) =>
                                                        (0, i.jsx)(e, {
                                                            ...n,
                                                            guildId: t.guild.id
                                                        });
                                                });
                                        });
                                    }),
                                        (0, a.xf)();
                                }
                            };
                        e.mfaEnabled
                            ? (0, s.h7j)((e) =>
                                  (0, i.jsx)(s.ConfirmModal, {
                                      ...e,
                                      ...o,
                                      children: (0, i.jsx)(s.Text, {
                                          variant: 'text-md/normal',
                                          children: eE.intl.format(eE.t['Zuo+VV'], { name: r })
                                      })
                                  })
                              )
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, i.jsx)(e, {
                                          ...t,
                                          ...o,
                                          validationText: r,
                                          instructionText: eE.intl.string(eE.t.abprOD),
                                          errorText: eE.intl.string(eE.t['c2/DS0']),
                                          children: eE.intl.format(eE.t['Zuo+VV'], { name: r })
                                      });
                              });
                    },
                    label: eE.intl.string(eE.t.l3hWPz),
                    ariaLabel: eE.intl.string(eE.t.l3hWPz),
                    icon: (0, i.jsx)(s.XHJ, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    predicate: () => t.isOwnerWithRequiredMfaLevel
                };
            case eN.pNK.LANDING:
            case eN.pNK.MEMBER_EDIT:
            case eN.pNK.MEMBER_TIMEOUT:
            case eN.pNK.MEMBER_KICK:
            case eN.pNK.MEMBER_BAN:
            case eN.pNK.CHANNELS:
            case eN.pNK.ROLE_EDIT:
            case eN.pNK.ROLE_PERMISSIONS:
            case eN.pNK.MEMBER_VERIFICATION:
            case eN.pNK.CLYDE:
            case eN.pNK.INTEGRATION_SETTINGS:
            case eN.pNK.SECURITY:
            case eN.pNK.AUDIT_LOG_FILTER:
            case eN.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case eN.pNK.WEBHOOKS:
            case eN.pNK.EDIT_WEBHOOK:
            case eN.pNK.INTEGRATION_PLATFORM:
            case eN.pNK.LOBBIES_LINKED:
            case eN.pNK.EDIT_LINKED_LOBBY:
            case eN.pNK.CHANNELS_FOLLOWED:
            case eN.pNK.COMMUNITY_INTRO:
            case eN.pNK.ROLE_EDIT_REFRESH:
            case eN.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case eN.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case eN.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case eN.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case eN.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case eN.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, L.vE)(e);
        }
    }
};
