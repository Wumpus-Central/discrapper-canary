n.d(t, { A: () => u, i: () => d });
var i,
    a = n(477900),
    r = n(582128),
    l = n(503698),
    o = n.n(l),
    s = n(489088),
    d = (((i = {}).PREMIUM = "premium"), (i.LIMITED = "limited"), (i.NEW_UPSELL = "newUpsell"), i);
let c = {
        premium: { border: s.wU, background: s.gI },
        limited: { border: s.rY, background: s.pm },
        newUpsell: { border: s.Ef, background: s.st },
    },
    u = r.forwardRef(function (e, t) {
        let {
            children: n,
            type: i = "premium",
            isShown: r,
            hasBackground: l = !1,
            className: d,
            backgroundClassName: u,
        } = e;
        if (!r) return n;
        let { border: m, background: f } = c[i];
        return (0, a.jsx)("div", {
            ref: t,
            className: o()(m, d),
            children: (0, a.jsx)("div", { className: o()(l ? f : s.Tp, u), children: n }),
        });
    });
