t.r(h);
var i = t(477900);
t(582128);
var a = t(646514),
    c = t(996682),
    e = t(27989);
t.d(
    h,
    {},
    {
        ChatMinusIcon: function (s) {
            let {
                    size: h = "md",
                    width: t,
                    height: l,
                    color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...p
                } = s,
                d = (0, e.J)(h),
                o = d?.width ?? t,
                w = d?.height ?? l;
            return (0, i.jsxs)("svg", {
                ...(0, c.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        d: "M12.2 22c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h5.84c.2 0 .38-.12.46-.3a10 10 0 1 0-17.74 1.66c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10Z",
                        fill: "string" == typeof n ? n : n.css,
                        className: r,
                    }),
                    (0, i.jsx)("path", {
                        d: "M15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                        fill: "string" == typeof n ? n : n.css,
                        className: r,
                    }),
                ],
            });
        },
    },
);
