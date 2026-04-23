l.d(t, { B: () => a, j: () => u });
var n = l(136193),
    o = l(342876),
    r = l(64700),
    i = l(555578);
let s = { ascending: "descending", descending: "ascending" };
function u(e) {
    var t;
    let [l, u] = (0, r.useState)(!1),
        { selectionMode: a = "none", showSelectionCheckboxes: c, showDragButtons: d } = e,
        g = (0, r.useMemo)(
            () => ({ showSelectionCheckboxes: c && "none" !== a, showDragButtons: d, selectionMode: a, columns: [] }),
            [e.children, c, a, d],
        ),
        p = (0, i.G)(
            e,
            (0, r.useCallback)((e) => new (0, n.L)(e, null, g), [g]),
            g,
        ),
        { disabledKeys: m, selectionManager: h } = (0, o.b)({
            ...e,
            collection: p,
            disabledBehavior: e.disabledBehavior || "selection",
        });
    return {
        collection: p,
        disabledKeys: m,
        selectionManager: h,
        showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
        sortDescriptor: null != (t = e.sortDescriptor) ? t : null,
        isKeyboardNavigationDisabled: 0 === p.size || l,
        setKeyboardNavigationDisabled: u,
        sort(t, l) {
            var n, o;
            null == (o = e.onSortChange) ||
                o.call(e, {
                    column: t,
                    direction:
                        null != l
                            ? l
                            : (null == (n = e.sortDescriptor) ? void 0 : n.column) === t
                              ? s[e.sortDescriptor.direction]
                              : "ascending",
                });
        },
    };
}
function a(e, t) {
    let l = (0, r.useMemo)(() => (t ? e.collection.filter(t) : e.collection), [e.collection, t]),
        n = e.selectionManager.withCollection(l);
    return { ...e, collection: l, selectionManager: n };
}
