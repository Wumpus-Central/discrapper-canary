"use strict";
if ((n.d(t, { A: () => l }), !/^(38190|98365)$/.test(n.j))) var r = n(29583);
if (!/^(38190|98365)$/.test(n.j)) var a = n(992663);
if (!/^(38190|98365)$/.test(n.j)) var i = n(683706);
if (!/^(38190|98365)$/.test(n.j)) var o = n(618027);
if (!/^(38190|98365)$/.test(n.j)) var s = n(333081);
function l(e, t) {
    (0, o.A)(2, arguments);
    var n,
        l = (0, r.default)(e),
        c = (0, r.default)(t),
        u = (0, i.A)(l, c),
        d = Math.abs((0, a.default)(l, c));
    if (d < 1) n = 0;
    else {
        1 === l.getMonth() && l.getDate() > 27 && l.setDate(30), l.setMonth(l.getMonth() - u * d);
        var _ = (0, i.A)(l, c) === -u;
        (0, s.A)((0, r.default)(e)) && 1 === d && 1 === (0, i.A)(e, c) && (_ = !1), (n = u * (d - Number(_)));
    }
    return 0 === n ? 0 : n;
}
