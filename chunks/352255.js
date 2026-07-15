n.d(t, { X: () => l });
var r = n(627968);
n(64700);
var i = n(661531),
    s = n(996682),
    o = n(27989);
let l = (e) => {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: a = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
        } = e,
        d = (0, o.J)(t),
        h = d?.width ?? n,
        f = d?.height ?? l;
    return (0, r.jsx)("svg", {
        ...(0, s.A)(u),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M18.45 1.85a3 3 0 0 0-4.1 1.1l-1.5 2.6a3 3 0 0 0 1.1 4.1l2.6 1.5a3 3 0 0 0 4.1-1.1l1.5-2.6a3 3 0 0 0-1.1-4.1l-2.6-1.5ZM2 5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5ZM2 16a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
            className: c,
        }),
    });
};
