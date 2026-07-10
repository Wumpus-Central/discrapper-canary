"use strict";
n.d(t, { A: () => u, i: () => d });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(812881),
    d = (((i = {}).PREMIUM = "premium"), (i.LIMITED = "limited"), (i.NEW_UPSELL = "newUpsell"), i);
let c = {
        premium: { border: o.wU, background: o.gI },
        limited: { border: o.rY, background: o.pm },
        newUpsell: { border: o.Ef, background: o.st },
    },
    u = a.forwardRef(function (e, t) {
        let {
            children: n,
            type: i = "premium",
            isShown: a,
            hasBackground: s = !1,
            className: d,
            backgroundClassName: u,
        } = e;
        if (!a) return n;
        let { border: _, background: E } = c[i];
        return (0, r.jsx)("div", {
            ref: t,
            className: l()(_, d),
            children: (0, r.jsx)("div", { className: l()(s ? E : o.Tp, u), children: n }),
        });
    });
