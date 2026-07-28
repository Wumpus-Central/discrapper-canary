i.d(s, { W: () => l });
var t = i(627968);
i(64700);
var a = i(661531),
    d = i(996682),
    h = i(27989);
function l(e) {
    let {
            size: s = "md",
            width: i,
            height: l,
            color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
        } = e,
        p = (0, h.J)(s),
        r = p?.width ?? i,
        w = p?.height ?? l;
    return (0, t.jsx)("svg", {
        ...(0, d.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: w,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, t.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M6 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-18a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
}
