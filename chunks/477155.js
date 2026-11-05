i.r(t);
var a = i(477900);
i(582128);
var h = i(646514),
    l = i(996682),
    r = i(27989);
i.d(
    t,
    {},
    {
        ArrowSmallLeftIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: e,
                    color: c = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                d = (0, r.J)(t),
                p = d?.width ?? i,
                w = d?.height ?? e;
            return (0, a.jsx)("svg", {
                ...(0, l.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M3.3 11.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
                    className: n,
                }),
            });
        },
    },
);
