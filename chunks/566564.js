(r.d(t, { Z: () => I }), r(388685));
var n = r(255367),
    l = r(73800),
    o = r(120356),
    i = r.n(o),
    a = r(685816),
    s = r(755721),
    c = r(481060),
    u = r(626135),
    d = r(381585),
    p = r(139668),
    f = r(364111),
    g = r(303952),
    h = r(752053),
    b = r(899766),
    m = r(258939),
    _ = r(81136),
    O = r(953655),
    C = r(548685),
    v = r(580914),
    E = r(963278),
    S = r(921120),
    y = r(384067),
    x = r(215023),
    j = r(981631),
    T = r(388032),
    P = r(806734);
let L = (e) => {
        var t;
        let { handleTransition: r, numVisibleItems: o, isFetchingCategories: s, tab: c, isFullScreen: u } = e,
            { noCache: p, includeUnpublished: m } = (0, _.Z)(),
            [S, x] = l.useState(!1),
            j = (0, d.sp)(),
            T = null != (t = null == j ? void 0 : j.sessionId) ? t : '';
        l.useEffect(() => {
            (0, g.n)({
                sessionId: T,
                checkpoint: g.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: u,
                unpublishedCategoriesShown: m,
                cacheDisabled: p
            });
        }, [c]);
        let {
                isFetchingShopHome: L,
                fetchShopHomeError: I,
                shopBlocks: k,
                refreshShopHome: B
            } = (0, f.E)(
                c,
                {
                    noCache: p,
                    includeUnpublished: m,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: T,
                    tab: c,
                    isFullScreen: u
                }
            ),
            N = l.useCallback(() => {
                B();
            }, [B]);
        if (
            (l.useEffect(() => {
                null != I ||
                    L ||
                    0 === k.length ||
                    (0, g.n)({
                        sessionId: T,
                        checkpoint: g.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: u,
                        unpublishedCategoriesShown: m,
                        cacheDisabled: p
                    });
            }, [I, L, k.length, m, p, T, c, u]),
            null != I)
        )
            return (0, n.jsx)(h.Z, {
                onRetry: N,
                errorOrigin: h.i.SHOP_PAGE,
                errorMessage: I.message
            });
        if (L || 0 === k.length)
            return (0, n.jsxs)('div', {
                className: P.loadingContainer,
                children: [
                    (0, n.jsx)(v.Z, {
                        isLoading: L,
                        handleTransition: r,
                        tab: c
                    }),
                    (0, n.jsx)(O.Z, {
                        isLoading: L,
                        handleTransition: r,
                        categories: []
                    }),
                    (0, n.jsx)(C.Z, {
                        isLoading: L,
                        handleTransition: r,
                        numVisibleItems: o,
                        tab: c
                    })
                ]
            });
        let A = (e, t) => {
            if (null == e) return null;
            let l = null;
            switch (e.type) {
                case a.z.HERO:
                    l = (0, n.jsx)(
                        v.Z,
                        {
                            isLoading: L,
                            handleTransition: r,
                            heroBlock: e,
                            tab: c,
                            onVisibilityChange: x
                        },
                        t
                    );
                    break;
                case a.z.FEATURED:
                    l = (0, n.jsx)(
                        O.Z,
                        {
                            isLoading: L,
                            handleTransition: r,
                            featuredBlockRecord: e
                        },
                        t
                    );
                    break;
                case a.z.FEED:
                    let d = e.sortedSkuIds;
                    l = (0, n.jsx)(
                        C.Z,
                        {
                            isLoading: L || s,
                            handleTransition: r,
                            numVisibleItems: o,
                            sortedSkuIds: d,
                            tab: c
                        },
                        t
                    );
                    break;
                case a.z.WIDE_BANNER:
                    l = (0, n.jsx)(
                        y.Z,
                        {
                            handleTransition: r,
                            wideBannerBlock: e,
                            tab: c
                        },
                        t
                    );
                    break;
                case a.z.SHELF:
                    l = (0, n.jsx)(
                        E.Z,
                        {
                            handleTransition: r,
                            shelf: e,
                            tab: c
                        },
                        t
                    );
                    break;
                case a.z.COUNTDOWN_TIMER:
                    l = (0, n.jsx)(b.J, {
                        record: e,
                        isVisible: !S,
                        isFullScreen: u
                    });
                    break;
                default:
                    return null;
            }
            return (0, n.jsx)(
                'div',
                {
                    className: i()(P.blockContainer, { [P.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, n.jsx)(n.Fragment, { children: k.map((e, t) => A(e, t)) });
    },
    I = (e) => {
        let { isFullScreen: t, scrollerRef: r, handleTransition: o, tab: a, transitionState: f } = e,
            g = (0, p.R)('CollectiblesFeedShop'),
            h = (0, m.R)(),
            b = (0, d.sp)(),
            [_, O] = l.useState(x.IV),
            [C, v] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != r.current) {
                    let e = () => {
                            if (null == r.current) return;
                            let e = r.current.getDistanceFromBottom();
                            _ >= g ? v(e < 20) : e <= 200 && O((e) => e + x.IV);
                        },
                        t = r.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener('scroll', e),
                        () => {
                            null == t || t.removeEventListener('scroll', e);
                        }
                    );
                }
            }, [r, _, g, O, v]),
            (0, n.jsxs)('div', {
                className: P.shop,
                children: [
                    (0, n.jsxs)('div', {
                        className: i()(P.content, P.mainContent),
                        children: [
                            (0, n.jsx)(L, {
                                handleTransition: o,
                                numVisibleItems: _,
                                isFetchingCategories: h,
                                tab: a,
                                isFullScreen: t
                            }),
                            a !== x.AW.CATALOG &&
                                _ >= g &&
                                (0, n.jsxs)('div', {
                                    className: P.endOfFeed,
                                    children: [
                                        (0, n.jsx)(c.X6q, {
                                            variant: 'heading-md/semibold',
                                            children: T.intl.string(T.t.Yr70c3)
                                        }),
                                        (0, n.jsx)(s.zx, {
                                            className: P.endOfFeedButton,
                                            onClick: () => {
                                                (o('shop all button', void 0, !0),
                                                    u.default.track(j.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                                                        page_type: a,
                                                        page_category: a === x.AW.HOME || null == b ? void 0 : b.pageCategory,
                                                        cta_name: 'shop the whole shop button'
                                                    }));
                                            },
                                            children: (0, n.jsx)(c.Text, {
                                                variant: 'text-md/medium',
                                                color: 'always-white',
                                                children: T.intl.string(T.t.AfrvRE)
                                            })
                                        })
                                    ]
                                })
                        ]
                    }),
                    !t &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(S.Z, {
                                    peaking: C,
                                    transitioning: f === x.f7.OUT
                                }),
                                (0, n.jsx)(S.Z, {
                                    style: { left: 1850 },
                                    peaking: C,
                                    transitioning: f === x.f7.OUT
                                })
                            ]
                        })
                ]
            })
        );
    };
