n.d(t, {
    n: () => a,
});
var r = n(473411),
    i = n(435987);
class a {
    isDisabled(e) {
        var t;
        return (
            "all" === this.disabledBehavior &&
            ((null == (t = e.props) ? void 0 : t.isDisabled) || this.disabledKeys.has(e.key))
        );
    }
    findNextNonDisabled(e, t) {
        let n = e;
        for (; null != n; ) {
            let e = this.collection.getItem(n);
            if ((null == e ? void 0 : e.type) === "item" && !this.isDisabled(e)) return n;
            n = t(n);
        }
        return null;
    }
    getNextKey(e) {
        let t = e;
        return (t = this.collection.getKeyAfter(t)), this.findNextNonDisabled(t, (e) => this.collection.getKeyAfter(e));
    }
    getPreviousKey(e) {
        let t = e;
        return (
            (t = this.collection.getKeyBefore(t)), this.findNextNonDisabled(t, (e) => this.collection.getKeyBefore(e))
        );
    }
    findKey(e, t, n) {
        let r = e,
            i = this.layoutDelegate.getItemRect(r);
        if (!i || null == r) return null;
        let a = i;
        do {
            if (null == (r = t(r))) break;
            i = this.layoutDelegate.getItemRect(r);
        } while (i && n(a, i) && null != r);
        return r;
    }
    isSameRow(e, t) {
        return e.y === t.y || e.x !== t.x;
    }
    isSameColumn(e, t) {
        return e.x === t.x || e.y !== t.y;
    }
    getKeyBelow(e) {
        return "grid" === this.layout && "vertical" === this.orientation
            ? this.findKey(e, (e) => this.getNextKey(e), this.isSameRow)
            : this.getNextKey(e);
    }
    getKeyAbove(e) {
        return "grid" === this.layout && "vertical" === this.orientation
            ? this.findKey(e, (e) => this.getPreviousKey(e), this.isSameRow)
            : this.getPreviousKey(e);
    }
    getNextColumn(e, t) {
        return t ? this.getPreviousKey(e) : this.getNextKey(e);
    }
    getKeyRightOf(e) {
        let t = "ltr" === this.direction ? "getKeyRightOf" : "getKeyLeftOf";
        if (this.layoutDelegate[t])
            return (e = this.layoutDelegate[t](e)), this.findNextNonDisabled(e, (e) => this.layoutDelegate[t](e));
        if ("grid" === this.layout)
            if ("vertical" === this.orientation) return this.getNextColumn(e, "rtl" === this.direction);
            else return this.findKey(e, (e) => this.getNextColumn(e, "rtl" === this.direction), this.isSameColumn);
        return "horizontal" === this.orientation ? this.getNextColumn(e, "rtl" === this.direction) : null;
    }
    getKeyLeftOf(e) {
        let t = "ltr" === this.direction ? "getKeyLeftOf" : "getKeyRightOf";
        if (this.layoutDelegate[t])
            return (e = this.layoutDelegate[t](e)), this.findNextNonDisabled(e, (e) => this.layoutDelegate[t](e));
        if ("grid" === this.layout)
            if ("vertical" === this.orientation) return this.getNextColumn(e, "ltr" === this.direction);
            else return this.findKey(e, (e) => this.getNextColumn(e, "ltr" === this.direction), this.isSameColumn);
        return "horizontal" === this.orientation ? this.getNextColumn(e, "ltr" === this.direction) : null;
    }
    getFirstKey() {
        let e = this.collection.getFirstKey();
        return this.findNextNonDisabled(e, (e) => this.collection.getKeyAfter(e));
    }
    getLastKey() {
        let e = this.collection.getLastKey();
        return this.findNextNonDisabled(e, (e) => this.collection.getKeyBefore(e));
    }
    getKeyPageAbove(e) {
        let t = this.ref.current,
            n = this.layoutDelegate.getItemRect(e);
        if (!n) return null;
        if (t && !(0, i.o)(t)) return this.getFirstKey();
        let r = e;
        if ("horizontal" === this.orientation) {
            let e = Math.max(0, n.x + n.width - this.layoutDelegate.getVisibleRect().width);
            for (; n && n.x > e && null != r; )
                n = null == (r = this.getKeyAbove(r)) ? null : this.layoutDelegate.getItemRect(r);
        } else {
            let e = Math.max(0, n.y + n.height - this.layoutDelegate.getVisibleRect().height);
            for (; n && n.y > e && null != r; )
                n = null == (r = this.getKeyAbove(r)) ? null : this.layoutDelegate.getItemRect(r);
        }
        return null != r ? r : this.getFirstKey();
    }
    getKeyPageBelow(e) {
        let t = this.ref.current,
            n = this.layoutDelegate.getItemRect(e);
        if (!n) return null;
        if (t && !(0, i.o)(t)) return this.getLastKey();
        let r = e;
        if ("horizontal" === this.orientation) {
            let e = Math.min(
                this.layoutDelegate.getContentSize().width,
                n.y - n.width + this.layoutDelegate.getVisibleRect().width,
            );
            for (; n && n.x < e && null != r; )
                n = null == (r = this.getKeyBelow(r)) ? null : this.layoutDelegate.getItemRect(r);
        } else {
            let e = Math.min(
                this.layoutDelegate.getContentSize().height,
                n.y - n.height + this.layoutDelegate.getVisibleRect().height,
            );
            for (; n && n.y < e && null != r; )
                n = null == (r = this.getKeyBelow(r)) ? null : this.layoutDelegate.getItemRect(r);
        }
        return null != r ? r : this.getLastKey();
    }
    getKeyForSearch(e, t) {
        if (!this.collator) return null;
        let n = this.collection,
            r = t || this.getFirstKey();
        for (; null != r; ) {
            let t = n.getItem(r);
            if (!t) break;
            let i = t.textValue.slice(0, e.length);
            if (t.textValue && 0 === this.collator.compare(i, e)) return r;
            r = this.getNextKey(r);
        }
        return null;
    }
    constructor(...e) {
        if (1 === e.length) {
            let t = e[0];
            (this.collection = t.collection),
                (this.ref = t.ref),
                (this.collator = t.collator),
                (this.disabledKeys = t.disabledKeys || new Set()),
                (this.disabledBehavior = t.disabledBehavior || "all"),
                (this.orientation = t.orientation || "vertical"),
                (this.direction = t.direction),
                (this.layout = t.layout || "stack"),
                (this.layoutDelegate = t.layoutDelegate || new (0, r.K)(t.ref));
        } else
            (this.collection = e[0]),
                (this.disabledKeys = e[1]),
                (this.ref = e[2]),
                (this.collator = e[3]),
                (this.layout = "stack"),
                (this.orientation = "vertical"),
                (this.disabledBehavior = "all"),
                (this.layoutDelegate = new (0, r.K)(this.ref));
        "stack" === this.layout &&
            "vertical" === this.orientation &&
            ((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
    }
}
