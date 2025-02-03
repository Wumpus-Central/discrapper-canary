n.d(t, { Z: () => eb });
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
    K = n(579648),
    Y = n(511480),
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
    ep = n(755198),
    e_ = n(224726),
    eC = n(308619),
    ef = n(254925),
    ev = n(981631),
    eN = n(308083),
    ej = n(135899),
    eI = n(388032),
    eE = n(413929);
let eb = {
    getSectionDefinition: function (e, t) {
        var eb;
        let eT = (0, f.p)(t.guild.id, 'guild_settings'),
            eS = !1 === t.guild.hasFeature(ev.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(ev.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            eR =
                eT && eS
                    ? {
                          label: (0, i.jsx)('div', {
                              className: eE.roleSubLabel,
                              children: eI.intl.string(eI.t.Tn7Koq)
                          }),
                          ariaLabel: eI.intl.string(eI.t.Tn7Koq)
                      }
                    : {
                          label: (0, i.jsx)('div', {
                              className: eE.roleSubLabel,
                              children: eI.intl.string(eI.t['KzCF//'])
                          }),
                          ariaLabel: eI.intl.string(eI.t['KzCF//'])
                      },
            eZ = t.guild.hasFeature(ev.oNc.COMMUNITY) && t.canViewGuildAnalytics,
            ey = (null === (eb = t.guild.profile) || void 0 === eb ? void 0 : eb.badge) != null ? (0, u.ky)(t.guild.id, t.guild.profile.badge, eN.NC.SIZE_16) : null;
        switch (e) {
            case ev.pNK.PROFILE:
                return {
                    section: ev.pNK.PROFILE,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: eI.intl.string(eI.t.txdaxc),
                    ariaLabel: eI.intl.string(eI.t.txdaxc),
                    element: e_.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [k.Z],
                        element: eC.Z
                    }
                };
            case ev.pNK.TAG:
                return {
                    section: ev.pNK.TAG,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: eI.intl.string(eI.t['2QmKZ2']),
                    ariaLabel: eI.intl.string(eI.t['2QmKZ2']),
                    element: ef.Z
                };
            case ev.pNK.LAYOUT:
                return {
                    section: ev.pNK.LAYOUT,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_LAYOUT,
                    label: eI.intl.string(eI.t.INI79P),
                    ariaLabel: eI.intl.string(eI.t.INI79P),
                    element: ep.Z
                };
            case ev.pNK.ENGAGEMENT:
                return {
                    section: ev.pNK.ENGAGEMENT,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: eI.intl.string(eI.t['6TAHb2']),
                    ariaLabel: eI.intl.string(eI.t['6TAHb2']),
                    element: eu.Z
                };
            case ev.pNK.INVITES:
                return {
                    section: ev.pNK.OVERVIEW,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: eI.intl.string(eI.t.YOt3Oj),
                    ariaLabel: eI.intl.string(eI.t.YOt3Oj),
                    element: em.Z
                };
            case ev.pNK.OVERVIEW:
                return {
                    section: ev.pNK.OVERVIEW,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: eI.intl.string(eI.t['/dp6yc']),
                    ariaLabel: eI.intl.string(eI.t['/dp6yc']),
                    element: et.Z,
                    notice: {
                        stores: [k.Z],
                        element: et.O
                    }
                };
            case ev.pNK.ROLES:
                return {
                    section: ev.pNK.ROLES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eI.intl.string(eI.t.LPJmLy),
                    element: F.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: eI.intl.string(eI.t.KXcECw),
                    notice: {
                        stores: [O.Z],
                        element: F._
                    },
                    predicate: () => t.canManageRoles
                };
            case ev.pNK.EMOJI:
                return {
                    section: ev.pNK.EMOJI,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eI.intl.string(eI.t.sMOuub),
                    element: X.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case ev.pNK.STICKERS:
                return {
                    section: ev.pNK.STICKERS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eI.intl.string(eI.t.R5nQkZ),
                    ariaLabel: eI.intl.string(eI.t.R5nQkZ),
                    element: es.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ev.pNK.SOUNDBOARD:
                return {
                    section: ev.pNK.SOUNDBOARD,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eI.intl.string(eI.t.OWQNYm),
                    ariaLabel: eI.intl.string(eI.t.OWQNYm),
                    element: el.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ev.pNK.WIDGET:
                return {
                    section: ev.pNK.WIDGET,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: eI.intl.string(eI.t.ACjbTk),
                    element: ed.Z,
                    predicate: () => t.canManageGuild
                };
            case ev.pNK.GUILD_TEMPLATES:
                return {
                    section: ev.pNK.GUILD_TEMPLATES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, i.jsx)(eo.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: eI.intl.string(eI.t.KUw7Sk),
                    element: ea.ZP,
                    notice: {
                        stores: [ea.Sf],
                        element: ea.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case ev.pNK.VANITY_URL:
                return {
                    section: ev.pNK.VANITY_URL,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: eI.intl.string(eI.t['5XZKy8']),
                    element: ec.Z,
                    notice: {
                        stores: [P.Z],
                        element: ec.T
                    },
                    predicate: () => t.isGuildAdmin
                };
            case ev.pNK.ACCESS:
                return {
                    section: ev.pNK.ACCESS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: eI.intl.string(eI.t['+hFV+P']),
                    element: eh.O,
                    notice: {
                        stores: [ex.Z],
                        element: eg.w
                    },
                    predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild,
                    ariaLabel: eI.intl.string(eI.t['+hFV+P'])
                };
            case ev.pNK.INTEGRATIONS:
                return {
                    section: ev.pNK.INTEGRATIONS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eI.intl.string(eI.t.CIsNZ2),
                    ariaLabel: eI.intl.string(eI.t.CIsNZ2),
                    element: Q.Z,
                    notice: {
                        stores: [D.default, k.Z],
                        element: Q.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case ev.pNK.APP_DIRECTORY:
                return {
                    section: ev.pNK.APP_DIRECTORY,
                    label: eI.intl.string(eI.t.AKcFUl),
                    ariaLabel: eI.intl.string(eI.t.AKcFUl),
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
            case ev.pNK.SAFETY:
                return {
                    section: ev.pNK.SAFETY,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eI.intl.string(eI.t['suhY+f']),
                    ariaLabel: eI.intl.string(eI.t['suhY+f']),
                    element: z.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ev.oNc.COMMUNITY)
                };
            case ev.pNK.MODERATION:
                return {
                    section: ev.pNK.MODERATION,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eI.intl.string(eI.t['suhY+f']),
                    element: ei.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(ev.oNc.COMMUNITY)
                };
            case ev.pNK.GUILD_AUTOMOD:
                return {
                    section: ev.pNK.GUILD_AUTOMOD,
                    label: (0, i.jsx)('div', {
                        className: eE.landingPageTabLink,
                        children: eI.intl.string(eI.t.uRelg4)
                    }),
                    ariaLabel: eI.intl.string(eI.t.uRelg4),
                    element: p.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(ev.oNc.COMMUNITY) && ((0, x.Nb)(t.guild.id) || (0, x.ze)(t.guild.id))
                };
            case ev.pNK.AUDIT_LOG:
                return {
                    section: ev.pNK.AUDIT_LOG,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eI.intl.string(eI.t.SPWLyc),
                    element: w.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case ev.pNK.BANS:
                return {
                    section: ev.pNK.BANS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eI.intl.string(eI.t.ZbeITU),
                    element: V.Z,
                    predicate: () => t.canManageBans
                };
            case ev.pNK.CLAN:
                return {
                    section: ev.pNK.CLAN,
                    label: eI.intl.string(eI.t['6g8uHB']),
                    ariaLabel: eI.intl.string(eI.t['6g8uHB']),
                    onClick() {
                        (0, T.q4)(
                            (e) => {
                                let { closeLayer: n } = e;
                                return (0, i.jsx)(m.Z, {
                                    onClose: n,
                                    guildId: t.guild.id
                                });
                            },
                            { layerKey: eN.q2 }
                        ),
                            (0, a.xf)();
                    },
                    predicate() {
                        var e;
                        return null !== (e = t.canAccessClanSettings) && void 0 !== e && e;
                    },
                    icon: null != ey ? (0, i.jsx)(h.KQ, { src: ey }) : null
                };
            case ev.pNK.COMMUNITY:
                return {
                    section: ev.pNK.COMMUNITY,
                    impressionName: t.guild.hasFeature(ev.oNc.COMMUNITY) ? r.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : r.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                    label: t.guild.hasFeature(ev.oNc.COMMUNITY) ? eI.intl.string(eI.t['/dp6yc']) : eI.intl.string(eI.t.ElKTeX),
                    element: W.Z,
                    ariaLabel: t.guild.hasFeature(ev.oNc.COMMUNITY) ? eI.intl.string(eI.t['/dp6yc']) : eI.intl.string(eI.t.ElKTeX),
                    newIndicator: !t.guild.hasFeature(ev.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= ej.U3 && b.qc.hasHotspot(b.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                    notice: {
                        stores: [k.Z],
                        element: W.X
                    }
                };
            case ev.pNK.ONBOARDING:
                return {
                    section: ev.pNK.ONBOARDING,
                    label: eI.intl.string(eI.t.LdxCKy),
                    element: ee.Z,
                    ariaLabel: eI.intl.string(eI.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [M.Z],
                        element: B.Z
                    },
                    predicate: () => (0, C.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (_.Z.getEnabled(e)) return eI.intl.string(eI.t.pPSmxs).toUpperCase();
                        if ((0, G.C)(e)) return eI.intl.string(eI.t.HDF4o6).toUpperCase();
                        let n = U.ug,
                            i = n.findIndex((e) => e === t);
                        if (-1 !== i)
                            return eI.intl.formatToPlainString(eI.t['5r28iY'], {
                                count: i + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case ev.pNK.ANALYTICS:
                return {
                    section: ev.pNK.ANALYTICS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eI.intl.string(eI.t['0wWfUF']),
                    ariaLabel: eI.intl.string(eI.t['0wWfUF']),
                    element: H.Z,
                    predicate: () => eZ
                };
            case ev.pNK.DISCOVERY:
                return {
                    section: ev.pNK.DISCOVERY,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                    label: eI.intl.string(eI.t.oGaVGx),
                    element: Y.Z,
                    notice: {
                        stores: [k.Z],
                        element: Y.s
                    },
                    predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(ev.oNc.COMMUNITY),
                    ariaLabel: t.guild.hasFeature(ev.oNc.DISCOVERABLE) ? eI.intl.string(eI.t.oGaVGx) : eI.intl.string(eI.t.XU0S6u)
                };
            case ev.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ev.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, i.jsxs)('div', {
                        className: eE.landingPageTabLink,
                        children: [eI.intl.string(eI.t.kGlQGB), ' ', (0, i.jsx)(g.Z, {})]
                    }),
                    ariaLabel: eI.intl.string(eI.t.kGlQGB),
                    element: q.Z,
                    notice: {
                        stores: [k.Z],
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
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eI.intl.string(eI.t['2rkmDg']),
                    ariaLabel: eI.intl.string(eI.t['2rkmDg']),
                    element: K.Z,
                    notice: {
                        stores: [S.Z],
                        element: R.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ev.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(ev.oNc.GUILD_SERVER_GUIDE)
                };
            case ev.pNK.ROLE_SUBSCRIPTIONS:
                return {
                    ...eR,
                    section: ev.pNK.ROLE_SUBSCRIPTIONS,
                    element: I.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                };
            case ev.pNK.GUILD_PRODUCTS:
                return {
                    section: ev.pNK.GUILD_PRODUCTS,
                    label: eI.intl.string(eI.t.X6h2g4),
                    ariaLabel: eI.intl.string(eI.t.X6h2g4),
                    element: v.Z,
                    predicate: () => t.monetizationPredicate() && (0, f.p)(t.guild.id, 'guild_product_settings_predicate') && (0, N.sy)(t.guild)
                };
            case ev.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ev.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: r.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eI.intl.string(eI.t.ipTYsr),
                    ariaLabel: eI.intl.string(eI.t.ipTYsr),
                    element: E.Z,
                    predicate: () => t.monetizationPredicate() && (0, N.sy)(t.guild)
                };
            case ev.pNK.GUILD_PREMIUM:
                return {
                    section: ev.pNK.GUILD_PREMIUM,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eI.intl.string(eI.t['8+VX4+']),
                    ariaLabel: eI.intl.string(eI.t['8+VX4+']),
                    element: en.Z,
                    className: eE.serverBoostTabItem,
                    icon: (0, i.jsx)(er.Z, { className: eE.icon })
                };
            case ev.pNK.MEMBERS:
                return {
                    section: ev.pNK.MEMBERS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, i.jsx)($.$, {}),
                    ariaLabel: eI.intl.string(eI.t['9Oq93t']),
                    element: $.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case ev.pNK.INSTANT_INVITES:
                return {
                    section: ev.pNK.INSTANT_INVITES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: eI.intl.string(eI.t['9F90iY']),
                    element: J.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ev.pNK.DELETE:
                return {
                    section: ev.pNK.DELETE,
                    onClick() {
                        let e = Z.default.getCurrentUser();
                        if (null == e) return;
                        let r = t.guild.toString(),
                            l = {
                                header: eI.intl.formatToPlainString(eI.t.us7mCw, { name: r }),
                                confirmText: eI.intl.string(eI.t.l3hWPz),
                                cancelText: eI.intl.string(eI.t['ETE/oK']),
                                onConfirm: () => {
                                    y.S.subscribeOnce(ev.CkL.LAYER_POP_COMPLETE, () => {
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
                                          children: eI.intl.format(eI.t['Zuo+VV'], { name: r })
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
                                          instructionText: eI.intl.string(eI.t.abprOD),
                                          errorText: eI.intl.string(eI.t['c2/DS0']),
                                          children: eI.intl.format(eI.t['Zuo+VV'], { name: r })
                                      });
                              });
                    },
                    label: eI.intl.string(eI.t.l3hWPz),
                    ariaLabel: eI.intl.string(eI.t.l3hWPz),
                    icon: (0, i.jsx)(s.XHJ, {
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
                (0, A.vE)(e);
        }
    }
};
