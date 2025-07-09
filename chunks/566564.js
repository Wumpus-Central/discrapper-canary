(n.d(t, { Z: () => L }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(685816),
    s = n(755721),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    p = n(139668),
    g = n(364111),
    f = n(303952),
    h = n(752053),
    b = n(258939),
    m = n(81136),
    _ = n(953655),
    C = n(548685),
    O = n(580914),
    v = n(963278),
    E = n(921120),
    S = n(384067),
    x = n(215023),
    y = n(981631),
    j = n(388032),
    T = n(806734);
let P = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: o, isFetchingCategories: s, tab: c, isFullScreen: u } = e,
            { noCache: p, includeUnpublished: b } = (0, m.Z)(),
            E = (0, d.sp)(),
            x = null != (t = null == E ? void 0 : E.sessionId) ? t : '';
        l.useEffect(() => {
            (0, f.n)({
                sessionId: x,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: u,
                unpublishedCategoriesShown: b,
                cacheDisabled: p
            });
        }, [c]);
        let {
                isFetchingShopHome: y,
                fetchShopHomeError: j,
                shopBlocks: P,
                refreshShopHome: L
            } = (0, g.E)(
                c,
                {
                    noCache: p,
                    includeUnpublished: b,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: x,
                    tab: c,
                    isFullScreen: u
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
                        isFullScreen: u,
                        unpublishedCategoriesShown: b,
                        cacheDisabled: p
                    });
            }, [j, y, P.length, b, p, x, c, u]),
            null != j)
        )
            return (0, r.jsx)(h.Z, {
                onRetry: I,
                errorOrigin: h.i.SHOP_PAGE,
                errorMessage: j.message
            });
        if (y || 0 === P.length)
            return (0, r.jsxs)('div', {
                className: T.loadingContainer,
                children: [
                    (0, r.jsx)(O.Z, {
                        isLoading: y,
                        handleTransition: n,
                        tab: c
                    }),
                    (0, r.jsx)(_.Z, {
                        isLoading: y,
                        handleTransition: n,
                        categories: []
                    }),
                    (0, r.jsx)(C.Z, {
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
                case i.z.HERO:
                    l = (0, r.jsx)(
                        O.Z,
                        {
                            isLoading: y,
                            handleTransition: n,
                            heroBlock: e,
                            tab: c
                        },
                        t
                    );
                    break;
                case i.z.FEATURED:
                    l = (0, r.jsx)(
                        _.Z,
                        {
                            isLoading: y,
                            handleTransition: n,
                            featuredBlockRecord: e
                        },
                        t
                    );
                    break;
                case i.z.FEED:
                    let u = e.sortedSkuIds;
                    l = (0, r.jsx)(
                        C.Z,
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
                case i.z.WIDE_BANNER:
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
                case i.z.SHELF:
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
                    className: a()(T.blockContainer, { [T.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: P.map((e, t) => k(e, t)) });
    },
    L = (e) => {
        let { isFullScreen: t, scrollerRef: n, handleTransition: o, tab: i, transitionState: g } = e,
            f = (0, p.R)('CollectiblesFeedShop'),
            h = (0, b.R)(),
            m = (0, d.sp)(),
            [_, C] = l.useState(x.IV),
            [O, v] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            _ >= f ? v(e < 20) : e <= 200 && C((e) => e + x.IV);
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
                className: T.shop,
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(T.content, T.mainContent),
                        children: [
                            (0, r.jsx)(P, {
                                handleTransition: o,
                                numVisibleItems: _,
                                isFetchingCategories: h,
                                tab: i,
                                isFullScreen: t
                            }),
                            i !== x.AW.CATALOG &&
                                _ >= f &&
                                (0, r.jsxs)('div', {
                                    className: T.endOfFeed,
                                    children: [
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-md/semibold',
                                            children: j.intl.string(j.t.Yr70c3)
                                        }),
                                        (0, r.jsx)(s.zx, {
                                            className: T.endOfFeedButton,
                                            onClick: () => {
                                                (o('shop all button', void 0, !0),
                                                    u.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == m ? void 0 : m.sessionId,
                                                        page_type: i,
                                                        page_category: i === x.AW.HOME || null == m ? void 0 : m.pageCategory,
                                                        cta_name: 'shop the whole shop button'
                                                    }));
                                            },
                                            children: (0, r.jsx)(c.Text, {
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
                                (0, r.jsx)(E.Z, {
                                    peaking: O,
                                    transitioning: g === x.f7.OUT
                                }),
                                (0, r.jsx)(E.Z, {
                                    style: { left: 1850 },
                                    peaking: O,
                                    transitioning: g === x.f7.OUT
                                })
                            ]
                        })
                ]
            })
        );
    };
