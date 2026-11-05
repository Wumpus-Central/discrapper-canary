l.r(s);
var e = l(477900);
l(582128);
var t = l(646514),
    i = l(996682),
    c = l(27989);
l.d(
    s,
    {},
    {
        ReactionIcon: function (a) {
            let {
                    size: s = "md",
                    width: l,
                    height: h,
                    color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...r
                } = a,
                d = (0, c.J)(s),
                v = d?.width ?? l,
                w = d?.height ?? h;
            return (0, e.jsx)("svg", {
                ...(0, i.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: v,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, e.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
