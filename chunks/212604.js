n.r(t), n.d(t, { default: () => o });
var r = n(998280),
    i = n(29583),
    a = n(95944),
    s = n(618027);
function o(e, t) {
    (0, s.A)(2, arguments);
    var n = (0, i.default)(e),
        o = (0, r.A)(t),
        l = n.getFullYear(),
        c = n.getDate(),
        u = new Date(0);
    u.setFullYear(l, o, 15), u.setHours(0, 0, 0, 0);
    var d = (0, a.A)(u);
    return n.setMonth(o, Math.min(c, d)), n;
}
