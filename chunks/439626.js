"use strict";
n.d(t, { A0: () => K, BF: () => Q, VP: () => q, XI: () => B, fI: () => ee, fh: () => en });
var r = n(650682),
    i = n(257537),
    a = n(241634),
    s = n(825913),
    o = n(20280),
    l = n(123375),
    u = n(357710),
    c = n(178375),
    d = n(59845),
    _ = n(183590),
    f = n(136193),
    h = n(36310),
    p = n(634107),
    g = n(872219),
    E = n(138026),
    A = n(498430),
    I = n(13163),
    T = n(803082),
    y = n(173547),
    S = n(967158),
    v = n(134584),
    C = n(625736),
    b = n(481638),
    N = n(298377),
    R = n(126031),
    O = n(982439),
    D = n(533715),
    L = n(561514),
    w = n(290424),
    x = n(6494),
    P = n(216055),
    M = n(64700);
n(340287);
class k extends c.Wk {
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
                    a = (null != (r = e.colIndex) ? r : e.index) + (null != (i = e.colSpan) ? i : 1);
                if (a !== this.columns.length && !n)
                    throw Error(
                        `Cell count must match column count. Found ${a} cells and ${this.columns.length} columns.`,
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
            (this.head = new W(-1)),
            (this.body = new Z(-2)),
            (this.columnsDirty = !0);
    }
}
let U = (0, M.createContext)(null),
    G = (0, M.createContext)(null),
    F = (0, M.createContext)(null),
    V = (0, M.createContext)(null),
    B = (0, M.forwardRef)(function (e, t) {
        var n;
        [e, t] = (0, s.JT)(e, t, G);
        let r = (0, h.R)(e),
            { selectionBehavior: i, selectionMode: a, disallowEmptySelection: o } = r,
            l = !!(null == (n = e.dragAndDropHooks) ? void 0 : n.useDraggableCollectionState),
            u = (0, M.useMemo)(
                () => ({
                    selectionBehavior: "none" === a ? null : i,
                    selectionMode: a,
                    disallowEmptySelection: o,
                    allowsDragging: l,
                }),
                [i, a, o, l],
            ),
            c = M.createElement(Y.Provider, { value: u }, M.createElement(d.pM, e));
        return M.createElement(d.GQ, { content: c, createCollection: () => new k() }, (n) =>
            M.createElement(j, { props: e, forwardedRef: t, selectionState: r, collection: n }),
        );
    });
