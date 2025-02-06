n.d(t, { i: () => B }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(91192),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(596454),
    h = n(515753),
    m = n(410030),
    p = n(607070),
    g = n(100527),
    _ = n(906732),
    f = n(821982),
    E = n(377171),
    I = n(633302),
    C = n(153066),
    v = n(335131),
    N = n(67696),
    T = n(744112),
    S = n(267097),
    Z = n(364111),
    x = n(81136),
    A = n(141594),
    b = n(302800),
    L = n(215023),
    y = n(981631),
    P = n(388032),
    O = n(335907);
let R = (e) => {
        let { color: t } = e;
        return (0, i.jsx)(d.IGR, {
            className: O.newBadge,
            color: null != t ? t : E.Z.STATUS_DANGER_BACKGROUND,
            text: P.intl.string(P.t.y2b7CA)
        });
    },
    j = () => {
        let { noCache: e, includeUnpublished: t } = (0, x.Z)();
        return (
            (0, Z.E)(L.AW.HOME, {
                noCache: e,
                includeUnpublished: t,
                includeBundles: !0
            }),
            null
        );
    },
    D = (e) => {
        let { selected: t, locationState: n, icon: r, onMouseEnter: a, onMouseLeave: o, children: c, ...u } = e,
            m = (0, s.JA)('shop'),
            p = g.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: f } = (0, _.ZP)(p),
            E = (0, N.n)('ShopLinkButton'),
            [I, C] = l.useState(!1),
            T = l.useCallback(() => {
                E && C(!0),
                    (0, v.Sm)({
                        analyticsSource: p,
                        analyticsLocations: f
                    });
            }, [p, f, E, C]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                I && (0, i.jsx)(j, {}),
                (0, i.jsx)(h.Qj, {
                    selected: t,
                    route: y.Z5c.COLLECTIBLES_SHOP,
                    icon: null != r ? r : d.EOn,
                    text: P.intl.string(P.t.pWG4zc),
                    locationState: n,
                    ...m,
                    ...u,
                    onMouseEnter: a,
                    onMouseLeave: o,
                    onClick: T,
                    children: c
                })
            ]
        });
    },
    w = (e) => {
        let { selected: t, locationState: n } = e;
        return (0, i.jsx)(D, {
            selected: t,
            locationState: n,
            children: (0, i.jsx)(R, {})
        });
    },
    M = l.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: l, reducedMotion: r = !1 } = e,
            a = null != l ? (0, f.Z)(l, d.EFr.SIZE_80, !r) : void 0,
            s = n.title(),
            o = null === (t = n.body) || void 0 === t ? void 0 : t.call(n),
            c = null == o || '' === o;
        return (0, i.jsxs)('div', {
            className: O.shopMarketingTooltipContent,
            children: [
                (0, i.jsx)('div', {
                    className: O.avatarContainer,
                    children: (0, i.jsx)(d.qEK, {
                        className: O.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: d.EFr.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, i.jsxs)('div', {
                    className: O.shopMarketingTooltipText,
                    children: [
                        (0, i.jsx)(d.X6q, {
                            variant: c ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: s
                        }),
                        !c &&
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: O.marketingBadgeTooltipContent,
                                children: o
                            })
                    ]
                })
            ]
        });
    }),
    k = (e) => {
        var t, n, r, s, u, h, g, _, f, E, I, v;
        let N, T;
        let { selected: S, locationState: Z, displayOptions: x } = e,
            A = (0, o.e7)([p.Z], () => p.Z.useReducedMotion),
            [b, L] = l.useState(0),
            [y, j] = l.useState(!1),
            w = (0, m.ZP)(),
            k = x.entrypointDecorationAssets,
            U = (0, c.wj)(w);
        y ? (U ? ((N = null === (t = x.entryPointBackgroundAssets) || void 0 === t ? void 0 : t.srcDarkHovered), (T = null === (r = x.entrypointBackgroundStyle) || void 0 === r ? void 0 : null === (n = r.hovered) || void 0 === n ? void 0 : n.dark)) : ((N = null === (s = x.entryPointBackgroundAssets) || void 0 === s ? void 0 : s.srcLightHovered), (T = null === (h = x.entrypointBackgroundStyle) || void 0 === h ? void 0 : null === (u = h.hovered) || void 0 === u ? void 0 : u.light))) : U ? ((N = null === (g = x.entryPointBackgroundAssets) || void 0 === g ? void 0 : g.srcDark), (T = null === (f = x.entrypointBackgroundStyle) || void 0 === f ? void 0 : null === (_ = f.resting) || void 0 === _ ? void 0 : _.dark)) : ((N = null === (E = x.entryPointBackgroundAssets) || void 0 === E ? void 0 : E.srcLight), (T = null === (v = x.entrypointBackgroundStyle) || void 0 === v ? void 0 : null === (I = v.resting) || void 0 === I ? void 0 : I.light));
        let G = l.useCallback(
                (e) => {
                    L((e) => (e + 1) % x.assetIds.length), j(!0), null == e || e();
                },
                [x.assetIds.length]
            ),
            B = l.useCallback((e) => {
                j(!1), null == e || e();
            }, []),
            V = x.title();
        return (0, i.jsx)(d.ua7, {
            text: (0, i.jsx)(M, {
                displayOptions: x,
                assetId: x.assetIds[b],
                reducedMotion: A
            }),
            tooltipClassName: O.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof V ? V : P.intl.string(P.t.rSXaxc),
            children: (e) =>
                (0, i.jsxs)(D, {
                    className: null != x.entryPointClassName ? (0, C.l)(O, x.entryPointClassName) : void 0,
                    selected: S,
                    locationState: Z,
                    icon: x.entryPointIcon,
                    ...e,
                    onMouseEnter: () => G(e.onMouseEnter),
                    onMouseLeave: () => B(e.onMouseLeave),
                    children: [
                        (0, i.jsx)('div', {
                            className: O.marketingButtonBackground,
                            style: { background: T },
                            children:
                                null != N &&
                                (0, i.jsx)('img', {
                                    src: N,
                                    className: O.marketingButtonBackgroundImage,
                                    alt: '',
                                    'aria-hidden': !0
                                })
                        }),
                        null != k &&
                            !A &&
                            (0, i.jsx)('img', {
                                src: (0, c.wj)(w) ? k.srcDark : k.srcLight,
                                className: a()(O.marketingButtonImage, { [O.marketingButtonImageHovered]: y }),
                                alt: '',
                                'aria-hidden': !0
                            }),
                        (0, i.jsx)(R, { color: x.badgeColor })
                    ]
                })
        });
    },
    U = (e) => {
        let { selected: t, locationState: n, displayOptions: r } = e,
            a = l.useMemo(() => {
                var e;
                let t = null != r.emojiName ? (null === (e = I.ZP.getByName(r.emojiName)) || void 0 === e ? void 0 : e.surrogates) : null;
                return (0, i.jsxs)(d.Text, {
                    variant: 'text-sm/medium',
                    className: O.marketingBadgeTooltipContent,
                    children: [null != t && (0, i.jsx)(u.Z, { emojiName: t }), r.title()]
                });
            }, [r]);
        return (0, i.jsx)(d.ua7, {
            text: a,
            tooltipClassName: O.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': r.title(),
            children: (e) =>
                (0, i.jsx)(D, {
                    selected: t,
                    locationState: n,
                    ...e,
                    children: (0, i.jsx)(R, { color: r.badgeColor })
                })
        });
    },
    G = () => ((0, S.Z)(), null),
    B = (e) => {
        let { selected: t, locationState: n } = e,
            { collectiblesShopTabNewBadgeDisplayOptions: l } = (0, A.Z)(),
            r = (0, T.b)('Collectibles Shop Button');
        if (null != l)
            switch (l.type) {
                case b.k2.TOOLTIP:
                    return (0, i.jsx)(U, {
                        selected: t,
                        locationState: n,
                        displayOptions: l
                    });
                case b.k2.COACHTIP:
                    return (0, i.jsx)(k, {
                        selected: t,
                        locationState: n,
                        displayOptions: l
                    });
                case b.k2.BADGE:
                    return (0, i.jsx)(w, {
                        selected: t,
                        locationState: n
                    });
            }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                r && (0, i.jsx)(G, {}),
                (0, i.jsx)(D, {
                    selected: t,
                    locationState: n
                })
            ]
        });
    };
