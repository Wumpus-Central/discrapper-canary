var o = a(557939),
    i = a(446474),
    l = a(517737),
    n = a(23277),
    s = a(503902),
    r = a(321727),
    d = a(370001),
    c = a(304880),
    u = a(101968),
    f = a(652320),
    h = a(647055),
    p = a(432663),
    g = a(565079),
    y = a(95959),
    m = a(693655),
    M = a(503628),
    b = a(380744),
    L = a(322402),
    w = a(929880),
    O = a(17755),
    D = a(883972),
    v = a(105712),
    S = b("matchAll"),
    E = "RegExp String",
    _ = E + " Iterator",
    P = D.set,
    A = D.getterFor(_),
    N = RegExp.prototype,
    j = TypeError,
    C = l("".indexOf),
    I = l("".matchAll),
    x =
        !!I &&
        !M(function () {
            I("a", /./);
        }),
    k = n(
        function (e, t, a, o) {
            P(this, {
                type: _,
                regexp: e,
                string: t,
                global: a,
                unicode: o,
                done: !1,
            });
        },
        E,
        function () {
            var e = A(this);
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
            (a = !!~C(s, "g")),
            (o = !!~C(s, "u")),
            (t.lastIndex = d(i.lastIndex)),
            new k(t, l, a, o)
        );
    };
o(
    {
        target: "String",
        proto: !0,
        forced: x,
    },
    {
        matchAll: function (e) {
            var t,
                a,
                o,
                l = r(this);
            if (f(e)) {
                if (x) return I(l, e);
            } else {
                if (p(e) && !~C(c(r(g(e))), "g")) throw new j("`.matchAll` does not allow non-global regexes");
                if (x) return I(l, e);
                if ((void 0 === (a = y(e, S)) && v && "RegExp" === h(e) && (a = R), a)) return i(a, e, l);
            }
            return (t = c(l)), (o = RegExp(e, "g")), v ? i(R, o, t) : o[S](t);
        },
    },
),
    v || S in N || m(N, S, R);
