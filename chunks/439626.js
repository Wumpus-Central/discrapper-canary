"use strict";
n.d(t, { A0: () => W, BF: () => X, VP: () => $, XI: () => V, fI: () => J, fh: () => et });
var r = n(650682),
    i = n(257537),
    s = n(241634),
    a = n(825913),
    o = n(20280),
    l = n(123375),
    u = n(357710),
    c = n(178375),
    d = n(59845),
    _ = n(183590),
    f = n(136193),
    p = n(36310),
    h = n(634107),
    m = n(872219),
    E = n(138026),
    g = n(498430),
    A = n(13163),
    I = n(803082),
    T = n(173547),
    S = n(967158),
    y = n(134584),
    v = n(625736),
    N = n(481638),
    C = n(298377),
    b = n(126031),
    R = n(982439),
    O = n(533715),
    D = n(561514),
    L = n(290424),
    w = n(6494),
    x = n(216055),
    M = n(64700);
n(340287);
class P extends c.Wk {
    addNode(e) {
        super.addNode(e),
            this.columnsDirty || (this.columnsDirty = "column" === e.type),
            "tableheader" === e.type && (this.head = e),
            "tablebody" === e.type && (this.body = e);
    }
    commit(e, t, n = !1) {
        for (let e of (this.updateColumns(n), (this.rows = []), this.getChildren(this.body.key))) {
            let t = e.lastChildKey;
            if (null != t) {
                var r, i;
                let e = this.getItem(t),
                    s = (null != (r = e.colIndex) ? r : e.index) + (null != (i = e.colSpan) ? i : 1);
                if (s !== this.columns.length && !n)
                    throw Error(
                        `Cell count must match column count. Found ${s} cells and ${this.columns.length} columns.`,
                    );
            }
            this.rows.push(e);
        }
        super.commit(e, t, n);
    }
    updateColumns(e) {
        if (!this.columnsDirty) return;
        (this.rowHeaderColumnKeys = new Set()), (this.columns = []);
        let t = new Map(),
            n = (e) => {
                for (let r of ("column" === e.type &&
                    (t.set(e.key, e),
                    !e.hasChildNodes &&
                        ((e.index = this.columns.length),
                        this.columns.push(e),
                        e.props.isRowHeader && this.rowHeaderColumnKeys.add(e.key))),
                this.getChildren(e.key)))
                    n(r);
            };
        for (let e of this.getChildren(this.head.key)) n(e);
        if (
            ((this.headerRows = (0, f.n)(t, this.columns)),
            (this.columnsDirty = !1),
            0 === this.rowHeaderColumnKeys.size && this.columns.length > 0 && !e)
        )
            throw Error("A table must have at least one Column with the isRowHeader prop set to true");
    }
    get columnCount() {
        return this.columns.length;
    }
    *[Symbol.iterator]() {
        -1 !== this.head.key && (yield this.head, yield this.body);
    }
    getFirstKey() {
        return this.body.firstChildKey;
    }
    getLastKey() {
        return this.body.lastChildKey;
    }
    getKeyAfter(e) {
        var t;
        let n = this.getItem(e);
        return (null == n ? void 0 : n.type) === "column" ? (null != (t = n.nextKey) ? t : null) : super.getKeyAfter(e);
    }
    getKeyBefore(e) {
        var t, n;
        let r = this.getItem(e);
        if ((null == r ? void 0 : r.type) === "column") return null != (n = r.prevKey) ? n : null;
        let i = super.getKeyBefore(e);
        return null != i && (null == (t = this.getItem(i)) ? void 0 : t.type) === "tablebody" ? null : i;
    }
    getChildren(e) {
        if (!this.getItem(e)) {
            for (let t of this.headerRows) if (t.key === e) return t.childNodes;
        }
        return super.getChildren(e);
    }
    clone() {
        let e = super.clone();
        return (
            (e.headerRows = this.headerRows),
            (e.columns = this.columns),
            (e.rowHeaderColumnKeys = this.rowHeaderColumnKeys),
            (e.head = this.head),
            (e.body = this.body),
            e
        );
    }
    getTextValue(e) {
        let t = this.getItem(e);
        if (!t) return "";
        if (t.textValue) return t.textValue;
        let n = this.rowHeaderColumnKeys,
            r = [];
        for (let t of this.getChildren(e)) {
            let e = this.columns[t.index];
            if ((n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size)) break;
        }
        return r.join(" ");
    }
    constructor(...e) {
        super(...e),
            (this.headerRows = []),
            (this.columns = []),
            (this.rows = []),
            (this.rowHeaderColumnKeys = new Set()),
            (this.head = new Y(-1)),
            (this.body = new Z(-2)),
            (this.columnsDirty = !0);
    }
}
let k = (0, M.createContext)(null),
    U = (0, M.createContext)(null),
    G = (0, M.createContext)(null),
    F = (0, M.createContext)(null),
    V = (0, M.forwardRef)(function (e, t) {
        var n;
        [e, t] = (0, a.JT)(e, t, U);
        let r = (0, p.R)(e),
            { selectionBehavior: i, selectionMode: s, disallowEmptySelection: o } = r,
            l = !!(null == (n = e.dragAndDropHooks) ? void 0 : n.useDraggableCollectionState),
            u = (0, M.useMemo)(
                () => ({
                    selectionBehavior: "none" === s ? null : i,
                    selectionMode: s,
                    disallowEmptySelection: o,
                    allowsDragging: l,
                }),
                [i, s, o, l],
            ),
            c = M.createElement(j.Provider, { value: u }, M.createElement(d.pM, e));
        return M.createElement(d.GQ, { content: c, createCollection: () => new P() }, (n) =>
            M.createElement(B, { props: e, forwardedRef: t, selectionState: r, collection: n }),
        );
    });
