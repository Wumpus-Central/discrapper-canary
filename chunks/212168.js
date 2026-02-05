n.d(t, { A: () => u, i: () => c });
var i,
    s = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(446958),
    c = (((i = {}).PREMIUM = "premium"), (i.LIMITED = "limited"), i);
let d = { premium: { border: o.wU, background: o.gI }, limited: { border: o.rY, background: o.pm } },
    u = r.forwardRef(function (e, t) {
        let {
            children: n,
            type: i = "premium",
            isShown: r,
            hasBackground: a = !1,
            className: c,
            backgroundClassName: u,
        } = e;
        if (!r) return n;
        let { border: _, background: m } = d[i];
        return (0, s.jsx)("div", {
            ref: t,
            className: l()(_, c),
            children: (0, s.jsx)("div", { className: l()(a ? m : o.Tp, u), children: n }),
        });
    });
