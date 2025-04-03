n.d(t, { i: () => F }), n(47120);
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
    _ = n(153066),
    E = n(335131),
    O = n(744112),
    N = n(267097),
    y = n(364111),
    I = n(594351),
    v = n(699733),
    C = n(681435),
    S = n(81136),
    T = n(302800),
    P = n(215023),
    j = n(981631),
    A = n(921944),
    Z = n(388032),
    x = n(208801);
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
            className: x.newBadge,
            color: null != t ? t : m.Z.STATUS_DANGER_BACKGROUND,
            text: Z.NW.string(Z.t.y2b7CA)
        });
    },
    k = () => {
        let { noCache: e, includeUnpublished: t } = (0, S.Z)();
        return (
            (0, y.E)(P.AW.HOME, {
                noCache: e,
                includeUnpublished: t,
                includeBundles: !0
            }),
            null
        );
    },
    M = (e) => {
        var { selected: t, locationState: n, icon: a, onClick: o, onMouseEnter: c, onMouseLeave: d, children: p } = e,
            g = R(e, ['selected', 'locationState', 'icon', 'onClick', 'onMouseEnter', 'onMouseLeave', 'children']);
        let m = (0, l.JA)('shop'),
            b = h.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: _ } = (0, f.ZP)(b),
            [O, N] = i.useState(!1),
            y = i.useCallback(() => {
                void 0 !== o && o(),
                    N(!0),
                    (0, E.Sm)({
                        analyticsSource: b,
                        analyticsLocations: _
                    });
            }, [b, _, o, N]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                O && (0, r.jsx)(k, {}),
                (0, r.jsx)(
                    u.Qj,
                    w(
                        L(
                            {
                                selected: t,
                                route: j.Z5c.COLLECTIBLES_SHOP,
                                icon: null != a ? a : s.EOn,
                                text: Z.NW.string(Z.t.pWG4zc),
                                locationState: n
                            },
                            m,
                            g
                        ),
                        {
                            onMouseEnter: c,
                            onMouseLeave: d,
                            onClick: y,
                            children: p
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
            className: x.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)('div', {
                    className: x.avatarContainer,
                    children: (0, r.jsx)(s.qEK, {
                        className: x.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: s.EFr.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: x.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: u ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: o
                        }),
                        !u &&
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                className: x.marketingBadgeTooltipContent,
                                children: c
                            })
                    ]
                })
            ]
        });
    }),
    W = (e) => {
        let t, n;
        var l,
            c,
            u,
            h,
            f,
            g,
            m,
            b,
            E,
            O,
            N,
            y,
            { displayOptions: I } = e,
            v = R(e, ['displayOptions']);
        let C = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
            [S, T] = i.useState(0),
            [P, j] = i.useState(!1),
            A = (0, d.ZP)(),
            k = (0, o.wj)(A);
        P ? (k ? ((t = null == (l = I.entryPointBackgroundAssets) ? void 0 : l.srcDarkHovered), (n = null == (u = I.entrypointBackgroundStyle) || null == (c = u.hovered) ? void 0 : c.dark)) : ((t = null == (h = I.entryPointBackgroundAssets) ? void 0 : h.srcLightHovered), (n = null == (g = I.entrypointBackgroundStyle) || null == (f = g.hovered) ? void 0 : f.light))) : k ? ((t = null == (m = I.entryPointBackgroundAssets) ? void 0 : m.srcDark), (n = null == (E = I.entrypointBackgroundStyle) || null == (b = E.resting) ? void 0 : b.dark)) : ((t = null == (O = I.entryPointBackgroundAssets) ? void 0 : O.srcLight), (n = null == (y = I.entrypointBackgroundStyle) || null == (N = y.resting) ? void 0 : N.light));
        let U = i.useCallback(
                (e) => {
                    T((e) => (e + 1) % I.assetIds.length), j(!0), null == e || e();
                },
                [I.assetIds.length]
            ),
            W = i.useCallback((e) => {
                j(!1), null == e || e();
            }, []),
            V = I.title();
        return (0, r.jsx)(s.ua7, {
            text: (0, r.jsx)(G, {
                displayOptions: I,
                assetId: I.assetIds[S],
                reducedMotion: C
            }),
            tooltipClassName: x.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof V ? V : Z.NW.string(Z.t.rSXaxc),
            children: (e) =>
                (0, r.jsxs)(
                    M,
                    w(L(w(L({ className: null != I.entryPointClassName ? (0, _.l)(x, I.entryPointClassName) : void 0 }, v), { icon: I.entryPointIcon }), e), {
                        onMouseEnter: () => U(e.onMouseEnter),
                        onMouseLeave: () => W(e.onMouseLeave),
                        children: [
                            (0, r.jsx)('div', {
                                className: x.marketingButtonBackground,
                                style: { background: n },
                                children:
                                    null != t &&
                                    (0, r.jsx)('img', {
                                        src: t,
                                        className: x.marketingButtonBackgroundImage,
                                        alt: '',
                                        'aria-hidden': !0
                                    })
                            }),
                            (0, r.jsx)(D, { color: I.badgeColor })
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
                className: x.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(c.Z, { emojiName: n }), t.title()]
            });
        }, [t]);
        return (0, r.jsx)(s.ua7, {
            text: l,
            tooltipClassName: x.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': t.title(),
            children: (e) => (0, r.jsx)(M, w(L({}, n, e), { children: (0, r.jsx)(D, { color: t.badgeColor }) }))
        });
    },
    B = (e) => {
        let { shouldShowCoachmark: t, dismissCoachmark: n } = (0, v.Z)(),
            l = i.useRef(0);
        i.useLayoutEffect(() => {
            l.current += 1;
        }, []);
        let a = i.useCallback(() => {
            var t;
            n(A.L.PRIMARY), null == (t = e.onClick) || t.call(e);
        }, [n, e]);
        return (0, r.jsx)(s.yRy, {
            renderPopout: () => (0, r.jsx)(I.Z, {}),
            position: 'right',
            align: 'top',
            shouldShow: t,
            spacing: 12,
            positionKey: String(l.current),
            animation: s.yRy.Animation.TRANSLATE,
            closeOnScroll: !0,
            onRequestClose: () => n(A.L.USER_DISMISS),
            children: (t) =>
                (0, r.jsx)(
                    M,
                    w(L({}, e), {
                        onClick: a,
                        children: (0, r.jsx)(D, {})
                    })
                )
        });
    },
    H = () => ((0, N.Z)(), null),
    F = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l } = e,
            { shopButtonDisplayOptions: a, dismissShopButtonDC: o } = (0, C.Z)(),
            s = (0, O.b)('Collectibles Shop Button'),
            { shouldShowCoachmark: c } = (0, v.Z)(),
            u = {
                selected: t,
                locationState: i,
                onClick: () => {
                    c || o(), null == n || n();
                },
                listItemRef: l
            };
        if (c) return (0, r.jsx)(B, L({}, u));
        if (null != a)
            switch (a.type) {
                case T.k2.TOOLTIP:
                    return (0, r.jsx)(V, w(L({}, u), { displayOptions: a }));
                case T.k2.COACHTIP:
                    return (0, r.jsx)(W, w(L({}, u), { displayOptions: a }));
                case T.k2.BADGE:
                    return (0, r.jsx)(U, L({}, u));
            }
        return (0, r.jsxs)(r.Fragment, {
            children: [s && (0, r.jsx)(H, {}), (0, r.jsx)(M, L({}, u))]
        });
    };
