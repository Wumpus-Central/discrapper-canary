l.d(t, { XU: () => k, Yr: () => g, k0: () => C });
var u = l(64700),
    n = l(873263),
    r = l(17928),
    i = l(775602),
    o = l(793574),
    a = l(688810),
    c = l(590180),
    s = l(870216),
    d = l(298072),
    f = l(238184),
    h = l(572595),
    p = l(159439),
    A = l(57020),
    S = l(652215);
let E = "#itemSkuId=",
    I = RegExp(`^${E}(\\d+)$`),
    m = [S.BVt.COLLECTIBLES_SHOP],
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
        let t = (0, p.U)(),
            l = u.useRef(null),
            i = (0, n.zy)(),
            E = i.pathname === S.BVt.COLLECTIBLES_SHOP ? o.A.HOME_PAGE_SHOP_TAB : o.A.COLLECTIBLES_SHOP,
            { analyticsLocations: m } = (0, a.Ay)(E),
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
                            i = c.A.getProduct(t),
                            o = c.A.getCategoryForProduct(t);
                        if (null != i && null != o) {
                            let e = i,
                                a = (0, A.A)({ product: i }),
                                s = document.getElementById(`shop-item-${e.skuId}`);
                            if ((s !== document.activeElement && s?.focus(), null != i.variantGroupStoreListingId)) {
                                let l = c.A.getProductByStoreListingId(i.variantGroupStoreListingId);
                                if (null != l) {
                                    e = l;
                                    let u = l.variants?.findIndex((e) => e.skuId === t);
                                    null != u && u > -1 && (0, d.n)(l, u);
                                }
                            }
                            (0, h.t)({
                                product: e,
                                category: o,
                                analyticsSource: u,
                                analyticsLocations: l,
                                tab: n,
                                shouldCheckoutWithOrbs: a,
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
            n = (0, r.bG)([c.A], () => c.A.isFetchingCategories),
            [o, a] = u.useState(null),
            s = u.useCallback((e, l) => {
                t.current[e] = l;
            }, []),
            d = u.useCallback(
                (u) => {
                    n
                        ? a(u)
                        : setTimeout(() => {
                              let n = t.current[u];
                              null != n &&
                                  e?.scrollIntoViewNode({ node: n, padding: 48, animate: !l, shouldScrollToStart: !0 });
                          }, 100);
                },
                [e, l, n, a],
            );
        return (
            u.useEffect(() => {
                n || null == o || (d(o), a(null));
            }, [n, d, o, a]),
            { setCategoryRef: s, handleScrollToCategory: d }
        );
    };
