n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(685816),
    s = n(704215),
    c = n(481060),
    u = n(702486),
    d = n(605236),
    f = n(626135),
    g = n(381585),
    p = n(501678),
    m = n(763941),
    h = n(364111),
    C = n(303952),
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
    P = n(981631),
    B = n(388032),
    N = n(310582);
let A = (e) => {
        var t, n, i;
        let { handleTransition: c, numVisibleItems: u, isFetchingCategories: f, tab: b } = e,
            { noCache: I, includeUnpublished: P } = (0, v.Z)(),
            A = (0, m.Pc)("CollectiblesFeedShop") && b === L.AW.ORBS,
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
                        name: B.intl.string(B.t.bfXHLB),
                        summary: B.intl.string(B.t.MWDrou),
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
            D = (0, g.sp)(),
            H = null != (t = null == D ? void 0 : D.sessionId) ? t : "";
        l.useEffect(() => {
            (0, C.n)({
                sessionId: H,
                checkpoint: C.a.SHOP_MOUNTED,
                tab: b,
                unpublishedCategoriesShown: P,
                cacheDisabled: I,
            });
        }, [b]);
        let {
                isFetchingShopHome: M,
                fetchShopHomeError: F,
                shopBlocks: W,
                refreshShopHome: V,
            } = (0, h.E)(
                b,
                {
                    noCache: I,
                    includeUnpublished: P,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: H,
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
                (0, C.n)({
                    sessionId: H,
                    checkpoint: C.a.SHOP_RENDERED,
                    tab: b,
                    unpublishedCategoriesShown: P,
                    cacheDisabled: I,
                });
        }, [F, M, W.length, P, I, H, b]),
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
                            title: b === L.AW.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
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
                                case o.z.FEATURED:
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
                                case o.z.FEED:
                                    let g = e.sortedSkuIds;
                                    l = (0, r.jsx)(
                                        O.Z,
                                        {
                                            title:
                                                b === L.AW.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                                            isLoading: M || f,
                                            numVisibleItems: u,
                                            sortedSkuIds: g,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === o.z.IMMERSIVE_BANNER
                                                    ? N.feedblockInteractiveBackground
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
                                            { isDismissed: n } = (0, d.H4)(s.z.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    l = (0, r.jsx)(
                                        T.Z,
                                        {
                                            wideBannerBlock: e,
                                            tab: b,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.SHELF:
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
                                case o.z.COUNTDOWN_TIMER:
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
                            return (0, r.jsx)(p.g6, {
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
            { handleScroll: o } = (0, u.z)(a, n),
            s = (0, b.R)(),
            d = (0, g.sp)(),
            [p, m] = l.useState(L.IV),
            [h, C] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            p >= 36 ? C(e < 20) : e <= 200 && m((e) => e + L.IV);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, p, m, C]),
            (0, r.jsx)(c.Den, {
                className: N.shopScroll,
                ref: a,
                onScroll: o,
                children: (0, r.jsxs)("div", {
                    className: N.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.mainContent,
                            children: [
                                (0, r.jsx)(A, {
                                    handleTransition: t,
                                    numVisibleItems: p,
                                    isFetchingCategories: s,
                                    tab: n,
                                }),
                                n !== L.AW.CATALOG &&
                                    p >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: N.endOfFeed,
                                        children: [
                                            (0, r.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: B.intl.string(B.t.Yr70c4),
                                            }),
                                            (0, r.jsx)(c.Button, {
                                                variant: "primary",
                                                text: B.intl.string(B.t.AfrvRD),
                                                onClick: () => {
                                                    t({
                                                        sourceButton: "shop all button",
                                                        shouldAnimate: !0,
                                                    }),
                                                        f.default.track(P.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                            peaking: h,
                            transitioning: i === L.f7.OUT,
                        }),
                        (0, r.jsx)(I.Z, {
                            style: { left: 1850 },
                            peaking: h,
                            transitioning: i === L.f7.OUT,
                        }),
                    ],
                }),
            })
        );
    };
