"use strict";
n.d(t, { H: () => i }), n(321073);
var r = n(143236);
class i {
    emitter = new r.EventEmitter();
    options;
    _savedDispatches = {};
    constructor(e = {}) {
        this.options = { maxListeners: 100, enableDevtools: !1, ...e };
        const t = this.options.maxListeners ?? 100;
        this.emitter.setMaxListeners(t);
    }
    safeDispatch(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        if (!this.hasSubscribers(e)) {
            let [t] = n;
            return (this._savedDispatches[e] = this._savedDispatches[e] ?? []).push(t), this;
        }
        return this.dispatch(e, ...n);
    }
    dispatch(e, t) {
        let n = Date.now();
        try {
            return this.emitter.emit(e, t), this;
        } finally {
            this.options.enableDevtools &&
                this.options.devtoolsReporter &&
                this.options.devtoolsReporter(e, t, Date.now() - n);
        }
    }
    dispatchToLastSubscribed(e, t) {
        let n = Date.now();
        try {
            let n = this.emitter.listeners(e);
            return n.length > 0 && n[n.length - 1](t), this;
        } finally {
            this.options.enableDevtools &&
                this.options.devtoolsReporter &&
                this.options.devtoolsReporter(e, t, Date.now() - n);
        }
    }
    hasSubscribers(e) {
        return this.emitter.listenerCount(e) > 0;
    }
    _checkSavedDispatches(e) {
        let t = this._savedDispatches[e];
        null != t &&
            (t.forEach((t) => {
                this.dispatch(e, t);
            }),
            (this._savedDispatches[e] = void 0));
    }
    subscribe(e, t) {
        return (
            this.emitter.listeners(e).indexOf(t) >= 0
                ? this.options.logger &&
                  this.options.logger.warn("ComponentDispatch.subscribe: Attempting to add a duplicate listener", e)
                : (this.emitter.on(e, t), this._checkSavedDispatches(e)),
            this
        );
    }
    subscribeOnce(e, t) {
        return this.emitter.once(e, t), this._checkSavedDispatches(e), this;
    }
    resubscribe(e, t) {
        return (
            this.emitter.listeners(e).includes(t)
                ? (this.emitter.off(e, t), this.emitter.on(e, t))
                : this.options.logger &&
                  this.options.logger.warn(
                      "ComponentDispatch.resubscribe: Resubscribe without existing subscription",
                      e,
                  ),
            this
        );
    }
    unsubscribe(e, t) {
        return this.emitter.removeListener(e, t), this;
    }
    reset() {
        return this.emitter.removeAllListeners(), this;
    }
    dispatchKeyed(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        return this.dispatch(`${e}_${t}`, ...r);
    }
    subscribeKeyed(e, t, n) {
        return this.subscribe(`${e}_${t}`, n);
    }
    unsubscribeKeyed(e, t, n) {
        return this.unsubscribe(`${e}_${t}`, n);
    }
}
