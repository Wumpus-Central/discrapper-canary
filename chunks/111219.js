s.r(h);
var l = s(477900);
s(582128);
var t = s(646514),
    i = s(996682),
    c = s(27989);
s.d(
    h,
    {},
    {
        DpadIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: e,
                    color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = a,
                p = (0, c.J)(h),
                o = p?.width ?? s,
                v = p?.height ?? e;
            return (0, l.jsx)("svg", {
                ...(0, i.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M14.41 8.09A2 2 0 0 0 15 6.67V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2.67a2 2 0 0 0 .59 1.42l1.7 1.7a1 1 0 0 0 1.42 0l1.7-1.7ZM8.1 9.59A2 2 0 0 0 6.67 9H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2.67a2 2 0 0 0 1.42-.59l1.7-1.7a1 1 0 0 0 0-1.42L8.1 9.6Zm1.5 6.32A2 2 0 0 0 9 17.33V20c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2.67a2 2 0 0 0-.59-1.42l-1.7-1.7a1 1 0 0 0-1.42 0l-1.7 1.7ZM17.33 9a2 2 0 0 0-1.42.59l-1.7 1.7a1 1 0 0 0 0 1.42l1.7 1.7a2 2 0 0 0 1.42.59H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2.67Z",
                    className: d,
                }),
            });
        },
    },
);
