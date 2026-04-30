"use strict";
var i = n(860511),
    r = n(873078).f,
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
        h = e.target,
        p = e.global,
        E = e.stat;
    if ((n = p ? i : E ? i[h] || o(h, {}) : i[h] && i[h].prototype))
        for (c in t) {
            if (
                ((_ = t[c]),
                (d = e.dontCallGetSet ? (f = r(n, c)) && f.value : n[c]),
                !u(p ? c : h + (E ? "." : "#") + c, e.forced) && void 0 !== d)
            ) {
                if (typeof _ == typeof d) continue;
                l(_, d);
            }
            (e.sham || (d && d.sham)) && s(_, "sham", !0), a(n, c, _, e);
        }
};
