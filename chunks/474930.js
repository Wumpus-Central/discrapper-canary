function r(e, t, n, r) {
    var i, a, l, o, c, s, u, d;
    let f = null,
        g = null;
    n < r
        ? ((f = null != (l = null == (i = t[r]) ? void 0 : i.skuId) ? l : null),
          (g = null != (o = null == (a = t[r + 1]) ? void 0 : a.skuId) ? o : null))
        : ((f = null != (u = null == (c = t[r - 1]) ? void 0 : c.skuId) ? u : null),
          (g = null != (d = null == (s = t[r]) ? void 0 : s.skuId) ? d : null));
    let p = [...t],
        [b] = p.splice(n, 1);
    return (
        p.splice(r, 0, b),
        {
            newWishlistData: e.set("items", p),
            previousSkuId: f,
            nextSkuId: g,
        }
    );
}
n.d(t, { d: () => r }), n(388685);
