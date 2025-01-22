r.d(n, {
    S: function () {
        return f;
    },
    b: function () {
        return d;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(836560);
var s = r(17089),
    l = r(710845),
    u = r(981631);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class d {
    safeDispatch(e) {
        for (var n, r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
        if (!this.hasSubscribers(e)) {
            let [r] = i;
            return (this._savedDispatches[e] = null !== (n = this._savedDispatches[e]) && void 0 !== n ? n : []).push(r), this;
        }
        return this.dispatch(e, ...i);
    }
    dispatch(e, n) {
        Date.now();
        return this.emitter.emit(e, n), this;
    }
    dispatchToLastSubscribed(e, n) {
        Date.now();
        {
            let r = this.emitter.listeners(e);
            return r.length > 0 && r[r.length - 1](n), this;
        }
    }
    hasSubscribers(e) {
        return this.emitter.listenerCount(e) > 0;
    }
    _checkSavedDispatches(e) {
        let n = this._savedDispatches[e];
        null != n &&
            (n.forEach((n) => {
                this.dispatch(e, n);
            }),
            (this._savedDispatches[e] = void 0));
    }
    subscribe(e, n) {
        return this.emitter.listeners(e).indexOf(n) >= 0 ? (new l.Z('ComponentDispatchUtils').warn('ComponentDispatch.subscribe: Attempting to add a duplicate listener', e), this) : (this.emitter.on(e, n), this._checkSavedDispatches(e), this);
    }
    subscribeOnce(e, n) {
        return this.emitter.once(e, n), this._checkSavedDispatches(e), this;
    }
    resubscribe(e, n) {
        if (!this.emitter.listeners(e).includes(n)) return new l.Z('ComponentDispatchUtils').warn('ComponentDispatch.resubscribe: Resubscribe without existing subscription', e), this;
        this.emitter.off(e, n), this.emitter.on(e, n);
    }
    unsubscribe(e, n) {
        return this.emitter.removeListener(e, n), this;
    }
    reset() {
        return this.emitter.removeAllListeners(), this;
    }
    dispatchKeyed(e, n) {
        for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) i[a - 2] = arguments[a];
        return this.dispatch(''.concat(e, '_').concat(n), ...i);
    }
    subscribeKeyed(e, n, r) {
        return this.subscribe(''.concat(e, '_').concat(n), r);
    }
    unsubscribeKeyed(e, n, r) {
        return this.unsubscribe(''.concat(e, '_').concat(n), r);
    }
    constructor() {
        c(this, 'emitter', new o.EventEmitter()), c(this, '_savedDispatches', {}), this.emitter.setMaxListeners(100);
    }
}
let f = new d();
