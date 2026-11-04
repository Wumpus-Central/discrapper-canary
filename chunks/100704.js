l.d(t, { HB: () => c, d3: () => o, qq: () => r });
var n = l(927813);
let c = 12 * n.A.Millis.HOUR,
    r = 10 * n.A.Millis.MINUTE;
function o(e) {
    let { fetchState: t, fetchedAt: l, needsPricing: n = !1, hasPricingCoverage: o = !1 } = e;
    if ("error" === t) return null == l || Date.now() - l > r;
    let i = n && !o;
    return "loading" === t ? i : null == l || i || Date.now() - l > c;
}
