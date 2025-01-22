r.d(n, {
    Z: function () {
        return d;
    },
    q: function () {
        return u;
    }
});
var i = r(239700),
    a = r(192379),
    o = r(989103);
class s extends Set {
    constructor(e, n, r) {
        super(e), e instanceof s ? ((this.anchorKey = n || e.anchorKey), (this.currentKey = r || e.currentKey)) : ((this.anchorKey = n), (this.currentKey = r));
    }
}
function l(e, n) {
    if (e.size !== n.size) return !1;
    for (let r of e) if (!n.has(r)) return !1;
    return !0;
}
function u(e) {
    let { selectionMode: n = 'none', disallowEmptySelection: r, allowDuplicateSelectionEvents: o, selectionBehavior: u = 'toggle', disabledBehavior: d = 'all' } = e,
        f = (0, a.useRef)(!1),
        [, p] = (0, a.useState)(!1),
        h = (0, a.useRef)(null),
        _ = (0, a.useRef)(null),
        [, m] = (0, a.useState)(null),
        g = (0, a.useMemo)(() => c(e.selectedKeys), [e.selectedKeys]),
        E = (0, a.useMemo)(() => c(e.defaultSelectedKeys, new s()), [e.defaultSelectedKeys]),
        [v, y] = (0, i.zk)(g, E, e.onSelectionChange),
        b = (0, a.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        [I, T] = (0, a.useState)(u);
    'replace' === u && 'toggle' === I && 'object' == typeof v && 0 === v.size && T('replace');
    let S = (0, a.useRef)(u);
    return (
        (0, a.useEffect)(() => {
            u !== S.current && (T(u), (S.current = u));
        }, [u]),
        {
            selectionMode: n,
            disallowEmptySelection: r,
            selectionBehavior: I,
            setSelectionBehavior: T,
            get isFocused() {
                return f.current;
            },
            setFocused(e) {
                (f.current = e), p(e);
            },
            get focusedKey() {
                return h.current;
            },
            get childFocusStrategy() {
                return _.current;
            },
            setFocusedKey(e, n = 'first') {
                (h.current = e), (_.current = n), m(e);
            },
            selectedKeys: v,
            setSelectedKeys(e) {
                (o || !l(e, v)) && y(e);
            },
            disabledKeys: b,
            disabledBehavior: d
        }
    );
}
function c(e, n) {
    return e ? ('all' === e ? 'all' : new s(e)) : n;
}
class d {
    get selectionMode() {
        return this.state.selectionMode;
    }
    get disallowEmptySelection() {
        return this.state.disallowEmptySelection;
    }
    get selectionBehavior() {
        return this.state.selectionBehavior;
    }
    setSelectionBehavior(e) {
        this.state.setSelectionBehavior(e);
    }
    get isFocused() {
        return this.state.isFocused;
    }
    setFocused(e) {
        this.state.setFocused(e);
    }
    get focusedKey() {
        return this.state.focusedKey;
    }
    get childFocusStrategy() {
        return this.state.childFocusStrategy;
    }
    setFocusedKey(e, n) {
        (null == e || this.collection.getItem(e)) && this.state.setFocusedKey(e, n);
    }
    get selectedKeys() {
        return 'all' === this.state.selectedKeys ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
    }
    get rawSelection() {
        return this.state.selectedKeys;
    }
    isSelected(e) {
        return 'none' !== this.state.selectionMode && ((e = this.getKey(e)), 'all' === this.state.selectedKeys ? this.canSelectItem(e) : this.state.selectedKeys.has(e));
    }
    get isEmpty() {
        return 'all' !== this.state.selectedKeys && 0 === this.state.selectedKeys.size;
    }
    get isSelectAll() {
        if (this.isEmpty) return !1;
        if ('all' === this.state.selectedKeys) return !0;
        if (null != this._isSelectAll) return this._isSelectAll;
        let e = this.getSelectAllKeys(),
            n = this.state.selectedKeys;
        return (this._isSelectAll = e.every((e) => n.has(e))), this._isSelectAll;
    }
    get firstSelectedKey() {
        let e = null;
        for (let n of this.state.selectedKeys) {
            let r = this.collection.getItem(n);
            (!e || (r && 0 > (0, o.eg)(this.collection, r, e))) && (e = r);
        }
        return null == e ? void 0 : e.key;
    }
    get lastSelectedKey() {
        let e = null;
        for (let n of this.state.selectedKeys) {
            let r = this.collection.getItem(n);
            (!e || (r && (0, o.eg)(this.collection, r, e) > 0)) && (e = r);
        }
        return null == e ? void 0 : e.key;
    }
    get disabledKeys() {
        return this.state.disabledKeys;
    }
    get disabledBehavior() {
        return this.state.disabledBehavior;
    }
    extendSelection(e) {
        let n;
        if ('none' !== this.selectionMode) {
            if ('single' === this.selectionMode) {
                this.replaceSelection(e);
                return;
            }
            if (((e = this.getKey(e)), 'all' === this.state.selectedKeys)) n = new s([e], e, e);
            else {
                let r = this.state.selectedKeys,
                    i = r.anchorKey || e;
                for (let a of ((n = new s(r, i, e)), this.getKeyRange(i, r.currentKey || e))) n.delete(a);
                for (let r of this.getKeyRange(e, i)) this.canSelectItem(r) && n.add(r);
            }
            this.state.setSelectedKeys(n);
        }
    }
    getKeyRange(e, n) {
        let r = this.collection.getItem(e),
            i = this.collection.getItem(n);
        if (r && i) return 0 >= (0, o.eg)(this.collection, r, i) ? this.getKeyRangeInternal(e, n) : this.getKeyRangeInternal(n, e);
        return [];
    }
    getKeyRangeInternal(e, n) {
        let r = [],
            i = e;
        for (; i; ) {
            let e = this.collection.getItem(i);
            if ((((e && 'item' === e.type) || ('cell' === e.type && this.allowsCellSelection)) && r.push(i), i === n)) return r;
            i = this.collection.getKeyAfter(i);
        }
        return [];
    }
    getKey(e) {
        let n = this.collection.getItem(e);
        if (!n || ('cell' === n.type && this.allowsCellSelection)) return e;
        for (; 'item' !== n.type && null != n.parentKey; ) n = this.collection.getItem(n.parentKey);
        return n && 'item' === n.type ? n.key : null;
    }
    toggleSelection(e) {
        if ('none' === this.selectionMode) return;
        if ('single' === this.selectionMode && !this.isSelected(e)) {
            this.replaceSelection(e);
            return;
        }
        if (null == (e = this.getKey(e))) return;
        let n = new s('all' === this.state.selectedKeys ? this.getSelectAllKeys() : this.state.selectedKeys);
        n.has(e) ? n.delete(e) : this.canSelectItem(e) && (n.add(e), (n.anchorKey = e), (n.currentKey = e)), (!this.disallowEmptySelection || 0 !== n.size) && this.state.setSelectedKeys(n);
    }
    replaceSelection(e) {
        if ('none' === this.selectionMode || null == (e = this.getKey(e))) return;
        let n = this.canSelectItem(e) ? new s([e], e, e) : new s();
        this.state.setSelectedKeys(n);
    }
    setSelectedKeys(e) {
        if ('none' === this.selectionMode) return;
        let n = new s();
        for (let r of e) if (null != (r = this.getKey(r)) && (n.add(r), 'single' === this.selectionMode)) break;
        this.state.setSelectedKeys(n);
    }
    getSelectAllKeys() {
        let e = [],
            n = (r) => {
                for (; r; ) {
                    if (this.canSelectItem(r)) {
                        let i = this.collection.getItem(r);
                        'item' === i.type && e.push(r), i.hasChildNodes && (this.allowsCellSelection || 'item' !== i.type) && n((0, o.l8)((0, o._P)(i, this.collection)).key);
                    }
                    r = this.collection.getKeyAfter(r);
                }
            };
        return n(this.collection.getFirstKey()), e;
    }
    selectAll() {
        !this.isSelectAll && 'multiple' === this.selectionMode && this.state.setSelectedKeys('all');
    }
    clearSelection() {
        !this.disallowEmptySelection && ('all' === this.state.selectedKeys || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new s());
    }
    toggleSelectAll() {
        this.isSelectAll ? this.clearSelection() : this.selectAll();
    }
    select(e, n) {
        'none' !== this.selectionMode && ('single' === this.selectionMode ? (this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e)) : 'toggle' === this.selectionBehavior || (n && ('touch' === n.pointerType || 'virtual' === n.pointerType)) ? this.toggleSelection(e) : this.replaceSelection(e));
    }
    isSelectionEqual(e) {
        if (e === this.state.selectedKeys) return !0;
        let n = this.selectedKeys;
        if (e.size !== n.size) return !1;
        for (let r of e) if (!n.has(r)) return !1;
        for (let r of n) if (!e.has(r)) return !1;
        return !0;
    }
    canSelectItem(e) {
        if ('none' === this.state.selectionMode || this.state.disabledKeys.has(e)) return !1;
        let n = this.collection.getItem(e);
        return (!!n && ('cell' !== n.type || !!this.allowsCellSelection)) || !1;
    }
    isDisabled(e) {
        return this.state.disabledKeys.has(e) && 'all' === this.state.disabledBehavior;
    }
    isLink(e) {
        var n, r;
        return !!(null === (r = this.collection.getItem(e)) || void 0 === r ? void 0 : null === (n = r.props) || void 0 === n ? void 0 : n.href);
    }
    constructor(e, n, r) {
        var i;
        (this.collection = e), (this.state = n), (this.allowsCellSelection = null !== (i = null == r ? void 0 : r.allowsCellSelection) && void 0 !== i && i), (this._isSelectAll = null);
    }
}
