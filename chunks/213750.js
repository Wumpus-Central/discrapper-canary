a.d(l, { i: () => q });
var t = a(627968),
    s = a(64700),
    i = a(503698),
    n = a.n(i),
    c = a(837381),
    h = a(934551),
    r = a(508770),
    o = a(554146),
    d = a(827734),
    v = a(462887),
    g = a(34188),
    p = a(834730),
    m = a(781696),
    f = a(192308),
    w = a(565645),
    x = a(701363),
    u = a(736653),
    A = a(793574),
    I = a(688810),
    M = a(932001),
    Z = a(7584),
    _ = a(486164),
    E = a(821589),
    j = a(979286),
    C = a(558038),
    T = a(252362),
    N = a(540063),
    R = a(870308),
    V = a(998694),
    y = a(158216),
    H = a(758836),
    O = a(652215),
    L = a(49999),
    B = a(985018),
    S = a(563337);
let F = (e) => {
        let { badgeIcon: l, badgeText: a } = e,
            s = null != l && "" !== l ? h[l] : void 0;
        return (0, t.jsx)("div", {
            className: S.newBadge,
            children: (0, t.jsx)(r.E, {
                type: null != a && "" !== a ? { text: a } : "new",
                variant: "expressive",
                icon: s,
            }),
        });
    },
    U = () => {
        let { noCache: e, includeUnpublished: l } = (0, V.A)();
        return (0, C.y)(H.G2.HOME, { noCache: e, includeUnpublished: l }, void 0, !0), null;
    },
    P = (e) => {
        let {
                selected: l,
                locationState: a,
                icon: i,
                onClick: n,
                collectibleShopTab: h,
                onMouseEnter: r,
                onMouseLeave: o,
                children: d,
                showHoverGradient: v,
                hoverGradientStart: p,
                hoverGradientMiddle: m,
                hoverGradientEnd: f,
                ...w
            } = e,
            u = (0, c.rm)("shop"),
            M = A.A.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: Z } = (0, I.Ay)(M),
            [_, E] = s.useState(!1),
            C = s.useCallback(() => {
                void 0 !== n && n(),
                    void 0 !== h && (0, j.Cz)({ tab: h, analyticsLocations: Z, analyticsSource: M }),
                    E(!0),
                    (0, j.Sw)({ analyticsSource: M, analyticsLocations: Z });
            }, [M, Z, n, E, h]),
            T = O.BVt.COLLECTIBLES_SHOP;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                _ && (0, t.jsx)(U, {}),
                (0, t.jsx)(x.z9, {
                    showHoverGradient: v ?? !1,
                    selected: l,
                    route: T,
                    icon: i ?? g.U,
                    text: B.intl.string(B.t.pWG4ze),
                    locationState: a,
                    ...u,
                    ...w,
                    hoverGradientStart: p,
                    hoverGradientMiddle: m,
                    hoverGradientEnd: f,
                    onMouseEnter: r,
                    onMouseLeave: o,
                    onClick: C,
                    children: d,
                }),
            ],
        });
    },
    b = (e) => (0, t.jsx)(P, { ...e, children: (0, t.jsx)(F, {}) }),
    D = (e) => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let l = e.current.parentElement.offsetWidth;
        return l >= 175 && l <= 230;
    },
    k = (e) => {
        let l,
            a,
            { displayOptions: i, ...c } = e,
            [h, r] = s.useState(!1),
            [o, g] = s.useState(!1),
            p = s.useRef(null),
            m = s.useRef(null),
            f = (0, u.Ay)(),
            w = (0, v.M)(f);
        h
            ? ((l = w ? i.entryPointBackgroundAssets?.srcDarkHovered : i.entryPointBackgroundAssets?.srcLightHovered),
              (a = w ? i.entrypointBackgroundStyle?.hovered?.dark : i.entrypointBackgroundStyle?.hovered?.light))
            : ((l = w ? i.entryPointBackgroundAssets?.srcDark : i.entryPointBackgroundAssets?.srcLight),
              (a = w ? i.entrypointBackgroundStyle?.resting?.dark : i.entrypointBackgroundStyle?.resting?.light));
        let x = s.useCallback(() => {
                r(!0);
                let e = () => g(D(p));
                e(), (m.current = requestAnimationFrame(e));
            }, []),
            A = s.useCallback(() => {
                r(!1), g(!1), null != m.current && (cancelAnimationFrame(m.current), (m.current = null));
            }, []);
        return (
            s.useEffect(
                () => () => {
                    null != m.current && cancelAnimationFrame(m.current);
                },
                [],
            ),
            (0, t.jsx)(_.A, {
                title: i.title(),
                body: i.body?.() ?? "",
                asset: (0, t.jsx)("img", { src: i.asset, alt: "", "aria-hidden": !0 }),
                children: (0, t.jsxs)(P, {
                    className: null != i.entryPointClassName ? (0, E.t)(S, i.entryPointClassName) : void 0,
                    ...c,
                    icon: i.entryPointIcon,
                    onMouseEnter: x,
                    onMouseLeave: A,
                    ...(!0 === i.showHoverGradient && {
                        showHoverGradient: !0,
                        hoverGradientStart: d.A.colors.COLLECTIBLES_TAB_GRADIENT_CENTER,
                        hoverGradientMiddle: d.A.colors.COLLECTIBLES_TAB_GRADIENT_INNER,
                        hoverGradientEnd: d.A.colors.COLLECTIBLES_TAB_GRADIENT_OUTER,
                    }),
                    children: [
                        (0, t.jsx)("div", {
                            ref: p,
                            className: S.marketingButtonBackgroundNew,
                            style: { background: a },
                            children:
                                null != l &&
                                (0, t.jsx)("img", {
                                    src: l,
                                    className: n()(
                                        S.marketingButtonBackgroundImage,
                                        o && S.marketingButtonBackgroundImageFaded,
                                    ),
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                        }),
                        (0, t.jsx)(F, { badgeIcon: i.badgeIcon, badgeText: i.badgeText }),
                    ],
                }),
            })
        );
    },
    J = (e) => {
        let { displayOptions: l, ...a } = e,
            i = s.useMemo(() => {
                let e = null != l.emojiName ? Z.Ay.getByName(l.emojiName)?.surrogates : null;
                return (0, t.jsxs)(p.E, {
                    variant: "text-sm/medium",
                    className: S.marketingBadgeTooltipContent,
                    children: [null != e && (0, t.jsx)(w.A, { emojiName: e }), l.title()],
                });
            }, [l]);
        return (0, t.jsx)(m.ST, {
            "data-migration-pending": !0,
            text: i,
            tooltipClassName: S.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": l.title(),
            children: (e) =>
                (0, t.jsx)(P, {
                    ...a,
                    ...e,
                    children: (0, t.jsx)(F, { badgeIcon: l.badgeIcon, badgeText: l.badgeText }),
                }),
        });
    },
    G = (e) => {
        let { displayOptions: l, dismissContent: a, ...i } = e,
            c = s.useRef(null),
            h = s.useRef(null),
            [r, o] = s.useState(!1),
            d = (0, u.Ay)(),
            g = (0, v.M)(d),
            p = l.entryPointBackgroundAssets,
            m = l.entrypointBackgroundStyle,
            f = g ? p?.srcDarkHovered : p?.srcLightHovered,
            w = g ? m?.hovered?.dark : m?.hovered?.light;
        return (
            s.useEffect(() => {
                if (null == f || "" === f) return void o(!1);
                let e = () => {
                    o(D(h));
                };
                e();
                let l = requestAnimationFrame(e);
                return () => {
                    cancelAnimationFrame(l);
                };
            }, [f]),
            (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsxs)(P, {
                        ...i,
                        onClick: () => a(L.i.TAKE_ACTION),
                        listItemRef: c,
                        children: [
                            (0, t.jsx)("div", {
                                ref: h,
                                className: S.marketingButtonBackgroundNew,
                                style: null != w ? { background: w } : void 0,
                                children:
                                    null != f &&
                                    (0, t.jsx)("img", {
                                        src: f,
                                        className: n()(
                                            S.marketingButtonBackgroundImage,
                                            r && S.marketingButtonBackgroundImageFaded,
                                        ),
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                            }),
                            (0, t.jsx)(F, { badgeIcon: l.badgeIcon, badgeText: l.badgeText }),
                        ],
                    }),
                    (0, t.jsx)(T.A, {
                        displayOptions: l,
                        targetElementRef: c,
                        onClick: () => a(L.i.TAKE_ACTION),
                        onRequestClose: () => a(L.i.USER_DISMISS),
                    }),
                ],
            })
        );
    },
    W = (e) => {
        let { dismissContent: l, ...a } = e,
            i = s.useRef(null);
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(P, { ...a, onClick: () => l(L.i.TAKE_ACTION), listItemRef: i }),
                (0, t.jsx)(N.A, {
                    targetElementRef: i,
                    onClick: () => l(L.i.TAKE_ACTION),
                    onRequestClose: () => l(L.i.USER_DISMISS),
                }),
            ],
        });
    },
    q = (e) => {
        let { selected: l, onClick: a, locationState: s, listItemRef: i } = e,
            { shopButtonDisplayOptions: n, dismissShopButtonDC: c } = (0, R.A)(),
            h = !(0, f.hasAnyModalOpen)(),
            [r, d] = (0, M.kn)(h ? [o.M.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            v = {
                selected: l,
                locationState: s,
                onClick: () => {
                    c(), a?.();
                },
                listItemRef: i,
            };
        if (null != n)
            switch (n.type) {
                case y.FF.TOOLTIP:
                    return (0, t.jsx)(J, { ...v, displayOptions: n });
                case y.FF.TAB_TOOLTIP:
                    return (0, t.jsx)(k, { ...v, displayOptions: n });
                case y.FF.BADGE:
                    return (0, t.jsx)(b, { ...v });
                case y.FF.COACHMARK:
                    return (0, t.jsx)(G, { dismissContent: c, ...v, displayOptions: n });
            }
        return r === o.M.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, t.jsx)(W, { ...v, dismissContent: d })
            : (0, t.jsx)(P, { ...v });
    };
