n.d(t, { Z: () => eS });
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
    K = n(247031),
    Y = n(787561),
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
    ev = n(308619),
    eN = n(254925),
    ej = n(981631),
    eI = n(308083),
    eE = n(135899),
    eb = n(388032),
    eT = n(413929);
let eS = {
    getSectionDefinition: function (e, t) {
        var eS;
        let eR = (0, v.p)(t.guild.id, 'guild_settings'),
            eZ = !1 === t.guild.hasFeature(ej.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(ej.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            ey =
                eR && eZ
                    ? {
                          label: (0, i.jsx)('div', {
                              className: eT.roleSubLabel,
                              children: eb.intl.string(eb.t.Tn7Koq)
                          }),
                          ariaLabel: eb.intl.string(eb.t.Tn7Koq)
                      }
                    : {
                          label: (0, i.jsx)('div', {
                              className: eT.roleSubLabel,
                              children: eb.intl.string(eb.t['KzCF//'])
                          }),
                          ariaLabel: eb.intl.string(eb.t['KzCF//'])
                      },
            eA = t.guild.hasFeature(ej.oNc.COMMUNITY) && t.canViewGuildAnalytics,
            eL = (null === (eS = t.guild.profile) || void 0 === eS ? void 0 : eS.badge) != null ? (0, u.ky)(t.guild.id, t.guild.profile.badge, eI.NC.SIZE_16) : null;
        switch (e) {
            case ej.pNK.PROFILE:
                return {
                    section: ej.pNK.PROFILE,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eb.intl.string(eb.t.txdaxc),
                    ariaLabel: eb.intl.string(eb.t.txdaxc),
                    element: ef.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [w.Z],
                        element: ev.Z
                    }
                };
            case ej.pNK.TAG:
                return {
                    section: ej.pNK.TAG,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eb.intl.string(eb.t['2QmKZ2']),
                    ariaLabel: eb.intl.string(eb.t['2QmKZ2']),
                    element: eN.Z
                };
            case ej.pNK.LAYOUT:
                return {
                    section: ej.pNK.LAYOUT,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_LAYOUT,
                    label: eb.intl.string(eb.t.INI79P),
                    ariaLabel: eb.intl.string(eb.t.INI79P),
                    element: eC.Z
                };
            case ej.pNK.ENGAGEMENT:
                return {
                    section: ej.pNK.ENGAGEMENT,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eb.intl.string(eb.t['6TAHb2']),
                    ariaLabel: eb.intl.string(eb.t['6TAHb2']),
                    element: eh.Z
                };
            case ej.pNK.INVITES:
                return {
                    section: ej.pNK.OVERVIEW,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eb.intl.string(eb.t.YOt3Oj),
                    ariaLabel: eb.intl.string(eb.t.YOt3Oj),
                    element: eg.Z
                };
            case ej.pNK.OVERVIEW:
                return {
                    section: ej.pNK.OVERVIEW,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: eb.intl.string(eb.t['/dp6yc']),
                    ariaLabel: eb.intl.string(eb.t['/dp6yc']),
                    element: ei.Z,
                    notice: {
                        stores: [w.Z],
                        element: ei.O
                    }
                };
            case ej.pNK.ROLES:
                return {
                    section: ej.pNK.ROLES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eb.intl.string(eb.t.LPJmLy),
                    element: H.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: eb.intl.string(eb.t.KXcECw),
                    notice: {
                        stores: [P.Z],
                        element: H._
                    },
                    predicate: () => t.canManageRoles
                };
            case ej.pNK.EMOJI:
                return {
                    section: ej.pNK.EMOJI,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eb.intl.string(eb.t.sMOuub),
                    element: J.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case ej.pNK.STICKERS:
                return {
                    section: ej.pNK.STICKERS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eb.intl.string(eb.t.R5nQkZ),
                    ariaLabel: eb.intl.string(eb.t.R5nQkZ),
                    element: eo.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ej.pNK.SOUNDBOARD:
                return {
                    section: ej.pNK.SOUNDBOARD,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eb.intl.string(eb.t.OWQNYm),
                    ariaLabel: eb.intl.string(eb.t.OWQNYm),
                    element: ea.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ej.pNK.WIDGET:
                return {
                    section: ej.pNK.WIDGET,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: eb.intl.string(eb.t.ACjbTk),
                    element: em.Z,
                    predicate: () => t.canManageGuild
                };
            case ej.pNK.GUILD_TEMPLATES:
                return {
                    section: ej.pNK.GUILD_TEMPLATES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, i.jsx)(ed.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eb.intl.string(eb.t.KUw7Sk),
                    element: ec.ZP,
                    notice: {
                        stores: [ec.Sf],
                        element: ec.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case ej.pNK.VANITY_URL:
                return {
                    section: ej.pNK.VANITY_URL,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: eb.intl.string(eb.t['5XZKy8']),
                    element: eu.Z,
                    notice: {
                        stores: [M.Z],
                        element: eu.T
                    },
                    predicate: () => t.isGuildAdmin
                };
            case ej.pNK.ACCESS:
                return {
                    section: ej.pNK.ACCESS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eb.intl.string(eb.t['+hFV+P']),
                    element: ex.O,
                    notice: {
                        stores: [e_.Z],
                        element: ep.w
                    },
                    predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild,
                    ariaLabel: eb.intl.string(eb.t['+hFV+P'])
                };
            case ej.pNK.INTEGRATIONS:
                return {
                    section: ej.pNK.INTEGRATIONS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eb.intl.string(eb.t.CIsNZ2),
                    ariaLabel: eb.intl.string(eb.t.CIsNZ2),
                    element: $.Z,
                    notice: {
                        stores: [k.default, w.Z],
                        element: $.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case ej.pNK.APP_DIRECTORY:
                return {
                    section: ej.pNK.APP_DIRECTORY,
                    label: eb.intl.string(eb.t.AKcFUl),
                    ariaLabel: eb.intl.string(eb.t.AKcFUl),
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
            case ej.pNK.SAFETY:
                return {
                    section: ej.pNK.SAFETY,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eb.intl.string(eb.t['suhY+f']),
                    ariaLabel: eb.intl.string(eb.t['suhY+f']),
                    element: V.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ej.oNc.COMMUNITY)
                };
            case ej.pNK.MODERATION:
                return {
                    section: ej.pNK.MODERATION,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eb.intl.string(eb.t['suhY+f']),
                    element: el.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(ej.oNc.COMMUNITY)
                };
            case ej.pNK.GUILD_AUTOMOD:
                return {
                    section: ej.pNK.GUILD_AUTOMOD,
                    label: (0, i.jsx)('div', {
                        className: eT.landingPageTabLink,
                        children: eb.intl.string(eb.t.uRelg4)
                    }),
                    ariaLabel: eb.intl.string(eb.t.uRelg4),
                    element: _.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(ej.oNc.COMMUNITY) && ((0, p.Nb)(t.guild.id) || (0, p.ze)(t.guild.id))
                };
            case ej.pNK.AUDIT_LOG:
                return {
                    section: ej.pNK.AUDIT_LOG,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eb.intl.string(eb.t.SPWLyc),
                    element: U.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case ej.pNK.BANS:
                return {
                    section: ej.pNK.BANS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eb.intl.string(eb.t.ZbeITU),
                    element: K.Z,
                    predicate: () => t.canManageBans
                };
            case ej.pNK.CLAN:
                return {
                    section: ej.pNK.CLAN,
                    label: eb.intl.string(eb.t['6g8uHB']),
                    ariaLabel: eb.intl.string(eb.t['6g8uHB']),
                    onClick() {
                        (0, S.q4)(
                            (e) => {
                                let { closeLayer: n } = e;
                                return (0, i.jsx)(m.Z, {
                                    onClose: n,
                                    guildId: t.guild.id
                                });
                            },
                            { layerKey: eI.q2 }
                        ),
                            (0, a.xf)();
                    },
                    predicate() {
                        var e;
                        return null !== (e = t.canAccessClanSettings) && void 0 !== e && e;
                    },
                    icon: null != eL ? (0, i.jsx)(h.KQ, { src: eL }) : null
                };
            case ej.pNK.COMMUNITY:
                return {
                    section: ej.pNK.COMMUNITY,
                    impressionName: t.guild.hasFeature(ej.oNc.COMMUNITY) ? r.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : r.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                    label: t.guild.hasFeature(ej.oNc.COMMUNITY) ? eb.intl.string(eb.t['/dp6yc']) : eb.intl.string(eb.t.ElKTeX),
                    element: Y.Z,
                    ariaLabel: t.guild.hasFeature(ej.oNc.COMMUNITY) ? eb.intl.string(eb.t['/dp6yc']) : eb.intl.string(eb.t.ElKTeX),
                    newIndicator: !t.guild.hasFeature(ej.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eE.U3 && T.qc.hasHotspot(T.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                    notice: {
                        stores: [w.Z],
                        element: Y.X
                    }
                };
            case ej.pNK.ONBOARDING:
                return {
                    section: ej.pNK.ONBOARDING,
                    label: eb.intl.string(eb.t.LdxCKy),
                    element: en.Z,
                    ariaLabel: eb.intl.string(eb.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [G.Z],
                        element: z.Z
                    },
                    predicate: () => (0, f.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (C.Z.getEnabled(e)) return eb.intl.string(eb.t.pPSmxs).toUpperCase();
                        if ((0, F.C)(e)) return eb.intl.string(eb.t.HDF4o6).toUpperCase();
                        let n = B.ug,
                            i = n.findIndex((e) => e === t);
                        if (-1 !== i)
                            return eb.intl.formatToPlainString(eb.t['5r28iY'], {
                                count: i + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case ej.pNK.ANALYTICS:
                return {
                    section: ej.pNK.ANALYTICS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eb.intl.string(eb.t['0wWfUF']),
                    ariaLabel: eb.intl.string(eb.t['0wWfUF']),
                    element: W.Z,
                    predicate: () => eA
                };
            case ej.pNK.DISCOVERY:
                return {
                    section: ej.pNK.DISCOVERY,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                    label: eb.intl.string(eb.t.oGaVGx),
                    element: X.Z,
                    notice: {
                        stores: [w.Z],
                        element: X.s
                    },
                    predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(ej.oNc.COMMUNITY),
                    ariaLabel: t.guild.hasFeature(ej.oNc.DISCOVERABLE) ? eb.intl.string(eb.t.oGaVGx) : eb.intl.string(eb.t.XU0S6u)
                };
            case ej.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ej.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, i.jsxs)('div', {
                        className: eT.landingPageTabLink,
                        children: [eb.intl.string(eb.t.kGlQGB), ' ', (0, i.jsx)(x.Z, {})]
                    }),
                    ariaLabel: eb.intl.string(eb.t.kGlQGB),
                    element: Q.Z,
                    notice: {
                        stores: [w.Z],
                        element: Q.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.hasFeature(ej.oNc.DISCOVERABLE) || !!(null === (e = t.guildMetadata) || void 0 === e ? void 0 : e.isPublished));
                    }
                };
            case ej.pNK.COMMUNITY_WELCOME:
                return {
                    section: ej.pNK.COMMUNITY_WELCOME,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eb.intl.string(eb.t['2rkmDg']),
                    ariaLabel: eb.intl.string(eb.t['2rkmDg']),
                    element: q.Z,
                    notice: {
                        stores: [R.Z],
                        element: Z.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ej.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(ej.oNc.GUILD_SERVER_GUIDE)
                };
            case ej.pNK.ROLE_SUBSCRIPTIONS:
                return {
                    ...ey,
                    section: ej.pNK.ROLE_SUBSCRIPTIONS,
                    element: E.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, I.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                };
            case ej.pNK.GUILD_PRODUCTS:
                return {
                    section: ej.pNK.GUILD_PRODUCTS,
                    label: eb.intl.string(eb.t.X6h2g4),
                    ariaLabel: eb.intl.string(eb.t.X6h2g4),
                    element: N.Z,
                    predicate: () => t.monetizationPredicate() && (0, v.p)(t.guild.id, 'guild_product_settings_predicate') && (0, j.sy)(t.guild)
                };
            case ej.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ej.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: r.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eb.intl.string(eb.t.ipTYsr),
                    ariaLabel: eb.intl.string(eb.t.ipTYsr),
                    element: b.Z,
                    predicate: () => t.monetizationPredicate() && (0, j.sy)(t.guild)
                };
            case ej.pNK.GUILD_PREMIUM:
                return {
                    section: ej.pNK.GUILD_PREMIUM,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eb.intl.string(eb.t['8+VX4+']),
                    ariaLabel: eb.intl.string(eb.t['8+VX4+']),
                    element: er.Z,
                    className: eT.serverBoostTabItem,
                    icon: (0, i.jsx)(es.Z, { className: eT.icon })
                };
            case ej.pNK.MEMBERS:
                return {
                    section: ej.pNK.MEMBERS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, i.jsx)(et.$, {}),
                    ariaLabel: eb.intl.string(eb.t['9Oq93t']),
                    element: et.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case ej.pNK.INSTANT_INVITES:
                return {
                    section: ej.pNK.INSTANT_INVITES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: eb.intl.string(eb.t['9F90iY']),
                    element: ee.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ej.pNK.DELETE:
                return {
                    section: ej.pNK.DELETE,
                    onClick() {
                        let e = y.default.getCurrentUser();
                        if (null == e) return;
                        let r = t.guild.toString(),
                            o = {
                                header: eb.intl.formatToPlainString(eb.t.us7mCw, { name: r }),
                                confirmText: eb.intl.string(eb.t.l3hWPz),
                                cancelText: eb.intl.string(eb.t['ETE/oK']),
                                onConfirm: () => {
                                    A.S.subscribeOnce(ej.CkL.LAYER_POP_COMPLETE, () => {
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
                                          children: eb.intl.format(eb.t['Zuo+VV'], { name: r })
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
                                          instructionText: eb.intl.string(eb.t.abprOD),
                                          errorText: eb.intl.string(eb.t['c2/DS0']),
                                          children: eb.intl.format(eb.t['Zuo+VV'], { name: r })
                                      });
                              });
                    },
                    label: eb.intl.string(eb.t.l3hWPz),
                    ariaLabel: eb.intl.string(eb.t.l3hWPz),
                    icon: (0, i.jsx)(s.XHJ, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    predicate: () => t.isOwnerWithRequiredMfaLevel
                };
            case ej.pNK.LANDING:
            case ej.pNK.MEMBER_EDIT:
            case ej.pNK.MEMBER_TIMEOUT:
            case ej.pNK.MEMBER_KICK:
            case ej.pNK.MEMBER_BAN:
            case ej.pNK.CHANNELS:
            case ej.pNK.ROLE_EDIT:
            case ej.pNK.ROLE_PERMISSIONS:
            case ej.pNK.MEMBER_VERIFICATION:
            case ej.pNK.CLYDE:
            case ej.pNK.INTEGRATION_SETTINGS:
            case ej.pNK.SECURITY:
            case ej.pNK.AUDIT_LOG_FILTER:
            case ej.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case ej.pNK.WEBHOOKS:
            case ej.pNK.EDIT_WEBHOOK:
            case ej.pNK.INTEGRATION_PLATFORM:
            case ej.pNK.LOBBIES_LINKED:
            case ej.pNK.EDIT_LINKED_LOBBY:
            case ej.pNK.CHANNELS_FOLLOWED:
            case ej.pNK.COMMUNITY_INTRO:
            case ej.pNK.ROLE_EDIT_REFRESH:
            case ej.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case ej.pNK.ROLE_SUBSCRIPTIONS_BASIC:
            case ej.pNK.ROLE_SUBSCRIPTIONS_TIERS:
            case ej.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case ej.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
            case ej.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, L.vE)(e);
        }
    }
};
