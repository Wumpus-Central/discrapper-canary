var i = r(67867),
    a = r(668530),
    o = r(570596),
    s = r(96403),
    l = r(414629),
    u = r(447631),
    c = r(828596),
    d = r(821819),
    f = r(141603),
    p = r(875604),
    h = r(28886),
    _ = r(729605),
    m = r(591794),
    g = r(342545),
    E = r(241777),
    v = r(224106),
    y = r(302231),
    b = r(937443),
    I = r(777628),
    T = r(502640),
    S = r(65007),
    A = r(349446),
    C = r(930134),
    N = r(790248),
    R = r(691244),
    O = r(942282),
    D = r(293303),
    x = r(964653),
    L = r(511364),
    w = r(348343),
    P = r(360518),
    M = r(862602),
    k = r(187203),
    U = r(29657),
    B = r(414847),
    G = r(29461),
    Z = r(804104).forEach,
    F = x('hidden'),
    V = 'Symbol',
    j = 'prototype',
    H = G.set,
    Y = G.getterFor(V),
    W = Object[j],
    K = a.Symbol,
    z = K && K[j],
    q = a.RangeError,
    Q = a.TypeError,
    X = a.QObject,
    J = S.f,
    $ = A.f,
    ee = I.f,
    et = N.f,
    en = s([].push),
    er = D('symbols'),
    ei = D('op-symbols'),
    ea = D('wks'),
    eo = !X || !X[j] || !X[j].findChild,
    es = function (e, n, r) {
        var i = J(W, n);
        i && delete W[n], $(e, n, r), i && e !== W && $(W, n, i);
    },
    el =
        u &&
        d(function () {
            return (
                7 !==
                v(
                    $({}, 'a', {
                        get: function () {
                            return $(this, 'a', { value: 7 }).a;
                        }
                    })
                ).a
            );
        })
            ? es
            : $,
    eu = function (e, n) {
        var r = (er[e] = v(z));
        return (
            H(r, {
                type: V,
                tag: e,
                description: n
            }),
            !u && (r.description = n),
            r
        );
    },
    ec = function (e, n, r) {
        e === W && ec(ei, n, r), h(e);
        var i = m(n);
        return (h(r), f(er, i)) ? (r.enumerable ? (f(e, F) && e[F][i] && (e[F][i] = !1), (r = v(r, { enumerable: E(0, !1) }))) : (!f(e, F) && $(e, F, E(1, {})), (e[F][i] = !0)), el(e, i, r)) : $(e, i, r);
    },
    ed = function (e, n) {
        h(e);
        var r = _(n);
        return (
            Z(y(r).concat(em(r)), function (n) {
                (!u || o(ep, r, n)) && ec(e, n, r[n]);
            }),
            e
        );
    },
    ef = function (e, n) {
        return void 0 === n ? v(e) : ed(v(e), n);
    },
    ep = function (e) {
        var n = m(e),
            r = o(et, this, n);
        return (!(this === W && f(er, n)) || !!f(ei, n)) && (!(r || !f(this, n) || !f(er, n) || (f(this, F) && this[F][n])) || r);
    },
    eh = function (e, n) {
        var r = _(e),
            i = m(n);
        if (!(r === W && f(er, i)) || f(ei, i)) {
            var a = J(r, i);
            return a && f(er, i) && !(f(r, F) && r[F][i]) && (a.enumerable = !0), a;
        }
    },
    e_ = function (e) {
        var n = ee(_(e)),
            r = [];
        return (
            Z(n, function (e) {
                !f(er, e) && !f(L, e) && en(r, e);
            }),
            r
        );
    },
    em = function (e) {
        var n = e === W,
            r = ee(n ? ei : _(e)),
            i = [];
        return (
            Z(r, function (e) {
                f(er, e) && (!n || f(W, e)) && en(i, er[e]);
            }),
            i
        );
    };
!c &&
    (R(
        (z = (K = function () {
            if (p(z, this)) throw new Q('Symbol is not a constructor');
            var e = arguments.length && void 0 !== arguments[0] ? g(arguments[0]) : void 0,
                n = w(e),
                r = function (e) {
                    var i = void 0 === this ? a : this;
                    i === W && o(r, ei, e), f(i, F) && f(i[F], n) && (i[F][n] = !1);
                    var s = E(1, e);
                    try {
                        el(i, n, s);
                    } catch (e) {
                        if (!(e instanceof q)) throw e;
                        es(i, n, s);
                    }
                };
            return (
                u &&
                    eo &&
                    el(W, n, {
                        configurable: !0,
                        set: r
                    }),
                eu(n, e)
            );
        })[j]),
        'toString',
        function () {
            return Y(this).tag;
        }
    ),
    R(K, 'withoutSetter', function (e) {
        return eu(w(e), e);
    }),
    (N.f = ep),
    (A.f = ec),
    (C.f = ed),
    (S.f = eh),
    (b.f = I.f = e_),
    (T.f = em),
    (M.f = function (e) {
        return eu(P(e), e);
    }),
    u &&
        (O(z, 'description', {
            configurable: !0,
            get: function () {
                return Y(this).description;
            }
        }),
        !l && R(W, 'propertyIsEnumerable', ep, { unsafe: !0 }))),
    i(
        {
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: !c,
            sham: !c
        },
        { Symbol: K }
    ),
    Z(y(ea), function (e) {
        k(e);
    }),
    i(
        {
            target: V,
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
    i(
        {
            target: 'Object',
            stat: !0,
            forced: !c,
            sham: !u
        },
        {
            create: ef,
            defineProperty: ec,
            defineProperties: ed,
            getOwnPropertyDescriptor: eh
        }
    ),
    i(
        {
            target: 'Object',
            stat: !0,
            forced: !c
        },
        { getOwnPropertyNames: e_ }
    ),
    U(),
    B(K, V),
    (L[F] = !0);
