n.r(t), n.d(t, { default: () => a });
var i = n(528734),
    r = n(951516);
function a(e) {
    (0, r.Z)(1, arguments);
    var t = (0, i.default)(e),
        n = t.getMonth(),
        a = n - (n % 3);
    return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
}
