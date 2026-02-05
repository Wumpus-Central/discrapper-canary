"use strict";
r.d(t, { A: () => u });
var n = r(270227),
    o = r(912853),
    a = r(5264),
    i = r(702318),
    l = r(2793),
    s = r(357702);
let u = function (e, t, r) {
    t = (0, n.A)(t, e);
    for (var u = -1, c = t.length, p = !1; ++u < c; ) {
        var d = (0, s.A)(t[u]);
        if (!(p = null != e && r(e, d))) break;
        e = e[d];
    }
    return p || ++u != c
        ? p
        : !!(c = null == e ? 0 : e.length) && (0, l.A)(c) && (0, i.A)(d, c) && ((0, a.A)(e) || (0, o.A)(e));
};
