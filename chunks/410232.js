n.d(t, { k: () => l });
var i = n(477900);
n(582128);
var r = n(661531),
    a = n(996682),
    s = n(27989);
function l(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        u = (0, s.J)(t),
        _ = u?.width ?? n,
        E = u?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, a.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: _,
        height: E,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M18.3 14.3a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L20 17.42V23a1 1 0 1 1-2 0v-5.59l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4Z",
                className: d,
            }),
            (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                d: "M15 3a6.01 6.01 0 0 1 5.83 7.44c-.06.22.03.45.2.59a5 5 0 0 1 1.73 2.45c.14.43-.36.68-.68.35l-.96-.95a3 3 0 0 0-4.13-.1l-.11.1-4 4a2.99 2.99 0 0 0-.86 2.43c.04.34-.2.69-.55.69H6a5 5 0 0 1-3-9v-.26a6 6 0 0 1 4.55-5.56c.36-.09.64.26.57.62a5.98 5.98 0 0 0 .3 3.4c.12.32.58.15.58-.2a5.97 5.97 0 0 1 6-6Z",
                className: d,
            }),
        ],
    });
}
