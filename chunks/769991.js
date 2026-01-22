n.d(t, {
    H: () => s,
}),
    n(896048),
    n(321073);
var r = n(143236);

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
class s {
    safeDispatch(e) {
        for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        if (!this.hasSubscribers(e)) {
            let [n] = r;
            return (this._savedDispatches[e] = null != (t = this._savedDispatches[e]) ? t : []).push(n), this;
        }
        return this.dispatch(e, ...r);
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
        return this.dispatch("".concat(e, "_").concat(t), ...r);
    }
    subscribeKeyed(e, t, n) {
        return this.subscribe("".concat(e, "_").concat(t), n);
    }
    unsubscribeKeyed(e, t, n) {
        return this.unsubscribe("".concat(e, "_").concat(t), n);
    }
    constructor(e = {}) {
        var t;
        i(this, "emitter", new r.EventEmitter()),
            i(this, "options", void 0),
            i(this, "_savedDispatches", {}),
            (this.options = a(
                {
                    maxListeners: 100,
                    enableDevtools: !1,
                },
                e,
            ));
        const n = null != (t = this.options.maxListeners) ? t : 100;
        this.emitter.setMaxListeners(n);
    }
}
