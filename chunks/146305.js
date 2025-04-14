n.d(t, { Z: () => eI });
var r = n(200651),
    i = n(990547),
    s = n(704215),
    l = n(481060),
    a = n(37234),
    o = n(493544),
    c = n(688465),
    d = n(749681),
    u = n(258971),
    m = n(676317),
    g = n(874993),
    p = n(45966),
    h = n(637853),
    f = n(352981),
    x = n(610403),
    b = n(923726),
    j = n(303737),
    N = n(15030),
    _ = n(220685),
    v = n(536442),
    O = n(50101),
    C = n(575258),
    y = n(276687),
    I = n(594174),
    E = n(585483),
    S = n(823379),
    T = n(434404),
    P = n(360606),
    w = n(946724),
    R = n(999382),
    Z = n(44550),
    D = n(853714),
    A = n(359191),
    W = n(84658),
    k = n(142961),
    L = n(730910),
    M = n(475013),
    G = n(213956),
    U = n(702478),
    B = n(247031),
    F = n(787561),
    z = n(579648),
    H = n(460461),
    V = n(29605),
    Y = n(365307),
    K = n(497666),
    X = n(324330),
    q = n(495300),
    J = n(312397),
    Q = n(651780),
    $ = n(279542),
    ee = n(413335),
    et = n(665324),
    en = n(208150),
    er = n(353398),
    ei = n(365774),
    es = n(803288),
    el = n(804153),
    ea = n(178387),
    eo = n(993097),
    ec = n(486358),
    ed = n(942478),
    eu = n(890861),
    em = n(708510),
    eg = n(237245),
    ep = n(658666),
    eh = n(224726),
    ef = n(308619),
    ex = n(254925),
    eb = n(209402),
    ej = n(981631),
    eN = n(49898),
    e_ = n(135899),
    ev = n(388032),
    eO = n(474913);
