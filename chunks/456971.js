var i = n(477900);
n(582128);
var r = n(646514),
    a = n(996682),
    s = n(27989);
n.d(
    t,
    {},
    {
        b: function (e) {
            let {
                    size: t = "md",
                    width: n,
                    height: l,
                    color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...c
                } = e,
                u = (0, s.J)(t),
                _ = u?.width ?? n,
                E = u?.height ?? l;
            return (0, i.jsxs)("svg", {
                ...(0, a.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: _,
                height: E,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M15.46 15.46a5 5 0 0 1 7.07 0 5 5 0 0 1-7.07 7.07 5 5 0 0 1 0-7.07Zm2.25 6.25a3 3 0 0 0 4-4l-4 4Zm2.58-5.42a3 3 0 0 0-4 4l4-4Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15 4a3 3 0 0 1 3 3v2.12a1 1 0 0 1 .55-.9l3-1.5a1 1 0 0 1 1.45.9v4.68c0 .4-.46.65-.82.46a7 7 0 0 0-10.16 6.66c.01.31-.22.58-.52.58H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h11Z",
                        className: d,
                    }),
                ],
            });
        },
    },
);
