t.d(n, { A: () => s, i: () => o });
var r,
    a = t(477900),
    i = t(582128),
    u = t(503698),
    l = t.n(u),
    d = t(489088),
    o = (((r = {}).PREMIUM = "premium"), (r.LIMITED = "limited"), (r.NEW_UPSELL = "newUpsell"), r);
let c = {
        premium: { border: d.wU, background: d.gI },
        limited: { border: d.rY, background: d.pm },
        newUpsell: { border: d.Ef, background: d.st },
    },
    s = i.forwardRef(function (e, n) {
        let {
            children: t,
            type: r = "premium",
            isShown: i,
            hasBackground: u = !1,
            className: o,
            backgroundClassName: s,
        } = e;
        if (!i) return t;
        let { border: f, background: m } = c[r];
        return (0, a.jsx)("div", {
            ref: n,
            className: l()(f, o),
            children: (0, a.jsx)("div", { className: l()(u ? m : d.Tp, s), children: t }),
        });
    });
