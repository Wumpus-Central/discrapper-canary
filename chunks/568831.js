n.r(t), n.d(t, { default: () => a });
var r = n(528734),
    i = n(951516);
function a(e) {
    (0, i.Z)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getMonth(),
        a = n - (n % 3);
    return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
}
