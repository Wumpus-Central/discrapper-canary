function i(e, n, r) {
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
r.d(n, {
    HO: function () {
        return l;
    },
    Hb: function () {
        return c;
    },
    II: function () {
        return u;
    },
    Lj: function () {
        return p;
    },
    Ls: function () {
        return f;
    },
    Lu: function () {
        return o;
    },
    OT: function () {
        return d;
    },
    TC: function () {
        return s;
    }
});
let a = 1000 / 60,
    o = (1000 / 60) * 3,
    s = (1000 / 60) * 3,
    l = 1000 / 60 / 8,
    u = 12 * a,
    c = 1000,
    d = 2,
    f = 50;
class p {
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
            isDeadlineNotIdeal: this._browserDeadlineMs < l,
            deadlineMs: this._deadlineMs.toFixed(2),
            timeSinceStartMs: (performance.now() - this._startMs).toFixed(2)
        };
    }
    constructor(e, n = !1) {
        i(this, '_browserDeadlineMs', void 0), i(this, '_deadlineMs', void 0), i(this, '_startMs', void 0), i(this, '_firedDueToMaxTimeout', void 0), (this._deadlineMs = Math.max(l, e)), (this._browserDeadlineMs = e), (this._firedDueToMaxTimeout = n), (this._startMs = performance.now());
    }
}
