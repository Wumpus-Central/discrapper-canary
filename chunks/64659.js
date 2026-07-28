"use strict";
n.d(t, { B: () => s, s: () => l });
var r = n(192734),
    i = n(582128),
    a = n(492273);
let o = {
    border: 0,
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap",
};
function s(e = {}) {
    let { style: t, isFocusable: n } = e,
        [r, l] = (0, i.useState)(!1),
        { focusWithinProps: u } = (0, a.R)({ isDisabled: !n, onFocusWithinChange: (e) => l(e) }),
        c = (0, i.useMemo)(() => (r ? t : t ? { ...o, ...t } : o), [r]);
    return { visuallyHiddenProps: { ...u, style: c } };
}
function l(e) {
    let { children: t, elementType: n = "div", isFocusable: a, style: o, ...l } = e,
        { visuallyHiddenProps: u } = s(e);
    return i.createElement(n, (0, r.v)(l, u), t);
}
