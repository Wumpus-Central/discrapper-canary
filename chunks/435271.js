a.r(h);
var t = a(477900);
a(582128);
var i = a(646514),
    e = a(996682),
    o = a(27989);
a.d(
    h,
    {},
    {
        BookIcon: function (s) {
            let {
                    size: h = "md",
                    width: a,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...d
                } = s,
                p = (0, o.J)(h),
                l = p?.width ?? a,
                w = p?.height ?? r;
            return (0, t.jsx)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M15 2a3 3 0 0 1 3 3v12H5.5a1.5 1.5 0 0 0 0 3h14a.5.5 0 0 0 .5-.5V5h1a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10Z",
                    className: n,
                }),
            });
        },
    },
);
