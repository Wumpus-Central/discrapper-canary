n.d(t, { Z: () => y });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(685816),
    s = n(481060),
    c = n(381585),
    u = n(139668),
    d = n(364111),
    b = n(303952),
    p = n(752053),
    f = n(81136),
    g = n(953655),
    h = n(548685),
    m = n(580914),
    _ = n(963278),
    C = n(384067),
    v = n(215023),
    x = n(388032),
    O = n(806734);
let j = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: a, isFetchingCategories: s, tab: u, isFullScreen: v } = e,
            { noCache: x, includeUnpublished: j } = (0, f.Z)(),
            y = (0, c.sp)(),
            k = null != (t = null == y ? void 0 : y.sessionId) ? t : '';
        l.useEffect(() => {
            (0, b.n)({
                sessionId: k,
                checkpoint: b.a.SHOP_MOUNTED,
                tab: u,
                isFullScreen: v,
                unpublishedCategoriesShown: j,
                cacheDisabled: x
            });
        }, [u]);
        let {
                isFetchingShopHome: S,
                fetchShopHomeError: P,
                shopBlocks: E,
                refreshShopHome: w
            } = (0, d.E)(
                u,
                {
                    noCache: x,
                    includeUnpublished: j,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: k,
                    tab: u,
                    isFullScreen: v
                }
            ),
            B = l.useCallback(() => {
                w();
            }, [w]);
        if (
            (l.useEffect(() => {
                null != P ||
                    S ||
                    0 === E.length ||
                    (0, b.n)({
                        sessionId: k,
                        checkpoint: b.a.SHOP_RENDERED,
                        tab: u,
                        isFullScreen: v,
                        unpublishedCategoriesShown: j,
                        cacheDisabled: x
                    });
            }, [P, S, E.length, j, x, k, u, v]),
            null != P)
        )
            return (0, r.jsx)(p.Z, {
                onRetry: B,
                errorOrigin: p.i.SHOP_PAGE,
                errorMessage: P.message
            });
        if (S || 0 === E.length)
            return (0, r.jsxs)('div', {
                className: O.loadingContainer,
                children: [
                    (0, r.jsx)(m.Z, {
                        isLoading: S,
                        handleTransition: n,
                        tab: u
                    }),
                    (0, r.jsx)(g.Z, {
                        isLoading: S,
                        handleTransition: n,
                        categories: []
                    }),
                    (0, r.jsx)(h.Z, {
                        isLoading: S,
                        handleTransition: n,
                        numVisibleItems: a,
                        rankedSkuIds: [],
                        tab: u
                    })
                ]
            });
        let I = (e, t) => {
            if (null == e) return null;
            let l = null;
            switch (e.type) {
                case o.z.HERO:
                    l = (0, r.jsx)(
                        m.Z,
                        {
                            isLoading: S,
                            handleTransition: n,
                            heroBlock: e,
                            tab: u
                        },
                        t
                    );
                    break;
                case o.z.FEATURED:
                    l = (0, r.jsx)(
                        g.Z,
                        {
                            isLoading: S,
                            handleTransition: n,
                            featuredBlockRecord: e
                        },
                        t
                    );
                    break;
                case o.z.FEED:
                    l = (0, r.jsx)(
                        h.Z,
                        {
                            isLoading: S || s,
                            handleTransition: n,
                            numVisibleItems: a,
                            rankedSkuIds: e.rankedSkuIds,
                            tab: u
                        },
                        t
                    );
                    break;
                case o.z.WIDE_BANNER:
                    l = (0, r.jsx)(
                        C.Z,
                        {
                            handleTransition: n,
                            wideBannerBlock: e,
                            tab: u
                        },
                        t
                    );
                    break;
                case o.z.SHELF:
                    l = (0, r.jsx)(
                        _.Z,
                        {
                            handleTransition: n,
                            shelf: e,
                            tab: u
                        },
                        t
                    );
                    break;
                default:
                    return null;
            }
            return (0, r.jsx)(
                'div',
                {
                    className: i()(O.blockContainer, { [O.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: E.map((e, t) => I(e, t)) });
    },
    y = (e) => {
        let { isFullScreen: t, handleTransition: n, numVisibleItems: l, tab: a, isFetchingCategories: o } = e,
            c = (0, u.R)('CollectiblesFeedShop');
        return (0, r.jsx)('div', {
            className: i()(O.shop, { [O.shopFullscreen]: t }),
            children: (0, r.jsxs)('div', {
                className: i()(O.content, O.mainContent),
                children: [
                    (0, r.jsx)(j, {
                        handleTransition: n,
                        numVisibleItems: l,
                        isFetchingCategories: o,
                        tab: a,
                        isFullScreen: t
                    }),
                    a !== v.AW.CATALOG &&
                        l >= c &&
                        (0, r.jsxs)('div', {
                            className: O.endOfFeed,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    children: x.intl.string(x.t.Yr70c3)
                                }),
                                (0, r.jsx)(s.zxk, {
                                    className: O.endOfFeedButton,
                                    onClick: () => {
                                        n('shop all bottom', void 0, !0);
                                    },
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'always-white',
                                        children: x.intl.string(x.t.AfrvRE)
                                    })
                                })
                            ]
                        })
                ]
            })
        });
    };
