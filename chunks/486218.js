n.r(t), n.d(t, { default: () => a });
var i = n(528734),
    r = n(951516);
function a(e) {
    (0, r.Z)(1, arguments);
    var t = (0, i.default)(e),
        n = t.getMonth();
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
