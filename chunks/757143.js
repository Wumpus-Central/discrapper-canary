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
    I = r(641236)('replace'),
    y = Math.max,
    R = Math.min,
    b = o([].concat),
    A = o([].push),
    S = o(''.indexOf),
    $ = o(''.slice),
    m = '$0' === 'a'.replace(/./, '$0'),
    k = !!/./[I] && '' === /./[I]('a', '$0');
a(
    'replace',
    function (t, e, r) {
        var o = k ? '$' : '$0';
        return [
            function (t, r) {
                var n = g(this),
                    o = l(t) ? void 0 : d(t, I);
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
                for (var I = []; null !== (_ = E(a, c)) && (A(I, _), d); ) {
                    '' === v(_[0]) && (a.lastIndex = x(c, p(a.lastIndex), T));
                }
                for (var m = '', k = 0, w = 0; w < I.length; w++) {
                    for (var C, T, _, O, M = v((_ = I[w])[0]), D = y(R(f(_.index), c.length), 0), K = [], N = 1; N < _.length; N++) A(K, void 0 === (C = _[N]) ? C : String(C));
                    var P = _.groups;
                    if (g) {
                        var U = b([M], K, D, c);
                        void 0 !== P && A(U, P), (O = v(n(i, void 0, U)));
                    } else O = h(M, c, D, K, P, i);
                    D >= k && ((m += $(c, k, D) + O), (k = D + M.length));
                }
                return m + $(c, k);
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
        k
);