function B({ props: e, forwardedRef: t, selectionState: n, collection: r }) {
    var l;
    let c, d, _;
    [e, t] = (0, a.JT)(e, t, i.Co);
    let { shouldUseVirtualFocus: f, disallowTypeAhead: p, filter: T, ...S } = e,
        y = (0, M.useContext)(k);
    t = (0, O.U)(
        (0, M.useMemo)(() => (0, D.P)(t, null == y ? void 0 : y.tableRef), [t, null == y ? void 0 : y.tableRef]),
    );
    let v = (0, h.j)({ ...S, collection: r, children: void 0, UNSAFE_selectionState: n }),
        N = (0, h.B)(v, T),
        { isVirtualized: C, layoutDelegate: b, dropTargetDelegate: R, CollectionRoot: w } = (0, M.useContext)(s.zL),
        { dragAndDropHooks: x } = e,
        { gridProps: P } = (0, m.K)({ ...S, layoutDelegate: b, isVirtualized: C }, N, t),
        U = N.selectionManager,
        V = !!(null == x ? void 0 : x.useDraggableCollectionState),
        B = !!(null == x ? void 0 : x.useDroppableCollectionState);
    (0, M.useRef)(V), (0, M.useRef)(B), (0, M.useEffect)(() => {}, [V, B]);
    let j = !1,
        Y = null,
        W = (0, M.useRef)(null);
    if (V && x) {
        (c = x.useDraggableCollectionState({
            collection: N.collection,
            selectionManager: U,
            preview: x.renderDragPreview ? W : void 0,
        })),
            x.useDraggableCollection({}, c, t);
        let e = x.DragPreview;
        Y = x.renderDragPreview ? M.createElement(e, { ref: W }, x.renderDragPreview) : null;
    }
    if (B && x) {
        d = x.useDroppableCollectionState({ collection: N.collection, selectionManager: U });
        let e = new (0, E.n)({
                collection: N.collection,
                disabledKeys: U.disabledKeys,
                disabledBehavior: U.disabledBehavior,
                ref: t,
                layoutDelegate: b,
            }),
            n = x.dropTargetDelegate || R || new x.ListDropTargetDelegate(r.rows, t);
        (_ = x.useDroppableCollection({ keyboardDelegate: e, dropTargetDelegate: n }, d, t)),
            (j = d.isDropTarget({ type: "root" }));
    }
    let { focusProps: K, isFocused: z, isFocusVisible: $ } = (0, g.o)(),
        q = (0, a.Sl)({
            className: e.className,
            style: e.style,
            defaultClassName: "react-aria-Table",
            values: { isDropTarget: j, isFocused: z, isFocusVisible: $, state: N },
        }),
        Z = !!(V && !(null == c ? void 0 : c.isDisabled)),
        X = q.style,
        Q = null;
    y &&
        ((Q = y.useTableColumnResizeState({ tableWidth: y.tableWidth }, N)),
        C || (X = { ...X, tableLayout: "fixed", width: "fit-content" }));
    let J = H("table"),
        ee = (0, L.$)(e, { global: !0 });
    return M.createElement(
        a.Kq,
        {
            values: [
                [G, N],
                [F, Q],
                [o.Ux, { dragAndDropHooks: x, dragState: c, dropState: d }],
                [o.U5, { render: en }],
                [i.Co, null],
                [i.wv, null],
            ],
        },
        M.createElement(
            A.n1,
            null,
            M.createElement(
                J,
                {
                    ...(0, I.v)(ee, q, P, K, null == _ ? void 0 : _.collectionProps),
                    style: X,
                    ref: t,
                    slot: e.slot || void 0,
                    onScroll: e.onScroll,
                    "data-allows-dragging": Z || void 0,
                    "data-drop-target": j || void 0,
                    "data-focused": z || void 0,
                    "data-focus-visible": $ || void 0,
                },
                M.createElement(
                    u.D,
                    null,
                    M.createElement(w, {
                        collection: N.collection,
                        scrollRef: null != (l = null == y ? void 0 : y.scrollRef) ? l : t,
                        persistedKeys: (0, o.XW)(U, x, d),
                    }),
                ),
            ),
        ),
        Y,
    );
}
function H(e) {
    let { isVirtualized: t } = (0, M.useContext)(s.zL);
    return t ? "div" : e;
}
let j = (0, M.createContext)(null);
class Y extends c.Pt {}
Y.type = "tableheader";
let W = (0, d.yq)(
    Y,
    (e, t) => {
        let n = (0, M.useContext)(G).collection,
            r = (0, _.p)({
                items: n.headerRows,
                children: (0, M.useCallback)((e) => {
                    if ("headerrow" === e.type) return M.createElement(K, { item: e });
                    throw Error("Unsupported node type in TableHeader: " + e.type);
                }, []),
            }),
            i = H("thead"),
            { rowGroupProps: s } = (0, T.rs)(),
            { hoverProps: o, isHovered: l } = (0, S.M)({
                onHoverStart: e.onHoverStart,
                onHoverChange: e.onHoverChange,
                onHoverEnd: e.onHoverEnd,
            }),
            u = (0, a.Sl)({
                className: e.className,
                style: e.style,
                defaultClassName: "react-aria-TableHeader",
                values: { isHovered: l },
            });
        return M.createElement(
            i,
            { ...(0, I.v)((0, L.$)(e, { global: !0 }), s, o), ...u, ref: t, "data-hovered": l || void 0 },
            r,
        );
    },
    (e) => M.createElement(d.pM, { dependencies: e.dependencies, items: e.columns }, e.children),
);
function K({ item: e }) {
    let t = (0, M.useRef)(null),
        n = (0, M.useContext)(G),
        { isVirtualized: r, CollectionBranch: o } = (0, M.useContext)(s.zL),
        { rowProps: l } = (0, y.x)({ node: e, isVirtualized: r }, n, t),
        { checkboxProps: u } = (0, v.q)(n),
        c = H("tr");
    return M.createElement(
        c,
        { ...l, ref: t },
        M.createElement(
            a.Kq,
            { values: [[i.BP, { slots: { selection: u } }]] },
            M.createElement(o, { collection: n.collection, parent: e }),
        ),
    );
}
class z extends c.Pt {}
z.type = "column";
let $ = (0, d.KU)(z, (e, t, n) => {
        var r, i;
        let o = (0, O.U)(t),
            l = (0, M.useContext)(G),
            { isVirtualized: u } = (0, M.useContext)(s.zL),
            { columnHeaderProps: c } = (0, N.f)({ node: n, isVirtualized: u }, l, o),
            { isFocused: d, isFocusVisible: _, focusProps: f } = (0, g.o)(),
            p = (0, M.useContext)(F),
            h = !1;
        p && (h = p.resizingColumn === n.key);
        let { hoverProps: m, isHovered: E } = (0, S.M)({ isDisabled: !e.allowsSorting }),
            A = (0, a.Sl)({
                ...e,
                id: void 0,
                children: n.rendered,
                defaultClassName: "react-aria-Column",
                values: {
                    isHovered: E,
                    isFocused: d,
                    isFocusVisible: _,
                    allowsSorting: n.props.allowsSorting,
                    sortDirection:
                        (null == (r = l.sortDescriptor) ? void 0 : r.column) === n.key
                            ? l.sortDescriptor.direction
                            : void 0,
                    isResizing: h,
                    startResize: () => {
                        if (p) p.startResize(n.key), l.setKeyboardNavigationDisabled(!0);
                        else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
                    },
                    sort: (e) => {
                        l.sort(n.key, e);
                    },
                },
            }),
            T = A.style;
        p && (T = { ...T, width: p.getColumnWidth(n.key) });
        let y = H("th"),
            v = (0, L.$)(e, { global: !0 });
        return (
            delete v.id,
            M.createElement(
                y,
                {
                    ...(0, I.v)(v, c, f, m),
                    ...A,
                    style: T,
                    ref: o,
                    "data-hovered": E || void 0,
                    "data-focused": d || void 0,
                    "data-focus-visible": _ || void 0,
                    "data-resizing": h || void 0,
                    "data-allows-sorting": n.props.allowsSorting || void 0,
                    "data-sort-direction":
                        (null == (i = l.sortDescriptor) ? void 0 : i.column) === n.key
                            ? l.sortDescriptor.direction
                            : void 0,
                },
                M.createElement(
                    a.Kq,
                    {
                        values: [
                            [q, { column: n, triggerRef: o }],
                            [s.zL, s.N],
                        ],
                    },
                    A.children,
                ),
            )
        );
    }),
    q = (0, M.createContext)(null);
