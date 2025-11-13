n.d(t, {
    RM: () => Q,
    X2: () => $,
    bL: () => et,
    iA: () => B,
    sg: () => z,
    xD: () => Y,
});
var r = n(188366),
    i = n(386843),
    a = n(78218),
    o = n(922387),
    s = n(497221),
    l = n(501884),
    c = n(169460),
    u = n(975288),
    d = n(785894),
    f = n(222861),
    _ = n(493053),
    p = n(140312),
    h = n(679797),
    m = n(700989),
    g = n(94280),
    E = n(580470),
    b = n(750528),
    y = n(43341),
    O = n(636475),
    v = n(437525),
    I = n(217007),
    T = n(755596),
    S = n(729243),
    A = n(297737),
    C = n(513351),
    N = n(960313),
    R = n(593277),
    P = n(483022),
    D = n(735437),
    w = n(592632),
    x = n(747767),
    L = n(647438);
n(603113);
class M extends u.Mi {
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
            ((this.headerRows = (0, _.G)(t, this.columns)),
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
            (this.head = new H(-1)),
            (this.body = new X(-2)),
            (this.columnsDirty = !0);
    }
}
let j = (0, L.createContext)(null),
    k = (0, L.createContext)(null),
    U = (0, L.createContext)(null),
    G = (0, L.createContext)(null),
    B = (0, L.forwardRef)(function (e, t) {
        var n;
        [e, t] = (0, o.pE)(e, t, k);
        let r = (0, p.q)(e),
            { selectionBehavior: i, selectionMode: a, disallowEmptySelection: s } = r,
            l = !!(null == (n = e.dragAndDropHooks) ? void 0 : n.useDraggableCollectionState),
            c = (0, L.useMemo)(
                () => ({
                    selectionBehavior: "none" === a ? null : i,
                    selectionMode: a,
                    disallowEmptySelection: s,
                    allowsDragging: l,
                }),
                [i, a, s, l],
            ),
            u = L.createElement(V.Provider, { value: c }, L.createElement(d.FE, e));
        return L.createElement(
            d.yF,
            {
                content: u,
                createCollection: () => new M(),
            },
            (n) =>
                L.createElement(Z, {
                    props: e,
                    forwardedRef: t,
                    selectionState: r,
                    collection: n,
                }),
        );
    });
