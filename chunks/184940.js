n.d(t, { _: () => s });
var i = n(477900);
n(582128);
var a = n(661531),
    l = n(996682),
    r = n(27989);
function s(e) {
    let {
            size: t = "md",
            width: n,
            height: s,
            color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: E = "",
            ...o
        } = e,
        c = (0, r.J)(t),
        u = c?.width ?? n,
        h = c?.height ?? s;
    return (0, i.jsx)("svg", {
        ...(0, l.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: h,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M14 10a1 1 0 1 1 0-2h3.59l-4.3-4.3a1 1 0 0 1 1.42-1.4L19 6.58V3a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6ZM4 2a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM15 14a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5ZM11 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.59l4.3 4.3a1 1 0 0 0 1.4-1.42L6.42 16H10a1 1 0 0 0 1-1Z",
            className: E,
        }),
    });
}
