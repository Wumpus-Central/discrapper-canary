n.d(t, {
    i: function () {
        return G;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(596454),
    h = n(515753),
    m = n(410030),
    p = n(607070),
    g = n(100527),
    f = n(906732),
    _ = n(821982),
    E = n(377171),
    I = n(633302),
    C = n(153066),
    N = n(335131),
    v = n(67696),
    S = n(744112),
    T = n(267097),
    b = n(364111),
    A = n(81136),
    Z = n(141594),
    x = n(302800),
    L = n(981631),
    P = n(388032),
    O = n(335907);
let y = (e) => {
        let { color: t } = e;
        return (0, i.jsx)(d.TextBadge, {
            className: O.newBadge,
            color: null != t ? t : E.Z.STATUS_DANGER_BACKGROUND,
            text: P.intl.string(P.t.y2b7CA)
        });
    },
    R = () => {
        let { noCache: e, includeUnpublished: t } = (0, A.Z)();
        return (
            (0, b.E)({
                noCache: e,
                includeUnpublished: t,
                includeBundles: !0
            }),
            null
        );
    },
    j = (e) => {
        let { selected: t, locationState: n, icon: l, onMouseEnter: a, onMouseLeave: o, children: c, ...u } = e,
            m = (0, s.JA)('shop'),
            p = g.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: _ } = (0, f.ZP)(p),
            E = (0, v.n)('ShopLinkButton'),
            [I, C] = r.useState(!1),
            S = r.useCallback(() => {
                E && C(!0),
                    (0, N.Sm)({
                        analyticsSource: p,
                        analyticsLocations: _
                    });
            }, [p, _, E, C]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                I && (0, i.jsx)(R, {}),
                (0, i.jsx)(h.Qj, {
                    selected: t,
                    route: L.Z5c.COLLECTIBLES_SHOP,
                    icon: null != l ? l : d.ShopIcon,
                    text: P.intl.string(P.t.pWG4zc),
                    locationState: n,
                    ...m,
                    ...u,
                    onMouseEnter: a,
                    onMouseLeave: o,
                    onClick: S,
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
            children: (0, i.jsx)(y, {})
        });
    },
    M = r.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: r, reducedMotion: l = !1 } = e,
            a = null != r ? (0, _.Z)(r, d.AvatarSizes.SIZE_80, !l) : void 0,
            s = n.title(),
            o = null === (t = n.body) || void 0 === t ? void 0 : t.call(n),
            c = null == o || '' === o;
        return (0, i.jsxs)('div', {
            className: O.shopMarketingTooltipContent,
            children: [
                (0, i.jsx)('div', {
                    className: O.avatarContainer,
                    children: (0, i.jsx)(d.Avatar, {
                        className: O.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: d.AvatarSizes.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, i.jsxs)('div', {
                    className: O.shopMarketingTooltipText,
                    children: [
                        (0, i.jsx)(d.Heading, {
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
    w = (e) => {
        var t, n, l, s, u, h, g, f, _, E, I, N;
        let v, S;
        let { selected: T, locationState: b, displayOptions: A } = e,
            Z = (0, o.e7)([p.Z], () => p.Z.useReducedMotion),
            [x, L] = r.useState(0),
            [R, D] = r.useState(!1),
            w = (0, m.ZP)(),
            k = A.entrypointDecorationAssets,
            U = (0, c.wj)(w);
        R ? (U ? ((v = null === (t = A.entryPointBackgroundAssets) || void 0 === t ? void 0 : t.srcDarkHovered), (S = null === (l = A.entrypointBackgroundStyle) || void 0 === l ? void 0 : null === (n = l.hovered) || void 0 === n ? void 0 : n.dark)) : ((v = null === (s = A.entryPointBackgroundAssets) || void 0 === s ? void 0 : s.srcLightHovered), (S = null === (h = A.entrypointBackgroundStyle) || void 0 === h ? void 0 : null === (u = h.hovered) || void 0 === u ? void 0 : u.light))) : U ? ((v = null === (g = A.entryPointBackgroundAssets) || void 0 === g ? void 0 : g.srcDark), (S = null === (_ = A.entrypointBackgroundStyle) || void 0 === _ ? void 0 : null === (f = _.resting) || void 0 === f ? void 0 : f.dark)) : ((v = null === (E = A.entryPointBackgroundAssets) || void 0 === E ? void 0 : E.srcLight), (S = null === (N = A.entrypointBackgroundStyle) || void 0 === N ? void 0 : null === (I = N.resting) || void 0 === I ? void 0 : I.light));
        let G = r.useCallback(
                (e) => {
                    L((e) => (e + 1) % A.assetIds.length), D(!0), null == e || e();
                },
                [A.assetIds.length]
            ),
            B = r.useCallback((e) => {
                D(!1), null == e || e();
            }, []),
            H = A.title();
        return (0, i.jsx)(d.Tooltip, {
            text: (0, i.jsx)(M, {
                displayOptions: A,
                assetId: A.assetIds[x],
                reducedMotion: Z
            }),
            tooltipClassName: O.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof H ? H : P.intl.string(P.t.rSXaxc),
            children: (e) =>
                (0, i.jsxs)(j, {
                    className: null != A.entryPointClassName ? (0, C.l)(O, A.entryPointClassName) : void 0,
                    selected: T,
                    locationState: b,
                    icon: A.entryPointIcon,
                    ...e,
                    onMouseEnter: () => G(e.onMouseEnter),
                    onMouseLeave: () => B(e.onMouseLeave),
                    children: [
                        (0, i.jsx)('div', {
                            className: O.marketingButtonBackground,
                            style: { background: S },
                            children:
                                null != v &&
                                (0, i.jsx)('img', {
                                    src: v,
                                    className: O.marketingButtonBackgroundImage,
                                    alt: '',
                                    'aria-hidden': !0
                                })
                        }),
                        null != k &&
                            !Z &&
                            (0, i.jsx)('img', {
                                src: (0, c.wj)(w) ? k.srcDark : k.srcLight,
                                className: a()(O.marketingButtonImage, { [O.marketingButtonImageHovered]: R }),
                                alt: '',
                                'aria-hidden': !0
                            }),
                        (0, i.jsx)(y, { color: A.badgeColor })
                    ]
                })
        });
    },
    k = (e) => {
        let { selected: t, locationState: n, displayOptions: l } = e,
            a = r.useMemo(() => {
                var e;
                let t = null != l.emojiName ? (null === (e = I.ZP.getByName(l.emojiName)) || void 0 === e ? void 0 : e.surrogates) : null;
                return (0, i.jsxs)(d.Text, {
                    variant: 'text-sm/medium',
                    className: O.marketingBadgeTooltipContent,
                    children: [null != t && (0, i.jsx)(u.Z, { emojiName: t }), l.title()]
                });
            }, [l]);
        return (0, i.jsx)(d.Tooltip, {
            text: a,
            tooltipClassName: O.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': l.title(),
            children: (e) =>
                (0, i.jsx)(j, {
                    selected: t,
                    locationState: n,
                    ...e,
                    children: (0, i.jsx)(y, { color: l.badgeColor })
                })
        });
    },
    U = () => ((0, T.Z)(), null),
    G = (e) => {
        let { selected: t, locationState: n } = e,
            { collectiblesShopTabNewBadgeDisplayOptions: r } = (0, Z.Z)(),
            l = (0, S.b)('Collectibles Shop Button');
        if (null != r)
            switch (r.type) {
                case x.k2.TOOLTIP:
                    return (0, i.jsx)(k, {
                        selected: t,
                        locationState: n,
                        displayOptions: r
                    });
                case x.k2.COACHTIP:
                    return (0, i.jsx)(w, {
                        selected: t,
                        locationState: n,
                        displayOptions: r
                    });
                case x.k2.BADGE:
                    return (0, i.jsx)(D, {
                        selected: t,
                        locationState: n
                    });
            }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                l && (0, i.jsx)(U, {}),
                (0, i.jsx)(j, {
                    selected: t,
                    locationState: n
                })
            ]
        });
    };
