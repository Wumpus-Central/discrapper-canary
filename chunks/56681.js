a.d(n, { Q7: () => l, bF: () => i, hW: () => o });
var e = a(248675),
    r = a(105292);
function i(t) {
    switch (t) {
        case "simple":
            return e.default["/tlOR5"];
        case "balanced":
            return e.default.wNhuGQ;
        case "complex":
            return e.default.FxoUwB;
        default:
            return null;
    }
}
function l(t, n) {
    let a = i(n);
    return null != a ? { title: t, body: r.intl.string(a) } : { body: t };
}
let o = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
