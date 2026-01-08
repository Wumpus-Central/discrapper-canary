var r = n(636881),
    i = n(580983),
    o = n(46015),
    a = n(518187),
    c = n(621523),
    u = n(179122),
    s = n(880181),
    l = n(655152),
    f = n(77826),
    p = n(554148),
    v = n(382698),
    g = n(497464),
    x = n(857168),
    d = n(3831),
    h = n(814559),
    E = n(820616),
    I = n(751736)("replace"),
    y = Math.max,
    R = Math.min,
    b = o([].concat),
    A = o([].push),
    S = o("".indexOf),
    $ = o("".slice),
    w = "$0" === "a".replace(/./, "$0"),
    m = !!/./[I] && "" === /./[I]("a", "$0");
a(
    "replace",
    function (t, e, n) {
        var o = m ? "$" : "$0";
        return [
            function (t, n) {
                var r = g(this),
                    o = l(t) ? void 0 : d(t, I);
                return o ? i(o, t, r, n) : i(e, v(r), t, n);
            },
            function (t, i) {
                var a = u(this),
                    c = v(t);
                if ("string" == typeof i && -1 === S(i, o) && -1 === S(i, "$<")) {
                    var l = n(e, a, c, i);
                    if (l.done) return l.value;
                }
                var g = s(i);
                g || (i = v(i));
                var d = a.global;
                d && ((T = a.unicode), (a.lastIndex = 0));
                for (var I = []; null !== (O = E(a, c)) && (A(I, O), d); ) {
                    "" === v(O[0]) && (a.lastIndex = x(c, p(a.lastIndex), T));
                }
                for (var w = "", m = 0, k = 0; k < I.length; k++) {
                    for (
                        var C, T, _, O = I[k], M = v(O[0]), D = y(R(f(O.index), c.length), 0), K = [], N = 1;
                        N < O.length;
                        N++
                    )
                        A(K, void 0 === (C = O[N]) ? C : String(C));
                    var P = O.groups;
                    if (g) {
                        var U = b([M], K, D, c);
                        void 0 !== P && A(U, P), (_ = v(r(i, void 0, U)));
                    } else _ = h(M, c, D, K, P, i);
                    D >= m && ((w += $(c, m, D) + _), (m = D + M.length));
                }
                return w + $(c, m);
            },
        ];
    },
    !!c(function () {
        var t = /./;
        return (
            (t.exec = function () {
                var t = [];
                return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
        );
    }) ||
        !w ||
        m,
);
