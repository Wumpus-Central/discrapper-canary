"use strict";
n.d(t, { BK: () => s, Ep: () => r, IX: () => a, J_: () => i });
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
