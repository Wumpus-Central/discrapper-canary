n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(685816),
    o = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    g = n(364111),
    p = n(303952),
    f = n(752053),
    m = n(258939),
    _ = n(81136),
    h = n(302933),
    C = n(953655),
    b = n(548685),
    E = n(580914),
    S = n(92589),
    O = n(963278),
    v = n(531864),
    x = n(384067),
    y = n(215023),
    T = n(981631),
    L = n(388032),
    j = n(310582);
let k = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: a, isFetchingCategories: o, tab: c, isFullScreen: u } = e,
            { noCache: m, includeUnpublished: v } = (0, _.Z)(),
            [T, k] = l.useState(!1),
            I = (0, d.sp)(),
            N = null != (t = null == I ? void 0 : I.sessionId) ? t : "";
        l.useEffect(() => {
            (0, p.n)({
                sessionId: N,
                checkpoint: p.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: u,
                unpublishedCategoriesShown: v,
                cacheDisabled: m,
            });
        }, [c]);
        let {
                isFetchingShopHome: B,
                fetchShopHomeError: P,
                shopBlocks: A,
                refreshShopHome: R,
            } = (0, g.E)(
                c,
                {
                    noCache: m,
                    includeUnpublished: v,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: N,
                    tab: c,
                    isFullScreen: u,
                },
            ),
            Z = l.useCallback(() => {
                R();
            }, [R]);
        return (l.useEffect(() => {
            null != P ||
                B ||
                0 === A.length ||
                (0, p.n)({
                    sessionId: N,
                    checkpoint: p.a.SHOP_RENDERED,
                    tab: c,
                    isFullScreen: u,
                    unpublishedCategoriesShown: v,
                    cacheDisabled: m,
                });
        }, [P, B, A.length, v, m, N, c, u]),
        null != P)
            ? (0, r.jsx)(f.Z, {
                  onRetry: Z,
                  errorOrigin: f.i.SHOP_PAGE,
                  errorMessage: P.message,
              })
            : B || 0 === A.length
              ? (0, r.jsxs)("div", {
                    className: s()(j.loadingContainer, j.feedContent),
                    children: [
                        (0, r.jsx)(E.Z, {
                            isLoading: B,
                            handleTransition: n,
                            tab: c,
                        }),
                        (0, r.jsx)(C.Z, {
                            isLoading: B,
                            handleTransition: n,
                            categories: [],
                        }),
                        (0, r.jsx)(b.Z, {
                            isLoading: B,
                            title: c === y.AW.ORBS ? L.intl.string(L.t.dFgeub) : L.intl.string(L.t.NSv5KS),
                            numVisibleItems: a,
                            hasSorting: c === y.AW.HOME,
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
                                        E.Z,
                                        {
                                            isLoading: B,
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
                                            isLoading: B,
                                            handleTransition: n,
                                            featuredBlockRecord: e,
                                        },
                                        l,
                                    );
                                    break;
                                case i.z.FEED:
                                    let p = e.sortedSkuIds;
                                    d = (0, r.jsx)(
                                        b.Z,
                                        {
                                            title:
                                                c === y.AW.ORBS ? L.intl.string(L.t.dFgeub) : L.intl.string(L.t.NSv5KS),
                                            isLoading: B || o,
                                            numVisibleItems: a,
                                            sortedSkuIds: p,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === i.z.IMMERSIVE_BANNER
                                                    ? j.feedblockInteractiveBackground
                                                    : void 0,
                                            hasSorting: c === y.AW.HOME,
                                            prioritizeUserDiscounts: c === y.AW.HOME,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case i.z.WIDE_BANNER:
                                    d = (0, r.jsx)(
                                        x.Z,
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
                                        O.Z,
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
                                        h.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: T,
                                            isFullScreen: u,
                                        },
                                        l,
                                    )),
                                        (g = !0);
                                    break;
                                case i.z.IMMERSIVE_BANNER:
                                    d = (0, r.jsx)(
                                        S.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => k(!e),
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
                                    className: s()(j.blockContainer, j.feedContent, { [j.skipPadding]: 0 === l || g }),
                                    children: d,
                                },
                                l,
                            );
                        })(e, t > 0 ? A[t - 1] : null, t),
                    ),
                });
    },
    I = (e) => {
        let { isFullScreen: t, handleTransition: n, tab: a, transitionState: s } = e,
            i = l.useRef(null),
            { handleScroll: g } = (0, c.z)(i, a),
            p = (0, m.R)(),
            f = (0, d.sp)(),
            [_, h] = l.useState(y.IV),
            [C, b] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != i.current) {
                    let e = () => {
                            if (null == i.current) return;
                            let e = i.current.getDistanceFromBottom();
                            _ >= 36 ? b(e < 20) : e <= 200 && h((e) => e + y.IV);
                        },
                        t = i.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [i, _, h, b]),
            (0, r.jsx)(o.Den, {
                className: j.shopScroll,
                ref: i,
                onScroll: g,
                children: (0, r.jsxs)("div", {
                    className: j.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: j.mainContent,
                            children: [
                                (0, r.jsx)(k, {
                                    handleTransition: n,
                                    numVisibleItems: _,
                                    isFetchingCategories: p,
                                    tab: a,
                                    isFullScreen: t,
                                }),
                                a !== y.AW.CATALOG &&
                                    _ >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: j.endOfFeed,
                                        children: [
                                            (0, r.jsx)(o.X6q, {
                                                variant: "heading-md/semibold",
                                                children: L.intl.string(L.t.Yr70c3),
                                            }),
                                            (0, r.jsx)(o.zxk, {
                                                variant: "primary",
                                                text: L.intl.string(L.t.AfrvRE),
                                                onClick: () => {
                                                    n("shop all button", void 0, !0),
                                                        u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == f ? void 0 : f.sessionId,
                                                            page_type: a,
                                                            page_category:
                                                                a === y.AW.HOME || null == f ? void 0 : f.pageCategory,
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
                                    (0, r.jsx)(v.Z, {
                                        peaking: C,
                                        transitioning: s === y.f7.OUT,
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        style: { left: 1850 },
                                        peaking: C,
                                        transitioning: s === y.f7.OUT,
                                    }),
                                ],
                            }),
                    ],
                }),
            })
        );
    };
