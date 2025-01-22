r.d(n, {
    D: function () {
        return u;
    }
});
var i = r(192379),
    a = r(398928),
    o = r(989103),
    s = r(239700);
class l {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        let n = this.keyMap.get(e);
        return n ? n.prevKey : null;
    }
    getKeyAfter(e) {
        let n = this.keyMap.get(e);
        return n ? n.nextKey : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(e) {
        return this.keyMap.get(e);
    }
    at(e) {
        let n = [...this.getKeys()];
        return this.getItem(n[e]);
    }
    constructor(e, { expandedKeys: n } = {}) {
        let r;
        (this.keyMap = new Map()), (this.iterable = e), (n = n || new Set());
        let i = (e) => {
            if ((this.keyMap.set(e.key, e), e.childNodes && ('section' === e.type || n.has(e.key)))) for (let n of e.childNodes) i(n);
        };
        for (let n of e) i(n);
        let a = 0;
        for (let [e, n] of this.keyMap) r ? ((r.nextKey = e), (n.prevKey = r.key)) : ((this.firstKey = e), (n.prevKey = void 0)), 'item' === n.type && (n.index = a++), ((r = n).nextKey = void 0);
        this.lastKey = null == r ? void 0 : r.key;
    }
}
function u(e) {
    let [n, r] = (0, s.zk)(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(), e.onExpandedChange),
        u = (0, a.q)(e),
        d = (0, i.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        f = (0, o.Kx)(
            e,
            (0, i.useCallback)((e) => new l(e, { expandedKeys: n }), [n]),
            null
        );
    (0, i.useEffect)(() => {
        null != u.focusedKey && !f.getItem(u.focusedKey) && u.setFocusedKey(null);
    }, [f, u.focusedKey]);
    let p = (e) => {
        r(c(n, e));
    };
    return {
        collection: f,
        expandedKeys: n,
        disabledKeys: d,
        toggleKey: p,
        setExpandedKeys: r,
        selectionManager: new a.Z(f, u)
    };
}
function c(e, n) {
    let r = new Set(e);
    return r.has(n) ? r.delete(n) : r.add(n), r;
}
