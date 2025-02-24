n.d(t, { i: () => B }), n(47120);
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
    f = n(607070),
    g = n(100527),
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
function w(e, t) {
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
}
let R = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(u.IGR, {
            className: Z.newBadge,
            color: null != t ? t : _.Z.STATUS_DANGER_BACKGROUND,
            text: A.NW.string(A.t.y2b7CA)
        });
    },
    D = () => {
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
    k = (e) => {
        var { selected: t, locationState: n, icon: l, onClick: o, onMouseEnter: s, onMouseLeave: c, children: d } = e,
            h = w(e, ['selected', 'locationState', 'icon', 'onClick', 'onMouseEnter', 'onMouseLeave', 'children']);
        let f = (0, a.JA)('shop'),
            b = g.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: _ } = (0, m.ZP)(b),
            [E, O] = i.useState(!1),
            v = i.useCallback(() => {
                void 0 !== o && o(),
                    O(!0),
                    (0, N.Sm)({
                        analyticsSource: b,
                        analyticsLocations: _
                    });
            }, [b, _, o, O]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                E && (0, r.jsx)(D, {}),
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
                            f,
                            h
                        ),
                        {
                            onMouseEnter: s,
                            onMouseLeave: c,
                            onClick: v,
                            children: d
                        }
                    )
                )
            ]
        });
    },
    M = (e) => (0, r.jsx)(k, L(x({}, e), { children: (0, r.jsx)(R, {}) })),
    U = i.memo(function (e) {
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
    G = (e) => {
        let t, n;
        var l,
            a,
            d,
            p,
            g,
            m,
            b,
            _,
            E,
            N,
            v,
            y,
            { displayOptions: I } = e,
            C = w(e, ['displayOptions']);
        let S = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
            [T, P] = i.useState(0),
            [j, D] = i.useState(!1),
            M = (0, h.ZP)(),
            G = I.entrypointDecorationAssets,
            W = (0, c.wj)(M);
        j ? (W ? ((t = null === (l = I.entryPointBackgroundAssets) || void 0 === l ? void 0 : l.srcDarkHovered), (n = null === (d = I.entrypointBackgroundStyle) || void 0 === d ? void 0 : null === (a = d.hovered) || void 0 === a ? void 0 : a.dark)) : ((t = null === (p = I.entryPointBackgroundAssets) || void 0 === p ? void 0 : p.srcLightHovered), (n = null === (m = I.entrypointBackgroundStyle) || void 0 === m ? void 0 : null === (g = m.hovered) || void 0 === g ? void 0 : g.light))) : W ? ((t = null === (b = I.entryPointBackgroundAssets) || void 0 === b ? void 0 : b.srcDark), (n = null === (E = I.entrypointBackgroundStyle) || void 0 === E ? void 0 : null === (_ = E.resting) || void 0 === _ ? void 0 : _.dark)) : ((t = null === (N = I.entryPointBackgroundAssets) || void 0 === N ? void 0 : N.srcLight), (n = null === (y = I.entrypointBackgroundStyle) || void 0 === y ? void 0 : null === (v = y.resting) || void 0 === v ? void 0 : v.light));
        let V = i.useCallback(
                (e) => {
                    P((e) => (e + 1) % I.assetIds.length), D(!0), null == e || e();
                },
                [I.assetIds.length]
            ),
            B = i.useCallback((e) => {
                D(!1), null == e || e();
            }, []),
            H = I.title();
        return (0, r.jsx)(u.ua7, {
            text: (0, r.jsx)(U, {
                displayOptions: I,
                assetId: I.assetIds[T],
                reducedMotion: S
            }),
            tooltipClassName: Z.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof H ? H : A.NW.string(A.t.rSXaxc),
            children: (e) =>
                (0, r.jsxs)(
                    k,
                    L(x(L(x({ className: null != I.entryPointClassName ? (0, O.l)(Z, I.entryPointClassName) : void 0 }, C), { icon: I.entryPointIcon }), e), {
                        onMouseEnter: () => V(e.onMouseEnter),
                        onMouseLeave: () => B(e.onMouseLeave),
                        children: [
                            (0, r.jsx)('div', {
                                className: Z.marketingButtonBackground,
                                style: { background: n },
                                children:
                                    null != t &&
                                    (0, r.jsx)('img', {
                                        src: t,
                                        className: Z.marketingButtonBackgroundImage,
                                        alt: '',
                                        'aria-hidden': !0
                                    })
                            }),
                            null != G &&
                                !S &&
                                (0, r.jsx)('img', {
                                    src: (0, c.wj)(M) ? G.srcDark : G.srcLight,
                                    className: o()(Z.marketingButtonImage, { [Z.marketingButtonImageHovered]: j }),
                                    alt: '',
                                    'aria-hidden': !0
                                }),
                            (0, r.jsx)(R, { color: I.badgeColor })
                        ]
                    })
                )
        });
    },
    W = (e) => {
        var { displayOptions: t } = e,
            n = w(e, ['displayOptions']);
        let l = i.useMemo(() => {
            var e;
            let n = null != t.emojiName ? (null === (e = E.ZP.getByName(t.emojiName)) || void 0 === e ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(u.Text, {
                variant: 'text-sm/medium',
                className: Z.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(d.Z, { emojiName: n }), t.title()]
            });
        }, [t]);
        return (0, r.jsx)(u.ua7, {
            text: l,
            tooltipClassName: Z.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': t.title(),
            children: (e) => (0, r.jsx)(k, L(x({}, n, e), { children: (0, r.jsx)(R, { color: t.badgeColor }) }))
        });
    },
    V = () => ((0, y.Z)(), null),
    B = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l } = e,
            { collectiblesShopTabNewBadgeDisplayOptions: o } = (0, S.Z)(),
            a = (0, v.b)('Collectibles Shop Button'),
            s = {
                selected: t,
                locationState: i,
                onClick: n,
                listItemRef: l
            };
        if (null != o)
            switch (o.type) {
                case T.k2.TOOLTIP:
                    return (0, r.jsx)(W, L(x({}, s), { displayOptions: o }));
                case T.k2.COACHTIP:
                    return (0, r.jsx)(G, L(x({}, s), { displayOptions: o }));
                case T.k2.BADGE:
                    return (0, r.jsx)(M, x({}, s));
            }
        return (0, r.jsxs)(r.Fragment, {
            children: [a && (0, r.jsx)(V, {}), (0, r.jsx)(k, x({}, s))]
        });
    };
