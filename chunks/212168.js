"use strict";
r.d(t, { A: () => u, i: () => c });
var n,
    i = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    o = r(636113),
    c = (((n = {}).PREMIUM = "premium"), (n.LIMITED = "limited"), (n.NEW_UPSELL = "newUpsell"), n);
let d = {
        premium: { border: o.wU, background: o.gI },
        limited: { border: o.rY, background: o.pm },
        newUpsell: { border: o.Ef, background: o.st },
    },
    u = a.forwardRef(function (e, t) {
        let {
            children: r,
            type: n = "premium",
            isShown: a,
            hasBackground: s = !1,
            className: c,
            backgroundClassName: u,
        } = e;
        if (!a) return r;
        let { border: _, background: p } = d[n];
        return (0, i.jsx)("div", {
            ref: t,
            className: l()(_, c),
            children: (0, i.jsx)("div", { className: l()(s ? p : o.Tp, u), children: r }),
        });
    });
