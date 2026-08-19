"use strict";
r.d(t, { Y: () => i });
var n = r(353428),
    o = r(337210);
class i {
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
    setFocusedKey(e, t) {
        (null == e || this.collection.getItem(e)) && this.state.setFocusedKey(e, t);
    }
    get selectedKeys() {
        return "all" === this.state.selectedKeys ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
    }
    get rawSelection() {
        return this.state.selectedKeys;
    }
    isSelected(e) {
        if ("none" === this.state.selectionMode) return !1;
        let t = this.getKey(e);
        return (
            null != t && ("all" === this.state.selectedKeys ? this.canSelectItem(t) : this.state.selectedKeys.has(t))
        );
    }
    get isEmpty() {
        return "all" !== this.state.selectedKeys && 0 === this.state.selectedKeys.size;
    }
    get isSelectAll() {
        if (this.isEmpty) return !1;
        if ("all" === this.state.selectedKeys) return !0;
        if (null != this._isSelectAll) return this._isSelectAll;
        let e = this.getSelectAllKeys(),
            t = this.state.selectedKeys;
        return (this._isSelectAll = e.every((e) => t.has(e))), this._isSelectAll;
    }
    get firstSelectedKey() {
        var e;
        let t = null;
        for (let e of this.state.selectedKeys) {
            let r = this.collection.getItem(e);
            (!t || (r && 0 > (0, o.o3)(this.collection, r, t))) && (t = r);
        }
        return null != (e = null == t ? void 0 : t.key) ? e : null;
    }
    get lastSelectedKey() {
        var e;
        let t = null;
        for (let e of this.state.selectedKeys) {
            let r = this.collection.getItem(e);
            (!t || (r && (0, o.o3)(this.collection, r, t) > 0)) && (t = r);
        }
        return null != (e = null == t ? void 0 : t.key) ? e : null;
    }
    get disabledKeys() {
        return this.state.disabledKeys;
    }
    get disabledBehavior() {
        return this.state.disabledBehavior;
    }
    extendSelection(e) {
        let t;
        if ("none" === this.selectionMode) return;
        if ("single" === this.selectionMode) return void this.replaceSelection(e);
        let r = this.getKey(e);
        if (null != r) {
            if ("all" === this.state.selectedKeys) t = new (0, n.L)([r], r, r);
            else {
                var o, i;
                let e = this.state.selectedKeys,
                    a = null != (o = e.anchorKey) ? o : r;
                for (let o of ((t = new (0, n.L)(e, a, r)), this.getKeyRange(a, null != (i = e.currentKey) ? i : r)))
                    t.delete(o);
                for (let e of this.getKeyRange(r, a)) this.canSelectItem(e) && t.add(e);
            }
            this.state.setSelectedKeys(t);
        }
    }
    getKeyRange(e, t) {
        let r = this.collection.getItem(e),
            n = this.collection.getItem(t);
        return r && n
            ? 0 >= (0, o.o3)(this.collection, r, n)
                ? this.getKeyRangeInternal(e, t)
                : this.getKeyRangeInternal(t, e)
            : [];
    }
    getKeyRangeInternal(e, t) {
        var r;
        if (null == (r = this.layoutDelegate) ? void 0 : r.getKeyRange) return this.layoutDelegate.getKeyRange(e, t);
        let n = [],
            o = e;
        for (; null != o; ) {
            let e = this.collection.getItem(o);
            if ((e && ("item" === e.type || ("cell" === e.type && this.allowsCellSelection)) && n.push(o), o === t))
                return n;
            o = this.collection.getKeyAfter(o);
        }
        return [];
    }
    getKey(e) {
        let t = this.collection.getItem(e);
        if (!t || ("cell" === t.type && this.allowsCellSelection)) return e;
        for (; t && "item" !== t.type && null != t.parentKey; ) t = this.collection.getItem(t.parentKey);
        return t && "item" === t.type ? t.key : null;
    }
    toggleSelection(e) {
        if ("none" === this.selectionMode) return;
        if ("single" === this.selectionMode && !this.isSelected(e)) return void this.replaceSelection(e);
        let t = this.getKey(e);
        if (null == t) return;
        let r = new (0, n.L)("all" === this.state.selectedKeys ? this.getSelectAllKeys() : this.state.selectedKeys);
        r.has(t) ? r.delete(t) : this.canSelectItem(t) && (r.add(t), (r.anchorKey = t), (r.currentKey = t)),
            (this.disallowEmptySelection && 0 === r.size) || this.state.setSelectedKeys(r);
    }
    replaceSelection(e) {
        if ("none" === this.selectionMode) return;
        let t = this.getKey(e);
        if (null == t) return;
        let r = this.canSelectItem(t) ? new (0, n.L)([t], t, t) : new (0, n.L)();
        this.state.setSelectedKeys(r);
    }
    setSelectedKeys(e) {
        if ("none" === this.selectionMode) return;
        let t = new (0, n.L)();
        for (let r of e) {
            let e = this.getKey(r);
            if (null != e && (t.add(e), "single" === this.selectionMode)) break;
        }
        this.state.setSelectedKeys(t);
    }
    getSelectAllKeys() {
        let e = [],
            t = (r) => {
                for (; null != r; ) {
                    if (this.canSelectItem(r)) {
                        var n, i;
                        let a = this.collection.getItem(r);
                        (null == a ? void 0 : a.type) === "item" && e.push(r),
                            (null == a ? void 0 : a.hasChildNodes) &&
                                (this.allowsCellSelection || "item" !== a.type) &&
                                t(
                                    null !=
                                        (i = null == (n = (0, o.ue)((0, o.iQ)(a, this.collection))) ? void 0 : n.key)
                                        ? i
                                        : null,
                                );
                    }
                    r = this.collection.getKeyAfter(r);
                }
            };
        return t(this.collection.getFirstKey()), e;
    }
    selectAll() {
        this.isSelectAll || "multiple" !== this.selectionMode || this.state.setSelectedKeys("all");
    }
    clearSelection() {
        !this.disallowEmptySelection &&
            ("all" === this.state.selectedKeys || this.state.selectedKeys.size > 0) &&
            this.state.setSelectedKeys(new (0, n.L)());
    }
    toggleSelectAll() {
        this.isSelectAll ? this.clearSelection() : this.selectAll();
    }
    select(e, t) {
        "none" !== this.selectionMode &&
            ("single" === this.selectionMode
                ? this.isSelected(e) && !this.disallowEmptySelection
                    ? this.toggleSelection(e)
                    : this.replaceSelection(e)
                : "toggle" === this.selectionBehavior ||
                    (t && ("touch" === t.pointerType || "virtual" === t.pointerType))
                  ? this.toggleSelection(e)
                  : this.replaceSelection(e));
    }
    isSelectionEqual(e) {
        if (e === this.state.selectedKeys) return !0;
        let t = this.selectedKeys;
        if (e.size !== t.size) return !1;
        for (let r of e) if (!t.has(r)) return !1;
        for (let r of t) if (!e.has(r)) return !1;
        return !0;
    }
    canSelectItem(e) {
        var t;
        if ("none" === this.state.selectionMode || this.state.disabledKeys.has(e)) return !1;
        let r = this.collection.getItem(e);
        return (
            !!r &&
            (null == r || null == (t = r.props) || !t.isDisabled) &&
            ("cell" !== r.type || !!this.allowsCellSelection)
        );
    }
    isDisabled(e) {
        var t, r;
        return (
            "all" === this.state.disabledBehavior &&
            (this.state.disabledKeys.has(e) ||
                !!(null == (r = this.collection.getItem(e)) || null == (t = r.props) ? void 0 : t.isDisabled))
        );
    }
    isLink(e) {
        var t, r;
        return !!(null == (r = this.collection.getItem(e)) || null == (t = r.props) ? void 0 : t.href);
    }
    getItemProps(e) {
        var t;
        return null == (t = this.collection.getItem(e)) ? void 0 : t.props;
    }
    withCollection(e) {
        return new i(e, this.state, {
            allowsCellSelection: this.allowsCellSelection,
            layoutDelegate: this.layoutDelegate || void 0,
        });
    }
    constructor(e, t, r) {
        var n;
        (this.collection = e),
            (this.state = t),
            (this.allowsCellSelection = null != (n = null == r ? void 0 : r.allowsCellSelection) && n),
            (this._isSelectAll = null),
            (this.layoutDelegate = (null == r ? void 0 : r.layoutDelegate) || null);
    }
}
