n.d(t, { Z: () => j });
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
    f = n(303952),
    b = n(752053),
    g = n(81136),
    h = n(953655),
    m = n(548685),
    _ = n(580914),
    C = n(963278),
    v = n(384067),
    O = n(215023),
    x = n(981631),
    S = n(388032),
    E = n(806734);
let y = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: a, isFetchingCategories: s, tab: c, isFullScreen: d } = e,
            { noCache: O, includeUnpublished: x } = (0, g.Z)(),
            S = (0, u.sp)(),
            y = null != (t = null == S ? void 0 : S.sessionId) ? t : '';
        l.useEffect(() => {
            (0, f.n)({
                sessionId: y,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: d,
                unpublishedCategoriesShown: x,
                cacheDisabled: O
            });
        }, [c]);
        let {
                isFetchingShopHome: j,
                fetchShopHomeError: P,
                shopBlocks: k,
                refreshShopHome: T
            } = (0, p.E)(
                c,
                {
                    noCache: O,
                    includeUnpublished: x,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: y,
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
                    j ||
                    0 === k.length ||
                    (0, f.n)({
                        sessionId: y,
                        checkpoint: f.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: d,
                        unpublishedCategoriesShown: x,
                        cacheDisabled: O
                    });
            }, [P, j, k.length, x, O, y, c, d]),
            null != P)
        )
            return (0, r.jsx)(b.Z, {
                onRetry: I,
                errorOrigin: b.i.SHOP_PAGE,
                errorMessage: P.message
            });
        if (j || 0 === k.length)
            return (0, r.jsxs)('div', {
                className: E.loadingContainer,
                children: [
                    (0, r.jsx)(_.Z, {
                        isLoading: j,
                        handleTransition: n,
                        tab: c
                    }),
                    (0, r.jsx)(h.Z, {
                        isLoading: j,
                        handleTransition: n,
                        categories: []
                    }),
                    (0, r.jsx)(m.Z, {
                        isLoading: j,
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
                            isLoading: j,
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
                            isLoading: j,
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
                            isLoading: j || s,
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
    j = (e) => {
        let { isFullScreen: t, handleTransition: n, numVisibleItems: l, tab: a, isFetchingCategories: o } = e,
            p = (0, d.R)('CollectiblesFeedShop'),
            f = (0, u.sp)();
        return (0, r.jsx)('div', {
            className: E.shop,
            children: (0, r.jsxs)('div', {
                className: i()(E.content, E.mainContent),
                children: [
                    (0, r.jsx)(y, {
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
                                    children: S.intl.string(S.t.Yr70c3)
                                }),
                                (0, r.jsx)(s.zxk, {
                                    className: E.endOfFeedButton,
                                    onClick: () => {
                                        n('shop all button', void 0, !0),
                                            c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                collectibles_shop_session_id: null == f ? void 0 : f.sessionId,
                                                page_type: a,
                                                page_category: a === O.AW.HOME || null == f ? void 0 : f.pageCategory,
                                                cta_name: 'shop the whole shop button'
                                            });
                                    },
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'always-white',
                                        children: S.intl.string(S.t.AfrvRE)
                                    })
                                })
                            ]
                        })
                ]
            })
        });
    };
