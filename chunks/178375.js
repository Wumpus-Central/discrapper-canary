"use strict";
n.d(t, { OJ: () => s, Pt: () => r, Wk: () => o, _B: () => a, ru: () => i });
class r {
    get childNodes() {
        throw Error("childNodes is not supported");
    }
    clone() {
        let e = new this.constructor(this.key);
        return (
            (e.value = this.value),
            (e.level = this.level),
            (e.hasChildNodes = this.hasChildNodes),
            (e.rendered = this.rendered),
            (e.textValue = this.textValue),
            (e["aria-label"] = this["aria-label"]),
            (e.index = this.index),
            (e.parentKey = this.parentKey),
            (e.prevKey = this.prevKey),
            (e.nextKey = this.nextKey),
            (e.firstChildKey = this.firstChildKey),
            (e.lastChildKey = this.lastChildKey),
            (e.props = this.props),
            (e.render = this.render),
            (e.colSpan = this.colSpan),
            (e.colIndex = this.colIndex),
            e
        );
    }
    filter(e, t, n) {
        let r = this.clone();
        return t.addDescendants(r, e), r;
    }
    constructor(e) {
        (this.value = null),
            (this.level = 0),
            (this.hasChildNodes = !1),
            (this.rendered = null),
            (this.textValue = ""),
            (this["aria-label"] = void 0),
            (this.index = 0),
            (this.parentKey = null),
            (this.prevKey = null),
            (this.nextKey = null),
            (this.firstChildKey = null),
            (this.lastChildKey = null),
            (this.props = {}),
            (this.colSpan = null),
            (this.colIndex = null),
            (this.type = this.constructor.type),
            (this.key = e);
    }
}
class i extends r {
    filter(e, t, n) {
        let [r, i] = l(e, t, this.firstChildKey, n),
            s = this.clone();
        return (s.firstChildKey = r), (s.lastChildKey = i), s;
    }
}
class s extends r {}
s.type = "loader";
class a extends i {
    filter(e, t, n) {
        if (n(this.textValue, this)) {
            let n = this.clone();
            return t.addDescendants(n, e), n;
        }
        return null;
    }
}
a.type = "item";
class o {
    get size() {
        return this.itemCount;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    *[Symbol.iterator]() {
        let e = null != this.firstKey ? this.keyMap.get(this.firstKey) : void 0;
        for (; e; ) yield e, (e = null != e.nextKey ? this.keyMap.get(e.nextKey) : void 0);
    }
    getChildren(e) {
        let t = this.keyMap;
        return {
            *[Symbol.iterator]() {
                let n = t.get(e),
                    r = (null == n ? void 0 : n.firstChildKey) != null ? t.get(n.firstChildKey) : null;
                for (; r; ) yield r, (r = null != r.nextKey ? t.get(r.nextKey) : void 0);
            },
        };
    }
    getKeyBefore(e) {
        let t = this.keyMap.get(e);
        if (!t) return null;
        if (null != t.prevKey) {
            var n;
            for (t = this.keyMap.get(t.prevKey); t && "item" !== t.type && null != t.lastChildKey; )
                t = this.keyMap.get(t.lastChildKey);
            return null != (n = null == t ? void 0 : t.key) ? n : null;
        }
        return t.parentKey;
    }
    getKeyAfter(e) {
        let t = this.keyMap.get(e);
        if (!t) return null;
        if ("item" !== t.type && null != t.firstChildKey) return t.firstChildKey;
        for (; t; ) {
            if (null != t.nextKey) return t.nextKey;
            if (null != t.parentKey) t = this.keyMap.get(t.parentKey);
            else break;
        }
        return null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        var e;
        let t = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
        for (; (null == t ? void 0 : t.lastChildKey) != null; ) t = this.keyMap.get(t.lastChildKey);
        return null != (e = null == t ? void 0 : t.key) ? e : null;
    }
    getItem(e) {
        var t;
        return null != (t = this.keyMap.get(e)) ? t : null;
    }
    at() {
        throw Error("Not implemented");
    }
    clone() {
        let e = new this.constructor();
        return (
            (e.keyMap = new Map(this.keyMap)),
            (e.firstKey = this.firstKey),
            (e.lastKey = this.lastKey),
            (e.itemCount = this.itemCount),
            e
        );
    }
    addNode(e) {
        if (this.frozen) throw Error("Cannot add a node to a frozen collection");
        "item" === e.type && null == this.keyMap.get(e.key) && this.itemCount++, this.keyMap.set(e.key, e);
    }
    addDescendants(e, t) {
        for (let n of (this.addNode(e), t.getChildren(e.key))) this.addDescendants(n, t);
    }
    removeNode(e) {
        if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
        let t = this.keyMap.get(e);
        null != t && "item" === t.type && this.itemCount--, this.keyMap.delete(e);
    }
    commit(e, t, n = !1) {
        if (this.frozen) throw Error("Cannot commit a frozen collection");
        (this.firstKey = e), (this.lastKey = t), (this.frozen = !n);
    }
    filter(e) {
        let t = new this.constructor(),
            [n, r] = l(this, t, this.firstKey, e);
        return null == t || t.commit(n, r), t;
    }
    constructor() {
        (this.keyMap = new Map()),
            (this.firstKey = null),
            (this.lastKey = null),
            (this.frozen = !1),
            (this.itemCount = 0);
    }
}
function l(e, t, n, r) {
    var i, s;
    if (null == n) return [null, null];
    let a = null,
        o = null,
        l = e.getItem(n);
    for (; null != l; ) {
        let n = l.filter(e, t, r);
        null != n &&
            ((n.nextKey = null),
            o && ((n.prevKey = o.key), (o.nextKey = n.key)),
            null == a && (a = n),
            t.addNode(n),
            (o = n)),
            (l = l.nextKey ? e.getItem(l.nextKey) : null);
    }
    if (o && "separator" === o.type) {
        let e = o.prevKey;
        t.removeNode(o.key), e ? ((o = t.getItem(e)).nextKey = null) : (o = null);
    }
    return [null != (i = null == a ? void 0 : a.key) ? i : null, null != (s = null == o ? void 0 : o.key) ? s : null];
}
