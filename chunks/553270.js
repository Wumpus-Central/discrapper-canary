"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(452027),
    a = n(489718);
function s(e) {
    let { checked: t, disabled: n, id: s, onChange: o, focusProps: l, hasIcon: u = !1, ...c } = e;
    return (0, r.jsx)(i.D, {
        ...c,
        id: s,
        disabled: n,
        layout: "horizontal",
        interactiveLabel: !0,
        auxiliaryContentPosition: "under-label",
        children: (e) =>
            (0, r.jsx)(a.I, {
                focusProps: l,
                id: e.controlId,
                checked: t,
                disabled: n,
                onChange: o,
                hasIcon: u,
                describedBy: e.describedById,
                labelledBy: e.labelId,
            }),
    });
}
