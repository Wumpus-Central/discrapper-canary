"use strict";
n.d(t, { A: () => d, i: () => c });
var r,
    i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(636113),
    c = (((r = {}).PREMIUM = "premium"), (r.LIMITED = "limited"), r);
let u = { premium: { border: o.wU, background: o.gI }, limited: { border: o.rY, background: o.pm } },
    d = a.forwardRef(function (e, t) {
        let {
            children: n,
            type: r = "premium",
            isShown: a,
            hasBackground: l = !1,
            className: c,
            backgroundClassName: d,
        } = e;
        if (!a) return n;
        let { border: _, background: p } = u[r];
        return (0, i.jsx)("div", {
            ref: t,
            className: s()(_, c),
            children: (0, i.jsx)("div", { className: s()(l ? p : o.Tp, d), children: n }),
        });
    });
