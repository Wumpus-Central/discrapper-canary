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
    d = n(442837),
    c = n(780384),
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
    T = n(626135),
    _ = n(768581),
    Z = n(63063),
    E = n(709054),
    S = n(51144),
    y = n(466070),
    A = n(585835),
    R = n(997787),
    L = n(981631),
    k = n(388032),
    O = n(341701),
    w = n(509399),
    M = n(790904),
    P = n(609182);
function B(e, t) {
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
            placeholder: k.intl.string(k.t['5prvKS']),
            'aria-label': k.intl.string(k.t['5prvKS'])
        })
    });
}
function U(e) {
    var t, n, r, o, U, F, W, H;
    let { guild: G, channel: z, applicationIntegrations: V, builtInIntegrations: K, customWebhooks: q, followedChannelWebhooks: Y, isLoadingWebhooks: J, canCreateWebhook: X, onManageBuiltIn: Q, onManageCustomWebhooks: $, onManageFollowedChannels: ee, onManageApplication: et, onManageLobbiesLinked: en } = e,
        ei = (0, h.ZP)(),
        [el, er] = l.useState(''),
        { isFetchingConnections: ea, accounts: eo } = (0, d.cj)(
            [I.Z],
            () => ({
                isFetchingConnections: I.Z.isFetching(),
                accounts: I.Z.getAccounts()
            }),
            []
        ),
        { canManageWebhooks: es, canManageGuild: ed } = (0, d.cj)(
            [j.Z],
            () => ({
                canManageWebhooks: (null != G && j.Z.can(L.Plq.MANAGE_WEBHOOKS, G)) || (null != z && j.Z.can(L.Plq.MANAGE_WEBHOOKS, z)),
                canManageGuild: null != G && null == z && j.Z.can(L.Plq.MANAGE_GUILD, G)
            }),
            [G, z]
        ),
        ec = (0, C.Y)(z),
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
            if (ea || !ed)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1
                };
            let e = null == G ? void 0 : G.hasFeature(L.oNc.COMMUNITY),
                t = eo.filter((e) => e.type === L.ABu.TWITCH).length > 0,
                n = eo.filter((e) => e.type === L.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: eh > 0 || (!t && e),
                showYoutubeCard: ep > 0 || (!n && e)
            };
        }, [ea, ed, G, eo, eh, ep]),
        ev = Object.values(V).length,
        eC = l.useMemo(() => {
            let e = ev > 100 ? B : s();
            return Object.values(V).filter((t) => {
                var n, i, l;
                let { application: r } = t;
                return (n = r), (i = el), (l = e), !!('' === (i = i.trim().toLowerCase()) || n.id === i || l(i, n.name.toLowerCase()) || (null != n.bot && l(i, n.bot.username.toLowerCase()))) || !1;
            });
        }, [V, ev, el]),
        eN = (0, d.e7)(
            [R.Z],
            () => {
                if (null != G) return eC.find((e) => R.Z.canShowOverviewTooltip(G.id, e.integration.id));
            },
            [eC, G]
        ),
        eI = l.useMemo(() => (void 0 !== eN ? [eN, ...eC.filter((e) => e.integration.id !== eN.integration.id)] : eC), [eC, eN]),
        ej = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
        [eT, e_] = l.useState(!1),
        eZ = l.useRef(0),
        eE = () => {
            e_(!0),
                clearTimeout(eZ.current),
                (eZ.current = setTimeout(() => {
                    e_(!1);
                }, 200));
        };
    l.useEffect(() => (window.addEventListener('scroll', eE, !0), () => window.removeEventListener('scroll', eE)));
    let eS = eI.map((e) => {
            let t = !ej && e.integration.id === (null == eN ? void 0 : eN.integration.id);
            return (function (e, t, n, l, r) {
                var a;
                let { application: o, integration: s } = t,
                    d = [];
                return (
                    null != s.user
                        ? d.push({
                              icon: u.ClockIcon,
                              text: k.intl.formatToPlainString(k.t.Nu9sam, {
                                  timestamp: E.default.extractTimestamp(s.id),
                                  user: S.ZP.getUserTag(s.user)
                              })
                          })
                        : d.push({
                              icon: u.ClockIcon,
                              text: k.intl.formatToPlainString(k.t.gcdJ8P, { timestamp: E.default.extractTimestamp(s.id) })
                          }),
                    (0, i.jsx)(
                        A.Z,
                        {
                            name: o.name,
                            imageSrc: null !== (a = o.getIconURL(48)) && void 0 !== a ? a : _.pK['0'],
                            integration: t,
                            buttonText: k.intl.string(k.t['Z/qRnJ']),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                n(o.id),
                                    T.default.track(L.rMx.APP_MANAGE_CTA_CLICKED, {
                                        application_id: o.id,
                                        guild_id: null == e ? void 0 : e.id,
                                        is_admin: null != e ? j.Z.can(L.Plq.ADMINISTRATOR, e) : void 0
                                    });
                            },
                            details: d,
                            guildId: null == e ? void 0 : e.id,
                            isScrolling: l,
                            canShowMigrationTooltip: r
                        },
                        'integration-'.concat(s.id)
                    )
                );
            })(G, e, et, eT, t);
        }),
        ey = (0, i.jsx)('div', { className: O.footerImage });
    0 === eS.length &&
        ed &&
        ((eS = (function (e, t, n) {
            let l = (0, c.wj)(e) ? M : P,
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
                                children: k.intl.string(k.t.EVWFNj)
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
                                children: k.intl.string(k.t.nQQeFB)
                            }),
                            (0, i.jsx)(u.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: k.intl.format(k.t.snvKU1, {
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
    let eA = Z.Z.getArticleURL(L.BhN.INTEGRATIONS),
        eR = null != z ? k.t.YV0vh4 : k.t.FnZEJi,
        eL = [];
    if (es) {
        let e, t;
        if (
            (eL.push(
                ((n = q.length),
                (r = X),
                (o = $),
                n > 0 ? (t = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })) : (e = k.intl.string(k.t.lOQqJC)),
                (0, i.jsx)(
                    A.Z,
                    {
                        name: k.intl.string(k.t.xOg4SE),
                        icon: u.WebhookIcon,
                        buttonText: e,
                        buttonDisabled: !r,
                        trailing: t,
                        onButtonClick: o,
                        hasNextSection: n > 0,
                        details: [{ text: k.intl.formatToPlainString(k.t['6HqDfX'], { count: n }) }]
                    },
                    'webhooks'
                ))
            ),
            (null == z ? void 0 : z.type) !== L.d4z.GUILD_VOICE && ((null == z ? void 0 : z.type) == null || !L.TPd.GUILD_THREADS_ONLY.has(z.type)))
        ) {
            let e, t, n;
            eL.push(
                ((U = Y.length),
                (F = ee),
                U > 0 ? ((n = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (t = F)) : ((e = k.intl.string(k.t['ZwSt+f'])), (t = () => open(Z.Z.getArticleURL(L.BhN.CHANNEL_FOLLOWING)))),
                (0, i.jsx)(
                    A.Z,
                    {
                        name: k.intl.string(k.t.OrV60t),
                        icon: u.ChannelsFollowedIcon,
                        buttonText: e,
                        onButtonClick: t,
                        trailing: n,
                        hasNextSection: U > 0,
                        details: [{ text: k.intl.formatToPlainString(k.t.JUNGIS, { count: U }) }]
                    },
                    'channels-followed'
                ))
            );
        }
    }
    if (null == z && em.length > 0) {
        eL.push(
            ((W = em.length),
            (H = en),
            (0, i.jsx)(
                A.Z,
                {
                    name: k.intl.string(k.t.tqtDXF),
                    icon: u.RefreshIcon,
                    trailing: (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' }),
                    onButtonClick: H,
                    hasNextSection: !0,
                    details: [{ text: k.intl.formatToPlainString(k.t['puxS4+'], { count: W }) }]
                },
                'channels-syncing'
            ))
        );
    }
    ef &&
        eL.push(
            (function (e, t, n) {
                let l, r, a, o;
                let s = p.Z.get(L.ABu.TWITCH);
                return (
                    e > 0
                        ? ((o = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (r = k.intl.formatToPlainString(k.t.FFpnT0, { count: t })), (a = () => n(L.ABu.TWITCH)))
                        : ((l = k.intl.string(k.t.bkvGkp)),
                          (r = k.intl.string(k.t.Qq3X2N)),
                          (a = () =>
                              (0, b.Z)({
                                  platformType: L.ABu.TWITCH,
                                  location: 'Integration Settings'
                              }))),
                    (0, i.jsx)(
                        A.Z,
                        {
                            name: k.intl.string(k.t.q4pBGx),
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
            eL.push(
                (function (e, t, n) {
                    let l, r, a, o;
                    let s = p.Z.get(L.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((o = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (r = k.intl.formatToPlainString(k.t.b2g5vL, { count: t })), (a = () => n(L.ABu.YOUTUBE)))
                            : ((l = k.intl.string(k.t.xEyQ3d)),
                              (r = k.intl.string(k.t.T0ivgY)),
                              (a = () =>
                                  (0, b.Z)({
                                      platformType: L.ABu.YOUTUBE,
                                      location: 'Integration Settings'
                                  }))),
                        (0, i.jsx)(
                            A.Z,
                            {
                                name: k.intl.string(k.t.aS6cKy),
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
    let ek = null != z && ec && null != eu;
    return (0, i.jsxs)(u.FormSection, {
        className: a()(null != ey ? O.footerPlaceholder : null),
        children: [
            (0, i.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: k.intl.format(eR, { helpdeskArticle: eA })
            }),
            (0, i.jsx)(u.FormDivider, { className: O.divider }),
            J || ea || null == G
                ? (0, i.jsx)(u.Spinner, {
                      className: O.__invalid_spinner,
                      type: u.Spinner.Type.SPINNING_CIRCLE
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          eL,
                          ek &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      eL.length > 0 ? (0, i.jsx)(u.FormDivider, { className: O.divider }) : null,
                                      (0, i.jsx)(u.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: O.sectionHeader,
                                          children: k.intl.string(k.t.oAvIAg)
                                      }),
                                      (0, i.jsx)(y.t, {
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
                          ed
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        eL.length > 0 || ek ? (0, i.jsx)(u.FormDivider, { className: O.divider }) : null,
                                        (0, i.jsx)(u.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: O.sectionHeader,
                                            children: k.intl.string(k.t.pUBKho)
                                        }),
                                        ev > 4
                                            ? (0, i.jsx)(D, {
                                                  query: el,
                                                  setQuery: er
                                              })
                                            : null,
                                        eS
                                    ]
                                })
                              : null,
                          ey
                      ]
                  })
        ]
    });
}
