e.r(l);
var s = e(477900);
e(582128);
var i = e(646514),
    h = e(996682),
    t = e(27989);
e.d(
    l,
    {},
    {
        BadgeIcon: function (a) {
            let {
                    size: l = "md",
                    width: e,
                    height: d,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = a,
                r = (0, t.J)(l),
                p = r?.width ?? e,
                w = r?.height ?? d;
            return (0, s.jsx)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M4.6 4.52A3 3 0 0 1 7.54 2H19.9a2 2 0 0 1 1.97 2.32l-2.46 15.16A3 3 0 0 1 16.45 22H4.1a2 2 0 0 1-1.97-2.32L4.59 4.52ZM9 5a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1Zm3.91 5.63a.97.97 0 0 0-1.82 0l-.34.93a2 2 0 0 1-1.19 1.19l-.93.34a.97.97 0 0 0 0 1.82l.93.34a2 2 0 0 1 1.19 1.19l.34.93a.97.97 0 0 0 1.82 0l.34-.93a2 2 0 0 1 1.19-1.19l.93-.34a.97.97 0 0 0 0-1.82l-.93-.34a2 2 0 0 1-1.19-1.19l-.34-.93Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
