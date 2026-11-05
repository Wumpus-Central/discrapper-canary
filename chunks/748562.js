t.r(h);
var a = t(477900);
t(582128);
var i = t(646514),
    e = t(996682),
    r = t(27989);
t.d(
    h,
    {},
    {
        TvIcon: function (s) {
            let {
                    size: h = "md",
                    width: t,
                    height: c,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = s,
                p = (0, r.J)(h),
                l = p?.width ?? t,
                w = p?.height ?? c;
            return (0, a.jsx)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M4 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4ZM6 20a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
                    className: d,
                }),
            });
        },
    },
);
