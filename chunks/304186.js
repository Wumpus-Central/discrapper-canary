t.d(n, { A: () => o });
var r = t(284009),
    l = t.n(r),
    s = t(964486),
    a = t(427675),
    i = t(881266),
    u = t(920241);
function o(e) {
    let { handleClose: n } = e,
        { guildProductListing: t, guildId: r } = (0, u.S)(),
        o = (0, a.Hf)();
    return (
        (0, s.Ay)(() => {
            l()(null != o, "selectedSkuPricePreview cannot be null"),
                (0, i.U)({ guildId: r, guildProductListingId: t.id, skuPricePreview: o }),
                n();
        }),
        null
    );
}
