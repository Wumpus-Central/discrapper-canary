"use strict";
r.d(t, { Y: () => o });
var n = r(471354),
    i = r(85316);
class o {
    constructor(e, t, r) {
        (this.collection = e),
            (this.state = t),
            (this.allowsCellSelection = r?.allowsCellSelection ?? !1),
            (this._isSelectAll = null),
            (this.layoutDelegate = r?.layoutDelegate || null),
            (this.fullCollection = r?.fullCollection || null);
    }
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
        let e = null;
        for (let t of this.state.selectedKeys) {
            let r = this.collection.getItem(t);
            (!e || (r && 0 > (0, n.o3)(this.collection, r, e))) && (e = r);
        }
        return e?.key ?? null;
    }
    get lastSelectedKey() {
        let e = null;
        for (let t of this.state.selectedKeys) {
            let r = this.collection.getItem(t);
            (!e || (r && (0, n.o3)(this.collection, r, e) > 0)) && (e = r);
        }
        return e?.key ?? null;
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
            if ("all" === this.state.selectedKeys) t = new (0, i.L)([r], r, r);
            else {
                let e = this.state.selectedKeys,
                    n = e.anchorKey ?? r;
                for (let o of ((t = new (0, i.L)(e, n, r)), this.getKeyRange(n, e.currentKey ?? r))) t.delete(o);
                for (let e of this.getKeyRange(r, n)) this.canSelectItem(e) && t.add(e);
            }
            this.state.setSelectedKeys(t);
        }
    }
    getKeyRange(e, t) {
        let r = this.collection.getItem(e),
            i = this.collection.getItem(t);
        return r && i
            ? 0 >= (0, n.o3)(this.collection, r, i)
                ? this.getKeyRangeInternal(e, t)
                : this.getKeyRangeInternal(t, e)
            : [];
    }
    getKeyRangeInternal(e, t) {
        if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(e, t);
        let r = [],
            n = e;
        for (; null != n; ) {
            let e = this.collection.getItem(n);
            if ((e && ("item" === e.type || ("cell" === e.type && this.allowsCellSelection)) && r.push(n), n === t))
                return r;
            n = this.collection.getKeyAfter(n);
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
        let r = new (0, i.L)("all" === this.state.selectedKeys ? this.getSelectAllKeys() : this.state.selectedKeys);
        r.has(t) ? r.delete(t) : this.canSelectItem(t) && (r.add(t), (r.anchorKey = t), (r.currentKey = t)),
            (this.disallowEmptySelection && 0 === r.size) || this.state.setSelectedKeys(r);
    }
    replaceSelection(e) {
        if ("none" === this.selectionMode) return;
        let t = this.getKey(e);
        if (null == t) return;
        let r = this.canSelectItem(t) ? new (0, i.L)([t], t, t) : new (0, i.L)();
        this.state.setSelectedKeys(r);
    }
    setSelectedKeys(e) {
        if ("none" === this.selectionMode) return;
        let t = new (0, i.L)();
        for (let r of e) {
            let e = this.getKey(r);
            if (null != e && (t.add(e), "single" === this.selectionMode)) break;
        }
        this.state.setSelectedKeys(t);
    }
    getSelectAllKeys() {
        let e = this.fullCollection ?? this.collection,
            t = [],
            r = (i) => {
                for (; null != i; ) {
                    if (this.canSelectItemIn(i, e)) {
                        let o = e.getItem(i);
                        o?.type === "item" && t.push(i),
                            o?.hasChildNodes &&
                                (this.allowsCellSelection || "item" !== o.type) &&
                                r((0, n.ue)((0, n.iQ)(o, e))?.key ?? null);
                    }
                    i = e.getKeyAfter(i);
                }
            };
        return r(e.getFirstKey()), t;
    }
    selectAll() {
        this.isSelectAll || "multiple" !== this.selectionMode || this.state.setSelectedKeys("all");
    }
    clearSelection() {
        !this.disallowEmptySelection &&
            ("all" === this.state.selectedKeys || this.state.selectedKeys.size > 0) &&
            this.state.setSelectedKeys(new (0, i.L)());
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
        return this.canSelectItemIn(e, this.collection);
    }
    canSelectItemIn(e, t) {
        if ("none" === this.state.selectionMode || this.state.disabledKeys.has(e)) return !1;
        let r = t.getItem(e);
        return !(!r || r?.props?.isDisabled) && ("cell" !== r.type || !!this.allowsCellSelection);
    }
    isDisabled(e) {
        let t = this.collection.getItem(e);
        return (
            "all" === this.state.disabledBehavior &&
            (this.state.disabledKeys.has(e) || !!t?.props?.isDisabled) &&
            t?.props?.disabledBehavior !== "selection"
        );
    }
    isLink(e) {
        return !!this.collection.getItem(e)?.props?.href;
    }
    getItemProps(e) {
        return this.collection.getItem(e)?.props;
    }
    withCollection(e) {
        return new o(e, this.state, {
            allowsCellSelection: this.allowsCellSelection,
            layoutDelegate: this.layoutDelegate || void 0,
            fullCollection: this.fullCollection ?? this.collection,
        });
    }
}
