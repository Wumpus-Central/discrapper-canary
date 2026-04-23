e.d(a, { default: () => v });
var s = e(627968);
e(64700);
var l = e(284009),
    n = e.n(l),
    i = e(189213),
    c = e(17928),
    o = e(32880),
    r = e(871109),
    d = e(59375),
    h = e(821609),
    u = e(882863);
function f(t) {
    let { guildId: a, productId: e, attachmentId: l, ...n } = t,
        { isLoading: i, downloadAttachment: c } = (0, u.A)(a, e);
    return (0, s.jsx)(h.$, {
        ...n,
        loading: i,
        onClick: function () {
            c(l);
        },
    });
}
var m = e(985018),
    x = e(94517);
function j(t) {
    let { attachment: a, guildId: e, productId: l } = t;
    return (0, s.jsxs)("li", {
        className: x.k,
        children: [
            (0, s.jsx)(d.A, { attachment: a }),
            (0, s.jsx)(f, { className: x.i, icon: o.s, text: void 0, guildId: e, productId: l, attachmentId: a.id }),
        ],
    });
}
function v(t) {
    let { guildId: a, productId: e, onClose: l, transitionState: o } = t,
        d = (0, c.bG)([r.A], () => r.A.getGuildProduct(e));
    n()(null != d, "guildProductListing cannot be null");
    let h = d.attachments ?? [];
    return (0, s.jsx)(i.Modal, {
        size: "md",
        transitionState: o,
        "aria-label": m.intl.string(m.t["3jaCac"]),
        title: d.name,
        subtitle: m.intl.format(m.t["6dOuaP"], { count: d.attachments_count }),
        actions: [],
        onClose: l,
        children: (0, s.jsx)("ul", {
            children: h.map((t) => (0, s.jsx)(j, { guildId: a, productId: d.id, attachment: t }, t.id)),
        }),
    });
}
