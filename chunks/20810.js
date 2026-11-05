e.r(s);
var l = e(477900);
e(582128);
var h = e(646514),
    i = e(996682),
    t = e(27989);
e.d(
    s,
    {},
    {
        MobilePhoneXIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: d,
                    color: n = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = a,
                p = (0, t.J)(s),
                r = p?.width ?? e,
                v = p?.height ?? d;
            return (0, l.jsxs)("svg", {
                ...(0, i.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M8.3 6.3a1 1 0 0 1 1.4 0L12 8.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 10l2.3 2.3a1 1 0 0 1-1.42 1.4L12 11.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 10l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                        className: o,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8Zm3 18a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4Z",
                        clipRule: "evenodd",
                        className: o,
                    }),
                ],
            });
        },
    },
);
