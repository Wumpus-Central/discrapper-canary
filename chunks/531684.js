l.d(t, { Z: () => n });
class n {
    *[Symbol.iterator]() {
        yield* [...this.rows];
    }
    get size() {
        return [...this.rows].length;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        var t;
        let l = this.keyMap.get(e);
        return l && null != (t = l.prevKey) ? t : null;
    }
    getKeyAfter(e) {
        var t;
        let l = this.keyMap.get(e);
        return l && null != (t = l.nextKey) ? t : null;
    }
    getFirstKey() {
        var e;
        return null == (e = [...this.rows][0]) ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        let t = [...this.rows];
        return null == (e = t[t.length - 1]) ? void 0 : e.key;
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
        let t = this.keyMap.get(e);
        return (null == t ? void 0 : t.childNodes) || [];
    }
    constructor(e) {
        (this.keyMap = new Map()),
            (this.keyMap = new Map()),
            (this.columnCount = null == e ? void 0 : e.columnCount),
            (this.rows = []);
        let t = (n) => {
                var o, r, i, s, u;
                let a = this.keyMap.get(n.key);
                e.visitNode && (n = e.visitNode(n)), this.keyMap.set(n.key, n);
                let c = new Set(),
                    d = null,
                    g = !1;
                if ("item" === n.type) {
                    for (let e of n.childNodes)
                        if ((null == (o = e.props) ? void 0 : o.colSpan) !== void 0) {
                            g = !0;
                            break;
                        }
                }
                for (let e of n.childNodes)
                    "cell" === e.type &&
                        g &&
                        ((e.colspan = null == (r = e.props) ? void 0 : r.colSpan),
                        (e.colSpan = null == (i = e.props) ? void 0 : i.colSpan),
                        (e.colIndex = d
                            ? (null != (s = d.colIndex) ? s : d.index) + (null != (u = d.colSpan) ? u : 1)
                            : e.index)),
                        "cell" === e.type && null == e.parentKey && (e.parentKey = n.key),
                        c.add(e.key),
                        d ? ((d.nextKey = e.key), (e.prevKey = d.key)) : (e.prevKey = null),
                        t(e),
                        (d = e);
                if ((d && (d.nextKey = null), a)) for (let e of a.childNodes) c.has(e.key) || l(e);
            },
            l = (e) => {
                for (let t of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(t.key) === t && l(t);
            },
            n = null;
        for (let [l, c] of e.items.entries()) {
            var o, r, i, s, u, a;
            let e = {
                ...c,
                level: null != (o = c.level) ? o : 0,
                key: null != (r = c.key) ? r : "row-" + l,
                type: null != (i = c.type) ? i : "row",
                value: null != (s = c.value) ? s : null,
                hasChildNodes: !0,
                childNodes: [...c.childNodes],
                rendered: c.rendered,
                textValue: null != (u = c.textValue) ? u : "",
                index: null != (a = c.index) ? a : l,
            };
            n ? ((n.nextKey = e.key), (e.prevKey = n.key)) : (e.prevKey = null), this.rows.push(e), t(e), (n = e);
        }
        n && (n.nextKey = null);
    }
}
