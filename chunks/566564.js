n.d(t, { Z: () => y });
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(685816),
    s = n(481060),
    c = n(626135),
    u = n(381585),
    d = n(139668),
    p = n(364111),
    g = n(303952),
    b = n(752053),
    f = n(81136),
    h = n(953655),
    m = n(548685),
    _ = n(580914),
    C = n(963278),
    v = n(384067),
    O = n(215023),
    S = n(981631),
    x = n(388032),
    E = n(806734);
let j = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: a, isFetchingCategories: s, tab: c, isFullScreen: d } = e,
            { noCache: O, includeUnpublished: S } = (0, f.Z)(),
            x = (0, u.sp)(),
            j = null != (t = null == x ? void 0 : x.sessionId) ? t : '';
        l.useEffect(() => {
            (0, g.n)({
                sessionId: j,
                checkpoint: g.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: d,
                unpublishedCategoriesShown: S,
                cacheDisabled: O
            });
        }, [c]);
        let {
                isFetchingShopHome: y,
                fetchShopHomeError: P,
                shopBlocks: k,
                refreshShopHome: T
            } = (0, p.E)(
                c,
                {
                    noCache: O,
                    includeUnpublished: S,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: j,
                    tab: c,
                    isFullScreen: d
                }
            ),
            I = l.useCallback(() => {
                T();
            }, [T]);
        if (
            (l.useEffect(() => {
                null != P ||
                    y ||
                    0 === k.length ||
                    (0, g.n)({
                        sessionId: j,
                        checkpoint: g.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: d,
                        unpublishedCategoriesShown: S,
                        cacheDisabled: O
                    });
            }, [P, y, k.length, S, O, j, c, d]),
            null != P)
        )
            return (0, r.jsx)(b.Z, {
                onRetry: I,
                errorOrigin: b.i.SHOP_PAGE,
                errorMessage: P.message
            });
        if (y || 0 === k.length)
            return (0, r.jsxs)('div', {
                className: E.loadingContainer,
                children: [
                    (0, r.jsx)(_.Z, {
                        isLoading: y,
                        handleTransition: n,
                        tab: c
                    }),
                    (0, r.jsx)(h.Z, {
                        isLoading: y,
                        handleTransition: n,
                        categories: []
                    }),
                    (0, r.jsx)(m.Z, {
                        isLoading: y,
                        handleTransition: n,
                        numVisibleItems: a,
                        tab: c
                    })
                ]
            });
        let L = (e, t) => {
            if (null == e) return null;
            let l = null;
            switch (e.type) {
                case o.z.HERO:
                    l = (0, r.jsx)(
                        _.Z,
                        {
                            isLoading: y,
                            handleTransition: n,
                            heroBlock: e,
                            tab: c
                        },
                        t
                    );
                    break;
                case o.z.FEATURED:
                    l = (0, r.jsx)(
                        h.Z,
                        {
                            isLoading: y,
                            handleTransition: n,
                            featuredBlockRecord: e
                        },
                        t
                    );
                    break;
                case o.z.FEED:
                    let u = e.sortedSkuIds;
                    l = (0, r.jsx)(
                        m.Z,
                        {
                            isLoading: y || s,
                            handleTransition: n,
                            numVisibleItems: a,
                            sortedSkuIds: u,
                            tab: c
                        },
                        t
                    );
                    break;
                case o.z.WIDE_BANNER:
                    l = (0, r.jsx)(
                        v.Z,
                        {
                            handleTransition: n,
                            wideBannerBlock: e,
                            tab: c
                        },
                        t
                    );
                    break;
                case o.z.SHELF:
                    l = (0, r.jsx)(
                        C.Z,
                        {
                            handleTransition: n,
                            shelf: e,
                            tab: c
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
                    className: i()(E.blockContainer, { [E.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: k.map((e, t) => L(e, t)) });
    },
    y = (e) => {
        let { isFullScreen: t, handleTransition: n, numVisibleItems: l, tab: a, isFetchingCategories: o } = e,
            p = (0, d.R)('CollectiblesFeedShop'),
            g = (0, u.sp)();
        return (0, r.jsx)('div', {
            className: i()(E.shop, { [E.shopFullscreen]: t }),
            children: (0, r.jsxs)('div', {
                className: i()(E.content, E.mainContent),
                children: [
                    (0, r.jsx)(j, {
                        handleTransition: n,
                        numVisibleItems: l,
                        isFetchingCategories: o,
                        tab: a,
                        isFullScreen: t
                    }),
                    a !== O.AW.CATALOG &&
                        l >= p &&
                        (0, r.jsxs)('div', {
                            className: E.endOfFeed,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    children: x.intl.string(x.t.Yr70c3)
                                }),
                                (0, r.jsx)(s.zxk, {
                                    className: E.endOfFeedButton,
                                    onClick: () => {
                                        n('shop all button', void 0, !0),
                                            c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == g ? void 0 : g.sessionId,
                                                page_type: a,
                                                page_category: a === O.AW.HOME || null == g ? void 0 : g.pageCategory,
                                                cta_name: 'shop the whole shop button'
                                            });
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
