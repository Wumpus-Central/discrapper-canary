n.d(t, {
    B: () => a,
    X: () => o,
});
var r = n(626135),
    i = n(981631),
    a = (function (e) {
        return (
            (e.STORE_MODAL = "store_modal"),
            (e.DETAILS_MODAL = "details_modal"),
            (e.STORE_EMBED = "store_embed"),
            (e.SKU_EMBED = "sku_embed"),
            e
        );
    })({});
function o(e, t, n) {
    r.default.track(i.rMx.STOREFRONT_COPY_LINK_CLICKED, {
        application_id: e,
        area: t,
        sku_id: n,
    });
}
