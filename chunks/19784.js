n.d(t, { V: () => a });
var r = n(239189),
    i =
        (n(444675),
        function (e) {
            return (0, r.requestAnimationFrame)(e);
        }),
    a = (function () {
        return function (e) {
            void 0 === e && (e = i);
            var t = !0,
                n = !1,
                a = 0,
                s = [],
                l = 0,
                c = new Set(),
                u = new Set(),
                d = new Set(),
                f = function (e) {
                    var t = s.indexOf(e);
                    t < 0 &&
                        ((t = s.findIndex(function (t) {
                            return t.priority > e.priority;
                        })),
                        s.splice(~t ? t : s.length, 0, e));
                },
                p = function () {
                    if (!t)
                        try {
                            h(), e(p);
                        } catch (e) {
                            console.error(e);
                        }
                },
                _ = function () {
                    t && ((t = !1), 0 == a && ((a = r.now()), e(p)));
                },
                m = [];
            this.setTimeout = function (e, t) {
                var n = r.now() + t,
                    i = function () {
                        var e = m.findIndex(function (e) {
                            return e.cancel == i;
                        });
                        e >= 0 && m.splice(e, 1);
                    },
                    a = o(m, function (e) {
                        return e.time > n;
                    }),
                    s = {
                        time: n,
                        handler: e,
                        cancel: i,
                    };
                return m.splice(a, 0, s), _(), s;
            };
            var h = (this.advance = function () {
                var e = r.now();
                if (
                    (c.size && (c.forEach(f), c.clear()),
                    m.length &&
                        r.batchedUpdates(function () {
                            var t = o(m, function (t) {
                                return t.time > e;
                            });
                            m.splice(0, t).forEach(function (e) {
                                return e.handler();
                            });
                        }),
                    e > a)
                ) {
                    var t = Math.min(64, e - a);
                    (a = e),
                        r.batchedUpdates(function () {
                            s.length &&
                                (r.willAdvance(s),
                                (s = s.filter(function (e) {
                                    return (l = e.priority), e.idle || e.advance(t), !e.idle;
                                })),
                                (l = 0)),
                                u.size &&
                                    (u.forEach(function (t) {
                                        return t(e);
                                    }),
                                    u.clear()),
                                d.size &&
                                    ((n = !0),
                                    d.forEach(function (t) {
                                        return t(e);
                                    }),
                                    d.clear(),
                                    (n = !1));
                        });
                }
            });
            (this.start = function (e) {
                l > e.priority ? c.add(e) : (f(e), _());
            }),
                (this.onFrame = function (e) {
                    u.add(e), _();
                }),
                (this.onWrite = function (e) {
                    n ? e(a) : d.add(e);
                });
        };
    })();
function o(e, t) {
    var n = e.findIndex(t);
    return n < 0 ? e.length : n;
}
