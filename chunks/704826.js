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
    A = function (e) {
        return void 0 === e ? e : String(e);
    },
    C = (function () {
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
                for (var b = []; null !== (D = E(o, s)) && (S(b, D), h); ) {
                    "" === p(D[0]) && (o.lastIndex = m(s, f(o.lastIndex), R));
                }
                for (var C = "", N = 0, P = 0; P < b.length; P++) {
                    for (
                        var R, w, D = b[P], x = p(D[0]), L = y(O(d(D.index), s.length), 0), j = [], M = 1;
                        M < D.length;
                        M++
                    )
                        S(j, A(D[M]));
                    var k = D.groups;
                    if (_) {
                        var U = v([x], j, L, s);
                        void 0 !== k && S(U, k), (w = p(r(i, void 0, U)));
                    } else w = g(x, s, L, j, k, i);
                    L >= N && ((C += T(s, N, L) + w), (N = L + x.length));
                }
                return C + T(s, N);
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
        !C ||
        N,
);
