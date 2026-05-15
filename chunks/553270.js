"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    r = n(452027),
    s = n(839610);
function a(e) {
    let { checked: t, disabled: n, id: a, onChange: o, focusProps: l, hasIcon: u = !1, ...c } = e;
    return (0, i.jsx)(r.D, {
        ...c,
        id: a,
        disabled: n,
        layout: "horizontal",
        interactiveLabel: !0,
        auxiliaryContentPosition: "under-label",
        children: (e) =>
            (0, i.jsx)(s.I, {
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
