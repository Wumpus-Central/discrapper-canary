n.d(t, { V: () => o });
var r = n(239189),
    i =
        (n(444675),
        function (e) {
            return (0, r.requestAnimationFrame)(e);
        }),
    o = (function () {
        return function (e) {
            void 0 === e && (e = i);
            var t = !0,
                n = !1,
                o = 0,
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
                _ = function () {
                    if (!t)
                        try {
                            m(), e(_);
                        } catch (e) {
                            console.error(e);
                        }
                },
                p = function () {
                    t && ((t = !1), 0 == o && ((o = r.now()), e(_)));
                },
                h = [];
            this.setTimeout = function (e, t) {
                var n = r.now() + t,
                    i = function () {
                        var e = h.findIndex(function (e) {
                            return e.cancel == i;
                        });
                        e >= 0 && h.splice(e, 1);
                    },
                    o = a(h, function (e) {
                        return e.time > n;
                    }),
                    s = {
                        time: n,
                        handler: e,
                        cancel: i
                    };
                return h.splice(o, 0, s), p(), s;
            };
            var m = (this.advance = function () {
                var e = r.now();
                if (
                    (c.size && (c.forEach(f), c.clear()),
                    h.length &&
                        r.batchedUpdates(function () {
                            var t = a(h, function (t) {
                                return t.time > e;
                            });
                            h.splice(0, t).forEach(function (e) {
                                return e.handler();
                            });
                        }),
                    e > o)
                ) {
                    var t = Math.min(64, e - o);
                    (o = e),
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
                l > e.priority ? c.add(e) : (f(e), p());
            }),
                (this.onFrame = function (e) {
                    u.add(e), p();
                }),
                (this.onWrite = function (e) {
                    n ? e(o) : d.add(e);
                });
        };
    })();
function a(e, t) {
    var n = e.findIndex(t);
    return n < 0 ? e.length : n;
}
