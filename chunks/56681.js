n.d(l, { Q7: () => u, bF: () => a, hW: () => r });
var e = n(248675),
    i = n(105292);
function a(t) {
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
function u(t, l) {
    let n = a(l);
    return null != n ? { title: t, body: i.intl.string(n) } : { body: t };
}
let r = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
