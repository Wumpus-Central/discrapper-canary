s.r(h);
var t = s(477900);
s(582128);
var i = s(646514),
    e = s(996682),
    l = s(27989);
s.d(
    h,
    {},
    {
        ChannelsFollowedIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: c,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...r
                } = a,
                d = (0, l.J)(h),
                v = d?.width ?? s,
                p = d?.height ?? c;
            return (0, t.jsx)("svg", {
                ...(0, e.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: v,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M14 10a1 1 0 1 1 0-2h3.59l-4.3-4.3a1 1 0 0 1 1.42-1.4L19 6.58V3a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6ZM4 2a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM15 14a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5ZM11 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.59l4.3 4.3a1 1 0 0 0 1.4-1.42L6.42 16H10a1 1 0 0 0 1-1Z",
                    className: o,
                }),
            });
        },
    },
);
