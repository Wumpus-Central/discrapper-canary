e.d(a, { default: () => x });
var s = e(627968);
e(64700);
var l = e(284009),
    n = e.n(l),
    i = e(189213),
    c = e(311907),
    o = e(32880),
    r = e(871109),
    d = e(59375),
    h = e(94733),
    u = e(985018),
    f = e(94517);
function m(t) {
    let { attachment: a, guildId: e, productId: l } = t;
    return (0, s.jsxs)("li", {
        className: f.k,
        children: [
            (0, s.jsx)(d.A, { attachment: a }),
            (0, s.jsx)(h.A, { className: f.i, icon: o.s, text: void 0, guildId: e, productId: l, attachmentId: a.id }),
        ],
    });
}
function x(t) {
    let { guildId: a, productId: e, onClose: l, transitionState: o } = t,
        d = (0, c.bG)([r.A], () => r.A.getGuildProduct(e));
    n()(null != d, "guildProductListing cannot be null");
    let h = d.attachments ?? [];
    return (0, s.jsx)(i.Modal, {
        size: "md",
        transitionState: o,
        "aria-label": u.intl.string(u.t["3jaCac"]),
        title: d.name,
        subtitle: u.intl.format(u.t["6dOuaP"], { count: d.attachments_count }),
        actions: [],
        onClose: l,
        children: (0, s.jsx)("ul", {
            children: h.map((t) => (0, s.jsx)(m, { guildId: a, productId: d.id, attachment: t }, t.id)),
        }),
    });
}
