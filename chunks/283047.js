n.d(t, { A: () => d }), n(205816), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(536637),
    s = n.n(a);
let l = (e, t, n) => Math.ceil(e * (t / n.numOfRecentUses)),
    o = (e) => {
        let t = 1;
        return (
            e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t
        );
    },
    d = class {
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
            computeWeight: t = o,
            computeFrecency: n = l,
            calculateMaxTotalUse: i = !1,
            lookupKey: r,
            afterCompute: a,
            numFrequentlyItems: s = 32,
            maxSamples: d = 10,
        }) {
            (this.computeBonus = e),
                (this.computeWeight = t),
                (this.computeFrecency = n),
                (this.calculateMaxTotalUse = i),
                (this.afterCompute = a),
                (this.lookupKey = r),
                (this.usageHistory = {}),
                (this.frequently = []),
                (this.maxSamples = d),
                (this.numFrequentlyItems = s),
                (this.dirty = !1),
                (this.version = 0);
        }
        overwriteHistory(e, t) {
            (this.usageHistory = r().mapValues(e ?? {}, (e) => ({ ...e, frecency: -1 }))),
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
            let i = Object.hasOwn(this.usageHistory, e) ? this.usageHistory[e] : void 0;
            if (null == i) i = { totalUses: n ?? 1, recentUses: [t ?? Date.now()], frecency: -1, score: 0 };
            else
                for (
                    i.frecency = -1,
                        i.totalUses += n ?? 1,
                        null == t ? i.recentUses.push(Date.now()) : (i.recentUses.push(t), i.recentUses.sort());
                    i.recentUses.length > this.maxSamples;
                )
                    i.recentUses.shift();
            (this.usageHistory[e] = i), this.markDirty();
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
                t = this.calculateMaxTotalUse ? r().maxBy(Object.values(this.usageHistory), (e) => e.totalUses) : null;
            r().forEach(this.usageHistory, (n, i) => {
                let { totalUses: a, recentUses: l, frecency: o } = n;
                if (-1 !== o) return;
                let d = this.computeBonus(i) / 100;
                (n.score = 0),
                    r().forEach(l, (t, i) => {
                        if (i >= this.maxSamples) return !1;
                        let r = this.computeWeight(e.diff(s()(t), "days"));
                        n.score += d * r;
                    }),
                    n.score > 0
                        ? (n.recentUses.length > 0 &&
                              (n.frecency = this.computeFrecency(a, n.score, {
                                  numOfRecentUses: l.length,
                                  maxTotalUse: t?.totalUses,
                              })),
                          (this.usageHistory[i] = n))
                        : delete this.usageHistory[i];
            }),
                (this.frequently = r()(this.usageHistory)
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
