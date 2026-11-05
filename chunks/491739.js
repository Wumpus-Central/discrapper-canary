s.r(h);
var i = s(477900);
s(582128);
var t = s(646514),
    n = s(996682),
    e = s(27989);
s.d(
    h,
    {},
    {
        ChannelListMinusIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: r,
                    color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...l
                } = a,
                o = (0, e.J)(h),
                p = o?.width ?? s,
                w = o?.height ?? r;
            return (0, i.jsx)("svg", {
                ...(0, n.A)(l),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z",
                    className: d,
                }),
            });
        },
    },
);
