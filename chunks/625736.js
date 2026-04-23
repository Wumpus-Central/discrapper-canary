l.d(t, { B: () => s, q: () => u });
var n = l(224507),
    o = l(825733),
    r = l(547576),
    i = l(47276);
function s(e, t) {
    let { key: l } = e,
        { checkboxProps: o } = (0, r.b)(e, t);
    return { checkboxProps: { ...o, "aria-labelledby": `${o.id} ${(0, n.VJ)(t, l)}` } };
}
function u(e) {
    var t;
    let { isEmpty: l, isSelectAll: n, selectionMode: r } = e.selectionManager;
    return {
        checkboxProps: {
            "aria-label": (0, i.o)((t = o.A) && t.__esModule ? t.default : t, "@react-aria/table").format(
                "single" === r ? "select" : "selectAll",
            ),
            isSelected: n,
            isDisabled:
                "multiple" !== r ||
                0 === e.collection.size ||
                (1 === e.collection.rows.length && "loader" === e.collection.rows[0].type),
            isIndeterminate: !l && !n,
            onChange: () => e.selectionManager.toggleSelectAll(),
        },
    };
}
