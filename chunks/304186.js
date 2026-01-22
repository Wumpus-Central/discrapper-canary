r.d(t, { A: () => a });
var n = r(284009),
    o = r.n(n),
    l = r(964486),
    c = r(156312),
    i = r(881266),
    u = r(920241);
function a(e) {
    let { handleClose: t } = e,
        { guildProductListing: r, guildId: n } = (0, u.S)(),
        { selectedSkuPricePreview: a } = (0, c.P5)();
    return (
        (0, l.Ay)(() => {
            o()(null != a, "selectedSkuPricePreview cannot be null"),
                (0, i.U)({
                    guildId: n,
                    guildProductListingId: r.id,
                    skuPricePreview: a,
                }),
                t();
        }),
        null
    );
}
