"use strict";
if ((n.d(t, { A: () => s }), !/^(38190|98365)$/.test(n.j))) var r = n(29583);
if (!/^(38190|98365)$/.test(n.j)) var a = n(918494);
if (!/^(38190|98365)$/.test(n.j)) var i = n(683706);
if (!/^(38190|98365)$/.test(n.j)) var o = n(618027);
function s(e, t) {
    (0, o.A)(2, arguments);
    var n = (0, r.default)(e),
        s = (0, r.default)(t),
        l = (0, i.A)(n, s),
        c = Math.abs((0, a.default)(n, s));
    n.setFullYear(1584), s.setFullYear(1584);
    var u = (0, i.A)(n, s) === -l,
        d = l * (c - Number(u));
    return 0 === d ? 0 : d;
}
