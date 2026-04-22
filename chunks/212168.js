"use strict";
a.d(t, { A: () => u, i: () => c });
var r,
    i = a(627968),
    n = a(64700),
    l = a(503698),
    s = a.n(l),
    o = a(636113),
    c = (((r = {}).PREMIUM = "premium"), (r.LIMITED = "limited"), r);
let d = { premium: { border: o.wU, background: o.gI }, limited: { border: o.rY, background: o.pm } },
    u = n.forwardRef(function (e, t) {
        let {
            children: a,
            type: r = "premium",
            isShown: n,
            hasBackground: l = !1,
            className: c,
            backgroundClassName: u,
        } = e;
        if (!n) return a;
        let { border: _, background: p } = d[r];
        return (0, i.jsx)("div", {
            ref: t,
            className: s()(_, c),
            children: (0, i.jsx)("div", { className: s()(l ? p : o.Tp, u), children: a }),
        });
    });
