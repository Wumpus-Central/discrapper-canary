n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(685816),
    o = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    g = n(501678),
    p = n(364111),
    f = n(303952),
    h = n(752053),
    C = n(258939),
    _ = n(81136),
    m = n(302933),
    b = n(953655),
    E = n(548685),
    S = n(580914),
    v = n(92589),
    x = n(963278),
    O = n(531864),
    T = n(384067),
    y = n(215023),
    L = n(981631),
    j = n(388032),
    k = n(310582);
let I = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: i, isFetchingCategories: o, tab: c, isFullScreen: u } = e,
            { noCache: C, includeUnpublished: O } = (0, _.Z)(),
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
                cacheDisabled: C,
            });
        }, [c]);
        let {
                isFetchingShopHome: A,
                fetchShopHomeError: B,
                shopBlocks: R,
                refreshShopHome: Z,
            } = (0, p.E)(
                c,
                {
                    noCache: C,
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
            null != B ||
                A ||
                0 === R.length ||
                (0, f.n)({
                    sessionId: N,
                    checkpoint: f.a.SHOP_RENDERED,
                    tab: c,
                    isFullScreen: u,
                    unpublishedCategoriesShown: O,
                    cacheDisabled: C,
                });
        }, [B, A, R.length, O, C, N, c, u]),
        null != B)
            ? (0, r.jsx)(h.Z, {
                  onRetry: w,
                  errorOrigin: h.i.SHOP_PAGE,
                  errorMessage: B.message,
              })
            : A || 0 === R.length
              ? (0, r.jsxs)("div", {
                    className: a()(k.loadingContainer, k.feedContent),
                    children: [
                        (0, r.jsx)(S.Z, {
                            isLoading: A,
                            handleTransition: n,
                            tab: c,
                        }),
                        (0, r.jsx)(b.Z, {
                            isLoading: A,
                            handleTransition: n,
                            categories: [],
                        }),
                        (0, r.jsx)(E.Z, {
                            isLoading: A,
                            title: c === y.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS),
                            numVisibleItems: i,
                            hasSorting: c === y.AW.HOME,
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
                                case s.z.HERO:
                                    d = (0, r.jsx)(
                                        S.Z,
                                        {
                                            isLoading: A,
                                            handleTransition: n,
                                            heroBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case s.z.FEATURED:
                                    d = (0, r.jsx)(
                                        b.Z,
                                        {
                                            isLoading: A,
                                            handleTransition: n,
                                            featuredBlockRecord: e,
                                        },
                                        l,
                                    );
                                    break;
                                case s.z.FEED:
                                    let f = e.sortedSkuIds;
                                    d = (0, r.jsx)(
                                        E.Z,
                                        {
                                            title:
                                                c === y.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS),
                                            isLoading: A || o,
                                            numVisibleItems: i,
                                            sortedSkuIds: f,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === s.z.IMMERSIVE_BANNER
                                                    ? k.feedblockInteractiveBackground
                                                    : void 0,
                                            hasSorting: c === y.AW.HOME,
                                            prioritizeUserDiscounts: c === y.AW.HOME,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case s.z.WIDE_BANNER:
                                    d = (0, r.jsx)(
                                        T.Z,
                                        {
                                            handleTransition: n,
                                            wideBannerBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case s.z.SHELF:
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
                                case s.z.COUNTDOWN_TIMER:
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
                                case s.z.IMMERSIVE_BANNER:
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
        let { isFullScreen: t, handleTransition: n, tab: i, transitionState: a } = e,
            s = l.useRef(null),
            { handleScroll: g } = (0, c.z)(s, i),
            p = (0, C.R)(),
            f = (0, d.sp)(),
            [h, _] = l.useState(y.IV),
            [m, b] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != s.current) {
                    let e = () => {
                            if (null == s.current) return;
                            let e = s.current.getDistanceFromBottom();
                            h >= 36 ? b(e < 20) : e <= 200 && _((e) => e + y.IV);
                        },
                        t = s.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, h, _, b]),
            (0, r.jsx)(o.Den, {
                className: k.shopScroll,
                ref: s,
                onScroll: g,
                children: (0, r.jsxs)("div", {
                    className: k.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: k.mainContent,
                            children: [
                                (0, r.jsx)(I, {
                                    handleTransition: n,
                                    numVisibleItems: h,
                                    isFetchingCategories: p,
                                    tab: i,
                                    isFullScreen: t,
                                }),
                                i !== y.AW.CATALOG &&
                                    h >= 36 &&
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
                                                            page_type: i,
                                                            page_category:
                                                                i === y.AW.HOME || null == f ? void 0 : f.pageCategory,
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
                                        transitioning: a === y.f7.OUT,
                                    }),
                                    (0, r.jsx)(O.Z, {
                                        style: { left: 1850 },
                                        peaking: m,
                                        transitioning: a === y.f7.OUT,
                                    }),
                                ],
                            }),
                    ],
                }),
            })
        );
    };
