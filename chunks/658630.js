"use strict";
var n = e(834647),
    o = e(308227),
    s = e(664886),
    i = e(675879),
    u = e(780940),
    c = e(414123),
    a = e(875746),
    f = e(486816),
    p = e(512008),
    l = e(715804),
    v = e(155084),
    y = e(958498),
    h = e(176986),
    x = e(57284),
    d = e(426261),
    g = e(991207),
    b = e(859911),
    m = e(989447),
    S = e(753123),
    w = e(172574),
    O = e(965746),
    j = e(164336),
    A = e(51784),
    E = e(321762),
    T = e(735811),
    P = e(530383),
    k = e(175380),
    I = e(157494),
    F = e(760326),
    D = e(226775),
    M = e(61748),
    L = e(795388),
    R = e(926082),
    C = e(255407),
    N = e(469516),
    _ = e(605944),
    z = e(673162).forEach,
    G = I("hidden"),
    U = "Symbol",
    B = "prototype",
    W = _.set,
    J = _.getterFor(U),
    V = Object[B],
    K = o.Symbol,
    H = K && K[B],
    Y = o.RangeError,
    q = o.TypeError,
    X = o.QObject,
    Z = O.f,
    $ = j.f,
    Q = S.f,
    tt = E.f,
    tr = i([].push),
    te = k("symbols"),
    tn = k("op-symbols"),
    to = k("wks"),
    ts = !X || !X[B] || !X[B].findChild,
    ti = function (t, r, e) {
        var n = Z(V, r);
        n && delete V[r], $(t, r, e), n && t !== V && $(V, r, n);
    },
    tu =
        c &&
        f(function () {
            return (
                7 !==
                g(
                    $({}, "a", {
                        get: function () {
                            return $(this, "a", { value: 7 }).a;
                        },
                    }),
                ).a
            );
        })
            ? ti
            : $,
    tc = function (t, r) {
        var e = (te[t] = g(H));
        return W(e, { type: U, tag: t, description: r }), c || (e.description = r), e;
    },
    ta = function (t, r, e) {
        t === V && ta(tn, r, e), v(t);
        var n = h(r);
        return (v(e), p(te, n))
            ? (e.enumerable
                  ? (p(t, G) && t[G][n] && (t[G][n] = !1), (e = g(e, { enumerable: d(0, !1) })))
                  : (p(t, G) || $(t, G, d(1, g(null))), (t[G][n] = !0)),
              tu(t, n, e))
            : $(t, n, e);
    },
    tf = function (t, r) {
        v(t);
        var e = y(r);
        return (
            z(b(e).concat(ty(e)), function (r) {
                (!c || s(tp, e, r)) && ta(t, r, e[r]);
            }),
            t
        );
    },
    tp = function (t) {
        var r = h(t),
            e = s(tt, this, r);
        return (
            (!(this === V && p(te, r)) || !!p(tn, r)) &&
            (!(e || !p(this, r) || !p(te, r) || (p(this, G) && this[G][r])) || e)
        );
    },
    tl = function (t, r) {
        var e = y(t),
            n = h(r);
        if (!(e === V && p(te, n)) || p(tn, n)) {
            var o = Z(e, n);
            return o && p(te, n) && !(p(e, G) && e[G][n]) && (o.enumerable = !0), o;
        }
    },
    tv = function (t) {
        var r = Q(y(t)),
            e = [];
        return (
            z(r, function (t) {
                p(te, t) || p(F, t) || tr(e, t);
            }),
            e
        );
    },
    ty = function (t) {
        var r = t === V,
            e = Q(r ? tn : y(t)),
            n = [];
        return (
            z(e, function (t) {
                p(te, t) && (!r || p(V, t)) && tr(n, te[t]);
            }),
            n
        );
    };
!a &&
    (T(
        (H = (K = function () {
            if (l(H, this)) throw new q("Symbol is not a constructor");
            var t = arguments.length && void 0 !== arguments[0] ? x(arguments[0]) : void 0,
                r = D(t),
                e = function (t) {
                    var n = void 0 === this ? o : this;
                    n === V && s(e, tn, t), p(n, G) && p(n[G], r) && (n[G][r] = !1);
                    var i = d(1, t);
                    try {
                        tu(n, r, i);
                    } catch (t) {
                        if (!(t instanceof Y)) throw t;
                        ti(n, r, i);
                    }
                };
            return c && ts && tu(V, r, { configurable: !0, set: e }), tc(r, t);
        })[B]),
        "toString",
        function () {
            return J(this).tag;
        },
    ),
    T(K, "withoutSetter", function (t) {
        return tc(D(t), t);
    }),
    (E.f = tp),
    (j.f = ta),
    (A.f = tf),
    (O.f = tl),
    (m.f = S.f = tv),
    (w.f = ty),
    (L.f = function (t) {
        return tc(M(t), t);
    }),
    c &&
        (P(H, "description", {
            configurable: !0,
            get: function () {
                return J(this).description;
            },
        }),
        u || T(V, "propertyIsEnumerable", tp, { unsafe: !0 }))),
    n({ global: !0, constructor: !0, wrap: !0, forced: !a, sham: !a }, { Symbol: K }),
    z(b(to), function (t) {
        R(t);
    }),
    n(
        { target: U, stat: !0, forced: !a },
        {
            useSetter: function () {
                ts = !0;
            },
            useSimple: function () {
                ts = !1;
            },
        },
    ),
    n(
        { target: "Object", stat: !0, forced: !a, sham: !c },
        {
            create: function (t, r) {
                return void 0 === r ? g(t) : tf(g(t), r);
            },
            defineProperty: ta,
            defineProperties: tf,
            getOwnPropertyDescriptor: tl,
        },
    ),
    n({ target: "Object", stat: !0, forced: !a }, { getOwnPropertyNames: tv }),
    C(),
    N(K, U),
    (F[G] = !0);
