n.r(t), n.d(t, { default: () => o });
var r = n(528734),
    i = n(951516);
function o(e) {
    (0, i.Z)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getMonth(),
        o = n - (n % 3);
    return t.setMonth(o, 1), t.setHours(0, 0, 0, 0), t;
}
