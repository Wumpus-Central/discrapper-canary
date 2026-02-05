"use strict";
n.d(t, { Wb: () => f, Xz: () => g, yz: () => A }), n(321073);
var r = n(989349),
    i = n.n(r),
    a = n(405269);
let s = /^[0]+/,
    o = /:00/,
    l = /(AM|ΠΜ|सुबह)/i,
    u = /(PM|ΜΜ|शाम)/i,
    c = /\s+/,
    d = (e) => e.replace(s, "").replace(o, "").replace(l, "").replace(c, ""),
    _ = (e) => e.replace(s, "").replace(u, "").replace(c, ""),
    f = (e, t) => {
        let n = t.toUpperCase().trim();
        if (n.length > 0) {
            let t = i()(`${e?.format("YYYY-MM-DD")} ${n}`, "YYYY-MM-DD LT");
            if (d(t.format("LT")) === d(n)) return t;
        }
    },
    p = i()("2021-04-12T00:00:00"),
    h = 15,
    m = "LT",
    g = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
    E = (e, t) => e.value.unix() - t.value.unix();
class A {
    intervalInMinutes;
    labelFormat;
    options = [];
    _index = {};
    constructor({ intervalInMinutes: e = h, labelFormat: t = m } = {}) {
        if (e <= 0) throw Error(`intervalInMinutes should be positive number, got ${e}`);
        (this.intervalInMinutes = e), (this.labelFormat = t), this._generateTimeOptions();
    }
    lookupByValue(e) {
        if (null == e) return;
        let t = g(p, e);
        return this._index[t.unix()];
    }
    _createLabel(e) {
        return (0, a.i$)(e.locale(i().locale()), this.labelFormat);
    }
    _generateTimeOptions() {
        (this.options = []), (this._index = {});
        let e = i()(p),
            t = i()(e).add(1, "day"),
            n = i()(e);
        for (; n < t; ) {
            let e = this._createNewOption(n.clone());
            this.options.push(e), (this._index[e.value.unix()] = e.value), n.add(this.intervalInMinutes, "minutes");
        }
    }
    _createNewOption(e) {
        let t = g(p, e),
            n = this._createLabel(t);
        return { id: t.toISOString(), label: n, value: t };
    }
    _addNewOption(e) {
        let t = g(p, e),
            n = this._createLabel(t);
        return (
            (this._index[t.unix()] = t),
            this.options.push({ id: t.toISOString(), label: n, value: t }),
            this.options.sort(E),
            e
        );
    }
    _guessOptions(e) {
        let t = [];
        if (/[:\\.]/.test(e)) {
            let n = f(p, e);
            if (null != n) {
                t.push(n.clone());
                let r = n.add({ hours: 12 });
                r.isBefore(p.clone().add({ hours: 24 })) && _(r.format("LT")) === _(e) && t.push(r);
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
                e.sort(E),
                e
            );
        }
    }
    selectValue(e) {
        let t = this.lookupByValue(e);
        return null == t ? this._addNewOption(e) : t;
    }
}
