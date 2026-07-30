t.d(r, { A: () => D, i: () => o });
var n,
    _ = t(477900),
    a = t(582128),
    i = t(503698),
    l = t.n(i),
    u = t(872633),
    o = (((n = {}).PREMIUM = "premium"), (n.LIMITED = "limited"), (n.NEW_UPSELL = "newUpsell"), n);
let R = {
        premium: { border: u.wU, background: u.gI },
        limited: { border: u.rY, background: u.pm },
        newUpsell: { border: u.Ef, background: u.st },
    },
    D = a.forwardRef(function (e, r) {
        let {
            children: t,
            type: n = "premium",
            isShown: a,
            hasBackground: i = !1,
            className: o,
            backgroundClassName: D,
        } = e;
        if (!a) return t;
        let { border: s, background: d } = R[n];
        return (0, _.jsx)("div", {
            ref: r,
            className: l()(s, o),
            children: (0, _.jsx)("div", { className: l()(i ? d : u.Tp, D), children: t }),
        });
    });
