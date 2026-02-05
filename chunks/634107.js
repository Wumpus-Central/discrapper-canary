"use strict";
n.d(t, { B: () => u, j: () => l });
var r = n(136193),
    i = n(342876),
    a = n(64700),
    s = n(555578);
let o = { ascending: "descending", descending: "ascending" };
function l(e) {
    var t;
    let [n, l] = (0, a.useState)(!1),
        { selectionMode: u = "none", showSelectionCheckboxes: c, showDragButtons: d } = e,
        _ = (0, a.useMemo)(
            () => ({ showSelectionCheckboxes: c && "none" !== u, showDragButtons: d, selectionMode: u, columns: [] }),
            [e.children, c, u, d],
        ),
        f = (0, s.G)(
            e,
            (0, a.useCallback)((e) => new (0, r.L)(e, null, _), [_]),
            _,
        ),
        { disabledKeys: p, selectionManager: h } = (0, i.b)({
            ...e,
            collection: f,
            disabledBehavior: e.disabledBehavior || "selection",
        });
    return {
        collection: f,
        disabledKeys: p,
        selectionManager: h,
        showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
        sortDescriptor: null != (t = e.sortDescriptor) ? t : null,
        isKeyboardNavigationDisabled: 0 === f.size || n,
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
function u(e, t) {
    let n = (0, a.useMemo)(() => (t ? e.collection.filter(t) : e.collection), [e.collection, t]),
        r = e.selectionManager.withCollection(n);
    return { ...e, collection: n, selectionManager: r };
}
