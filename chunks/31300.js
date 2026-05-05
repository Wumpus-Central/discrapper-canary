l.d(a, { k: () => r });
var t = l(627968);
l(64700);
var n = l(661531),
    i = l(996682),
    s = l(27989);
let r = (e) => {
    let {
            size: a = "md",
            width: l,
            height: r,
            color: d = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
        } = e,
        u = (0, s.J)(a),
        h = u?.width ?? l,
        x = u?.height ?? r;
    return (0, t.jsx)("svg", {
        ...(0, i.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: x,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
            className: o,
        }),
    });
};
