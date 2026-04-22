t.d(l, { B: () => r });
var n = t(627968);
t(64700);
var s = t(827734),
    i = t(996682),
    a = t(27989);
let r = (e) => {
    let {
            size: l = "md",
            width: t,
            height: r,
            color: c = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
        } = e,
        o = (0, a.J)(l),
        m = o?.width ?? t,
        x = o?.height ?? r;
    return (0, n.jsx)("svg", {
        ...(0, i.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: m,
        height: x,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            clipRule: "evenodd",
            className: d,
        }),
    });
};
