n.r(t),
    n.d(t, {
        default: () => s,
    });
var r = n(998280),
    i = n(29583),
    a = n(618027);

function s(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, i.default)(e),
        s = (0, r.A)(t);
    return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(s), n);
}
