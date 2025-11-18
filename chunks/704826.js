var n = r(636881),
    i = r(580983),
    s = r(46015),
    a = r(518187),
    o = r(621523),
    u = r(179122),
    h = r(880181),
    c = r(655152),
    f = r(77826),
    l = r(554148),
    p = r(382698),
    v = r(497464),
    g = r(857168),
    d = r(3831),
    m = r(814559),
    y = r(820616),
    b = r(751736)("replace"),
    w = Math.max,
    x = Math.min,
    S = s([].concat),
    R = s([].push),
    k = s("".indexOf),
    P = s("".slice),
    U = "$0" === "a".replace(/./, "$0"),
    L = !!/./[b] && "" === /./[b]("a", "$0");
a(
    "replace",
    function (t, e, r) {
        var s = L ? "$" : "$0";
        return [
            function (t, r) {
                var n = v(this),
                    s = c(t) ? void 0 : d(t, b);
                return s ? i(s, t, n, r) : i(e, p(n), t, r);
            },
            function (t, i) {
                var a = u(this),
                    o = p(t);
                if ("string" == typeof i && -1 === k(i, s) && -1 === k(i, "$<")) {
                    var c = r(e, a, o, i);
                    if (c.done) return c.value;
                }
                var v = h(i);
                v || (i = p(i));
                var d = a.global;
                d && ((A = a.unicode), (a.lastIndex = 0));
                for (var b = []; null !== (C = y(a, o)) && (R(b, C), d); ) {
                    "" === p(C[0]) && (a.lastIndex = g(o, l(a.lastIndex), A));
                }
                for (var U = "", L = 0, E = 0; E < b.length; E++) {
                    for (
                        var I, A, q, C = b[E], O = p(C[0]), H = w(x(f(C.index), o.length), 0), B = [], $ = 1;
                        $ < C.length;
                        $++
                    )
                        R(B, void 0 === (I = C[$]) ? I : String(I));
                    var j = C.groups;
                    if (v) {
                        var z = S([O], B, H, o);
                        void 0 !== j && R(z, j), (q = p(n(i, void 0, z)));
                    } else q = m(O, o, H, B, j, i);
                    H >= L && ((U += P(o, L, H) + q), (L = H + O.length));
                }
                return U + P(o, L);
            },
        ];
    },
    !!o(function () {
        var t = /./;
        return (
            (t.exec = function () {
                var t = [];
                return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
        );
    }) ||
        !U ||
        L,
);
