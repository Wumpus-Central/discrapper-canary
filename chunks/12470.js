t.r(s);
var h = t(477900);
t(582128);
var i = t(646514),
    e = t(996682),
    n = t(27989);
t.d(
    s,
    {},
    {
        WindowReturnIcon: function (a) {
            let {
                    size: s = "md",
                    width: t,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: l = "",
                    ...d
                } = a,
                o = (0, n.J)(s),
                p = o?.width ?? t,
                w = o?.height ?? r;
            return (0, h.jsxs)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, h.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M9 22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l4.3-4.3a1 1 0 0 1 1.4 1.42L4.42 21H8a1 1 0 0 1 1 1Z",
                        className: l,
                    }),
                    (0, h.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M19 22a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6a1 1 0 1 0 2 0V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a1 1 0 1 0 0 2h6Z",
                        className: l,
                    }),
                ],
            });
        },
    },
);
