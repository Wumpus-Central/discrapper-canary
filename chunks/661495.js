var r = n(557939),
    i = n(446474),
    a = n(105712),
    s = n(814113),
    o = n(339626),
    l = n(23277),
    c = n(42756),
    u = n(458680),
    d = n(174168),
    f = n(706938),
    p = n(693655),
    _ = n(380744),
    h = n(70670),
    m = n(248876),
    g = s.PROPER,
    E = s.CONFIGURABLE,
    b = m.IteratorPrototype,
    y = m.BUGGY_SAFARI_ITERATORS,
    O = _("iterator"),
    A = "keys",
    v = "values",
    S = "entries",
    I = function () {
        return this;
    };
e.exports = function (e, t, n, s, _, m, T) {
    l(n, t, s);
    var C,
        N,
        R,
        w = function (e) {
            if (e === _ && j) return j;
            if (!y && e && e in x) return x[e];
            switch (e) {
                case A:
                case v:
                case S:
                    return function () {
                        return new n(this, e);
                    };
            }
            return function () {
                return new n(this);
            };
        },
        P = t + " Iterator",
        D = !1,
        x = e.prototype,
        L = x[O] || x["@@iterator"] || (_ && x[_]),
        j = (!y && L) || w(_),
        M = ("Array" === t && x.entries) || L;
    if (
        (M &&
            (C = c(M.call(new e()))) !== Object.prototype &&
            C.next &&
            (!a && c(C) !== b && (u ? u(C, b) : o(C[O]) || p(C, O, I)), d(C, P, !0, !0), a && (h[P] = I)),
        g &&
            _ === v &&
            L &&
            L.name !== v &&
            (!a && E
                ? f(x, "name", v)
                : ((D = !0),
                  (j = function () {
                      return i(L, this);
                  }))),
        _)
    )
        if (
            ((N = {
                values: w(v),
                keys: m ? j : w(A),
                entries: w(S),
            }),
            T)
        )
            for (R in N) (!y && !D && R in x) || p(x, R, N[R]);
        else
            r(
                {
                    target: t,
                    proto: !0,
                    forced: y || D,
                },
                N,
            );
    return (!a || T) && x[O] !== j && p(x, O, j, { name: _ }), (h[t] = j), N;
};
