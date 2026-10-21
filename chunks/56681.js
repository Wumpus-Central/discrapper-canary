u.d(e, { Q7: () => n, bF: () => l, hW: () => r });
var i = u(248675),
    a = u(105292);
function l(t) {
    switch (t) {
        case "simple":
            return i.default["/tlOR5"];
        case "balanced":
            return i.default.wNhuGQ;
        case "complex":
            return i.default.FxoUwB;
        default:
            return null;
    }
}
function n(t, e) {
    let u = l(e);
    return null != u ? { title: t, body: a.intl.string(u) } : { body: t };
}
let r = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
