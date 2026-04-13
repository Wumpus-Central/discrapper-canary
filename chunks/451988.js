"use strict";
n.d(t, { BK: () => a, Ep: () => r, IX: () => s, J_: () => i, OC: () => o });
class r {
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
class i {
    _timeout;
    _delay;
    _handler;
    constructor(e, t) {
        (this._delay = e), (this._handler = t), (this._timeout = new r());
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
class s {
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
function a(e) {
    return new Promise((t) => {
        setTimeout(() => t(), e);
    });
}
class o {
    invoke;
    predicate;
    delay;
    _promises = new Set();
    _pending = new Set();
    _flushHandler;
    constructor(e, t = () => !0, n = 32) {
        (this.invoke = e),
            (this.predicate = t),
            (this.delay = n),
            (this._flushHandler = new i(this.delay, () => this._flush()));
    }
    queue(e) {
        for (let t of Array.isArray(e) ? e : [e]) this.predicate(t) && this._pending.add(t);
        return 0 === this._pending.size
            ? Promise.resolve()
            : new Promise((e, t) => {
                  this._promises.add({ resolve: e, reject: t }), this._flushHandler.delay(!1);
              });
    }
    reset() {
        let e = Error("BatchInvocationManager was reset");
        this._promises.forEach((t) => t.reject(e)),
            this._pending.clear(),
            this._promises.clear(),
            this._flushHandler.cancel();
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
