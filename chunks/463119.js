n.d(t, { i: () => Y }), n(388685);
var r = n(200651),
    i = n(192379),
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
    y = n(744112),
    I = n(267097),
    v = n(364111),
    C = n(594351),
    S = n(699733),
    N = n(681435),
    T = n(81136),
    P = n(302800),
    j = n(215023),
    A = n(981631),
    Z = n(921944),
    x = n(388032),
    w = n(208801);
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
function R(e, t) {
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
function D(e, t) {
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
let k = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(s.IGR, {
            className: w.newBadge,
            color: null != t ? t : m.Z.STATUS_DANGER_BACKGROUND,
            text: x.intl.string(x.t.y2b7CA)
        });
    },
    M = () => {
        let { noCache: e, includeUnpublished: t } = (0, T.Z)();
        return (
            (0, v.E)(j.AW.HOME, {
                noCache: e,
                includeUnpublished: t,
                includeBundles: !0
            }),
            null
        );
    },
    U = (e) => {
        var { selected: t, locationState: n, icon: a, onClick: o, collectibleShopTab: c, onMouseEnter: d, onMouseLeave: p, children: g } = e,
            m = D(e, ['selected', 'locationState', 'icon', 'onClick', 'collectibleShopTab', 'onMouseEnter', 'onMouseLeave', 'children']);
        let b = (0, l.JA)('shop'),
            _ = h.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: E } = (0, f.ZP)(_),
            [y, I] = i.useState(!1),
            v = i.useCallback(() => {
                void 0 !== o && o(),
                    void 0 !== c &&
                        (0, O.mK)({
                            openInLayer: !1,
                            tab: c,
                            analyticsLocations: E,
                            analyticsSource: _
                        }),
                    I(!0),
                    (0, O.Sm)({
                        analyticsSource: _,
                        analyticsLocations: E
                    });
            }, [_, E, o, I, c]),
            C = A.Z5c.COLLECTIBLES_SHOP;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                y && (0, r.jsx)(M, {}),
                (0, r.jsx)(
                    u.Qj,
                    R(
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
    G = (e) => (0, r.jsx)(U, R(L({}, e), { children: (0, r.jsx)(k, {}) })),
    V = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            a = null != i ? (0, g.Z)(i, s.EFr.SIZE_80, !l) : void 0,
            o = n.title(),
            c = null == (t = n.body) ? void 0 : t.call(n),
            u = null == c || '' === c;
        return (0, r.jsxs)('div', {
            className: w.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)('div', {
                    className: w.avatarContainer,
                    children: (0, r.jsx)(s.qEK, {
                        className: w.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: s.EFr.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: w.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: u ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: o
                        }),
                        !u &&
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                className: w.marketingBadgeTooltipContent,
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
            y,
            I,
            { displayOptions: v } = e,
            C = D(e, ['displayOptions']);
        let S = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
            [N, T] = i.useState(0),
            [P, j] = i.useState(!1),
            A = (0, d.ZP)(),
            Z = (0, o.wj)(A);
        P ? (Z ? ((t = null == (l = v.entryPointBackgroundAssets) ? void 0 : l.srcDarkHovered), (n = null == (u = v.entrypointBackgroundStyle) || null == (c = u.hovered) ? void 0 : c.dark)) : ((t = null == (h = v.entryPointBackgroundAssets) ? void 0 : h.srcLightHovered), (n = null == (g = v.entrypointBackgroundStyle) || null == (f = g.hovered) ? void 0 : f.light))) : Z ? ((t = null == (m = v.entryPointBackgroundAssets) ? void 0 : m.srcDark), (n = null == (_ = v.entrypointBackgroundStyle) || null == (b = _.resting) ? void 0 : b.dark)) : ((t = null == (O = v.entryPointBackgroundAssets) ? void 0 : O.srcLight), (n = null == (I = v.entrypointBackgroundStyle) || null == (y = I.resting) ? void 0 : y.light));
        let M = i.useCallback(
                (e) => {
                    T((e) => (e + 1) % v.assetIds.length), j(!0), null == e || e();
                },
                [v.assetIds.length]
            ),
            G = i.useCallback((e) => {
                j(!1), null == e || e();
            }, []),
            B = v.title();
        return (0, r.jsx)(s.ua7, {
            text: (0, r.jsx)(V, {
                displayOptions: v,
                assetId: v.assetIds[N],
                reducedMotion: S
            }),
            tooltipClassName: w.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof B ? B : x.intl.string(x.t.rSXaxc),
            children: (e) =>
                (0, r.jsxs)(
                    U,
                    R(L(R(L({ className: null != v.entryPointClassName ? (0, E.l)(w, v.entryPointClassName) : void 0 }, C), { icon: v.entryPointIcon }), e), {
                        onMouseEnter: () => M(e.onMouseEnter),
                        onMouseLeave: () => G(e.onMouseLeave),
                        children: [
                            (0, r.jsx)('div', {
                                className: w.marketingButtonBackground,
                                style: { background: n },
                                children:
                                    null != t &&
                                    (0, r.jsx)('img', {
                                        src: t,
                                        className: w.marketingButtonBackgroundImage,
                                        alt: '',
                                        'aria-hidden': !0
                                    })
                            }),
                            (0, r.jsx)(k, { color: v.badgeColor })
                        ]
                    })
                )
        });
    },
    H = (e) => {
        var { displayOptions: t } = e,
            n = D(e, ['displayOptions']);
        let l = i.useMemo(() => {
            var e;
            let n = null != t.emojiName ? (null == (e = b.ZP.getByName(t.emojiName)) ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(s.Text, {
                variant: 'text-sm/medium',
                className: w.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(c.Z, { emojiName: n }), t.title()]
            });
        }, [t]);
        return (0, r.jsx)(s.ua7, {
            text: l,
            tooltipClassName: w.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': t.title(),
            children: (e) => (0, r.jsx)(U, R(L({}, n, e), { children: (0, r.jsx)(k, { color: t.badgeColor }) }))
        });
    },
    F = (e) => {
        var { listScrollerRef: t } = e,
            n = D(e, ['listScrollerRef']);
        let l = i.useRef(null),
            a = (0, _.EQ)({ listScrollerRef: t }),
            { positionControlRef: o, onShopButtonClick: s } = a,
            c = D(a, ['positionControlRef', 'onShopButtonClick']);
        return (0, r.jsx)(
            _.Rg,
            R(
                L(
                    {
                        targetElementRef: l,
                        positionControlRef: o
                    },
                    c
                ),
                {
                    children: (0, r.jsx)(
                        U,
                        R(L({}, n), {
                            listItemRef: l,
                            collectibleShopTab: j.AW.ORBS,
                            onClick: s
                        })
                    )
                }
            )
        );
    },
    z = (e) => {
        let { shouldShowCoachmark: t, dismissCoachmark: n } = (0, S.Z)(),
            l = i.useRef(0);
        i.useLayoutEffect(() => {
            l.current += 1;
        }, []);
        let a = i.useCallback(() => {
            var t;
            n(Z.L.PRIMARY), null == (t = e.onClick) || t.call(e);
        }, [n, e]);
        return (0, r.jsx)(s.yRy, {
            renderPopout: () => (0, r.jsx)(C.Z, {}),
            position: 'right',
            align: 'top',
            shouldShow: t,
            spacing: 12,
            positionKey: String(l.current),
            animation: s.yRy.Animation.TRANSLATE,
            closeOnScroll: !0,
            onRequestClose: () => n(Z.L.USER_DISMISS),
            children: (t) =>
                (0, r.jsx)(
                    U,
                    R(L({}, e), {
                        onClick: a,
                        children: (0, r.jsx)(k, {})
                    })
                )
        });
    },
    W = () => ((0, I.Z)(), null),
    Y = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l, listScrollerRef: a } = e,
            { shouldShow: o } = (0, _.EQ)({}),
            { shopButtonDisplayOptions: s, dismissShopButtonDC: c } = (0, N.Z)(),
            u = (0, y.b)('Collectibles Shop Button'),
            { shouldShowCoachmark: d } = (0, S.Z)(),
            p = {
                selected: t,
                locationState: i,
                onClick: () => {
                    d || o || c(), null == n || n();
                },
                listItemRef: l
            };
        if (o) return (0, r.jsx)(F, R(L({}, p), { listScrollerRef: a }));
        if (d) return (0, r.jsx)(z, L({}, p));
        if (null != s)
            switch (s.type) {
                case P.k2.TOOLTIP:
                    return (0, r.jsx)(H, R(L({}, p), { displayOptions: s }));
                case P.k2.COACHTIP:
                    return (0, r.jsx)(B, R(L({}, p), { displayOptions: s }));
                case P.k2.BADGE:
                    return (0, r.jsx)(G, L({}, p));
            }
        return (0, r.jsxs)(r.Fragment, {
            children: [u && (0, r.jsx)(W, {}), (0, r.jsx)(U, L({}, p))]
        });
    };
