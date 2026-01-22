n.d(t, { A: () => l });
var r = n(29583),
    i = n(992663),
    a = n(683706),
    s = n(618027),
    o = n(333081);
function l(e, t) {
    (0, s.A)(2, arguments);
    var n,
        l = (0, r.default)(e),
        c = (0, r.default)(t),
        u = (0, a.A)(l, c),
        d = Math.abs((0, i.default)(l, c));
    if (d < 1) n = 0;
    else {
        1 === l.getMonth() && l.getDate() > 27 && l.setDate(30), l.setMonth(l.getMonth() - u * d);
        var f = (0, a.A)(l, c) === -u;
        (0, o.A)((0, r.default)(e)) && 1 === d && 1 === (0, a.A)(e, c) && (f = !1), (n = u * (d - Number(f)));
    }
    return 0 === n ? 0 : n;
}
