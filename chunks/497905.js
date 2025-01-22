r.d(n, {
    S: function () {
        return s;
    },
    V: function () {
        return l;
    }
});
var i = r(989103),
    a = r(398928),
    o = r(192379);
function s(e) {
    let { collection: n, focusMode: r } = e,
        s = (0, a.q)(e),
        l = (0, o.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        u = s.setFocusedKey;
    s.setFocusedKey = (e, a) => {
        if ('cell' === r && null != e) {
            let r = n.getItem(e);
            if ((null == r ? void 0 : r.type) === 'item') {
                var o, s;
                let l = (0, i._P)(r, n);
                e = 'last' === a ? (null === (o = (0, i.s)(l)) || void 0 === o ? void 0 : o.key) : null === (s = (0, i.l8)(l)) || void 0 === s ? void 0 : s.key;
            }
        }
        u(e, a);
    };
    let c = (0, o.useMemo)(() => new a.Z(n, s), [n, s]),
        d = (0, o.useRef)(null);
    return (
        (0, o.useEffect)(() => {
            if (null != s.focusedKey && !n.getItem(s.focusedKey)) {
                let e;
                let r = d.current.getItem(s.focusedKey),
                    a = null != r.parentKey && ('cell' === r.type || 'rowheader' === r.type || 'column' === r.type) ? d.current.getItem(r.parentKey) : r,
                    o = d.current.rows,
                    l = n.rows,
                    u = o.length - l.length,
                    f = Math.min(u > 1 ? Math.max(a.index - u + 1, 0) : a.index, l.length - 1);
                for (; f >= 0; ) {
                    if (!c.isDisabled(l[f].key) && 'headerrow' !== l[f].type) {
                        e = l[f];
                        break;
                    }
                    f < l.length - 1 ? f++ : (f > a.index && (f = a.index), f--);
                }
                if (e) {
                    let o = e.hasChildNodes ? [...(0, i._P)(e, n)] : [],
                        l = e.hasChildNodes && a !== r && r.index < o.length ? o[r.index].key : e.key;
                    s.setFocusedKey(l);
                } else s.setFocusedKey(null);
            }
            d.current = n;
        }, [n, c, s, s.focusedKey]),
        {
            collection: n,
            disabledKeys: l,
            isKeyboardNavigationDisabled: !1,
            selectionManager: c
        }
    );
}
class l {
    *[Symbol.iterator]() {
        yield* [...this.rows];
    }
    get size() {
        return [...this.rows].length;
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
        var e;
        return null === (e = [...this.rows][0]) || void 0 === e ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        let n = [...this.rows];
        return null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.key;
    }
    getItem(e) {
        return this.keyMap.get(e);
    }
    at(e) {
        let n = [...this.getKeys()];
        return this.getItem(n[e]);
    }
    getChildren(e) {
        let n = this.keyMap.get(e);
        return (null == n ? void 0 : n.childNodes) || [];
    }
    constructor(e) {
        let n;
        (this.keyMap = new Map()), (this.keyMap = new Map()), (this.columnCount = null == e ? void 0 : e.columnCount), (this.rows = []);
        let r = (n) => {
                let a,
                    o = this.keyMap.get(n.key);
                e.visitNode && (n = e.visitNode(n)), this.keyMap.set(n.key, n);
                let s = new Set();
                for (let e of n.childNodes) 'cell' === e.type && null == e.parentKey && (e.parentKey = n.key), s.add(e.key), a ? ((a.nextKey = e.key), (e.prevKey = a.key)) : (e.prevKey = null), r(e), (a = e);
                if ((a && (a.nextKey = null), o)) for (let e of o.childNodes) !s.has(e.key) && i(e);
            },
            i = (e) => {
                for (let n of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(n.key) === n && i(n);
            };
        e.items.forEach((e, i) => {
            let a = {
                level: 0,
                key: 'row-' + i,
                type: 'row',
                value: void 0,
                hasChildNodes: !0,
                childNodes: [...e.childNodes],
                rendered: void 0,
                textValue: void 0,
                ...e
            };
            n ? ((n.nextKey = a.key), (a.prevKey = n.key)) : (a.prevKey = null), this.rows.push(a), r(a), (n = a);
        }),
            n && (n.nextKey = null);
    }
}
