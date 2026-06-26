r.d(e, { jn: () => d, tu: () => T });
var o = r(228366),
    l = r(181658),
    c = r(773669),
    n = r(927813),
    u = r(371794),
    s = r(821925),
    i = r(103348),
    a = r(652215);
let S = 12 * n.A.Millis.HOUR,
    _ = 10 * n.A.Millis.MINUTE;
function d(t) {
    if (!t) return !1;
    let e = s.A.getFetchStateForSku(t);
    if ("loading" === e) return !1;
    let r = s.A.getFetchedAtForSku(t);
    return null == r || Date.now() - r > ("error" === e ? _ : S);
}
async function T(t) {
    let { skuIds: e, ignoreCache: r = !1 } = t,
        n = e.filter(d);
    if (0 !== n.length)
        try {
            o.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: n });
            let t = await (0, u.aP)({
                url: a.Rsh.STOREFRONT_PRODUCTS_BY_SKU_IDS,
                query: {
                    sku_ids: n,
                    locale: c.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    ignore_cache: r,
                },
                rejectWithError: !0,
            });
            o.h.dispatch({
                type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS",
                skuIds: n,
                products: t.body.products.map(i.A.fromServer),
            });
        } catch (t) {
            o.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: n, apiError: new l.A(t) });
        }
}
