n.d(t, { Z: () => d }), n(388685);
var i = n(255367),
    o = n(73800),
    l = n(120356),
    r = n.n(l),
    a = n(657707),
    s = n(36361),
    c = n(206403),
    u = n(750165);
let d = o.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: l, useSubtitle: d } = t,
        [f, m] = o.useState(!1),
        x = null == n ? void 0 : n(f),
        g = null == d ? void 0 : d();
    return (0, i.jsxs)("div", {
        className: u.accordion,
        children: [
            (0, i.jsx)(c.x, {
                title: x,
                description: f ? void 0 : g,
                secondaryTrailingElement: (0, i.jsx)(a.sXD, { className: r()(u.icon, { [u.iconClosed]: !f }) }),
                onClick: () => m(!f),
            }),
            f && l.map((e) => (0, i.jsx)(s.Z, { node: e }, e.key)),
        ],
    });
});
