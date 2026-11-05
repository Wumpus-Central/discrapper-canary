s.r(h);
var t = s(477900);
s(582128);
var i = s(646514),
    l = s(996682),
    e = s(27989);
s.d(
    h,
    {},
    {
        WidgetsPlusIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: r,
                    color: v = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...d
                } = a,
                n = (0, e.J)(h),
                o = n?.width ?? s,
                p = n?.height ?? r;
            return (0, t.jsx)("svg", {
                ...(0, l.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof v ? v : v.css,
                    d: "M18.45 1.85a3 3 0 0 0-4.1 1.1l-1.5 2.6a3 3 0 0 0 1.1 4.1l2.6 1.5a3 3 0 0 0 4.1-1.1l1.5-2.6a3 3 0 0 0-1.1-4.1l-2.6-1.5ZM2 5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5ZM2 16a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                    className: c,
                }),
            });
        },
    },
);
