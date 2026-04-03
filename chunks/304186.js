t.d(n, { A: () => c });
var r = t(284009),
    l = t.n(r),
    s = t(964486),
    a = t(987616),
    i = t(881266),
    u = t(920241);
function c(e) {
    let { handleClose: n } = e,
        { guildProductListing: t, guildId: r } = (0, u.S)(),
        c = (0, a.Hf)();
    return (
        (0, s.Ay)(() => {
            l()(null != c, "selectedSkuPricePreview cannot be null"),
                (0, i.U)({ guildId: r, guildProductListingId: t.id, skuPricePreview: c }),
                n();
        }),
        null
    );
}
