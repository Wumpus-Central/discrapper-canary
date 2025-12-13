n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    i = n(685816),
    s = n(704215),
    c = n(481060),
    u = n(702486),
    d = n(605236),
    f = n(626135),
    g = n(381585),
    p = n(501678),
    b = n(763941),
    m = n(364111),
    C = n(303952),
    h = n(752053),
    v = n(258939),
    E = n(81136),
    S = n(302933),
    _ = n(953655),
    O = n(548685),
    x = n(580914),
    y = n(92589),
    j = n(548257),
    k = n(963278),
    T = n(531864),
    L = n(384067),
    I = n(215023),
    B = n(981631),
    A = n(388032),
    N = n(222194);
let P = (e) => {
        var t, n, a;
        let { handleTransition: c, numVisibleItems: u, isFetchingCategories: f, tab: v } = e,
            { noCache: T, includeUnpublished: B } = (0, E.Z)(),
            P = (0, b.Pc)("CollectiblesFeedShop") && v === I.AW.ORBS,
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
                })({}, I.fH)),
                (a = a = { name: A.intl.string(A.t.bfXHLB) }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                n),
            [Z, w] = l.useState(!1),
            H = (0, g.sp)(),
            D = null != (t = null == H ? void 0 : H.sessionId) ? t : "";
        l.useEffect(() => {
            (0, C.n)({
                sessionId: D,
                checkpoint: C.a.SHOP_MOUNTED,
                tab: v,
                unpublishedCategoriesShown: B,
                cacheDisabled: T,
            });
        }, [v]);
        let {
                isFetchingShopHome: M,
                fetchShopHomeError: F,
                shopBlocks: W,
                refreshShopHome: U,
            } = (0, m.E)(
                v,
                {
                    noCache: T,
                    includeUnpublished: B,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: D,
                    tab: v,
                },
            ),
            V = l.useCallback(() => {
                U();
            }, [U]);
        return (l.useEffect(() => {
            null != F ||
                M ||
                0 === W.length ||
                (0, C.n)({
                    sessionId: D,
                    checkpoint: C.a.SHOP_RENDERED,
                    tab: v,
                    unpublishedCategoriesShown: B,
                    cacheDisabled: T,
                });
        }, [F, M, W.length, B, T, D, v]),
        null != F)
            ? (0, r.jsx)(h.Z, {
                  onRetry: V,
                  errorOrigin: h.i.SHOP_PAGE,
                  errorMessage: F.message,
              })
            : M || 0 === W.length
              ? (0, r.jsxs)("div", {
                    className: o()(N.loadingContainer, N.feedContent),
                    children: [
                        (0, r.jsx)(x.Z, {
                            isLoading: M,
                            handleTransition: c,
                            tab: v,
                        }),
                        (0, r.jsx)(_.Z, {
                            isLoading: M,
                            handleTransition: c,
                            categories: [],
                        }),
                        (0, r.jsx)(O.Z, {
                            isLoading: M,
                            title: v === I.AW.ORBS ? A.intl.string(A.t.dFgeuZ) : A.intl.string(A.t.NSv5KV),
                            numVisibleItems: u,
                            tab: v,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: W.map((e, t) =>
                        ((e, t, n) => {
                            if (null == e) return null;
                            let l = null,
                                a = !1;
                            switch (e.type) {
                                case i.z.HERO:
                                    l = (0, r.jsx)(
                                        x.Z,
                                        {
                                            isLoading: M,
                                            handleTransition: c,
                                            heroBlock: P ? R : e,
                                            tab: v,
                                        },
                                        n,
                                    );
                                    break;
                                case i.z.FEATURED:
                                    l = (0, r.jsx)(
                                        _.Z,
                                        {
                                            isLoading: M,
                                            handleTransition: c,
                                            featuredBlockRecord: e,
                                        },
                                        n,
                                    );
                                    break;
                                case i.z.FEED:
                                    let g = e.sortedSkuIds;
                                    l = (0, r.jsx)(
                                        O.Z,
                                        {
                                            title:
                                                v === I.AW.ORBS ? A.intl.string(A.t.dFgeuZ) : A.intl.string(A.t.NSv5KV),
                                            isLoading: M || f,
                                            numVisibleItems: u,
                                            sortedSkuIds: g,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === i.z.IMMERSIVE_BANNER
                                                    ? N.feedblockInteractiveBackground
                                                    : void 0,
                                            prioritizeUserDiscounts: v === I.AW.HOME,
                                            tab: v,
                                            orbsSupportedOnly: v === I.AW.ORBS,
                                        },
                                        n,
                                    );
                                    break;
                                case i.z.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        var b;
                                        let t = null != (b = e.dismissibleContentVersion) ? b : 0,
                                            { isDismissed: n } = (0, d.H4)(s.z.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    l = (0, r.jsx)(
                                        L.Z,
                                        {
                                            wideBannerBlock: e,
                                            tab: v,
                                        },
                                        n,
                                    );
                                    break;
                                case i.z.SHELF:
                                    l = (0, r.jsx)(
                                        k.Z,
                                        {
                                            handleTransition: c,
                                            shelf: e,
                                            tab: v,
                                        },
                                        n,
                                    );
                                    break;
                                case i.z.COUNTDOWN_TIMER:
                                    (l = (0, r.jsx)(
                                        S.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: Z,
                                        },
                                        n,
                                    )),
                                        (a = !0);
                                    break;
                                case i.z.IMMERSIVE_BANNER:
                                    l = (0, r.jsx)(
                                        y.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => w(!e),
                                        },
                                        n,
                                    );
                                    break;
                                case i.z.REWARD_HERO:
                                    l = (0, r.jsx)(
                                        j.Z,
                                        {
                                            isLoading: M,
                                            handleTransition: c,
                                            heroBlock: e,
                                            tab: v,
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
                                        className: o()(N.blockContainer, N.feedContent, {
                                            [N.skipPadding]: 0 === n || a,
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
        let { handleTransition: t, tab: n, transitionState: a } = e,
            o = l.useRef(null),
            { handleScroll: i } = (0, u.z)(o, n),
            s = (0, v.R)(),
            d = (0, g.sp)(),
            [p, b] = l.useState(I.IV),
            [m, C] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != o.current) {
                    let e = () => {
                            if (null == o.current) return;
                            let e = o.current.getDistanceFromBottom();
                            p >= 36 ? C(e < 20) : e <= 200 && b((e) => e + I.IV);
                        },
                        t = o.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [o, p, b, C]),
            (0, r.jsx)(c.Den, {
                className: N.shopScroll,
                ref: o,
                onScroll: i,
                children: (0, r.jsxs)("div", {
                    className: N.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.mainContent,
                            children: [
                                (0, r.jsx)(P, {
                                    handleTransition: t,
                                    numVisibleItems: p,
                                    isFetchingCategories: s,
                                    tab: n,
                                }),
                                n !== I.AW.CATALOG &&
                                    p >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: N.endOfFeed,
                                        children: [
                                            (0, r.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: A.intl.string(A.t.Yr70c4),
                                            }),
                                            (0, r.jsx)(c.Button, {
                                                variant: "primary",
                                                text: A.intl.string(A.t.AfrvRD),
                                                onClick: () => {
                                                    t({
                                                        sourceButton: "shop all button",
                                                        shouldAnimate: !0,
                                                    }),
                                                        f.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == d ? void 0 : d.sessionId,
                                                            page_type: n,
                                                            page_category:
                                                                n === I.AW.HOME || null == d ? void 0 : d.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(T.Z, {
                            peaking: m,
                            transitioning: a === I.f7.OUT,
                        }),
                        (0, r.jsx)(T.Z, {
                            style: { left: 1850 },
                            peaking: m,
                            transitioning: a === I.f7.OUT,
                        }),
                    ],
                }),
            })
        );
    };
