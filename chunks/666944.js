i.d(t, { c: () => b });
var n = i(627968),
    l = i(64700),
    s = i(783878);
i(321073);
var o = i(989349),
    r = i.n(o),
    u = i(58703);
let a = /^[0]+/,
    p = /:00/,
    h = /(AM|\u03a0\u039c|\u0938\u0941\u092c\u0939)/i,
    c = /(PM|\u039c\u039c|\u0936\u093e\u092e)/i,
    d = /\s+/,
    _ = (e) => e.replace(a, "").replace(p, "").replace(h, "").replace(d, ""),
    f = (e) => e.replace(a, "").replace(c, "").replace(d, ""),
    v = (e, t) => {
        let i = t.toUpperCase().trim();
        if (i.length > 0) {
            let t = r()(`${e?.format("YYYY-MM-DD")} ${i}`, "YYYY-MM-DD LT");
            if (_(t.format("LT")) === _(i)) return t;
        }
    },
    g = r()("2021-04-12T00:00:00"),
    m = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
    O = (e, t) => e.value.unix() - t.value.unix();
class M {
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
        let t = m(g, e);
        return this._index[t.unix()];
    }
    _createLabel(e) {
        return (0, u.i$)(e.locale(r().locale()), this.labelFormat);
    }
    _generateTimeOptions() {
        (this.options = []), (this._index = {});
        let e = r()(g),
            t = r()(e).add(1, "day"),
            i = r()(e);
        for (; i < t; ) {
            let e = this._createNewOption(i.clone());
            this.options.push(e), (this._index[e.value.unix()] = e.value), i.add(this.intervalInMinutes, "minutes");
        }
    }
    _createNewOption(e) {
        let t = m(g, e),
            i = this._createLabel(t);
        return { id: t.toISOString(), label: i, value: t };
    }
    _addNewOption(e) {
        let t = m(g, e),
            i = this._createLabel(t);
        return (
            (this._index[t.unix()] = t),
            this.options.push({ id: t.toISOString(), label: i, value: t }),
            this.options.sort(O),
            e
        );
    }
    _guessOptions(e) {
        let t = [];
        if (/[:\\.]/.test(e)) {
            let i = v(g, e);
            if (null != i) {
                t.push(i.clone());
                let n = i.add({ hours: 12 });
                n.isBefore(g.clone().add({ hours: 24 })) && f(n.format("LT")) === f(e) && t.push(n);
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
                e.sort(O),
                e
            );
        }
    }
    selectValue(e) {
        let t = this.lookupByValue(e);
        return null == t ? this._addNewOption(e) : t;
    }
}
function b(e) {
    let { value: t, onChange: i, hideValue: o, disabled: r = !1, ...u } = e,
        a = l.useMemo(() => new M(), []),
        [p, h] = l.useState("");
    function c(e) {
        null != t && i(m(t, a.selectValue(e)));
    }
    return (0, n.jsx)(s.Z, {
        ...u,
        selectionMode: "single",
        options: a.getOptions(p),
        value: o ? void 0 : a.lookupByValue(t),
        onSelectionChange: c,
        disabled: r,
        onQueryChange: (e) => h(e.target.value),
        onKeyDown: function (e) {
            if ("Enter" === e.key) {
                let e = v(t, p);
                null != e && c(e);
            }
        },
    });
}
