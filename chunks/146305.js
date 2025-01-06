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
    f = n(874993),
    C = n(45966),
    v = n(637853),
    _ = n(352981),
    I = n(610403),
    N = n(923726),
    T = n(303737),
    j = n(15030),
    b = n(220685),
    S = n(536442),
    E = n(84615),
    R = n(575258),
    y = n(276687),
    A = n(594174),
    Z = n(585483),
    L = n(823379),
    D = n(85001),
    O = n(434404),
    P = n(360606),
    k = n(894376),
    M = n(946724),
    w = n(999382),
    B = n(44550),
    U = n(853714),
    G = n(359191),
    F = n(84658),
    H = n(142961),
    z = n(730910),
    W = n(475013),
    V = n(213956),
    Y = n(702478),
    K = n(247031),
    q = n(787561),
    X = n(579648),
    Q = n(511480),
    J = n(460461),
    $ = n(29605),
    ee = n(365307),
    et = n(497666),
    en = n(324330),
    ei = n(495300),
    er = n(312397),
    el = n(651780),
    es = n(279542),
    ea = n(413335),
    eo = n(665324),
    ec = n(208150),
    ed = n(353398),
    eu = n(365774),
    em = n(803288),
    eh = n(804153),
    eg = n(708510),
    ex = n(237245),
    ep = n(981631),
    ef = n(308083),
    eC = n(135899),
    ev = n(388032),
    e_ = n(413929);
