s.r(h);
var i = s(477900);
s(582128);
var t = s(646514),
    c = s(996682),
    e = s(27989);
s.d(
    h,
    {},
    {
        FlipVerticalIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: r,
                    color: l = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...p
                } = a,
                d = (0, e.J)(h),
                o = d?.width ?? s,
                v = d?.height ?? r;
            return (0, i.jsx)("svg", {
                ...(0, c.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    d: "M2 11a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2ZM2 19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4ZM3 10a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1ZM22 7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V7ZM2 4c0-1.1.9-2 2-2a1 1 0 1 1 0 2 1 1 0 0 1-2 0ZM20 2a1 1 0 1 0 0 2 1 1 0 1 0 2 0 2 2 0 0 0-2-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM14 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
                    className: n,
                }),
            });
        },
    },
);
