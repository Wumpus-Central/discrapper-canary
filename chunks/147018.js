var r = a(161581),
    n = a(347722).f,
    _ = a(251069),
    o = a(859209),
    i = a(492424),
    c = a(381740),
    s = a(474180);
t.exports = function (t, e) {
    var a,
        E,
        l,
        u,
        I,
        R = t.target,
        d = t.global,
        A = t.stat;
    if ((a = d ? r : A ? r[R] || i(R, {}) : (r[R] || {}).prototype))
        for (E in e) {
            if (((u = e[E]), (l = t.dontCallGetSet ? (I = n(a, E)) && I.value : a[E]), !s(d ? E : R + (A ? '.' : '#') + E, t.forced) && void 0 !== l)) {
                if (typeof u == typeof l) continue;
                c(u, l);
            }
            (t.sham || (l && l.sham)) && _(u, 'sham', !0), o(a, E, u, t);
        }
};
