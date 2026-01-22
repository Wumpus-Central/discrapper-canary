n.d(t, {
    A: () => u,
    i: () => l,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(446958),
    l = (function (e) {
        return (e.PREMIUM = "premium"), (e.LIMITED = "limited"), e;
    })({});
let c = {
        premium: {
            border: o.wU,
            background: o.gI,
        },
        limited: {
            border: o.rY,
            background: o.pm,
        },
    },
    u = i.forwardRef(function (e, t) {
        let {
            children: n,
            type: i = "premium",
            isShown: a,
            hasBackground: l = !1,
            className: u,
            backgroundClassName: d,
        } = e;
        if (!a) return n;
        let { border: f, background: p } = c[i];
        return (0, r.jsx)("div", {
            ref: t,
            className: s()(f, u),
            children: (0, r.jsx)("div", {
                className: s()(l ? p : o.Tp, d),
                children: n,
            }),
        });
    });
