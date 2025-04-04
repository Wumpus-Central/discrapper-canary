n.d(t, {
    S: () => s,
    b: () => a
}),
    n(47120),
    n(653041);
var r = n(836560);
n(17089);
var i = n(710845);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n(981631);
class a {
    safeDispatch(e) {
        for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        if (!this.hasSubscribers(e)) {
            let [n] = r;
            return (this._savedDispatches[e] = null != (t = this._savedDispatches[e]) ? t : []).push(n), this;
        }
        return this.dispatch(e, ...r);
    }
    dispatch(e, t) {
        return Date.now(), this.emitter.emit(e, t), this;
    }
    dispatchToLastSubscribed(e, t) {
        Date.now();
        {
            let n = this.emitter.listeners(e);
            return n.length > 0 && n[n.length - 1](t), this;
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
        return this.emitter.listeners(e).indexOf(t) >= 0 ? new i.Z('ComponentDispatchUtils').warn('ComponentDispatch.subscribe: Attempting to add a duplicate listener', e) : (this.emitter.on(e, t), this._checkSavedDispatches(e)), this;
    }
    subscribeOnce(e, t) {
        return this.emitter.once(e, t), this._checkSavedDispatches(e), this;
    }
    resubscribe(e, t) {
        if (!this.emitter.listeners(e).includes(t)) return new i.Z('ComponentDispatchUtils').warn('ComponentDispatch.resubscribe: Resubscribe without existing subscription', e), this;
        this.emitter.off(e, t), this.emitter.on(e, t);
    }
    unsubscribe(e, t) {
        return this.emitter.removeListener(e, t), this;
    }
    reset() {
        return this.emitter.removeAllListeners(), this;
    }
    dispatchKeyed(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        return this.dispatch(''.concat(e, '_').concat(t), ...r);
    }
    subscribeKeyed(e, t, n) {
        return this.subscribe(''.concat(e, '_').concat(t), n);
    }
    unsubscribeKeyed(e, t, n) {
        return this.unsubscribe(''.concat(e, '_').concat(t), n);
    }
    constructor() {
        o(this, 'emitter', new r.EventEmitter()), o(this, '_savedDispatches', {}), this.emitter.setMaxListeners(100);
    }
}
let s = new a();
