n.d(t, { i: () => K }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(704215),
    u = n(692547),
    d = n(780384),
    p = n(481060),
    f = n(596454),
    g = n(515753),
    h = n(410030),
    m = n(607070),
    b = n(100527),
    _ = n(906732),
    E = n(821982),
    O = n(243778),
    v = n(633302),
    y = n(153066),
    I = n(335131),
    C = n(364111),
    S = n(729700),
    T = n(827360),
    N = n(681435),
    j = n(81136),
    P = n(302800),
    x = n(215023),
    Z = n(981631),
    A = n(921944),
    w = n(388032),
    L = n(959088);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function D(e, t) {
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
function M(e, t) {
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
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let k = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(p.IGR, {
            className: L.newBadge,
            color: null != t ? t : u.Z.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT.css,
            text: w.intl.string(w.t.y2b7CA),
        });
    },
    U = () => {
        let { noCache: e, includeUnpublished: t } = (0, j.Z)();
        return (
            (0, C.E)(
                x.AW.HOME,
                {
                    noCache: e,
                    includeUnpublished: t,
                    includeBundles: !0,
                },
                void 0,
                !0,
            ),
            null
        );
    },
    G = (e) => {
        var {
                selected: t,
                locationState: n,
                icon: l,
                onClick: a,
                collectibleShopTab: s,
                onMouseEnter: c,
                onMouseLeave: u,
                children: d,
            } = e,
            f = M(e, [
                "selected",
                "locationState",
                "icon",
                "onClick",
                "collectibleShopTab",
                "onMouseEnter",
                "onMouseLeave",
                "children",
            ]);
        let h = (0, o.JA)("shop"),
            m = b.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: E } = (0, _.ZP)(m),
            [O, v] = i.useState(!1),
            y = i.useCallback(() => {
                void 0 !== a && a(),
                    void 0 !== s &&
                        (0, I.mK)({
                            tab: s,
                            analyticsLocations: E,
                            analyticsSource: m,
                        }),
                    v(!0),
                    (0, I.Sm)({
                        analyticsSource: m,
                        analyticsLocations: E,
                    });
            }, [m, E, a, v, s]),
            C = Z.Z5c.COLLECTIBLES_SHOP;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                O && (0, r.jsx)(U, {}),
                (0, r.jsx)(
                    g.Qj,
                    D(
                        R(
                            {
                                selected: t,
                                route: C,
                                icon: null != l ? l : p.EOn,
                                text: w.intl.string(w.t.pWG4ze),
                                locationState: n,
                            },
                            h,
                            f,
                        ),
                        {
                            onMouseEnter: c,
                            onMouseLeave: u,
                            onClick: y,
                            children: d,
                        },
                    ),
                ),
            ],
        });
    },
    H = (e) => (0, r.jsx)(G, D(R({}, e), { children: (0, r.jsx)(k, {}) })),
    B = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            a = null != i ? (0, E.Z)(i, p.EFr.SIZE_80, !l) : void 0,
            o = n.title(),
            s = null == (t = n.body) ? void 0 : t.call(n),
            c = null == s || "" === s;
        return (0, r.jsxs)("div", {
            className: L.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)("div", {
                    className: L.avatarContainer,
                    children: (0, r.jsx)(p.qEK, {
                        className: L.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: p.EFr.SIZE_80,
                        "aria-hidden": !0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: L.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(p.Heading, {
                            variant: c ? "heading-sm/medium" : "heading-sm/bold",
                            children: o,
                        }),
                        !c &&
                            (0, r.jsx)(p.Text, {
                                variant: "text-xs/normal",
                                className: L.marketingBadgeTooltipContent,
                                children: s,
                            }),
                    ],
                }),
            ],
        });
    }),
    V = (e) => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230;
    },
    F = (e) => {
        let t, n;
        var l,
            o,
            c,
            u,
            f,
            g,
            b,
            _,
            E,
            O,
            v,
            I,
            { displayOptions: C } = e,
            S = M(e, ["displayOptions"]);
        let T = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
            [N, j] = i.useState(0),
            [P, x] = i.useState(!1),
            [Z, A] = i.useState(!1),
            U = i.useRef(null),
            H = i.useRef(null),
            F = (0, h.ZP)(),
            z = (0, d.wj)(F);
        P
            ? z
                ? ((t = null == (l = C.entryPointBackgroundAssets) ? void 0 : l.srcDarkHovered),
                  (n = null == (c = C.entrypointBackgroundStyle) || null == (o = c.hovered) ? void 0 : o.dark))
                : ((t = null == (u = C.entryPointBackgroundAssets) ? void 0 : u.srcLightHovered),
                  (n = null == (g = C.entrypointBackgroundStyle) || null == (f = g.hovered) ? void 0 : f.light))
            : z
              ? ((t = null == (b = C.entryPointBackgroundAssets) ? void 0 : b.srcDark),
                (n = null == (E = C.entrypointBackgroundStyle) || null == (_ = E.resting) ? void 0 : _.dark))
              : ((t = null == (O = C.entryPointBackgroundAssets) ? void 0 : O.srcLight),
                (n = null == (I = C.entrypointBackgroundStyle) || null == (v = I.resting) ? void 0 : v.light));
        let Y = i.useCallback(
                (e) => {
                    C.assetIds.length > 0 && j((e) => (e + 1) % C.assetIds.length), x(!0);
                    let t = () => {
                        A(V(U));
                    };
                    t(), (H.current = requestAnimationFrame(t)), null == e || e();
                },
                [C.assetIds.length],
            ),
            W = i.useCallback((e) => {
                x(!1),
                    A(!1),
                    null != H.current && (cancelAnimationFrame(H.current), (H.current = null)),
                    null == e || e();
            }, []);
        i.useEffect(
            () => () => {
                null != H.current && cancelAnimationFrame(H.current);
            },
            [],
        );
        let K = C.title();
        return (0, r.jsx)(p.aML, {
            "data-migration-pending": !0,
            text: (0, r.jsx)(B, {
                displayOptions: C,
                assetId: C.assetIds[N],
                reducedMotion: T,
            }),
            tooltipClassName: L.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            "aria-label": "string" == typeof K ? K : w.intl.string(w.t.rSXaxY),
            children: (e) =>
                (0, r.jsxs)(
                    G,
                    D(
                        R(
                            D(
                                R(
                                    {
                                        className:
                                            null != C.entryPointClassName ? (0, y.l)(L, C.entryPointClassName) : void 0,
                                    },
                                    S,
                                ),
                                { icon: C.entryPointIcon },
                            ),
                            e,
                        ),
                        {
                            onMouseEnter: () => Y(e.onMouseEnter),
                            onMouseLeave: () => W(e.onMouseLeave),
                            children: [
                                (0, r.jsx)("div", {
                                    ref: U,
                                    className: L.marketingButtonBackgroundNew,
                                    style: { background: n },
                                    children:
                                        null != t &&
                                        (0, r.jsx)("img", {
                                            src: t,
                                            className: a()(
                                                L.marketingButtonBackgroundImage,
                                                Z && L.marketingButtonBackgroundImageFaded,
                                            ),
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(k, { color: C.badgeColor }),
                            ],
                        },
                    ),
                ),
        });
    },
    z = (e) => {
        var { displayOptions: t } = e,
            n = M(e, ["displayOptions"]);
        let l = i.useMemo(() => {
            var e;
            let n = null != t.emojiName ? (null == (e = v.ZP.getByName(t.emojiName)) ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(p.Text, {
                variant: "text-sm/medium",
                className: L.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(f.Z, { emojiName: n }), t.title()],
            });
        }, [t]);
        return (0, r.jsx)(p.aML, {
            "data-migration-pending": !0,
            text: l,
            tooltipClassName: L.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) => (0, r.jsx)(G, D(R({}, n, e), { children: (0, r.jsx)(k, { color: t.badgeColor }) })),
        });
    },
    Y = (e) => {
        var t,
            n,
            { displayOptions: l, dismissContent: o } = e,
            s = M(e, ["displayOptions", "dismissContent"]);
        let c = i.useRef(null),
            u = i.useRef(null),
            [p, f] = i.useState(!1),
            g = (0, h.ZP)(),
            m = (0, d.wj)(g),
            b = l.entryPointBackgroundAssets,
            _ = l.entrypointBackgroundStyle,
            E = m ? (null == b ? void 0 : b.srcDarkHovered) : null == b ? void 0 : b.srcLightHovered,
            O = m
                ? null == _ || null == (t = _.hovered)
                    ? void 0
                    : t.dark
                : null == _ || null == (n = _.hovered)
                  ? void 0
                  : n.light;
        return (
            i.useEffect(() => {
                if (null == E || "" === E) return void f(!1);
                let e = () => {
                    f(V(u));
                };
                e();
                let t = requestAnimationFrame(e);
                return () => {
                    cancelAnimationFrame(t);
                };
            }, [E]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(
                        G,
                        D(R({}, s), {
                            onClick: () => o(A.L.TAKE_ACTION),
                            listItemRef: c,
                            children: [
                                (0, r.jsx)("div", {
                                    ref: u,
                                    className: L.marketingButtonBackgroundNew,
                                    style: null != O ? { background: O } : void 0,
                                    children:
                                        null != E &&
                                        (0, r.jsx)("img", {
                                            src: E,
                                            className: a()(
                                                L.marketingButtonBackgroundImage,
                                                p && L.marketingButtonBackgroundImageFaded,
                                            ),
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(k, {}),
                            ],
                        }),
                    ),
                    (0, r.jsx)(S.Z, {
                        displayOptions: l,
                        targetElementRef: c,
                        onClick: () => o(A.L.TAKE_ACTION),
                        onRequestClose: () => o(A.L.USER_DISMISS),
                    }),
                ],
            })
        );
    },
    W = (e) => {
        var { dismissContent: t } = e,
            n = M(e, ["dismissContent"]);
        let l = i.useRef(null);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    G,
                    D(R({}, n), {
                        onClick: () => t(A.L.TAKE_ACTION),
                        listItemRef: l,
                    }),
                ),
                (0, r.jsx)(T.Z, {
                    targetElementRef: l,
                    onClick: () => t(A.L.TAKE_ACTION),
                    onRequestClose: () => t(A.L.USER_DISMISS),
                }),
            ],
        });
    },
    K = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l } = e,
            { shopButtonDisplayOptions: a, dismissShopButtonDC: o } = (0, N.Z)(),
            s = !(0, p.$sL)(),
            [u, d] = (0, O.US)(s ? [c.z.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            f = {
                selected: t,
                locationState: i,
                onClick: () => {
                    o(), null == n || n();
                },
                listItemRef: l,
            };
        if (null != a)
            switch (a.type) {
                case P.k2.TOOLTIP:
                    return (0, r.jsx)(z, D(R({}, f), { displayOptions: a }));
                case P.k2.COACHTIP:
                    return (0, r.jsx)(F, D(R({}, f), { displayOptions: a }));
                case P.k2.BADGE:
                    return (0, r.jsx)(H, R({}, f));
                case P.k2.COACHMARK:
                    return (0, r.jsx)(Y, D(R({ dismissContent: o }, f), { displayOptions: a }));
            }
        return u === c.z.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, r.jsx)(W, D(R({}, f), { dismissContent: d }))
            : (0, r.jsx)(G, R({}, f));
    };
