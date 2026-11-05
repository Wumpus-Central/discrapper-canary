t.r(h);
var a = t(477900);
t(582128);
var i = t(646514),
    e = t(996682),
    p = t(27989);
t.d(
    h,
    {},
    {
        LaptopIcon: function (s) {
            let {
                    size: h = "md",
                    width: t,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                d = (0, p.J)(h),
                l = d?.width ?? t,
                w = d?.height ?? r;
            return (0, a.jsx)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M22 18a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h20ZM18 3a3 3 0 0 1 3 3v9.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5V6a3 3 0 0 1 3-3h12Z",
                    className: n,
                }),
            });
        },
    },
);
