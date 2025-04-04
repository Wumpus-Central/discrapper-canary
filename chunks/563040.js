n.d(t, {
    rK: () => E,
    tR: () => y,
    tj: () => p
}),
    n(757143),
    n(301563),
    n(566702),
    n(653041),
    n(230036),
    n(47120),
    n(411104);
var r = n(913527),
    i = n.n(r),
    o = n(55935);
function a(e, t, n) {
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
let s = /^[0]+/,
    l = /:00/,
    c = /(AM|ΠΜ|सुबह)/i,
    u = /(PM|ΜΜ|शाम)/i,
    d = /\s+/,
    f = (e) => e.replace(s, '').replace(l, '').replace(c, '').replace(d, ''),
    _ = (e) => e.replace(s, '').replace(u, '').replace(d, ''),
    p = (e, t) => {
        let n = t.toUpperCase().trim();
        if (n.length > 0) {
            let t = i()(''.concat(null == e ? void 0 : e.format('YYYY-MM-DD'), ' ').concat(n), 'YYYY-MM-DD LT');
            if (f(t.format('LT')) === f(n)) return t;
        }
    },
    h = i()('2021-04-12T00:00:00'),
    m = 15,
    g = 'LT',
    E = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
    b = (e, t) => e.value.unix() - t.value.unix();
class y {
    lookupByValue(e) {
        if (null == e) return;
        let t = E(h, e);
        return this._index[t.unix()];
    }
    _createLabel(e) {
        return (0, o.vc)(e.locale(i().locale()), this.labelFormat);
    }
    _generateTimeOptions() {
        (this.options = []), (this._index = {});
        let e = i()(h),
            t = i()(e).add(1, 'day'),
            n = i()(e);
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
            this.options.sort(b),
            e
        );
    }
    _guessOptions(e) {
        let t = [];
        if (/[:\\.]/.test(e)) {
            let n = p(h, e);
            if (null != n) {
                t.push(n.clone());
                let r = n.add({ hours: 12 });
                r.isBefore(h.clone().add({ hours: 24 })) && _(r.format('LT')) === _(e) && t.push(r);
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
        if ((a(this, 'intervalInMinutes', void 0), a(this, 'labelFormat', void 0), a(this, 'options', []), a(this, '_index', {}), e <= 0)) throw Error('intervalInMinutes should be positive number, got '.concat(e));
        (this.intervalInMinutes = e), (this.labelFormat = t), this._generateTimeOptions();
    }
}
