h.r(t);
var i = h(477900);
h(582128);
var r = h(646514),
    a = h(996682),
    e = h(27989);
h.d(
    t,
    {},
    {
        ArrowLargeRightIcon: function (s) {
            let {
                    size: t = "md",
                    width: h,
                    height: l,
                    color: c = r.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                d = (0, e.J)(t),
                p = d?.width ?? h,
                w = d?.height ?? l;
            return (0, i.jsx)("svg", {
                ...(0, a.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M20.7 12.7a1 1 0 0 0 0-1.4l-8-8a1 1 0 1 0-1.4 1.4l6.29 6.3H4a1 1 0 1 0 0 2h13.59l-6.3 6.3a1 1 0 0 0 1.42 1.4l8-8Z",
                    className: n,
                }),
            });
        },
    },
);
