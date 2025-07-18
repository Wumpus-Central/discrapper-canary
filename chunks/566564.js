(r.d(t, { Z: () => L }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(685816),
    s = r(481060),
    c = r(626135),
    u = r(381585),
    d = r(139668),
    p = r(364111),
    f = r(303952),
    g = r(752053),
    h = r(899766),
    b = r(258939),
    m = r(81136),
    _ = r(953655),
    C = r(548685),
    O = r(580914),
    v = r(963278),
    E = r(921120),
    S = r(384067),
    y = r(215023),
    x = r(981631),
    j = r(388032),
    T = r(806734);
let P = (e) => {
        var t;
        let { handleTransition: r, numVisibleItems: i, isFetchingCategories: s, tab: c, isFullScreen: d } = e,
            { noCache: b, includeUnpublished: E } = (0, m.Z)(),
            [y, x] = l.useState(!1),
            j = (0, u.sp)(),
            P = null != (t = null == j ? void 0 : j.sessionId) ? t : '';
        l.useEffect(() => {
            (0, f.n)({
                sessionId: P,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: d,
                unpublishedCategoriesShown: E,
                cacheDisabled: b
            });
        }, [c]);
        let {
                isFetchingShopHome: L,
                fetchShopHomeError: k,
                shopBlocks: I,
                refreshShopHome: N
            } = (0, p.E)(
                c,
                {
                    noCache: b,
                    includeUnpublished: E,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: P,
                    tab: c,
                    isFullScreen: d
                }
            ),
            A = l.useCallback(() => {
                N();
            }, [N]);
        if (
            (l.useEffect(() => {
                null != k ||
                    L ||
                    0 === I.length ||
                    (0, f.n)({
                        sessionId: P,
                        checkpoint: f.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: d,
                        unpublishedCategoriesShown: E,
                        cacheDisabled: b
                    });
            }, [k, L, I.length, E, b, P, c, d]),
            null != k)
        )
            return (0, n.jsx)(g.Z, {
                onRetry: A,
                errorOrigin: g.i.SHOP_PAGE,
                errorMessage: k.message
            });
        if (L || 0 === I.length)
            return (0, n.jsxs)('div', {
                className: T.loadingContainer,
                children: [
                    (0, n.jsx)(O.Z, {
                        isLoading: L,
                        handleTransition: r,
                        tab: c
                    }),
                    (0, n.jsx)(_.Z, {
                        isLoading: L,
                        handleTransition: r,
                        categories: []
                    }),
                    (0, n.jsx)(C.Z, {
                        isLoading: L,
                        handleTransition: r,
                        numVisibleItems: i,
                        tab: c
                    })
                ]
            });
        let B = (e, t) => {
            if (null == e) return null;
            let l = null;
            switch (e.type) {
                case a.z.HERO:
                    l = (0, n.jsx)(
                        O.Z,
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
                        _.Z,
                        {
                            isLoading: L,
                            handleTransition: r,
                            featuredBlockRecord: e
                        },
                        t
                    );
                    break;
                case a.z.FEED:
                    let u = e.sortedSkuIds;
                    l = (0, n.jsx)(
                        C.Z,
                        {
                            isLoading: L || s,
                            handleTransition: r,
                            numVisibleItems: i,
                            sortedSkuIds: u,
                            tab: c
                        },
                        t
                    );
                    break;
                case a.z.WIDE_BANNER:
                    l = (0, n.jsx)(
                        S.Z,
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
                        v.Z,
                        {
                            handleTransition: r,
                            shelf: e,
                            tab: c
                        },
                        t
                    );
                    break;
                case a.z.COUNTDOWN_TIMER:
                    l = (0, n.jsx)(h.J, {
                        record: e,
                        isVisible: !y,
                        isFullScreen: d
                    });
                    break;
                default:
                    return null;
            }
            return (0, n.jsx)(
                'div',
                {
                    className: o()(T.blockContainer, { [T.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, n.jsx)(n.Fragment, { children: I.map((e, t) => B(e, t)) });
    },
    L = (e) => {
        let { isFullScreen: t, scrollerRef: r, handleTransition: i, tab: a, transitionState: p } = e,
            f = (0, d.R)('CollectiblesFeedShop'),
            g = (0, b.R)(),
            h = (0, u.sp)(),
            [m, _] = l.useState(y.IV),
            [C, O] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != r.current) {
                    let e = () => {
                            if (null == r.current) return;
                            let e = r.current.getDistanceFromBottom();
                            m >= f ? O(e < 20) : e <= 200 && _((e) => e + y.IV);
                        },
                        t = r.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener('scroll', e),
                        () => {
                            null == t || t.removeEventListener('scroll', e);
                        }
                    );
                }
            }, [r, m, f, _, O]),
            (0, n.jsxs)('div', {
                className: T.shop,
                children: [
                    (0, n.jsxs)('div', {
                        className: o()(T.content, T.mainContent),
                        children: [
                            (0, n.jsx)(P, {
                                handleTransition: i,
                                numVisibleItems: m,
                                isFetchingCategories: g,
                                tab: a,
                                isFullScreen: t
                            }),
                            a !== y.AW.CATALOG &&
                                m >= f &&
                                (0, n.jsxs)('div', {
                                    className: T.endOfFeed,
                                    children: [
                                        (0, n.jsx)(s.X6q, {
                                            variant: 'heading-md/semibold',
                                            children: j.intl.string(j.t.Yr70c3)
                                        }),
                                        (0, n.jsx)(s.zxk, {
                                            variant: 'primary',
                                            text: j.intl.string(j.t.AfrvRE),
                                            onClick: () => {
                                                (i('shop all button', void 0, !0),
                                                    c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                                                        page_type: a,
                                                        page_category: a === y.AW.HOME || null == h ? void 0 : h.pageCategory,
                                                        cta_name: 'shop the whole shop button'
                                                    }));
                                            },
                                            fullWidth: !0
                                        })
                                    ]
                                })
                        ]
                    }),
                    !t &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(E.Z, {
                                    peaking: C,
                                    transitioning: p === y.f7.OUT
                                }),
                                (0, n.jsx)(E.Z, {
                                    style: { left: 1850 },
                                    peaking: C,
                                    transitioning: p === y.f7.OUT
                                })
                            ]
                        })
                ]
            })
        );
    };
