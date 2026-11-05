e.r(s);
var i = e(477900);
e(582128);
var t = e(646514),
    h = e(996682),
    l = e(27989);
e.d(
    s,
    {},
    {
        TranscriptOutlineIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: n,
                    color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...r
                } = a,
                p = (0, l.J)(s),
                o = p?.width ?? e,
                u = p?.height ?? n;
            return (0, i.jsxs)("svg", {
                ...(0, h.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillRule: "evenodd",
                        d: "M7 8h3a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2ZM17 16H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2ZM17 11H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M19 4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14Zm0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z",
                        className: d,
                    }),
                ],
            });
        },
    },
);
