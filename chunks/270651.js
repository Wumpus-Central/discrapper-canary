"use strict";
r.d(t, { p: () => l, Z: () => u });
class n {
    constructor(e) {
        (this.keyMap = new Map()), (this.firstKey = null), (this.lastKey = null), (this.iterable = e);
        let t = (e) => {
            if ((this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)) for (let r of e.childNodes) t(r);
        };
        for (let r of e) t(r);
        let r = null,
            n = 0,
            i = 0;
        for (let [e, t] of this.keyMap)
            r ? ((r.nextKey = e), (t.prevKey = r.key)) : ((this.firstKey = e), (t.prevKey = void 0)),
                "item" === t.type && (t.index = n++),
                ("section" === t.type || "item" === t.type) && i++,
                ((r = t).nextKey = void 0);
        (this._size = i), (this.lastKey = r?.key ?? null);
    }
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
        let t = this.keyMap.get(e);
        return t ? (t.prevKey ?? null) : null;
    }
    getKeyAfter(e) {
        let t = this.keyMap.get(e);
        return t ? (t.nextKey ?? null) : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(e) {
        return this.keyMap.get(e) ?? null;
    }
    at(e) {
        let t = [...this.getKeys()];
        return this.getItem(t[e]);
    }
    getChildren(e) {
        let t = this.keyMap.get(e);
        return t?.childNodes || [];
    }
}
var i = r(782114),
    o = r(696921),
    a = r(96047),
    s = r(582128);
function l(e) {
    let { filter: t, layoutDelegate: r } = e,
        l = (0, i.R)(e),
        u = (0, s.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        f = (0, s.useCallback)((e) => new n(t ? t(e) : e), [t]),
        d = (0, s.useMemo)(
            () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
            [e.suppressTextValueWarning],
        ),
        p = (0, a.G)(e, f, d),
        h = (0, s.useMemo)(() => new (0, o.Y)(p, l, { layoutDelegate: r }), [p, l, r]);
    return c(p, h), { collection: p, disabledKeys: u, selectionManager: h };
}
function u(e, t) {
    let r = (0, s.useMemo)(() => (t ? e.collection.filter(t) : e.collection), [e.collection, t]),
        n = e.selectionManager.withCollection(r);
    return c(r, n), { collection: r, selectionManager: n, disabledKeys: e.disabledKeys };
}
function c(e, t) {
    let r = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
        if (null != t.focusedKey && !e.getItem(t.focusedKey) && r.current) {
            let n = r.current.getKeyAfter(t.focusedKey),
                i = null;
            for (; null != n; ) {
                let o = e.getItem(n);
                if (o && "item" === o.type && !t.isDisabled(n)) {
                    i = n;
                    break;
                }
                n = r.current.getKeyAfter(n);
            }
            if (null == i)
                for (n = r.current.getKeyBefore(t.focusedKey); null != n; ) {
                    let o = e.getItem(n);
                    if (o && "item" === o.type && !t.isDisabled(n)) {
                        i = n;
                        break;
                    }
                    n = r.current.getKeyBefore(n);
                }
            t.setFocusedKey(i);
        }
        r.current = e;
    }, [e, t]);
}
