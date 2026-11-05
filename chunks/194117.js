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
        ChannelListPlusIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: l = "",
                    ...d
                } = a,
                o = (0, n.J)(h),
                p = o?.width ?? s,
                v = o?.height ?? r;
            return (0, t.jsx)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM2 8a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 0 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H3Z",
                    fill: "string" == typeof c ? c : c.css,
                    className: l,
                }),
            });
        },
    },
);
