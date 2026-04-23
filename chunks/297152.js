n.d(t, { E: () => r });
var i = n(627968);
n(64700);
var a = n(661531),
    l = n(996682),
    o = n(27989);
let r = (e) => {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: s = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, o.J)(t),
        h = u?.width ?? n,
        _ = u?.height ?? r;
    return (0, i.jsx)("svg", {
        ...(0, l.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M16.02 3.06a1.23 1.23 0 0 0-2.39-.6l-2.14 7.76-.61-.24.83-6.97a1.26 1.26 0 0 0-2.49-.34L8.13 9.65l-.47 2.86a.42.42 0 0 1-.8.1l-.66-1.47a3.92 3.92 0 0 0-1.85-1.9l-.32-.17a1.53 1.53 0 0 0-1.91.47.61.61 0 0 0-.05.65l1.33 2.5c.06.12.12.24.16.37l1.26 4.11a7.47 7.47 0 0 0 14.28.03l.95-3.05 1.85-4.36a1.19 1.19 0 0 0-2.17-.96l-1.8 3.87-.56-.22 2.4-7.64a1.17 1.17 0 0 0-2.21-.75l-2.78 7.4-.67-.26 1.9-8.17Z",
            className: d,
        }),
    });
};
