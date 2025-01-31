n.d(t, { Z: () => s });
var i = n(528734),
    r = n(951516),
    a = 86400000;
function s(e) {
    (0, r.Z)(1, arguments);
    var t = (0, i.default)(e),
        n = t.getTime();
    return t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0), Math.floor((n - t.getTime()) / a) + 1;
}
