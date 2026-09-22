i.d(t, { HB: () => r, d3: () => n, qq: () => c });
var l = i(927813);
let r = 12 * l.A.Millis.HOUR,
    c = 10 * l.A.Millis.MINUTE;
function n(e) {
    let { fetchState: t, fetchedAt: i, needsPricing: l = !1, hasPricingCoverage: n = !1 } = e;
    if ("error" === t) return null == i || Date.now() - i > c;
    let o = l && !n;
    return "loading" === t ? o : null == i || o || Date.now() - i > r;
}
