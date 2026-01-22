n.d(t, {
    A: () => o,
});
var r = n(998280),
    i = n(29583),
    a = n(44134),
    s = n(618027);

function o(e, t) {
    (0, s.A)(2, arguments);
    var n = (0, i.default)(e),
        o = (0, r.A)(t),
        l = (0, a.A)(n) - o;
    return n.setUTCDate(n.getUTCDate() - 7 * l), n;
}
