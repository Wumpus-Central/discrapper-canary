t.r(i);
var h = t(477900);
t(582128);
var a = t(646514),
    e = t(996682),
    n = t(27989);
t.d(
    i,
    {},
    {
        LinkExternalMediumIcon: function (s) {
            let {
                    size: i = "md",
                    width: t,
                    height: r,
                    color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...l
                } = s,
                o = (0, n.J)(i),
                p = o?.width ?? t,
                w = o?.height ?? r;
            return (0, h.jsx)("svg", {
                ...(0, e.A)(l),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M7 4a1 1 0 0 0 0 2h9.59L4.29 18.3a1 1 0 1 0 1.42 1.4L18 7.42V17a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1H7Z",
                    className: d,
                }),
            });
        },
    },
);
