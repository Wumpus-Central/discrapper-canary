n.d(t, { A: () => c, i: () => o });
var i,
    r = n(477900);
n(582128);
var a = n(503698),
    l = n.n(a),
    s = n(489088),
    o = (((i = {}).PREMIUM = "premium"), (i.LIMITED = "limited"), (i.NEW_UPSELL = "newUpsell"), i);
let d = {
    premium: { border: s.wU, background: s.gI },
    limited: { border: s.rY, background: s.pm },
    newUpsell: { border: s.Ef, background: s.st },
};
function c(e) {
    let {
        children: t,
        type: n = "premium",
        isShown: i,
        hasBackground: a = !1,
        className: o,
        backgroundClassName: c,
        ref: u,
    } = e;
    if (!i) return t;
    let { border: m, background: f } = d[n];
    return (0, r.jsx)("div", {
        ref: u,
        className: l()(m, o),
        children: (0, r.jsx)("div", { className: l()(a ? f : s.Tp, c), children: t }),
    });
}
