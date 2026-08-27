l.d(t, { XI: () => eP, VP: () => eW, fI: () => e0, fh: () => e1, BF: () => eY, A0: () => ej });
var n = l(160844),
    o = l(767958),
    r = l(407815),
    i = l(866007),
    s = l(582128);
let a = (0, s.createContext)({}),
    u = (0, s.createContext)(null),
    c = (0, s.forwardRef)(function (e, t) {
        let { render: l } = (0, s.useContext)(u);
        return s.createElement(s.Fragment, null, l(e, t));
    });
var d = l(322284),
    p = l(353509),
    g = l(986664);
class y {
    setup(e, t, l) {
        (this.delegate = e), (this.state = t), (this.direction = l);
    }
    getDropTargetFromPoint(e, t, l) {
        let n = this.delegate.getDropTargetFromPoint(e, t, l);
        return n && "root" !== n.type ? this.resolveDropTarget(n, e, t, l) : n;
    }
    resolveDropTarget(e, t, l, n) {
        let o,
            r = this.pointerTracking,
            i = l - r.lastY,
            s = t - r.lastX,
            a = r.yDirection,
            u = r.xDirection;
        if (
            (Math.abs(i) > 5 && ((r.yDirection = a = i > 0 ? "down" : "up"), (r.lastY = l)),
            Math.abs(s) > 10 && ((r.xDirection = u = s > 0 ? "right" : "left"), (r.lastX = t)),
            "before" === e.dropPosition)
        ) {
            let t = this.state.collection.getKeyBefore(e.key);
            for (; null != t; ) {
                let e = this.state.collection.getItem(t);
                if (e?.type === "item") break;
                t = e?.parentKey ?? null;
            }
            if (null != t) {
                let l = { type: "item", key: t, dropPosition: "after" };
                n(l) && (e = l);
            }
        }
        let c = this.getPotentialTargets(e, n);
        return 0 === c.length
            ? { type: "root" }
            : (c.length > 1 ? (o = this.selectTarget(c, e, t, l, a, u)) : ((o = c[0]), (r.boundaryContext = null)), o);
    }
    getPotentialTargets(e, t) {
        if ("on" === e.dropPosition) return [e];
        let l = this.state.collection,
            n = l.getItem(e.key);
        for (; n && n?.type !== "item" && null != n.nextKey; ) (e.key = n.nextKey), (n = l.getItem(n.nextKey));
        let o = [e];
        if (n && n.hasChildNodes && this.state.expandedKeys.has(n.key) && l.getChildren && "after" === e.dropPosition) {
            let e = null != n.firstChildKey ? l.getItem(n.firstChildKey) : null;
            for (; e && "item" !== e.type; ) e = null != e.nextKey ? l.getItem(e.nextKey) : null;
            if (e?.type === "item") {
                let l = { type: "item", key: e.key, dropPosition: "before" };
                return t(l) ? [l] : [];
            }
        }
        if (n?.nextKey != null) return [e];
        let r = n?.parentKey,
            i = [];
        for (; null != r; ) {
            let e = l.getItem(r),
                n = e?.nextKey != null ? l.getItem(e.nextKey) : null;
            if (!n || n.parentKey !== r) {
                let e = { type: "item", key: r, dropPosition: "after" };
                if ((t(e) && i.push(e), n)) break;
            }
            r = e?.parentKey;
        }
        if ((i.length > 0 && o.push(...i), 1 === o.length)) {
            let o = l.getKeyAfter(e.key),
                r = null != o ? l.getItem(o) : null;
            if (null != o && r && n && null != r.level && null != n.level && r.level > n.level) {
                let e = { type: "item", key: o, dropPosition: "before" };
                if (t(e)) return [e];
            }
        }
        return o.filter(t);
    }
    selectTarget(e, t, l, n, o, r) {
        if (e.length < 2) return e[0];
        let i = this.pointerTracking,
            s = this.state.collection.getItem(t.key),
            a = s?.parentKey;
        if (null == a) return e[0];
        if (!i.boundaryContext || i.boundaryContext.parentKey !== a) {
            let t = "up" === i.yDirection ? e.length - 1 : 0;
            i.boundaryContext = { parentKey: a, preferredTargetIndex: t, lastSwitchY: n, lastSwitchX: l };
        }
        let u = i.boundaryContext,
            c = Math.abs(l - u.lastSwitchX);
        if (Math.abs(n - u.lastSwitchY) > 5 && o) {
            let t = u.preferredTargetIndex || 0;
            "down" === o && 0 === t
                ? (u.preferredTargetIndex = e.length - 1)
                : "up" === o && t === e.length - 1 && (u.preferredTargetIndex = 0),
                (i.xDirection = null);
        }
        if (c > 10 && r) {
            let t = u.preferredTargetIndex || 0;
            "left" === r
                ? "ltr" === this.direction
                    ? t < e.length - 1 && ((u.preferredTargetIndex = t + 1), (u.lastSwitchX = l))
                    : t > 0 && ((u.preferredTargetIndex = t - 1), (u.lastSwitchX = l))
                : "right" === r &&
                  ("ltr" === this.direction
                      ? t > 0 && ((u.preferredTargetIndex = t - 1), (u.lastSwitchX = l))
                      : t < e.length - 1 && ((u.preferredTargetIndex = t + 1), (u.lastSwitchX = l))),
                (i.yDirection = null);
        }
        let d = Math.max(0, Math.min(u.preferredTargetIndex || 0, e.length - 1));
        return e[d];
    }
    constructor() {
        (this.delegate = null),
            (this.state = null),
            (this.direction = "ltr"),
            (this.pointerTracking = { lastY: 0, lastX: 0, yDirection: null, xDirection: null, boundaryContext: null });
    }
}
var h = l(886721),
    m = l(471354);
