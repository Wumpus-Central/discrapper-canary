i.r(t);
var r = i(477900);
i(582128);
var a = i(646514),
    h = i(996682),
    e = i(27989);
i.d(
    t,
    {},
    {
        ArrowLargeDownIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: l,
                    color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = s,
                w = (0, e.J)(t),
                d = w?.width ?? i,
                p = w?.height ?? l;
            return (0, r.jsx)("svg", {
                ...(0, h.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M12.7 20.7a1 1 0 0 1-1.4 0l-8-8a1 1 0 1 1 1.4-1.4l6.3 6.29V4a1 1 0 1 1 2 0v13.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-8 8Z",
                    className: o,
                }),
            });
        },
    },
);
