a.r(h);
var t = a(477900);
a(582128);
var i = a(646514),
    c = a(996682),
    e = a(27989);
a.d(
    h,
    {},
    {
        ExperimentalLootboxIcon: function (s) {
            let {
                    size: h = "md",
                    width: a,
                    height: o,
                    color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...p
                } = s,
                d = (0, e.J)(h),
                l = d?.width ?? a,
                w = d?.height ?? o;
            return (0, t.jsx)("svg", {
                ...(0, c.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M23 6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v4.5c0 .28.22.5.5.5h7c.22 0 .41-.14.5-.34.53-1.3 1.68-2.41 3-2.41s2.47 1.11 3 2.4c.09.2.28.35.5.35h7a.5.5 0 0 0 .5-.5V6ZM23 13.5a.5.5 0 0 0-.5-.5h-7c-.22 0-.41.14-.5.34-.53 1.3-1.68 2.41-3 2.41s-2.47-1.11-3-2.4a.54.54 0 0 0-.5-.35h-7a.5.5 0 0 0-.5.5V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-4.5Z",
                    className: n,
                }),
            });
        },
    },
);
