e.r(t);
var h = e(477900);
e(582128);
var i = e(646514),
    a = e(996682),
    r = e(27989);
e.d(
    t,
    {},
    {
        ChevronLargeLeftIcon: function (s) {
            let {
                    size: t = "md",
                    width: e,
                    height: l,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = s,
                d = (0, r.J)(t),
                p = d?.width ?? e,
                w = d?.height ?? l;
            return (0, h.jsx)("svg", {
                ...(0, a.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M15.7 3.3a1 1 0 0 1 0 1.4L8.42 12l7.3 7.3a1 1 0 0 1-1.42 1.4l-8-8a1 1 0 0 1 0-1.4l8-8a1 1 0 0 1 1.42 0Z",
                    className: c,
                }),
            });
        },
    },
);
