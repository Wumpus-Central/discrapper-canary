l.d(s, { O: () => w });
var e = l(627968);
l(64700);
var h = l(661531),
    i = l(996682),
    r = l(27989);
let w = (t) => {
    let {
            size: s = "md",
            width: l,
            height: w,
            color: c = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = t,
        d = (0, r.J)(s),
        n = d?.width ?? l,
        g = d?.height ?? w;
    return (0, e.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, e.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M11.26 2.86c.38-1.15 2-1.15 2.38 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4l-4.95-3.6-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83Z",
            className: a,
        }),
    });
};
