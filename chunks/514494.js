h.r(t);
var i = h(477900);
h(582128);
var e = h(646514),
    r = h(996682),
    a = h(27989);
h.d(
    t,
    {},
    {
        ThemeGrayIcon: function (s) {
            let {
                    size: t = "md",
                    width: h,
                    height: c,
                    color: n = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = s,
                p = (0, a.J)(t),
                l = p?.width ?? h,
                w = p?.height ?? c;
            return (0, i.jsx)("svg", {
                ...(0, r.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M4.13 12.02a4 4 0 0 1 5.48-4.68A5.1 5.1 0 0 1 14 5c2.61 0 4.75 1.8 4.98 4.1A5 5 0 0 1 18 19H4.5a3.5 3.5 0 0 1-.37-6.98Z",
                    className: d,
                }),
            });
        },
    },
);
