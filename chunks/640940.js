l.r(a);
var s = l(477900);
l(582128);
var i = l(646514),
    c = l(996682),
    d = l(27989);
l.d(
    a,
    {},
    {
        PaperClockIcon: function (e) {
            let {
                    size: a = "md",
                    width: l,
                    height: h,
                    color: t = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = e,
                p = (0, d.J)(a),
                r = p?.width ?? l,
                v = p?.height ?? h;
            return (0, s.jsxs)("svg", {
                ...(0, c.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, s.jsx)("path", {
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6.88c.37 0 .61-.38.5-.73a7 7 0 0 1-.37-2.7.53.53 0 0 0-.52-.57H6a1 1 0 1 1 0-2h6.36c.2 0 .37-.11.46-.28.3-.6.7-1.13 1.17-1.6.35-.37.11-1.12-.4-1.12H6a1 1 0 1 1 0-2h12a1 1 0 0 1 .88.52c.13.24.34.48.62.5.61.04 1.2.16 1.77.36.35.11.73-.13.73-.5V5a3 3 0 0 0-3-3H5Zm1 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H6Z",
                        fill: "string" == typeof t ? t : t.css,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, s.jsx)("path", {
                        d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-5-3a1 1 0 0 1 1 1v1.59l.7.7a1 1 0 1 1-1.4 1.42l-1-1A1 1 0 0 1 18 19v-2a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof t ? t : t.css,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
