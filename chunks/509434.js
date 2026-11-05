i.r(t);
var a = i(477900);
i(582128);
var h = i(646514),
    e = i(996682),
    n = i(27989);
i.d(
    t,
    {},
    {
        LinkExternalSmallIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: r,
                    color: l = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...d
                } = s,
                o = (0, n.J)(t),
                p = o?.width ?? i,
                w = o?.height ?? r;
            return (0, a.jsx)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    d: "M8 5a1 1 0 0 0 0 2h7.59L5.29 17.3a1 1 0 1 0 1.42 1.4L17 8.42V16a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1H8Z",
                    className: c,
                }),
            });
        },
    },
);
