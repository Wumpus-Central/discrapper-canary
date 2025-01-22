var i,
    a,
    o,
    s,
    l = r(67867),
    u = r(414629),
    c = r(42433),
    d = r(668530),
    f = r(570596),
    p = r(691244),
    h = r(600385),
    _ = r(414847),
    m = r(187592),
    g = r(548828),
    E = r(735471),
    v = r(982665),
    y = r(13780),
    b = r(992416),
    I = r(62691).set,
    T = r(584831),
    S = r(502856),
    A = r(139545),
    C = r(6938),
    N = r(29461),
    R = r(197859),
    O = r(732116),
    D = r(653457),
    L = 'Promise',
    x = O.CONSTRUCTOR,
    w = O.REJECTION_EVENT,
    P = O.SUBCLASSING,
    M = N.getterFor(L),
    k = N.set,
    U = R && R.prototype,
    B = R,
    G = U,
    Z = d.TypeError,
    F = d.document,
    V = d.process,
    j = D.f,
    H = j,
    Y = !!(F && F.createEvent && d.dispatchEvent),
    W = 'unhandledrejection',
    K = 'rejectionhandled',
    z = 0,
    q = 1,
    Q = 2,
    X = 1,
    J = 2,
    $ = function (e) {
        var n;
        return !!(v(e) && E((n = e.then))) && n;
    },
    ee = function (e, n) {
        var r,
            i,
            a,
            o = n.value,
            s = n.state === q,
            l = s ? e.ok : e.fail,
            u = e.resolve,
            c = e.reject,
            d = e.domain;
        try {
            l ? (!s && (n.rejection === J && ea(n), (n.rejection = X)), !0 === l ? (r = o) : (d && d.enter(), (r = l(o)), d && (d.exit(), (a = !0))), r === e.promise ? c(new Z('Promise-chain cycle')) : (i = $(r)) ? f(i, r, u, c) : u(r)) : c(o);
        } catch (e) {
            d && !a && d.exit(), c(e);
        }
    },
    et = function (e, n) {
        !e.notified &&
            ((e.notified = !0),
            T(function () {
                for (var r, i = e.reactions; (r = i.get()); ) ee(r, e);
                (e.notified = !1), n && !e.rejection && er(e);
            }));
    },
    en = function (e, n, r) {
        var i, a;
        Y
            ? (((i = F.createEvent('Event')).promise = n), (i.reason = r), i.initEvent(e, !1, !0), d.dispatchEvent(i))
            : (i = {
                  promise: n,
                  reason: r
              }),
            !w && (a = d['on' + e]) ? a(i) : e === W && S('Unhandled promise rejection', r);
    },
    er = function (e) {
        f(I, d, function () {
            var n,
                r = e.facade,
                i = e.value;
            if (
                ei(e) &&
                ((n = A(function () {
                    c ? V.emit('unhandledRejection', i, r) : en(W, r, i);
                })),
                (e.rejection = c || ei(e) ? J : X),
                n.error)
            )
                throw n.value;
        });
    },
    ei = function (e) {
        return e.rejection !== X && !e.parent;
    },
    ea = function (e) {
        f(I, d, function () {
            var n = e.facade;
            c ? V.emit('rejectionHandled', n) : en(K, n, e.value);
        });
    },
    eo = function (e, n, r) {
        return function (i) {
            e(n, i, r);
        };
    },
    es = function (e, n, r) {
        !e.done && ((e.done = !0), r && (e = r), (e.value = n), (e.state = Q), et(e, !0));
    },
    el = function (e, n, r) {
        if (!e.done) {
            (e.done = !0), r && (e = r);
            try {
                if (e.facade === n) throw new Z("Promise can't be resolved itself");
                var i = $(n);
                i
                    ? T(function () {
                          var r = { done: !1 };
                          try {
                              f(i, n, eo(el, r, e), eo(es, r, e));
                          } catch (n) {
                              es(r, n, e);
                          }
                      })
                    : ((e.value = n), (e.state = q), et(e, !1));
            } catch (n) {
                es({ done: !1 }, n, e);
            }
        }
    };
if (
    x &&
    ((G = (B = function (e) {
        y(this, G), g(e), f(i, this);
        var n = M(this);
        try {
            e(eo(el, n), eo(es, n));
        } catch (e) {
            es(n, e);
        }
    }).prototype),
    ((i = function (e) {
        k(this, {
            type: L,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new C(),
            rejection: !1,
            state: z,
            value: void 0
        });
    }).prototype = p(G, 'then', function (e, n) {
        var r = M(this),
            i = j(b(this, B));
        return (
            (r.parent = !0),
            (i.ok = !E(e) || e),
            (i.fail = E(n) && n),
            (i.domain = c ? V.domain : void 0),
            r.state === z
                ? r.reactions.add(i)
                : T(function () {
                      ee(i, r);
                  }),
            i.promise
        );
    })),
    (a = function () {
        var e = new i(),
            n = M(e);
        (this.promise = e), (this.resolve = eo(el, n)), (this.reject = eo(es, n));
    }),
    (D.f = j =
        function (e) {
            return e === B || e === o ? new a(e) : H(e);
        }),
    !u && E(R) && U !== Object.prototype)
) {
    (s = U.then),
        !P &&
            p(
                U,
                'then',
                function (e, n) {
                    var r = this;
                    return new B(function (e, n) {
                        f(s, r, e, n);
                    }).then(e, n);
                },
                { unsafe: !0 }
            );
    try {
        delete U.constructor;
    } catch (e) {}
    h && h(U, G);
}
l(
    {
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: x
    },
    { Promise: B }
),
    _(B, L, !1, !0),
    m(L);
