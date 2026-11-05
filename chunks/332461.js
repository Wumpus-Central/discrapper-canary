i.r(t);
var n = i(477900);
i(582128);
var c = i(646514),
    r = i(996682),
    s = i(27989);
i.d(
    t,
    {},
    {
        CameraIcon: function (e) {
            let {
                    size: t = "md",
                    width: i,
                    height: o,
                    color: a = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: l = "",
                    ...d
                } = e,
                u = (0, s.J)(t),
                I = u?.width ?? i,
                g = u?.height ?? o;
            return (0, n.jsxs)("svg", {
                ...(0, r.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: I,
                height: g,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                        className: l,
                    }),
                    (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7.17 4.66A3 3 0 0 1 9.85 3h4.3a3 3 0 0 1 2.68 1.66c.34.69.94 1.34 1.71 1.34H20a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1.46c.77 0 1.37-.65 1.71-1.34ZM17 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
                        clipRule: "evenodd",
                        className: l,
                    }),
                ],
            });
        },
    },
);
