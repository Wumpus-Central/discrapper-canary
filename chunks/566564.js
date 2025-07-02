(n.d(t, { Z: () => P }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(685816),
    s = n(481060),
    c = n(626135),
    u = n(381585),
    d = n(139668),
    p = n(364111),
    g = n(303952),
    f = n(752053),
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
    j = n(388032),
    y = n(806734);
let T = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: i, isFetchingCategories: s, tab: c, isFullScreen: d } = e,
            { noCache: h, includeUnpublished: O } = (0, b.Z)(),
            x = (0, u.sp)(),
            E = null != (t = null == x ? void 0 : x.sessionId) ? t : '';
        l.useEffect(() => {
            (0, g.n)({
                sessionId: E,
                checkpoint: g.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: d,
                unpublishedCategoriesShown: O,
                cacheDisabled: h
            });
        }, [c]);
        let {
                isFetchingShopHome: j,
                fetchShopHomeError: T,
                shopBlocks: P,
                refreshShopHome: k
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
            I = l.useCallback(() => {
                k();
            }, [k]);
        if (
            (l.useEffect(() => {
                null != T ||
                    j ||
                    0 === P.length ||
                    (0, g.n)({
                        sessionId: E,
                        checkpoint: g.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: d,
                        unpublishedCategoriesShown: O,
                        cacheDisabled: h
                    });
            }, [T, j, P.length, O, h, E, c, d]),
            null != T)
        )
            return (0, r.jsx)(f.Z, {
                onRetry: I,
                errorOrigin: f.i.SHOP_PAGE,
                errorMessage: T.message
            });
        if (j || 0 === P.length)
            return (0, r.jsxs)('div', {
                className: y.loadingContainer,
                children: [
                    (0, r.jsx)(C.Z, {
                        isLoading: j,
                        handleTransition: n,
                        tab: c
                    }),
                    (0, r.jsx)(m.Z, {
                        isLoading: j,
                        handleTransition: n,
                        categories: []
                    }),
                    (0, r.jsx)(_.Z, {
                        isLoading: j,
                        handleTransition: n,
                        numVisibleItems: i,
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
                        C.Z,
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
                        m.Z,
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
                        _.Z,
                        {
                            isLoading: j || s,
                            handleTransition: n,
                            numVisibleItems: i,
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
                    className: a()(y.blockContainer, { [y.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: P.map((e, t) => L(e, t)) });
    },
    P = (e) => {
        let { isFullScreen: t, scrollerRef: n, handleTransition: i, tab: o, transitionState: p } = e,
            g = (0, d.R)('CollectiblesFeedShop'),
            f = (0, h.R)(),
            b = (0, u.sp)(),
            [m, _] = l.useState(x.IV),
            [C, v] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            m >= g ? v(e < 20) : e <= 200 && _((e) => e + x.IV);
                        },
                        t = n.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener('scroll', e),
                        () => {
                            null == t || t.removeEventListener('scroll', e);
                        }
                    );
                }
            }, [n, m, g, _, v]),
            (0, r.jsxs)('div', {
                className: y.shop,
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(y.content, y.mainContent),
                        children: [
                            (0, r.jsx)(T, {
                                handleTransition: i,
                                numVisibleItems: m,
                                isFetchingCategories: f,
                                tab: o,
                                isFullScreen: t
                            }),
                            o !== x.AW.CATALOG &&
                                m >= g &&
                                (0, r.jsxs)('div', {
                                    className: y.endOfFeed,
                                    children: [
                                        (0, r.jsx)(s.X6q, {
                                            variant: 'heading-md/semibold',
                                            children: j.intl.string(j.t.Yr70c3)
                                        }),
                                        (0, r.jsx)(s.zxk, {
                                            className: y.endOfFeedButton,
                                            onClick: () => {
                                                (i('shop all button', void 0, !0),
                                                    c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                                                        page_type: o,
                                                        page_category: o === x.AW.HOME || null == b ? void 0 : b.pageCategory,
                                                        cta_name: 'shop the whole shop button'
                                                    }));
                                            },
                                            children: (0, r.jsx)(s.Text, {
                                                variant: 'text-md/medium',
                                                color: 'always-white',
                                                children: j.intl.string(j.t.AfrvRE)
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
