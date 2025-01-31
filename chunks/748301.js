n.r(t), n.d(t, { default: () => o });
var i = n(923868),
    r = n(424421),
    a = n(951516),
    s = 604800000;
function o(e, t, n) {
    (0, a.Z)(2, arguments);
    var o = (0, i.default)(e, n),
        l = (0, i.default)(t, n);
    return Math.round((o.getTime() - (0, r.Z)(o) - (l.getTime() - (0, r.Z)(l))) / s);
}
