var r = n(860511),
    i = n(873078).f,
    a = n(706938),
    s = n(693655),
    o = n(88388),
    l = n(517771),
    c = n(521351);
e.exports = function (e, t) {
    var n,
        u,
        d,
        f,
        p,
        _ = e.target,
        h = e.global,
        m = e.stat;
    if ((n = h ? r : m ? r[_] || o(_, {}) : r[_] && r[_].prototype))
        for (u in t) {
            if (
                ((f = t[u]),
                (d = e.dontCallGetSet ? (p = i(n, u)) && p.value : n[u]),
                !c(h ? u : _ + (m ? "." : "#") + u, e.forced) && void 0 !== d)
            ) {
                if (typeof f == typeof d) continue;
                l(f, d);
            }
            (e.sham || (d && d.sham)) && a(f, "sham", !0), s(n, u, f, e);
        }
};
