var n = e(860511),
    o = e(873078).f,
    i = e(706938),
    u = e(693655),
    a = e(88388),
    c = e(517771),
    f = e(521351);
r.exports = function (r, t) {
    var e,
        s,
        p,
        l,
        v,
        y = r.target,
        b = r.global,
        g = r.stat;
    if ((e = b ? n : g ? n[y] || a(y, {}) : n[y] && n[y].prototype))
        for (s in t) {
            if (
                ((l = t[s]),
                (p = r.dontCallGetSet ? (v = o(e, s)) && v.value : e[s]),
                !f(b ? s : y + (g ? "." : "#") + s, r.forced) && void 0 !== p)
            ) {
                if (typeof l == typeof p) continue;
                c(l, p);
            }
            (r.sham || (p && p.sham)) && i(l, "sham", !0), u(e, s, l, r);
        }
};
