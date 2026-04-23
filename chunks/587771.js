"use strict";
n.d(t, { $: () => s, O: () => a });
var r = n(331250),
    i = n(108146);
function s(e, t, n) {
    let { isDisabled: r } = e,
        { toolbarProps: s } = (0, i.t)(e, n);
    return { groupProps: { ...s, role: "single" === t.selectionMode ? "radiogroup" : s.role, "aria-disabled": r } };
}
function a(e, t, n) {
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
            isPressed: s,
            isSelected: a,
            isDisabled: o,
            buttonProps: l,
        } = (0, r.q)({ ...e, id: void 0, isDisabled: e.isDisabled || t.isDisabled }, i, n);
    return (
        "single" === t.selectionMode &&
            ((l.role = "radio"), (l["aria-checked"] = i.isSelected), delete l["aria-pressed"]),
        { isPressed: s, isSelected: a, isDisabled: o, buttonProps: l }
    );
}
