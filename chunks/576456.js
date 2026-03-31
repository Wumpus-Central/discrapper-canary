n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(985018),
    c = n(80460);
function d(e) {
    let { className: t, onJump: n } = e,
        [s, d] = l.useState(!1);
    return (0, i.jsx)(r.DUT, {
        className: a()(c.n, t),
        onClick: (e) => {
            d(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(r.y$y, { type: r.y$y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(r.Text, { variant: "text-xs/medium", className: c.Q, children: o.intl.string(o.t.k5WiPf) }),
    });
}
