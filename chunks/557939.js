"use strict";
var r = n(860511),
    i = n(873078).f,
    a = n(706938),
    s = n(693655),
    o = n(88388),
    l = n(517771),
    u = n(521351);
e.exports = function (e, t) {
    var n,
        c,
        d,
        _,
        f,
        p = e.target,
        h = e.global,
        m = e.stat;
    if ((n = h ? r : m ? r[p] || o(p, {}) : r[p] && r[p].prototype))
        for (c in t) {
            if (
                ((_ = t[c]),
                (d = e.dontCallGetSet ? (f = i(n, c)) && f.value : n[c]),
                !u(h ? c : p + (m ? "." : "#") + c, e.forced) && void 0 !== d)
            ) {
                if (typeof _ == typeof d) continue;
                l(_, d);
            }
            (e.sham || (d && d.sham)) && a(_, "sham", !0), s(n, c, _, e);
        }
};
