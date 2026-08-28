r.d(t, { jn: () => i, tu: () => h });
var l = r(228366),
    o = r(181658),
    u = r(773669),
    c = r(927813),
    n = r(371794),
    s = r(821925),
    a = r(103348),
    S = r(652215);
let f = 12 * c.A.Millis.HOUR,
    d = 10 * c.A.Millis.MINUTE;
function i(e) {
    if (!e) return !1;
    let t = s.A.getFetchStateForSku(e);
    if ("loading" === t) return !1;
    let r = s.A.getFetchedAtForSku(e);
    return null == r || Date.now() - r > ("error" === t ? d : f);
}
async function h(e) {
    let { skuIds: t, ignoreCache: r = !1 } = e,
        c = t.filter(i);
    if (0 !== c.length)
        try {
            l.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: c });
            let e = await (0, n.aP)({
                url: S.Rsh.STOREFRONT_PRODUCTS_BY_SKU_IDS,
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
                products: e.body.products.map(a.A.fromServer),
            });
        } catch (e) {
            l.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: c, apiError: new o.A(e) });
        }
}
