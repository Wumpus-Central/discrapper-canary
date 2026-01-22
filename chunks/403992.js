n.d(t, {
    J: () => a,
});
var r = n(473411),
    i = n(371926);
class a {
    isCell(e) {
        return "cell" === e.type;
    }
    isRow(e) {
        return "row" === e.type || "item" === e.type;
    }
    isDisabled(e) {
        var t;
        return (
            "all" === this.disabledBehavior &&
            ((null == (t = e.props) ? void 0 : t.isDisabled) || this.disabledKeys.has(e.key))
        );
    }
    findPreviousKey(e, t) {
        let n = null != e ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
        for (; null != n; ) {
            let e = this.collection.getItem(n);
            if (!e) break;
            if (!this.isDisabled(e) && (!t || t(e))) return n;
            n = this.collection.getKeyBefore(n);
        }
        return null;
    }
    findNextKey(e, t) {
        let n = null != e ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
        for (; null != n; ) {
            let e = this.collection.getItem(n);
            if (!e) break;
            if (!this.isDisabled(e) && (!t || t(e))) return n;
            if (null == (n = this.collection.getKeyAfter(n))) break;
        }
        return null;
    }
    getKeyForItemInRowByIndex(e, t = 0) {
        if (t < 0) return null;
        let n = this.collection.getItem(e);
        if (!n) return null;
        let r = 0;
        for (let e of (0, i.iQ)(n, this.collection)) {
            var a, s;
            if (e.colSpan && e.colSpan + r > t) return null != (a = e.key) ? a : null;
            if ((e.colSpan && (r = r + e.colSpan - 1), r === t)) return null != (s = e.key) ? s : null;
            r++;
        }
        return null;
    }
    getKeyBelow(e) {
        var t;
        let n = e,
            r = this.collection.getItem(n);
        if (!r || (this.isCell(r) && (n = null != (t = r.parentKey) ? t : null), null == n)) return null;
        if (null != (n = this.findNextKey(n, (e) => "item" === e.type))) {
            if (this.isCell(r)) {
                let e = r.colIndex ? r.colIndex : r.index;
                return this.getKeyForItemInRowByIndex(n, e);
            }
            if ("row" === this.focusMode) return n;
        }
        return null;
    }
    getKeyAbove(e) {
        var t;
        let n = e,
            r = this.collection.getItem(n);
        if (!r || (this.isCell(r) && (n = null != (t = r.parentKey) ? t : null), null == n)) return null;
        if (null != (n = this.findPreviousKey(n, (e) => "item" === e.type))) {
            if (this.isCell(r)) {
                let e = r.colIndex ? r.colIndex : r.index;
                return this.getKeyForItemInRowByIndex(n, e);
            }
            if ("row" === this.focusMode) return n;
        }
        return null;
    }
    getKeyRightOf(e) {
        var t, n, r, a, s, o, l;
        let c = this.collection.getItem(e);
        if (!c) return null;
        if (this.isRow(c)) {
            let e = (0, i.iQ)(c, this.collection);
            return null !=
                (r =
                    "rtl" === this.direction
                        ? null == (t = (0, i.W)(e))
                            ? void 0
                            : t.key
                        : null == (n = (0, i.ue)(e))
                          ? void 0
                          : n.key)
                ? r
                : null;
        }
        if (this.isCell(c) && null != c.parentKey) {
            let t = this.collection.getItem(c.parentKey);
            if (!t) return null;
            let n = (0, i.iQ)(t, this.collection),
                r =
                    null != (a = "rtl" === this.direction ? (0, i.cj)(n, c.index - 1) : (0, i.cj)(n, c.index + 1))
                        ? a
                        : null;
            return r
                ? null != (s = r.key)
                    ? s
                    : null
                : "row" === this.focusMode
                  ? null != (o = c.parentKey)
                      ? o
                      : null
                  : null != (l = "rtl" === this.direction ? this.getFirstKey(e) : this.getLastKey(e))
                    ? l
                    : null;
        }
        return null;
    }
    getKeyLeftOf(e) {
        var t, n, r, a, s, o, l;
        let c = this.collection.getItem(e);
        if (!c) return null;
        if (this.isRow(c)) {
            let e = (0, i.iQ)(c, this.collection);
            return null !=
                (r =
                    "rtl" === this.direction
                        ? null == (t = (0, i.ue)(e))
                            ? void 0
                            : t.key
                        : null == (n = (0, i.W)(e))
                          ? void 0
                          : n.key)
                ? r
                : null;
        }
        if (this.isCell(c) && null != c.parentKey) {
            let t = this.collection.getItem(c.parentKey);
            if (!t) return null;
            let n = (0, i.iQ)(t, this.collection),
                r =
                    null != (a = "rtl" === this.direction ? (0, i.cj)(n, c.index + 1) : (0, i.cj)(n, c.index - 1))
                        ? a
                        : null;
            return r
                ? null != (s = r.key)
                    ? s
                    : null
                : "row" === this.focusMode
                  ? null != (o = c.parentKey)
                      ? o
                      : null
                  : null != (l = "rtl" === this.direction ? this.getLastKey(e) : this.getFirstKey(e))
                    ? l
                    : null;
        }
        return null;
    }
    getFirstKey(e, t) {
        var n, r, a, s;
        let o,
            l = null != e ? e : null;
        if (null != l) {
            if (!(o = this.collection.getItem(l))) return null;
            if (this.isCell(o) && !t && null != o.parentKey) {
                let e = this.collection.getItem(o.parentKey);
                return e && null != (r = null == (n = (0, i.ue)((0, i.iQ)(e, this.collection))) ? void 0 : n.key)
                    ? r
                    : null;
            }
        }
        if (
            null != (l = this.findNextKey(void 0, (e) => "item" === e.type)) &&
            ((o && this.isCell(o) && t) || "cell" === this.focusMode)
        ) {
            let e = this.collection.getItem(l);
            if (!e) return null;
            l = null != (s = null == (a = (0, i.ue)((0, i.iQ)(e, this.collection))) ? void 0 : a.key) ? s : null;
        }
        return l;
    }
    getLastKey(e, t) {
        var n, r, a, s;
        let o,
            l = null != e ? e : null;
        if (null != l) {
            if (!(o = this.collection.getItem(l))) return null;
            if (this.isCell(o) && !t && null != o.parentKey) {
                let e = this.collection.getItem(o.parentKey);
                if (!e) return null;
                let t = (0, i.iQ)(e, this.collection);
                return null != (r = null == (n = (0, i.W)(t)) ? void 0 : n.key) ? r : null;
            }
        }
        if (
            null != (l = this.findPreviousKey(void 0, (e) => "item" === e.type)) &&
            ((o && this.isCell(o) && t) || "cell" === this.focusMode)
        ) {
            let e = this.collection.getItem(l);
            if (!e) return null;
            let t = (0, i.iQ)(e, this.collection);
            l = null != (s = null == (a = (0, i.W)(t)) ? void 0 : a.key) ? s : null;
        }
        return l;
    }
    getKeyPageAbove(e) {
        let t = e,
            n = this.layoutDelegate.getItemRect(t);
        if (!n) return null;
        let r = Math.max(0, n.y + n.height - this.layoutDelegate.getVisibleRect().height);
        for (; n && n.y > r && null != t; ) {
            var i;
            if (null == (t = null != (i = this.getKeyAbove(t)) ? i : null)) break;
            n = this.layoutDelegate.getItemRect(t);
        }
        return t;
    }
    getKeyPageBelow(e) {
        let t = e,
            n = this.layoutDelegate.getItemRect(t);
        if (!n) return null;
        let r = this.layoutDelegate.getVisibleRect().height,
            i = Math.min(this.layoutDelegate.getContentSize().height, n.y + r);
        for (; n && n.y + n.height < i; ) {
            let e = this.getKeyBelow(t);
            if (null == e) break;
            (n = this.layoutDelegate.getItemRect(e)), (t = e);
        }
        return t;
    }
    getKeyForSearch(e, t) {
        var n, r, a;
        let s = null != t ? t : null;
        if (!this.collator) return null;
        let o = this.collection;
        if (null == (s = null != t ? t : this.getFirstKey())) return null;
        let l = o.getItem(s);
        if (!l) return null;
        "cell" === l.type && (s = null != (n = l.parentKey) ? n : null);
        let c = !1;
        for (; null != s; ) {
            let t = o.getItem(s);
            if (!t) break;
            if (t.textValue) {
                let n = t.textValue.slice(0, e.length);
                if (0 === this.collator.compare(n, e)) {
                    if (this.isRow(t) && "cell" === this.focusMode)
                        return null != (a = null == (r = (0, i.ue)((0, i.iQ)(t, this.collection))) ? void 0 : r.key)
                            ? a
                            : null;
                    return t.key;
                }
            }
            null != (s = this.findNextKey(s, (e) => "item" === e.type)) || c || ((s = this.getFirstKey()), (c = !0));
        }
        return null;
    }
    constructor(e) {
        var t;
        if (
            ((this.collection = e.collection),
            (this.disabledKeys = e.disabledKeys),
            (this.disabledBehavior = e.disabledBehavior || "all"),
            (this.direction = e.direction),
            (this.collator = e.collator),
            !e.layout && !e.ref)
        )
            throw Error("Either a layout or a ref must be specified.");
        (this.layoutDelegate = e.layoutDelegate || (e.layout ? new s(e.layout) : new (0, r.K)(e.ref))),
            (this.focusMode = null != (t = e.focusMode) ? t : "row");
    }
}
class s {
    getContentSize() {
        return this.layout.getContentSize();
    }
    getItemRect(e) {
        var t;
        return (null == (t = this.layout.getLayoutInfo(e)) ? void 0 : t.rect) || null;
    }
    getVisibleRect() {
        return this.layout.virtualizer.visibleRect;
    }
    constructor(e) {
        this.layout = e;
    }
}
