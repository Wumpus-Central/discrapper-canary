var r = n(636881),
    i = n(580983),
    a = n(46015),
    o = n(518187),
    s = n(621523),
    l = n(179122),
    c = n(880181),
    u = n(655152),
    d = n(77826),
    f = n(554148),
    p = n(382698),
    _ = n(497464),
    m = n(857168),
    h = n(3831),
    g = n(814559),
    E = n(820616),
    b = n(751736)("replace"),
    y = Math.max,
    O = Math.min,
    v = a([].concat),
    S = a([].push),
    I = a("".indexOf),
    T = a("".slice),
    C = function (e) {
        return void 0 === e ? e : String(e);
    },
    A = (function () {
        return "$0" === "a".replace(/./, "$0");
    })(),
    N = (function () {
        return !!/./[b] && "" === /./[b]("a", "$0");
    })();
o(
    "replace",
    function (e, t, n) {
        var a = N ? "$" : "$0";
        return [
            function (e, n) {
                var r = _(this),
                    a = u(e) ? void 0 : h(e, b);
                return a ? i(a, e, r, n) : i(t, p(r), e, n);
            },
            function (e, i) {
                var o = l(this),
                    s = p(e);
                if ("string" == typeof i && -1 === I(i, a) && -1 === I(i, "$<")) {
                    var u = n(t, o, s, i);
                    if (u.done) return u.value;
                }
                var _ = c(i);
                _ || (i = p(i));
                var h = o.global;
                h && ((R = o.unicode), (o.lastIndex = 0));
                for (var b = []; null !== (w = E(o, s)) && (S(b, w), h); ) {
                    "" === p(w[0]) && (o.lastIndex = m(s, f(o.lastIndex), R));
                }
                for (var A = "", N = 0, P = 0; P < b.length; P++) {
                    for (
                        var R, D, w = b[P], x = p(w[0]), L = y(O(d(w.index), s.length), 0), j = [], M = 1;
                        M < w.length;
                        M++
                    )
                        S(j, C(w[M]));
                    var k = w.groups;
                    if (_) {
                        var U = v([x], j, L, s);
                        void 0 !== k && S(U, k), (D = p(r(i, void 0, U)));
                    } else D = g(x, s, L, j, k, i);
                    L >= N && ((A += T(s, N, L) + D), (N = L + x.length));
                }
                return A + T(s, N);
            },
        ];
    },
    !!s(function () {
        var e = /./;
        return (
            (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
            }),
            "7" !== "".replace(e, "$<a>")
        );
    }) ||
        !A ||
        N,
);
