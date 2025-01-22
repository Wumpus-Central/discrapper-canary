r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(528734),
    a = r(352187),
    o = r(991656),
    s = r(951516),
    l = r(21231);
function u(e, n) {
    (0, s.Z)(2, arguments);
    var r,
        u = (0, i.default)(e),
        c = (0, i.default)(n),
        d = (0, o.Z)(u, c),
        f = Math.abs((0, a.default)(u, c));
    if (f < 1) r = 0;
    else {
        1 === u.getMonth() && u.getDate() > 27 && u.setDate(30), u.setMonth(u.getMonth() - d * f);
        var p = (0, o.Z)(u, c) === -d;
        (0, l.Z)((0, i.default)(e)) && 1 === f && 1 === (0, o.Z)(e, c) && (p = !1), (r = d * (f - Number(p)));
    }
    return 0 === r ? 0 : r;
}
