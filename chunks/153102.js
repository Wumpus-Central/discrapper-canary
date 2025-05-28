n.d(t, { Z: () => u }), n(358797), n(388685), n(415506), n(17089);
var r = n(259443),
    i = n(625306);
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
let o = new r.Yd('Flux'),
    s = 100,
    l = (e) => e();
class c {
    destroy() {
        this.changedStores.clear(), this.reactChangedStores.clear(), (l = (e) => e());
    }
    injectBatchEmitChanges(e) {
        l = e;
    }
    pause() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        (this.isPaused = !0),
            null !== this.pauseTimer && clearTimeout(this.pauseTimer),
            null !== e &&
                (this.pauseTimer = setTimeout(() => {
                    (this.pauseTimer = null), this.resume();
                }, e));
    }
    resume() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        clearTimeout(this.pauseTimer), (this.pauseTimer = null), this.isPaused && ((this.isPaused = !1), e && this.changedStores.size > 0 && setImmediate(() => this.emit()));
    }
    batched(e) {
        if (this.isPaused) return e();
        try {
            return (this.isPaused = !0), e();
        } finally {
            this.resume(!1), this.emit();
        }
    }
    emit() {
        this.isBatchEmitting ||
            this.isPaused ||
            l(() => {
                try {
                    (this.isBatchEmitting = !0), this.changeSentinel++;
                    let e = 0,
                        t = new Set(),
                        n = new Set();
                    for (; this.changedStores.size > 0; ) {
                        if (++e > 100) throw (o.error('LastFewActions', i.qC()), Error('change emit loop detected, aborting'));
                        this.emitNonReactOnce(t, n);
                    }
                    for (; this.reactChangedStores.size > 0; ) {
                        if (++e > 100) throw (o.error('LastFewActions', i.qC()), Error('react change emit loop detected, aborting'));
                        this.emitReactOnce();
                    }
                } finally {
                    this.isBatchEmitting = !1;
                }
            });
    }
    getChangeSentinel() {
        return this.changeSentinel;
    }
    getIsPaused() {
        return this.isPaused;
    }
    markChanged(e) {
        (e._changeCallbacks.hasAny() || e._syncWiths.length > 0) && this.changedStores.add(e), e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e), this.isBatchEmitting || this.isDispatching || this.isPaused || this.emit();
    }
    emitNonReactOnce(e, t) {
        let n = Date.now(),
            r = this.changedStores;
        (this.changedStores = new Set()),
            r.forEach((e) => {
                t.add(e), e._changeCallbacks.invokeAll(), this.changedStores.delete(e);
            }),
            r.forEach((n) => {
                n._syncWiths.forEach((n) => {
                    let { func: r, store: i } = n;
                    !e.has(r) && (e.add(r), !1 === r() || t.has(i) || (t.add(i), this.markChanged(i)));
                });
            });
        let a = Date.now();
        a - n > s && o.verbose('Slow batch emitChanges took '.concat(a - n, 'ms recentActions:'), i.qC());
    }
    emitReactOnce() {
        let e = Date.now(),
            t = this.reactChangedStores;
        (this.reactChangedStores = new Set()),
            t.forEach((e) => {
                e._reactChangeCallbacks.invokeAll(), this.reactChangedStores.delete(e);
            });
        let n = Date.now();
        n - e > s && o.verbose('Slow batch emitReactChanges took '.concat(n - e, 'ms recentActions:'), i.qC());
    }
    constructor() {
        a(this, 'changedStores', new Set()), a(this, 'reactChangedStores', new Set()), a(this, 'changeSentinel', 0), a(this, 'isBatchEmitting', !1), a(this, 'isDispatching', !1), a(this, 'isPaused', !1), a(this, 'pauseTimer', null);
    }
}
let u = new c();
