function r(e, t, n) {
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
n.d(t, {
    HO: () => a,
    Hb: () => l,
    II: () => s,
    Lj: () => d,
    Ls: () => u,
    Lu: () => i,
    OT: () => c,
    TC: () => o
});
let i = (1000 / 60) * 3,
    o = (1000 / 60) * 3,
    a = 1000 / 60 / 8,
    s = (1000 / 60) * 12,
    l = 1000,
    c = 2,
    u = 50;
class d {
    timeRemaining() {
        let e = performance.now() - this._startMs;
        return Math.max(0, this._deadlineMs - e);
    }
    get didTimeout() {
        return this._firedDueToMaxTimeout;
    }
    get timeSinceExpiration() {
        return performance.now() - (this._startMs + this._deadlineMs);
    }
    generateDeadlineMetrics() {
        return {
            isDeadlineNotIdeal: this._browserDeadlineMs < a,
            deadlineMs: this._deadlineMs.toFixed(2),
            timeSinceStartMs: (performance.now() - this._startMs).toFixed(2)
        };
    }
    constructor(e, t = !1) {
        r(this, '_browserDeadlineMs', void 0), r(this, '_deadlineMs', void 0), r(this, '_startMs', void 0), r(this, '_firedDueToMaxTimeout', void 0), (this._deadlineMs = Math.max(a, e)), (this._browserDeadlineMs = e), (this._firedDueToMaxTimeout = t), (this._startMs = performance.now());
    }
}
