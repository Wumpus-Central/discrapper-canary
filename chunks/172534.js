n.d(t, {
    G: () => s,
    J: () => l,
});
var r = n(746047),
    i = n(266310);
let a = "row-header-column-" + Math.random().toString(36).slice(2),
    o = "row-header-column-" + Math.random().toString(36).slice(2);
for (; a === o; ) o = "row-header-column-" + Math.random().toString(36).slice(2);
function s(e, t) {
    if (0 === t.length) return [];
    let n = [],
        r = new Map();
    for (let o of t) {
        let t = o.parentKey,
            s = [o];
        for (; t; ) {
            let n = e.get(t);
            if (!n) break;
            if (r.has(n)) {
                var i, a;
                null != (a = (i = n).colSpan) || (i.colSpan = 0), n.colSpan++, (n.colspan = n.colSpan);
                let { column: e, index: t } = r.get(n);
                if (t > s.length) break;
                for (let n = t; n < s.length; n++) e.splice(n, 0, null);
                for (let t = s.length; t < e.length; t++) e[t] && r.has(e[t]) && (r.get(e[t]).index = t);
            } else
                (n.colSpan = 1),
                    (n.colspan = 1),
                    s.push(n),
                    r.set(n, {
                        column: s,
                        index: s.length - 1,
                    });
            t = n.parentKey;
        }
        n.push(s), (o.index = n.length - 1);
    }
    let o = Math.max(...n.map((e) => e.length)),
        s = Array(o)
            .fill(0)
            .map(() => []),
        l = 0;
    for (let e of n) {
        let t = o - 1;
        for (let n of e) {
            if (n) {
                let e = s[t],
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
    let c = 0;
    for (let e of s) {
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
                level: c,
                hasChildNodes: !1,
                childNodes: [],
                textValue: "",
                prevKey: e[e.length - 1].key,
            };
            e.push(r);
        }
        c++;
    }
    return s.map((e, t) => ({
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
class l extends i.V {
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
        return null != (t = null == (e = (0, r.l8)(this.body.childNodes)) ? void 0 : e.key) ? t : null;
    }
    getLastKey() {
        var e, t;
        return null != (t = null == (e = (0, r.s)(this.body.childNodes)) ? void 0 : e.key) ? t : null;
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
                key: o,
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
        let c = [],
            u = new Map(),
            d = (e) => {
                switch (e.type) {
                    case "body":
                        i = e;
                        break;
                    case "column":
                        u.set(e.key, e), !e.hasChildNodes && (l.push(e), e.props.isRowHeader && r.add(e.key));
                        break;
                    case "item":
                        c.push(e);
                        return;
                }
                for (let t of e.childNodes) d(t);
            };
        for (let t of e) d(t);
        let f = s(u, l);
        if (
            (f.forEach((e, t) => c.splice(t, 0, e)),
            super({
                columnCount: l.length,
                items: c,
                visitNode: (e) => ((e.column = l[e.index]), e),
            }),
            (this._size = 0),
            (this.columns = l),
            (this.rowHeaderColumnKeys = r),
            (this.body = i),
            (this.headerRows = f),
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
