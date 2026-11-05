a.r(s);
var e = a(477900);
a(582128);
var t = a(646514),
    i = a(996682),
    h = a(27989);
a.d(
    s,
    {},
    {
        VoiceBluetoothIcon: function (l) {
            let {
                    size: s = "md",
                    width: a,
                    height: o,
                    color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = l,
                p = (0, h.J)(s),
                r = p?.width ?? a,
                v = p?.height ?? o;
            return (0, e.jsxs)("svg", {
                ...(0, i.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, e.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3Z",
                        className: d,
                    }),
                    (0, e.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillRule: "evenodd",
                        d: "M19.53 6.47a.75.75 0 0 0-1.28.53v3.8l-2.76-2.37a.75.75 0 1 0-.98 1.14l3.42 2.93-3.42 2.93a.75.75 0 1 0 .98 1.14l2.76-2.37V18a.75.75 0 0 0 1.28.53l3-3a.75.75 0 0 0-.04-1.1l-2.25-1.93 2.25-1.93a.75.75 0 0 0 .04-1.1l-3-3Zm1.37 8.57-1.15-.98v2.13l1.15-1.15Zm-1.15-6.23v2.13l1.15-.98-1.15-1.15Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                ],
            });
        },
    },
);
