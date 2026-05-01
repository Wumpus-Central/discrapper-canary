l.d(e, { Z: () => c });
var t = l(627968);
l(64700);
var i = l(661531),
    a = l(996682),
    h = l(27989);
let c = (s) => {
    let {
            size: e = "md",
            width: l,
            height: c,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...n
        } = s,
        o = (0, h.J)(e),
        p = o?.width ?? l,
        v = o?.height ?? c;
    return (0, t.jsx)("svg", {
        ...(0, a.A)(n),
        xmlns: "http://www.w3.org/2000/svg",
        width: p,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z",
            className: r,
        }),
    });
};
