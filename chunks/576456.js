"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(985018),
    c = n(760031);
function d(e) {
    let { className: t, onJump: n } = e,
        [l, d] = s.useState(!1);
    return (0, i.jsx)(r.DUT, {
        className: a()(c.n, t),
        onClick: (e) => {
            d(!0), n(e);
        },
        children: l
            ? (0, i.jsx)(r.y$y, { type: r.y$y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(r.Text, { variant: "text-xs/medium", className: c.Q, children: o.intl.string(o.t.k5WiPf) }),
    });
}
