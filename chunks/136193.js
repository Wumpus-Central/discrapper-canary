"use strict";
n.d(t, { L: () => l, n: () => o });
var r = n(371926),
    i = n(531684);
let a = "row-header-column-" + Math.random().toString(36).slice(2),
    s = "row-header-column-" + Math.random().toString(36).slice(2);
for (; a === s; ) s = "row-header-column-" + Math.random().toString(36).slice(2);
function o(e, t) {
    if (0 === t.length) return [];
    let n = [],
        r = new Map();
    for (let s of t) {
        let t = s.parentKey,
            o = [s];
        for (; t; ) {
            let n = e.get(t);
            if (!n) break;
            if (r.has(n)) {
                var i, a;
                null != (a = (i = n).colSpan) || (i.colSpan = 0), n.colSpan++, (n.colspan = n.colSpan);
                let { column: e, index: t } = r.get(n);
                if (t > o.length) break;
                for (let n = t; n < o.length; n++) e.splice(n, 0, null);
                for (let t = o.length; t < e.length; t++) e[t] && r.has(e[t]) && (r.get(e[t]).index = t);
            } else (n.colSpan = 1), (n.colspan = 1), o.push(n), r.set(n, { column: o, index: o.length - 1 });
            t = n.parentKey;
        }
        n.push(o), (s.index = n.length - 1);
    }
    let s = Math.max(...n.map((e) => e.length)),
        o = Array(s)
            .fill(0)
            .map(() => []),
        l = 0;
    for (let e of n) {
        let t = s - 1;
        for (let n of e) {
            if (n) {
                let e = o[t],
                    r = e.reduce((e, t) => {
                        var n;
                        return e + (null != (n = t.colSpan) ? n : 1);
                    }, 0);
                if (r < l) {
                    let i = {
                        type: "placeholder",
                        key: "placeholder-" + n.key,
                        colspan: l - r,
                        colSpan: l - r,
                        index: r,
                        value: null,
                        rendered: null,
                        level: t,
                        hasChildNodes: !1,
                        childNodes: [],
                        textValue: "",
                    };
                    e.length > 0 && ((e[e.length - 1].nextKey = i.key), (i.prevKey = e[e.length - 1].key)), e.push(i);
                }
                e.length > 0 && ((e[e.length - 1].nextKey = n.key), (n.prevKey = e[e.length - 1].key)),
                    (n.level = t),
                    (n.colIndex = l),
                    e.push(n);
            }
            t--;
        }
        l++;
    }
    let u = 0;
    for (let e of o) {
        let n = e.reduce((e, t) => {
            var n;
            return e + (null != (n = t.colSpan) ? n : 1);
        }, 0);
        if (n < t.length) {
            let r = {
                type: "placeholder",
                key: "placeholder-" + e[e.length - 1].key,
                colSpan: t.length - n,
                colspan: t.length - n,
                index: n,
                value: null,
                rendered: null,
                level: u,
                hasChildNodes: !1,
                childNodes: [],
                textValue: "",
                prevKey: e[e.length - 1].key,
            };
            e.push(r);
        }
        u++;
    }
    return o.map((e, t) => ({
        type: "headerrow",
        key: "headerrow-" + t,
        index: t,
        value: null,
        rendered: null,
        level: 0,
        hasChildNodes: !0,
        childNodes: e,
        textValue: "",
    }));
}
class l extends i.Z {
    *[Symbol.iterator]() {
        yield* this.body.childNodes;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        var t;
        let n = this.keyMap.get(e);
        return null != (t = null == n ? void 0 : n.prevKey) ? t : null;
    }
    getKeyAfter(e) {
        var t;
        let n = this.keyMap.get(e);
        return null != (t = null == n ? void 0 : n.nextKey) ? t : null;
    }
    getFirstKey() {
        var e, t;
        return null != (t = null == (e = (0, r.ue)(this.body.childNodes)) ? void 0 : e.key) ? t : null;
    }
    getLastKey() {
        var e, t;
        return null != (t = null == (e = (0, r.W)(this.body.childNodes)) ? void 0 : e.key) ? t : null;
    }
    getItem(e) {
        var t;
        return null != (t = this.keyMap.get(e)) ? t : null;
    }
    at(e) {
        let t = [...this.getKeys()];
        return this.getItem(t[e]);
    }
    getChildren(e) {
        return e === this.body.key ? this.body.childNodes : super.getChildren(e);
    }
    getTextValue(e) {
        let t = this.getItem(e);
        if (!t) return "";
        if (t.textValue) return t.textValue;
        let n = this.rowHeaderColumnKeys;
        if (n) {
            let e = [];
            for (let r of t.childNodes) {
                let t = this.columns[r.index];
                if ((n.has(t.key) && r.textValue && e.push(r.textValue), e.length === n.size)) break;
            }
            return e.join(" ");
        }
        return "";
    }
    constructor(e, t, n) {
        let r = new Set(),
            i = null,
            l = [];
        if (null == n ? void 0 : n.showSelectionCheckboxes) {
            let e = {
                type: "column",
                key: a,
                value: null,
                textValue: "",
                level: 0,
                index: +(null != n && !!n.showDragButtons),
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isSelectionCell: !0 },
            };
            l.unshift(e);
        }
        if (null == n ? void 0 : n.showDragButtons) {
            let e = {
                type: "column",
                key: s,
                value: null,
                textValue: "",
                level: 0,
                index: 0,
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isDragButtonCell: !0 },
            };
            l.unshift(e);
        }
        let u = [],
            c = new Map(),
            d = (e) => {
                switch (e.type) {
                    case "body":
                        i = e;
                        break;
                    case "column":
                        c.set(e.key, e), !e.hasChildNodes && (l.push(e), e.props.isRowHeader && r.add(e.key));
                        break;
                    case "item":
                        u.push(e);
                        return;
                }
                for (let t of e.childNodes) d(t);
            };
        for (let t of e) d(t);
        let _ = o(c, l);
        if (
            (_.forEach((e, t) => u.splice(t, 0, e)),
            super({ columnCount: l.length, items: u, visitNode: (e) => ((e.column = l[e.index]), e) }),
            (this._size = 0),
            (this.columns = l),
            (this.rowHeaderColumnKeys = r),
            (this.body = i),
            (this.headerRows = _),
            (this._size = [...i.childNodes].length),
            0 === this.rowHeaderColumnKeys.size)
        ) {
            let e = this.columns.find((e) => {
                var t, n;
                return (
                    !(null == (t = e.props) ? void 0 : t.isDragButtonCell) &&
                    !(null == (n = e.props) ? void 0 : n.isSelectionCell)
                );
            });
            e && this.rowHeaderColumnKeys.add(e.key);
        }
    }
}
