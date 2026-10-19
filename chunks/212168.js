n.d(t, { A: () => c, i: () => s });
var i,
    r = n(477900);
n(582128);
var a = n(503698),
    l = n.n(a),
    o = n(489088),
    s = (((i = {}).PREMIUM = "premium"), (i.LIMITED = "limited"), (i.NEW_UPSELL = "newUpsell"), i);
let d = {
    premium: { border: o.wU, background: o.gI },
    limited: { border: o.rY, background: o.pm },
    newUpsell: { border: o.Ef, background: o.st },
};
function c(e) {
    let {
        children: t,
        type: n = "premium",
        isShown: i,
        hasBackground: a = !1,
        className: s,
        backgroundClassName: c,
        ref: u,
    } = e;
    if (!i) return t;
    let { border: m, background: f } = d[n];
    return (0, r.jsx)("div", {
        ref: u,
        className: l()(m, s),
        children: (0, r.jsx)("div", { className: l()(a ? f : o.Tp, c), children: t }),
    });
}
