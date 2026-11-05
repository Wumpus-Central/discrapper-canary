i.r(e);
var t = i(477900);
i(582128);
var c = i(646514),
    l = i(996682),
    r = i(27989);
i.d(
    e,
    {},
    {
        CircleMinusIcon: function (s) {
            let {
                    size: e = "md",
                    width: i,
                    height: n,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: h = "",
                    color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...p
                } = s,
                u = (0, r.J)(e),
                w = u?.width ?? i,
                f = u?.height ?? n;
            return (0, t.jsxs)("svg", {
                ...(0, l.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: w,
                height: f,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: h,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM7 11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z",
                        clipRule: "evenodd",
                        className: o,
                    }),
                ],
            });
        },
    },
);
