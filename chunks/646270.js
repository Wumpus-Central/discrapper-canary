h.r(e);
var i = h(477900);
h(582128);
var s = h(646514),
    t = h(996682),
    l = h(27989);
h.d(
    e,
    {},
    {
        MobilePhoneIcon: function (a) {
            let {
                    size: e = "md",
                    width: h,
                    height: d,
                    color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = a,
                r = (0, l.J)(e),
                p = r?.width ?? h,
                v = r?.height ?? d;
            return (0, i.jsx)("svg", {
                ...(0, t.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm5 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
