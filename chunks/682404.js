r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(528734),
    a = r(951516),
    o = 86400000;
function s(e) {
    (0, a.Z)(1, arguments);
    var n = (0, i.default)(e),
        r = n.getTime();
    return n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0), Math.floor((r - n.getTime()) / o) + 1;
}
