(r.d(t, { Z: () => k }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(685816),
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
        let { handleTransition: r, numVisibleItems: i, isFetchingCategories: s, tab: c, isFullScreen: u } = e,
            { noCache: p, includeUnpublished: m } = (0, _.Z)(),
            [S, j] = l.useState(!1),
            L = (0, d.sp)(),
            k = null != (t = null == L ? void 0 : L.sessionId) ? t : '';
        l.useEffect(() => {
            (0, g.n)({
                sessionId: k,
                checkpoint: g.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: u,
                unpublishedCategoriesShown: m,
                cacheDisabled: p
            });
        }, [c]);
        let {
                isFetchingShopHome: I,
                fetchShopHomeError: N,
                shopBlocks: A,
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
                    sessionId: k,
                    tab: c,
                    isFullScreen: u
                }
            ),
            w = l.useCallback(() => {
                B();
            }, [B]);
        if (
            (l.useEffect(() => {
                null != N ||
                    I ||
                    0 === A.length ||
                    (0, g.n)({
                        sessionId: k,
                        checkpoint: g.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: u,
                        unpublishedCategoriesShown: m,
                        cacheDisabled: p
                    });
            }, [N, I, A.length, m, p, k, c, u]),
            null != N)
        )
            return (0, n.jsx)(h.Z, {
                onRetry: w,
                errorOrigin: h.i.SHOP_PAGE,
                errorMessage: N.message
            });
        if (I || 0 === A.length)
            return (0, n.jsxs)('div', {
                className: P.loadingContainer,
                children: [
                    (0, n.jsx)(v.Z, {
                        isLoading: I,
                        handleTransition: r,
                        tab: c
                    }),
                    (0, n.jsx)(O.Z, {
                        isLoading: I,
                        handleTransition: r,
                        categories: []
                    }),
                    (0, n.jsx)(C.Z, {
                        isLoading: I,
                        title: c === x.AW.ORBS ? T.intl.string(T.t.dFgeub) : T.intl.string(T.t.NSv5KS),
                        numVisibleItems: i,
                        hasSorting: c === x.AW.HOME,
                        tab: c
                    })
                ]
            });
        let R = (e, t) => {
            if (null == e) return null;
            let l = null;
            switch (e.type) {
                case o.z.HERO:
                    l = (0, n.jsx)(
                        v.Z,
                        {
                            isLoading: I,
                            handleTransition: r,
                            heroBlock: e,
                            tab: c,
                            onVisibilityChange: j
                        },
                        t
                    );
                    break;
                case o.z.FEATURED:
                    l = (0, n.jsx)(
                        O.Z,
                        {
                            isLoading: I,
                            handleTransition: r,
                            featuredBlockRecord: e
                        },
                        t
                    );
                    break;
                case o.z.FEED:
                    let d = e.sortedSkuIds;
                    l = (0, n.jsx)(
                        C.Z,
                        {
                            title: c === x.AW.ORBS ? T.intl.string(T.t.dFgeub) : T.intl.string(T.t.NSv5KS),
                            isLoading: I || s,
                            numVisibleItems: i,
                            sortedSkuIds: d,
                            hasSorting: c === x.AW.HOME,
                            tab: c
                        },
                        t
                    );
                    break;
                case o.z.WIDE_BANNER:
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
                case o.z.SHELF:
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
                case o.z.COUNTDOWN_TIMER:
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
                    className: a()(P.blockContainer, { [P.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, n.jsx)(n.Fragment, { children: A.map((e, t) => R(e, t)) });
    },
    k = (e) => {
        let { isFullScreen: t, handleTransition: r, tab: i, transitionState: o } = e,
            f = l.useRef(null),
            { handleScroll: g } = (0, c.z)(f, i),
            h = (0, p.R)('CollectiblesFeedShop'),
            b = (0, m.R)(),
            _ = (0, d.sp)(),
            [O, C] = l.useState(x.IV),
            [v, E] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != f.current) {
                    let e = () => {
                            if (null == f.current) return;
                            let e = f.current.getDistanceFromBottom();
                            O >= h ? E(e < 20) : e <= 200 && C((e) => e + x.IV);
                        },
                        t = f.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener('scroll', e),
                        () => {
                            null == t || t.removeEventListener('scroll', e);
                        }
                    );
                }
            }, [f, O, h, C, E]),
            (0, n.jsx)(s.Den, {
                className: P.shopScroll,
                ref: f,
                onScroll: g,
                children: (0, n.jsxs)('div', {
                    className: P.shop,
                    children: [
                        (0, n.jsxs)('div', {
                            className: a()(P.content, P.mainContent),
                            children: [
                                (0, n.jsx)(L, {
                                    handleTransition: r,
                                    numVisibleItems: O,
                                    isFetchingCategories: b,
                                    tab: i,
                                    isFullScreen: t
                                }),
                                i !== x.AW.CATALOG &&
                                    O >= h &&
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
                                        transitioning: o === x.f7.OUT
                                    }),
                                    (0, n.jsx)(S.Z, {
                                        style: { left: 1850 },
                                        peaking: v,
                                        transitioning: o === x.f7.OUT
                                    })
                                ]
                            })
                    ]
                })
            })
        );
    };
