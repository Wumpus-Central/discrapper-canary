n.r(t), n.d(t, { default: () => o });
var i = n(217224),
    r = n(528734),
    a = n(984181),
    s = n(951516);
function o(e, t) {
    (0, s.Z)(2, arguments);
    var n = (0, r.default)(e),
        o = (0, i.Z)(t),
        l = n.getFullYear(),
        u = n.getDate(),
        c = new Date(0);
    c.setFullYear(l, o, 15), c.setHours(0, 0, 0, 0);
    var d = (0, a.Z)(c);
    return n.setMonth(o, Math.min(u, d)), n;
}
