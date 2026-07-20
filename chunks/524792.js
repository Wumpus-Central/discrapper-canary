a.d(n, { default: () => g });
var i = a(627968);
a(64700);
var e = a(284009),
    c = a.n(e),
    d = a(189213),
    l = a(17928),
    s = a(32880),
    u = a(871109),
    o = a(59375),
    r = a(821609),
    h = a(882863);
function m(t) {
    let { guildId: n, productId: a, attachmentId: e, ...c } = t,
        { isLoading: d, downloadAttachment: l } = (0, h.A)(n, a);
    return (0, i.jsx)(r.$, {
        ...c,
        loading: d,
        onClick: function () {
            l(e);
        },
    });
}
var p = a(375708),
    j = a(389301);
function x(t) {
    let { attachment: n, guildId: a, productId: e } = t;
    return (0, i.jsxs)("li", {
        className: j.k,
        children: [
            (0, i.jsx)(o.A, { attachment: n }),
            (0, i.jsx)(m, { className: j.i, icon: s.s, text: void 0, guildId: a, productId: e, attachmentId: n.id }),
        ],
    });
}
function g(t) {
    let { guildId: n, productId: a, onClose: e, transitionState: s } = t,
        o = (0, l.bG)([u.A], () => u.A.getGuildProduct(a));
    c()(null != o, "guildProductListing cannot be null");
    let r = o.attachments ?? [];
    return (0, i.jsx)(d.Modal, {
        size: "md",
        transitionState: s,
        "aria-label": p.intl.string(p.t["3jaCac"]),
        title: o.name,
        subtitle: p.intl.format(p.t["6dOuaP"], { count: o.attachments_count }),
        actions: [],
        onClose: e,
        children: (0, i.jsx)("ul", {
            children: r.map((t) => (0, i.jsx)(x, { guildId: n, productId: o.id, attachment: t }, t.id)),
        }),
    });
}
