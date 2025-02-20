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
    p = n(115726),
    _ = n(641236),
    h = n(992051),
    m = _('replace'),
    g = TypeError,
    E = o(''.indexOf),
    v = o(''.replace),
    b = o(''.slice),
    y = Math.max,
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
                _,
                S,
                I,
                T,
                N,
                A = a(this),
                C = 0,
                R = 0,
                P = '';
            if (!l(e)) {
                if ((n = c(e)) && !~E(u(a(f(e))), 'g')) throw g('`.replaceAll` does not allow non-global regexes');
                if ((r = d(e, m))) return i(r, e, A, t);
                if (h && n) return v(u(A), e, t);
            }
            for (o = u(A), _ = u(e), (S = s(t)) || (t = u(t)), T = y(1, (I = _.length)), C = O(o, _, 0); -1 !== C; ) (N = S ? u(t(_, C, o)) : p(_, o, C, [], void 0, t)), (P += b(o, R, C) + N), (R = C + I), (C = O(o, _, C + T));
            return R < o.length && (P += b(o, R)), P;
        }
    }
);
