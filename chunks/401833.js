var r,
    o,
    a,
    i,
    s = n(220159),
    c = n(253462),
    l = n(270301),
    u = n(424353),
    d = n(517522),
    p = n(342930),
    h = n(578079),
    f = n(770050),
    m = n(999405),
    y = n(691593),
    v = n(971428),
    g = n(829575),
    b = n(588383),
    _ = n(444529),
    k = n(430805).set,
    C = n(672606),
    Z = n(951598),
    w = n(134546),
    S = n(61189),
    N = n(89416),
    x = n(57100),
    P = n(296004),
    A = n(602168),
    R = 'Promise',
    F = P.CONSTRUCTOR,
    O = P.REJECTION_EVENT,
    E = P.SUBCLASSING,
    I = N.getterFor(R),
    M = N.set,
    B = x && x.prototype,
    T = x,
    D = B,
    L = u.TypeError,
    V = u.document,
    j = u.process,
    U = A.f,
    q = U,
    H = !!(V && V.createEvent && u.dispatchEvent),
    K = 'unhandledrejection',
    z = function (e) {
        var t;
        return !!(g(e) && v((t = e.then))) && t;
    },
    W = function (e, t) {
        var n,
            r,
            o,
            a = t.value,
            i = 1 === t.state,
            s = i ? e.ok : e.fail,
            c = e.resolve,
            l = e.reject,
            u = e.domain;
        try {
            s ? (i || (2 === t.rejection && J(t), (t.rejection = 1)), !0 === s ? (n = a) : (u && u.enter(), (n = s(a)), u && (u.exit(), (o = !0))), n === e.promise ? l(new L('Promise-chain cycle')) : (r = z(n)) ? d(r, n, c, l) : c(n)) : l(a);
        } catch (e) {
            u && !o && u.exit(), l(e);
        }
    },
    Y = function (e, t) {
        e.notified ||
            ((e.notified = !0),
            C(function () {
                for (var n, r = e.reactions; (n = r.get()); ) W(n, e);
                (e.notified = !1), t && !e.rejection && $(e);
            }));
    },
    G = function (e, t, n) {
        var r, o;
        H
            ? (((r = V.createEvent('Event')).promise = t), (r.reason = n), r.initEvent(e, !1, !0), u.dispatchEvent(r))
            : (r = {
                  promise: t,
                  reason: n
              }),
            !O && (o = u['on' + e]) ? o(r) : e === K && Z('Unhandled promise rejection', n);
    },
    $ = function (e) {
        d(k, u, function () {
            var t,
                n = e.facade,
                r = e.value;
            if (
                Q(e) &&
                ((t = w(function () {
                    l ? j.emit('unhandledRejection', r, n) : G(K, n, r);
                })),
                (e.rejection = l || Q(e) ? 2 : 1),
                t.error)
            )
                throw t.value;
        });
    },
    Q = function (e) {
        return 1 !== e.rejection && !e.parent;
    },
    J = function (e) {
        d(k, u, function () {
            var t = e.facade;
            l ? j.emit('rejectionHandled', t) : G('rejectionhandled', t, e.value);
        });
    },
    X = function (e, t, n) {
        return function (r) {
            e(t, r, n);
        };
    },
    ee = function (e, t, n) {
        e.done || ((e.done = !0), n && (e = n), (e.value = t), (e.state = 2), Y(e, !0));
    },
    et = function (e, t, n) {
        if (!e.done) {
            (e.done = !0), n && (e = n);
            try {
                if (e.facade === t) throw new L("Promise can't be resolved itself");
                var r = z(t);
                r
                    ? C(function () {
                          var n = { done: !1 };
                          try {
                              d(r, t, X(et, n, e), X(ee, n, e));
                          } catch (t) {
                              ee(n, t, e);
                          }
                      })
                    : ((e.value = t), (e.state = 1), Y(e, !1));
            } catch (t) {
                ee({ done: !1 }, t, e);
            }
        }
    };
if (
    F &&
    ((D = (T = function (e) {
        b(this, D), y(e), d(r, this);
        var t = I(this);
        try {
            e(X(et, t), X(ee, t));
        } catch (e) {
            ee(t, e);
        }
    }).prototype),
    ((r = function (e) {
        M(this, {
            type: R,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new S(),
            rejection: !1,
            state: 0,
            value: null
        });
    }).prototype = p(D, 'then', function (e, t) {
        var n = I(this),
            r = U(_(this, T));
        return (
            (n.parent = !0),
            (r.ok = !v(e) || e),
            (r.fail = v(t) && t),
            (r.domain = l ? j.domain : void 0),
            0 === n.state
                ? n.reactions.add(r)
                : C(function () {
                      W(r, n);
                  }),
            r.promise
        );
    })),
    (o = function () {
        var e = new r(),
            t = I(e);
        (this.promise = e), (this.resolve = X(et, t)), (this.reject = X(ee, t));
    }),
    (A.f = U =
        function (e) {
            return e === T || e === a ? new o(e) : q(e);
        }),
    !c && v(x) && B !== Object.prototype)
) {
    (i = B.then),
        E ||
            p(
                B,
                'then',
                function (e, t) {
                    var n = this;
                    return new T(function (e, t) {
                        d(i, n, e, t);
                    }).then(e, t);
                },
                { unsafe: !0 }
            );
    try {
        delete B.constructor;
    } catch (e) {}
    h && h(B, D);
}
s(
    {
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: F
    },
    { Promise: T }
),
    f(T, R, !1, !0),
    m(R);
