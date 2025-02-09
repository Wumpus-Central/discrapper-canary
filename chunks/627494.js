var i = n(147018),
    r = n(926515),
    a = n(581031),
    s = n(676125),
    o = n(354848),
    l = n(35179),
    u = n(155763),
    c = n(714050),
    d = n(995739),
    f = n(87046),
    _ = n(115726),
    p = n(641236),
    h = n(992051),
    m = p('replace'),
    g = TypeError,
    E = a(''.indexOf),
    v = a(''.replace),
    y = a(''.slice),
    I = Math.max,
    T = function (e, t, n) {
        return n > e.length ? -1 : '' === t ? n : E(e, t, n);
    };
i(
    {
        target: 'String',
        proto: !0
    },
    {
        replaceAll: function (e, t) {
            var n,
                i,
                a,
                p,
                b,
                S,
                A,
                N,
                C = s(this),
                R = 0,
                O = 0,
                D = '';
            if (!l(e)) {
                if ((n = u(e)) && !~E(c(s(f(e))), 'g')) throw g('`.replaceAll` does not allow non-global regexes');
                if ((i = d(e, m))) return r(i, e, C, t);
                if (h && n) return v(c(C), e, t);
            }
            for (a = c(C), p = c(e), (b = o(t)) || (t = c(t)), A = I(1, (S = p.length)), R = T(a, p, 0); -1 !== R; ) (N = b ? c(t(p, R, a)) : _(p, a, R, [], void 0, t)), (D += y(a, O, R) + N), (O = R + S), (R = T(a, p, R + A));
            return O < a.length && (D += y(a, O)), D;
        }
    }
);
