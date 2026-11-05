i.r(s);
var h = i(477900);
i(582128);
var e = i(646514),
    r = i(996682),
    c = i(27989);
i.d(
    s,
    {},
    {
        StopIcon: function (t) {
            let {
                    size: s = "md",
                    width: i,
                    height: n,
                    color: o = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...p
                } = t,
                w = (0, c.J)(s),
                l = w?.width ?? i,
                a = w?.height ?? n;
            return (0, h.jsx)("svg", {
                ...(0, r.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: a,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    fill: "string" == typeof o ? o : o.css,
                    rx: "3",
                    className: d,
                }),
            });
        },
    },
);
