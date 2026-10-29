l.d(t, { XU: () => L, Yr: () => C, k0: () => _ });
var u = l(582128),
    n = l(806163),
    r = l(17928),
    i = l(775602),
    c = l(793574),
    o = l(688810),
    s = l(590180),
    a = l(870216),
    d = l(298072),
    f = l(395856),
    p = l(238184),
    h = l(572595),
    S = l(722258),
    A = l(159439),
    E = l(57020),
    I = l(652215);
let k = "#itemSkuId=",
    m = RegExp(`^${k}(\\d+)$`),
    g = [I.BVt.COLLECTIBLES_SHOP];
function C(e) {
    let t = (0, n.zy)();
    u.useEffect(() => {
        if (null != e && g.includes(t.pathname))
            return () => {
                window.location.hash.startsWith(k) && window.location.replace("#");
            };
    }, [e, t.pathname]);
}
function L(e) {
    let t = (0, A.U)(),
        l = (0, f.$)("collectibles_deep_link"),
        i = u.useRef(null),
        k = (0, n.zy)(),
        g = k.pathname === I.BVt.COLLECTIBLES_SHOP ? c.A.HOME_PAGE_SHOP_TAB : c.A.COLLECTIBLES_SHOP,
        { analyticsLocations: C } = (0, o.Ay)(g),
        L = (0, p.A)();
    u.useEffect(() => {
        let e = m.exec(k.hash);
        null != e ? (i.current = e[1]) : (i.current = null);
    }, [L, k.hash]);
    let _ = (0, r.bG)([a.A], () => a.A.initialProductSkuId);
    u.useEffect(() => {
        if (!l && t) return;
        let u = null;
        if ((null != _ ? (u = _) : null != i.current && (u = i.current), null != u)) {
            let t = setTimeout(() => {
                l
                    ? (0, S.B)({ skuId: u, analyticsLocations: C, analyticsSource: g, tab: L, sessionId: e })
                    : (function (e) {
                          let { productSkuId: t, analyticsLocations: l, analyticsSource: u, tab: n, sessionId: r } = e,
                              i = s.A.getProduct(t),
                              c = s.A.getCategoryForProduct(t);
                          if (null != i && null != c) {
                              let e = i,
                                  o = (0, E.A)({ product: i }),
                                  a = document.getElementById(`shop-item-${e.skuId}`);
                              if ((a !== document.activeElement && a?.focus(), null != i.variantGroupStoreListingId)) {
                                  let l = s.A.getProductByStoreListingId(i.variantGroupStoreListingId);
                                  if (null != l) {
                                      e = l;
                                      let u = l.variants?.findIndex((e) => e.skuId === t);
                                      null != u && u > -1 && (0, d.n)(l, u);
                                  }
                              }
                              (0, h.t)({
                                  product: e,
                                  category: c,
                                  analyticsSource: u,
                                  analyticsLocations: l,
                                  tab: n,
                                  shouldCheckoutWithOrbs: o,
                                  sessionId: r,
                              });
                          }
                      })({ productSkuId: u, analyticsLocations: C, analyticsSource: g, tab: L, sessionId: e });
            }, 250);
            return () => clearTimeout(t);
        }
    }, [C, g, t, l, _, L, e]);
}
let _ = (e) => {
    let t = u.useRef({}),
        l = (0, r.bG)([i.Ay], () => i.Ay.useReducedMotion),
        n = (0, r.bG)([s.A], () => s.A.isFetchingCategories),
        [c, o] = u.useState(null),
        a = u.useCallback((e, l) => {
            t.current[e] = l;
        }, []),
        d = u.useCallback(
            (u) => {
                n
                    ? o(u)
                    : setTimeout(() => {
                          let n = t.current[u];
                          null != n &&
                              (e?.scrollIntoViewNode({ node: n, padding: 40, animate: !l, shouldScrollToStart: !0 }),
                              n.focus({ preventScroll: !0 }));
                      }, 100);
            },
            [e, l, n, o],
        );
    return (
        u.useEffect(() => {
            n || null == c || (d(c), o(null));
        }, [n, d, c, o]),
        { setCategoryRef: a, handleScrollToCategory: d }
    );
};
