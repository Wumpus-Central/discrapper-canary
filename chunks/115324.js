n.d(t, { h: () => o }), n(704826), n(35282);
var r = n(74538),
    i = n(937615),
    a = n(474936);
function o(e) {
    let t = "...";
    try {
        let e = r.ZP.getDefaultPrice(a.Xh.PREMIUM_MONTH_TIER_2);
        t = (0, i.T4)(e.amount, e.currency);
    } catch (e) {}
    return e.replace(/\{price\}/g, t);
}
