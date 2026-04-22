l.d(t, { L: () => u, n: () => s });
var n = l(371926),
    o = l(531684);
let r = "row-header-column-" + Math.random().toString(36).slice(2),
    i = "row-header-column-" + Math.random().toString(36).slice(2);
for (; r === i; ) i = "row-header-column-" + Math.random().toString(36).slice(2);
function s(e, t) {
    if (0 === t.length) return [];
    let l = [],
        n = new Map();
    for (let o of t) {
        let t = o.parentKey,
            r = [o];
        for (; t; ) {
            let l = e.get(t);
            if (!l) break;
            if (n.has(l)) {
                null != l.colSpan || (l.colSpan = 0), l.colSpan++, (l.colspan = l.colSpan);
                let { column: e, index: t } = n.get(l);
                if (t > r.length) break;
                for (let l = t; l < r.length; l++) e.splice(l, 0, null);
                for (let t = r.length; t < e.length; t++) e[t] && n.has(e[t]) && (n.get(e[t]).index = t);
            } else (l.colSpan = 1), (l.colspan = 1), r.push(l), n.set(l, { column: r, index: r.length - 1 });
            t = l.parentKey;
        }
        l.push(r), (o.index = l.length - 1);
    }
    let o = Math.max(...l.map((e) => e.length)),
        r = Array(o)
            .fill(0)
            .map(() => []),
        i = 0;
    for (let e of l) {
        let t = o - 1;
        for (let l of e) {
            if (l) {
                let e = r[t],
                    n = e.reduce((e, t) => {
                        var l;
                        return e + (null != (l = t.colSpan) ? l : 1);
                    }, 0);
                if (n < i) {
                    let o = {
                        type: "placeholder",
                        key: "placeholder-" + l.key,
                        colspan: i - n,
                        colSpan: i - n,
                        index: n,
                        value: null,
                        rendered: null,
                        level: t,
                        hasChildNodes: !1,
                        childNodes: [],
                        textValue: "",
                    };
                    e.length > 0 && ((e[e.length - 1].nextKey = o.key), (o.prevKey = e[e.length - 1].key)), e.push(o);
                }
                e.length > 0 && ((e[e.length - 1].nextKey = l.key), (l.prevKey = e[e.length - 1].key)),
                    (l.level = t),
                    (l.colIndex = i),
                    e.push(l);
            }
            t--;
        }
        i++;
    }
    let s = 0;
    for (let e of r) {
        let l = e.reduce((e, t) => {
            var l;
            return e + (null != (l = t.colSpan) ? l : 1);
        }, 0);
        if (l < t.length) {
            let n = {
                type: "placeholder",
                key: "placeholder-" + e[e.length - 1].key,
                colSpan: t.length - l,
                colspan: t.length - l,
                index: l,
                value: null,
                rendered: null,
                level: s,
                hasChildNodes: !1,
                childNodes: [],
                textValue: "",
                prevKey: e[e.length - 1].key,
            };
            e.push(n);
        }
        s++;
    }
    return r.map((e, t) => ({
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
class u extends o.Z {
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
        let l = this.keyMap.get(e);
        return null != (t = null == l ? void 0 : l.prevKey) ? t : null;
    }
    getKeyAfter(e) {
        var t;
        let l = this.keyMap.get(e);
        return null != (t = null == l ? void 0 : l.nextKey) ? t : null;
    }
    getFirstKey() {
        var e, t;
        return null != (t = null == (e = (0, n.ue)(this.body.childNodes)) ? void 0 : e.key) ? t : null;
    }
    getLastKey() {
        var e, t;
        return null != (t = null == (e = (0, n.W)(this.body.childNodes)) ? void 0 : e.key) ? t : null;
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
        let l = this.rowHeaderColumnKeys;
        if (l) {
            let e = [];
            for (let n of t.childNodes) {
                let t = this.columns[n.index];
                if ((l.has(t.key) && n.textValue && e.push(n.textValue), e.length === l.size)) break;
            }
            return e.join(" ");
        }
        return "";
    }
    constructor(e, t, l) {
        let n = new Set(),
            o = null,
            u = [];
        if (null == l ? void 0 : l.showSelectionCheckboxes) {
            let e = {
                type: "column",
                key: r,
                value: null,
                textValue: "",
                level: 0,
                index: +(null != l && !!l.showDragButtons),
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isSelectionCell: !0 },
            };
            u.unshift(e);
        }
        if (null == l ? void 0 : l.showDragButtons) {
            let e = {
                type: "column",
                key: i,
                value: null,
                textValue: "",
                level: 0,
                index: 0,
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isDragButtonCell: !0 },
            };
            u.unshift(e);
        }
        let a = [],
            c = new Map(),
            d = (e) => {
                switch (e.type) {
                    case "body":
                        o = e;
                        break;
                    case "column":
                        c.set(e.key, e), !e.hasChildNodes && (u.push(e), e.props.isRowHeader && n.add(e.key));
                        break;
                    case "item":
                        a.push(e);
                        return;
                }
                for (let t of e.childNodes) d(t);
            };
        for (let t of e) d(t);
        let g = s(c, u);
        if (
            (g.forEach((e, t) => a.splice(t, 0, e)),
            super({ columnCount: u.length, items: a, visitNode: (e) => ((e.column = u[e.index]), e) }),
            (this._size = 0),
            (this.columns = u),
            (this.rowHeaderColumnKeys = n),
            (this.body = o),
            (this.headerRows = g),
            (this._size = [...o.childNodes].length),
            0 === this.rowHeaderColumnKeys.size)
        ) {
            let e = this.columns.find((e) => {
                var t, l;
                return (
                    !(null == (t = e.props) ? void 0 : t.isDragButtonCell) &&
                    !(null == (l = e.props) ? void 0 : l.isSelectionCell)
                );
            });
            e && this.rowHeaderColumnKeys.add(e.key);
        }
    }
}
