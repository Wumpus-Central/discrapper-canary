l.r(s);
var t = l(477900);
l(582128);
var i = l(646514),
    h = l(996682),
    e = l(27989);
l.d(
    s,
    {},
    {
        CollapseListIcon: function (a) {
            let {
                    size: s = "md",
                    width: l,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                p = (0, e.J)(s),
                d = p?.width ?? l,
                w = p?.height ?? r;
            return (0, t.jsx)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M7.3 2.3a1 1 0 0 1 1.4 0L12 5.58l3.3-3.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.42ZM2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM8.7 21.7a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 18.42l-3.3 3.3Z",
                    className: n,
                }),
            });
        },
    },
);
