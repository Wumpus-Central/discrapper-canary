t.d(r, { A: () => s, i: () => l });
var n,
    _ = t(627968),
    a = t(64700),
    i = t(503698),
    o = t.n(i),
    u = t(872633),
    l = (((n = {}).PREMIUM = "premium"), (n.LIMITED = "limited"), (n.NEW_UPSELL = "newUpsell"), n);
let R = {
        premium: { border: u.wU, background: u.gI },
        limited: { border: u.rY, background: u.pm },
        newUpsell: { border: u.Ef, background: u.st },
    },
    s = a.forwardRef(function (e, r) {
        let {
            children: t,
            type: n = "premium",
            isShown: a,
            hasBackground: i = !1,
            className: l,
            backgroundClassName: s,
        } = e;
        if (!a) return t;
        let { border: d, background: D } = R[n];
        return (0, _.jsx)("div", {
            ref: r,
            className: o()(d, l),
            children: (0, _.jsx)("div", { className: o()(i ? D : u.Tp, s), children: t }),
        });
    });
