(n.d(t, { Z: () => d }), n(388685));
var i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(657707),
    r = n(36361),
    c = n(206403),
    u = n(750165);
let d = a.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: o, useSubtitle: d } = t.data,
        [f, m] = a.useState(!1),
        v = null == n ? void 0 : n(f),
        x = null == d ? void 0 : d();
    return (0, i.jsxs)('div', {
        className: u.accordion,
        children: [
            (0, i.jsx)(c.x, {
                title: v,
                description: f ? void 0 : x,
                secondaryTrailingElement: (0, i.jsx)(l.sXD, { className: s()(u.icon, { [u.iconClosed]: !f }) }),
                onClick: () => m(!f)
            }),
            f && o.map((e) => (0, i.jsx)(r.Z, { node: e }, e.key))
        ]
    });
});
