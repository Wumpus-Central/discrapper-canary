n.d(t, { Z: () => B }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(685816),
    a = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    g = n(501678),
    f = n(364111),
    p = n(303952),
    C = n(752053),
    h = n(258939),
    _ = n(81136),
    m = n(302933),
    b = n(953655),
    E = n(548685),
    v = n(580914),
    S = n(92589),
    O = n(963278),
    x = n(531864),
    y = n(384067),
    T = n(215023),
    j = n(981631),
    L = n(388032),
    k = n(310582);
let I = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: i, isFetchingCategories: a, tab: c, isFullScreen: u } = e,
            { noCache: h, includeUnpublished: x } = (0, _.Z)(),
            [j, I] = l.useState(!1),
            B = (0, d.sp)(),
            N = null != (t = null == B ? void 0 : B.sessionId) ? t : "";
        l.useEffect(() => {
            (0, p.n)({
                sessionId: N,
                checkpoint: p.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: u,
                unpublishedCategoriesShown: x,
                cacheDisabled: h,
            });
        }, [c]);
        let {
                isFetchingShopHome: P,
                fetchShopHomeError: A,
                shopBlocks: R,
                refreshShopHome: Z,
            } = (0, f.E)(
                c,
                {
                    noCache: h,
                    includeUnpublished: x,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: N,
                    tab: c,
                    isFullScreen: u,
                },
            ),
            w = l.useCallback(() => {
                Z();
            }, [Z]);
        return (l.useEffect(() => {
            null != A ||
                P ||
                0 === R.length ||
                (0, p.n)({
                    sessionId: N,
                    checkpoint: p.a.SHOP_RENDERED,
                    tab: c,
                    isFullScreen: u,
                    unpublishedCategoriesShown: x,
                    cacheDisabled: h,
                });
        }, [A, P, R.length, x, h, N, c, u]),
        null != A)
            ? (0, r.jsx)(C.Z, {
                  onRetry: w,
                  errorOrigin: C.i.SHOP_PAGE,
                  errorMessage: A.message,
              })
            : P || 0 === R.length
              ? (0, r.jsxs)("div", {
                    className: s()(k.loadingContainer, k.feedContent),
                    children: [
                        (0, r.jsx)(v.Z, {
                            isLoading: P,
                            handleTransition: n,
                            tab: c,
                        }),
                        (0, r.jsx)(b.Z, {
                            isLoading: P,
                            handleTransition: n,
                            categories: [],
                        }),
                        (0, r.jsx)(E.Z, {
                            isLoading: P,
                            title: c === T.AW.ORBS ? L.intl.string(L.t.dFgeub) : L.intl.string(L.t.NSv5KS),
                            numVisibleItems: i,
                            tab: c,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: R.map((e, t) =>
                        ((e, t, l) => {
                            if (null == e) return null;
                            let d = null,
                                f = !1;
                            switch (e.type) {
                                case o.z.HERO:
                                    d = (0, r.jsx)(
                                        v.Z,
                                        {
                                            isLoading: P,
                                            handleTransition: n,
                                            heroBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case o.z.FEATURED:
                                    d = (0, r.jsx)(
                                        b.Z,
                                        {
                                            isLoading: P,
                                            handleTransition: n,
                                            featuredBlockRecord: e,
                                        },
                                        l,
                                    );
                                    break;
                                case o.z.FEED:
                                    let p = e.sortedSkuIds;
                                    d = (0, r.jsx)(
                                        E.Z,
                                        {
                                            title:
                                                c === T.AW.ORBS ? L.intl.string(L.t.dFgeub) : L.intl.string(L.t.NSv5KS),
                                            isLoading: P || a,
                                            numVisibleItems: i,
                                            sortedSkuIds: p,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === o.z.IMMERSIVE_BANNER
                                                    ? k.feedblockInteractiveBackground
                                                    : void 0,
                                            prioritizeUserDiscounts: c === T.AW.HOME,
                                            tab: c,
                                            orbsSupportedOnly: c === T.AW.ORBS,
                                        },
                                        l,
                                    );
                                    break;
                                case o.z.WIDE_BANNER:
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
                                case o.z.SHELF:
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
                                case o.z.COUNTDOWN_TIMER:
                                    (d = (0, r.jsx)(
                                        m.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: j,
                                            isFullScreen: u,
                                        },
                                        l,
                                    )),
                                        (f = !0);
                                    break;
                                case o.z.IMMERSIVE_BANNER:
                                    d = (0, r.jsx)(
                                        S.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => I(!e),
                                        },
                                        l,
                                    );
                                    break;
                                default:
                                    return null;
                            }
                            return (0, r.jsx)(g.g6, {
                                blockType: e.type,
                                children: (0, r.jsx)(
                                    "div",
                                    {
                                        className: s()(k.blockContainer, k.feedContent, {
                                            [k.skipPadding]: 0 === l || f,
                                        }),
                                        children: d,
                                    },
                                    l,
                                ),
                            });
                        })(e, t > 0 ? R[t - 1] : null, t),
                    ),
                });
    },
    B = (e) => {
        let { isFullScreen: t, handleTransition: n, tab: i, transitionState: s } = e,
            o = l.useRef(null),
            { handleScroll: g } = (0, c.z)(o, i),
            f = (0, h.R)(),
            p = (0, d.sp)(),
            [C, _] = l.useState(T.IV),
            [m, b] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != o.current) {
                    let e = () => {
                            if (null == o.current) return;
                            let e = o.current.getDistanceFromBottom();
                            C >= 36 ? b(e < 20) : e <= 200 && _((e) => e + T.IV);
                        },
                        t = o.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [o, C, _, b]),
            (0, r.jsx)(a.Den, {
                className: k.shopScroll,
                ref: o,
                onScroll: g,
                children: (0, r.jsxs)("div", {
                    className: k.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: k.mainContent,
                            children: [
                                (0, r.jsx)(I, {
                                    handleTransition: n,
                                    numVisibleItems: C,
                                    isFetchingCategories: f,
                                    tab: i,
                                    isFullScreen: t,
                                }),
                                i !== T.AW.CATALOG &&
                                    C >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: k.endOfFeed,
                                        children: [
                                            (0, r.jsx)(a.Heading, {
                                                variant: "heading-md/semibold",
                                                children: L.intl.string(L.t.Yr70c3),
                                            }),
                                            (0, r.jsx)(a.Button, {
                                                variant: "primary",
                                                text: L.intl.string(L.t.AfrvRE),
                                                onClick: () => {
                                                    n("shop all button", void 0, !0),
                                                        u.default.track(j.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == p ? void 0 : p.sessionId,
                                                            page_type: i,
                                                            page_category:
                                                                i === T.AW.HOME || null == p ? void 0 : p.pageCategory,
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
                                        peaking: m,
                                        transitioning: s === T.f7.OUT,
                                    }),
                                    (0, r.jsx)(x.Z, {
                                        style: { left: 1850 },
                                        peaking: m,
                                        transitioning: s === T.f7.OUT,
                                    }),
                                ],
                            }),
                    ],
                }),
            })
        );
    };
