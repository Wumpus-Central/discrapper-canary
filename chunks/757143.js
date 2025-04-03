var n = r(197187),
    i = r(926515),
    o = r(581031),
    a = r(527221),
    c = r(936940),
    u = r(24033),
    s = r(354848),
    l = r(35179),
    f = r(959318),
    p = r(552028),
    v = r(714050),
    g = r(676125),
    x = r(344597),
    d = r(995739),
    h = r(115726),
    E = r(651673),
    y = r(641236)('replace'),
    I = Math.max,
    R = Math.min,
    b = o([].concat),
    A = o([].push),
    S = o(''.indexOf),
    $ = o(''.slice),
    m = '$0' === 'a'.replace(/./, '$0'),
    w = !!/./[y] && '' === /./[y]('a', '$0');
a(
    'replace',
    function (t, e, r) {
        var o = w ? '$' : '$0';
        return [
            function (t, r) {
                var n = g(this),
                    o = l(t) ? void 0 : d(t, y);
                return o ? i(o, t, n, r) : i(e, v(n), t, r);
            },
            function (t, i) {
                var a = u(this),
                    c = v(t);
                if ('string' == typeof i && -1 === S(i, o) && -1 === S(i, '$<')) {
                    var l = r(e, a, c, i);
                    if (l.done) return l.value;
                }
                var g = s(i);
                g || (i = v(i));
                var d = a.global;
                d && ((T = a.unicode), (a.lastIndex = 0));
                for (var y = []; null !== (O = E(a, c)) && (A(y, O), d); ) {
                    '' === v(O[0]) && (a.lastIndex = x(c, p(a.lastIndex), T));
                }
                for (var m = '', w = 0, k = 0; k < y.length; k++) {
                    for (var C, T, _, O = y[k], M = v(O[0]), D = I(R(f(O.index), c.length), 0), K = [], N = 1; N < O.length; N++) A(K, void 0 === (C = O[N]) ? C : String(C));
                    var P = O.groups;
                    if (g) {
                        var U = b([M], K, D, c);
                        void 0 !== P && A(U, P), (_ = v(n(i, void 0, U)));
                    } else _ = h(M, c, D, K, P, i);
                    D >= w && ((m += $(c, w, D) + _), (w = D + M.length));
                }
                return m + $(c, w);
            }
        ];
    },
    !!c(function () {
        var t = /./;
        return (
            (t.exec = function () {
                var t = [];
                return (t.groups = { a: '7' }), t;
            }),
            '7' !== ''.replace(t, '$<a>')
        );
    }) ||
        !m ||
        w
);
