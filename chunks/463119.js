n.d(t, { i: () => q }), n(388685);
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
    y = n(567400),
    I = n(153066),
    C = n(335131),
    S = n(364111),
    T = n(729700),
    N = n(827360),
    j = n(681435),
    P = n(81136),
    x = n(302800),
    A = n(215023),
    Z = n(981631),
    w = n(921944),
    L = n(388032),
    R = n(959088);
function D(e) {
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
function M(e, t) {
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
function k(e, t) {
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
let U = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(p.IGR, {
            className: R.newBadge,
            color: null != t ? t : u.Z.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT.css,
            text: L.intl.string(L.t.y2b7CA),
        });
    },
    G = () => {
        let { noCache: e, includeUnpublished: t } = (0, P.Z)();
        return (
            (0, S.E)(
                A.AW.HOME,
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
    H = (e) => {
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
            f = k(e, [
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
                        (0, C.mK)({
                            tab: s,
                            analyticsLocations: E,
                            analyticsSource: m,
                        }),
                    v(!0),
                    (0, C.Sm)({
                        analyticsSource: m,
                        analyticsLocations: E,
                    });
            }, [m, E, a, v, s]),
            I = Z.Z5c.COLLECTIBLES_SHOP;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                O && (0, r.jsx)(G, {}),
                (0, r.jsx)(
                    g.Qj,
                    M(
                        D(
                            {
                                selected: t,
                                route: I,
                                icon: null != l ? l : p.EOn,
                                text: L.intl.string(L.t.pWG4ze),
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
    B = (e) => (0, r.jsx)(H, M(D({}, e), { children: (0, r.jsx)(U, {}) })),
    V = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            a = null != i ? (0, E.Z)(i, p.EFr.SIZE_80, !l) : void 0,
            o = n.title(),
            s = null == (t = n.body) ? void 0 : t.call(n),
            c = null == s || "" === s;
        return (0, r.jsxs)("div", {
            className: R.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)("div", {
                    className: R.avatarContainer,
                    children: (0, r.jsx)(p.qEK, {
                        className: R.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: p.EFr.SIZE_80,
                        "aria-hidden": !0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: R.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(p.Heading, {
                            variant: c ? "heading-sm/medium" : "heading-sm/bold",
                            children: o,
                        }),
                        !c &&
                            (0, r.jsx)(p.Text, {
                                variant: "text-xs/normal",
                                className: R.marketingBadgeTooltipContent,
                                children: s,
                            }),
                    ],
                }),
            ],
        });
    }),
    F = (e) => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230;
    },
    z = (e) => {
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
            y,
            { displayOptions: C } = e,
            S = k(e, ["displayOptions"]);
        let T = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
            [N, j] = i.useState(0),
            [P, x] = i.useState(!1),
            [A, Z] = i.useState(!1),
            w = i.useRef(null),
            G = i.useRef(null),
            B = (0, h.ZP)(),
            z = (0, d.wj)(B);
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
                (n = null == (y = C.entrypointBackgroundStyle) || null == (v = y.resting) ? void 0 : v.light));
        let Y = i.useCallback(
                (e) => {
                    C.assetIds.length > 0 && j((e) => (e + 1) % C.assetIds.length), x(!0);
                    let t = () => {
                        Z(F(w));
                    };
                    t(), (G.current = requestAnimationFrame(t)), null == e || e();
                },
                [C.assetIds.length],
            ),
            W = i.useCallback((e) => {
                x(!1),
                    Z(!1),
                    null != G.current && (cancelAnimationFrame(G.current), (G.current = null)),
                    null == e || e();
            }, []);
        i.useEffect(
            () => () => {
                null != G.current && cancelAnimationFrame(G.current);
            },
            [],
        );
        let K = C.title();
        return (0, r.jsx)(p.aML, {
            "data-migration-pending": !0,
            text: (0, r.jsx)(V, {
                displayOptions: C,
                assetId: C.assetIds[N],
                reducedMotion: T,
            }),
            tooltipClassName: R.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            "aria-label": "string" == typeof K ? K : L.intl.string(L.t.rSXaxY),
            children: (e) =>
                (0, r.jsxs)(
                    H,
                    M(
                        D(
                            M(
                                D(
                                    {
                                        className:
                                            null != C.entryPointClassName ? (0, I.l)(R, C.entryPointClassName) : void 0,
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
                                    ref: w,
                                    className: R.marketingButtonBackgroundNew,
                                    style: { background: n },
                                    children:
                                        null != t &&
                                        (0, r.jsx)("img", {
                                            src: t,
                                            className: a()(
                                                R.marketingButtonBackgroundImage,
                                                A && R.marketingButtonBackgroundImageFaded,
                                            ),
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(U, { color: C.badgeColor }),
                            ],
                        },
                    ),
                ),
        });
    },
    Y = (e) => {
        var { displayOptions: t } = e,
            n = k(e, ["displayOptions"]);
        let l = i.useMemo(() => {
            var e;
            let n = null != t.emojiName ? (null == (e = v.ZP.getByName(t.emojiName)) ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(p.Text, {
                variant: "text-sm/medium",
                className: R.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(f.Z, { emojiName: n }), t.title()],
            });
        }, [t]);
        return (0, r.jsx)(p.aML, {
            "data-migration-pending": !0,
            text: l,
            tooltipClassName: R.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) => (0, r.jsx)(H, M(D({}, n, e), { children: (0, r.jsx)(U, { color: t.badgeColor }) })),
        });
    },
    W = (e) => {
        var t,
            n,
            { displayOptions: l, dismissContent: o } = e,
            s = k(e, ["displayOptions", "dismissContent"]);
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
                    f(F(u));
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
                        H,
                        M(D({}, s), {
                            onClick: () => o(w.L.TAKE_ACTION),
                            listItemRef: c,
                            children: [
                                (0, r.jsx)("div", {
                                    ref: u,
                                    className: R.marketingButtonBackgroundNew,
                                    style: null != O ? { background: O } : void 0,
                                    children:
                                        null != E &&
                                        (0, r.jsx)("img", {
                                            src: E,
                                            className: a()(
                                                R.marketingButtonBackgroundImage,
                                                p && R.marketingButtonBackgroundImageFaded,
                                            ),
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(U, {}),
                            ],
                        }),
                    ),
                    (0, r.jsx)(T.Z, {
                        displayOptions: l,
                        targetElementRef: c,
                        onClick: () => o(w.L.TAKE_ACTION),
                        onRequestClose: () => o(w.L.USER_DISMISS),
                    }),
                ],
            })
        );
    },
    K = (e) => {
        var { dismissContent: t } = e,
            n = k(e, ["dismissContent"]);
        let l = i.useRef(null);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    H,
                    M(D({}, n), {
                        onClick: () => t(w.L.TAKE_ACTION),
                        listItemRef: l,
                    }),
                ),
                (0, r.jsx)(N.Z, {
                    targetElementRef: l,
                    onClick: () => t(w.L.TAKE_ACTION),
                    onRequestClose: () => t(w.L.USER_DISMISS),
                }),
            ],
        });
    },
    q = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l } = e,
            { shopButtonDisplayOptions: a, dismissShopButtonDC: o } = (0, j.Z)(),
            s = (0, y.Y)({ location: "CollectiblesShopButton" }),
            u = !(0, p.$sL)() && s,
            [d, f] = (0, O.US)(u ? [c.z.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            g = {
                selected: t,
                locationState: i,
                onClick: () => {
                    o(), null == n || n();
                },
                listItemRef: l,
            };
        if (null != a)
            switch (a.type) {
                case x.k2.TOOLTIP:
                    return (0, r.jsx)(Y, M(D({}, g), { displayOptions: a }));
                case x.k2.COACHTIP:
                    return (0, r.jsx)(z, M(D({}, g), { displayOptions: a }));
                case x.k2.BADGE:
                    return (0, r.jsx)(B, D({}, g));
                case x.k2.COACHMARK:
                    return (0, r.jsx)(W, M(D({ dismissContent: o }, g), { displayOptions: a }));
            }
        return d === c.z.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, r.jsx)(K, M(D({}, g), { dismissContent: f }))
            : (0, r.jsx)(H, D({}, g));
    };
