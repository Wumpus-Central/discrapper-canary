n.d(t, { Z: () => r }), n(388685);
var i = n(255367),
    l = n(73800),
    s = n(36361),
    o = n(530171),
    a = n(445642);
let r = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: r, useSubtitle: u } = t,
        [c, d] = l.useState(!1),
        f = null == n ? void 0 : n(c),
        g = null == u ? void 0 : u();
    return (0, i.jsx)("div", {
        className: a.accordion,
        children: (0, i.jsx)(o.I, {
            title: f,
            subtitle: g,
            isOpen: c,
            setIsOpen: d,
            children: r.map((e) => (0, i.jsx)(s.Z, { node: e }, e.key)),
        }),
    });
});
