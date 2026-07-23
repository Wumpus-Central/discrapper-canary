l.d(e, { c: () => r });
var c = l(627968);
l(64700);
var t = l(661531),
    i = l(996682),
    a = l(27989);
let r = (s) => {
    let {
            size: e = "md",
            width: l,
            height: r,
            secondaryColor: d = "transparent",
            secondaryColorClass: h = "",
            color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...o
        } = s,
        w = (0, a.J)(e),
        g = w?.width ?? l,
        u = w?.height ?? r;
    return (0, c.jsxs)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: g,
        height: u,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, c.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof d ? d : d.css, className: h }),
            (0, c.jsx)("path", {
                fill: "string" == typeof n ? n : n.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                clipRule: "evenodd",
                className: p,
            }),
        ],
    });
};
