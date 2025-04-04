var e = n(220159),
    o = n(517522),
    i = n(253462),
    u = n(638875),
    s = n(971428),
    c = n(975450),
    f = n(709583),
    a = n(578079),
    p = n(770050),
    l = n(285007),
    v = n(342930),
    y = n(394370),
    h = n(903438),
    x = n(12879),
    d = u.PROPER,
    g = u.CONFIGURABLE,
    b = x.IteratorPrototype,
    m = x.BUGGY_SAFARI_ITERATORS,
    S = y('iterator'),
    w = 'keys',
    O = 'values',
    j = 'entries',
    A = function () {
        return this;
    };
t.exports = function (t, r, n, u, y, x, E) {
    c(n, r, u);
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
                        return new n(this, t);
                    };
            }
            return function () {
                return new n(this);
            };
        },
        F = r + ' Iterator',
        D = !1,
        M = t.prototype,
        L = M[S] || M['@@iterator'] || (y && M[y]),
        R = (!m && L) || I(y),
        C = ('Array' === r && M.entries) || L;
    if (
        (C && (T = f(C.call(new t()))) !== Object.prototype && T.next && (!i && f(T) !== b && (a ? a(T, b) : s(T[S]) || v(T, S, A)), p(T, F, !0, !0), i && (h[F] = A)),
        d &&
            y === O &&
            L &&
            L.name !== O &&
            (!i && g
                ? l(M, 'name', O)
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
                entries: I(j)
            }),
            E)
        )
            for (k in P) (!m && !D && k in M) || v(M, k, P[k]);
        else
            e(
                {
                    target: r,
                    proto: !0,
                    forced: m || D
                },
                P
            );
    return (!i || E) && M[S] !== R && v(M, S, R, { name: y }), (h[r] = R), P;
};
