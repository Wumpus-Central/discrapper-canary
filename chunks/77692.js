var n = r(652664),
    i = r(371716),
    o = r(582128);
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
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { style: t, isFocusable: r } = e,
        [n, s] = (0, o.useState)(!1),
        { focusWithinProps: l } = (0, i.R)({ isDisabled: !r, onFocusWithinChange: (e) => s(e) }),
        u = (0, o.useMemo)(() => (n ? t : t ? { ...a, ...t } : a), [n]);
    return { visuallyHiddenProps: { ...l, style: u } };
}
r.d(
    t,
    {},
    {
        B: s,
        s: function (e) {
            let { children: t, elementType: r = "div", isFocusable: i, style: a, ...l } = e,
                { visuallyHiddenProps: u } = s(e);
            return o.createElement(r, (0, n.v)(l, u), t);
        },
    },
);
