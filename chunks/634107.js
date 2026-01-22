n.d(t, {
    B: () => c,
    j: () => l,
});
var r = n(136193),
    i = n(342876),
    a = n(64700),
    s = n(555578);
let o = {
    ascending: "descending",
    descending: "ascending",
};

function l(e) {
    var t;
    let [n, l] = (0, a.useState)(!1),
        { selectionMode: c = "none", showSelectionCheckboxes: u, showDragButtons: d } = e,
        f = (0, a.useMemo)(
            () => ({
                showSelectionCheckboxes: u && "none" !== c,
                showDragButtons: d,
                selectionMode: c,
                columns: [],
            }),
            [e.children, u, c, d],
        ),
        p = (0, s.G)(
            e,
            (0, a.useCallback)((e) => new (0, r.L)(e, null, f), [f]),
            f,
        ),
        { disabledKeys: _, selectionManager: h } = (0, i.b)({
            ...e,
            collection: p,
            disabledBehavior: e.disabledBehavior || "selection",
        });
    return {
        collection: p,
        disabledKeys: _,
        selectionManager: h,
        showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
        sortDescriptor: null != (t = e.sortDescriptor) ? t : null,
        isKeyboardNavigationDisabled: 0 === p.size || n,
        setKeyboardNavigationDisabled: l,
        sort(t, n) {
            var r, i;
            null == (i = e.onSortChange) ||
                i.call(e, {
                    column: t,
                    direction:
                        null != n
                            ? n
                            : (null == (r = e.sortDescriptor) ? void 0 : r.column) === t
                              ? o[e.sortDescriptor.direction]
                              : "ascending",
                });
        },
    };
}

function c(e, t) {
    let n = (0, a.useMemo)(() => (t ? e.collection.filter(t) : e.collection), [e.collection, t]),
        r = e.selectionManager.withCollection(n);
    return {
        ...e,
        collection: n,
        selectionManager: r,
    };
}
