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
    _ = n(382698),
    p = n(497464),
    h = n(857168),
    m = n(3831),
    g = n(814559),
    E = n(820616),
    b = n(751736)("replace"),
    y = Math.max,
    O = Math.min,
    v = a([].concat),
    I = a([].push),
    T = a("".indexOf),
    S = a("".slice),
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
                var r = p(this),
                    a = u(e) ? void 0 : m(e, b);
                return a ? i(a, e, r, n) : i(t, _(r), e, n);
            },
            function (e, i) {
                var o = l(this),
                    s = _(e);
                if ("string" == typeof i && -1 === T(i, a) && -1 === T(i, "$<")) {
                    var u = n(t, o, s, i);
                    if (u.done) return u.value;
                }
                var p = c(i);
                p || (i = _(i));
                var m = o.global;
                m && ((P = o.unicode), (o.lastIndex = 0));
                for (var b = []; null !== (w = E(o, s)) && (I(b, w), m); ) {
                    "" === _(w[0]) && (o.lastIndex = h(s, f(o.lastIndex), P));
                }
                for (var C = "", N = 0, R = 0; R < b.length; R++) {
                    for (
                        var P, D, w = b[R], L = _(w[0]), x = y(O(d(w.index), s.length), 0), M = [], k = 1;
                        k < w.length;
                        k++
                    )
                        I(M, A(w[k]));
                    var j = w.groups;
                    if (p) {
                        var U = v([L], M, x, s);
                        void 0 !== j && I(U, j), (D = _(r(i, void 0, U)));
                    } else D = g(L, s, x, M, j, i);
                    x >= N && ((C += S(s, N, x) + D), (N = x + L.length));
                }
                return C + S(s, N);
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
