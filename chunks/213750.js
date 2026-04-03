n.d(t, { i: () => Y });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(837381),
    o = n(934551),
    d = n(158954),
    c = n(554146),
    u = n(582754),
    A = n(397927),
    h = n(565645),
    _ = n(701363),
    m = n(736653),
    p = n(793574),
    g = n(688810),
    E = n(932001),
    I = n(7584),
    f = n(486164),
    C = n(998304),
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
    M = n(910905);
let j = (e) => {
        let { badgeIcon: t, badgeText: n } = e,
            a = null != t && "" !== t ? o[t] : void 0;
        return (0, i.jsx)("div", {
            className: M.newBadge,
            children: (0, i.jsx)(d.Exy, {
                type: null != n && "" !== n ? { text: n } : "new",
                variant: "expressive",
                icon: a,
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
                icon: l,
                onClick: r,
                collectibleShopTab: o,
                onMouseEnter: d,
                onMouseLeave: c,
                children: u,
                showHoverGradient: h,
                hoverGradientStart: m,
                hoverGradientMiddle: E,
                hoverGradientEnd: I,
                ...f
            } = e,
            C = (0, s.rm)("shop"),
            T = p.A.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: S } = (0, g.Ay)(T),
            [x, v] = a.useState(!1),
            b = a.useCallback(() => {
                void 0 !== r && r(),
                    void 0 !== o && (0, N.Cz)({ tab: o, analyticsLocations: S, analyticsSource: T }),
                    v(!0),
                    (0, N.Sw)({ analyticsSource: T, analyticsLocations: S });
            }, [T, S, r, v, o]),
            y = R.BVt.COLLECTIBLES_SHOP;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                x && (0, i.jsx)(w, {}),
                (0, i.jsx)(_.z9, {
                    showHoverGradient: h ?? !1,
                    selected: t,
                    route: y,
                    icon: l ?? A.U1X,
                    text: D.intl.string(D.t.pWG4ze),
                    locationState: n,
                    ...C,
                    ...f,
                    ...{ hoverGradientStart: m, hoverGradientMiddle: E, hoverGradientEnd: I },
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
            { displayOptions: l, ...s } = e,
            [o, d] = a.useState(!1),
            [c, A] = a.useState(!1),
            h = a.useRef(null),
            _ = a.useRef(null),
            p = (0, m.Ay)(),
            g = (0, u.Mw)(p);
        o
            ? ((t = g ? l.entryPointBackgroundAssets?.srcDarkHovered : l.entryPointBackgroundAssets?.srcLightHovered),
              (n = g ? l.entrypointBackgroundStyle?.hovered?.dark : l.entrypointBackgroundStyle?.hovered?.light))
            : ((t = g ? l.entryPointBackgroundAssets?.srcDark : l.entryPointBackgroundAssets?.srcLight),
              (n = g ? l.entrypointBackgroundStyle?.resting?.dark : l.entrypointBackgroundStyle?.resting?.light));
        let E = a.useCallback(() => {
                d(!0);
                let e = () => A(k(h));
                e(), (_.current = requestAnimationFrame(e));
            }, []),
            I = a.useCallback(() => {
                d(!1), A(!1), null != _.current && (cancelAnimationFrame(_.current), (_.current = null));
            }, []);
        return (
            a.useEffect(
                () => () => {
                    null != _.current && cancelAnimationFrame(_.current);
                },
                [],
            ),
            (0, i.jsx)(f.A, {
                title: l.title(),
                body: l.body?.() ?? "",
                asset: (0, i.jsx)("img", { src: l.asset, alt: "", "aria-hidden": !0 }),
                children: (0, i.jsxs)(U, {
                    className: null != l.entryPointClassName ? (0, T.t)(M, l.entryPointClassName) : void 0,
                    ...s,
                    icon: l.entryPointIcon,
                    onMouseEnter: E,
                    onMouseLeave: I,
                    ...(null != l.hoverGradient && {
                        showHoverGradient: !0,
                        hoverGradientStart: {
                            ...(0, C.j5)(l.hoverGradient.center.color),
                            a: l.hoverGradient.center.opacity ?? 1,
                        },
                        hoverGradientMiddle: {
                            ...(0, C.j5)(l.hoverGradient.inner.color),
                            a: l.hoverGradient.inner.opacity ?? 0.5,
                        },
                        hoverGradientEnd: {
                            ...(0, C.j5)(l.hoverGradient.outer.color),
                            a: l.hoverGradient.outer.opacity ?? 0,
                        },
                    }),
                    children: [
                        (0, i.jsx)("div", {
                            ref: h,
                            className: M.marketingButtonBackgroundNew,
                            style: { background: n },
                            children:
                                null != t &&
                                (0, i.jsx)("img", {
                                    src: t,
                                    className: r()(
                                        M.marketingButtonBackgroundImage,
                                        c && M.marketingButtonBackgroundImageFaded,
                                    ),
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                        }),
                        (0, i.jsx)(j, { badgeIcon: l.badgeIcon, badgeText: l.badgeText }),
                    ],
                }),
            })
        );
    },
    B = (e) => {
        let { displayOptions: t, ...n } = e,
            l = a.useMemo(() => {
                let e = null != t.emojiName ? I.Ay.getByName(t.emojiName)?.surrogates : null;
                return (0, i.jsxs)(A.Text, {
                    variant: "text-sm/medium",
                    className: M.marketingBadgeTooltipContent,
                    children: [null != e && (0, i.jsx)(h.A, { emojiName: e }), t.title()],
                });
            }, [t]);
        return (0, i.jsx)(A.STz, {
            "data-migration-pending": !0,
            text: l,
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
        let { displayOptions: t, dismissContent: n, ...l } = e,
            s = a.useRef(null),
            o = a.useRef(null),
            [d, c] = a.useState(!1),
            A = (0, m.Ay)(),
            h = (0, u.Mw)(A),
            _ = t.entryPointBackgroundAssets,
            p = t.entrypointBackgroundStyle,
            g = h ? _?.srcDarkHovered : _?.srcLightHovered,
            E = h ? p?.hovered?.dark : p?.hovered?.light;
        return (
            a.useEffect(() => {
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
                        ...l,
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
                                        className: r()(
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
            l = a.useRef(null);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(U, { ...n, onClick: () => t(P.i.TAKE_ACTION), listItemRef: l }),
                (0, i.jsx)(v.A, {
                    targetElementRef: l,
                    onClick: () => t(P.i.TAKE_ACTION),
                    onRequestClose: () => t(P.i.USER_DISMISS),
                }),
            ],
        });
    },
    Y = (e) => {
        let { selected: t, onClick: n, locationState: a, listItemRef: l } = e,
            { shopButtonDisplayOptions: r, dismissShopButtonDC: s } = (0, b.A)(),
            o = !(0, A.ueM)(),
            [d, u] = (0, E.kn)(o ? [c.M.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            h = {
                selected: t,
                locationState: a,
                onClick: () => {
                    s(), n?.();
                },
                listItemRef: l,
            };
        if (null != r)
            switch (r.type) {
                case O.FF.TOOLTIP:
                    return (0, i.jsx)(B, { ...h, displayOptions: r });
                case O.FF.TAB_TOOLTIP:
                    return (0, i.jsx)(V, { ...h, displayOptions: r });
                case O.FF.BADGE:
                    return (0, i.jsx)(G, { ...h });
                case O.FF.COACHMARK:
                    return (0, i.jsx)(H, { dismissContent: s, ...h, displayOptions: r });
            }
        return d === c.M.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, i.jsx)(F, { ...h, dismissContent: u })
            : (0, i.jsx)(U, { ...h });
    };
