i.r(t);
var n = i(477900);
i(582128);
var a = i(646514),
    l = i(996682),
    s = i(27989);
i.d(
    t,
    {},
    {
        MoreVerticalIcon: function (e) {
            let {
                    size: t = "md",
                    width: i,
                    height: r,
                    color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: h = "",
                    ...o
                } = e,
                u = (0, s.J)(t),
                c = u?.width ?? i,
                g = u?.height ?? r;
            return (0, n.jsx)("svg", {
                ...(0, l.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: c,
                height: g,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, n.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
                    clipRule: "evenodd",
                    className: h,
                }),
            });
        },
    },
);
