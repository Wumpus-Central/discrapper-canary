l.r(a);
var t = l(477900);
l(582128);
var i = l(646514),
    e = l(996682),
    h = l(27989);
l.d(
    a,
    {},
    {
        DoubleCheckmarkIcon: function (s) {
            let {
                    size: a = "md",
                    width: l,
                    height: c,
                    color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, h.J)(a),
                d = p?.width ?? l,
                w = p?.height ?? c;
            return (0, t.jsxs)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16.7 8.7a1 1 0 0 0-1.4-1.4l-3.26 3.24a1 1 0 0 0 1.42 1.42L16.7 8.7ZM3.7 11.3a1 1 0 0 0-1.4 1.4l4.5 4.5a1 1 0 0 0 1.4-1.4l-4.5-4.5Z",
                        className: n,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M21.7 9.7a1 1 0 0 0-1.4-1.4L13 15.58l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l8-8Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
