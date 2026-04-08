n.d(t, { A: () => u });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(3026),
    r = n(397927),
    o = n(47167),
    d = n(713654),
    c = n(359657);
function u(e) {
    let { className: t, channel: n, guild: l, onClick: u } = e,
        _ = (0, d.gU)(n, l),
        m = (0, o.Ay)(n);
    return (0, i.jsxs)(r.DUT, {
        onClick: u,
        className: s()(c.UP, t),
        children: [
            null != _ &&
                (0, i.jsx)(_, { className: c.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, i.jsx)(r.Text, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, i.jsxs)(a.A, { children: [l.name, " / ", m] }),
            }),
            (0, i.jsx)(r._BQ, { className: c.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
