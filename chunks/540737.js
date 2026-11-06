var r = l(73153),
    o = l(181658),
    u = l(773669),
    n = l(371794),
    c = l(100704),
    s = l(821925),
    i = l(634393),
    a = l(103348),
    d = l(652215);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.Kd)();
    if (!e) return !1;
    let l = s.A.getFetchStateForSku(e);
    if ("loading" === l) return !1;
    if ("success" === l && s.A.getPricingKeyForSku(e) !== t) return !0;
    let r = s.A.getFetchedAtForSku(e);
    if (null != r) {
        let e = "error" === l ? c.qq : c.HB;
        return Date.now() - r > e;
    }
    return !0;
}
l.d(
    t,
    {},
    {
        jn: f,
        tu: async function (e) {
            let { skuIds: t, ignoreCache: l = !1 } = e,
                c = (0, i.tz)(),
                s = (0, i.Kd)(c),
                h = t.filter((e) => f(e, s));
            if (0 !== h.length)
                try {
                    r.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: h });
                    let e = await (0, n.aP)({
                        url: d.Rsh.STOREFRONT_PRODUCTS_BY_SKU_IDS,
                        query: {
                            ...c,
                            sku_ids: h,
                            locale: u.default.locale,
                            with_bundled_skus: !0,
                            include_google_sku_ids: !1,
                            ignore_cache: l,
                        },
                        rejectWithError: !0,
                    });
                    r.h.dispatch({
                        type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS",
                        skuIds: h,
                        products: e.body.products.map(a.A.fromServer),
                        pricingKey: s,
                    });
                } catch (e) {
                    r.h.dispatch({
                        type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE",
                        skuIds: h,
                        apiError: new o.A(e),
                    });
                }
        },
    },
);
