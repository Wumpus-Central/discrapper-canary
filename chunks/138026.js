"use strict";
n.d(t, { n: () => s });
var i = n(473411),
    r = n(435987);
class s {
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
        let i = e,
            r = this.layoutDelegate.getItemRect(i);
        if (!r || null == i) return null;
        let s = r;
        do {
            if (null == (i = t(i))) break;
            r = this.layoutDelegate.getItemRect(i);
        } while (r && n(s, r) && null != i);
        return i;
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
        if (t && !(0, r.o)(t)) return this.getFirstKey();
        let i = e;
        if ("horizontal" === this.orientation) {
            let e = Math.max(0, n.x + n.width - this.layoutDelegate.getVisibleRect().width);
            for (; n && n.x > e && null != i; )
                n = null == (i = this.getKeyAbove(i)) ? null : this.layoutDelegate.getItemRect(i);
        } else {
            let e = Math.max(0, n.y + n.height - this.layoutDelegate.getVisibleRect().height);
            for (; n && n.y > e && null != i; )
                n = null == (i = this.getKeyAbove(i)) ? null : this.layoutDelegate.getItemRect(i);
        }
        return null != i ? i : this.getFirstKey();
    }
    getKeyPageBelow(e) {
        let t = this.ref.current,
            n = this.layoutDelegate.getItemRect(e);
        if (!n) return null;
        if (t && !(0, r.o)(t)) return this.getLastKey();
        let i = e;
        if ("horizontal" === this.orientation) {
            let e = Math.min(
                this.layoutDelegate.getContentSize().width,
                n.y - n.width + this.layoutDelegate.getVisibleRect().width,
            );
            for (; n && n.x < e && null != i; )
                n = null == (i = this.getKeyBelow(i)) ? null : this.layoutDelegate.getItemRect(i);
        } else {
            let e = Math.min(
                this.layoutDelegate.getContentSize().height,
                n.y - n.height + this.layoutDelegate.getVisibleRect().height,
            );
            for (; n && n.y < e && null != i; )
                n = null == (i = this.getKeyBelow(i)) ? null : this.layoutDelegate.getItemRect(i);
        }
        return null != i ? i : this.getLastKey();
    }
    getKeyForSearch(e, t) {
        if (!this.collator) return null;
        let n = this.collection,
            i = t || this.getFirstKey();
        for (; null != i; ) {
            let t = n.getItem(i);
            if (!t) break;
            let r = t.textValue.slice(0, e.length);
            if (t.textValue && 0 === this.collator.compare(r, e)) return i;
            i = this.getNextKey(i);
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
                (this.layoutDelegate = t.layoutDelegate || new (0, i.K)(t.ref));
        } else
            (this.collection = e[0]),
                (this.disabledKeys = e[1]),
                (this.ref = e[2]),
                (this.collator = e[3]),
                (this.layout = "stack"),
                (this.orientation = "vertical"),
                (this.disabledBehavior = "all"),
                (this.layoutDelegate = new (0, i.K)(this.ref));
        "stack" === this.layout &&
            "vertical" === this.orientation &&
            ((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
    }
}
