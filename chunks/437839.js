"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(545428),
    u = n(985018),
    c = n(27551);
function d(e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: c.me }),
            (0, r.jsx)("div", {
                className: c.kL,
                children: (0, r.jsx)("div", {
                    className: c.UD,
                    children: (0, r.jsx)(l.A, {
                        className: c.x6,
                        childClassName: a()(c.Z4, { [c.r9]: n, [c.xb]: !n }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": u.intl.string(u.t.oeb1vg),
                        children: (0, r.jsx)(o.lX7, { size: "xs", color: "currentColor", className: c.AO }),
                    }),
                }),
            }),
        ],
    });
}
let _ = i.memo(d);
