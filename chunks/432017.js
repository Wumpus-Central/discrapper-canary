r.d(t, { T: () => E });
var n = r(627968);
r(64700);
var l = r(827734),
    i = r(996682),
    o = r(27989);
let E = (e) => {
    let {
            size: t = "md",
            width: r,
            height: E,
            color: s = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...u
        } = e,
        _ = (0, o.J)(t),
        I = _?.width ?? r,
        d = _?.height ?? E;
    return (0, n.jsx)("svg", {
        ...(0, i.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: I,
        height: d,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M8.65 1.51A2 2 0 0 0 6 3.41v9.88A3.98 3.98 0 0 0 4.5 13C2.57 13 1 14.34 1 16s1.57 3 3.5 3S8 17.66 8 16V5.4l11 3.81v7.08a3.98 3.98 0 0 0-1.5-.29c-1.93 0-3.5 1.34-3.5 3s1.57 3 3.5 3 3.5-1.34 3.5-3V7.03c0-.74-.47-1.4-1.18-1.65L8.65 1.51Z",
            className: a,
        }),
    });
};
