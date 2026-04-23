"use strict";
n.d(t, { A: () => l });
var r = n(29583),
    i = n(992663),
    s = n(683706),
    a = n(618027),
    o = n(333081);
function l(e, t) {
    (0, a.A)(2, arguments);
    var n,
        l = (0, r.default)(e),
        u = (0, r.default)(t),
        c = (0, s.A)(l, u),
        d = Math.abs((0, i.default)(l, u));
    if (d < 1) n = 0;
    else {
        1 === l.getMonth() && l.getDate() > 27 && l.setDate(30), l.setMonth(l.getMonth() - c * d);
        var _ = (0, s.A)(l, u) === -c;
        (0, o.A)((0, r.default)(e)) && 1 === d && 1 === (0, s.A)(e, u) && (_ = !1), (n = c * (d - Number(_)));
    }
    return 0 === n ? 0 : n;
}
