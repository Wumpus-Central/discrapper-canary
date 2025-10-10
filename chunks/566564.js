n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    l = n(647438),
    s = n(120356),
    a = n.n(s),
    i = n(685816),
    o = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    g = n(501678),
    p = n(364111),
    f = n(303952),
    C = n(752053),
    h = n(258939),
    _ = n(81136),
    m = n(302933),
    b = n(953655),
    E = n(548685),
    S = n(580914),
    v = n(92589),
    x = n(963278),
    O = n(531864),
    y = n(384067),
    T = n(215023),
    L = n(981631),
    j = n(388032),
    k = n(310582);
let I = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: s, isFetchingCategories: o, tab: c, isFullScreen: u } = e,
            { noCache: h, includeUnpublished: O } = (0, _.Z)(),
            [L, I] = l.useState(!1),
            P = (0, d.sp)(),
            N = null != (t = null == P ? void 0 : P.sessionId) ? t : "";
        l.useEffect(() => {
            (0, f.n)({
                sessionId: N,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                isFullScreen: u,
                unpublishedCategoriesShown: O,
                cacheDisabled: h,
            });
        }, [c]);
        let {
                isFetchingShopHome: B,
                fetchShopHomeError: A,
                shopBlocks: R,
                refreshShopHome: Z,
            } = (0, p.E)(
                c,
                {
                    noCache: h,
                    includeUnpublished: O,
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
                B ||
                0 === R.length ||
                (0, f.n)({
                    sessionId: N,
                    checkpoint: f.a.SHOP_RENDERED,
                    tab: c,
                    isFullScreen: u,
                    unpublishedCategoriesShown: O,
                    cacheDisabled: h,
                });
        }, [A, B, R.length, O, h, N, c, u]),
        null != A)
            ? (0, r.jsx)(C.Z, {
                  onRetry: w,
                  errorOrigin: C.i.SHOP_PAGE,
                  errorMessage: A.message,
              })
            : B || 0 === R.length
              ? (0, r.jsxs)("div", {
                    className: a()(k.loadingContainer, k.feedContent),
                    children: [
                        (0, r.jsx)(S.Z, {
                            isLoading: B,
                            handleTransition: n,
                            tab: c,
                        }),
                        (0, r.jsx)(b.Z, {
                            isLoading: B,
                            handleTransition: n,
                            categories: [],
                        }),
                        (0, r.jsx)(E.Z, {
                            isLoading: B,
                            title: c === T.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS),
                            numVisibleItems: s,
                            hasSorting: c === T.AW.HOME,
                            tab: c,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: R.map((e, t) =>
                        ((e, t, l) => {
                            if (null == e) return null;
                            let d = null,
                                p = !1;
                            switch (e.type) {
                                case i.z.HERO:
                                    d = (0, r.jsx)(
                                        S.Z,
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
                                        b.Z,
                                        {
                                            isLoading: B,
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
                                            isLoading: B || o,
                                            numVisibleItems: s,
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
                                        x.Z,
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
                                        m.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: L,
                                            isFullScreen: u,
                                        },
                                        l,
                                    )),
                                        (p = !0);
                                    break;
                                case i.z.IMMERSIVE_BANNER:
                                    d = (0, r.jsx)(
                                        v.Z,
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
                                        className: a()(k.blockContainer, k.feedContent, {
                                            [k.skipPadding]: 0 === l || p,
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
    P = (e) => {
        let { isFullScreen: t, handleTransition: n, tab: s, transitionState: a } = e,
            i = l.useRef(null),
            { handleScroll: g } = (0, c.z)(i, s),
            p = (0, h.R)(),
            f = (0, d.sp)(),
            [C, _] = l.useState(T.IV),
            [m, b] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != i.current) {
                    let e = () => {
                            if (null == i.current) return;
                            let e = i.current.getDistanceFromBottom();
                            C >= 36 ? b(e < 20) : e <= 200 && _((e) => e + T.IV);
                        },
                        t = i.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [i, C, _, b]),
            (0, r.jsx)(o.Den, {
                className: k.shopScroll,
                ref: i,
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
                                    isFetchingCategories: p,
                                    tab: s,
                                    isFullScreen: t,
                                }),
                                s !== T.AW.CATALOG &&
                                    C >= 36 &&
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
                                                                null == f ? void 0 : f.sessionId,
                                                            page_type: s,
                                                            page_category:
                                                                s === T.AW.HOME || null == f ? void 0 : f.pageCategory,
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
                                    (0, r.jsx)(O.Z, {
                                        peaking: m,
                                        transitioning: a === T.f7.OUT,
                                    }),
                                    (0, r.jsx)(O.Z, {
                                        style: { left: 1850 },
                                        peaking: m,
                                        transitioning: a === T.f7.OUT,
                                    }),
                                ],
                            }),
                    ],
                }),
            })
        );
    };
