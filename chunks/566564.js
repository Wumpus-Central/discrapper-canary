n.d(t, { Z: () => k }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(685816),
    s = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    p = n(139668),
    g = n(364111),
    f = n(303952),
    b = n(752053),
    h = n(258939),
    m = n(81136),
    _ = n(302933),
    v = n(953655),
    C = n(548685),
    O = n(580914),
    E = n(92589),
    S = n(963278),
    y = n(921120),
    x = n(384067),
    j = n(215023),
    T = n(981631),
    P = n(388032),
    L = n(806734);
let I = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: a, isFetchingCategories: s, tab: c, isFullScreen: u } = e,
            { noCache: p, includeUnpublished: h } = (0, m.Z)(),
            [y, T] = l.useState(!1),
            I = (0, d.sp)(),
            k = null != (t = null == I ? void 0 : I.sessionId) ? t : "";
        l.useEffect(() => {
            (0, f.n)({
                sessionId: k,
                checkpoint: f.a.SHOP_MOUNTED,
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
            } = (0, g.E)(
                c,
                {
                    noCache: p,
                    includeUnpublished: h,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: k,
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
                    (0, f.n)({
                        sessionId: k,
                        checkpoint: f.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: u,
                        unpublishedCategoriesShown: h,
                        cacheDisabled: p,
                    });
            }, [A, N, w.length, h, p, k, c, u]),
            null != A)
        )
            return (0, r.jsx)(b.Z, {
                onRetry: R,
                errorOrigin: b.i.SHOP_PAGE,
                errorMessage: A.message,
            });
        if (N || 0 === w.length)
            return (0, r.jsxs)("div", {
                className: i()(L.loadingContainer, L.feedContent),
                children: [
                    (0, r.jsx)(O.Z, {
                        isLoading: N,
                        handleTransition: n,
                        tab: c,
                    }),
                    (0, r.jsx)(v.Z, {
                        isLoading: N,
                        handleTransition: n,
                        categories: [],
                    }),
                    (0, r.jsx)(C.Z, {
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
                    l = (0, r.jsx)(
                        O.Z,
                        {
                            isLoading: N,
                            handleTransition: n,
                            heroBlock: e,
                            tab: c,
                        },
                        t,
                    );
                    break;
                case o.z.FEATURED:
                    l = (0, r.jsx)(
                        v.Z,
                        {
                            isLoading: N,
                            handleTransition: n,
                            featuredBlockRecord: e,
                        },
                        t,
                    );
                    break;
                case o.z.FEED:
                    let p = e.sortedSkuIds;
                    l = (0, r.jsx)(
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
                    l = (0, r.jsx)(
                        x.Z,
                        {
                            handleTransition: n,
                            wideBannerBlock: e,
                            tab: c,
                        },
                        t,
                    );
                    break;
                case o.z.SHELF:
                    l = (0, r.jsx)(
                        S.Z,
                        {
                            handleTransition: n,
                            shelf: e,
                            tab: c,
                        },
                        t,
                    );
                    break;
                case o.z.COUNTDOWN_TIMER:
                    (l = (0, r.jsx)(
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
                    l = (0, r.jsx)(
                        E.Z,
                        {
                            immersiveBannerBlock: e,
                            onVisibilityChange: (e) => T(!e),
                        },
                        t,
                    );
                    break;
                default:
                    return null;
            }
            return (0, r.jsx)(
                "div",
                {
                    className: i()(L.blockContainer, L.feedContent, { [L.skipPadding]: 0 === t || d }),
                    children: l,
                },
                t,
            );
        };
        return (0, r.jsx)(r.Fragment, { children: w.map((e, t) => Z(e, t)) });
    },
    k = (e) => {
        let { isFullScreen: t, handleTransition: n, tab: a, transitionState: i } = e,
            o = l.useRef(null),
            { handleScroll: g } = (0, c.z)(o, a),
            f = (0, p.R)("CollectiblesFeedShop"),
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
                            _ >= f ? O(e < 20) : e <= 200 && v((e) => e + j.IV);
                        },
                        t = o.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [o, _, f, v, O]),
            (0, r.jsx)(s.Den, {
                className: L.shopScroll,
                ref: o,
                onScroll: g,
                children: (0, r.jsxs)("div", {
                    className: L.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: L.mainContent,
                            children: [
                                (0, r.jsx)(I, {
                                    handleTransition: n,
                                    numVisibleItems: _,
                                    isFetchingCategories: b,
                                    tab: a,
                                    isFullScreen: t,
                                }),
                                a !== j.AW.CATALOG &&
                                    _ >= f &&
                                    (0, r.jsxs)("div", {
                                        className: L.endOfFeed,
                                        children: [
                                            (0, r.jsx)(s.X6q, {
                                                variant: "heading-md/semibold",
                                                children: P.intl.string(P.t.Yr70c3),
                                            }),
                                            (0, r.jsx)(s.zxk, {
                                                variant: "primary",
                                                text: P.intl.string(P.t.AfrvRE),
                                                onClick: () => {
                                                    n("shop all button", void 0, !0),
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
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(y.Z, {
                                        peaking: C,
                                        transitioning: i === j.f7.OUT,
                                    }),
                                    (0, r.jsx)(y.Z, {
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
