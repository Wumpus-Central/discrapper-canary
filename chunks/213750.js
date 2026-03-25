n.d(t, { i: () => z });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(837381),
    o = n(934551),
    d = n(158954),
    c = n(311907),
    u = n(554146),
    A = n(582754),
    h = n(397927),
    _ = n(565645),
    m = n(701363),
    g = n(736653),
    p = n(775602),
    E = n(793574),
    I = n(688810),
    f = n(932001),
    C = n(7584),
    T = n(486164),
    N = n(821589),
    S = n(979286),
    x = n(912140),
    v = n(335657),
    b = n(252362),
    y = n(540063),
    O = n(870308),
    L = n(998694),
    R = n(158216),
    P = n(758836),
    D = n(652215),
    M = n(49999),
    j = n(985018),
    w = n(134848);
let U = (e) => {
        let { badgeIcon: t, badgeText: n } = e,
            a = null != t && "" !== t ? o[t] : void 0;
        return (0, i.jsx)("div", {
            className: w.newBadge,
            children: (0, i.jsx)(d.Exy, {
                type: null != n && "" !== n ? { text: n } : "new",
                variant: "expressive",
                icon: a,
            }),
        });
    },
    G = () => {
        let { noCache: e, includeUnpublished: t } = (0, L.A)();
        return (0, v.y)(P.G2.HOME, { noCache: e, includeUnpublished: t }, void 0, !0), null;
    },
    k = (e) => {
        let {
                selected: t,
                locationState: n,
                icon: l,
                onClick: r,
                collectibleShopTab: o,
                onMouseEnter: d,
                onMouseLeave: c,
                children: u,
                ...A
            } = e,
            _ = (0, s.rm)("shop"),
            g = E.A.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: p } = (0, I.Ay)(g),
            [f, C] = a.useState(!1),
            T = a.useCallback(() => {
                void 0 !== r && r(),
                    void 0 !== o && (0, S.Cz)({ tab: o, analyticsLocations: p, analyticsSource: g }),
                    C(!0),
                    (0, S.Sw)({ analyticsSource: g, analyticsLocations: p });
            }, [g, p, r, C, o]),
            N = D.BVt.COLLECTIBLES_SHOP;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                f && (0, i.jsx)(G, {}),
                (0, i.jsx)(m.z9, {
                    selected: t,
                    route: N,
                    icon: l ?? h.U1X,
                    text: j.intl.string(j.t.pWG4ze),
                    locationState: n,
                    ..._,
                    ...A,
                    onMouseEnter: d,
                    onMouseLeave: c,
                    onClick: T,
                    children: u,
                }),
            ],
        });
    },
    V = (e) => (0, i.jsx)(k, { ...e, children: (0, i.jsx)(U, {}) }),
    B = a.memo(function (e) {
        let { displayOptions: t, assetId: n, avatarDecorationSkuId: a, reducedMotion: l = !1 } = e,
            r = null != n || null != a ? (0, x.A)({ legacyAssetId: n, skuId: a, canAnimate: !l }) : null,
            s = t.title(),
            o = t.body?.(),
            d = null == o || "" === o;
        return (0, i.jsxs)("div", {
            className: w.shopMarketingTooltipContent,
            children: [
                (0, i.jsx)("div", {
                    className: w.avatarContainer,
                    children: (0, i.jsx)(h.euF, {
                        className: w.avatar,
                        src: t.imageSrc,
                        avatarDecoration: r,
                        size: h._3J.SIZE_80,
                        "aria-hidden": !0,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: w.shopMarketingTooltipText,
                    children: [
                        (0, i.jsx)(h.Heading, { variant: d ? "heading-sm/medium" : "heading-sm/bold", children: s }),
                        !d &&
                            (0, i.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                className: w.marketingBadgeTooltipContent,
                                children: o,
                            }),
                    ],
                }),
            ],
        });
    }),
    H = (e) => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230;
    },
    F = (e) => {
        let t,
            n,
            { displayOptions: l, ...s } = e,
            o = (0, c.bG)([p.A], () => p.A.useReducedMotion),
            [d, u] = a.useState(0),
            [_, m] = a.useState(0),
            [E, I] = a.useState(!1),
            [f, C] = a.useState(!1),
            T = a.useRef(null),
            S = a.useRef(null),
            x = (0, g.Ay)(),
            v = (0, A.Mw)(x);
        E
            ? v
                ? ((t = l.entryPointBackgroundAssets?.srcDarkHovered), (n = l.entrypointBackgroundStyle?.hovered?.dark))
                : ((t = l.entryPointBackgroundAssets?.srcLightHovered),
                  (n = l.entrypointBackgroundStyle?.hovered?.light))
            : v
              ? ((t = l.entryPointBackgroundAssets?.srcDark), (n = l.entrypointBackgroundStyle?.resting?.dark))
              : ((t = l.entryPointBackgroundAssets?.srcLight), (n = l.entrypointBackgroundStyle?.resting?.light));
        let b = a.useCallback(
                (e) => {
                    let t = l.assetIds;
                    null != t && t.length > 0 && u((e) => (e + 1) % t.length);
                    let n = l.avatarDecorationSkuIds;
                    null != n && n.length > 0 && m((e) => (e + 1) % n.length), I(!0);
                    let i = () => {
                        C(H(T));
                    };
                    i(), (S.current = requestAnimationFrame(i)), e?.();
                },
                [l.assetIds, l.avatarDecorationSkuIds],
            ),
            y = a.useCallback((e) => {
                I(!1), C(!1), null != S.current && (cancelAnimationFrame(S.current), (S.current = null)), e?.();
            }, []);
        a.useEffect(
            () => () => {
                null != S.current && cancelAnimationFrame(S.current);
            },
            [],
        );
        let O = l.title();
        return (0, i.jsx)(h.STz, {
            "data-migration-pending": !0,
            text: (0, i.jsx)(B, {
                displayOptions: l,
                assetId: l.assetIds?.[d],
                avatarDecorationSkuId: l.avatarDecorationSkuIds?.[_],
                reducedMotion: o,
            }),
            tooltipClassName: w.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            "aria-label": "string" == typeof O ? O : j.intl.string(j.t.rSXaxY),
            children: (e) =>
                (0, i.jsxs)(k, {
                    className: null != l.entryPointClassName ? (0, N.t)(w, l.entryPointClassName) : void 0,
                    ...s,
                    icon: l.entryPointIcon,
                    ...e,
                    onMouseEnter: () => b(e.onMouseEnter),
                    onMouseLeave: () => y(e.onMouseLeave),
                    children: [
                        (0, i.jsx)("div", {
                            ref: T,
                            className: w.marketingButtonBackgroundNew,
                            style: { background: n },
                            children:
                                null != t &&
                                (0, i.jsx)("img", {
                                    src: t,
                                    className: r()(
                                        w.marketingButtonBackgroundImage,
                                        f && w.marketingButtonBackgroundImageFaded,
                                    ),
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                        }),
                        (0, i.jsx)(U, { badgeIcon: l.badgeIcon, badgeText: l.badgeText }),
                    ],
                }),
        });
    },
    Y = (e) => {
        let t,
            n,
            { displayOptions: l, ...s } = e,
            [o, d] = a.useState(!1),
            [c, u] = a.useState(!1),
            h = a.useRef(null),
            _ = a.useRef(null),
            m = (0, g.Ay)(),
            p = (0, A.Mw)(m);
        o
            ? ((t = p ? l.entryPointBackgroundAssets?.srcDarkHovered : l.entryPointBackgroundAssets?.srcLightHovered),
              (n = p ? l.entrypointBackgroundStyle?.hovered?.dark : l.entrypointBackgroundStyle?.hovered?.light))
            : ((t = p ? l.entryPointBackgroundAssets?.srcDark : l.entryPointBackgroundAssets?.srcLight),
              (n = p ? l.entrypointBackgroundStyle?.resting?.dark : l.entrypointBackgroundStyle?.resting?.light));
        let E = a.useCallback(() => {
                d(!0);
                let e = () => u(H(h));
                e(), (_.current = requestAnimationFrame(e));
            }, []),
            I = a.useCallback(() => {
                d(!1), u(!1), null != _.current && (cancelAnimationFrame(_.current), (_.current = null));
            }, []);
        return (
            a.useEffect(
                () => () => {
                    null != _.current && cancelAnimationFrame(_.current);
                },
                [],
            ),
            (0, i.jsx)(T.A, {
                title: l.title(),
                body: l.body?.() ?? "",
                asset: (0, i.jsx)("img", { src: l.asset, alt: "", "aria-hidden": !0 }),
                children: (0, i.jsxs)(k, {
                    className: null != l.entryPointClassName ? (0, N.t)(w, l.entryPointClassName) : void 0,
                    ...s,
                    icon: l.entryPointIcon,
                    onMouseEnter: E,
                    onMouseLeave: I,
                    children: [
                        (0, i.jsx)("div", {
                            ref: h,
                            className: w.marketingButtonBackgroundNew,
                            style: { background: n },
                            children:
                                null != t &&
                                (0, i.jsx)("img", {
                                    src: t,
                                    className: r()(
                                        w.marketingButtonBackgroundImage,
                                        c && w.marketingButtonBackgroundImageFaded,
                                    ),
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                        }),
                        (0, i.jsx)(U, { badgeIcon: l.badgeIcon, badgeText: l.badgeText }),
                    ],
                }),
            })
        );
    },
    W = (e) => {
        let { displayOptions: t, ...n } = e,
            l = a.useMemo(() => {
                let e = null != t.emojiName ? C.Ay.getByName(t.emojiName)?.surrogates : null;
                return (0, i.jsxs)(h.Text, {
                    variant: "text-sm/medium",
                    className: w.marketingBadgeTooltipContent,
                    children: [null != e && (0, i.jsx)(_.A, { emojiName: e }), t.title()],
                });
            }, [t]);
        return (0, i.jsx)(h.STz, {
            "data-migration-pending": !0,
            text: l,
            tooltipClassName: w.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) =>
                (0, i.jsx)(k, {
                    ...n,
                    ...e,
                    children: (0, i.jsx)(U, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                }),
        });
    },
    K = (e) => {
        let { displayOptions: t, dismissContent: n, ...l } = e,
            s = a.useRef(null),
            o = a.useRef(null),
            [d, c] = a.useState(!1),
            u = (0, g.Ay)(),
            h = (0, A.Mw)(u),
            _ = t.entryPointBackgroundAssets,
            m = t.entrypointBackgroundStyle,
            p = h ? _?.srcDarkHovered : _?.srcLightHovered,
            E = h ? m?.hovered?.dark : m?.hovered?.light;
        return (
            a.useEffect(() => {
                if (null == p || "" === p) return void c(!1);
                let e = () => {
                    c(H(o));
                };
                e();
                let t = requestAnimationFrame(e);
                return () => {
                    cancelAnimationFrame(t);
                };
            }, [p]),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(k, {
                        ...l,
                        onClick: () => n(M.i.TAKE_ACTION),
                        listItemRef: s,
                        children: [
                            (0, i.jsx)("div", {
                                ref: o,
                                className: w.marketingButtonBackgroundNew,
                                style: null != E ? { background: E } : void 0,
                                children:
                                    null != p &&
                                    (0, i.jsx)("img", {
                                        src: p,
                                        className: r()(
                                            w.marketingButtonBackgroundImage,
                                            d && w.marketingButtonBackgroundImageFaded,
                                        ),
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                            }),
                            (0, i.jsx)(U, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                        ],
                    }),
                    (0, i.jsx)(b.A, {
                        displayOptions: t,
                        targetElementRef: s,
                        onClick: () => n(M.i.TAKE_ACTION),
                        onRequestClose: () => n(M.i.USER_DISMISS),
                    }),
                ],
            })
        );
    },
    q = (e) => {
        let { dismissContent: t, ...n } = e,
            l = a.useRef(null);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(k, { ...n, onClick: () => t(M.i.TAKE_ACTION), listItemRef: l }),
                (0, i.jsx)(y.A, {
                    targetElementRef: l,
                    onClick: () => t(M.i.TAKE_ACTION),
                    onRequestClose: () => t(M.i.USER_DISMISS),
                }),
            ],
        });
    },
    z = (e) => {
        let { selected: t, onClick: n, locationState: a, listItemRef: l } = e,
            { shopButtonDisplayOptions: r, dismissShopButtonDC: s } = (0, O.A)(),
            o = !(0, h.ueM)(),
            [d, c] = (0, f.kn)(o ? [u.M.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            A = {
                selected: t,
                locationState: a,
                onClick: () => {
                    s(), n?.();
                },
                listItemRef: l,
            };
        if (null != r)
            switch (r.type) {
                case R.FF.TOOLTIP:
                    return (0, i.jsx)(W, { ...A, displayOptions: r });
                case R.FF.COACHTIP:
                    return (0, i.jsx)(F, { ...A, displayOptions: r });
                case R.FF.TAB_TOOLTIP:
                    return (0, i.jsx)(Y, { ...A, displayOptions: r });
                case R.FF.BADGE:
                    return (0, i.jsx)(V, { ...A });
                case R.FF.COACHMARK:
                    return (0, i.jsx)(K, { dismissContent: s, ...A, displayOptions: r });
            }
        return d === u.M.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, i.jsx)(q, { ...A, dismissContent: c })
            : (0, i.jsx)(k, { ...A });
    };
