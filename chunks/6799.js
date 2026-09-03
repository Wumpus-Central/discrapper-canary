r.d(t, { n: () => a });
var n = r(792336),
    i = r(1576),
    o = r(747773);
class a {
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
                (this.layoutDelegate = t.layoutDelegate || new (0, n.K)(t.ref));
        } else
            (this.collection = e[0]),
                (this.disabledKeys = e[1]),
                (this.ref = e[2]),
                (this.collator = e[3]),
                (this.layout = "stack"),
                (this.orientation = "vertical"),
                (this.disabledBehavior = "all"),
                (this.layoutDelegate = new (0, n.K)(this.ref));
        "stack" === this.layout &&
            "vertical" === this.orientation &&
            ((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
    }
    isDisabled(e) {
        return (
            "all" === this.disabledBehavior &&
            (e.props?.isDisabled || this.disabledKeys.has(e.key)) &&
            e.props?.disabledBehavior !== "selection"
        );
    }
    findNextNonDisabled(e, t, r = !1) {
        let n = e;
        for (; null != n; ) {
            let e = this.collection.getItem(n);
            if (e?.type === "item" && (r || !this.isDisabled(e))) return n;
            n = t(n);
        }
        return null;
    }
    getNextKey(e, t) {
        let r = e;
        return (
            (r = this.collection.getKeyAfter(r)),
            this.findNextNonDisabled(r, (e) => this.collection.getKeyAfter(e), t?.includeDisabled)
        );
    }
    getPreviousKey(e, t) {
        let r = e;
        return (
            (r = this.collection.getKeyBefore(r)),
            this.findNextNonDisabled(r, (e) => this.collection.getKeyBefore(e), t?.includeDisabled)
        );
    }
    findKey(e, t, r) {
        let n = e,
            i = this.layoutDelegate.getItemRect(n);
        if (!i || null == n) return null;
        let o = i;
        do {
            if (null == (n = t(n))) break;
            i = this.layoutDelegate.getItemRect(n);
        } while (i && r(o, i) && null != n);
        return n;
    }
    isSameRow(e, t) {
        return e.y === t.y || e.x !== t.x;
    }
    isSameColumn(e, t) {
        return e.x === t.x || e.y !== t.y;
    }
    isReversed(e) {
        let t = this.getNextKey(e),
            r = (0, i.au)(this.ref, e);
        if (null != t) {
            let e = (0, i.au)(this.ref, t);
            return !!r && !!e && r.getBoundingClientRect().top > e.getBoundingClientRect().top;
        }
        let n = this.getPreviousKey(e);
        if (null != n) {
            let e = (0, i.au)(this.ref, n);
            return !!r && !!e && e.getBoundingClientRect().top > r.getBoundingClientRect().top;
        }
        return !1;
    }
    getKeyBelow(e, t) {
        return "grid" === this.layout && "vertical" === this.orientation
            ? this.findKey(e, (e) => this.getNextKey(e, t), this.isSameRow)
            : "vertical" === this.orientation && this.isReversed(e)
              ? this.getPreviousKey(e, t)
              : this.getNextKey(e, t);
    }
    getKeyAbove(e, t) {
        return "grid" === this.layout && "vertical" === this.orientation
            ? this.findKey(e, (e) => this.getPreviousKey(e, t), this.isSameRow)
            : "vertical" === this.orientation && this.isReversed(e)
              ? this.getNextKey(e, t)
              : this.getPreviousKey(e, t);
    }
    getNextColumn(e, t, r) {
        return t ? this.getPreviousKey(e, r) : this.getNextKey(e, r);
    }
    getKeyRightOf(e, t) {
        let r = "ltr" === this.direction ? "getKeyRightOf" : "getKeyLeftOf";
        if (this.layoutDelegate[r])
            return (
                (e = this.layoutDelegate[r](e)),
                this.findNextNonDisabled(e, (e) => this.layoutDelegate[r](e), t?.includeDisabled)
            );
        if ("grid" === this.layout)
            if ("vertical" === this.orientation) return this.getNextColumn(e, "rtl" === this.direction, t);
            else return this.findKey(e, (e) => this.getNextColumn(e, "rtl" === this.direction, t), this.isSameColumn);
        return "horizontal" === this.orientation ? this.getNextColumn(e, "rtl" === this.direction, t) : null;
    }
    getKeyLeftOf(e, t) {
        let r = "ltr" === this.direction ? "getKeyLeftOf" : "getKeyRightOf";
        if (this.layoutDelegate[r])
            return (
                (e = this.layoutDelegate[r](e)),
                this.findNextNonDisabled(e, (e) => this.layoutDelegate[r](e), t?.includeDisabled)
            );
        if ("grid" === this.layout)
            if ("vertical" === this.orientation) return this.getNextColumn(e, "ltr" === this.direction, t);
            else return this.findKey(e, (e) => this.getNextColumn(e, "ltr" === this.direction, t), this.isSameColumn);
        return "horizontal" === this.orientation ? this.getNextColumn(e, "ltr" === this.direction, t) : null;
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
            r = this.layoutDelegate.getItemRect(e);
        if (!r) return null;
        let n = this.isReversed(e);
        if (t && !(0, o.o)(t)) return this.getFirstKey();
        let i = e;
        if ("horizontal" === this.orientation) {
            let e = Math.max(0, r.x + r.width - this.layoutDelegate.getVisibleRect().width);
            for (; r && r.x > e && null != i; )
                r = null == (i = this.getKeyAbove(i)) ? null : this.layoutDelegate.getItemRect(i);
        } else {
            let e = this.layoutDelegate.getVisibleRect(),
                t = n ? r.y - e.height : Math.max(0, r.y + r.height - e.height);
            for (; r && r.y > t && null != i; )
                r = null == (i = this.getKeyAbove(i)) ? null : this.layoutDelegate.getItemRect(i);
        }
        return i ?? (n ? this.getLastKey() : this.getFirstKey());
    }
    getKeyPageBelow(e) {
        let t = this.ref.current,
            r = this.layoutDelegate.getItemRect(e);
        if (!r) return null;
        let n = this.isReversed(e);
        if (t && !(0, o.o)(t)) return this.getLastKey();
        let i = e;
        if ("horizontal" === this.orientation) {
            let e = Math.min(
                this.layoutDelegate.getContentSize().width,
                r.x - r.width + this.layoutDelegate.getVisibleRect().width,
            );
            for (; r && r.x < e && null != i; )
                r = null == (i = this.getKeyBelow(i)) ? null : this.layoutDelegate.getItemRect(i);
        } else {
            let e = Math.min(
                this.layoutDelegate.getContentSize().height,
                r.y - r.height + this.layoutDelegate.getVisibleRect().height,
            );
            for (; r && r.y < e && null != i; )
                r = null == (i = this.getKeyBelow(i)) ? null : this.layoutDelegate.getItemRect(i);
        }
        return i ?? (n ? this.getFirstKey() : this.getLastKey());
    }
    getKeyForSearch(e, t) {
        if (!this.collator) return null;
        let r = this.collection,
            n = t || this.getFirstKey();
        for (; null != n; ) {
            let t = r.getItem(n);
            if (!t) break;
            let i = t.textValue.slice(0, e.length);
            if (t.textValue && 0 === this.collator.compare(i, e)) return n;
            n = this.getNextKey(n);
        }
        return null;
    }
}
