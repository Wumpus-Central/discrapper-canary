n.d(t, { Z: () => a });
var r = n(528734),
    i = n(780264),
    o = n(951516);
function a(e) {
    (0, o.Z)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getFullYear(),
        a = new Date(0);
    a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
    var s = (0, i.Z)(a),
        l = new Date(0);
    l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
    var c = (0, i.Z)(l);
    return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1;
}
