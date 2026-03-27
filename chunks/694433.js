"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(441442),
    d = n(52930);
function c(e) {
    let { action: t, children: n, className: l, onExpandChange: c, loading: u, ...m } = e,
        [g, x] = s.useState(!1);
    return (0, i.jsx)(a.Nt8, {
        className: r()(d.HS, l),
        isExpanded: g,
        collapsibleContent: (0, i.jsxs)("div", {
            className: d.oV,
            children: [g && (0, i.jsx)("div", { className: d.Wn }), n],
        }),
        children: (e) => {
            let { onClick: n } = e;
            return (0, i.jsx)(o.A, {
                ...m,
                className: d.ro,
                action: u ? (0, i.jsx)(a.y$y, { type: a.y$y.Type.PULSING_ELLIPSIS }) : t,
                onClick: (e) => {
                    var t;
                    x((t = !g)), c?.(t), n(e);
                },
            });
        },
    });
}
