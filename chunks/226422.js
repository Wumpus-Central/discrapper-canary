e.r(s);
var h = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    d = e(27989);
e.d(
    s,
    {},
    {
        TranscriptIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: l,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...c
                } = a,
                o = (0, d.J)(s),
                p = o?.width ?? e,
                w = o?.height ?? l;
            return (0, h.jsx)("svg", {
                ...(0, t.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2 4a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2H7Zm-1 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z",
                    clipRule: "evenodd",
                    className: r,
                }),
            });
        },
    },
);
