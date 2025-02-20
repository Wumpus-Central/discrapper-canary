n.d(t, { Z: () => B }), n(653041), n(566702), n(47120);
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
    g = n(132871),
    f = n(147890),
    h = n(835473),
    x = n(231757),
    j = n(600164),
    v = n(685929),
    N = n(163400),
    O = n(553795),
    y = n(496675),
    _ = n(626135),
    C = n(768581),
    I = n(63063),
    E = n(709054),
    S = n(51144),
    P = n(466070),
    w = n(585835),
    Z = n(997787),
    T = n(981631),
    W = n(388032),
    k = n(66390),
    A = n(509399),
    D = n(790904),
    R = n(609182);
function L(e, t) {
    return t.includes(e);
}
function M(e) {
    let { query: t, setQuery: n } = e,
        l = i.useCallback(
            (e) => {
                n(e);
            },
            [n]
        );
    return (0, r.jsx)('div', {
        className: k.searchContainer,
        children: (0, r.jsx)(u.E1j, {
            size: u.E1j.Sizes.MEDIUM,
            query: t,
            onChange: l,
            onClear: () => n(''),
            placeholder: W.NW.string(W.t['5prvKS']),
            'aria-label': W.NW.string(W.t['5prvKS'])
        })
    });
}
function B(e) {
    var t, n, l, a;
    let { guild: B, channel: U, applicationIntegrations: z, builtInIntegrations: H, customWebhooks: G, followedChannelWebhooks: F, isLoadingWebhooks: V, canCreateWebhook: K, onManageBuiltIn: q, onManageCustomWebhooks: Y, onManageFollowedChannels: X, onManageApplication: $, onManageLobbiesLinked: J } = e,
        Q = (0, m.ZP)(),
        [ee, et] = i.useState(''),
        { isFetchingConnections: en, accounts: er } = (0, c.cj)(
            [O.Z],
            () => ({
                isFetchingConnections: O.Z.isFetching(),
                accounts: O.Z.getAccounts()
            }),
            []
        ),
        { canManageWebhooks: ei, canManageGuild: el } = (0, c.cj)(
            [y.Z],
            () => ({
                canManageWebhooks: (null != B && y.Z.can(T.Plq.MANAGE_WEBHOOKS, B)) || (null != U && y.Z.can(T.Plq.MANAGE_WEBHOOKS, U)),
                canManageGuild: null != B && null == U && y.Z.can(T.Plq.MANAGE_GUILD, B)
            }),
            [B, U]
        ),
        eo = (0, v.Y)(U),
        ea = (0, h.q)(null == U ? void 0 : null === (t = U.linkedLobby) || void 0 === t ? void 0 : t.application_id),
        es = (0, N.F)(null == B ? void 0 : B.id),
        {
            availableTwitchIntegrations: ec,
            availableYoutubeIntegrations: ed,
            guildTwitchIntegrations: eu,
            guildYoutubeIntegrations: ep
        } = i.useMemo(() => {
            var e, t, n, r, i, l, o, a;
            return {
                availableTwitchIntegrations: null !== (i = null === (e = H.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== i ? i : 0,
                availableYoutubeIntegrations: null !== (l = null === (t = H.youtube) || void 0 === t ? void 0 : t.length) && void 0 !== l ? l : 0,
                guildTwitchIntegrations: null !== (o = null === (n = H.twitch) || void 0 === n ? void 0 : n.filter((e) => e.enabled).length) && void 0 !== o ? o : 0,
                guildYoutubeIntegrations: null !== (a = null === (r = H.youtube) || void 0 === r ? void 0 : r.filter((e) => e.enabled).length) && void 0 !== a ? a : 0
            };
        }, [H.twitch, H.youtube]),
        { showTwitchCard: em, showYoutubeCard: eb } = i.useMemo(() => {
            if (en || !el)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1
                };
            let e = null == B ? void 0 : B.hasFeature(T.oNc.COMMUNITY),
                t = er.filter((e) => e.type === T.ABu.TWITCH).length > 0,
                n = er.filter((e) => e.type === T.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: ec > 0 || (!t && e),
                showYoutubeCard: ed > 0 || (!n && e)
            };
        }, [en, el, B, er, ec, ed]),
        eg = Object.values(z).length,
        ef = i.useMemo(() => {
            let e = eg > 100 ? L : s();
            return Object.values(z).filter((t) => {
                var n;
                let { application: r } = t;
                return !!('' === (n = (n = ee).trim().toLowerCase()) || r.id === n || e(n, r.name.toLowerCase()) || (null != r.bot && e(n, r.bot.username.toLowerCase())));
            });
        }, [z, eg, ee]),
        eh = (0, c.e7)(
            [Z.Z],
            () => {
                if (null != B) return ef.find((e) => Z.Z.canShowOverviewTooltip(B.id, e.integration.id));
            },
            [ef, B]
        ),
        ex = i.useMemo(() => (void 0 !== eh ? [eh, ...ef.filter((e) => e.integration.id !== eh.integration.id)] : ef), [ef, eh]),
        ej = (0, u.s9z)(u.JQI),
        [ev, eN] = i.useState(!1),
        eO = i.useRef(0),
        ey = () => {
            eN(!0),
                clearTimeout(eO.current),
                (eO.current = setTimeout(() => {
                    eN(!1);
                }, 200));
        };
    i.useEffect(() => (window.addEventListener('scroll', ey, !0), () => window.removeEventListener('scroll', ey)));
    let e_ = ex.map((e) => {
            let t = !ej && e.integration.id === (null == eh ? void 0 : eh.integration.id);
            return (function (e, t, n, i, l) {
                var o;
                let { application: a, integration: s } = t,
                    c = [];
                return (
                    null != s.user
                        ? c.push({
                              icon: u.T39,
                              text: W.NW.formatToPlainString(W.t.Nu9sam, {
                                  timestamp: E.default.extractTimestamp(s.id),
                                  user: S.ZP.getUserTag(s.user)
                              })
                          })
                        : c.push({
                              icon: u.T39,
                              text: W.NW.formatToPlainString(W.t.gcdJ8P, { timestamp: E.default.extractTimestamp(s.id) })
                          }),
                    (0, r.jsx)(
                        w.Z,
                        {
                            name: a.name,
                            imageSrc: null !== (o = a.getIconURL(48)) && void 0 !== o ? o : C.pK['0'],
                            integration: t,
                            buttonText: W.NW.string(W.t['Z/qRnJ']),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                n(a.id),
                                    _.default.track(T.rMx.APP_MANAGE_CTA_CLICKED, {
                                        application_id: a.id,
                                        guild_id: null == e ? void 0 : e.id,
                                        is_admin: null != e ? y.Z.can(T.Plq.ADMINISTRATOR, e) : void 0
                                    });
                            },
                            details: c,
                            guildId: null == e ? void 0 : e.id,
                            isScrolling: i,
                            canShowMigrationTooltip: l
                        },
                        'integration-'.concat(s.id)
                    )
                );
            })(B, e, $, ev, t);
        }),
        eC = (0, r.jsx)('div', { className: k.footerImage });
    0 === e_.length &&
        el &&
        ((e_ = (function (e, t, n) {
            let i = (0, d.wj)(e) ? D : R,
                l = (0, r.jsxs)(j.Z, {
                    direction: j.Z.Direction.VERTICAL,
                    align: j.Z.Align.CENTER,
                    className: k.emptyStateWrapper,
                    children: [
                        (0, r.jsx)('img', {
                            alt: '',
                            src: i,
                            className: k.emptyStateSearchImage
                        }),
                        (0, r.jsx)(u.Zbd, {
                            editable: !0,
                            className: k.emptyStateCard,
                            children: (0, r.jsx)(u.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: W.NW.string(W.t.EVWFNj)
                            })
                        })
                    ]
                }),
                o = (0, r.jsx)(u.Zbd, {
                    editable: !0,
                    className: k.emptyStateCard,
                    children: (0, r.jsxs)('div', {
                        className: k.emptyStateText,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: A,
                                className: k.emptyStateImage
                            }),
                            (0, r.jsx)(u.X6q, {
                                color: 'header-secondary',
                                variant: 'heading-xl/bold',
                                children: W.NW.string(W.t.nQQeFB)
                            }),
                            (0, r.jsx)(u.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: W.NW.format(W.t.snvKU1, {
                                    handleGoToAppDirectory: () => {
                                        (0, f.dx)({
                                            guildId: n,
                                            entrypoint: { name: g.n3.GUILD_INTEGRATION_SETTINGS }
                                        }),
                                            (0, p.xf)();
                                    }
                                })
                            })
                        ]
                    })
                });
            return t > 0 ? l : o;
        })(Q, eg, null == B ? void 0 : B.id)),
        (eC = null));
    let eI = I.Z.getArticleURL(T.BhN.INTEGRATIONS),
        eE = null != U ? W.t.YV0vh4 : W.t.FnZEJi,
        eS = [];
    if (ei) {
        let e, t;
        if (
            (eS.push(
                ((n = G.length) > 0 ? (t = (0, r.jsx)(u.LJT, { size: 'xs' })) : (e = W.NW.string(W.t.lOQqJC)),
                (0, r.jsx)(
                    w.Z,
                    {
                        name: W.NW.string(W.t.xOg4SE),
                        icon: u.tYf,
                        buttonText: e,
                        buttonDisabled: !K,
                        trailing: t,
                        onButtonClick: Y,
                        hasNextSection: n > 0,
                        details: [{ text: W.NW.formatToPlainString(W.t['6HqDfX'], { count: n }) }]
                    },
                    'webhooks'
                ))
            ),
            (null == U ? void 0 : U.type) !== T.d4z.GUILD_VOICE && ((null == U ? void 0 : U.type) == null || !T.TPd.GUILD_THREADS_ONLY.has(U.type)))
        ) {
            let e, t, n;
            eS.push(
                ((l = F.length) > 0 ? ((n = (0, r.jsx)(u.LJT, { size: 'xs' })), (t = X)) : ((e = W.NW.string(W.t['ZwSt+f'])), (t = () => open(I.Z.getArticleURL(T.BhN.CHANNEL_FOLLOWING)))),
                (0, r.jsx)(
                    w.Z,
                    {
                        name: W.NW.string(W.t.OrV60t),
                        icon: u.AsW,
                        buttonText: e,
                        onButtonClick: t,
                        trailing: n,
                        hasNextSection: l > 0,
                        details: [{ text: W.NW.formatToPlainString(W.t.JUNGIS, { count: l }) }]
                    },
                    'channels-followed'
                ))
            );
        }
    }
    null == U &&
        es.length > 0 &&
        eS.push(
            ((a = es.length),
            (0, r.jsx)(
                w.Z,
                {
                    name: W.NW.string(W.t.tqtDXF),
                    icon: u.DuK,
                    trailing: (0, r.jsx)(u.LJT, { size: 'xs' }),
                    onButtonClick: J,
                    hasNextSection: !0,
                    details: [{ text: W.NW.formatToPlainString(W.t['puxS4+'], { count: a }) }]
                },
                'channels-syncing'
            ))
        ),
        em &&
            eS.push(
                (function (e, t, n) {
                    let i, l, o, a;
                    let s = b.Z.get(T.ABu.TWITCH);
                    return (
                        e > 0
                            ? ((a = (0, r.jsx)(u.LJT, { size: 'xs' })), (l = W.NW.formatToPlainString(W.t.FFpnT0, { count: t })), (o = () => n(T.ABu.TWITCH)))
                            : ((i = W.NW.string(W.t.bkvGkp)),
                              (l = W.NW.string(W.t.Qq3X2N)),
                              (o = () =>
                                  (0, x.Z)({
                                      platformType: T.ABu.TWITCH,
                                      location: 'Integration Settings'
                                  }))),
                        (0, r.jsx)(
                            w.Z,
                            {
                                name: W.NW.string(W.t.q4pBGx),
                                icon: s.icon.whiteSVG,
                                iconBackgroundColor: s.color,
                                iconClassName: k.platformIcon,
                                buttonText: i,
                                onButtonClick: o,
                                trailing: a,
                                hasNextSection: e > 0,
                                details: [{ text: l }]
                            },
                            'integrations-twitch'
                        )
                    );
                })(ec, eu, q)
            ),
        eb &&
            eS.push(
                (function (e, t, n) {
                    let i, l, o, a;
                    let s = b.Z.get(T.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((a = (0, r.jsx)(u.LJT, { size: 'xs' })), (l = W.NW.formatToPlainString(W.t.b2g5vL, { count: t })), (o = () => n(T.ABu.YOUTUBE)))
                            : ((i = W.NW.string(W.t.xEyQ3d)),
                              (l = W.NW.string(W.t.T0ivgY)),
                              (o = () =>
                                  (0, x.Z)({
                                      platformType: T.ABu.YOUTUBE,
                                      location: 'Integration Settings'
                                  }))),
                        (0, r.jsx)(
                            w.Z,
                            {
                                name: W.NW.string(W.t.aS6cKy),
                                icon: s.icon.whiteSVG,
                                iconBackgroundColor: s.color,
                                iconClassName: k.platformIcon,
                                buttonText: i,
                                onButtonClick: o,
                                trailing: a,
                                hasNextSection: e > 0,
                                details: [{ text: l }]
                            },
                            'integrations-youtube'
                        )
                    );
                })(ed, ep, q)
            );
    let eP = null != U && eo && null != ea;
    return (0, r.jsxs)(u.hjN, {
        className: o()(null != eC ? k.footerPlaceholder : null),
        children: [
            (0, r.jsx)(u.R94, {
                type: u.geA.DESCRIPTION,
                children: W.NW.format(eE, { helpdeskArticle: eI })
            }),
            (0, r.jsx)(u.$i$, { className: k.divider }),
            V || en || null == B
                ? (0, r.jsx)(u.$jN, {
                      className: k.__invalid_spinner,
                      type: u.$jN.Type.SPINNING_CIRCLE
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          eS,
                          eP &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      eS.length > 0 ? (0, r.jsx)(u.$i$, { className: k.divider }) : null,
                                      (0, r.jsx)(u.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: k.sectionHeader,
                                          children: W.NW.string(W.t.oAvIAg)
                                      }),
                                      (0, r.jsx)(P.t, {
                                          channel: U,
                                          application: ea,
                                          showApplicationImage: !0,
                                          name: ea.name,
                                          hasNextSection: !0,
                                          iconClassName: k.linkedLobbyIcon,
                                          trailing: (0, r.jsx)(u.vdY, { size: 'xs' })
                                      })
                                  ]
                              }),
                          el
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        eS.length > 0 || eP ? (0, r.jsx)(u.$i$, { className: k.divider }) : null,
                                        (0, r.jsx)(u.X6q, {
                                            variant: 'heading-md/semibold',
                                            className: k.sectionHeader,
                                            children: W.NW.string(W.t.pUBKho)
                                        }),
                                        eg > 4
                                            ? (0, r.jsx)(M, {
                                                  query: ee,
                                                  setQuery: et
                                              })
                                            : null,
                                        e_
                                    ]
                                })
                              : null,
                          eC
                      ]
                  })
        ]
    });
}
