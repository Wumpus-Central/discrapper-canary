e.r(h);
var s = e(477900);
e(582128);
var a = e(646514),
    t = e(996682),
    i = e(27989);
e.d(
    h,
    {},
    {
        TextIcon: function (l) {
            let {
                    size: h = "md",
                    width: e,
                    height: c,
                    color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = l,
                r = (0, i.J)(h),
                p = r?.width ?? e,
                w = r?.height ?? c;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z",
                    clipRule: "evenodd",
                    className: d,
                }),
            });
        },
    },
);
