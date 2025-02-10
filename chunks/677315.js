var i,
    r,
    a,
    s,
    o = n(67867),
    l = n(414629),
    u = n(42433),
    c = n(668530),
    d = n(570596),
    f = n(691244),
    _ = n(600385),
    p = n(414847),
    h = n(187592),
    m = n(548828),
    g = n(735471),
    E = n(982665),
    v = n(13780),
    y = n(992416),
    I = n(62691).set,
    T = n(584831),
    b = n(502856),
    S = n(139545),
    A = n(6938),
    N = n(29461),
    C = n(197859),
    R = n(732116),
    O = n(653457),
    D = 'Promise',
    L = R.CONSTRUCTOR,
    x = R.REJECTION_EVENT,
    P = R.SUBCLASSING,
    w = N.getterFor(D),
    M = N.set,
    k = C && C.prototype,
    U = C,
    G = k,
    B = c.TypeError,
    Z = c.document,
    F = c.process,
    V = O.f,
    j = V,
    H = !!(Z && Z.createEvent && c.dispatchEvent),
    Y = 'unhandledrejection',
    W = 'rejectionhandled',
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
            i,
            r,
            a = t.value,
            s = t.state === z,
            o = s ? e.ok : e.fail,
            l = e.resolve,
            u = e.reject,
            c = e.domain;
        try {
            o ? (s || (t.rejection === X && er(t), (t.rejection = Q)), !0 === o ? (n = a) : (c && c.enter(), (n = o(a)), c && (c.exit(), (r = !0))), n === e.promise ? u(new B('Promise-chain cycle')) : (i = J(n)) ? d(i, n, l, u) : l(n)) : u(a);
        } catch (e) {
            c && !r && c.exit(), u(e);
        }
    },
    ee = function (e, t) {
        e.notified ||
            ((e.notified = !0),
            T(function () {
                for (var n, i = e.reactions; (n = i.get()); ) $(n, e);
                (e.notified = !1), t && !e.rejection && en(e);
            }));
    },
    et = function (e, t, n) {
        var i, r;
        H
            ? (((i = Z.createEvent('Event')).promise = t), (i.reason = n), i.initEvent(e, !1, !0), c.dispatchEvent(i))
            : (i = {
                  promise: t,
                  reason: n
              }),
            !x && (r = c['on' + e]) ? r(i) : e === Y && b('Unhandled promise rejection', n);
    },
    en = function (e) {
        d(I, c, function () {
            var t,
                n = e.facade,
                i = e.value;
            if (
                ei(e) &&
                ((t = S(function () {
                    u ? F.emit('unhandledRejection', i, n) : et(Y, n, i);
                })),
                (e.rejection = u || ei(e) ? X : Q),
                t.error)
            )
                throw t.value;
        });
    },
    ei = function (e) {
        return e.rejection !== Q && !e.parent;
    },
    er = function (e) {
        d(I, c, function () {
            var t = e.facade;
            u ? F.emit('rejectionHandled', t) : et(W, t, e.value);
        });
    },
    ea = function (e, t, n) {
        return function (i) {
            e(t, i, n);
        };
    },
    es = function (e, t, n) {
        e.done || ((e.done = !0), n && (e = n), (e.value = t), (e.state = q), ee(e, !0));
    },
    eo = function (e, t, n) {
        if (!e.done) {
            (e.done = !0), n && (e = n);
            try {
                if (e.facade === t) throw new B("Promise can't be resolved itself");
                var i = J(t);
                i
                    ? T(function () {
                          var n = { done: !1 };
                          try {
                              d(i, t, ea(eo, n, e), ea(es, n, e));
                          } catch (t) {
                              es(n, t, e);
                          }
                      })
                    : ((e.value = t), (e.state = z), ee(e, !1));
            } catch (t) {
                es({ done: !1 }, t, e);
            }
        }
    };
if (
    L &&
    ((G = (U = function (e) {
        v(this, G), m(e), d(i, this);
        var t = w(this);
        try {
            e(ea(eo, t), ea(es, t));
        } catch (e) {
            es(t, e);
        }
    }).prototype),
    ((i = function (e) {
        M(this, {
            type: D,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new A(),
            rejection: !1,
            state: K,
            value: void 0
        });
    }).prototype = f(G, 'then', function (e, t) {
        var n = w(this),
            i = V(y(this, U));
        return (
            (n.parent = !0),
            (i.ok = !g(e) || e),
            (i.fail = g(t) && t),
            (i.domain = u ? F.domain : void 0),
            n.state === K
                ? n.reactions.add(i)
                : T(function () {
                      $(i, n);
                  }),
            i.promise
        );
    })),
    (r = function () {
        var e = new i(),
            t = w(e);
        (this.promise = e), (this.resolve = ea(eo, t)), (this.reject = ea(es, t));
    }),
    (O.f = V =
        function (e) {
            return e === U || e === a ? new r(e) : j(e);
        }),
    !l && g(C) && k !== Object.prototype)
) {
    (s = k.then),
        P ||
            f(
                k,
                'then',
                function (e, t) {
                    var n = this;
                    return new U(function (e, t) {
                        d(s, n, e, t);
                    }).then(e, t);
                },
                { unsafe: !0 }
            );
    try {
        delete k.constructor;
    } catch (e) {}
    _ && _(k, G);
}
o(
    {
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: L
    },
    { Promise: U }
),
    p(U, D, !1, !0),
    h(D);