function eC(e) {
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
function ey(e, t) {
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
let eI = {
    getSectionDefinition: function (e, t) {
        let eI = (0, f.p)(t.guild.id, 'guild_settings'),
            eE = !1 === t.guild.hasFeature(ej.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(ej.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
            eS =
                eI && eE
                    ? {
                          label: (0, r.jsx)('div', {
                              className: eO.roleSubLabel,
                              children: ev.NW.string(ev.t.Tn7Koq)
                          }),
                          ariaLabel: ev.NW.string(ev.t.Tn7Koq)
                      }
                    : {
                          label: (0, r.jsx)('div', {
                              className: eO.roleSubLabel,
                              children: ev.NW.string(ev.t['KzCF//'])
                          }),
                          ariaLabel: ev.NW.string(ev.t['KzCF//'])
                      },
            eT = t.guild.hasFeature(ej.oNc.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case ej.pNK.PROFILE:
                return {
                    section: ej.pNK.PROFILE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE,
                    label: ev.NW.string(ev.t.txdaxc),
                    ariaLabel: ev.NW.string(ev.t.txdaxc),
                    element: eh.Z,
                    type: o.bT.SCROLLABLE_CUSTOM,
                    notice: {
                        stores: [R.Z],
                        element: ef.Z
                    }
                };
            case ej.pNK.TAG:
                return {
                    section: ej.pNK.TAG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG,
                    label: ev.NW.string(ev.t['2QmKZ2']),
                    ariaLabel: ev.NW.string(ev.t['2QmKZ2']),
                    element: ex.ZP,
                    predicate() {
                        let e = (0, O.gV)(t.guild.id, 'guild_settings');
                        return t.canManageGuild && e;
                    },
                    notice: {
                        stores: [R.Z],
                        element: eb.Z
                    }
                };
            case ej.pNK.ENGAGEMENT:
                return {
                    section: ej.pNK.ENGAGEMENT,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT,
                    label: ev.NW.string(ev.t['6TAHb2']),
                    ariaLabel: ev.NW.string(ev.t['6TAHb2']),
                    element: ec.Z,
                    notice: {
                        stores: [R.Z],
                        element: ed.R
                    }
                };
            case ej.pNK.BOOST_PERKS:
                return {
                    section: ej.pNK.BOOST_PERKS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS,
                    label: ev.NW.string(ev.t.UKgg5O),
                    ariaLabel: ev.NW.string(ev.t.UKgg5O),
                    element: ea.I,
                    notice: {
                        stores: [R.Z, Z.Z],
                        element: eo.C
                    }
                };
            case ej.pNK.INVITES:
                return {
                    section: ej.pNK.INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2,
                    label: ev.NW.string(ev.t.YOt3Oj),
                    ariaLabel: ev.NW.string(ev.t.YOt3Oj),
                    element: eu.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ej.pNK.OVERVIEW:
                return {
                    section: ej.pNK.OVERVIEW,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: ev.NW.string(ev.t['/dp6yc']),
                    ariaLabel: ev.NW.string(ev.t['/dp6yc']),
                    element: J.Z,
                    notice: {
                        stores: [R.Z],
                        element: J.O
                    }
                };
            case ej.pNK.ROLES:
                return {
                    section: ej.pNK.ROLES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: ev.NW.string(ev.t.LPJmLy),
                    element: M.Z,
                    type: o.bT.MINIMAL,
                    ariaLabel: ev.NW.string(ev.t.KXcECw),
                    notice: {
                        stores: [w.Z],
                        element: M._
                    },
                    predicate: () => t.canManageRoles
                };
            case ej.pNK.EMOJI:
                return {
                    section: ej.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ev.NW.string(ev.t.sMOuub),
                    element: V.ZP,
                    predicate: () => t.canManageGuildExpressions
                };
            case ej.pNK.STICKERS:
                return {
                    section: ej.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ev.NW.string(ev.t.R5nQkZ),
                    ariaLabel: ev.NW.string(ev.t.R5nQkZ),
                    element: en.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ej.pNK.SOUNDBOARD:
                return {
                    section: ej.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ev.NW.string(ev.t.OWQNYm),
                    ariaLabel: ev.NW.string(ev.t.OWQNYm),
                    element: et.Z,
                    predicate: () => t.canManageGuildExpressions
                };
            case ej.pNK.WIDGET:
                return {
                    section: ej.pNK.WIDGET,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: ev.NW.string(ev.t.ACjbTk),
                    element: el.Z,
                    predicate: () => t.canManageGuild
                };
            case ej.pNK.GUILD_TEMPLATES:
                return {
                    section: ej.pNK.GUILD_TEMPLATES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, r.jsx)(ei.Z, { showDirtyIndicator: t.showDirtyGuildTemplateIndicator }),
                    ariaLabel: ev.NW.string(ev.t.KUw7Sk),
                    element: er.ZP,
                    notice: {
                        stores: [er.Sf],
                        element: er.Q5
                    },
                    predicate: () => t.canManageGuild
                };
            case ej.pNK.VANITY_URL:
                return {
                    section: ej.pNK.VANITY_URL,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: ev.NW.string(ev.t['5XZKy8']),
                    element: es.Z,
                    notice: {
                        stores: [Z.Z],
                        element: es.T
                    },
                    predicate: () => t.isGuildAdmin
                };
            case ej.pNK.ACCESS:
                return {
                    section: ej.pNK.ACCESS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS,
                    label: ev.NW.string(ev.t.YJlvBA),
                    element: em.O,
                    notice: {
                        stores: [ep.Z],
                        element: eg.w
                    },
                    predicate: () => t.canManageGuild,
                    ariaLabel: ev.NW.string(ev.t.YJlvBA)
                };
            case ej.pNK.INTEGRATIONS:
                return {
                    section: ej.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ev.NW.string(ev.t.CIsNZ2),
                    ariaLabel: ev.NW.string(ev.t.CIsNZ2),
                    element: Y.Z,
                    notice: {
                        stores: [P.default, R.Z],
                        element: Y.j
                    },
                    predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case ej.pNK.APP_DIRECTORY:
                return {
                    section: ej.pNK.APP_DIRECTORY,
                    label: ev.NW.string(ev.t.AKcFUl),
                    ariaLabel: ev.NW.string(ev.t.AKcFUl),
                    onClick() {
                        (0, d.transitionToGlobalDiscovery)({
                            tab: eN.GlobalDiscoveryTab.APPS,
                            newSessionState: {
                                guildId: t.guild.id,
                                entrypoint: {
                                    name: u.xF.GUILD_SETTINGS,
                                    guildSettingsSection: e
                                }
                            }
                        }),
                            (0, a.xf)();
                    }
                };
            case ej.pNK.SAFETY:
                return {
                    section: ej.pNK.SAFETY,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: ev.NW.string(ev.t['suhY+f']),
                    ariaLabel: ev.NW.string(ev.t['suhY+f']),
                    element: G.Z,
                    newIndicatorDismissibleContentTypes: [s.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ej.oNc.COMMUNITY)
                };
            case ej.pNK.MODERATION:
                return {
                    section: ej.pNK.MODERATION,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: ev.NW.string(ev.t['suhY+f']),
                    element: $.ZP,
                    predicate: () => t.canManageGuild && !t.guild.hasFeature(ej.oNc.COMMUNITY)
                };
            case ej.pNK.GUILD_AUTOMOD:
                return {
                    section: ej.pNK.GUILD_AUTOMOD,
                    label: (0, r.jsx)('div', {
                        className: eO.landingPageTabLink,
                        children: ev.NW.string(ev.t.uRelg4)
                    }),
                    ariaLabel: ev.NW.string(ev.t.uRelg4),
                    element: g.Z,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.guild.hasFeature(ej.oNc.COMMUNITY) && ((0, m.Nb)(t.guild.id) || (0, m.ze)(t.guild.id))
                };
            case ej.pNK.AUDIT_LOG:
                return {
                    section: ej.pNK.AUDIT_LOG,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: ev.NW.string(ev.t.SPWLyc),
                    element: D.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canViewAuditLog
                };
            case ej.pNK.BANS:
                return {
                    section: ej.pNK.BANS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: ev.NW.string(ev.t.ZbeITU),
                    element: B.Z,
                    predicate: () => t.canManageBans
                };
            case ej.pNK.COMMUNITY:
                let eP = ev.NW.string(ev.t.ElKTeX);
                return (
                    t.guild.hasFeature(ej.oNc.COMMUNITY) && (eP = t.isGuildSettingsFoundationEnabled ? ev.NW.string(ev.t['8nY2LC']) : ev.NW.string(ev.t['/dp6yc'])),
                    {
                        section: ej.pNK.COMMUNITY,
                        impressionName: t.guild.hasFeature(ej.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                        label: eP,
                        element: F.Z,
                        ariaLabel: eP,
                        newIndicator: !t.guild.hasFeature(ej.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= e_.U3 && v.qc.hasHotspot(v.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                        notice: {
                            stores: [R.Z],
                            element: F.X
                        }
                    }
                );
            case ej.pNK.ONBOARDING:
                return {
                    section: ej.pNK.ONBOARDING,
                    label: ev.NW.string(ev.t.LdxCKy),
                    element: q.Z,
                    ariaLabel: ev.NW.string(ev.t.LdxCKy),
                    newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [s.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [A.Z],
                        element: L.Z
                    },
                    predicate: () => (0, h.wC)(t.guild.id),
                    decoration: (function (e, t) {
                        if (p.Z.getEnabled(e)) return ev.NW.string(ev.t.pPSmxs).toUpperCase();
                        if ((0, k.C)(e)) return ev.NW.string(ev.t.HDF4o6).toUpperCase();
                        let n = W.ug,
                            r = n.findIndex((e) => e === t);
                        if (-1 !== r)
                            return ev.NW.formatToPlainString(ev.t['5r28iY'], {
                                count: r + 1,
                                total: n.length
                            });
                    })(t.guild.id, t.onboardingStep)
                };
            case ej.pNK.ANALYTICS:
                return {
                    section: ej.pNK.ANALYTICS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: ev.NW.string(ev.t['0wWfUF']),
                    ariaLabel: ev.NW.string(ev.t['0wWfUF']),
                    element: U.Z,
                    predicate: () => eT
                };
            case ej.pNK.DISCOVERY_LANDING_PAGE:
                return {
                    section: ej.pNK.DISCOVERY_LANDING_PAGE,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, r.jsxs)('div', {
                        className: eO.landingPageTabLink,
                        children: [ev.NW.string(ev.t.kGlQGB), ' ', (0, r.jsx)(c.Z, {})]
                    }),
                    ariaLabel: ev.NW.string(ev.t.kGlQGB),
                    element: H.Z,
                    notice: {
                        stores: [R.Z],
                        element: H.J
                    },
                    type: o.bT.CUSTOM,
                    predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.hasFeature(ej.oNc.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished));
                    }
                };
            case ej.pNK.COMMUNITY_WELCOME:
                return {
                    section: ej.pNK.COMMUNITY_WELCOME,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: ev.NW.string(ev.t['2rkmDg']),
                    ariaLabel: ev.NW.string(ev.t['2rkmDg']),
                    element: z.Z,
                    notice: {
                        stores: [C.Z],
                        element: y.Z
                    },
                    predicate: () => t.canManageGuild && t.guild.hasFeature(ej.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(ej.oNc.GUILD_SERVER_GUIDE)
                };
            case ej.pNK.ROLE_SUBSCRIPTIONS:
                return ey(eC({}, eS), {
                    section: ej.pNK.ROLE_SUBSCRIPTIONS,
                    element: N.Z,
                    type: o.bT.CUSTOM,
                    predicate: t.monetizationPredicate,
                    newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild) ? [s.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                });
            case ej.pNK.GUILD_PRODUCTS:
                return {
                    section: ej.pNK.GUILD_PRODUCTS,
                    label: ev.NW.string(ev.t.X6h2g4),
                    ariaLabel: ev.NW.string(ev.t.X6h2g4),
                    element: x.Z,
                    predicate: () => t.monetizationPredicate() && (0, f.p)(t.guild.id, 'guild_product_settings_predicate') && (0, b.sy)(t.guild)
                };
            case ej.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: ej.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: ev.NW.string(ev.t.ipTYsr),
                    ariaLabel: ev.NW.string(ev.t.ipTYsr),
                    element: _.Z,
                    predicate: () => t.monetizationPredicate() && (0, b.sy)(t.guild)
                };
            case ej.pNK.GUILD_PREMIUM:
                return {
                    section: ej.pNK.GUILD_PREMIUM,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: ev.NW.string(ev.t['8+VX4+']),
                    ariaLabel: ev.NW.string(ev.t['8+VX4+']),
                    element: Q.Z,
                    className: eO.serverBoostTabItem,
                    icon: (0, r.jsx)(ee.Z, { className: eO.icon })
                };
            case ej.pNK.MEMBERS:
                return {
                    section: ej.pNK.MEMBERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, r.jsx)(X.$, {}),
                    ariaLabel: ev.NW.string(ev.t['9Oq93t']),
                    element: X.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canAccessMembersPage
                };
            case ej.pNK.INSTANT_INVITES:
                return {
                    section: ej.pNK.INSTANT_INVITES,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: ev.NW.string(ev.t['9F90iY']),
                    element: K.Z,
                    type: o.bT.CUSTOM,
                    predicate: () => t.canManageGuild
                };
            case ej.pNK.DELETE:
                return {
                    section: ej.pNK.DELETE,
                    onClick() {
                        let e = I.default.getCurrentUser();
                        if (null == e) return;
                        let i = t.guild.toString(),
                            s = {
                                header: ev.NW.formatToPlainString(ev.t.us7mCw, { name: i }),
                                confirmText: ev.NW.string(ev.t.l3hWPz),
                                cancelText: ev.NW.string(ev.t['ETE/oK']),
                                onConfirm: () => {
                                    E.S.subscribeOnce(ej.CkL.LAYER_POP_COMPLETE, () => {
                                        T.Z.deleteGuild(t.guild.id, i);
                                    }),
                                        (0, a.xf)();
                                }
                            };
                        e.mfaEnabled
                            ? (0, l.h7j)((e) =>
                                  (0, r.jsx)(
                                      l.ConfirmModal,
                                      ey(eC({}, e, s), {
                                          children: (0, r.jsx)(l.Text, {
                                              variant: 'text-md/normal',
                                              children: ev.NW.format(ev.t['Zuo+VV'], { name: i })
                                          })
                                      })
                                  )
                              )
                            : (0, l.ZDy)(async () => {
                                  let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          ey(eC({}, t, s), {
                                              validationText: i,
                                              instructionText: ev.NW.string(ev.t.abprOD),
                                              errorText: ev.NW.string(ev.t['c2/DS0']),
                                              children: ev.NW.format(ev.t['Zuo+VV'], { name: i })
                                          })
                                      );
                              });
                    },
                    label: ev.NW.string(ev.t.l3hWPz),
                    ariaLabel: ev.NW.string(ev.t.l3hWPz),
                    icon: (0, r.jsx)(l.XHJ, {
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
                (0, S.vE)(e);
        }
    }
};
