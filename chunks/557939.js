"use strict";
var r = n(860511),
    i = n(873078).f,
    s = n(706938),
    a = n(693655),
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
        E = e.stat;
    if ((n = h ? r : E ? r[p] || o(p, {}) : r[p] && r[p].prototype))
        for (c in t) {
            if (
                ((_ = t[c]),
                (d = e.dontCallGetSet ? (f = i(n, c)) && f.value : n[c]),
                !u(h ? c : p + (E ? "." : "#") + c, e.forced) && void 0 !== d)
            ) {
                if (typeof _ == typeof d) continue;
                l(_, d);
            }
            (e.sham || (d && d.sham)) && s(_, "sham", !0), a(n, c, _, e);
        }
};
