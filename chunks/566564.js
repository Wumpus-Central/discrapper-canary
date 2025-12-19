n.d(t, { Z: () => P }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(685816),
    i = n(704215),
    c = n(481060),
    u = n(702486),
    d = n(605236),
    f = n(626135),
    g = n(381585),
    b = n(501678),
    p = n(763941),
    m = n(364111),
    h = n(303952),
    C = n(752053),
    E = n(258939),
    v = n(81136),
    S = n(302933),
    _ = n(953655),
    x = n(548685),
    O = n(580914),
    y = n(92589),
    k = n(548257),
    T = n(963278),
    j = n(531864),
    L = n(384067),
    I = n(215023),
    A = n(981631),
    B = n(388032),
    N = n(222194);
let R = (e) => {
        var t, n, a;
        let { handleTransition: c, numVisibleItems: u, isFetchingCategories: f, tab: E } = e,
            { noCache: j, includeUnpublished: A } = (0, v.Z)(),
            R = (0, p.Pc)("CollectiblesFeedShop") && E === I.AW.ORBS,
            P =
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
                (a = a = { name: B.intl.string(B.t.bfXHLB) }),
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
            D = (0, g.sp)(),
            H = null != (t = null == D ? void 0 : D.sessionId) ? t : "";
        l.useEffect(() => {
            (0, h.n)({
                sessionId: H,
                checkpoint: h.a.SHOP_MOUNTED,
                tab: E,
                unpublishedCategoriesShown: A,
                cacheDisabled: j,
            });
        }, [E]);
        let {
                isFetchingShopHome: M,
                fetchShopHomeError: F,
                shopBlocks: W,
                refreshShopHome: U,
            } = (0, m.E)(
                E,
                {
                    noCache: j,
                    includeUnpublished: A,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: H,
                    tab: E,
                },
            ),
            z = l.useCallback(() => {
                U();
            }, [U]);
        return (l.useEffect(() => {
            null != F ||
                M ||
                0 === W.length ||
                (0, h.n)({
                    sessionId: H,
                    checkpoint: h.a.SHOP_RENDERED,
                    tab: E,
                    unpublishedCategoriesShown: A,
                    cacheDisabled: j,
                });
        }, [F, M, W.length, A, j, H, E]),
        null != F)
            ? (0, r.jsx)(C.Z, {
                  onRetry: z,
                  errorOrigin: C.i.SHOP_PAGE,
                  errorMessage: F.message,
              })
            : M || 0 === W.length
              ? (0, r.jsxs)("div", {
                    className: s()(N.loadingContainer, N.feedContent),
                    children: [
                        (0, r.jsx)(O.Z, {
                            isLoading: M,
                            handleTransition: c,
                            tab: E,
                        }),
                        (0, r.jsx)(_.Z, {
                            isLoading: M,
                            handleTransition: c,
                            categories: [],
                        }),
                        (0, r.jsx)(x.Z, {
                            isLoading: M,
                            title: E === I.AW.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                            numVisibleItems: u,
                            tab: E,
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
                                case o.z.HERO:
                                    l = (0, r.jsx)(
                                        O.Z,
                                        {
                                            isLoading: M,
                                            handleTransition: c,
                                            heroBlock: R ? P : e,
                                            tab: E,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.FEATURED:
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
                                case o.z.FEED:
                                    let g = e.sortedSkuIds;
                                    l = (0, r.jsx)(
                                        x.Z,
                                        {
                                            title:
                                                E === I.AW.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                                            isLoading: M || f,
                                            numVisibleItems: u,
                                            sortedSkuIds: g,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === o.z.IMMERSIVE_BANNER
                                                    ? N.feedblockInteractiveBackground
                                                    : void 0,
                                            prioritizeUserDiscounts: E === I.AW.HOME,
                                            tab: E,
                                            orbsSupportedOnly: E === I.AW.ORBS,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        var p;
                                        let t = null != (p = e.dismissibleContentVersion) ? p : 0,
                                            { isDismissed: n } = (0, d.H4)(i.z.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    l = (0, r.jsx)(
                                        L.Z,
                                        {
                                            wideBannerBlock: e,
                                            tab: E,
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
                                            tab: E,
                                        },
                                        n,
                                    );
                                    break;
                                case o.z.COUNTDOWN_TIMER:
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
                                            tab: E,
                                        },
                                        n,
                                    );
                                    break;
                                default:
                                    return null;
                            }
                            return (0, r.jsx)(b.g6, {
                                blockType: e.type,
                                children: (0, r.jsx)(
                                    "div",
                                    {
                                        className: s()(N.blockContainer, N.feedContent, {
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
    P = (e) => {
        let { handleTransition: t, tab: n, transitionState: a } = e,
            s = l.useRef(null),
            { handleScroll: o } = (0, u.z)(s, n),
            i = (0, E.R)(),
            d = (0, g.sp)(),
            [b, p] = l.useState(I.IV),
            [m, h] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != s.current) {
                    let e = () => {
                            if (null == s.current) return;
                            let e = s.current.getDistanceFromBottom();
                            b >= 36 ? h(e < 20) : e <= 200 && p((e) => e + I.IV);
                        },
                        t = s.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, b, p, h]),
            (0, r.jsx)(c.Den, {
                className: N.shopScroll,
                ref: s,
                onScroll: o,
                children: (0, r.jsxs)("div", {
                    className: N.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.mainContent,
                            children: [
                                (0, r.jsx)(R, {
                                    handleTransition: t,
                                    numVisibleItems: b,
                                    isFetchingCategories: i,
                                    tab: n,
                                }),
                                n !== I.AW.CATALOG &&
                                    b >= 36 &&
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
                                                        f.default.track(A.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                        (0, r.jsx)(j.Z, {
                            peaking: m,
                            transitioning: a === I.f7.OUT,
                        }),
                        (0, r.jsx)(j.Z, {
                            style: { left: 1850 },
                            peaking: m,
                            transitioning: a === I.f7.OUT,
                        }),
                    ],
                }),
            })
        );
    };
