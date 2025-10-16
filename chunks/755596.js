n.d(t, {
    M: () => l,
    j: () => c,
});
var r = n(406647),
    i = n(994607),
    a = n(179889),
    o = n(970185);
function s(e) {
    return e && e.__esModule ? e.default : e;
}
function l(e, t) {
    let { key: n } = e,
        { checkboxProps: i } = (0, a.U)(e, t);
    return {
        checkboxProps: {
            ...i,
            "aria-labelledby": `${i.id} ${(0, r.u)(t, n)}`,
        },
    };
}
function c(e) {
    let { isEmpty: t, isSelectAll: n, selectionMode: r } = e.selectionManager;
    return {
        checkboxProps: {
            "aria-label": (0, o.q)(s(i.Z), "@react-aria/table").format("single" === r ? "select" : "selectAll"),
            isSelected: n,
            isDisabled:
                "multiple" !== r ||
                0 === e.collection.size ||
                (1 === e.collection.rows.length && "loader" === e.collection.rows[0].type),
            isIndeterminate: !t && !n,
            onChange: () => e.selectionManager.toggleSelectAll(),
        },
    };
}
