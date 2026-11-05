a.r(l);
var s = a(477900);
a(582128);
var i = a(646514),
    t = a(996682),
    c = a(27989);
a.d(
    l,
    {},
    {
        EmojiFaceWithMonocleIcon: function (e) {
            let {
                    size: l = "md",
                    width: a,
                    height: d,
                    color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: h = "",
                    ...n
                } = e,
                p = (0, c.J)(l),
                r = p?.width ?? a,
                u = p?.height ?? d;
            return (0, s.jsxs)("svg", {
                ...(0, t.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, s.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 2.25-.68 4.34-1.84 6.09a2 2 0 0 1-.16-.8V12a5 5 0 1 0-2 4v1.3a4 4 0 0 0 .42 1.78l.35.7A11 11 0 1 1 23 12Zm-18-.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM9 6a1 1 0 0 0-1-1h-.76a4 4 0 0 0-2.83 1.17L3.3 7.3a1 1 0 0 0 1.42 1.42l1.12-1.12A2 2 0 0 1 7.24 7H8a1 1 0 0 0 1-1ZM8 16a1 1 0 1 0 0 2c1.02 0 1.99.4 2.7 1.12l.6.59a1 1 0 0 0 1.4-1.42l-.58-.58A5.83 5.83 0 0 0 8 16Z",
                        clipRule: "evenodd",
                        className: h,
                    }),
                    (0, s.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M16 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
                        clipRule: "evenodd",
                        className: h,
                    }),
                ],
            });
        },
    },
);
