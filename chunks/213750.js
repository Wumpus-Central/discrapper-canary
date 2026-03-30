n.d(t, { i: () => F });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
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
    C = n(821589),
    T = n(979286),
    N = n(335657),
    S = n(252362),
    x = n(540063),
    v = n(870308),
    y = n(998694),
    b = n(158216),
    O = n(758836),
    L = n(652215),
    R = n(49999),
    P = n(985018),
    D = n(910905);
let M = (e) => {
        let { badgeIcon: t, badgeText: n } = e,
            l = null != t && "" !== t ? o[t] : void 0;
        return (0, i.jsx)("div", {
            className: D.newBadge,
            children: (0, i.jsx)(d.Exy, {
                type: null != n && "" !== n ? { text: n } : "new",
                variant: "expressive",
                icon: l,
            }),
        });
    },
    j = () => {
        let { noCache: e, includeUnpublished: t } = (0, y.A)();
        return (0, N.y)(O.G2.HOME, { noCache: e, includeUnpublished: t }, void 0, !0), null;
    },
    w = (e) => {
        let {
                selected: t,
                locationState: n,
                icon: a,
                onClick: r,
                collectibleShopTab: o,
                onMouseEnter: d,
                onMouseLeave: c,
                children: u,
                ...h
            } = e,
            m = (0, s.rm)("shop"),
            E = p.A.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: I } = (0, g.Ay)(E),
            [f, C] = l.useState(!1),
            N = l.useCallback(() => {
                void 0 !== r && r(),
                    void 0 !== o && (0, T.Cz)({ tab: o, analyticsLocations: I, analyticsSource: E }),
                    C(!0),
                    (0, T.Sw)({ analyticsSource: E, analyticsLocations: I });
            }, [E, I, r, C, o]),
            S = L.BVt.COLLECTIBLES_SHOP;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                f && (0, i.jsx)(j, {}),
                (0, i.jsx)(_.z9, {
                    selected: t,
                    route: S,
                    icon: a ?? A.U1X,
                    text: P.intl.string(P.t.pWG4ze),
                    locationState: n,
                    ...m,
                    ...h,
                    onMouseEnter: d,
                    onMouseLeave: c,
                    onClick: N,
                    children: u,
                }),
            ],
        });
    },
    U = (e) => (0, i.jsx)(w, { ...e, children: (0, i.jsx)(M, {}) }),
    G = (e) => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230;
    },
    k = (e) => {
        let t,
            n,
            { displayOptions: a, ...s } = e,
            [o, d] = l.useState(!1),
            [c, A] = l.useState(!1),
            h = l.useRef(null),
            _ = l.useRef(null),
            p = (0, m.Ay)(),
            g = (0, u.Mw)(p);
        o
            ? ((t = g ? a.entryPointBackgroundAssets?.srcDarkHovered : a.entryPointBackgroundAssets?.srcLightHovered),
              (n = g ? a.entrypointBackgroundStyle?.hovered?.dark : a.entrypointBackgroundStyle?.hovered?.light))
            : ((t = g ? a.entryPointBackgroundAssets?.srcDark : a.entryPointBackgroundAssets?.srcLight),
              (n = g ? a.entrypointBackgroundStyle?.resting?.dark : a.entrypointBackgroundStyle?.resting?.light));
        let E = l.useCallback(() => {
                d(!0);
                let e = () => A(G(h));
                e(), (_.current = requestAnimationFrame(e));
            }, []),
            I = l.useCallback(() => {
                d(!1), A(!1), null != _.current && (cancelAnimationFrame(_.current), (_.current = null));
            }, []);
        return (
            l.useEffect(
                () => () => {
                    null != _.current && cancelAnimationFrame(_.current);
                },
                [],
            ),
            (0, i.jsx)(f.A, {
                title: a.title(),
                body: a.body?.() ?? "",
                asset: (0, i.jsx)("img", { src: a.asset, alt: "", "aria-hidden": !0 }),
                children: (0, i.jsxs)(w, {
                    className: null != a.entryPointClassName ? (0, C.t)(D, a.entryPointClassName) : void 0,
                    ...s,
                    icon: a.entryPointIcon,
                    onMouseEnter: E,
                    onMouseLeave: I,
                    children: [
                        (0, i.jsx)("div", {
                            ref: h,
                            className: D.marketingButtonBackgroundNew,
                            style: { background: n },
                            children:
                                null != t &&
                                (0, i.jsx)("img", {
                                    src: t,
                                    className: r()(
                                        D.marketingButtonBackgroundImage,
                                        c && D.marketingButtonBackgroundImageFaded,
                                    ),
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                        }),
                        (0, i.jsx)(M, { badgeIcon: a.badgeIcon, badgeText: a.badgeText }),
                    ],
                }),
            })
        );
    },
    V = (e) => {
        let { displayOptions: t, ...n } = e,
            a = l.useMemo(() => {
                let e = null != t.emojiName ? I.Ay.getByName(t.emojiName)?.surrogates : null;
                return (0, i.jsxs)(A.Text, {
                    variant: "text-sm/medium",
                    className: D.marketingBadgeTooltipContent,
                    children: [null != e && (0, i.jsx)(h.A, { emojiName: e }), t.title()],
                });
            }, [t]);
        return (0, i.jsx)(A.STz, {
            "data-migration-pending": !0,
            text: a,
            tooltipClassName: D.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) =>
                (0, i.jsx)(w, {
                    ...n,
                    ...e,
                    children: (0, i.jsx)(M, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                }),
        });
    },
    B = (e) => {
        let { displayOptions: t, dismissContent: n, ...a } = e,
            s = l.useRef(null),
            o = l.useRef(null),
            [d, c] = l.useState(!1),
            A = (0, m.Ay)(),
            h = (0, u.Mw)(A),
            _ = t.entryPointBackgroundAssets,
            p = t.entrypointBackgroundStyle,
            g = h ? _?.srcDarkHovered : _?.srcLightHovered,
            E = h ? p?.hovered?.dark : p?.hovered?.light;
        return (
            l.useEffect(() => {
                if (null == g || "" === g) return void c(!1);
                let e = () => {
                    c(G(o));
                };
                e();
                let t = requestAnimationFrame(e);
                return () => {
                    cancelAnimationFrame(t);
                };
            }, [g]),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(w, {
                        ...a,
                        onClick: () => n(R.i.TAKE_ACTION),
                        listItemRef: s,
                        children: [
                            (0, i.jsx)("div", {
                                ref: o,
                                className: D.marketingButtonBackgroundNew,
                                style: null != E ? { background: E } : void 0,
                                children:
                                    null != g &&
                                    (0, i.jsx)("img", {
                                        src: g,
                                        className: r()(
                                            D.marketingButtonBackgroundImage,
                                            d && D.marketingButtonBackgroundImageFaded,
                                        ),
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                            }),
                            (0, i.jsx)(M, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                        ],
                    }),
                    (0, i.jsx)(S.A, {
                        displayOptions: t,
                        targetElementRef: s,
                        onClick: () => n(R.i.TAKE_ACTION),
                        onRequestClose: () => n(R.i.USER_DISMISS),
                    }),
                ],
            })
        );
    },
    H = (e) => {
        let { dismissContent: t, ...n } = e,
            a = l.useRef(null);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(w, { ...n, onClick: () => t(R.i.TAKE_ACTION), listItemRef: a }),
                (0, i.jsx)(x.A, {
                    targetElementRef: a,
                    onClick: () => t(R.i.TAKE_ACTION),
                    onRequestClose: () => t(R.i.USER_DISMISS),
                }),
            ],
        });
    },
    F = (e) => {
        let { selected: t, onClick: n, locationState: l, listItemRef: a } = e,
            { shopButtonDisplayOptions: r, dismissShopButtonDC: s } = (0, v.A)(),
            o = !(0, A.ueM)(),
            [d, u] = (0, E.kn)(o ? [c.M.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            h = {
                selected: t,
                locationState: l,
                onClick: () => {
                    s(), n?.();
                },
                listItemRef: a,
            };
        if (null != r)
            switch (r.type) {
                case b.FF.TOOLTIP:
                    return (0, i.jsx)(V, { ...h, displayOptions: r });
                case b.FF.TAB_TOOLTIP:
                    return (0, i.jsx)(k, { ...h, displayOptions: r });
                case b.FF.BADGE:
                    return (0, i.jsx)(U, { ...h });
                case b.FF.COACHMARK:
                    return (0, i.jsx)(B, { dismissContent: s, ...h, displayOptions: r });
            }
        return d === c.M.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, i.jsx)(H, { ...h, dismissContent: u })
            : (0, i.jsx)(w, { ...h });
    };
