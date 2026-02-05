n.d(t, { i: () => q });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(934551),
    d = n(158954),
    c = n(311907),
    u = n(554146),
    A = n(582754),
    h = n(397927),
    _ = n(565645),
    m = n(701363),
    p = n(736653),
    g = n(775602),
    E = n(793574),
    f = n(688810),
    I = n(920064),
    C = n(379848),
    N = n(7584),
    T = n(821589),
    S = n(979286),
    x = n(335657),
    v = n(252362),
    b = n(540063),
    y = n(870308),
    L = n(998694),
    O = n(158216),
    R = n(758836),
    P = n(652215),
    j = n(49999),
    D = n(985018),
    w = n(134848);
let M = (e) => {
        let { badgeIcon: t, badgeText: n } = e,
            r = null != t && "" !== t ? o[t] : void 0;
        return (0, i.jsx)("div", {
            className: w.newBadge,
            children: (0, i.jsx)(d.Exy, {
                type: null != n && "" !== n ? { text: n } : "new",
                variant: "expressive",
                icon: r,
            }),
        });
    },
    U = () => {
        let { noCache: e, includeUnpublished: t } = (0, L.A)();
        return (0, x.y)(R.G2.HOME, { noCache: e, includeUnpublished: t, includeBundles: !0 }, void 0, !0), null;
    },
    G = (e) => {
        let {
                selected: t,
                locationState: n,
                icon: a,
                onClick: l,
                collectibleShopTab: o,
                onMouseEnter: d,
                onMouseLeave: c,
                children: u,
                ...A
            } = e,
            _ = (0, s.rm)("shop"),
            p = E.A.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: g } = (0, f.Ay)(p),
            [I, C] = r.useState(!1),
            N = r.useCallback(() => {
                void 0 !== l && l(),
                    void 0 !== o && (0, S.Cz)({ tab: o, analyticsLocations: g, analyticsSource: p }),
                    C(!0),
                    (0, S.Sw)({ analyticsSource: p, analyticsLocations: g });
            }, [p, g, l, C, o]),
            T = P.BVt.COLLECTIBLES_SHOP;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                I && (0, i.jsx)(U, {}),
                (0, i.jsx)(m.z9, {
                    selected: t,
                    route: T,
                    icon: a ?? h.U1X,
                    text: D.intl.string(D.t.pWG4ze),
                    locationState: n,
                    ..._,
                    ...A,
                    onMouseEnter: d,
                    onMouseLeave: c,
                    onClick: N,
                    children: u,
                }),
            ],
        });
    },
    k = (e) => (0, i.jsx)(G, { ...e, children: (0, i.jsx)(M, {}) }),
    V = r.memo(function (e) {
        let { displayOptions: t, assetId: n, reducedMotion: r = !1 } = e,
            a = null != n ? (0, I.A)(n, h._3J.SIZE_80, !r) : void 0,
            l = t.title(),
            s = t.body?.(),
            o = null == s || "" === s;
        return (0, i.jsxs)("div", {
            className: w.shopMarketingTooltipContent,
            children: [
                (0, i.jsx)("div", {
                    className: w.avatarContainer,
                    children: (0, i.jsx)(h.euF, {
                        className: w.avatar,
                        src: t.imageSrc,
                        avatarDecoration: a,
                        size: h._3J.SIZE_80,
                        "aria-hidden": !0,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: w.shopMarketingTooltipText,
                    children: [
                        (0, i.jsx)(h.Heading, { variant: o ? "heading-sm/medium" : "heading-sm/bold", children: l }),
                        !o &&
                            (0, i.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                className: w.marketingBadgeTooltipContent,
                                children: s,
                            }),
                    ],
                }),
            ],
        });
    }),
    B = (e) => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230;
    },
    H = (e) => {
        let t,
            n,
            { displayOptions: a, ...s } = e,
            o = (0, c.bG)([g.A], () => g.A.useReducedMotion),
            [d, u] = r.useState(0),
            [_, m] = r.useState(!1),
            [E, f] = r.useState(!1),
            I = r.useRef(null),
            C = r.useRef(null),
            N = (0, p.Ay)(),
            S = (0, A.Mw)(N);
        _
            ? S
                ? ((t = a.entryPointBackgroundAssets?.srcDarkHovered), (n = a.entrypointBackgroundStyle?.hovered?.dark))
                : ((t = a.entryPointBackgroundAssets?.srcLightHovered),
                  (n = a.entrypointBackgroundStyle?.hovered?.light))
            : S
              ? ((t = a.entryPointBackgroundAssets?.srcDark), (n = a.entrypointBackgroundStyle?.resting?.dark))
              : ((t = a.entryPointBackgroundAssets?.srcLight), (n = a.entrypointBackgroundStyle?.resting?.light));
        let x = r.useCallback(
                (e) => {
                    a.assetIds.length > 0 && u((e) => (e + 1) % a.assetIds.length), m(!0);
                    let t = () => {
                        f(B(I));
                    };
                    t(), (C.current = requestAnimationFrame(t)), e?.();
                },
                [a.assetIds.length],
            ),
            v = r.useCallback((e) => {
                m(!1), f(!1), null != C.current && (cancelAnimationFrame(C.current), (C.current = null)), e?.();
            }, []);
        r.useEffect(
            () => () => {
                null != C.current && cancelAnimationFrame(C.current);
            },
            [],
        );
        let b = a.title();
        return (0, i.jsx)(h.STz, {
            "data-migration-pending": !0,
            text: (0, i.jsx)(V, { displayOptions: a, assetId: a.assetIds[d], reducedMotion: o }),
            tooltipClassName: w.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            "aria-label": "string" == typeof b ? b : D.intl.string(D.t.rSXaxY),
            children: (e) =>
                (0, i.jsxs)(G, {
                    className: null != a.entryPointClassName ? (0, T.t)(w, a.entryPointClassName) : void 0,
                    ...s,
                    icon: a.entryPointIcon,
                    ...e,
                    onMouseEnter: () => x(e.onMouseEnter),
                    onMouseLeave: () => v(e.onMouseLeave),
                    children: [
                        (0, i.jsx)("div", {
                            ref: I,
                            className: w.marketingButtonBackgroundNew,
                            style: { background: n },
                            children:
                                null != t &&
                                (0, i.jsx)("img", {
                                    src: t,
                                    className: l()(
                                        w.marketingButtonBackgroundImage,
                                        E && w.marketingButtonBackgroundImageFaded,
                                    ),
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                        }),
                        (0, i.jsx)(M, { badgeIcon: a.badgeIcon, badgeText: a.badgeText }),
                    ],
                }),
        });
    },
    F = (e) => {
        let { displayOptions: t, ...n } = e,
            a = r.useMemo(() => {
                let e = null != t.emojiName ? N.Ay.getByName(t.emojiName)?.surrogates : null;
                return (0, i.jsxs)(h.Text, {
                    variant: "text-sm/medium",
                    className: w.marketingBadgeTooltipContent,
                    children: [null != e && (0, i.jsx)(_.A, { emojiName: e }), t.title()],
                });
            }, [t]);
        return (0, i.jsx)(h.STz, {
            "data-migration-pending": !0,
            text: a,
            tooltipClassName: w.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) =>
                (0, i.jsx)(G, {
                    ...n,
                    ...e,
                    children: (0, i.jsx)(M, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                }),
        });
    },
    Y = (e) => {
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
                    c(B(o));
                };
                e();
                let t = requestAnimationFrame(e);
                return () => {
                    cancelAnimationFrame(t);
                };
            }, [g]),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(G, {
                        ...a,
                        onClick: () => n(j.i.TAKE_ACTION),
                        listItemRef: s,
                        children: [
                            (0, i.jsx)("div", {
                                ref: o,
                                className: w.marketingButtonBackgroundNew,
                                style: null != E ? { background: E } : void 0,
                                children:
                                    null != g &&
                                    (0, i.jsx)("img", {
                                        src: g,
                                        className: l()(
                                            w.marketingButtonBackgroundImage,
                                            d && w.marketingButtonBackgroundImageFaded,
                                        ),
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                            }),
                            (0, i.jsx)(M, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                        ],
                    }),
                    (0, i.jsx)(v.A, {
                        displayOptions: t,
                        targetElementRef: s,
                        onClick: () => n(j.i.TAKE_ACTION),
                        onRequestClose: () => n(j.i.USER_DISMISS),
                    }),
                ],
            })
        );
    },
    W = (e) => {
        let { dismissContent: t, ...n } = e,
            a = r.useRef(null);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(G, { ...n, onClick: () => t(j.i.TAKE_ACTION), listItemRef: a }),
                (0, i.jsx)(b.A, {
                    targetElementRef: a,
                    onClick: () => t(j.i.TAKE_ACTION),
                    onRequestClose: () => t(j.i.USER_DISMISS),
                }),
            ],
        });
    },
    q = (e) => {
        let { selected: t, onClick: n, locationState: r, listItemRef: a } = e,
            { shopButtonDisplayOptions: l, dismissShopButtonDC: s } = (0, y.A)(),
            o = !(0, h.ueM)(),
            [d, c] = (0, C.kn)(o ? [u.M.WISHLIST_SHOP_BUTTON_POPOVER] : []),
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
                    return (0, i.jsx)(F, { ...A, displayOptions: l });
                case O.FF.COACHTIP:
                    return (0, i.jsx)(H, { ...A, displayOptions: l });
                case O.FF.BADGE:
                    return (0, i.jsx)(k, { ...A });
                case O.FF.COACHMARK:
                    return (0, i.jsx)(Y, { dismissContent: s, ...A, displayOptions: l });
            }
        return d === u.M.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, i.jsx)(W, { ...A, dismissContent: c })
            : (0, i.jsx)(G, { ...A });
    };
