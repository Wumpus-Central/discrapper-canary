n.d(t, { A: () => u });
var i = n(627968),
    a = n(503698),
    l = n.n(a),
    s = n(3026),
    r = n(397927),
    o = n(47167),
    d = n(713654),
    c = n(370714);
function u(e) {
    let { className: t, channel: n, guild: a, onClick: u } = e,
        _ = (0, d.gU)(n, a),
        m = (0, o.Ay)(n);
    return (0, i.jsxs)(r.DUT, {
        onClick: u,
        className: l()(c.UP, t),
        children: [
            null != _ &&
                (0, i.jsx)(_, { className: c.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, i.jsx)(r.Text, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, i.jsxs)(s.A, { children: [a.name, " / ", m] }),
            }),
            (0, i.jsx)(r._BQ, { className: c.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
