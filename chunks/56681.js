e.d(a, { Q7: () => l, bF: () => r, hW: () => o });
var n = e(248675),
    i = e(105292);
function r(t) {
    switch (t) {
        case "simple":
            return n.default["/tlOR5"];
        case "balanced":
            return n.default.wNhuGQ;
        case "complex":
            return n.default.FxoUwB;
        default:
            return null;
    }
}
function l(t, a) {
    let e = r(a);
    return null != e ? { title: t, body: i.intl.string(e) } : { body: t };
}
let o = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
