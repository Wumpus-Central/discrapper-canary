n.d(t, { c: () => b });
var i = n(627968),
    o = n(64700),
    l = n(783878);
n(321073);
var s = n(989349),
    r = n.n(s),
    u = n(58703);
let a = /^[0]+/,
    p = /:00/,
    h = /(AM|\u03a0\u039c|\u0938\u0941\u092c\u0939)/i,
    c = /(PM|\u039c\u039c|\u0936\u093e\u092e)/i,
    d = /\s+/;
function f(e) {
    return e.replace(a, "").replace(p, "").replace(h, "").replace(d, "");
}
function _(e) {
    return e.replace(a, "").replace(c, "").replace(d, "");
}
function v(e, t) {
    let n = t.toUpperCase().trim();
    if (n.length > 0) {
        let t = r()(`${e?.format("YYYY-MM-DD")} ${n}`, "YYYY-MM-DD LT");
        if (f(t.format("LT")) === f(n)) return t;
    }
}
let g = r()("2021-04-12T00:00:00");
function m(e, t) {
    return e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0);
}
function O(e, t) {
    return e.value.unix() - t.value.unix();
}
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
            n = r()(e);
        for (; n < t; ) {
            let e = this._createNewOption(n.clone());
            this.options.push(e), (this._index[e.value.unix()] = e.value), n.add(this.intervalInMinutes, "minutes");
        }
    }
    _createNewOption(e) {
        let t = m(g, e),
            n = this._createLabel(t);
        return { id: t.toISOString(), label: n, value: t };
    }
    _addNewOption(e) {
        let t = m(g, e),
            n = this._createLabel(t);
        return (
            (this._index[t.unix()] = t),
            this.options.push({ id: t.toISOString(), label: n, value: t }),
            this.options.sort(O),
            e
        );
    }
    _guessOptions(e) {
        let t = [];
        if (/[:\\.]/.test(e)) {
            let n = v(g, e);
            if (null != n) {
                t.push(n.clone());
                let i = n.add({ hours: 12 });
                i.isBefore(g.clone().add({ hours: 24 })) && _(i.format("LT")) === _(e) && t.push(i);
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
    let { value: t, onChange: n, hideValue: s, disabled: r = !1, ...u } = e,
        a = o.useMemo(() => new M(), []),
        [p, h] = o.useState("");
    function c(e) {
        null != t && n(m(t, a.selectValue(e)));
    }
    return (0, i.jsx)(l.Z, {
        ...u,
        selectionMode: "single",
        options: a.getOptions(p),
        value: s ? void 0 : a.lookupByValue(t),
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
