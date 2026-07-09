i.d(t, { A: () => u, i: () => d });
var r,
    n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    o = i(812881),
    d = (((r = {}).PREMIUM = "premium"), (r.LIMITED = "limited"), (r.NEW_UPSELL = "newUpsell"), r);
let c = {
        premium: { border: o.wU, background: o.gI },
        limited: { border: o.rY, background: o.pm },
        newUpsell: { border: o.Ef, background: o.st },
    },
    u = s.forwardRef(function (e, t) {
        let {
            children: i,
            type: r = "premium",
            isShown: s,
            hasBackground: a = !1,
            className: d,
            backgroundClassName: u,
        } = e;
        if (!s) return i;
        let { border: m, background: p } = c[r];
        return (0, n.jsx)("div", {
            ref: t,
            className: l()(m, d),
            children: (0, n.jsx)("div", { className: l()(a ? p : o.Tp, u), children: i }),
        });
    });
