var i = r(177593);
var a = r(47120);
var s = r(411104);
var o = r(259443),
    l = r(625306);
function u(e, n, r) {
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
let c = new o.Yd('Flux'),
    d = 100,
    f = (e) => e();
class _ {
    destroy() {
        this.changedStores.clear(), this.reactChangedStores.clear(), (f = (e) => e());
    }
    injectBatchEmitChanges(e) {
        f = e;
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
        !this.isBatchEmitting &&
            !this.isPaused &&
            f(() => {
                try {
                    (this.isBatchEmitting = !0), this.changeSentinel++;
                    let e = 0,
                        n = new Set(),
                        r = new Set();
                    for (; this.changedStores.size > 0; ) {
                        if (++e > 100) throw (c.error('LastFewActions', l.qC()), Error('change emit loop detected, aborting'));
                        this.emitNonReactOnce(n, r);
                    }
                    for (; this.reactChangedStores.size > 0; ) {
                        if (++e > 100) throw (c.error('LastFewActions', l.qC()), Error('react change emit loop detected, aborting'));
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
        (e._changeCallbacks.hasAny() || e._syncWiths.length > 0) && this.changedStores.add(e), e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e), !this.isBatchEmitting && !this.isDispatching && !this.isPaused && this.emit();
    }
    emitNonReactOnce(e, n) {
        let r = Date.now(),
            i = this.changedStores;
        (this.changedStores = new Set()),
            i.forEach((e) => {
                n.add(e), e._changeCallbacks.invokeAll(), this.changedStores.delete(e);
            }),
            i.forEach((r) => {
                r._syncWiths.forEach((r) => {
                    let { func: i, store: a } = r;
                    if (!e.has(i)) e.add(i), !1 !== i() && !n.has(a) && (n.add(a), this.markChanged(a));
                });
            });
        let a = Date.now();
        a - r > d && c.verbose('Slow batch emitChanges took '.concat(a - r, 'ms recentActions:'), l.qC());
    }
    emitReactOnce() {
        let e = Date.now(),
            n = this.reactChangedStores;
        (this.reactChangedStores = new Set()),
            n.forEach((e) => {
                e._reactChangeCallbacks.invokeAll(), this.reactChangedStores.delete(e);
            });
        let r = Date.now();
        r - e > d && c.verbose('Slow batch emitReactChanges took '.concat(r - e, 'ms recentActions:'), l.qC());
    }
    constructor() {
        u(this, 'changedStores', new Set()), u(this, 'reactChangedStores', new Set()), u(this, 'changeSentinel', 0), u(this, 'isBatchEmitting', !1), u(this, 'isDispatching', !1), u(this, 'isPaused', !1), u(this, 'pauseTimer', null);
    }
}
n.Z = new _();
