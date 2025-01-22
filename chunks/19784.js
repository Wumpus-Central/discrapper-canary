r.d(n, {
    V: function () {
        return o;
    }
});
var i = r(239189);
r(444675);
var a = function (e) {
        return (0, i.requestAnimationFrame)(e);
    },
    o = (function () {
        return function e(e) {
            void 0 === e && (e = a);
            var n = !0,
                r = !1,
                o = 0,
                l = [],
                u = 0,
                c = new Set(),
                d = new Set(),
                f = new Set(),
                p = function (e) {
                    var n = l.indexOf(e);
                    n < 0 &&
                        ((n = l.findIndex(function (n) {
                            return n.priority > e.priority;
                        })),
                        l.splice(~n ? n : l.length, 0, e));
                },
                h = function () {
                    if (!n)
                        try {
                            g(), e(h);
                        } catch (e) {
                            console.error(e);
                        }
                },
                _ = function () {
                    n && ((n = !1), 0 == o && ((o = i.now()), e(h)));
                },
                m = [];
            this.setTimeout = function (e, n) {
                var r = i.now() + n,
                    a = function () {
                        var e = m.findIndex(function (e) {
                            return e.cancel == a;
                        });
                        e >= 0 && m.splice(e, 1);
                    },
                    o = s(m, function (e) {
                        return e.time > r;
                    }),
                    l = {
                        time: r,
                        handler: e,
                        cancel: a
                    };
                return m.splice(o, 0, l), _(), l;
            };
            var g = (this.advance = function () {
                var e = i.now();
                if (
                    (c.size && (c.forEach(p), c.clear()),
                    m.length &&
                        i.batchedUpdates(function () {
                            var n = s(m, function (n) {
                                return n.time > e;
                            });
                            m.splice(0, n).forEach(function (e) {
                                return e.handler();
                            });
                        }),
                    e > o)
                ) {
                    var n = Math.min(64, e - o);
                    (o = e),
                        i.batchedUpdates(function () {
                            l.length &&
                                (i.willAdvance(l),
                                (l = l.filter(function (e) {
                                    return (u = e.priority), !e.idle && e.advance(n), !e.idle;
                                })),
                                (u = 0)),
                                d.size &&
                                    (d.forEach(function (n) {
                                        return n(e);
                                    }),
                                    d.clear()),
                                f.size &&
                                    ((r = !0),
                                    f.forEach(function (n) {
                                        return n(e);
                                    }),
                                    f.clear(),
                                    (r = !1));
                        });
                }
            });
            (this.start = function (e) {
                u > e.priority ? c.add(e) : (p(e), _());
            }),
                (this.onFrame = function (e) {
                    d.add(e), _();
                }),
                (this.onWrite = function (e) {
                    r ? e(o) : f.add(e);
                });
        };
    })();
function s(e, n) {
    var r = e.findIndex(n);
    return r < 0 ? e.length : r;
}
