var i = n(67867),
    r = n(668530),
    a = n(570596),
    s = n(96403),
    o = n(414629),
    l = n(447631),
    u = n(828596),
    c = n(821819),
    d = n(141603),
    f = n(875604),
    _ = n(28886),
    p = n(729605),
    h = n(591794),
    m = n(342545),
    g = n(241777),
    E = n(224106),
    v = n(302231),
    y = n(937443),
    I = n(777628),
    b = n(502640),
    T = n(65007),
    S = n(349446),
    A = n(930134),
    N = n(790248),
    C = n(691244),
    R = n(942282),
    O = n(293303),
    D = n(964653),
    x = n(511364),
    L = n(348343),
    P = n(360518),
    w = n(862602),
    M = n(187203),
    k = n(29657),
    U = n(414847),
    G = n(29461),
    B = n(804104).forEach,
    Z = D('hidden'),
    F = 'Symbol',
    V = 'prototype',
    j = G.set,
    H = G.getterFor(F),
    Y = Object[V],
    W = r.Symbol,
    K = W && W[V],
    z = r.RangeError,
    q = r.TypeError,
    Q = r.QObject,
    X = T.f,
    J = S.f,
    $ = I.f,
    ee = N.f,
    et = s([].push),
    en = O('symbols'),
    ei = O('op-symbols'),
    er = O('wks'),
    ea = !Q || !Q[V] || !Q[V].findChild,
    es = function (e, t, n) {
        var i = X(Y, t);
        i && delete Y[t], J(e, t, n), i && e !== Y && J(Y, t, i);
    },
    eo =
        l &&
        c(function () {
            return (
                7 !==
                E(
                    J({}, 'a', {
                        get: function () {
                            return J(this, 'a', { value: 7 }).a;
                        }
                    })
                ).a
            );
        })
            ? es
            : J,
    el = function (e, t) {
        var n = (en[e] = E(K));
        return (
            j(n, {
                type: F,
                tag: e,
                description: t
            }),
            l || (n.description = t),
            n
        );
    },
    eu = function (e, t, n) {
        e === Y && eu(ei, t, n), _(e);
        var i = h(t);
        return (_(n), d(en, i)) ? (n.enumerable ? (d(e, Z) && e[Z][i] && (e[Z][i] = !1), (n = E(n, { enumerable: g(0, !1) }))) : (d(e, Z) || J(e, Z, g(1, {})), (e[Z][i] = !0)), eo(e, i, n)) : J(e, i, n);
    },
    ec = function (e, t) {
        _(e);
        var n = p(t);
        return (
            B(v(n).concat(eh(n)), function (t) {
                (!l || a(ef, n, t)) && eu(e, t, n[t]);
            }),
            e
        );
    },
    ed = function (e, t) {
        return void 0 === t ? E(e) : ec(E(e), t);
    },
    ef = function (e) {
        var t = h(e),
            n = a(ee, this, t);
        return (!(this === Y && d(en, t)) || !!d(ei, t)) && (!(n || !d(this, t) || !d(en, t) || (d(this, Z) && this[Z][t])) || n);
    },
    e_ = function (e, t) {
        var n = p(e),
            i = h(t);
        if (!(n === Y && d(en, i)) || d(ei, i)) {
            var r = X(n, i);
            return r && d(en, i) && !(d(n, Z) && n[Z][i]) && (r.enumerable = !0), r;
        }
    },
    ep = function (e) {
        var t = $(p(e)),
            n = [];
        return (
            B(t, function (e) {
                d(en, e) || d(x, e) || et(n, e);
            }),
            n
        );
    },
    eh = function (e) {
        var t = e === Y,
            n = $(t ? ei : p(e)),
            i = [];
        return (
            B(n, function (e) {
                d(en, e) && (!t || d(Y, e)) && et(i, en[e]);
            }),
            i
        );
    };
u ||
    (C(
        (K = (W = function () {
            if (f(K, this)) throw new q('Symbol is not a constructor');
            var e = arguments.length && void 0 !== arguments[0] ? m(arguments[0]) : void 0,
                t = L(e),
                n = function (e) {
                    var i = void 0 === this ? r : this;
                    i === Y && a(n, ei, e), d(i, Z) && d(i[Z], t) && (i[Z][t] = !1);
                    var s = g(1, e);
                    try {
                        eo(i, t, s);
                    } catch (e) {
                        if (!(e instanceof z)) throw e;
                        es(i, t, s);
                    }
                };
            return (
                l &&
                    ea &&
                    eo(Y, t, {
                        configurable: !0,
                        set: n
                    }),
                el(t, e)
            );
        })[V]),
        'toString',
        function () {
            return H(this).tag;
        }
    ),
    C(W, 'withoutSetter', function (e) {
        return el(L(e), e);
    }),
    (N.f = ef),
    (S.f = eu),
    (A.f = ec),
    (T.f = e_),
    (y.f = I.f = ep),
    (b.f = eh),
    (w.f = function (e) {
        return el(P(e), e);
    }),
    l &&
        (R(K, 'description', {
            configurable: !0,
            get: function () {
                return H(this).description;
            }
        }),
        o || C(Y, 'propertyIsEnumerable', ef, { unsafe: !0 }))),
    i(
        {
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: !u,
            sham: !u
        },
        { Symbol: W }
    ),
    B(v(er), function (e) {
        M(e);
    }),
    i(
        {
            target: F,
            stat: !0,
            forced: !u
        },
        {
            useSetter: function () {
                ea = !0;
            },
            useSimple: function () {
                ea = !1;
            }
        }
    ),
    i(
        {
            target: 'Object',
            stat: !0,
            forced: !u,
            sham: !l
        },
        {
            create: ed,
            defineProperty: eu,
            defineProperties: ec,
            getOwnPropertyDescriptor: e_
        }
    ),
    i(
        {
            target: 'Object',
            stat: !0,
            forced: !u
        },
        { getOwnPropertyNames: ep }
    ),
    k(),
    U(W, F),
    (x[Z] = !0);
