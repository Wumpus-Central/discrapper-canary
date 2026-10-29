e.d(l, { g: () => h });
var s = e(477900);
e(582128);
var a = e(661531),
    i = e(996682),
    c = e(27989);
function h(t) {
    let {
            size: l = "md",
            width: e,
            height: h,
            color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...o
        } = t,
        v = (0, c.J)(l),
        d = v?.width ?? e,
        A = v?.height ?? h;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: d,
        height: A,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M8.4 1a.4.4 0 0 0-.46.32v9.01l-3.26-3.2a.4.4 0 0 0-.57 0c-.02 0-.03.03-.05.05A.36.36 0 0 0 4 7.4v9.22c0 .59.23 1.15.65 1.55l4.24 4.19c.42.41.98.64 1.57.64h3.1c.59 0 1.14-.23 1.56-.64l4.23-4.2c.42-.4.65-.96.65-1.54V13.3c0-.58-.23-1.14-.65-1.55L8.61 1.12a.44.44 0 0 0-.2-.11Zm1.42 11.48a.7.7 0 0 1 .47.19l1.71 1.7 1.71-1.7a.67.67 0 0 1 .94 0l1.22 1.2c.12.13.2.3.2.48v1.29c0 .17-.08.34-.2.47l-3.41 3.39a.68.68 0 0 1-.95 0l-3.4-3.4a.67.67 0 0 1-.2-.46v-1.3c0-.17.08-.33.2-.46l1.22-1.21c.12-.13.3-.2.48-.2Z",
            className: r,
        }),
    });
}
