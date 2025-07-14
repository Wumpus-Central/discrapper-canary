(n.d(t, { Z: () => k }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(685816),
    s = n(755721),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    p = n(139668),
    g = n(364111),
    f = n(303952),
    h = n(752053),
    b = n(899766),
    m = n(258939),
    _ = n(81136),
    C = n(953655),
    O = n(548685),
    v = n(580914),
    E = n(963278),
    S = n(921120),
    x = n(384067),
    y = n(215023),
    j = n(981631),
    T = n(388032),
    P = n(806734);
let L = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: o, isFetchingCategories: s, tab: c, isFullScreen: u } = e,
            { noCache: p, includeUnpublished: m } = (0, _.Z)(),
            [S, y] = l.useState(!1),
            j = (0, d.sp)(),
            T = null != (t = null == j ? void 0 : j.sessionId) ? t : '';
        l.useEffect(() => {
            (0, f.n)({
                sessionId: T,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: u,
                unpublishedCategoriesShown: m,
                cacheDisabled: p
            });
        }, [c]);
        let {
                isFetchingShopHome: L,
                fetchShopHomeError: k,
                shopBlocks: I,
                refreshShopHome: B
            } = (0, g.E)(
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
                null != k ||
                    L ||
                    0 === I.length ||
                    (0, f.n)({
                        sessionId: T,
                        checkpoint: f.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: u,
                        unpublishedCategoriesShown: m,
                        cacheDisabled: p
                    });
            }, [k, L, I.length, m, p, T, c, u]),
            null != k)
        )
            return (0, r.jsx)(h.Z, {
                onRetry: N,
                errorOrigin: h.i.SHOP_PAGE,
                errorMessage: k.message
            });
        if (L || 0 === I.length)
            return (0, r.jsxs)('div', {
                className: P.loadingContainer,
                children: [
                    (0, r.jsx)(v.Z, {
                        isLoading: L,
                        handleTransition: n,
                        tab: c
                    }),
                    (0, r.jsx)(C.Z, {
                        isLoading: L,
                        handleTransition: n,
                        categories: []
                    }),
                    (0, r.jsx)(O.Z, {
                        isLoading: L,
                        handleTransition: n,
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
                    l = (0, r.jsx)(
                        v.Z,
                        {
                            isLoading: L,
                            handleTransition: n,
                            heroBlock: e,
                            tab: c,
                            onVisibilityChange: y
                        },
                        t
                    );
                    break;
                case a.z.FEATURED:
                    l = (0, r.jsx)(
                        C.Z,
                        {
                            isLoading: L,
                            handleTransition: n,
                            featuredBlockRecord: e
                        },
                        t
                    );
                    break;
                case a.z.FEED:
                    let d = e.sortedSkuIds;
                    l = (0, r.jsx)(
                        O.Z,
                        {
                            isLoading: L || s,
                            handleTransition: n,
                            numVisibleItems: o,
                            sortedSkuIds: d,
                            tab: c
                        },
                        t
                    );
                    break;
                case a.z.WIDE_BANNER:
                    l = (0, r.jsx)(
                        x.Z,
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
                        E.Z,
                        {
                            handleTransition: n,
                            shelf: e,
                            tab: c
                        },
                        t
                    );
                    break;
                case a.z.COUNTDOWN_TIMER:
                    l = (0, r.jsx)(b.J, {
                        record: e,
                        isVisible: !S,
                        isFullScreen: u
                    });
                    break;
                default:
                    return null;
            }
            return (0, r.jsx)(
                'div',
                {
                    className: i()(P.blockContainer, { [P.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: I.map((e, t) => A(e, t)) });
    },
    k = (e) => {
        let { isFullScreen: t, scrollerRef: n, handleTransition: o, tab: a, transitionState: g } = e,
            f = (0, p.R)('CollectiblesFeedShop'),
            h = (0, m.R)(),
            b = (0, d.sp)(),
            [_, C] = l.useState(y.IV),
            [O, v] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            _ >= f ? v(e < 20) : e <= 200 && C((e) => e + y.IV);
                        },
                        t = n.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener('scroll', e),
                        () => {
                            null == t || t.removeEventListener('scroll', e);
                        }
                    );
                }
            }, [n, _, f, C, v]),
            (0, r.jsxs)('div', {
                className: P.shop,
                children: [
                    (0, r.jsxs)('div', {
                        className: i()(P.content, P.mainContent),
                        children: [
                            (0, r.jsx)(L, {
                                handleTransition: o,
                                numVisibleItems: _,
                                isFetchingCategories: h,
                                tab: a,
                                isFullScreen: t
                            }),
                            a !== y.AW.CATALOG &&
                                _ >= f &&
                                (0, r.jsxs)('div', {
                                    className: P.endOfFeed,
                                    children: [
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-md/semibold',
                                            children: T.intl.string(T.t.Yr70c3)
                                        }),
                                        (0, r.jsx)(s.zx, {
                                            className: P.endOfFeedButton,
                                            onClick: () => {
                                                (o('shop all button', void 0, !0),
                                                    u.default.track(j.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                                                        page_type: a,
                                                        page_category: a === y.AW.HOME || null == b ? void 0 : b.pageCategory,
                                                        cta_name: 'shop the whole shop button'
                                                    }));
                                            },
                                            children: (0, r.jsx)(c.Text, {
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
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(S.Z, {
                                    peaking: O,
                                    transitioning: g === y.f7.OUT
                                }),
                                (0, r.jsx)(S.Z, {
                                    style: { left: 1850 },
                                    peaking: O,
                                    transitioning: g === y.f7.OUT
                                })
                            ]
                        })
                ]
            })
        );
    };
