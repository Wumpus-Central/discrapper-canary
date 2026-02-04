n.d(t, {
    A: () => B,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(651162),
    o = n(554146),
    c = n(397927),
    u = n(564322),
    d = n(367727),
    g = n(954571),
    f = n(440938),
    m = n(344011),
    p = n(379177),
    h = n(335657),
    b = n(100057),
    _ = n(599062),
    E = n(159439),
    v = n(998694),
    C = n(666413),
    A = n(573455),
    S = n(565057),
    x = n(227205),
    O = n(457414),
    y = n(633026),
    j = n(251191),
    L = n(613258),
    T = n(152568),
    I = n(758836),
    k = n(652215),
    N = n(985018),
    R = n(201073);
let P = (e) => {
        var t, n, s;
        let { handleTransition: c, numVisibleItems: u, isFetchingCategories: g, tab: E } = e,
            { noCache: L, includeUnpublished: k } = (0, v.A)(),
            P = (0, p.rR)("CollectiblesFeedShop") && E === I.G2.ORBS,
            B =
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
                })({}, I.ue)),
                (s = s =
                    {
                        name: N.intl.string(N.t.bfXHLB),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                n),
            [w, D] = l.useState(!1),
            M = (0, f.uM)(),
            H = null != (t = null == M ? void 0 : M.sessionId) ? t : "";
        l.useEffect(() => {
            (0, b.z)({
                sessionId: H,
                checkpoint: b.t.SHOP_MOUNTED,
                tab: E,
                unpublishedCategoriesShown: k,
                cacheDisabled: L,
            });
        }, [E]);
        let {
                isFetchingShopHome: G,
                fetchShopHomeError: U,
                shopBlocks: F,
                refreshShopHome: V,
            } = (0, h.y)(
                E,
                {
                    noCache: L,
                    includeUnpublished: k,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: H,
                    tab: E,
                },
            ),
            z = l.useCallback(() => {
                V();
            }, [V]);
        return (l.useEffect(() => {
            null != U ||
                G ||
                0 === F.length ||
                (0, b.z)({
                    sessionId: H,
                    checkpoint: b.t.SHOP_RENDERED,
                    tab: E,
                    unpublishedCategoriesShown: k,
                    cacheDisabled: L,
                });
        }, [U, G, F.length, k, L, H, E]),
        null != U)
            ? (0, r.jsx)(_.h, {
                  onRetry: z,
                  errorOrigin: _.A.SHOP_PAGE,
                  errorMessage: U.message,
              })
            : G || 0 === F.length
              ? (0, r.jsxs)("div", {
                    className: a()(R.g4, R.Of),
                    children: [
                        (0, r.jsx)(x.A, {
                            isLoading: G,
                            handleTransition: c,
                            tab: E,
                        }),
                        (0, r.jsx)(A.A, {
                            isLoading: G,
                            handleTransition: c,
                            categories: [],
                        }),
                        (0, r.jsx)(S.A, {
                            isLoading: G,
                            title: E === I.G2.ORBS ? N.intl.string(N.t.dFgeuZ) : N.intl.string(N.t.NSv5KV),
                            numVisibleItems: u,
                            tab: E,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: F.map((e, t) =>
                        ((e, t, n) => {
                            if (null == e) return null;
                            let l = null,
                                s = !1;
                            switch (e.type) {
                                case i.g.HERO:
                                    l = (0, r.jsx)(
                                        x.A,
                                        {
                                            isLoading: G,
                                            handleTransition: c,
                                            heroBlock: P ? B : e,
                                            tab: E,
                                        },
                                        n,
                                    );
                                    break;
                                case i.g.FEATURED:
                                    l = (0, r.jsx)(
                                        A.A,
                                        {
                                            isLoading: G,
                                            handleTransition: c,
                                            featuredBlockRecord: e,
                                        },
                                        n,
                                    );
                                    break;
                                case i.g.FEED:
                                    let f = e.sortedSkuIds;
                                    l = (0, r.jsx)(
                                        S.A,
                                        {
                                            title:
                                                E === I.G2.ORBS ? N.intl.string(N.t.dFgeuZ) : N.intl.string(N.t.NSv5KV),
                                            isLoading: G || g,
                                            numVisibleItems: u,
                                            sortedSkuIds: f,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === i.g.IMMERSIVE_BANNER ? R.w : void 0,
                                            prioritizeUserDiscounts: E === I.G2.HOME,
                                            tab: E,
                                            orbsSupportedOnly: E === I.G2.ORBS,
                                        },
                                        n,
                                    );
                                    break;
                                case i.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        var p;
                                        let t = null != (p = e.dismissibleContentVersion) ? p : 0,
                                            { isDismissed: n } = (0, d.En)(o.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    l = (0, r.jsx)(
                                        T.A,
                                        {
                                            wideBannerBlock: e,
                                            tab: E,
                                        },
                                        n,
                                    );
                                    break;
                                case i.g.SHELF:
                                    l = (0, r.jsx)(
                                        j.A,
                                        {
                                            handleTransition: c,
                                            shelf: e,
                                            tab: E,
                                        },
                                        n,
                                    );
                                    break;
                                case i.g.COUNTDOWN_TIMER:
                                    (l = (0, r.jsx)(
                                        C.S,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: w,
                                        },
                                        n,
                                    )),
                                        (s = !0);
                                    break;
                                case i.g.IMMERSIVE_BANNER:
                                    l = (0, r.jsx)(
                                        O.A,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => D(!e),
                                        },
                                        n,
                                    );
                                    break;
                                case i.g.REWARD_HERO:
                                    l = (0, r.jsx)(
                                        y.A,
                                        {
                                            isLoading: G,
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
                            return (0, r.jsx)(m.rW, {
                                blockType: e.type,
                                children: (0, r.jsx)(
                                    "div",
                                    {
                                        className: a()(R.v1, R.Of, {
                                            [R.J1]: 0 === n || s,
                                        }),
                                        children: l,
                                    },
                                    n,
                                ),
                            });
                        })(e, t > 0 ? F[t - 1] : null, t),
                    ),
                });
    },
    B = (e) => {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            a = l.useRef(null),
            { handleScroll: i } = (0, u.X)(a, n),
            o = (0, E.U)(),
            d = (0, f.uM)(),
            [m, p] = l.useState(I.md),
            [h, b] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            m >= 36 ? b(e < 20) : e <= 200 && p((e) => e + I.md);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, m, p, b]),
            (0, r.jsx)(c.T7Y, {
                className: R.OW,
                ref: a,
                onScroll: i,
                children: (0, r.jsxs)("div", {
                    className: R.bx,
                    children: [
                        (0, r.jsxs)("div", {
                            className: R.rb,
                            children: [
                                (0, r.jsx)(P, {
                                    handleTransition: t,
                                    numVisibleItems: m,
                                    isFetchingCategories: o,
                                    tab: n,
                                }),
                                n !== I.G2.CATALOG &&
                                    m >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: R.R$,
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
                                                        g.default.track(k.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == d ? void 0 : d.sessionId,
                                                            page_type: n,
                                                            page_category:
                                                                n === I.G2.HOME || null == d ? void 0 : d.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(L.A, {
                            peaking: h,
                            transitioning: s === I.Pf.OUT,
                        }),
                    ],
                }),
            })
        );
    };
