r.d(n, {
    r: function () {
        return h;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(411104);
var s = r(259443),
    l = r(198584),
    u = r(444675);
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
let d = 1000000,
    f = '1' === u.env.KV_STORAGE_LOGGING,
    p = new s.Yd('Runtime');
class h {
    static nextId() {
        return ++this.counter;
    }
    static executeAsync(e, n) {
        return (
            this.initialize(),
            new Promise((r, i) => {
                let a = this.nextId();
                n(a),
                    this.pending.set(a, {
                        id: a,
                        tag: e,
                        started: performance.now(),
                        resolve: r,
                        reject: i
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
        this.completionCallbacks = this.completionCallbacks.filter((n) => n !== e);
    }
    static removeDatabaseStateCallback(e) {
        this.dbStateCallbacks = this.dbStateCallbacks.filter((n) => n !== e);
    }
    static onResponse(e, n) {
        let r = performance.now(),
            i = this.pending.get(e.id);
        null != i && (this.pending.delete(e.id), (e.timings.materializationTimeNanoseconds = null != n ? n : 0), this.completeOperation(i, e, r), this.resolveOperation(i, e));
    }
    static onStatus(e) {
        for (let n of this.dbStateCallbacks) n(e.handle, e.state);
    }
    static resolveOperation(e, n) {
        n.ok ? e.resolve(n.data) : e.reject('string' == typeof n.data ? Error(n.data) : n.data);
    }
    static completeOperation(e, n, r) {
        if (this.completionCallbacks.length > 0) {
            let i = {
                id: e.id,
                tag: e.tag,
                ok: n.ok,
                value: n.data,
                timings: {
                    queue: n.timings.queueTimeNanoseconds / d,
                    execution: n.timings.executionTimeNanoseconds / d,
                    materialization: n.timings.materializationTimeNanoseconds / d,
                    ccTotal: n.timings.totalTimeNanoseconds / d,
                    jsTotal: r - e.started
                }
            };
            for (let e of this.completionCallbacks) e(i);
        }
    }
    static initialize() {
        if (!this.initialized)
            l.d.setCallbacks({
                status: (e) => this.onStatus(e),
                response: (e, n) => this.onResponse(e, n)
            }),
                f &&
                    (this.addCompletionCallback((e) => {
                        let n = e.ok ? 'completed' : 'failed',
                            r = [''.concat(e.timings.execution.toFixed(3), 'ms execution'), ''.concat(e.timings.materialization.toFixed(3), 'ms js materialization'), ''.concat(e.timings.ccTotal.toFixed(3), 'ms cc completion'), ''.concat(e.timings.jsTotal.toFixed(3), 'ms js reception')].join(', ');
                        p.info(''.concat(e.tag, ' (#').concat(e.id, ') ').concat(n, ' in ').concat(e.timings.ccTotal.toFixed(3), 'ms (').concat(r, ').'));
                    }),
                    this.addDatabaseStateCallback((e, n) => p.info(''.concat(e, ' (state: ').concat(n, ')')))),
                (this.initialized = !0);
    }
}
c(h, 'counter', 0), c(h, 'pending', new Map()), c(h, 'initialized', !1), c(h, 'dbStateCallbacks', []), c(h, 'completionCallbacks', []);
