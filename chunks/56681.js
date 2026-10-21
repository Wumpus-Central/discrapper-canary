a.d(e, { Q7: () => n, bF: () => s, hW: () => c });
var l = a(248675),
    t = a(105292);
function s(i) {
    switch (i) {
        case "simple":
            return l.default["/tlOR5"];
        case "balanced":
            return l.default.wNhuGQ;
        case "complex":
            return l.default.FxoUwB;
        default:
            return null;
    }
}
function n(i, e) {
    let a = s(e);
    return null != a ? { title: i, body: t.intl.string(a) } : { body: i };
}
let c = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
