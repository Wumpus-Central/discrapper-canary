n.d(t, { W: () => p });
var r = n(455419),
    i = n(478906),
    a = n(21814),
    o = n(645537),
    s = n(158821),
    l = n(473749),
    c = n(226098),
    u = n(497448),
    d = n(90809),
    f = n(218769);
function _(e) {
    return e && e.__esModule ? e.default : e;
}
function p(e, t, n) {
    var p, h;
    let m,
        g,
        { node: E } = e,
        b = E.props.allowsSorting,
        { gridCellProps: y } = (0, d.n)(
            {
                ...e,
                focusMode: "child",
            },
            t,
            n,
        ),
        O = E.props.isSelectionCell && "single" === t.selectionManager.selectionMode,
        { pressProps: v } = (0, c.r)({
            isDisabled: !b || O,
            onPress() {
                t.sort(E.key);
            },
            ref: n,
        }),
        { focusableProps: I } = (0, u.kc)({}, n),
        T = (null == (p = t.sortDescriptor) ? void 0 : p.column) === E.key,
        S = null == (h = t.sortDescriptor) ? void 0 : h.direction;
    E.props.allowsSorting && !(0, a.Dt)() && (g = T ? S : "none");
    let A = (0, f.q)(_(i.Z), "@react-aria/table");
    b && ((m = `${A.format("sortable")}`), T && S && (0, a.Dt)() && (m = `${m}, ${A.format(S)}`));
    let C = (0, o.P)(m),
        N = 0 === t.collection.size;
    return (
        (0, l.useEffect)(() => {
            N && t.selectionManager.focusedKey === E.key && t.selectionManager.setFocusedKey(null);
        }, [N, t.selectionManager, E.key]),
        {
            columnHeaderProps: {
                ...(0, s.d)(I, y, v, C, N ? { tabIndex: -1 } : null),
                role: "columnheader",
                id: (0, r.z9)(t, E.key),
                "aria-colspan": E.colSpan && E.colSpan > 1 ? E.colSpan : void 0,
                "aria-sort": g,
            },
        }
    );
}
