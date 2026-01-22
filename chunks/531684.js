n.d(t, { Z: () => r });
class r {
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
        let n = this.keyMap.get(e);
        return n && null != (t = n.prevKey) ? t : null;
    }
    getKeyAfter(e) {
        var t;
        let n = this.keyMap.get(e);
        return n && null != (t = n.nextKey) ? t : null;
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
        let t = (r) => {
                var i, a, s, o, l;
                let c = this.keyMap.get(r.key);
                e.visitNode && (r = e.visitNode(r)), this.keyMap.set(r.key, r);
                let u = new Set(),
                    d = null,
                    f = !1;
                if ("item" === r.type) {
                    for (let e of r.childNodes)
                        if ((null == (i = e.props) ? void 0 : i.colSpan) !== void 0) {
                            f = !0;
                            break;
                        }
                }
                for (let e of r.childNodes)
                    "cell" === e.type &&
                        f &&
                        ((e.colspan = null == (a = e.props) ? void 0 : a.colSpan),
                        (e.colSpan = null == (s = e.props) ? void 0 : s.colSpan),
                        (e.colIndex = d
                            ? (null != (o = d.colIndex) ? o : d.index) + (null != (l = d.colSpan) ? l : 1)
                            : e.index)),
                        "cell" === e.type && null == e.parentKey && (e.parentKey = r.key),
                        u.add(e.key),
                        d ? ((d.nextKey = e.key), (e.prevKey = d.key)) : (e.prevKey = null),
                        t(e),
                        (d = e);
                if ((d && (d.nextKey = null), c)) for (let e of c.childNodes) u.has(e.key) || n(e);
            },
            n = (e) => {
                for (let t of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(t.key) === t && n(t);
            },
            r = null;
        for (let [n, u] of e.items.entries()) {
            var i, a, s, o, l, c;
            let e = {
                ...u,
                level: null != (i = u.level) ? i : 0,
                key: null != (a = u.key) ? a : "row-" + n,
                type: null != (s = u.type) ? s : "row",
                value: null != (o = u.value) ? o : null,
                hasChildNodes: !0,
                childNodes: [...u.childNodes],
                rendered: u.rendered,
                textValue: null != (l = u.textValue) ? l : "",
                index: null != (c = u.index) ? c : n,
            };
            r ? ((r.nextKey = e.key), (e.prevKey = r.key)) : (e.prevKey = null), this.rows.push(e), t(e), (r = e);
        }
        r && (r.nextKey = null);
    }
}
