n.d(t, { i: () => V }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(780384),
    u = n(481060),
    d = n(596454),
    p = n(515753),
    h = n(410030),
    g = n(607070),
    f = n(100527),
    m = n(906732),
    b = n(821982),
    _ = n(377171),
    E = n(633302),
    O = n(153066),
    N = n(335131),
    v = n(744112),
    y = n(267097),
    I = n(364111),
    C = n(81136),
    S = n(141594),
    T = n(302800),
    P = n(215023),
    j = n(981631),
    A = n(388032),
    Z = n(558073);
function x(e) {
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
function L(e, t) {
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
let w = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(u.IGR, {
            className: Z.newBadge,
            color: null != t ? t : _.Z.STATUS_DANGER_BACKGROUND,
            text: A.NW.string(A.t.y2b7CA)
        });
    },
    R = () => {
        let { noCache: e, includeUnpublished: t } = (0, C.Z)();
        return (
            (0, I.E)(P.AW.HOME, {
                noCache: e,
                includeUnpublished: t,
                includeBundles: !0
            }),
            null
        );
    },
    D = (e) => {
        var { selected: t, locationState: n, icon: l, onMouseEnter: o, onMouseLeave: s, children: c } = e,
            d = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['selected', 'locationState', 'icon', 'onMouseEnter', 'onMouseLeave', 'children']);
        let h = (0, a.JA)('shop'),
            g = f.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: b } = (0, m.ZP)(g),
            [_, E] = i.useState(!1),
            O = i.useCallback(() => {
                E(!0),
                    (0, N.Sm)({
                        analyticsSource: g,
                        analyticsLocations: b
                    });
            }, [g, b, E]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                _ && (0, r.jsx)(R, {}),
                (0, r.jsx)(
                    p.Qj,
                    L(
                        x(
                            {
                                selected: t,
                                route: j.Z5c.COLLECTIBLES_SHOP,
                                icon: null != l ? l : u.EOn,
                                text: A.NW.string(A.t.pWG4zc),
                                locationState: n
                            },
                            h,
                            d
                        ),
                        {
                            onMouseEnter: o,
                            onMouseLeave: s,
                            onClick: O,
                            children: c
                        }
                    )
                )
            ]
        });
    },
    k = (e) => {
        let { selected: t, locationState: n } = e;
        return (0, r.jsx)(D, {
            selected: t,
            locationState: n,
            children: (0, r.jsx)(w, {})
        });
    },
    M = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            o = null != i ? (0, b.Z)(i, u.EFr.SIZE_80, !l) : void 0,
            a = n.title(),
            s = null === (t = n.body) || void 0 === t ? void 0 : t.call(n),
            c = null == s || '' === s;
        return (0, r.jsxs)('div', {
            className: Z.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)('div', {
                    className: Z.avatarContainer,
                    children: (0, r.jsx)(u.qEK, {
                        className: Z.avatar,
                        src: n.imageSrc,
                        avatarDecoration: o,
                        size: u.EFr.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: Z.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(u.X6q, {
                            variant: c ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: a
                        }),
                        !c &&
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: Z.marketingBadgeTooltipContent,
                                children: s
                            })
                    ]
                })
            ]
        });
    }),
    U = (e) => {
        var t, n, l, a, d, p, f, m, b, _, E, N;
        let v, y;
        let { selected: I, locationState: C, displayOptions: S } = e,
            T = (0, s.e7)([g.Z], () => g.Z.useReducedMotion),
            [P, j] = i.useState(0),
            [R, k] = i.useState(!1),
            U = (0, h.ZP)(),
            G = S.entrypointDecorationAssets,
            W = (0, c.wj)(U);
        R ? (W ? ((v = null === (t = S.entryPointBackgroundAssets) || void 0 === t ? void 0 : t.srcDarkHovered), (y = null === (l = S.entrypointBackgroundStyle) || void 0 === l ? void 0 : null === (n = l.hovered) || void 0 === n ? void 0 : n.dark)) : ((v = null === (a = S.entryPointBackgroundAssets) || void 0 === a ? void 0 : a.srcLightHovered), (y = null === (p = S.entrypointBackgroundStyle) || void 0 === p ? void 0 : null === (d = p.hovered) || void 0 === d ? void 0 : d.light))) : W ? ((v = null === (f = S.entryPointBackgroundAssets) || void 0 === f ? void 0 : f.srcDark), (y = null === (b = S.entrypointBackgroundStyle) || void 0 === b ? void 0 : null === (m = b.resting) || void 0 === m ? void 0 : m.dark)) : ((v = null === (_ = S.entryPointBackgroundAssets) || void 0 === _ ? void 0 : _.srcLight), (y = null === (N = S.entrypointBackgroundStyle) || void 0 === N ? void 0 : null === (E = N.resting) || void 0 === E ? void 0 : E.light));
        let V = i.useCallback(
                (e) => {
                    j((e) => (e + 1) % S.assetIds.length), k(!0), null == e || e();
                },
                [S.assetIds.length]
            ),
            B = i.useCallback((e) => {
                k(!1), null == e || e();
            }, []),
            H = S.title();
        return (0, r.jsx)(u.ua7, {
            text: (0, r.jsx)(M, {
                displayOptions: S,
                assetId: S.assetIds[P],
                reducedMotion: T
            }),
            tooltipClassName: Z.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof H ? H : A.NW.string(A.t.rSXaxc),
            children: (e) =>
                (0, r.jsxs)(
                    D,
                    L(
                        x(
                            {
                                className: null != S.entryPointClassName ? (0, O.l)(Z, S.entryPointClassName) : void 0,
                                selected: I,
                                locationState: C,
                                icon: S.entryPointIcon
                            },
                            e
                        ),
                        {
                            onMouseEnter: () => V(e.onMouseEnter),
                            onMouseLeave: () => B(e.onMouseLeave),
                            children: [
                                (0, r.jsx)('div', {
                                    className: Z.marketingButtonBackground,
                                    style: { background: y },
                                    children:
                                        null != v &&
                                        (0, r.jsx)('img', {
                                            src: v,
                                            className: Z.marketingButtonBackgroundImage,
                                            alt: '',
                                            'aria-hidden': !0
                                        })
                                }),
                                null != G &&
                                    !T &&
                                    (0, r.jsx)('img', {
                                        src: (0, c.wj)(U) ? G.srcDark : G.srcLight,
                                        className: o()(Z.marketingButtonImage, { [Z.marketingButtonImageHovered]: R }),
                                        alt: '',
                                        'aria-hidden': !0
                                    }),
                                (0, r.jsx)(w, { color: S.badgeColor })
                            ]
                        }
                    )
                )
        });
    },
    G = (e) => {
        let { selected: t, locationState: n, displayOptions: l } = e,
            o = i.useMemo(() => {
                var e;
                let t = null != l.emojiName ? (null === (e = E.ZP.getByName(l.emojiName)) || void 0 === e ? void 0 : e.surrogates) : null;
                return (0, r.jsxs)(u.Text, {
                    variant: 'text-sm/medium',
                    className: Z.marketingBadgeTooltipContent,
                    children: [null != t && (0, r.jsx)(d.Z, { emojiName: t }), l.title()]
                });
            }, [l]);
        return (0, r.jsx)(u.ua7, {
            text: o,
            tooltipClassName: Z.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': l.title(),
            children: (e) =>
                (0, r.jsx)(
                    D,
                    L(
                        x(
                            {
                                selected: t,
                                locationState: n
                            },
                            e
                        ),
                        { children: (0, r.jsx)(w, { color: l.badgeColor }) }
                    )
                )
        });
    },
    W = () => ((0, y.Z)(), null),
    V = (e) => {
        let { selected: t, locationState: n } = e,
            { collectiblesShopTabNewBadgeDisplayOptions: i } = (0, S.Z)(),
            l = (0, v.b)('Collectibles Shop Button');
        if (null != i)
            switch (i.type) {
                case T.k2.TOOLTIP:
                    return (0, r.jsx)(G, {
                        selected: t,
                        locationState: n,
                        displayOptions: i
                    });
                case T.k2.COACHTIP:
                    return (0, r.jsx)(U, {
                        selected: t,
                        locationState: n,
                        displayOptions: i
                    });
                case T.k2.BADGE:
                    return (0, r.jsx)(k, {
                        selected: t,
                        locationState: n
                    });
            }
        return (0, r.jsxs)(r.Fragment, {
            children: [
                l && (0, r.jsx)(W, {}),
                (0, r.jsx)(D, {
                    selected: t,
                    locationState: n
                })
            ]
        });
    };
