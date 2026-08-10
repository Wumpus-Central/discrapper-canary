"use strict";
n.d(t, { c: () => g });
var i = n(477900),
    r = n(582128),
    a = n(783878);
n(321073);
var s = n(989349),
    l = n.n(s),
    o = n(58703);
let d = /^[0]+/,
    c = /:00/,
    u = /(AM|\u03a0\u039c|\u0938\u0941\u092c\u0939)/i,
    _ = /(PM|\u039c\u039c|\u0936\u093e\u092e)/i,
    E = /\s+/;
function A(e) {
    return e.replace(d, "").replace(c, "").replace(u, "").replace(E, "");
}
function h(e) {
    return e.replace(d, "").replace(_, "").replace(E, "");
}
function I(e, t) {
    let n = t.toUpperCase().trim();
    if (n.length > 0) {
        let t = l()(`${e?.format("YYYY-MM-DD")} ${n}`, "YYYY-MM-DD LT");
        if (A(t.format("LT")) === A(n)) return t;
    }
}
let f = l()("2021-04-12T00:00:00");
function p(e, t) {
    return e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0);
}
function T(e, t) {
    return e.value.unix() - t.value.unix();
}
class m {
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
        let t = p(f, e);
        return this._index[t.unix()];
    }
    _createLabel(e) {
        return (0, o.i$)(e.locale(l().locale()), this.labelFormat);
    }
    _generateTimeOptions() {
        (this.options = []), (this._index = {});
        let e = l()(f),
            t = l()(e).add(1, "day"),
            n = l()(e);
        for (; n < t; ) {
            let e = this._createNewOption(n.clone());
            this.options.push(e), (this._index[e.value.unix()] = e.value), n.add(this.intervalInMinutes, "minutes");
        }
    }
    _createNewOption(e) {
        let t = p(f, e),
            n = this._createLabel(t);
        return { id: t.toISOString(), label: n, value: t };
    }
    _addNewOption(e) {
        let t = p(f, e),
            n = this._createLabel(t);
        return (
            (this._index[t.unix()] = t),
            this.options.push({ id: t.toISOString(), label: n, value: t }),
            this.options.sort(T),
            e
        );
    }
    _guessOptions(e) {
        let t = [];
        if (/[:\\.]/.test(e)) {
            let n = I(f, e);
            if (null != n) {
                t.push(n.clone());
                let i = n.add({ hours: 12 });
                i.isBefore(f.clone().add({ hours: 24 })) && h(i.format("LT")) === h(e) && t.push(i);
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
                e.sort(T),
                e
            );
        }
    }
    selectValue(e) {
        let t = this.lookupByValue(e);
        return null == t ? this._addNewOption(e) : t;
    }
}
function g(e) {
    let { value: t, onChange: n, hideValue: s, disabled: l = !1, ...o } = e,
        d = r.useMemo(() => new m(), []),
        [c, u] = r.useState("");
    function _(e) {
        null != t && n(p(t, d.selectValue(e)));
    }
    return (0, i.jsx)(a.Z, {
        ...o,
        selectionMode: "single",
        options: d.getOptions(c),
        value: s ? void 0 : d.lookupByValue(t),
        onSelectionChange: _,
        disabled: l,
        onQueryChange: (e) => u(e.target.value),
        onKeyDown: function (e) {
            if ("Enter" === e.key) {
                let e = I(t, c);
                null != e && _(e);
            }
        },
    });
}
