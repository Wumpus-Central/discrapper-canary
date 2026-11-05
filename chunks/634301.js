l.r(a);
var t = l(477900);
l(582128);
var e = l(646514),
    i = l(996682),
    h = l(27989);
l.d(
    a,
    {},
    {
        DoubleChevronSmallLeftIcon: function (s) {
            let {
                    size: a = "md",
                    width: l,
                    height: r,
                    color: c = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, h.J)(a),
                d = p?.width ?? l,
                w = p?.height ?? r;
            return (0, t.jsxs)("svg", {
                ...(0, i.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M12.7 5.3a1 1 0 0 1 0 1.4L7.42 12l5.3 5.3a1 1 0 0 1-1.42 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.42 0Z",
                        className: n,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M18.7 5.3a1 1 0 0 1 0 1.4L13.42 12l5.3 5.3a1 1 0 0 1-1.42 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.42 0Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
