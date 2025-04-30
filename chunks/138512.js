n.r(t), n.d(t, { default: () => s });
var r = n(217224),
    i = n(528734),
    a = n(984181),
    o = n(951516);
function s(e, t) {
    (0, o.Z)(2, arguments);
    var n = (0, i.default)(e),
        s = (0, r.Z)(t),
        l = n.getFullYear(),
        c = n.getDate(),
        u = new Date(0);
    u.setFullYear(l, s, 15), u.setHours(0, 0, 0, 0);
    var d = (0, a.Z)(u);
    return n.setMonth(s, Math.min(c, d)), n;
}
