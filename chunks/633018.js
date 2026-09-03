n.d(t, { k: () => a });
var l = n(477900);
n(582128);
var i = n(661531),
    s = n(996682),
    r = n(27989);
function a(e) {
    let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...c
        } = e,
        d = (0, r.J)(t),
        h = d?.width ?? n,
        m = d?.height ?? a;
    return (0, l.jsx)("svg", {
        ...(0, s.A)(c),
        xmlns: "http://www.w3.org/2000/svg",
        width: h,
        height: m,
        fill: "none",
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
            clipRule: "evenodd",
            className: u,
        }),
    });
}
