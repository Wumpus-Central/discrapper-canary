a.d(l, { c: () => C });
var t = a(627968),
    o = a(64700),
    n = a(783878);
a(321073);
var i = a(989349),
    r = a.n(i),
    s = a(58703);
let d = /^[0]+/,
    u = /:00/,
    c = /(AM|ΠΜ|सुबह)/i,
    b = /(PM|ΜΜ|शाम)/i,
    p = /\s+/,
    m = (e) => e.replace(d, "").replace(u, "").replace(c, "").replace(p, ""),
    h = (e) => e.replace(d, "").replace(b, "").replace(p, ""),
    x = (e, l) => {
        let a = l.toUpperCase().trim();
        if (a.length > 0) {
            let l = r()(`${e?.format("YYYY-MM-DD")} ${a}`, "YYYY-MM-DD LT");
            if (m(l.format("LT")) === m(a)) return l;
        }
    },
    v = r()("2021-04-12T00:00:00"),
    f = (e, l) => e.clone().hours(l.hour()).minutes(l.minutes()).seconds(0),
    g = (e, l) => e.value.unix() - l.value.unix();
class y {
    intervalInMinutes;
    labelFormat;
    options = [];
    _index = {};
    constructor({ intervalInMinutes: e = 15, labelFormat: l = "LT" } = {}) {
        if (e <= 0) throw Error(`intervalInMinutes should be positive number, got ${e}`);
        (this.intervalInMinutes = e), (this.labelFormat = l), this._generateTimeOptions();
    }
    lookupByValue(e) {
        if (null == e) return;
        let l = f(v, e);
        return this._index[l.unix()];
    }
    _createLabel(e) {
        return (0, s.i$)(e.locale(r().locale()), this.labelFormat);
    }
    _generateTimeOptions() {
        (this.options = []), (this._index = {});
        let e = r()(v),
            l = r()(e).add(1, "day"),
            a = r()(e);
        for (; a < l; ) {
            let e = this._createNewOption(a.clone());
            this.options.push(e), (this._index[e.value.unix()] = e.value), a.add(this.intervalInMinutes, "minutes");
        }
    }
    _createNewOption(e) {
        let l = f(v, e),
            a = this._createLabel(l);
        return { id: l.toISOString(), label: a, value: l };
    }
    _addNewOption(e) {
        let l = f(v, e),
            a = this._createLabel(l);
        return (
            (this._index[l.unix()] = l),
            this.options.push({ id: l.toISOString(), label: a, value: l }),
            this.options.sort(g),
            e
        );
    }
    _guessOptions(e) {
        let l = [];
        if (/[:\\.]/.test(e)) {
            let a = x(v, e);
            if (null != a) {
                l.push(a.clone());
                let t = a.add({ hours: 12 });
                t.isBefore(v.clone().add({ hours: 24 })) && h(t.format("LT")) === h(e) && l.push(t);
            }
        }
        return l;
    }
    getOptions(e) {
        let l = this._guessOptions(e);
        if (!(l.length > 0)) return this.options;
        {
            let e = [...this.options];
            return (
                l.forEach((l) => {
                    null == this.lookupByValue(l) && e.push(this._createNewOption(l));
                }),
                e.sort(g),
                e
            );
        }
    }
    selectValue(e) {
        let l = this.lookupByValue(e);
        return null == l ? this._addNewOption(e) : l;
    }
}
function C(e) {
    let { value: l, onChange: a, hideValue: i, disabled: r = !1, ...s } = e,
        d = o.useMemo(() => new y(), []),
        [u, c] = o.useState("");
    function b(e) {
        null != l && a(f(l, d.selectValue(e)));
    }
    return (0, t.jsx)(n.Z, {
        ...s,
        selectionMode: "single",
        options: d.getOptions(u),
        value: i ? void 0 : d.lookupByValue(l),
        onSelectionChange: b,
        disabled: r,
        onQueryChange: (e) => c(e.target.value),
        onKeyDown: function (e) {
            if ("Enter" === e.key) {
                let e = x(l, u);
                null != e && b(e);
            }
        },
    });
}
