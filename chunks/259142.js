r.d(t, {
    default: () => O,
});
var n = r(627968);
r(64700);
var o = r(284009),
    a = r.n(o),
    c = r(158954),
    l = r(311907),
    i = r(397927),
    s = r(871109),
    d = r(59375),
    u = r(94733),
    p = r(985018),
    b = r(14036);

function f(e) {
    let { attachment: t, guildId: r, productId: o } = e;
    return (0, n.jsxs)("li", {
        className: b.k,
        children: [
            (0, n.jsx)(d.A, {
                attachment: t,
            }),
            (0, n.jsx)(u.A, {
                className: b.i,
                icon: i.s3U,
                text: void 0,
                guildId: r,
                productId: o,
                attachmentId: t.id,
            }),
        ],
    });
}

function O(e) {
    var t;
    let { guildId: r, productId: o, onClose: i, transitionState: d } = e,
        u = (0, l.bG)([s.A], () => s.A.getGuildProduct(o));
    a()(null != u, "guildProductListing cannot be null");
    let b = null != (t = u.attachments) ? t : [];
    return (0, n.jsx)(c.Modal, {
        size: "md",
        transitionState: d,
        "aria-label": p.intl.string(p.t["3jaCac"]),
        title: u.name,
        subtitle: p.intl.format(p.t["6dOuaP"], {
            count: u.attachments_count,
        }),
        actions: [],
        onClose: i,
        children: (0, n.jsx)("ul", {
            children: b.map((e) =>
                (0, n.jsx)(
                    f,
                    {
                        guildId: r,
                        productId: u.id,
                        attachment: e,
                    },
                    e.id,
                ),
            ),
        }),
    });
}
