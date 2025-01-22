r.r(n),
    r.d(n, {
        default: function () {
            return l;
        }
    });
var i = r(217224),
    a = r(528734),
    o = r(984181),
    s = r(951516);
function l(e, n) {
    (0, s.Z)(2, arguments);
    var r = (0, a.default)(e),
        l = (0, i.Z)(n),
        u = r.getFullYear(),
        c = r.getDate(),
        d = new Date(0);
    d.setFullYear(u, l, 15), d.setHours(0, 0, 0, 0);
    var f = (0, o.Z)(d);
    return r.setMonth(l, Math.min(c, f)), r;
}
