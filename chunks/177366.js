i.d(e, { XU: () => k, Yr: () => S, k0: () => y });
var l = i(64700),
    n = i(873263),
    a = i(17928),
    o = i(775602),
    r = i(793574),
    u = i(688810),
    d = i(590180),
    s = i(870216),
    c = i(298072),
    f = i(238184),
    p = i(572595),
    h = i(159439),
    m = i(57020),
    g = i(652215);
let _ = "#itemSkuId=",
    E = RegExp(`^${_}(\\d+)$`),
    C = [g.BVt.COLLECTIBLES_SHOP],
    S = (t) => {
        let e = (0, n.zy)();
        l.useEffect(() => {
            if (null != t && C.includes(e.pathname))
                return () => {
                    window.location.hash.startsWith(_) && window.location.replace("#");
                };
        }, [t, e.pathname]);
    },
    k = (t) => {
        let e = (0, h.U)(),
            i = l.useRef(null),
            o = (0, n.zy)(),
            _ = o.pathname === g.BVt.COLLECTIBLES_SHOP ? r.A.HOME_PAGE_SHOP_TAB : r.A.COLLECTIBLES_SHOP,
            { analyticsLocations: C } = (0, u.Ay)(_),
            S = (0, f.A)();
        l.useEffect(() => {
            let t = E.exec(o.hash);
            null != t ? (i.current = t[1]) : (i.current = null);
        }, [S, o.hash]);
        let k = (0, a.bG)([s.A], () => s.A.initialProductSkuId);
        l.useEffect(() => {
            if (e) return;
            let l = null;
            if ((null != k ? (l = k) : null != i.current && (l = i.current), null != l)) {
                let e = setTimeout(() => {
                    ((t) => {
                        let { productSkuId: e, analyticsLocations: i, analyticsSource: l, tab: n, sessionId: a } = t,
                            o = d.A.getProduct(e),
                            r = d.A.getCategoryForProduct(e);
                        if (null != o && null != r) {
                            let t = o,
                                u = (0, m.A)({ product: o }),
                                s = document.getElementById(`shop-item-${t.skuId}`);
                            if ((s !== document.activeElement && s?.focus(), null != o.variantGroupStoreListingId)) {
                                let i = d.A.getProductByStoreListingId(o.variantGroupStoreListingId);
                                if (null != i) {
                                    t = i;
                                    let l = i.variants?.findIndex((t) => t.skuId === e);
                                    null != l && l > -1 && (0, c.n)(i, l);
                                }
                            }
                            (0, p.t)({
                                product: t,
                                category: r,
                                analyticsSource: l,
                                analyticsLocations: i,
                                tab: n,
                                shouldCheckoutWithOrbs: u,
                                sessionId: a,
                            });
                        }
                    })({ productSkuId: l, analyticsLocations: C, analyticsSource: _, tab: S, sessionId: t });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [C, _, e, k, S, t]);
    },
    y = (t) => {
        let e = l.useRef({}),
            i = (0, a.bG)([o.A], () => o.A.useReducedMotion),
            n = (0, a.bG)([d.A], () => d.A.isFetchingCategories),
            [r, u] = l.useState(null),
            s = l.useCallback((t, i) => {
                e.current[t] = i;
            }, []),
            c = l.useCallback(
                (l) => {
                    n
                        ? u(l)
                        : setTimeout(() => {
                              let n = e.current[l];
                              null != n &&
                                  t?.scrollIntoViewNode({ node: n, padding: 48, animate: !i, shouldScrollToStart: !0 });
                          }, 100);
                },
                [t, i, n, u],
            );
        return (
            l.useEffect(() => {
                n || null == r || (c(r), u(null));
            }, [n, c, r, u]),
            { setCategoryRef: s, handleScrollToCategory: c }
        );
    };
