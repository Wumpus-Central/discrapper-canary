s.r(h);
var t = s(477900);
s(582128);
var i = s(646514),
    e = s(996682),
    c = s(27989);
s.d(
    h,
    {},
    {
        ScreenSlashIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: l,
                    color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...d
                } = a,
                o = (0, c.J)(h),
                p = o?.width ?? s,
                w = o?.height ?? l;
            return (0, t.jsx)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "m2.7 22.7 20-20a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4ZM13.2 16a.5.5 0 0 1-.35-.85l8.3-8.3a.5.5 0 0 1 .85.36V13a3 3 0 0 1-3 3h-5.8ZM17.15 2.85a.5.5 0 0 0-.36-.85H5a3 3 0 0 0-3 3v8a3 3 0 0 0 1.85 2.77c.17.07.36.02.49-.11l12.8-12.8ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
                    className: n,
                }),
            });
        },
    },
);
