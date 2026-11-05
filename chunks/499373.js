i.r(h);
var t = i(477900);
i(582128);
var a = i(646514),
    e = i(996682),
    r = i(27989);
i.d(
    h,
    {},
    {
        PlusMediumIcon: function (s) {
            let {
                    size: h = "md",
                    width: i,
                    height: c,
                    color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...l
                } = s,
                o = (0, r.J)(h),
                p = o?.width ?? i,
                w = o?.height ?? c;
            return (0, t.jsx)("svg", {
                ...(0, e.A)(l),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    d: "M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z",
                    className: n,
                }),
            });
        },
    },
);
