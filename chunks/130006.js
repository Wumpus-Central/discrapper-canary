var r = n(98405),
    i = n(580983),
    a = n(511696),
    o = n(938373),
    s = n(880181),
    l = n(280481),
    c = n(961050),
    u = n(769827),
    d = n(25124),
    f = n(436207),
    _ = n(556585),
    p = n(751736),
    h = n(933121),
    m = n(112493),
    g = o.PROPER,
    E = o.CONFIGURABLE,
    b = m.IteratorPrototype,
    y = m.BUGGY_SAFARI_ITERATORS,
    O = p("iterator"),
    v = "keys",
    I = "values",
    T = "entries",
    S = function () {
        return this;
    };
e.exports = function (e, t, n, o, p, m, A) {
    l(n, t, o);
    var C,
        N,
        R,
        P = function (e) {
            if (e === p && M) return M;
            if (!y && e && e in L) return L[e];
            switch (e) {
                case v:
                case I:
                case T:
                    return function () {
                        return new n(this, e);
                    };
            }
            return function () {
                return new n(this);
            };
        },
        D = t + " Iterator",
        w = !1,
        L = e.prototype,
        x = L[O] || L["@@iterator"] || (p && L[p]),
        M = (!y && x) || P(p),
        j = ("Array" === t && L.entries) || x;
    if (
        (j &&
            (C = c(j.call(new e()))) !== Object.prototype &&
            C.next &&
            (!a && c(C) !== b && (u ? u(C, b) : s(C[O]) || _(C, O, S)), d(C, D, !0, !0), a && (h[D] = S)),
        g &&
            p === I &&
            x &&
            x.name !== I &&
            (!a && E
                ? f(L, "name", I)
                : ((w = !0),
                  (M = function () {
                      return i(x, this);
                  }))),
        p)
    )
        if (
            ((N = {
                values: P(I),
                keys: m ? M : P(v),
                entries: P(T),
            }),
            A)
        )
            for (R in N) (!y && !w && R in L) || _(L, R, N[R]);
        else
            r(
                {
                    target: t,
                    proto: !0,
                    forced: y || w,
                },
                N,
            );
    return (!a || A) && L[O] !== M && _(L, O, M, { name: p }), (h[t] = M), N;
};