function j({ props: e, forwardedRef: t, selectionState: n, collection: r }) {
    var l;
    let c, d, _;
    [e, t] = (0, s.JT)(e, t, i.Co);
    let { shouldUseVirtualFocus: f, disallowTypeAhead: h, filter: y, ...S } = e,
        v = (0, M.useContext)(U);
    t = (0, D.U)(
        (0, M.useMemo)(() => (0, L.P)(t, null == v ? void 0 : v.tableRef), [t, null == v ? void 0 : v.tableRef]),
    );
    let C = (0, p.j)({ ...S, collection: r, children: void 0, UNSAFE_selectionState: n }),
        b = (0, p.B)(C, y),
        { isVirtualized: N, layoutDelegate: R, dropTargetDelegate: O, CollectionRoot: x } = (0, M.useContext)(a.zL),
        { dragAndDropHooks: P } = e,
        { gridProps: k } = (0, g.K)({ ...S, layoutDelegate: R, isVirtualized: N }, b, t),
        G = b.selectionManager,
        B = !!(null == P ? void 0 : P.useDraggableCollectionState),
        j = !!(null == P ? void 0 : P.useDroppableCollectionState);
    (0, M.useRef)(B), (0, M.useRef)(j), (0, M.useEffect)(() => {}, [B, j]);
    let Y = !1,
        W = null,
        K = (0, M.useRef)(null);
    if (B && P) {
        (c = P.useDraggableCollectionState({
            collection: b.collection,
            selectionManager: G,
            preview: P.renderDragPreview ? K : void 0,
        })),
            P.useDraggableCollection({}, c, t);
        let e = P.DragPreview;
        W = P.renderDragPreview ? M.createElement(e, { ref: K }, P.renderDragPreview) : null;
    }
    if (j && P) {
        d = P.useDroppableCollectionState({ collection: b.collection, selectionManager: G });
        let e = new (0, E.n)({
                collection: b.collection,
                disabledKeys: G.disabledKeys,
                disabledBehavior: G.disabledBehavior,
                ref: t,
                layoutDelegate: R,
            }),
            n = P.dropTargetDelegate || O || new P.ListDropTargetDelegate(r.rows, t);
        (_ = P.useDroppableCollection({ keyboardDelegate: e, dropTargetDelegate: n }, d, t)),
            (Y = d.isDropTarget({ type: "root" }));
    }
    let { focusProps: $, isFocused: z, isFocusVisible: q } = (0, A.o)(),
        X = (0, s.Sl)({
            className: e.className,
            style: e.style,
            defaultClassName: "react-aria-Table",
            values: { isDropTarget: Y, isFocused: z, isFocusVisible: q, state: b },
        }),
        Z = !!(B && !(null == c ? void 0 : c.isDisabled)),
        Q = X.style,
        J = null;
    v &&
        ((J = v.useTableColumnResizeState({ tableWidth: v.tableWidth }, b)),
        N || (Q = { ...Q, tableLayout: "fixed", width: "fit-content" }));
    let ee = H("table"),
        et = (0, w.$)(e, { global: !0 });
    return M.createElement(
        s.Kq,
        {
            values: [
                [F, b],
                [V, J],
                [o.Ux, { dragAndDropHooks: P, dragState: c, dropState: d }],
                [o.U5, { render: er }],
                [i.Co, null],
                [i.wv, null],
            ],
        },
        M.createElement(
            I.n1,
            null,
            M.createElement(
                ee,
                {
                    ...(0, T.v)(et, X, k, $, null == _ ? void 0 : _.collectionProps),
                    style: Q,
                    ref: t,
                    slot: e.slot || void 0,
                    onScroll: e.onScroll,
                    "data-allows-dragging": Z || void 0,
                    "data-drop-target": Y || void 0,
                    "data-focused": z || void 0,
                    "data-focus-visible": q || void 0,
                },
                M.createElement(
                    u.D,
                    null,
                    M.createElement(x, {
                        collection: b.collection,
                        scrollRef: null != (l = null == v ? void 0 : v.scrollRef) ? l : t,
                        persistedKeys: (0, o.XW)(G, P, d),
                    }),
                ),
            ),
        ),
        W,
    );
}
function H(e) {
    let { isVirtualized: t } = (0, M.useContext)(a.zL);
    return t ? "div" : e;
}
let Y = (0, M.createContext)(null);
class W extends c.Pt {}
W.type = "tableheader";
let K = (0, d.yq)(
    W,
    (e, t) => {
        let n = (0, M.useContext)(F).collection,
            r = (0, _.p)({
                items: n.headerRows,
                children: (0, M.useCallback)((e) => {
                    if ("headerrow" === e.type) return M.createElement($, { item: e });
                    throw Error("Unsupported node type in TableHeader: " + e.type);
                }, []),
            }),
            i = H("thead"),
            { rowGroupProps: a } = (0, y.rs)(),
            { hoverProps: o, isHovered: l } = (0, S.M)({
                onHoverStart: e.onHoverStart,
                onHoverChange: e.onHoverChange,
                onHoverEnd: e.onHoverEnd,
            }),
            u = (0, s.Sl)({
                className: e.className,
                style: e.style,
                defaultClassName: "react-aria-TableHeader",
                values: { isHovered: l },
            });
        return M.createElement(
            i,
            { ...(0, T.v)((0, w.$)(e, { global: !0 }), a, o), ...u, ref: t, "data-hovered": l || void 0 },
            r,
        );
    },
    (e) => M.createElement(d.pM, { dependencies: e.dependencies, items: e.columns }, e.children),
);
function $({ item: e }) {
    let t = (0, M.useRef)(null),
        n = (0, M.useContext)(F),
        { isVirtualized: r, CollectionBranch: o } = (0, M.useContext)(a.zL),
        { rowProps: l } = (0, v.x)({ node: e, isVirtualized: r }, n, t),
        { checkboxProps: u } = (0, C.q)(n),
        c = H("tr");
    return M.createElement(
        c,
        { ...l, ref: t },
        M.createElement(
            s.Kq,
            { values: [[i.BP, { slots: { selection: u } }]] },
            M.createElement(o, { collection: n.collection, parent: e }),
        ),
    );
}
class z extends c.Pt {}
z.type = "column";
let q = (0, d.KU)(z, (e, t, n) => {
        var r, i;
        let o = (0, D.U)(t),
            l = (0, M.useContext)(F),
            { isVirtualized: u } = (0, M.useContext)(a.zL),
            { columnHeaderProps: c } = (0, b.f)({ node: n, isVirtualized: u }, l, o),
            { isFocused: d, isFocusVisible: _, focusProps: f } = (0, A.o)(),
            h = (0, M.useContext)(V),
            p = !1;
        h && (p = h.resizingColumn === n.key);
        let { hoverProps: g, isHovered: E } = (0, S.M)({ isDisabled: !e.allowsSorting }),
            I = (0, s.Sl)({
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
                    isResizing: p,
                    startResize: () => {
                        if (h) h.startResize(n.key), l.setKeyboardNavigationDisabled(!0);
                        else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
                    },
                    sort: (e) => {
                        l.sort(n.key, e);
                    },
                },
            }),
            y = I.style;
        h && (y = { ...y, width: h.getColumnWidth(n.key) });
        let v = H("th"),
            C = (0, w.$)(e, { global: !0 });
        return (
            delete C.id,
            M.createElement(
                v,
                {
                    ...(0, T.v)(C, c, f, g),
                    ...I,
                    style: y,
                    ref: o,
                    "data-hovered": E || void 0,
                    "data-focused": d || void 0,
                    "data-focus-visible": _ || void 0,
                    "data-resizing": p || void 0,
                    "data-allows-sorting": n.props.allowsSorting || void 0,
                    "data-sort-direction":
                        (null == (i = l.sortDescriptor) ? void 0 : i.column) === n.key
                            ? l.sortDescriptor.direction
                            : void 0,
                },
                M.createElement(
                    s.Kq,
                    {
                        values: [
                            [X, { column: n, triggerRef: o }],
                            [a.zL, a.N],
                        ],
                    },
                    I.children,
                ),
            )
        );
    }),
    X = (0, M.createContext)(null);
