var r = n(636881),
    i = n(580983),
    o = n(46015),
    a = n(518187),
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
    v = o([].concat),
    I = o([].push),
    T = o("".indexOf),
    S = o("".slice),
    A = function (e) {
        return void 0 === e ? e : String(e);
    },
    N = (function () {
        return "$0" === "a".replace(/./, "$0");
    })(),
    C = (function () {
        return !!/./[b] && "" === /./[b]("a", "$0");
    })();
a(
    "replace",
    function (e, t, n) {
        var o = C ? "$" : "$0";
        return [
            function (e, n) {
                var r = p(this),
                    o = u(e) ? void 0 : m(e, b);
                return o ? i(o, e, r, n) : i(t, _(r), e, n);
            },
            function (e, i) {
                var a = l(this),
                    s = _(e);
                if ("string" == typeof i && -1 === T(i, o) && -1 === T(i, "$<")) {
                    var u = n(t, a, s, i);
                    if (u.done) return u.value;
                }
                var p = c(i);
                p || (i = _(i));
                var m = a.global;
                m && ((P = a.unicode), (a.lastIndex = 0));
                for (var b = []; null !== (D = E(a, s)) && (I(b, D), m); ) {
                    "" === _(D[0]) && (a.lastIndex = h(s, f(a.lastIndex), P));
                }
                for (var N = "", C = 0, R = 0; R < b.length; R++) {
                    for (
                        var P, w, D = b[R], L = _(D[0]), x = y(O(d(D.index), s.length), 0), M = [], k = 1;
                        k < D.length;
                        k++
                    )
                        I(M, A(D[k]));
                    var j = D.groups;
                    if (p) {
                        var U = v([L], M, x, s);
                        void 0 !== j && I(U, j), (w = _(r(i, void 0, U)));
                    } else w = g(L, s, x, M, j, i);
                    x >= C && ((N += S(s, C, x) + w), (C = x + L.length));
                }
                return N + S(s, C);
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
        !N ||
        C,
);
