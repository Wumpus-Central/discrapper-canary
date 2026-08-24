"use strict";
r.d(t, { B: () => s, s: () => l });
var n = r(192734),
    i = r(582128),
    o = r(492273);
let a = {
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
    let { style: t, isFocusable: r } = e,
        [n, l] = (0, i.useState)(!1),
        { focusWithinProps: u } = (0, o.R)({ isDisabled: !r, onFocusWithinChange: (e) => l(e) }),
        c = (0, i.useMemo)(() => (n ? t : t ? { ...a, ...t } : a), [n]);
    return { visuallyHiddenProps: { ...u, style: c } };
}
function l(e) {
    let { children: t, elementType: r = "div", isFocusable: o, style: a, ...l } = e,
        { visuallyHiddenProps: u } = s(e);
    return i.createElement(r, (0, n.v)(l, u), t);
}
