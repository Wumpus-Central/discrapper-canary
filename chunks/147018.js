var r = a(161581),
    n = a(347722).f,
    o = a(251069),
    _ = a(859209),
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
            (t.sham || (l && l.sham)) && o(u, 'sham', !0), _(a, E, u, t);
        }
};
