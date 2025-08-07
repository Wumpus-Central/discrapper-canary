r.d(t, { Z: () => I }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(685816),
    s = r(481060),
    c = r(702486),
    u = r(626135),
    d = r(381585),
    p = r(139668),
    f = r(364111),
    g = r(303952),
    b = r(752053),
    h = r(258939),
    m = r(81136),
    _ = r(302933),
    v = r(953655),
    C = r(548685),
    O = r(580914),
    E = r(92589),
    S = r(963278),
    y = r(921120),
    x = r(384067),
    j = r(215023),
    T = r(981631),
    P = r(388032),
    L = r(806734);
let k = (e) => {
        var t;
        let { handleTransition: r, numVisibleItems: a, isFetchingCategories: s, tab: c, isFullScreen: u } = e,
            { noCache: p, includeUnpublished: h } = (0, m.Z)(),
            [y, T] = l.useState(!1),
            k = (0, d.sp)(),
            I = null != (t = null == k ? void 0 : k.sessionId) ? t : "";
        l.useEffect(() => {
            (0, g.n)({
                sessionId: I,
                checkpoint: g.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: u,
                unpublishedCategoriesShown: h,
                cacheDisabled: p,
            });
        }, [c]);
        let {
                isFetchingShopHome: N,
                fetchShopHomeError: A,
                shopBlocks: w,
                refreshShopHome: B,
            } = (0, f.E)(
                c,
                {
                    noCache: p,
                    includeUnpublished: h,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: I,
                    tab: c,
                    isFullScreen: u,
                },
            ),
            R = l.useCallback(() => {
                B();
            }, [B]);
        if (
            (l.useEffect(() => {
                null != A ||
                    N ||
                    0 === w.length ||
                    (0, g.n)({
                        sessionId: I,
                        checkpoint: g.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: u,
                        unpublishedCategoriesShown: h,
                        cacheDisabled: p,
                    });
            }, [A, N, w.length, h, p, I, c, u]),
            null != A)
        )
            return (0, n.jsx)(b.Z, {
                onRetry: R,
                errorOrigin: b.i.SHOP_PAGE,
                errorMessage: A.message,
            });
        if (N || 0 === w.length)
            return (0, n.jsxs)("div", {
                className: i()(L.loadingContainer, L.feedContent),
                children: [
                    (0, n.jsx)(O.Z, {
                        isLoading: N,
                        handleTransition: r,
                        tab: c,
                    }),
                    (0, n.jsx)(v.Z, {
                        isLoading: N,
                        handleTransition: r,
                        categories: [],
                    }),
                    (0, n.jsx)(C.Z, {
                        isLoading: N,
                        title: c === j.AW.ORBS ? P.intl.string(P.t.dFgeub) : P.intl.string(P.t.NSv5KS),
                        numVisibleItems: a,
                        hasSorting: c === j.AW.HOME,
                        tab: c,
                    }),
                ],
            });
        let Z = (e, t) => {
            if (null == e) return null;
            let l = null,
                d = !1;
            switch (e.type) {
                case o.z.HERO:
                    l = (0, n.jsx)(
                        O.Z,
                        {
                            isLoading: N,
                            handleTransition: r,
                            heroBlock: e,
                            tab: c,
                        },
                        t,
                    );
                    break;
                case o.z.FEATURED:
                    l = (0, n.jsx)(
                        v.Z,
                        {
                            isLoading: N,
                            handleTransition: r,
                            featuredBlockRecord: e,
                        },
                        t,
                    );
                    break;
                case o.z.FEED:
                    let p = e.sortedSkuIds;
                    l = (0, n.jsx)(
                        C.Z,
                        {
                            title: c === j.AW.ORBS ? P.intl.string(P.t.dFgeub) : P.intl.string(P.t.NSv5KS),
                            isLoading: N || s,
                            numVisibleItems: a,
                            sortedSkuIds: p,
                            hasSorting: c === j.AW.HOME,
                            tab: c,
                        },
                        t,
                    );
                    break;
                case o.z.WIDE_BANNER:
                    l = (0, n.jsx)(
                        x.Z,
                        {
                            handleTransition: r,
                            wideBannerBlock: e,
                            tab: c,
                        },
                        t,
                    );
                    break;
                case o.z.SHELF:
                    l = (0, n.jsx)(
                        S.Z,
                        {
                            handleTransition: r,
                            shelf: e,
                            tab: c,
                        },
                        t,
                    );
                    break;
                case o.z.COUNTDOWN_TIMER:
                    (l = (0, n.jsx)(
                        _.J,
                        {
                            countdownTimerBlock: e,
                            isVisible: y,
                            isFullScreen: u,
                        },
                        t,
                    )),
                        (d = !0);
                    break;
                case o.z.IMMERSIVE_BANNER:
                    l = (0, n.jsx)(
                        E.Z,
                        {
                            immersiveBannerBlock: e,
                            onVisibilityChange: (e) => T(!e),
                            handleTransition: r,
                        },
                        t,
                    );
                    break;
                default:
                    return null;
            }
            return (0, n.jsx)(
                "div",
                {
                    className: i()(L.blockContainer, L.feedContent, { [L.skipPadding]: 0 === t || d }),
                    children: l,
                },
                t,
            );
        };
        return (0, n.jsx)(n.Fragment, { children: w.map((e, t) => Z(e, t)) });
    },
    I = (e) => {
        let { isFullScreen: t, handleTransition: r, tab: a, transitionState: i } = e,
            o = l.useRef(null),
            { handleScroll: f } = (0, c.z)(o, a),
            g = (0, p.R)("CollectiblesFeedShop"),
            b = (0, h.R)(),
            m = (0, d.sp)(),
            [_, v] = l.useState(j.IV),
            [C, O] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != o.current) {
                    let e = () => {
                            if (null == o.current) return;
                            let e = o.current.getDistanceFromBottom();
                            _ >= g ? O(e < 20) : e <= 200 && v((e) => e + j.IV);
                        },
                        t = o.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [o, _, g, v, O]),
            (0, n.jsx)(s.Den, {
                className: L.shopScroll,
                ref: o,
                onScroll: f,
                children: (0, n.jsxs)("div", {
                    className: L.shop,
                    children: [
                        (0, n.jsxs)("div", {
                            className: L.mainContent,
                            children: [
                                (0, n.jsx)(k, {
                                    handleTransition: r,
                                    numVisibleItems: _,
                                    isFetchingCategories: b,
                                    tab: a,
                                    isFullScreen: t,
                                }),
                                a !== j.AW.CATALOG &&
                                    _ >= g &&
                                    (0, n.jsxs)("div", {
                                        className: L.endOfFeed,
                                        children: [
                                            (0, n.jsx)(s.X6q, {
                                                variant: "heading-md/semibold",
                                                children: P.intl.string(P.t.Yr70c3),
                                            }),
                                            (0, n.jsx)(s.zxk, {
                                                variant: "primary",
                                                text: P.intl.string(P.t.AfrvRE),
                                                onClick: () => {
                                                    r("shop all button", void 0, !0),
                                                        u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == m ? void 0 : m.sessionId,
                                                            page_type: a,
                                                            page_category:
                                                                a === j.AW.HOME || null == m ? void 0 : m.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        !t &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(y.Z, {
                                        peaking: C,
                                        transitioning: i === j.f7.OUT,
                                    }),
                                    (0, n.jsx)(y.Z, {
                                        style: { left: 1850 },
                                        peaking: C,
                                        transitioning: i === j.f7.OUT,
                                    }),
                                ],
                            }),
                    ],
                }),
            })
        );
    };
