n.d(t, { Z: () => a }), n(388685);
var i = n(951288),
    l = n(647438),
    s = n(36361),
    o = n(530171),
    r = n(445642);
let a = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: a, useSubtitle: u } = t,
        [c, d] = l.useState(!1),
        f = null == n ? void 0 : n(c),
        g = null == u ? void 0 : u();
    return (0, i.jsx)("div", {
        className: r.accordion,
        children: (0, i.jsx)(o.I, {
            title: f,
            subtitle: g,
            isOpen: c,
            setIsOpen: d,
            children: a.map((e) => (0, i.jsx)(s.Z, { node: e }, e.key)),
        }),
    });
});
