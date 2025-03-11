n.d(t, { i: () => W }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(91192),
    o = n(442837),
    a = n(780384),
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
    v = n(364111),
    y = n(681435),
    I = n(81136),
    C = n(302800),
    S = n(215023),
    T = n(981631),
    P = n(388032),
    j = n(402204);
function A(e) {
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
function Z(e, t) {
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
function x(e, t) {
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
let L = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(s.IGR, {
            className: j.newBadge,
            color: null != t ? t : m.Z.STATUS_DANGER_BACKGROUND,
            text: P.NW.string(P.t.y2b7CA)
        });
    },
    w = () => {
        let { noCache: e, includeUnpublished: t } = (0, I.Z)();
        return (
            (0, v.E)(S.AW.HOME, {
                noCache: e,
                includeUnpublished: t,
                includeBundles: !0
            }),
            null
        );
    },
    R = (e) => {
        var { selected: t, locationState: n, icon: o, onClick: a, onMouseEnter: c, onMouseLeave: d, children: p } = e,
            g = x(e, ['selected', 'locationState', 'icon', 'onClick', 'onMouseEnter', 'onMouseLeave', 'children']);
        let m = (0, l.JA)('shop'),
            b = h.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: _ } = (0, f.ZP)(b),
            [O, N] = i.useState(!1),
            v = i.useCallback(() => {
                void 0 !== a && a(),
                    N(!0),
                    (0, E.Sm)({
                        analyticsSource: b,
                        analyticsLocations: _
                    });
            }, [b, _, a, N]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                O && (0, r.jsx)(w, {}),
                (0, r.jsx)(
                    u.Qj,
                    Z(
                        A(
                            {
                                selected: t,
                                route: T.Z5c.COLLECTIBLES_SHOP,
                                icon: null != o ? o : s.EOn,
                                text: P.NW.string(P.t.pWG4zc),
                                locationState: n
                            },
                            m,
                            g
                        ),
                        {
                            onMouseEnter: c,
                            onMouseLeave: d,
                            onClick: v,
                            children: p
                        }
                    )
                )
            ]
        });
    },
    D = (e) => (0, r.jsx)(R, Z(A({}, e), { children: (0, r.jsx)(L, {}) })),
    k = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            o = null != i ? (0, g.Z)(i, s.EFr.SIZE_80, !l) : void 0,
            a = n.title(),
            c = null === (t = n.body) || void 0 === t ? void 0 : t.call(n),
            u = null == c || '' === c;
        return (0, r.jsxs)('div', {
            className: j.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)('div', {
                    className: j.avatarContainer,
                    children: (0, r.jsx)(s.qEK, {
                        className: j.avatar,
                        src: n.imageSrc,
                        avatarDecoration: o,
                        size: s.EFr.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: j.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: u ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: a
                        }),
                        !u &&
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                className: j.marketingBadgeTooltipContent,
                                children: c
                            })
                    ]
                })
            ]
        });
    }),
    M = (e) => {
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
            v,
            { displayOptions: y } = e,
            I = x(e, ['displayOptions']);
        let C = (0, o.e7)([p.Z], () => p.Z.useReducedMotion),
            [S, T] = i.useState(0),
            [w, D] = i.useState(!1),
            M = (0, d.ZP)(),
            U = (0, a.wj)(M);
        w ? (U ? ((t = null === (l = y.entryPointBackgroundAssets) || void 0 === l ? void 0 : l.srcDarkHovered), (n = null === (u = y.entrypointBackgroundStyle) || void 0 === u ? void 0 : null === (c = u.hovered) || void 0 === c ? void 0 : c.dark)) : ((t = null === (h = y.entryPointBackgroundAssets) || void 0 === h ? void 0 : h.srcLightHovered), (n = null === (g = y.entrypointBackgroundStyle) || void 0 === g ? void 0 : null === (f = g.hovered) || void 0 === f ? void 0 : f.light))) : U ? ((t = null === (m = y.entryPointBackgroundAssets) || void 0 === m ? void 0 : m.srcDark), (n = null === (E = y.entrypointBackgroundStyle) || void 0 === E ? void 0 : null === (b = E.resting) || void 0 === b ? void 0 : b.dark)) : ((t = null === (O = y.entryPointBackgroundAssets) || void 0 === O ? void 0 : O.srcLight), (n = null === (v = y.entrypointBackgroundStyle) || void 0 === v ? void 0 : null === (N = v.resting) || void 0 === N ? void 0 : N.light));
        let G = i.useCallback(
                (e) => {
                    T((e) => (e + 1) % y.assetIds.length), D(!0), null == e || e();
                },
                [y.assetIds.length]
            ),
            W = i.useCallback((e) => {
                D(!1), null == e || e();
            }, []),
            V = y.title();
        return (0, r.jsx)(s.ua7, {
            text: (0, r.jsx)(k, {
                displayOptions: y,
                assetId: y.assetIds[S],
                reducedMotion: C
            }),
            tooltipClassName: j.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof V ? V : P.NW.string(P.t.rSXaxc),
            children: (e) =>
                (0, r.jsxs)(
                    R,
                    Z(A(Z(A({ className: null != y.entryPointClassName ? (0, _.l)(j, y.entryPointClassName) : void 0 }, I), { icon: y.entryPointIcon }), e), {
                        onMouseEnter: () => G(e.onMouseEnter),
                        onMouseLeave: () => W(e.onMouseLeave),
                        children: [
                            (0, r.jsx)('div', {
                                className: j.marketingButtonBackground,
                                style: { background: n },
                                children:
                                    null != t &&
                                    (0, r.jsx)('img', {
                                        src: t,
                                        className: j.marketingButtonBackgroundImage,
                                        alt: '',
                                        'aria-hidden': !0
                                    })
                            }),
                            (0, r.jsx)(L, { color: y.badgeColor })
                        ]
                    })
                )
        });
    },
    U = (e) => {
        var { displayOptions: t } = e,
            n = x(e, ['displayOptions']);
        let l = i.useMemo(() => {
            var e;
            let n = null != t.emojiName ? (null === (e = b.ZP.getByName(t.emojiName)) || void 0 === e ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(s.Text, {
                variant: 'text-sm/medium',
                className: j.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(c.Z, { emojiName: n }), t.title()]
            });
        }, [t]);
        return (0, r.jsx)(s.ua7, {
            text: l,
            tooltipClassName: j.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': t.title(),
            children: (e) => (0, r.jsx)(R, Z(A({}, n, e), { children: (0, r.jsx)(L, { color: t.badgeColor }) }))
        });
    },
    G = () => ((0, N.Z)(), null),
    W = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l } = e,
            { shopButtonDisplayOptions: o } = (0, y.Z)(),
            a = (0, O.b)('Collectibles Shop Button'),
            s = {
                selected: t,
                locationState: i,
                onClick: n,
                listItemRef: l
            };
        if (null != o)
            switch (o.type) {
                case C.k2.TOOLTIP:
                    return (0, r.jsx)(U, Z(A({}, s), { displayOptions: o }));
                case C.k2.COACHTIP:
                    return (0, r.jsx)(M, Z(A({}, s), { displayOptions: o }));
                case C.k2.BADGE:
                    return (0, r.jsx)(D, A({}, s));
            }
        return (0, r.jsxs)(r.Fragment, {
            children: [a && (0, r.jsx)(G, {}), (0, r.jsx)(R, A({}, s))]
        });
    };
