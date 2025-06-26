n.d(t, { Z: () => P }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    i = n(685816),
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
    x = n(384067),
    S = n(215023),
    E = n(981631),
    y = n(388032),
    j = n(806734);
let k = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: a, isFetchingCategories: s, tab: c, isFullScreen: d } = e,
            { noCache: g, includeUnpublished: O } = (0, h.Z)(),
            S = (0, u.sp)(),
            E = null != (t = null == S ? void 0 : S.sessionId) ? t : '';
        l.useEffect(() => {
            (0, f.n)({
                sessionId: E,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: d,
                unpublishedCategoriesShown: O,
                cacheDisabled: g
            });
        }, [c]);
        let {
                isFetchingShopHome: y,
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
                    sessionId: E,
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
                    y ||
                    0 === P.length ||
                    (0, f.n)({
                        sessionId: E,
                        checkpoint: f.a.SHOP_RENDERED,
                        tab: c,
                        isFullScreen: d,
                        unpublishedCategoriesShown: O,
                        cacheDisabled: g
                    });
            }, [k, y, P.length, O, g, E, c, d]),
            null != k)
        )
            return (0, r.jsx)(b.Z, {
                onRetry: I,
                errorOrigin: b.i.SHOP_PAGE,
                errorMessage: k.message
            });
        if (y || 0 === P.length)
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
        let L = (e, t) => {
            if (null == e) return null;
            let l = null;
            switch (e.type) {
                case i.z.HERO:
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
                case i.z.FEATURED:
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
                case i.z.FEED:
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
                case i.z.WIDE_BANNER:
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
                    className: o()(j.blockContainer, { [j.topBlockContainer]: 0 === t }),
                    children: l
                },
                t
            );
        };
        return (0, r.jsx)(r.Fragment, { children: P.map((e, t) => L(e, t)) });
    },
    P = (e) => {
        let { isFullScreen: t, scrollerRef: n, handleTransition: a, tab: i, transitionState: p } = e,
            f = (0, d.R)('CollectiblesFeedShop'),
            b = (0, g.R)(),
            h = (0, u.sp)(),
            [m, _] = l.useState(S.IV),
            [C, v] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != n.current) {
                    let e = () => {
                            if (null == n.current) return;
                            let e = n.current.getDistanceFromBottom();
                            m >= f ? v(e < 20) : e <= 200 && _((e) => e + S.IV);
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
                        className: o()(j.content, j.mainContent),
                        children: [
                            (0, r.jsx)(k, {
                                handleTransition: a,
                                numVisibleItems: m,
                                isFetchingCategories: b,
                                tab: i,
                                isFullScreen: t
                            }),
                            i !== S.AW.CATALOG &&
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
                                                        collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                                                        page_type: i,
                                                        page_category: i === S.AW.HOME || null == h ? void 0 : h.pageCategory,
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
                                    transitioning: p === S.f7.OUT
                                }),
                                (0, r.jsx)(O.Z, {
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
