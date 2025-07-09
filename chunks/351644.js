(n.d(t, { Z: () => W }), n(539854), n(781311), n(388685));
var r = n(255367),
    i = n(73800),
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
    O = n(685929),
    v = n(163400),
    y = n(553795),
    _ = n(496675),
    C = n(626135),
    N = n(768581),
    I = n(63063),
    E = n(709054),
    S = n(51144),
    T = n(466070),
    w = n(585835),
    P = n(997787),
    Z = n(981631),
    A = n(49898),
    k = n(388032),
    D = n(709677),
    R = n(509399),
    L = n(790904),
    M = n(609182);
function B(e, t) {
    return t.includes(e);
}
function U(e) {
    let { query: t, setQuery: n } = e,
        l = i.useCallback(
            (e) => {
                n(e);
            },
            [n]
        );
    return (0, r.jsx)('div', {
        className: D.searchContainer,
        children: (0, r.jsx)(u.E1j, {
            size: u.E1j.Sizes.MEDIUM,
            query: t,
            onChange: l,
            onClear: () => n(''),
            placeholder: k.intl.string(k.t['5prvKS']),
            'aria-label': k.intl.string(k.t['5prvKS'])
        })
    });
}
function W(e) {
    var t, n, l, a;
    let { guild: W, channel: H, applicationIntegrations: G, builtInIntegrations: z, customWebhooks: F, followedChannelWebhooks: V, isLoadingWebhooks: K, canCreateWebhook: q, onManageBuiltIn: Y, onManageCustomWebhooks: X, onManageFollowedChannels: $, onManageApplication: J, onManageLobbiesLinked: Q } = e,
        ee = (0, m.ZP)(),
        [et, en] = i.useState(''),
        { isFetchingConnections: er, accounts: ei } = (0, c.cj)(
            [y.Z],
            () => ({
                isFetchingConnections: y.Z.isFetching(),
                accounts: y.Z.getAccounts()
            }),
            []
        ),
        { canManageWebhooks: el, canManageGuild: eo } = (0, c.cj)(
            [_.Z],
            () => ({
                canManageWebhooks: (null != W && _.Z.can(Z.Plq.MANAGE_WEBHOOKS, W)) || (null != H && _.Z.can(Z.Plq.MANAGE_WEBHOOKS, H)),
                canManageGuild: null != W && null == H && _.Z.can(Z.Plq.MANAGE_GUILD, W)
            }),
            [W, H]
        ),
        ea = (0, O.Y)(H),
        es = (0, g.q)(null == H || null == (t = H.linkedLobby) ? void 0 : t.application_id),
        ec = (0, v.F)(null == W ? void 0 : W.id),
        {
            availableTwitchIntegrations: ed,
            availableYoutubeIntegrations: eu,
            guildTwitchIntegrations: ep,
            guildYoutubeIntegrations: em
        } = i.useMemo(() => {
            var e, t, n, r, i, l, o, a;
            return {
                availableTwitchIntegrations: null != (i = null == (e = z.twitch) ? void 0 : e.length) ? i : 0,
                availableYoutubeIntegrations: null != (l = null == (t = z.youtube) ? void 0 : t.length) ? l : 0,
                guildTwitchIntegrations: null != (o = null == (n = z.twitch) ? void 0 : n.filter((e) => e.enabled).length) ? o : 0,
                guildYoutubeIntegrations: null != (a = null == (r = z.youtube) ? void 0 : r.filter((e) => e.enabled).length) ? a : 0
            };
        }, [z.twitch, z.youtube]),
        { showTwitchCard: eb, showYoutubeCard: eg } = i.useMemo(() => {
            if (er || !eo)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1
                };
            let e = null == W ? void 0 : W.features.has(Z.oNc.COMMUNITY),
                t = ei.filter((e) => e.type === Z.ABu.TWITCH).length > 0,
                n = ei.filter((e) => e.type === Z.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: ed > 0 || (!t && e),
                showYoutubeCard: eu > 0 || (!n && e)
            };
        }, [er, eo, W, ei, ed, eu]),
        ef = Object.values(G).length,
        eh = i.useMemo(() => {
            let e = ef > 100 ? B : s();
            return Object.values(G).filter((t) => {
                var n;
                let { application: r } = t;
                return !!('' === (n = (n = et).trim().toLowerCase()) || r.id === n || e(n, r.name.toLowerCase()) || (null != r.bot && e(n, r.bot.username.toLowerCase())));
            });
        }, [G, ef, et]),
        ex = (0, c.e7)(
            [P.Z],
            () => {
                if (null != W) return eh.find((e) => P.Z.canShowOverviewTooltip(W.id, e.integration.id));
            },
            [eh, W]
        ),
        ej = i.useMemo(() => (void 0 !== ex ? [ex, ...eh.filter((e) => e.integration.id !== ex.integration.id)] : eh), [eh, ex]),
        eO = (0, u.s9z)(u.JQI),
        [ev, ey] = i.useState(!1),
        e_ = i.useRef(0),
        eC = () => {
            (ey(!0),
                clearTimeout(e_.current),
                (e_.current = setTimeout(() => {
                    ey(!1);
                }, 200)));
        };
    i.useEffect(() => (window.addEventListener('scroll', eC, !0), () => window.removeEventListener('scroll', eC)));
    let eN = ej.map((e) => {
            var t;
            let n = !eO && e.integration.id === (null == ex ? void 0 : ex.integration.id),
                { application: i, integration: l } = e,
                o = [];
            return (
                null != l.user
                    ? o.push({
                          icon: u.T39,
                          text: k.intl.formatToPlainString(k.t.Nu9sam, {
                              timestamp: E.default.extractTimestamp(l.id),
                              user: S.ZP.getUserTag(l.user)
                          })
                      })
                    : o.push({
                          icon: u.T39,
                          text: k.intl.formatToPlainString(k.t.gcdJ8P, { timestamp: E.default.extractTimestamp(l.id) })
                      }),
                (0, r.jsx)(
                    w.Z,
                    {
                        name: i.name,
                        imageSrc: null != (t = i.getIconURL(48)) ? t : N.pK['0'],
                        integration: e,
                        buttonText: k.intl.string(k.t['Z/qRnJ']),
                        hasNextSection: !0,
                        onButtonClick: () => {
                            (J(i.id),
                                C.default.track(Z.rMx.APP_MANAGE_CTA_CLICKED, {
                                    application_id: i.id,
                                    guild_id: null == W ? void 0 : W.id,
                                    is_admin: null != W ? _.Z.can(Z.Plq.ADMINISTRATOR, W) : void 0
                                }));
                        },
                        details: o,
                        guildId: null == W ? void 0 : W.id,
                        isScrolling: ev,
                        canShowMigrationTooltip: n
                    },
                    'integration-'.concat(l.id)
                )
            );
        }),
        eI = (0, r.jsx)('div', { className: D.footerImage });
    0 === eN.length &&
        eo &&
        ((eN = (function (e, t, n) {
            let i = (0, d.wj)(e) ? L : M,
                l = (0, r.jsxs)(h.Z, {
                    direction: h.Z.Direction.VERTICAL,
                    align: h.Z.Align.CENTER,
                    className: D.emptyStateWrapper,
                    children: [
                        (0, r.jsx)('img', {
                            alt: '',
                            src: i,
                            className: D.emptyStateSearchImage
                        }),
                        (0, r.jsx)(u.Zbd, {
                            editable: !0,
                            className: D.emptyStateCard,
                            children: (0, r.jsx)(u.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: k.intl.string(k.t.EVWFNj)
                            })
                        })
                    ]
                }),
                o = (0, r.jsx)(u.Zbd, {
                    editable: !0,
                    className: D.emptyStateCard,
                    children: (0, r.jsxs)('div', {
                        className: D.emptyStateText,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: R,
                                className: D.emptyStateImage
                            }),
                            (0, r.jsx)(u.X6q, {
                                color: 'header-secondary',
                                variant: 'heading-xl/bold',
                                children: k.intl.string(k.t.nQQeFB)
                            }),
                            (0, r.jsx)(u.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: k.intl.format(k.t.snvKU1, {
                                    handleGoToAppDirectory: () => {
                                        ((0, x.transitionToGlobalDiscovery)({
                                            tab: A.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                entrypoint: { name: j.xF.GUILD_INTEGRATION_SETTINGS },
                                                guildId: n
                                            }
                                        }),
                                            (0, p.xf)());
                                    }
                                })
                            })
                        ]
                    })
                });
            return t > 0 ? l : o;
        })(ee, ef, null == W ? void 0 : W.id)),
        (eI = null));
    let eE = I.Z.getArticleURL(Z.BhN.INTEGRATIONS),
        eS = null != H ? k.t.YV0vh4 : k.t.FnZEJi,
        eT = [];
    if (el) {
        let e, t, i, o, a;
        (eT.push(
            ((n = F.length),
            n > 0 ? (t = (0, r.jsx)(u.LJT, { size: 'xs' })) : (e = k.intl.string(k.t.lOQqJC)),
            (0, r.jsx)(
                w.Z,
                {
                    name: k.intl.string(k.t.xOg4SE),
                    icon: u.tYf,
                    buttonText: e,
                    buttonDisabled: !q,
                    trailing: t,
                    onButtonClick: X,
                    hasNextSection: n > 0,
                    details: [{ text: k.intl.formatToPlainString(k.t['6HqDfX'], { count: n }) }]
                },
                'webhooks'
            ))
        ),
            (null == H ? void 0 : H.type) === Z.d4z.GUILD_VOICE ||
                ((null == H ? void 0 : H.type) != null && Z.TPd.GUILD_THREADS_ONLY.has(H.type)) ||
                eT.push(
                    ((l = V.length),
                    l > 0 ? ((a = (0, r.jsx)(u.LJT, { size: 'xs' })), (o = $)) : ((i = k.intl.string(k.t['ZwSt+f'])), (o = () => open(I.Z.getArticleURL(Z.BhN.CHANNEL_FOLLOWING)))),
                    (0, r.jsx)(
                        w.Z,
                        {
                            name: k.intl.string(k.t.OrV60t),
                            icon: u.AsW,
                            buttonText: i,
                            onButtonClick: o,
                            trailing: a,
                            hasNextSection: l > 0,
                            details: [{ text: k.intl.formatToPlainString(k.t.JUNGIS, { count: l }) }]
                        },
                        'channels-followed'
                    ))
                ));
    }
    (null == H &&
        ec.length > 0 &&
        eT.push(
            ((a = ec.length),
            (0, r.jsx)(
                w.Z,
                {
                    name: k.intl.string(k.t.tqtDXF),
                    icon: u.DuK,
                    trailing: (0, r.jsx)(u.LJT, { size: 'xs' }),
                    onButtonClick: Q,
                    hasNextSection: !0,
                    details: [{ text: k.intl.formatToPlainString(k.t['puxS4+'], { count: a }) }]
                },
                'channels-syncing'
            ))
        ),
        eb &&
            eT.push(
                (function (e, t, n) {
                    let i,
                        l,
                        o,
                        a,
                        s = b.Z.get(Z.ABu.TWITCH);
                    return (
                        e > 0
                            ? ((a = (0, r.jsx)(u.LJT, { size: 'xs' })), (l = k.intl.formatToPlainString(k.t.FFpnT0, { count: t })), (o = () => n(Z.ABu.TWITCH)))
                            : ((i = k.intl.string(k.t.bkvGkp)),
                              (l = k.intl.string(k.t.Qq3X2N)),
                              (o = () =>
                                  (0, f.Z)({
                                      platformType: Z.ABu.TWITCH,
                                      location: 'Integration Settings'
                                  }))),
                        (0, r.jsx)(
                            w.Z,
                            {
                                name: k.intl.string(k.t.q4pBGx),
                                icon: s.icon.whiteSVG,
                                iconBackgroundColor: s.color,
                                iconClassName: D.platformIcon,
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
            eT.push(
                (function (e, t, n) {
                    let i,
                        l,
                        o,
                        a,
                        s = b.Z.get(Z.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((a = (0, r.jsx)(u.LJT, { size: 'xs' })), (l = k.intl.formatToPlainString(k.t.b2g5vL, { count: t })), (o = () => n(Z.ABu.YOUTUBE)))
                            : ((i = k.intl.string(k.t.xEyQ3d)),
                              (l = k.intl.string(k.t.T0ivgY)),
                              (o = () =>
                                  (0, f.Z)({
                                      platformType: Z.ABu.YOUTUBE,
                                      location: 'Integration Settings'
                                  }))),
                        (0, r.jsx)(
                            w.Z,
                            {
                                name: k.intl.string(k.t.aS6cKy),
                                icon: s.icon.whiteSVG,
                                iconBackgroundColor: s.color,
                                iconClassName: D.platformIcon,
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
            ));
    let ew = null != H && ea && null != es;
    return (0, r.jsxs)(u.hjN, {
        className: o()(null != eI ? D.footerPlaceholder : null),
        children: [
            (0, r.jsx)(u.R94, {
                type: u.geA.DESCRIPTION,
                children: k.intl.format(eS, { helpdeskArticle: eE })
            }),
            (0, r.jsx)(u.$i$, { className: D.divider }),
            K || er || null == W
                ? (0, r.jsx)(u.$jN, {
                      className: D.__invalid_spinner,
                      type: u.$jN.Type.SPINNING_CIRCLE
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          eT,
                          ew &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      eT.length > 0 ? (0, r.jsx)(u.$i$, { className: D.divider }) : null,
                                      (0, r.jsx)(u.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: D.sectionHeader,
                                          children: k.intl.string(k.t.oAvIAg)
                                      }),
                                      (0, r.jsx)(T.t, {
                                          channel: H,
                                          application: es,
                                          showApplicationImage: !0,
                                          name: es.name,
                                          hasNextSection: !0,
                                          iconClassName: D.linkedLobbyIcon,
                                          trailing: (0, r.jsx)(u.vdY, { size: 'xs' })
                                      })
                                  ]
                              }),
                          eo
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        eT.length > 0 || ew ? (0, r.jsx)(u.$i$, { className: D.divider }) : null,
                                        (0, r.jsx)(u.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: D.sectionHeader,
                                            children: k.intl.string(k.t.pUBKho)
                                        }),
                                        ef > 4
                                            ? (0, r.jsx)(U, {
                                                  query: et,
                                                  setQuery: en
                                              })
                                            : null,
                                        eN
                                    ]
                                })
                              : null,
                          eI
                      ]
                  })
        ]
    });
}
