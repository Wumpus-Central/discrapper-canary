n.d(t, { Z: () => y });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(685816),
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
            S = null != (t = null == y ? void 0 : y.sessionId) ? t : '';
        l.useEffect(() => {
            (0, b.n)({
                sessionId: S,
                checkpoint: b.a.SHOP_MOUNTED,
                tab: u,
                isFullScreen: v,
                unpublishedCategoriesShown: j,
                cacheDisabled: x
            });
        }, []);
        let {
                isFetchingShopHome: k,
                fetchShopHomeError: E,
                shopBlocks: P,
                refreshShopHome: w
            } = (0, d.E)(u, {
                noCache: x,
                includeUnpublished: j,
                includeBundles: !0
            }),
            B = l.useCallback(() => {
                w();
            }, [w]);
        if (
            (l.useEffect(() => {
                null != E ||
                    k ||
                    0 === P.length ||
                    (0, b.n)({
                        sessionId: S,
                        checkpoint: b.a.SHOP_RENDERED,
                        tab: u,
                        isFullScreen: v,
                        unpublishedCategoriesShown: j,
                        cacheDisabled: x
                    });
            }, [E, k, P.length, j, x, S, u, v]),
            null != E)
        )
            return (0, r.jsx)(p.Z, {
                onRetry: B,
                errorOrigin: p.i.SHOP_PAGE,
                errorMessage: E.message
            });
        if (k || 0 === P.length)
            return (0, r.jsxs)('div', {
                className: O.loadingContainer,
                children: [
                    (0, r.jsx)(m.Z, {
                        isLoading: k,
                        handleTransition: n,
                        tab: u
                    }),
                    (0, r.jsx)(g.Z, {
                        isLoading: k,
                        handleTransition: n,
                        categories: []
                    }),
                    (0, r.jsx)(h.Z, {
                        isLoading: k,
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
                case i.z.HERO:
                    l = (0, r.jsx)(
                        m.Z,
                        {
                            isLoading: k,
                            handleTransition: n,
                            heroBlock: e,
                            tab: u
                        },
                        t
                    );
                    break;
                case i.z.FEATURED:
                    l = (0, r.jsx)(
                        g.Z,
                        {
                            isLoading: k,
                            handleTransition: n,
                            featuredBlockRecord: e
                        },
                        t
                    );
                    break;
                case i.z.FEED:
                    l = (0, r.jsx)(
                        h.Z,
                        {
                            isLoading: k || s,
                            handleTransition: n,
                            numVisibleItems: a,
                            rankedSkuIds: e.rankedSkuIds,
                            tab: u
                        },
                        t
                    );
                    break;
                case i.z.WIDE_BANNER:
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
                case i.z.SHELF:
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
                    className: o()(O.blockContainer, { [O.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: P.map((e, t) => I(e, t)) });
    },
    y = (e) => {
        let { isFullScreen: t, handleTransition: n, numVisibleItems: l, tab: a, isFetchingCategories: i } = e,
            c = (0, u.R)('CollectiblesFeedShop');
        return (0, r.jsx)('div', {
            className: o()(O.shop, { [O.shopFullscreen]: t }),
            children: (0, r.jsxs)('div', {
                className: o()(O.content, O.mainContent),
                children: [
                    (0, r.jsx)(j, {
                        handleTransition: n,
                        numVisibleItems: l,
                        isFetchingCategories: i,
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
                                    children: x.NW.string(x.t.Yr70c3)
                                }),
                                (0, r.jsx)(s.zxk, {
                                    className: O.endOfFeedButton,
                                    onClick: () => {
                                        n('shop all bottom', void 0, !0);
                                    },
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'always-white',
                                        children: x.NW.string(x.t.AfrvRE)
                                    })
                                })
                            ]
                        })
                ]
            })
        });
    };
