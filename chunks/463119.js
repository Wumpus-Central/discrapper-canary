n.d(t, { i: () => G }), n(47120);
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
    N = n(335131),
    v = n(744112),
    T = n(267097),
    S = n(364111),
    Z = n(81136),
    A = n(141594),
    b = n(302800),
    x = n(215023),
    L = n(981631),
    y = n(388032),
    P = n(2556);
let O = (e) => {
        let { color: t } = e;
        return (0, i.jsx)(d.IGR, {
            className: P.newBadge,
            color: null != t ? t : E.Z.STATUS_DANGER_BACKGROUND,
            text: y.intl.string(y.t.y2b7CA)
        });
    },
    R = () => {
        let { noCache: e, includeUnpublished: t } = (0, Z.Z)();
        return (
            (0, S.E)(x.AW.HOME, {
                noCache: e,
                includeUnpublished: t,
                includeBundles: !0
            }),
            null
        );
    },
    j = (e) => {
        let { selected: t, locationState: n, icon: r, onMouseEnter: a, onMouseLeave: o, children: c, ...u } = e,
            m = (0, s.JA)('shop'),
            p = g.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: f } = (0, _.ZP)(p),
            [E, I] = l.useState(!1),
            C = l.useCallback(() => {
                I(!0),
                    (0, N.Sm)({
                        analyticsSource: p,
                        analyticsLocations: f
                    });
            }, [p, f, I]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                E && (0, i.jsx)(R, {}),
                (0, i.jsx)(h.Qj, {
                    selected: t,
                    route: L.Z5c.COLLECTIBLES_SHOP,
                    icon: null != r ? r : d.EOn,
                    text: y.intl.string(y.t.pWG4zc),
                    locationState: n,
                    ...m,
                    ...u,
                    onMouseEnter: a,
                    onMouseLeave: o,
                    onClick: C,
                    children: c
                })
            ]
        });
    },
    D = (e) => {
        let { selected: t, locationState: n } = e;
        return (0, i.jsx)(j, {
            selected: t,
            locationState: n,
            children: (0, i.jsx)(O, {})
        });
    },
    w = l.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: l, reducedMotion: r = !1 } = e,
            a = null != l ? (0, f.Z)(l, d.EFr.SIZE_80, !r) : void 0,
            s = n.title(),
            o = null === (t = n.body) || void 0 === t ? void 0 : t.call(n),
            c = null == o || '' === o;
        return (0, i.jsxs)('div', {
            className: P.shopMarketingTooltipContent,
            children: [
                (0, i.jsx)('div', {
                    className: P.avatarContainer,
                    children: (0, i.jsx)(d.qEK, {
                        className: P.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: d.EFr.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, i.jsxs)('div', {
                    className: P.shopMarketingTooltipText,
                    children: [
                        (0, i.jsx)(d.X6q, {
                            variant: c ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: s
                        }),
                        !c &&
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: P.marketingBadgeTooltipContent,
                                children: o
                            })
                    ]
                })
            ]
        });
    }),
    k = (e) => {
        var t, n, r, s, u, h, g, _, f, E, I, N;
        let v, T;
        let { selected: S, locationState: Z, displayOptions: A } = e,
            b = (0, o.e7)([p.Z], () => p.Z.useReducedMotion),
            [x, L] = l.useState(0),
            [R, D] = l.useState(!1),
            k = (0, m.ZP)(),
            M = A.entrypointDecorationAssets,
            U = (0, c.wj)(k);
        R ? (U ? ((v = null === (t = A.entryPointBackgroundAssets) || void 0 === t ? void 0 : t.srcDarkHovered), (T = null === (r = A.entrypointBackgroundStyle) || void 0 === r ? void 0 : null === (n = r.hovered) || void 0 === n ? void 0 : n.dark)) : ((v = null === (s = A.entryPointBackgroundAssets) || void 0 === s ? void 0 : s.srcLightHovered), (T = null === (h = A.entrypointBackgroundStyle) || void 0 === h ? void 0 : null === (u = h.hovered) || void 0 === u ? void 0 : u.light))) : U ? ((v = null === (g = A.entryPointBackgroundAssets) || void 0 === g ? void 0 : g.srcDark), (T = null === (f = A.entrypointBackgroundStyle) || void 0 === f ? void 0 : null === (_ = f.resting) || void 0 === _ ? void 0 : _.dark)) : ((v = null === (E = A.entryPointBackgroundAssets) || void 0 === E ? void 0 : E.srcLight), (T = null === (N = A.entrypointBackgroundStyle) || void 0 === N ? void 0 : null === (I = N.resting) || void 0 === I ? void 0 : I.light));
        let G = l.useCallback(
                (e) => {
                    L((e) => (e + 1) % A.assetIds.length), D(!0), null == e || e();
                },
                [A.assetIds.length]
            ),
            B = l.useCallback((e) => {
                D(!1), null == e || e();
            }, []),
            V = A.title();
        return (0, i.jsx)(d.ua7, {
            text: (0, i.jsx)(w, {
                displayOptions: A,
                assetId: A.assetIds[x],
                reducedMotion: b
            }),
            tooltipClassName: P.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof V ? V : y.intl.string(y.t.rSXaxc),
            children: (e) =>
                (0, i.jsxs)(j, {
                    className: null != A.entryPointClassName ? (0, C.l)(P, A.entryPointClassName) : void 0,
                    selected: S,
                    locationState: Z,
                    icon: A.entryPointIcon,
                    ...e,
                    onMouseEnter: () => G(e.onMouseEnter),
                    onMouseLeave: () => B(e.onMouseLeave),
                    children: [
                        (0, i.jsx)('div', {
                            className: P.marketingButtonBackground,
                            style: { background: T },
                            children:
                                null != v &&
                                (0, i.jsx)('img', {
                                    src: v,
                                    className: P.marketingButtonBackgroundImage,
                                    alt: '',
                                    'aria-hidden': !0
                                })
                        }),
                        null != M &&
                            !b &&
                            (0, i.jsx)('img', {
                                src: (0, c.wj)(k) ? M.srcDark : M.srcLight,
                                className: a()(P.marketingButtonImage, { [P.marketingButtonImageHovered]: R }),
                                alt: '',
                                'aria-hidden': !0
                            }),
                        (0, i.jsx)(O, { color: A.badgeColor })
                    ]
                })
        });
    },
    M = (e) => {
        let { selected: t, locationState: n, displayOptions: r } = e,
            a = l.useMemo(() => {
                var e;
                let t = null != r.emojiName ? (null === (e = I.ZP.getByName(r.emojiName)) || void 0 === e ? void 0 : e.surrogates) : null;
                return (0, i.jsxs)(d.Text, {
                    variant: 'text-sm/medium',
                    className: P.marketingBadgeTooltipContent,
                    children: [null != t && (0, i.jsx)(u.Z, { emojiName: t }), r.title()]
                });
            }, [r]);
        return (0, i.jsx)(d.ua7, {
            text: a,
            tooltipClassName: P.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': r.title(),
            children: (e) =>
                (0, i.jsx)(j, {
                    selected: t,
                    locationState: n,
                    ...e,
                    children: (0, i.jsx)(O, { color: r.badgeColor })
                })
        });
    },
    U = () => ((0, T.Z)(), null),
    G = (e) => {
        let { selected: t, locationState: n } = e,
            { collectiblesShopTabNewBadgeDisplayOptions: l } = (0, A.Z)(),
            r = (0, v.b)('Collectibles Shop Button');
        if (null != l)
            switch (l.type) {
                case b.k2.TOOLTIP:
                    return (0, i.jsx)(M, {
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
                    return (0, i.jsx)(D, {
                        selected: t,
                        locationState: n
                    });
            }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                r && (0, i.jsx)(U, {}),
                (0, i.jsx)(j, {
                    selected: t,
                    locationState: n
                })
            ]
        });
    };