class Z extends c.ru {}
Z.type = "tablebody";
let Q = (0, d.yq)(Z, (e, t) => {
    var n;
    let r,
        i = (0, M.useContext)(F),
        { isVirtualized: l } = (0, M.useContext)(a.zL),
        u = i.collection,
        { CollectionBranch: c } = (0, M.useContext)(a.zL),
        { dragAndDropHooks: d, dropState: _ } = (0, M.useContext)(o.Ux),
        f = !!(null == d ? void 0 : d.useDroppableCollectionState) && !(null == _ ? void 0 : _.isDisabled),
        h = f && !!_ && null != (n = _.isDropTarget({ type: "root" })) && n,
        p = 0 === u.size,
        g = { isDropTarget: h, isEmpty: p },
        E = (0, s.Sl)({ ...e, id: void 0, children: void 0, defaultClassName: "react-aria-TableBody", values: g }),
        A = H("tr"),
        I = H("td"),
        S = u.columnCount;
    if (p && e.renderEmptyState && i) {
        let t = {},
            n = {},
            i = {};
        l ? ((n["aria-colspan"] = S), (i = { display: "contents" })) : (n.colSpan = S),
            (r = M.createElement(
                A,
                { role: "row", ...t, style: i },
                M.createElement(I, { role: "rowheader", ...n, style: i }, e.renderEmptyState(g)),
            ));
    }
    let { rowGroupProps: v } = (0, y.rs)(),
        C = H("tbody"),
        b = (0, w.$)(e, { global: !0 });
    return M.createElement(
        C,
        { ...(0, T.v)(b, E, v), ref: t, "data-empty": p || void 0 },
        f && M.createElement(es, null),
        M.createElement(c, { collection: u, parent: u.body, renderDropIndicator: (0, o.oC)(d, _) }),
        r,
    );
});
class J extends c.Pt {
    filter(e, t, n) {
        for (let r of e.getChildren(this.key))
            if (n(r.textValue, r)) {
                let n = this.clone();
                return t.addDescendants(n, e), n;
            }
        return null;
    }
}
J.type = "item";
let ee = (0, d.yq)(
    J,
    (e, t, n) => {
        let u,
            c,
            d = (0, D.U)(t),
            _ = (0, M.useContext)(F),
            { dragAndDropHooks: f, dragState: h, dropState: p } = (0, M.useContext)(o.Ux),
            { isVirtualized: g, CollectionBranch: E } = (0, M.useContext)(a.zL),
            { rowProps: I, ...y } = (0, N.A)({ node: n, shouldSelectOnPressUp: !!h, isVirtualized: g }, _, d),
            { isFocused: v, isFocusVisible: b, focusProps: O } = (0, A.o)(),
            { isFocusVisible: L, focusProps: x } = (0, A.o)({ within: !0 }),
            { hoverProps: P, isHovered: k } = (0, S.M)({
                isDisabled: !y.allowsSelection && !y.hasAction,
                onHoverStart: e.onHoverStart,
                onHoverChange: e.onHoverChange,
                onHoverEnd: e.onHoverEnd,
            }),
            { checkboxProps: U } = (0, C.B)({ key: n.key }, _);
        h && f && (u = f.useDraggableItem({ key: n.key, hasDragButton: !0 }, h));
        let G = (0, M.useRef)(null),
            { visuallyHiddenProps: V } = (0, R.B)();
        p && f && (c = f.useDropIndicator({ target: { type: "item", key: n.key, dropPosition: "on" } }, p, G));
        let B = (0, M.useRef)(null);
        (0, M.useEffect)(() => {
            h && B.current;
        }, []);
        let j = h && h.isDragging(n.key),
            { children: Y, ...W } = e,
            K = (0, s.Sl)({
                ...W,
                id: void 0,
                defaultClassName: "react-aria-Row",
                values: {
                    ...y,
                    isHovered: k,
                    isFocused: v,
                    isFocusVisible: b,
                    selectionMode: _.selectionManager.selectionMode,
                    selectionBehavior: _.selectionManager.selectionBehavior,
                    isDragging: j,
                    isDropTarget: null == c ? void 0 : c.isDropTarget,
                    isFocusVisibleWithin: L,
                    id: n.key,
                },
            }),
            $ = H("tr"),
            z = H("td"),
            q = (0, w.$)(e, { global: !0 });
        return (
            delete q.id,
            delete q.onClick,
            M.createElement(
                M.Fragment,
                null,
                c &&
                    !c.isHidden &&
                    M.createElement(
                        $,
                        { role: "row", style: { height: 0 } },
                        M.createElement(
                            z,
                            { role: "gridcell", colSpan: _.collection.columnCount, style: { padding: 0 } },
                            M.createElement("div", { role: "button", ...V, ...c.dropIndicatorProps, ref: G }),
                        ),
                    ),
                M.createElement(
                    $,
                    {
                        ...(0, T.v)(q, K, I, O, P, null == u ? void 0 : u.dragProps, x),
                        ref: d,
                        "data-disabled": y.isDisabled || void 0,
                        "data-selected": y.isSelected || void 0,
                        "data-hovered": k || void 0,
                        "data-focused": y.isFocused || void 0,
                        "data-focus-visible": b || void 0,
                        "data-pressed": y.isPressed || void 0,
                        "data-dragging": j || void 0,
                        "data-drop-target": (null == c ? void 0 : c.isDropTarget) || void 0,
                        "data-selection-mode":
                            "none" === _.selectionManager.selectionMode ? void 0 : _.selectionManager.selectionMode,
                        "data-focus-visible-within": L || void 0,
                    },
                    M.createElement(
                        s.Kq,
                        {
                            values: [
                                [i.BP, { slots: { [s.P_]: {}, selection: U } }],
                                [
                                    r.k,
                                    {
                                        slots: {
                                            [s.P_]: {},
                                            drag: {
                                                ...(null == u ? void 0 : u.dragButtonProps),
                                                ref: B,
                                                style: { pointerEvents: "none" },
                                            },
                                        },
                                    },
                                ],
                                [l.r, { isSelected: y.isSelected }],
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
class et extends c.Pt {}
et.type = "cell";
let en = (0, d.KU)(et, (e, t, n) => {
    let r = (0, D.U)(t),
        i = (0, M.useContext)(F),
        { dragState: l } = (0, M.useContext)(o.Ux),
        { isVirtualized: u } = (0, M.useContext)(a.zL);
    n.column = i.collection.columns[n.index];
    let { gridCellProps: c, isPressed: d } = (0, O.a)({ node: n, shouldSelectOnPressUp: !!l, isVirtualized: u }, i, r),
        { isFocused: _, isFocusVisible: f, focusProps: h } = (0, A.o)(),
        { hoverProps: p, isHovered: g } = (0, S.M)({}),
        E = (0, s.Sl)({
            ...e,
            id: void 0,
            defaultClassName: "react-aria-Cell",
            values: { isFocused: _, isFocusVisible: f, isPressed: d, isHovered: g, id: n.key },
        }),
        I = H("td"),
        y = (0, w.$)(e, { global: !0 });
    return (
        delete y.id,
        M.createElement(
            I,
            {
                ...(0, T.v)(y, E, c, h, p),
                ref: r,
                "data-focused": _ || void 0,
                "data-focus-visible": f || void 0,
                "data-pressed": d || void 0,
            },
            M.createElement(a.zL.Provider, { value: a.N }, E.children),
        )
    );
});
function er(e, t) {
    t = (0, D.U)(t);
    let { dragAndDropHooks: n, dropState: r } = (0, M.useContext)(o.Ux),
        i = (0, M.useRef)(null),
        { dropIndicatorProps: a, isHidden: s, isDropTarget: l } = n.useDropIndicator(e, r, i);
    return s ? null : M.createElement(ea, { ...e, dropIndicatorProps: a, isDropTarget: l, buttonRef: i, ref: t });
}
function ei(e, t) {
    let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, ...a } = e,
        o = (0, M.useContext)(F),
        { visuallyHiddenProps: l } = (0, R.B)(),
        u = (0, s.Sl)({ ...a, defaultClassName: "react-aria-DropIndicator", values: { isDropTarget: r } }),
        c = H("tr"),
        d = H("td");
    return M.createElement(
        c,
        { ...(0, w.$)(e, { global: !0 }), ...u, role: "row", ref: t, "data-drop-target": r || void 0 },
        M.createElement(
            d,
            { role: "gridcell", colSpan: o.collection.columnCount, style: { padding: 0 } },
            M.createElement("div", { ...l, role: "button", ...n, ref: i }),
            u.children,
        ),
    );
}
let ea = (0, M.forwardRef)(ei);
function es() {
    let e = (0, M.useContext)(F),
        { dragAndDropHooks: t, dropState: n } = (0, M.useContext)(o.Ux),
        r = (0, M.useRef)(null),
        { dropIndicatorProps: i } = t.useDropIndicator({ target: { type: "root" } }, n, r),
        a = n.isDropTarget({ type: "root" }),
        { visuallyHiddenProps: s } = (0, R.B)(),
        l = H("tr"),
        u = H("td");
    return !a && i["aria-hidden"]
        ? null
        : M.createElement(
              l,
              { role: "row", "aria-hidden": i["aria-hidden"], style: { height: 0 } },
              M.createElement(
                  u,
                  { role: "gridcell", colSpan: e.collection.columnCount, style: { padding: 0 } },
                  M.createElement("div", { role: "button", ...s, ...i, ref: r }),
              ),
          );
}
(0, d.KU)(c.OJ, function (e, t, n) {
    let r = (0, M.useContext)(F),
        { isVirtualized: i } = (0, M.useContext)(a.zL),
        { isLoading: o, onLoadMore: l, scrollOffset: u, ...c } = e,
        d = r.collection.columns.length,
        _ = (0, M.useRef)(null),
        f = (0, M.useMemo)(
            () => ({ onLoadMore: l, collection: null == r ? void 0 : r.collection, sentinelRef: _, scrollOffset: u }),
            [l, u, null == r ? void 0 : r.collection],
        );
    (0, x.n)(f, _);
    let h = (0, s.Sl)({
            ...c,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-TableLoadingIndicator",
            values: null,
        }),
        p = H("tr"),
        g = H("td"),
        E = {},
        A = {},
        I = {};
    return (
        i ? ((A["aria-colspan"] = d), (I = { display: "contents" })) : (A.colSpan = d),
        M.createElement(
            M.Fragment,
            null,
            M.createElement(
                p,
                { style: { height: 0 }, inert: (0, P.Y)(!0) },
                M.createElement(
                    g,
                    { style: { padding: 0, border: 0 } },
                    M.createElement("div", {
                        "data-testid": "loadMoreSentinel",
                        ref: _,
                        style: { position: "relative", height: 1, width: 1 },
                    }),
                ),
            ),
            o &&
                h.children &&
                M.createElement(
                    p,
                    { ...(0, T.v)((0, w.$)(e, { global: !0 }), E), ...h, role: "row", ref: t },
                    M.createElement(g, { role: "rowheader", ...A, style: I }, h.children),
                ),
        )
    );
});
