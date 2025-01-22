r.d(n, {
    rK: function () {
        return T;
    },
    tR: function () {
        return A;
    },
    tj: function () {
        return v;
    }
});
var i = r(757143);
var a = r(653041);
var o = r(47120);
var s = r(411104);
var l = r(913527),
    u = r.n(l),
    c = r(55935);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = /^[0]+/,
    p = /:00/,
    h = /(AM|ΠΜ|सुबह)/i,
    _ = /(PM|ΜΜ|शाम)/i,
    m = /\s+/,
    g = (e) => e.replace(f, '').replace(p, '').replace(h, '').replace(m, ''),
    E = (e) => e.replace(f, '').replace(_, '').replace(m, ''),
    v = (e, n) => {
        let r = n.toUpperCase().trim();
        if (r.length > 0) {
            let n = u()(''.concat(null == e ? void 0 : e.format('YYYY-MM-DD'), ' ').concat(r), 'YYYY-MM-DD LT');
            if (g(n.format('LT')) === g(r)) return n;
        }
    },
    y = u()('2021-04-12T00:00:00'),
    b = 15,
    I = 'LT',
    T = (e, n) => e.clone().hours(n.hour()).minutes(n.minutes()).seconds(0),
    S = (e, n) => e.value.unix() - n.value.unix();
class A {
    lookupByValue(e) {
        if (null == e) return;
        let n = T(y, e);
        return this._index[n.unix()];
    }
    _createLabel(e) {
        return (0, c.vc)(e.locale(u().locale()), this.labelFormat);
    }
    _generateTimeOptions() {
        (this.options = []), (this._index = {});
        let e = u()(y),
            n = u()(e).add(1, 'day'),
            r = u()(e);
        for (; r < n; ) {
            let e = this._createNewOption(r.clone());
            this.options.push(e), (this._index[e.value.unix()] = e.value), r.add(this.intervalInMinutes, 'minutes');
        }
    }
    _createNewOption(e) {
        let n = T(y, e);
        return {
            label: this._createLabel(n),
            value: n
        };
    }
    _addNewOption(e) {
        let n = T(y, e),
            r = this._createLabel(n);
        return (
            (this._index[n.unix()] = n),
            this.options.push({
                label: r,
                value: n
            }),
            this.options.sort(S),
            e
        );
    }
    _guessOptions(e) {
        let n = [];
        if (/[:\\.]/.test(e)) {
            let r = v(y, e);
            if (null != r) {
                n.push(r.clone());
                let i = r.add({ hours: 12 });
                i.isBefore(y.clone().add({ hours: 24 })) && E(i.format('LT')) === E(e) && n.push(i);
            }
        }
        return n;
    }
    getOptions(e) {
        let n = this._guessOptions(e);
        if (!(n.length > 0)) return this.options;
        {
            let e = [...this.options];
            return (
                n.forEach((n) => {
                    null == this.lookupByValue(n) && e.push(this._createNewOption(n));
                }),
                e.sort(S),
                e
            );
        }
    }
    selectValue(e) {
        let n = this.lookupByValue(e);
        return null == n ? this._addNewOption(e) : n;
    }
    constructor({ intervalInMinutes: e = b, labelFormat: n = I } = {}) {
        if ((d(this, 'intervalInMinutes', void 0), d(this, 'labelFormat', void 0), d(this, 'options', []), d(this, '_index', {}), e <= 0)) throw Error('intervalInMinutes should be positive number, got '.concat(e));
        (this.intervalInMinutes = e), (this.labelFormat = n), this._generateTimeOptions();
    }
}
