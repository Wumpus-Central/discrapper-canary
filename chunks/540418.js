i.r(t);
var n = i(477900);
i(582128);
var l = i(646514),
    r = i(996682),
    a = i(27989);
i.d(
    t,
    {},
    {
        ExperimentalRareIcon: function (e) {
            let {
                    size: t = "md",
                    width: i,
                    height: s,
                    color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...d
                } = e,
                h = (0, a.J)(t),
                g = h?.width ?? i,
                f = h?.height ?? s;
            return (0, n.jsx)("svg", {
                ...(0, r.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: g,
                height: f,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, n.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    d: "M10.16 4.06a2.13 2.13 0 0 1 3.68 0l8 13.77c.81 1.41-.2 3.17-1.84 3.17H4a2.11 2.11 0 0 1-1.84-3.17l8-13.77Z",
                    className: c,
                }),
            });
        },
    },
);
