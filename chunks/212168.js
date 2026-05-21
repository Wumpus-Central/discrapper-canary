"use strict";
n.d(t, { A: () => d, i: () => u });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(636113),
    u = (((i = {}).PREMIUM = "premium"), (i.LIMITED = "limited"), (i.NEW_UPSELL = "newUpsell"), i);
let c = {
        premium: { border: l.wU, background: l.gI },
        limited: { border: l.rY, background: l.pm },
        newUpsell: { border: l.Ef, background: l.st },
    },
    d = s.forwardRef(function (e, t) {
        let {
            children: n,
            type: i = "premium",
            isShown: s,
            hasBackground: a = !1,
            className: u,
            backgroundClassName: d,
        } = e;
        if (!s) return n;
        let { border: _, background: f } = c[i];
        return (0, r.jsx)("div", {
            ref: t,
            className: o()(_, u),
            children: (0, r.jsx)("div", { className: o()(a ? f : l.Tp, d), children: n }),
        });
    });
