var n = e(860511),
    o = e(873078).f,
    i = e(706938),
    a = e(693655),
    u = e(88388),
    c = e(517771),
    f = e(521351);
r.exports = function (r, t) {
    var e,
        p,
        s,
        y,
        v,
        l = r.target,
        h = r.global,
        d = r.stat;
    if ((e = h ? n : d ? n[l] || u(l, {}) : n[l] && n[l].prototype))
        for (p in t) {
            if (
                ((y = t[p]),
                (s = r.dontCallGetSet ? (v = o(e, p)) && v.value : e[p]),
                !f(h ? p : l + (d ? "." : "#") + p, r.forced) && void 0 !== s)
            ) {
                if (typeof y == typeof s) continue;
                c(y, s);
            }
            (r.sham || (s && s.sham)) && i(y, "sham", !0), a(e, p, y, r);
        }
};
