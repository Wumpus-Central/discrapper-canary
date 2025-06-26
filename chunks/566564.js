n.d(t, { Z: () => P }), n(388685);
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
    b = n(752053),
    g = n(258939),
    h = n(81136),
    m = n(953655),
    _ = n(548685),
    C = n(580914),
    v = n(963278),
    O = n(921120),
    E = n(384067),
    x = n(215023),
    S = n(981631),
    j = n(388032),
    y = n(806734);
let k = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: a, isFetchingCategories: s, tab: c, isFullScreen: d } = e,
            { noCache: g, includeUnpublished: O } = (0, h.Z)(),
            x = (0, u.sp)(),
            S = null != (t = null == x ? void 0 : x.sessionId) ? t : '';
        l.useEffect(() => {
            (0, f.n)({
                sessionId: S,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: d,
                unpublishedCategoriesShown: O,
                cacheDisabled: g
            });
        }, [c]);
        let {
                isFetchingShopHome: j,
                fetchShopHomeError: k,
                shopBlocks: P,
                refreshShopHome: T
            } = (0, p.E)(
                c,
                {
                    noCache: g,
                    includeUnpublished: O,
                    includeBundles: !0,
                    logPerf: !0
                },
                {
                    sessionId: S,
                    tab: c,
                    isFullScreen: d
                }
            ),
            I = l.useCallback(() => {
                T();
            }, [T]);
        if (
            (l.useEffect(() => {
                null != k ||
                    j ||
                    0 === P.length ||
                    (0, f.n)({
                        sessionId: S,
                        checkpoint: f.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: d,
                        unpublishedCategoriesShown: O,
                        cacheDisabled: g
                    });
            }, [k, j, P.length, O, g, S, c, d]),
            null != k)
        )
            return (0, r.jsx)(b.Z, {
                onRetry: I,
                errorOrigin: b.i.SHOP_PAGE,
                errorMessage: k.message
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
                        numVisibleItems: a,
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
                            numVisibleItems: a,
                            sortedSkuIds: u,
                            tab: c
                        },
                        t
                    );
                    break;
                case o.z.WIDE_BANNER:
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
                    className: i()(y.blockContainer, { [y.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: P.map((e, t) => L(e, t)) });
    },
    P = (e) => {
        let { isFullScreen: t, scrollerRef: n, handleTransition: a, tab: o, transitionState: p } = e,
            f = (0, d.R)('CollectiblesFeedShop'),
            b = (0, g.R)(),
            h = (0, u.sp)(),
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
                className: y.shop,
                children: [
                    (0, r.jsxs)('div', {
                        className: i()(y.content, y.mainContent),
                        children: [
                            (0, r.jsx)(k, {
                                handleTransition: a,
                                numVisibleItems: m,
                                isFetchingCategories: b,
                                tab: o,
                                isFullScreen: t
                            }),
                            o !== x.AW.CATALOG &&
                                m >= f &&
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
                                                a('shop all button', void 0, !0),
                                                    c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                                                        page_type: o,
                                                        page_category: o === x.AW.HOME || null == h ? void 0 : h.pageCategory,
                                                        cta_name: 'shop the whole shop button'
                                                    });
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
