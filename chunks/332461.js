var c = i(477900);
i(582128);
var n = i(646514),
    s = i(996682),
    r = i(27989);
i.d(
    t,
    {},
    {
        x: function (e) {
            let {
                    size: t = "md",
                    width: i,
                    height: a,
                    color: l = n.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = e,
                u = (0, r.J)(t),
                g = u?.width ?? i,
                v = u?.height ?? a;
            return (0, c.jsxs)("svg", {
                ...(0, s.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: g,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, c.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                        className: d,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M7.17 4.66A3 3 0 0 1 9.85 3h4.3a3 3 0 0 1 2.68 1.66c.34.69.94 1.34 1.71 1.34H20a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1.46c.77 0 1.37-.65 1.71-1.34ZM17 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                ],
            });
        },
    },
);
