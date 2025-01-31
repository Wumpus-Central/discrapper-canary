n.d(t, {
    rK: () => E,
    tR: () => y,
    tj: () => p
}),
    n(757143),
    n(653041),
    n(47120),
    n(411104);
var i = n(913527),
    r = n.n(i),
    a = n(55935);
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
let o = /^[0]+/,
    l = /:00/,
    u = /(AM|ΠΜ|सुबह)/i,
    c = /(PM|ΜΜ|शाम)/i,
    d = /\s+/,
    f = (e) => e.replace(o, '').replace(l, '').replace(u, '').replace(d, ''),
    _ = (e) => e.replace(o, '').replace(c, '').replace(d, ''),
    p = (e, t) => {
        let n = t.toUpperCase().trim();
        if (n.length > 0) {
            let t = r()(''.concat(null == e ? void 0 : e.format('YYYY-MM-DD'), ' ').concat(n), 'YYYY-MM-DD LT');
            if (f(t.format('LT')) === f(n)) return t;
        }
    },
    h = r()('2021-04-12T00:00:00'),
    m = 15,
    g = 'LT',
    E = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
    v = (e, t) => e.value.unix() - t.value.unix();
class y {
    lookupByValue(e) {
        if (null == e) return;
        let t = E(h, e);
        return this._index[t.unix()];
    }
    _createLabel(e) {
        return (0, a.vc)(e.locale(r().locale()), this.labelFormat);
    }
    _generateTimeOptions() {
        (this.options = []), (this._index = {});
        let e = r()(h),
            t = r()(e).add(1, 'day'),
            n = r()(e);
        for (; n < t; ) {
            let e = this._createNewOption(n.clone());
            this.options.push(e), (this._index[e.value.unix()] = e.value), n.add(this.intervalInMinutes, 'minutes');
        }
    }
    _createNewOption(e) {
        let t = E(h, e);
        return {
            label: this._createLabel(t),
            value: t
        };
    }
    _addNewOption(e) {
        let t = E(h, e),
            n = this._createLabel(t);
        return (
            (this._index[t.unix()] = t),
            this.options.push({
                label: n,
                value: t
            }),
            this.options.sort(v),
            e
        );
    }
    _guessOptions(e) {
        let t = [];
        if (/[:\\.]/.test(e)) {
            let n = p(h, e);
            if (null != n) {
                t.push(n.clone());
                let i = n.add({ hours: 12 });
                i.isBefore(h.clone().add({ hours: 24 })) && _(i.format('LT')) === _(e) && t.push(i);
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
                e.sort(v),
                e
            );
        }
    }
    selectValue(e) {
        let t = this.lookupByValue(e);
        return null == t ? this._addNewOption(e) : t;
    }
    constructor({ intervalInMinutes: e = m, labelFormat: t = g } = {}) {
        if ((s(this, 'intervalInMinutes', void 0), s(this, 'labelFormat', void 0), s(this, 'options', []), s(this, '_index', {}), e <= 0)) throw Error('intervalInMinutes should be positive number, got '.concat(e));
        (this.intervalInMinutes = e), (this.labelFormat = t), this._generateTimeOptions();
    }
}
