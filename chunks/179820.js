i.d(s, { O: () => n });
var h = i(477900);
i(582128);
var l = i(661531),
    e = i(996682),
    r = i(27989);
function n(t) {
    let {
            size: s = "md",
            width: i,
            height: n,
            color: c = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...w
        } = t,
        a = (0, r.J)(s),
        d = a?.width ?? i,
        g = a?.height ?? n;
    return (0, h.jsx)("svg", {
        ...(0, e.A)(w),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: g,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, h.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M11.26 2.86c.38-1.15 2-1.15 2.38 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4l-4.95-3.6-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83Z",
            className: o,
        }),
    });
}
