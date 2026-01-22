var n = e(834647),
    o = e(664886),
    s = e(780940),
    i = e(968613),
    u = e(309270),
    c = e(265033),
    a = e(517480),
    f = e(740628),
    p = e(469516),
    l = e(180734),
    v = e(735811),
    y = e(61748),
    h = e(158610),
    x = e(583296),
    d = i.PROPER,
    g = i.CONFIGURABLE,
    b = x.IteratorPrototype,
    m = x.BUGGY_SAFARI_ITERATORS,
    S = y("iterator"),
    w = "keys",
    O = "values",
    j = "entries",
    A = function () {
        return this;
    };
t.exports = function (t, r, e, i, y, x, E) {
    c(e, r, i);
    var T,
        P,
        k,
        I = function (t) {
            if (t === y && R) return R;
            if (!m && t && t in M) return M[t];
            switch (t) {
                case w:
                case O:
                case j:
                    return function () {
                        return new e(this, t);
                    };
            }
            return function () {
                return new e(this);
            };
        },
        F = r + " Iterator",
        D = !1,
        M = t.prototype,
        L = M[S] || M["@@iterator"] || (y && M[y]),
        R = (!m && L) || I(y),
        C = ("Array" === r && M.entries) || L;
    if (
        (C &&
            (T = a(C.call(new t()))) !== Object.prototype &&
            T.next &&
            (!s && a(T) !== b && (f ? f(T, b) : u(T[S]) || v(T, S, A)), p(T, F, !0, !0), s && (h[F] = A)),
        d &&
            y === O &&
            L &&
            L.name !== O &&
            (!s && g
                ? l(M, "name", O)
                : ((D = !0),
                  (R = function () {
                      return o(L, this);
                  }))),
        y)
    )
        if (
            ((P = {
                values: I(O),
                keys: x ? R : I(w),
                entries: I(j),
            }),
            E)
        )
            for (k in P) (!m && !D && k in M) || v(M, k, P[k]);
        else
            n(
                {
                    target: r,
                    proto: !0,
                    forced: m || D,
                },
                P,
            );
    return (!s || E) && M[S] !== R && v(M, S, R, { name: y }), (h[r] = R), P;
};
