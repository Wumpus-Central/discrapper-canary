n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(685816),
    o = n(704215),
    c = n(481060),
    u = n(702486),
    d = n(605236),
    g = n(626135),
    p = n(381585),
    f = n(501678),
    h = n(763941),
    C = n(364111),
    m = n(303952),
    _ = n(752053),
    b = n(258939),
    v = n(81136),
    x = n(302933),
    E = n(953655),
    O = n(548685),
    S = n(580914),
    y = n(92589),
    j = n(548257),
    k = n(963278),
    I = n(531864),
    T = n(384067),
    L = n(215023),
    B = n(981631),
    P = n(388032),
    N = n(310582);
let A = (e) => {
        var t, n, i;
        let { handleTransition: c, numVisibleItems: u, isFetchingCategories: g, tab: b } = e,
            { noCache: I, includeUnpublished: B } = (0, v.Z)(),
            A = (0, h.Pc)("CollectiblesFeedShop") && b === L.AW.ORBS,
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
                        name: P.intl.string(P.t.bfXHLB),
                        summary: P.intl.string(P.t.MWDrou),
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
            H = (0, p.sp)(),
            D = null != (t = null == H ? void 0 : H.sessionId) ? t : "";
        l.useEffect(() => {
            (0, m.n)({
                sessionId: D,
                checkpoint: m.a.SHOP_MOUNTED,
                tab: b,
                unpublishedCategoriesShown: B,
                cacheDisabled: I,
            });
        }, [b]);
        let {
                isFetchingShopHome: M,
                fetchShopHomeError: F,
                shopBlocks: W,
                refreshShopHome: V,
            } = (0, C.E)(
                b,
                {
                    noCache: I,
                    includeUnpublished: B,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: D,
                    tab: b,
                },
            ),
            U = l.useCallback(() => {
                V();
            }, [V]);
        return (l.useEffect(() => {
            null != F ||
                M ||
                0 === W.length ||
                (0, m.n)({
                    sessionId: D,
                    checkpoint: m.a.SHOP_RENDERED,
                    tab: b,
                    unpublishedCategoriesShown: B,
                    cacheDisabled: I,
                });
        }, [F, M, W.length, B, I, D, b]),
        null != F)
            ? (0, r.jsx)(_.Z, {
                  onRetry: U,
                  errorOrigin: _.i.SHOP_PAGE,
                  errorMessage: F.message,
              })
            : M || 0 === W.length
              ? (0, r.jsxs)("div", {
                    className: a()(N.loadingContainer, N.feedContent),
                    children: [
                        (0, r.jsx)(S.Z, {
                            isLoading: M,
                            handleTransition: c,
                            tab: b,
                        }),
                        (0, r.jsx)(E.Z, {
                            isLoading: M,
                            handleTransition: c,
                            categories: [],
                        }),
                        (0, r.jsx)(O.Z, {
                            isLoading: M,
                            title: b === L.AW.ORBS ? P.intl.string(P.t.dFgeuZ) : P.intl.string(P.t.NSv5KV),
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
                                case s.z.HERO:
                                    l = (0, r.jsx)(
                                        S.Z,
                                        {
                                            isLoading: M,
                                            handleTransition: c,
                                            heroBlock: A ? R : e,
                                            tab: b,
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.FEATURED:
                                    l = (0, r.jsx)(
                                        E.Z,
                                        {
                                            isLoading: M,
                                            handleTransition: c,
                                            featuredBlockRecord: e,
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.FEED:
                                    let p = e.sortedSkuIds;
                                    l = (0, r.jsx)(
                                        O.Z,
                                        {
                                            title:
                                                b === L.AW.ORBS ? P.intl.string(P.t.dFgeuZ) : P.intl.string(P.t.NSv5KV),
                                            isLoading: M || g,
                                            numVisibleItems: u,
                                            sortedSkuIds: p,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === s.z.IMMERSIVE_BANNER
                                                    ? N.feedblockInteractiveBackground
                                                    : void 0,
                                            prioritizeUserDiscounts: b === L.AW.HOME,
                                            tab: b,
                                            orbsSupportedOnly: b === L.AW.ORBS,
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        var h;
                                        let t = null != (h = e.dismissibleContentVersion) ? h : 0,
                                            { isDismissed: n } = (0, d.H4)(o.z.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    l = (0, r.jsx)(
                                        T.Z,
                                        {
                                            handleTransition: c,
                                            wideBannerBlock: e,
                                            tab: b,
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.SHELF:
                                    l = (0, r.jsx)(
                                        k.Z,
                                        {
                                            handleTransition: c,
                                            shelf: e,
                                            tab: b,
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.COUNTDOWN_TIMER:
                                    (l = (0, r.jsx)(
                                        x.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: Z,
                                        },
                                        n,
                                    )),
                                        (i = !0);
                                    break;
                                case s.z.IMMERSIVE_BANNER:
                                    l = (0, r.jsx)(
                                        y.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => w(!e),
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.REWARD_HERO:
                                    l = (0, r.jsx)(
                                        j.Z,
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
                            return (0, r.jsx)(f.g6, {
                                blockType: e.type,
                                children: (0, r.jsx)(
                                    "div",
                                    {
                                        className: a()(N.blockContainer, N.feedContent, {
                                            [N.skipPadding]: 0 === n || i,
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
            a = l.useRef(null),
            { handleScroll: s } = (0, u.z)(a, n),
            o = (0, b.R)(),
            d = (0, p.sp)(),
            [f, h] = l.useState(L.IV),
            [C, m] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            f >= 36 ? m(e < 20) : e <= 200 && h((e) => e + L.IV);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, f, h, m]),
            (0, r.jsx)(c.Den, {
                className: N.shopScroll,
                ref: a,
                onScroll: s,
                children: (0, r.jsxs)("div", {
                    className: N.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.mainContent,
                            children: [
                                (0, r.jsx)(A, {
                                    handleTransition: t,
                                    numVisibleItems: f,
                                    isFetchingCategories: o,
                                    tab: n,
                                }),
                                n !== L.AW.CATALOG &&
                                    f >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: N.endOfFeed,
                                        children: [
                                            (0, r.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: P.intl.string(P.t.Yr70c4),
                                            }),
                                            (0, r.jsx)(c.Button, {
                                                variant: "primary",
                                                text: P.intl.string(P.t.AfrvRD),
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
                        (0, r.jsx)(I.Z, {
                            peaking: C,
                            transitioning: i === L.f7.OUT,
                        }),
                        (0, r.jsx)(I.Z, {
                            style: { left: 1850 },
                            peaking: C,
                            transitioning: i === L.f7.OUT,
                        }),
                    ],
                }),
            })
        );
    };