class f {
    constructor(e) {
        (this.keyMap = new Map()), (this.keyMap = new Map()), (this.columnCount = e?.columnCount), (this.rows = []);
        let t = (n) => {
                let o = this.keyMap.get(n.key);
                e.visitNode && (n = e.visitNode(n)), this.keyMap.set(n.key, n);
                let r = new Set(),
                    i = null,
                    s = !1;
                if ("item" === n.type) {
                    for (let e of n.childNodes)
                        if (e.props?.colSpan !== void 0) {
                            s = !0;
                            break;
                        }
                }
                for (let e of n.childNodes)
                    "cell" === e.type &&
                        s &&
                        ((e.colspan = e.props?.colSpan),
                        (e.colSpan = e.props?.colSpan),
                        (e.colIndex = i ? (i.colIndex ?? i.index) + (i.colSpan ?? 1) : e.index)),
                        "cell" === e.type && null == e.parentKey && (e.parentKey = n.key),
                        r.add(e.key),
                        i ? ((i.nextKey = e.key), (e.prevKey = i.key)) : (e.prevKey = null),
                        t(e),
                        (i = e);
                if ((i && (i.nextKey = null), o)) for (let e of o.childNodes) r.has(e.key) || l(e);
            },
            l = (e) => {
                for (let t of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(t.key) === t && l(t);
            },
            n = null;
        for (let [l, o] of e.items.entries()) {
            let e = {
                ...o,
                level: o.level ?? 0,
                key: o.key ?? "row-" + l,
                type: o.type ?? "row",
                value: o.value ?? null,
                hasChildNodes: !0,
                childNodes: [...o.childNodes],
                rendered: o.rendered,
                textValue: o.textValue ?? "",
                index: o.index ?? l,
            };
            n ? ((n.nextKey = e.key), (e.prevKey = n.key)) : (e.prevKey = null), this.rows.push(e), t(e), (n = e);
        }
        n && (n.nextKey = null);
    }
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
        let t = this.keyMap.get(e);
        return t ? (t.prevKey ?? null) : null;
    }
    getKeyAfter(e) {
        let t = this.keyMap.get(e);
        return t ? (t.nextKey ?? null) : null;
    }
    getFirstKey() {
        return [...this.rows][0]?.key;
    }
    getLastKey() {
        let e = [...this.rows];
        return e[e.length - 1]?.key;
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
let v = "row-header-column-" + Math.random().toString(36).slice(2),
    b = "row-header-column-" + Math.random().toString(36).slice(2);
for (; v === b; ) b = "row-header-column-" + Math.random().toString(36).slice(2);
function k(e, t) {
    if (0 === t.length) return [];
    let l = [],
        n = new Map();
    for (let o of t) {
        let t = o.parentKey,
            r = [o];
        for (; null != t; ) {
            let l = e.get(t);
            if (!l) break;
            if (n.has(l)) {
                (l.colSpan ??= 0), l.colSpan++, (l.colspan = l.colSpan);
                let { column: e, index: t } = n.get(l);
                if (t > r.length) break;
                for (let l = t; l < r.length; l++) e.splice(l, 0, null);
                for (let t = r.length; t < e.length; t++) e[t] && n.has(e[t]) && (n.get(e[t]).index = t);
            } else (l.colSpan = 1), (l.colspan = 1), r.push(l), n.set(l, { column: r, index: r.length - 1 });
            t = l.parentKey;
        }
        l.push(r), (o.index = l.length - 1);
    }
    let o = Math.max(...l.map((e) => e.length)),
        r = Array(o)
            .fill(0)
            .map(() => []),
        i = 0;
    for (let e of l) {
        let t = o - 1;
        for (let l of e) {
            if (l) {
                let e = r[t],
                    n = e.reduce((e, t) => e + (t.colSpan ?? 1), 0);
                if (n < i) {
                    let o = {
                        type: "placeholder",
                        key: "placeholder-" + l.key,
                        colspan: i - n,
                        colSpan: i - n,
                        index: n,
                        value: null,
                        rendered: null,
                        level: t,
                        hasChildNodes: !1,
                        childNodes: [],
                        textValue: "",
                    };
                    e.length > 0 && ((e[e.length - 1].nextKey = o.key), (o.prevKey = e[e.length - 1].key)), e.push(o);
                }
                e.length > 0 && ((e[e.length - 1].nextKey = l.key), (l.prevKey = e[e.length - 1].key)),
                    (l.level = t),
                    (l.colIndex = i),
                    e.push(l);
            }
            t--;
        }
        i++;
    }
    let s = 0;
    for (let e of r) {
        let l = e.reduce((e, t) => e + (t.colSpan ?? 1), 0);
        if (l < t.length) {
            let n = {
                type: "placeholder",
                key: "placeholder-" + e[e.length - 1].key,
                colSpan: t.length - l,
                colspan: t.length - l,
                index: l,
                value: null,
                rendered: null,
                level: s,
                hasChildNodes: !1,
                childNodes: [],
                textValue: "",
                prevKey: e[e.length - 1].key,
            };
            e.push(n);
        }
        s++;
    }
    return r.map((e, t) => ({
        type: "headerrow",
        key: "headerrow-" + t,
        index: t,
        value: null,
        rendered: null,
        level: 0,
        hasChildNodes: !0,
        childNodes: e,
        textValue: "",
    }));
}
class x extends f {
    constructor(e, t, l) {
        let n = new Set(),
            o = null,
            r = [];
        if (l?.showSelectionCheckboxes) {
            let e = {
                type: "column",
                key: v,
                value: null,
                textValue: "",
                level: 0,
                index: +!!l?.showDragButtons,
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isSelectionCell: !0 },
            };
            r.unshift(e);
        }
        if (l?.showDragButtons) {
            let e = {
                type: "column",
                key: b,
                value: null,
                textValue: "",
                level: 0,
                index: 0,
                hasChildNodes: !1,
                rendered: null,
                childNodes: [],
                props: { isDragButtonCell: !0 },
            };
            r.unshift(e);
        }
        let i = [],
            s = new Map(),
            a = (e) => {
                switch (e.type) {
                    case "body":
                        o = e;
                        break;
                    case "column":
                        s.set(e.key, e), !e.hasChildNodes && (r.push(e), e.props.isRowHeader && n.add(e.key));
                        break;
                    case "item":
                        i.push(e);
                        return;
                }
                for (let t of e.childNodes) a(t);
            };
        for (let t of e) a(t);
        let u = k(s, r);
        if (
            (u.forEach((e, t) => i.splice(t, 0, e)),
            super({ columnCount: r.length, items: i, visitNode: (e) => ((e.column = r[e.index]), e) }),
            (this._size = 0),
            (this.columns = r),
            (this.rowHeaderColumnKeys = n),
            (this.body = o),
            (this.headerRows = u),
            (this._size = [...o.childNodes].length),
            0 === this.rowHeaderColumnKeys.size)
        ) {
            let e = this.columns.find((e) => !e.props?.isDragButtonCell && !e.props?.isSelectionCell);
            e && this.rowHeaderColumnKeys.add(e.key);
        }
    }
    *[Symbol.iterator]() {
        yield* this.body.childNodes;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        let t = this.keyMap.get(e);
        return t?.prevKey ?? null;
    }
    getKeyAfter(e) {
        let t = this.keyMap.get(e);
        return t?.nextKey ?? null;
    }
    getFirstKey() {
        return (0, m.ue)(this.body.childNodes)?.key ?? null;
    }
    getLastKey() {
        return (0, m.W)(this.body.childNodes)?.key ?? null;
    }
    getItem(e) {
        return e === this.body.key ? this.body : (this.keyMap.get(e) ?? null);
    }
    at(e) {
        let t = [...this.getKeys()];
        return this.getItem(t[e]);
    }
    getChildren(e) {
        if (e === this.body.key) return this.body.childNodes;
        let t = this.getItem(e);
        return t?.type === "item" ? [...t.childNodes].filter((e) => "cell" === e.type) : super.getChildren(e);
    }
    getTextValue(e) {
        let t = this.getItem(e);
        if (!t) return "";
        if (t.textValue) return t.textValue;
        let l = this.rowHeaderColumnKeys;
        if (l) {
            let e = [];
            for (let n of t.childNodes) {
                let t = this.columns[n.index];
                if ((l.has(t.key) && n.textValue && e.push(n.textValue), e.length === l.size)) break;
            }
            return e.join(" ");
        }
        return "";
    }
}
var C = l(516046),
    K = l(961082),
    w = l(117530),
    S = l(253365),
    D = l(6799),
    E = l(216744),
    z = l(184093),
    A = l(814204);
l(333007);
var N = l(782114),
    I = l(696921),
    P = l(96047),
    M = l(526739);
let B = { ascending: "descending", descending: "ascending" };
var $ = l(592288),
    F = l(288378),
    R = l(500731),
    T = l(366632),
    V = l(475921),
    j = l(4085),
    H = l(256062),
    L = l(792336);
class U {
    constructor(e) {
        if (
            ((this.collection = e.collection),
            (this.disabledKeys = e.disabledKeys),
            (this.disabledBehavior = e.disabledBehavior || "all"),
            (this.direction = e.direction),
            (this.collator = e.collator),
            !e.layout && !e.ref)
        )
            throw Error("Either a layout or a ref must be specified.");
        (this.layoutDelegate = e.layoutDelegate || (e.layout ? new O(e.layout) : new (0, L.K)(e.ref))),
            (this.focusMode = e.focusMode ?? "row");
    }
    isCell(e) {
        return "cell" === e.type;
    }
    isRow(e) {
        return "row" === e.type || "item" === e.type;
    }
    isDisabled(e) {
        return (
            "all" === this.disabledBehavior &&
            (e.props?.isDisabled || this.disabledKeys.has(e.key)) &&
            e.props?.disabledBehavior !== "selection"
        );
    }
    findPreviousKey(e, t, l = !1) {
        let n = null != e ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
        for (; null != n; ) {
            let e = this.collection.getItem(n);
            if (!e) break;
            if ((l || !this.isDisabled(e)) && (!t || t(e))) return n;
            n = this.collection.getKeyBefore(n);
        }
        return null;
    }
    findNextKey(e, t, l = !1) {
        let n = null != e ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
        for (; null != n; ) {
            let e = this.collection.getItem(n);
            if (!e) break;
            if ((l || !this.isDisabled(e)) && (!t || t(e))) return n;
            if (null == (n = this.collection.getKeyAfter(n))) break;
        }
        return null;
    }
    getKeyForItemInRowByIndex(e, t = 0) {
        if (t < 0) return null;
        let l = this.collection.getItem(e);
        if (!l) return null;
        let n = 0;
        for (let e of (0, m.iQ)(l, this.collection)) {
            if ((e.colSpan && e.colSpan + n > t) || (e.colSpan && (n = n + e.colSpan - 1), n === t))
                return e.key ?? null;
            n++;
        }
        return null;
    }
    getKeyBelow(e, t) {
        let l = e,
            n = this.collection.getItem(l);
        if (!n || (this.isCell(n) && (l = n.parentKey ?? null), null == l)) return null;
        if (null != (l = this.findNextKey(l, (e) => "item" === e.type, t?.includeDisabled))) {
            if (this.isCell(n)) {
                let e = n.colIndex ? n.colIndex : n.index;
                return this.getKeyForItemInRowByIndex(l, e);
            }
            if ("row" === this.focusMode) return l;
        }
        return null;
    }
    getKeyAbove(e, t) {
        let l = e,
            n = this.collection.getItem(l);
        if (!n || (this.isCell(n) && (l = n.parentKey ?? null), null == l)) return null;
        if (null != (l = this.findPreviousKey(l, (e) => "item" === e.type, t?.includeDisabled))) {
            if (this.isCell(n)) {
                let e = n.colIndex ? n.colIndex : n.index;
                return this.getKeyForItemInRowByIndex(l, e);
            }
            if ("row" === this.focusMode) return l;
        }
        return null;
    }
    getKeyRightOf(e) {
        let t = this.collection.getItem(e);
        if (!t) return null;
        if (this.isRow(t)) {
            let e = (0, m.iQ)(t, this.collection);
            return ("rtl" === this.direction ? (0, m.W)(e)?.key : (0, m.ue)(e)?.key) ?? null;
        }
        if (this.isCell(t) && null != t.parentKey) {
            let l = this.collection.getItem(t.parentKey);
            if (!l) return null;
            let n = (0, m.iQ)(l, this.collection),
                o = ("rtl" === this.direction ? (0, m.cj)(n, t.index - 1) : (0, m.cj)(n, t.index + 1)) ?? null;
            return o
                ? (o.key ?? null)
                : "row" === this.focusMode
                  ? (t.parentKey ?? null)
                  : (("rtl" === this.direction ? this.getFirstKey(e) : this.getLastKey(e)) ?? null);
        }
        return null;
    }
    getKeyLeftOf(e) {
        let t = this.collection.getItem(e);
        if (!t) return null;
        if (this.isRow(t)) {
            let e = (0, m.iQ)(t, this.collection);
            return ("rtl" === this.direction ? (0, m.ue)(e)?.key : (0, m.W)(e)?.key) ?? null;
        }
        if (this.isCell(t) && null != t.parentKey) {
            let l = this.collection.getItem(t.parentKey);
            if (!l) return null;
            let n = (0, m.iQ)(l, this.collection),
                o = ("rtl" === this.direction ? (0, m.cj)(n, t.index + 1) : (0, m.cj)(n, t.index - 1)) ?? null;
            return o
                ? (o.key ?? null)
                : "row" === this.focusMode
                  ? (t.parentKey ?? null)
                  : (("rtl" === this.direction ? this.getLastKey(e) : this.getFirstKey(e)) ?? null);
        }
        return null;
    }
    getFirstKey(e, t) {
        let l,
            n = e ?? null;
        if (null != n) {
            if (!(l = this.collection.getItem(n))) return null;
            if (this.isCell(l) && !t && null != l.parentKey) {
                let e = this.collection.getItem(l.parentKey);
                return e ? ((0, m.ue)((0, m.iQ)(e, this.collection))?.key ?? null) : null;
            }
        }
        if (
            null != (n = this.findNextKey(void 0, (e) => "item" === e.type)) &&
            ((l && this.isCell(l) && t) || "cell" === this.focusMode)
        ) {
            let e = this.collection.getItem(n);
            if (!e) return null;
            n = (0, m.ue)((0, m.iQ)(e, this.collection))?.key ?? null;
        }
        return n;
    }
    getLastKey(e, t) {
        let l,
            n = e ?? null;
        if (null != n) {
            if (!(l = this.collection.getItem(n))) return null;
            if (this.isCell(l) && !t && null != l.parentKey) {
                let e = this.collection.getItem(l.parentKey);
                if (!e) return null;
                let t = (0, m.iQ)(e, this.collection);
                return (0, m.W)(t)?.key ?? null;
            }
        }
        if (
            null != (n = this.findPreviousKey(void 0, (e) => "item" === e.type)) &&
            ((l && this.isCell(l) && t) || "cell" === this.focusMode)
        ) {
            let e = this.collection.getItem(n);
            if (!e) return null;
            let t = (0, m.iQ)(e, this.collection);
            n = (0, m.W)(t)?.key ?? null;
        }
        return n;
    }
    getKeyPageAbove(e) {
        let t = e,
            l = this.layoutDelegate.getItemRect(t);
        if (!l) return null;
        let n = Math.max(0, l.y + l.height - this.layoutDelegate.getVisibleRect().height);
        for (; l && l.y > n && null != t && null != (t = this.getKeyAbove(t) ?? null); )
            l = this.layoutDelegate.getItemRect(t);
        return t;
    }
    getKeyPageBelow(e) {
        let t = e,
            l = this.layoutDelegate.getItemRect(t);
        if (!l) return null;
        let n = this.layoutDelegate.getVisibleRect().height,
            o = Math.min(this.layoutDelegate.getContentSize().height, l.y + n);
        for (; l && l.y + l.height < o; ) {
            let e = this.getKeyBelow(t);
            if (null == e) break;
            (l = this.layoutDelegate.getItemRect(e)), (t = e);
        }
        return t;
    }
    getKeyForSearch(e, t) {
        let l = t ?? null;
        if (!this.collator) return null;
        let n = this.collection;
        if (null == (l = t ?? this.getFirstKey())) return null;
        let o = n.getItem(l);
        if (!o) return null;
        "cell" === o.type && (l = o.parentKey ?? null);
        let r = !1;
        for (; null != l; ) {
            let t = n.getItem(l);
            if (!t) break;
            if (t.textValue) {
                let l = t.textValue.slice(0, e.length);
                if (0 === this.collator.compare(l, e)) {
                    if (this.isRow(t) && "cell" === this.focusMode)
                        return (0, m.ue)((0, m.iQ)(t, this.collection))?.key ?? null;
                    return t.key;
                }
            }
            null != (l = this.findNextKey(l, (e) => "item" === e.type)) || r || ((l = this.getFirstKey()), (r = !0));
        }
        return null;
    }
}
class O {
    constructor(e) {
        this.layout = e;
    }
    getContentSize() {
        return this.layout.getContentSize();
    }
    getItemRect(e) {
        return this.layout.getLayoutInfo(e)?.rect || null;
    }
    getVisibleRect() {
        return this.layout.virtualizer.visibleRect;
    }
}
let W = new WeakMap();
var _ = l(503002),
    Q = l(224459),
    q = l(827341),
    Y = l(961532),
    X = l(295551),
    G = l(916769);
let Z = new WeakMap();
function J(e) {
    return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e;
}
function ee(e, t, l) {
    let n = Z.get(e);
    if (!n) throw Error("Unknown grid");
    return `${n}-${J(t)}-${J(l)}`;
}
function et(e, t) {
    return [...e.collection.rowHeaderColumnKeys].map((l) => ee(e, t, l)).join(" ");
}
var el = {};
el = {
    "ar-AE": {
        ascending: "\u062A\u0635\u0627\u0639\u062F\u064A",
        ascendingSort: (e) =>
            `\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${e.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{635}\u{627}\u{639}\u{62F}\u{64A}`,
        collapse: "\u0637\u064A",
        columnSize: (e) => `${e.value} \u{628}\u{627}\u{644}\u{628}\u{643}\u{633}\u{644}`,
        descending: "\u062A\u0646\u0627\u0632\u0644\u064A",
        descendingSort: (e) =>
            `\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${e.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{646}\u{627}\u{632}\u{644}\u{64A}`,
        expand: "\u062A\u0645\u062F\u064A\u062F",
        resizerDescription:
            "\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0645\u0641\u062A\u0627\u062D Enter \u0644\u0628\u062F\u0621 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062D\u062C\u0645",
        select: "\u062A\u062D\u062F\u064A\u062F",
        selectAll: "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644",
        sortable: "\u0639\u0645\u0648\u062F \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0631\u062A\u064A\u0628",
    },
    "bg-BG": {
        ascending: "\u0432\u044A\u0437\u0445\u043E\u0434\u044F\u0449",
        ascendingSort: (e) =>
            `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${e.columnName} \u{432}\u{44A}\u{432} \u{432}\u{44A}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
        collapse: "\u0421\u0432\u0438\u0432\u0430\u043D\u0435",
        columnSize: (e) => `${e.value} \u{43F}\u{438}\u{43A}\u{441}\u{435}\u{43B}\u{430}`,
        descending: "\u043D\u0438\u0437\u0445\u043E\u0434\u044F\u0449",
        descendingSort: (e) =>
            `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${e.columnName} \u{432} \u{43D}\u{438}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
        expand: "\u0420\u0430\u0437\u0448\u0438\u0440\u044F\u0432\u0430\u043D\u0435",
        resizerDescription:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201EEnter\u201C, \u0437\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0435\u0442\u0435 \u0434\u0430 \u043F\u0440\u0435\u043E\u0440\u0430\u0437\u043C\u0435\u0440\u044F\u0432\u0430\u0442\u0435",
        select: "\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435",
        selectAll: "\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u043E",
        sortable: "\u0441\u043E\u0440\u0442\u0438\u0440\u0430\u0449\u0430 \u043A\u043E\u043B\u043E\u043D\u0430",
    },
    "cs-CZ": {
        ascending: "vzestupn\u011B",
        ascendingSort: (e) => `\u{159}azeno vzestupn\u{11B} podle sloupce ${e.columnName}`,
        collapse: "Sbalit",
        columnSize: (e) => `${e.value} pixel\u{16F}`,
        descending: "sestupn\u011B",
        descendingSort: (e) => `\u{159}azeno sestupn\u{11B} podle sloupce ${e.columnName}`,
        expand: "Rozt\xe1hnout",
        resizerDescription: "Stisknut\xedm kl\xe1vesy Enter za\u010Dnete m\u011Bnit velikost",
        select: "Vybrat",
        selectAll: "Vybrat v\u0161e",
        sortable: "sloupec s mo\u017Enost\xed \u0159azen\xed",
    },
    "da-DK": {
        ascending: "stigende",
        ascendingSort: (e) => `sorteret efter kolonne ${e.columnName} i stigende r\xe6kkef\xf8lge`,
        collapse: "Skjul",
        columnSize: (e) => `${e.value} pixels`,
        descending: "faldende",
        descendingSort: (e) => `sorteret efter kolonne ${e.columnName} i faldende r\xe6kkef\xf8lge`,
        expand: "Udvid",
        resizerDescription: "Tryk p\xe5 Enter for at \xe6ndre st\xf8rrelse",
        select: "V\xe6lg",
        selectAll: "V\xe6lg alle",
        sortable: "sorterbar kolonne",
    },
    "de-DE": {
        ascending: "aufsteigend",
        ascendingSort: (e) => `sortiert nach Spalte ${e.columnName} in aufsteigender Reihenfolge`,
        collapse: "Reduzieren",
        columnSize: (e) => `${e.value} Pixel`,
        descending: "absteigend",
        descendingSort: (e) => `sortiert nach Spalte ${e.columnName} in absteigender Reihenfolge`,
        expand: "Erweitern",
        resizerDescription: "Eingabetaste zum Starten der Gr\xf6\xdfen\xe4nderung dr\xfccken",
        select: "Ausw\xe4hlen",
        selectAll: "Alles ausw\xe4hlen",
        sortable: "sortierbare Spalte",
    },
    "el-GR": {
        ascending: "\u03B1\u03CD\u03BE\u03BF\u03C5\u03C3\u03B1",
        ascendingSort: (e) =>
            `\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${e.columnName} \u{3C3}\u{3B5} \u{3B1}\u{3CD}\u{3BE}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
        collapse: "\u03A3\u03CD\u03BC\u03C0\u03C4\u03C5\u03BE\u03B7",
        columnSize: (e) => `${e.value} pixel`,
        descending: "\u03C6\u03B8\u03AF\u03BD\u03BF\u03C5\u03C3\u03B1",
        descendingSort: (e) =>
            `\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${e.columnName} \u{3C3}\u{3B5} \u{3C6}\u{3B8}\u{3AF}\u{3BD}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
        expand: "\u0391\u03BD\u03AC\u03C0\u03C4\u03C5\u03BE\u03B7",
        resizerDescription:
            "\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Enter \u03B3\u03B9\u03B1 \u03AD\u03BD\u03B1\u03C1\u03BE\u03B7 \u03C4\u03B7\u03C2 \u03B1\u03BB\u03BB\u03B1\u03B3\u03AE\u03C2 \u03BC\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2",
        select: "\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE",
        selectAll: "\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03CC\u03BB\u03C9\u03BD",
        sortable: "\u03A3\u03C4\u03AE\u03BB\u03B7 \u03B4\u03B9\u03B1\u03BB\u03BF\u03B3\u03AE\u03C2",
    },
    "en-US": {
        select: "Select",
        selectAll: "Select All",
        sortable: "sortable column",
        ascending: "ascending",
        descending: "descending",
        ascendingSort: (e) => `sorted by column ${e.columnName} in ascending order`,
        descendingSort: (e) => `sorted by column ${e.columnName} in descending order`,
        columnSize: (e) => `${e.value} pixels`,
        resizerDescription: "Press Enter to start resizing",
        expand: "Expand",
        collapse: "Collapse",
    },
    "es-ES": {
        ascending: "ascendente",
        ascendingSort: (e) => `ordenado por columna ${e.columnName} en sentido ascendente`,
        collapse: "Contraer",
        columnSize: (e) => `${e.value} p\xedxeles`,
        descending: "descendente",
        descendingSort: (e) => `ordenado por columna ${e.columnName} en orden descendente`,
        expand: "Ampliar",
        resizerDescription: "Pulse Intro para empezar a redimensionar",
        select: "Seleccionar",
        selectAll: "Seleccionar todos",
        sortable: "columna ordenable",
    },
    "et-EE": {
        ascending: "t\xf5usev j\xe4rjestus",
        ascendingSort: (e) => `sorditud veeru j\xe4rgi ${e.columnName} t\xf5usvas j\xe4rjestuses`,
        collapse: "Ahenda",
        columnSize: (e) => `${e.value} pikslit`,
        descending: "laskuv j\xe4rjestus",
        descendingSort: (e) => `sorditud veeru j\xe4rgi ${e.columnName} laskuvas j\xe4rjestuses`,
        expand: "Laienda",
        resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
        select: "Vali",
        selectAll: "Vali k\xf5ik",
        sortable: "sorditav veerg",
    },
    "fi-FI": {
        ascending: "nouseva",
        ascendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan nousevassa j\xe4rjestyksess\xe4`,
        collapse: "Pienenn\xe4",
        columnSize: (e) => `${e.value} pikseli\xe4`,
        descending: "laskeva",
        descendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan laskevassa j\xe4rjestyksess\xe4`,
        expand: "Laajenna",
        resizerDescription: "Aloita koon muutos painamalla Enter-n\xe4pp\xe4int\xe4",
        select: "Valitse",
        selectAll: "Valitse kaikki",
        sortable: "lajiteltava sarake",
    },
    "fr-FR": {
        ascending: "croissant",
        ascendingSort: (e) => `tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre croissant`,
        collapse: "R\xe9duire",
        columnSize: (e) => `${e.value}\xa0pixels`,
        descending: "d\xe9croissant",
        descendingSort: (e) => `tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre d\xe9croissant`,
        expand: "D\xe9velopper",
        resizerDescription: "Appuyez sur Entr\xe9e pour commencer le redimensionnement.",
        select: "S\xe9lectionner",
        selectAll: "S\xe9lectionner tout",
        sortable: "colonne triable",
    },
    "he-IL": {
        ascending: "\u05E2\u05D5\u05DC\u05D4",
        ascendingSort: (e) =>
            `\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${e.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5E2}\u{5D5}\u{5DC}\u{5D4}`,
        collapse: "\u05DB\u05D5\u05D5\u05E5",
        columnSize: (e) => `${e.value} \u{5E4}\u{5D9}\u{5E7}\u{5E1}\u{5DC}\u{5D9}\u{5DD}`,
        descending: "\u05D9\u05D5\u05E8\u05D3",
        descendingSort: (e) =>
            `\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${e.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5D9}\u{5D5}\u{5E8}\u{5D3}`,
        expand: "\u05D4\u05E8\u05D7\u05D1",
        resizerDescription:
            "\u05D4\u05E7\u05E9 Enter \u05DB\u05D3\u05D9 \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D2\u05D5\u05D3\u05DC",
        select: "\u05D1\u05D7\u05E8",
        selectAll: "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05D5\u05DC",
        sortable: "\u05E2\u05DE\u05D5\u05D3\u05D4 \u05E9\u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05D9\u05D9\u05DF",
    },
    "hr-HR": {
        ascending: "rastu\u0107i",
        ascendingSort: (e) => `razvrstano po stupcima ${e.columnName} rastu\u{107}em redoslijedom`,
        collapse: "Sa\u017Emi",
        columnSize: (e) => `${e.value} piksela`,
        descending: "padaju\u0107i",
        descendingSort: (e) => `razvrstano po stupcima ${e.columnName} padaju\u{107}im redoslijedom`,
        expand: "Pro\u0161iri",
        resizerDescription: "Pritisnite Enter da biste zapo\u010Deli promenu veli\u010Dine",
        select: "Odaberite",
        selectAll: "Odaberite sve",
        sortable: "stupac koji se mo\u017Ee razvrstati",
    },
    "hu-HU": {
        ascending: "n\xf6vekv\u0151",
        ascendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, n\xf6vekv\u{151} sorrendben`,
        collapse: "\xd6sszecsuk\xe1s",
        columnSize: (e) => `${e.value} k\xe9ppont`,
        descending: "cs\xf6kken\u0151",
        descendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, cs\xf6kken\u{151} sorrendben`,
        expand: "Kibont\xe1s",
        resizerDescription: "Nyomja le az Enter billenty\u0171t az \xe1tm\xe9retez\xe9s megkezd\xe9s\xe9hez",
        select: "Kijel\xf6l\xe9s",
        selectAll: "\xd6sszes kijel\xf6l\xe9se",
        sortable: "rendezend\u0151 oszlop",
    },
    "it-IT": {
        ascending: "crescente",
        ascendingSort: (e) => `in ordine crescente in base alla colonna ${e.columnName}`,
        collapse: "Comprimi",
        columnSize: (e) => `${e.value} pixel`,
        descending: "decrescente",
        descendingSort: (e) => `in ordine decrescente in base alla colonna ${e.columnName}`,
        expand: "Espandi",
        resizerDescription: "Premi Invio per iniziare a ridimensionare",
        select: "Seleziona",
        selectAll: "Seleziona tutto",
        sortable: "colonna ordinabile",
    },
    "ja-JP": {
        ascending: "\u6607\u9806",
        ascendingSort: (e) =>
            `\u{5217} ${e.columnName} \u{3092}\u{6607}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
        collapse: "\u6298\u308A\u305F\u305F\u3080",
        columnSize: (e) => `${e.value} \u{30D4}\u{30AF}\u{30BB}\u{30EB}`,
        descending: "\u964D\u9806",
        descendingSort: (e) =>
            `\u{5217} ${e.columnName} \u{3092}\u{964D}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
        expand: "\u5C55\u958B",
        resizerDescription:
            "Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30B5\u30A4\u30BA\u5909\u66F4\u3092\u958B\u59CB",
        select: "\u9078\u629E",
        selectAll: "\u3059\u3079\u3066\u9078\u629E",
        sortable: "\u4E26\u3079\u66FF\u3048\u53EF\u80FD\u306A\u5217",
    },
    "ko-KR": {
        ascending: "\uC624\uB984\uCC28\uC21C",
        ascendingSort: (e) =>
            `${e.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{C624}\u{B984}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
        collapse: "\uC811\uAE30",
        columnSize: (e) => `${e.value} \u{D53D}\u{C140}`,
        descending: "\uB0B4\uB9BC\uCC28\uC21C",
        descendingSort: (e) =>
            `${e.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{B0B4}\u{B9BC}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
        expand: "\uD3BC\uCE58\uAE30",
        resizerDescription:
            "\uD06C\uAE30 \uC870\uC815\uC744 \uC2DC\uC791\uD558\uB824\uBA74 Enter\uB97C \uB204\uB974\uC138\uC694.",
        select: "\uC120\uD0DD",
        selectAll: "\uBAA8\uB450 \uC120\uD0DD",
        sortable: "\uC815\uB82C \uAC00\uB2A5\uD55C \uC5F4",
    },
    "lt-LT": {
        ascending: "did\u0117jan\u010Dia tvarka",
        ascendingSort: (e) => `surikiuota pagal stulpel\u{12F} ${e.columnName} did\u{117}jan\u{10D}ia tvarka`,
        collapse: "Sutraukti",
        columnSize: (e) => `${e.value} piks.`,
        descending: "ma\u017E\u0117jan\u010Dia tvarka",
        descendingSort: (e) => `surikiuota pagal stulpel\u{12F} ${e.columnName} ma\u{17E}\u{117}jan\u{10D}ia tvarka`,
        expand: "I\u0161skleisti",
        resizerDescription: "Paspauskite \u201EEnter\u201C, kad prad\u0117tum\u0117te keisti dyd\u012F",
        select: "Pasirinkti",
        selectAll: "Pasirinkti visk\u0105",
        sortable: "rikiuojamas stulpelis",
    },
    "lv-LV": {
        ascending: "augo\u0161\u0101 sec\u012Bb\u0101",
        ascendingSort: (e) => `k\u{101}rtots p\u{113}c kolonnas ${e.columnName} augo\u{161}\u{101} sec\u{12B}b\u{101}`,
        collapse: "Sak\u013Caut",
        columnSize: (e) => `${e.value} pikse\u{13C}i`,
        descending: "dilsto\u0161\u0101 sec\u012Bb\u0101",
        descendingSort: (e) =>
            `k\u{101}rtots p\u{113}c kolonnas ${e.columnName} dilsto\u{161}\u{101} sec\u{12B}b\u{101}`,
        expand: "Izv\u0113rst",
        resizerDescription: "Nospiediet Enter, lai s\u0101ktu izm\u0113ru main\u012B\u0161anu",
        select: "Atlas\u012Bt",
        selectAll: "Atlas\u012Bt visu",
        sortable: "k\u0101rtojam\u0101 kolonna",
    },
    "nb-NO": {
        ascending: "stigende",
        ascendingSort: (e) => `sortert etter kolonne ${e.columnName} i stigende rekkef\xf8lge`,
        collapse: "Skjul",
        columnSize: (e) => `${e.value} piksler`,
        descending: "synkende",
        descendingSort: (e) => `sortert etter kolonne ${e.columnName} i synkende rekkef\xf8lge`,
        expand: "Utvid",
        resizerDescription: "Trykk p\xe5 Enter for \xe5 starte st\xf8rrelsesendring",
        select: "Velg",
        selectAll: "Velg alle",
        sortable: "kolonne som kan sorteres",
    },
    "nl-NL": {
        ascending: "oplopend",
        ascendingSort: (e) => `gesorteerd in oplopende volgorde in kolom ${e.columnName}`,
        collapse: "Samenvouwen",
        columnSize: (e) => `${e.value} pixels`,
        descending: "aflopend",
        descendingSort: (e) => `gesorteerd in aflopende volgorde in kolom ${e.columnName}`,
        expand: "Uitvouwen",
        resizerDescription: "Druk op Enter om het formaat te wijzigen",
        select: "Selecteren",
        selectAll: "Alles selecteren",
        sortable: "sorteerbare kolom",
    },
    "pl-PL": {
        ascending: "rosn\u0105co",
        ascendingSort: (e) => `posortowano wed\u{142}ug kolumny ${e.columnName} w porz\u{105}dku rosn\u{105}cym`,
        collapse: "Zwi\u0144",
        columnSize: (e) => `Liczba pikseli: ${e.value}`,
        descending: "malej\u0105co",
        descendingSort: (e) => `posortowano wed\u{142}ug kolumny ${e.columnName} w porz\u{105}dku malej\u{105}cym`,
        expand: "Rozwi\u0144",
        resizerDescription: "Naci\u015Bnij Enter, aby rozpocz\u0105\u0107 zmienianie rozmiaru",
        select: "Zaznacz",
        selectAll: "Zaznacz wszystko",
        sortable: "kolumna z mo\u017Cliwo\u015Bci\u0105 sortowania",
    },
    "pt-BR": {
        ascending: "crescente",
        ascendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem crescente`,
        collapse: "Recolher",
        columnSize: (e) => `${e.value} pixels`,
        descending: "decrescente",
        descendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem decrescente`,
        expand: "Expandir",
        resizerDescription: "Pressione Enter para come\xe7ar a redimensionar",
        select: "Selecionar",
        selectAll: "Selecionar tudo",
        sortable: "coluna classific\xe1vel",
    },
    "pt-PT": {
        ascending: "ascendente",
        ascendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem ascendente`,
        collapse: "Colapsar",
        columnSize: (e) => `${e.value} pixels`,
        descending: "descendente",
        descendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem descendente`,
        expand: "Expandir",
        resizerDescription: "Prima Enter para iniciar o redimensionamento",
        select: "Selecionar",
        selectAll: "Selecionar tudo",
        sortable: "Coluna orden\xe1vel",
    },
    "ro-RO": {
        ascending: "cresc\u0103toare",
        ascendingSort: (e) => `sortate dup\u{103} coloana ${e.columnName} \xeen ordine cresc\u{103}toare`,
        collapse: "Restr\xe2nge\u021Bi",
        columnSize: (e) => `${e.value} pixeli`,
        descending: "descresc\u0103toare",
        descendingSort: (e) => `sortate dup\u{103} coloana ${e.columnName} \xeen ordine descresc\u{103}toare`,
        expand: "Extinde\u021Bi",
        resizerDescription: "Ap\u0103sa\u021Bi pe Enter pentru a \xeencepe redimensionarea",
        select: "Selectare",
        selectAll: "Selectare total\u0103",
        sortable: "coloan\u0103 sortabil\u0103",
    },
    "ru-RU": {
        ascending: "\u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u0435",
        ascendingSort: (e) =>
            `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${e.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{432}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}\u{430}\u{43D}\u{438}\u{44F}`,
        collapse: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
        columnSize: (e) => `${e.value} \u{43F}\u{438}\u{43A}\u{441}.`,
        descending: "\u0443\u0431\u044B\u0432\u0430\u043D\u0438\u0435",
        descendingSort: (e) =>
            `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${e.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{443}\u{431}\u{44B}\u{432}\u{430}\u{43D}\u{438}\u{44F}`,
        expand: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
        resizerDescription:
            "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Enter \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432",
        select: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
        selectAll: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435",
        sortable:
            "\u0441\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0441\u0442\u043E\u043B\u0431\u0435\u0446",
    },
    "sk-SK": {
        ascending: "vzostupne",
        ascendingSort: (e) => `zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${e.columnName}`,
        collapse: "Zbali\u0165",
        columnSize: (e) => `Po\u{10D}et pixelov: ${e.value}`,
        descending: "zostupne",
        descendingSort: (e) => `zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${e.columnName}`,
        expand: "Rozbali\u0165",
        resizerDescription: "Stla\u010Den\xedm kl\xe1vesu Enter za\u010Dnete zmenu ve\u013Ekosti",
        select: "Vybra\u0165",
        selectAll: "Vybra\u0165 v\u0161etko",
        sortable: "zoradite\u013En\xfd st\u013Apec",
    },
    "sl-SI": {
        ascending: "nara\u0161\u010Dajo\u010De",
        ascendingSort: (e) =>
            `razvr\u{161}\u{10D}eno po stolpcu ${e.columnName} v nara\u{161}\u{10D}ajo\u{10D}em vrstnem redu`,
        collapse: "Strni",
        columnSize: (e) => `${e.value} slikovnih pik`,
        descending: "padajo\u010De",
        descendingSort: (e) => `razvr\u{161}\u{10D}eno po stolpcu ${e.columnName} v padajo\u{10D}em vrstnem redu`,
        expand: "Raz\u0161iri",
        resizerDescription: "Pritisnite tipko Enter da za\u010Dnete spreminjati velikost",
        select: "Izberite",
        selectAll: "Izberite vse",
        sortable: "razvrstljivi stolpec",
    },
    "sr-SP": {
        ascending: "rastu\u0107i",
        ascendingSort: (e) => `sortirano po kolonama ${e.columnName} rastu\u{107}im redosledom`,
        collapse: "Skupi",
        columnSize: (e) => `${e.value} piksela`,
        descending: "padaju\u0107i",
        descendingSort: (e) => `sortirano po kolonama ${e.columnName} padaju\u{107}im redosledom`,
        expand: "Pro\u0161iri",
        resizerDescription: "Pritisnite Enter da biste zapo\u010Deli promenu veli\u010Dine",
        select: "Izaberite",
        selectAll: "Izaberite sve",
        sortable: "kolona koja se mo\u017Ee sortirati",
    },
    "sv-SE": {
        ascending: "stigande",
        ascendingSort: (e) => `sorterat p\xe5 kolumn ${e.columnName} i stigande ordning`,
        collapse: "D\xf6lj",
        columnSize: (e) => `${e.value} pixlar`,
        descending: "fallande",
        descendingSort: (e) => `sorterat p\xe5 kolumn ${e.columnName} i fallande ordning`,
        expand: "Expandera",
        resizerDescription: "Tryck p\xe5 Retur f\xf6r att b\xf6rja \xe4ndra storlek",
        select: "Markera",
        selectAll: "Markera allt",
        sortable: "sorterbar kolumn",
    },
    "tr-TR": {
        ascending: "artan s\u0131rada",
        ascendingSort: (e) => `${e.columnName} s\xfctuna g\xf6re artan d\xfczende s\u{131}rala`,
        collapse: "Daralt",
        columnSize: (e) => `${e.value} piksel`,
        descending: "azalan s\u0131rada",
        descendingSort: (e) => `${e.columnName} s\xfctuna g\xf6re azalan d\xfczende s\u{131}rala`,
        expand: "Geni\u015Flet",
        resizerDescription: "Yeniden boyutland\u0131rmak i\xe7in Enter'a bas\u0131n",
        select: "Se\xe7",
        selectAll: "T\xfcm\xfcn\xfc Se\xe7",
        sortable: "S\u0131ralanabilir s\xfctun",
    },
    "uk-UA": {
        ascending: "\u0432\u0438\u0441\u0445\u0456\u0434\u043D\u0438\u0439",
        ascendingSort: (e) =>
            `\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${e.columnName} \u{443} \u{432}\u{438}\u{441}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
        collapse: "\u0417\u0433\u043E\u0440\u043D\u0443\u0442\u0438",
        columnSize: (e) => `${e.value} \u{43F}\u{456}\u{43A}\u{441}.`,
        descending: "\u043D\u0438\u0437\u0445\u0456\u0434\u043D\u0438\u0439",
        descendingSort: (e) =>
            `\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${e.columnName} \u{443} \u{43D}\u{438}\u{437}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
        expand: "\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438",
        resizerDescription:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter, \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u0437\u043C\u0456\u043D\u0443 \u0440\u043E\u0437\u043C\u0456\u0440\u0443",
        select: "\u0412\u0438\u0431\u0440\u0430\u0442\u0438",
        selectAll: "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0435",
        sortable:
            "\u0441\u043E\u0440\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C",
    },
    "zh-CN": {
        ascending: "\u5347\u5E8F",
        ascendingSort: (e) => `\u{6309}\u{5217} ${e.columnName} \u{5347}\u{5E8F}\u{6392}\u{5E8F}`,
        collapse: "\u6298\u53E0",
        columnSize: (e) => `${e.value} \u{50CF}\u{7D20}`,
        descending: "\u964D\u5E8F",
        descendingSort: (e) => `\u{6309}\u{5217} ${e.columnName} \u{964D}\u{5E8F}\u{6392}\u{5E8F}`,
        expand: "\u6269\u5C55",
        resizerDescription: "\u6309 Enter \u5F00\u59CB\u8C03\u6574\u5927\u5C0F\u3002",
        select: "\u9009\u62E9",
        selectAll: "\u5168\u9009",
        sortable: "\u53EF\u6392\u5E8F\u7684\u5217",
    },
    "zh-TW": {
        ascending: "\u905E\u589E",
        ascendingSort: (e) =>
            `\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${e.columnName}\u{300D}\u{6B04}\u{905E}\u{589E}\u{6392}\u{5E8F}`,
        collapse: "\u6536\u5408",
        columnSize: (e) => `${e.value} \u{50CF}\u{7D20}`,
        descending: "\u905E\u6E1B",
        descendingSort: (e) =>
            `\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${e.columnName}\u{300D}\u{6B04}\u{905E}\u{6E1B}\u{6392}\u{5E8F}`,
        expand: "\u5C55\u958B",
        resizerDescription: "\u6309 Enter \u9375\u4EE5\u958B\u59CB\u8ABF\u6574\u5927\u5C0F",
        select: "\u9078\u53D6",
        selectAll: "\u5168\u9078",
        sortable: "\u53EF\u6392\u5E8F\u7684\u6B04",
    },
};
class en extends U {
    isCell(e) {
        return "cell" === e.type || "rowheader" === e.type || "column" === e.type;
    }
    getKeyBelow(e, t) {
        let l = this.collection.getItem(e);
        if (!l) return null;
        if ("column" === l.type) {
            let e = (0, m.ue)((0, m.iQ)(l, this.collection));
            if (e) return e.key;
            let t = this.getFirstKey();
            return null != t && this.collection.getItem(t) ? super.getKeyForItemInRowByIndex(t, l.index) : null;
        }
        return super.getKeyBelow(e, t);
    }
    getKeyAbove(e, t) {
        let l = this.collection.getItem(e);
        if (!l) return null;
        if ("column" === l.type) {
            let e = null != l.parentKey ? this.collection.getItem(l.parentKey) : null;
            return e && "column" === e.type ? e.key : null;
        }
        let n = super.getKeyAbove(e, t),
            o = null != n ? this.collection.getItem(n) : null;
        return o && "headerrow" !== o.type
            ? n
            : this.isCell(l)
              ? this.collection.columns[l.index].key
              : this.collection.columns[0].key;
    }
    findNextColumnKey(e) {
        let t = this.findNextKey(e.key, (e) => "column" === e.type);
        if (null != t) return t;
        let l = this.collection.headerRows[e.level];
        for (let e of (0, m.iQ)(l, this.collection)) if ("column" === e.type) return e.key;
        return null;
    }
    findPreviousColumnKey(e) {
        let t = this.findPreviousKey(e.key, (e) => "column" === e.type);
        if (null != t) return t;
        let l = this.collection.headerRows[e.level],
            n = [...(0, m.iQ)(l, this.collection)];
        for (let e = n.length - 1; e >= 0; e--) {
            let t = n[e];
            if ("column" === t.type) return t.key;
        }
        return null;
    }
    getKeyRightOf(e) {
        let t = this.collection.getItem(e);
        return t
            ? "column" === t.type
                ? "rtl" === this.direction
                    ? this.findPreviousColumnKey(t)
                    : this.findNextColumnKey(t)
                : super.getKeyRightOf(e)
            : null;
    }
    getKeyLeftOf(e) {
        let t = this.collection.getItem(e);
        return t
            ? "column" === t.type
                ? "rtl" === this.direction
                    ? this.findNextColumnKey(t)
                    : this.findPreviousColumnKey(t)
                : super.getKeyLeftOf(e)
            : null;
    }
    getKeyForSearch(e, t) {
        if (!this.collator) return null;
        let l = this.collection,
            n = t ?? this.getFirstKey();
        if (null == n) return null;
        let o = l.getItem(n);
        o?.type === "cell" && (n = o.parentKey ?? null);
        let r = !1;
        for (; null != n; ) {
            let i = l.getItem(n);
            if (!i) break;
            if (i.textValue) {
                let t = i.textValue.slice(0, e.length);
                if (0 === this.collator.compare(t, e)) return i.key;
            }
            for (let n of (0, m.iQ)(i, this.collection)) {
                let r = l.columns[n.index];
                if (l.rowHeaderColumnKeys.has(r.key) && n.textValue) {
                    let r = n.textValue.slice(0, e.length);
                    if (0 === this.collator.compare(r, e)) {
                        let e = null != t ? l.getItem(t) : o;
                        return e?.type === "cell" ? n.key : i.key;
                    }
                }
            }
            null != (n = this.getKeyBelow(n)) || r || ((n = this.getFirstKey()), (r = !0));
        }
        return null;
    }
}
var eo = l(383491),
    er = l(481238),
    ei = l(294523);
function es() {
    return { rowGroupProps: { role: "rowgroup" } };
}
var ea = l(817738),
    eu = l(644255),
    ec = l(957397),
    ed = l(64480),
    ep = l(143761),
    eg = l(943641),
    ey = l(225801),
    eh = l(691719),
    em = l(872236);
function ef(e, t, l) {
    let {
            node: n,
            isVirtualized: o,
            focusMode: r,
            allowsArrowNavigation: i,
            shouldSelectOnPressUp: a,
            onAction: u,
        } = e,
        { direction: c } = (0, T.Y)(),
        {
            keyboardDelegate: d,
            actions: { onCellAction: p },
            keyboardNavigationBehavior: g,
        } = W.get(t),
        y = r ?? ("tab" === g ? "cell" : "child"),
        h = (0, s.useRef)(null),
        m = () => {
            if (l.current) {
                let e = (0, w.N$)(l.current);
                if ("child" === y) {
                    if ((0, H.ae)(l.current) && l.current !== (0, H.bq)((0, ep.TW)(l.current))) return;
                    let n = "last" === t.selectionManager.childFocusStrategy ? ev(e) : e.firstChild();
                    if (n) return void (0, ed.l)(n);
                }
                ((null == h.current || n.key === h.current) && (0, H.ae)(l.current)) || (0, ed.l)(l.current);
            }
        },
        { itemProps: f, isPressed: v } = (0, em.p)({
            selectionManager: t.selectionManager,
            key: n.key,
            ref: l,
            isVirtualized: o,
            focus: m,
            shouldSelectOnPressUp: a,
            onAction: p ? () => p(n.key) : u,
            isDisabled: 0 === t.collection.size,
        }),
        b = (0, z.v)(f, {
            role: "gridcell",
            onKeyDownCapture:
                "tab" !== g || i
                    ? (e) => {
                          let o = (0, H.bq)((0, ep.TW)(l.current));
                          if (
                              !(0, H.sD)(e.currentTarget, (0, H.wt)(e)) ||
                              t.isKeyboardNavigationDisabled ||
                              !l.current ||
                              !o
                          )
                              return;
                          let r = (0, w.N$)(l.current);
                          switch (((r.currentNode = o), e.key)) {
                              case "ArrowLeft": {
                                  let t = "rtl" === c ? r.nextNode() : r.previousNode();
                                  if (
                                      ("child" === y && t === l.current && (t = null),
                                      e.preventDefault(),
                                      e.stopPropagation(),
                                      t)
                                  )
                                      (0, ed.l)(t), (0, eh.o)(t, { containingElement: (0, eg.m)(l.current) });
                                  else {
                                      if (d.getKeyLeftOf?.(n.key) !== n.key) {
                                          l.current.parentElement?.dispatchEvent(
                                              new KeyboardEvent(e.nativeEvent.type, e.nativeEvent),
                                          );
                                          break;
                                      }
                                      "cell" === y && "rtl" === c
                                          ? ((0, ed.l)(l.current),
                                            (0, eh.o)(l.current, { containingElement: (0, eg.m)(l.current) }))
                                          : ((r.currentNode = l.current),
                                            (t = "rtl" === c ? r.firstChild() : ev(r)) &&
                                                ((0, ed.l)(t),
                                                (0, eh.o)(t, { containingElement: (0, eg.m)(l.current) })));
                                  }
                                  break;
                              }
                              case "ArrowRight": {
                                  let t = "rtl" === c ? r.previousNode() : r.nextNode();
                                  if (
                                      ("child" === y && t === l.current && (t = null),
                                      e.preventDefault(),
                                      e.stopPropagation(),
                                      t)
                                  )
                                      (0, ed.l)(t), (0, eh.o)(t, { containingElement: (0, eg.m)(l.current) });
                                  else {
                                      if (d.getKeyRightOf?.(n.key) !== n.key) {
                                          l.current.parentElement?.dispatchEvent(
                                              new KeyboardEvent(e.nativeEvent.type, e.nativeEvent),
                                          );
                                          break;
                                      }
                                      "cell" === y && "ltr" === c
                                          ? ((0, ed.l)(l.current),
                                            (0, eh.o)(l.current, { containingElement: (0, eg.m)(l.current) }))
                                          : ((r.currentNode = l.current),
                                            (t = "rtl" === c ? ev(r) : r.firstChild()) &&
                                                ((0, ed.l)(t),
                                                (0, eh.o)(t, { containingElement: (0, eg.m)(l.current) })));
                                  }
                                  break;
                              }
                              case "ArrowUp":
                              case "ArrowDown":
                                  !e.altKey &&
                                      (0, H.sD)(l.current, (0, H.wt)(e)) &&
                                      (e.stopPropagation(),
                                      e.preventDefault(),
                                      l.current.parentElement?.dispatchEvent(
                                          new KeyboardEvent(e.nativeEvent.type, e.nativeEvent),
                                      ));
                          }
                      }
                    : void 0,
            onKeyDown:
                "tab" === g
                    ? (e) => {
                          let n = (0, H.bq)((0, ep.TW)(l.current));
                          if (
                              (0, H.sD)(e.currentTarget, (0, H.wt)(e)) &&
                              !t.isKeyboardNavigationDisabled &&
                              l.current &&
                              n
                          ) {
                              if ("tab" === g && (0, H.wt)(e) !== l.current && "Tab" !== e.key)
                                  return void e.stopPropagation();
                              if ("Tab" === e.key && "tab" === g) {
                                  let t = (0, w.N$)(l.current, { tabbable: !0 });
                                  (t.currentNode = n),
                                      (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
                              }
                          }
                      }
                    : void 0,
            "aria-colspan": n.colSpan,
            "aria-colindex": null != n.colIndex ? n.colIndex + 1 : void 0,
            colSpan: o ? void 0 : n.colSpan,
            onFocus: (e) => {
                if (((h.current = n.key), (0, H.wt)(e) !== l.current)) {
                    (0, ey.pP)() || t.selectionManager.setFocusedKey(n.key);
                    return;
                }
                ("child" === y && e.relatedTarget && (0, H.sD)(l.current, e.relatedTarget)) ||
                    requestAnimationFrame(() => {
                        "child" === y && (0, H.bq)((0, ep.TW)(l.current)) === l.current && m();
                    });
            },
            ...("child" === y && "tab" === g ? { tabIndex: -1 } : {}),
        });
    return (
        o && (b["aria-colindex"] = (n.colIndex ?? n.index) + 1),
        a &&
            null != b.tabIndex &&
            null == b.onPointerDown &&
            (b.onPointerDown = (e) => {
                let t = e.currentTarget,
                    l = t.getAttribute("tabindex");
                t.removeAttribute("tabindex"),
                    requestAnimationFrame(() => {
                        null != l && t.setAttribute("tabindex", l);
                    });
            }),
        { gridCellProps: b, isPressed: v }
    );
}
function ev(e) {
    let t = null,
        l = null;
    do (l = e.lastChild()) && (t = l);
    while (l);
    return t;
}
var eb = l(114218),
    ek = l(241453),
    ex = l(268678),
    eC = l(993558);
let eK = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    ew = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function eS(e, t) {
    return "lastChildKey" in t
        ? null != t.lastChildKey
            ? e.getItem(t.lastChildKey)
            : null
        : Array.from(t.childNodes).findLast((e) => e.parentKey === t.key);
}
var eD = l(467324);
class eE extends h.Wk {
    withExpandedKeys(e) {
        let t = this.clone();
        return (t.expandedKeys = e), (t.frozen = this.frozen), (t.rows = Array.from(t.getRows())), t;
    }
    addNode(e) {
        super.addNode(e), (this.columnsDirty ||= "column" === e.type), "tableheader" === e.type && (this.head = e);
    }
    getRows() {
        let e = [];
        for (let t of this) ("tablebody" === t.type || "tablefooter" === t.type) && e.push(...this.getChildren(t.key));
        return e;
    }
    get body() {
        for (let e of this) if ("tablebody" === e.type) return e;
        return new eQ(-2);
    }
    commit(e, t, l = !1) {
        for (let n of (this.updateColumns(l),
        (this.firstKey = e),
        (this.lastKey = t),
        (this.rows = []),
        this.getRows())) {
            let e = n.lastChildKey;
            if (null != e) {
                let t = this.getItem(e);
                for (; t && "cell" !== t.type; ) t = null != t.prevKey ? this.getItem(t.prevKey) : null;
                if (t) {
                    let e = (t.colIndex ?? t.index) + (t.colSpan ?? 1);
                    if (e !== this.columns.length && !l)
                        throw Error(
                            `Cell count must match column count. Found ${e} cells and ${this.columns.length} columns.`,
                        );
                }
            }
            this.rows.push(n);
        }
        super.commit(e, t, l);
    }
    updateColumns(e) {
        if (!this.columnsDirty) return;
        (this.rowHeaderColumnKeys = new Set()), (this.columns = []);
        let t = new Map(),
            l = (e) => {
                for (let n of ("column" === e.type &&
                    (t.set(e.key, e),
                    !e.hasChildNodes &&
                        ((e.index = this.columns.length),
                        this.columns.push(e),
                        e.props.isRowHeader && this.rowHeaderColumnKeys.add(e.key))),
                this.getChildren(e.key)))
                    l(n);
            };
        for (let e of this.getChildren(this.head.key)) l(e);
        if (
            ((this.headerRows = k(t, this.columns)),
            (this.columnsDirty = !1),
            0 === this.rowHeaderColumnKeys.size && this.columns.length > 0 && !e)
        )
            throw Error("A table must have at least one Column with the isRowHeader prop set to true");
    }
    get columnCount() {
        return this.columns.length;
    }
    *[Symbol.iterator]() {
        let e = this.firstKey;
        for (; null != e; ) {
            let t = this.getItem(e);
            t && (yield t), (e = t?.nextKey ?? null);
        }
    }
    getFirstKey() {
        for (let e of this) if ("tablebody" === e.type) return e.firstChildKey ?? null;
        return null;
    }
    getLastKey() {
        let e = this.lastKey;
        if (null == e) return null;
        let t = this.getItem(e);
        for (; t?.lastChildKey != null && ("item" !== t.type || this.expandedKeys.has(t.key)); )
            t = this.getItem(t.lastChildKey);
        return t?.key;
    }
    getKeyAfter(e) {
        let t = this.getItem(e);
        if (t?.type === "column") return t.nextKey ?? null;
        if (!t) return null;
        if ("item" === t.type && null != t.firstChildKey && this.expandedKeys.has(t.key)) {
            let e = this.getItem(t.firstChildKey);
            for (; e; ) {
                if ("item" === e.type) return e.key;
                e = null != e.nextKey ? this.getItem(e.nextKey) : null;
            }
        }
        return super.getKeyAfter(e);
    }
    getKeyBefore(e) {
        let t = this.getItem(e);
        if (t?.type === "column") return t.prevKey ?? null;
        if (!t) return null;
        let l = null;
        if (null != t.prevKey) {
            for (
                t = this.getItem(t.prevKey);
                t && ("item" !== t.type || this.expandedKeys.has(t.key)) && null != t.lastChildKey;
            )
                t = this.getItem(t.lastChildKey);
            l = t?.key ?? null;
        }
        return (null == l && (l = t.parentKey), null != l && this.getItem(l)?.type === "tableheader") ? null : l;
    }
    getChildren(e) {
        let t = this.getItem(e);
        if (!t) {
            for (let t of this.headerRows) if (t.key === e) return t.childNodes;
        }
        let l = this;
        return t?.type === "tablebody" || t?.type === "tablefooter"
            ? {
                  *[Symbol.iterator]() {
                      let e = t.firstChildKey,
                          n = null != e ? l.getItem(e) : null;
                      for (; n; ) {
                          yield n;
                          let e = l.getKeyAfter(n.key);
                          if ((n = null != e ? l.getItem(e) : null) && n.parentKey === t.parentKey) break;
                      }
                  },
              }
            : {
                  *[Symbol.iterator]() {
                      let t = l.getItem(e),
                          n = t?.firstChildKey != null ? l.getItem(t.firstChildKey) : null;
                      for (
                          ;
                          n &&
                          (yield n,
                          (n = null != n.nextKey ? l.getItem(n.nextKey) : null),
                          t?.type !== "item" || n?.type === "cell");
                      );
                  },
              };
    }
    clone() {
        let e = super.clone();
        return (
            (e.headerRows = this.headerRows),
            (e.columns = this.columns),
            (e.rows = this.rows),
            (e.rowHeaderColumnKeys = this.rowHeaderColumnKeys),
            (e.head = this.head),
            e
        );
    }
    getTextValue(e) {
        let t = this.getItem(e);
        if (!t) return "";
        if (t.textValue) return t.textValue;
        let l = this.rowHeaderColumnKeys,
            n = [];
        for (let t of this.getChildren(e)) {
            let e = this.columns[t.index];
            if ((l.has(e.key) && t.textValue && n.push(t.textValue), n.length === l.size)) break;
        }
        return n.join(" ");
    }
    constructor(...e) {
        super(...e),
            (this.headerRows = []),
            (this.columns = []),
            (this.rows = []),
            (this.rowHeaderColumnKeys = new Set()),
            (this.head = new eT(-1)),
            (this.columnsDirty = !0),
            (this.expandedKeys = new Set());
    }
}
let ez = (0, s.createContext)(null),
    eA = (0, s.createContext)(null),
    eN = (0, s.createContext)(null),
    eI = (0, s.createContext)(null),
    eP = (0, s.forwardRef)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, eA);
        let l = (0, N.R)(e),
            { selectionBehavior: n, selectionMode: o, disallowEmptySelection: i } = l,
            a = !!e.dragAndDropHooks?.useDraggableCollectionState,
            u = (0, s.useMemo)(
                () => ({
                    selectionBehavior: "none" === o ? null : n,
                    selectionMode: o,
                    disallowEmptySelection: i,
                    allowsDragging: a,
                }),
                [n, o, i, a],
            ),
            c = s.createElement(eR.Provider, { value: u }, s.createElement(C.pM, e));
        return s.createElement(C.GQ, { content: c, createCollection: () => new eE() }, (n) =>
            s.createElement(eF, { props: e, forwardedRef: t, selectionState: l, collection: n }),
        );
    }),
    eM = (0, s.forwardRef)(function (e, t) {
        let { isVirtualized: l } = (0, s.useContext)(i.zL);
        return l ? s.createElement(r.tT.div, { ...e, ref: t }) : s.createElement(r.tT.table, { ...e, ref: t });
    }),
    eB = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    e$ = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function eF({ props: e, forwardedRef: t, selectionState: l, collection: n }) {
    let o, c, p, h, f;
    [e, t] = (0, r.JT)(e, t, d.Co);
    let { shouldUseVirtualFocus: v, disallowTypeAhead: b, filter: k, ...C } = e,
        S = (0, s.useContext)(ez);
    t = (0, V.U)((0, s.useMemo)(() => (0, A.P)(t, S?.tableRef), [t, S?.tableRef]));
    let [E, $] = (0, M.P)(
        e.expandedKeys ? new Set(e.expandedKeys) : void 0,
        e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(),
        e.onExpandedChange,
    );
    n = (0, s.useMemo)(() => n.withExpandedKeys(E), [n, E]);
    let R = (function (e) {
            let [t, l] = (0, s.useState)(!1),
                { selectionMode: n = "none", showSelectionCheckboxes: o, showDragButtons: r, treeColumn: i = null } = e,
                a = (0, s.useMemo)(
                    () => ({
                        showSelectionCheckboxes: o && "none" !== n,
                        showDragButtons: r,
                        selectionMode: n,
                        columns: [],
                    }),
                    [e.children, o, n, r],
                ),
                u = (0, P.G)(
                    e,
                    (0, s.useCallback)((e) => new x(e, null, a), [a]),
                    a,
                ),
                { disabledKeys: c, selectionManager: d } = (function (e) {
                    let { collection: t, focusMode: l } = e,
                        n = e.UNSAFE_selectionState || (0, N.R)(e),
                        o = (0, s.useMemo)(
                            () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
                            [e.disabledKeys],
                        ),
                        r = n.setFocusedKey;
                    n.setFocusedKey = (e, n) => {
                        if ("cell" === l && null != e) {
                            let l = t.getItem(e);
                            if (l?.type === "item") {
                                let o = (0, m.iQ)(l, t);
                                e = "last" === n ? ((0, m.W)(o)?.key ?? null) : ((0, m.ue)(o)?.key ?? null);
                            }
                        }
                        r(e, n);
                    };
                    let i = (0, s.useMemo)(() => new (0, I.Y)(t, n), [t, n]),
                        a = (0, s.useRef)(null);
                    return (
                        (0, s.useEffect)(() => {
                            if (null != n.focusedKey && a.current && !t.getItem(n.focusedKey)) {
                                let e = a.current.getItem(n.focusedKey),
                                    l =
                                        e?.parentKey != null &&
                                        ("cell" === e.type || "rowheader" === e.type || "column" === e.type)
                                            ? a.current.getItem(e.parentKey)
                                            : e;
                                if (!l) return void n.setFocusedKey(null);
                                let o = a.current.rows,
                                    r = t.rows,
                                    s = o.length - r.length,
                                    u = Math.min(s > 1 ? Math.max(l.index - s + 1, 0) : l.index, r.length - 1),
                                    c = null;
                                for (let e = Math.max(0, u); e < r.length; e++)
                                    if (!i.isDisabled(r[e].key) && "headerrow" !== r[e].type) {
                                        c = r[e];
                                        break;
                                    }
                                if (null === c) {
                                    for (let e = u - 1; e >= 0; e--)
                                        if (!i.isDisabled(r[e].key) && "headerrow" !== r[e].type) {
                                            c = r[e];
                                            break;
                                        }
                                }
                                if (c) {
                                    let o = c.hasChildNodes ? [...(0, m.iQ)(c, t)] : [],
                                        r =
                                            c.hasChildNodes && l !== e && e && e.index < o.length
                                                ? o[e.index].key
                                                : c.key;
                                    n.setFocusedKey(r);
                                } else n.setFocusedKey(null);
                            }
                            a.current = t;
                        }, [t, i, n, n.focusedKey]),
                        { collection: t, disabledKeys: o, isKeyboardNavigationDisabled: !1, selectionManager: i }
                    );
                })({ ...e, collection: u, disabledBehavior: e.disabledBehavior || "selection" }),
                [p, g] = (0, M.P)(
                    e.expandedKeys ? new Set(e.expandedKeys) : void 0,
                    e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(),
                    e.onExpandedChange,
                );
            return {
                collection: u,
                disabledKeys: c,
                selectionManager: d,
                showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
                sortDescriptor: e.sortDescriptor ?? null,
                isKeyboardNavigationDisabled: 0 === u.size || t,
                setKeyboardNavigationDisabled: l,
                sort(t, l) {
                    e.onSortChange?.({
                        column: t,
                        direction: l ?? (e.sortDescriptor?.column === t ? B[e.sortDescriptor.direction] : "ascending"),
                    });
                },
                expandedKeys: p,
                toggleKey(e) {
                    g((t) => {
                        let l = new Set(t);
                        return l.has(e) ? l.delete(e) : l.add(e), l;
                    });
                },
                treeColumn: i,
            };
        })({ ...C, collection: n, children: void 0, UNSAFE_selectionState: l, expandedKeys: E, onExpandedChange: $ }),
        L =
            ((o = (0, s.useMemo)(() => (k ? R.collection.filter(k) : R.collection), [R.collection, k])),
            (c = R.selectionManager.withCollection(o)),
            { ...R, collection: o, selectionManager: c }),
        { isVirtualized: O, layoutDelegate: J, dropTargetDelegate: ee, CollectionRoot: et } = (0, s.useContext)(i.zL),
        { dragAndDropHooks: es } = e,
        { gridProps: ea } = (function (e, t, l) {
            var n;
            let { keyboardDelegate: o, isVirtualized: r, layoutDelegate: i, layout: a } = e,
                u = (0, _.Q)({ usage: "search", sensitivity: "base" }),
                { direction: c } = (0, T.Y)(),
                d = t.selectionManager.disabledBehavior,
                p = (0, s.useMemo)(
                    () =>
                        o ||
                        new en({
                            collection: t.collection,
                            disabledKeys: t.disabledKeys,
                            disabledBehavior: d,
                            ref: l,
                            direction: c,
                            collator: u,
                            layoutDelegate: i,
                            layout: a,
                        }),
                    [o, t.collection, t.disabledKeys, d, l, c, u, i, a],
                ),
                g = (0, X.Bi)(e.id);
            Z.set(t, g);
            let { gridProps: y } = (function (e, t, l) {
                let {
                        isVirtualized: n,
                        disallowTypeAhead: o,
                        keyboardDelegate: r,
                        focusMode: i,
                        scrollRef: a,
                        getRowText: u,
                        onRowAction: c,
                        onCellAction: d,
                        escapeKeyBehavior: p = "clearSelection",
                        shouldSelectOnPressUp: g,
                        keyboardNavigationBehavior: y = "arrow",
                    } = e,
                    { selectionManager: h } = t;
                e["aria-label"] ||
                    e["aria-labelledby"] ||
                    console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
                let m = (0, _.Q)({ usage: "search", sensitivity: "base" }),
                    { direction: f } = (0, T.Y)(),
                    v = t.selectionManager.disabledBehavior,
                    b = (0, s.useMemo)(
                        () =>
                            r ||
                            new U({
                                collection: t.collection,
                                disabledKeys: t.disabledKeys,
                                disabledBehavior: v,
                                ref: l,
                                direction: f,
                                collator: m,
                                focusMode: i,
                            }),
                        [r, t.collection, t.disabledKeys, v, l, f, m, i],
                    ),
                    { collectionProps: k } = (0, G.y)({
                        ref: l,
                        selectionManager: h,
                        keyboardDelegate: b,
                        isVirtualized: n,
                        scrollRef: a,
                        disallowTypeAhead: o,
                        escapeKeyBehavior: p,
                    }),
                    x = (0, X.Bi)(e.id);
                W.set(t, {
                    keyboardDelegate: b,
                    actions: { onRowAction: c, onCellAction: d },
                    shouldSelectOnPressUp: g,
                    keyboardNavigationBehavior: y,
                });
                let C = (0, Y.m)({ selectionManager: h, hasItemActions: !!(c || d) }),
                    w = (0, K.$)(e, { labelable: !0 }),
                    S = (0, s.useCallback)(
                        (e) => {
                            if (h.isFocused) {
                                (0, H.sD)(e.currentTarget, (0, H.wt)(e)) || h.setFocused(!1);
                                return;
                            }
                            (0, H.sD)(e.currentTarget, (0, H.wt)(e)) && h.setFocused(!0);
                        },
                        [h],
                    ),
                    D = (0, s.useMemo)(() => ({ onBlur: k.onBlur, onFocus: S }), [S, k.onBlur]),
                    E = (0, q.$)(l, { isDisabled: 0 !== t.collection.size }),
                    A = (0, z.v)(
                        w,
                        {
                            role: "grid",
                            id: x,
                            "aria-multiselectable": "multiple" === h.selectionMode ? "true" : void 0,
                        },
                        t.isKeyboardNavigationDisabled ? D : k,
                        (0 === t.collection.size && { tabIndex: E ? -1 : 0 }) || void 0,
                        C,
                    );
                return (
                    n && ((A["aria-rowcount"] = t.collection.size), (A["aria-colcount"] = t.collection.columnCount)),
                    (0, Q.H)({ getRowText: u }, t),
                    { gridProps: A }
                );
            })({ ...e, id: g, keyboardDelegate: p }, t, l);
            r && (y["aria-rowcount"] = t.collection.size + t.collection.headerRows.length),
                null != t.treeColumn && (y.role = "treegrid");
            let { column: h, direction: m } = t.sortDescriptor || {},
                f = (0, er.o)((n = el) && n.__esModule ? n.default : n, "@react-aria/table"),
                v = (0, s.useMemo)(() => {
                    let e = t.collection.columns.find((e) => e.key === h)?.textValue ?? "";
                    return m && h ? f.format(`${m}Sort`, { columnName: e }) : void 0;
                }, [m, h, t.collection.columns]),
                b = (0, eo.I)(v);
            return (
                (0, ei.w)(() => {
                    v && (0, j.iP)(v, "assertive", 500);
                }, [v]),
                {
                    gridProps: (0, z.v)(y, b, {
                        "aria-describedby": [b["aria-describedby"], y["aria-describedby"]].filter(Boolean).join(" "),
                    }),
                }
            );
        })({ ...C, layoutDelegate: J, isVirtualized: O }, L, t),
        eu = L.selectionManager,
        ec = !!es?.useDraggableCollectionState,
        ed = !!es?.useDroppableCollectionState;
    (0, s.useRef)(ec), (0, s.useRef)(ed), (0, s.useEffect)(() => {}, [ec, ed]);
    let ep = !1,
        eg = null,
        ey = (0, s.useRef)(null),
        { direction: eh } = (0, T.Y)(),
        [em] = (0, s.useState)(() => new y());
    if (ec && es) {
        (p = es.useDraggableCollectionState({
            collection: L.collection,
            selectionManager: eu,
            preview: es.renderDragPreview ? ey : void 0,
        })),
            es.useDraggableCollection({}, p, t);
        let e = es.DragPreview;
        eg = es.renderDragPreview ? s.createElement(e, { ref: ey }, es.renderDragPreview) : null;
    }
    if (ed && es) {
        h = es.useDroppableCollectionState({ collection: L.collection, selectionManager: eu });
        let e = new (0, D.n)({
                collection: L.collection,
                disabledKeys: eu.disabledKeys,
                disabledBehavior: eu.disabledBehavior,
                ref: t,
                layoutDelegate: J,
            }),
            l = es.dropTargetDelegate || ee || new es.ListDropTargetDelegate(n.rows, t);
        em.setup(l, R, eh),
            (f = es.useDroppableCollection(
                {
                    keyboardDelegate: e,
                    dropTargetDelegate: em,
                    onDropActivate: (e) => {
                        if ("item" === e.target.type) {
                            let t = e.target.key,
                                l = R.collection.getItem(t),
                                n = E.has(t);
                            l && l.hasChildNodes && (!n || es?.isVirtualDragging?.()) && R.toggleKey(t);
                        }
                    },
                    onKeyDown: (e) => {
                        let t = h?.target;
                        if (t && "item" === t.type && "on" === t.dropPosition) {
                            let l = R.collection.getItem(t.key);
                            e.key === eB[eh] && l?.hasChildNodes && !R.expandedKeys.has(t.key)
                                ? R.toggleKey(t.key)
                                : e.key === e$[eh] &&
                                  l?.hasChildNodes &&
                                  R.expandedKeys.has(t.key) &&
                                  R.toggleKey(t.key);
                        }
                    },
                },
                h,
                t,
            )),
            (ep = h.isDropTarget({ type: "root" }));
    }
    let { focusProps: ef, isFocused: ev, isFocusVisible: eb } = (0, F.o)(),
        ek = (0, r.Sl)({
            ...e,
            children: void 0,
            defaultClassName: "react-aria-Table",
            values: { isDropTarget: ep, isFocused: ev, isFocusVisible: eb, state: L },
        }),
        ex = !!(ec && !p?.isDisabled),
        eC = ek.style,
        eK = null;
    S &&
        ((eK = S.useTableColumnResizeState({ tableWidth: S.tableWidth }, L)),
        O || (eC = { ...eC, tableLayout: "fixed", width: "min-content" }));
    let ew = (0, K.$)(e, { global: !0 });
    return s.createElement(
        r.Kq,
        {
            values: [
                [eN, L],
                [eI, eK],
                [a, { dragAndDropHooks: es, dragState: p, dropState: h }],
                [u, { render: e5 }],
                [d.Co, null],
                [d.wv, null],
            ],
        },
        s.createElement(
            w.n1,
            null,
            s.createElement(
                eM,
                {
                    ...(0, z.v)(ew, ek, ea, ef, f?.collectionProps),
                    style: eC,
                    ref: t,
                    slot: e.slot || void 0,
                    onScroll: e.onScroll,
                    "data-allows-dragging": ex || void 0,
                    "data-drop-target": ep || void 0,
                    "data-focused": ev || void 0,
                    "data-focus-visible": eb || void 0,
                },
                s.createElement(
                    g.D,
                    null,
                    s.createElement(et, {
                        collection: L.collection,
                        scrollRef: S?.scrollRef ?? t,
                        persistedKeys: (function (e, t, l) {
                            let n = e.focusedKey,
                                o = null;
                            if (
                                t?.isVirtualDragging?.() &&
                                l?.target?.type === "item" &&
                                ((o = l.target.key), "after" === l.target.dropPosition)
                            ) {
                                let e = l.collection.getKeyAfter(o),
                                    t = null;
                                if (null != e) {
                                    let n = l.collection.getItem(o)?.level ?? 0;
                                    for (; null != e; ) {
                                        let o = l.collection.getItem(e);
                                        if (!o) break;
                                        if ("item" !== o.type) {
                                            e = l.collection.getKeyAfter(e);
                                            continue;
                                        }
                                        if ((o.level ?? 0) <= n) break;
                                        (t = e), (e = l.collection.getKeyAfter(e));
                                    }
                                }
                                o = e ?? t ?? o;
                            }
                            return (0, s.useMemo)(() => new Set([n, o].filter((e) => null != e)), [n, o]);
                        })(eu, es, h),
                    }),
                ),
            ),
        ),
        eg,
    );
}
let eR = (0, s.createContext)(null);
class eT extends h.Pt {
    static {
        this.type = "tableheader";
    }
}
let eV = (0, s.forwardRef)(function (e, t) {
        let { isVirtualized: l } = (0, s.useContext)(i.zL);
        return l ? s.createElement(r.tT.div, { ...e, ref: t }) : s.createElement(r.tT.thead, { ...e, ref: t });
    }),
    ej = (0, C.yq)(
        eT,
        (e, t) => {
            let l = (0, s.useContext)(eN).collection,
                n = (0, $.p)({
                    items: l.headerRows,
                    children: (0, s.useCallback)((e) => {
                        if ("headerrow" === e.type) return s.createElement(eL, { item: e });
                        throw Error("Unsupported node type in TableHeader: " + e.type);
                    }, []),
                }),
                { rowGroupProps: o } = es(),
                { hoverProps: i, isHovered: a } = (0, R.M)({
                    onHoverStart: e.onHoverStart,
                    onHoverChange: e.onHoverChange,
                    onHoverEnd: e.onHoverEnd,
                }),
                u = (0, r.Sl)({
                    ...e,
                    children: void 0,
                    defaultClassName: "react-aria-TableHeader",
                    values: { isHovered: a },
                });
            return s.createElement(
                eV,
                { ...(0, z.v)((0, K.$)(e, { global: !0 }), o, i), ...u, ref: t, "data-hovered": a || void 0 },
                n,
            );
        },
        (e) => s.createElement(C.pM, { dependencies: e.dependencies, items: e.columns }, e.children),
    ),
    eH = (0, s.forwardRef)(function (e, t) {
        let { isVirtualized: l } = (0, s.useContext)(i.zL);
        return l ? s.createElement("div", { ...e, ref: t }) : s.createElement("tr", { ...e, ref: t });
    });
