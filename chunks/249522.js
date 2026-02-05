"use strict";
n.d(t, { A: () => i }), n(321073);
let r = 1 / 240;
class i {
    tension;
    friction;
    threshold;
    mass;
    maxVelocity;
    clamp;
    callback;
    accumulator = 0;
    from = 0;
    target = 0;
    vel = 0;
    animating = !1;
    last = null;
    nextTick = -1;
    getNodeWindow;
    nodeWindow = null;
    callbacks = [];
    constructor({
        callback: e,
        tension: t = 160,
        friction: n = 22,
        mass: r = 1,
        threshold: i = 0.001,
        clamp: a = !1,
        maxVelocity: s = 1 / 0,
        getNodeWindow: o = () => window,
    }) {
        (this.callback = e),
            (this.from = 0),
            (this.tension = t),
            (this.friction = n),
            (this.mass = r),
            (this.maxVelocity = s),
            (this.threshold = i),
            (this.clamp = a),
            (this.getNodeWindow = o);
    }
    to(e) {
        let { to: t, from: n, animate: r = !1, callback: i } = e;
        return ((this.target = t), null != i && this.callbacks.push(i), null != n && (this.from = n), r)
            ? (this.animating || this.start(), this)
            : void this.stop(t);
    }
    mergeTo = (e) => {
        let { to: t, callback: n } = e;
        this.animating || (null != n && this.callbacks.push(n), this.stop(t));
        let r = t - this.from;
        (this.from = t), (this.target = this.target + r), this.callback(this.from, this.abort), null != n && n();
    };
    cancel() {
        return this.stop(this.from), this;
    }
    abort = () => {
        this.animating = !1;
    };
    start() {
        (this.animating = !0),
            (this.vel = 0),
            (this.last = null),
            (this.nodeWindow = this.getNodeWindow()),
            (this.nextTick = this.nodeWindow?.requestAnimationFrame(this.update) ?? -1);
    }
    getUpdates(e, t) {
        let n = (-this.tension * (t - this.target) + -this.friction * e) / this.mass;
        return (
            Math.abs((e += n * r)) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : -1)),
            { from: (t += e * r), vel: e, accel: n }
        );
    }
    update = (e) => {
        if (null == this.last) {
            (this.last = e), (this.nextTick = this.nodeWindow?.requestAnimationFrame(this.update) ?? -1);
            return;
        }
        let t = e;
        for (this.accumulator = Math.min((t - this.last) / 1e3 + this.accumulator, 2); this.accumulator > r; ) {
            this.accumulator -= r;
            let { vel: e, from: t, accel: n } = this.getUpdates(this.vel, this.from);
            if (
                ((this.vel = e),
                (this.clamp &&
                    (t === this.target ||
                        (t < this.target && this.from > this.target) ||
                        (t > this.target && this.from < this.target))) ||
                    Math.abs(n * r) < this.threshold)
            )
                return void this.stop(this.target);
            this.from = t;
        }
        let { from: n } = this;
        if (this.accumulator > 0) {
            let { from: e } = this.getUpdates(this.vel, n),
                t = (e - n) * (this.accumulator / r);
            n += t;
        }
        this.callback(n, this.abort),
            this.animating &&
                ((this.last = t), (this.nextTick = this.nodeWindow?.requestAnimationFrame(this.update) ?? -1));
    };
    stop(e) {
        this.nodeWindow?.cancelAnimationFrame(this.nextTick),
            (this.animating = !1),
            (this.accumulator = 0),
            null != e && ((this.target = this.from = e), this.callback(e, this.abort)),
            this.callbacks.length > 0 && (this.callbacks.forEach((e) => e()), (this.callbacks.length = 0));
    }
}
