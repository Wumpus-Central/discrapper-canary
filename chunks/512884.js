n.d(t, { A: () => o });
var r = n(29583),
    i = n(918494),
    a = n(683706),
    s = n(618027);
function o(e, t) {
    (0, s.A)(2, arguments);
    var n = (0, r.default)(e),
        o = (0, r.default)(t),
        l = (0, a.A)(n, o),
        c = Math.abs((0, i.default)(n, o));
    n.setFullYear(1584), o.setFullYear(1584);
    var u = (0, a.A)(n, o) === -l,
        d = l * (c - Number(u));
    return 0 === d ? 0 : d;
}
