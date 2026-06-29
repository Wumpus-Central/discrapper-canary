l.d(t, { XU: () => k, Yr: () => g, k0: () => C });
var u = l(64700),
    n = l(873263),
    r = l(17928),
    i = l(775602),
    o = l(793574),
    c = l(688810),
    a = l(590180),
    s = l(870216),
    d = l(298072),
    f = l(238184),
    p = l(572595),
    h = l(159439),
    S = l(57020),
    A = l(652215);
let E = "#itemSkuId=",
    I = RegExp(`^${E}(\\d+)$`),
    m = [A.BVt.COLLECTIBLES_SHOP],
    g = (e) => {
        let t = (0, n.zy)();
        u.useEffect(() => {
            if (null != e && m.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(E) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    k = (e) => {
        let t = (0, h.U)(),
            l = u.useRef(null),
            i = (0, n.zy)(),
            E = i.pathname === A.BVt.COLLECTIBLES_SHOP ? o.A.HOME_PAGE_SHOP_TAB : o.A.COLLECTIBLES_SHOP,
            { analyticsLocations: m } = (0, c.Ay)(E),
            g = (0, f.A)();
        u.useEffect(() => {
            let e = I.exec(i.hash);
            null != e ? (l.current = e[1]) : (l.current = null);
        }, [g, i.hash]);
        let k = (0, r.bG)([s.A], () => s.A.initialProductSkuId);
        u.useEffect(() => {
            if (t) return;
            let u = null;
            if ((null != k ? (u = k) : null != l.current && (u = l.current), null != u)) {
                let t = setTimeout(() => {
                    !(function (e) {
                        let { productSkuId: t, analyticsLocations: l, analyticsSource: u, tab: n, sessionId: r } = e,
                            i = a.A.getProduct(t),
                            o = a.A.getCategoryForProduct(t);
                        if (null != i && null != o) {
                            let e = i,
                                c = (0, S.A)({ product: i }),
                                s = document.getElementById(`shop-item-${e.skuId}`);
                            if ((s !== document.activeElement && s?.focus(), null != i.variantGroupStoreListingId)) {
                                let l = a.A.getProductByStoreListingId(i.variantGroupStoreListingId);
                                if (null != l) {
                                    e = l;
                                    let u = l.variants?.findIndex((e) => e.skuId === t);
                                    null != u && u > -1 && (0, d.n)(l, u);
                                }
                            }
                            (0, p.t)({
                                product: e,
                                category: o,
                                analyticsSource: u,
                                analyticsLocations: l,
                                tab: n,
                                shouldCheckoutWithOrbs: c,
                                sessionId: r,
                            });
                        }
                    })({ productSkuId: u, analyticsLocations: m, analyticsSource: E, tab: g, sessionId: e });
                }, 250);
                return () => clearTimeout(t);
            }
        }, [m, E, t, k, g, e]);
    },
    C = (e) => {
        let t = u.useRef({}),
            l = (0, r.bG)([i.Ay], () => i.Ay.useReducedMotion),
            n = (0, r.bG)([a.A], () => a.A.isFetchingCategories),
            [o, c] = u.useState(null),
            s = u.useCallback((e, l) => {
                t.current[e] = l;
            }, []),
            d = u.useCallback(
                (u) => {
                    n
                        ? c(u)
                        : setTimeout(() => {
                              let n = t.current[u];
                              null != n &&
                                  (e?.scrollIntoViewNode({
                                      node: n,
                                      padding: 40,
                                      animate: !l,
                                      shouldScrollToStart: !0,
                                  }),
                                  n.focus({ preventScroll: !0 }));
                          }, 100);
                },
                [e, l, n, c],
            );
        return (
            u.useEffect(() => {
                n || null == o || (d(o), c(null));
            }, [n, d, o, c]),
            { setCategoryRef: s, handleScrollToCategory: d }
        );
    };
