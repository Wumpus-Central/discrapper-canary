t.d(n, { A: () => c, i: () => o });
var r,
    i = t(477900),
    u = t(582128),
    a = t(503698),
    d = t.n(a),
    l = t(489088),
    o = (((r = {}).PREMIUM = "premium"), (r.LIMITED = "limited"), (r.NEW_UPSELL = "newUpsell"), r);
let s = {
        premium: { border: l.wU, background: l.gI },
        limited: { border: l.rY, background: l.pm },
        newUpsell: { border: l.Ef, background: l.st },
    },
    c = u.forwardRef(function (e, n) {
        let {
            children: t,
            type: r = "premium",
            isShown: u,
            hasBackground: a = !1,
            className: o,
            backgroundClassName: c,
        } = e;
        if (!u) return t;
        let { border: m, background: f } = s[r];
        return (0, i.jsx)("div", {
            ref: n,
            className: d()(m, o),
            children: (0, i.jsx)("div", { className: d()(a ? f : l.Tp, c), children: t }),
        });
    });
