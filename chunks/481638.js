l.d(t, { f: () => p });
var n = l(224507),
    o = l(825733),
    r = l(408713),
    i = l(807177),
    s = l(803082),
    u = l(64700),
    a = l(8321),
    c = l(946020),
    d = l(788951),
    g = l(47276);
function p(e, t, l) {
    var p, m, h;
    let y,
        v,
        { node: f } = e,
        k = f.props.allowsSorting,
        { gridCellProps: b } = (0, d.Q)({ ...e, focusMode: "child" }, t, l),
        S = f.props.isSelectionCell && "single" === t.selectionManager.selectionMode,
        { pressProps: C } = (0, a.d)({
            isDisabled: !k || S,
            onPress() {
                t.sort(f.key);
            },
            ref: l,
        }),
        { focusableProps: D } = (0, c.Wc)({}, l),
        x = (null == (p = t.sortDescriptor) ? void 0 : p.column) === f.key,
        A = null == (m = t.sortDescriptor) ? void 0 : m.direction;
    f.props.allowsSorting && !(0, r.m0)() && (v = x ? A : "none");
    let w = (0, g.o)((h = o.A) && h.__esModule ? h.default : h, "@react-aria/table");
    k && ((y = `${w.format("sortable")}`), x && A && (0, r.m0)() && (y = `${y}, ${w.format(A)}`));
    let E = (0, i.I)(y),
        K = 0 === t.collection.size;
    return (
        (0, u.useEffect)(() => {
            K && t.selectionManager.focusedKey === f.key && t.selectionManager.setFocusedKey(null);
        }, [K, t.selectionManager, f.key]),
        {
            columnHeaderProps: {
                ...(0, s.v)(D, b, C, E, K ? { tabIndex: -1 } : null),
                role: "columnheader",
                id: (0, n.zD)(t, f.key),
                "aria-colspan": f.colSpan && f.colSpan > 1 ? f.colSpan : void 0,
                "aria-sort": v,
            },
        }
    );
}
