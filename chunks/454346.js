t.r(s);
var i = t(477900);
t(582128);
var e = t(646514),
    r = t(996682),
    c = t(27989);
t.d(
    s,
    {},
    {
        TwitchNeutralIcon: function (h) {
            let {
                    size: s = "md",
                    width: t,
                    height: l,
                    color: n = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: v = "",
                    ...a
                } = h,
                d = (0, c.J)(s),
                o = d?.width ?? t,
                p = d?.height ?? l;
            return (0, i.jsx)("svg", {
                ...(0, r.A)(a),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "m21.67 12-7.25 7.07h-3.23L7.17 23v-3.93H2.33V4.93L6.36 1h15.3v11Zm-14.5 2.36h3.62v2.75l2.82-2.75h3.22l3.23-3.15V2.57H7.16v11.79Zm6.04-9.04v4.72H11.6V5.32h1.6Zm4.43 4.72h-1.61V5.32h1.6v4.72Z",
                    className: v,
                }),
            });
        },
    },
);
