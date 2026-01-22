n.d(t, { h: () => a });
var r = n(371926),
    i = n(403992);
class a extends i.J {
    isCell(e) {
        return "cell" === e.type || "rowheader" === e.type || "column" === e.type;
    }
    getKeyBelow(e) {
        let t = this.collection.getItem(e);
        if (!t) return null;
        if ("column" === t.type) {
            let e = (0, r.ue)((0, r.iQ)(t, this.collection));
            if (e) return e.key;
            let n = this.getFirstKey();
            return null != n && this.collection.getItem(n) ? super.getKeyForItemInRowByIndex(n, t.index) : null;
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
        let n = super.getKeyAbove(e),
            r = null != n ? this.collection.getItem(n) : null;
        return r && "headerrow" !== r.type
            ? n
            : this.isCell(t)
              ? this.collection.columns[t.index].key
              : this.collection.columns[0].key;
    }
    findNextColumnKey(e) {
        let t = this.findNextKey(e.key, (e) => "column" === e.type);
        if (null != t) return t;
        let n = this.collection.headerRows[e.level];
        for (let e of (0, r.iQ)(n, this.collection)) if ("column" === e.type) return e.key;
        return null;
    }
    findPreviousColumnKey(e) {
        let t = this.findPreviousKey(e.key, (e) => "column" === e.type);
        if (null != t) return t;
        let n = this.collection.headerRows[e.level],
            i = [...(0, r.iQ)(n, this.collection)];
        for (let e = i.length - 1; e >= 0; e--) {
            let t = i[e];
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
        var n;
        if (!this.collator) return null;
        let i = this.collection,
            a = null != t ? t : this.getFirstKey();
        if (null == a) return null;
        let s = i.getItem(a);
        (null == s ? void 0 : s.type) === "cell" && (a = null != (n = s.parentKey) ? n : null);
        let o = !1;
        for (; null != a; ) {
            let n = i.getItem(a);
            if (!n) break;
            if (n.textValue) {
                let t = n.textValue.slice(0, e.length);
                if (0 === this.collator.compare(t, e)) return n.key;
            }
            for (let a of (0, r.iQ)(n, this.collection)) {
                let r = i.columns[a.index];
                if (i.rowHeaderColumnKeys.has(r.key) && a.textValue) {
                    let r = a.textValue.slice(0, e.length);
                    if (0 === this.collator.compare(r, e)) {
                        let e = null != t ? i.getItem(t) : s;
                        return (null == e ? void 0 : e.type) === "cell" ? a.key : n.key;
                    }
                }
            }
            null != (a = this.getKeyBelow(a)) || o || ((a = this.getFirstKey()), (o = !0));
        }
        return null;
    }
}
