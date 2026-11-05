c.r(a);
var i = c(477900);
c(582128);
var s = c(646514),
    l = c(996682),
    t = c(27989);
c.d(
    a,
    {},
    {
        ExperimentalPineappleHouseIcon: function (e) {
            let {
                    size: a = "md",
                    width: c,
                    height: h,
                    color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...p
                } = e,
                o = (0, t.J)(a),
                r = o?.width ?? c,
                v = o?.height ?? h;
            return (0, i.jsx)("svg", {
                ...(0, l.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M15.27 3.08a1.12 1.12 0 0 1 1.5.47c.28.65.26 1.38.21 1.97a5.37 5.37 0 0 1-1.56 3.29c3.1.1 5.58 2.62 5.58 5.72V22a1 1 0 0 1-1 1h-5.1a.5.5 0 0 1-.5-.5v-5c0-1.34-1.1-2.43-2.44-2.43a2.43 2.43 0 0 0-2.44 2.42v5.01a.5.5 0 0 1-.5.5H4a1 1 0 0 1-1-1v-7.47c0-3.1 2.49-5.63 5.6-5.72a5.32 5.32 0 0 1-1.45-5.04c.15-.6.77-.94 1.36-.78a4.2 4.2 0 0 1 1.63 1.22l.01.02c.05-.28.1-.56.17-.84.26-.92.87-3 2.25-2.21.6.5.85 1.33 1.06 2l.06.2c.07.29.12.56.17.84.38-.44.83-.83 1.41-1.14Zm-6 9.66c0 .93-.76 1.68-1.69 1.68-.93 0-1.69-.75-1.69-1.68 0-.93.76-1.68 1.7-1.68.92 0 1.68.75 1.68 1.68Z",
                    clipRule: "evenodd",
                    className: d,
                }),
            });
        },
    },
);
