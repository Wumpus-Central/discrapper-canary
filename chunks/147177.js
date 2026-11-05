s.r(h);
var t = s(477900);
s(582128);
var i = s(646514),
    e = s(996682),
    n = s(27989);
s.d(
    h,
    {},
    {
        ChannelListRetryIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...l
                } = a,
                o = (0, n.J)(h),
                p = o?.width ?? s,
                w = o?.height ?? r;
            return (0, t.jsx)("svg", {
                ...(0, e.A)(l),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM19 16a3 3 0 1 0 1.98 5.25 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.24A3 3 0 0 0 19 16ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z",
                    className: d,
                }),
            });
        },
    },
);