function eL({ item: e }) {
    let t = (0, s.useRef)(null),
        l = (0, s.useContext)(eN),
        { isVirtualized: n, CollectionBranch: a } = (0, s.useContext)(i.zL),
        { rowProps: u } = (function (e, t) {
            let { node: l, isVirtualized: n } = e,
                o = { role: "row" };
            return n && null == t.treeColumn && (o["aria-rowindex"] = l.index + 1), { rowProps: o };
        })({ node: e, isVirtualized: n }, l),
        { checkboxProps: c } = (function (e) {
            var t;
            let { isEmpty: l, isSelectAll: n, selectionMode: o } = e.selectionManager;
            return {
                checkboxProps: {
                    "aria-label": (0, er.o)((t = el) && t.__esModule ? t.default : t, "@react-aria/table").format(
                        "single" === o ? "select" : "selectAll",
                    ),
                    isSelected: n,
                    isDisabled:
                        "multiple" !== o ||
                        0 === e.collection.size ||
                        (1 === e.collection.rows.length && "loader" === e.collection.rows[0].type),
                    isIndeterminate: !l && !n,
                    onChange: () => e.selectionManager.toggleSelectAll(),
                },
            };
        })(l);
    return s.createElement(
        eH,
        { ...u, ref: t },
        s.createElement(
            r.Kq,
            {
                values: [
                    [o.BP, { slots: { selection: c } }],
                    [o.t7, { slots: { selection: c } }],
                ],
            },
            s.createElement(a, { collection: l.collection, parent: e }),
        ),
    );
}
class eU extends h.Pt {
    static {
        this.type = "column";
    }
}
let eO = (0, s.forwardRef)(function (e, t) {
        let { isVirtualized: l } = (0, s.useContext)(i.zL);
        return l ? s.createElement(r.tT.div, { ...e, ref: t }) : s.createElement(r.tT.th, { ...e, ref: t });
    }),
    eW = (0, C.KU)(eU, (e, t, l) => {
        let n = (0, V.U)(t),
            o = (0, s.useContext)(eN),
            { isVirtualized: a } = (0, s.useContext)(i.zL),
            { columnHeaderProps: u, isPressed: c } = (function (e, t, l) {
                var n;
                let o,
                    r,
                    { node: i } = e,
                    a = i.props.allowsSorting,
                    { gridCellProps: u } = ef({ focusMode: "child", ...e }, t, l),
                    c = i.props.isSelectionCell && "single" === t.selectionManager.selectionMode,
                    { pressProps: d, isPressed: p } = (0, eb.d)({
                        isDisabled: !a || c,
                        onPress() {
                            t.sort(i.key);
                        },
                        ref: l,
                    }),
                    { focusableProps: g } = (0, ec.Wc)({}, l),
                    y = t.sortDescriptor?.column === i.key,
                    h = t.sortDescriptor?.direction;
                i.props.allowsSorting && !(0, eu.m0)() && (o = y ? h : "none");
                let m = (0, er.o)((n = el) && n.__esModule ? n.default : n, "@react-aria/table");
                a && ((r = `${m.format("sortable")}`), y && h && (0, eu.m0)() && (r = `${r}, ${m.format(h)}`));
                let f = (0, eo.I)(r),
                    v = 0 === t.collection.size;
                return (
                    (0, s.useEffect)(() => {
                        v && t.selectionManager.focusedKey === i.key && t.selectionManager.setFocusedKey(null);
                    }, [v, t.selectionManager, i.key]),
                    {
                        columnHeaderProps: {
                            ...(0, z.v)(g, u, d, f, v ? { tabIndex: -1 } : null),
                            role: "columnheader",
                            id: (function (e, t) {
                                let l = Z.get(e);
                                if (!l) throw Error("Unknown grid");
                                return `${l}-${J(t)}`;
                            })(t, i.key),
                            "aria-colspan": i.colSpan && i.colSpan > 1 ? i.colSpan : void 0,
                            "aria-sort": o,
                        },
                        isPressed: p,
                    }
                );
            })(
                { node: l, isVirtualized: a, focusMode: e.focusMode, allowsArrowNavigation: e.allowsArrowNavigation },
                o,
                n,
            ),
            { isFocused: d, isFocusVisible: p, focusProps: g } = (0, F.o)(),
            y = (0, s.useContext)(eI),
            h = !1;
        y && (h = y.resizingColumn === l.key);
        let { hoverProps: m, isHovered: f } = (0, R.M)({ isDisabled: !e.allowsSorting }),
            v = (0, r.Sl)({
                ...e,
                id: void 0,
                children: l.rendered,
                defaultClassName: "react-aria-Column",
                values: {
                    isHovered: f,
                    isPressed: c,
                    isFocused: d,
                    isFocusVisible: p,
                    allowsSorting: l.props.allowsSorting,
                    sortDirection: o.sortDescriptor?.column === l.key ? o.sortDescriptor.direction : void 0,
                    isResizing: h,
                    startResize: () => {
                        if (y) y.startResize(l.key), o.setKeyboardNavigationDisabled(!0);
                        else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
                    },
                    sort: (e) => {
                        o.sort(l.key, e);
                    },
                },
            }),
            b = v.style;
        y && (b = { ...b, width: y.getColumnWidth(l.key) });
        let k = (0, K.$)(e, { global: !0 });
        return (
            delete k.id,
            s.createElement(
                eO,
                {
                    ...(0, z.v)(k, u, g, m),
                    ...v,
                    style: b,
                    ref: n,
                    "data-hovered": f || void 0,
                    "data-pressed": c || void 0,
                    "data-focused": d || void 0,
                    "data-focus-visible": p || void 0,
                    "data-resizing": h || void 0,
                    "data-allows-sorting": l.props.allowsSorting || void 0,
                    "data-sort-direction": o.sortDescriptor?.column === l.key ? o.sortDescriptor.direction : void 0,
                },
                s.createElement(
                    r.Kq,
                    {
                        values: [
                            [e_, { column: l, triggerRef: n }],
                            [i.zL, i.N],
                        ],
                    },
                    v.children,
                ),
            )
        );
    }),
    e_ = (0, s.createContext)(null);
