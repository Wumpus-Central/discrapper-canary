t.d(n, { A: () => s, i: () => d });
var r,
    a = t(477900),
    i = t(582128),
    _ = t(503698),
    l = t.n(_),
    u = t(872633),
    d = (((r = {}).PREMIUM = "premium"), (r.LIMITED = "limited"), (r.NEW_UPSELL = "newUpsell"), r);
let o = {
        premium: { border: u.wU, background: u.gI },
        limited: { border: u.rY, background: u.pm },
        newUpsell: { border: u.Ef, background: u.st },
    },
    s = i.forwardRef(function (e, n) {
        let {
            children: t,
            type: r = "premium",
            isShown: i,
            hasBackground: _ = !1,
            className: d,
            backgroundClassName: s,
        } = e;
        if (!i) return t;
        let { border: D, background: R } = o[r];
        return (0, a.jsx)("div", {
            ref: n,
            className: l()(D, d),
            children: (0, a.jsx)("div", { className: l()(_ ? R : u.Tp, s), children: t }),
        });
    });
