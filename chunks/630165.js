t.d(s, { $: () => l, O: () => o });
var i = t(748516),
    d = t(534502);
function l(e, s, t) {
    let { isDisabled: i } = e,
        { toolbarProps: l } = (0, d.t)(e, t);
    return { groupProps: { ...l, role: "single" === s.selectionMode ? "radiogroup" : l.role, "aria-disabled": i } };
}
function o(e, s, t) {
    let d = {
            isSelected: s.selectedKeys.has(e.id),
            defaultSelected: !1,
            setSelected(t) {
                s.setSelected(e.id, t);
            },
            toggle() {
                s.toggleKey(e.id);
            },
        },
        {
            isPressed: l,
            isSelected: o,
            isDisabled: a,
            buttonProps: r,
        } = (0, i.q)({ ...e, id: void 0, isDisabled: e.isDisabled || s.isDisabled }, d, t);
    return (
        "single" === s.selectionMode &&
            ((r.role = "radio"), (r["aria-checked"] = d.isSelected), delete r["aria-pressed"]),
        { isPressed: l, isSelected: o, isDisabled: a, buttonProps: r }
    );
}
