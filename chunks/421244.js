var a = o(98405),
    i = o(580983),
    l = o(35760),
    n = o(280481),
    s = o(682564),
    r = o(497464),
    d = o(554148),
    c = o(382698),
    u = o(179122),
    f = o(655152),
    h = o(796138),
    p = o(933009),
    g = o(817282),
    m = o(3831),
    y = o(556585),
    M = o(621523),
    b = o(751736),
    L = o(733375),
    w = o(857168),
    O = o(820616),
    v = o(199838),
    D = o(511696),
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
        function (e, t, o, a) {
            _(this, {
                type: P,
                regexp: e,
                string: t,
                global: o,
                unicode: a,
                done: !1,
            });
        },
        E,
        function () {
            var e = C(this);
            if (e.done) return s(void 0, !0);
            var t = e.regexp,
                o = e.string,
                a = O(t, o);
            return null === a
                ? ((e.done = !0), s(void 0, !0))
                : (e.global ? "" === c(a[0]) && (t.lastIndex = w(o, d(t.lastIndex), e.unicode)) : (e.done = !0),
                  s(a, !1));
        },
    ),
    R = function (e) {
        var t,
            o,
            a,
            i = u(this),
            l = c(e),
            n = L(i, RegExp),
            s = c(g(i));
        return (
            (t = new n(n === RegExp ? i.source : i, s)),
            (o = !!~I(s, "g")),
            (a = !!~I(s, "u")),
            (t.lastIndex = d(i.lastIndex)),
            new A(t, l, o, a)
        );
    };
a(
    {
        target: "String",
        proto: !0,
        forced: k,
    },
    {
        matchAll: function (e) {
            var t,
                o,
                a,
                l = r(this);
            if (f(e)) {
                if (k) return x(l, e);
            } else {
                if (p(e) && !~I(c(r(g(e))), "g")) throw new j("`.matchAll` does not allow non-global regexes");
                if (k) return x(l, e);
                if ((void 0 === (o = m(e, S)) && D && "RegExp" === h(e) && (o = R), o)) return i(o, e, l);
            }
            return (t = c(l)), (a = RegExp(e, "g")), D ? i(R, a, t) : a[S](t);
        },
    },
),
    D || S in N || y(N, S, R);
