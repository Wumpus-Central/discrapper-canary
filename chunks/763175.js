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
        ArrowLargeUpIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: l,
                    color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, e.J)(t),
                d = p?.width ?? i,
                w = p?.height ?? l;
            return (0, r.jsx)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M12.7 3.3a1 1 0 0 0-1.4 0l-8 8a1 1 0 1 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l6.3 6.3a1 1 0 0 0 1.4-1.42l-8-8Z",
                    className: n,
                }),
            });
        },
    },
);
