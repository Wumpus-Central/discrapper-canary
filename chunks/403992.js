l.d(t, { J: () => r });
var n = l(473411),
    o = l(371926);
class r {
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
        let l = null != e ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
        for (; null != l; ) {
            let e = this.collection.getItem(l);
            if (!e) break;
            if (!this.isDisabled(e) && (!t || t(e))) return l;
            l = this.collection.getKeyBefore(l);
        }
        return null;
    }
    findNextKey(e, t) {
        let l = null != e ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
        for (; null != l; ) {
            let e = this.collection.getItem(l);
            if (!e) break;
            if (!this.isDisabled(e) && (!t || t(e))) return l;
            if (null == (l = this.collection.getKeyAfter(l))) break;
        }
        return null;
    }
    getKeyForItemInRowByIndex(e, t = 0) {
        if (t < 0) return null;
        let l = this.collection.getItem(e);
        if (!l) return null;
        let n = 0;
        for (let e of (0, o.iQ)(l, this.collection)) {
            var r, i;
            if (e.colSpan && e.colSpan + n > t) return null != (r = e.key) ? r : null;
            if ((e.colSpan && (n = n + e.colSpan - 1), n === t)) return null != (i = e.key) ? i : null;
            n++;
        }
        return null;
    }
    getKeyBelow(e) {
        var t;
        let l = e,
            n = this.collection.getItem(l);
        if (!n || (this.isCell(n) && (l = null != (t = n.parentKey) ? t : null), null == l)) return null;
        if (null != (l = this.findNextKey(l, (e) => "item" === e.type))) {
            if (this.isCell(n)) {
                let e = n.colIndex ? n.colIndex : n.index;
                return this.getKeyForItemInRowByIndex(l, e);
            }
            if ("row" === this.focusMode) return l;
        }
        return null;
    }
    getKeyAbove(e) {
        var t;
        let l = e,
            n = this.collection.getItem(l);
        if (!n || (this.isCell(n) && (l = null != (t = n.parentKey) ? t : null), null == l)) return null;
        if (null != (l = this.findPreviousKey(l, (e) => "item" === e.type))) {
            if (this.isCell(n)) {
                let e = n.colIndex ? n.colIndex : n.index;
                return this.getKeyForItemInRowByIndex(l, e);
            }
            if ("row" === this.focusMode) return l;
        }
        return null;
    }
    getKeyRightOf(e) {
        var t, l, n, r, i, s, u;
        let a = this.collection.getItem(e);
        if (!a) return null;
        if (this.isRow(a)) {
            let e = (0, o.iQ)(a, this.collection);
            return null !=
                (n =
                    "rtl" === this.direction
                        ? null == (t = (0, o.W)(e))
                            ? void 0
                            : t.key
                        : null == (l = (0, o.ue)(e))
                          ? void 0
                          : l.key)
                ? n
                : null;
        }
        if (this.isCell(a) && null != a.parentKey) {
            let t = this.collection.getItem(a.parentKey);
            if (!t) return null;
            let l = (0, o.iQ)(t, this.collection),
                n =
                    null != (r = "rtl" === this.direction ? (0, o.cj)(l, a.index - 1) : (0, o.cj)(l, a.index + 1))
                        ? r
                        : null;
            return n
                ? null != (i = n.key)
                    ? i
                    : null
                : "row" === this.focusMode
                  ? null != (s = a.parentKey)
                      ? s
                      : null
                  : null != (u = "rtl" === this.direction ? this.getFirstKey(e) : this.getLastKey(e))
                    ? u
                    : null;
        }
        return null;
    }
    getKeyLeftOf(e) {
        var t, l, n, r, i, s, u;
        let a = this.collection.getItem(e);
        if (!a) return null;
        if (this.isRow(a)) {
            let e = (0, o.iQ)(a, this.collection);
            return null !=
                (n =
                    "rtl" === this.direction
                        ? null == (t = (0, o.ue)(e))
                            ? void 0
                            : t.key
                        : null == (l = (0, o.W)(e))
                          ? void 0
                          : l.key)
                ? n
                : null;
        }
        if (this.isCell(a) && null != a.parentKey) {
            let t = this.collection.getItem(a.parentKey);
            if (!t) return null;
            let l = (0, o.iQ)(t, this.collection),
                n =
                    null != (r = "rtl" === this.direction ? (0, o.cj)(l, a.index + 1) : (0, o.cj)(l, a.index - 1))
                        ? r
                        : null;
            return n
                ? null != (i = n.key)
                    ? i
                    : null
                : "row" === this.focusMode
                  ? null != (s = a.parentKey)
                      ? s
                      : null
                  : null != (u = "rtl" === this.direction ? this.getLastKey(e) : this.getFirstKey(e))
                    ? u
                    : null;
        }
        return null;
    }
    getFirstKey(e, t) {
        var l, n, r, i;
        let s,
            u = null != e ? e : null;
        if (null != u) {
            if (!(s = this.collection.getItem(u))) return null;
            if (this.isCell(s) && !t && null != s.parentKey) {
                let e = this.collection.getItem(s.parentKey);
                return e && null != (n = null == (l = (0, o.ue)((0, o.iQ)(e, this.collection))) ? void 0 : l.key)
                    ? n
                    : null;
            }
        }
        if (
            null != (u = this.findNextKey(void 0, (e) => "item" === e.type)) &&
            ((s && this.isCell(s) && t) || "cell" === this.focusMode)
        ) {
            let e = this.collection.getItem(u);
            if (!e) return null;
            u = null != (i = null == (r = (0, o.ue)((0, o.iQ)(e, this.collection))) ? void 0 : r.key) ? i : null;
        }
        return u;
    }
    getLastKey(e, t) {
        var l, n, r, i;
        let s,
            u = null != e ? e : null;
        if (null != u) {
            if (!(s = this.collection.getItem(u))) return null;
            if (this.isCell(s) && !t && null != s.parentKey) {
                let e = this.collection.getItem(s.parentKey);
                if (!e) return null;
                let t = (0, o.iQ)(e, this.collection);
                return null != (n = null == (l = (0, o.W)(t)) ? void 0 : l.key) ? n : null;
            }
        }
        if (
            null != (u = this.findPreviousKey(void 0, (e) => "item" === e.type)) &&
            ((s && this.isCell(s) && t) || "cell" === this.focusMode)
        ) {
            let e = this.collection.getItem(u);
            if (!e) return null;
            let t = (0, o.iQ)(e, this.collection);
            u = null != (i = null == (r = (0, o.W)(t)) ? void 0 : r.key) ? i : null;
        }
        return u;
    }
    getKeyPageAbove(e) {
        let t = e,
            l = this.layoutDelegate.getItemRect(t);
        if (!l) return null;
        let n = Math.max(0, l.y + l.height - this.layoutDelegate.getVisibleRect().height);
        for (; l && l.y > n && null != t; ) {
            var o;
            if (null == (t = null != (o = this.getKeyAbove(t)) ? o : null)) break;
            l = this.layoutDelegate.getItemRect(t);
        }
        return t;
    }
    getKeyPageBelow(e) {
        let t = e,
            l = this.layoutDelegate.getItemRect(t);
        if (!l) return null;
        let n = this.layoutDelegate.getVisibleRect().height,
            o = Math.min(this.layoutDelegate.getContentSize().height, l.y + n);
        for (; l && l.y + l.height < o; ) {
            let e = this.getKeyBelow(t);
            if (null == e) break;
            (l = this.layoutDelegate.getItemRect(e)), (t = e);
        }
        return t;
    }
    getKeyForSearch(e, t) {
        var l, n, r;
        let i = null != t ? t : null;
        if (!this.collator) return null;
        let s = this.collection;
        if (null == (i = null != t ? t : this.getFirstKey())) return null;
        let u = s.getItem(i);
        if (!u) return null;
        "cell" === u.type && (i = null != (l = u.parentKey) ? l : null);
        let a = !1;
        for (; null != i; ) {
            let t = s.getItem(i);
            if (!t) break;
            if (t.textValue) {
                let l = t.textValue.slice(0, e.length);
                if (0 === this.collator.compare(l, e)) {
                    if (this.isRow(t) && "cell" === this.focusMode)
                        return null != (r = null == (n = (0, o.ue)((0, o.iQ)(t, this.collection))) ? void 0 : n.key)
                            ? r
                            : null;
                    return t.key;
                }
            }
            null != (i = this.findNextKey(i, (e) => "item" === e.type)) || a || ((i = this.getFirstKey()), (a = !0));
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
        (this.layoutDelegate = e.layoutDelegate || (e.layout ? new i(e.layout) : new (0, n.K)(e.ref))),
            (this.focusMode = null != (t = e.focusMode) ? t : "row");
    }
}
class i {
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
