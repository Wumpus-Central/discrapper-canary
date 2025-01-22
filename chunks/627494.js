var i = r(147018),
    a = r(926515),
    o = r(581031),
    s = r(676125),
    l = r(354848),
    u = r(35179),
    c = r(155763),
    d = r(714050),
    f = r(995739),
    p = r(87046),
    h = r(115726),
    _ = r(641236),
    m = r(992051),
    g = _('replace'),
    E = TypeError,
    v = o(''.indexOf),
    y = o(''.replace),
    b = o(''.slice),
    I = Math.max,
    T = function (e, n, r) {
        return r > e.length ? -1 : '' === n ? r : v(e, n, r);
    };
i(
    {
        target: 'String',
        proto: !0
    },
    {
        replaceAll: function (e, n) {
            var r,
                i,
                o,
                _,
                S,
                A,
                C,
                N,
                R = s(this),
                O = 0,
                D = 0,
                x = '';
            if (!u(e)) {
                if ((r = c(e)) && !~v(d(s(p(e))), 'g')) throw E('`.replaceAll` does not allow non-global regexes');
                if ((i = f(e, g))) return a(i, e, R, n);
                if (m && r) return y(d(R), e, n);
            }
            for (o = d(R), _ = d(e), !(S = l(n)) && (n = d(n)), C = I(1, (A = _.length)), O = T(o, _, 0); -1 !== O; ) (N = S ? d(n(_, O, o)) : h(_, o, O, [], void 0, n)), (x += b(o, D, O) + N), (D = O + A), (O = T(o, _, O + C));
            return D < o.length && (x += b(o, D)), x;
        }
    }
);
