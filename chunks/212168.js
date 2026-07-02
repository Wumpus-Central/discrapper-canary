a.d(t, { A: () => p, i: () => c });
var s,
    i = a(627968),
    n = a(64700),
    r = a(503698),
    o = a.n(r),
    d = a(636113),
    c = (((s = {}).PREMIUM = "premium"), (s.LIMITED = "limited"), (s.NEW_UPSELL = "newUpsell"), s);
let l = {
        premium: { border: d.wU, background: d.gI },
        limited: { border: d.rY, background: d.pm },
        newUpsell: { border: d.Ef, background: d.st },
    },
    p = n.forwardRef(function (e, t) {
        let {
            children: a,
            type: s = "premium",
            isShown: n,
            hasBackground: r = !1,
            className: c,
            backgroundClassName: p,
        } = e;
        if (!n) return a;
        let { border: m, background: b } = l[s];
        return (0, i.jsx)("div", {
            ref: t,
            className: o()(m, c),
            children: (0, i.jsx)("div", { className: o()(r ? b : d.Tp, p), children: a }),
        });
    });
