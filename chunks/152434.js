n.r(t), n.d(t, { default: () => l });
var i = n(528734),
    r = n(780264),
    a = n(621359),
    s = n(951516),
    o = 604800000;
function l(e) {
    (0, s.Z)(1, arguments);
    var t = (0, i.default)(e);
    return Math.round(((0, r.Z)(t).getTime() - (0, a.Z)(t).getTime()) / o) + 1;
}
