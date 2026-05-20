n.d(t, { A: () => c });
var l = n(284009),
    i = n.n(l),
    r = n(964486),
    s = n(666646),
    a = n(627968);
n(64700);
var o = n(192308),
    u = n(920241);
function c(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: c } = (0, u.S)(),
        d = (0, s.sw)();
    return (
        (0, r.Ay)(() => {
            var e;
            i()(null != d, "invoicePreview cannot be null"),
                (e = { guildId: c, guildProductListingId: l.id, invoicePreview: d }),
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("41816"),
                        n.e("99406"),
                        n.e("95665"),
                        n.e("47359"),
                        n.e("16237"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("28090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, a.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
