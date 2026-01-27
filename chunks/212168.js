n.d(t, {
    A: () => u,
    i: () => c,
});
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(446958),
    c = (((r = {}).PREMIUM = "premium"), (r.LIMITED = "limited"), r);
let d = {
        premium: {
            border: o.wU,
            background: o.gI,
        },
        limited: {
            border: o.rY,
            background: o.pm,
        },
    },
    u = l.forwardRef(function (e, t) {
        let {
            children: n,
            type: r = "premium",
            isShown: l,
            hasBackground: s = !1,
            className: c,
            backgroundClassName: u,
        } = e;
        if (!l) return n;
        let { border: _, background: p } = d[r];
        return (0, i.jsx)("div", {
            ref: t,
            className: a()(_, c),
            children: (0, i.jsx)("div", {
                className: a()(s ? p : o.Tp, u),
                children: n,
            }),
        });
    });
