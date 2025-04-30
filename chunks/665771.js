n.d(t, { Z: () => a });
var r = n(528734),
    i = n(951516),
    o = n(964415);
function a(e) {
    (0, i.Z)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getUTCFullYear(),
        a = new Date(0);
    a.setUTCFullYear(n + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
    var s = (0, o.Z)(a),
        l = new Date(0);
    l.setUTCFullYear(n, 0, 4), l.setUTCHours(0, 0, 0, 0);
    var c = (0, o.Z)(l);
    return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1;
}
