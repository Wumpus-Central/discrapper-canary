"use strict";
n.d(t, { B: () => o, s: () => l });
var r = n(803082),
    i = n(64700),
    a = n(744493);
let s = {
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
function o(e = {}) {
    let { style: t, isFocusable: n } = e,
        [r, l] = (0, i.useState)(!1),
        { focusWithinProps: u } = (0, a.R)({ isDisabled: !n, onFocusWithinChange: (e) => l(e) }),
        c = (0, i.useMemo)(() => (r ? t : t ? { ...s, ...t } : s), [r]);
    return { visuallyHiddenProps: { ...u, style: c } };
}
function l(e) {
    let { children: t, elementType: n = "div", isFocusable: a, style: s, ...l } = e,
        { visuallyHiddenProps: u } = o(e);
    return i.createElement(n, (0, r.v)(l, u), t);
}
