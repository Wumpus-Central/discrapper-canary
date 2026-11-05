a.r(t);
var h = a(477900);
a(582128);
var i = a(646514),
    l = a(996682),
    r = a(27989);
a.d(
    t,
    {},
    {
        ArrowsLeftRightIcon: function (s) {
            let {
                    size: t = "md",
                    width: a,
                    height: e,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                d = (0, r.J)(t),
                p = d?.width ?? a,
                w = d?.height ?? e;
            return (0, h.jsx)("svg", {
                ...(0, l.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M2.3 7.7a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L5.42 6H21a1 1 0 1 1 0 2H5.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4ZM17.7 21.7l4-4a1 1 0 0 0 0-1.4l-4-4a1 1 0 0 0-1.4 1.4l2.29 2.3H3a1 1 0 1 0 0 2h15.59l-2.3 2.3a1 1 0 0 0 1.42 1.4Z",
                    className: n,
                }),
            });
        },
    },
);
