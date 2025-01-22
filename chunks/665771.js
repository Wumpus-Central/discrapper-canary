r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(528734),
    a = r(951516),
    o = r(964415);
function s(e) {
    (0, a.Z)(1, arguments);
    var n = (0, i.default)(e),
        r = n.getUTCFullYear(),
        s = new Date(0);
    s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
    var l = (0, o.Z)(s),
        u = new Date(0);
    u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
    var c = (0, o.Z)(u);
    return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
