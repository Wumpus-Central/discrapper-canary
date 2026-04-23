a.d(t, { A: () => _, i: () => d });
var r,
    n = a(627968),
    i = a(64700),
    l = a(503698),
    o = a.n(l),
    s = a(636113),
    d = (((r = {}).PREMIUM = "premium"), (r.LIMITED = "limited"), r);
let c = { premium: { border: s.wU, background: s.gI }, limited: { border: s.rY, background: s.pm } },
    _ = i.forwardRef(function (e, t) {
        let {
            children: a,
            type: r = "premium",
            isShown: i,
            hasBackground: l = !1,
            className: d,
            backgroundClassName: _,
        } = e;
        if (!i) return a;
        let { border: u, background: f } = c[r];
        return (0, n.jsx)("div", {
            ref: t,
            className: o()(u, d),
            children: (0, n.jsx)("div", { className: o()(l ? f : s.Tp, _), children: a }),
        });
    });
