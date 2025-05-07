n.d(t, { Z: () => j });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(685816),
    s = n(481060),
    c = n(381585),
    u = n(139668),
    d = n(364111),
    f = n(303952),
    b = n(752053),
    p = n(81136),
    g = n(953655),
    h = n(548685),
    m = n(580914),
    _ = n(963278),
    C = n(384067),
    v = n(215023),
    O = n(388032),
    x = n(806734);
let S = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: i, isFetchingCategories: s, tab: u, isFullScreen: v } = e,
            { noCache: O, includeUnpublished: S } = (0, p.Z)(),
            j = (0, c.sp)(),
            y = null != (t = null == j ? void 0 : j.sessionId) ? t : '';
        l.useEffect(() => {
            (0, f.n)({
                sessionId: y,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: u,
                isFullScreen: v,
                unpublishedCategoriesShown: S,
                cacheDisabled: O
            });
        }, [u]);
        let {
                isFetchingShopHome: E,
                fetchShopHomeError: P,
                shopBlocks: k,
                refreshShopHome: T
            } = (0, d.E)(
                u,
                {
                    noCache: O,
                    includeUnpublished: S,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: y,
                    tab: u,
                    isFullScreen: v
                }
            ),
            w = l.useCallback(() => {
                T();
            }, [T]);
        if (
            (l.useEffect(() => {
                null != P ||
                    E ||
                    0 === k.length ||
                    (0, f.n)({
                        sessionId: y,
                        checkpoint: f.a.SHOP_RENDERED,
                        tab: u,
                        isFullScreen: v,
                        unpublishedCategoriesShown: S,
                        cacheDisabled: O
                    });
            }, [P, E, k.length, S, O, y, u, v]),
            null != P)
        )
            return (0, r.jsx)(b.Z, {
                onRetry: w,
                errorOrigin: b.i.SHOP_PAGE,
                errorMessage: P.message
            });
        if (E || 0 === k.length)
            return (0, r.jsxs)('div', {
                className: x.loadingContainer,
                children: [
                    (0, r.jsx)(m.Z, {
                        isLoading: E,
                        handleTransition: n,
                        tab: u
                    }),
                    (0, r.jsx)(g.Z, {
                        isLoading: E,
                        handleTransition: n,
                        categories: []
                    }),
                    (0, r.jsx)(h.Z, {
                        isLoading: E,
                        handleTransition: n,
                        numVisibleItems: i,
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
                            isLoading: E,
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
                            isLoading: E,
                            handleTransition: n,
                            featuredBlockRecord: e
                        },
                        t
                    );
                    break;
                case o.z.FEED:
                    let c = e.sortedSkuIds;
                    l = (0, r.jsx)(
                        h.Z,
                        {
                            isLoading: E || s,
                            handleTransition: n,
                            numVisibleItems: i,
                            sortedSkuIds: c,
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
                    className: a()(x.blockContainer, { [x.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: k.map((e, t) => I(e, t)) });
    },
    j = (e) => {
        let { isFullScreen: t, handleTransition: n, numVisibleItems: l, tab: i, isFetchingCategories: o } = e,
            c = (0, u.R)('CollectiblesFeedShop');
        return (0, r.jsx)('div', {
            className: a()(x.shop, { [x.shopFullscreen]: t }),
            children: (0, r.jsxs)('div', {
                className: a()(x.content, x.mainContent),
                children: [
                    (0, r.jsx)(S, {
                        handleTransition: n,
                        numVisibleItems: l,
                        isFetchingCategories: o,
                        tab: i,
                        isFullScreen: t
                    }),
                    i !== v.AW.CATALOG &&
                        l >= c &&
                        (0, r.jsxs)('div', {
                            className: x.endOfFeed,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    children: O.intl.string(O.t.Yr70c3)
                                }),
                                (0, r.jsx)(s.zxk, {
                                    className: x.endOfFeedButton,
                                    onClick: () => {
                                        n('shop all bottom', void 0, !0);
                                    },
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'always-white',
                                        children: O.intl.string(O.t.AfrvRE)
                                    })
                                })
                            ]
                        })
                ]
            })
        });
    };
