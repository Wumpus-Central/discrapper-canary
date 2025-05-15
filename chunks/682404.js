n.d(t, { Z: () => a });
var r = n(528734),
    i = n(951516),
    o = 86400000;
function a(e) {
    (0, i.Z)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getTime();
    return t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0), Math.floor((n - t.getTime()) / o) + 1;
}
