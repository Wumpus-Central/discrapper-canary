l.d(t, {
    XU: () => x,
    Yr: () => A,
    k0: () => S,
}),
    l(591487),
    l(727858),
    l(747238),
    l(812715),
    l(896048);
var n = l(64700),
    r = l(960488),
    s = l(311907),
    a = l(775602),
    i = l(793574),
    o = l(688810),
    c = l(590180),
    u = l(870216),
    d = l(298072),
    f = l(238184),
    b = l(572595),
    g = l(159439),
    p = l(57020),
    m = l(652215);
let h = "".concat("#").concat("itemSkuId", "="),
    E = new RegExp("^".concat(h, "(\\d+)$")),
    v = [m.BVt.COLLECTIBLES_SHOP],
    A = (e) => {
        let t = (0, r.zy)();
        n.useEffect(() => {
            if (null != e && v.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(h) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    x = () => {
        let e = (0, g.U)(),
            t = n.useRef(null),
            l = (0, r.zy)(),
            a = l.pathname === m.BVt.COLLECTIBLES_SHOP ? i.A.HOME_PAGE_SHOP_TAB : i.A.COLLECTIBLES_SHOP,
            { analyticsLocations: h } = (0, o.Ay)(a),
            v = (0, f.A)();
        n.useEffect(() => {
            let e = E.exec(l.hash);
            null != e ? (t.current = e[1]) : (t.current = null);
        }, [v, l.hash]);
        let A = (0, s.bG)([u.A], () => u.A.initialProductSkuId);
        n.useEffect(() => {
            if (e) return;
            let l = null;
            if ((null != A ? (l = A) : null != t.current && (l = t.current), null != l)) {
                let e = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: l, analyticsSource: n, tab: r } = e,
                            s = c.A.getProduct(t),
                            a = c.A.getCategoryForProduct(t);
                        if (null != s && null != a) {
                            let e = s,
                                o = (0, p.Ak)({
                                    product: s,
                                }),
                                u = document.getElementById("shop-item-".concat(e.skuId));
                            if (
                                (u !== document.activeElement && (null == u || u.focus()),
                                null != s.variantGroupStoreListingId)
                            ) {
                                let l = c.A.getProductByStoreListingId(s.variantGroupStoreListingId);
                                if (null != l) {
                                    var i;
                                    e = l;
                                    let n = null == (i = l.variants) ? void 0 : i.findIndex((e) => e.skuId === t);
                                    null != n && n > -1 && (0, d.n)(l, n);
                                }
                            }
                            (0, b.t)({
                                product: e,
                                category: a,
                                analyticsSource: n,
                                analyticsLocations: l,
                                tab: r,
                                shouldCheckoutWithOrbs: o,
                            });
                        }
                    })({
                        productSkuId: l,
                        analyticsLocations: h,
                        analyticsSource: a,
                        tab: v,
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [h, a, e, A, v]);
    },
    S = (e) => {
        let t = n.useRef({}),
            l = (0, s.bG)([a.A], () => a.A.useReducedMotion),
            r = (0, s.bG)([c.A], () => c.A.isFetchingCategories),
            [i, o] = n.useState(null),
            u = n.useCallback((e, l) => {
                t.current[e] = l;
            }, []),
            d = n.useCallback(
                (n) => {
                    r
                        ? o(n)
                        : setTimeout(() => {
                              let r = t.current[n];
                              null != r &&
                                  (null == e ||
                                      e.scrollIntoViewNode({
                                          node: r,
                                          padding: 48,
                                          animate: !l,
                                          shouldScrollToStart: !0,
                                      }));
                          }, 100);
                },
                [e, l, r, o],
            );
        return (
            n.useEffect(() => {
                r || null == i || (d(i), o(null));
            }, [r, d, i, o]),
            {
                setCategoryRef: u,
                handleScrollToCategory: d,
            }
        );
    };
