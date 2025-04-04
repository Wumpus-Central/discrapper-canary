var r = n(147018),
    i = n(926515),
    o = n(581031),
    a = n(676125),
    s = n(354848),
    l = n(35179),
    c = n(155763),
    u = n(714050),
    d = n(995739),
    f = n(87046),
    _ = n(115726),
    p = n(641236),
    h = n(992051),
    m = p('replace'),
    g = TypeError,
    E = o(''.indexOf),
    b = o(''.replace),
    y = o(''.slice),
    v = Math.max,
    O = function (e, t, n) {
        return n > e.length ? -1 : '' === t ? n : E(e, t, n);
    };
r(
    {
        target: 'String',
        proto: !0
    },
    {
        replaceAll: function (e, t) {
            var n,
                r,
                o,
                p,
                I,
                S,
                T,
                N,
                A = a(this),
                C = 0,
                R = 0,
                P = '';
            if (!l(e)) {
                if ((n = c(e)) && !~E(u(a(f(e))), 'g')) throw g('`.replaceAll` does not allow non-global regexes');
                if ((r = d(e, m))) return i(r, e, A, t);
                if (h && n) return b(u(A), e, t);
            }
            for (o = u(A), p = u(e), (I = s(t)) || (t = u(t)), T = v(1, (S = p.length)), C = O(o, p, 0); -1 !== C; ) (N = I ? u(t(p, C, o)) : _(p, o, C, [], void 0, t)), (P += y(o, R, C) + N), (R = C + S), (C = O(o, p, C + T));
            return R < o.length && (P += y(o, R)), P;
        }
    }
);
