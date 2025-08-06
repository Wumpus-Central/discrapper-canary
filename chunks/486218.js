n.r(t), n.d(t, { default: () => o });
var r = n(528734),
    i = n(951516);
function o(e) {
    (0, i.Z)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getMonth();
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
