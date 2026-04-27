"use strict";
r.d(t, { c: () => o });
var n = r(672722),
    s =
        (r(72290),
        function (e) {
            return (0, n.requestAnimationFrame)(e);
        }),
    a = function (e) {
        void 0 === e && (e = s);
        var t = !0,
            r = !1,
            a = 0,
            o = [],
            u = 0,
            c = new Set(),
            l = new Set(),
            d = new Set(),
            f = function (e) {
                var t = o.indexOf(e);
                t < 0 &&
                    ((t = o.findIndex(function (t) {
                        return t.priority > e.priority;
                    })),
                    o.splice(~t ? t : o.length, 0, e));
            },
            p = function () {
                if (!t)
                    try {
                        v(), e(p);
                    } catch (e) {
                        console.error(e);
                    }
            },
            h = function () {
                t && ((t = !1), 0 == a && ((a = n.now()), e(p)));
            },
            m = [];
        this.setTimeout = function (e, t) {
            var r = n.now() + t,
                s = function () {
                    var e = m.findIndex(function (e) {
                        return e.cancel == s;
                    });
                    e >= 0 && m.splice(e, 1);
                },
                a = i(m, function (e) {
                    return e.time > r;
                }),
                o = { time: r, handler: e, cancel: s };
            return m.splice(a, 0, o), h(), o;
        };
        var v = (this.advance = function () {
            var e = n.now();
            if (
                (c.size && (c.forEach(f), c.clear()),
                m.length &&
                    n.batchedUpdates(function () {
                        var t = i(m, function (t) {
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
                    n.batchedUpdates(function () {
                        o.length &&
                            (n.willAdvance(o),
                            (o = o.filter(function (e) {
                                return (u = e.priority), e.idle || e.advance(t), !e.idle;
                            })),
                            (u = 0)),
                            l.size &&
                                (l.forEach(function (t) {
                                    return t(e);
                                }),
                                l.clear()),
                            d.size &&
                                ((r = !0),
                                d.forEach(function (t) {
                                    return t(e);
                                }),
                                d.clear(),
                                (r = !1));
                    });
            }
        });
        (this.start = function (e) {
            u > e.priority ? c.add(e) : (f(e), h());
        }),
            (this.onFrame = function (e) {
                l.add(e), h();
            }),
            (this.onWrite = function (e) {
                r ? e(a) : d.add(e);
            });
    };
class o extends a {
    constructor() {
        super(...arguments),
            (this._requestAnimationFrame = (e) => s(e)),
            (this._cancelAnimationFrame = (e) => cancelAnimationFrame(e)),
            (this.writing = !1),
            (this.id = 0),
            (this.lastTime = 0),
            (this.animations = []),
            (this.priority = 0),
            (this.startQueue = new Set()),
            (this.frameQueue = new Set()),
            (this.writeQueue = new Set()),
            (this.timeoutQueue = []),
            (this.addAnimation = (e) => {
                let t = this.animations.indexOf(e);
                t < 0 &&
                    ((t = this.animations.findIndex((t) => t.priority > e.priority)),
                    this.animations.splice(0 != ~t ? t : this.animations.length, 0, e));
            }),
            (this.loop = () => {
                if (0 !== this.lastTime)
                    try {
                        this.advance();
                    } catch (e) {
                        console.error(e);
                    } finally {
                        this.animations.length > 0 ||
                        this.startQueue.size > 0 ||
                        this.frameQueue.size > 0 ||
                        this.writeQueue.size > 0 ||
                        this.timeoutQueue.length > 0
                            ? (this.id = this._requestAnimationFrame(this.loop))
                            : ((this.lastTime = 0), (this.id = 0));
                    }
            }),
            (this.startLoop = () => {
                this.lastTime > 0 || ((this.lastTime = n.now()), (this.id = this._requestAnimationFrame(this.loop)));
            }),
            (this.advance = () => {
                let e = n.now();
                if (
                    (this.startQueue.size > 0 && (this.startQueue.forEach(this.addAnimation), this.startQueue.clear()),
                    this.timeoutQueue.length > 0 &&
                        n.batchedUpdates(() => {
                            let t = i(this.timeoutQueue, (t) => t.time > e);
                            this.timeoutQueue.splice(0, t).forEach((e) => e.handler());
                        }),
                    e > this.lastTime)
                ) {
                    let t = Math.min(64, e - this.lastTime);
                    (this.lastTime = e),
                        n.batchedUpdates(() => {
                            this.animations.length > 0 &&
                                (n.willAdvance(this.animations),
                                (this.animations = this.animations.filter(
                                    (e) => ((this.priority = e.priority), e.idle || e.advance(t), !e.idle),
                                )),
                                (this.priority = 0)),
                                this.frameQueue.size > 0 &&
                                    (this.frameQueue.forEach((t) => t(e)), this.frameQueue.clear()),
                                this.writeQueue.size > 0 &&
                                    ((this.writing = !0),
                                    this.writeQueue.forEach((t) => t(e)),
                                    this.writeQueue.clear(),
                                    (this.writing = !1));
                        });
                }
            }),
            (this.start = (e) => {
                this.priority > e.priority ? this.startQueue.add(e) : (this.addAnimation(e), this.startLoop());
            }),
            (this.setTimeout = (e, t) => {
                let r = n.now() + t,
                    s = () => {
                        let e = this.timeoutQueue.findIndex((e) => e.cancel === s);
                        e >= 0 && this.timeoutQueue.splice(e, 1);
                    },
                    a = i(this.timeoutQueue, (e) => e.time > r),
                    o = { time: r, handler: e, cancel: s };
                return this.timeoutQueue.splice(a, 0, o), this.startLoop(), o;
            }),
            (this.onFrame = (e) => {
                this.frameQueue.add(e), this.startLoop();
            }),
            (this.onWrite = (e) => {
                this.writing ? e(this.lastTime) : this.writeQueue.add(e);
            });
    }
    setRAF(e, t) {
        0 !== this.id && (this._cancelAnimationFrame(this.id), (this.id = 0)),
            (this._requestAnimationFrame = e),
            (this._cancelAnimationFrame = t),
            this.loop();
    }
}
function i(e, t) {
    var r = e.findIndex(t);
    return r < 0 ? e.length : r;
}
