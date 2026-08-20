a.d(n, { default: () => g });
var i = a(477900);
a(582128);
var c = a(284009),
    d = a.n(c),
    e = a(189213),
    l = a(17928),
    s = a(32880),
    u = a(871109),
    o = a(59375),
    r = a(821609),
    h = a(882863);
function m(t) {
    let { guildId: n, productId: a, attachmentId: c, ...d } = t,
        { isLoading: e, downloadAttachment: l } = (0, h.A)(n, a);
    return (0, i.jsx)(r.$, {
        ...d,
        loading: e,
        onClick: function () {
            l(c);
        },
    });
}
var p = a(375708),
    j = a(501250);
function x(t) {
    let { attachment: n, guildId: a, productId: c } = t;
    return (0, i.jsxs)("li", {
        className: j.k,
        children: [
            (0, i.jsx)(o.A, { attachment: n }),
            (0, i.jsx)(m, {
                className: j.i,
                icon: s.DownloadIcon,
                text: void 0,
                guildId: a,
                productId: c,
                attachmentId: n.id,
            }),
        ],
    });
}
function g(t) {
    let { guildId: n, productId: a, onClose: c, transitionState: s } = t,
        o = (0, l.bG)([u.A], () => u.A.getGuildProduct(a));
    d()(null != o, "guildProductListing cannot be null");
    let r = o.attachments ?? [];
    return (0, i.jsx)(e.Modal, {
        size: "md",
        transitionState: s,
        "aria-label": p.intl.string(p.t["3jaCac"]),
        title: o.name,
        subtitle: p.intl.format(p.t["6dOuaP"], { count: o.attachments_count }),
        actions: [],
        onClose: c,
        children: (0, i.jsx)("ul", {
            children: r.map((t) => (0, i.jsx)(x, { guildId: n, productId: o.id, attachment: t }, t.id)),
        }),
    });
}
