var r = n(67867),
    i = n(668530),
    o = n(570596),
    a = n(96403),
    s = n(414629),
    l = n(447631),
    c = n(828596),
    u = n(821819),
    d = n(141603),
    f = n(875604),
    p = n(28886),
    _ = n(729605),
    h = n(591794),
    m = n(342545),
    g = n(241777),
    E = n(224106),
    v = n(302231),
    b = n(937443),
    y = n(777628),
    O = n(502640),
    S = n(65007),
    I = n(349446),
    T = n(930134),
    N = n(790248),
    A = n(691244),
    C = n(942282),
    R = n(293303),
    P = n(964653),
    w = n(511364),
    D = n(348343),
    x = n(360518),
    L = n(862602),
    M = n(187203),
    k = n(29657),
    j = n(414847),
    U = n(29461),
    G = n(804104).forEach,
    B = P('hidden'),
    Z = 'Symbol',
    F = 'prototype',
    V = U.set,
    H = U.getterFor(Z),
    W = Object[F],
    Y = i.Symbol,
    K = Y && Y[F],
    z = i.RangeError,
    q = i.TypeError,
    Q = i.QObject,
    X = S.f,
    J = I.f,
    $ = y.f,
    ee = N.f,
    et = a([].push),
    en = R('symbols'),
    er = R('op-symbols'),
    ei = R('wks'),
    eo = !Q || !Q[F] || !Q[F].findChild,
    ea = function (e, t, n) {
        var r = X(W, t);
        r && delete W[t], J(e, t, n), r && e !== W && J(W, t, r);
    },
    es =
        l &&
        u(function () {
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
            ? ea
            : J,
    el = function (e, t) {
        var n = (en[e] = E(K));
        return (
            V(n, {
                type: Z,
                tag: e,
                description: t
            }),
            l || (n.description = t),
            n
        );
    },
    ec = function (e, t, n) {
        e === W && ec(er, t, n), p(e);
        var r = h(t);
        return (p(n), d(en, r)) ? (n.enumerable ? (d(e, B) && e[B][r] && (e[B][r] = !1), (n = E(n, { enumerable: g(0, !1) }))) : (d(e, B) || J(e, B, g(1, {})), (e[B][r] = !0)), es(e, r, n)) : J(e, r, n);
    },
    eu = function (e, t) {
        p(e);
        var n = _(t);
        return (
            G(v(n).concat(eh(n)), function (t) {
                (!l || o(ef, n, t)) && ec(e, t, n[t]);
            }),
            e
        );
    },
    ed = function (e, t) {
        return void 0 === t ? E(e) : eu(E(e), t);
    },
    ef = function (e) {
        var t = h(e),
            n = o(ee, this, t);
        return (!(this === W && d(en, t)) || !!d(er, t)) && (!(n || !d(this, t) || !d(en, t) || (d(this, B) && this[B][t])) || n);
    },
    ep = function (e, t) {
        var n = _(e),
            r = h(t);
        if (!(n === W && d(en, r)) || d(er, r)) {
            var i = X(n, r);
            return i && d(en, r) && !(d(n, B) && n[B][r]) && (i.enumerable = !0), i;
        }
    },
    e_ = function (e) {
        var t = $(_(e)),
            n = [];
        return (
            G(t, function (e) {
                d(en, e) || d(w, e) || et(n, e);
            }),
            n
        );
    },
    eh = function (e) {
        var t = e === W,
            n = $(t ? er : _(e)),
            r = [];
        return (
            G(n, function (e) {
                d(en, e) && (!t || d(W, e)) && et(r, en[e]);
            }),
            r
        );
    };
c ||
    (A(
        (K = (Y = function () {
            if (f(K, this)) throw new q('Symbol is not a constructor');
            var e = arguments.length && void 0 !== arguments[0] ? m(arguments[0]) : void 0,
                t = D(e),
                n = function (e) {
                    var r = void 0 === this ? i : this;
                    r === W && o(n, er, e), d(r, B) && d(r[B], t) && (r[B][t] = !1);
                    var a = g(1, e);
                    try {
                        es(r, t, a);
                    } catch (e) {
                        if (!(e instanceof z)) throw e;
                        ea(r, t, a);
                    }
                };
            return (
                l &&
                    eo &&
                    es(W, t, {
                        configurable: !0,
                        set: n
                    }),
                el(t, e)
            );
        })[F]),
        'toString',
        function () {
            return H(this).tag;
        }
    ),
    A(Y, 'withoutSetter', function (e) {
        return el(D(e), e);
    }),
    (N.f = ef),
    (I.f = ec),
    (T.f = eu),
    (S.f = ep),
    (b.f = y.f = e_),
    (O.f = eh),
    (L.f = function (e) {
        return el(x(e), e);
    }),
    l &&
        (C(K, 'description', {
            configurable: !0,
            get: function () {
                return H(this).description;
            }
        }),
        s || A(W, 'propertyIsEnumerable', ef, { unsafe: !0 }))),
    r(
        {
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: !c,
            sham: !c
        },
        { Symbol: Y }
    ),
    G(v(ei), function (e) {
        M(e);
    }),
    r(
        {
            target: Z,
            stat: !0,
            forced: !c
        },
        {
            useSetter: function () {
                eo = !0;
            },
            useSimple: function () {
                eo = !1;
            }
        }
    ),
    r(
        {
            target: 'Object',
            stat: !0,
            forced: !c,
            sham: !l
        },
        {
            create: ed,
            defineProperty: ec,
            defineProperties: eu,
            getOwnPropertyDescriptor: ep
        }
    ),
    r(
        {
            target: 'Object',
            stat: !0,
            forced: !c
        },
        { getOwnPropertyNames: e_ }
    ),
    k(),
    j(Y, Z),
    (w[B] = !0);
