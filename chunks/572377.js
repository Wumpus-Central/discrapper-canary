"use strict";
r.d(t, { c: () => a });
var n = r(672722),
    i =
        (r(72290),
        function (e) {
            return (0, n.requestAnimationFrame)(e);
        }),
    o = function (e) {
        void 0 === e && (e = i);
        var t = !0,
            r = !1,
            o = 0,
            a = [],
            l = 0,
            u = new Set(),
            c = new Set(),
            f = new Set(),
            d = function (e) {
                var t = a.indexOf(e);
                t < 0 &&
                    ((t = a.findIndex(function (t) {
                        return t.priority > e.priority;
                    })),
                    a.splice(~t ? t : a.length, 0, e));
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
                t && ((t = !1), 0 == o && ((o = n.now()), e(p)));
            },
            m = [];
        this.setTimeout = function (e, t) {
            var r = n.now() + t,
                i = function () {
                    var e = m.findIndex(function (e) {
                        return e.cancel == i;
                    });
                    e >= 0 && m.splice(e, 1);
                },
                o = s(m, function (e) {
                    return e.time > r;
                }),
                a = { time: r, handler: e, cancel: i };
            return m.splice(o, 0, a), h(), a;
        };
        var v = (this.advance = function () {
            var e = n.now();
            if (
                (u.size && (u.forEach(d), u.clear()),
                m.length &&
                    n.batchedUpdates(function () {
                        var t = s(m, function (t) {
                            return t.time > e;
                        });
                        m.splice(0, t).forEach(function (e) {
                            return e.handler();
                        });
                    }),
                e > o)
            ) {
                var t = Math.min(64, e - o);
                (o = e),
                    n.batchedUpdates(function () {
                        a.length &&
                            (n.willAdvance(a),
                            (a = a.filter(function (e) {
                                return (l = e.priority), e.idle || e.advance(t), !e.idle;
                            })),
                            (l = 0)),
                            c.size &&
                                (c.forEach(function (t) {
                                    return t(e);
                                }),
                                c.clear()),
                            f.size &&
                                ((r = !0),
                                f.forEach(function (t) {
                                    return t(e);
                                }),
                                f.clear(),
                                (r = !1));
                    });
            }
        });
        (this.start = function (e) {
            l > e.priority ? u.add(e) : (d(e), h());
        }),
            (this.onFrame = function (e) {
                c.add(e), h();
            }),
            (this.onWrite = function (e) {
                r ? e(o) : f.add(e);
            });
    };
class a extends o {
    constructor() {
        super(...arguments),
            (this._requestAnimationFrame = (e) => i(e)),
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
                            let t = s(this.timeoutQueue, (t) => t.time > e);
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
                    i = () => {
                        let e = this.timeoutQueue.findIndex((e) => e.cancel === i);
                        e >= 0 && this.timeoutQueue.splice(e, 1);
                    },
                    o = s(this.timeoutQueue, (e) => e.time > r),
                    a = { time: r, handler: e, cancel: i };
                return this.timeoutQueue.splice(o, 0, a), this.startLoop(), a;
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
function s(e, t) {
    var r = e.findIndex(t);
    return r < 0 ? e.length : r;
}
