a.d(s, { x: () => h });
var c = a(477900);
a(582128);
var t = a(661531),
    i = a(996682),
    e = a(27989);
function h(l) {
    let {
            size: s = "md",
            width: a,
            height: h,
            color: p = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
        } = l,
        n = (0, e.J)(s),
        o = n?.width ?? a,
        v = n?.height ?? h;
    return (0, c.jsxs)("svg", {
        ...(0, i.A)(d),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, c.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M19.1 16.14v.15c-.04.36-.2.7-.46.95l-5.53 5.33-.11.1c-.6.47-1.45.44-2-.1l-2.35-2.26a.5.5 0 0 1 0-.71l.73-.73c.19-.2.5-.2.7-.01l1.26 1.22c.4.38 1.02.38 1.42 0l4-3.85c.2-.2.3-.46.3-.74v-3.9a1 1 0 0 1 .3-.7l1.06-1.07a.4.4 0 0 1 .68.28v6.04Z",
                className: r,
            }),
            (0, c.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M15.03 14.76c0 .21-.08.4-.23.55l-2.22 2.14a.76.76 0 0 1-1.06 0l-.19-.18a.25.25 0 0 1 0-.36l3.19-3.19a.3.3 0 0 1 .51.21v.83ZM11 1.43c.58-.57 1.52-.57 2.11 0l2.29 2.2c.2.2.2.52 0 .72l-.73.73c-.19.2-.5.2-.7 0l-1.21-1.16a1.02 1.02 0 0 0-1.42 0l-4 3.85c-.2.2-.3.46-.3.74v3.8a1 1 0 0 1-.3.7l-1.06 1.06A.4.4 0 0 1 5 13.8V7.86c0-.42.17-.81.47-1.1l5.52-5.33Z",
                className: r,
            }),
            (0, c.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                d: "M11.52 6.55a.76.76 0 0 1 1.06 0l.14.13c.1.1.1.26 0 .36l-3.14 3.13a.3.3 0 0 1-.5-.2v-.73c0-.21.08-.41.22-.55l2.22-2.14ZM22.7 1.3a1 1 0 0 1 0 1.4l-20 20a1 1 0 0 1-1.4-1.4l20-20a1 1 0 0 1 1.4 0Z",
                className: r,
            }),
        ],
    });
}