class eQ extends h.ru {
    static {
        this.type = "tablebody";
    }
}
let eq = (0, s.forwardRef)(function (e, t) {
        let { isVirtualized: l } = (0, s.useContext)(i.zL);
        return l ? s.createElement(r.tT.div, { ...e, ref: t }) : s.createElement(r.tT.tbody, { ...e, ref: t });
    }),
    eY = (0, C.yq)(eQ, (e, t, l) => {
        let n,
            o,
            u,
            d,
            p = (0, s.useContext)(eN),
            { isVirtualized: g } = (0, s.useContext)(i.zL),
            y = p.collection,
            { CollectionBranch: h } = (0, s.useContext)(i.zL),
            { dragAndDropHooks: m, dropState: f } = (0, s.useContext)(a),
            v = !!m?.useDroppableCollectionState && !f?.isDisabled,
            b = v && !!f && (f.isDropTarget({ type: "root" }) ?? !1),
            k = 0 === y.size,
            x = { isDropTarget: b, isEmpty: k },
            C = (0, r.Sl)({ ...e, id: void 0, children: void 0, defaultClassName: "react-aria-TableBody", values: x }),
            w = y.columnCount;
        if (k && e.renderEmptyState && p) {
            let t = {},
                l = {};
            g ? ((t["aria-colspan"] = w), (l = { display: "contents" })) : (t.colSpan = w),
                (d = s.createElement(
                    eJ,
                    { role: "row", style: l },
                    s.createElement(e3, { role: "rowheader", ...t, style: l }, e.renderEmptyState(x)),
                ));
        }
        let { rowGroupProps: S } = es(),
            D = (0, K.$)(e, { global: !0 });
        return s.createElement(
            eq,
            { ...(0, z.v)(D, C, S), ref: t, "data-empty": k || void 0 },
            v && s.createElement(e9, null),
            s.createElement(h, {
                collection: y,
                parent: l,
                renderDropIndicator:
                    ((n = m?.renderDropIndicator),
                    (o = m?.isVirtualDragging?.()),
                    (u = (0, s.useCallback)(
                        (e) => {
                            if (o || f?.isDropTarget(e)) return n ? n(e) : s.createElement(c, { target: e });
                        },
                        [f?.target, o, n],
                    )),
                    m?.useDropIndicator ? u : void 0),
            }),
            d,
        );
    });
