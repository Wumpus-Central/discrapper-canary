r.r(n),
    r.d(n, {
        default: function () {
            return l;
        }
    });
var i = r(923868),
    a = r(424421),
    o = r(951516),
    s = 604800000;
function l(e, n, r) {
    (0, o.Z)(2, arguments);
    var l = (0, i.default)(e, r),
        u = (0, i.default)(n, r);
    return Math.round((l.getTime() - (0, a.Z)(l) - (u.getTime() - (0, a.Z)(u))) / s);
}
