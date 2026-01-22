n.d(t, { A: () => m }), n(205816), n(321073), n(638769), n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(989349),
    s = n.n(a);
function o(e, t, n) {
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
                o(e, t, n[t]);
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
class h {
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
        let e = s()(),
            t = this.calculateMaxTotalUse ? i().maxBy(Object.values(this.usageHistory), (e) => e.totalUses) : null;
        i().forEach(this.usageHistory, (n, r) => {
            let { totalUses: a, recentUses: o, frecency: l } = n;
            if (-1 !== l) return;
            let c = this.computeBonus(r) / 100;
            (n.score = 0),
                i().forEach(o, (t, r) => {
                    if (r >= this.maxSamples) return !1;
                    let i = this.computeWeight(e.diff(s()(t), "days"));
                    n.score += c * i;
                }),
                n.score > 0
                    ? (n.recentUses.length > 0 &&
                          (n.frecency = this.computeFrecency(a, n.score, {
                              numOfRecentUses: o.length,
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
        numFrequentlyItems: s = f,
        maxSamples: l = d,
    }) {
        o(this, "dirty", void 0),
            o(this, "_frequently", void 0),
            o(this, "numFrequentlyItems", void 0),
            o(this, "maxSamples", void 0),
            o(this, "computeBonus", void 0),
            o(this, "computeWeight", void 0),
            o(this, "computeFrecency", void 0),
            o(this, "calculateMaxTotalUse", void 0),
            o(this, "lookupKey", void 0),
            o(this, "usageHistory", void 0),
            o(this, "afterCompute", void 0),
            (this.computeBonus = e),
            (this.computeWeight = t),
            (this.computeFrecency = n),
            (this.calculateMaxTotalUse = r),
            (this.afterCompute = a),
            (this.lookupKey = i),
            (this.usageHistory = {}),
            (this.frequently = []),
            (this.maxSamples = l),
            (this.numFrequentlyItems = s),
            (this.dirty = !1);
    }
}
let m = h;
