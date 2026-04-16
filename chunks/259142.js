e.d(a, { default: () => x });
var n = e(627968);
e(64700);
var i = e(284009),
    s = e.n(i),
    l = e(158954),
    o = e(311907),
    d = e(397927),
    r = e(871109),
    c = e(59375),
    u = e(94733),
    m = e(985018),
    f = e(94517);
function h(t) {
    let { attachment: a, guildId: e, productId: i } = t;
    return (0, n.jsxs)("li", {
        className: f.k,
        children: [
            (0, n.jsx)(c.A, { attachment: a }),
            (0, n.jsx)(u.A, {
                className: f.i,
                icon: d.s3U,
                text: void 0,
                guildId: e,
                productId: i,
                attachmentId: a.id,
            }),
        ],
    });
}
function x(t) {
    let { guildId: a, productId: e, onClose: i, transitionState: d } = t,
        c = (0, o.bG)([r.A], () => r.A.getGuildProduct(e));
    s()(null != c, "guildProductListing cannot be null");
    let u = c.attachments ?? [];
    return (0, n.jsx)(l.Modal, {
        size: "md",
        transitionState: d,
        "aria-label": m.intl.string(m.t["3jaCac"]),
        title: c.name,
        subtitle: m.intl.format(m.t["6dOuaP"], { count: c.attachments_count }),
        actions: [],
        onClose: i,
        children: (0, n.jsx)("ul", {
            children: u.map((t) => (0, n.jsx)(h, { guildId: a, productId: c.id, attachment: t }, t.id)),
        }),
    });
}
