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
    g = r(364111),
    f = r(303952),
    h = r(752053),
    b = r(899766),
    _ = r(258939),
    m = r(81136),
    v = r(953655),
    O = r(548685),
    C = r(580914),
    E = r(963278),
    S = r(921120),
    y = r(384067),
    x = r(215023),
    j = r(981631),
    P = r(388032),
    T = r(806734);
let L = (e) => {
        var t;
        let { handleTransition: r, numVisibleItems: a, isFetchingCategories: s, tab: c, isFullScreen: u } = e,
            { noCache: p, includeUnpublished: _ } = (0, m.Z)(),
            [S, j] = l.useState(!1),
            L = (0, d.sp)(),
            I = null != (t = null == L ? void 0 : L.sessionId) ? t : "";
        l.useEffect(() => {
            (0, f.n)({
                sessionId: I,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: u,
                unpublishedCategoriesShown: _,
                cacheDisabled: p,
            });
        }, [c]);
        let {
                isFetchingShopHome: k,
                fetchShopHomeError: N,
                shopBlocks: A,
                refreshShopHome: w,
            } = (0, g.E)(
                c,
                {
                    noCache: p,
                    includeUnpublished: _,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: I,
                    tab: c,
                    isFullScreen: u,
                },
            ),
            B = l.useCallback(() => {
                w();
            }, [w]);
        if (
            (l.useEffect(() => {
                null != N ||
                    k ||
                    0 === A.length ||
                    (0, f.n)({
                        sessionId: I,
                        checkpoint: f.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: u,
                        unpublishedCategoriesShown: _,
                        cacheDisabled: p,
                    });
            }, [N, k, A.length, _, p, I, c, u]),
            null != N)
        )
            return (0, n.jsx)(h.Z, {
                onRetry: B,
                errorOrigin: h.i.SHOP_PAGE,
                errorMessage: N.message,
            });
        if (k || 0 === A.length)
            return (0, n.jsxs)("div", {
                className: T.loadingContainer,
                children: [
                    (0, n.jsx)(C.Z, {
                        isLoading: k,
                        handleTransition: r,
                        tab: c,
                    }),
                    (0, n.jsx)(v.Z, {
                        isLoading: k,
                        handleTransition: r,
                        categories: [],
                    }),
                    (0, n.jsx)(O.Z, {
                        isLoading: k,
                        title: c === x.AW.ORBS ? P.intl.string(P.t.dFgeub) : P.intl.string(P.t.NSv5KS),
                        numVisibleItems: a,
                        hasSorting: c === x.AW.HOME,
                        tab: c,
                    }),
                ],
            });
        let R = (e, t) => {
            if (null == e) return null;
            let l = null;
            switch (e.type) {
                case o.z.HERO:
                    l = (0, n.jsx)(
                        C.Z,
                        {
                            isLoading: k,
                            handleTransition: r,
                            heroBlock: e,
                            tab: c,
                            onVisibilityChange: j,
                        },
                        t,
                    );
                    break;
                case o.z.FEATURED:
                    l = (0, n.jsx)(
                        v.Z,
                        {
                            isLoading: k,
                            handleTransition: r,
                            featuredBlockRecord: e,
                        },
                        t,
                    );
                    break;
                case o.z.FEED:
                    let d = e.sortedSkuIds;
                    l = (0, n.jsx)(
                        O.Z,
                        {
                            title: c === x.AW.ORBS ? P.intl.string(P.t.dFgeub) : P.intl.string(P.t.NSv5KS),
                            isLoading: k || s,
                            numVisibleItems: a,
                            sortedSkuIds: d,
                            hasSorting: c === x.AW.HOME,
                            tab: c,
                        },
                        t,
                    );
                    break;
                case o.z.WIDE_BANNER:
                    l = (0, n.jsx)(
                        y.Z,
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
                        E.Z,
                        {
                            handleTransition: r,
                            shelf: e,
                            tab: c,
                        },
                        t,
                    );
                    break;
                case o.z.COUNTDOWN_TIMER:
                    l = (0, n.jsx)(b.J, {
                        record: e,
                        isVisible: !S,
                        isFullScreen: u,
                    });
                    break;
                default:
                    return null;
            }
            return (0, n.jsx)(
                "div",
                {
                    className: i()(T.blockContainer, { [T.topBlockContainer]: 0 === t }),
                    children: l,
                },
                t,
            );
        };
        return (0, n.jsx)(n.Fragment, { children: A.map((e, t) => R(e, t)) });
    },
    I = (e) => {
        let { isFullScreen: t, handleTransition: r, tab: a, transitionState: o } = e,
            g = l.useRef(null),
            { handleScroll: f } = (0, c.z)(g, a),
            h = (0, p.R)("CollectiblesFeedShop"),
            b = (0, _.R)(),
            m = (0, d.sp)(),
            [v, O] = l.useState(x.IV),
            [C, E] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != g.current) {
                    let e = () => {
                            if (null == g.current) return;
                            let e = g.current.getDistanceFromBottom();
                            v >= h ? E(e < 20) : e <= 200 && O((e) => e + x.IV);
                        },
                        t = g.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [g, v, h, O, E]),
            (0, n.jsx)(s.Den, {
                className: T.shopScroll,
                ref: g,
                onScroll: f,
                children: (0, n.jsxs)("div", {
                    className: T.shop,
                    children: [
                        (0, n.jsxs)("div", {
                            className: i()(T.content, T.mainContent),
                            children: [
                                (0, n.jsx)(L, {
                                    handleTransition: r,
                                    numVisibleItems: v,
                                    isFetchingCategories: b,
                                    tab: a,
                                    isFullScreen: t,
                                }),
                                a !== x.AW.CATALOG &&
                                    v >= h &&
                                    (0, n.jsxs)("div", {
                                        className: T.endOfFeed,
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
                                                        u.default.track(j.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == m ? void 0 : m.sessionId,
                                                            page_type: a,
                                                            page_category:
                                                                a === x.AW.HOME || null == m ? void 0 : m.pageCategory,
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
                                    (0, n.jsx)(S.Z, {
                                        peaking: C,
                                        transitioning: o === x.f7.OUT,
                                    }),
                                    (0, n.jsx)(S.Z, {
                                        style: { left: 1850 },
                                        peaking: C,
                                        transitioning: o === x.f7.OUT,
                                    }),
                                ],
                            }),
                    ],
                }),
            })
        );
    };
