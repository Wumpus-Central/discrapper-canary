n.d(t, {
    Wb: () => _,
    Xz: () => E,
    yz: () => y,
}),
    n(747238),
    n(812715),
    n(733351),
    n(321073),
    n(638769),
    n(896048),
    n(65821);
var r = n(989349),
    i = n.n(r),
    a = n(405269);
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
let o = /^[0]+/,
    l = /:00/,
    c = /(AM|ΠΜ|सुबह)/i,
    u = /(PM|ΜΜ|शाम)/i,
    d = /\s+/,
    f = (e) => e.replace(o, "").replace(l, "").replace(c, "").replace(d, ""),
    p = (e) => e.replace(o, "").replace(u, "").replace(d, ""),
    _ = (e, t) => {
        let n = t.toUpperCase().trim();
        if (n.length > 0) {
            let t = i()("".concat(null == e ? void 0 : e.format("YYYY-MM-DD"), " ").concat(n), "YYYY-MM-DD LT");
            if (f(t.format("LT")) === f(n)) return t;
        }
    },
    h = i()("2021-04-12T00:00:00"),
    m = 15,
    g = "LT",
    E = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
    b = (e, t) => e.value.unix() - t.value.unix();
class y {
    lookupByValue(e) {
        if (null == e) return;
        let t = E(h, e);
        return this._index[t.unix()];
    }
    _createLabel(e) {
        return (0, a.i$)(e.locale(i().locale()), this.labelFormat);
    }
    _generateTimeOptions() {
        (this.options = []), (this._index = {});
        let e = i()(h),
            t = i()(e).add(1, "day"),
            n = i()(e);
        for (; n < t; ) {
            let e = this._createNewOption(n.clone());
            this.options.push(e), (this._index[e.value.unix()] = e.value), n.add(this.intervalInMinutes, "minutes");
        }
    }
    _createNewOption(e) {
        let t = E(h, e),
            n = this._createLabel(t);
        return {
            id: t.toISOString(),
            label: n,
            value: t,
        };
    }
    _addNewOption(e) {
        let t = E(h, e),
            n = this._createLabel(t);
        return (
            (this._index[t.unix()] = t),
            this.options.push({
                id: t.toISOString(),
                label: n,
                value: t,
            }),
            this.options.sort(b),
            e
        );
    }
    _guessOptions(e) {
        let t = [];
        if (/[:\\.]/.test(e)) {
            let n = _(h, e);
            if (null != n) {
                t.push(n.clone());
                let r = n.add({ hours: 12 });
                r.isBefore(h.clone().add({ hours: 24 })) && p(r.format("LT")) === p(e) && t.push(r);
            }
        }
        return t;
    }
    getOptions(e) {
        let t = this._guessOptions(e);
        if (!(t.length > 0)) return this.options;
        {
            let e = [...this.options];
            return (
                t.forEach((t) => {
                    null == this.lookupByValue(t) && e.push(this._createNewOption(t));
                }),
                e.sort(b),
                e
            );
        }
    }
    selectValue(e) {
        let t = this.lookupByValue(e);
        return null == t ? this._addNewOption(e) : t;
    }
    constructor({ intervalInMinutes: e = m, labelFormat: t = g } = {}) {
        if (
            (s(this, "intervalInMinutes", void 0),
            s(this, "labelFormat", void 0),
            s(this, "options", []),
            s(this, "_index", {}),
            e <= 0)
        )
            throw Error("intervalInMinutes should be positive number, got ".concat(e));
        (this.intervalInMinutes = e), (this.labelFormat = t), this._generateTimeOptions();
    }
}
