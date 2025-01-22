r.r(n),
    r.d(n, {
        default: function () {
            return u;
        }
    });
var i = r(528734),
    a = r(780264),
    o = r(621359),
    s = r(951516),
    l = 604800000;
function u(e) {
    (0, s.Z)(1, arguments);
    var n = (0, i.default)(e);
    return Math.round(((0, a.Z)(n).getTime() - (0, o.Z)(n).getTime()) / l) + 1;
}
