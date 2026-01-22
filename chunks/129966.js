n.d(t, { v: () => u }), n(321073), n(896048), n(65821);
var r = n(118356),
    i = n(689234),
    a = n(72290);
function s(e, t, n) {
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
let o = 1000000,
    l = "1" === a.env.KV_STORAGE_LOGGING,
    c = new r.Vy("Runtime");
class u {
    static nextId() {
        return ++this.counter;
    }
    static executeAsync(e, t) {
        return (
            this.initialize(),
            new Promise((n, r) => {
                let i = this.nextId();
                t(i),
                    this.pending.set(i, {
                        id: i,
                        tag: e,
                        started: performance.now(),
                        resolve: n,
                        reject: r,
                    });
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
            (e.timings.materializationTimeNanoseconds = null != t ? t : 0),
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
                    queue: t.timings.queueTimeNanoseconds / o,
                    execution: t.timings.executionTimeNanoseconds / o,
                    materialization: t.timings.materializationTimeNanoseconds / o,
                    ccTotal: t.timings.totalTimeNanoseconds / o,
                    jsTotal: n - e.started,
                },
            };
            for (let e of this.completionCallbacks) e(r);
        }
    }
    static initialize() {
        this.initialized ||
            (i.T.setCallbacks({
                status: (e) => this.onStatus(e),
                response: (e, t) => this.onResponse(e, t),
            }),
            l &&
                (this.addCompletionCallback((e) => {
                    let t = e.ok ? "completed" : "failed",
                        n = [
                            "".concat(e.timings.execution.toFixed(3), "ms execution"),
                            "".concat(e.timings.materialization.toFixed(3), "ms js materialization"),
                            "".concat(e.timings.ccTotal.toFixed(3), "ms cc completion"),
                            "".concat(e.timings.jsTotal.toFixed(3), "ms js reception"),
                        ].join(", ");
                    c.info(
                        ""
                            .concat(e.tag, " (#")
                            .concat(e.id, ") ")
                            .concat(t, " in ")
                            .concat(e.timings.ccTotal.toFixed(3), "ms (")
                            .concat(n, ")."),
                    );
                }),
                this.addDatabaseStateCallback((e, t) => c.info("".concat(e, " (state: ").concat(t, ")")))),
            (this.initialized = !0));
    }
}
s(u, "counter", 0),
    s(u, "pending", new Map()),
    s(u, "initialized", !1),
    s(u, "dbStateCallbacks", []),
    s(u, "completionCallbacks", []);
