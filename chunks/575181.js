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
        ThemeLightIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...d
                } = a,
                o = (0, e.J)(h),
                p = o?.width ?? s,
                w = o?.height ?? r;
            return (0, t.jsx)("svg", {
                ...(0, l.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM19.78 4.22a1 1 0 0 1 0 1.42l-1.42 1.41a1 1 0 1 1-1.41-1.41l1.41-1.42a1 1 0 0 1 1.42 0ZM18.36 19.78a1 1 0 0 0 1.42-1.42l-1.42-1.41a1 1 0 0 0-1.41 1.41l1.41 1.42ZM23 12a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM13 20a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2ZM7.05 16.95a1 1 0 0 1 0 1.41l-1.41 1.42a1 1 0 0 1-1.42-1.42l1.42-1.41a1 1 0 0 1 1.41 0ZM5.64 7.05a1 1 0 0 0 1.41-1.41L5.64 4.22a1 1 0 1 0-1.42 1.42l1.42 1.41ZM5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
                    className: n,
                }),
            });
        },
    },
);
