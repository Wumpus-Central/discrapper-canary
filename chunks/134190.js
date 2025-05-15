n.r(t), n.d(t, { default: () => s });
var r = n(217224),
    i = n(528734),
    o = n(138512),
    a = n(951516);
function s(e, t) {
    (0, a.Z)(2, arguments);
    var n = (0, i.default)(e),
        s = (0, r.Z)(t) - (Math.floor(n.getMonth() / 3) + 1);
    return (0, o.default)(n, n.getMonth() + 3 * s);
}
