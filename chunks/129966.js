"use strict";
n.d(t, { v: () => u }), n(321073);
var r = n(118356),
    i = n(689234),
    a = n(72290);
let s = 1e6,
    o = "1" === a.env.KV_STORAGE_LOGGING,
    l = new r.Vy("Runtime");
class u {
    static counter = 0;
    static pending = new Map();
    static initialized = !1;
    static dbStateCallbacks = [];
    static completionCallbacks = [];
    static nextId() {
        return ++this.counter;
    }
    static executeAsync(e, t) {
        return (
            this.initialize(),
            new Promise((n, r) => {
                let i = this.nextId();
                t(i), this.pending.set(i, { id: i, tag: e, started: performance.now(), resolve: n, reject: r });
            })
        );
    }
    static addCompletionCallback(e) {
        return this.completionCallbacks.push(e), e;
    }
    static addDatabaseStateCallback(e) {
        return this.dbStateCallbacks.push(e), e;
    }
    static removeCompletionCallback(e) {
        this.completionCallbacks = this.completionCallbacks.filter((t) => t !== e);
    }
    static removeDatabaseStateCallback(e) {
        this.dbStateCallbacks = this.dbStateCallbacks.filter((t) => t !== e);
    }
    static onResponse(e, t) {
        let n = performance.now(),
            r = this.pending.get(e.id);
        null != r &&
            (this.pending.delete(e.id),
            (e.timings.materializationTimeNanoseconds = t ?? 0),
            this.completeOperation(r, e, n),
            this.resolveOperation(r, e));
    }
    static onStatus(e) {
        for (let t of this.dbStateCallbacks) t(e.handle, e.state);
    }
    static resolveOperation(e, t) {
        t.ok ? e.resolve(t.data) : e.reject("string" == typeof t.data ? Error(t.data) : t.data);
    }
    static completeOperation(e, t, n) {
        if (this.completionCallbacks.length > 0) {
            let r = {
                id: e.id,
                tag: e.tag,
                ok: t.ok,
                value: t.data,
                timings: {
                    queue: t.timings.queueTimeNanoseconds / s,
                    execution: t.timings.executionTimeNanoseconds / s,
                    materialization: t.timings.materializationTimeNanoseconds / s,
                    ccTotal: t.timings.totalTimeNanoseconds / s,
                    jsTotal: n - e.started,
                },
            };
            for (let e of this.completionCallbacks) e(r);
        }
    }
    static initialize() {
        this.initialized ||
            (i.T.setCallbacks({ status: (e) => this.onStatus(e), response: (e, t) => this.onResponse(e, t) }),
            o &&
                (this.addCompletionCallback((e) => {
                    let t = e.ok ? "completed" : "failed",
                        n = `${e.timings.execution.toFixed(3)}ms execution, ${e.timings.materialization.toFixed(3)}ms js materialization, ${e.timings.ccTotal.toFixed(3)}ms cc completion, ${e.timings.jsTotal.toFixed(3)}ms js reception`;
                    l.info(`${e.tag} (#${e.id}) ${t} in ${e.timings.ccTotal.toFixed(3)}ms (${n}).`);
                }),
                this.addDatabaseStateCallback((e, t) => l.info(`${e} (state: ${t})`))),
            (this.initialized = !0));
    }
}
