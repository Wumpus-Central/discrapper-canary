n.r(t), n.d(t, { default: () => l });
var r = n(528734),
    i = n(780264),
    o = n(621359),
    a = n(951516),
    s = 604800000;
function l(e) {
    (0, a.Z)(1, arguments);
    var t = (0, r.default)(e);
    return Math.round(((0, i.Z)(t).getTime() - (0, o.Z)(t).getTime()) / s) + 1;
}
