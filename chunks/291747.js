i.r(e);
var s = i(477900);
i(582128);
var a = i(646514),
    h = i(996682),
    t = i(27989);
i.d(
    e,
    {},
    {
        TimerIcon: function (l) {
            let {
                    size: e = "md",
                    width: i,
                    height: d,
                    color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...r
                } = l,
                o = (0, t.J)(e),
                p = o?.width ?? i,
                w = o?.height ?? d;
            return (0, s.jsx)("svg", {
                ...(0, h.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    fillRule: "evenodd",
                    d: "M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
