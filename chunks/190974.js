n.d(t, {
    C: () => a,
    U: () => o,
});
var r = n(354161),
    i = n(809362);
function a(e, t, n) {
    let { isDisabled: r } = e,
        { toolbarProps: a } = (0, i.S)(e, n);
    return {
        groupProps: {
            ...a,
            role: "single" === t.selectionMode ? "radiogroup" : a.role,
            "aria-disabled": r,
        },
    };
}
function o(e, t, n) {
    let i = {
            isSelected: t.selectedKeys.has(e.id),
            defaultSelected: !1,
            setSelected(n) {
                t.setSelected(e.id, n);
            },
            toggle() {
                t.toggleKey(e.id);
            },
        },
        {
            isPressed: a,
            isSelected: o,
            isDisabled: s,
            buttonProps: l,
        } = (0, r.k)(
            {
                ...e,
                id: void 0,
                isDisabled: e.isDisabled || t.isDisabled,
            },
            i,
            n,
        );
    return (
        "single" === t.selectionMode &&
            ((l.role = "radio"), (l["aria-checked"] = i.isSelected), delete l["aria-pressed"]),
        {
            isPressed: a,
            isSelected: o,
            isDisabled: s,
            buttonProps: l,
        }
    );
}
