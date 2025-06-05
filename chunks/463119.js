n.d(t, { i: () => W }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(91192),
    a = n(442837),
    o = n(780384),
    s = n(481060),
    c = n(596454),
    u = n(515753),
    d = n(410030),
    p = n(607070),
    h = n(100527),
    f = n(906732),
    g = n(821982),
    m = n(377171),
    b = n(633302),
    _ = n(856555),
    E = n(153066),
    O = n(335131),
    I = n(744112),
    y = n(267097),
    v = n(364111),
    C = n(729700),
    S = n(681435),
    N = n(81136),
    T = n(302800),
    P = n(215023),
    j = n(981631),
    A = n(921944),
    x = n(388032),
    Z = n(208801);
function L(e) {
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
function w(e, t) {
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
function R(e, t) {
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
let D = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(s.IGR, {
            className: Z.newBadge,
            color: null != t ? t : m.Z.STATUS_DANGER_BACKGROUND,
            text: x.intl.string(x.t.y2b7CA)
        });
    },
    k = () => {
        let { noCache: e, includeUnpublished: t } = (0, N.Z)();
        return (
            (0, v.E)(P.AW.HOME, {
                noCache: e,
                includeUnpublished: t,
                includeBundles: !0
            }),
            null
        );
    },
    M = (e) => {
        var { selected: t, locationState: n, icon: a, onClick: o, collectibleShopTab: c, onMouseEnter: d, onMouseLeave: p, children: g } = e,
            m = R(e, ['selected', 'locationState', 'icon', 'onClick', 'collectibleShopTab', 'onMouseEnter', 'onMouseLeave', 'children']);
        let b = (0, l.JA)('shop'),
            _ = h.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: E } = (0, f.ZP)(_),
            [I, y] = i.useState(!1),
            v = i.useCallback(() => {
                void 0 !== o && o(),
                    void 0 !== c &&
                        (0, O.mK)({
                            openInLayer: !1,
                            tab: c,
                            analyticsLocations: E,
                            analyticsSource: _
                        }),
                    y(!0),
                    (0, O.Sm)({
                        analyticsSource: _,
                        analyticsLocations: E
                    });
            }, [_, E, o, y, c]),
            C = j.Z5c.COLLECTIBLES_SHOP;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                I && (0, r.jsx)(k, {}),
                (0, r.jsx)(
                    u.Qj,
                    w(
                        L(
                            {
                                selected: t,
                                route: C,
                                icon: null != a ? a : s.EOn,
                                text: x.intl.string(x.t.pWG4zc),
                                locationState: n
                            },
                            b,
                            m
                        ),
                        {
                            onMouseEnter: d,
                            onMouseLeave: p,
                            onClick: v,
                            children: g
                        }
                    )
                )
            ]
        });
    },
    U = (e) => (0, r.jsx)(M, w(L({}, e), { children: (0, r.jsx)(D, {}) })),
    G = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            a = null != i ? (0, g.Z)(i, s.EFr.SIZE_80, !l) : void 0,
            o = n.title(),
            c = null == (t = n.body) ? void 0 : t.call(n),
            u = null == c || '' === c;
        return (0, r.jsxs)('div', {
            className: Z.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)('div', {
                    className: Z.avatarContainer,
                    children: (0, r.jsx)(s.qEK, {
                        className: Z.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: s.EFr.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: Z.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: u ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: o
                        }),
                        !u &&
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                className: Z.marketingBadgeTooltipContent,
                                children: c
                            })
                    ]
                })
            ]
        });
    }),
    B = (e) => {
        let t, n;
        var l,
            c,
            u,
            h,
            f,
            g,
            m,
            b,
            _,
            O,
            I,
            y,
            { displayOptions: v } = e,
            C = R(e, ['displayOptions']);
        let S = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
            [N, T] = i.useState(0),
            [P, j] = i.useState(!1),
            A = (0, d.ZP)(),
            k = (0, o.wj)(A);
        P ? (k ? ((t = null == (l = v.entryPointBackgroundAssets) ? void 0 : l.srcDarkHovered), (n = null == (u = v.entrypointBackgroundStyle) || null == (c = u.hovered) ? void 0 : c.dark)) : ((t = null == (h = v.entryPointBackgroundAssets) ? void 0 : h.srcLightHovered), (n = null == (g = v.entrypointBackgroundStyle) || null == (f = g.hovered) ? void 0 : f.light))) : k ? ((t = null == (m = v.entryPointBackgroundAssets) ? void 0 : m.srcDark), (n = null == (_ = v.entrypointBackgroundStyle) || null == (b = _.resting) ? void 0 : b.dark)) : ((t = null == (O = v.entryPointBackgroundAssets) ? void 0 : O.srcLight), (n = null == (y = v.entrypointBackgroundStyle) || null == (I = y.resting) ? void 0 : I.light));
        let U = i.useCallback(
                (e) => {
                    T((e) => (e + 1) % v.assetIds.length), j(!0), null == e || e();
                },
                [v.assetIds.length]
            ),
            B = i.useCallback((e) => {
                j(!1), null == e || e();
            }, []),
            V = v.title();
        return (0, r.jsx)(s.ua7, {
            text: (0, r.jsx)(G, {
                displayOptions: v,
                assetId: v.assetIds[N],
                reducedMotion: S
            }),
            tooltipClassName: Z.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof V ? V : x.intl.string(x.t.rSXaxc),
            children: (e) =>
                (0, r.jsxs)(
                    M,
                    w(L(w(L({ className: null != v.entryPointClassName ? (0, E.l)(Z, v.entryPointClassName) : void 0 }, C), { icon: v.entryPointIcon }), e), {
                        onMouseEnter: () => U(e.onMouseEnter),
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
                            (0, r.jsx)(D, { color: v.badgeColor })
                        ]
                    })
                )
        });
    },
    V = (e) => {
        var { displayOptions: t } = e,
            n = R(e, ['displayOptions']);
        let l = i.useMemo(() => {
            var e;
            let n = null != t.emojiName ? (null == (e = b.ZP.getByName(t.emojiName)) ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(s.Text, {
                variant: 'text-sm/medium',
                className: Z.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(c.Z, { emojiName: n }), t.title()]
            });
        }, [t]);
        return (0, r.jsx)(s.ua7, {
            text: l,
            tooltipClassName: Z.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': t.title(),
            children: (e) => (0, r.jsx)(M, w(L({}, n, e), { children: (0, r.jsx)(D, { color: t.badgeColor }) }))
        });
    },
    H = (e) => {
        var { listScrollerRef: t } = e,
            n = R(e, ['listScrollerRef']);
        let l = i.useRef(null),
            a = (0, _.EQ)({ listScrollerRef: t }),
            { positionControlRef: o, onShopButtonClick: s } = a,
            c = R(a, ['positionControlRef', 'onShopButtonClick']);
        return (0, r.jsx)(
            _.Rg,
            w(
                L(
                    {
                        targetElementRef: l,
                        positionControlRef: o
                    },
                    c
                ),
                {
                    children: (0, r.jsx)(
                        M,
                        w(L({}, n), {
                            listItemRef: l,
                            collectibleShopTab: P.AW.ORBS,
                            onClick: s
                        })
                    )
                }
            )
        );
    },
    F = (e) => {
        var { displayOptions: t, dismissContent: n } = e,
            l = R(e, ['displayOptions', 'dismissContent']);
        let a = i.useRef(null),
            o = i.useRef(0);
        i.useLayoutEffect(() => {
            o.current += 1;
        }, []);
        let c = i.useCallback(() => {
            n(A.L.TAKE_ACTION);
        }, [n]);
        return (0, r.jsx)(s.yRy, {
            targetElementRef: a,
            renderPopout: () => (0, r.jsx)(C.Z, { displayOptions: t }),
            position: 'right',
            align: 'top',
            shouldShow: !0,
            spacing: 12,
            positionKey: String(o.current),
            animation: s.yRy.Animation.TRANSLATE,
            closeOnScroll: !0,
            onRequestClose: () => n(A.L.USER_DISMISS),
            children: (e) =>
                (0, r.jsx)(
                    M,
                    w(L({}, l), {
                        onClick: c,
                        listItemRef: a,
                        children: (0, r.jsx)(D, {})
                    })
                )
        });
    },
    z = () => ((0, y.Z)(), null),
    W = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l, listScrollerRef: a } = e,
            { shouldShow: o } = (0, _.EQ)({}),
            { shopButtonDisplayOptions: s, dismissShopButtonDC: c } = (0, S.Z)(),
            u = (0, I.b)('Collectibles Shop Button'),
            d = {
                selected: t,
                locationState: i,
                onClick: () => {
                    o || c(), null == n || n();
                },
                listItemRef: l
            };
        if (o) return (0, r.jsx)(H, w(L({}, d), { listScrollerRef: a }));
        if (null != s)
            switch (s.type) {
                case T.k2.TOOLTIP:
                    return (0, r.jsx)(V, w(L({}, d), { displayOptions: s }));
                case T.k2.COACHTIP:
                    return (0, r.jsx)(B, w(L({}, d), { displayOptions: s }));
                case T.k2.BADGE:
                    return (0, r.jsx)(U, L({}, d));
                case T.k2.COACHMARK:
                    return (0, r.jsx)(F, w(L({ dismissContent: c }, d), { displayOptions: s }));
            }
        return (0, r.jsxs)(r.Fragment, {
            children: [u && (0, r.jsx)(z, {}), (0, r.jsx)(M, L({}, d))]
        });
    };
