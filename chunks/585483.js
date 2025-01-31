n.d(t, {
    S: () => o,
    b: () => s
}),
    n(47120),
    n(653041);
var i = n(836560);
n(17089);
var r = n(710845);
function a(e, t, n) {
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
class s {
    safeDispatch(e) {
        for (var t, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
        if (!this.hasSubscribers(e)) {
            let [n] = i;
            return (this._savedDispatches[e] = null !== (t = this._savedDispatches[e]) && void 0 !== t ? t : []).push(n), this;
        }
        return this.dispatch(e, ...i);
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
        return this.emitter.listeners(e).indexOf(t) >= 0 ? new r.Z('ComponentDispatchUtils').warn('ComponentDispatch.subscribe: Attempting to add a duplicate listener', e) : (this.emitter.on(e, t), this._checkSavedDispatches(e)), this;
    }
    subscribeOnce(e, t) {
        return this.emitter.once(e, t), this._checkSavedDispatches(e), this;
    }
    resubscribe(e, t) {
        if (!this.emitter.listeners(e).includes(t)) return new r.Z('ComponentDispatchUtils').warn('ComponentDispatch.resubscribe: Resubscribe without existing subscription', e), this;
        this.emitter.off(e, t), this.emitter.on(e, t);
    }
    unsubscribe(e, t) {
        return this.emitter.removeListener(e, t), this;
    }
    reset() {
        return this.emitter.removeAllListeners(), this;
    }
    dispatchKeyed(e, t) {
        for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
        return this.dispatch(''.concat(e, '_').concat(t), ...i);
    }
    subscribeKeyed(e, t, n) {
        return this.subscribe(''.concat(e, '_').concat(t), n);
    }
    unsubscribeKeyed(e, t, n) {
        return this.unsubscribe(''.concat(e, '_').concat(t), n);
    }
    constructor() {
        a(this, 'emitter', new i.EventEmitter()), a(this, '_savedDispatches', {}), this.emitter.setMaxListeners(100);
    }
}
let o = new s();
