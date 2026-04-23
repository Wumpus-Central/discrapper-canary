"use strict";
n.d(t, { O: () => p });
var r = n(567359),
    i = n(301982),
    s = n(723906),
    a = n(807177),
    o = n(290424),
    l = n(132716),
    u = n(803082),
    c = n(885714),
    d = n(946020),
    _ = n(795122),
    f = n(47276);
function p(e, t, n) {
    var p;
    let { item: h } = e,
        E = (0, f.o)((p = i.A) && p.__esModule ? p.default : p, "@react-aria/tag"),
        m = (0, s.Bi)(),
        { onRemove: g } = r.O.get(t) || {},
        { rowProps: A, gridCellProps: I, ...T } = (0, _.n)({ node: h }, t, n),
        { descriptionProps: S, ...y } = T,
        N = t.disabledKeys.has(h.key) || h.props.isDisabled,
        v = (0, c.lb)();
    "virtual" === v && "u" > typeof window && "ontouchstart" in window && (v = "pointer");
    let C = g && ("keyboard" === v || "virtual" === v) ? E.format("removeDescription") : "",
        O = (0, a.I)(C),
        R = h.key === t.selectionManager.focusedKey,
        b = null != t.selectionManager.focusedKey,
        D = -1;
    N || (!R && b) || (D = 0);
    let L = (0, o.$)(h.props),
        w = (0, l.HI)(h.props),
        { focusableProps: M } = (0, d.Wc)({ isDisabled: N }, n);
    return {
        removeButtonProps: {
            "aria-label": E.format("removeButtonLabel"),
            "aria-labelledby": `${m} ${A.id}`,
            isDisabled: N,
            id: m,
            onPress: () => (g ? g(new Set([h.key])) : null),
        },
        rowProps: (0, u.v)(M, A, L, w, {
            tabIndex: D,
            onKeyDown: g
                ? (e) => {
                      ("Delete" === e.key || "Backspace" === e.key) &&
                          (N ||
                              (e.preventDefault(),
                              t.selectionManager.isSelected(h.key)
                                  ? null == g || g(new Set(t.selectionManager.selectedKeys))
                                  : null == g || g(new Set([h.key]))));
                  }
                : void 0,
            "aria-describedby": O["aria-describedby"],
        }),
        gridCellProps: (0, u.v)(I, { "aria-errormessage": e["aria-errormessage"], "aria-label": e["aria-label"] }),
        ...y,
        allowsRemoving: !!g,
    };
}
