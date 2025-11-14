n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(685816),
    s = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    p = n(501678),
    g = n(763941),
    f = n(364111),
    h = n(303952),
    C = n(752053),
    m = n(258939),
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
        let { handleTransition: s, numVisibleItems: c, isFetchingCategories: u, tab: m } = e,
            { noCache: j, includeUnpublished: T } = (0, _.Z)(),
            P = g.Z.useConfig({ location: "CollectiblesFeedShop" }).enabled && m === I.AW.ORBS,
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
                tab: m,
                unpublishedCategoriesShown: T,
                cacheDisabled: j,
            });
        }, [m]);
        let {
                isFetchingShopHome: H,
                fetchShopHomeError: D,
                shopBlocks: M,
                refreshShopHome: F,
            } = (0, f.E)(
                m,
                {
                    noCache: j,
                    includeUnpublished: T,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: w,
                    tab: m,
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
                    tab: m,
                    unpublishedCategoriesShown: T,
                    cacheDisabled: j,
                });
        }, [D, H, M.length, T, j, w, m]),
        null != D)
            ? (0, r.jsx)(C.Z, {
                  onRetry: W,
                  errorOrigin: C.i.SHOP_PAGE,
                  errorMessage: D.message,
              })
            : H || 0 === M.length
              ? (0, r.jsxs)("div", {
                    className: a()(B.loadingContainer, B.feedContent),
                    children: [
                        (0, r.jsx)(E.Z, {
                            isLoading: H,
                            handleTransition: s,
                            tab: m,
                        }),
                        (0, r.jsx)(v.Z, {
                            isLoading: H,
                            handleTransition: s,
                            categories: [],
                        }),
                        (0, r.jsx)(x.Z, {
                            isLoading: H,
                            title: m === I.AW.ORBS ? L.intl.string(L.t.dFgeuZ) : L.intl.string(L.t.NSv5KV),
                            numVisibleItems: c,
                            tab: m,
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
                                case o.z.HERO:
                                    l = (0, r.jsx)(
                                        E.Z,
                                        {
                                            isLoading: H,
                                            handleTransition: s,
                                            heroBlock: P ? N : e,
                                            tab: m,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.FEATURED:
                                    l = (0, r.jsx)(
                                        v.Z,
                                        {
                                            isLoading: H,
                                            handleTransition: s,
                                            featuredBlockRecord: e,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.FEED:
                                    let d = e.sortedSkuIds;
                                    l = (0, r.jsx)(
                                        x.Z,
                                        {
                                            title:
                                                m === I.AW.ORBS ? L.intl.string(L.t.dFgeuZ) : L.intl.string(L.t.NSv5KV),
                                            isLoading: H || u,
                                            numVisibleItems: c,
                                            sortedSkuIds: d,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === o.z.IMMERSIVE_BANNER
                                                    ? B.feedblockInteractiveBackground
                                                    : void 0,
                                            prioritizeUserDiscounts: m === I.AW.HOME,
                                            tab: m,
                                            orbsSupportedOnly: m === I.AW.ORBS,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.WIDE_BANNER:
                                    l = (0, r.jsx)(
                                        k.Z,
                                        {
                                            handleTransition: s,
                                            wideBannerBlock: e,
                                            tab: m,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.SHELF:
                                    l = (0, r.jsx)(
                                        y.Z,
                                        {
                                            handleTransition: s,
                                            shelf: e,
                                            tab: m,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.COUNTDOWN_TIMER:
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
                                case o.z.IMMERSIVE_BANNER:
                                    l = (0, r.jsx)(
                                        O.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => R(!e),
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.REWARD_HERO:
                                    l = (0, r.jsx)(
                                        S.Z,
                                        {
                                            isLoading: H,
                                            handleTransition: s,
                                            heroBlock: e,
                                            tab: m,
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
            { handleScroll: o } = (0, c.z)(a, n),
            p = (0, m.R)(),
            g = (0, d.sp)(),
            [f, h] = l.useState(I.IV),
            [C, _] = l.useState(!1);
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
            (0, r.jsx)(s.Den, {
                className: B.shopScroll,
                ref: a,
                onScroll: o,
                children: (0, r.jsxs)("div", {
                    className: B.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: B.mainContent,
                            children: [
                                (0, r.jsx)(P, {
                                    handleTransition: t,
                                    numVisibleItems: f,
                                    isFetchingCategories: p,
                                    tab: n,
                                }),
                                n !== I.AW.CATALOG &&
                                    f >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: B.endOfFeed,
                                        children: [
                                            (0, r.jsx)(s.Heading, {
                                                variant: "heading-md/semibold",
                                                children: L.intl.string(L.t.Yr70c4),
                                            }),
                                            (0, r.jsx)(s.Button, {
                                                variant: "primary",
                                                text: L.intl.string(L.t.AfrvRD),
                                                onClick: () => {
                                                    t({
                                                        sourceButton: "shop all button",
                                                        shouldAnimate: !0,
                                                    }),
                                                        u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == g ? void 0 : g.sessionId,
                                                            page_type: n,
                                                            page_category:
                                                                n === I.AW.HOME || null == g ? void 0 : g.pageCategory,
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
                            transitioning: i === I.f7.OUT,
                        }),
                        (0, r.jsx)(j.Z, {
                            style: { left: 1850 },
                            peaking: C,
                            transitioning: i === I.f7.OUT,
                        }),
                    ],
                }),
            })
        );
    };
