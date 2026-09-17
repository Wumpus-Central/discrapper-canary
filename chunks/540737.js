r.d(t, { jn: () => d, tu: () => f });
var l = r(228366),
    o = r(181658),
    u = r(773669),
    n = r(371794),
    c = r(100704),
    s = r(821925),
    i = r(103348),
    a = r(652215);
function d(e) {
    if (!e) return !1;
    let t = s.A.getFetchStateForSku(e);
    if ("loading" === t) return !1;
    let r = s.A.getFetchedAtForSku(e);
    if (null != r) {
        let e = "error" === t ? c.qq : c.HB;
        return Date.now() - r > e;
    }
    return !0;
}
async function f(e) {
    let { skuIds: t, ignoreCache: r = !1 } = e,
        c = t.filter(d);
    if (0 !== c.length)
        try {
            l.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: c });
            let e = await (0, n.aP)({
                url: a.Rsh.STOREFRONT_PRODUCTS_BY_SKU_IDS,
                query: {
                    sku_ids: c,
                    locale: u.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    ignore_cache: r,
                },
                rejectWithError: !0,
            });
            l.h.dispatch({
                type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS",
                skuIds: c,
                products: e.body.products.map(i.A.fromServer),
            });
        } catch (e) {
            l.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: c, apiError: new o.A(e) });
        }
}
