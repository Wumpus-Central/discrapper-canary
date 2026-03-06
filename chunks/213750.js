n.d(t, { i: () => q });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
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
    f = n(580314),
    C = n(932001),
    T = n(7584),
    N = n(821589),
    S = n(979286),
    x = n(335657),
    v = n(252362),
    y = n(540063),
    b = n(870308),
    O = n(998694),
    L = n(158216),
    R = n(758836),
    P = n(652215),
    j = n(49999),
    D = n(985018),
    M = n(344694);
let w = (e) => {
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
    U = () => {
        let { noCache: e, includeUnpublished: t } = (0, O.A)();
        return (0, x.y)(R.G2.HOME, { noCache: e, includeUnpublished: t }, void 0, !0), null;
    },
    G = (e) => {
        let {
                selected: t,
                locationState: n,
                icon: l,
                onClick: a,
                collectibleShopTab: o,
                onMouseEnter: d,
                onMouseLeave: c,
                children: u,
                ...A
            } = e,
            _ = (0, s.rm)("shop"),
            g = E.A.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: p } = (0, I.Ay)(g),
            [f, C] = r.useState(!1),
            T = r.useCallback(() => {
                void 0 !== a && a(),
                    void 0 !== o && (0, S.Cz)({ tab: o, analyticsLocations: p, analyticsSource: g }),
                    C(!0),
                    (0, S.Sw)({ analyticsSource: g, analyticsLocations: p });
            }, [g, p, a, C, o]),
            N = P.BVt.COLLECTIBLES_SHOP;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                f && (0, i.jsx)(U, {}),
                (0, i.jsx)(m.z9, {
                    selected: t,
                    route: N,
                    icon: l ?? h.U1X,
                    text: D.intl.string(D.t.pWG4ze),
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
    k = (e) => (0, i.jsx)(G, { ...e, children: (0, i.jsx)(w, {}) }),
    V = r.memo(function (e) {
        let { displayOptions: t, assetId: n, avatarDecorationSkuId: r, reducedMotion: l = !1 } = e,
            a = null != n || null != r ? (0, f.A)({ legacyAssetId: n, skuId: r, canAnimate: !l }) : null,
            s = t.title(),
            o = t.body?.(),
            d = null == o || "" === o;
        return (0, i.jsxs)("div", {
            className: M.shopMarketingTooltipContent,
            children: [
                (0, i.jsx)("div", {
                    className: M.avatarContainer,
                    children: (0, i.jsx)(h.euF, {
                        className: M.avatar,
                        src: t.imageSrc,
                        avatarDecoration: a,
                        size: h._3J.SIZE_80,
                        "aria-hidden": !0,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: M.shopMarketingTooltipText,
                    children: [
                        (0, i.jsx)(h.Heading, { variant: d ? "heading-sm/medium" : "heading-sm/bold", children: s }),
                        !d &&
                            (0, i.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                className: M.marketingBadgeTooltipContent,
                                children: o,
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
            { displayOptions: l, ...s } = e,
            o = (0, c.bG)([p.A], () => p.A.useReducedMotion),
            [d, u] = r.useState(0),
            [_, m] = r.useState(0),
            [E, I] = r.useState(!1),
            [f, C] = r.useState(!1),
            T = r.useRef(null),
            S = r.useRef(null),
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
        let y = r.useCallback(
                (e) => {
                    let t = l.assetIds;
                    null != t && t.length > 0 && u((e) => (e + 1) % t.length);
                    let n = l.avatarDecorationSkuIds;
                    null != n && n.length > 0 && m((e) => (e + 1) % n.length), I(!0);
                    let i = () => {
                        C(B(T));
                    };
                    i(), (S.current = requestAnimationFrame(i)), e?.();
                },
                [l.assetIds, l.avatarDecorationSkuIds],
            ),
            b = r.useCallback((e) => {
                I(!1), C(!1), null != S.current && (cancelAnimationFrame(S.current), (S.current = null)), e?.();
            }, []);
        r.useEffect(
            () => () => {
                null != S.current && cancelAnimationFrame(S.current);
            },
            [],
        );
        let O = l.title();
        return (0, i.jsx)(h.STz, {
            "data-migration-pending": !0,
            text: (0, i.jsx)(V, {
                displayOptions: l,
                assetId: l.assetIds?.[d],
                avatarDecorationSkuId: l.avatarDecorationSkuIds?.[_],
                reducedMotion: o,
            }),
            tooltipClassName: M.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            "aria-label": "string" == typeof O ? O : D.intl.string(D.t.rSXaxY),
            children: (e) =>
                (0, i.jsxs)(G, {
                    className: null != l.entryPointClassName ? (0, N.t)(M, l.entryPointClassName) : void 0,
                    ...s,
                    icon: l.entryPointIcon,
                    ...e,
                    onMouseEnter: () => y(e.onMouseEnter),
                    onMouseLeave: () => b(e.onMouseLeave),
                    children: [
                        (0, i.jsx)("div", {
                            ref: T,
                            className: M.marketingButtonBackgroundNew,
                            style: { background: n },
                            children:
                                null != t &&
                                (0, i.jsx)("img", {
                                    src: t,
                                    className: a()(
                                        M.marketingButtonBackgroundImage,
                                        f && M.marketingButtonBackgroundImageFaded,
                                    ),
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                        }),
                        (0, i.jsx)(w, { badgeIcon: l.badgeIcon, badgeText: l.badgeText }),
                    ],
                }),
        });
    },
    F = (e) => {
        let { displayOptions: t, ...n } = e,
            l = r.useMemo(() => {
                let e = null != t.emojiName ? T.Ay.getByName(t.emojiName)?.surrogates : null;
                return (0, i.jsxs)(h.Text, {
                    variant: "text-sm/medium",
                    className: M.marketingBadgeTooltipContent,
                    children: [null != e && (0, i.jsx)(_.A, { emojiName: e }), t.title()],
                });
            }, [t]);
        return (0, i.jsx)(h.STz, {
            "data-migration-pending": !0,
            text: l,
            tooltipClassName: M.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) =>
                (0, i.jsx)(G, {
                    ...n,
                    ...e,
                    children: (0, i.jsx)(w, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
                }),
        });
    },
    Y = (e) => {
        let { displayOptions: t, dismissContent: n, ...l } = e,
            s = r.useRef(null),
            o = r.useRef(null),
            [d, c] = r.useState(!1),
            u = (0, g.Ay)(),
            h = (0, A.Mw)(u),
            _ = t.entryPointBackgroundAssets,
            m = t.entrypointBackgroundStyle,
            p = h ? _?.srcDarkHovered : _?.srcLightHovered,
            E = h ? m?.hovered?.dark : m?.hovered?.light;
        return (
            r.useEffect(() => {
                if (null == p || "" === p) return void c(!1);
                let e = () => {
                    c(B(o));
                };
                e();
                let t = requestAnimationFrame(e);
                return () => {
                    cancelAnimationFrame(t);
                };
            }, [p]),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(G, {
                        ...l,
                        onClick: () => n(j.i.TAKE_ACTION),
                        listItemRef: s,
                        children: [
                            (0, i.jsx)("div", {
                                ref: o,
                                className: M.marketingButtonBackgroundNew,
                                style: null != E ? { background: E } : void 0,
                                children:
                                    null != p &&
                                    (0, i.jsx)("img", {
                                        src: p,
                                        className: a()(
                                            M.marketingButtonBackgroundImage,
                                            d && M.marketingButtonBackgroundImageFaded,
                                        ),
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                            }),
                            (0, i.jsx)(w, { badgeIcon: t.badgeIcon, badgeText: t.badgeText }),
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
            l = r.useRef(null);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(G, { ...n, onClick: () => t(j.i.TAKE_ACTION), listItemRef: l }),
                (0, i.jsx)(y.A, {
                    targetElementRef: l,
                    onClick: () => t(j.i.TAKE_ACTION),
                    onRequestClose: () => t(j.i.USER_DISMISS),
                }),
            ],
        });
    },
    q = (e) => {
        let { selected: t, onClick: n, locationState: r, listItemRef: l } = e,
            { shopButtonDisplayOptions: a, dismissShopButtonDC: s } = (0, b.A)(),
            o = !(0, h.ueM)(),
            [d, c] = (0, C.kn)(o ? [u.M.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            A = {
                selected: t,
                locationState: r,
                onClick: () => {
                    s(), n?.();
                },
                listItemRef: l,
            };
        if (null != a)
            switch (a.type) {
                case L.FF.TOOLTIP:
                    return (0, i.jsx)(F, { ...A, displayOptions: a });
                case L.FF.COACHTIP:
                    return (0, i.jsx)(H, { ...A, displayOptions: a });
                case L.FF.BADGE:
                    return (0, i.jsx)(k, { ...A });
                case L.FF.COACHMARK:
                    return (0, i.jsx)(Y, { dismissContent: s, ...A, displayOptions: a });
            }
        return d === u.M.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, i.jsx)(W, { ...A, dismissContent: c })
            : (0, i.jsx)(G, { ...A });
    };
