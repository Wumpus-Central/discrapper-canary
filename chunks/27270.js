"use strict";
n.d(t, { O: () => h });
var r = n(567359),
    i = n(301982),
    a = n(723906),
    s = n(807177),
    o = n(290424),
    l = n(132716),
    u = n(803082),
    c = n(885714),
    d = n(946020),
    _ = n(795122),
    f = n(47276);
function p(e) {
    return e && e.__esModule ? e.default : e;
}
function h(e, t, n) {
    let { item: h } = e,
        m = (0, f.o)(p(i.A), "@react-aria/tag"),
        g = (0, a.Bi)(),
        { onRemove: E } = r.O.get(t) || {},
        { rowProps: A, gridCellProps: I, ...T } = (0, _.n)({ node: h }, t, n),
        { descriptionProps: y, ...S } = T,
        v = t.disabledKeys.has(h.key) || h.props.isDisabled,
        C = (e) => {
            ("Delete" === e.key || "Backspace" === e.key) &&
                (v ||
                    (e.preventDefault(),
                    t.selectionManager.isSelected(h.key)
                        ? null == E || E(new Set(t.selectionManager.selectedKeys))
                        : null == E || E(new Set([h.key]))));
        },
        b = (0, c.lb)();
    "virtual" === b && "u" > typeof window && "ontouchstart" in window && (b = "pointer");
    let N = E && ("keyboard" === b || "virtual" === b) ? m.format("removeDescription") : "",
        R = (0, s.I)(N),
        O = h.key === t.selectionManager.focusedKey,
        D = null != t.selectionManager.focusedKey,
        L = -1;
    v || (!O && D) || (L = 0);
    let w = (0, o.$)(h.props),
        x = (0, l.HI)(h.props),
        { focusableProps: P } = (0, d.Wc)({ isDisabled: v }, n);
    return {
        removeButtonProps: {
            "aria-label": m.format("removeButtonLabel"),
            "aria-labelledby": `${g} ${A.id}`,
            isDisabled: v,
            id: g,
            onPress: () => (E ? E(new Set([h.key])) : null),
        },
        rowProps: (0, u.v)(P, A, w, x, {
            tabIndex: L,
            onKeyDown: E ? C : void 0,
            "aria-describedby": R["aria-describedby"],
        }),
        gridCellProps: (0, u.v)(I, { "aria-errormessage": e["aria-errormessage"], "aria-label": e["aria-label"] }),
        ...S,
        allowsRemoving: !!E,
    };
}
