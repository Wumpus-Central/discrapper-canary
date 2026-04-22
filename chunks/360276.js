"use strict";
n.d(t, { c: () => s });
var r = n(476575),
    i =
        (n(72290),
        function (e) {
            return (0, r.requestAnimationFrame)(e);
        }),
    s = function (e) {
        void 0 === e && (e = i);
        var t = !0,
            n = !1,
            s = 0,
            o = [],
            l = 0,
            u = new Set(),
            d = new Set(),
            c = new Set(),
            _ = function (e) {
                var t = o.indexOf(e);
                t < 0 &&
                    ((t = o.findIndex(function (t) {
                        return t.priority > e.priority;
                    })),
                    o.splice(~t ? t : o.length, 0, e));
            },
            f = function () {
                if (!t)
                    try {
                        p(), e(f);
                    } catch (e) {
                        console.error(e);
                    }
            },
            E = function () {
                t && ((t = !1), 0 == s && ((s = r.now()), e(f)));
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
                s = a(h, function (e) {
                    return e.time > n;
                }),
                o = { time: n, handler: e, cancel: i };
            return h.splice(s, 0, o), E(), o;
        };
        var p = (this.advance = function () {
            var e = r.now();
            if (
                (u.size && (u.forEach(_), u.clear()),
                h.length &&
                    r.batchedUpdates(function () {
                        var t = a(h, function (t) {
                            return t.time > e;
                        });
                        h.splice(0, t).forEach(function (e) {
                            return e.handler();
                        });
                    }),
                e > s)
            ) {
                var t = Math.min(64, e - s);
                (s = e),
                    r.batchedUpdates(function () {
                        o.length &&
                            (r.willAdvance(o),
                            (o = o.filter(function (e) {
                                return (l = e.priority), e.idle || e.advance(t), !e.idle;
                            })),
                            (l = 0)),
                            d.size &&
                                (d.forEach(function (t) {
                                    return t(e);
                                }),
                                d.clear()),
                            c.size &&
                                ((n = !0),
                                c.forEach(function (t) {
                                    return t(e);
                                }),
                                c.clear(),
                                (n = !1));
                    });
            }
        });
        (this.start = function (e) {
            l > e.priority ? u.add(e) : (_(e), E());
        }),
            (this.onFrame = function (e) {
                d.add(e), E();
            }),
            (this.onWrite = function (e) {
                n ? e(s) : c.add(e);
            });
    };
function a(e, t) {
    var n = e.findIndex(t);
    return n < 0 ? e.length : n;
}
