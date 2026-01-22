n.d(t, {
    A: () => o,
});
var r = n(998280),
    i = n(29583),
    a = n(655909),
    s = n(618027);

function o(e, t, n) {
    (0, s.A)(2, arguments);
    var o = (0, i.default)(e),
        l = (0, r.A)(t),
        c = (0, a.A)(o, n) - l;
    return o.setUTCDate(o.getUTCDate() - 7 * c), o;
}
