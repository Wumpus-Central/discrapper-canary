"use strict";
n.d(t, { b: () => o });
var r = n(199407),
    i = n(723906),
    a = n(47276);
function s(e) {
    return e && e.__esModule ? e.default : e;
}
function o(e, t) {
    let { key: n } = e,
        o = t.selectionManager,
        l = (0, i.Bi)(),
        u = !t.selectionManager.canSelectItem(n),
        c = t.selectionManager.isSelected(n),
        d = () => o.toggleSelection(n);
    return {
        checkboxProps: {
            id: l,
            "aria-label": (0, a.o)(s(r.A), "@react-aria/grid").format("select"),
            isSelected: c,
            isDisabled: u,
            onChange: d,
        },
    };
}
