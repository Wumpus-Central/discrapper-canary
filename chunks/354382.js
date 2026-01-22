function r(e, t, n) {
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
n.d(t, {
    Z4: () => i,
    ct: () => o,
    oS: () => l,
    vr: () => s,
    zO: () => a,
});
let i = (1e3 / 60) * 3,
    a = (1e3 / 60) * 3,
    s = 1e3 / 60 / 8,
    o = (1e3 / 60) * 12;
class l {
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
            isDeadlineNotIdeal: this._browserDeadlineMs < s,
            deadlineMs: this._deadlineMs.toFixed(2),
            timeSinceStartMs: (performance.now() - this._startMs).toFixed(2),
        };
    }
    constructor(e, t = !1) {
        r(this, "_browserDeadlineMs", void 0),
            r(this, "_deadlineMs", void 0),
            r(this, "_startMs", void 0),
            r(this, "_firedDueToMaxTimeout", void 0),
            (this._deadlineMs = Math.max(s, e)),
            (this._browserDeadlineMs = e),
            (this._firedDueToMaxTimeout = t),
            (this._startMs = performance.now());
    }
}
