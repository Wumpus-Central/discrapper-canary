n.d(t, { Z: () => l });
var r = n(528734),
    i = n(352187),
    o = n(991656),
    a = n(951516),
    s = n(21231);
function l(e, t) {
    (0, a.Z)(2, arguments);
    var n,
        l = (0, r.default)(e),
        c = (0, r.default)(t),
        u = (0, o.Z)(l, c),
        d = Math.abs((0, i.default)(l, c));
    if (d < 1) n = 0;
    else {
        1 === l.getMonth() && l.getDate() > 27 && l.setDate(30), l.setMonth(l.getMonth() - u * d);
        var f = (0, o.Z)(l, c) === -u;
        (0, s.Z)((0, r.default)(e)) && 1 === d && 1 === (0, o.Z)(e, c) && (f = !1), (n = u * (d - Number(f)));
    }
    return 0 === n ? 0 : n;
}
