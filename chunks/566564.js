n.d(t, { Z: () => k }), n(388685);
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
    g = n(752053),
    h = n(258939),
    b = n(81136),
    m = n(953655),
    _ = n(548685),
    C = n(580914),
    v = n(963278),
    O = n(921120),
    S = n(384067),
    x = n(215023),
    E = n(981631),
    y = n(388032),
    j = n(806734);
let P = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: a, isFetchingCategories: s, tab: c, isFullScreen: d } = e,
            { noCache: h, includeUnpublished: O } = (0, b.Z)(),
            x = (0, u.sp)(),
            E = null != (t = null == x ? void 0 : x.sessionId) ? t : '';
        l.useEffect(() => {
            (0, f.n)({
                sessionId: E,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: d,
                unpublishedCategoriesShown: O,
                cacheDisabled: h
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
                    noCache: h,
                    includeUnpublished: O,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: E,
                    tab: c,
                    isFullScreen: d
                }
            ),
            L = l.useCallback(() => {
                T();
            }, [T]);
        if (
            (l.useEffect(() => {
                null != P ||
                    y ||
                    0 === k.length ||
                    (0, f.n)({
                        sessionId: E,
                        checkpoint: f.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: d,
                        unpublishedCategoriesShown: O,
                        cacheDisabled: h
                    });
            }, [P, y, k.length, O, h, E, c, d]),
            null != P)
        )
            return (0, r.jsx)(g.Z, {
                onRetry: L,
                errorOrigin: g.i.SHOP_PAGE,
                errorMessage: P.message
            });
        if (y || 0 === k.length)
            return (0, r.jsxs)('div', {
                className: j.loadingContainer,
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
                        numVisibleItems: a,
                        tab: c
                    })
                ]
            });
        let I = (e, t) => {
            if (null == e) return null;
            let l = null;
            switch (e.type) {
                case o.z.HERO:
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
                case o.z.FEATURED:
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
                case o.z.FEED:
                    let u = e.sortedSkuIds;
                    l = (0, r.jsx)(
                        _.Z,
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
                        S.Z,
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
                        v.Z,
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
                    className: i()(j.blockContainer, { [j.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: k.map((e, t) => I(e, t)) });
    },
    k = (e) => {
        let { isFullScreen: t, scrollerRef: n, handleTransition: a, tab: o, transitionState: p } = e,
            f = (0, d.R)('CollectiblesFeedShop'),
            g = (0, h.R)(),
            b = (0, u.sp)(),
            [m, _] = l.useState(x.IV),
            [C, v] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            m >= f ? v(e < 20) : e <= 200 && _((e) => e + x.IV);
                        },
                        t = n.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener('scroll', e),
                        () => {
                            null == t || t.removeEventListener('scroll', e);
                        }
                    );
                }
            }, [n, m, f, _, v]),
            (0, r.jsxs)('div', {
                className: j.shop,
                children: [
                    (0, r.jsxs)('div', {
                        className: i()(j.content, j.mainContent),
                        children: [
                            (0, r.jsx)(P, {
                                handleTransition: a,
                                numVisibleItems: m,
                                isFetchingCategories: g,
                                tab: o,
                                isFullScreen: t
                            }),
                            o !== x.AW.CATALOG &&
                                m >= f &&
                                (0, r.jsxs)('div', {
                                    className: j.endOfFeed,
                                    children: [
                                        (0, r.jsx)(s.X6q, {
                                            variant: 'heading-md/semibold',
                                            children: y.intl.string(y.t.Yr70c3)
                                        }),
                                        (0, r.jsx)(s.zxk, {
                                            className: j.endOfFeedButton,
                                            onClick: () => {
                                                a('shop all button', void 0, !0),
                                                    c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                                                        page_type: o,
                                                        page_category: o === x.AW.HOME || null == b ? void 0 : b.pageCategory,
                                                        cta_name: 'shop the whole shop button'
                                                    });
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
                                (0, r.jsx)(O.Z, {
                                    peaking: C,
                                    transitioning: p === x.f7.OUT
                                }),
                                (0, r.jsx)(O.Z, {
                                    style: { left: 1850 },
                                    peaking: C,
                                    transitioning: p === x.f7.OUT
                                })
                            ]
                        })
                ]
            })
        );
    };
