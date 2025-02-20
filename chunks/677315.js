var r,
    i,
    o,
    a,
    s = n(67867),
    l = n(414629),
    c = n(42433),
    u = n(668530),
    d = n(570596),
    f = n(691244),
    p = n(600385),
    _ = n(414847),
    h = n(187592),
    m = n(548828),
    g = n(735471),
    E = n(982665),
    v = n(13780),
    b = n(992416),
    y = n(62691).set,
    O = n(584831),
    S = n(502856),
    I = n(139545),
    T = n(6938),
    N = n(29461),
    A = n(197859),
    C = n(732116),
    R = n(653457),
    P = 'Promise',
    w = C.CONSTRUCTOR,
    D = C.REJECTION_EVENT,
    x = C.SUBCLASSING,
    L = N.getterFor(P),
    M = N.set,
    k = A && A.prototype,
    j = A,
    U = k,
    G = u.TypeError,
    B = u.document,
    Z = u.process,
    F = R.f,
    V = F,
    H = !!(B && B.createEvent && u.dispatchEvent),
    W = 'unhandledrejection',
    Y = 'rejectionhandled',
    K = 0,
    z = 1,
    q = 2,
    Q = 1,
    X = 2,
    J = function (e) {
        var t;
        return !!(E(e) && g((t = e.then))) && t;
    },
    $ = function (e, t) {
        var n,
            r,
            i,
            o = t.value,
            a = t.state === z,
            s = a ? e.ok : e.fail,
            l = e.resolve,
            c = e.reject,
            u = e.domain;
        try {
            s ? (a || (t.rejection === X && ei(t), (t.rejection = Q)), !0 === s ? (n = o) : (u && u.enter(), (n = s(o)), u && (u.exit(), (i = !0))), n === e.promise ? c(new G('Promise-chain cycle')) : (r = J(n)) ? d(r, n, l, c) : l(n)) : c(o);
        } catch (e) {
            u && !i && u.exit(), c(e);
        }
    },
    ee = function (e, t) {
        e.notified ||
            ((e.notified = !0),
            O(function () {
                for (var n, r = e.reactions; (n = r.get()); ) $(n, e);
                (e.notified = !1), t && !e.rejection && en(e);
            }));
    },
    et = function (e, t, n) {
        var r, i;
        H
            ? (((r = B.createEvent('Event')).promise = t), (r.reason = n), r.initEvent(e, !1, !0), u.dispatchEvent(r))
            : (r = {
                  promise: t,
                  reason: n
              }),
            !D && (i = u['on' + e]) ? i(r) : e === W && S('Unhandled promise rejection', n);
    },
    en = function (e) {
        d(y, u, function () {
            var t,
                n = e.facade,
                r = e.value;
            if (
                er(e) &&
                ((t = I(function () {
                    c ? Z.emit('unhandledRejection', r, n) : et(W, n, r);
                })),
                (e.rejection = c || er(e) ? X : Q),
                t.error)
            )
                throw t.value;
        });
    },
    er = function (e) {
        return e.rejection !== Q && !e.parent;
    },
    ei = function (e) {
        d(y, u, function () {
            var t = e.facade;
            c ? Z.emit('rejectionHandled', t) : et(Y, t, e.value);
        });
    },
    eo = function (e, t, n) {
        return function (r) {
            e(t, r, n);
        };
    },
    ea = function (e, t, n) {
        e.done || ((e.done = !0), n && (e = n), (e.value = t), (e.state = q), ee(e, !0));
    },
    es = function (e, t, n) {
        if (!e.done) {
            (e.done = !0), n && (e = n);
            try {
                if (e.facade === t) throw new G("Promise can't be resolved itself");
                var r = J(t);
                r
                    ? O(function () {
                          var n = { done: !1 };
                          try {
                              d(r, t, eo(es, n, e), eo(ea, n, e));
                          } catch (t) {
                              ea(n, t, e);
                          }
                      })
                    : ((e.value = t), (e.state = z), ee(e, !1));
            } catch (t) {
                ea({ done: !1 }, t, e);
            }
        }
    };
if (
    w &&
    ((U = (j = function (e) {
        v(this, U), m(e), d(r, this);
        var t = L(this);
        try {
            e(eo(es, t), eo(ea, t));
        } catch (e) {
            ea(t, e);
        }
    }).prototype),
    ((r = function (e) {
        M(this, {
            type: P,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new T(),
            rejection: !1,
            state: K,
            value: void 0
        });
    }).prototype = f(U, 'then', function (e, t) {
        var n = L(this),
            r = F(b(this, j));
        return (
            (n.parent = !0),
            (r.ok = !g(e) || e),
            (r.fail = g(t) && t),
            (r.domain = c ? Z.domain : void 0),
            n.state === K
                ? n.reactions.add(r)
                : O(function () {
                      $(r, n);
                  }),
            r.promise
        );
    })),
    (i = function () {
        var e = new r(),
            t = L(e);
        (this.promise = e), (this.resolve = eo(es, t)), (this.reject = eo(ea, t));
    }),
    (R.f = F =
        function (e) {
            return e === j || e === o ? new i(e) : V(e);
        }),
    !l && g(A) && k !== Object.prototype)
) {
    (a = k.then),
        x ||
            f(
                k,
                'then',
                function (e, t) {
                    var n = this;
                    return new j(function (e, t) {
                        d(a, n, e, t);
                    }).then(e, t);
                },
                { unsafe: !0 }
            );
    try {
        delete k.constructor;
    } catch (e) {}
    p && p(k, U);
}
s(
    {
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: w
    },
    { Promise: j }
),
    _(j, P, !1, !0),
    h(P);
