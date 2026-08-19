"use strict";
r.d(t, { B: () => s, s: () => l });
var n = r(192734),
    o = r(582128),
    i = r(492273);
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
        [n, l] = (0, o.useState)(!1),
        { focusWithinProps: u } = (0, i.R)({ isDisabled: !r, onFocusWithinChange: (e) => l(e) }),
        c = (0, o.useMemo)(() => (n ? t : t ? { ...a, ...t } : a), [n]);
    return { visuallyHiddenProps: { ...u, style: c } };
}
function l(e) {
    let { children: t, elementType: r = "div", isFocusable: i, style: a, ...l } = e,
        { visuallyHiddenProps: u } = s(e);
    return o.createElement(r, (0, n.v)(l, u), t);
}
