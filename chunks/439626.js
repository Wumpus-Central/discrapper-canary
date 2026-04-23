l.d(t, { A0: () => Q, BF: () => Y, VP: () => q, XI: () => H, fI: () => X, fh: () => et });
var n = l(650682),
    o = l(257537),
    r = l(241634),
    i = l(825913),
    s = l(20280),
    u = l(123375),
    a = l(357710),
    c = l(178375),
    d = l(59845),
    g = l(183590),
    p = l(136193),
    m = l(36310),
    h = l(634107),
    y = l(872219),
    v = l(138026),
    f = l(498430),
    k = l(13163),
    b = l(803082),
    S = l(173547),
    C = l(967158),
    D = l(134584),
    x = l(625736),
    A = l(481638),
    w = l(298377),
    E = l(126031),
    K = l(982439),
    z = l(533715),
    N = l(561514),
    B = l(290424),
    $ = l(784113),
    M = l(216055),
    P = l(64700);
l(340287);
class F extends c.Wk {
    addNode(e) {
        super.addNode(e),
            this.columnsDirty || (this.columnsDirty = "column" === e.type),
            "tableheader" === e.type && (this.head = e),
            "tablebody" === e.type && (this.body = e);
    }
    commit(e, t, l = !1) {
        for (let e of (this.updateColumns(l), (this.rows = []), this.getChildren(this.body.key))) {
            let t = e.lastChildKey;
            if (null != t) {
                var n, o;
                let e = this.getItem(t),
                    r = (null != (n = e.colIndex) ? n : e.index) + (null != (o = e.colSpan) ? o : 1);
                if (r !== this.columns.length && !l)
                    throw Error(
                        `Cell count must match column count. Found ${r} cells and ${this.columns.length} columns.`,
                    );
            }
            this.rows.push(e);
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
            ((this.headerRows = (0, p.n)(t, this.columns)),
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
        let l = this.getItem(e);
        return (null == l ? void 0 : l.type) === "column" ? (null != (t = l.nextKey) ? t : null) : super.getKeyAfter(e);
    }
    getKeyBefore(e) {
        var t, l;
        let n = this.getItem(e);
        if ((null == n ? void 0 : n.type) === "column") return null != (l = n.prevKey) ? l : null;
        let o = super.getKeyBefore(e);
        return null != o && (null == (t = this.getItem(o)) ? void 0 : t.type) === "tablebody" ? null : o;
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
            (this.head = new O(-1)),
            (this.body = new G(-2)),
            (this.columnsDirty = !0);
    }
}
let I = (0, P.createContext)(null),
    R = (0, P.createContext)(null),
    V = (0, P.createContext)(null),
    j = (0, P.createContext)(null),
    H = (0, P.forwardRef)(function (e, t) {
        var l;
        [e, t] = (0, i.JT)(e, t, R);
        let n = (0, m.R)(e),
            { selectionBehavior: o, selectionMode: r, disallowEmptySelection: s } = n,
            u = !!(null == (l = e.dragAndDropHooks) ? void 0 : l.useDraggableCollectionState),
            a = (0, P.useMemo)(
                () => ({
                    selectionBehavior: "none" === r ? null : o,
                    selectionMode: r,
                    disallowEmptySelection: s,
                    allowsDragging: u,
                }),
                [o, r, s, u],
            ),
            c = P.createElement(U.Provider, { value: a }, P.createElement(d.pM, e));
        return P.createElement(d.GQ, { content: c, createCollection: () => new F() }, (l) =>
            P.createElement(T, { props: e, forwardedRef: t, selectionState: n, collection: l }),
        );
    });
function T({ props: e, forwardedRef: t, selectionState: l, collection: n }) {
    var u;
    let c, d, g;
    [e, t] = (0, i.JT)(e, t, o.Co);
    let { shouldUseVirtualFocus: p, disallowTypeAhead: m, filter: S, ...C } = e,
        D = (0, P.useContext)(I);
    t = (0, z.U)(
        (0, P.useMemo)(() => (0, N.P)(t, null == D ? void 0 : D.tableRef), [t, null == D ? void 0 : D.tableRef]),
    );
    let x = (0, h.j)({ ...C, collection: n, children: void 0, UNSAFE_selectionState: l }),
        A = (0, h.B)(x, S),
        { isVirtualized: w, layoutDelegate: E, dropTargetDelegate: K, CollectionRoot: $ } = (0, P.useContext)(r.zL),
        { dragAndDropHooks: M } = e,
        { gridProps: F } = (0, y.K)({ ...C, layoutDelegate: E, isVirtualized: w }, A, t),
        R = A.selectionManager,
        H = !!(null == M ? void 0 : M.useDraggableCollectionState),
        U = !!(null == M ? void 0 : M.useDroppableCollectionState);
    (0, P.useRef)(H), (0, P.useRef)(U), (0, P.useEffect)(() => {}, [H, U]);
    let O = !1,
        Q = null,
        W = (0, P.useRef)(null);
    if (H && M) {
        (c = M.useDraggableCollectionState({
            collection: A.collection,
            selectionManager: R,
            preview: M.renderDragPreview ? W : void 0,
        })),
            M.useDraggableCollection({}, c, t);
        let e = M.DragPreview;
        Q = M.renderDragPreview ? P.createElement(e, { ref: W }, M.renderDragPreview) : null;
    }
    if (U && M) {
        d = M.useDroppableCollectionState({ collection: A.collection, selectionManager: R });
        let e = new (0, v.n)({
                collection: A.collection,
                disabledKeys: R.disabledKeys,
                disabledBehavior: R.disabledBehavior,
                ref: t,
                layoutDelegate: E,
            }),
            l = M.dropTargetDelegate || K || new M.ListDropTargetDelegate(n.rows, t);
        (g = M.useDroppableCollection({ keyboardDelegate: e, dropTargetDelegate: l }, d, t)),
            (O = d.isDropTarget({ type: "root" }));
    }
    let { focusProps: _, isFocused: q, isFocusVisible: J } = (0, f.o)(),
        G = (0, i.Sl)({
            className: e.className,
            style: e.style,
            defaultClassName: "react-aria-Table",
            values: { isDropTarget: O, isFocused: q, isFocusVisible: J, state: A },
        }),
        Y = !!(H && !(null == c ? void 0 : c.isDisabled)),
        Z = G.style,
        X = null;
    D &&
        ((X = D.useTableColumnResizeState({ tableWidth: D.tableWidth }, A)),
        w || (Z = { ...Z, tableLayout: "fixed", width: "fit-content" }));
    let ee = L("table"),
        et = (0, B.$)(e, { global: !0 });
    return P.createElement(
        i.Kq,
        {
            values: [
                [V, A],
                [j, X],
                [s.Ux, { dragAndDropHooks: M, dragState: c, dropState: d }],
                [s.U5, { render: el }],
                [o.Co, null],
                [o.wv, null],
            ],
        },
        P.createElement(
            k.n1,
            null,
            P.createElement(
                ee,
                {
                    ...(0, b.v)(et, G, F, _, null == g ? void 0 : g.collectionProps),
                    style: Z,
                    ref: t,
                    slot: e.slot || void 0,
                    onScroll: e.onScroll,
                    "data-allows-dragging": Y || void 0,
                    "data-drop-target": O || void 0,
                    "data-focused": q || void 0,
                    "data-focus-visible": J || void 0,
                },
                P.createElement(
                    a.D,
                    null,
                    P.createElement($, {
                        collection: A.collection,
                        scrollRef: null != (u = null == D ? void 0 : D.scrollRef) ? u : t,
                        persistedKeys: (0, s.XW)(R, M, d),
                    }),
                ),
            ),
        ),
        Q,
    );
}
function L(e) {
    let { isVirtualized: t } = (0, P.useContext)(r.zL);
    return t ? "div" : e;
}
let U = (0, P.createContext)(null);
class O extends c.Pt {}
O.type = "tableheader";
let Q = (0, d.yq)(
    O,
    (e, t) => {
        let l = (0, P.useContext)(V).collection,
            n = (0, g.p)({
                items: l.headerRows,
                children: (0, P.useCallback)((e) => {
                    if ("headerrow" === e.type) return P.createElement(W, { item: e });
                    throw Error("Unsupported node type in TableHeader: " + e.type);
                }, []),
            }),
            o = L("thead"),
            { rowGroupProps: r } = (0, S.rs)(),
            { hoverProps: s, isHovered: u } = (0, C.M)({
                onHoverStart: e.onHoverStart,
                onHoverChange: e.onHoverChange,
                onHoverEnd: e.onHoverEnd,
            }),
            a = (0, i.Sl)({
                className: e.className,
                style: e.style,
                defaultClassName: "react-aria-TableHeader",
                values: { isHovered: u },
            });
        return P.createElement(
            o,
            { ...(0, b.v)((0, B.$)(e, { global: !0 }), r, s), ...a, ref: t, "data-hovered": u || void 0 },
            n,
        );
    },
    (e) => P.createElement(d.pM, { dependencies: e.dependencies, items: e.columns }, e.children),
);
function W({ item: e }) {
    let t = (0, P.useRef)(null),
        l = (0, P.useContext)(V),
        { isVirtualized: n, CollectionBranch: s } = (0, P.useContext)(r.zL),
        { rowProps: u } = (0, D.x)({ node: e, isVirtualized: n }, l, t),
        { checkboxProps: a } = (0, x.q)(l),
        c = L("tr");
    return P.createElement(
        c,
        { ...u, ref: t },
        P.createElement(
            i.Kq,
            { values: [[o.BP, { slots: { selection: a } }]] },
            P.createElement(s, { collection: l.collection, parent: e }),
        ),
    );
}
class _ extends c.Pt {}
_.type = "column";
let q = (0, d.KU)(_, (e, t, l) => {
        var n, o;
        let s = (0, z.U)(t),
            u = (0, P.useContext)(V),
            { isVirtualized: a } = (0, P.useContext)(r.zL),
            { columnHeaderProps: c } = (0, A.f)({ node: l, isVirtualized: a }, u, s),
            { isFocused: d, isFocusVisible: g, focusProps: p } = (0, f.o)(),
            m = (0, P.useContext)(j),
            h = !1;
        m && (h = m.resizingColumn === l.key);
        let { hoverProps: y, isHovered: v } = (0, C.M)({ isDisabled: !e.allowsSorting }),
            k = (0, i.Sl)({
                ...e,
                id: void 0,
                children: l.rendered,
                defaultClassName: "react-aria-Column",
                values: {
                    isHovered: v,
                    isFocused: d,
                    isFocusVisible: g,
                    allowsSorting: l.props.allowsSorting,
                    sortDirection:
                        (null == (n = u.sortDescriptor) ? void 0 : n.column) === l.key
                            ? u.sortDescriptor.direction
                            : void 0,
                    isResizing: h,
                    startResize: () => {
                        if (m) m.startResize(l.key), u.setKeyboardNavigationDisabled(!0);
                        else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
                    },
                    sort: (e) => {
                        u.sort(l.key, e);
                    },
                },
            }),
            S = k.style;
        m && (S = { ...S, width: m.getColumnWidth(l.key) });
        let D = L("th"),
            x = (0, B.$)(e, { global: !0 });
        return (
            delete x.id,
            P.createElement(
                D,
                {
                    ...(0, b.v)(x, c, p, y),
                    ...k,
                    style: S,
                    ref: s,
                    "data-hovered": v || void 0,
                    "data-focused": d || void 0,
                    "data-focus-visible": g || void 0,
                    "data-resizing": h || void 0,
                    "data-allows-sorting": l.props.allowsSorting || void 0,
                    "data-sort-direction":
                        (null == (o = u.sortDescriptor) ? void 0 : o.column) === l.key
                            ? u.sortDescriptor.direction
                            : void 0,
                },
                P.createElement(
                    i.Kq,
                    {
                        values: [
                            [J, { column: l, triggerRef: s }],
                            [r.zL, r.N],
                        ],
                    },
                    k.children,
                ),
            )
        );
    }),
    J = (0, P.createContext)(null);
class G extends c.ru {}
G.type = "tablebody";
let Y = (0, d.yq)(G, (e, t) => {
    var l;
    let n,
        o = (0, P.useContext)(V),
        { isVirtualized: u } = (0, P.useContext)(r.zL),
        a = o.collection,
        { CollectionBranch: c } = (0, P.useContext)(r.zL),
        { dragAndDropHooks: d, dropState: g } = (0, P.useContext)(s.Ux),
        p = !!(null == d ? void 0 : d.useDroppableCollectionState) && !(null == g ? void 0 : g.isDisabled),
        m = p && !!g && null != (l = g.isDropTarget({ type: "root" })) && l,
        h = 0 === a.size,
        y = { isDropTarget: m, isEmpty: h },
        v = (0, i.Sl)({ ...e, id: void 0, children: void 0, defaultClassName: "react-aria-TableBody", values: y }),
        f = L("tr"),
        k = L("td"),
        C = a.columnCount;
    if (h && e.renderEmptyState && o) {
        let t = {},
            l = {};
        u ? ((t["aria-colspan"] = C), (l = { display: "contents" })) : (t.colSpan = C),
            (n = P.createElement(
                f,
                { role: "row", style: l },
                P.createElement(k, { role: "rowheader", ...t, style: l }, e.renderEmptyState(y)),
            ));
    }
    let { rowGroupProps: D } = (0, S.rs)(),
        x = L("tbody"),
        A = (0, B.$)(e, { global: !0 });
    return P.createElement(
        x,
        { ...(0, b.v)(A, v, D), ref: t, "data-empty": h || void 0 },
        p && P.createElement(eo, null),
        P.createElement(c, { collection: a, parent: a.body, renderDropIndicator: (0, s.oC)(d, g) }),
        n,
    );
});
class Z extends c.Pt {
    filter(e, t, l) {
        for (let n of e.getChildren(this.key))
            if (l(n.textValue, n)) {
                let l = this.clone();
                return t.addDescendants(l, e), l;
            }
        return null;
    }
}
Z.type = "item";
let X = (0, d.yq)(
    Z,
    (e, t, l) => {
        let a,
            c,
            d = (0, z.U)(t),
            g = (0, P.useContext)(V),
            { dragAndDropHooks: p, dragState: m, dropState: h } = (0, P.useContext)(s.Ux),
            { isVirtualized: y, CollectionBranch: v } = (0, P.useContext)(r.zL),
            { rowProps: k, ...S } = (0, w.A)({ node: l, shouldSelectOnPressUp: !!m, isVirtualized: y }, g, d),
            { isFocused: D, isFocusVisible: A, focusProps: K } = (0, f.o)(),
            { isFocusVisible: N, focusProps: $ } = (0, f.o)({ within: !0 }),
            { hoverProps: M, isHovered: F } = (0, C.M)({
                isDisabled: !S.allowsSelection && !S.hasAction,
                onHoverStart: e.onHoverStart,
                onHoverChange: e.onHoverChange,
                onHoverEnd: e.onHoverEnd,
            }),
            { checkboxProps: I } = (0, x.B)({ key: l.key }, g);
        m && p && (a = p.useDraggableItem({ key: l.key, hasDragButton: !0 }, m));
        let R = (0, P.useRef)(null),
            { visuallyHiddenProps: j } = (0, E.B)();
        h && p && (c = p.useDropIndicator({ target: { type: "item", key: l.key, dropPosition: "on" } }, h, R));
        let H = (0, P.useRef)(null);
        (0, P.useEffect)(() => {
            m && H.current;
        }, []);
        let T = m && m.isDragging(l.key),
            { children: U, ...O } = e,
            Q = (0, i.Sl)({
                ...O,
                id: void 0,
                defaultClassName: "react-aria-Row",
                values: {
                    ...S,
                    isHovered: F,
                    isFocused: D,
                    isFocusVisible: A,
                    selectionMode: g.selectionManager.selectionMode,
                    selectionBehavior: g.selectionManager.selectionBehavior,
                    isDragging: T,
                    isDropTarget: null == c ? void 0 : c.isDropTarget,
                    isFocusVisibleWithin: N,
                    id: l.key,
                },
            }),
            W = L("tr"),
            _ = L("td"),
            q = (0, B.$)(e, { global: !0 });
        return (
            delete q.id,
            delete q.onClick,
            P.createElement(
                P.Fragment,
                null,
                c &&
                    !c.isHidden &&
                    P.createElement(
                        W,
                        { role: "row", style: { height: 0 } },
                        P.createElement(
                            _,
                            { role: "gridcell", colSpan: g.collection.columnCount, style: { padding: 0 } },
                            P.createElement("div", { role: "button", ...j, ...c.dropIndicatorProps, ref: R }),
                        ),
                    ),
                P.createElement(
                    W,
                    {
                        ...(0, b.v)(q, Q, k, K, M, null == a ? void 0 : a.dragProps, $),
                        ref: d,
                        "data-disabled": S.isDisabled || void 0,
                        "data-selected": S.isSelected || void 0,
                        "data-hovered": F || void 0,
                        "data-focused": S.isFocused || void 0,
                        "data-focus-visible": A || void 0,
                        "data-pressed": S.isPressed || void 0,
                        "data-dragging": T || void 0,
                        "data-drop-target": (null == c ? void 0 : c.isDropTarget) || void 0,
                        "data-selection-mode":
                            "none" === g.selectionManager.selectionMode ? void 0 : g.selectionManager.selectionMode,
                        "data-focus-visible-within": N || void 0,
                    },
                    P.createElement(
                        i.Kq,
                        {
                            values: [
                                [o.BP, { slots: { [i.P_]: {}, selection: I } }],
                                [
                                    n.k,
                                    {
                                        slots: {
                                            [i.P_]: {},
                                            drag: {
                                                ...(null == a ? void 0 : a.dragButtonProps),
                                                ref: H,
                                                style: { pointerEvents: "none" },
                                            },
                                        },
                                    },
                                ],
                                [u.r, { isSelected: S.isSelected }],
                            ],
                        },
                        P.createElement(v, { collection: g.collection, parent: l }),
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
        return P.createElement(d.pM, { dependencies: t, items: e.columns, idScope: e.id }, e.children);
    },
);
class ee extends c.Pt {}
ee.type = "cell";
let et = (0, d.KU)(ee, (e, t, l) => {
    let n = (0, z.U)(t),
        o = (0, P.useContext)(V),
        { dragState: u } = (0, P.useContext)(s.Ux),
        { isVirtualized: a } = (0, P.useContext)(r.zL);
    l.column = o.collection.columns[l.index];
    let { gridCellProps: c, isPressed: d } = (0, K.a)({ node: l, shouldSelectOnPressUp: !!u, isVirtualized: a }, o, n),
        { isFocused: g, isFocusVisible: p, focusProps: m } = (0, f.o)(),
        { hoverProps: h, isHovered: y } = (0, C.M)({}),
        v = (0, i.Sl)({
            ...e,
            id: void 0,
            defaultClassName: "react-aria-Cell",
            values: { isFocused: g, isFocusVisible: p, isPressed: d, isHovered: y, id: l.key },
        }),
        k = L("td"),
        S = (0, B.$)(e, { global: !0 });
    return (
        delete S.id,
        P.createElement(
            k,
            {
                ...(0, b.v)(S, v, c, m, h),
                ref: n,
                "data-focused": g || void 0,
                "data-focus-visible": p || void 0,
                "data-pressed": d || void 0,
            },
            P.createElement(r.zL.Provider, { value: r.N }, v.children),
        )
    );
});
function el(e, t) {
    t = (0, z.U)(t);
    let { dragAndDropHooks: l, dropState: n } = (0, P.useContext)(s.Ux),
        o = (0, P.useRef)(null),
        { dropIndicatorProps: r, isHidden: i, isDropTarget: u } = l.useDropIndicator(e, n, o);
    return i ? null : P.createElement(en, { ...e, dropIndicatorProps: r, isDropTarget: u, buttonRef: o, ref: t });
}
let en = (0, P.forwardRef)(function (e, t) {
    let { dropIndicatorProps: l, isDropTarget: n, buttonRef: o, ...r } = e,
        s = (0, P.useContext)(V),
        { visuallyHiddenProps: u } = (0, E.B)(),
        a = (0, i.Sl)({ ...r, defaultClassName: "react-aria-DropIndicator", values: { isDropTarget: n } }),
        c = L("tr"),
        d = L("td");
    return P.createElement(
        c,
        { ...(0, B.$)(e, { global: !0 }), ...a, role: "row", ref: t, "data-drop-target": n || void 0 },
        P.createElement(
            d,
            { role: "gridcell", colSpan: s.collection.columnCount, style: { padding: 0 } },
            P.createElement("div", { ...u, role: "button", ...l, ref: o }),
            a.children,
        ),
    );
});
function eo() {
    let e = (0, P.useContext)(V),
        { dragAndDropHooks: t, dropState: l } = (0, P.useContext)(s.Ux),
        n = (0, P.useRef)(null),
        { dropIndicatorProps: o } = t.useDropIndicator({ target: { type: "root" } }, l, n),
        r = l.isDropTarget({ type: "root" }),
        { visuallyHiddenProps: i } = (0, E.B)(),
        u = L("tr"),
        a = L("td");
    return !r && o["aria-hidden"]
        ? null
        : P.createElement(
              u,
              { role: "row", "aria-hidden": o["aria-hidden"], style: { height: 0 } },
              P.createElement(
                  a,
                  { role: "gridcell", colSpan: e.collection.columnCount, style: { padding: 0 } },
                  P.createElement("div", { role: "button", ...i, ...o, ref: n }),
              ),
          );
}
(0, d.KU)(c.OJ, function (e, t, l) {
    let n = (0, P.useContext)(V),
        { isVirtualized: o } = (0, P.useContext)(r.zL),
        { isLoading: s, onLoadMore: u, scrollOffset: a, ...c } = e,
        d = n.collection.columns.length,
        g = (0, P.useRef)(null),
        p = (0, P.useMemo)(
            () => ({ onLoadMore: u, collection: null == n ? void 0 : n.collection, sentinelRef: g, scrollOffset: a }),
            [u, a, null == n ? void 0 : n.collection],
        );
    (0, $.n)(p, g);
    let m = (0, i.Sl)({
            ...c,
            id: void 0,
            children: l.rendered,
            defaultClassName: "react-aria-TableLoadingIndicator",
            values: null,
        }),
        h = L("tr"),
        y = L("td"),
        v = {},
        f = {};
    return (
        o ? ((v["aria-colspan"] = d), (f = { display: "contents" })) : (v.colSpan = d),
        P.createElement(
            P.Fragment,
            null,
            P.createElement(
                h,
                { style: { height: 0 }, inert: (0, M.Y)(!0) },
                P.createElement(
                    y,
                    { style: { padding: 0, border: 0 } },
                    P.createElement("div", {
                        "data-testid": "loadMoreSentinel",
                        ref: g,
                        style: { position: "relative", height: 1, width: 1 },
                    }),
                ),
            ),
            s &&
                m.children &&
                P.createElement(
                    h,
                    { ...(0, b.v)((0, B.$)(e, { global: !0 }), {}), ...m, role: "row", ref: t },
                    P.createElement(y, { role: "rowheader", ...v, style: f }, m.children),
                ),
        )
    );
});
