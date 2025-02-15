n.d(t, { Z: () => eE });
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
    g = n(688465),
    x = n(676317),
    p = n(874993),
    _ = n(45966),
    C = n(637853),
    f = n(352981),
    v = n(610403),
    N = n(923726),
    j = n(303737),
    I = n(15030),
    E = n(220685),
    b = n(536442),
    T = n(84615),
    S = n(575258),
    R = n(276687),
    Z = n(594174),
    y = n(585483),
    A = n(823379),
    L = n(434404),
    D = n(360606),
    O = n(946724),
    k = n(999382),
    P = n(44550),
    w = n(853714),
    M = n(359191),
    U = n(84658),
    G = n(142961),
    B = n(730910),
    F = n(475013),
    z = n(213956),
    H = n(702478),
    V = n(247031),
    W = n(787561),
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
    ei = n(279542),
    er = n(413335),
    el = n(665324),
    es = n(208150),
    ea = n(353398),
    eo = n(365774),
    ec = n(803288),
    ed = n(804153),
    eu = n(486358),
    em = n(890861),
    eh = n(708510),
    eg = n(237245),
    ex = n(658666),
    ep = n(224726),
    e_ = n(308619),
    eC = n(254925),
    ef = n(981631),
    ev = n(308083),
    eN = n(135899),
    ej = n(388032),
    eI = n(57601);
