n.d(t, { Z: () => O });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(685816),
    s = n(481060),
    c = n(139668),
    u = n(364111),
    d = n(752053),
    b = n(81136),
    p = n(953655),
    f = n(548685),
    g = n(580914),
    m = n(963278),
    h = n(384067),
    _ = n(215023),
    C = n(388032),
    v = n(806734);
let x = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: a, tab: s } = e,
            { noCache: c, includeUnpublished: _ } = (0, b.Z)(),
            {
                isFetchingShopHome: C,
                fetchShopHomeError: x,
                shopBlocks: O,
                refreshShopHome: j
            } = (0, u.E)(s, {
                noCache: c,
                includeUnpublished: _,
                includeBundles: !0
            }),
            y = l.useCallback(() => {
                j();
            }, [j]);
        if (null != x)
            return (0, r.jsx)(d.Z, {
                onRetry: y,
                errorOrigin: d.i.SHOP_PAGE,
                errorMessage: x.message
            });
        if (C || 0 === O.length)
            return (0, r.jsxs)('div', {
                className: v.loadingContainer,
                children: [
                    (0, r.jsx)(g.Z, {
                        isLoading: C,
                        handleTransition: t,
                        tab: s
                    }),
                    (0, r.jsx)(p.Z, {
                        isLoading: C,
                        handleTransition: t,
                        categories: []
                    }),
                    (0, r.jsx)(f.Z, {
                        isLoading: C,
                        handleTransition: t,
                        numVisibleItems: n,
                        rankedSkuIds: [],
                        tab: s
                    })
                ]
            });
        let S = (e, l) => {
            if (null == e) return null;
            let c = null;
            switch (e.type) {
                case i.z.HERO:
                    c = (0, r.jsx)(
                        g.Z,
                        {
                            isLoading: C,
                            handleTransition: t,
                            heroBlock: e,
                            tab: s
                        },
                        l
                    );
                    break;
                case i.z.FEATURED:
                    c = (0, r.jsx)(
                        p.Z,
                        {
                            isLoading: C,
                            handleTransition: t,
                            featuredBlockRecord: e
                        },
                        l
                    );
                    break;
                case i.z.FEED:
                    c = (0, r.jsx)(
                        f.Z,
                        {
                            isLoading: C || a,
                            handleTransition: t,
                            numVisibleItems: n,
                            rankedSkuIds: e.rankedSkuIds,
                            tab: s
                        },
                        l
                    );
                    break;
                case i.z.WIDE_BANNER:
                    c = (0, r.jsx)(
                        h.Z,
                        {
                            handleTransition: t,
                            wideBannerBlock: e,
                            tab: s
                        },
                        l
                    );
                    break;
                case i.z.SHELF:
                    c = (0, r.jsx)(
                        m.Z,
                        {
                            handleTransition: t,
                            shelf: e,
                            tab: s
                        },
                        l
                    );
                    break;
                default:
                    return null;
            }
            return (0, r.jsx)(
                'div',
                {
                    className: o()(v.blockContainer, { [v.topBlockContainer]: 0 === l }),
                    children: c
                },
                l
            );
        };
        return (0, r.jsx)(r.Fragment, { children: O.map((e, t) => S(e, t)) });
    },
    O = (e) => {
        let { isFullScreen: t, handleTransition: n, numVisibleItems: l, tab: a, isFetchingCategories: i } = e,
            u = (0, c.R)('CollectiblesFeedShop');
        return (0, r.jsx)('div', {
            className: o()(v.shop, { [v.shopFullscreen]: t }),
            children: (0, r.jsxs)('div', {
                className: o()(v.content, v.mainContent),
                children: [
                    (0, r.jsx)(x, {
                        handleTransition: n,
                        numVisibleItems: l,
                        isFetchingCategories: i,
                        tab: a
                    }),
                    a !== _.AW.CATALOG &&
                        l >= u &&
                        (0, r.jsxs)('div', {
                            className: v.endOfFeed,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    children: C.NW.string(C.t.Yr70c3)
                                }),
                                (0, r.jsx)(s.zxk, {
                                    className: v.endOfFeedButton,
                                    onClick: () => {
                                        n('shop all bottom', void 0, !0);
                                    },
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'always-white',
                                        children: C.NW.string(C.t.AfrvRE)
                                    })
                                })
                            ]
                        })
                ]
            })
        });
    };
