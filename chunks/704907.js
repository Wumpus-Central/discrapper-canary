r.d(n, {
    KX: function () {
        return m;
    },
    M$: function () {
        return _;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(392711),
    s = r.n(o),
    l = r(913527),
    u = r.n(l);
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
let d = 10,
    f = 1000,
    p = 32,
    h = (e, n, r) => Math.ceil(e * (n / r.numOfRecentUses)),
    _ = {
        original: (e) => {
            let n = 1;
            return e <= 3 ? (n = 100) : e <= 15 ? (n = 70) : e <= 30 ? (n = 50) : e <= 45 ? (n = 30) : e <= 80 && (n = 10), n;
        },
        safe: (e) => {
            let n = 1;
            return e <= 3 ? (n = 100) : e <= 15 ? (n = 70) : e <= 30 ? (n = 50) : e <= 45 ? (n = 30) : e <= 80 && (n = 10), n;
        },
        day_recency: (e) => {
            let n = 1;
            return e <= 1 ? (n = 100) : e <= 2 ? (n = 70) : e <= 3 ? (n = 50) : e <= 7 ? (n = 20) : e <= 15 ? (n = 15) : e <= 30 ? (n = 10) : e <= 45 ? (n = 5) : e <= 80 && (n = 2), n;
        }
    },
    m = {
        original: h,
        safe: (e, n, r) => (null == r.maxTotalUse ? 0 : Math.trunc(1000 * ((e / r.maxTotalUse) * 0.2 + (n / f) * 0.8))),
        day_recency: (e, n, r) => (null == r.maxTotalUse ? 0 : Math.trunc(1000 * ((e / r.maxTotalUse) * 0.05 + (n / f) * 0.95)))
    };
class g {
    overwriteHistory(e, n) {
        (this.usageHistory = s().mapValues(null != e ? e : {}, (e) => ({
            ...e,
            frecency: -1
        }))),
            null == n ||
                n.forEach((e) => {
                    let { key: n, timestamp: r } = e;
                    return this.track(n, r);
                }),
            this.markDirty();
    }
    markDirty() {
        this.dirty = !0;
    }
    isDirty() {
        return this.dirty;
    }
    track(e, n) {
        if (null == e) return;
        let r = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
        if (null == r)
            r = {
                totalUses: 1,
                recentUses: [null != n ? n : Date.now()],
                frecency: -1,
                score: 0
            };
        else for (r.frecency = -1, r.totalUses += 1, null == n ? r.recentUses.push(Date.now()) : (r.recentUses.push(n), r.recentUses.sort()); r.recentUses.length > this.maxSamples; ) r.recentUses.shift();
        (this.usageHistory[e] = r), this.markDirty();
    }
    getEntry(e) {
        return null == e ? null : (this.dirty && this.compute(), Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0);
    }
    getScore(e) {
        let n = this.getEntry(e);
        return null != n ? n.score : null;
    }
    getFrecency(e) {
        let n = this.getEntry(e);
        return null != n ? n.frecency : null;
    }
    replaceEntryComputeFunctions(e, n, r) {
        (this.computeWeight = e),
            (this.computeFrecency = n),
            (this.calculateMaxTotalUse = r),
            (this.usageHistory = s().mapValues(this.usageHistory, (e) => ({
                ...e,
                frecency: -1
            }))),
            this.markDirty();
    }
    compute() {
        let e = u()(),
            n = this.calculateMaxTotalUse ? s().maxBy(Object.values(this.usageHistory), (e) => e.totalUses) : null;
        s().forEach(this.usageHistory, (r, i) => {
            let { totalUses: a, recentUses: o, frecency: l } = r;
            if (-1 !== l) return;
            let c = this.computeBonus(i) / 100;
            (r.score = 0),
                s().forEach(o, (n, i) => {
                    if (i >= this.maxSamples) return !1;
                    let a = this.computeWeight(e.diff(u()(n), 'days'));
                    r.score += c * a;
                }),
                r.score > 0
                    ? (r.recentUses.length > 0 &&
                          (r.frecency = this.computeFrecency(a, r.score, {
                              numOfRecentUses: o.length,
                              maxTotalUse: null == n ? void 0 : n.totalUses
                          })),
                      (this.usageHistory[i] = r))
                    : delete this.usageHistory[i];
        }),
            (this.frequently = s()(this.usageHistory)
                .map((e, n) => {
                    let r = this.lookupKey(n);
                    return null == r ? null : [r, e.frecency];
                })
                .filter((e) => null !== e)
                .sortBy((e) => {
                    let [n, r] = e;
                    return -r;
                })
                .map((e) => {
                    let [n] = e;
                    return n;
                })
                .take(this.numFrequentlyItems)
                .value()),
            (this.dirty = !1),
            this.afterCompute(this.usageHistory, this._frequently);
    }
    get frequently() {
        return this.dirty && this.compute(), this._frequently;
    }
    set frequently(e) {
        this._frequently = e;
    }
    constructor({ computeBonus: e, computeWeight: n, computeFrecency: r = h, lookupKey: i, afterCompute: a, numFrequentlyItems: o = p, maxSamples: s = d }) {
        c(this, 'dirty', void 0), c(this, '_frequently', void 0), c(this, 'numFrequentlyItems', void 0), c(this, 'maxSamples', void 0), c(this, 'computeBonus', void 0), c(this, 'computeWeight', void 0), c(this, 'computeFrecency', void 0), c(this, 'lookupKey', void 0), c(this, 'usageHistory', void 0), c(this, 'afterCompute', void 0), c(this, 'calculateMaxTotalUse', void 0), (this.computeBonus = e), (this.computeWeight = n), (this.computeFrecency = r), (this.afterCompute = a), (this.lookupKey = i), (this.usageHistory = {}), (this.frequently = []), (this.maxSamples = s), (this.numFrequentlyItems = o), (this.calculateMaxTotalUse = !1), (this.dirty = !1);
    }
}
n.ZP = g;
