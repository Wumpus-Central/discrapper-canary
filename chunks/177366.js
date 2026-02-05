"use strict";
s.d(t, { XU: () => A, Yr: () => b, k0: () => x });
var n = s(64700),
    r = s(960488),
    l = s(311907),
    a = s(775602),
    i = s(793574),
    o = s(688810),
    c = s(590180),
    d = s(870216),
    u = s(298072),
    g = s(238184),
    m = s(572595),
    _ = s(159439),
    h = s(57020),
    p = s(652215);
let f = "#itemSkuId=",
    E = RegExp(`^${f}(\\d+)$`),
    C = [p.BVt.COLLECTIBLES_SHOP],
    b = (e) => {
        let t = (0, r.zy)();
        n.useEffect(() => {
            if (null != e && C.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(f) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    A = () => {
        let e = (0, _.U)(),
            t = n.useRef(null),
            s = (0, r.zy)(),
            a = s.pathname === p.BVt.COLLECTIBLES_SHOP ? i.A.HOME_PAGE_SHOP_TAB : i.A.COLLECTIBLES_SHOP,
            { analyticsLocations: f } = (0, o.Ay)(a),
            C = (0, g.A)();
        n.useEffect(() => {
            let e = E.exec(s.hash);
            null != e ? (t.current = e[1]) : (t.current = null);
        }, [C, s.hash]);
        let b = (0, l.bG)([d.A], () => d.A.initialProductSkuId);
        n.useEffect(() => {
            if (e) return;
            let s = null;
            if ((null != b ? (s = b) : null != t.current && (s = t.current), null != s)) {
                let e = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: s, analyticsSource: n, tab: r } = e,
                            l = c.A.getProduct(t),
                            a = c.A.getCategoryForProduct(t);
                        if (null != l && null != a) {
                            let e = l,
                                i = (0, h.Ak)({ product: l }),
                                o = document.getElementById(`shop-item-${e.skuId}`);
                            if ((o !== document.activeElement && o?.focus(), null != l.variantGroupStoreListingId)) {
                                let s = c.A.getProductByStoreListingId(l.variantGroupStoreListingId);
                                if (null != s) {
                                    e = s;
                                    let n = s.variants?.findIndex((e) => e.skuId === t);
                                    null != n && n > -1 && (0, u.n)(s, n);
                                }
                            }
                            (0, m.t)({
                                product: e,
                                category: a,
                                analyticsSource: n,
                                analyticsLocations: s,
                                tab: r,
                                shouldCheckoutWithOrbs: i,
                            });
                        }
                    })({ productSkuId: s, analyticsLocations: f, analyticsSource: a, tab: C });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [f, a, e, b, C]);
    },
    x = (e) => {
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
