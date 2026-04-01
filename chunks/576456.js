n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(985018),
    d = n(760031);
function c(e) {
    let { className: t, onJump: n } = e,
        [s, c] = l.useState(!1);
    return (0, i.jsx)(r.DUT, {
        className: a()(d.n, t),
        onClick: (e) => {
            c(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(r.y$y, { type: r.y$y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(r.Text, { variant: "text-xs/medium", className: d.Q, children: o.intl.string(o.t.k5WiPf) }),
    });
}
