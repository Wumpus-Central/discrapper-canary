n.d(t, { A: () => u }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(985018),
    c = n(647586);
function u(e) {
    let { className: t, onJump: n } = e,
        [i, u] = l.useState(!1);
    return (0, r.jsx)(s.DUT, {
        className: a()(c.n, t),
        onClick: (e) => {
            u(!0), n(e);
        },
        children: i
            ? (0, r.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(s.Text, {
                  variant: "text-xs/medium",
                  className: c.Q,
                  children: o.intl.string(o.t.k5WiPf),
              }),
    });
}