class eX extends h.ru {
    static {
        this.type = "tablefooter";
    }
}
let eG = (0, s.createContext)({ isFocusVisibleWithinRow: !1 });
class eZ extends h.Pt {
    static {
        this.type = "item";
    }
    filter(e, t, l) {
        for (let n of e.getChildren(this.key))
            if (l(n.textValue, n)) {
                let l = this.clone();
                return t.addDescendants(l, e), l;
            }
        return null;
    }
}
let eJ = (0, s.forwardRef)(function (e, t) {
        let { isVirtualized: l } = (0, s.useContext)(i.zL);
        return l ? s.createElement(r.tT.div, { ...e, ref: t }) : s.createElement(r.tT.tr, { ...e, ref: t });
    }),
    e0 = (0, C.yq)(
        eZ,
        (e, t, l) => {
            let u,
                c,
                d = (0, V.U)(t),
                g = (0, s.useContext)(eN),
                { dragAndDropHooks: y, dragState: h, dropState: m } = (0, s.useContext)(a),
                { isVirtualized: f, CollectionBranch: v } = (0, s.useContext)(i.zL),
                b = h && !(h.isDisabled || h.selectionManager.isDisabled(l.key)),
                {
                    rowProps: k,
                    expandButtonProps: x,
                    ...C
                } = (function (e, t, l) {
                    var n;
                    let { node: o, isVirtualized: r } = e,
                        { rowProps: i, ...s } = (function (e, t, l) {
                            let { node: n, isVirtualized: o, shouldSelectOnPressUp: r, onAction: i } = e,
                                { actions: s, shouldSelectOnPressUp: a } = W.get(t),
                                u = s.onRowAction ? () => s.onRowAction?.(n.key) : i,
                                { itemProps: c, ...d } = (0, em.p)({
                                    selectionManager: t.selectionManager,
                                    key: n.key,
                                    ref: l,
                                    isVirtualized: o,
                                    shouldSelectOnPressUp: a || r,
                                    onAction: u || n?.props?.onAction ? (0, ek.c)(n?.props?.onAction, u) : void 0,
                                    isDisabled: 0 === t.collection.size,
                                }),
                                p = t.selectionManager.isSelected(n.key),
                                g = {
                                    role: "row",
                                    "aria-selected": "none" !== t.selectionManager.selectionMode ? p : void 0,
                                    "aria-disabled": d.isDisabled || void 0,
                                    ...c,
                                };
                            return o && (g["aria-rowindex"] = n.index + 1), { rowProps: g, ...d };
                        })(e, t, l),
                        { direction: a } = (0, T.Y)();
                    r && null == t.treeColumn
                        ? (i["aria-rowindex"] = o.index + 1 + t.collection.headerRows.length)
                        : delete i["aria-rowindex"];
                    let u = null != t.treeColumn && ("all" === t.expandedKeys || t.expandedKeys.has(o.key)),
                        c = (0, er.o)((n = el) && n.__esModule ? n.default : n, "@react-aria/table"),
                        d = (0, ex.b)({
                            "aria-label": u ? c.format("collapse") : c.format("expand"),
                            "aria-labelledby": et(t, o.key),
                        }),
                        p = {},
                        g = {};
                    if (null != t.treeColumn) {
                        let e = t.collection.getItem(o.key);
                        if (null != e) {
                            let l = eS(t.collection, o),
                                n = e.props?.hasChildRows || e.props?.UNSTABLE_childItems || l?.type !== "cell",
                                r = t.collection.getItem(o.parentKey),
                                i = "tablebody" === r.type || "body" === r.type,
                                u = eS(t.collection, r);
                            for (; u && "item" !== u.type && null != u.prevKey; ) u = t.collection.getItem(u.prevKey);
                            (p = {
                                onKeyDown: (l) => {
                                    l.key === eK[a] &&
                                    t.selectionManager.focusedKey === e.key &&
                                    n &&
                                    "all" !== t.expandedKeys &&
                                    !t.expandedKeys.has(e.key)
                                        ? (t.toggleKey(e.key), l.stopPropagation())
                                        : l.key === ew[a] &&
                                          t.selectionManager.focusedKey === e.key &&
                                          ("all" !== t.expandedKeys
                                              ? n && t.expandedKeys.has(e.key)
                                                  ? (t.toggleKey(e.key), l.stopPropagation())
                                                  : !t.expandedKeys.has(e.key) &&
                                                    null != e.parentKey &&
                                                    e.level > 0 &&
                                                    (t.selectionManager.setFocusedKey(e.parentKey), l.stopPropagation())
                                              : "all" === t.expandedKeys && (t.toggleKey(e.key), l.stopPropagation()));
                                },
                                "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(o.key) : void 0,
                                "aria-level": e.level + 1,
                                "aria-posinset": e.index - (i ? 0 : t.collection.columnCount) + 1,
                                "aria-setsize": u.index - (i ? 0 : t.collection.columnCount) + 1,
                            }),
                                (g = {
                                    isDisabled: s.isDisabled,
                                    onPress: () => {
                                        s.isDisabled ||
                                            (t.toggleKey(o.key),
                                            t.selectionManager.setFocused(!0),
                                            t.selectionManager.setFocusedKey(o.key));
                                    },
                                    excludeFromTabOrder: !0,
                                    preventFocusOnPress: !0,
                                    "data-react-aria-prevent-focus": !0,
                                    ...d,
                                });
                        }
                    }
                    let y = (0, eC.HI)(o.props),
                        h = s.hasAction ? y : {};
                    return {
                        rowProps: { ...(0, z.v)(i, p, h), "aria-labelledby": et(t, o.key) },
                        expandButtonProps: g,
                        ...s,
                    };
                })({ node: l, shouldSelectOnPressUp: !!h, isVirtualized: f }, g, d),
                { isFocused: w, isFocusVisible: S, focusProps: D } = (0, F.o)(),
                { isFocusVisible: E, focusProps: A } = (0, F.o)({ within: !0 }),
                { hoverProps: N, isHovered: I } = (0, R.M)({
                    isDisabled: !C.allowsSelection && !C.hasAction && !b,
                    onHoverStart: e.onHoverStart,
                    onHoverChange: e.onHoverChange,
                    onHoverEnd: e.onHoverEnd,
                }),
                { checkboxProps: P } = (function (e, t) {
                    let { key: l } = e,
                        { checkboxProps: n } = (function (e, t) {
                            var l;
                            let { key: n } = e,
                                o = t.selectionManager,
                                r = (0, X.Bi)(),
                                i = !t.selectionManager.canSelectItem(n),
                                s = t.selectionManager.isSelected(n);
                            return {
                                checkboxProps: {
                                    id: r,
                                    "aria-label": (0, er.o)(
                                        (l = ea.A) && l.__esModule ? l.default : l,
                                        "@react-aria/grid",
                                    ).format("select"),
                                    isSelected: s,
                                    isDisabled: i,
                                    onChange: () => o.toggleSelection(n),
                                },
                            };
                        })(e, t);
                    return { checkboxProps: { ...n, "aria-labelledby": `${n.id} ${et(t, l)}` } };
                })({ key: l.key }, g);
            h && y && (u = y.useDraggableItem({ key: l.key, hasDragButton: !0 }, h));
            let M = (0, s.useRef)(null),
                { visuallyHiddenProps: B } = (0, eD.B)();
            m && y && (c = y.useDropIndicator({ target: { type: "item", key: l.key, dropPosition: "on" } }, m, M));
            let $ = (0, s.useRef)(null);
            (0, s.useEffect)(() => {
                h && $.current;
            }, []);
            let j = h && h.isDragging(l.key),
                { children: H, ...L } = e,
                U = e.hasChildItems || g.collection.getItem(l.lastChildKey)?.type !== "cell",
                O = U && g.expandedKeys.has(l.key),
                _ = (0, r.Sl)({
                    ...L,
                    id: void 0,
                    defaultClassName: "react-aria-Row",
                    defaultStyle: { "--table-row-level": l.level + 1 },
                    values: {
                        ...C,
                        state: g,
                        isHovered: I,
                        isFocused: w,
                        isFocusVisible: S,
                        selectionMode: g.selectionManager.selectionMode,
                        selectionBehavior: g.selectionManager.selectionBehavior,
                        isDragging: j,
                        isDropTarget: c?.isDropTarget,
                        isFocusVisibleWithin: E,
                        id: l.key,
                        hasChildItems: U,
                        isExpanded: O,
                        level: l.level + 1,
                    },
                }),
                Q = (0, K.$)(e, { global: !0 });
            return (
                delete Q.id,
                delete Q.onClick,
                s.createElement(
                    s.Fragment,
                    null,
                    c &&
                        !c.isHidden &&
                        s.createElement(
                            eJ,
                            { role: "row", style: { height: 0 } },
                            s.createElement(
                                e3,
                                { role: "gridcell", colSpan: g.collection.columnCount, style: { padding: 0 } },
                                s.createElement("div", { role: "button", ...B, ...c.dropIndicatorProps, ref: M }),
                            ),
                        ),
                    s.createElement(
                        eJ,
                        {
                            ...(0, z.v)(Q, _, k, D, N, u?.dragProps, A),
                            ref: d,
                            "data-disabled": C.isDisabled || void 0,
                            "data-selected": C.isSelected || void 0,
                            "data-hovered": I || void 0,
                            "data-focused": C.isFocused || void 0,
                            "data-focus-visible": S || void 0,
                            "data-pressed": C.isPressed || void 0,
                            "data-dragging": j || void 0,
                            "data-drop-target": c?.isDropTarget || void 0,
                            "data-selection-mode":
                                "none" === g.selectionManager.selectionMode ? void 0 : g.selectionManager.selectionMode,
                            "data-focus-visible-within": E || void 0,
                            "data-expanded": O || void 0,
                            "data-has-child-items": U || void 0,
                            "data-level": l.level + 1,
                        },
                        s.createElement(
                            r.Kq,
                            {
                                values: [
                                    [o.BP, { slots: { [r.P_]: {}, selection: P } }],
                                    [o.t7, { slots: { [r.P_]: {}, selection: P } }],
                                    [
                                        n.k,
                                        {
                                            slots: {
                                                [r.P_]: {},
                                                chevron: x,
                                                drag: {
                                                    ...u?.dragButtonProps,
                                                    ref: $,
                                                    style: { pointerEvents: "none" },
                                                },
                                            },
                                        },
                                    ],
                                    [p.r, { isSelected: C.isSelected }],
                                    [eG, { isFocusVisibleWithinRow: E }],
                                ],
                            },
                            s.createElement(v, { collection: g.collection, parent: l }),
                        ),
                    ),
                )
            );
        },
        (e) => {
            if (null == e.id && "function" == typeof e.children)
                throw Error(
                    "No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.",
                );
            let t = [e.value].concat(e.dependencies);
            return s.createElement(C.pM, { dependencies: t, items: e.columns, idScope: e.id }, e.children);
        },
    );
