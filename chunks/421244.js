var o = a(98405),
    i = a(580983),
    l = a(35760),
    n = a(280481),
    s = a(682564),
    r = a(497464),
    d = a(554148),
    c = a(382698),
    u = a(179122),
    f = a(655152),
    h = a(796138),
    p = a(933009),
    g = a(817282),
    m = a(3831),
    y = a(556585),
    M = a(621523),
    b = a(751736),
    L = a(733375),
    w = a(857168),
    O = a(820616),
    v = a(199838),
    D = a(511696),
    S = b("matchAll"),
    E = "RegExp String",
    P = E + " Iterator",
    _ = v.set,
    C = v.getterFor(P),
    N = RegExp.prototype,
    j = TypeError,
    I = l("".indexOf),
    x = l("".matchAll),
    k =
        !!x &&
        !M(function () {
            x("a", /./);
        }),
    A = n(
        function (e, t, a, o) {
            _(this, {
                type: P,
                regexp: e,
                string: t,
                global: a,
                unicode: o,
                done: !1,
            });
        },
        E,
        function () {
            var e = C(this);
            if (e.done) return s(void 0, !0);
            var t = e.regexp,
                a = e.string,
                o = O(t, a);
            return null === o
                ? ((e.done = !0), s(void 0, !0))
                : (e.global ? "" === c(o[0]) && (t.lastIndex = w(a, d(t.lastIndex), e.unicode)) : (e.done = !0),
                  s(o, !1));
        },
    ),
    R = function (e) {
        var t,
            a,
            o,
            i = u(this),
            l = c(e),
            n = L(i, RegExp),
            s = c(g(i));
        return (
            (t = new n(n === RegExp ? i.source : i, s)),
            (a = !!~I(s, "g")),
            (o = !!~I(s, "u")),
            (t.lastIndex = d(i.lastIndex)),
            new A(t, l, a, o)
        );
    };
o(
    {
        target: "String",
        proto: !0,
        forced: k,
    },
    {
        matchAll: function (e) {
            var t,
                a,
                o,
                l = r(this);
            if (f(e)) {
                if (k) return x(l, e);
            } else {
                if (p(e) && !~I(c(r(g(e))), "g")) throw new j("`.matchAll` does not allow non-global regexes");
                if (k) return x(l, e);
                if ((void 0 === (a = m(e, S)) && D && "RegExp" === h(e) && (a = R), a)) return i(a, e, l);
            }
            return (t = c(l)), (o = RegExp(e, "g")), D ? i(R, o, t) : o[S](t);
        },
    },
),
    D || S in N || y(N, S, R);
