n.d(t, {
    B: () => l,
    q: () => c,
});
var r = n(224507),
    i = n(825733),
    a = n(547576),
    s = n(47276);

function o(e) {
    return e && e.__esModule ? e.default : e;
}

function l(e, t) {
    let { key: n } = e,
        { checkboxProps: i } = (0, a.b)(e, t);
    return {
        checkboxProps: {
            ...i,
            "aria-labelledby": `${i.id} ${(0, r.VJ)(t, n)}`,
        },
    };
}

function c(e) {
    let { isEmpty: t, isSelectAll: n, selectionMode: r } = e.selectionManager;
    return {
        checkboxProps: {
            "aria-label": (0, s.o)(o(i.A), "@react-aria/table").format("single" === r ? "select" : "selectAll"),
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
