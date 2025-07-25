(r.d(t, { Z: () => k }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(685816),
    s = r(481060),
    c = r(702486),
    u = r(626135),
    d = r(381585),
    p = r(139668),
    f = r(364111),
    g = r(303952),
    h = r(752053),
    b = r(899766),
    m = r(258939),
    _ = r(81136),
    C = r(953655),
    O = r(548685),
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
        let { handleTransition: r, numVisibleItems: i, isFetchingCategories: s, tab: c, isFullScreen: u } = e,
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
                fetchShopHomeError: k,
                shopBlocks: I,
                refreshShopHome: N
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
            A = l.useCallback(() => {
                N();
            }, [N]);
        if (
            (l.useEffect(() => {
                null != k ||
                    L ||
                    0 === I.length ||
                    (0, g.n)({
                        sessionId: T,
                        checkpoint: g.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: u,
                        unpublishedCategoriesShown: m,
                        cacheDisabled: p
                    });
            }, [k, L, I.length, m, p, T, c, u]),
            null != k)
        )
            return (0, n.jsx)(h.Z, {
                onRetry: A,
                errorOrigin: h.i.SHOP_PAGE,
                errorMessage: k.message
            });
        if (L || 0 === I.length)
            return (0, n.jsxs)('div', {
                className: P.loadingContainer,
                children: [
                    (0, n.jsx)(v.Z, {
                        isLoading: L,
                        handleTransition: r,
                        tab: c
                    }),
                    (0, n.jsx)(C.Z, {
                        isLoading: L,
                        handleTransition: r,
                        categories: []
                    }),
                    (0, n.jsx)(O.Z, {
                        isLoading: L,
                        handleTransition: r,
                        numVisibleItems: i,
                        tab: c
                    })
                ]
            });
        let w = (e, t) => {
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
                        C.Z,
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
                        O.Z,
                        {
                            isLoading: L || s,
                            handleTransition: r,
                            numVisibleItems: i,
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
                    className: o()(P.blockContainer, { [P.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, n.jsx)(n.Fragment, { children: I.map((e, t) => w(e, t)) });
    },
    k = (e) => {
        let { isFullScreen: t, handleTransition: r, tab: i, transitionState: a } = e,
            f = l.useRef(null),
            { handleScroll: g } = (0, c.z)(f, i),
            h = (0, p.R)('CollectiblesFeedShop'),
            b = (0, m.R)(),
            _ = (0, d.sp)(),
            [C, O] = l.useState(x.IV),
            [v, E] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != f.current) {
                    let e = () => {
                            if (null == f.current) return;
                            let e = f.current.getDistanceFromBottom();
                            C >= h ? E(e < 20) : e <= 200 && O((e) => e + x.IV);
                        },
                        t = f.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener('scroll', e),
                        () => {
                            null == t || t.removeEventListener('scroll', e);
                        }
                    );
                }
            }, [f, C, h, O, E]),
            (0, n.jsx)(s.Den, {
                className: P.shopScroll,
                ref: f,
                onScroll: g,
                children: (0, n.jsxs)('div', {
                    className: P.shop,
                    children: [
                        (0, n.jsxs)('div', {
                            className: o()(P.content, P.mainContent),
                            children: [
                                (0, n.jsx)(L, {
                                    handleTransition: r,
                                    numVisibleItems: C,
                                    isFetchingCategories: b,
                                    tab: i,
                                    isFullScreen: t
                                }),
                                i !== x.AW.CATALOG &&
                                    C >= h &&
                                    (0, n.jsxs)('div', {
                                        className: P.endOfFeed,
                                        children: [
                                            (0, n.jsx)(s.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: T.intl.string(T.t.Yr70c3)
                                            }),
                                            (0, n.jsx)(s.zxk, {
                                                variant: 'primary',
                                                text: T.intl.string(T.t.AfrvRE),
                                                onClick: () => {
                                                    (r('shop all button', void 0, !0),
                                                        u.default.track(j.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: null == _ ? void 0 : _.sessionId,
                                                            page_type: i,
                                                            page_category: i === x.AW.HOME || null == _ ? void 0 : _.pageCategory,
                                                            cta_name: 'browse the shop button'
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
                                    (0, n.jsx)(S.Z, {
                                        peaking: v,
                                        transitioning: a === x.f7.OUT
                                    }),
                                    (0, n.jsx)(S.Z, {
                                        style: { left: 1850 },
                                        peaking: v,
                                        transitioning: a === x.f7.OUT
                                    })
                                ]
                            })
                    ]
                })
            })
        );
    };
