"use strict";
r.d(t, { A: () => p });
var n = r(256737),
    o = r(842922),
    a = r(688525),
    i = 0 / 0,
    l = /^[-+]0x[0-9a-f]+$/i,
    s = /^0b[01]+$/i,
    u = /^0o[0-7]+$/i,
    c = parseInt;
let p = function (e) {
    if ("number" == typeof e) return e;
    if ((0, a.A)(e)) return i;
    if ((0, o.A)(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = (0, o.A)(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = (0, n.A)(e);
    var r = s.test(e);
    return r || u.test(e) ? c(e.slice(2), r ? 2 : 8) : l.test(e) ? i : +e;
};
