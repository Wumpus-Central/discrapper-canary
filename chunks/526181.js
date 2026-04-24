t.d(n, { U: () => l });
var i = t(627968);
t(64700);
var o = t(661531),
    r = t(996682),
    s = t(27989);
let l = (e) => {
    let {
            size: n = "md",
            width: t,
            height: l,
            color: a = o.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
        } = e,
        C = (0, s.J)(n),
        h = C?.width ?? t,
        _ = C?.height ?? l;
    return (0, i.jsx)("svg", {
        ...(0, r.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: _,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M4 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4ZM6 20a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
            className: d,
        }),
    });
};
