r.d(t, {
    Kp: () => E,
    u9: () => C,
    xV: () => y,
}),
    r(413496),
    r(433524),
    r(35282),
    r(704826),
    r(388685);
var n = r(647438),
    l = r(843611),
    a = r(442837),
    i = r(607070),
    o = r(100527),
    s = r(906732),
    c = r(819640),
    u = r(597688),
    d = r(328347),
    p = r(429368),
    g = r(410127),
    f = r(237031),
    b = r(258939),
    m = r(956472),
    h = r(981631);
let _ = "".concat("#").concat("itemSkuId", "="),
    v = new RegExp("^".concat(_, "(\\d+)$")),
    O = [h.Z5c.COLLECTIBLES_SHOP, h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    C = (e) => {
        let t = (0, l.TH)();
        n.useEffect(() => {
            if (null != e && O.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(_) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    E = () => {
        let e = (0, a.e7)([c.Z], () => c.Z.getLayers().includes(h.S9g.COLLECTIBLES_SHOP)),
            t = (0, b.R)(),
            r = n.useRef(null),
            i = (0, l.TH)(),
            _ =
                i.pathname === h.Z5c.COLLECTIBLES_SHOP
                    ? o.Z.HOME_PAGE_SHOP_TAB
                    : i.pathname === h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
                      ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN
                      : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: O } = (0, s.ZP)(_),
            C = (0, g.Z)();
        n.useEffect(() => {
            if (e) return;
            let t = v.exec(i.hash);
            null != t ? (r.current = t[1]) : (r.current = null);
        }, [C, e, i.hash]);
        let E = (0, a.e7)([d.Z], () => d.Z.initialProductSkuId);
        n.useEffect(() => {
            if (t) return;
            let n = null;
            if (null != (n = e ? E : r.current)) {
                let e = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: r, analyticsSource: n, tab: l } = e,
                            a = u.Z.getProduct(t),
                            i = u.Z.getCategoryForProduct(t);
                        if (null != a && null != i) {
                            let e = a,
                                s = (0, m.oQ)({ product: a }),
                                c = document.getElementById("shop-item-".concat(e.skuId));
                            if (
                                (c !== document.activeElement && (null == c || c.focus()),
                                null != a.variantGroupStoreListingId)
                            ) {
                                let r = u.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                                if (null != r) {
                                    var o;
                                    e = r;
                                    let n = null == (o = r.variants) ? void 0 : o.findIndex((e) => e.skuId === t);
                                    null != n && n > -1 && (0, p.$)(r, n);
                                }
                            }
                            (0, f.T)({
                                product: e,
                                category: i,
                                analyticsSource: n,
                                analyticsLocations: r,
                                tab: l,
                                shouldCheckoutWithOrbs: s,
                            });
                        }
                    })({
                        productSkuId: n,
                        analyticsLocations: O,
                        analyticsSource: _,
                        tab: C,
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [e, O, _, t, E, C]);
    },
    y = (e) => {
        let t = n.useRef({}),
            r = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
            l = (0, a.e7)([u.Z], () => u.Z.isFetchingCategories),
            [o, s] = n.useState(null),
            c = n.useCallback((e, r) => {
                t.current[e] = r;
            }, []),
            d = n.useCallback(
                (n) => {
                    l
                        ? s(n)
                        : setTimeout(() => {
                              let l = t.current[n];
                              null != l &&
                                  (null == e ||
                                      e.scrollIntoViewNode({
                                          node: l,
                                          padding: 48,
                                          animate: !r,
                                          shouldScrollToStart: !0,
                                      }));
                          }, 100);
                },
                [e, r, l, s],
            );
        return (
            n.useEffect(() => {
                l || null == o || (d(o), s(null));
            }, [l, d, o, s]),
            {
                setCategoryRef: c,
                handleScrollToCategory: d,
            }
        );
    };
