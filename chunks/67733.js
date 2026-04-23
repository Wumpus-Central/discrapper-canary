"use strict";
n.d(t, { J: () => r });
class r {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        var t;
        let n = this.keyMap.get(e);
        return n && null != (t = n.prevKey) ? t : null;
    }
    getKeyAfter(e) {
        var t;
        let n = this.keyMap.get(e);
        return n && null != (t = n.nextKey) ? t : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(e) {
        var t;
        return null != (t = this.keyMap.get(e)) ? t : null;
    }
    at(e) {
        let t = [...this.getKeys()];
        return this.getItem(t[e]);
    }
    getChildren(e) {
        let t = this.keyMap.get(e);
        return (null == t ? void 0 : t.childNodes) || [];
    }
    constructor(e) {
        var t;
        (this.keyMap = new Map()), (this.firstKey = null), (this.lastKey = null), (this.iterable = e);
        let n = (e) => {
            if ((this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)) for (let t of e.childNodes) n(t);
        };
        for (let t of e) n(t);
        let r = null,
            i = 0,
            s = 0;
        for (let [e, t] of this.keyMap)
            r ? ((r.nextKey = e), (t.prevKey = r.key)) : ((this.firstKey = e), (t.prevKey = void 0)),
                "item" === t.type && (t.index = i++),
                ("section" === t.type || "item" === t.type) && s++,
                ((r = t).nextKey = void 0);
        (this._size = s), (this.lastKey = null != (t = null == r ? void 0 : r.key) ? t : null);
    }
}