class e4 extends h.Pt {
    static {
        this.type = "cell";
    }
}
let e3 = (0, s.forwardRef)(function (e, t) {
        let { isVirtualized: l } = (0, s.useContext)(i.zL);
        return l ? s.createElement(r.tT.div, { ...e, ref: t }) : s.createElement(r.tT.td, { ...e, ref: t });
    }),
    e1 = (0, C.KU)(e4, (e, t, l) => {
        let n = (0, V.U)(t),
            o = (0, s.useContext)(eN),
            { dragState: u } = (0, s.useContext)(a),
            { isVirtualized: c } = (0, s.useContext)(i.zL);
        l.column = o.collection.columns[l.index];
        let { gridCellProps: d, isPressed: p } = (function (e, t, l) {
                let { gridCellProps: n, isPressed: o } = ef(e, t, l),
                    r = e.node.column?.key;
                return (
                    null != r &&
                        t.collection.rowHeaderColumnKeys.has(r) &&
                        ((n.role = "rowheader"), (n.id = ee(t, e.node.parentKey, r))),
                    { gridCellProps: n, isPressed: o }
                );
            })(
                {
                    node: l,
                    shouldSelectOnPressUp: !!u,
                    isVirtualized: c,
                    focusMode: e.focusMode,
                    allowsArrowNavigation: e.allowsArrowNavigation,
                },
                o,
                n,
            ),
            { isFocused: g, isFocusVisible: y, focusProps: h } = (0, F.o)(),
            { hoverProps: m, isHovered: f } = (0, R.M)({}),
            { isFocusVisibleWithinRow: v } = (0, s.useContext)(eG),
            b = null != l.parentKey && o.selectionManager.isSelected(l.parentKey),
            k = l.colIndex || l.index,
            x = o.collection.getItem(l.parentKey),
            C = x.props.hasChildItems || o.collection.getItem(x.lastChildKey)?.type !== "cell",
            w = C && o.expandedKeys.has(l.parentKey),
            S = o.selectionManager.isDisabled(l.parentKey),
            D = (0, r.Sl)({
                ...e,
                id: void 0,
                defaultClassName: "react-aria-Cell",
                values: {
                    isFocused: g,
                    isFocusVisible: y,
                    isFocusVisibleWithinRow: v,
                    isPressed: p,
                    isHovered: f,
                    isSelected: b,
                    id: l.key,
                    columnIndex: k,
                    hasChildItems: C,
                    isExpanded: w,
                    isDisabled: S,
                    level: x.level + 1,
                    isTreeColumn: l.column.key === o.treeColumn,
                },
            }),
            E = (0, K.$)(e, { global: !0 });
        return (
            delete E.id,
            s.createElement(
                e3,
                {
                    ...(0, z.v)(E, D, d, h, m),
                    ref: n,
                    "data-focused": g || void 0,
                    "data-focus-visible": y || void 0,
                    "data-focus-visible-within-row": v || void 0,
                    "data-pressed": p || void 0,
                    "data-selected": b || void 0,
                    "data-column-index": k,
                    "data-expanded": w || void 0,
                    "data-has-child-items": C || void 0,
                    "data-level": x.level + 1,
                    "data-tree-column": l.column.key === o.treeColumn || void 0,
                    "data-disabled": S || void 0,
                },
                s.createElement(i.zL.Provider, { value: i.N }, D.children),
            )
        );
    });
