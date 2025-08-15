n.r(t), n.d(t, { default: () => o });
var r = n(217224),
    i = n(528734),
    a = n(951516);
function o(e, t) {
    (0, a.Z)(2, arguments);
    var n = (0, i.default)(e),
        o = (0, r.Z)(t);
    return isNaN(o) ? new Date(NaN) : (o && n.setDate(n.getDate() + o), n);
}
