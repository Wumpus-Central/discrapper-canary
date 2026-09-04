r.d(t, { jn: () => f, tu: () => h });
var l = r(228366),
    o = r(181658),
    u = r(773669),
    n = r(927813),
    c = r(371794),
    s = r(821925),
    a = r(103348),
    i = r(652215);
let d = 12 * n.A.Millis.HOUR,
    S = 10 * n.A.Millis.MINUTE;
function f(e) {
    if (!e) return !1;
    let t = s.A.getFetchStateForSku(e);
    if ("loading" === t) return !1;
    let r = s.A.getFetchedAtForSku(e);
    return null == r || Date.now() - r > ("error" === t ? S : d);
}
async function h(e) {
    let { skuIds: t, ignoreCache: r = !1 } = e,
        n = t.filter(f);
    if (0 !== n.length)
        try {
            l.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: n });
            let e = await (0, c.aP)({
                url: i.Rsh.STOREFRONT_PRODUCTS_BY_SKU_IDS,
                query: {
                    sku_ids: n,
                    locale: u.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    ignore_cache: r,
                },
                rejectWithError: !0,
            });
            l.h.dispatch({
                type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS",
                skuIds: n,
                products: e.body.products.map(a.A.fromServer),
            });
        } catch (e) {
            l.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: n, apiError: new o.A(e) });
        }
}
