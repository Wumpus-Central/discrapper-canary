e.r(s);
var h = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    l = e(27989);
e.d(
    s,
    {},
    {
        WindowTopOutlineIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: d,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = a,
                p = (0, l.J)(s),
                r = p?.width ?? e,
                v = p?.height ?? d;
            return (0, h.jsxs)("svg", {
                ...(0, t.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, h.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M4 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v.18a1 1 0 1 0 2 0V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h.18a1 1 0 1 0 0-2H5a1 1 0 0 1-1-1V5Z",
                        className: o,
                    }),
                    (0, h.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M8 11a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-8Zm2 0a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8Z",
                        clipRule: "evenodd",
                        className: o,
                    }),
                ],
            });
        },
    },
);
