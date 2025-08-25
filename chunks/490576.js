n.d(a, { default: () => x });
var e = n(951288);
n(647438);
var o = n(512722),
    i = n.n(o),
    l = n(442837),
    s = n(82659),
    c = n(481060),
    r = n(240864),
    d = n(598952),
    u = n(596211),
    f = n(388032),
    m = n(819994);
function h(t) {
    let { attachment: a, guildId: n, productId: o } = t;
    return (0, e.jsxs)("li", {
        className: m.attachmentRow,
        children: [
            (0, e.jsx)(d.Z, { attachment: a }),
            (0, e.jsx)(u.Z, {
                className: m.attachmentDownloadButton,
                icon: c._8t,
                text: void 0,
                guildId: n,
                productId: o,
                attachmentId: a.id,
            }),
        ],
    });
}
function x(t) {
    var a;
    let { guildId: n, productId: o, onClose: c, transitionState: d } = t,
        u = (0, l.e7)([r.Z], () => r.Z.getGuildProduct(o));
    i()(null != u, "guildProductListing cannot be null");
    let m = null != (a = u.attachments) ? a : [];
    return (0, e.jsx)(s.Modal, {
        size: "md",
        transitionState: d,
        "aria-label": f.intl.string(f.t["3jaCaW"]),
        title: u.name,
        subtitle: f.intl.format(f.t["6dOuaG"], { count: u.attachments_count }),
        actions: [],
        onClose: c,
        children: (0, e.jsx)("ul", {
            children: m.map((t) =>
                (0, e.jsx)(
                    h,
                    {
                        guildId: n,
                        productId: u.id,
                        attachment: t,
                    },
                    t.id,
                ),
            ),
        }),
    });
}
