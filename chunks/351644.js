n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(658722),
    s = n.n(o),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(37234),
    h = n(410030),
    p = n(726542),
    g = n(132871),
    x = n(147890),
    f = n(835473),
    b = n(231757),
    v = n(600164),
    C = n(685929),
    N = n(163400),
    I = n(553795),
    j = n(496675),
    _ = n(626135),
    T = n(768581),
    S = n(63063),
    Z = n(709054),
    E = n(51144),
    y = n(327934),
    A = n(585835),
    R = n(997787),
    k = n(981631),
    L = n(388032),
    O = n(341701),
    w = n(509399),
    M = n(790904),
    B = n(609182);
function P(e, t) {
    return t.includes(e);
}
function D(e) {
    let { query: t, setQuery: n } = e,
        r = l.useCallback(
            (e) => {
                n(e);
            },
            [n]
        );
    return (0, i.jsx)('div', {
        className: O.searchContainer,
        children: (0, i.jsx)(u.SearchBar, {
            size: u.SearchBar.Sizes.MEDIUM,
            query: t,
            onChange: r,
            onClear: () => n(''),
            placeholder: L.intl.string(L.t['5prvKS']),
            'aria-label': L.intl.string(L.t['5prvKS'])
        })
    });
}
function U(e) {
    var t, n, r, o, U, F, W, H;
    let { guild: G, channel: z, applicationIntegrations: V, builtInIntegrations: K, customWebhooks: q, followedChannelWebhooks: Y, isLoadingWebhooks: J, canCreateWebhook: X, onManageBuiltIn: Q, onManageCustomWebhooks: $, onManageFollowedChannels: ee, onManageApplication: et, onManageChannelsSyncing: en } = e,
        ei = (0, h.ZP)(),
        [el, er] = l.useState(''),
        { isFetchingConnections: ea, accounts: eo } = (0, c.cj)(
            [I.Z],
            () => ({
                isFetchingConnections: I.Z.isFetching(),
                accounts: I.Z.getAccounts()
            }),
            []
        ),
        { canManageWebhooks: es, canManageGuild: ec } = (0, c.cj)(
            [j.Z],
            () => ({
                canManageWebhooks: (null != G && j.Z.can(k.Plq.MANAGE_WEBHOOKS, G)) || (null != z && j.Z.can(k.Plq.MANAGE_WEBHOOKS, z)),
                canManageGuild: null != G && null == z && j.Z.can(k.Plq.MANAGE_GUILD, G)
            }),
            [G, z]
        ),
        ed = (0, C.Y)(z),
        eu = (0, f.q)(null == z ? void 0 : null === (t = z.linkedLobby) || void 0 === t ? void 0 : t.application_id),
        em = (0, N.F)(null == G ? void 0 : G.id),
        {
            availableTwitchIntegrations: eh,
            availableYoutubeIntegrations: ep,
            guildTwitchIntegrations: eg,
            guildYoutubeIntegrations: ex
        } = l.useMemo(() => {
            var e, t, n, i, l, r, a, o;
            return {
                availableTwitchIntegrations: null !== (l = null === (e = K.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== l ? l : 0,
                availableYoutubeIntegrations: null !== (r = null === (t = K.youtube) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0,
                guildTwitchIntegrations: null !== (a = null === (n = K.twitch) || void 0 === n ? void 0 : n.filter((e) => e.enabled).length) && void 0 !== a ? a : 0,
                guildYoutubeIntegrations: null !== (o = null === (i = K.youtube) || void 0 === i ? void 0 : i.filter((e) => e.enabled).length) && void 0 !== o ? o : 0
            };
        }, [K.twitch, K.youtube]),
        { showTwitchCard: ef, showYoutubeCard: eb } = l.useMemo(() => {
            if (ea || !ec)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1
                };
            let e = null == G ? void 0 : G.hasFeature(k.oNc.COMMUNITY),
                t = eo.filter((e) => e.type === k.ABu.TWITCH).length > 0,
                n = eo.filter((e) => e.type === k.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: eh > 0 || (!t && e),
                showYoutubeCard: ep > 0 || (!n && e)
            };
        }, [ea, ec, G, eo, eh, ep]),
        ev = Object.values(V).length,
        eC = l.useMemo(() => {
            let e = ev > 100 ? P : s();
            return Object.values(V).filter((t) => {
                var n, i, l;
                let { application: r } = t;
                return (n = r), (i = el), (l = e), !!('' === (i = i.trim().toLowerCase()) || n.id === i || l(i, n.name.toLowerCase()) || (null != n.bot && l(i, n.bot.username.toLowerCase()))) || !1;
            });
        }, [V, ev, el]),
        eN = (0, c.e7)(
            [R.Z],
            () => {
                if (null != G) return eC.find((e) => R.Z.canShowOverviewTooltip(G.id, e.integration.id));
            },
            [eC, G]
        ),
        eI = l.useMemo(() => (void 0 !== eN ? [eN, ...eC.filter((e) => e.integration.id !== eN.integration.id)] : eC), [eC, eN]),
        ej = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
        [e_, eT] = l.useState(!1),
        eS = l.useRef(0),
        eZ = () => {
            eT(!0),
                clearTimeout(eS.current),
                (eS.current = setTimeout(() => {
                    eT(!1);
                }, 200));
        };
    l.useEffect(() => (window.addEventListener('scroll', eZ, !0), () => window.removeEventListener('scroll', eZ)));
    let eE = eI.map((e) => {
            let t = !ej && e.integration.id === (null == eN ? void 0 : eN.integration.id);
            return (function (e, t, n, l, r) {
                var a;
                let { application: o, integration: s } = t,
                    c = [];
                return (
                    null != s.user
                        ? c.push({
                              icon: u.ClockIcon,
                              text: L.intl.formatToPlainString(L.t.Nu9sam, {
                                  timestamp: Z.default.extractTimestamp(s.id),
                                  user: E.ZP.getUserTag(s.user)
                              })
                          })
                        : c.push({
                              icon: u.ClockIcon,
                              text: L.intl.formatToPlainString(L.t.gcdJ8P, { timestamp: Z.default.extractTimestamp(s.id) })
                          }),
                    (0, i.jsx)(
                        A.Z,
                        {
                            name: o.name,
                            imageSrc: null !== (a = o.getIconURL(48)) && void 0 !== a ? a : T.pK['0'],
                            integration: t,
                            buttonText: L.intl.string(L.t['Z/qRnJ']),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                n(o.id),
                                    _.default.track(k.rMx.APP_MANAGE_CTA_CLICKED, {
                                        application_id: o.id,
                                        guild_id: null == e ? void 0 : e.id,
                                        is_admin: null != e ? j.Z.can(k.Plq.ADMINISTRATOR, e) : void 0
                                    });
                            },
                            details: c,
                            guildId: null == e ? void 0 : e.id,
                            isScrolling: l,
                            canShowMigrationTooltip: r
                        },
                        'integration-'.concat(s.id)
                    )
                );
            })(G, e, et, e_, t);
        }),
        ey = (0, i.jsx)('div', { className: O.footerImage });
    0 === eE.length &&
        ec &&
        ((eE = (function (e, t, n) {
            let l = (0, d.wj)(e) ? M : B,
                r = (0, i.jsxs)(v.Z, {
                    direction: v.Z.Direction.VERTICAL,
                    align: v.Z.Align.CENTER,
                    className: O.emptyStateWrapper,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: l,
                            className: O.emptyStateSearchImage
                        }),
                        (0, i.jsx)(u.Card, {
                            editable: !0,
                            className: O.emptyStateCard,
                            children: (0, i.jsx)(u.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: L.intl.string(L.t.EVWFNj)
                            })
                        })
                    ]
                }),
                a = (0, i.jsx)(u.Card, {
                    editable: !0,
                    className: O.emptyStateCard,
                    children: (0, i.jsxs)('div', {
                        className: O.emptyStateText,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: w,
                                className: O.emptyStateImage
                            }),
                            (0, i.jsx)(u.Heading, {
                                color: 'header-secondary',
                                variant: 'heading-xl/bold',
                                children: L.intl.string(L.t.nQQeFB)
                            }),
                            (0, i.jsx)(u.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: L.intl.format(L.t.snvKU1, {
                                    handleGoToAppDirectory: () => {
                                        (0, x.goToAppDirectory)({
                                            guildId: n,
                                            entrypoint: { name: g.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS }
                                        }),
                                            (0, m.xf)();
                                    }
                                })
                            })
                        ]
                    })
                });
            return t > 0 ? r : a;
        })(ei, ev, null == G ? void 0 : G.id)),
        (ey = null));
    let eA = S.Z.getArticleURL(k.BhN.INTEGRATIONS),
        eR = null != z ? L.t.YV0vh4 : L.t.FnZEJi,
        ek = [];
    if (es) {
        let e, t;
        if (
            (ek.push(
                ((n = q.length),
                (r = X),
                (o = $),
                n > 0 ? (t = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })) : (e = L.intl.string(L.t.lOQqJC)),
                (0, i.jsx)(
                    A.Z,
                    {
                        name: L.intl.string(L.t.xOg4SE),
                        icon: u.WebhookIcon,
                        buttonText: e,
                        buttonDisabled: !r,
                        trailing: t,
                        onButtonClick: o,
                        hasNextSection: n > 0,
                        details: [{ text: L.intl.formatToPlainString(L.t['6HqDfX'], { count: n }) }]
                    },
                    'webhooks'
                ))
            ),
            (null == z ? void 0 : z.type) !== k.d4z.GUILD_VOICE && ((null == z ? void 0 : z.type) == null || !k.TPd.GUILD_THREADS_ONLY.has(z.type)))
        ) {
            let e, t, n;
            ek.push(
                ((U = Y.length),
                (F = ee),
                U > 0 ? ((n = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (t = F)) : ((e = L.intl.string(L.t['ZwSt+f'])), (t = () => open(S.Z.getArticleURL(k.BhN.CHANNEL_FOLLOWING)))),
                (0, i.jsx)(
                    A.Z,
                    {
                        name: L.intl.string(L.t.OrV60t),
                        icon: u.ChannelsFollowedIcon,
                        buttonText: e,
                        onButtonClick: t,
                        trailing: n,
                        hasNextSection: U > 0,
                        details: [{ text: L.intl.formatToPlainString(L.t.JUNGIS, { count: U }) }]
                    },
                    'channels-followed'
                ))
            );
        }
    }
    if (null == z && em.length > 0) {
        ek.push(
            ((W = em.length),
            (H = en),
            (0, i.jsx)(
                A.Z,
                {
                    name: L.intl.string(L.t.tqtDXF),
                    icon: u.RefreshIcon,
                    trailing: (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' }),
                    onButtonClick: H,
                    hasNextSection: !0,
                    details: [{ text: L.intl.formatToPlainString(L.t['puxS4+'], { count: W }) }]
                },
                'channels-syncing'
            ))
        );
    }
    ef &&
        ek.push(
            (function (e, t, n) {
                let l, r, a, o;
                let s = p.Z.get(k.ABu.TWITCH);
                return (
                    e > 0
                        ? ((o = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (r = L.intl.formatToPlainString(L.t.FFpnT0, { count: t })), (a = () => n(k.ABu.TWITCH)))
                        : ((l = L.intl.string(L.t.bkvGkp)),
                          (r = L.intl.string(L.t.Qq3X2N)),
                          (a = () =>
                              (0, b.Z)({
                                  platformType: k.ABu.TWITCH,
                                  location: 'Integration Settings'
                              }))),
                    (0, i.jsx)(
                        A.Z,
                        {
                            name: L.intl.string(L.t.q4pBGx),
                            icon: s.icon.whiteSVG,
                            iconBackgroundColor: s.color,
                            iconClassName: O.platformIcon,
                            buttonText: l,
                            onButtonClick: a,
                            trailing: o,
                            hasNextSection: e > 0,
                            details: [{ text: r }]
                        },
                        'integrations-twitch'
                    )
                );
            })(eh, eg, Q)
        ),
        eb &&
            ek.push(
                (function (e, t, n) {
                    let l, r, a, o;
                    let s = p.Z.get(k.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((o = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (r = L.intl.formatToPlainString(L.t.b2g5vL, { count: t })), (a = () => n(k.ABu.YOUTUBE)))
                            : ((l = L.intl.string(L.t.xEyQ3d)),
                              (r = L.intl.string(L.t.T0ivgY)),
                              (a = () =>
                                  (0, b.Z)({
                                      platformType: k.ABu.YOUTUBE,
                                      location: 'Integration Settings'
                                  }))),
                        (0, i.jsx)(
                            A.Z,
                            {
                                name: L.intl.string(L.t.aS6cKy),
                                icon: s.icon.whiteSVG,
                                iconBackgroundColor: s.color,
                                iconClassName: O.platformIcon,
                                buttonText: l,
                                onButtonClick: a,
                                trailing: o,
                                hasNextSection: e > 0,
                                details: [{ text: r }]
                            },
                            'integrations-youtube'
                        )
                    );
                })(ep, ex, Q)
            );
    let eL = null != z && ed && null != eu;
    return (0, i.jsxs)(u.FormSection, {
        className: a()(null != ey ? O.footerPlaceholder : null),
        children: [
            (0, i.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: L.intl.format(eR, { helpdeskArticle: eA })
            }),
            (0, i.jsx)(u.FormDivider, { className: O.divider }),
            J || ea || null == G
                ? (0, i.jsx)(u.Spinner, {
                      className: O.__invalid_spinner,
                      type: u.Spinner.Type.SPINNING_CIRCLE
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          ek,
                          eL &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      ek.length > 0 ? (0, i.jsx)(u.FormDivider, { className: O.divider }) : null,
                                      (0, i.jsx)(u.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: O.sectionHeader,
                                          children: L.intl.string(L.t.oAvIAg)
                                      }),
                                      (0, i.jsx)(y.I, {
                                          channel: z,
                                          application: eu,
                                          showApplicationImage: !0,
                                          name: eu.name,
                                          hasNextSection: !0,
                                          iconClassName: O.linkedLobbyIcon,
                                          trailing: (0, i.jsx)(u.PencilIcon, { size: 'xs' })
                                      })
                                  ]
                              }),
                          ec
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        ek.length > 0 || eL ? (0, i.jsx)(u.FormDivider, { className: O.divider }) : null,
                                        (0, i.jsx)(u.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: O.sectionHeader,
                                            children: L.intl.string(L.t.pUBKho)
                                        }),
                                        ev > 4
                                            ? (0, i.jsx)(D, {
                                                  query: el,
                                                  setQuery: er
                                              })
                                            : null,
                                        eE
                                    ]
                                })
                              : null,
                          ey
                      ]
                  })
        ]
    });
}
