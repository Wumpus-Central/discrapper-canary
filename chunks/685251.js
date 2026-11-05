h.r(s);
var t = h(477900);
h(582128);
var i = h(646514),
    e = h(996682),
    l = h(27989);
h.d(
    s,
    {},
    {
        WidgetsRetryIcon: function (a) {
            let {
                    size: s = "md",
                    width: h,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = a,
                o = (0, l.J)(s),
                p = o?.width ?? h,
                v = o?.height ?? r;
            return (0, t.jsx)("svg", {
                ...(0, e.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M18.45 1.85a3 3 0 0 0-4.1 1.1l-1.5 2.6a3 3 0 0 0 1.1 4.1l2.6 1.5a3 3 0 0 0 4.1-1.1l1.5-2.6a3 3 0 0 0-1.1-4.1l-2.6-1.5ZM2 5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5ZM2 16a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3ZM19 16a3 3 0 1 0 1.98 5.25 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.24A3 3 0 0 0 19 16Z",
                    className: d,
                }),
            });
        },
    },
);
