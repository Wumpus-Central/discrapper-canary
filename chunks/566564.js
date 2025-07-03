(n.d(t, { Z: () => P }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(685816),
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
    O = n(963278),
    v = n(921120),
    E = n(384067),
    S = n(215023),
    x = n(981631),
    y = n(388032),
    T = n(806734);
let j = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: i, isFetchingCategories: s, tab: c, isFullScreen: d } = e,
            { noCache: h, includeUnpublished: v } = (0, b.Z)(),
            S = (0, u.sp)(),
            x = null != (t = null == S ? void 0 : S.sessionId) ? t : '';
        l.useEffect(() => {
            (0, g.n)({
                sessionId: x,
                checkpoint: g.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: d,
                unpublishedCategoriesShown: v,
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
                    includeUnpublished: v,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: x,
                    tab: c,
                    isFullScreen: d
                }
            ),
            k = l.useCallback(() => {
                L();
            }, [L]);
        if (
            (l.useEffect(() => {
                null != j ||
                    y ||
                    0 === P.length ||
                    (0, g.n)({
                        sessionId: x,
                        checkpoint: g.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: d,
                        unpublishedCategoriesShown: v,
                        cacheDisabled: h
                    });
            }, [j, y, P.length, v, h, x, c, d]),
            null != j)
        )
            return (0, r.jsx)(f.Z, {
                onRetry: k,
                errorOrigin: f.i.SHOP_PAGE,
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
                        numVisibleItems: i,
                        tab: c
                    })
                ]
            });
        let I = (e, t) => {
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
                            numVisibleItems: i,
                            sortedSkuIds: u,
                            tab: c
                        },
                        t
                    );
                    break;
                case a.z.WIDE_BANNER:
                    l = (0, r.jsx)(
                        E.Z,
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
                    className: o()(T.blockContainer, { [T.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: P.map((e, t) => I(e, t)) });
    },
    P = (e) => {
        let { isFullScreen: t, scrollerRef: n, handleTransition: i, tab: a, transitionState: p } = e,
            g = (0, d.R)('CollectiblesFeedShop'),
            f = (0, h.R)(),
            b = (0, u.sp)(),
            [m, _] = l.useState(S.IV),
            [C, O] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            m >= g ? O(e < 20) : e <= 200 && _((e) => e + S.IV);
                        },
                        t = n.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener('scroll', e),
                        () => {
                            null == t || t.removeEventListener('scroll', e);
                        }
                    );
                }
            }, [n, m, g, _, O]),
            (0, r.jsxs)('div', {
                className: T.shop,
                children: [
                    (0, r.jsxs)('div', {
                        className: o()(T.content, T.mainContent),
                        children: [
                            (0, r.jsx)(j, {
                                handleTransition: i,
                                numVisibleItems: m,
                                isFetchingCategories: f,
                                tab: a,
                                isFullScreen: t
                            }),
                            a !== S.AW.CATALOG &&
                                m >= g &&
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
                                                (i('shop all button', void 0, !0),
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
                                (0, r.jsx)(v.Z, {
                                    peaking: C,
                                    transitioning: p === S.f7.OUT
                                }),
                                (0, r.jsx)(v.Z, {
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
