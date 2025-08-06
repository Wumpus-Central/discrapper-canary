var r = n(98405),
    i = n(580983),
    o = n(511696),
    a = n(938373),
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
    g = a.PROPER,
    E = a.CONFIGURABLE,
    b = m.IteratorPrototype,
    y = m.BUGGY_SAFARI_ITERATORS,
    O = p("iterator"),
    v = "keys",
    I = "values",
    T = "entries",
    S = function () {
        return this;
    };
e.exports = function (e, t, n, a, p, m, A) {
    l(n, t, a);
    var N,
        C,
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
        w = t + " Iterator",
        D = !1,
        L = e.prototype,
        x = L[O] || L["@@iterator"] || (p && L[p]),
        M = (!y && x) || P(p),
        k = ("Array" === t && L.entries) || x;
    if (
        (k &&
            (N = c(k.call(new e()))) !== Object.prototype &&
            N.next &&
            (!o && c(N) !== b && (u ? u(N, b) : s(N[O]) || _(N, O, S)), d(N, w, !0, !0), o && (h[w] = S)),
        g &&
            p === I &&
            x &&
            x.name !== I &&
            (!o && E
                ? f(L, "name", I)
                : ((D = !0),
                  (M = function () {
                      return i(x, this);
                  }))),
        p)
    )
        if (
            ((C = {
                values: P(I),
                keys: m ? M : P(v),
                entries: P(T),
            }),
            A)
        )
            for (R in C) (!y && !D && R in L) || _(L, R, C[R]);
        else
            r(
                {
                    target: t,
                    proto: !0,
                    forced: y || D,
                },
                C,
            );
    return (!o || A) && L[O] !== M && _(L, O, M, { name: p }), (h[t] = M), C;
};
