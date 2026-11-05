i.r(e);
var a = i(477900);
i(582128);
var h = i(646514),
    t = i(996682),
    l = i(27989);
i.d(
    e,
    {},
    {
        EmojiExpressionlessFaceIcon: function (s) {
            let {
                    size: e = "md",
                    width: i,
                    height: d,
                    color: n = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = s,
                r = (0, l.J)(e),
                p = r?.width ?? i,
                w = r?.height ?? d;
            return (0, a.jsx)("svg", {
                ...(0, t.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-4-8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-4-4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm12-1a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