function e5(e, t) {
    t = (0, V.U)(t);
    let { dragAndDropHooks: l, dropState: n } = (0, s.useContext)(a),
        o = (0, s.useRef)(null),
        { dropIndicatorProps: r, isHidden: i, isDropTarget: u } = l.useDropIndicator(e, n, o);
    if (i) return null;
    let c = n && "item" === e.target.type ? (n.collection.getItem(e.target.key)?.level || 0) + 1 : 1;
    return s.createElement(e8, { ...e, dropIndicatorProps: r, isDropTarget: u, buttonRef: o, level: c, ref: t });
}
let e6 = (0, s.forwardRef)(function (e, t) {
        let { isVirtualized: l } = (0, s.useContext)(i.zL);
        return l ? s.createElement(r.tT.div, { ...e, ref: t }) : s.createElement(r.tT.tr, { ...e, ref: t });
    }),
    e2 = (0, s.forwardRef)(function (e, t) {
        let { isVirtualized: l } = (0, s.useContext)(i.zL);
        return l ? s.createElement(r.tT.div, { ...e, ref: t }) : s.createElement(r.tT.td, { ...e, ref: t });
    }),
    e8 = (0, s.forwardRef)(function (e, t) {
        let { dropIndicatorProps: l, isDropTarget: n, buttonRef: o, level: i, ...a } = e,
            u = (0, s.useContext)(eN),
            { visuallyHiddenProps: c } = (0, eD.B)(),
            d = (0, r.Sl)({
                ...a,
                defaultClassName: "react-aria-DropIndicator",
                defaultStyle: { "--table-row-level": i + 1 },
                values: { isDropTarget: n },
            });
        return s.createElement(
            e6,
            {
                ...(0, K.$)(e, { global: !0 }),
                ...d,
                role: "row",
                ref: t,
                "data-drop-target": n || void 0,
                "aria-level": i,
            },
            s.createElement(
                e2,
                { role: "gridcell", colSpan: u.collection.columnCount, style: { padding: 0 } },
                s.createElement("div", { ...c, role: "button", ...l, ref: o }),
                d.children,
            ),
        );
    });
