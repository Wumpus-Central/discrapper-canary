t.r(h);
var i = t(477900);
t(582128);
var a = t(646514),
    e = t(996682),
    l = t(27989);
t.d(
    h,
    {},
    {
        PlusSmallIcon: function (s) {
            let {
                    size: h = "md",
                    width: t,
                    height: r,
                    color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...d
                } = s,
                o = (0, l.J)(h),
                p = o?.width ?? t,
                w = o?.height ?? r;
            return (0, i.jsx)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                    className: n,
                }),
            });
        },
    },
);
