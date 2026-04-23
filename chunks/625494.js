"use strict";
n.d(t, { H: () => s, _: () => d });
var i = n(423034);
n(321073);
var r = n(143236);
class s {
    emitter = new r.EventEmitter();
    options;
    _savedDispatches = {};
    constructor(e = {}) {
        this.options = { maxListeners: 100, enableDevtools: !1, ...e };
        const t = this.options.maxListeners ?? 100;
        this.emitter.setMaxListeners(t);
    }
    safeDispatch(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
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
        for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
        return this.dispatch(`${e}_${t}`, ...i);
    }
    subscribeKeyed(e, t, n) {
        return this.subscribe(`${e}_${t}`, n);
    }
    unsubscribeKeyed(e, t, n) {
        return this.unsubscribe(`${e}_${t}`, n);
    }
}
var a = n(626584),
    o = n(652215);
let l = new a.A("ComponentDispatchUtils"),
    d = new s({
        maxListeners: 100,
        enableDevtools: !1,
        logger: {
            warn: function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return l.warn(e, ...n);
            },
        },
        devtoolsReporter: function (e, t, n) {
            let r = Object.values(o.zOV).find((t) => e.startsWith(t)) ?? e;
            i.HF({
                type: "ComponentDispatch",
                description: r,
                data: { actionData: t, fullActionName: e },
                durationMs: n,
            });
        },
    });
