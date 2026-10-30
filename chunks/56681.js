n.d(t, { Q7: () => u, bF: () => a, hW: () => r });
var e = n(809526),
    i = n(105292);
function a(l) {
    switch (l) {
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
function u(l, t) {
    let n = a(t);
    return null != n ? { title: l, body: i.intl.string(n) } : { body: l };
}
let r = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
