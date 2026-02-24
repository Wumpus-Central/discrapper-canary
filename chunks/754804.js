i.d(t, { k: () => o, o: () => a });
var n = i(627968),
    s = i(158954),
    r = i(556918);
function l(e) {
    let { spec: t, icon: i } = e;
    return (0, n.jsx)("div", {
        className: r.Fx,
        style: { top: t.iconInset, insetInlineEnd: t.iconInset },
        children: i,
    });
}
function o(e) {
    let { spec: t } = e;
    return (0, n.jsx)(l, {
        spec: t,
        icon: (0, n.jsx)(s.C3E, {
            size: "custom",
            width: t.iconSize,
            height: t.iconSize,
            color: "currentColor",
            colorClass: r.Be,
        }),
    });
}
function a(e) {
    let { spec: t } = e;
    return (0, n.jsx)(l, {
        spec: t,
        icon: (0, n.jsx)(s.Y3C, {
            size: "custom",
            width: t.iconSize,
            height: t.iconSize,
            color: "currentColor",
            colorClass: r.rY,
        }),
    });
}
