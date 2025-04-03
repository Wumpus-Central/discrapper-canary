var r = n(197187),
    i = n(926515),
    o = n(581031),
    a = n(527221),
    s = n(936940),
    l = n(24033),
    c = n(354848),
    u = n(35179),
    d = n(959318),
    f = n(552028),
    _ = n(714050),
    p = n(676125),
    h = n(344597),
    m = n(995739),
    g = n(115726),
    E = n(651673),
    b = n(641236)('replace'),
    y = Math.max,
    v = Math.min,
    O = o([].concat),
    I = o([].push),
    S = o(''.indexOf),
    T = o(''.slice),
    N = function (e) {
        return void 0 === e ? e : String(e);
    },
    A = (function () {
        return '$0' === 'a'.replace(/./, '$0');
    })(),
    C = (function () {
        return !!/./[b] && '' === /./[b]('a', '$0');
    })();
a(
    'replace',
    function (e, t, n) {
        var o = C ? '$' : '$0';
        return [
            function (e, n) {
                var r = p(this),
                    o = u(e) ? void 0 : m(e, b);
                return o ? i(o, e, r, n) : i(t, _(r), e, n);
            },
            function (e, i) {
                var a = l(this),
                    s = _(e);
                if ('string' == typeof i && -1 === S(i, o) && -1 === S(i, '$<')) {
                    var u = n(t, a, s, i);
                    if (u.done) return u.value;
                }
                var p = c(i);
                p || (i = _(i));
                var m = a.global;
                m && ((P = a.unicode), (a.lastIndex = 0));
                for (var b = []; null !== (D = E(a, s)) && (I(b, D), m); ) {
                    '' === _(D[0]) && (a.lastIndex = h(s, f(a.lastIndex), P));
                }
                for (var A = '', C = 0, R = 0; R < b.length; R++) {
                    for (var P, w, D = b[R], L = _(D[0]), x = y(v(d(D.index), s.length), 0), M = [], k = 1; k < D.length; k++) I(M, N(D[k]));
                    var j = D.groups;
                    if (p) {
                        var U = O([L], M, x, s);
                        void 0 !== j && I(U, j), (w = _(r(i, void 0, U)));
                    } else w = g(L, s, x, M, j, i);
                    x >= C && ((A += T(s, C, x) + w), (C = x + L.length));
                }
                return A + T(s, C);
            }
        ];
    },
    !!s(function () {
        var e = /./;
        return (
            (e.exec = function () {
                var e = [];
                return (e.groups = { a: '7' }), e;
            }),
            '7' !== ''.replace(e, '$<a>')
        );
    }) ||
        !A ||
        C
);
