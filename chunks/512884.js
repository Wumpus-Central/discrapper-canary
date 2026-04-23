"use strict";
n.d(t, { A: () => o });
var r = n(29583),
    i = n(918494),
    s = n(683706),
    a = n(618027);
function o(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, r.default)(e),
        o = (0, r.default)(t),
        l = (0, s.A)(n, o),
        u = Math.abs((0, i.default)(n, o));
    n.setFullYear(1584), o.setFullYear(1584);
    var c = (0, s.A)(n, o) === -l,
        d = l * (u - Number(c));
    return 0 === d ? 0 : d;
}
