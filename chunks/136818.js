n.d(t, { Z: () => o });
var r = n(528734),
    i = n(780264),
    a = n(951516);
function o(e) {
    (0, a.Z)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getFullYear(),
        o = new Date(0);
    o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
    var s = (0, i.Z)(o),
        l = new Date(0);
    l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
    var c = (0, i.Z)(l);
    return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1;
}
