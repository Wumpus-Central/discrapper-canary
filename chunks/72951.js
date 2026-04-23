n.d(t, { A: () => _ });
var i = n(627968),
    l = n(503698),
    a = n.n(l),
    s = n(3026),
    r = n(939249),
    o = n(834730),
    d = n(320448),
    c = n(47167),
    u = n(713654),
    m = n(370714);
function _(e) {
    let { className: t, channel: n, guild: l, onClick: _ } = e,
        h = (0, u.gU)(n, l),
        p = (0, c.Ay)(n);
    return (0, i.jsxs)(r.D, {
        onClick: _,
        className: a()(m.UP, t),
        children: [
            null != h &&
                (0, i.jsx)(h, { className: m.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, i.jsx)(o.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, i.jsxs)(s.A, { children: [l.name, " / ", p] }),
            }),
            (0, i.jsx)(d._, { className: m.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
