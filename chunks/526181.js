r.d(t, { U: () => E });
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
            d: "M4 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4ZM6 20a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
            className: a,
        }),
    });
};
