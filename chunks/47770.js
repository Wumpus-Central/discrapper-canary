r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
var a = r(836560);
function o(e, n, r) {
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
class s {
    on(e, n) {
        this.emitter.on(e, n);
    }
    off(e, n) {
        this.emitter.off(e, n);
    }
    once(e, n) {
        this.emitter.once(e, n);
    }
    addListener(e, n) {
        this.emitter.addListener(e, n);
    }
    removeListener(e, n) {
        this.emitter.removeListener(e, n);
    }
    removeAllListeners() {
        this.emitter.removeAllListeners();
    }
    emit(e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        this.emitter.emit(e, ...r);
    }
    emitUnsafe(e) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        this.emitter.emit(e, ...r);
    }
    listenerCount(e) {
        return this.emitter.listenerCount(e);
    }
    constructor() {
        o(this, 'emitter', new a.EventEmitter());
    }
}
