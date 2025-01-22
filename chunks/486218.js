r.r(n),
    r.d(n, {
        default: function () {
            return o;
        }
    });
var i = r(528734),
    a = r(951516);
function o(e) {
    (0, a.Z)(1, arguments);
    var n = (0, i.default)(e),
        r = n.getMonth();
    return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
