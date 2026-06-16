i.d(e, { XU: () => I, Yr: () => C, k0: () => k });
var l = i(64700),
    n = i(873263),
    r = i(17928),
    u = i(775602),
    a = i(793574),
    o = i(688810),
    s = i(590180),
    c = i(870216),
    d = i(298072),
    p = i(238184),
    f = i(572595),
    h = i(159439),
    m = i(57020),
    A = i(652215);
let E = "#itemSkuId=",
    S = RegExp(`^${E}(\\d+)$`),
    g = [A.BVt.COLLECTIBLES_SHOP],
    C = (t) => {
        let e = (0, n.zy)();
        l.useEffect(() => {
            if (null != t && g.includes(e.pathname))
                return () => {
                    window.location.hash.startsWith(E) && window.location.replace("#");
                };
        }, [t, e.pathname]);
    },
    I = (t) => {
        let e = (0, h.U)(),
            i = l.useRef(null),
            u = (0, n.zy)(),
            E = u.pathname === A.BVt.COLLECTIBLES_SHOP ? a.A.HOME_PAGE_SHOP_TAB : a.A.COLLECTIBLES_SHOP,
            { analyticsLocations: g } = (0, o.Ay)(E),
            C = (0, p.A)();
        l.useEffect(() => {
            let t = S.exec(u.hash);
            null != t ? (i.current = t[1]) : (i.current = null);
        }, [C, u.hash]);
        let I = (0, r.bG)([c.A], () => c.A.initialProductSkuId);
        l.useEffect(() => {
            if (e) return;
            let l = null;
            if ((null != I ? (l = I) : null != i.current && (l = i.current), null != l)) {
                let e = setTimeout(() => {
                    ((t) => {
                        let { productSkuId: e, analyticsLocations: i, analyticsSource: l, tab: n, sessionId: r } = t,
                            u = s.A.getProduct(e),
                            a = s.A.getCategoryForProduct(e);
                        if (null != u && null != a) {
                            let t = u,
                                o = (0, m.A)({ product: u }),
                                c = document.getElementById(`shop-item-${t.skuId}`);
                            if ((c !== document.activeElement && c?.focus(), null != u.variantGroupStoreListingId)) {
                                let i = s.A.getProductByStoreListingId(u.variantGroupStoreListingId);
                                if (null != i) {
                                    t = i;
                                    let l = i.variants?.findIndex((t) => t.skuId === e);
                                    null != l && l > -1 && (0, d.n)(i, l);
                                }
                            }
                            (0, f.t)({
                                product: t,
                                category: a,
                                analyticsSource: l,
                                analyticsLocations: i,
                                tab: n,
                                shouldCheckoutWithOrbs: o,
                                sessionId: r,
                            });
                        }
                    })({ productSkuId: l, analyticsLocations: g, analyticsSource: E, tab: C, sessionId: t });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [g, E, e, I, C, t]);
    },
    k = (t) => {
        let e = l.useRef({}),
            i = (0, r.bG)([u.Ay], () => u.Ay.useReducedMotion),
            n = (0, r.bG)([s.A], () => s.A.isFetchingCategories),
            [a, o] = l.useState(null),
            c = l.useCallback((t, i) => {
                e.current[t] = i;
            }, []),
            d = l.useCallback(
                (l) => {
                    n
                        ? o(l)
                        : setTimeout(() => {
                              let n = e.current[l];
                              null != n &&
                                  t?.scrollIntoViewNode({ node: n, padding: 48, animate: !i, shouldScrollToStart: !0 });
                          }, 100);
                },
                [t, i, n, o],
            );
        return (
            l.useEffect(() => {
                n || null == a || (d(a), o(null));
            }, [n, d, a, o]),
            { setCategoryRef: c, handleScrollToCategory: d }
        );
    };
