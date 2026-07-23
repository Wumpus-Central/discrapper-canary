l.d(e, { l: () => n });
var r = l(627968);
l(64700);
var i = l(661531),
    s = l(996682),
    a = l(27989);
let n = (t) => {
    let {
            size: e = "md",
            width: l,
            height: n,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
        } = t,
        h = (0, a.J)(e),
        u = h?.width ?? l,
        m = h?.height ?? n;
    return (0, r.jsx)("svg", {
        ...(0, s.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, r.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M4 4a1 1 0 0 0 0 2h16a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 1 1 0 2H4Zm15.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
            clipRule: "evenodd",
            className: c,
        }),
    });
};
