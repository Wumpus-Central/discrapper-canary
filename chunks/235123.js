n.d(t, { E: () => h });
var r = n(525187),
    i = n(765780),
    a = n(39807),
    o = n(24645),
    s = n(436773),
    l = n(132979),
    c = n(933492),
    u = n(938264),
    d = n(600711),
    f = n(385094),
    _ = n(792160);
function p(e) {
    return e && e.__esModule ? e.default : e;
}
function h(e, t, n) {
    let { item: h } = e,
        m = (0, _.q)(p(i.Z), "@react-aria/tag"),
        g = (0, a.Me)(),
        { onRemove: E } = r.L.get(t) || {},
        { rowProps: b, gridCellProps: y, ...O } = (0, f.F)({ node: h }, t, n),
        { descriptionProps: v, ...I } = O,
        T = t.disabledKeys.has(h.key) || h.props.isDisabled,
        S = (e) => {
            ("Delete" === e.key || "Backspace" === e.key) &&
                (T ||
                    (e.preventDefault(),
                    t.selectionManager.isSelected(h.key)
                        ? null == E || E(new Set(t.selectionManager.selectedKeys))
                        : null == E || E(new Set([h.key]))));
        },
        A = (0, u.Kf)();
    "virtual" === A && "undefined" != typeof window && "ontouchstart" in window && (A = "pointer");
    let C = E && ("keyboard" === A || "virtual" === A) ? m.format("removeDescription") : "",
        N = (0, o.P)(C),
        R = h.key === t.selectionManager.focusedKey,
        P = null != t.selectionManager.focusedKey,
        w = -1;
    T || (!R && P) || (w = 0);
    let D = (0, s.z)(h.props),
        x = (0, l.fU)(h.props),
        { focusableProps: L } = (0, d.kc)({ isDisabled: T }, n);
    return {
        removeButtonProps: {
            "aria-label": m.format("removeButtonLabel"),
            "aria-labelledby": `${g} ${b.id}`,
            isDisabled: T,
            id: g,
            onPress: () => (E ? E(new Set([h.key])) : null),
        },
        rowProps: (0, c.d)(L, b, D, x, {
            tabIndex: w,
            onKeyDown: E ? S : void 0,
            "aria-describedby": N["aria-describedby"],
        }),
        gridCellProps: (0, c.d)(y, {
            "aria-errormessage": e["aria-errormessage"],
            "aria-label": e["aria-label"],
        }),
        ...I,
        allowsRemoving: !!E,
    };
}
