n.d(t, { i: () => q }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(657707),
    c = n(793030),
    u = n(442837),
    d = n(704215),
    p = n(780384),
    f = n(481060),
    g = n(596454),
    h = n(515753),
    m = n(410030),
    b = n(607070),
    _ = n(100527),
    E = n(906732),
    O = n(821982),
    v = n(243778),
    I = n(633302),
    y = n(153066),
    C = n(335131),
    S = n(364111),
    T = n(729700),
    N = n(827360),
    j = n(681435),
    x = n(81136),
    P = n(302800),
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
        let { badgeIcon: t, badgeText: n } = e,
            i = null != t && "" !== t ? s[t] : void 0;
        return (0, r.jsx)("div", {
            className: R.newBadge,
            children: (0, r.jsx)(c.Cts, {
                type: null != n && "" !== n ? { text: n } : "new",
                variant: "expressive",
                icon: i,
            }),
        });
    },
    G = () => {
        let { noCache: e, includeUnpublished: t } = (0, x.Z)();
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
            p = k(e, [
                "selected",
                "locationState",
                "icon",
                "onClick",
                "collectibleShopTab",
                "onMouseEnter",
                "onMouseLeave",
                "children",
            ]);
        let g = (0, o.JA)("shop"),
            m = _.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: b } = (0, E.ZP)(m),
            [O, v] = i.useState(!1),
            I = i.useCallback(() => {
                void 0 !== a && a(),
                    void 0 !== s &&
                        (0, C.mK)({
                            tab: s,
                            analyticsLocations: b,
                            analyticsSource: m,
                        }),
                    v(!0),
                    (0, C.Sm)({
                        analyticsSource: m,
                        analyticsLocations: b,
                    });
            }, [m, b, a, v, s]),
            y = Z.Z5c.COLLECTIBLES_SHOP;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                O && (0, r.jsx)(G, {}),
                (0, r.jsx)(
                    h.Qj,
                    M(
                        D(
                            {
                                selected: t,
                                route: y,
                                icon: null != l ? l : f.EOn,
                                text: L.intl.string(L.t.pWG4ze),
                                locationState: n,
                            },
                            g,
                            p,
                        ),
                        {
                            onMouseEnter: c,
                            onMouseLeave: u,
                            onClick: I,
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
            a = null != i ? (0, O.Z)(i, f.EFr.SIZE_80, !l) : void 0,
            o = n.title(),
            s = null == (t = n.body) ? void 0 : t.call(n),
            c = null == s || "" === s;
        return (0, r.jsxs)("div", {
            className: R.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)("div", {
                    className: R.avatarContainer,
                    children: (0, r.jsx)(f.qEK, {
                        className: R.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: f.EFr.SIZE_80,
                        "aria-hidden": !0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: R.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(f.Heading, {
                            variant: c ? "heading-sm/medium" : "heading-sm/bold",
                            children: o,
                        }),
                        !c &&
                            (0, r.jsx)(f.Text, {
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
            s,
            c,
            d,
            g,
            h,
            _,
            E,
            O,
            v,
            I,
            { displayOptions: C } = e,
            S = k(e, ["displayOptions"]);
        let T = (0, u.e7)([b.Z], () => b.Z.useReducedMotion),
            [N, j] = i.useState(0),
            [x, P] = i.useState(!1),
            [A, Z] = i.useState(!1),
            w = i.useRef(null),
            G = i.useRef(null),
            B = (0, m.ZP)(),
            z = (0, p.wj)(B);
        x
            ? z
                ? ((t = null == (l = C.entryPointBackgroundAssets) ? void 0 : l.srcDarkHovered),
                  (n = null == (s = C.entrypointBackgroundStyle) || null == (o = s.hovered) ? void 0 : o.dark))
                : ((t = null == (c = C.entryPointBackgroundAssets) ? void 0 : c.srcLightHovered),
                  (n = null == (g = C.entrypointBackgroundStyle) || null == (d = g.hovered) ? void 0 : d.light))
            : z
              ? ((t = null == (h = C.entryPointBackgroundAssets) ? void 0 : h.srcDark),
                (n = null == (E = C.entrypointBackgroundStyle) || null == (_ = E.resting) ? void 0 : _.dark))
              : ((t = null == (O = C.entryPointBackgroundAssets) ? void 0 : O.srcLight),
                (n = null == (I = C.entrypointBackgroundStyle) || null == (v = I.resting) ? void 0 : v.light));
        let Y = i.useCallback(
                (e) => {
                    C.assetIds.length > 0 && j((e) => (e + 1) % C.assetIds.length), P(!0);
                    let t = () => {
                        Z(F(w));
                    };
                    t(), (G.current = requestAnimationFrame(t)), null == e || e();
                },
                [C.assetIds.length],
            ),
            W = i.useCallback((e) => {
                P(!1),
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
        return (0, r.jsx)(f.aML, {
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
                                            null != C.entryPointClassName ? (0, y.l)(R, C.entryPointClassName) : void 0,
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
                                (0, r.jsx)(U, {
                                    badgeIcon: C.badgeIcon,
                                    badgeText: C.badgeText,
                                }),
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
            let n = null != t.emojiName ? (null == (e = I.ZP.getByName(t.emojiName)) ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(f.Text, {
                variant: "text-sm/medium",
                className: R.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(g.Z, { emojiName: n }), t.title()],
            });
        }, [t]);
        return (0, r.jsx)(f.aML, {
            "data-migration-pending": !0,
            text: l,
            tooltipClassName: R.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) =>
                (0, r.jsx)(
                    H,
                    M(D({}, n, e), {
                        children: (0, r.jsx)(U, {
                            badgeIcon: t.badgeIcon,
                            badgeText: t.badgeText,
                        }),
                    }),
                ),
        });
    },
    W = (e) => {
        var t,
            n,
            { displayOptions: l, dismissContent: o } = e,
            s = k(e, ["displayOptions", "dismissContent"]);
        let c = i.useRef(null),
            u = i.useRef(null),
            [d, f] = i.useState(!1),
            g = (0, m.ZP)(),
            h = (0, p.wj)(g),
            b = l.entryPointBackgroundAssets,
            _ = l.entrypointBackgroundStyle,
            E = h ? (null == b ? void 0 : b.srcDarkHovered) : null == b ? void 0 : b.srcLightHovered,
            O = h
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
                                                d && R.marketingButtonBackgroundImageFaded,
                                            ),
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(U, {
                                    badgeIcon: l.badgeIcon,
                                    badgeText: l.badgeText,
                                }),
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
            s = !(0, f.$sL)(),
            [c, u] = (0, v.US)(s ? [d.z.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            p = {
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
                    return (0, r.jsx)(Y, M(D({}, p), { displayOptions: a }));
                case P.k2.COACHTIP:
                    return (0, r.jsx)(z, M(D({}, p), { displayOptions: a }));
                case P.k2.BADGE:
                    return (0, r.jsx)(B, D({}, p));
                case P.k2.COACHMARK:
                    return (0, r.jsx)(W, M(D({ dismissContent: o }, p), { displayOptions: a }));
            }
        return c === d.z.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, r.jsx)(K, M(D({}, p), { dismissContent: u }))
            : (0, r.jsx)(H, D({}, p));
    };
