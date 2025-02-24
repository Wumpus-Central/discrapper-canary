var r,
    o,
    a,
    i,
    s = n(766362),
    c = n(414629),
    l = n(42433),
    u = n(668530),
    d = n(570596),
    p = n(691244),
    h = n(600385),
    f = n(414847),
    m = n(187592),
    y = n(548828),
    v = n(735471),
    g = n(982665),
    b = n(13780),
    _ = n(992416),
    k = n(62691).set,
    C = n(584831),
    Z = n(502856),
    w = n(139545),
    S = n(6938),
    N = n(29461),
    x = n(197859),
    P = n(732116),
    A = n(653457),
    R = 'Promise',
    F = P.CONSTRUCTOR,
    O = P.REJECTION_EVENT,
    E = P.SUBCLASSING,
    I = N.getterFor(R),
    M = N.set,
    T = x && x.prototype,
    B = x,
    D = T,
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
    ((D = (B = function (e) {
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
            value: void 0
        });
    }).prototype = p(D, 'then', function (e, t) {
        var n = I(this),
            r = U(_(this, B));
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
            return e === B || e === a ? new o(e) : q(e);
        }),
    !c && v(x) && T !== Object.prototype)
) {
    (i = T.then),
        E ||
            p(
                T,
                'then',
                function (e, t) {
                    var n = this;
                    return new B(function (e, t) {
                        d(i, n, e, t);
                    }).then(e, t);
                },
                { unsafe: !0 }
            );
    try {
        delete T.constructor;
    } catch (e) {}
    h && h(T, D);
}
s(
    {
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: F
    },
    { Promise: B }
),
    f(B, R, !1, !0),
    m(R);
