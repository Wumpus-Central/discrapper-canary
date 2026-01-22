l.d(t, { A: () => D }), l(896048);
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(651162),
    o = l(554146),
    c = l(397927),
    u = l(564322),
    d = l(367727),
    f = l(954571),
    b = l(440938),
    g = l(344011),
    p = l(379177),
    m = l(335657),
    h = l(100057),
    E = l(599062),
    v = l(159439),
    A = l(998694),
    x = l(666413),
    S = l(573455),
    C = l(565057),
    O = l(227205),
    _ = l(457414),
    y = l(633026),
    j = l(251191),
    L = l(613258),
    T = l(152568),
    I = l(758836),
    N = l(652215),
    k = l(985018),
    R = l(201073);
let P = (e) => {
        var t, l, s;
        let { handleTransition: c, numVisibleItems: u, isFetchingCategories: f, tab: v } = e,
            { noCache: L, includeUnpublished: N } = (0, A.A)(),
            P = (0, p.rR)("CollectiblesFeedShop") && v === I.G2.ORBS,
            D =
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(l);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = l[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, I.ue)),
                (s = s = { name: k.intl.string(k.t.bfXHLB) }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var l = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              l.push.apply(l, n);
                          }
                          return l;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                l),
            [w, B] = r.useState(!1),
            M = (0, b.uM)(),
            H = null != (t = null == M ? void 0 : M.sessionId) ? t : "";
        r.useEffect(() => {
            (0, h.z)({
                sessionId: H,
                checkpoint: h.t.SHOP_MOUNTED,
                tab: v,
                unpublishedCategoriesShown: N,
                cacheDisabled: L,
            });
        }, [v]);
        let {
                isFetchingShopHome: G,
                fetchShopHomeError: F,
                shopBlocks: U,
                refreshShopHome: z,
            } = (0, m.y)(
                v,
                {
                    noCache: L,
                    includeUnpublished: N,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: H,
                    tab: v,
                },
            ),
            V = r.useCallback(() => {
                z();
            }, [z]);
        return (r.useEffect(() => {
            null != F ||
                G ||
                0 === U.length ||
                (0, h.z)({
                    sessionId: H,
                    checkpoint: h.t.SHOP_RENDERED,
                    tab: v,
                    unpublishedCategoriesShown: N,
                    cacheDisabled: L,
                });
        }, [F, G, U.length, N, L, H, v]),
        null != F)
            ? (0, n.jsx)(E.h, {
                  onRetry: V,
                  errorOrigin: E.A.SHOP_PAGE,
                  errorMessage: F.message,
              })
            : G || 0 === U.length
              ? (0, n.jsxs)("div", {
                    className: a()(R.g4, R.Of),
                    children: [
                        (0, n.jsx)(O.A, {
                            isLoading: G,
                            handleTransition: c,
                            tab: v,
                        }),
                        (0, n.jsx)(S.A, {
                            isLoading: G,
                            handleTransition: c,
                            categories: [],
                        }),
                        (0, n.jsx)(C.A, {
                            isLoading: G,
                            title: v === I.G2.ORBS ? k.intl.string(k.t.dFgeuZ) : k.intl.string(k.t.NSv5KV),
                            numVisibleItems: u,
                            tab: v,
                        }),
                    ],
                })
              : (0, n.jsx)(n.Fragment, {
                    children: U.map((e, t) =>
                        ((e, t, l) => {
                            if (null == e) return null;
                            let r = null,
                                s = !1;
                            switch (e.type) {
                                case i.g.HERO:
                                    r = (0, n.jsx)(
                                        O.A,
                                        {
                                            isLoading: G,
                                            handleTransition: c,
                                            heroBlock: P ? D : e,
                                            tab: v,
                                        },
                                        l,
                                    );
                                    break;
                                case i.g.FEATURED:
                                    r = (0, n.jsx)(
                                        S.A,
                                        {
                                            isLoading: G,
                                            handleTransition: c,
                                            featuredBlockRecord: e,
                                        },
                                        l,
                                    );
                                    break;
                                case i.g.FEED:
                                    let b = e.sortedSkuIds;
                                    r = (0, n.jsx)(
                                        C.A,
                                        {
                                            title:
                                                v === I.G2.ORBS ? k.intl.string(k.t.dFgeuZ) : k.intl.string(k.t.NSv5KV),
                                            isLoading: G || f,
                                            numVisibleItems: u,
                                            sortedSkuIds: b,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === i.g.IMMERSIVE_BANNER ? R.w : void 0,
                                            prioritizeUserDiscounts: v === I.G2.HOME,
                                            tab: v,
                                            orbsSupportedOnly: v === I.G2.ORBS,
                                        },
                                        l,
                                    );
                                    break;
                                case i.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        var p;
                                        let t = null != (p = e.dismissibleContentVersion) ? p : 0,
                                            { isDismissed: l } = (0, d.En)(o.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (l) return null;
                                    }
                                    r = (0, n.jsx)(
                                        T.A,
                                        {
                                            wideBannerBlock: e,
                                            tab: v,
                                        },
                                        l,
                                    );
                                    break;
                                case i.g.SHELF:
                                    r = (0, n.jsx)(
                                        j.A,
                                        {
                                            handleTransition: c,
                                            shelf: e,
                                            tab: v,
                                        },
                                        l,
                                    );
                                    break;
                                case i.g.COUNTDOWN_TIMER:
                                    (r = (0, n.jsx)(
                                        x.S,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: w,
                                        },
                                        l,
                                    )),
                                        (s = !0);
                                    break;
                                case i.g.IMMERSIVE_BANNER:
                                    r = (0, n.jsx)(
                                        _.A,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => B(!e),
                                        },
                                        l,
                                    );
                                    break;
                                case i.g.REWARD_HERO:
                                    r = (0, n.jsx)(
                                        y.A,
                                        {
                                            isLoading: G,
                                            handleTransition: c,
                                            heroBlock: e,
                                            tab: v,
                                        },
                                        l,
                                    );
                                    break;
                                default:
                                    return null;
                            }
                            return (0, n.jsx)(g.rW, {
                                blockType: e.type,
                                children: (0, n.jsx)(
                                    "div",
                                    {
                                        className: a()(R.v1, R.Of, { [R.J1]: 0 === l || s }),
                                        children: r,
                                    },
                                    l,
                                ),
                            });
                        })(e, t > 0 ? U[t - 1] : null, t),
                    ),
                });
    },
    D = (e) => {
        let { handleTransition: t, tab: l, transitionState: s } = e,
            a = r.useRef(null),
            { handleScroll: i } = (0, u.X)(a, l),
            o = (0, v.U)(),
            d = (0, b.uM)(),
            [g, p] = r.useState(I.md),
            [m, h] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            g >= 36 ? h(e < 20) : e <= 200 && p((e) => e + I.md);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, g, p, h]),
            (0, n.jsx)(c.T7Y, {
                className: R.OW,
                ref: a,
                onScroll: i,
                children: (0, n.jsxs)("div", {
                    className: R.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: R.rb,
                            children: [
                                (0, n.jsx)(P, {
                                    handleTransition: t,
                                    numVisibleItems: g,
                                    isFetchingCategories: o,
                                    tab: l,
                                }),
                                l !== I.G2.CATALOG &&
                                    g >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: R.R$,
                                        children: [
                                            (0, n.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: k.intl.string(k.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(c.Button, {
                                                variant: "primary",
                                                text: k.intl.string(k.t.AfrvRD),
                                                onClick: () => {
                                                    t({
                                                        sourceButton: "shop all button",
                                                        shouldAnimate: !0,
                                                    }),
                                                        f.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == d ? void 0 : d.sessionId,
                                                            page_type: l,
                                                            page_category:
                                                                l === I.G2.HOME || null == d ? void 0 : d.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(L.A, {
                            peaking: m,
                            transitioning: s === I.Pf.OUT,
                        }),
                        (0, n.jsx)(L.A, {
                            style: { left: 1850 },
                            peaking: m,
                            transitioning: s === I.Pf.OUT,
                        }),
                    ],
                }),
            })
        );
    };
