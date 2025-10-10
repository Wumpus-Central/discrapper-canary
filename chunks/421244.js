var r = n(98405),
    i = n(580983),
    a = n(35760),
    o = n(280481),
    s = n(682564),
    l = n(497464),
    c = n(554148),
    u = n(382698),
    d = n(179122),
    f = n(655152),
    _ = n(796138),
    p = n(933009),
    h = n(817282),
    m = n(3831),
    g = n(556585),
    E = n(621523),
    b = n(751736),
    y = n(733375),
    O = n(857168),
    v = n(820616),
    I = n(199838),
    T = n(511696),
    S = b("matchAll"),
    A = "RegExp String",
    C = A + " Iterator",
    N = I.set,
    R = I.getterFor(C),
    P = RegExp.prototype,
    w = TypeError,
    D = a("".indexOf),
    L = a("".matchAll),
    x =
        !!L &&
        !E(function () {
            L("a", /./);
        }),
    M = o(
        function (e, t, n, r) {
            N(this, {
                type: C,
                regexp: e,
                string: t,
                global: n,
                unicode: r,
                done: !1,
            });
        },
        A,
        function () {
            var e = R(this);
            if (e.done) return s(void 0, !0);
            var t = e.regexp,
                n = e.string,
                r = v(t, n);
            return null === r
                ? ((e.done = !0), s(void 0, !0))
                : (e.global ? "" === u(r[0]) && (t.lastIndex = O(n, c(t.lastIndex), e.unicode)) : (e.done = !0),
                  s(r, !1));
        },
    ),
    j = function (e) {
        var t,
            n,
            r,
            i = d(this),
            a = u(e),
            o = y(i, RegExp),
            s = u(h(i));
        return (
            (t = new o(o === RegExp ? i.source : i, s)),
            (n = !!~D(s, "g")),
            (r = !!~D(s, "u")),
            (t.lastIndex = c(i.lastIndex)),
            new M(t, a, n, r)
        );
    };
r(
    {
        target: "String",
        proto: !0,
        forced: x,
    },
    {
        matchAll: function (e) {
            var t,
                n,
                r,
                a = l(this);
            if (f(e)) {
                if (x) return L(a, e);
            } else {
                if (p(e) && !~D(u(l(h(e))), "g")) throw new w("`.matchAll` does not allow non-global regexes");
                if (x) return L(a, e);
                if ((void 0 === (n = m(e, S)) && T && "RegExp" === _(e) && (n = j), n)) return i(n, e, a);
            }
            return (t = u(a)), (r = RegExp(e, "g")), T ? i(j, r, t) : r[S](t);
        },
    },
),
    T || S in P || g(P, S, j);
