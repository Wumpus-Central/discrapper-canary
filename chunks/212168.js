c.d(d, { A: () => l, i: () => n });
var r,
    s = c(627968),
    t = c(64700),
    a = c(503698),
    p = c.n(a),
    i = c(636113),
    n = (((r = {}).PREMIUM = "premium"), (r.LIMITED = "limited"), (r.NEW_UPSELL = "newUpsell"), r);
let o = {
        premium: { border: i.wU, background: i.gI },
        limited: { border: i.rY, background: i.pm },
        newUpsell: { border: i.Ef, background: i.st },
    },
    l = t.forwardRef(function (e, d) {
        let {
            children: c,
            type: r = "premium",
            isShown: t,
            hasBackground: a = !1,
            className: n,
            backgroundClassName: l,
        } = e;
        if (!t) return c;
        let { border: b, background: m } = o[r];
        return (0, s.jsx)("div", {
            ref: d,
            className: p()(b, n),
            children: (0, s.jsx)("div", { className: p()(a ? m : i.Tp, l), children: c }),
        });
    });
