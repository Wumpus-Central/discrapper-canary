n.d(t, {
    Kp: () => S,
    u9: () => v,
    xV: () => O,
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var r = n(647438),
    l = n(843611),
    i = n(442837),
    s = n(607070),
    o = n(100527),
    a = n(906732),
    c = n(819640),
    u = n(597688),
    d = n(328347),
    g = n(429368),
    f = n(410127),
    p = n(237031),
    C = n(258939),
    h = n(956472),
    _ = n(981631);
let m = "".concat("#").concat("itemSkuId", "="),
    b = new RegExp("^".concat(m, "(\\d+)$")),
    E = [_.Z5c.COLLECTIBLES_SHOP, _.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    v = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && E.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(m) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    S = () => {
        let e = (0, i.e7)([c.Z], () => c.Z.getLayers().includes(_.S9g.COLLECTIBLES_SHOP)),
            t = (0, C.R)(),
            n = r.useRef(null),
            s = (0, l.TH)(),
            m =
                s.pathname === _.Z5c.COLLECTIBLES_SHOP
                    ? o.Z.HOME_PAGE_SHOP_TAB
                    : s.pathname === _.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
                      ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN
                      : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: E } = (0, a.ZP)(m),
            v = (0, f.Z)();
        r.useEffect(() => {
            if (e) return;
            let t = b.exec(s.hash);
            null != t ? (n.current = t[1]) : (n.current = null);
        }, [v, e, s.hash]);
        let S = (0, i.e7)([d.Z], () => d.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let r = null;
            if (null != (r = e ? S : n.current)) {
                let e = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, tab: l } = e,
                            i = u.Z.getProduct(t),
                            s = u.Z.getCategoryForProduct(t);
                        if (null != i && null != s) {
                            let e = i,
                                a = (0, h.oQ)({ product: i }),
                                c = document.getElementById("shop-item-".concat(e.skuId));
                            if (
                                (c !== document.activeElement && (null == c || c.focus()),
                                null != i.variantGroupStoreListingId)
                            ) {
                                let n = u.Z.getProductByStoreListingId(i.variantGroupStoreListingId);
                                if (null != n) {
                                    var o;
                                    e = n;
                                    let r = null == (o = n.variants) ? void 0 : o.findIndex((e) => e.skuId === t);
                                    null != r && r > -1 && (0, g.$)(n, r);
                                }
                            }
                            (0, p.T)({
                                product: e,
                                category: s,
                                analyticsSource: r,
                                analyticsLocations: n,
                                tab: l,
                                shouldCheckoutWithOrbs: a,
                            });
                        }
                    })({
                        productSkuId: r,
                        analyticsLocations: E,
                        analyticsSource: m,
                        tab: v,
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [e, E, m, t, S, v]);
    },
    O = (e) => {
        let t = r.useRef({}),
            n = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            l = (0, i.e7)([u.Z], () => u.Z.isFetchingCategories),
            [o, a] = r.useState(null),
            c = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            d = r.useCallback(
                (r) => {
                    l
                        ? a(r)
                        : setTimeout(() => {
                              let l = t.current[r];
                              null != l &&
                                  (null == e ||
                                      e.scrollIntoViewNode({
                                          node: l,
                                          padding: 48,
                                          animate: !n,
                                          shouldScrollToStart: !0,
                                      }));
                          }, 100);
                },
                [e, n, l, a],
            );
        return (
            r.useEffect(() => {
                l || null == o || (d(o), a(null));
            }, [l, d, o, a]),
            {
                setCategoryRef: c,
                handleScrollToCategory: d,
            }
        );
    };
