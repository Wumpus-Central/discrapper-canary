n.d(t, { U: () => o });
var a = n(627968);
n(64700);
var r = n(827734),
    l = n(996682),
    i = n(27989);
let o = (e) => {
    let {
            size: t = "md",
            width: n,
            height: o,
            secondaryColor: s = "transparent",
            secondaryColorClass: c = "",
            color: u = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...f
        } = e,
        _ = (0, i.J)(t),
        h = _?.width ?? n,
        A = _?.height ?? o;
    return (0, a.jsxs)("svg", {
        ...(0, l.A)(f),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, a.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof s ? s : s.css, className: c }),
            (0, a.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                clipRule: "evenodd",
                className: d,
            }),
        ],
    });
};