t.Z = {
    getSectionDefinition: function (e, t) {
        var eI;
        let eN = (0, _.p)(t.guild.id, 'guild_settings'),
            eT = !1 === t.guild.hasFeature(ep.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(ep.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            ej =
                eN && eT
                    ? {
                          label: (0, i.jsx)('div', {
                              className: e_.roleSubLabel,
                              children: ev.intl.string(ev.t.Tn7Koq)
                          }),
                          ariaLabel: ev.intl.string(ev.t.Tn7Koq)
                      }
                    : {
                          label: (0, i.jsx)('div', {
                              className: e_.roleSubLabel,
                              children: ev.intl.string(ev.t['KzCF//'])
                          }),
                          ariaLabel: ev.intl.string(ev.t['KzCF//'])
                      },
            eb = t.guild.hasFeature(ep.oNc.COMMUNITY) && t.canViewGuildAnalytics,
            eS = (null === (eI = t.guild.profile) || void 0 === eI ? void 0 : eI.badge) != null ? (0, u.ky)(t.guild.id, t.guild.profile.badge, ef.NC.SIZE_16) : null;
        switch (e) {
            case ep.pNK.OVERVIEW:
                return {
                    section: ep.pNK.OVERVIEW,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: ev.intl.string(ev.t['/dp6yc']),
                    ariaLabel: ev.intl.string(ev.t['/dp6yc']),
                    element: er.Z,
                    notice: {
                        stores: [w.Z],
                        element: er.O
                    }
                };
            case ep.pNK.ROLES:
                return {
                    section: ep.pNK.ROLES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ev.intl.string(ev.t.LPJmLy),
                    element: W.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: ev.intl.string(ev.t.KXcECw),
                    notice: {
                        stores: [M.Z],
                        element: W._
                    },
                    predicate: () => t.canManageRoles
                };
            case ep.pNK.EMOJI:
                return {
                    section: ep.pNK.EMOJI,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ev.intl.string(ev.t.sMOuub),
                    element: $.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case ep.pNK.STICKERS:
                return {
                    section: ep.pNK.STICKERS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ev.intl.string(ev.t.R5nQkZ),
                    ariaLabel: ev.intl.string(ev.t.R5nQkZ),
                    element: ec.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ep.pNK.SOUNDBOARD:
                return {
                    section: ep.pNK.SOUNDBOARD,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ev.intl.string(ev.t.OWQNYm),
                    ariaLabel: ev.intl.string(ev.t.OWQNYm),
                    element: eo.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ep.pNK.WIDGET:
                return {
                    section: ep.pNK.WIDGET,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: ev.intl.string(ev.t.ACjbTk),
                    element: eh.Z,
                    predicate: () => t.canManageGuild
                };
            case ep.pNK.GUILD_TEMPLATES:
                return {
                    section: ep.pNK.GUILD_TEMPLATES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, i.jsx)(eu.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ev.intl.string(ev.t.KUw7Sk),
                    element: ed.ZP,
                    notice: {
                        stores: [ed.Sf],
                        element: ed.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case ep.pNK.VANITY_URL:
                return {
                    section: ep.pNK.VANITY_URL,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: ev.intl.string(ev.t['5XZKy8']),
                    element: em.Z,
                    notice: {
                        stores: [B.Z],
                        element: em.T
                    },
                    predicate: () => t.isGuildAdmin
                };
            case ep.pNK.ACCESS:
                return {
                    section: ep.pNK.ACCESS,
                    label: ev.intl.string(ev.t['+hFV+P']),
                    element: eg.O,
                    notice: {
                        stores: [k.Z],
                        element: ex.w
                    },
                    predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild,
                    ariaLabel: ev.intl.string(ev.t['+hFV+P'])
                };
            case ep.pNK.INTEGRATIONS:
                return {
                    section: ep.pNK.INTEGRATIONS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ev.intl.string(ev.t.CIsNZ2),
                    ariaLabel: ev.intl.string(ev.t.CIsNZ2),
                    element: ee.Z,
                    notice: {
                        stores: [P.default, w.Z],
                        element: ee.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks
                };
            case ep.pNK.APP_DIRECTORY:
                return {
                    section: ep.pNK.APP_DIRECTORY,
                    label: ev.intl.string(ev.t.AKcFUl),
                    ariaLabel: ev.intl.string(ev.t.AKcFUl),
                    onClick() {
                        (0, d.goToAppDirectory)({
                            guildId: t.guild.id,
                            entrypoint: {
                                name: c.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                                guildSettingsSection: e
                            }
                        }),
                            (0, a.xf)();
                    }
                };
            case ep.pNK.SAFETY:
                return {
                    section: ep.pNK.SAFETY,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ev.intl.string(ev.t['suhY+f']),
                    ariaLabel: ev.intl.string(ev.t['suhY+f']),
                    element: V.Z,
                    newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ep.oNc.COMMUNITY)
                };
            case ep.pNK.MODERATION:
                return {
                    section: ep.pNK.MODERATION,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ev.intl.string(ev.t['suhY+f']),
                    element: es.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(ep.oNc.COMMUNITY)
                };
            case ep.pNK.GUILD_AUTOMOD:
                return {
                    section: ep.pNK.GUILD_AUTOMOD,
                    label: (0, i.jsx)('div', {
                        className: e_.landingPageTabLink,
                        children: ev.intl.string(ev.t.uRelg4)
                    }),
                    ariaLabel: ev.intl.string(ev.t.uRelg4),
                    element: f.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(ep.oNc.COMMUNITY) && ((0, p.Nb)(t.guild.id) || (0, p.ze)(t.guild.id))
                };
            case ep.pNK.AUDIT_LOG:
                return {
                    section: ep.pNK.AUDIT_LOG,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ev.intl.string(ev.t.SPWLyc),
                    element: U.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case ep.pNK.BANS:
                return {
                    section: ep.pNK.BANS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ev.intl.string(ev.t.ZbeITU),
                    element: K.Z,
                    predicate: () => t.canManageBans
                };
            case ep.pNK.CLAN:
                return {
                    section: ep.pNK.CLAN,
                    label: ev.intl.string(ev.t['6g8uHB']),
                    ariaLabel: ev.intl.string(ev.t['6g8uHB']),
                    onClick() {
                        (0, E.q4)(
                            (e) => {
                                let { closeLayer: n } = e;
                                return (0, i.jsx)(m.Z, {
                                    onClose: n,
                                    guildId: t.guild.id
                                });
                            },
                            { layerKey: ef.q2 }
                        ),
                            (0, a.xf)();
                    },
                    predicate() {
                        var e;
                        return null !== (e = t.canAccessClanSettings) && void 0 !== e && e;
                    },
                    icon: null != eS ? (0, i.jsx)(h.KQ, { src: eS }) : null
                };
            case ep.pNK.COMMUNITY:
                return {
                    section: ep.pNK.COMMUNITY,
                    impressionName: t.guild.hasFeature(ep.oNc.COMMUNITY) ? r.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : r.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                    label: t.guild.hasFeature(ep.oNc.COMMUNITY) ? ev.intl.string(ev.t['/dp6yc']) : ev.intl.string(ev.t.ElKTeX),
                    element: q.Z,
                    ariaLabel: t.guild.hasFeature(ep.oNc.COMMUNITY) ? ev.intl.string(ev.t['/dp6yc']) : ev.intl.string(ev.t.ElKTeX),
                    newIndicator: !t.guild.hasFeature(ep.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eC.U3 && S.qc.hasHotspot(S.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                    notice: {
                        stores: [w.Z],
                        element: q.X
                    }
                };
            case ep.pNK.ONBOARDING:
                return {
                    section: ep.pNK.ONBOARDING,
                    label: ev.intl.string(ev.t.LdxCKy),
                    element: ei.Z,
                    ariaLabel: ev.intl.string(ev.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [G.Z],
                        element: z.Z
                    },
                    predicate: () => (0, v.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (C.Z.getEnabled(e)) return ev.intl.string(ev.t.pPSmxs).toUpperCase();
                        if ((0, H.C)(e)) return ev.intl.string(ev.t.HDF4o6).toUpperCase();
                        let n = F.ug,
                            i = n.findIndex((e) => e === t);
                        if (-1 !== i)
                            return ev.intl.formatToPlainString(ev.t['5r28iY'], {
                                count: i + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case ep.pNK.ANALYTICS:
                return {
                    section: ep.pNK.ANALYTICS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ev.intl.string(ev.t['0wWfUF']),
                    ariaLabel: ev.intl.string(ev.t['0wWfUF']),
                    element: Y.Z,
                    newIndicator: S.qc.hasHotspot(S.v6.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
                    newIndicatorDismissibleContentTypes: t.showAccessRate ? [l.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
                    predicate: () => eb
                };
            case ep.pNK.DISCOVERY:
                return {
                    section: ep.pNK.DISCOVERY,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                    label: ev.intl.string(ev.t.oGaVGx),
                    element: Q.Z,
                    notice: {
                        stores: [w.Z],
                        element: Q.s
                    },
                    predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(ep.oNc.COMMUNITY),
                    ariaLabel: t.guild.hasFeature(ep.oNc.DISCOVERABLE) ? ev.intl.string(ev.t.oGaVGx) : ev.intl.string(ev.t.XU0S6u)
                };
            case ep.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ep.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, i.jsxs)('div', {
                        className: e_.landingPageTabLink,
                        children: [ev.intl.string(ev.t.kGlQGB), ' ', (0, i.jsx)(x.Z, {})]
                    }),
                    ariaLabel: ev.intl.string(ev.t.kGlQGB),
                    element: J.Z,
                    notice: {
                        stores: [w.Z],
                        element: J.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.hasFeature(ep.oNc.DISCOVERABLE) || !!(null === (e = t.guildMetadata) || void 0 === e ? void 0 : e.isPublished));
                    }
                };
            case ep.pNK.COMMUNITY_WELCOME:
                return {
                    section: ep.pNK.COMMUNITY_WELCOME,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ev.intl.string(ev.t['2rkmDg']),
                    ariaLabel: ev.intl.string(ev.t['2rkmDg']),
                    element: X.Z,
                    notice: {
                        stores: [R.Z],
                        element: y.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ep.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(ep.oNc.GUILD_SERVER_GUIDE)
                };
            case ep.pNK.ROLE_SUBSCRIPTIONS:
                return {
                    ...ej,
                    section: ep.pNK.ROLE_SUBSCRIPTIONS,
                    element: j.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, T.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                };
            case ep.pNK.GUILD_PRODUCTS:
                return {
                    section: ep.pNK.GUILD_PRODUCTS,
                    label: ev.intl.string(ev.t.X6h2g4),
                    ariaLabel: ev.intl.string(ev.t.X6h2g4),
                    element: I.Z,
                    predicate: () => t.monetizationPredicate() && (0, _.p)(t.guild.id, 'guild_product_settings_predicate') && (0, N.sy)(t.guild)
                };
            case ep.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ep.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: r.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ev.intl.string(ev.t.ipTYsr),
                    ariaLabel: ev.intl.string(ev.t.ipTYsr),
                    element: b.Z,
                    predicate: () => t.monetizationPredicate() && (0, N.sy)(t.guild)
                };
            case ep.pNK.GUILD_PREMIUM:
                return {
                    section: ep.pNK.GUILD_PREMIUM,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ev.intl.string(ev.t['8+VX4+']),
                    ariaLabel: ev.intl.string(ev.t['8+VX4+']),
                    element: el.Z,
                    className: e_.serverBoostTabItem,
                    icon: (0, i.jsx)(ea.Z, { className: e_.icon })
                };
            case ep.pNK.MEMBERS:
                return {
                    section: ep.pNK.MEMBERS,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, i.jsx)(en.$, {}),
                    ariaLabel: ev.intl.string(ev.t['9Oq93t']),
                    element: en.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case ep.pNK.INSTANT_INVITES:
                return {
                    section: ep.pNK.INSTANT_INVITES,
                    impressionName: r.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: ev.intl.string(ev.t['9F90iY']),
                    element: et.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ep.pNK.DELETE:
                return {
                    section: ep.pNK.DELETE,
                    onClick() {
                        let e = A.default.getCurrentUser();
                        if (null == e) return;
                        let r = t.guild.toString(),
                            o = {
                                header: ev.intl.formatToPlainString(ev.t.us7mCw, { name: r }),
                                confirmText: ev.intl.string(ev.t.l3hWPz),
                                cancelText: ev.intl.string(ev.t['ETE/oK']),
                                onConfirm: () => {
                                    Z.S.subscribeOnce(ep.CkL.LAYER_POP_COMPLETE, () => {
                                        O.Z.deleteGuild(t.guild.id, r).then(() => {
                                            if ((0, g.un)(l.z.GUILD_DELETE_FEEDBACK)) return;
                                            D.Z.trackExposure({ location: 'e4be39_1' });
                                            let { showFeedback: e } = D.Z.getCurrentConfig({ location: 'e4be39_2' }, { autoTrackExposure: !1 });
                                            e &&
                                                (0, s.openModalLazy)(async () => {
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
                            ? (0, s.openModal)((e) =>
                                  (0, i.jsx)(s.ConfirmModal, {
                                      ...e,
                                      ...o,
                                      children: (0, i.jsx)(s.Text, {
                                          variant: 'text-md/normal',
                                          children: ev.intl.format(ev.t['Zuo+VV'], { name: r })
                                      })
                                  })
                              )
                            : (0, s.openModalLazy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, i.jsx)(e, {
                                          ...t,
                                          ...o,
                                          validationText: r,
                                          instructionText: ev.intl.string(ev.t.abprOD),
                                          errorText: ev.intl.string(ev.t['c2/DS0']),
                                          children: ev.intl.format(ev.t['Zuo+VV'], { name: r })
                                      });
                              });
                    },
                    label: ev.intl.string(ev.t.l3hWPz),
                    ariaLabel: ev.intl.string(ev.t.l3hWPz),
                    icon: (0, i.jsx)(s.TrashIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
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
            case ep.pNK.CLYDE:
            case ep.pNK.INTEGRATION_SETTINGS:
            case ep.pNK.SECURITY:
            case ep.pNK.AUDIT_LOG_FILTER:
            case ep.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case ep.pNK.WEBHOOKS:
            case ep.pNK.EDIT_WEBHOOK:
            case ep.pNK.INTEGRATION_PLATFORM:
            case ep.pNK.CHANNELS_SYNCING_TO_GAMES:
            case ep.pNK.EDIT_CHANNEL_SYNCING:
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
                (0, L.vE)(e);
        }
    }
};
