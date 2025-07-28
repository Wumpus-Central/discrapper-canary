(n.d(t, { i: () => H }), n(388685));
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
    O = n(153066),
    E = n(335131),
    y = n(364111),
    v = n(729700),
    I = n(681435),
    C = n(81136),
    S = n(302800),
    N = n(215023),
    T = n(981631),
    P = n(921944),
    j = n(388032),
    A = n(560232);
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function x(e, t) {
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
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let L = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(s.IGR, {
            className: A.newBadge,
            color: null != t ? t : m.Z.STATUS_DANGER_BACKGROUND,
            text: j.intl.string(j.t.y2b7CA)
        });
    },
    R = () => {
        let { noCache: e, includeUnpublished: t } = (0, C.Z)();
        return (
            (0, y.E)(N.AW.HOME, {
                noCache: e,
                includeUnpublished: t,
                includeBundles: !0
            }),
            null
        );
    },
    D = (e) => {
        var { selected: t, locationState: n, icon: a, onClick: o, collectibleShopTab: c, onMouseEnter: d, onMouseLeave: p, children: g } = e,
            m = w(e, ['selected', 'locationState', 'icon', 'onClick', 'collectibleShopTab', 'onMouseEnter', 'onMouseLeave', 'children']);
        let b = (0, l.JA)('shop'),
            _ = h.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: O } = (0, f.ZP)(_),
            [y, v] = i.useState(!1),
            I = i.useCallback(() => {
                (void 0 !== o && o(),
                    void 0 !== c &&
                        (0, E.mK)({
                            openInLayer: !1,
                            tab: c,
                            analyticsLocations: O,
                            analyticsSource: _
                        }),
                    v(!0),
                    (0, E.Sm)({
                        analyticsSource: _,
                        analyticsLocations: O
                    }));
            }, [_, O, o, v, c]),
            C = T.Z5c.COLLECTIBLES_SHOP;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                y && (0, r.jsx)(R, {}),
                (0, r.jsx)(
                    u.Qj,
                    x(
                        Z(
                            {
                                selected: t,
                                route: C,
                                icon: null != a ? a : s.EOn,
                                text: j.intl.string(j.t.pWG4zc),
                                locationState: n
                            },
                            b,
                            m
                        ),
                        {
                            onMouseEnter: d,
                            onMouseLeave: p,
                            onClick: I,
                            children: g
                        }
                    )
                )
            ]
        });
    },
    k = (e) => (0, r.jsx)(D, x(Z({}, e), { children: (0, r.jsx)(L, {}) })),
    M = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            a = null != i ? (0, g.Z)(i, s.EFr.SIZE_80, !l) : void 0,
            o = n.title(),
            c = null == (t = n.body) ? void 0 : t.call(n),
            u = null == c || '' === c;
        return (0, r.jsxs)('div', {
            className: A.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)('div', {
                    className: A.avatarContainer,
                    children: (0, r.jsx)(s.qEK, {
                        className: A.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: s.EFr.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: A.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: u ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: o
                        }),
                        !u &&
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                className: A.marketingBadgeTooltipContent,
                                children: c
                            })
                    ]
                })
            ]
        });
    }),
    U = (e) => {
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
            E,
            y,
            v,
            { displayOptions: I } = e,
            C = w(e, ['displayOptions']);
        let S = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
            [N, T] = i.useState(0),
            [P, R] = i.useState(!1),
            k = (0, d.ZP)(),
            U = (0, o.wj)(k);
        P ? (U ? ((t = null == (l = I.entryPointBackgroundAssets) ? void 0 : l.srcDarkHovered), (n = null == (u = I.entrypointBackgroundStyle) || null == (c = u.hovered) ? void 0 : c.dark)) : ((t = null == (h = I.entryPointBackgroundAssets) ? void 0 : h.srcLightHovered), (n = null == (g = I.entrypointBackgroundStyle) || null == (f = g.hovered) ? void 0 : f.light))) : U ? ((t = null == (m = I.entryPointBackgroundAssets) ? void 0 : m.srcDark), (n = null == (_ = I.entrypointBackgroundStyle) || null == (b = _.resting) ? void 0 : b.dark)) : ((t = null == (E = I.entryPointBackgroundAssets) ? void 0 : E.srcLight), (n = null == (v = I.entrypointBackgroundStyle) || null == (y = v.resting) ? void 0 : y.light));
        let G = i.useCallback(
                (e) => {
                    (I.assetIds.length > 0 && T((e) => (e + 1) % I.assetIds.length), R(!0), null == e || e());
                },
                [I.assetIds.length]
            ),
            V = i.useCallback((e) => {
                (R(!1), null == e || e());
            }, []),
            B = I.title();
        return (0, r.jsx)(s.ua7, {
            text: (0, r.jsx)(M, {
                displayOptions: I,
                assetId: I.assetIds[N],
                reducedMotion: S
            }),
            tooltipClassName: A.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof B ? B : j.intl.string(j.t.rSXaxc),
            children: (e) =>
                (0, r.jsxs)(
                    D,
                    x(Z(x(Z({ className: null != I.entryPointClassName ? (0, O.l)(A, I.entryPointClassName) : void 0 }, C), { icon: I.entryPointIcon }), e), {
                        onMouseEnter: () => G(e.onMouseEnter),
                        onMouseLeave: () => V(e.onMouseLeave),
                        children: [
                            (0, r.jsx)('div', {
                                className: A.marketingButtonBackground,
                                style: { background: n },
                                children:
                                    null != t &&
                                    (0, r.jsx)('img', {
                                        src: t,
                                        className: A.marketingButtonBackgroundImage,
                                        alt: '',
                                        'aria-hidden': !0
                                    })
                            }),
                            (0, r.jsx)(L, { color: I.badgeColor })
                        ]
                    })
                )
        });
    },
    G = (e) => {
        var { displayOptions: t } = e,
            n = w(e, ['displayOptions']);
        let l = i.useMemo(() => {
            var e;
            let n = null != t.emojiName ? (null == (e = b.ZP.getByName(t.emojiName)) ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(s.Text, {
                variant: 'text-sm/medium',
                className: A.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(c.Z, { emojiName: n }), t.title()]
            });
        }, [t]);
        return (0, r.jsx)(s.ua7, {
            text: l,
            tooltipClassName: A.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': t.title(),
            children: (e) => (0, r.jsx)(D, x(Z({}, n, e), { children: (0, r.jsx)(L, { color: t.badgeColor }) }))
        });
    },
    V = (e) => {
        var { listScrollerRef: t } = e,
            n = w(e, ['listScrollerRef']);
        let l = i.useRef(null),
            a = (0, _.EQ)({ listScrollerRef: t }),
            { positionControlRef: o, onShopButtonClick: s } = a,
            c = w(a, ['positionControlRef', 'onShopButtonClick']);
        return (0, r.jsx)(
            _.Pk,
            x(
                Z(
                    {
                        targetElementRef: l,
                        positionControlRef: o
                    },
                    c
                ),
                {
                    children: (0, r.jsx)(
                        D,
                        x(Z({}, n), {
                            listItemRef: l,
                            collectibleShopTab: N.AW.ORBS,
                            onClick: s
                        })
                    )
                }
            )
        );
    },
    B = (e) => {
        var t,
            n,
            { displayOptions: l, dismissContent: a } = e,
            s = w(e, ['displayOptions', 'dismissContent']);
        let c = i.useRef(null),
            u = (0, d.ZP)(),
            p = (0, o.wj)(u),
            h = l.entryPointBackgroundAssets,
            f = l.entrypointBackgroundStyle,
            g = p ? (null == h ? void 0 : h.srcDarkHovered) : null == h ? void 0 : h.srcLightHovered,
            m = p ? (null == f || null == (t = f.hovered) ? void 0 : t.dark) : null == f || null == (n = f.hovered) ? void 0 : n.light;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    D,
                    x(Z({}, s), {
                        onClick: () => a(P.L.TAKE_ACTION),
                        listItemRef: c,
                        children: [
                            (0, r.jsx)('div', {
                                className: A.marketingButtonBackground,
                                style: null != m ? { background: m } : void 0,
                                children:
                                    null != g &&
                                    (0, r.jsx)('img', {
                                        src: g,
                                        className: A.marketingButtonBackgroundImage,
                                        alt: '',
                                        'aria-hidden': !0
                                    })
                            }),
                            (0, r.jsx)(L, {})
                        ]
                    })
                ),
                (0, r.jsx)(v.Z, {
                    displayOptions: l,
                    targetElementRef: c,
                    onClick: () => a(P.L.TAKE_ACTION),
                    onRequestClose: () => a(P.L.USER_DISMISS)
                })
            ]
        });
    },
    H = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l, listScrollerRef: a } = e,
            { shouldShow: o } = (0, _.EQ)({}),
            { shopButtonDisplayOptions: s, dismissShopButtonDC: c } = (0, I.Z)(),
            u = {
                selected: t,
                locationState: i,
                onClick: () => {
                    (o || c(), null == n || n());
                },
                listItemRef: l
            };
        if (o) return (0, r.jsx)(V, x(Z({}, u), { listScrollerRef: a }));
        if (null != s)
            switch (s.type) {
                case S.k2.TOOLTIP:
                    return (0, r.jsx)(G, x(Z({}, u), { displayOptions: s }));
                case S.k2.COACHTIP:
                    return (0, r.jsx)(U, x(Z({}, u), { displayOptions: s }));
                case S.k2.BADGE:
                    return (0, r.jsx)(k, Z({}, u));
                case S.k2.COACHMARK:
                    return (0, r.jsx)(B, x(Z({ dismissContent: c }, u), { displayOptions: s }));
            }
        return (0, r.jsx)(D, Z({}, u));
    };
