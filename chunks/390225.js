"use strict";
n.d(t, { A: () => o }), n(142703), n(423034);
var i = n(941426),
    r = n(39304);
let a = new i.Vy("Flux"),
    s = (e) => e();
class l {
    changedStores = new Set();
    reactChangedStores = new Set();
    changeSentinel = 0;
    isBatchEmitting = !1;
    isDispatching = !1;
    isPaused = !1;
    pauseTimer = null;
    destroy() {
        this.changedStores.clear(), this.reactChangedStores.clear(), (s = (e) => e());
    }
    injectBatchEmitChanges(e) {
        s = e;
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
        clearTimeout(this.pauseTimer),
            (this.pauseTimer = null),
            this.isPaused &&
                ((this.isPaused = !1), e && this.changedStores.size > 0 && setImmediate(() => this.emit()));
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
            s(() => {
                try {
                    (this.isBatchEmitting = !0), this.changeSentinel++;
                    let e = 0,
                        t = new Set(),
                        n = new Set();
                    for (; this.changedStores.size > 0; ) {
                        if (++e > 100)
                            throw (a.error("LastFewActions", r.lK()), Error("change emit loop detected, aborting"));
                        this.emitNonReactOnce(t, n);
                    }
                    for (; this.reactChangedStores.size > 0; ) {
                        if (++e > 100)
                            throw (
                                (a.error("LastFewActions", r.lK()), Error("react change emit loop detected, aborting"))
                            );
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
        (e._changeCallbacks.hasAny() || e._syncWiths.length > 0) && this.changedStores.add(e),
            e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e),
            this.isBatchEmitting || this.isDispatching || this.isPaused || this.emit();
    }
    emitNonReactOnce(e, t) {
        let n = Date.now(),
            i = this.changedStores;
        (this.changedStores = new Set()),
            i.forEach((e) => {
                t.add(e), e._changeCallbacks.invokeAll(), this.changedStores.delete(e);
            }),
            i.forEach((n) => {
                n._syncWiths.forEach((n) => {
                    let { func: i, store: r } = n;
                    e.has(i) || (e.add(i), !1 === i() || t.has(r) || (t.add(r), this.markChanged(r)));
                });
            });
        let s = Date.now();
        s - n > 100 && a.verbose(`Slow batch emitChanges took ${s - n}ms recentActions:`, r.lK());
    }
    emitReactOnce() {
        let e = Date.now(),
            t = this.reactChangedStores;
        (this.reactChangedStores = new Set()),
            t.forEach((e) => {
                e._reactChangeCallbacks.invokeAll(), this.reactChangedStores.delete(e);
            });
        let n = Date.now();
        n - e > 100 && a.verbose(`Slow batch emitReactChanges took ${n - e}ms recentActions:`, r.lK());
    }
}
let o = new l();