function e9() {
    let e = (0, s.useContext)(eN),
        { dragAndDropHooks: t, dropState: l } = (0, s.useContext)(a),
        n = (0, s.useRef)(null),
        { dropIndicatorProps: o } = t.useDropIndicator({ target: { type: "root" } }, l, n),
        r = l.isDropTarget({ type: "root" }),
        { visuallyHiddenProps: i } = (0, eD.B)();
    return !r && o["aria-hidden"]
        ? null
        : s.createElement(
              eJ,
              { role: "row", "aria-hidden": o["aria-hidden"], style: { height: 0 } },
              s.createElement(
                  e3,
                  { role: "gridcell", colSpan: e.collection.columnCount, style: { padding: 0 } },
                  s.createElement("div", { role: "button", ...i, ...o, ref: n }),
              ),
          );
}
(0, C.KU)(h.OJ, function (e, t, l) {
    let n = (0, s.useContext)(eN),
        { isVirtualized: o } = (0, s.useContext)(i.zL),
        { isLoading: a, onLoadMore: u, scrollOffset: c, ...d } = e,
        p = n.collection.columns.length,
        g = (0, s.useRef)(null),
        y = (0, s.useMemo)(
            () => ({ onLoadMore: u, collection: n?.collection, sentinelRef: g, scrollOffset: c }),
            [u, c, n?.collection],
        );
    (0, E.n)(y, g);
    let h = (0, r.Sl)({
            ...d,
            id: void 0,
            children: l.rendered,
            defaultClassName: "react-aria-TableLoadingIndicator",
            defaultStyle: { "--table-row-level": l.level + 1 },
            values: void 0,
        }),
        m = {},
        f = {};
    return (
        o ? ((m["aria-colspan"] = p), (f = { display: "contents" })) : (m.colSpan = p),
        s.createElement(
            s.Fragment,
            null,
            s.createElement(
                eJ,
                { style: { height: 0 }, inert: (0, S.Y)(!0) },
                s.createElement(
                    e3,
                    { style: { padding: 0, border: 0 } },
                    s.createElement("div", {
                        "data-testid": "loadMoreSentinel",
                        ref: g,
                        style: { position: "relative", height: 1, width: 1 },
                    }),
                ),
            ),
            a &&
                h.children &&
                s.createElement(
                    eJ,
                    {
                        ...(0, z.v)((0, K.$)(e, { global: !0 }), {}),
                        ...h,
                        role: "row",
                        ref: t,
                        "aria-level": l.level + 1,
                        "data-level": l.level + 1,
                    },
                    s.createElement(e3, { role: "rowheader", ...m, style: f }, h.children),
                ),
        )
    );
});
