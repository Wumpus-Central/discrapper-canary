n.r(t),
    n.d(t, {
        default: () => l,
    });
var r = n(29583),
    i = n(452420),
    a = n(612829),
    s = n(618027),
    o = 6048e5;

function l(e) {
    (0, s.A)(1, arguments);
    var t = (0, r.default)(e);
    return Math.round(((0, i.A)(t).getTime() - (0, a.A)(t).getTime()) / o) + 1;
}
