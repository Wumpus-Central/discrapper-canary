n.d(t, { $: () => G, i: () => H });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(837381),
    o = n(934551),
    d = n(158954),
    c = n(554146),
    u = n(582754),
    m = n(397927),
    h = n(565645),
    x = n(701363),
    p = n(736653),
    g = n(793574),
    _ = n(688810),
    f = n(932001),
    v = n(7584),
    b = n(486164),
    j = n(998304),
    A = n(821589),
    C = n(979286),
    y = n(335657),
    S = n(252362),
    T = n(540063),
    E = n(870308),
    N = n(998694),
    I = n(158216),
    k = n(758836),
    O = n(652215),
    R = n(49999),
    w = n(985018),
    D = n(910905);
let M = (e) => {
        let { badgeIcon: t, badgeText: n } = e,
            i = null != t && "" !== t ? o[t] : void 0;
        return (0, a.jsx)("div", {
            className: D.newBadge,
            children: (0, a.jsx)(d.Exy, {
                type: null != n && "" !== n ? { text: n } : "new",
                variant: "expressive",
                icon: i,
            }),
        });
    },
    P = () => {
        let { noCache: e, includeUnpublished: t } = (0, N.A)();
        return (0, y.y)(k.G2.HOME, { noCache: e, includeUnpublished: t }, void 0, !0), null;
    },
    L = (e) => {
        let {
                selected: t,
                locationState: n,
                icon: l,
                onClick: s,
                collectibleShopTab: o,
                onMouseEnter: d,
                onMouseLeave: c,
                children: u,
                showHoverGradient: h,
                hoverGradientStart: p,
                hoverGradientMiddle: f,
                hoverGradientEnd: v,
                ...b
            } = e,
            j = (0, r.rm)("shop"),
            A = g.A.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: y } = (0, _.Ay)(A),
            [S, T] = i.useState(!1),
            E = i.useCallback(() => {
                void 0 !== s && s(),
                    void 0 !== o && (0, C.Cz)({ tab: o, analyticsLocations: y, analyticsSource: A }),
                    T(!0),
                    (0, C.Sw)({ analyticsSource: A, analyticsLocations: y });
            }, [A, y, s, T, o]),
            N = O.BVt.COLLECTIBLES_SHOP;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                S && (0, a.jsx)(P, {}),
                (0, a.jsx)(x.z9, {
                    showHoverGradient: h ?? !1,
                    selected: t,
                    route: N,
                    icon: l ?? m.U1X,
                    text: w.intl.string(w.t.pWG4ze),
                    locationState: n,
                    ...j,
                    ...b,
                    ...{ hoverGradientStart: p, hoverGradientMiddle: f, hoverGradientEnd: v },
                    onMouseEnter: d,
                    onMouseLeave: c,
                    onClick: E,
                    children: u,
                }),
            ],
        });
    },
    U = (e) => (0, a.jsx)(L, { ...e, children: (0, a.jsx)(M, {}) }),
    B = (e) => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230;
    },
    G = (e) => {
        let t,
            n,
            { displayOptions: l, ...r } = e,
            [o, d] = i.useState(!1),
            [c, m] = i.useState(!1),
            h = i.useRef(null),
            x = i.useRef(null),
            g = (0, p.Ay)(),
            _ = (0, u.Mw)(g);
        o
            ? ((t = _ ? l.entryPointBackgroundAssets?.srcDarkHovered : l.entryPointBackgroundAssets?.srcLightHovered),
              (n = _ ? l.entrypointBackgroundStyle?.hovered?.dark : l.entrypointBackgroundStyle?.hovered?.light))
            : ((t = _ ? l.entryPointBackgroundAssets?.srcDark : l.entryPointBackgroundAssets?.srcLight),
              (n = _ ? l.entrypointBackgroundStyle?.resting?.dark : l.entrypointBackgroundStyle?.resting?.light));
        let f = i.useCallback(() => {
                d(!0);
                let e = () => m(B(h));
                e(), (x.current = requestAnimationFrame(e));
            }, []),
            v = i.useCallback(() => {
                d(!1), m(!1), null != x.current && (cancelAnimationFrame(x.current), (x.current = null));
            }, []);
        return (
            i.useEffect(
                () => () => {
                    null != x.current && cancelAnimationFrame(x.current);
                },
                [],
            ),
            (0, a.jsx)(b.A, {
                title: l.title(),
                body: l.body?.() ?? "",
                asset: (0, a.jsx)("img", { src: l.asset, alt: "", "aria-hidden": !0 }),
                children: (0, a.jsxs)(L, {
                    className: null != l.entryPointClassName ? (0, A.t)(D, l.entryPointClassName) : void 0,
                    ...r,
                    icon: l.entryPointIcon,
                    onMouseEnter: f,
                    onMouseLeave: v,
                    ...(null != l.hoverGradient && {
                        showHoverGradient: !0,
                        hoverGradientStart: {
                            ...(0, j.j5)(l.hoverGradient.center.color),
                            a: l.hoverGradient.center.opacity ?? 1,
                        },
                        hoverGradientMiddle: {
                            ...(0, j.j5)(l.hoverGradient.inner.color),
                            a: l.hoverGradient.inner.opacity ?? 0.5,
                        },
                        hoverGradientEnd: {
                            ...(0, j.j5)(l.hoverGradient.outer.color),
                            a: l.hoverGradient.outer.opacity ?? 0,
                        },
                    }),
                    children: [
                        (0, a.jsx)("div", {
                            ref: h,
                            className: D.marketingButtonBackgroundNew,
                            style: { background: n },
                            children:
                                null != t &&
                                (0, a.jsx)("img", {
                                    src: t,
                                    className: s()(
                                        D.marketingButtonBackgroundImage,
                                        c && D.marketingButtonBackgroundImageFaded,
                                    ),
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                        }),
                        (0, a.jsx)(M, { badgeIcon: l.badgeIcon, badgeText: l.badgeText }),
                    ],
                }),
            })
        );
    },
    F = (e) => {
        let { displayOptions: t, ...n } = e,
            l = i.useMemo(() => {
                let e = null != t.emojiName ? v.Ay.getByName(t.emojiName)?.surrogates : null;
                return (0, a.jsxs)(m.Text, {
                    variant: "text-sm/medium",
                    className: D.marketingBadgeTooltipContent,
                    children: [null != e && (0, a.jsx)(h.A, { emojiName: e }), t.title()],
                });
            }, [t]);
        return (0, a.jsx)(m.STz, {
            "data-migration-pending": !0,
            text: l,
            tooltipClassName: D.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) =>
                (0, a.jsx)(L, {
                    ...n,
                    ...e,
                    children: (0, a.jsx)(M, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                }),
        });
    },
    V = (e) => {
        let { displayOptions: t, dismissContent: n, ...l } = e,
            r = i.useRef(null),
            o = i.useRef(null),
            [d, c] = i.useState(!1),
            m = (0, p.Ay)(),
            h = (0, u.Mw)(m),
            x = t.entryPointBackgroundAssets,
            g = t.entrypointBackgroundStyle,
            _ = h ? x?.srcDarkHovered : x?.srcLightHovered,
            f = h ? g?.hovered?.dark : g?.hovered?.light;
        return (
            i.useEffect(() => {
                if (null == _ || "" === _) return void c(!1);
                let e = () => {
                    c(B(o));
                };
                e();
                let t = requestAnimationFrame(e);
                return () => {
                    cancelAnimationFrame(t);
                };
            }, [_]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(L, {
                        ...l,
                        onClick: () => n(R.i.TAKE_ACTION),
                        listItemRef: r,
                        children: [
                            (0, a.jsx)("div", {
                                ref: o,
                                className: D.marketingButtonBackgroundNew,
                                style: null != f ? { background: f } : void 0,
                                children:
                                    null != _ &&
                                    (0, a.jsx)("img", {
                                        src: _,
                                        className: s()(
                                            D.marketingButtonBackgroundImage,
                                            d && D.marketingButtonBackgroundImageFaded,
                                        ),
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                            }),
                            (0, a.jsx)(M, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                        ],
                    }),
                    (0, a.jsx)(S.A, {
                        displayOptions: t,
                        targetElementRef: r,
                        onClick: () => n(R.i.TAKE_ACTION),
                        onRequestClose: () => n(R.i.USER_DISMISS),
                    }),
                ],
            })
        );
    },
    W = (e) => {
        let { dismissContent: t, ...n } = e,
            l = i.useRef(null);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(L, { ...n, onClick: () => t(R.i.TAKE_ACTION), listItemRef: l }),
                (0, a.jsx)(T.A, {
                    targetElementRef: l,
                    onClick: () => t(R.i.TAKE_ACTION),
                    onRequestClose: () => t(R.i.USER_DISMISS),
                }),
            ],
        });
    },
    H = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l } = e,
            { shopButtonDisplayOptions: s, dismissShopButtonDC: r } = (0, E.A)(),
            o = !(0, m.ueM)(),
            [d, u] = (0, f.kn)(o ? [c.M.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            h = {
                selected: t,
                locationState: i,
                onClick: () => {
                    r(), n?.();
                },
                listItemRef: l,
            };
        if (null != s)
            switch (s.type) {
                case I.FF.TOOLTIP:
                    return (0, a.jsx)(F, { ...h, displayOptions: s });
                case I.FF.TAB_TOOLTIP:
                    return (0, a.jsx)(G, { ...h, displayOptions: s });
                case I.FF.BADGE:
                    return (0, a.jsx)(U, { ...h });
                case I.FF.COACHMARK:
                    return (0, a.jsx)(V, { dismissContent: r, ...h, displayOptions: s });
            }
        return d === c.M.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, a.jsx)(W, { ...h, dismissContent: u })
            : (0, a.jsx)(L, { ...h });
    };
