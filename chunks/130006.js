var r = a(98405),
    n = a(580983),
    _ = a(511696),
    o = a(938373),
    i = a(880181),
    c = a(280481),
    s = a(961050),
    E = a(769827),
    l = a(25124),
    u = a(436207),
    I = a(556585),
    R = a(751736),
    d = a(933121),
    A = a(112493),
    f = o.PROPER,
    p = o.CONFIGURABLE,
    N = A.IteratorPrototype,
    T = A.BUGGY_SAFARI_ITERATORS,
    L = R('iterator'),
    h = 'keys',
    O = 'values',
    D = 'entries',
    g = function () {
        return this;
    };
t.exports = function (t, e, a, o, R, A, P) {
    c(a, e, o);
    var m,
        y,
        v,
        C = function (t) {
            if (t === R && U) return U;
            if (!T && t && t in b) return b[t];
            switch (t) {
                case h:
                case O:
                case D:
                    return function () {
                        return new a(this, t);
                    };
            }
            return function () {
                return new a(this);
            };
        },
        S = e + ' Iterator',
        G = !1,
        b = t.prototype,
        M = b[L] || b['@@iterator'] || (R && b[R]),
        U = (!T && M) || C(R),
        w = ('Array' === e && b.entries) || M;
    if (
        (w && (m = s(w.call(new t()))) !== Object.prototype && m.next && (!_ && s(m) !== N && (E ? E(m, N) : i(m[L]) || I(m, L, g)), l(m, S, !0, !0), _ && (d[S] = g)),
        f &&
            R === O &&
            M &&
            M.name !== O &&
            (!_ && p
                ? u(b, 'name', O)
                : ((G = !0),
                  (U = function () {
                      return n(M, this);
                  }))),
        R)
    )
        if (
            ((y = {
                values: C(O),
                keys: A ? U : C(h),
                entries: C(D)
            }),
            P)
        )
            for (v in y) (!T && !G && v in b) || I(b, v, y[v]);
        else
            r(
                {
                    target: e,
                    proto: !0,
                    forced: T || G
                },
                y
            );
    return (!_ || P) && b[L] !== U && I(b, L, U, { name: R }), (d[e] = U), y;
};
