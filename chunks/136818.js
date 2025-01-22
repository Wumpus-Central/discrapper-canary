r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(528734),
    a = r(780264),
    o = r(951516);
function s(e) {
    (0, o.Z)(1, arguments);
    var n = (0, i.default)(e),
        r = n.getFullYear(),
        s = new Date(0);
    s.setFullYear(r + 1, 0, 4), s.setHours(0, 0, 0, 0);
    var l = (0, a.Z)(s),
        u = new Date(0);
    u.setFullYear(r, 0, 4), u.setHours(0, 0, 0, 0);
    var c = (0, a.Z)(u);
    return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
