n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(685816),
    o = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    g = n(501678),
    p = n(763941),
    f = n(364111),
    h = n(303952),
    m = n(752053),
    C = n(258939),
    _ = n(81136),
    b = n(302933),
    v = n(953655),
    x = n(548685),
    E = n(580914),
    O = n(92589),
    S = n(548257),
    y = n(963278),
    j = n(531864),
    k = n(384067),
    I = n(215023),
    T = n(981631),
    L = n(388032),
    B = n(310582);
let P = (e) => {
        var t, n, i;
        let { handleTransition: o, numVisibleItems: c, isFetchingCategories: u, tab: C } = e,
            { noCache: j, includeUnpublished: T } = (0, _.Z)(),
            P = (0, p.Pc)("CollectiblesFeedShop") && C === I.AW.ORBS,
            N =
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
                (i = i =
                    {
                        name: L.intl.string(L.t.bfXHLB),
                        summary: L.intl.string(L.t.MWDrou),
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
            [A, R] = l.useState(!1),
            Z = (0, d.sp)(),
            w = null != (t = null == Z ? void 0 : Z.sessionId) ? t : "";
        l.useEffect(() => {
            (0, h.n)({
                sessionId: w,
                checkpoint: h.a.SHOP_MOUNTED,
                tab: C,
                unpublishedCategoriesShown: T,
                cacheDisabled: j,
            });
        }, [C]);
        let {
                isFetchingShopHome: H,
                fetchShopHomeError: D,
                shopBlocks: M,
                refreshShopHome: F,
            } = (0, f.E)(
                C,
                {
                    noCache: j,
                    includeUnpublished: T,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: w,
                    tab: C,
                },
            ),
            W = l.useCallback(() => {
                F();
            }, [F]);
        return (l.useEffect(() => {
            null != D ||
                H ||
                0 === M.length ||
                (0, h.n)({
                    sessionId: w,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: C,
                    unpublishedCategoriesShown: T,
                    cacheDisabled: j,
                });
        }, [D, H, M.length, T, j, w, C]),
        null != D)
            ? (0, r.jsx)(m.Z, {
                  onRetry: W,
                  errorOrigin: m.i.SHOP_PAGE,
                  errorMessage: D.message,
              })
            : H || 0 === M.length
              ? (0, r.jsxs)("div", {
                    className: a()(B.loadingContainer, B.feedContent),
                    children: [
                        (0, r.jsx)(E.Z, {
                            isLoading: H,
                            handleTransition: o,
                            tab: C,
                        }),
                        (0, r.jsx)(v.Z, {
                            isLoading: H,
                            handleTransition: o,
                            categories: [],
                        }),
                        (0, r.jsx)(x.Z, {
                            isLoading: H,
                            title: C === I.AW.ORBS ? L.intl.string(L.t.dFgeuZ) : L.intl.string(L.t.NSv5KV),
                            numVisibleItems: c,
                            tab: C,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: M.map((e, t) =>
                        ((e, t, n) => {
                            if (null == e) return null;
                            let l = null,
                                i = !1;
                            switch (e.type) {
                                case s.z.HERO:
                                    l = (0, r.jsx)(
                                        E.Z,
                                        {
                                            isLoading: H,
                                            handleTransition: o,
                                            heroBlock: P ? N : e,
                                            tab: C,
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.FEATURED:
                                    l = (0, r.jsx)(
                                        v.Z,
                                        {
                                            isLoading: H,
                                            handleTransition: o,
                                            featuredBlockRecord: e,
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.FEED:
                                    let d = e.sortedSkuIds;
                                    l = (0, r.jsx)(
                                        x.Z,
                                        {
                                            title:
                                                C === I.AW.ORBS ? L.intl.string(L.t.dFgeuZ) : L.intl.string(L.t.NSv5KV),
                                            isLoading: H || u,
                                            numVisibleItems: c,
                                            sortedSkuIds: d,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === s.z.IMMERSIVE_BANNER
                                                    ? B.feedblockInteractiveBackground
                                                    : void 0,
                                            prioritizeUserDiscounts: C === I.AW.HOME,
                                            tab: C,
                                            orbsSupportedOnly: C === I.AW.ORBS,
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.WIDE_BANNER:
                                    l = (0, r.jsx)(
                                        k.Z,
                                        {
                                            handleTransition: o,
                                            wideBannerBlock: e,
                                            tab: C,
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.SHELF:
                                    l = (0, r.jsx)(
                                        y.Z,
                                        {
                                            handleTransition: o,
                                            shelf: e,
                                            tab: C,
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.COUNTDOWN_TIMER:
                                    (l = (0, r.jsx)(
                                        b.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: A,
                                        },
                                        n,
                                    )),
                                        (i = !0);
                                    break;
                                case s.z.IMMERSIVE_BANNER:
                                    l = (0, r.jsx)(
                                        O.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => R(!e),
                                        },
                                        n,
                                    );
                                    break;
                                case s.z.REWARD_HERO:
                                    l = (0, r.jsx)(
                                        S.Z,
                                        {
                                            isLoading: H,
                                            handleTransition: o,
                                            heroBlock: e,
                                            tab: C,
                                        },
                                        n,
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
                                        className: a()(B.blockContainer, B.feedContent, {
                                            [B.skipPadding]: 0 === n || i,
                                        }),
                                        children: l,
                                    },
                                    n,
                                ),
                            });
                        })(e, t > 0 ? M[t - 1] : null, t),
                    ),
                });
    },
    N = (e) => {
        let { handleTransition: t, tab: n, transitionState: i } = e,
            a = l.useRef(null),
            { handleScroll: s } = (0, c.z)(a, n),
            g = (0, C.R)(),
            p = (0, d.sp)(),
            [f, h] = l.useState(I.IV),
            [m, _] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            f >= 36 ? _(e < 20) : e <= 200 && h((e) => e + I.IV);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, f, h, _]),
            (0, r.jsx)(o.Den, {
                className: B.shopScroll,
                ref: a,
                onScroll: s,
                children: (0, r.jsxs)("div", {
                    className: B.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: B.mainContent,
                            children: [
                                (0, r.jsx)(P, {
                                    handleTransition: t,
                                    numVisibleItems: f,
                                    isFetchingCategories: g,
                                    tab: n,
                                }),
                                n !== I.AW.CATALOG &&
                                    f >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: B.endOfFeed,
                                        children: [
                                            (0, r.jsx)(o.Heading, {
                                                variant: "heading-md/semibold",
                                                children: L.intl.string(L.t.Yr70c4),
                                            }),
                                            (0, r.jsx)(o.Button, {
                                                variant: "primary",
                                                text: L.intl.string(L.t.AfrvRD),
                                                onClick: () => {
                                                    t({
                                                        sourceButton: "shop all button",
                                                        shouldAnimate: !0,
                                                    }),
                                                        u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == p ? void 0 : p.sessionId,
                                                            page_type: n,
                                                            page_category:
                                                                n === I.AW.HOME || null == p ? void 0 : p.pageCategory,
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
                            peaking: m,
                            transitioning: i === I.f7.OUT,
                        }),
                        (0, r.jsx)(j.Z, {
                            style: { left: 1850 },
                            peaking: m,
                            transitioning: i === I.f7.OUT,
                        }),
                    ],
                }),
            })
        );
    };
