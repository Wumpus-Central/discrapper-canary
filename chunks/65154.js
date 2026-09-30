i.d(e, { S: () => n });
var l = i(477900);
i(582128);
var t = i(661531),
    c = i(996682),
    r = i(27989);
function n(s) {
    let {
            size: e = "md",
            width: i,
            height: n,
            secondaryColor: a = "transparent",
            secondaryColorClass: d = "",
            color: h = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...o
        } = s,
        w = (0, r.J)(e),
        u = w?.width ?? i,
        f = w?.height ?? n;
    return (0, l.jsxs)("svg", {
        ...(0, c.A)(o),
        xmlns: "http://www.w3.org/2000/svg",
        width: u,
        height: f,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "string" == typeof a ? a : a.css, className: d }),
            (0, l.jsx)("path", {
                fill: "string" == typeof h ? h : h.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z",
                clipRule: "evenodd",
                className: p,
            }),
        ],
    });
}
