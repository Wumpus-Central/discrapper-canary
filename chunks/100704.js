l.d(t, { HB: () => n, d3: () => o, qq: () => r });
var c = l(927813);
let n = 12 * c.A.Millis.HOUR,
    r = 10 * c.A.Millis.MINUTE;
function o(e) {
    let { fetchState: t, fetchedAt: l, needsPricing: c = !1, hasPricingCoverage: o = !1 } = e;
    if ("error" === t) return null == l || Date.now() - l > r;
    let i = c && !o;
    return "loading" === t ? i : null == l || i || Date.now() - l > n;
}
