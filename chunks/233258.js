var e = n(220159),
    o = n(424353),
    i = n(517522),
    u = n(764908),
    s = n(253462),
    c = n(181794),
    f = n(969493),
    a = n(779688),
    p = n(185698),
    l = n(658538),
    v = n(921413),
    y = n(658971),
    h = n(431815),
    x = n(565130),
    d = n(132812),
    g = n(425184),
    b = n(61824),
    m = n(777985),
    S = n(206804),
    w = n(880887),
    O = n(378105),
    j = n(85328),
    A = n(410339),
    E = n(75411),
    T = n(342930),
    P = n(459341),
    k = n(866686),
    I = n(459079),
    F = n(270498),
    D = n(290619),
    M = n(394370),
    L = n(984749),
    R = n(882674),
    C = n(488066),
    N = n(770050),
    _ = n(89416),
    z = n(958288).forEach,
    G = I('hidden'),
    U = 'Symbol',
    B = 'prototype',
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
    tr = u([].push),
    tn = k('symbols'),
    te = k('op-symbols'),
    to = k('wks'),
    ti = !X || !X[B] || !X[B].findChild,
    tu = function (t, r, n) {
        var e = Z(V, r);
        e && delete V[r], $(t, r, n), e && t !== V && $(V, r, e);
    },
    ts =
        c &&
        a(function () {
            return (
                7 !==
                g(
                    $({}, 'a', {
                        get: function () {
                            return $(this, 'a', { value: 7 }).a;
                        }
                    })
                ).a
            );
        })
            ? tu
            : $,
    tc = function (t, r) {
        var n = (tn[t] = g(H));
        return (
            W(n, {
                type: U,
                tag: t,
                description: r
            }),
            c || (n.description = r),
            n
        );
    },
    tf = function (t, r, n) {
        t === V && tf(te, r, n), v(t);
        var e = h(r);
        return (v(n), p(tn, e)) ? (n.enumerable ? (p(t, G) && t[G][e] && (t[G][e] = !1), (n = g(n, { enumerable: d(0, !1) }))) : (p(t, G) || $(t, G, d(1, g(null))), (t[G][e] = !0)), ts(t, e, n)) : $(t, e, n);
    },
    ta = function (t, r) {
        v(t);
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
        return (!(this === V && p(tn, r)) || !!p(te, r)) && (!(n || !p(this, r) || !p(tn, r) || (p(this, G) && this[G][r])) || n);
    },
    tl = function (t, r) {
        var n = y(t),
            e = h(r);
        if (!(n === V && p(tn, e)) || p(te, e)) {
            var o = Z(n, e);
            return o && p(tn, e) && !(p(n, G) && n[G][e]) && (o.enumerable = !0), o;
        }
    },
    tv = function (t) {
        var r = Q(y(t)),
            n = [];
        return (
            z(r, function (t) {
                p(tn, t) || p(F, t) || tr(n, t);
            }),
            n
        );
    },
    ty = function (t) {
        var r = t === V,
            n = Q(r ? te : y(t)),
            e = [];
        return (
            z(n, function (t) {
                p(tn, t) && (!r || p(V, t)) && tr(e, tn[t]);
            }),
            e
        );
    };
!f &&
    (T(
        (H = (K = function () {
            if (l(H, this)) throw new q('Symbol is not a constructor');
            var t = arguments.length && void 0 !== arguments[0] ? x(arguments[0]) : void 0,
                r = D(t),
                n = function (t) {
                    var e = void 0 === this ? o : this;
                    e === V && i(n, te, t), p(e, G) && p(e[G], r) && (e[G][r] = !1);
                    var u = d(1, t);
                    try {
                        ts(e, r, u);
                    } catch (t) {
                        if (!(t instanceof Y)) throw t;
                        tu(e, r, u);
                    }
                };
            return (
                c &&
                    ti &&
                    ts(V, r, {
                        configurable: !0,
                        set: n
                    }),
                tc(r, t)
            );
        })[B]),
        'toString',
        function () {
            return J(this).tag;
        }
    ),
    T(K, 'withoutSetter', function (t) {
        return tc(D(t), t);
    }),
    (E.f = tp),
    (j.f = tf),
    (A.f = ta),
    (O.f = tl),
    (m.f = S.f = tv),
    (w.f = ty),
    (L.f = function (t) {
        return tc(M(t), t);
    }),
    c &&
        (P(H, 'description', {
            configurable: !0,
            get: function () {
                return J(this).description;
            }
        }),
        s || T(V, 'propertyIsEnumerable', tp, { unsafe: !0 }))),
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
        R(t);
    }),
    e(
        {
            target: U,
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
            getOwnPropertyDescriptor: tl
        }
    ),
    e(
        {
            target: 'Object',
            stat: !0,
            forced: !f
        },
        { getOwnPropertyNames: tv }
    ),
    C(),
    N(K, U),
    (F[G] = !0);
