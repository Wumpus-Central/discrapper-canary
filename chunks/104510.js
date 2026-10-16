a.d(l, { _: () => e });
var c = a(477900);
a(582128);
var t = a(661531),
    i = a(996682),
    h = a(27989);
function e(s) {
    let {
            size: l = "md",
            width: a,
            height: e,
            color: p = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = s,
        n = (0, h.J)(l),
        o = n?.width ?? a,
        w = n?.height ?? e;
    return (0, c.jsxs)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, c.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M11.02 1.36c.56-.48 1.4-.48 1.96 0l6.48 5.45c.34.29.54.71.54 1.16v8.23c-.05.38-.24.74-.54 1l-6.48 5.44c-.53.45-1.3.48-1.86.09l-.1-.09-6.48-5.45c-.3-.25-.49-.6-.53-1L4 16.04V7.97c0-.45.2-.87.54-1.16l6.48-5.45ZM6.36 7.89a1 1 0 0 0-.36.76v6.7c0 .29.13.57.36.76l5 4.2a1 1 0 0 0 1.28 0l5-4.2a1 1 0 0 0 .36-.77V8.65a1 1 0 0 0-.36-.76l-5-4.2a1 1 0 0 0-1.28 0l-5 4.2Z",
                className: r,
            }),
            (0, c.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M11.36 6.3a1 1 0 0 1 1.28 0l3 2.52a1 1 0 0 1 .36.76v4.84a1 1 0 0 1-.36.76l-3 2.53a1 1 0 0 1-1.28 0l-3-2.53a1 1 0 0 1-.36-.76V9.58a1 1 0 0 1 .36-.76l3-2.53Z",
                className: r,
            }),
        ],
    });
}
