n.d(t, { E: () => m });
var r = n(523902),
    i = n(383928),
    a = n(752689),
    o = n(645537),
    s = n(880016),
    l = n(601339),
    c = n(158821),
    u = n(981166),
    d = n(497448),
    f = n(74114),
    p = n(218769);
function _(e) {
    return e && e.__esModule ? e.default : e;
}
function m(e, t, n) {
    let { item: m } = e,
        h = (0, p.q)(_(i.Z), "@react-aria/tag"),
        g = (0, a.Me)(),
        { onRemove: E } = r.L.get(t) || {},
        { rowProps: b, gridCellProps: y, ...O } = (0, f.F)({ node: m }, t, n),
        { descriptionProps: v, ...S } = O,
        I = t.disabledKeys.has(m.key) || m.props.isDisabled,
        T = (e) => {
            ("Delete" === e.key || "Backspace" === e.key) &&
                (I ||
                    (e.preventDefault(),
                    t.selectionManager.isSelected(m.key)
                        ? null == E || E(new Set(t.selectionManager.selectedKeys))
                        : null == E || E(new Set([m.key]))));
        },
        C = (0, u.Kf)();
    "virtual" === C && "undefined" != typeof window && "ontouchstart" in window && (C = "pointer");
    let A = E && ("keyboard" === C || "virtual" === C) ? h.format("removeDescription") : "",
        N = (0, o.P)(A),
        P = m.key === t.selectionManager.focusedKey,
        R = null != t.selectionManager.focusedKey,
        w = -1;
    I || (!P && R) || (w = 0);
    let D = (0, s.z)(m.props),
        x = (0, l.fU)(m.props),
        { focusableProps: L } = (0, d.kc)({ isDisabled: I }, n);
    return {
        removeButtonProps: {
            "aria-label": h.format("removeButtonLabel"),
            "aria-labelledby": `${g} ${b.id}`,
            isDisabled: I,
            id: g,
            onPress: () => (E ? E(new Set([m.key])) : null),
        },
        rowProps: (0, c.d)(L, b, D, x, {
            tabIndex: w,
            onKeyDown: E ? T : void 0,
            "aria-describedby": N["aria-describedby"],
        }),
        gridCellProps: (0, c.d)(y, {
            "aria-errormessage": e["aria-errormessage"],
            "aria-label": e["aria-label"],
        }),
        ...S,
        allowsRemoving: !!E,
    };
}
