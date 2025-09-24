n.d(t, {
    M: () => i,
    S: () => r,
});
class r {
    get childNodes() {
        throw Error("childNodes is not supported");
    }
    clone() {
        let e = new r(this.type, this.key);
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
    constructor(e, t) {
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
            (this.type = e),
            (this.key = t);
    }
}
class i {
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
    removeNode(e) {
        if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
        let t = this.keyMap.get(e);
        null != t && "item" === t.type && this.itemCount--, this.keyMap.delete(e);
    }
    commit(e, t, n = !1) {
        if (this.frozen) throw Error("Cannot commit a frozen collection");
        (this.firstKey = e), (this.lastKey = t), (this.frozen = !n);
    }
    UNSTABLE_filter(e) {
        let t = new i(),
            n = null;
        for (let r of this)
            if ("section" === r.type && r.hasChildNodes) {
                let i = r.clone(),
                    o = null;
                for (let n of this.getChildren(r.key))
                    if (a(n, e, this, t)) {
                        let e = n.clone();
                        null == o && (i.firstChildKey = e.key),
                            null == t.firstKey && (t.firstKey = i.key),
                            o && o.parentKey === e.parentKey
                                ? ((o.nextKey = e.key), (e.prevKey = o.key))
                                : (e.prevKey = null),
                            (e.nextKey = null),
                            t.addNode(e),
                            (o = e);
                    }
                o &&
                    ("header" !== o.type
                        ? ((i.lastChildKey = o.key),
                          null == n
                              ? (i.prevKey = null)
                              : ("section" === n.type || "separator" === n.type) &&
                                ((n.nextKey = i.key), (i.prevKey = n.key)),
                          (i.nextKey = null),
                          (n = i),
                          t.addNode(i))
                        : (t.firstKey === i.key && (t.firstKey = null), t.removeNode(o.key)));
            } else if ("separator" === r.type) {
                let e = r.clone();
                (e.nextKey = null),
                    (null == n ? void 0 : n.type) === "section" &&
                        ((n.nextKey = e.key), (e.prevKey = n.key), (n = e), t.addNode(e));
            } else {
                let i = r.clone();
                a(i, e, this, t) &&
                    (null == t.firstKey && (t.firstKey = i.key),
                    null != n && "section" !== n.type && "separator" !== n.type && n.parentKey === i.parentKey
                        ? ((n.nextKey = i.key), (i.prevKey = n.key))
                        : (i.prevKey = null),
                    (i.nextKey = null),
                    t.addNode(i),
                    (n = i));
            }
        if ((null == n ? void 0 : n.type) === "separator" && null === n.nextKey) {
            let e;
            null != n.prevKey && ((e = t.getItem(n.prevKey)).nextKey = null), t.removeNode(n.key), (n = e);
        }
        return (t.lastKey = (null == n ? void 0 : n.key) || null), t;
    }
    constructor() {
        (this.keyMap = new Map()),
            (this.firstKey = null),
            (this.lastKey = null),
            (this.frozen = !1),
            (this.itemCount = 0);
    }
}
function a(e, t, n, r) {
    if ("subdialogtrigger" === e.type || "submenutrigger" === e.type) {
        let i = [...n.getChildren(e.key)][0];
        if (!(i && t(i.textValue))) return !1;
        {
            let e = i.clone();
            return r.addNode(e), !0;
        }
    }
    return "header" === e.type || t(e.textValue);
}
