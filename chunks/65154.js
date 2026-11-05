l.r(e);
var c = l(477900);
l(582128);
var i = l(646514),
    t = l(996682),
    r = l(27989);
l.d(
    e,
    {},
    {
        CirclePlayIcon: function (s) {
            let {
                    size: e = "md",
                    width: l,
                    height: n,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: d = "",
                    color: h = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...p
                } = s,
                w = (0, r.J)(e),
                u = w?.width ?? l,
                f = w?.height ?? n;
            return (0, c.jsxs)("svg", {
                ...(0, t.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: u,
                height: f,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, c.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: d,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z",
                        clipRule: "evenodd",
                        className: o,
                    }),
                ],
            });
        },
    },
);
