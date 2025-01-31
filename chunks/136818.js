n.d(t, { Z: () => s });
var i = n(528734),
    r = n(780264),
    a = n(951516);
function s(e) {
    (0, a.Z)(1, arguments);
    var t = (0, i.default)(e),
        n = t.getFullYear(),
        s = new Date(0);
    s.setFullYear(n + 1, 0, 4), s.setHours(0, 0, 0, 0);
    var o = (0, r.Z)(s),
        l = new Date(0);
    l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
    var u = (0, r.Z)(l);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1;
}
