e.r(s);
var l = e(477900);
e(582128);
var i = e(646514),
    c = e(996682),
    h = e(27989);
e.d(
    s,
    {},
    {
        ClipboardCheckIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: t,
                    color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                p = (0, h.J)(s),
                r = p?.width ?? e,
                v = p?.height ?? t;
            return (0, l.jsxs)("svg", {
                ...(0, c.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 5.5c0-.28-.23-.5-.5-.46A3 3 0 0 0 2 8v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-2.5-2.96c-.27-.04-.5.18-.5.46V6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-.5Zm11.7 6.8a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.29 4.3-4.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M17 5.5V6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1c.55 0 .98-.47 1.24-.96a2 2 0 0 1 3.52 0c.26.49.69.96 1.24.96h1a1 1 0 0 1 1 1v.5Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
