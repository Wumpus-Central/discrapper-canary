n.d(t, {
    B: () => o,
    X: () => a,
});
var r = n(626135),
    i = n(981631),
    o = (function (e) {
        return (
            (e.STORE_MODAL = "store_modal"),
            (e.DETAILS_MODAL = "details_modal"),
            (e.STORE_EMBED = "store_embed"),
            (e.SKU_EMBED = "sku_embed"),
            e
        );
    })({});
function a(e, t, n) {
    r.default.track(i.rMx.STOREFRONT_COPY_LINK_CLICKED, {
        application_id: e,
        area: t,
        sku_id: n,
    });
}
