e.d(a, { TrophyIcon: () => t });
var s = e(477900);
e(582128);
var c = e(661531),
    i = e(996682),
    l = e(27989);
function t(h) {
    let {
            size: a = "md",
            width: e,
            height: t,
            color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: n = "",
            ...o
        } = h,
        p = (0, l.J)(a),
        r = p?.width ?? e,
        v = p?.height ?? t;
    return (0, s.jsx)("svg", {
        ...(0, i.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: r,
        height: v,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, s.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: n,
        }),
    });
}