let eE = {
    getSectionDefinition: function (e, t) {
        var eE;
        let eb = (0, f.p)(t.guild.id, 'guild_settings'),
            eT = !1 === t.guild.hasFeature(ef.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(ef.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            eS =
                eb && eT
                    ? {
                          label: (0, i.jsx)('div', {
                              className: eI.roleSubLabel,
                              children: ej.intl.string(ej.t.Tn7Koq)
                          }),
                          ariaLabel: ej.intl.string(ej.t.Tn7Koq)
                      }
                    : {
                          label: (0, i.jsx)('div', {
                              className: eI.roleSubLabel,
                              children: ej.intl.string(ej.t['KzCF//'])
                          }),
                          ariaLabel: ej.intl.string(ej.t['KzCF//'])
                      },
            eR = t.guild.hasFeature(ef.oNc.COMMUNITY) && t.canViewGuildAnalytics,
            eZ = (null === (eE = t.guild.profile) || void 0 === eE ? void 0 : eE.badge) != null ? (0, u.ky)(t.guild.id, t.guild.profile.badge, ev.NC.SIZE_16) : null;
        switch (e) {
            case ef.pNK.PROFILE:
                return {
                    section: ef.pNK.PROFILE,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ej.intl.string(ej.t.txdaxc),
                    ariaLabel: ej.intl.string(ej.t.txdaxc),
                    element: ep.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [k.Z],
                        element: e_.Z
                    }
                };
            case ef.pNK.TAG:
                return {
                    section: ef.pNK.TAG,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ej.intl.string(ej.t['2QmKZ2']),
                    ariaLabel: ej.intl.string(ej.t['2QmKZ2']),
                    element: eC.Z,
                    predicate: () => !1
                };
            case ef.pNK.ENGAGEMENT:
                return {
                    section: ef.pNK.ENGAGEMENT,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ej.intl.string(ej.t['6TAHb2']),
                    ariaLabel: ej.intl.string(ej.t['6TAHb2']),
                    element: eu.Z
                };
            case ef.pNK.INVITES:
                return {
                    section: ef.pNK.INVITES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ej.intl.string(ej.t.YOt3Oj),
                    ariaLabel: ej.intl.string(ej.t.YOt3Oj),
                    element: em.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ef.pNK.OVERVIEW:
                return {
                    section: ef.pNK.OVERVIEW,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: ej.intl.string(ej.t['/dp6yc']),
                    ariaLabel: ej.intl.string(ej.t['/dp6yc']),
                    element: et.Z,
                    notice: {
                        stores: [k.Z],
                        element: et.O
                    }
                };
            case ef.pNK.ROLES:
                return {
                    section: ef.pNK.ROLES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ej.intl.string(ej.t.LPJmLy),
                    element: F.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: ej.intl.string(ej.t.KXcECw),
                    notice: {
                        stores: [O.Z],
                        element: F._
                    },
                    predicate: () => t.canManageRoles
                };
            case ef.pNK.EMOJI:
                return {
                    section: ef.pNK.EMOJI,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ej.intl.string(ej.t.sMOuub),
                    element: X.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case ef.pNK.STICKERS:
                return {
                    section: ef.pNK.STICKERS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ej.intl.string(ej.t.R5nQkZ),
                    ariaLabel: ej.intl.string(ej.t.R5nQkZ),
                    element: es.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ef.pNK.SOUNDBOARD:
                return {
                    section: ef.pNK.SOUNDBOARD,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ej.intl.string(ej.t.OWQNYm),
                    ariaLabel: ej.intl.string(ej.t.OWQNYm),
                    element: el.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ef.pNK.WIDGET:
                return {
                    section: ef.pNK.WIDGET,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: ej.intl.string(ej.t.ACjbTk),
                    element: ed.Z,
                    predicate: () => t.canManageGuild
                };
            case ef.pNK.GUILD_TEMPLATES:
                return {
                    section: ef.pNK.GUILD_TEMPLATES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, i.jsx)(eo.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ej.intl.string(ej.t.KUw7Sk),
                    element: ea.ZP,
                    notice: {
                        stores: [ea.Sf],
                        element: ea.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case ef.pNK.VANITY_URL:
                return {
                    section: ef.pNK.VANITY_URL,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: ej.intl.string(ej.t['5XZKy8']),
                    element: ec.Z,
                    notice: {
                        stores: [P.Z],
                        element: ec.T
                    },
                    predicate: () => t.isGuildAdmin
                };
            case ef.pNK.ACCESS:
                return {
                    section: ef.pNK.ACCESS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ej.intl.string(ej.t['+hFV+P']),
                    element: eh.O,
                    notice: {
                        stores: [ex.Z],
                        element: eg.w
                    },
                    predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild,
                    ariaLabel: ej.intl.string(ej.t['+hFV+P'])
                };
            case ef.pNK.INTEGRATIONS:
                return {
                    section: ef.pNK.INTEGRATIONS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ej.intl.string(ej.t.CIsNZ2),
                    ariaLabel: ej.intl.string(ej.t.CIsNZ2),
                    element: Q.Z,
                    notice: {
                        stores: [D.default, k.Z],
                        element: Q.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case ef.pNK.APP_DIRECTORY:
                return {
                    section: ef.pNK.APP_DIRECTORY,
                    label: ej.intl.string(ej.t.AKcFUl),
                    ariaLabel: ej.intl.string(ej.t.AKcFUl),
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
            case ef.pNK.SAFETY:
                return {
                    section: ef.pNK.SAFETY,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ej.intl.string(ej.t['suhY+f']),
                    ariaLabel: ej.intl.string(ej.t['suhY+f']),
                    element: z.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ef.oNc.COMMUNITY)
                };
            case ef.pNK.MODERATION:
                return {
                    section: ef.pNK.MODERATION,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ej.intl.string(ej.t['suhY+f']),
                    element: ei.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(ef.oNc.COMMUNITY)
                };
            case ef.pNK.GUILD_AUTOMOD:
                return {
                    section: ef.pNK.GUILD_AUTOMOD,
                    label: (0, i.jsx)('div', {
                        className: eI.landingPageTabLink,
                        children: ej.intl.string(ej.t.uRelg4)
                    }),
                    ariaLabel: ej.intl.string(ej.t.uRelg4),
                    element: p.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(ef.oNc.COMMUNITY) && ((0, x.Nb)(t.guild.id) || (0, x.ze)(t.guild.id))
                };
            case ef.pNK.AUDIT_LOG:
                return {
                    section: ef.pNK.AUDIT_LOG,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ej.intl.string(ej.t.SPWLyc),
                    element: w.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case ef.pNK.BANS:
                return {
                    section: ef.pNK.BANS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ej.intl.string(ej.t.ZbeITU),
                    element: V.Z,
                    predicate: () => t.canManageBans
                };
            case ef.pNK.CLAN:
                return {
                    section: ef.pNK.CLAN,
                    label: ej.intl.string(ej.t['6g8uHB']),
                    ariaLabel: ej.intl.string(ej.t['6g8uHB']),
                    onClick() {
                        (0, T.q4)(
                            (e) => {
                                let { closeLayer: n } = e;
                                return (0, i.jsx)(m.Z, {
                                    onClose: n,
                                    guildId: t.guild.id
                                });
                            },
                            { layerKey: ev.q2 }
                        ),
                            (0, a.xf)();
                    },
                    predicate() {
                        var e;
                        return null !== (e = t.canAccessClanSettings) && void 0 !== e && e;
                    },
                    icon: null != eZ ? (0, i.jsx)(h.KQ, { src: eZ }) : null
                };
            case ef.pNK.COMMUNITY:
                return {
                    section: ef.pNK.COMMUNITY,
                    impressionName: t.guild.hasFeature(ef.oNc.COMMUNITY) ? r.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : r.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                    label: t.guild.hasFeature(ef.oNc.COMMUNITY) ? ej.intl.string(ej.t['/dp6yc']) : ej.intl.string(ej.t.ElKTeX),
                    element: W.Z,
                    ariaLabel: t.guild.hasFeature(ef.oNc.COMMUNITY) ? ej.intl.string(ej.t['/dp6yc']) : ej.intl.string(ej.t.ElKTeX),
                    newIndicator: !t.guild.hasFeature(ef.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eN.U3 && b.qc.hasHotspot(b.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                    notice: {
                        stores: [k.Z],
                        element: W.X
                    }
                };
            case ef.pNK.ONBOARDING:
                return {
                    section: ef.pNK.ONBOARDING,
                    label: ej.intl.string(ej.t.LdxCKy),
                    element: ee.Z,
                    ariaLabel: ej.intl.string(ej.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [M.Z],
                        element: B.Z
                    },
                    predicate: () => (0, C.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (_.Z.getEnabled(e)) return ej.intl.string(ej.t.pPSmxs).toUpperCase();
                        if ((0, G.C)(e)) return ej.intl.string(ej.t.HDF4o6).toUpperCase();
                        let n = U.ug,
                            i = n.findIndex((e) => e === t);
                        if (-1 !== i)
                            return ej.intl.formatToPlainString(ej.t['5r28iY'], {
                                count: i + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case ef.pNK.ANALYTICS:
                return {
                    section: ef.pNK.ANALYTICS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ej.intl.string(ej.t['0wWfUF']),
                    ariaLabel: ej.intl.string(ej.t['0wWfUF']),
                    element: H.Z,
                    predicate: () => eR
                };
            case ef.pNK.DISCOVERY:
                return {
                    section: ef.pNK.DISCOVERY,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                    label: ej.intl.string(ej.t.oGaVGx),
                    element: K.Z,
                    notice: {
                        stores: [k.Z],
                        element: K.s
                    },
                    predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(ef.oNc.COMMUNITY),
                    ariaLabel: t.guild.hasFeature(ef.oNc.DISCOVERABLE) ? ej.intl.string(ej.t.oGaVGx) : ej.intl.string(ej.t.XU0S6u)
                };
            case ef.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ef.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, i.jsxs)('div', {
                        className: eI.landingPageTabLink,
                        children: [ej.intl.string(ej.t.kGlQGB), ' ', (0, i.jsx)(g.Z, {})]
                    }),
                    ariaLabel: ej.intl.string(ej.t.kGlQGB),
                    element: q.Z,
                    notice: {
                        stores: [k.Z],
                        element: q.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.hasFeature(ef.oNc.DISCOVERABLE) || !!(null === (e = t.guildMetadata) || void 0 === e ? void 0 : e.isPublished));
                    }
                };
            case ef.pNK.COMMUNITY_WELCOME:
                return {
                    section: ef.pNK.COMMUNITY_WELCOME,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ej.intl.string(ej.t['2rkmDg']),
                    ariaLabel: ej.intl.string(ej.t['2rkmDg']),
                    element: Y.Z,
                    notice: {
                        stores: [S.Z],
                        element: R.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ef.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(ef.oNc.GUILD_SERVER_GUIDE)
                };
            case ef.pNK.ROLE_SUBSCRIPTIONS:
                return {
                    ...eS,
                    section: ef.pNK.ROLE_SUBSCRIPTIONS,
                    element: I.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                };
            case ef.pNK.GUILD_PRODUCTS:
                return {
                    section: ef.pNK.GUILD_PRODUCTS,
                    label: ej.intl.string(ej.t.X6h2g4),
                    ariaLabel: ej.intl.string(ej.t.X6h2g4),
                    element: v.Z,
                    predicate: () => t.monetizationPredicate() && (0, f.p)(t.guild.id, 'guild_product_settings_predicate') && (0, N.sy)(t.guild)
                };
            case ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: r.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ej.intl.string(ej.t.ipTYsr),
                    ariaLabel: ej.intl.string(ej.t.ipTYsr),
                    element: E.Z,
                    predicate: () => t.monetizationPredicate() && (0, N.sy)(t.guild)
                };
            case ef.pNK.GUILD_PREMIUM:
                return {
                    section: ef.pNK.GUILD_PREMIUM,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ej.intl.string(ej.t['8+VX4+']),
                    ariaLabel: ej.intl.string(ej.t['8+VX4+']),
                    element: en.Z,
                    className: eI.serverBoostTabItem,
                    icon: (0, i.jsx)(er.Z, { className: eI.icon })
                };
            case ef.pNK.MEMBERS:
                return {
                    section: ef.pNK.MEMBERS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, i.jsx)($.$, {}),
                    ariaLabel: ej.intl.string(ej.t['9Oq93t']),
                    element: $.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case ef.pNK.INSTANT_INVITES:
                return {
                    section: ef.pNK.INSTANT_INVITES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: ej.intl.string(ej.t['9F90iY']),
                    element: J.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ef.pNK.DELETE:
                return {
                    section: ef.pNK.DELETE,
                    onClick() {
                        let e = Z.default.getCurrentUser();
                        if (null == e) return;
                        let r = t.guild.toString(),
                            l = {
                                header: ej.intl.formatToPlainString(ej.t.us7mCw, { name: r }),
                                confirmText: ej.intl.string(ej.t.l3hWPz),
                                cancelText: ej.intl.string(ej.t['ETE/oK']),
                                onConfirm: () => {
                                    y.S.subscribeOnce(ef.CkL.LAYER_POP_COMPLETE, () => {
                                        L.Z.deleteGuild(t.guild.id, r);
                                    }),
                                        (0, a.xf)();
                                }
                            };
                        e.mfaEnabled
                            ? (0, s.h7j)((e) =>
                                  (0, i.jsx)(s.ConfirmModal, {
                                      ...e,
                                      ...l,
                                      children: (0, i.jsx)(s.Text, {
                                          variant: 'text-md/normal',
                                          children: ej.intl.format(ej.t['Zuo+VV'], { name: r })
                                      })
                                  })
                              )
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, i.jsx)(e, {
                                          ...t,
                                          ...l,
                                          validationText: r,
                                          instructionText: ej.intl.string(ej.t.abprOD),
                                          errorText: ej.intl.string(ej.t['c2/DS0']),
                                          children: ej.intl.format(ej.t['Zuo+VV'], { name: r })
                                      });
                              });
                    },
                    label: ej.intl.string(ej.t.l3hWPz),
                    ariaLabel: ej.intl.string(ej.t.l3hWPz),
                    icon: (0, i.jsx)(s.XHJ, {
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
                (0, A.vE)(e);
        }
    }
};
