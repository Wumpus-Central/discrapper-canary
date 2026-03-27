"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(985018),
    c = n(80460);
function d(e) {
    let { className: t, onJump: n } = e,
        [l, d] = s.useState(!1);
    return (0, i.jsx)(a.DUT, {
        className: r()(c.n, t),
        onClick: (e) => {
            d(!0), n(e);
        },
        children: l
            ? (0, i.jsx)(a.y$y, { type: a.y$y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(a.Text, { variant: "text-xs/medium", className: c.Q, children: o.intl.string(o.t.k5WiPf) }),
    });
}
