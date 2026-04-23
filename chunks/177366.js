"use strict";
s.d(t, { XU: () => C, Yr: () => A, k0: () => S });
var n = s(64700),
    l = s(873263),
    r = s(311907),
    a = s(775602),
    i = s(793574),
    o = s(688810),
    c = s(590180),
    d = s(870216),
    u = s(298072),
    g = s(238184),
    h = s(572595),
    _ = s(159439),
    m = s(57020),
    p = s(652215);
let f = "#itemSkuId=",
    E = RegExp(`^${f}(\\d+)$`),
    x = [p.BVt.COLLECTIBLES_SHOP],
    A = (e) => {
        let t = (0, l.zy)();
        n.useEffect(() => {
            if (null != e && x.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(f) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    C = (e) => {
        let t = (0, _.U)(),
            s = n.useRef(null),
            a = (0, l.zy)(),
            f = a.pathname === p.BVt.COLLECTIBLES_SHOP ? i.A.HOME_PAGE_SHOP_TAB : i.A.COLLECTIBLES_SHOP,
            { analyticsLocations: x } = (0, o.Ay)(f),
            A = (0, g.A)();
        n.useEffect(() => {
            let e = E.exec(a.hash);
            null != e ? (s.current = e[1]) : (s.current = null);
        }, [A, a.hash]);
        let C = (0, r.bG)([d.A], () => d.A.initialProductSkuId);
        n.useEffect(() => {
            if (t) return;
            let n = null;
            if ((null != C ? (n = C) : null != s.current && (n = s.current), null != n)) {
                let t = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: s, analyticsSource: n, tab: l, sessionId: r } = e,
                            a = c.A.getProduct(t),
                            i = c.A.getCategoryForProduct(t);
                        if (null != a && null != i) {
                            let e = a,
                                o = (0, m.A)({ product: a }),
                                d = document.getElementById(`shop-item-${e.skuId}`);
                            if ((d !== document.activeElement && d?.focus(), null != a.variantGroupStoreListingId)) {
                                let s = c.A.getProductByStoreListingId(a.variantGroupStoreListingId);
                                if (null != s) {
                                    e = s;
                                    let n = s.variants?.findIndex((e) => e.skuId === t);
                                    null != n && n > -1 && (0, u.n)(s, n);
                                }
                            }
                            (0, h.t)({
                                product: e,
                                category: i,
                                analyticsSource: n,
                                analyticsLocations: s,
                                tab: l,
                                shouldCheckoutWithOrbs: o,
                                sessionId: r,
                            });
                        }
                    })({ productSkuId: n, analyticsLocations: x, analyticsSource: f, tab: A, sessionId: e });
                }, 250);
                return () => clearTimeout(t);
            }
        }, [x, f, t, C, A, e]);
    },
    S = (e) => {
        let t = n.useRef({}),
            s = (0, r.bG)([a.A], () => a.A.useReducedMotion),
            l = (0, r.bG)([c.A], () => c.A.isFetchingCategories),
            [i, o] = n.useState(null),
            d = n.useCallback((e, s) => {
                t.current[e] = s;
            }, []),
            u = n.useCallback(
                (n) => {
                    l
                        ? o(n)
                        : setTimeout(() => {
                              let l = t.current[n];
                              null != l &&
                                  e?.scrollIntoViewNode({ node: l, padding: 48, animate: !s, shouldScrollToStart: !0 });
                          }, 100);
                },
                [e, s, l, o],
            );
        return (
            n.useEffect(() => {
                l || null == i || (u(i), o(null));
            }, [l, u, i, o]),
            { setCategoryRef: d, handleScrollToCategory: u }
        );
    };
