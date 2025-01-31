var e = r(197187),
    i = r(926515),
    o = r(581031),
    u = r(527221),
    a = r(936940),
    c = r(24033),
    s = r(354848),
    f = r(35179),
    l = r(959318),
    h = r(552028),
    v = r(714050),
    p = r(676125),
    d = r(344597),
    x = r(995739),
    g = r(115726),
    I = r(651673),
    y = r(641236)('replace'),
    E = Math.max,
    b = Math.min,
    R = o([].concat),
    $ = o([].push),
    A = o(''.indexOf),
    k = o(''.slice),
    m = '$0' === 'a'.replace(/./, '$0'),
    C = !!/./[y] && '' === /./[y]('a', '$0');
u(
    'replace',
    function (n, t, r) {
        var o = C ? '$' : '$0';
        return [
            function (n, r) {
                var e = p(this),
                    o = f(n) ? void 0 : x(n, y);
                return o ? i(o, n, e, r) : i(t, v(e), n, r);
            },
            function (n, i) {
                var u = c(this),
                    a = v(n);
                if ('string' == typeof i && -1 === A(i, o) && -1 === A(i, '$<')) {
                    var f = r(t, u, a, i);
                    if (f.done) return f.value;
                }
                var p = s(i);
                p || (i = v(i));
                var x = u.global;
                x && ((T = u.unicode), (u.lastIndex = 0));
                for (var y = []; null !== (O = I(u, a)) && ($(y, O), x); ) {
                    '' === v(O[0]) && (u.lastIndex = d(a, h(u.lastIndex), T));
                }
                for (var m = '', C = 0, S = 0; S < y.length; S++) {
                    for (var w, T, O, _, U = v((O = y[S])[0]), M = E(b(l(O.index), a.length), 0), K = [], N = 1; N < O.length; N++) $(K, void 0 === (w = O[N]) ? w : String(w));
                    var P = O.groups;
                    if (p) {
                        var B = R([U], K, M, a);
                        void 0 !== P && $(B, P), (_ = v(e(i, void 0, B)));
                    } else _ = g(U, a, M, K, P, i);
                    M >= C && ((m += k(a, C, M) + _), (C = M + U.length));
                }
                return m + k(a, C);
            }
        ];
    },
    !!a(function () {
        var n = /./;
        return (
            (n.exec = function () {
                var n = [];
                return (n.groups = { a: '7' }), n;
            }),
            '7' !== ''.replace(n, '$<a>')
        );
    }) ||
        !m ||
        C
);
