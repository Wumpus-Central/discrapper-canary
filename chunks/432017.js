t.r(i);
var c = t(477900);
t(582128);
var h = t(646514),
    e = t(996682),
    r = t(27989);
t.d(
    i,
    {},
    {
        MusicIcon: function (s) {
            let {
                    size: i = "md",
                    width: t,
                    height: n,
                    color: a = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...l
                } = s,
                o = (0, r.J)(i),
                p = o?.width ?? t,
                w = o?.height ?? n;
            return (0, c.jsx)("svg", {
                ...(0, e.A)(l),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, c.jsx)("path", {
                    fill: "string" == typeof a ? a : a.css,
                    d: "M8.65 1.51A2 2 0 0 0 6 3.41v9.88A3.98 3.98 0 0 0 4.5 13C2.57 13 1 14.34 1 16s1.57 3 3.5 3S8 17.66 8 16V5.4l11 3.81v7.08a3.98 3.98 0 0 0-1.5-.29c-1.93 0-3.5 1.34-3.5 3s1.57 3 3.5 3 3.5-1.34 3.5-3V7.03c0-.74-.47-1.4-1.18-1.65L8.65 1.51Z",
                    className: d,
                }),
            });
        },
    },
);
