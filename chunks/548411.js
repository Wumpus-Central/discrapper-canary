i.r(t);
var r = i(477900);
i(582128);
var a = i(646514),
    e = i(996682),
    h = i(27989);
i.d(
    t,
    {},
    {
        ArrowLargeLeftIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: l,
                    color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                d = (0, h.J)(t),
                p = d?.width ?? i,
                w = d?.height ?? l;
            return (0, r.jsx)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M3.3 11.3a1 1 0 0 0 0 1.4l8 8a1 1 0 1 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l6.3-6.3a1 1 0 0 0-1.42-1.4l-8 8Z",
                    className: n,
                }),
            });
        },
    },
);
