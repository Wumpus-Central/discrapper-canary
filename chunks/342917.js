i.r(t);
var l = i(477900);
i(582128);
var a = i(646514),
    h = i(996682),
    e = i(27989);
i.d(
    t,
    {},
    {
        XXsmallIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: r,
                    color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...d
                } = s,
                o = (0, e.J)(t),
                p = o?.width ?? i,
                w = o?.height ?? r;
            return (0, l.jsx)("svg", {
                ...(0, h.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M16.3 6.3a1 1 0 1 1 1.4 1.4L13.42 12l4.3 4.3a1 1 0 1 1-1.42 1.4L12 13.42l-4.3 4.3a1 1 0 1 1-1.4-1.42L10.58 12l-4.3-4.3a1 1 0 1 1 1.42-1.4L12 10.58l4.3-4.3Z",
                    className: n,
                }),
            });
        },
    },
);
