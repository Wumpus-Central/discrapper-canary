n.d(t, {
    KX: () => m,
    M$: () => h,
    ZP: () => E
}),
    n(653041),
    n(230036),
    n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(913527),
    a = n.n(o);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = 10,
    f = 1000,
    _ = 32,
    p = (e, t, n) => Math.ceil(e * (t / n.numOfRecentUses)),
    h = {
        original: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        safe: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        day_recency: (e) => {
            let t = 1;
            return e <= 1 ? (t = 100) : e <= 2 ? (t = 70) : e <= 3 ? (t = 50) : e <= 7 ? (t = 20) : e <= 15 ? (t = 15) : e <= 30 ? (t = 10) : e <= 45 ? (t = 5) : e <= 80 && (t = 2), t;
        }
    },
    m = {
        original: p,
        safe: (e, t, n) => (null == n.maxTotalUse ? 0 : Math.trunc(1000 * ((e / n.maxTotalUse) * 0.2 + (t / f) * 0.8))),
        day_recency: (e, t, n) => (null == n.maxTotalUse ? 0 : Math.trunc(1000 * ((e / n.maxTotalUse) * 0.05 + (t / f) * 0.95)))
    };
class g {
    overwriteHistory(e, t) {
        (this.usageHistory = i().mapValues(null != e ? e : {}, (e) => u(l({}, e), { frecency: -1 }))),
            null == t ||
                t.forEach((e) => {
                    let { key: t, timestamp: n } = e;
                    return this.track(t, n);
                }),
            this.markDirty();
    }
    markDirty() {
        this.dirty = !0;
    }
    isDirty() {
        return this.dirty;
    }
    track(e, t) {
        if (null == e) return;
        let n = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
        if (null == n)
            n = {
                totalUses: 1,
                recentUses: [null != t ? t : Date.now()],
                frecency: -1,
                score: 0
            };
        else for (n.frecency = -1, n.totalUses += 1, null == t ? n.recentUses.push(Date.now()) : (n.recentUses.push(t), n.recentUses.sort()); n.recentUses.length > this.maxSamples; ) n.recentUses.shift();
        (this.usageHistory[e] = n), this.markDirty();
    }
    getEntry(e) {
        return null == e ? null : (this.dirty && this.compute(), Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0);
    }
    getScore(e) {
        let t = this.getEntry(e);
        return null != t ? t.score : null;
    }
    getFrecency(e) {
        let t = this.getEntry(e);
        return null != t ? t.frecency : null;
    }
    replaceEntryComputeFunctions(e, t, n) {
        (this.computeWeight = e), (this.computeFrecency = t), (this.calculateMaxTotalUse = n), (this.usageHistory = i().mapValues(this.usageHistory, (e) => u(l({}, e), { frecency: -1 }))), this.markDirty();
    }
    compute() {
        let e = a()(),
            t = this.calculateMaxTotalUse ? i().maxBy(Object.values(this.usageHistory), (e) => e.totalUses) : null;
        i().forEach(this.usageHistory, (n, r) => {
            let { totalUses: o, recentUses: s, frecency: l } = n;
            if (-1 !== l) return;
            let c = this.computeBonus(r) / 100;
            (n.score = 0),
                i().forEach(s, (t, r) => {
                    if (r >= this.maxSamples) return !1;
                    let i = this.computeWeight(e.diff(a()(t), 'days'));
                    n.score += c * i;
                }),
                n.score > 0
                    ? (n.recentUses.length > 0 &&
                          (n.frecency = this.computeFrecency(o, n.score, {
                              numOfRecentUses: s.length,
                              maxTotalUse: null == t ? void 0 : t.totalUses
                          })),
                      (this.usageHistory[r] = n))
                    : delete this.usageHistory[r];
        }),
            (this.frequently = i()(this.usageHistory)
                .map((e, t) => {
                    let n = this.lookupKey(t);
                    return null == n ? null : [n, e.frecency];
                })
                .filter((e) => null !== e)
                .sortBy((e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
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
    constructor({ computeBonus: e, computeWeight: t, computeFrecency: n = p, lookupKey: r, afterCompute: i, numFrequentlyItems: o = _, maxSamples: a = d }) {
        s(this, 'dirty', void 0), s(this, '_frequently', void 0), s(this, 'numFrequentlyItems', void 0), s(this, 'maxSamples', void 0), s(this, 'computeBonus', void 0), s(this, 'computeWeight', void 0), s(this, 'computeFrecency', void 0), s(this, 'lookupKey', void 0), s(this, 'usageHistory', void 0), s(this, 'afterCompute', void 0), s(this, 'calculateMaxTotalUse', void 0), (this.computeBonus = e), (this.computeWeight = t), (this.computeFrecency = n), (this.afterCompute = i), (this.lookupKey = r), (this.usageHistory = {}), (this.frequently = []), (this.maxSamples = a), (this.numFrequentlyItems = o), (this.calculateMaxTotalUse = !1), (this.dirty = !1);
    }
}
let E = g;
