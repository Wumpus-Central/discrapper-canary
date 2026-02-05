"use strict";
n.d(t, { f: () => p });
var r = n(224507),
    i = n(825733),
    a = n(408713),
    s = n(807177),
    o = n(803082),
    l = n(64700),
    u = n(8321),
    c = n(946020),
    d = n(788951),
    _ = n(47276);
function f(e) {
    return e && e.__esModule ? e.default : e;
}
function p(e, t, n) {
    var p, h;
    let m,
        g,
        { node: E } = e,
        A = E.props.allowsSorting,
        { gridCellProps: I } = (0, d.Q)({ ...e, focusMode: "child" }, t, n),
        T = E.props.isSelectionCell && "single" === t.selectionManager.selectionMode,
        { pressProps: y } = (0, u.d)({
            isDisabled: !A || T,
            onPress() {
                t.sort(E.key);
            },
            ref: n,
        }),
        { focusableProps: S } = (0, c.Wc)({}, n),
        v = (null == (p = t.sortDescriptor) ? void 0 : p.column) === E.key,
        C = null == (h = t.sortDescriptor) ? void 0 : h.direction;
    E.props.allowsSorting && !(0, a.m0)() && (g = v ? C : "none");
    let b = (0, _.o)(f(i.A), "@react-aria/table");
    A && ((m = `${b.format("sortable")}`), v && C && (0, a.m0)() && (m = `${m}, ${b.format(C)}`));
    let N = (0, s.I)(m),
        R = 0 === t.collection.size;
    return (
        (0, l.useEffect)(() => {
            R && t.selectionManager.focusedKey === E.key && t.selectionManager.setFocusedKey(null);
        }, [R, t.selectionManager, E.key]),
        {
            columnHeaderProps: {
                ...(0, o.v)(S, I, y, N, R ? { tabIndex: -1 } : null),
                role: "columnheader",
                id: (0, r.zD)(t, E.key),
                "aria-colspan": E.colSpan && E.colSpan > 1 ? E.colSpan : void 0,
                "aria-sort": g,
            },
        }
    );
}
