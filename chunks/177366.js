"use strict";
s.d(t, { XU: () => C, Yr: () => b, k0: () => A });
var n = s(64700),
    r = s(873263),
    l = s(311907),
    a = s(775602),
    i = s(793574),
    o = s(688810),
    c = s(590180),
    d = s(870216),
    u = s(298072),
    _ = s(238184),
    g = s(572595),
    m = s(159439),
    h = s(57020),
    p = s(652215);
let f = "#itemSkuId=",
    x = RegExp(`^${f}(\\d+)$`),
    E = [p.BVt.COLLECTIBLES_SHOP],
    b = (e) => {
        let t = (0, r.zy)();
        n.useEffect(() => {
            if (null != e && E.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(f) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    C = (e) => {
        let t = (0, m.U)(),
            s = n.useRef(null),
            a = (0, r.zy)(),
            f = a.pathname === p.BVt.COLLECTIBLES_SHOP ? i.A.HOME_PAGE_SHOP_TAB : i.A.COLLECTIBLES_SHOP,
            { analyticsLocations: E } = (0, o.Ay)(f),
            b = (0, _.A)();
        n.useEffect(() => {
            let e = x.exec(a.hash);
            null != e ? (s.current = e[1]) : (s.current = null);
        }, [b, a.hash]);
        let C = (0, l.bG)([d.A], () => d.A.initialProductSkuId);
        n.useEffect(() => {
            if (t) return;
            let n = null;
            if ((null != C ? (n = C) : null != s.current && (n = s.current), null != n)) {
                let t = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: s, analyticsSource: n, tab: r, sessionId: l } = e,
                            a = c.A.getProduct(t),
                            i = c.A.getCategoryForProduct(t);
                        if (null != a && null != i) {
                            let e = a,
                                o = (0, h.A)({ product: a }),
                                d = document.getElementById(`shop-item-${e.skuId}`);
                            if ((d !== document.activeElement && d?.focus(), null != a.variantGroupStoreListingId)) {
                                let s = c.A.getProductByStoreListingId(a.variantGroupStoreListingId);
                                if (null != s) {
                                    e = s;
                                    let n = s.variants?.findIndex((e) => e.skuId === t);
                                    null != n && n > -1 && (0, u.n)(s, n);
                                }
                            }
                            (0, g.t)({
                                product: e,
                                category: i,
                                analyticsSource: n,
                                analyticsLocations: s,
                                tab: r,
                                shouldCheckoutWithOrbs: o,
                                sessionId: l,
                            });
                        }
                    })({ productSkuId: n, analyticsLocations: E, analyticsSource: f, tab: b, sessionId: e });
                }, 250);
                return () => clearTimeout(t);
            }
        }, [E, f, t, C, b, e]);
    },
    A = (e) => {
        let t = n.useRef({}),
            s = (0, l.bG)([a.A], () => a.A.useReducedMotion),
            r = (0, l.bG)([c.A], () => c.A.isFetchingCategories),
            [i, o] = n.useState(null),
            d = n.useCallback((e, s) => {
                t.current[e] = s;
            }, []),
            u = n.useCallback(
                (n) => {
                    r
                        ? o(n)
                        : setTimeout(() => {
                              let r = t.current[n];
                              null != r &&
                                  e?.scrollIntoViewNode({ node: r, padding: 48, animate: !s, shouldScrollToStart: !0 });
                          }, 100);
                },
                [e, s, r, o],
            );
        return (
            n.useEffect(() => {
                r || null == i || (u(i), o(null));
            }, [r, u, i, o]),
            { setCategoryRef: d, handleScrollToCategory: u }
        );
    };
