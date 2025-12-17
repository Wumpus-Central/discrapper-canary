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
    p = n(556585),
    _ = n(751736),
    m = n(933121),
    h = n(112493),
    g = o.PROPER,
    E = o.CONFIGURABLE,
    b = h.IteratorPrototype,
    y = h.BUGGY_SAFARI_ITERATORS,
    O = _("iterator"),
    v = "keys",
    S = "values",
    I = "entries",
    T = function () {
        return this;
    };
e.exports = function (e, t, n, o, _, h, C) {
    l(n, t, o);
    var A,
        N,
        P,
        R = function (e) {
            if (e === _ && j) return j;
            if (!y && e && e in x) return x[e];
            switch (e) {
                case v:
                case S:
                case I:
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
        x = e.prototype,
        L = x[O] || x["@@iterator"] || (_ && x[_]),
        j = (!y && L) || R(_),
        M = ("Array" === t && x.entries) || L;
    if (
        (M &&
            (A = c(M.call(new e()))) !== Object.prototype &&
            A.next &&
            (!a && c(A) !== b && (u ? u(A, b) : s(A[O]) || p(A, O, T)), d(A, w, !0, !0), a && (m[w] = T)),
        g &&
            _ === S &&
            L &&
            L.name !== S &&
            (!a && E
                ? f(x, "name", S)
                : ((D = !0),
                  (j = function () {
                      return i(L, this);
                  }))),
        _)
    )
        if (
            ((N = {
                values: R(S),
                keys: h ? j : R(v),
                entries: R(I),
            }),
            C)
        )
            for (P in N) (!y && !D && P in x) || p(x, P, N[P]);
        else
            r(
                {
                    target: t,
                    proto: !0,
                    forced: y || D,
                },
                N,
            );
    return (!a || C) && x[O] !== j && p(x, O, j, { name: _ }), (m[t] = j), N;
};
