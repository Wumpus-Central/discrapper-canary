n.r(t), n.d(t, { default: () => o });
var i = n(217224),
    r = n(528734),
    a = n(138512),
    s = n(951516);
function o(e, t) {
    (0, s.Z)(2, arguments);
    var n = (0, r.default)(e),
        o = (0, i.Z)(t) - (Math.floor(n.getMonth() / 3) + 1);
    return (0, a.default)(n, n.getMonth() + 3 * o);
}
