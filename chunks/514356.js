n.r(t),
    n.d(t, {
        default: () => a,
    });
var r = n(29583),
    i = n(618027);

function a(e) {
    (0, i.A)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getMonth();
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