function Z({ props: e, forwardedRef: t, selectionState: n, collection: r }) {
    var l;
    let u, d, f;
    [e, t] = (0, o.pE)(e, t, i.lU);
    let { shouldUseVirtualFocus: _, disallowTypeAhead: p, filter: O, ...v } = e,
        I = (0, L.useContext)(j);
    t = (0, R.B)(
        (0, L.useMemo)(() => (0, P.l)(t, null == I ? void 0 : I.tableRef), [t, null == I ? void 0 : I.tableRef]),
    );
    let T = (0, h.o)({
            ...v,
            collection: r,
            children: void 0,
            UNSAFE_selectionState: n,
        }),
        S = (0, h.w)(T, O),
        { isVirtualized: A, layoutDelegate: C, dropTargetDelegate: N, CollectionRoot: w } = (0, L.useContext)(a.Qk),
        { dragAndDropHooks: x } = e,
        { gridProps: M } = (0, m.x)(
            {
                ...v,
                layoutDelegate: C,
                isVirtualized: A,
            },
            S,
            t,
        ),
        k = S.selectionManager,
        B = !!(null == x ? void 0 : x.useDraggableCollectionState),
        Z = !!(null == x ? void 0 : x.useDroppableCollectionState);
    (0, L.useRef)(B), (0, L.useRef)(Z), (0, L.useEffect)(() => {}, [B, Z]);
    let V = !1,
        H = null,
        Y = (0, L.useRef)(null);
    if (B && x) {
        (u = x.useDraggableCollectionState({
            collection: S.collection,
            selectionManager: k,
            preview: x.renderDragPreview ? Y : void 0,
        })),
            x.useDraggableCollection({}, u, t);
        let e = x.DragPreview;
        H = x.renderDragPreview ? L.createElement(e, { ref: Y }, x.renderDragPreview) : null;
    }
    if (Z && x) {
        d = x.useDroppableCollectionState({
            collection: S.collection,
            selectionManager: k,
        });
        let e = new (0, g.d)({
                collection: S.collection,
                disabledKeys: k.disabledKeys,
                disabledBehavior: k.disabledBehavior,
                ref: t,
                layoutDelegate: C,
            }),
            n = x.dropTargetDelegate || N || new x.ListDropTargetDelegate(r.rows, t);
        (f = x.useDroppableCollection(
            {
                keyboardDelegate: e,
                dropTargetDelegate: n,
            },
            d,
            t,
        )),
            (V = d.isDropTarget({ type: "root" }));
    }
    let { focusProps: W, isFocused: K, isFocusVisible: z } = (0, E.F)(),
        q = (0, o.aX)({
            className: e.className,
            style: e.style,
            defaultClassName: "react-aria-Table",
            values: {
                isDropTarget: V,
                isFocused: K,
                isFocusVisible: z,
                state: S,
            },
        }),
        X = !!(B && !(null == u ? void 0 : u.isDisabled)),
        Q = q.style,
        J = null;
    I &&
        ((J = I.useTableColumnResizeState({ tableWidth: I.tableWidth }, S)),
        A ||
            (Q = {
                ...Q,
                tableLayout: "fixed",
                width: "fit-content",
            }));
    let $ = F("table"),
        ee = (0, D.z)(e, { global: !0 });
    return L.createElement(
        o.zt,
        {
            values: [
                [U, S],
                [G, J],
                [
                    s.Ed,
                    {
                        dragAndDropHooks: x,
                        dragState: u,
                        dropState: d,
                    },
                ],
                [s.SZ, { render: en }],
                [i.lU, null],
                [i.LE, null],
            ],
        },
        L.createElement(
            b.MT,
            null,
            L.createElement(
                $,
                {
                    ...(0, y.d)(ee, q, M, W, null == f ? void 0 : f.collectionProps),
                    style: Q,
                    ref: t,
                    slot: e.slot || void 0,
                    onScroll: e.onScroll,
                    "data-allows-dragging": X || void 0,
                    "data-drop-target": V || void 0,
                    "data-focused": K || void 0,
                    "data-focus-visible": z || void 0,
                },
                L.createElement(
                    c.y,
                    null,
                    L.createElement(w, {
                        collection: S.collection,
                        scrollRef: null != (l = null == I ? void 0 : I.scrollRef) ? l : t,
                        persistedKeys: (0, s.y)(k, x, d),
                    }),
                ),
            ),
        ),
        H,
    );
}
function F(e) {
    let { isVirtualized: t } = (0, L.useContext)(a.Qk);
    return t ? "div" : e;
}
let V = (0, L.createContext)(null);
class H extends u.S3 {}
H.type = "tableheader";
let Y = (0, d.IW)(
    H,
    (e, t) => {
        let n = (0, L.useContext)(U).collection,
            r = (0, f.H)({
                items: n.headerRows,
                children: (0, L.useCallback)((e) => {
                    if ("headerrow" === e.type) return L.createElement(W, { item: e });
                    throw Error("Unsupported node type in TableHeader: " + e.type);
                }, []),
            }),
            i = F("thead"),
            { rowGroupProps: a } = (0, O.LA)(),
            { hoverProps: s, isHovered: l } = (0, v.X)({
                onHoverStart: e.onHoverStart,
                onHoverChange: e.onHoverChange,
                onHoverEnd: e.onHoverEnd,
            }),
            c = (0, o.aX)({
                className: e.className,
                style: e.style,
                defaultClassName: "react-aria-TableHeader",
                values: { isHovered: l },
            });
        return L.createElement(
            i,
            {
                ...(0, y.d)((0, D.z)(e, { global: !0 }), a, s),
                ...c,
                ref: t,
                "data-hovered": l || void 0,
            },
            r,
        );
    },
    (e) =>
        L.createElement(
            d.FE,
            {
                dependencies: e.dependencies,
                items: e.columns,
            },
            e.children,
        ),
);
function W({ item: e }) {
    let t = (0, L.useRef)(null),
        n = (0, L.useContext)(U),
        { isVirtualized: r, CollectionBranch: s } = (0, L.useContext)(a.Qk),
        { rowProps: l } = (0, I.Q)(
            {
                node: e,
                isVirtualized: r,
            },
            n,
            t,
        ),
        { checkboxProps: c } = (0, T.j)(n),
        u = F("tr");
    return L.createElement(
        u,
        {
            ...l,
            ref: t,
        },
        L.createElement(
            o.zt,
            {
                values: [[i.cP, { slots: { selection: c } }]],
            },
            L.createElement(s, {
                collection: n.collection,
                parent: e,
            }),
        ),
    );
}
class K extends u.S3 {}
K.type = "column";
let z = (0, d.G5)(K, (e, t, n) => {
        var r, i;
        let s = (0, R.B)(t),
            l = (0, L.useContext)(U),
            { isVirtualized: c } = (0, L.useContext)(a.Qk),
            { columnHeaderProps: u } = (0, S.W)(
                {
                    node: n,
                    isVirtualized: c,
                },
                l,
                s,
            ),
            { isFocused: d, isFocusVisible: f, focusProps: _ } = (0, E.F)(),
            p = (0, L.useContext)(G),
            h = !1;
        p && (h = p.resizingColumn === n.key);
        let { hoverProps: m, isHovered: g } = (0, v.X)({ isDisabled: !e.allowsSorting }),
            b = (0, o.aX)({
                ...e,
                id: void 0,
                children: n.rendered,
                defaultClassName: "react-aria-Column",
                values: {
                    isHovered: g,
                    isFocused: d,
                    isFocusVisible: f,
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
            O = b.style;
        p &&
            (O = {
                ...O,
                width: p.getColumnWidth(n.key),
            });
        let I = F("th"),
            T = (0, D.z)(e, { global: !0 });
        return (
            delete T.id,
            L.createElement(
                I,
                {
                    ...(0, y.d)(T, u, _, m),
                    ...b,
                    style: O,
                    ref: s,
                    "data-hovered": g || void 0,
                    "data-focused": d || void 0,
                    "data-focus-visible": f || void 0,
                    "data-resizing": h || void 0,
                    "data-allows-sorting": n.props.allowsSorting || void 0,
                    "data-sort-direction":
                        (null == (i = l.sortDescriptor) ? void 0 : i.column) === n.key
                            ? l.sortDescriptor.direction
                            : void 0,
                },
                L.createElement(
                    o.zt,
                    {
                        values: [
                            [
                                q,
                                {
                                    column: n,
                                    triggerRef: s,
                                },
                            ],
                            [a.Qk, a.Uu],
                        ],
                    },
                    b.children,
                ),
            )
        );
    }),
    q = (0, L.createContext)(null);
class X extends u.$x {}
X.type = "tablebody";
let Q = (0, d.IW)(X, (e, t) => {
    var n;
    let r,
        i = (0, L.useContext)(U),
        { isVirtualized: l } = (0, L.useContext)(a.Qk),
        c = i.collection,
        { CollectionBranch: u } = (0, L.useContext)(a.Qk),
        { dragAndDropHooks: d, dropState: f } = (0, L.useContext)(s.Ed),
        _ = !!(null == d ? void 0 : d.useDroppableCollectionState) && !(null == f ? void 0 : f.isDisabled),
        p = _ && !!f && null != (n = f.isDropTarget({ type: "root" })) && n,
        h = 0 === c.size,
        m = {
            isDropTarget: p,
            isEmpty: h,
        },
        g = (0, o.aX)({
            ...e,
            id: void 0,
            children: void 0,
            defaultClassName: "react-aria-TableBody",
            values: m,
        }),
        E = F("tr"),
        b = F("td"),
        v = c.columnCount;
    if (h && e.renderEmptyState && i) {
        let t = {},
            n = {},
            i = {};
        l ? ((n["aria-colspan"] = v), (i = { display: "contents" })) : (n.colSpan = v),
            (r = L.createElement(
                E,
                {
                    role: "row",
                    ...t,
                    style: i,
                },
                L.createElement(
                    b,
                    {
                        role: "rowheader",
                        ...n,
                        style: i,
                    },
                    e.renderEmptyState(m),
                ),
            ));
    }
    let { rowGroupProps: I } = (0, O.LA)(),
        T = F("tbody"),
        S = (0, D.z)(e, { global: !0 });
    return L.createElement(
        T,
        {
            ...(0, y.d)(S, g, I),
            ref: t,
            "data-empty": h || void 0,
        },
        _ && L.createElement(ea, null),
        L.createElement(u, {
            collection: c,
            parent: c.body,
            renderDropIndicator: (0, s._$)(d, f),
        }),
        r,
    );
});
class J extends u.S3 {
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
let $ = (0, d.IW)(
    J,
    (e, t, n) => {
        let c,
            u,
            d = (0, R.B)(t),
            f = (0, L.useContext)(U),
            { dragAndDropHooks: _, dragState: p, dropState: h } = (0, L.useContext)(s.Ed),
            { isVirtualized: m, CollectionBranch: g } = (0, L.useContext)(a.Qk),
            { rowProps: b, ...O } = (0, A.U)(
                {
                    node: n,
                    shouldSelectOnPressUp: !!p,
                    isVirtualized: m,
                },
                f,
                d,
            ),
            { isFocused: I, isFocusVisible: S, focusProps: N } = (0, E.F)(),
            { isFocusVisible: P, focusProps: w } = (0, E.F)({ within: !0 }),
            { hoverProps: x, isHovered: M } = (0, v.X)({
                isDisabled: !O.allowsSelection && !O.hasAction,
                onHoverStart: e.onHoverStart,
                onHoverChange: e.onHoverChange,
                onHoverEnd: e.onHoverEnd,
            }),
            { checkboxProps: j } = (0, T.M)({ key: n.key }, f);
        p &&
            _ &&
            (c = _.useDraggableItem(
                {
                    key: n.key,
                    hasDragButton: !0,
                },
                p,
            ));
        let k = (0, L.useRef)(null),
            { visuallyHiddenProps: G } = (0, C.S)();
        h &&
            _ &&
            (u = _.useDropIndicator(
                {
                    target: {
                        type: "item",
                        key: n.key,
                        dropPosition: "on",
                    },
                },
                h,
                k,
            ));
        let B = (0, L.useRef)(null);
        (0, L.useEffect)(() => {
            p && B.current;
        }, []);
        let Z = p && p.isDragging(n.key),
            { children: V, ...H } = e,
            Y = (0, o.aX)({
                ...H,
                id: void 0,
                defaultClassName: "react-aria-Row",
                values: {
                    ...O,
                    isHovered: M,
                    isFocused: I,
                    isFocusVisible: S,
                    selectionMode: f.selectionManager.selectionMode,
                    selectionBehavior: f.selectionManager.selectionBehavior,
                    isDragging: Z,
                    isDropTarget: null == u ? void 0 : u.isDropTarget,
                    isFocusVisibleWithin: P,
                    id: n.key,
                },
            }),
            W = F("tr"),
            K = F("td"),
            z = (0, D.z)(e, { global: !0 });
        return (
            delete z.id,
            delete z.onClick,
            L.createElement(
                L.Fragment,
                null,
                u &&
                    !u.isHidden &&
                    L.createElement(
                        W,
                        {
                            role: "row",
                            style: { height: 0 },
                        },
                        L.createElement(
                            K,
                            {
                                role: "gridcell",
                                colSpan: f.collection.columnCount,
                                style: { padding: 0 },
                            },
                            L.createElement("div", {
                                role: "button",
                                ...G,
                                ...u.dropIndicatorProps,
                                ref: k,
                            }),
                        ),
                    ),
                L.createElement(
                    W,
                    {
                        ...(0, y.d)(z, Y, b, N, x, null == c ? void 0 : c.dragProps, w),
                        ref: d,
                        "data-disabled": O.isDisabled || void 0,
                        "data-selected": O.isSelected || void 0,
                        "data-hovered": M || void 0,
                        "data-focused": O.isFocused || void 0,
                        "data-focus-visible": S || void 0,
                        "data-pressed": O.isPressed || void 0,
                        "data-dragging": Z || void 0,
                        "data-drop-target": (null == u ? void 0 : u.isDropTarget) || void 0,
                        "data-selection-mode":
                            "none" === f.selectionManager.selectionMode ? void 0 : f.selectionManager.selectionMode,
                        "data-focus-visible-within": P || void 0,
                    },
                    L.createElement(
                        o.zt,
                        {
                            values: [
                                [
                                    i.cP,
                                    {
                                        slots: {
                                            [o.hO]: {},
                                            selection: j,
                                        },
                                    },
                                ],
                                [
                                    r.b,
                                    {
                                        slots: {
                                            [o.hO]: {},
                                            drag: {
                                                ...(null == c ? void 0 : c.dragButtonProps),
                                                ref: B,
                                                style: { pointerEvents: "none" },
                                            },
                                        },
                                    },
                                ],
                                [l.p, { isSelected: O.isSelected }],
                            ],
                        },
                        L.createElement(g, {
                            collection: f.collection,
                            parent: n,
                        }),
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
        return L.createElement(
            d.FE,
            {
                dependencies: t,
                items: e.columns,
                idScope: e.id,
            },
            e.children,
        );
    },
);
class ee extends u.S3 {}
ee.type = "cell";
let et = (0, d.G5)(ee, (e, t, n) => {
    let r = (0, R.B)(t),
        i = (0, L.useContext)(U),
        { dragState: l } = (0, L.useContext)(s.Ed),
        { isVirtualized: c } = (0, L.useContext)(a.Qk);
    n.column = i.collection.columns[n.index];
    let { gridCellProps: u, isPressed: d } = (0, N.f)(
            {
                node: n,
                shouldSelectOnPressUp: !!l,
                isVirtualized: c,
            },
            i,
            r,
        ),
        { isFocused: f, isFocusVisible: _, focusProps: p } = (0, E.F)(),
        { hoverProps: h, isHovered: m } = (0, v.X)({}),
        g = (0, o.aX)({
            ...e,
            id: void 0,
            defaultClassName: "react-aria-Cell",
            values: {
                isFocused: f,
                isFocusVisible: _,
                isPressed: d,
                isHovered: m,
                id: n.key,
            },
        }),
        b = F("td"),
        O = (0, D.z)(e, { global: !0 });
    return (
        delete O.id,
        L.createElement(
            b,
            {
                ...(0, y.d)(O, g, u, p, h),
                ref: r,
                "data-focused": f || void 0,
                "data-focus-visible": _ || void 0,
                "data-pressed": d || void 0,
            },
            L.createElement(a.Qk.Provider, { value: a.Uu }, g.children),
        )
    );
});
function en(e, t) {
    t = (0, R.B)(t);
    let { dragAndDropHooks: n, dropState: r } = (0, L.useContext)(s.Ed),
        i = (0, L.useRef)(null),
        { dropIndicatorProps: a, isHidden: o, isDropTarget: l } = n.useDropIndicator(e, r, i);
    return o
        ? null
        : L.createElement(ei, {
              ...e,
              dropIndicatorProps: a,
              isDropTarget: l,
              buttonRef: i,
              ref: t,
          });
}
function er(e, t) {
    let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, ...a } = e,
        s = (0, L.useContext)(U),
        { visuallyHiddenProps: l } = (0, C.S)(),
        c = (0, o.aX)({
            ...a,
            defaultClassName: "react-aria-DropIndicator",
            values: { isDropTarget: r },
        }),
        u = F("tr"),
        d = F("td");
    return L.createElement(
        u,
        {
            ...(0, D.z)(e, { global: !0 }),
            ...c,
            role: "row",
            ref: t,
            "data-drop-target": r || void 0,
        },
        L.createElement(
            d,
            {
                role: "gridcell",
                colSpan: s.collection.columnCount,
                style: { padding: 0 },
            },
            L.createElement("div", {
                ...l,
                role: "button",
                ...n,
                ref: i,
            }),
            c.children,
        ),
    );
}
let ei = (0, L.forwardRef)(er);
function ea() {
    let e = (0, L.useContext)(U),
        { dragAndDropHooks: t, dropState: n } = (0, L.useContext)(s.Ed),
        r = (0, L.useRef)(null),
        { dropIndicatorProps: i } = t.useDropIndicator({ target: { type: "root" } }, n, r),
        a = n.isDropTarget({ type: "root" }),
        { visuallyHiddenProps: o } = (0, C.S)(),
        l = F("tr"),
        c = F("td");
    return !a && i["aria-hidden"]
        ? null
        : L.createElement(
              l,
              {
                  role: "row",
                  "aria-hidden": i["aria-hidden"],
                  style: { height: 0 },
              },
              L.createElement(
                  c,
                  {
                      role: "gridcell",
                      colSpan: e.collection.columnCount,
                      style: { padding: 0 },
                  },
                  L.createElement("div", {
                      role: "button",
                      ...o,
                      ...i,
                      ref: r,
                  }),
              ),
          );
}
(0, d.G5)(u.Rb, function (e, t, n) {
    let r = (0, L.useContext)(U),
        { isVirtualized: i } = (0, L.useContext)(a.Qk),
        { isLoading: s, onLoadMore: l, scrollOffset: c, ...u } = e,
        d = r.collection.columns.length,
        f = (0, L.useRef)(null),
        _ = (0, L.useMemo)(
            () => ({
                onLoadMore: l,
                collection: null == r ? void 0 : r.collection,
                sentinelRef: f,
                scrollOffset: c,
            }),
            [l, c, null == r ? void 0 : r.collection],
        );
    (0, w.B)(_, f);
    let p = (0, o.aX)({
            ...u,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-TableLoadingIndicator",
            values: null,
        }),
        h = F("tr"),
        m = F("td"),
        g = {},
        E = {},
        b = {};
    return (
        i ? ((E["aria-colspan"] = d), (b = { display: "contents" })) : (E.colSpan = d),
        L.createElement(
            L.Fragment,
            null,
            L.createElement(
                h,
                {
                    style: { height: 0 },
                    inert: (0, x.P)(!0),
                },
                L.createElement(
                    m,
                    {
                        style: {
                            padding: 0,
                            border: 0,
                        },
                    },
                    L.createElement("div", {
                        "data-testid": "loadMoreSentinel",
                        ref: f,
                        style: {
                            position: "relative",
                            height: 1,
                            width: 1,
                        },
                    }),
                ),
            ),
            s &&
                p.children &&
                L.createElement(
                    h,
                    {
                        ...(0, y.d)((0, D.z)(e, { global: !0 }), g),
                        ...p,
                        role: "row",
                        ref: t,
                    },
                    L.createElement(
                        m,
                        {
                            role: "rowheader",
                            ...E,
                            style: b,
                        },
                        p.children,
                    ),
                ),
        )
    );
});
