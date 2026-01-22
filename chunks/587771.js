n.d(t, {
    $: () => a,
    O: () => s,
});
var r = n(331250),
    i = n(108146);

function a(e, t, n) {
    let { isDisabled: r } = e,
        { toolbarProps: a } = (0, i.t)(e, n);
    return {
        groupProps: {
            ...a,
            role: "single" === t.selectionMode ? "radiogroup" : a.role,
            "aria-disabled": r,
        },
    };
}

function s(e, t, n) {
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
            isSelected: s,
            isDisabled: o,
            buttonProps: l,
        } = (0, r.q)(
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
            isSelected: s,
            isDisabled: o,
            buttonProps: l,
        }
    );
}
