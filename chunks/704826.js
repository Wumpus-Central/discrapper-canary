var n = r(636881),
    i = r(580983),
    o = r(46015),
    a = r(518187),
    c = r(621523),
    u = r(179122),
    s = r(880181),
    l = r(655152),
    f = r(77826),
    p = r(554148),
    v = r(382698),
    g = r(497464),
    d = r(857168),
    x = r(3831),
    h = r(814559),
    E = r(820616),
    y = r(751736)('replace'),
    I = Math.max,
    R = Math.min,
    b = o([].concat),
    A = o([].push),
    w = o(''.indexOf),
    S = o(''.slice),
    $ = '$0' === 'a'.replace(/./, '$0'),
    m = !!/./[y] && '' === /./[y]('a', '$0');
a(
    'replace',
    function (t, e, r) {
        var o = m ? '$' : '$0';
        return [
            function (t, r) {
                var n = g(this),
                    o = l(t) ? void 0 : x(t, y);
                return o ? i(o, t, n, r) : i(e, v(n), t, r);
            },
            function (t, i) {
                var a = u(this),
                    c = v(t);
                if ('string' == typeof i && -1 === w(i, o) && -1 === w(i, '$<')) {
                    var l = r(e, a, c, i);
                    if (l.done) return l.value;
                }
                var g = s(i);
                g || (i = v(i));
                var x = a.global;
                x && ((T = a.unicode), (a.lastIndex = 0));
                for (var y = []; null !== (O = E(a, c)) && (A(y, O), x); ) {
                    '' === v(O[0]) && (a.lastIndex = d(c, p(a.lastIndex), T));
                }
                for (var $ = '', m = 0, k = 0; k < y.length; k++) {
                    for (var C, T, _, O = y[k], M = v(O[0]), D = I(R(f(O.index), c.length), 0), K = [], N = 1; N < O.length; N++) A(K, void 0 === (C = O[N]) ? C : String(C));
                    var P = O.groups;
                    if (g) {
                        var U = b([M], K, D, c);
                        void 0 !== P && A(U, P), (_ = v(n(i, void 0, U)));
                    } else _ = h(M, c, D, K, P, i);
                    D >= m && (($ += S(c, m, D) + _), (m = D + M.length));
                }
                return $ + S(c, m);
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
        !$ ||
        m
);
