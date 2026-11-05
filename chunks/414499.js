i.r(t);
var h = i(477900);
i(582128);
var e = i(646514),
    r = i(996682),
    a = i(27989);
i.d(
    t,
    {},
    {
        CloudIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: c,
                    color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                l = (0, a.J)(t),
                p = l?.width ?? i,
                w = l?.height ?? c;
            return (0, h.jsx)("svg", {
                ...(0, r.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    d: "M14 4a5 5 0 0 1 5 5v.2A5.5 5.5 0 0 1 17.5 20H5a4 4 0 0 1-.85-7.9 4 4 0 0 1 5.18-4.87A5 5 0 0 1 14 4Z",
                    className: n,
                }),
            });
        },
    },
);
