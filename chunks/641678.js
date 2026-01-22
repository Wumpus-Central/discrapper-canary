n.d(t, { A: () => s });
var r = n(29583),
    i = n(452420),
    a = n(618027);
function s(e) {
    (0, a.A)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getFullYear(),
        s = new Date(0);
    s.setFullYear(n + 1, 0, 4), s.setHours(0, 0, 0, 0);
    var o = (0, i.A)(s),
        l = new Date(0);
    l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
    var c = (0, i.A)(l);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1;
}
