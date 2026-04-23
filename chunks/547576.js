l.d(t, { b: () => i });
var n = l(199407),
    o = l(723906),
    r = l(47276);
function i(e, t) {
    var l;
    let { key: i } = e,
        s = t.selectionManager,
        u = (0, o.Bi)(),
        a = !t.selectionManager.canSelectItem(i),
        c = t.selectionManager.isSelected(i);
    return {
        checkboxProps: {
            id: u,
            "aria-label": (0, r.o)((l = n.A) && l.__esModule ? l.default : l, "@react-aria/grid").format("select"),
            isSelected: c,
            isDisabled: a,
            onChange: () => s.toggleSelection(i),
        },
    };
}
