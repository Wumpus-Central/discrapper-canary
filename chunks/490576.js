n.d(e, { default: () => b });
var r = n(54381);
n(473749);
var o = n(512722),
    a = n.n(o),
    c = n(793030),
    i = n(442837),
    l = n(481060),
    s = n(240864),
    u = n(598952),
    f = n(596211),
    d = n(388032),
    m = n(819994);
function p(t) {
    let { attachment: e, guildId: n, productId: o } = t;
    return (0, r.jsxs)("li", {
        className: m.attachmentRow,
        children: [
            (0, r.jsx)(u.Z, { attachment: e }),
            (0, r.jsx)(f.Z, {
                className: m.attachmentDownloadButton,
                icon: l._8t,
                text: void 0,
                guildId: n,
                productId: o,
                attachmentId: e.id,
            }),
        ],
    });
}
function b(t) {
    var e;
    let { guildId: n, productId: o, onClose: l, transitionState: u } = t,
        f = (0, i.e7)([s.Z], () => s.Z.getGuildProduct(o));
    a()(null != f, "guildProductListing cannot be null");
    let m = null != (e = f.attachments) ? e : [];
    return (0, r.jsx)(c.Modal, {
        size: "md",
        transitionState: u,
        "aria-label": d.intl.string(d.t["3jaCac"]),
        title: f.name,
        subtitle: d.intl.format(d.t["6dOuaP"], { count: f.attachments_count }),
        actions: [],
        onClose: l,
        children: (0, r.jsx)("ul", {
            children: m.map((t) =>
                (0, r.jsx)(
                    p,
                    {
                        guildId: n,
                        productId: f.id,
                        attachment: t,
                    },
                    t.id,
                ),
            ),
        }),
    });
}
