var e = n(766362),
    o = n(668530),
    i = n(570596),
    u = n(96403),
    s = n(414629),
    c = n(447631),
    f = n(828596),
    a = n(821819),
    p = n(141603),
    v = n(875604),
    l = n(28886),
    y = n(729605),
    h = n(591794),
    x = n(342545),
    d = n(241777),
    g = n(224106),
    b = n(302231),
    m = n(937443),
    S = n(777628),
    w = n(502640),
    O = n(65007),
    j = n(349446),
    A = n(930134),
    E = n(790248),
    P = n(691244),
    T = n(942282),
    k = n(293303),
    F = n(964653),
    I = n(511364),
    L = n(348343),
    D = n(360518),
    M = n(862602),
    _ = n(187203),
    R = n(29657),
    C = n(414847),
    N = n(29461),
    z = n(804104).forEach,
    G = F('hidden'),
    B = 'Symbol',
    W = 'prototype',
    J = N.set,
    V = N.getterFor(B),
    H = Object[W],
    K = o.Symbol,
    U = K && K[W],
    q = o.RangeError,
    Y = o.TypeError,
    X = o.QObject,
    $ = O.f,
    Q = j.f,
    Z = S.f,
    tt = E.f,
    tr = u([].push),
    tn = k('symbols'),
    te = k('op-symbols'),
    to = k('wks'),
    ti = !X || !X[W] || !X[W].findChild,
    tu = function (t, r, n) {
        var e = $(H, r);
        e && delete H[r], Q(t, r, n), e && t !== H && Q(H, r, e);
    },
    ts =
        c &&
        a(function () {
            return (
                7 !==
                g(
                    Q({}, 'a', {
                        get: function () {
                            return Q(this, 'a', { value: 7 }).a;
                        }
                    })
                ).a
            );
        })
            ? tu
            : Q,
    tc = function (t, r) {
        var n = (tn[t] = g(U));
        return (
            J(n, {
                type: B,
                tag: t,
                description: r
            }),
            c || (n.description = r),
            n
        );
    },
    tf = function (t, r, n) {
        t === H && tf(te, r, n), l(t);
        var e = h(r);
        return (l(n), p(tn, e)) ? (n.enumerable ? (p(t, G) && t[G][e] && (t[G][e] = !1), (n = g(n, { enumerable: d(0, !1) }))) : (p(t, G) || Q(t, G, d(1, {})), (t[G][e] = !0)), ts(t, e, n)) : Q(t, e, n);
    },
    ta = function (t, r) {
        l(t);
        var n = y(r);
        return (
            z(b(n).concat(ty(n)), function (r) {
                (!c || i(tp, n, r)) && tf(t, r, n[r]);
            }),
            t
        );
    },
    tp = function (t) {
        var r = h(t),
            n = i(tt, this, r);
        return (!(this === H && p(tn, r)) || !!p(te, r)) && (!(n || !p(this, r) || !p(tn, r) || (p(this, G) && this[G][r])) || n);
    },
    tv = function (t, r) {
        var n = y(t),
            e = h(r);
        if (!(n === H && p(tn, e)) || p(te, e)) {
            var o = $(n, e);
            return o && p(tn, e) && !(p(n, G) && n[G][e]) && (o.enumerable = !0), o;
        }
    },
    tl = function (t) {
        var r = Z(y(t)),
            n = [];
        return (
            z(r, function (t) {
                p(tn, t) || p(I, t) || tr(n, t);
            }),
            n
        );
    },
    ty = function (t) {
        var r = t === H,
            n = Z(r ? te : y(t)),
            e = [];
        return (
            z(n, function (t) {
                p(tn, t) && (!r || p(H, t)) && tr(e, tn[t]);
            }),
            e
        );
    };
f ||
    (P(
        (U = (K = function () {
            if (v(U, this)) throw new Y('Symbol is not a constructor');
            var t = arguments.length && void 0 !== arguments[0] ? x(arguments[0]) : void 0,
                r = L(t),
                n = function (t) {
                    var e = void 0 === this ? o : this;
                    e === H && i(n, te, t), p(e, G) && p(e[G], r) && (e[G][r] = !1);
                    var u = d(1, t);
                    try {
                        ts(e, r, u);
                    } catch (t) {
                        if (!(t instanceof q)) throw t;
                        tu(e, r, u);
                    }
                };
            return (
                c &&
                    ti &&
                    ts(H, r, {
                        configurable: !0,
                        set: n
                    }),
                tc(r, t)
            );
        })[W]),
        'toString',
        function () {
            return V(this).tag;
        }
    ),
    P(K, 'withoutSetter', function (t) {
        return tc(L(t), t);
    }),
    (E.f = tp),
    (j.f = tf),
    (A.f = ta),
    (O.f = tv),
    (m.f = S.f = tl),
    (w.f = ty),
    (M.f = function (t) {
        return tc(D(t), t);
    }),
    c &&
        (T(U, 'description', {
            configurable: !0,
            get: function () {
                return V(this).description;
            }
        }),
        s || P(H, 'propertyIsEnumerable', tp, { unsafe: !0 }))),
    e(
        {
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: !f,
            sham: !f
        },
        { Symbol: K }
    ),
    z(b(to), function (t) {
        _(t);
    }),
    e(
        {
            target: B,
            stat: !0,
            forced: !f
        },
        {
            useSetter: function () {
                ti = !0;
            },
            useSimple: function () {
                ti = !1;
            }
        }
    ),
    e(
        {
            target: 'Object',
            stat: !0,
            forced: !f,
            sham: !c
        },
        {
            create: function (t, r) {
                return void 0 === r ? g(t) : ta(g(t), r);
            },
            defineProperty: tf,
            defineProperties: ta,
            getOwnPropertyDescriptor: tv
        }
    ),
    e(
        {
            target: 'Object',
            stat: !0,
            forced: !f
        },
        { getOwnPropertyNames: tl }
    ),
    R(),
    C(K, B),
    (I[G] = !0);
