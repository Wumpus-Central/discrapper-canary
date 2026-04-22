l.d(t, { h: () => r });
var n = l(371926),
    o = l(403992);
class r extends o.J {
    isCell(e) {
        return "cell" === e.type || "rowheader" === e.type || "column" === e.type;
    }
    getKeyBelow(e) {
        let t = this.collection.getItem(e);
        if (!t) return null;
        if ("column" === t.type) {
            let e = (0, n.ue)((0, n.iQ)(t, this.collection));
            if (e) return e.key;
            let l = this.getFirstKey();
            return null != l && this.collection.getItem(l) ? super.getKeyForItemInRowByIndex(l, t.index) : null;
        }
        return super.getKeyBelow(e);
    }
    getKeyAbove(e) {
        let t = this.collection.getItem(e);
        if (!t) return null;
        if ("column" === t.type) {
            let e = null != t.parentKey ? this.collection.getItem(t.parentKey) : null;
            return e && "column" === e.type ? e.key : null;
        }
        let l = super.getKeyAbove(e),
            n = null != l ? this.collection.getItem(l) : null;
        return n && "headerrow" !== n.type
            ? l
            : this.isCell(t)
              ? this.collection.columns[t.index].key
              : this.collection.columns[0].key;
    }
    findNextColumnKey(e) {
        let t = this.findNextKey(e.key, (e) => "column" === e.type);
        if (null != t) return t;
        let l = this.collection.headerRows[e.level];
        for (let e of (0, n.iQ)(l, this.collection)) if ("column" === e.type) return e.key;
        return null;
    }
    findPreviousColumnKey(e) {
        let t = this.findPreviousKey(e.key, (e) => "column" === e.type);
        if (null != t) return t;
        let l = this.collection.headerRows[e.level],
            o = [...(0, n.iQ)(l, this.collection)];
        for (let e = o.length - 1; e >= 0; e--) {
            let t = o[e];
            if ("column" === t.type) return t.key;
        }
        return null;
    }
    getKeyRightOf(e) {
        let t = this.collection.getItem(e);
        return t
            ? "column" === t.type
                ? "rtl" === this.direction
                    ? this.findPreviousColumnKey(t)
                    : this.findNextColumnKey(t)
                : super.getKeyRightOf(e)
            : null;
    }
    getKeyLeftOf(e) {
        let t = this.collection.getItem(e);
        return t
            ? "column" === t.type
                ? "rtl" === this.direction
                    ? this.findNextColumnKey(t)
                    : this.findPreviousColumnKey(t)
                : super.getKeyLeftOf(e)
            : null;
    }
    getKeyForSearch(e, t) {
        var l;
        if (!this.collator) return null;
        let o = this.collection,
            r = null != t ? t : this.getFirstKey();
        if (null == r) return null;
        let i = o.getItem(r);
        (null == i ? void 0 : i.type) === "cell" && (r = null != (l = i.parentKey) ? l : null);
        let s = !1;
        for (; null != r; ) {
            let l = o.getItem(r);
            if (!l) break;
            if (l.textValue) {
                let t = l.textValue.slice(0, e.length);
                if (0 === this.collator.compare(t, e)) return l.key;
            }
            for (let r of (0, n.iQ)(l, this.collection)) {
                let n = o.columns[r.index];
                if (o.rowHeaderColumnKeys.has(n.key) && r.textValue) {
                    let n = r.textValue.slice(0, e.length);
                    if (0 === this.collator.compare(n, e)) {
                        let e = null != t ? o.getItem(t) : i;
                        return (null == e ? void 0 : e.type) === "cell" ? r.key : l.key;
                    }
                }
            }
            null != (r = this.getKeyBelow(r)) || s || ((r = this.getFirstKey()), (s = !0));
        }
        return null;
    }
}
