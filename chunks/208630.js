"use strict";
r.d(t, { n: () => o });
var n = r(340231),
    i = r(985847);
class o {
    isDisabled(e) {
        var t;
        return (
            "all" === this.disabledBehavior &&
            ((null == (t = e.props) ? void 0 : t.isDisabled) || this.disabledKeys.has(e.key))
        );
    }
    findNextNonDisabled(e, t) {
        let r = e;
        for (; null != r; ) {
            let e = this.collection.getItem(r);
            if ((null == e ? void 0 : e.type) === "item" && !this.isDisabled(e)) return r;
            r = t(r);
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
            r = this.layoutDelegate.getItemRect(e);
        if (!r) return null;
        if (t && !(0, i.o)(t)) return this.getFirstKey();
        let n = e;
        if ("horizontal" === this.orientation) {
            let e = Math.max(0, r.x + r.width - this.layoutDelegate.getVisibleRect().width);
            for (; r && r.x > e && null != n; )
                r = null == (n = this.getKeyAbove(n)) ? null : this.layoutDelegate.getItemRect(n);
        } else {
            let e = Math.max(0, r.y + r.height - this.layoutDelegate.getVisibleRect().height);
            for (; r && r.y > e && null != n; )
                r = null == (n = this.getKeyAbove(n)) ? null : this.layoutDelegate.getItemRect(n);
        }
        return null != n ? n : this.getFirstKey();
    }
    getKeyPageBelow(e) {
        let t = this.ref.current,
            r = this.layoutDelegate.getItemRect(e);
        if (!r) return null;
        if (t && !(0, i.o)(t)) return this.getLastKey();
        let n = e;
        if ("horizontal" === this.orientation) {
            let e = Math.min(
                this.layoutDelegate.getContentSize().width,
                r.y - r.width + this.layoutDelegate.getVisibleRect().width,
            );
            for (; r && r.x < e && null != n; )
                r = null == (n = this.getKeyBelow(n)) ? null : this.layoutDelegate.getItemRect(n);
        } else {
            let e = Math.min(
                this.layoutDelegate.getContentSize().height,
                r.y - r.height + this.layoutDelegate.getVisibleRect().height,
            );
            for (; r && r.y < e && null != n; )
                r = null == (n = this.getKeyBelow(n)) ? null : this.layoutDelegate.getItemRect(n);
        }
        return null != n ? n : this.getLastKey();
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
}
