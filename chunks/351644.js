n.d(t, { Z: () => U }), n(653041), n(566702), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(658722),
    s = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    p = n(37234),
    m = n(410030),
    b = n(726542),
    g = n(835473),
    f = n(231757),
    h = n(600164),
    x = n(749681),
    j = n(258971),
    N = n(685929),
    O = n(163400),
    v = n(553795),
    y = n(496675),
    _ = n(626135),
    C = n(768581),
    I = n(63063),
    S = n(709054),
    E = n(51144),
    P = n(466070),
    w = n(585835),
    T = n(997787),
    Z = n(981631),
    W = n(49898),
    k = n(388032),
    A = n(709677),
    D = n(509399),
    R = n(790904),
    L = n(609182);
function M(e, t) {
    return t.includes(e);
}
function B(e) {
    let { query: t, setQuery: n } = e,
        l = i.useCallback(
            (e) => {
                n(e);
            },
            [n]
        );
    return (0, r.jsx)('div', {
        className: A.searchContainer,
        children: (0, r.jsx)(u.E1j, {
            size: u.E1j.Sizes.MEDIUM,
            query: t,
            onChange: l,
            onClear: () => n(''),
            placeholder: k.NW.string(k.t['5prvKS']),
            'aria-label': k.NW.string(k.t['5prvKS'])
        })
    });
}
function U(e) {
    var t, n, l, a;
    let { guild: U, channel: z, applicationIntegrations: H, builtInIntegrations: G, customWebhooks: F, followedChannelWebhooks: V, isLoadingWebhooks: K, canCreateWebhook: q, onManageBuiltIn: Y, onManageCustomWebhooks: X, onManageFollowedChannels: $, onManageApplication: J, onManageLobbiesLinked: Q } = e,
        ee = (0, m.ZP)(),
        [et, en] = i.useState(''),
        { isFetchingConnections: er, accounts: ei } = (0, c.cj)(
            [v.Z],
            () => ({
                isFetchingConnections: v.Z.isFetching(),
                accounts: v.Z.getAccounts()
            }),
            []
        ),
        { canManageWebhooks: el, canManageGuild: eo } = (0, c.cj)(
            [y.Z],
            () => ({
                canManageWebhooks: (null != U && y.Z.can(Z.Plq.MANAGE_WEBHOOKS, U)) || (null != z && y.Z.can(Z.Plq.MANAGE_WEBHOOKS, z)),
                canManageGuild: null != U && null == z && y.Z.can(Z.Plq.MANAGE_GUILD, U)
            }),
            [U, z]
        ),
        ea = (0, N.Y)(z),
        es = (0, g.q)(null == z || null == (t = z.linkedLobby) ? void 0 : t.application_id),
        ec = (0, O.F)(null == U ? void 0 : U.id),
        {
            availableTwitchIntegrations: ed,
            availableYoutubeIntegrations: eu,
            guildTwitchIntegrations: ep,
            guildYoutubeIntegrations: em
        } = i.useMemo(() => {
            var e, t, n, r, i, l, o, a;
            return {
                availableTwitchIntegrations: null != (i = null == (e = G.twitch) ? void 0 : e.length) ? i : 0,
                availableYoutubeIntegrations: null != (l = null == (t = G.youtube) ? void 0 : t.length) ? l : 0,
                guildTwitchIntegrations: null != (o = null == (n = G.twitch) ? void 0 : n.filter((e) => e.enabled).length) ? o : 0,
                guildYoutubeIntegrations: null != (a = null == (r = G.youtube) ? void 0 : r.filter((e) => e.enabled).length) ? a : 0
            };
        }, [G.twitch, G.youtube]),
        { showTwitchCard: eb, showYoutubeCard: eg } = i.useMemo(() => {
            if (er || !eo)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1
                };
            let e = null == U ? void 0 : U.hasFeature(Z.oNc.COMMUNITY),
                t = ei.filter((e) => e.type === Z.ABu.TWITCH).length > 0,
                n = ei.filter((e) => e.type === Z.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: ed > 0 || (!t && e),
                showYoutubeCard: eu > 0 || (!n && e)
            };
        }, [er, eo, U, ei, ed, eu]),
        ef = Object.values(H).length,
        eh = i.useMemo(() => {
            let e = ef > 100 ? M : s();
            return Object.values(H).filter((t) => {
                var n;
                let { application: r } = t;
                return !!('' === (n = (n = et).trim().toLowerCase()) || r.id === n || e(n, r.name.toLowerCase()) || (null != r.bot && e(n, r.bot.username.toLowerCase())));
            });
        }, [H, ef, et]),
        ex = (0, c.e7)(
            [T.Z],
            () => {
                if (null != U) return eh.find((e) => T.Z.canShowOverviewTooltip(U.id, e.integration.id));
            },
            [eh, U]
        ),
        ej = i.useMemo(() => (void 0 !== ex ? [ex, ...eh.filter((e) => e.integration.id !== ex.integration.id)] : eh), [eh, ex]),
        eN = (0, u.s9z)(u.JQI),
        [eO, ev] = i.useState(!1),
        ey = i.useRef(0),
        e_ = () => {
            ev(!0),
                clearTimeout(ey.current),
                (ey.current = setTimeout(() => {
                    ev(!1);
                }, 200));
        };
    i.useEffect(() => (window.addEventListener('scroll', e_, !0), () => window.removeEventListener('scroll', e_)));
    let eC = ej.map((e) => {
            var t;
            let n = !eN && e.integration.id === (null == ex ? void 0 : ex.integration.id),
                { application: i, integration: l } = e,
                o = [];
            return (
                null != l.user
                    ? o.push({
                          icon: u.T39,
                          text: k.NW.formatToPlainString(k.t.Nu9sam, {
                              timestamp: S.default.extractTimestamp(l.id),
                              user: E.ZP.getUserTag(l.user)
                          })
                      })
                    : o.push({
                          icon: u.T39,
                          text: k.NW.formatToPlainString(k.t.gcdJ8P, { timestamp: S.default.extractTimestamp(l.id) })
                      }),
                (0, r.jsx)(
                    w.Z,
                    {
                        name: i.name,
                        imageSrc: null != (t = i.getIconURL(48)) ? t : C.pK['0'],
                        integration: e,
                        buttonText: k.NW.string(k.t['Z/qRnJ']),
                        hasNextSection: !0,
                        onButtonClick: () => {
                            J(i.id),
                                _.default.track(Z.rMx.APP_MANAGE_CTA_CLICKED, {
                                    application_id: i.id,
                                    guild_id: null == U ? void 0 : U.id,
                                    is_admin: null != U ? y.Z.can(Z.Plq.ADMINISTRATOR, U) : void 0
                                });
                        },
                        details: o,
                        guildId: null == U ? void 0 : U.id,
                        isScrolling: eO,
                        canShowMigrationTooltip: n
                    },
                    'integration-'.concat(l.id)
                )
            );
        }),
        eI = (0, r.jsx)('div', { className: A.footerImage });
    0 === eC.length &&
        eo &&
        ((eC = (function (e, t, n) {
            let i = (0, d.wj)(e) ? R : L,
                l = (0, r.jsxs)(h.Z, {
                    direction: h.Z.Direction.VERTICAL,
                    align: h.Z.Align.CENTER,
                    className: A.emptyStateWrapper,
                    children: [
                        (0, r.jsx)('img', {
                            alt: '',
                            src: i,
                            className: A.emptyStateSearchImage
                        }),
                        (0, r.jsx)(u.Zbd, {
                            editable: !0,
                            className: A.emptyStateCard,
                            children: (0, r.jsx)(u.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: k.NW.string(k.t.EVWFNj)
                            })
                        })
                    ]
                }),
                o = (0, r.jsx)(u.Zbd, {
                    editable: !0,
                    className: A.emptyStateCard,
                    children: (0, r.jsxs)('div', {
                        className: A.emptyStateText,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: D,
                                className: A.emptyStateImage
                            }),
                            (0, r.jsx)(u.X6q, {
                                color: 'header-secondary',
                                variant: 'heading-xl/bold',
                                children: k.NW.string(k.t.nQQeFB)
                            }),
                            (0, r.jsx)(u.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: k.NW.format(k.t.snvKU1, {
                                    handleGoToAppDirectory: () => {
                                        (0, x.transitionToGlobalDiscovery)({
                                            tab: W.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                entrypoint: { name: j.xF.GUILD_INTEGRATION_SETTINGS },
                                                guildId: n
                                            }
                                        }),
                                            (0, p.xf)();
                                    }
                                })
                            })
                        ]
                    })
                });
            return t > 0 ? l : o;
        })(ee, ef, null == U ? void 0 : U.id)),
        (eI = null));
    let eS = I.Z.getArticleURL(Z.BhN.INTEGRATIONS),
        eE = null != z ? k.t.YV0vh4 : k.t.FnZEJi,
        eP = [];
    if (el) {
        let e, t, i, o, a;
        eP.push(
            ((n = F.length),
            n > 0 ? (t = (0, r.jsx)(u.LJT, { size: 'xs' })) : (e = k.NW.string(k.t.lOQqJC)),
            (0, r.jsx)(
                w.Z,
                {
                    name: k.NW.string(k.t.xOg4SE),
                    icon: u.tYf,
                    buttonText: e,
                    buttonDisabled: !q,
                    trailing: t,
                    onButtonClick: X,
                    hasNextSection: n > 0,
                    details: [{ text: k.NW.formatToPlainString(k.t['6HqDfX'], { count: n }) }]
                },
                'webhooks'
            ))
        ),
            (null == z ? void 0 : z.type) === Z.d4z.GUILD_VOICE ||
                ((null == z ? void 0 : z.type) != null && Z.TPd.GUILD_THREADS_ONLY.has(z.type)) ||
                eP.push(
                    ((l = V.length),
                    l > 0 ? ((a = (0, r.jsx)(u.LJT, { size: 'xs' })), (o = $)) : ((i = k.NW.string(k.t['ZwSt+f'])), (o = () => open(I.Z.getArticleURL(Z.BhN.CHANNEL_FOLLOWING)))),
                    (0, r.jsx)(
                        w.Z,
                        {
                            name: k.NW.string(k.t.OrV60t),
                            icon: u.AsW,
                            buttonText: i,
                            onButtonClick: o,
                            trailing: a,
                            hasNextSection: l > 0,
                            details: [{ text: k.NW.formatToPlainString(k.t.JUNGIS, { count: l }) }]
                        },
                        'channels-followed'
                    ))
                );
    }
    null == z &&
        ec.length > 0 &&
        eP.push(
            ((a = ec.length),
            (0, r.jsx)(
                w.Z,
                {
                    name: k.NW.string(k.t.tqtDXF),
                    icon: u.DuK,
                    trailing: (0, r.jsx)(u.LJT, { size: 'xs' }),
                    onButtonClick: Q,
                    hasNextSection: !0,
                    details: [{ text: k.NW.formatToPlainString(k.t['puxS4+'], { count: a }) }]
                },
                'channels-syncing'
            ))
        ),
        eb &&
            eP.push(
                (function (e, t, n) {
                    let i,
                        l,
                        o,
                        a,
                        s = b.Z.get(Z.ABu.TWITCH);
                    return (
                        e > 0
                            ? ((a = (0, r.jsx)(u.LJT, { size: 'xs' })), (l = k.NW.formatToPlainString(k.t.FFpnT0, { count: t })), (o = () => n(Z.ABu.TWITCH)))
                            : ((i = k.NW.string(k.t.bkvGkp)),
                              (l = k.NW.string(k.t.Qq3X2N)),
                              (o = () =>
                                  (0, f.Z)({
                                      platformType: Z.ABu.TWITCH,
                                      location: 'Integration Settings'
                                  }))),
                        (0, r.jsx)(
                            w.Z,
                            {
                                name: k.NW.string(k.t.q4pBGx),
                                icon: s.icon.whiteSVG,
                                iconBackgroundColor: s.color,
                                iconClassName: A.platformIcon,
                                buttonText: i,
                                onButtonClick: o,
                                trailing: a,
                                hasNextSection: e > 0,
                                details: [{ text: l }]
                            },
                            'integrations-twitch'
                        )
                    );
                })(ed, ep, Y)
            ),
        eg &&
            eP.push(
                (function (e, t, n) {
                    let i,
                        l,
                        o,
                        a,
                        s = b.Z.get(Z.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((a = (0, r.jsx)(u.LJT, { size: 'xs' })), (l = k.NW.formatToPlainString(k.t.b2g5vL, { count: t })), (o = () => n(Z.ABu.YOUTUBE)))
                            : ((i = k.NW.string(k.t.xEyQ3d)),
                              (l = k.NW.string(k.t.T0ivgY)),
                              (o = () =>
                                  (0, f.Z)({
                                      platformType: Z.ABu.YOUTUBE,
                                      location: 'Integration Settings'
                                  }))),
                        (0, r.jsx)(
                            w.Z,
                            {
                                name: k.NW.string(k.t.aS6cKy),
                                icon: s.icon.whiteSVG,
                                iconBackgroundColor: s.color,
                                iconClassName: A.platformIcon,
                                buttonText: i,
                                onButtonClick: o,
                                trailing: a,
                                hasNextSection: e > 0,
                                details: [{ text: l }]
                            },
                            'integrations-youtube'
                        )
                    );
                })(eu, em, Y)
            );
    let ew = null != z && ea && null != es;
    return (0, r.jsxs)(u.hjN, {
        className: o()(null != eI ? A.footerPlaceholder : null),
        children: [
            (0, r.jsx)(u.R94, {
                type: u.geA.DESCRIPTION,
                children: k.NW.format(eE, { helpdeskArticle: eS })
            }),
            (0, r.jsx)(u.$i$, { className: A.divider }),
            K || er || null == U
                ? (0, r.jsx)(u.$jN, {
                      className: A.__invalid_spinner,
                      type: u.$jN.Type.SPINNING_CIRCLE
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          eP,
                          ew &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      eP.length > 0 ? (0, r.jsx)(u.$i$, { className: A.divider }) : null,
                                      (0, r.jsx)(u.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: A.sectionHeader,
                                          children: k.NW.string(k.t.oAvIAg)
                                      }),
                                      (0, r.jsx)(P.t, {
                                          channel: z,
                                          application: es,
                                          showApplicationImage: !0,
                                          name: es.name,
                                          hasNextSection: !0,
                                          iconClassName: A.linkedLobbyIcon,
                                          trailing: (0, r.jsx)(u.vdY, { size: 'xs' })
                                      })
                                  ]
                              }),
                          eo
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        eP.length > 0 || ew ? (0, r.jsx)(u.$i$, { className: A.divider }) : null,
                                        (0, r.jsx)(u.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: A.sectionHeader,
                                            children: k.NW.string(k.t.pUBKho)
                                        }),
                                        ef > 4
                                            ? (0, r.jsx)(B, {
                                                  query: et,
                                                  setQuery: en
                                              })
                                            : null,
                                        eC
                                    ]
                                })
                              : null,
                          eI
                      ]
                  })
        ]
    });
}
