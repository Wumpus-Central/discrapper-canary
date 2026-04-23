"use strict";
n.d(t, { XU: () => b, Yr: () => C, k0: () => A });
var s = n(64700),
    l = n(873263),
    a = n(17928),
    r = n(775602),
    i = n(793574),
    o = n(688810),
    c = n(590180),
    d = n(870216),
    u = n(298072),
    g = n(238184),
    h = n(572595),
    _ = n(159439),
    m = n(57020),
    p = n(652215);
let f = "#itemSkuId=",
    E = RegExp(`^${f}(\\d+)$`),
    x = [p.BVt.COLLECTIBLES_SHOP],
    C = (e) => {
        let t = (0, l.zy)();
        s.useEffect(() => {
            if (null != e && x.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(f) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    b = (e) => {
        let t = (0, _.U)(),
            n = s.useRef(null),
            r = (0, l.zy)(),
            f = r.pathname === p.BVt.COLLECTIBLES_SHOP ? i.A.HOME_PAGE_SHOP_TAB : i.A.COLLECTIBLES_SHOP,
            { analyticsLocations: x } = (0, o.Ay)(f),
            C = (0, g.A)();
        s.useEffect(() => {
            let e = E.exec(r.hash);
            null != e ? (n.current = e[1]) : (n.current = null);
        }, [C, r.hash]);
        let b = (0, a.bG)([d.A], () => d.A.initialProductSkuId);
        s.useEffect(() => {
            if (t) return;
            let s = null;
            if ((null != b ? (s = b) : null != n.current && (s = n.current), null != s)) {
                let t = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: n, analyticsSource: s, tab: l, sessionId: a } = e,
                            r = c.A.getProduct(t),
                            i = c.A.getCategoryForProduct(t);
                        if (null != r && null != i) {
                            let e = r,
                                o = (0, m.A)({ product: r }),
                                d = document.getElementById(`shop-item-${e.skuId}`);
                            if ((d !== document.activeElement && d?.focus(), null != r.variantGroupStoreListingId)) {
                                let n = c.A.getProductByStoreListingId(r.variantGroupStoreListingId);
                                if (null != n) {
                                    e = n;
                                    let s = n.variants?.findIndex((e) => e.skuId === t);
                                    null != s && s > -1 && (0, u.n)(n, s);
                                }
                            }
                            (0, h.t)({
                                product: e,
                                category: i,
                                analyticsSource: s,
                                analyticsLocations: n,
                                tab: l,
                                shouldCheckoutWithOrbs: o,
                                sessionId: a,
                            });
                        }
                    })({ productSkuId: s, analyticsLocations: x, analyticsSource: f, tab: C, sessionId: e });
                }, 250);
                return () => clearTimeout(t);
            }
        }, [x, f, t, b, C, e]);
    },
    A = (e) => {
        let t = s.useRef({}),
            n = (0, a.bG)([r.A], () => r.A.useReducedMotion),
            l = (0, a.bG)([c.A], () => c.A.isFetchingCategories),
            [i, o] = s.useState(null),
            d = s.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            u = s.useCallback(
                (s) => {
                    l
                        ? o(s)
                        : setTimeout(() => {
                              let l = t.current[s];
                              null != l &&
                                  e?.scrollIntoViewNode({ node: l, padding: 48, animate: !n, shouldScrollToStart: !0 });
                          }, 100);
                },
                [e, n, l, o],
            );
        return (
            s.useEffect(() => {
                l || null == i || (u(i), o(null));
            }, [l, u, i, o]),
            { setCategoryRef: d, handleScrollToCategory: u }
        );
    };
