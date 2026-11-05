a.r(s);
var i = a(477900);
a(582128);
var t = a(646514),
    h = a(996682),
    l = a(27989);
a.d(
    s,
    {},
    {
        WalletIcon: function (e) {
            let {
                    size: s = "md",
                    width: a,
                    height: d,
                    color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = e,
                r = (0, l.J)(s),
                p = r?.width ?? a,
                w = r?.height ?? d;
            return (0, i.jsx)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M4 4a1 1 0 0 0 0 2h16a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 1 1 0 2H4Zm15.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