class Z extends c.ru {}
Z.type = "tablebody";
let X = (0, d.yq)(Z, (e, t) => {
    var n;
    let r,
        i = (0, M.useContext)(G),
        { isVirtualized: l } = (0, M.useContext)(s.zL),
        u = i.collection,
        { CollectionBranch: c } = (0, M.useContext)(s.zL),
        { dragAndDropHooks: d, dropState: _ } = (0, M.useContext)(o.Ux),
        f = !!(null == d ? void 0 : d.useDroppableCollectionState) && !(null == _ ? void 0 : _.isDisabled),
        p = f && !!_ && null != (n = _.isDropTarget({ type: "root" })) && n,
        h = 0 === u.size,
        m = { isDropTarget: p, isEmpty: h },
        E = (0, a.Sl)({ ...e, id: void 0, children: void 0, defaultClassName: "react-aria-TableBody", values: m }),
        g = H("tr"),
        A = H("td"),
        S = u.columnCount;
    if (h && e.renderEmptyState && i) {
        let t = {},
            n = {},
            i = {};
        l ? ((n["aria-colspan"] = S), (i = { display: "contents" })) : (n.colSpan = S),
            (r = M.createElement(
                g,
                { role: "row", ...t, style: i },
                M.createElement(A, { role: "rowheader", ...n, style: i }, e.renderEmptyState(m)),
            ));
    }
    let { rowGroupProps: y } = (0, T.rs)(),
        v = H("tbody"),
        N = (0, L.$)(e, { global: !0 });
    return M.createElement(
        v,
        { ...(0, I.v)(N, E, y), ref: t, "data-empty": h || void 0 },
        f && M.createElement(es, null),
        M.createElement(c, { collection: u, parent: u.body, renderDropIndicator: (0, o.oC)(d, _) }),
        r,
    );
});
class Q extends c.Pt {
    filter(e, t, n) {
        for (let r of e.getChildren(this.key))
            if (n(r.textValue, r)) {
                let n = this.clone();
                return t.addDescendants(n, e), n;
            }
        return null;
    }
}
Q.type = "item";
let J = (0, d.yq)(
    Q,
    (e, t, n) => {
        let u,
            c,
            d = (0, O.U)(t),
            _ = (0, M.useContext)(G),
            { dragAndDropHooks: f, dragState: p, dropState: h } = (0, M.useContext)(o.Ux),
            { isVirtualized: m, CollectionBranch: E } = (0, M.useContext)(s.zL),
            { rowProps: A, ...T } = (0, C.A)({ node: n, shouldSelectOnPressUp: !!p, isVirtualized: m }, _, d),
            { isFocused: y, isFocusVisible: N, focusProps: R } = (0, g.o)(),
            { isFocusVisible: D, focusProps: w } = (0, g.o)({ within: !0 }),
            { hoverProps: x, isHovered: P } = (0, S.M)({
                isDisabled: !T.allowsSelection && !T.hasAction,
                onHoverStart: e.onHoverStart,
                onHoverChange: e.onHoverChange,
                onHoverEnd: e.onHoverEnd,
            }),
            { checkboxProps: k } = (0, v.B)({ key: n.key }, _);
        p && f && (u = f.useDraggableItem({ key: n.key, hasDragButton: !0 }, p));
        let U = (0, M.useRef)(null),
            { visuallyHiddenProps: F } = (0, b.B)();
        h && f && (c = f.useDropIndicator({ target: { type: "item", key: n.key, dropPosition: "on" } }, h, U));
        let V = (0, M.useRef)(null);
        (0, M.useEffect)(() => {
            p && V.current;
        }, []);
        let B = p && p.isDragging(n.key),
            { children: j, ...Y } = e,
            W = (0, a.Sl)({
                ...Y,
                id: void 0,
                defaultClassName: "react-aria-Row",
                values: {
                    ...T,
                    isHovered: P,
                    isFocused: y,
                    isFocusVisible: N,
                    selectionMode: _.selectionManager.selectionMode,
                    selectionBehavior: _.selectionManager.selectionBehavior,
                    isDragging: B,
                    isDropTarget: null == c ? void 0 : c.isDropTarget,
                    isFocusVisibleWithin: D,
                    id: n.key,
                },
            }),
            K = H("tr"),
            z = H("td"),
            $ = (0, L.$)(e, { global: !0 });
        return (
            delete $.id,
            delete $.onClick,
            M.createElement(
                M.Fragment,
                null,
                c &&
                    !c.isHidden &&
                    M.createElement(
                        K,
                        { role: "row", style: { height: 0 } },
                        M.createElement(
                            z,
                            { role: "gridcell", colSpan: _.collection.columnCount, style: { padding: 0 } },
                            M.createElement("div", { role: "button", ...F, ...c.dropIndicatorProps, ref: U }),
                        ),
                    ),
                M.createElement(
                    K,
                    {
                        ...(0, I.v)($, W, A, R, x, null == u ? void 0 : u.dragProps, w),
                        ref: d,
                        "data-disabled": T.isDisabled || void 0,
                        "data-selected": T.isSelected || void 0,
                        "data-hovered": P || void 0,
                        "data-focused": T.isFocused || void 0,
                        "data-focus-visible": N || void 0,
                        "data-pressed": T.isPressed || void 0,
                        "data-dragging": B || void 0,
                        "data-drop-target": (null == c ? void 0 : c.isDropTarget) || void 0,
                        "data-selection-mode":
                            "none" === _.selectionManager.selectionMode ? void 0 : _.selectionManager.selectionMode,
                        "data-focus-visible-within": D || void 0,
                    },
                    M.createElement(
                        a.Kq,
                        {
                            values: [
                                [i.BP, { slots: { [a.P_]: {}, selection: k } }],
                                [
                                    r.k,
                                    {
                                        slots: {
                                            [a.P_]: {},
                                            drag: {
                                                ...(null == u ? void 0 : u.dragButtonProps),
                                                ref: V,
                                                style: { pointerEvents: "none" },
                                            },
                                        },
                                    },
                                ],
                                [l.r, { isSelected: T.isSelected }],
                            ],
                        },
                        M.createElement(E, { collection: _.collection, parent: n }),
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
        return M.createElement(d.pM, { dependencies: t, items: e.columns, idScope: e.id }, e.children);
    },
);
class ee extends c.Pt {}
ee.type = "cell";
let et = (0, d.KU)(ee, (e, t, n) => {
    let r = (0, O.U)(t),
        i = (0, M.useContext)(G),
        { dragState: l } = (0, M.useContext)(o.Ux),
        { isVirtualized: u } = (0, M.useContext)(s.zL);
    n.column = i.collection.columns[n.index];
    let { gridCellProps: c, isPressed: d } = (0, R.a)({ node: n, shouldSelectOnPressUp: !!l, isVirtualized: u }, i, r),
        { isFocused: _, isFocusVisible: f, focusProps: p } = (0, g.o)(),
        { hoverProps: h, isHovered: m } = (0, S.M)({}),
        E = (0, a.Sl)({
            ...e,
            id: void 0,
            defaultClassName: "react-aria-Cell",
            values: { isFocused: _, isFocusVisible: f, isPressed: d, isHovered: m, id: n.key },
        }),
        A = H("td"),
        T = (0, L.$)(e, { global: !0 });
    return (
        delete T.id,
        M.createElement(
            A,
            {
                ...(0, I.v)(T, E, c, p, h),
                ref: r,
                "data-focused": _ || void 0,
                "data-focus-visible": f || void 0,
                "data-pressed": d || void 0,
            },
            M.createElement(s.zL.Provider, { value: s.N }, E.children),
        )
    );
});
function en(e, t) {
    t = (0, O.U)(t);
    let { dragAndDropHooks: n, dropState: r } = (0, M.useContext)(o.Ux),
        i = (0, M.useRef)(null),
        { dropIndicatorProps: s, isHidden: a, isDropTarget: l } = n.useDropIndicator(e, r, i);
    return a ? null : M.createElement(ei, { ...e, dropIndicatorProps: s, isDropTarget: l, buttonRef: i, ref: t });
}
function er(e, t) {
    let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, ...s } = e,
        o = (0, M.useContext)(G),
        { visuallyHiddenProps: l } = (0, b.B)(),
        u = (0, a.Sl)({ ...s, defaultClassName: "react-aria-DropIndicator", values: { isDropTarget: r } }),
        c = H("tr"),
        d = H("td");
    return M.createElement(
        c,
        { ...(0, L.$)(e, { global: !0 }), ...u, role: "row", ref: t, "data-drop-target": r || void 0 },
        M.createElement(
            d,
            { role: "gridcell", colSpan: o.collection.columnCount, style: { padding: 0 } },
            M.createElement("div", { ...l, role: "button", ...n, ref: i }),
            u.children,
        ),
    );
}
let ei = (0, M.forwardRef)(er);
function es() {
    let e = (0, M.useContext)(G),
        { dragAndDropHooks: t, dropState: n } = (0, M.useContext)(o.Ux),
        r = (0, M.useRef)(null),
        { dropIndicatorProps: i } = t.useDropIndicator({ target: { type: "root" } }, n, r),
        s = n.isDropTarget({ type: "root" }),
        { visuallyHiddenProps: a } = (0, b.B)(),
        l = H("tr"),
        u = H("td");
    return !s && i["aria-hidden"]
        ? null
        : M.createElement(
              l,
              { role: "row", "aria-hidden": i["aria-hidden"], style: { height: 0 } },
              M.createElement(
                  u,
                  { role: "gridcell", colSpan: e.collection.columnCount, style: { padding: 0 } },
                  M.createElement("div", { role: "button", ...a, ...i, ref: r }),
              ),
          );
}
(0, d.KU)(c.OJ, function (e, t, n) {
    let r = (0, M.useContext)(G),
        { isVirtualized: i } = (0, M.useContext)(s.zL),
        { isLoading: o, onLoadMore: l, scrollOffset: u, ...c } = e,
        d = r.collection.columns.length,
        _ = (0, M.useRef)(null),
        f = (0, M.useMemo)(
            () => ({ onLoadMore: l, collection: null == r ? void 0 : r.collection, sentinelRef: _, scrollOffset: u }),
            [l, u, null == r ? void 0 : r.collection],
        );
    (0, w.n)(f, _);
    let p = (0, a.Sl)({
            ...c,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-TableLoadingIndicator",
            values: null,
        }),
        h = H("tr"),
        m = H("td"),
        E = {},
        g = {},
        A = {};
    return (
        i ? ((g["aria-colspan"] = d), (A = { display: "contents" })) : (g.colSpan = d),
        M.createElement(
            M.Fragment,
            null,
            M.createElement(
                h,
                { style: { height: 0 }, inert: (0, x.Y)(!0) },
                M.createElement(
                    m,
                    { style: { padding: 0, border: 0 } },
                    M.createElement("div", {
                        "data-testid": "loadMoreSentinel",
                        ref: _,
                        style: { position: "relative", height: 1, width: 1 },
                    }),
                ),
            ),
            o &&
                p.children &&
                M.createElement(
                    h,
                    { ...(0, I.v)((0, L.$)(e, { global: !0 }), E), ...p, role: "row", ref: t },
                    M.createElement(m, { role: "rowheader", ...g, style: A }, p.children),
                ),
        )
    );
});
