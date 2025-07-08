(n.d(t, { Z: () => P }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(685816),
    s = n(481060),
    c = n(626135),
    u = n(381585),
    d = n(139668),
    p = n(364111),
    f = n(303952),
    g = n(752053),
    h = n(258939),
    b = n(81136),
    m = n(953655),
    _ = n(548685),
    C = n(580914),
    O = n(963278),
    E = n(921120),
    v = n(384067),
    S = n(215023),
    x = n(981631),
    y = n(388032),
    T = n(806734);
let j = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: o, isFetchingCategories: s, tab: c, isFullScreen: d } = e,
            { noCache: h, includeUnpublished: E } = (0, b.Z)(),
            S = (0, u.sp)(),
            x = null != (t = null == S ? void 0 : S.sessionId) ? t : '';
        l.useEffect(() => {
            (0, f.n)({
                sessionId: x,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: d,
                unpublishedCategoriesShown: E,
                cacheDisabled: h
            });
        }, [c]);
        let {
                isFetchingShopHome: y,
                fetchShopHomeError: j,
                shopBlocks: P,
                refreshShopHome: L
            } = (0, p.E)(
                c,
                {
                    noCache: h,
                    includeUnpublished: E,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: x,
                    tab: c,
                    isFullScreen: d
                }
            ),
            I = l.useCallback(() => {
                L();
            }, [L]);
        if (
            (l.useEffect(() => {
                null != j ||
                    y ||
                    0 === P.length ||
                    (0, f.n)({
                        sessionId: x,
                        checkpoint: f.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: d,
                        unpublishedCategoriesShown: E,
                        cacheDisabled: h
                    });
            }, [j, y, P.length, E, h, x, c, d]),
            null != j)
        )
            return (0, r.jsx)(g.Z, {
                onRetry: I,
                errorOrigin: g.i.SHOP_PAGE,
                errorMessage: j.message
            });
        if (y || 0 === P.length)
            return (0, r.jsxs)('div', {
                className: T.loadingContainer,
                children: [
                    (0, r.jsx)(C.Z, {
                        isLoading: y,
                        handleTransition: n,
                        tab: c
                    }),
                    (0, r.jsx)(m.Z, {
                        isLoading: y,
                        handleTransition: n,
                        categories: []
                    }),
                    (0, r.jsx)(_.Z, {
                        isLoading: y,
                        handleTransition: n,
                        numVisibleItems: o,
                        tab: c
                    })
                ]
            });
        let k = (e, t) => {
            if (null == e) return null;
            let l = null;
            switch (e.type) {
                case a.z.HERO:
                    l = (0, r.jsx)(
                        C.Z,
                        {
                            isLoading: y,
                            handleTransition: n,
                            heroBlock: e,
                            tab: c
                        },
                        t
                    );
                    break;
                case a.z.FEATURED:
                    l = (0, r.jsx)(
                        m.Z,
                        {
                            isLoading: y,
                            handleTransition: n,
                            featuredBlockRecord: e
                        },
                        t
                    );
                    break;
                case a.z.FEED:
                    let u = e.sortedSkuIds;
                    l = (0, r.jsx)(
                        _.Z,
                        {
                            isLoading: y || s,
                            handleTransition: n,
                            numVisibleItems: o,
                            sortedSkuIds: u,
                            tab: c
                        },
                        t
                    );
                    break;
                case a.z.WIDE_BANNER:
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
                case a.z.SHELF:
                    l = (0, r.jsx)(
                        O.Z,
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
                    className: i()(T.blockContainer, { [T.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: P.map((e, t) => k(e, t)) });
    },
    P = (e) => {
        let { isFullScreen: t, scrollerRef: n, handleTransition: o, tab: a, transitionState: p } = e,
            f = (0, d.R)('CollectiblesFeedShop'),
            g = (0, h.R)(),
            b = (0, u.sp)(),
            [m, _] = l.useState(S.IV),
            [C, O] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            m >= f ? O(e < 20) : e <= 200 && _((e) => e + S.IV);
                        },
                        t = n.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener('scroll', e),
                        () => {
                            null == t || t.removeEventListener('scroll', e);
                        }
                    );
                }
            }, [n, m, f, _, O]),
            (0, r.jsxs)('div', {
                className: T.shop,
                children: [
                    (0, r.jsxs)('div', {
                        className: i()(T.content, T.mainContent),
                        children: [
                            (0, r.jsx)(j, {
                                handleTransition: o,
                                numVisibleItems: m,
                                isFetchingCategories: g,
                                tab: a,
                                isFullScreen: t
                            }),
                            a !== S.AW.CATALOG &&
                                m >= f &&
                                (0, r.jsxs)('div', {
                                    className: T.endOfFeed,
                                    children: [
                                        (0, r.jsx)(s.X6q, {
                                            variant: 'heading-md/semibold',
                                            children: y.intl.string(y.t.Yr70c3)
                                        }),
                                        (0, r.jsx)(s.zxk, {
                                            className: T.endOfFeedButton,
                                            onClick: () => {
                                                (o('shop all button', void 0, !0),
                                                    c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                                                        page_type: a,
                                                        page_category: a === S.AW.HOME || null == b ? void 0 : b.pageCategory,
                                                        cta_name: 'shop the whole shop button'
                                                    }));
                                            },
                                            children: (0, r.jsx)(s.Text, {
                                                variant: 'text-md/medium',
                                                color: 'always-white',
                                                children: y.intl.string(y.t.AfrvRE)
                                            })
                                        })
                                    ]
                                })
                        ]
                    }),
                    !t &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(E.Z, {
                                    peaking: C,
                                    transitioning: p === S.f7.OUT
                                }),
                                (0, r.jsx)(E.Z, {
                                    style: { left: 1850 },
                                    peaking: C,
                                    transitioning: p === S.f7.OUT
                                })
                            ]
                        })
                ]
            })
        );
    };
