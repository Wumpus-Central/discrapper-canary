n.d(t, { O: () => h });
var r = n(567359),
    i = n(301982),
    a = n(723906),
    s = n(807177),
    o = n(290424),
    l = n(132716),
    c = n(803082),
    u = n(885714),
    d = n(946020),
    f = n(795122),
    p = n(47276);
function _(e) {
    return e && e.__esModule ? e.default : e;
}
function h(e, t, n) {
    let { item: h } = e,
        m = (0, p.o)(_(i.A), "@react-aria/tag"),
        g = (0, a.Bi)(),
        { onRemove: E } = r.O.get(t) || {},
        { rowProps: b, gridCellProps: y, ...O } = (0, f.n)({ node: h }, t, n),
        { descriptionProps: A, ...v } = O,
        S = t.disabledKeys.has(h.key) || h.props.isDisabled,
        I = (e) => {
            ("Delete" === e.key || "Backspace" === e.key) &&
                (S ||
                    (e.preventDefault(),
                    t.selectionManager.isSelected(h.key)
                        ? null == E || E(new Set(t.selectionManager.selectedKeys))
                        : null == E || E(new Set([h.key]))));
        },
        T = (0, u.lb)();
    "virtual" === T && "u" > typeof window && "ontouchstart" in window && (T = "pointer");
    let C = E && ("keyboard" === T || "virtual" === T) ? m.format("removeDescription") : "",
        N = (0, s.I)(C),
        R = h.key === t.selectionManager.focusedKey,
        w = null != t.selectionManager.focusedKey,
        P = -1;
    S || (!R && w) || (P = 0);
    let D = (0, o.$)(h.props),
        x = (0, l.HI)(h.props),
        { focusableProps: L } = (0, d.Wc)({ isDisabled: S }, n);
    return {
        removeButtonProps: {
            "aria-label": m.format("removeButtonLabel"),
            "aria-labelledby": `${g} ${b.id}`,
            isDisabled: S,
            id: g,
            onPress: () => (E ? E(new Set([h.key])) : null),
        },
        rowProps: (0, c.v)(L, b, D, x, {
            tabIndex: P,
            onKeyDown: E ? I : void 0,
            "aria-describedby": N["aria-describedby"],
        }),
        gridCellProps: (0, c.v)(y, {
            "aria-errormessage": e["aria-errormessage"],
            "aria-label": e["aria-label"],
        }),
        ...v,
        allowsRemoving: !!E,
    };
}
