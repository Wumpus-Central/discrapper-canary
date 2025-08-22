n.d(t, { Z: () => B }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(685816),
    o = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    g = n(139668),
    f = n(364111),
    p = n(303952),
    m = n(752053),
    _ = n(258939),
    h = n(81136),
    b = n(302933),
    C = n(953655),
    E = n(548685),
    S = n(580914),
    O = n(92589),
    v = n(963278),
    x = n(531864),
    y = n(384067),
    T = n(215023),
    L = n(981631),
    j = n(388032),
    k = n(310582);
let I = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: a, isFetchingCategories: o, tab: c, isFullScreen: u } = e,
            { noCache: g, includeUnpublished: _ } = (0, h.Z)(),
            [x, L] = l.useState(!1),
            I = (0, d.sp)(),
            B = null != (t = null == I ? void 0 : I.sessionId) ? t : "";
        l.useEffect(() => {
            (0, p.n)({
                sessionId: B,
                checkpoint: p.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: u,
                unpublishedCategoriesShown: _,
                cacheDisabled: g,
            });
        }, [c]);
        let {
                isFetchingShopHome: N,
                fetchShopHomeError: P,
                shopBlocks: A,
                refreshShopHome: R,
            } = (0, f.E)(
                c,
                {
                    noCache: g,
                    includeUnpublished: _,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: B,
                    tab: c,
                    isFullScreen: u,
                },
            ),
            Z = l.useCallback(() => {
                R();
            }, [R]);
        return (l.useEffect(() => {
            null != P ||
                N ||
                0 === A.length ||
                (0, p.n)({
                    sessionId: B,
                    checkpoint: p.a.SHOP_RENDERED,
                    tab: c,
                    isFullScreen: u,
                    unpublishedCategoriesShown: _,
                    cacheDisabled: g,
                });
        }, [P, N, A.length, _, g, B, c, u]),
        null != P)
            ? (0, r.jsx)(m.Z, {
                  onRetry: Z,
                  errorOrigin: m.i.SHOP_PAGE,
                  errorMessage: P.message,
              })
            : N || 0 === A.length
              ? (0, r.jsxs)("div", {
                    className: s()(k.loadingContainer, k.feedContent),
                    children: [
                        (0, r.jsx)(S.Z, {
                            isLoading: N,
                            handleTransition: n,
                            tab: c,
                        }),
                        (0, r.jsx)(C.Z, {
                            isLoading: N,
                            handleTransition: n,
                            categories: [],
                        }),
                        (0, r.jsx)(E.Z, {
                            isLoading: N,
                            title: c === T.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS),
                            numVisibleItems: a,
                            hasSorting: c === T.AW.HOME,
                            tab: c,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: A.map((e, t) =>
                        ((e, t, l) => {
                            if (null == e) return null;
                            let d = null,
                                g = !1;
                            switch (e.type) {
                                case i.z.HERO:
                                    d = (0, r.jsx)(
                                        S.Z,
                                        {
                                            isLoading: N,
                                            handleTransition: n,
                                            heroBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case i.z.FEATURED:
                                    d = (0, r.jsx)(
                                        C.Z,
                                        {
                                            isLoading: N,
                                            handleTransition: n,
                                            featuredBlockRecord: e,
                                        },
                                        l,
                                    );
                                    break;
                                case i.z.FEED:
                                    let f = e.sortedSkuIds;
                                    d = (0, r.jsx)(
                                        E.Z,
                                        {
                                            title:
                                                c === T.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS),
                                            isLoading: N || o,
                                            numVisibleItems: a,
                                            sortedSkuIds: f,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === i.z.IMMERSIVE_BANNER
                                                    ? k.feedblockInteractiveBackground
                                                    : void 0,
                                            hasSorting: c === T.AW.HOME,
                                            prioritizeUserDiscounts: c === T.AW.HOME,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case i.z.WIDE_BANNER:
                                    d = (0, r.jsx)(
                                        y.Z,
                                        {
                                            handleTransition: n,
                                            wideBannerBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case i.z.SHELF:
                                    d = (0, r.jsx)(
                                        v.Z,
                                        {
                                            handleTransition: n,
                                            shelf: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case i.z.COUNTDOWN_TIMER:
                                    (d = (0, r.jsx)(
                                        b.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: x,
                                            isFullScreen: u,
                                        },
                                        l,
                                    )),
                                        (g = !0);
                                    break;
                                case i.z.IMMERSIVE_BANNER:
                                    d = (0, r.jsx)(
                                        O.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => L(!e),
                                        },
                                        l,
                                    );
                                    break;
                                default:
                                    return null;
                            }
                            return (0, r.jsx)(
                                "div",
                                {
                                    className: s()(k.blockContainer, k.feedContent, { [k.skipPadding]: 0 === l || g }),
                                    children: d,
                                },
                                l,
                            );
                        })(e, t > 0 ? A[t - 1] : null, t),
                    ),
                });
    },
    B = (e) => {
        let { isFullScreen: t, handleTransition: n, tab: a, transitionState: s } = e,
            i = l.useRef(null),
            { handleScroll: f } = (0, c.z)(i, a),
            p = (0, g.R)("CollectiblesFeedShop"),
            m = (0, _.R)(),
            h = (0, d.sp)(),
            [b, C] = l.useState(T.IV),
            [E, S] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != i.current) {
                    let e = () => {
                            if (null == i.current) return;
                            let e = i.current.getDistanceFromBottom();
                            b >= p ? S(e < 20) : e <= 200 && C((e) => e + T.IV);
                        },
                        t = i.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [i, b, p, C, S]),
            (0, r.jsx)(o.Den, {
                className: k.shopScroll,
                ref: i,
                onScroll: f,
                children: (0, r.jsxs)("div", {
                    className: k.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: k.mainContent,
                            children: [
                                (0, r.jsx)(I, {
                                    handleTransition: n,
                                    numVisibleItems: b,
                                    isFetchingCategories: m,
                                    tab: a,
                                    isFullScreen: t,
                                }),
                                a !== T.AW.CATALOG &&
                                    b >= p &&
                                    (0, r.jsxs)("div", {
                                        className: k.endOfFeed,
                                        children: [
                                            (0, r.jsx)(o.X6q, {
                                                variant: "heading-md/semibold",
                                                children: j.intl.string(j.t.Yr70c3),
                                            }),
                                            (0, r.jsx)(o.zxk, {
                                                variant: "primary",
                                                text: j.intl.string(j.t.AfrvRE),
                                                onClick: () => {
                                                    n("shop all button", void 0, !0),
                                                        u.default.track(L.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == h ? void 0 : h.sessionId,
                                                            page_type: a,
                                                            page_category:
                                                                a === T.AW.HOME || null == h ? void 0 : h.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        !t &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(x.Z, {
                                        peaking: E,
                                        transitioning: s === T.f7.OUT,
                                    }),
                                    (0, r.jsx)(x.Z, {
                                        style: { left: 1850 },
                                        peaking: E,
                                        transitioning: s === T.f7.OUT,
                                    }),
                                ],
                            }),
                    ],
                }),
            })
        );
    };
