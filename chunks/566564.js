n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(685816),
    a = n(704215),
    c = n(481060),
    u = n(702486),
    d = n(605236),
    g = n(626135),
    f = n(381585),
    p = n(501678),
    m = n(763941),
    C = n(364111),
    h = n(303952),
    _ = n(752053),
    b = n(258939),
    E = n(81136),
    v = n(302933),
    S = n(953655),
    O = n(548685),
    x = n(580914),
    y = n(92589),
    k = n(548257),
    T = n(963278),
    j = n(531864),
    I = n(384067),
    L = n(215023),
    B = n(981631),
    N = n(388032),
    A = n(310582);
let P = (e) => {
        var t, n, i;
        let { handleTransition: c, numVisibleItems: u, isFetchingCategories: g, tab: b } = e,
            { noCache: j, includeUnpublished: B } = (0, E.Z)(),
            P = (0, m.Pc)("CollectiblesFeedShop") && b === L.AW.ORBS,
            R =
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, L.fH)),
                (i = i =
                    {
                        name: N.intl.string(N.t.bfXHLB),
                        summary: N.intl.string(N.t.MWDrou),
                        title: N.intl.string(N.t.hhOtGl),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n),
            [Z, w] = l.useState(!1),
            H = (0, f.sp)(),
            D = null != (t = null == H ? void 0 : H.sessionId) ? t : "";
        l.useEffect(() => {
            (0, h.n)({
                sessionId: D,
                checkpoint: h.a.SHOP_MOUNTED,
                tab: b,
                unpublishedCategoriesShown: B,
                cacheDisabled: j,
            });
        }, [b]);
        let {
                isFetchingShopHome: M,
                fetchShopHomeError: F,
                shopBlocks: W,
                refreshShopHome: U,
            } = (0, C.E)(
                b,
                {
                    noCache: j,
                    includeUnpublished: B,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: D,
                    tab: b,
                },
            ),
            V = l.useCallback(() => {
                U();
            }, [U]);
        return (l.useEffect(() => {
            null != F ||
                M ||
                0 === W.length ||
                (0, h.n)({
                    sessionId: D,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: b,
                    unpublishedCategoriesShown: B,
                    cacheDisabled: j,
                });
        }, [F, M, W.length, B, j, D, b]),
        null != F)
            ? (0, r.jsx)(_.Z, {
                  onRetry: V,
                  errorOrigin: _.i.SHOP_PAGE,
                  errorMessage: F.message,
              })
            : M || 0 === W.length
              ? (0, r.jsxs)("div", {
                    className: s()(A.loadingContainer, A.feedContent),
                    children: [
                        (0, r.jsx)(x.Z, {
                            isLoading: M,
                            handleTransition: c,
                            tab: b,
                        }),
                        (0, r.jsx)(S.Z, {
                            isLoading: M,
                            handleTransition: c,
                            categories: [],
                        }),
                        (0, r.jsx)(O.Z, {
                            isLoading: M,
                            title: b === L.AW.ORBS ? N.intl.string(N.t.dFgeuZ) : N.intl.string(N.t.NSv5KV),
                            numVisibleItems: u,
                            tab: b,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: W.map((e, t) =>
                        ((e, t, n) => {
                            if (null == e) return null;
                            let l = null,
                                i = !1;
                            switch (e.type) {
                                case o.z.HERO:
                                    l = (0, r.jsx)(
                                        x.Z,
                                        {
                                            isLoading: M,
                                            handleTransition: c,
                                            heroBlock: P ? R : e,
                                            tab: b,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.FEATURED:
                                    l = (0, r.jsx)(
                                        S.Z,
                                        {
                                            isLoading: M,
                                            handleTransition: c,
                                            featuredBlockRecord: e,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.FEED:
                                    let f = e.sortedSkuIds;
                                    l = (0, r.jsx)(
                                        O.Z,
                                        {
                                            title:
                                                b === L.AW.ORBS ? N.intl.string(N.t.dFgeuZ) : N.intl.string(N.t.NSv5KV),
                                            isLoading: M || g,
                                            numVisibleItems: u,
                                            sortedSkuIds: f,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === o.z.IMMERSIVE_BANNER
                                                    ? A.feedblockInteractiveBackground
                                                    : void 0,
                                            prioritizeUserDiscounts: b === L.AW.HOME,
                                            tab: b,
                                            orbsSupportedOnly: b === L.AW.ORBS,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        var m;
                                        let t = null != (m = e.dismissibleContentVersion) ? m : 0,
                                            { isDismissed: n } = (0, d.H4)(a.z.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    l = (0, r.jsx)(
                                        I.Z,
                                        {
                                            wideBannerBlock: e,
                                            tab: b,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.SHELF:
                                    l = (0, r.jsx)(
                                        T.Z,
                                        {
                                            handleTransition: c,
                                            shelf: e,
                                            tab: b,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.COUNTDOWN_TIMER:
                                    (l = (0, r.jsx)(
                                        v.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: Z,
                                        },
                                        n,
                                    )),
                                        (i = !0);
                                    break;
                                case o.z.IMMERSIVE_BANNER:
                                    l = (0, r.jsx)(
                                        y.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => w(!e),
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.REWARD_HERO:
                                    l = (0, r.jsx)(
                                        k.Z,
                                        {
                                            isLoading: M,
                                            handleTransition: c,
                                            heroBlock: e,
                                            tab: b,
                                        },
                                        n,
                                    );
                                    break;
                                default:
                                    return null;
                            }
                            return (0, r.jsx)(p.g6, {
                                blockType: e.type,
                                children: (0, r.jsx)(
                                    "div",
                                    {
                                        className: s()(A.blockContainer, A.feedContent, {
                                            [A.skipPadding]: 0 === n || i,
                                        }),
                                        children: l,
                                    },
                                    n,
                                ),
                            });
                        })(e, t > 0 ? W[t - 1] : null, t),
                    ),
                });
    },
    R = (e) => {
        let { handleTransition: t, tab: n, transitionState: i } = e,
            s = l.useRef(null),
            { handleScroll: o } = (0, u.z)(s, n),
            a = (0, b.R)(),
            d = (0, f.sp)(),
            [p, m] = l.useState(L.IV),
            [C, h] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != s.current) {
                    let e = () => {
                            if (null == s.current) return;
                            let e = s.current.getDistanceFromBottom();
                            p >= 36 ? h(e < 20) : e <= 200 && m((e) => e + L.IV);
                        },
                        t = s.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, p, m, h]),
            (0, r.jsx)(c.Den, {
                className: A.shopScroll,
                ref: s,
                onScroll: o,
                children: (0, r.jsxs)("div", {
                    className: A.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: A.mainContent,
                            children: [
                                (0, r.jsx)(P, {
                                    handleTransition: t,
                                    numVisibleItems: p,
                                    isFetchingCategories: a,
                                    tab: n,
                                }),
                                n !== L.AW.CATALOG &&
                                    p >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: A.endOfFeed,
                                        children: [
                                            (0, r.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: N.intl.string(N.t.Yr70c4),
                                            }),
                                            (0, r.jsx)(c.Button, {
                                                variant: "primary",
                                                text: N.intl.string(N.t.AfrvRD),
                                                onClick: () => {
                                                    t({
                                                        sourceButton: "shop all button",
                                                        shouldAnimate: !0,
                                                    }),
                                                        g.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == d ? void 0 : d.sessionId,
                                                            page_type: n,
                                                            page_category:
                                                                n === L.AW.HOME || null == d ? void 0 : d.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(j.Z, {
                            peaking: C,
                            transitioning: i === L.f7.OUT,
                        }),
                        (0, r.jsx)(j.Z, {
                            style: { left: 1850 },
                            peaking: C,
                            transitioning: i === L.f7.OUT,
                        }),
                    ],
                }),
            })
        );
    };
