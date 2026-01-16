var e = r(636881),
    i = r(580983),
    o = r(46015),
    u = r(518187),
    c = r(621523),
    a = r(179122),
    s = r(880181),
    f = r(655152),
    l = r(77826),
    v = r(554148),
    p = r(382698),
    d = r(497464),
    g = r(857168),
    h = r(3831),
    x = r(814559),
    y = r(820616),
    b = r(751736)("replace"),
    I = Math.max,
    E = Math.min,
    R = o([].concat),
    m = o([].push),
    $ = o("".indexOf),
    S = o("".slice),
    w = "$0" === "a".replace(/./, "$0"),
    O = !!/./[b] && "" === /./[b]("a", "$0");
u(
    "replace",
    function (t, n, r) {
        var o = O ? "$" : "$0";
        return [
            function (t, r) {
                var e = d(this),
                    o = f(t) ? void 0 : h(t, b);
                return o ? i(o, t, e, r) : i(n, p(e), t, r);
            },
            function (t, i) {
                var u = a(this),
                    c = p(t);
                if ("string" == typeof i && -1 === $(i, o) && -1 === $(i, "$<")) {
                    var f = r(n, u, c, i);
                    if (f.done) return f.value;
                }
                var d = s(i);
                d || (i = p(i));
                var h = u.global;
                h && ((C = u.unicode), (u.lastIndex = 0));
                for (var b = []; null !== (T = y(u, c)) && (m(b, T), h); ) {
                    "" === p(T[0]) && (u.lastIndex = g(c, v(u.lastIndex), C));
                }
                for (var w = "", O = 0, A = 0; A < b.length; A++) {
                    for (
                        var k, C, P, T = b[A], _ = p(T[0]), F = I(E(l(T.index), c.length), 0), U = [], M = 1;
                        M < T.length;
                        M++
                    )
                        m(U, void 0 === (k = T[M]) ? k : String(k));
                    var j = T.groups;
                    if (d) {
                        var D = R([_], U, F, c);
                        void 0 !== j && m(D, j), (P = p(e(i, void 0, D)));
                    } else P = x(_, c, F, U, j, i);
                    F >= O && ((w += S(c, O, F) + P), (O = F + _.length));
                }
                return w + S(c, O);
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
        O,
);
