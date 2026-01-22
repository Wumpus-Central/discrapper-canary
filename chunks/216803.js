n.d(t, {
    A: () => s,
});
var r = n(29583),
    i = n(618027),
    a = n(576103);

function s(e) {
    (0, i.A)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getUTCFullYear(),
        s = new Date(0);
    s.setUTCFullYear(n + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
    var o = (0, a.A)(s),
        l = new Date(0);
    l.setUTCFullYear(n, 0, 4), l.setUTCHours(0, 0, 0, 0);
    var c = (0, a.A)(l);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1;
}
