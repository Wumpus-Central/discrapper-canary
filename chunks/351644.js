n.d(t, { Z: () => U }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(658722),
    o = n.n(s),
    d = n(442837),
    c = n(780384),
    u = n(481060),
    m = n(37234),
    h = n(410030),
    x = n(726542),
    g = n(132871),
    p = n(147890),
    f = n(835473),
    b = n(231757),
    v = n(600164),
    _ = n(685929),
    N = n(163400),
    j = n(553795),
    C = n(496675),
    I = n(626135),
    Z = n(768581),
    T = n(63063),
    E = n(709054),
    S = n(51144),
    y = n(466070),
    A = n(585835),
    k = n(997787),
    R = n(981631),
    L = n(388032),
    O = n(578527),
    w = n(509399),
    P = n(790904),
    D = n(609182);
function M(e, t) {
    return t.includes(e);
}
function B(e) {
    let { query: t, setQuery: n } = e,
        a = l.useCallback(
            (e) => {
                n(e);
            },
            [n]
        );
    return (0, i.jsx)('div', {
        className: O.searchContainer,
        children: (0, i.jsx)(u.E1j, {
            size: u.E1j.Sizes.MEDIUM,
            query: t,
            onChange: a,
            onClear: () => n(''),
            placeholder: L.intl.string(L.t['5prvKS']),
            'aria-label': L.intl.string(L.t['5prvKS'])
        })
    });
}
function U(e) {
    var t, n, a, s;
    let { guild: U, channel: W, applicationIntegrations: z, builtInIntegrations: H, customWebhooks: G, followedChannelWebhooks: F, isLoadingWebhooks: V, canCreateWebhook: K, onManageBuiltIn: q, onManageCustomWebhooks: Y, onManageFollowedChannels: X, onManageApplication: $, onManageLobbiesLinked: J } = e,
        Q = (0, h.ZP)(),
        [ee, et] = l.useState(''),
        { isFetchingConnections: en, accounts: ei } = (0, d.cj)(
            [j.Z],
            () => ({
                isFetchingConnections: j.Z.isFetching(),
                accounts: j.Z.getAccounts()
            }),
            []
        ),
        { canManageWebhooks: el, canManageGuild: ea } = (0, d.cj)(
            [C.Z],
            () => ({
                canManageWebhooks: (null != U && C.Z.can(R.Plq.MANAGE_WEBHOOKS, U)) || (null != W && C.Z.can(R.Plq.MANAGE_WEBHOOKS, W)),
                canManageGuild: null != U && null == W && C.Z.can(R.Plq.MANAGE_GUILD, U)
            }),
            [U, W]
        ),
        er = (0, _.Y)(W),
        es = (0, f.q)(null == W ? void 0 : null === (t = W.linkedLobby) || void 0 === t ? void 0 : t.application_id),
        eo = (0, N.F)(null == U ? void 0 : U.id),
        {
            availableTwitchIntegrations: ed,
            availableYoutubeIntegrations: ec,
            guildTwitchIntegrations: eu,
            guildYoutubeIntegrations: em
        } = l.useMemo(() => {
            var e, t, n, i, l, a, r, s;
            return {
                availableTwitchIntegrations: null !== (l = null === (e = H.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== l ? l : 0,
                availableYoutubeIntegrations: null !== (a = null === (t = H.youtube) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0,
                guildTwitchIntegrations: null !== (r = null === (n = H.twitch) || void 0 === n ? void 0 : n.filter((e) => e.enabled).length) && void 0 !== r ? r : 0,
                guildYoutubeIntegrations: null !== (s = null === (i = H.youtube) || void 0 === i ? void 0 : i.filter((e) => e.enabled).length) && void 0 !== s ? s : 0
            };
        }, [H.twitch, H.youtube]),
        { showTwitchCard: eh, showYoutubeCard: ex } = l.useMemo(() => {
            if (en || !ea)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1
                };
            let e = null == U ? void 0 : U.hasFeature(R.oNc.COMMUNITY),
                t = ei.filter((e) => e.type === R.ABu.TWITCH).length > 0,
                n = ei.filter((e) => e.type === R.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: ed > 0 || (!t && e),
                showYoutubeCard: ec > 0 || (!n && e)
            };
        }, [en, ea, U, ei, ed, ec]),
        eg = Object.values(z).length,
        ep = l.useMemo(() => {
            let e = eg > 100 ? M : o();
            return Object.values(z).filter((t) => {
                var n;
                let { application: i } = t;
                return !!('' === (n = (n = ee).trim().toLowerCase()) || i.id === n || e(n, i.name.toLowerCase()) || (null != i.bot && e(n, i.bot.username.toLowerCase())));
            });
        }, [z, eg, ee]),
        ef = (0, d.e7)(
            [k.Z],
            () => {
                if (null != U) return ep.find((e) => k.Z.canShowOverviewTooltip(U.id, e.integration.id));
            },
            [ep, U]
        ),
        eb = l.useMemo(() => (void 0 !== ef ? [ef, ...ep.filter((e) => e.integration.id !== ef.integration.id)] : ep), [ep, ef]),
        ev = (0, u.s9z)(u.JQI),
        [e_, eN] = l.useState(!1),
        ej = l.useRef(0),
        eC = () => {
            eN(!0),
                clearTimeout(ej.current),
                (ej.current = setTimeout(() => {
                    eN(!1);
                }, 200));
        };
    l.useEffect(() => (window.addEventListener('scroll', eC, !0), () => window.removeEventListener('scroll', eC)));
    let eI = eb.map((e) => {
            let t = !ev && e.integration.id === (null == ef ? void 0 : ef.integration.id);
            return (function (e, t, n, l, a) {
                var r;
                let { application: s, integration: o } = t,
                    d = [];
                return (
                    null != o.user
                        ? d.push({
                              icon: u.T39,
                              text: L.intl.formatToPlainString(L.t.Nu9sam, {
                                  timestamp: E.default.extractTimestamp(o.id),
                                  user: S.ZP.getUserTag(o.user)
                              })
                          })
                        : d.push({
                              icon: u.T39,
                              text: L.intl.formatToPlainString(L.t.gcdJ8P, { timestamp: E.default.extractTimestamp(o.id) })
                          }),
                    (0, i.jsx)(
                        A.Z,
                        {
                            name: s.name,
                            imageSrc: null !== (r = s.getIconURL(48)) && void 0 !== r ? r : Z.pK['0'],
                            integration: t,
                            buttonText: L.intl.string(L.t['Z/qRnJ']),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                n(s.id),
                                    I.default.track(R.rMx.APP_MANAGE_CTA_CLICKED, {
                                        application_id: s.id,
                                        guild_id: null == e ? void 0 : e.id,
                                        is_admin: null != e ? C.Z.can(R.Plq.ADMINISTRATOR, e) : void 0
                                    });
                            },
                            details: d,
                            guildId: null == e ? void 0 : e.id,
                            isScrolling: l,
                            canShowMigrationTooltip: a
                        },
                        'integration-'.concat(o.id)
                    )
                );
            })(U, e, $, e_, t);
        }),
        eZ = (0, i.jsx)('div', { className: O.footerImage });
    0 === eI.length &&
        ea &&
        ((eI = (function (e, t, n) {
            let l = (0, c.wj)(e) ? P : D,
                a = (0, i.jsxs)(v.Z, {
                    direction: v.Z.Direction.VERTICAL,
                    align: v.Z.Align.CENTER,
                    className: O.emptyStateWrapper,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: l,
                            className: O.emptyStateSearchImage
                        }),
                        (0, i.jsx)(u.Zbd, {
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
                r = (0, i.jsx)(u.Zbd, {
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
                            (0, i.jsx)(u.X6q, {
                                color: 'header-secondary',
                                variant: 'heading-xl/bold',
                                children: L.intl.string(L.t.nQQeFB)
                            }),
                            (0, i.jsx)(u.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: L.intl.format(L.t.snvKU1, {
                                    handleGoToAppDirectory: () => {
                                        (0, p.dx)({
                                            guildId: n,
                                            entrypoint: { name: g.n3.GUILD_INTEGRATION_SETTINGS }
                                        }),
                                            (0, m.xf)();
                                    }
                                })
                            })
                        ]
                    })
                });
            return t > 0 ? a : r;
        })(Q, eg, null == U ? void 0 : U.id)),
        (eZ = null));
    let eT = T.Z.getArticleURL(R.BhN.INTEGRATIONS),
        eE = null != W ? L.t.YV0vh4 : L.t.FnZEJi,
        eS = [];
    if (el) {
        let e, t;
        if (
            (eS.push(
                ((n = G.length) > 0 ? (t = (0, i.jsx)(u.LJT, { size: 'xs' })) : (e = L.intl.string(L.t.lOQqJC)),
                (0, i.jsx)(
                    A.Z,
                    {
                        name: L.intl.string(L.t.xOg4SE),
                        icon: u.tYf,
                        buttonText: e,
                        buttonDisabled: !K,
                        trailing: t,
                        onButtonClick: Y,
                        hasNextSection: n > 0,
                        details: [{ text: L.intl.formatToPlainString(L.t['6HqDfX'], { count: n }) }]
                    },
                    'webhooks'
                ))
            ),
            (null == W ? void 0 : W.type) !== R.d4z.GUILD_VOICE && ((null == W ? void 0 : W.type) == null || !R.TPd.GUILD_THREADS_ONLY.has(W.type)))
        ) {
            let e, t, n;
            eS.push(
                ((a = F.length) > 0 ? ((n = (0, i.jsx)(u.LJT, { size: 'xs' })), (t = X)) : ((e = L.intl.string(L.t['ZwSt+f'])), (t = () => open(T.Z.getArticleURL(R.BhN.CHANNEL_FOLLOWING)))),
                (0, i.jsx)(
                    A.Z,
                    {
                        name: L.intl.string(L.t.OrV60t),
                        icon: u.AsW,
                        buttonText: e,
                        onButtonClick: t,
                        trailing: n,
                        hasNextSection: a > 0,
                        details: [{ text: L.intl.formatToPlainString(L.t.JUNGIS, { count: a }) }]
                    },
                    'channels-followed'
                ))
            );
        }
    }
    null == W &&
        eo.length > 0 &&
        eS.push(
            ((s = eo.length),
            (0, i.jsx)(
                A.Z,
                {
                    name: L.intl.string(L.t.tqtDXF),
                    icon: u.DuK,
                    trailing: (0, i.jsx)(u.LJT, { size: 'xs' }),
                    onButtonClick: J,
                    hasNextSection: !0,
                    details: [{ text: L.intl.formatToPlainString(L.t['puxS4+'], { count: s }) }]
                },
                'channels-syncing'
            ))
        ),
        eh &&
            eS.push(
                (function (e, t, n) {
                    let l, a, r, s;
                    let o = x.Z.get(R.ABu.TWITCH);
                    return (
                        e > 0
                            ? ((s = (0, i.jsx)(u.LJT, { size: 'xs' })), (a = L.intl.formatToPlainString(L.t.FFpnT0, { count: t })), (r = () => n(R.ABu.TWITCH)))
                            : ((l = L.intl.string(L.t.bkvGkp)),
                              (a = L.intl.string(L.t.Qq3X2N)),
                              (r = () =>
                                  (0, b.Z)({
                                      platformType: R.ABu.TWITCH,
                                      location: 'Integration Settings'
                                  }))),
                        (0, i.jsx)(
                            A.Z,
                            {
                                name: L.intl.string(L.t.q4pBGx),
                                icon: o.icon.whiteSVG,
                                iconBackgroundColor: o.color,
                                iconClassName: O.platformIcon,
                                buttonText: l,
                                onButtonClick: r,
                                trailing: s,
                                hasNextSection: e > 0,
                                details: [{ text: a }]
                            },
                            'integrations-twitch'
                        )
                    );
                })(ed, eu, q)
            ),
        ex &&
            eS.push(
                (function (e, t, n) {
                    let l, a, r, s;
                    let o = x.Z.get(R.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((s = (0, i.jsx)(u.LJT, { size: 'xs' })), (a = L.intl.formatToPlainString(L.t.b2g5vL, { count: t })), (r = () => n(R.ABu.YOUTUBE)))
                            : ((l = L.intl.string(L.t.xEyQ3d)),
                              (a = L.intl.string(L.t.T0ivgY)),
                              (r = () =>
                                  (0, b.Z)({
                                      platformType: R.ABu.YOUTUBE,
                                      location: 'Integration Settings'
                                  }))),
                        (0, i.jsx)(
                            A.Z,
                            {
                                name: L.intl.string(L.t.aS6cKy),
                                icon: o.icon.whiteSVG,
                                iconBackgroundColor: o.color,
                                iconClassName: O.platformIcon,
                                buttonText: l,
                                onButtonClick: r,
                                trailing: s,
                                hasNextSection: e > 0,
                                details: [{ text: a }]
                            },
                            'integrations-youtube'
                        )
                    );
                })(ec, em, q)
            );
    let ey = null != W && er && null != es;
    return (0, i.jsxs)(u.hjN, {
        className: r()(null != eZ ? O.footerPlaceholder : null),
        children: [
            (0, i.jsx)(u.R94, {
                type: u.geA.DESCRIPTION,
                children: L.intl.format(eE, { helpdeskArticle: eT })
            }),
            (0, i.jsx)(u.$i$, { className: O.divider }),
            V || en || null == U
                ? (0, i.jsx)(u.$jN, {
                      className: O.__invalid_spinner,
                      type: u.$jN.Type.SPINNING_CIRCLE
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          eS,
                          ey &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      eS.length > 0 ? (0, i.jsx)(u.$i$, { className: O.divider }) : null,
                                      (0, i.jsx)(u.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: O.sectionHeader,
                                          children: L.intl.string(L.t.oAvIAg)
                                      }),
                                      (0, i.jsx)(y.t, {
                                          channel: W,
                                          application: es,
                                          showApplicationImage: !0,
                                          name: es.name,
                                          hasNextSection: !0,
                                          iconClassName: O.linkedLobbyIcon,
                                          trailing: (0, i.jsx)(u.vdY, { size: 'xs' })
                                      })
                                  ]
                              }),
                          ea
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        eS.length > 0 || ey ? (0, i.jsx)(u.$i$, { className: O.divider }) : null,
                                        (0, i.jsx)(u.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: O.sectionHeader,
                                            children: L.intl.string(L.t.pUBKho)
                                        }),
                                        eg > 4
                                            ? (0, i.jsx)(B, {
                                                  query: ee,
                                                  setQuery: et
                                              })
                                            : null,
                                        eI
                                    ]
                                })
                              : null,
                          eZ
                      ]
                  })
        ]
    });
}
