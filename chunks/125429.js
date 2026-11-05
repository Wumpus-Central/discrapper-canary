e.r(l);
var s = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    c = e(27989);
e.d(
    l,
    {},
    {
        BackspaceIcon: function (a) {
            let {
                    size: l = "md",
                    width: e,
                    height: d,
                    color: h = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                p = (0, c.J)(l),
                r = p?.width ?? e,
                w = p?.height ?? d;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof h ? h : h.css,
                    fillRule: "evenodd",
                    d: "M9.35 3A3 3 0 0 0 7.1 4l-5.34 6a3 3 0 0 0 0 4l5.34 6a3 3 0 0 0 2.24 1H20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H9.35Zm1.94 5.3a1 1 0 0 1 1.42 0L15 10.58l2.3-2.3a1 1 0 1 1 1.4 1.42L16.42 12l2.3 2.3a1 1 0 0 1-1.42 1.4L15 13.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L13.58 12l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
