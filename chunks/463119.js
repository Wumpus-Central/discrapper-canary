n.d(t, { i: () => Q }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(442837),
    c = n(704215),
    u = n(692547),
    d = n(780384),
    p = n(481060),
    f = n(596454),
    g = n(515753),
    h = n(410030),
    m = n(607070),
    _ = n(100527),
    b = n(906732),
    E = n(821982),
    O = n(243778),
    v = n(633302),
    y = n(567400),
    I = n(153066),
    C = n(335131),
    S = n(436797),
    T = n(364111),
    N = n(729700),
    j = n(827360),
    P = n(681435),
    x = n(81136),
    A = n(302800),
    Z = n(215023),
    w = n(981631),
    L = n(921944),
    R = n(388032),
    D = n(677372);
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
let G = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(p.IGR, {
            className: D.newBadge,
            color: null != t ? t : u.Z.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT.css,
            text: R.intl.string(R.t.y2b7CA),
        });
    },
    B = () => {
        let { noCache: e, includeUnpublished: t } = (0, x.Z)();
        return (
            (0, T.E)(
                Z.AW.HOME,
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
                collectibleShopTab: o,
                onMouseEnter: c,
                onMouseLeave: u,
                children: d,
            } = e,
            f = U(e, [
                "selected",
                "locationState",
                "icon",
                "onClick",
                "collectibleShopTab",
                "onMouseEnter",
                "onMouseLeave",
                "children",
            ]);
        let h = (0, s.JA)("shop"),
            m = _.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: E } = (0, b.ZP)(m),
            [O, v] = i.useState(!1),
            y = i.useCallback(() => {
                void 0 !== a && a(),
                    void 0 !== o &&
                        (0, C.mK)({
                            tab: o,
                            analyticsLocations: E,
                            analyticsSource: m,
                        }),
                    v(!0),
                    (0, C.Sm)({
                        analyticsSource: m,
                        analyticsLocations: E,
                    });
            }, [m, E, a, v, o]),
            I = w.Z5c.COLLECTIBLES_SHOP;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                O && (0, r.jsx)(B, {}),
                (0, r.jsx)(
                    g.Qj,
                    k(
                        M(
                            {
                                selected: t,
                                route: I,
                                icon: null != l ? l : p.EOn,
                                text: R.intl.string(R.t.pWG4ze),
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
    V = (e) => (0, r.jsx)(H, k(M({}, e), { children: (0, r.jsx)(G, {}) })),
    F = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            a = null != i ? (0, E.Z)(i, p.EFr.SIZE_80, !l) : void 0,
            s = n.title(),
            o = null == (t = n.body) ? void 0 : t.call(n),
            c = null == o || "" === o;
        return (0, r.jsxs)("div", {
            className: D.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)("div", {
                    className: D.avatarContainer,
                    children: (0, r.jsx)(p.qEK, {
                        className: D.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: p.EFr.SIZE_80,
                        "aria-hidden": !0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: D.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(p.Heading, {
                            variant: c ? "heading-sm/medium" : "heading-sm/bold",
                            children: s,
                        }),
                        !c &&
                            (0, r.jsx)(p.Text, {
                                variant: "text-xs/normal",
                                className: D.marketingBadgeTooltipContent,
                                children: o,
                            }),
                    ],
                }),
            ],
        });
    }),
    z = (e) => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230;
    },
    Y = (e) => {
        let t, n;
        var l,
            s,
            c,
            u,
            f,
            g,
            _,
            b,
            E,
            O,
            v,
            y,
            { displayOptions: C } = e,
            T = U(e, ["displayOptions"]);
        let N = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
            [j, P] = i.useState(0),
            [x, A] = i.useState(!1),
            [Z, w] = i.useState(!1),
            L = i.useRef(null),
            B = i.useRef(null),
            V = (0, h.ZP)(),
            Y = (0, d.wj)(V),
            W = (0, S.p)({ location: "CollectiblesShopButton" }),
            q = W.useNewHoverStyle ? D.marketingButtonBackgroundNew : D.marketingButtonBackground;
        x
            ? Y
                ? ((t = null == (l = C.entryPointBackgroundAssets) ? void 0 : l.srcDarkHovered),
                  (n = null == (c = C.entrypointBackgroundStyle) || null == (s = c.hovered) ? void 0 : s.dark))
                : ((t = null == (u = C.entryPointBackgroundAssets) ? void 0 : u.srcLightHovered),
                  (n = null == (g = C.entrypointBackgroundStyle) || null == (f = g.hovered) ? void 0 : f.light))
            : Y
              ? ((t = null == (_ = C.entryPointBackgroundAssets) ? void 0 : _.srcDark),
                (n = null == (E = C.entrypointBackgroundStyle) || null == (b = E.resting) ? void 0 : b.dark))
              : ((t = null == (O = C.entryPointBackgroundAssets) ? void 0 : O.srcLight),
                (n = null == (y = C.entrypointBackgroundStyle) || null == (v = y.resting) ? void 0 : v.light));
        let K = i.useCallback(
                (e) => {
                    C.assetIds.length > 0 && P((e) => (e + 1) % C.assetIds.length), A(!0);
                    let t = () => {
                        w(W.useNewHoverStyle && z(L));
                    };
                    t(), (B.current = requestAnimationFrame(t)), null == e || e();
                },
                [C.assetIds.length, W.useNewHoverStyle],
            ),
            Q = i.useCallback((e) => {
                A(!1),
                    w(!1),
                    null != B.current && (cancelAnimationFrame(B.current), (B.current = null)),
                    null == e || e();
            }, []);
        i.useEffect(
            () => () => {
                null != B.current && cancelAnimationFrame(B.current);
            },
            [],
        );
        let J = C.title();
        return (0, r.jsx)(p.aML, {
            "data-migration-pending": !0,
            text: (0, r.jsx)(F, {
                displayOptions: C,
                assetId: C.assetIds[j],
                reducedMotion: N,
            }),
            tooltipClassName: D.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            "aria-label": "string" == typeof J ? J : R.intl.string(R.t.rSXaxY),
            children: (e) =>
                (0, r.jsxs)(
                    H,
                    k(
                        M(
                            k(
                                M(
                                    {
                                        className:
                                            null != C.entryPointClassName ? (0, I.l)(D, C.entryPointClassName) : void 0,
                                    },
                                    T,
                                ),
                                { icon: C.entryPointIcon },
                            ),
                            e,
                        ),
                        {
                            onMouseEnter: () => K(e.onMouseEnter),
                            onMouseLeave: () => Q(e.onMouseLeave),
                            children: [
                                (0, r.jsx)("div", {
                                    ref: L,
                                    className: q,
                                    style: { background: n },
                                    children:
                                        null != t &&
                                        (0, r.jsx)("img", {
                                            src: t,
                                            className: a()(
                                                D.marketingButtonBackgroundImage,
                                                Z && D.marketingButtonBackgroundImageFaded,
                                            ),
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(G, { color: C.badgeColor }),
                            ],
                        },
                    ),
                ),
        });
    },
    W = (e) => {
        var { displayOptions: t } = e,
            n = U(e, ["displayOptions"]);
        let l = i.useMemo(() => {
            var e;
            let n = null != t.emojiName ? (null == (e = v.ZP.getByName(t.emojiName)) ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(p.Text, {
                variant: "text-sm/medium",
                className: D.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(f.Z, { emojiName: n }), t.title()],
            });
        }, [t]);
        return (0, r.jsx)(p.aML, {
            "data-migration-pending": !0,
            text: l,
            tooltipClassName: D.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) => (0, r.jsx)(H, k(M({}, n, e), { children: (0, r.jsx)(G, { color: t.badgeColor }) })),
        });
    },
    q = (e) => {
        var t,
            n,
            { displayOptions: l, dismissContent: s } = e,
            o = U(e, ["displayOptions", "dismissContent"]);
        let c = i.useRef(null),
            u = i.useRef(null),
            [p, f] = i.useState(!1),
            g = (0, h.ZP)(),
            m = (0, d.wj)(g),
            _ = (0, S.p)({ location: "CollectiblesShopButton" }),
            b = _.useNewHoverStyle ? D.marketingButtonBackgroundNew : D.marketingButtonBackground,
            E = l.entryPointBackgroundAssets,
            O = l.entrypointBackgroundStyle,
            v = m ? (null == E ? void 0 : E.srcDarkHovered) : null == E ? void 0 : E.srcLightHovered,
            y = m
                ? null == O || null == (t = O.hovered)
                    ? void 0
                    : t.dark
                : null == O || null == (n = O.hovered)
                  ? void 0
                  : n.light;
        return (
            i.useEffect(() => {
                if (null == v || "" === v) return void f(!1);
                let e = () => {
                    f(_.useNewHoverStyle && z(u));
                };
                e();
                let t = requestAnimationFrame(e);
                return () => {
                    cancelAnimationFrame(t);
                };
            }, [v, _.useNewHoverStyle]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(
                        H,
                        k(M({}, o), {
                            onClick: () => s(L.L.TAKE_ACTION),
                            listItemRef: c,
                            children: [
                                (0, r.jsx)("div", {
                                    ref: u,
                                    className: b,
                                    style: null != y ? { background: y } : void 0,
                                    children:
                                        null != v &&
                                        (0, r.jsx)("img", {
                                            src: v,
                                            className: a()(
                                                D.marketingButtonBackgroundImage,
                                                p && D.marketingButtonBackgroundImageFaded,
                                            ),
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(G, {}),
                            ],
                        }),
                    ),
                    (0, r.jsx)(N.Z, {
                        displayOptions: l,
                        targetElementRef: c,
                        onClick: () => s(L.L.TAKE_ACTION),
                        onRequestClose: () => s(L.L.USER_DISMISS),
                    }),
                ],
            })
        );
    },
    K = (e) => {
        var { dismissContent: t } = e,
            n = U(e, ["dismissContent"]);
        let l = i.useRef(null);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    H,
                    k(M({}, n), {
                        onClick: () => t(L.L.TAKE_ACTION),
                        listItemRef: l,
                    }),
                ),
                (0, r.jsx)(j.Z, {
                    targetElementRef: l,
                    onClick: () => t(L.L.TAKE_ACTION),
                    onRequestClose: () => t(L.L.USER_DISMISS),
                }),
            ],
        });
    },
    Q = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l } = e,
            { shopButtonDisplayOptions: a, dismissShopButtonDC: s } = (0, P.Z)(),
            o = (0, y.Y)({ location: "CollectiblesShopButton" }),
            u = !(0, p.$sL)() && o,
            [d, f] = (0, O.US)(u ? [c.z.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            g = {
                selected: t,
                locationState: i,
                onClick: () => {
                    s(), null == n || n();
                },
                listItemRef: l,
            };
        if (null != a)
            switch (a.type) {
                case A.k2.TOOLTIP:
                    return (0, r.jsx)(W, k(M({}, g), { displayOptions: a }));
                case A.k2.COACHTIP:
                    return (0, r.jsx)(Y, k(M({}, g), { displayOptions: a }));
                case A.k2.BADGE:
                    return (0, r.jsx)(V, M({}, g));
                case A.k2.COACHMARK:
                    return (0, r.jsx)(q, k(M({ dismissContent: s }, g), { displayOptions: a }));
            }
        return d === c.z.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, r.jsx)(K, k(M({}, g), { dismissContent: f }))
            : (0, r.jsx)(H, M({}, g));
    };
