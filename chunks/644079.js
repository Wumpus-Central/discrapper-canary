n.d(t, { Wb: () => m, Xz: () => g, yz: () => p }), n(321073);
var i = n(989349),
    l = n.n(i),
    a = n(405269);
let s = /^[0]+/,
    r = /:00/,
    o = /(AM|ΠΜ|सुबह)/i,
    c = /(PM|ΜΜ|शाम)/i,
    d = /\s+/,
    u = (e) => e.replace(s, "").replace(r, "").replace(o, "").replace(d, ""),
    h = (e) => e.replace(s, "").replace(c, "").replace(d, ""),
    m = (e, t) => {
        let n = t.toUpperCase().trim();
        if (n.length > 0) {
            let t = l()(`${e?.format("YYYY-MM-DD")} ${n}`, "YYYY-MM-DD LT");
            if (u(t.format("LT")) === u(n)) return t;
        }
    },
    A = l()("2021-04-12T00:00:00"),
    g = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
    _ = (e, t) => e.value.unix() - t.value.unix();
class p {
    intervalInMinutes;
    labelFormat;
    options = [];
    _index = {};
    constructor({ intervalInMinutes: e = 15, labelFormat: t = "LT" } = {}) {
        if (e <= 0) throw Error(`intervalInMinutes should be positive number, got ${e}`);
        (this.intervalInMinutes = e), (this.labelFormat = t), this._generateTimeOptions();
    }
    lookupByValue(e) {
        if (null == e) return;
        let t = g(A, e);
        return this._index[t.unix()];
    }
    _createLabel(e) {
        return (0, a.i$)(e.locale(l().locale()), this.labelFormat);
    }
    _generateTimeOptions() {
        (this.options = []), (this._index = {});
        let e = l()(A),
            t = l()(e).add(1, "day"),
            n = l()(e);
        for (; n < t; ) {
            let e = this._createNewOption(n.clone());
            this.options.push(e), (this._index[e.value.unix()] = e.value), n.add(this.intervalInMinutes, "minutes");
        }
    }
    _createNewOption(e) {
        let t = g(A, e),
            n = this._createLabel(t);
        return { id: t.toISOString(), label: n, value: t };
    }
    _addNewOption(e) {
        let t = g(A, e),
            n = this._createLabel(t);
        return (
            (this._index[t.unix()] = t),
            this.options.push({ id: t.toISOString(), label: n, value: t }),
            this.options.sort(_),
            e
        );
    }
    _guessOptions(e) {
        let t = [];
        if (/[:\\.]/.test(e)) {
            let n = m(A, e);
            if (null != n) {
                t.push(n.clone());
                let i = n.add({ hours: 12 });
                i.isBefore(A.clone().add({ hours: 24 })) && h(i.format("LT")) === h(e) && t.push(i);
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
                e.sort(_),
                e
            );
        }
    }
    selectValue(e) {
        let t = this.lookupByValue(e);
        return null == t ? this._addNewOption(e) : t;
    }
}
