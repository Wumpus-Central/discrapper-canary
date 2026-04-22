"use strict";
n.d(t, { A: () => u }), n(205816), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(989349),
    a = n.n(s);
let o = (e, t, n) => Math.ceil(e * (t / n.numOfRecentUses)),
    l = (e) => {
        let t = 1;
        return (
            e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t
        );
    },
    u = class {
        dirty;
        version;
        _frequently;
        numFrequentlyItems;
        maxSamples;
        computeBonus;
        computeWeight;
        computeFrecency;
        calculateMaxTotalUse;
        lookupKey;
        usageHistory;
        afterCompute;
        constructor({
            computeBonus: e,
            computeWeight: t = l,
            computeFrecency: n = o,
            calculateMaxTotalUse: r = !1,
            lookupKey: i,
            afterCompute: s,
            numFrequentlyItems: a = 32,
            maxSamples: u = 10,
        }) {
            (this.computeBonus = e),
                (this.computeWeight = t),
                (this.computeFrecency = n),
                (this.calculateMaxTotalUse = r),
                (this.afterCompute = s),
                (this.lookupKey = i),
                (this.usageHistory = {}),
                (this.frequently = []),
                (this.maxSamples = u),
                (this.numFrequentlyItems = a),
                (this.dirty = !1),
                (this.version = 0);
        }
        overwriteHistory(e, t) {
            (this.usageHistory = i().mapValues(e ?? {}, (e) => ({ ...e, frecency: -1 }))),
                t?.forEach((e) => {
                    let { key: t, timestamp: n } = e;
                    return this.track(t, { timestamp: n });
                }),
                this.markDirty();
        }
        markDirty() {
            (this.dirty = !0), this.version++;
        }
        isDirty() {
            return this.dirty;
        }
        track(e) {
            let { timestamp: t, usesSinceLastTrack: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null == e) return;
            let r = Object.hasOwn(this.usageHistory, e) ? this.usageHistory[e] : void 0;
            if (null == r) r = { totalUses: n ?? 1, recentUses: [t ?? Date.now()], frecency: -1, score: 0 };
            else
                for (
                    r.frecency = -1,
                        r.totalUses += n ?? 1,
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
            let e = a()(),
                t = this.calculateMaxTotalUse ? i().maxBy(Object.values(this.usageHistory), (e) => e.totalUses) : null;
            i().forEach(this.usageHistory, (n, r) => {
                let { totalUses: s, recentUses: o, frecency: l } = n;
                if (-1 !== l) return;
                let u = this.computeBonus(r) / 100;
                (n.score = 0),
                    i().forEach(o, (t, r) => {
                        if (r >= this.maxSamples) return !1;
                        let i = this.computeWeight(e.diff(a()(t), "days"));
                        n.score += u * i;
                    }),
                    n.score > 0
                        ? (n.recentUses.length > 0 &&
                              (n.frecency = this.computeFrecency(s, n.score, {
                                  numOfRecentUses: o.length,
                                  maxTotalUse: t?.totalUses,
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
    };
