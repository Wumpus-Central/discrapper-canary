var i = u(191850),
    a = u(792996);
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
u.d(
    e,
    {},
    {
        Q7: function (t, e) {
            let u = l(e);
            return null != u ? { title: t, body: a.intl.string(u) } : { body: t };
        },
        bF: l,
        hW: { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" },
    },
);
