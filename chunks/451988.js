"use strict";
n.d(t, { BK: () => s, Ep: () => i, IX: () => a, J_: () => r, OC: () => o, bY: () => l }), n(321073);
class i {
    _ref;
    start(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        (!this.isStarted() || n) &&
            (this.stop(),
            (this._ref = window.setTimeout(() => {
                (this._ref = null), t();
            }, e)));
    }
    stop() {
        null != this._ref && (clearTimeout(this._ref), (this._ref = null));
    }
    isStarted() {
        return null != this._ref;
    }
}
class r {
    _timeout;
    _delay;
    _handler;
    constructor(e, t) {
        (this._delay = e), (this._handler = t), (this._timeout = new i());
    }
    set(e) {
        return (this._delay = e), this;
    }
    delay() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        this._timeout.start(this._delay, this._handler, e);
    }
    cancel() {
        this._timeout.stop();
    }
    isDelayed() {
        return this._timeout.isStarted();
    }
}
class a {
    _ref;
    start(e, t) {
        this.stop(), (this._ref = window.setInterval(t, e));
    }
    stop() {
        null != this._ref && (clearInterval(this._ref), (this._ref = null));
    }
    isStarted() {
        return null != this._ref;
    }
}
function s(e) {
    return new Promise((t) => {
        setTimeout(() => t(), e);
    });
}
class l extends Error {
    name = "BatchInvocationManagerResetError";
}
class o {
    invoke;
    options;
    _promises = new Set();
    _pending = new Set();
    _flushHandler;
    constructor(e, t = {}) {
        (this.invoke = e),
            (this.options = t),
            (this._flushHandler = new r(this.options.delay ?? 32, () => this._flush()));
    }
    queue(e) {
        let t = Array.isArray(e) ? e : [e],
            n = [];
        for (let e of t)
            (this.options.predicate?.(e) ?? !0) && !this._pending.has(e) && (this._pending.add(e), n.push(e));
        return (n.length > 0 && this.options.onQueued?.(n), 0 === this._pending.size)
            ? Promise.resolve()
            : new Promise((e, t) => {
                  this._promises.add({ resolve: e, reject: t }), this._flushHandler.delay(!1);
              });
    }
    reset() {
        let e = [...this._pending],
            t = [...this._promises],
            n = new l("BatchInvocationManager was reset");
        this._pending.clear(),
            this._promises.clear(),
            this._flushHandler.cancel(),
            e.length > 0 && this.options.onCancelled?.(e),
            t.forEach((e) => e.reject(n));
    }
    async _flush() {
        let e = [...this._pending];
        this._pending.clear();
        let t = [...this._promises];
        if ((this._promises.clear(), 0 === e.length)) return void t.forEach((e) => e.resolve());
        try {
            await this.invoke(e), t.forEach((e) => e.resolve());
        } catch (e) {
            t.forEach((t) => t.reject(e));
        }
    }
}
