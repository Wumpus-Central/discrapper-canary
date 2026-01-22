n.d(t, {
    i: () => Q,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(837381),
    o = n(934551),
    c = n(158954),
    u = n(311907),
    d = n(554146),
    p = n(582754),
    f = n(397927),
    h = n(565645),
    A = n(701363),
    g = n(736653),
    m = n(775602),
    b = n(793574),
    _ = n(688810),
    E = n(920064),
    O = n(379848),
    y = n(7584),
    I = n(821589),
    v = n(979286),
    S = n(335657),
    C = n(252362),
    N = n(540063),
    T = n(870308),
    j = n(998694),
    x = n(158216),
    P = n(758836),
    w = n(652215),
    L = n(49999),
    R = n(985018),
    D = n(134848);

function M(e) {
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

function k(e, t) {
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

function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++)
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let G = (e) => {
        let { badgeIcon: t, badgeText: n } = e,
            i = null != t && "" !== t ? o[t] : void 0;
        return (0, r.jsx)("div", {
            className: D.newBadge,
            children: (0, r.jsx)(c.Exy, {
                type:
                    null != n && "" !== n
                        ? {
                              text: n,
                          }
                        : "new",
                variant: "expressive",
                icon: i,
            }),
        });
    },
    V = () => {
        let { noCache: e, includeUnpublished: t } = (0, j.A)();
        return (
            (0, S.y)(
                P.G2.HOME,
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
    B = (e) => {
        let {
                selected: t,
                locationState: n,
                icon: l,
                onClick: a,
                collectibleShopTab: o,
                onMouseEnter: c,
                onMouseLeave: u,
                children: d,
            } = e,
            p = U(e, [
                "selected",
                "locationState",
                "icon",
                "onClick",
                "collectibleShopTab",
                "onMouseEnter",
                "onMouseLeave",
                "children",
            ]),
            h = (0, s.rm)("shop"),
            g = b.A.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: m } = (0, _.Ay)(g),
            [E, O] = i.useState(!1),
            y = i.useCallback(() => {
                void 0 !== a && a(),
                    void 0 !== o &&
                        (0, v.Cz)({
                            tab: o,
                            analyticsLocations: m,
                            analyticsSource: g,
                        }),
                    O(!0),
                    (0, v.Sw)({
                        analyticsSource: g,
                        analyticsLocations: m,
                    });
            }, [g, m, a, O, o]),
            I = w.BVt.COLLECTIBLES_SHOP;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                E && (0, r.jsx)(V, {}),
                (0, r.jsx)(
                    A.z9,
                    k(
                        M(
                            {
                                selected: t,
                                route: I,
                                icon: null != l ? l : f.U1X,
                                text: R.intl.string(R.t.pWG4ze),
                                locationState: n,
                            },
                            h,
                            p,
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
    H = (e) =>
        (0, r.jsx)(
            B,
            k(M({}, e), {
                children: (0, r.jsx)(G, {}),
            }),
        ),
    F = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            a = null != i ? (0, E.A)(i, f._3J.SIZE_80, !l) : void 0,
            s = n.title(),
            o = null == (t = n.body) ? void 0 : t.call(n),
            c = null == o || "" === o;
        return (0, r.jsxs)("div", {
            className: D.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)("div", {
                    className: D.avatarContainer,
                    children: (0, r.jsx)(f.euF, {
                        className: D.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: f._3J.SIZE_80,
                        "aria-hidden": !0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: D.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(f.Heading, {
                            variant: c ? "heading-sm/medium" : "heading-sm/bold",
                            children: s,
                        }),
                        !c &&
                            (0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                className: D.marketingBadgeTooltipContent,
                                children: o,
                            }),
                    ],
                }),
            ],
        });
    }),
    Y = (e) => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230;
    },
    K = (e) => {
        var t, n, l, s, o, c, d, h, A, b, _, E;
        let O,
            y,
            { displayOptions: v } = e,
            S = U(e, ["displayOptions"]),
            C = (0, u.bG)([m.A], () => m.A.useReducedMotion),
            [N, T] = i.useState(0),
            [j, x] = i.useState(!1),
            [P, w] = i.useState(!1),
            L = i.useRef(null),
            V = i.useRef(null),
            H = (0, g.Ay)(),
            K = (0, p.Mw)(H);
        j
            ? K
                ? ((O = null == (t = v.entryPointBackgroundAssets) ? void 0 : t.srcDarkHovered),
                  (y = null == (l = v.entrypointBackgroundStyle) || null == (n = l.hovered) ? void 0 : n.dark))
                : ((O = null == (s = v.entryPointBackgroundAssets) ? void 0 : s.srcLightHovered),
                  (y = null == (c = v.entrypointBackgroundStyle) || null == (o = c.hovered) ? void 0 : o.light))
            : K
              ? ((O = null == (d = v.entryPointBackgroundAssets) ? void 0 : d.srcDark),
                (y = null == (A = v.entrypointBackgroundStyle) || null == (h = A.resting) ? void 0 : h.dark))
              : ((O = null == (b = v.entryPointBackgroundAssets) ? void 0 : b.srcLight),
                (y = null == (E = v.entrypointBackgroundStyle) || null == (_ = E.resting) ? void 0 : _.light));
        let z = i.useCallback(
                (e) => {
                    v.assetIds.length > 0 && T((e) => (e + 1) % v.assetIds.length), x(!0);
                    let t = () => {
                        w(Y(L));
                    };
                    t(), (V.current = requestAnimationFrame(t)), null == e || e();
                },
                [v.assetIds.length],
            ),
            W = i.useCallback((e) => {
                x(!1),
                    w(!1),
                    null != V.current && (cancelAnimationFrame(V.current), (V.current = null)),
                    null == e || e();
            }, []);
        i.useEffect(
            () => () => {
                null != V.current && cancelAnimationFrame(V.current);
            },
            [],
        );
        let q = v.title();
        return (0, r.jsx)(f.STz, {
            "data-migration-pending": !0,
            text: (0, r.jsx)(F, {
                displayOptions: v,
                assetId: v.assetIds[N],
                reducedMotion: C,
            }),
            tooltipClassName: D.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            "aria-label": "string" == typeof q ? q : R.intl.string(R.t.rSXaxY),
            children: (e) =>
                (0, r.jsxs)(
                    B,
                    k(
                        M(
                            k(
                                M(
                                    {
                                        className:
                                            null != v.entryPointClassName ? (0, I.t)(D, v.entryPointClassName) : void 0,
                                    },
                                    S,
                                ),
                                {
                                    icon: v.entryPointIcon,
                                },
                            ),
                            e,
                        ),
                        {
                            onMouseEnter: () => z(e.onMouseEnter),
                            onMouseLeave: () => W(e.onMouseLeave),
                            children: [
                                (0, r.jsx)("div", {
                                    ref: L,
                                    className: D.marketingButtonBackgroundNew,
                                    style: {
                                        background: y,
                                    },
                                    children:
                                        null != O &&
                                        (0, r.jsx)("img", {
                                            src: O,
                                            className: a()(
                                                D.marketingButtonBackgroundImage,
                                                P && D.marketingButtonBackgroundImageFaded,
                                            ),
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(G, {
                                    badgeIcon: v.badgeIcon,
                                    badgeText: v.badgeText,
                                }),
                            ],
                        },
                    ),
                ),
        });
    },
    z = (e) => {
        let { displayOptions: t } = e,
            n = U(e, ["displayOptions"]),
            l = i.useMemo(() => {
                var e;
                let n =
                    null != t.emojiName ? (null == (e = y.Ay.getByName(t.emojiName)) ? void 0 : e.surrogates) : null;
                return (0, r.jsxs)(f.Text, {
                    variant: "text-sm/medium",
                    className: D.marketingBadgeTooltipContent,
                    children: [
                        null != n &&
                            (0, r.jsx)(h.A, {
                                emojiName: n,
                            }),
                        t.title(),
                    ],
                });
            }, [t]);
        return (0, r.jsx)(f.STz, {
            "data-migration-pending": !0,
            text: l,
            tooltipClassName: D.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) =>
                (0, r.jsx)(
                    B,
                    k(M({}, n, e), {
                        children: (0, r.jsx)(G, {
                            badgeIcon: t.badgeIcon,
                            badgeText: t.badgeText,
                        }),
                    }),
                ),
        });
    },
    W = (e) => {
        var t, n;
        let { displayOptions: l, dismissContent: s } = e,
            o = U(e, ["displayOptions", "dismissContent"]),
            c = i.useRef(null),
            u = i.useRef(null),
            [d, f] = i.useState(!1),
            h = (0, g.Ay)(),
            A = (0, p.Mw)(h),
            m = l.entryPointBackgroundAssets,
            b = l.entrypointBackgroundStyle,
            _ = A ? (null == m ? void 0 : m.srcDarkHovered) : null == m ? void 0 : m.srcLightHovered,
            E = A
                ? null == b || null == (t = b.hovered)
                    ? void 0
                    : t.dark
                : null == b || null == (n = b.hovered)
                  ? void 0
                  : n.light;
        return (
            i.useEffect(() => {
                if (null == _ || "" === _) return void f(!1);
                let e = () => {
                    f(Y(u));
                };
                e();
                let t = requestAnimationFrame(e);
                return () => {
                    cancelAnimationFrame(t);
                };
            }, [_]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(
                        B,
                        k(M({}, o), {
                            onClick: () => s(L.i.TAKE_ACTION),
                            listItemRef: c,
                            children: [
                                (0, r.jsx)("div", {
                                    ref: u,
                                    className: D.marketingButtonBackgroundNew,
                                    style:
                                        null != E
                                            ? {
                                                  background: E,
                                              }
                                            : void 0,
                                    children:
                                        null != _ &&
                                        (0, r.jsx)("img", {
                                            src: _,
                                            className: a()(
                                                D.marketingButtonBackgroundImage,
                                                d && D.marketingButtonBackgroundImageFaded,
                                            ),
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(G, {
                                    badgeIcon: l.badgeIcon,
                                    badgeText: l.badgeText,
                                }),
                            ],
                        }),
                    ),
                    (0, r.jsx)(C.A, {
                        displayOptions: l,
                        targetElementRef: c,
                        onClick: () => s(L.i.TAKE_ACTION),
                        onRequestClose: () => s(L.i.USER_DISMISS),
                    }),
                ],
            })
        );
    },
    q = (e) => {
        let { dismissContent: t } = e,
            n = U(e, ["dismissContent"]),
            l = i.useRef(null);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    B,
                    k(M({}, n), {
                        onClick: () => t(L.i.TAKE_ACTION),
                        listItemRef: l,
                    }),
                ),
                (0, r.jsx)(N.A, {
                    targetElementRef: l,
                    onClick: () => t(L.i.TAKE_ACTION),
                    onRequestClose: () => t(L.i.USER_DISMISS),
                }),
            ],
        });
    },
    Q = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l } = e,
            { shopButtonDisplayOptions: a, dismissShopButtonDC: s } = (0, T.A)(),
            o = !(0, f.ueM)(),
            [c, u] = (0, O.kn)(o ? [d.M.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            p = {
                selected: t,
                locationState: i,
                onClick: () => {
                    s(), null == n || n();
                },
                listItemRef: l,
            };
        if (null != a)
            switch (a.type) {
                case x.FF.TOOLTIP:
                    return (0, r.jsx)(
                        z,
                        k(M({}, p), {
                            displayOptions: a,
                        }),
                    );
                case x.FF.COACHTIP:
                    return (0, r.jsx)(
                        K,
                        k(M({}, p), {
                            displayOptions: a,
                        }),
                    );
                case x.FF.BADGE:
                    return (0, r.jsx)(H, M({}, p));
                case x.FF.COACHMARK:
                    return (0, r.jsx)(
                        W,
                        k(
                            M(
                                {
                                    dismissContent: s,
                                },
                                p,
                            ),
                            {
                                displayOptions: a,
                            },
                        ),
                    );
            }
        return c === d.M.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, r.jsx)(
                  q,
                  k(M({}, p), {
                      dismissContent: u,
                  }),
              )
            : (0, r.jsx)(B, M({}, p));
    };
