l.d(t, { _: () => E });
var a = l(627968);
l(64700);
var s = l(661531),
    c = l(996682),
    i = l(27989);
let E = (e) => {
    let {
            size: t = "md",
            width: l,
            height: E,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...r
        } = e,
        d = (0, i.J)(t),
        o = d?.width ?? l,
        _ = d?.height ?? E;
    return (0, a.jsx)("svg", {
        ...(0, c.A)(r),
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M14 10a1 1 0 1 1 0-2h3.59l-4.3-4.3a1 1 0 0 1 1.42-1.4L19 6.58V3a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6ZM4 2a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM15 14a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5ZM11 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.59l4.3 4.3a1 1 0 0 0 1.4-1.42L6.42 16H10a1 1 0 0 0 1-1Z",
            className: h,
        }),
    });
};
