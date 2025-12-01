n.d(t, { Z: () => h }), n(825670), n(539854), n(642613), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(913527),
    o = n.n(a);
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
    f = 32,
    p = (e, t, n) => Math.ceil(e * (t / n.numOfRecentUses)),
    _ = (e) => {
        let t = 1;
        return (
            e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t
        );
    };
class m {
    overwriteHistory(e, t) {
        (this.usageHistory = i().mapValues(null != e ? e : {}, (e) => u(l({}, e), { frecency: -1 }))),
            null == t ||
                t.forEach((e) => {
                    let { key: t, timestamp: n } = e;
                    return this.track(t, { timestamp: n });
                }),
            this.markDirty();
    }
    markDirty() {
        this.dirty = !0;
    }
    isDirty() {
        return this.dirty;
    }
    track(e) {
        let { timestamp: t, usesSinceLastTrack: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e) return;
        let r = Object.hasOwn(this.usageHistory, e) ? this.usageHistory[e] : void 0;
        if (null == r)
            r = {
                totalUses: null != n ? n : 1,
                recentUses: [null != t ? t : Date.now()],
                frecency: -1,
                score: 0,
            };
        else
            for (
                r.frecency = -1,
                    r.totalUses += null != n ? n : 1,
                    null == t ? r.recentUses.push(Date.now()) : (r.recentUses.push(t), r.recentUses.sort());
                r.recentUses.length > this.maxSamples;
            )
                r.recentUses.shift();
        (this.usageHistory[e] = r), this.markDirty();
    }
    getEntry(e) {
        return null == e
            ? null
            : (this.dirty && this.compute(),
              Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0);
    }
    getScore(e) {
        let t = this.getEntry(e);
        return null != t ? t.score : null;
    }
    getFrecency(e) {
        let t = this.getEntry(e);
        return null != t ? t.frecency : null;
    }
    compute() {
        let e = o()(),
            t = this.calculateMaxTotalUse ? i().maxBy(Object.values(this.usageHistory), (e) => e.totalUses) : null;
        i().forEach(this.usageHistory, (n, r) => {
            let { totalUses: a, recentUses: s, frecency: l } = n;
            if (-1 !== l) return;
            let c = this.computeBonus(r) / 100;
            (n.score = 0),
                i().forEach(s, (t, r) => {
                    if (r >= this.maxSamples) return !1;
                    let i = this.computeWeight(e.diff(o()(t), "days"));
                    n.score += c * i;
                }),
                n.score > 0
                    ? (n.recentUses.length > 0 &&
                          (n.frecency = this.computeFrecency(a, n.score, {
                              numOfRecentUses: s.length,
                              maxTotalUse: null == t ? void 0 : t.totalUses,
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
    constructor({
        computeBonus: e,
        computeWeight: t = _,
        computeFrecency: n = p,
        calculateMaxTotalUse: r = !1,
        lookupKey: i,
        afterCompute: a,
        numFrequentlyItems: o = f,
        maxSamples: l = d,
    }) {
        s(this, "dirty", void 0),
            s(this, "_frequently", void 0),
            s(this, "numFrequentlyItems", void 0),
            s(this, "maxSamples", void 0),
            s(this, "computeBonus", void 0),
            s(this, "computeWeight", void 0),
            s(this, "computeFrecency", void 0),
            s(this, "calculateMaxTotalUse", void 0),
            s(this, "lookupKey", void 0),
            s(this, "usageHistory", void 0),
            s(this, "afterCompute", void 0),
            (this.computeBonus = e),
            (this.computeWeight = t),
            (this.computeFrecency = n),
            (this.calculateMaxTotalUse = r),
            (this.afterCompute = a),
            (this.lookupKey = i),
            (this.usageHistory = {}),
            (this.frequently = []),
            (this.maxSamples = l),
            (this.numFrequentlyItems = o),
            (this.dirty = !1);
    }
}
let h = m;
