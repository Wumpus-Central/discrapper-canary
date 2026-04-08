n.d(t, { i: () => Y });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(934551),
    d = n(158954),
    c = n(554146),
    u = n(827734),
    A = n(582754),
    h = n(397927),
    _ = n(565645),
    m = n(701363),
    p = n(736653),
    g = n(793574),
    E = n(688810),
    I = n(932001),
    f = n(7584),
    C = n(486164),
    T = n(821589),
    N = n(979286),
    S = n(335657),
    x = n(252362),
    v = n(540063),
    b = n(870308),
    y = n(998694),
    O = n(158216),
    L = n(758836),
    R = n(652215),
    P = n(49999),
    D = n(985018),
    M = n(848038);
let j = (e) => {
        let { badgeIcon: t, badgeText: n } = e,
            r = null != t && "" !== t ? o[t] : void 0;
        return (0, i.jsx)("div", {
            className: M.newBadge,
            children: (0, i.jsx)(d.Exy, {
                type: null != n && "" !== n ? { text: n } : "new",
                variant: "expressive",
                icon: r,
            }),
        });
    },
    w = () => {
        let { noCache: e, includeUnpublished: t } = (0, y.A)();
        return (0, S.y)(L.G2.HOME, { noCache: e, includeUnpublished: t }, void 0, !0), null;
    },
    U = (e) => {
        let {
                selected: t,
                locationState: n,
                icon: a,
                onClick: l,
                collectibleShopTab: o,
                onMouseEnter: d,
                onMouseLeave: c,
                children: u,
                showHoverGradient: A,
                hoverGradientStart: _,
                hoverGradientMiddle: p,
                hoverGradientEnd: I,
                ...f
            } = e,
            C = (0, s.rm)("shop"),
            T = g.A.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: S } = (0, E.Ay)(T),
            [x, v] = r.useState(!1),
            b = r.useCallback(() => {
                void 0 !== l && l(),
                    void 0 !== o && (0, N.Cz)({ tab: o, analyticsLocations: S, analyticsSource: T }),
                    v(!0),
                    (0, N.Sw)({ analyticsSource: T, analyticsLocations: S });
            }, [T, S, l, v, o]),
            y = R.BVt.COLLECTIBLES_SHOP;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                x && (0, i.jsx)(w, {}),
                (0, i.jsx)(m.z9, {
                    showHoverGradient: A ?? !1,
                    selected: t,
                    route: y,
                    icon: a ?? h.U1X,
                    text: D.intl.string(D.t.pWG4ze),
                    locationState: n,
                    ...C,
                    ...f,
                    hoverGradientStart: _,
                    hoverGradientMiddle: p,
                    hoverGradientEnd: I,
                    onMouseEnter: d,
                    onMouseLeave: c,
                    onClick: b,
                    children: u,
                }),
            ],
        });
    },
    G = (e) => (0, i.jsx)(U, { ...e, children: (0, i.jsx)(j, {}) }),
    k = (e) => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230;
    },
    V = (e) => {
        let t,
            n,
            { displayOptions: a, ...s } = e,
            [o, d] = r.useState(!1),
            [c, h] = r.useState(!1),
            _ = r.useRef(null),
            m = r.useRef(null),
            g = (0, p.Ay)(),
            E = (0, A.Mw)(g);
        o
            ? ((t = E ? a.entryPointBackgroundAssets?.srcDarkHovered : a.entryPointBackgroundAssets?.srcLightHovered),
              (n = E ? a.entrypointBackgroundStyle?.hovered?.dark : a.entrypointBackgroundStyle?.hovered?.light))
            : ((t = E ? a.entryPointBackgroundAssets?.srcDark : a.entryPointBackgroundAssets?.srcLight),
              (n = E ? a.entrypointBackgroundStyle?.resting?.dark : a.entrypointBackgroundStyle?.resting?.light));
        let I = r.useCallback(() => {
                d(!0);
                let e = () => h(k(_));
                e(), (m.current = requestAnimationFrame(e));
            }, []),
            f = r.useCallback(() => {
                d(!1), h(!1), null != m.current && (cancelAnimationFrame(m.current), (m.current = null));
            }, []);
        return (
            r.useEffect(
                () => () => {
                    null != m.current && cancelAnimationFrame(m.current);
                },
                [],
            ),
            (0, i.jsx)(C.A, {
                title: a.title(),
                body: a.body?.() ?? "",
                asset: (0, i.jsx)("img", { src: a.asset, alt: "", "aria-hidden": !0 }),
                children: (0, i.jsxs)(U, {
                    className: null != a.entryPointClassName ? (0, T.t)(M, a.entryPointClassName) : void 0,
                    ...s,
                    icon: a.entryPointIcon,
                    onMouseEnter: I,
                    onMouseLeave: f,
                    ...(!0 === a.showHoverGradient && {
                        showHoverGradient: !0,
                        hoverGradientStart: u.A.colors.COLLECTIBLES_TAB_GRADIENT_CENTER,
                        hoverGradientMiddle: u.A.colors.COLLECTIBLES_TAB_GRADIENT_INNER,
                        hoverGradientEnd: u.A.colors.COLLECTIBLES_TAB_GRADIENT_OUTER,
                    }),
                    children: [
                        (0, i.jsx)("div", {
                            ref: _,
                            className: M.marketingButtonBackgroundNew,
                            style: { background: n },
                            children:
                                null != t &&
                                (0, i.jsx)("img", {
                                    src: t,
                                    className: l()(
                                        M.marketingButtonBackgroundImage,
                                        c && M.marketingButtonBackgroundImageFaded,
                                    ),
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                        }),
                        (0, i.jsx)(j, { badgeIcon: a.badgeIcon, badgeText: a.badgeText }),
                    ],
                }),
            })
        );
    },
    B = (e) => {
        let { displayOptions: t, ...n } = e,
            a = r.useMemo(() => {
                let e = null != t.emojiName ? f.Ay.getByName(t.emojiName)?.surrogates : null;
                return (0, i.jsxs)(h.Text, {
                    variant: "text-sm/medium",
                    className: M.marketingBadgeTooltipContent,
                    children: [null != e && (0, i.jsx)(_.A, { emojiName: e }), t.title()],
                });
            }, [t]);
        return (0, i.jsx)(h.STz, {
            "data-migration-pending": !0,
            text: a,
            tooltipClassName: M.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) =>
                (0, i.jsx)(U, {
                    ...n,
                    ...e,
                    children: (0, i.jsx)(j, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                }),
        });
    },
    H = (e) => {
        let { displayOptions: t, dismissContent: n, ...a } = e,
            s = r.useRef(null),
            o = r.useRef(null),
            [d, c] = r.useState(!1),
            u = (0, p.Ay)(),
            h = (0, A.Mw)(u),
            _ = t.entryPointBackgroundAssets,
            m = t.entrypointBackgroundStyle,
            g = h ? _?.srcDarkHovered : _?.srcLightHovered,
            E = h ? m?.hovered?.dark : m?.hovered?.light;
        return (
            r.useEffect(() => {
                if (null == g || "" === g) return void c(!1);
                let e = () => {
                    c(k(o));
                };
                e();
                let t = requestAnimationFrame(e);
                return () => {
                    cancelAnimationFrame(t);
                };
            }, [g]),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(U, {
                        ...a,
                        onClick: () => n(P.i.TAKE_ACTION),
                        listItemRef: s,
                        children: [
                            (0, i.jsx)("div", {
                                ref: o,
                                className: M.marketingButtonBackgroundNew,
                                style: null != E ? { background: E } : void 0,
                                children:
                                    null != g &&
                                    (0, i.jsx)("img", {
                                        src: g,
                                        className: l()(
                                            M.marketingButtonBackgroundImage,
                                            d && M.marketingButtonBackgroundImageFaded,
                                        ),
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                            }),
                            (0, i.jsx)(j, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                        ],
                    }),
                    (0, i.jsx)(x.A, {
                        displayOptions: t,
                        targetElementRef: s,
                        onClick: () => n(P.i.TAKE_ACTION),
                        onRequestClose: () => n(P.i.USER_DISMISS),
                    }),
                ],
            })
        );
    },
    F = (e) => {
        let { dismissContent: t, ...n } = e,
            a = r.useRef(null);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(U, { ...n, onClick: () => t(P.i.TAKE_ACTION), listItemRef: a }),
                (0, i.jsx)(v.A, {
                    targetElementRef: a,
                    onClick: () => t(P.i.TAKE_ACTION),
                    onRequestClose: () => t(P.i.USER_DISMISS),
                }),
            ],
        });
    },
    Y = (e) => {
        let { selected: t, onClick: n, locationState: r, listItemRef: a } = e,
            { shopButtonDisplayOptions: l, dismissShopButtonDC: s } = (0, b.A)(),
            o = !(0, h.ueM)(),
            [d, u] = (0, I.kn)(o ? [c.M.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            A = {
                selected: t,
                locationState: r,
                onClick: () => {
                    s(), n?.();
                },
                listItemRef: a,
            };
        if (null != l)
            switch (l.type) {
                case O.FF.TOOLTIP:
                    return (0, i.jsx)(B, { ...A, displayOptions: l });
                case O.FF.TAB_TOOLTIP:
                    return (0, i.jsx)(V, { ...A, displayOptions: l });
                case O.FF.BADGE:
                    return (0, i.jsx)(G, { ...A });
                case O.FF.COACHMARK:
                    return (0, i.jsx)(H, { dismissContent: s, ...A, displayOptions: l });
            }
        return d === c.M.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, i.jsx)(F, { ...A, dismissContent: u })
            : (0, i.jsx)(U, { ...A });
    };
