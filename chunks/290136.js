s.d(l, { c: () => h });
var i = s(627968);
s(64700);
var t = s(661531),
    e = s(996682),
    a = s(27989);
let h = (C) => {
    let {
            size: l = "md",
            width: s,
            height: h,
            secondaryColor: c = "transparent",
            secondaryColorClass: d = "",
            color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...p
        } = C,
        F = (0, a.J)(l),
        o = F?.width ?? s,
        f = F?.height ?? h;
    return (0, i.jsxs)("svg", {
        ...(0, e.A)(p),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof c ? c : c.css, className: d }),
            (0, i.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                clipRule: "evenodd",
                className: n,
            }),
        ],
    });
};
