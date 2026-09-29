r.d(n, { A: () => s, i: () => o });
var t,
    i = r(477900),
    u = r(582128),
    a = r(503698),
    d = r.n(a),
    l = r(489088),
    o = (((t = {}).PREMIUM = "premium"), (t.LIMITED = "limited"), (t.NEW_UPSELL = "newUpsell"), t);
let c = {
        premium: { border: l.wU, background: l.gI },
        limited: { border: l.rY, background: l.pm },
        newUpsell: { border: l.Ef, background: l.st },
    },
    s = u.forwardRef(function (e, n) {
        let {
            children: r,
            type: t = "premium",
            isShown: u,
            hasBackground: a = !1,
            className: o,
            backgroundClassName: s,
        } = e;
        if (!u) return r;
        let { border: p, background: m } = c[t];
        return (0, i.jsx)("div", {
            ref: n,
            className: d()(p, o),
            children: (0, i.jsx)("div", { className: d()(a ? m : l.Tp, s), children: r }),
        });
    });
